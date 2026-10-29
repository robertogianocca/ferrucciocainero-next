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
| `src/app/` | One route per page of the original site (`/calendario/`, `/attivita/teatro/`, `/media/foto/`, …), plus `sitemap.ts`, `robots.ts` and redirects for legacy WordPress URLs in `next.config.ts` |
| `src/components/` | Header, navigation, footer, page title band, rows/separators, video embed, download button, event calendar |
| `src/data/` | Site settings and menu (`site.ts`), calendar events (`events.ts`), photos and videos (`media.ts`) |
| `public/images/` | Images downloaded from the original site |
| `public/downloads/` | CVs, press reviews and the VeranstalterBox material |

### Updating content

- **Calendar:** add an entry to `src/data/events.ts`. Past dates move to the archive automatically (the page is revalidated every hour).
- **Photos and videos:** edit `src/data/media.ts`.

### To do before going live

- The podcast MP3s (about 50 MB each) are still served by the old WordPress media library (`mediaBaseUrl` in `src/data/site.ts`). Move them to a CDN or storage bucket before the old site is switched off.
