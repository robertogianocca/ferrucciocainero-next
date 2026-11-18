import "server-only";
import { createHmac, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";

/** The two backend users. Their password hashes live in ADMIN_PASSWORD_<NAME> (see README). */
export const users = { karin: "Karin", ferruccio: "Ferruccio" } as const;

export type Username = keyof typeof users;
export type AdminUser = { username: Username; name: string };

const COOKIE = "fc_session";
const COOKIE_PATH = "/admin";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const scryptAsync = promisify(scrypt) as (password: string, salt: string, length: number) => Promise<Buffer>;

function isUsername(value: string): value is Username {
  return Object.hasOwn(users, value);
}

function sign(payload: string) {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET is missing or shorter than 32 characters");
  }
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function safeEqual(a: Buffer, b: Buffer) {
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Checks a login. The stored value is "salt:hash", as printed by `npm run hash-password`. */
export async function verifyPassword(name: string, password: string): Promise<Username | null> {
  const username = name.trim().toLowerCase();
  if (!isUsername(username)) return null;
  const [salt, hash] = process.env[`ADMIN_PASSWORD_${username.toUpperCase()}`]?.split(":") ?? [];
  if (!salt || !hash) return null;
  const expected = Buffer.from(hash, "base64url");
  const actual = await scryptAsync(password, salt, expected.length);
  return safeEqual(actual, expected) ? username : null;
}

export async function startSession(username: Username) {
  const payload = Buffer.from(
    JSON.stringify({ u: username, exp: Date.now() + MAX_AGE * 1000 }),
  ).toString("base64url");
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: COOKIE_PATH,
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  (await cookies()).set(COOKIE, "", { path: COOKIE_PATH, maxAge: 0 });
}

export async function getUser(): Promise<AdminUser | null> {
  await connection(); // the expiry check below compares with the current time
  const [payload, signature] = (await cookies()).get(COOKIE)?.value.split(".") ?? [];
  if (!payload || !signature || !safeEqual(Buffer.from(signature), Buffer.from(sign(payload)))) {
    return null;
  }
  try {
    const { u, exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof u !== "string" || !isUsername(u) || typeof exp !== "number" || exp < Date.now()) {
      return null;
    }
    return { username: u, name: users[u] };
  } catch {
    return null;
  }
}

/** Use in every backend page and Server Action: sends visitors without a session to the login. */
export async function requireUser() {
  const user = await getUser();
  if (!user) redirect("/admin/login/");
  return user;
}
