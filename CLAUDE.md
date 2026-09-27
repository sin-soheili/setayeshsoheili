# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- `design.md` — source of truth for visual design and IA (an implementation of the live manishj.dev design, bilingual).
- `AGENTS.md` — source of truth for **content** only (its old "Design System" section is deprecated). Never invent facts; flag gaps. `/content-check` audits copy.
- `manishj.dev/` is a reference clone of an **older** version of that site (3D desktop + MongoDB admin). Don't import from it; it is git-ignored and excluded from tsconfig.

## Architecture

- Next.js 16 App Router, `output: 'export'`, deployed as an assets-only Cloudflare Worker (`wrangler.jsonc` serves `./out`). No server code, DB, CMS or API routes. `npm run build` = `next build && next-image-export-optimizer`; `npm run preview` / `npm run deploy` build first.
- Images: put files in `public/images/…` and render them with `ExportedImage` from `next-image-export-optimizer` (responsive WebP generated at build). Plain `<img>` only inside Markdown.
- Routes per language: `/{fa,en}`, `/work`, `/work/[slug]`, `/blog`, `/blog/[slug]`, `/resume`. About, Experience and Contact are homepage sections (`#about`, `#experience`, `#contact`). `app/[lang]/layout.tsx` is the root layout and renders the whole shell (header, rail, dock, tickers, footer, command menu).
- SPA: internal links must be `next/link` (or `router.push`); client components can't receive functions from server components — precompute strings.
- Styling: Tailwind v4 with tokens in `app/globals.css` (`bg`, `card`, `surface`, `line`, `line-strong`, `fg`, `secondary`, `muted`; dark via `html.dark`). Radius is 0. Use logical properties and `rtl:`/`ltr:`; mark Latin runs `dir="ltr"`. Markdown bodies use the `.md` styles (`md--project` / `md--article`).

## Content (edited by hand)

- `content/profile.ts`, `content/resume.ts`, `content/certificates.ts`, `content/copy.ts` (all UI strings, fa + en).
- Projects: metadata in `content/projects.ts`; body sections in `content/work/<fa|en>/<slug>.md` (`##` headings become numbered sections + outline). A project without `summary` is listed but gets no page.
- Blog: `content/blog/<fa|en>/<slug>.md` (frontmatter in `content/blog/README.md`); `draft: true` shows only in dev or with `SHOW_DRAFTS=1`.
- GitHub data: `content/github.json`, refreshed with `npm run sync:github` (repos, releases, commits, contribution calendar). Show it verbatim; never fabricate activity.
