import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { locales, type Locale } from './i18n'
import { readingMinutes } from './markdown'

/**
 * Posts live in content/blog/<lang>/<slug>.md. See content/blog/README.md for the frontmatter.
 * Drafts (`draft: true`) only appear in `next dev` or when built with SHOW_DRAFTS=1.
 */
export type Post = {
  lang: Locale
  slug: string
  /** Chronological position within its language, oldest = 1. */
  number: number
  title: string
  description: string
  date: string
  updatedAt: string | null
  category: string
  tags: string[]
  readingTime: number
  translationSlug: string | null
  coverImage: { src: string; alt: string } | null
  /** Slug of a related project in content/projects.ts. */
  project: string | null
  featured: boolean
  draft: boolean
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const showDrafts = process.env.NODE_ENV === 'development' || process.env.SHOW_DRAFTS === '1'

const toIsoDate = (value: unknown) => {
  if (!value) return null
  const d = value instanceof Date ? value : new Date(String(value))
  if (Number.isNaN(d.getTime())) throw new Error(`Invalid date in blog frontmatter: ${String(value)}`)
  return d.toISOString().slice(0, 10)
}

function readPost(lang: Locale, file: string): Omit<Post, 'number'> {
  const slug = file.replace(/\.md$/, '')
  const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, lang, file), 'utf8'))
  const required = (key: string) => {
    if (!data[key]) throw new Error(`content/blog/${lang}/${file}: missing "${key}" in frontmatter`)
    return String(data[key])
  }

  return {
    lang,
    slug,
    title: required('title'),
    description: required('description'),
    date: toIsoDate(required('date'))!,
    updatedAt: toIsoDate(data.updatedAt),
    category: required('category'),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: Number(data.readingTime) || readingMinutes(content),
    translationSlug: data.translationSlug ? String(data.translationSlug) : null,
    coverImage: data.coverImage ? { src: String(data.coverImage), alt: String(data.coverAlt ?? '') } : null,
    project: data.project ? String(data.project) : null,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    content,
  }
}

const cache = new Map<Locale, Post[]>()

/** Newest first. */
export function getPosts(lang: Locale): Post[] {
  if (cache.has(lang)) return cache.get(lang)!
  const dir = path.join(BLOG_DIR, lang)
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.md')) : []
  const posts = files
    .map((f) => readPost(lang, f))
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((p, i) => ({ ...p, number: i + 1 }))
    .reverse()
  cache.set(lang, posts)
  return posts
}

export const getPost = (lang: Locale, slug: string) => getPosts(lang).find((p) => p.slug === slug) ?? null

/** Slug of the same post in the other language, only if it actually exists. */
export function translationOf(post: Post, target: Locale) {
  if (!post.translationSlug || target === post.lang) return null
  return getPost(target, post.translationSlug)?.slug ?? null
}

/** "fa/slug" → "en-slug" map used by the language switch to keep readers on the same article. */
export function blogTranslationMap() {
  const map: Record<string, string> = {}
  for (const lang of locales) {
    for (const post of getPosts(lang)) {
      for (const target of locales) {
        const t = translationOf(post, target)
        if (t) map[`${lang}/${post.slug}`] = t
      }
    }
  }
  return map
}
