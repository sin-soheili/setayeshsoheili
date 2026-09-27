import type { ReactNode } from 'react'
import { Kicker } from './primitives'

/** Header of archive pages (Work, Blog, Resume): kicker, H1, intro, and a count/action on the end side. */
export function IndexHeader({ kicker, title, intro, aside }: { kicker: string; title: string; intro: string; aside?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-8 sm:mb-12 sm:flex-row sm:items-end">
      <div>
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-secondary sm:text-base rtl:leading-[1.9]">{intro}</p>
      </div>
      {aside && <div className="flex shrink-0 items-center gap-3">{aside}</div>}
    </div>
  )
}

export function CountBadge({ children }: { children: ReactNode }) {
  return <span className="border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">{children}</span>
}
