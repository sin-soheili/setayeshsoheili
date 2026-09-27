export const locales = ['fa', 'en'] as const
export type Locale = (typeof locales)[number]
export type Localized<T = string> = Record<Locale, T>

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

export const dirOf = (locale: Locale) => (locale === 'fa' ? 'rtl' : 'ltr')
export const otherLocale = (locale: Locale): Locale => (locale === 'fa' ? 'en' : 'fa')

/** "2026.09.20" — Jalali for Persian, Gregorian for English, always Latin digits (mono metadata). */
export function formatDateShort(iso: string, lang: Locale) {
  const parts = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-nu-latn' : 'en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(iso))
  const get = (type: string) => parts.find((p) => p.type === type)?.value
  return `${get('year')}.${get('month')}.${get('day')}`
}

export function formatDateLong(iso: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { dateStyle: 'long' }).format(new Date(iso))
}
