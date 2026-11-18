# ferrucciocainero.ch – Next.js

Rebuild of [ferrucciocainero.ch](https://www.ferrucciocainero.ch) (previously WordPress + BeTheme) with Next.js (App Router), TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

| Path | Content |
| --- | --- |
| `src/app/(site)/` | One route per page of the original site (`/calendario/`, `/attivita/teatro/`, `/media/foto/`, …). `sitemap.ts`, `robots.ts` sit in `src/app/`, redirects for legacy WordPress URLs in `next.config.ts` |
| `src/app/admin/` | The backend (see below) |
| `src/components/` | Header, navigation, footer, page title band, rows/separators, video embed, download button, event calendar, rich text; `admin/` holds the backend forms and editor |
| `content/` | Calendar dates (`events.json`) and the «Attualità» text on the home page (`attualita.json`), edited in the backend |
| `src/data/` | Site settings and menu (`site.ts`), typed access to `content/` (`events.ts`, `attualita.ts`), photos and videos (`media.ts`) |
| `public/images/` | Images downloaded from the original site |
| `public/downloads/` | CVs, press reviews and the VeranstalterBox material |

### Updating content

- **Calendar and «Attualità»:** in the backend at `/admin/`. Past dates disappear from the calendar automatically (the page is revalidated every hour).
- **Photos and videos:** edit `src/data/media.ts`.

## Backend (`/admin/`)

Karin and Ferruccio log in at `/admin/` with their name and password and can edit the calendar dates and the «Attualità» text (mini editor: bold, italic, links, lists).

There is no database. Every save is a commit to `content/*.json` on GitHub through the GitHub API, and Vercel redeploys the site, so changes are online after 1–2 minutes. The commit message says who changed what, and any change can be undone from the Git history.

> Because the backend commits to `main`, always run `git pull` before working on the code.

### Setup on Vercel

1. Make sure the Vercel project deploys `main` from this repository.
2. Create a [fine-grained GitHub token](https://github.com/settings/personal-access-tokens/new) with the **GitHub account that is connected to Vercel**, limited to this repository, with the permission *Contents: Read and write*. (On the Hobby plan Vercel can block deployments of commits by other authors; commits made with the token are authored by the token's account.)
3. Generate a password hash for each user with `npm run hash-password`.
4. In Vercel → Project → Settings → Environment Variables, set the variables listed in `.env.example`: `SESSION_SECRET`, `ADMIN_PASSWORD_KARIN`, `ADMIN_PASSWORD_FERRUCCIO`, `GITHUB_TOKEN`, `GITHUB_REPO`, `GITHUB_BRANCH`. Then redeploy.

To change a password, generate a new hash, replace it in Vercel and redeploy.

### Local development

Copy `.env.example` to `.env.local` and fill in `SESSION_SECRET` and the two password hashes. Without `GITHUB_TOKEN`, `npm run dev` saves straight to the files in `content/`.

### To do before going live

- The podcast MP3s (about 50 MB each) are still served by the old WordPress media library (`mediaBaseUrl` in `src/data/site.ts`). Move them to a CDN or storage bucket before the old site is switched off.
