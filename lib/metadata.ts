import type { Metadata } from 'next'
import { profile } from '@/content/profile'
import type { Locale, Localized } from './i18n'
import { SITE_URL } from './site'

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
  return {
    metadataBase: new URL(SITE_URL),
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      url,
      title,
      description,
      siteName: profile.name[lang],
      locale: lang === 'fa' ? 'fa_IR' : 'en_US',
      ...(article
        ? { type: 'article', authors: [`${SITE_URL}/${lang}/about`], ...article }
        : { type: 'website' }),
      ...(image && { images: [{ url: image.url, alt: image.alt }] }),
    },
    twitter: { card: 'summary_large_image', title, description, ...(image && { images: [image.url] }) },
  }
}
