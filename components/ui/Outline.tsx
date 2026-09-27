'use client'

import { useEffect, useState } from 'react'
import type { Heading } from '@/lib/markdown'
import { cn, pad } from '@/lib/utils'
import { boxTitleClass } from './primitives'

/** Sticky table of contents; highlights the section currently in view. */
export function Outline({ title, headings, label }: { title: string; headings: Heading[]; label: string }) {
  const [active, setActive] = useState(headings[0]?.id)

  useEffect(() => {
    const targets = headings.map((h) => document.getElementById(h.id)).filter((el): el is HTMLElement => Boolean(el))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -65% 0px' },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [headings])

  return (
    <div className="border border-line bg-card p-6 shadow-sm">
      <span className={cn(boxTitleClass, 'mb-4')}>{title}</span>
      <nav aria-label={label} className="flex flex-col gap-1.5">
        {headings.map((h) => {
          const isActive = h.id === active
          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'flex items-center justify-between px-2 py-1.5 transition-all',
                h.depth === 3 ? 'ps-4 text-[12px]' : 'text-[13px]',
                isActive
                  ? 'border-s-2 border-fg bg-surface font-semibold text-fg'
                  : 'text-secondary hover:bg-surface/50 hover:text-fg',
              )}
            >
              <span className="truncate pe-2">{h.text}</span>
              {h.number !== null && (
                <span dir="ltr" className="shrink-0 font-mono text-[10px] text-muted">
                  {pad(h.number)}
                </span>
              )}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
