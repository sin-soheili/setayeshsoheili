'use client'

import { useState } from 'react'
import { Icon } from '@/components/ui/Icon'

/** Native share sheet where available, otherwise copies the link. */
export function ShareButton({ title, label, copied }: { title: string; label: string; copied: string }) {
  const [done, setDone] = useState(false)

  const share = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // cancelled: fall through to copying
      }
    }
    await navigator.clipboard.writeText(url)
    setDone(true)
    setTimeout(() => setDone(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={share}
      className="flex w-full items-center justify-center gap-2 border border-line-strong bg-surface px-3 py-2 font-mono text-[12px] font-medium uppercase text-fg transition-all hover:bg-surface-hover"
    >
      <Icon name={done ? 'check' : 'share'} className="size-3.5" />
      <span aria-live="polite">{done ? copied : label}</span>
    </button>
  )
}
