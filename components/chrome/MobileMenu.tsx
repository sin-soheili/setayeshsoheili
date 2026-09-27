'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Locale } from '@/lib/i18n'
import { pad } from '@/lib/utils'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Brand } from './Brand'
import type { NavItem } from './Header'

export type MenuChannel = { label: string; href: string; icon: IconName }

type Props = {
  lang: Locale
  name: string
  nav: NavItem[]
  channels: MenuChannel[]
  onClose: () => void
  t: { label: string; close: string; home: string; channels: string }
}

export function MobileMenu({ lang, name, nav, channels, onClose, t }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      previous?.focus()
    }
  }, [onClose])

  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={t.label} className="fixed inset-0 z-[60] flex flex-col bg-bg">
      <div className="flex h-[56px] shrink-0 items-center justify-between border-b border-line bg-bg px-5 sm:px-6">
        <Brand href={`/${lang}`} name={name} label={t.home} onClick={onClose} />
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.close} className="inline-flex size-10 items-center justify-center text-secondary hover:bg-surface-hover hover:text-fg">
          <Icon name="x" className="size-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 pb-[max(32px,calc(32px+env(safe-area-inset-bottom,0px)))] pt-6 sm:px-6">
        <nav aria-label={t.label} className="w-full">
          <ul className="flex w-full flex-col gap-1">
            {nav.map((item, i) => {
              const row = (
                <>
                  <span className="flex items-center gap-3.5">
                    <span className="font-mono text-[11px] tracking-wider text-muted" dir="ltr">
                      {pad(i + 1)}
                    </span>
                    <span className="text-[24px] font-bold tracking-tight text-secondary transition-colors group-hover:text-fg sm:text-[26px]">{item.label}</span>
                  </span>
                  <span className="text-[16px] text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-fg rtl:group-hover:-translate-x-1" aria-hidden>
                    {item.external ? '↗' : <Icon name="arrowRight" />}
                  </span>
                </>
              )
              const cls = 'group flex items-center justify-between border-b border-line/40 px-2 py-3 transition-all duration-150 hover:border-line-strong hover:bg-surface'
              return (
                <li key={item.href} className="w-full">
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {row}
                    </a>
                  ) : (
                    <Link href={item.href} onClick={onClose} className={cls}>
                      {row}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{t.channels}</span>
          <div className="grid grid-cols-2 gap-2">
            {channels.map((c) => {
              const external = c.href.startsWith('http')
              const cls = 'flex items-center justify-center gap-2 border border-line bg-surface px-3 py-2.5 font-mono text-[12px] text-secondary transition-all hover:border-line-strong hover:bg-surface-hover hover:text-fg'
              const inner = (
                <>
                  <Icon name={c.icon} className="size-3.5" />
                  <span className="truncate">{c.label}</span>
                </>
              )
              return external ? (
                <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={c.href} href={c.href} onClick={onClose} className={cls}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
