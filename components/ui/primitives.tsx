import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn, isExternal } from '@/lib/utils'
import { Icon } from './Icon'

export function Container({ narrow, className, children }: { narrow?: boolean; className?: string; children: ReactNode }) {
  return (
    <div className={cn('mx-auto w-full px-[20px] md:px-[32px] lg:px-[48px]', narrow ? 'max-w-[1120px]' : 'max-w-[1280px]', className)}>
      {children}
    </div>
  )
}

export const kickerClass = 'font-mono text-[11px] font-medium leading-[1.3] tracking-[0.16em] uppercase text-muted select-none'

export function Kicker({ as: Tag = 'p', className, children }: { as?: 'p' | 'span'; className?: string; children: ReactNode }) {
  return <Tag className={cn(kickerClass, className)}>{children}</Tag>
}

/** Mono label used on boxes: "PROJECT OUTLINE", "LINKS"… */
export const boxTitleClass = 'block border-b border-line pb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted'

/** Section header: kicker, statement heading, optional description and action on the end side. */
export function SectionHeader({
  id,
  kicker,
  title,
  description,
  action,
  className,
}: {
  id?: string
  kicker: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div data-reveal className={cn('flex flex-col justify-between gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:pb-10', className)}>
      <div className="flex flex-col items-start">
        <Kicker>{kicker}</Kicker>
        <h2 id={id} className="mt-[10px] text-balance text-[28px] font-bold leading-[1.1] tracking-[-0.025em] text-fg sm:text-[34px] md:text-[40px]">
          {title}
        </h2>
        {description && <p className="mt-2 max-w-xl text-[14px] text-secondary sm:text-[15px]">{description}</p>}
      </div>
      {action}
    </div>
  )
}

type ButtonProps = { href: string; children: ReactNode; className?: string; external?: boolean }

const linkProps = (href: string, external?: boolean) =>
  external ?? isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

/** Outline button used for Live Preview / Source Code / GitHub profile. */
export function OutlineButton({ href, children, className, external }: ButtonProps) {
  const cls = cn(
    'inline-flex shrink-0 items-center gap-2.5 border border-line-strong bg-surface/60 px-4 py-2 text-[13px] font-medium text-fg transition-all duration-150 hover:border-secondary hover:bg-surface-hover',
    className,
  )
  const content = (
    <>
      <span>{children}</span>
      <span className="text-[14px] leading-none" aria-hidden>
        ↗
      </span>
    </>
  )
  return isExternal(href) ? (
    <a href={href} className={cls} {...linkProps(href, external)}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}

/** Hero buttons: solid (primary) and bordered (secondary). */
export function HeroButton({ href, children, icon, primary }: { href: string; children: ReactNode; icon: string; primary?: boolean }) {
  const cls = cn(
    'relative inline-flex h-10 select-none items-center justify-center gap-2.5 whitespace-nowrap px-4 text-[12px] font-medium tracking-[0.04em] transition-colors duration-150',
    primary ? 'bg-fg text-bg hover:bg-fg/85' : 'border border-line-strong bg-transparent text-fg hover:bg-surface-hover',
  )
  const inner = (
    <>
      <span>{children}</span>
      <span className="text-[14px] leading-none" aria-hidden>
        {icon}
      </span>
    </>
  )
  return isExternal(href) ? (
    <a href={href} className={cls} {...linkProps(href)}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}

export function Chip({ children, size = 'md', className }: { children: ReactNode; size?: 'xs' | 'sm' | 'md'; className?: string }) {
  return (
    <span
      dir="ltr"
      className={cn(
        'border border-line bg-surface font-mono text-secondary',
        size === 'md' && 'px-2.5 py-1 text-[12px]',
        size === 'sm' && 'px-2 py-0.5 text-[10px]',
        size === 'xs' && 'px-1.5 py-0.5 text-[8px]',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Box({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn('border border-line bg-card p-6 shadow-sm', className)}>
      <span className={cn(boxTitleClass, 'mb-4')}>{title}</span>
      {children}
    </div>
  )
}

/** Previous/next navigation card. */
export function PagerCard({ href, label, title, align = 'start', compact }: { href: string; label: string; title: string; align?: 'start' | 'end'; compact?: boolean }) {
  const end = align === 'end'
  return (
    <Link
      href={href}
      className={cn(
        'group flex min-w-0 flex-col border border-line bg-card p-5 transition-all duration-150 hover:border-line-strong hover:bg-surface-hover sm:p-6',
        end && 'sm:items-end sm:text-end',
      )}
    >
      <span className="mb-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
        {!end && <Icon name="arrowLeft" className="size-3.5 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />}
        <span>{label}</span>
        {end && <Icon name="arrowRight" className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />}
      </span>
      <span className={cn('font-bold text-fg', compact ? 'line-clamp-2 text-[14px] leading-snug group-hover:underline group-hover:underline-offset-2' : 'text-[17px] sm:text-[19px]')}>
        {title}
      </span>
    </Link>
  )
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
