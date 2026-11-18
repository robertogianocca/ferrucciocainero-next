import "server-only";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * Reads and writes the JSON files in content/.
 *
 * In production every save is a commit on GitHub (Contents API), and Vercel
 * redeploys the site with the new data. In development without GITHUB_TOKEN
 * the files on disk are used instead.
 */

export type ContentFile = "content/events.json" | "content/attualita.json";

/** Someone else saved the same file in the meantime. */
export class ConflictError extends Error {}

function githubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  if (!token || !repo) return null;
  return { token, repo, branch: process.env.GITHUB_BRANCH || "main" };
}

function storage() {
  const github = githubConfig();
  if (github) return github;
  if (process.env.NODE_ENV === "development") return null;
  throw new Error("Backend not configured: set GITHUB_TOKEN and GITHUB_REPO");
}

// Files on disk are only used in development, so keep them out of the server bundle trace.
function localPath(file: ContentFile) {
  return path.join(/*turbopackIgnore: true*/ process.cwd(), file);
}

function serialize(data: unknown) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

type GitHubConfig = NonNullable<ReturnType<typeof githubConfig>>;

function githubRequest(github: GitHubConfig, file: ContentFile, init?: RequestInit) {
  const url = `https://api.github.com/repos/${github.repo}/contents/${file}`;
  return fetch(init?.method === "PUT" ? url : `${url}?ref=${encodeURIComponent(github.branch)}`, {
    ...init,
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${github.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

/** Latest version of a file, with the `sha` needed to save it again. */
export async function readContent<T>(file: ContentFile): Promise<{ data: T; sha: string }> {
  const github = storage();
  if (!github) {
    const text = await readFile(localPath(file), "utf8");
    return { data: JSON.parse(text), sha: createHash("sha1").update(text).digest("hex") };
  }
  const response = await githubRequest(github, file);
  if (!response.ok) throw new Error(`GitHub read failed for ${file}: ${response.status}`);
  const { content, sha } = (await response.json()) as { content: string; sha: string };
  return { data: JSON.parse(Buffer.from(content, "base64").toString("utf8")), sha };
}

/** Saves a file. Throws ConflictError if it changed since `sha` was read. */
export async function writeContent(file: ContentFile, data: unknown, sha: string, message: string) {
  const github = storage();
  if (!github) {
    const current = await readContent(file);
    if (current.sha !== sha) throw new ConflictError();
    await writeFile(localPath(file), serialize(data));
    return;
  }
  const response = await githubRequest(github, file, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: Buffer.from(serialize(data)).toString("base64"),
      sha,
      branch: github.branch,
    }),
  });
  if (response.status === 409) throw new ConflictError();
  if (!response.ok) throw new Error(`GitHub write failed for ${file}: ${response.status}`);
}

/**
 * Applies a change to the latest version of a file. If someone saved in between
 * (or GitHub still returns the previous version), it reads the file again and retries.
 */
export async function updateContent<T>(file: ContentFile, change: (data: T) => T, message: string) {
  for (let attempt = 1; ; attempt++) {
    const { data, sha } = await readContent<T>(file);
    try {
      await writeContent(file, change(data), sha, message);
      return;
    } catch (error) {
      if (!(error instanceof ConflictError) || attempt === 3) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
}
