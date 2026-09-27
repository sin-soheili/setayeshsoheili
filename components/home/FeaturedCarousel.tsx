'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import type { ProjectImage } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { cn, pad } from '@/lib/utils'
import { Cover } from '@/components/ui/Cover'
import { Icon } from '@/components/ui/Icon'

export type Slide = {
  slug: string
  title: string
  number: number
  domain: string
  category: string
  summary: string
  chips: string[]
  live: string | null
  liveLabel: string
  goToLabel: string
  image: ProjectImage | null
}

type Props = {
  slides: Slide[]
  lang: Locale
  t: { showcase: string; prev: string; next: string; caseStudy: string }
}

/** Stacked 3D showcase of featured projects (desktop hero). Auto-advances unless reduced motion is on. */
export function FeaturedCarousel({ slides, lang, t }: Props) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length
  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count])

  useEffect(() => {
    if (paused || count < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % count), 5000)
    return () => clearInterval(id)
  }, [paused, count])

  if (!count) return null

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={t.showcase}
      dir="ltr"
      className="relative flex w-full select-none flex-col items-center overflow-visible"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(active - 1)
        if (e.key === 'ArrowRight') go(active + 1)
      }}
    >
      <div className="relative flex h-[330px] w-full items-center justify-center overflow-visible py-1 [perspective:1000px]" style={{ transformStyle: 'preserve-3d' }}>
        {slides.map((s, i) => {
          let d = i - active
          if (d > count / 2) d -= count
          if (d < -count / 2) d += count
          const visible = Math.abs(d) <= 1
          const isActive = d === 0
          return (
            <div
              key={s.slug}
              aria-hidden={!isActive}
              onClick={() => !isActive && go(i)}
              className={cn(
                'absolute top-0 flex w-[245px] flex-col justify-between border bg-card p-3.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:w-[265px]',
                isActive ? 'cursor-default border-line-strong shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-white/10' : 'cursor-pointer border-line shadow-md',
              )}
              style={{
                transform: `translateX(${d * 58}%) translateZ(${-Math.abs(d) * 140}px) rotateY(${-d * 14}deg) scale(${1 - Math.abs(d) * 0.1})`,
                opacity: visible ? (isActive ? 1 : 0.55) : 0,
                zIndex: 20 - Math.abs(d),
                pointerEvents: visible ? 'auto' : 'none',
              }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface">
                <Cover title={s.title} number={s.number} domain={s.domain} image={s.image} lang={lang} sizes="270px" priority={i === 0} className="absolute inset-0" />
                {s.live && (
                  <a
                    href={s.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={s.liveLabel}
                    className="absolute end-1.5 top-1.5 z-10 flex size-5 items-center justify-center border border-white/20 bg-black/80 text-white backdrop-blur-md transition-all hover:bg-black"
                  >
                    <Icon name="arrowUpRight" className="size-3" />
                  </a>
                )}
              </div>
              <div className="mt-2.5 flex flex-col" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
                <div className="flex items-center justify-between gap-1">
                  <span dir="ltr" className="truncate font-mono text-[9px] font-semibold uppercase tracking-wider text-muted">
                    {s.category}
                  </span>
                  <span dir="ltr" className="font-mono text-[8.5px] text-muted">
                    # {pad(s.number)}
                  </span>
                </div>
                <h3 className="mt-0.5 truncate text-[14px] font-bold tracking-tight text-fg">{s.title}</h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-[1.35] text-secondary">{s.summary}</p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {s.chips.map((c) => (
                    <span key={c} className="border border-line bg-surface px-1.5 py-0.5 font-mono text-[8px] text-secondary">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-2.5 flex items-center justify-between border-t border-line pt-1.5">
                  <Link
                    href={`/${lang}/work/${s.slug}`}
                    tabIndex={isActive ? 0 : -1}
                    className="group/link inline-flex items-center gap-1 font-mono text-[11px] font-medium text-fg transition-colors"
                  >
                    <span>{t.caseStudy}</span>
                    <Icon name="arrowRight" className="size-3 transition-transform duration-200 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label={t.prev}
              className="absolute -left-6 top-1/2 z-30 flex size-8 -translate-y-1/2 items-center justify-center border border-line-strong bg-surface text-fg transition-colors hover:bg-surface-hover"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label={t.next}
              className="absolute -right-6 top-1/2 z-30 flex size-8 -translate-y-1/2 items-center justify-center border border-line-strong bg-surface text-fg transition-colors hover:bg-surface-hover"
            >
              <span aria-hidden>›</span>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="z-20 mt-4 flex items-center gap-3">
          <div className="flex max-w-[200px] items-center gap-1.5 overflow-x-auto py-1">
            {slides.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => go(i)}
                aria-label={s.goToLabel}
                aria-current={i === active}
                className={cn('h-1.5 shrink-0 transition-all duration-300', i === active ? 'w-8 bg-fg ring-1 ring-white/20' : 'w-3 bg-line-strong hover:bg-muted')}
              />
            ))}
          </div>
          <span className="shrink-0 font-mono text-[10px] font-bold tracking-wider text-muted">
            {pad(active + 1)} / {pad(count)}
          </span>
        </div>
      )}
    </div>
  )
}
