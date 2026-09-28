import type { Metadata } from 'next'
import { profile, seo } from '@/content/profile'
import type { Locale, Localized } from './i18n'
import { SITE_URL } from './site'

export const titleTemplate: Localized<string> = { fa: '%s | ستایش سهیلی', en: '%s — Setayesh Soheili' }

type PageMeta = {
  lang: Locale
  /** Path after the locale, e.g. "" or "/work/fadak". */
  path: string
  title: string
  description: string
  /** Equivalent path per locale; defaults to the same path. `null` = no translation. */
  alternates?: Partial<Localized<string | null>>
  absoluteTitle?: boolean
  article?: { publishedTime: string; modifiedTime?: string; tags?: string[] }
  image?: { url: string; alt: string } | null
}

export function pageMetadata({ lang, path, title, description, alternates, absoluteTitle, article, image }: PageMeta): Metadata {
  const paths: Localized<string | null> = { fa: path, en: path, ...alternates, [lang]: path }
  const languages: Record<string, string> = {}
  if (paths.fa !== null) languages.fa = `/fa${paths.fa}`
  if (paths.en !== null) languages.en = `/en${paths.en}`
  languages['x-default'] = languages.en ?? languages.fa

  const url = `/${lang}${path}`
  // Keep the name in share titles too (the <title> template doesn't apply to og/twitter).
  const fullTitle = absoluteTitle ? title : titleTemplate[lang].replace('%s', title)
  // A page-level openGraph replaces the segment's opengraph-image, so fall back to it explicitly.
  const img = image ?? { url: `/${lang}/opengraph-image`, alt: seo[lang].title }
  return {
    metadataBase: new URL(SITE_URL),
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      url,
      title: fullTitle,
      description,
      siteName: profile.name[lang],
      locale: lang === 'fa' ? 'fa_IR' : 'en_US',
      ...(article
        ? { type: 'article', authors: [`${SITE_URL}/${lang}`], ...article }
        : { type: 'website' }),
      images: [{ url: img.url, alt: img.alt }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [img.url] },
  }
}
