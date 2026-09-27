import Link from 'next/link'
import type { NavItem } from './Header'

export function Footer({ name, links, label }: { name: string; links: NavItem[]; label: string }) {
  const cls =
    'inline-flex items-center gap-1 underline decoration-line-strong underline-offset-[3px] transition-colors duration-150 hover:text-fg hover:decoration-fg'
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-[1120px] px-[20px] md:px-[32px] lg:px-[48px]">
        <hr className="my-0 h-px w-full border-0 bg-line" />
        <div className="flex flex-col justify-between gap-[16px] pb-[max(165px,calc(165px+env(safe-area-inset-bottom,0px)))] pt-[48px] md:flex-row md:items-center md:pb-[96px] md:pt-[64px]">
          <p className="select-none font-mono text-[13px] tabular-nums text-muted">
            © <span dir="ltr">{new Date().getFullYear()}</span> {name}
          </p>
          <nav aria-label={label}>
            <ul className="flex flex-wrap items-center gap-x-[16px] gap-y-[8px] text-[13px] text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="me noopener noreferrer" className={cls}>
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className={cls}>
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
