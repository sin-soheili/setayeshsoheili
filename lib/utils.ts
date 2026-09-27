export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ')

export const pad = (n: number) => String(n).padStart(2, '0')

export const hasItems = <T,>(list: T[] | null | undefined): list is T[] => Array.isArray(list) && list.length > 0

export const displayUrl = (href: string) =>
  href.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href)

export function neighbours<T>(list: T[], item: T) {
  const i = list.indexOf(item)
  return { previous: list[i - 1] ?? null, next: list[i + 1] ?? null }
}
