import fs from 'node:fs'
import path from 'node:path'
import { projects } from '@/content/projects'
import type { Project } from '@/content/types'
import { getRepo, type Repo } from './github'
import type { Locale } from './i18n'

export type NumberedProject = Project & { number: number; repoData: Repo | null; yearResolved: string | null }

/** All listed projects, numbered by their order in content/projects.ts, joined with GitHub data. */
export const listedProjects: NumberedProject[] = (projects ?? []).map((p, i) => {
  const repoData = getRepo(p.repo)
  return { ...p, number: i + 1, repoData, yearResolved: p.year ?? repoData?.createdAt.slice(0, 4) ?? null }
})

/** Only projects with a summary get their own page. */
export const projectPages = listedProjects.filter((p) => p.summary)

export const featuredProjects = listedProjects.filter((p) => p.featured && p.summary).slice(0, 5)

export const getProject = (slug: string) => projectPages.find((p) => p.slug === slug) ?? null

/** Markdown body from content/work/<lang>/<slug>.md, or null. */
export function projectBody(slug: string, lang: Locale) {
  const file = path.join(process.cwd(), 'content', 'work', lang, `${slug}.md`)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null
}

export const sourceUrl = (p: NumberedProject) => p.repoData?.url ?? null
