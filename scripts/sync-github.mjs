// Refreshes content/github.json from the public GitHub API.
// Usage: npm run sync:github   (set GITHUB_TOKEN to avoid the 60 req/h anonymous limit)
import fs from 'node:fs'

const USER = 'sin-soheili'
const EXCLUDE = new Set([USER]) // profile README repo
const OUT = new URL('../content/github.json', import.meta.url)

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': `${USER}-site` }
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

async function get(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${path}`)
  return res.json()
}

const firstLine = (s) => (s ?? '').split('\n')[0].trim()

const repos = (await get(`/users/${USER}/repos?per_page=100&sort=pushed`)).filter((r) => !r.fork && !EXCLUDE.has(r.name))
const out = []
const events = []

for (const r of repos) {
  const [releases, commits] = await Promise.all([
    get(`/repos/${USER}/${r.name}/releases?per_page=10`),
    get(`/repos/${USER}/${r.name}/commits?per_page=20`),
  ])

  out.push({
    name: r.name,
    url: r.html_url,
    description: r.description ?? null,
    language: r.language ?? null,
    stars: r.stargazers_count,
    forks: r.forks_count,
    license: r.license?.spdx_id && r.license.spdx_id !== 'NOASSERTION' ? r.license.spdx_id : null,
    homepage: r.homepage || null,
    topics: r.topics ?? [],
    createdAt: r.created_at,
    pushedAt: r.pushed_at,
    latestRelease: releases[0]
      ? { tag: releases[0].tag_name, name: releases[0].name || releases[0].tag_name, publishedAt: releases[0].published_at, url: releases[0].html_url }
      : null,
  })

  events.push({ type: 'repo', repo: r.name, date: r.created_at, text: null, url: r.html_url })
  for (const rel of releases) {
    events.push({ type: 'release', repo: r.name, date: rel.published_at, text: firstLine(rel.name || rel.tag_name), url: rel.html_url })
  }
  for (const c of commits) {
    // Only the owner's own commits; merges are noise.
    if (c.author?.login !== USER || c.parents?.length > 1) continue
    events.push({ type: 'commit', repo: r.name, date: c.commit.author.date, text: firstLine(c.commit.message), url: c.html_url })
  }
}

events.sort((a, b) => b.date.localeCompare(a.date))

// Contribution calendar (last 365 days) from the public profile page.
const html = await (await fetch(`https://github.com/users/${USER}/contributions`, { headers: { 'User-Agent': headers['User-Agent'] } })).text()
const tips = new Map([...html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g)].map((m) => [m[1], m[2]]))
const days = [...html.matchAll(/data-date="([\d-]+)" id="([^"]+)"[^>]*data-level="(\d)"/g)]
  .map(([, date, id, level]) => ({ date, level: Number(level), count: Number(tips.get(id)?.match(/^(\d+)/)?.[1] ?? 0) }))
  .sort((a, b) => a.date.localeCompare(b.date))
const contributions = { total: days.reduce((n, d) => n + d.count, 0), days }

const snapshot = { user: USER, profileUrl: `https://github.com/${USER}`, fetchedAt: new Date().toISOString(), repos: out, events, contributions }
fs.writeFileSync(OUT, JSON.stringify(snapshot, null, 2) + '\n')
console.log(`github.json: ${out.length} repos, ${events.length} events`)
