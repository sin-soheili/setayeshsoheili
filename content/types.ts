import type { Localized } from '@/lib/i18n'

// Optional fields may be omitted or set to null; the UI hides anything empty.

export type ProjectKind = 'open-source' | 'client' | 'team' | 'experiment' | 'coursework'

export type Project = {
  slug: string
  title: string
  /** Kicker: `KIND // DOMAIN`. Leave kind out when it isn't confirmed. */
  kind?: ProjectKind | null
  domain: string
  /** `selected` = main archive, `earlier` = small/learning repos. */
  group: 'selected' | 'earlier'
  /** Shown in the homepage "Selected work" list (max 5). */
  featured?: boolean
  /** Category line, e.g. ['CRM', 'Website']. */
  tags: string[]
  stack?: string[] | null
  /** Lead sentence. Without it the project is listed but gets no page. */
  summary?: Localized | null
  role?: Localized | null
  /** Falls back to the GitHub repo's creation year. */
  year?: string | null
  status?: Localized | null
  /** Public GitHub repo name under sin-soheili → Source link + Repository box (data from content/github.json). */
  repo?: string | null
  /** Real deployment URL → "Live Preview" button. Never a placeholder. */
  live?: string | null
  /** Other real external links (package page, demo video). */
  links?: { label: Localized; href: string }[] | null
  /** One framed visual under the header — real screenshots only. */
  media?: ProjectImage & { caption?: Localized } | null
  /** Extra real screenshots, shown as a numbered section after the Markdown body. */
  gallery?: ProjectImage[] | null
}

/** Files under /public/images are optimized at build time. */
export type ProjectImage = { src: string; alt: Localized; width: number; height: number }

export type Certificate = {
  title: Localized
  issuer: string
  year?: string | null
  href?: string | null
}

export type Experience = {
  title: string
  org?: Localized | null
  period: Localized
  description: Localized
}

export type Education = {
  degree: Localized
  institution: Localized
  location?: Localized | null
  period?: string | null
}

export type SkillGroup = { label: string; items: string[] }

export type Language = { name: Localized; level: Localized }

export type ContactLink = { label: Localized; href: string | null }
