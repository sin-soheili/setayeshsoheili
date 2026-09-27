'use client'

import { Icon } from '@/components/ui/Icon'

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-print-hide
      className="inline-flex items-center gap-2.5 border border-line-strong bg-surface/60 px-4 py-2 text-[13px] font-medium text-fg transition-all hover:border-secondary hover:bg-surface-hover"
    >
      <Icon name="printer" className="size-3.5" />
      <span>{label}</span>
    </button>
  )
}
