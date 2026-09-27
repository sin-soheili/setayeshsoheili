import { notFound } from 'next/navigation'
import { copy } from '@/content/copy'
import { skills } from '@/content/resume'
import { isLocale, locales } from './i18n'

export type LangParams = { params: Promise<{ lang: string }> }

export const langParams = () => locales.map((lang) => ({ lang }))

export async function resolveLang(params: Promise<{ lang: string }>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return { lang, t: copy[lang] }
}

/** Every distinct technology from the resume, in order. */
export const allSkills = [...new Set(skills.flatMap((g) => g.items))]
