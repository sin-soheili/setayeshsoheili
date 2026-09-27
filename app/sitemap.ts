import type { MetadataRoute } from 'next'
import { getPosts, translationOf } from '@/lib/blog'
import { locales, otherLocale } from '@/lib/i18n'
import { projectPages } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

type Entry = MetadataRoute.Sitemap[number]

const shared = (path: string, priority: number, lastModified?: string): Entry[] =>
  locales.map((lang) => ({
    url: `${SITE_URL}/${lang}${path}`,
    lastModified: lastModified ?? new Date(),
    priority: lang === 'fa' ? priority : priority * 0.9,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])) },
  }))

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: Entry[] = locales.flatMap((lang) =>
    getPosts(lang).map((post) => {
      const translation = translationOf(post, otherLocale(lang))
      const languages: Record<string, string> = { [lang]: `${SITE_URL}/${lang}/blog/${post.slug}` }
      if (translation) languages[otherLocale(lang)] = `${SITE_URL}/${otherLocale(lang)}/blog/${translation}`
      return {
        url: languages[lang],
        lastModified: post.updatedAt ?? post.date,
        priority: 0.7,
        alternates: { languages },
      }
    }),
  )

  return [
    ...shared('', 1),
    ...shared('/work', 0.8),
    ...projectPages.flatMap((p) => shared(`/work/${p.slug}`, 0.7)),
    ...shared('/blog', 0.8),
    ...posts,
    ...shared('/resume', 0.8),
  ]
}
