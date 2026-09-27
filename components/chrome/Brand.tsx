import Link from 'next/link'

/** Square monogram (light/dark 2×2 mark) + name; the reference uses a portrait here. */
export function Brand({ href, name, label, onClick }: { href: string; name: string; label: string; onClick?: () => void }) {
  return (
    <Link href={href} aria-label={label} onClick={onClick} className="group flex select-none items-center gap-2.5 text-[14px] font-medium text-fg">
      <span className="relative inline-flex size-8 shrink-0 items-center justify-center overflow-hidden border border-line-strong bg-surface transition-transform duration-200 group-hover:scale-105">
        <svg aria-hidden viewBox="0 0 32 32" className="size-4">
          <rect x="4" y="4" width="12" height="12" className="fill-fg" />
          <rect x="16" y="16" width="12" height="12" className="fill-fg" />
          <rect x="16" y="4" width="12" height="12" className="fill-none stroke-fg" strokeWidth="1.5" />
          <rect x="4" y="16" width="12" height="12" className="fill-none stroke-fg" strokeWidth="1.5" />
        </svg>
      </span>
      <span className="font-semibold tracking-tight">{name}</span>
    </Link>
  )
}
