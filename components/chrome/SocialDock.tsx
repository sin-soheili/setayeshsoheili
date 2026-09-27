import Link from 'next/link'
import type { Social } from '@/lib/social'
import { Icon } from '@/components/ui/Icon'

/** Fixed end-side dock (md+) with direct channels and tooltips. */
export function SocialDock({ items, label }: { items: Social[]; label: string }) {
  return (
    <aside aria-label={label} className="fixed end-0 top-1/2 z-40 hidden -translate-y-1/2 select-none md:block">
      <div className="flex flex-col items-center gap-1 border-y border-s border-e-0 border-line bg-bg/95 p-1 shadow-xl backdrop-blur-md">
        {items.map((item) => {
          const cls =
            'group relative flex size-9 items-center justify-center border border-transparent text-secondary transition-all duration-150 hover:border-line-strong hover:bg-surface hover:text-fg sm:size-10'
          const inner = (
            <>
              <Icon name={item.icon} className="transition-transform group-hover:scale-110" />
              <span className="pointer-events-none absolute end-full me-2.5 translate-x-1 whitespace-nowrap bg-fg px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-bg opacity-0 shadow-md transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 rtl:-translate-x-1">
                {item.label}
              </span>
            </>
          )
          return item.href.startsWith('/') ? (
            <Link key={item.href} href={item.href} aria-label={item.label} className={cls}>
              {inner}
            </Link>
          ) : (
            <a key={item.href} href={item.href} aria-label={item.label} target="_blank" rel="me noopener noreferrer" className={cls}>
              {inner}
            </a>
          )
        })}
      </div>
    </aside>
  )
}
