import { Marked } from 'marked'

export type Heading = { id: string; text: string; depth: 2 | 3; number: number | null }

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const stripTags = (s: string) => s.replace(/<[^>]+>/g, '')

const slugify = (s: string) =>
  stripTags(s)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '') || 'section'

const COPY_ICON =
  '<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'

type Options = {
  /** Localized word for the "01 // SECTION" labels. */
  sectionLabel: string
  copyLabel: string
  /** First section number (continues numbering after sections rendered elsewhere). */
  startAt?: number
}

/**
 * Markdown → HTML at build time (trusted input: the site owner's own files).
 * Output matches the design system's long-form markup (see `.md` in globals.css).
 */
export function renderMarkdown(source: string, { sectionLabel, copyLabel, startAt = 1 }: Options) {
  const headings: Heading[] = []
  const used = new Map<string, number>()
  let section = startAt - 1

  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens)
        const level = Math.min(Math.max(depth, 2), 4)
        const base = slugify(text)
        const n = used.get(base) ?? 0
        used.set(base, n + 1)
        const id = n ? `${base}-${n}` : base
        if (level === 2) {
          section += 1
          const num = String(section).padStart(2, '0')
          headings.push({ id, text: stripTags(inner), depth: 2, number: section })
          return `<h2 id="${id}"><span class="md-label" dir="ltr">${num} // ${escapeHtml(sectionLabel)}</span><span>${inner}</span></h2>\n`
        }
        if (level === 3) headings.push({ id, text: stripTags(inner), depth: 3, number: null })
        return `<h${level} id="${id}">${inner}</h${level}>\n`
      },
      code({ text, lang }) {
        const label = (lang || 'text').split(/\s/)[0]
        return (
          `<div class="md-code"><div class="md-code-head"><span>${escapeHtml(label)}</span>` +
          `<button type="button" data-copy>${COPY_ICON}<span>${escapeHtml(copyLabel)}</span></button></div>` +
          `<pre><code>${escapeHtml(text)}</code></pre></div>\n`
        )
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens)
        const external = /^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : ''
        return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ''}${external}>${inner}</a>`
      },
      image({ href, title, text }) {
        const img = `<img src="${escapeHtml(href)}" alt="${escapeHtml(text)}" loading="lazy" decoding="async">`
        return `<figure>${img}${title ? `<figcaption>${escapeHtml(title)}</figcaption>` : ''}</figure>`
      },
    },
  })

  const html = (marked.parse(source, { async: false }) as string)
    .replace(/<table>/g, '<div class="md-table"><table>')
    .replace(/<\/table>/g, '</table></div>')

  return { html, headings, sections: section - (startAt - 1) }
}

export const readingMinutes = (source: string) => Math.max(1, Math.round(source.split(/\s+/).filter(Boolean).length / 200))
