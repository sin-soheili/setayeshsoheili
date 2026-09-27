import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'

export function Brand({ href, name, label, onClick }: { href: string; name: string; label: string; onClick?: () => void }) {
  return (
    <Link href={href} aria-label={label} onClick={onClick} className="group flex select-none items-center gap-2.5 text-[14px] font-medium text-fg">
      <span className="relative inline-flex size-8 shrink-0 overflow-hidden border border-line-strong bg-surface transition-transform duration-200 group-hover:scale-105">
        <ExportedImage src="/images/logo.webp" alt="" fill sizes="32px" className="object-cover dark:invert" />
      </span>
      <span className="font-semibold tracking-tight">{name}</span>
    </Link>
  )
}
