'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'
import { toggleTheme } from './ThemeToggle'

export type CommandItem = {
  label: string
  type: string
  /** Internal path, external URL, or a built-in action. */
  href?: string
  action?: 'toggle-theme'
  keywords?: string
}

type Props = { items: CommandItem[]; t: { placeholder: string; label: string; empty: string } }

/** ⌘K / Ctrl+K palette: sections, pages, projects, articles and actions. */
export function CommandMenu({ items, t }: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActive(0)
    returnFocus.current?.focus()
  }, [])

  useEffect(() => {
    const show = () => {
      returnFocus.current = document.activeElement as HTMLElement | null
      setOpen(true)
    }
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        show()
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('command:open', show)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('command:open', show)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? items.filter((i) => `${i.label} ${i.type} ${i.keywords ?? ''}`.toLowerCase().includes(q)) : items
  }, [items, query])

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const run = (item: CommandItem) => {
    close()
    if (item.action === 'toggle-theme') return toggleTheme()
    if (!item.href) return
    if (/^(https?:|mailto:)/.test(item.href)) window.open(item.href, '_blank', 'noopener,noreferrer')
    else router.push(item.href)
  }

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === 'Escape') return close()
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, results.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    }
    if (e.key === 'Enter' && results[active]) {
      e.preventDefault()
      run(results[active])
    }
    // Keep focus inside the dialog.
    if (e.key === 'Tab') e.preventDefault()
  }

  if (!open) return null

  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={t.label} onKeyDown={onKeyDown} className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[15vh] md:pt-[20vh]">
      <div className="fixed inset-0 bg-overlay transition-opacity duration-200" onClick={close} aria-hidden />
      <div className="relative z-10 w-full max-w-[560px] animate-command-enter overflow-hidden border border-line-strong bg-card shadow-lg">
        <div className="flex items-center gap-2 border-b border-line p-3">
          <Icon name="search" className="ms-2 text-muted" />
          <input
            ref={inputRef}
            role="combobox"
            aria-expanded="true"
            aria-controls="command-list"
            aria-activedescendant={results[active] ? `command-${active}` : undefined}
            aria-label={t.label}
            placeholder={t.placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            className="h-[40px] w-full border-0 bg-transparent px-2 text-[14px] text-fg placeholder:text-muted focus:outline-none"
          />
          <kbd dir="ltr" className="hidden border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">
            ESC
          </kbd>
        </div>
        <ul ref={listRef} id="command-list" role="listbox" className="flex max-h-[320px] flex-col gap-[2px] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center font-mono text-[12px] text-muted">{t.empty}</li>}
          {results.map((item, i) => (
            <li
              key={`${item.type}-${item.label}-${item.href ?? item.action}`}
              id={`command-${i}`}
              role="option"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onClick={() => run(item)}
              className={cn(
                'flex h-[36px] cursor-pointer select-none items-center justify-between gap-4 px-[12px] transition-colors duration-100 md:h-[40px]',
                i === active ? 'bg-surface-hover text-fg' : 'bg-transparent text-secondary',
              )}
            >
              <span className="truncate text-[13px] font-medium md:text-[14px]">{item.label}</span>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted">{item.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  )
}
