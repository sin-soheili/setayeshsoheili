import type { Copy } from '@/content/copy'
import { contributionWeeks, github, pinnedRepos, type ActivityEvent } from '@/lib/github'
import { formatDateShort, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'

const cellClass = [
  'bg-[var(--c-contrib-0)] border-[var(--c-contrib-0-border)]',
  'bg-[var(--c-contrib-1)] border-[var(--c-contrib-1-border)]',
  'bg-[var(--c-contrib-2)] border-[var(--c-contrib-2-border)]',
  'bg-[var(--c-contrib-3)] border-[var(--c-contrib-3-border)]',
  'bg-[var(--c-contrib-4)] border-[var(--c-contrib-4-border)]',
]

const cell = 'aspect-square w-full min-h-[8px] min-w-[8px] max-h-[14px] max-w-[14px] border'

/** GitHub contribution calendar from the real snapshot (last 365 days). */
function ContributionCalendar({ lang, t }: { lang: Locale; t: Copy['activity'] }) {
  const weeks = contributionWeeks()
  const days = github.contributions.days
  const monthFmt = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-US', { month: 'short', timeZone: 'UTC' })
  const dayFmt = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-US', { dateStyle: 'medium', timeZone: 'UTC' })
  const weekdayFmt = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { weekday: 'short', timeZone: 'UTC' })
  const weekday = (i: number) => weekdayFmt.format(new Date(Date.UTC(2024, 0, 7 + i)))
  const range = `${days[0]?.date.slice(0, 4)} – ${days.at(-1)?.date.slice(0, 4)}`
  // Label a column when its month starts, but never closer than 3 weeks to the previous label.
  let lastLabel = -3
  const monthLabels = weeks.map((w, i) => {
    const first = w.find(Boolean)
    const prev = weeks[i - 1]?.find(Boolean)
    const starts = first && (!prev || first.date.slice(5, 7) !== prev.date.slice(5, 7))
    if (!starts || i - lastLabel < 3 || i > weeks.length - 3) return null
    lastLabel = i
    return monthFmt.format(new Date(`${first.date}T00:00:00Z`))
  })

  return (
    <div data-reveal className="mt-8 border border-line bg-card p-4 transition-all duration-200 sm:mt-10 sm:p-6 md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-baseline">
        <div>
          <div className="text-[28px] font-bold leading-none tracking-tight tabular-nums text-fg sm:text-[36px]">
            {github.contributions.total.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US')}
          </div>
          <p className="mt-1.5 text-[13px] font-medium text-secondary sm:text-[14px]">{t.contributions}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span dir="ltr" className="hidden items-center border border-line bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-secondary sm:inline-flex">
            {range}
          </span>
          <div className="flex select-none items-center gap-2 text-[12px] text-muted">
            <span>{t.less}</span>
            <div className="flex items-center gap-[3px]" dir="ltr">
              {cellClass.map((c) => (
                <span key={c} className={cn('size-[10px] border', c)} />
              ))}
            </div>
            <span>{t.more}</span>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="w-full select-none overflow-x-auto py-1" dir="ltr">
          <div className="flex w-full min-w-[720px] flex-col gap-2">
            <div className="flex items-center">
              <div className="w-7 shrink-0" />
              <div className="relative flex h-4 flex-1 gap-[3px] font-mono text-[11px] text-muted">
                {monthLabels.map((label, i) => (
                  <div key={i} className="relative min-w-[8px] max-w-[14px] flex-1">
                    {label && <span className="absolute left-0 top-0 whitespace-nowrap">{label}</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex w-7 shrink-0 flex-col gap-[3px]">
                {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                  <div key={d} className={cn(cell, 'flex items-center justify-start border-0 font-mono text-[10px] leading-none text-muted')}>
                    {d % 2 === 1 ? weekday(d) : ''}
                  </div>
                ))}
              </div>
              <div className="flex flex-1 gap-[3px]">
                {weeks.map((w, i) => (
                  <div key={i} className="flex flex-1 flex-col gap-[3px]">
                    {w.map((day, j) =>
                      day ? (
                        <div
                          key={j}
                          title={`${day.count} — ${dayFmt.format(new Date(`${day.date}T00:00:00Z`))}`}
                          className={cn(cell, 'transition-colors duration-150', cellClass[day.level])}
                        />
                      ) : (
                        <div key={j} className={cn(cell, 'border-0')} />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RepoCards({ lang }: { lang: Locale }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {pinnedRepos(3).map((r) => (
        <a
          key={r.name}
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          className="group flex min-h-[160px] flex-col justify-between border border-line bg-card p-5 transition-all duration-150 hover:border-line-strong hover:bg-surface-hover sm:p-6"
        >
          <div>
            <div className="mb-2 flex items-center justify-between gap-2" dir="ltr">
              <span className="truncate font-mono text-[14px] font-semibold text-fg">{r.name}</span>
              <Icon name="arrowUpRight" className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
            </div>
            <p dir="ltr" className="line-clamp-2 text-[13px] leading-relaxed text-secondary rtl:text-end">
              {r.description}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4 border-t border-line/60 pt-3 font-mono text-[12px] text-muted" dir="ltr">
            {r.language && (
              <span className="flex items-center gap-2">
                <span className="size-2 bg-secondary" />
                {r.language}
              </span>
            )}
            {r.stars > 0 && (
              <span className="flex items-center gap-1">
                <Icon name="star" className="size-3" />
                {r.stars}
              </span>
            )}
            <span className="ms-auto">{formatDateShort(r.pushedAt, lang)}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

function RecentActivity({ lang, t, limit = 6 }: { lang: Locale; t: Copy['activity']; limit?: number }) {
  const events: ActivityEvent[] = github.events.slice(0, limit)
  if (!events.length) return null
  return (
    <ol className="border border-line bg-card">
      {events.map((e) => (
        <li key={`${e.type}-${e.url}-${e.date}`} className="border-b border-line last:border-b-0">
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-3 transition-colors hover:bg-surface-hover sm:grid-cols-[7rem_6rem_8rem_1fr_auto] sm:px-6"
          >
            <time dateTime={e.date} className="font-mono text-[12px] tabular-nums text-muted" dir="ltr">
              {formatDateShort(e.date, lang)}
            </time>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted">{t.type[e.type]}</span>
            <span dir="ltr" className="hidden truncate font-mono text-[13px] font-semibold text-fg sm:block">
              {e.repo}
            </span>
            <span dir="ltr" className="col-span-2 truncate text-[13px] text-secondary group-hover:text-fg sm:col-span-1 rtl:text-end">
              <span className="font-mono font-semibold text-fg sm:hidden">{e.repo} · </span>
              {e.text ?? t.created}
            </span>
            <Icon name="arrowUpRight" className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
          </a>
        </li>
      ))}
    </ol>
  )
}

export function ActivityPanel({ lang, t }: { lang: Locale; t: Copy['activity'] }) {
  return (
    <>
      <ContributionCalendar lang={lang} t={t} />
      <div className="mt-6 sm:mt-8">
        <h3 className="mb-4 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">{t.repositories}</h3>
        <RepoCards lang={lang} />
      </div>
      <div className="mt-6 sm:mt-8" data-reveal>
        <h3 className="mb-4 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">{t.recent}</h3>
        <RecentActivity lang={lang} t={t} />
      </div>
    </>
  )
}
