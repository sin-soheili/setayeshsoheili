import snapshot from '@/content/github.json'

export type Repo = {
  name: string
  url: string
  description: string | null
  language: string | null
  stars: number
  forks: number
  license: string | null
  homepage: string | null
  topics: string[]
  createdAt: string
  pushedAt: string
  latestRelease: { tag: string; name: string; publishedAt: string; url: string } | null
}

export type ActivityEvent = { type: 'repo' | 'release' | 'commit'; repo: string; date: string; text: string | null; url: string }
export type ContributionDay = { date: string; level: number; count: number }

/** Snapshot of public GitHub data — refresh with `npm run sync:github`. */
export const github = snapshot as {
  user: string
  profileUrl: string
  fetchedAt: string
  repos: Repo[]
  events: ActivityEvent[]
  contributions: { total: number; days: ContributionDay[] }
}

export const getRepo = (name?: string | null) => (name ? (github.repos.find((r) => r.name === name) ?? null) : null)

export const totalStars = github.repos.reduce((n, r) => n + r.stars, 0)

/** Repos ordered like GitHub "pinned": most starred, then most recently pushed. */
export const pinnedRepos = (limit = 3) =>
  [...github.repos].sort((a, b) => b.stars - a.stars || b.pushedAt.localeCompare(a.pushedAt)).slice(0, limit)

/** Calendar as week columns (Sunday-first), like GitHub. */
export function contributionWeeks() {
  const weeks: (ContributionDay | null)[][] = []
  let week: (ContributionDay | null)[] = []
  for (const day of github.contributions.days) {
    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay()
    if (weekday === 0 && week.length) {
      weeks.push(week)
      week = []
    }
    if (!week.length) for (let i = 0; i < weekday; i++) week.push(null)
    week.push(day)
  }
  if (week.length) weeks.push(week)
  return weeks
}
