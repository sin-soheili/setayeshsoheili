import { links, profile, seo } from '@/content/profile'
import type { Post } from './blog'
import type { NumberedProject } from './projects'
import { otherLocale, type Locale } from './i18n'
import { SITE_URL } from './site'

export const PERSON_ID = `${SITE_URL}/#person`

const sameAs = links.map((l) => l.href).filter((href): href is string => !!href?.startsWith('http'))

export const personJsonLd = (lang: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: profile.name[lang],
  alternateName: profile.name[otherLocale(lang)],
  jobTitle: profile.title,
  description: profile.summary[lang],
  url: `${SITE_URL}/${lang}`,
  homeLocation: { '@type': 'Place', name: 'Gorgan, Iran', address: { '@type': 'PostalAddress', addressLocality: 'Gorgan', addressCountry: 'IR' } },
  knowsAbout: profile.knowsAbout,
  knowsLanguage: ['fa', 'en'],
  sameAs,
})

/** Tells Google the homepage is about the person (name searches → this site). */
export const profilePageJsonLd = (lang: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/${lang}`,
  inLanguage: lang,
  mainEntity: personJsonLd(lang),
})

export const websiteJsonLd = (lang: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: profile.name[lang],
  description: seo[lang].description,
  url: `${SITE_URL}/${lang}`,
  inLanguage: lang,
  publisher: { '@id': PERSON_ID },
})

const author = (lang: Locale) => ({ '@type': 'Person', '@id': PERSON_ID, name: profile.name[lang], url: `${SITE_URL}/${lang}` })

export const articleJsonLd = (post: Post) => {
  const url = `${SITE_URL}/${post.lang}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    inLanguage: post.lang,
    keywords: post.tags.join(', ') || undefined,
    articleSection: post.category,
    author: author(post.lang),
    publisher: author(post.lang),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    ...(post.coverImage && { image: `${SITE_URL}${post.coverImage.src}` }),
  }
}

/** SoftwareSourceCode for projects with a public repo, CreativeWork otherwise. */
export const projectJsonLd = (project: NumberedProject, lang: Locale) => ({
  '@context': 'https://schema.org',
  '@type': project.repoData ? 'SoftwareSourceCode' : 'CreativeWork',
  name: project.title,
  description: project.summary?.[lang],
  keywords: [...project.tags, ...(project.stack ?? [])].join(', '),
  url: `${SITE_URL}/${lang}/work/${project.slug}`,
  inLanguage: lang,
  ...(project.repoData && {
    codeRepository: project.repoData.url,
    programmingLanguage: project.repoData.language ?? undefined,
    dateCreated: project.repoData.createdAt.slice(0, 10),
    dateModified: project.repoData.pushedAt.slice(0, 10),
  }),
  ...(project.media && { image: `${SITE_URL}${project.media.src}` }),
  // contributor, not creator: some projects are team work and roles aren't finalized.
  contributor: author(lang),
})
