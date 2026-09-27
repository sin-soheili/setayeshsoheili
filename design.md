# Setayesh Soheili — Design System

> Single source of truth for the **visual design and information architecture** of setayesh-soheili.ir.
> The site implements the design of **manishj.dev** (live site, Sept 2026) — adapted to two languages,
> Setayesh's real content, and a static, database-free build. Content facts come from `AGENTS.md`
> (content-setup section), `content/`, and the public GitHub snapshot. This file never supplies facts.
> Every earlier design direction (checkerboard, pill header, editorial-rows variant) is deprecated.

## 0. Sources

- **Visual reference:** the live manishj.dev (home, `/work`, `/work/portfolio`, `/blog`, article pages), reverse-engineered from its rendered DOM and compiled CSS tokens.
- **The public repo / `./manishj.dev` clone is an older version** (3D "ManishOS" desktop + MongoDB/NextAuth admin). It does not match the live design and is not used for UI. It is git-ignored and excluded from the build.
- **Not ported:** admin panel, CMS, database, auth, API routes, contact form, WhatsApp link, résumé PDF, portrait. Data is edited by hand in `content/`.

## 1. Identity and content rules

- **Name:** ستایش سهیلی / Setayesh Soheili · **Title:** Software Engineer · **Persian SEO identity:** برنامه‌نویس و طراح وبسایت در گرگان.
- Never presented as agency, startup, consultant or "creative developer".
- **Nothing invented.** No availability badge, years-of-experience counter, testimonials, metrics or fake links. Hero stats are real counts only (projects listed, public repos, GitHub contributions in the last year, distinct technologies). Unknown data is `null` and its UI hides.
- Project covers are real screenshots, or a **typographic cover** (grid texture, domain, number, title) — never a mockup.

## 2. Tokens (from the reference CSS)

| Token | Light | Dark | Tailwind name |
| --- | --- | --- | --- |
| background | `#fafafa` | `#0a0a0b` | `bg` |
| elevated (header) | `#ffffff` | `#111113` | `elevated` |
| surface | `#f4f4f5` | `#141416` | `surface` |
| surface hover | `#ececed` | `#1c1c1f` | `surface-hover` |
| card | `#ffffff` | `#111113` | `card` |
| border | `#e4e4e7` | `#27272a` | `line` |
| border strong | `#d4d4d8` | `#3f3f46` | `line-strong` |
| border subtle | `#f0f0f2` | `#1c1c1f` | `line-subtle` |
| text | `#18181b` | `#fafafa` | `fg` |
| text secondary | `#52525b` | `#a1a1aa` | `secondary` |
| text muted | `#a1a1aa` | `#71717a` | `muted` |
| contribution levels 0–4 | zinc ramp | inverted ramp | `--c-contrib-N` |

- **Radius: 0 everywhere.** Shadows only `sm/md/lg` built on `--c-shadow`.
- **Fonts:** Geist (Latin UI), Geist Mono (labels, metadata, code), Vazirmatn (Persian; falls back per glyph).
- **Theme:** light by default; toggle stores `localStorage.theme`; applied before paint by an inline script (`html.dark`).
- **Motion tokens:** ease `cubic-bezier(.16,1,.3,1)`; fast `.15s`; reveal `.4s` with 8px rise; tickers 120s (horizontal) / 36s (vertical rail); command menu enter `.2s` scale .98→1. All disabled under `prefers-reduced-motion`.

## 3. Type scale

| Role | Size (mobile → desktop) | Weight / leading / tracking |
| --- | --- | --- |
| Kicker | 11px Geist Mono, UPPERCASE | 500 / 1.3 / 0.16em, `muted` |
| Home H1 (name) | 32 → 44 → 54 → 60 | 700 / 1.05 / −0.035em |
| Project H1 | 36 → 48 → 56 | 700 / 1.08 / −0.035em |
| Archive H1 (Work, Blog) | 30 → 36 → 48 | 700 / tight |
| Article H1 | 24 → 30 → 36 → 48 | 700 / 1.15 |
| Section H2 (home) | 28 → 34 → 40 | 700 / 1.1 / −0.025em |
| About H2 | 24 → 28 → 32 | 500 / 1.15 |
| Panel H2 (Markdown) | 20 → 24 | 700 / 1.25 / −0.02em, with `NN // SECTION` label |
| Lead | 17 → 19 → 21 (project), 15 → 16 (home) | 400 / 1.5 |
| Body (long-form) | 15 → 16 | 400 / 1.75 (fa 2.0), `secondary` |
| Nav | 13 | 500 / +0.02em |
| Chips | 12 mono (meta) · 11 sans (stack) | bordered, `surface` |

**Persian:** no letter-spacing, no uppercase, headings line-height ≥ 1.45, body 2.0; mono labels containing Persian switch to Vazirmatn automatically (see `globals.css`). Latin runs (tech names, URLs, numbers) are marked `dir="ltr"`.

## 4. Shell (every page)

```
┌ rail (lg+, start side) ┐┌ header (sticky, blurred) ─────────────────────────┐┌ dock (md+, end side) ┐
│ ■ PROJECTS ( 9 )       ││ [■] Name     Work Experience About Blog GitHub   ││ GitHub              │
│ vertical ticker of     ││                        [Ctrl+K] [FA|EN] [☾]       ││ Telegram            │
│ every project (thumb,  │└───────────────────────────────────────────────────┘│ Channel             │
│ tags, title, kind·year)│  main content (max 1280, gutters 20/32/48)         │ Résumé              │
└────────────────────────┘  footer (max 1120)                                 └─────────────────────┘
[ featured-project ticker — below lg ]
[ skill ticker — all sizes, fixed bottom ]
```

- **Header:** 56/64px, `elevated/80` + 12px blur, bottom border. Brand = square monogram (the reference uses a portrait) + name. Mobile: language switch, theme toggle, menu button.
- **Rail:** 230/260px, `bg/95` + blur, duplicated list scrolling vertically (pauses on hover/focus), mask-faded ends. In RTL it sits on the right.
- **Dock:** icon buttons with mono tooltips; only real channels (email/LinkedIn appear once they exist in `content/profile.ts`).
- **Tickers:** skills (38/42px) and, below `lg`, featured projects (78/86px) with thumbnails.
- **Footer:** hairline, `© year Name` (mono) + underlined links.
- **Command menu (⌘K / Ctrl+K):** sections, pages, projects, articles, actions (toggle theme, switch language), GitHub. Keyboard: ↑ ↓ Enter Esc; focus is trapped and restored.
- **Mobile menu:** full-screen sheet, numbered large links (`01 Work →`), "Direct channels" grid.

## 5. Pages

### Home (`/{lang}`)
1. **Hero** — kicker (fa: SEO identity) · name H1 · profile summary · buttons `View all projects ↗` (solid) + `Résumé →` (outline) · location marker · 4 real stats · desktop: 3D featured-project carousel (prev/next, dots, `01 / 04`, auto-advance 5s, paused on hover/focus/reduced motion).
2. **Experience** (`#experience`) — timeline: square node, period (mono), title · org, description.
3. **Capabilities** (`#capabilities`) — resume skill groups as cards: `01 // BACKEND`, `N tools`, item tiles. Action: `View GitHub profile ↗`.
4. **Activity** (`#activity`) — contribution calendar (real data, total, range, legend), repository cards (language, stars, last push), recent activity log (commits, releases, new repos — verbatim).
5. **About** (`#about`, narrow container) — kicker/H2/description; facts box (based in, focus, languages, currently + build month) in place of the reference portrait; lead + notes; **Contact** (`#contact`) channel cards.

### Work (`/{lang}/work`)
Archive header (kicker `ALL PROJECTS // ARCHIVE`, H1, intro, count badge) → 3-column card grid (cover 16:10, live-site overlay button, kind/tags line, title, summary, stack chips, `View case study →`, year) → "Earlier projects" grid.

### Project (`/{lang}/work/[slug]`) — modelled on `/work/portfolio`
Back link → kicker `KIND // DOMAIN` → H1 → lead → chips (role, year, stack) + `Live Preview ↗` / `Source Code ↗` (only real) → framed media (real screenshot only) → grid: sticky aside (Project Outline with active section, Links, Repository facts from GitHub) + card panel with the project's own Markdown sections (`NN // SECTION` at the end of each heading line) and optional Screenshots section → related writing → pager (`← Previous Project` · `Next Project →` or `Contact → Get in touch`).
Sections are **not** a fixed template: each project's `##` headings define them (client: Problem/Context/Role/Solution…; open source: What it is/Architecture/Features/Status…; experiment: Motivation/Approach/What worked…).

### Blog (`/{lang}/blog`)
Archive header (`WRITING // NOTES`, count) → 3-column cards: `0N //`, FEATURED badge, reading time, title, description, tags, `Read ↗`. Empty state: dashed box "Nothing published yet."

### Article (`/{lang}/blog/[slug]`)
Back link → kicker `ARTICLE // CATEGORY` → H1 → description → meta row (calendar, clock, tag icons) → sticky aside (Article Outline incl. H3, Article Details, Related project, Share) + card panel (`NN // SECTION` label above each H2; code blocks with language bar + COPY; square bullets; tables scroll) → `Previous Note` / `Next Note` cards.

### Resume (`/{lang}/resume`)
Archive header + print button → Experience timeline → Education (when verified) → Capabilities cards → Languages → Certificates (when present). Print stylesheet hides the chrome so the page replaces a PDF.

## 6. Interaction

Hover: border → `line-strong`, background → `surface-hover`, arrows nudge 2–4px (direction-aware), thumbnails scale 1.02–1.05. Scroll reveal on sections/cards (`[data-reveal]`, only when JS runs). No page loaders, parallax, WebGL or cursor effects.

## 7. RTL / LTR

`<html lang dir>` per route; logical properties throughout (`ps/pe`, `start/end`, `border-s/e`); rail and dock swap sides; directional arrows mirror, `↗` does not; tickers, calendar and carousel run LTR internally; the language switch keeps the current route (blog posts via `translationSlug`).

## 8. Accessibility

Skip link; visible focus ring (`--c-focus`); one H1 per page; dialogs (`role=dialog`, `aria-modal`, Esc, focus restore); carousel region with labelled controls; duplicated ticker items are `aria-hidden`; touch targets ≥ 40px. Note: the reference's `muted` (#a1a1aa) is below 4.5:1 for small text — kept for fidelity; revisit if strict WCAG AA is required.

## 9. SEO

Unique title/description/canonical/hreflang (fa, en, x-default) and OG/Twitter per route; `Person` + `WebSite` JSON-LD on home, `SoftwareSourceCode`/`CreativeWork` on projects, `BlogPosting` on articles; sitemap of all public routes; OG image in the same monochrome system (Latin only). Local phrases appear naturally (fa kicker, titles, descriptions, About, Person data).

## 10. Open content questions (TODO)

Fadak role split and year · Brick/CatSync years and visuals · Scopick description · Education · email · LinkedIn · confirm Steganography as CS50 coursework · canonical ChatPack repo (PyPI metadata points to `thenewbiebackpack/chatpack`).
