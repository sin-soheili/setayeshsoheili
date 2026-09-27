import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import type { NumberedProject } from '@/lib/projects'
import { Cover } from '@/components/ui/Cover'
import { Icon } from '@/components/ui/Icon'

/** Bottom bar (all sizes): endlessly scrolling list of skills. */
export function SkillTicker({ skills, label }: { skills: string[]; label: string }) {
  const loop = [...skills, ...skills]
  return (
    <div
      role="region"
      aria-label={label}
      dir="ltr"
      className="mask-fade-x pointer-events-auto fixed inset-x-0 bottom-0 z-30 flex h-[38px] select-none items-center overflow-hidden border-t border-line bg-bg/85 backdrop-blur-md sm:h-[42px]"
    >
      <div className="ticker-pause flex animate-ticker items-center gap-6 whitespace-nowrap sm:gap-8">
        {loop.map((skill, i) => (
          <div
            key={i}
            aria-hidden={i >= skills.length || undefined}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-secondary transition-colors hover:text-fg sm:text-[12px]"
          >
            <span className="size-1 shrink-0 bg-muted opacity-60" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Bottom bar above the skill ticker (below lg, where the side rail is hidden). */
export function ProjectTicker({ projects, lang, label }: { projects: NumberedProject[]; lang: Locale; label: string }) {
  if (!projects.length) return null
  const loop = [...projects, ...projects]
  return (
    <aside
      aria-label={label}
      dir="ltr"
      className="mask-fade-x pointer-events-auto fixed inset-x-0 bottom-[38px] z-30 flex h-[78px] select-none items-center overflow-hidden border-t border-line bg-bg/95 backdrop-blur-md sm:bottom-[42px] sm:h-[86px] lg:hidden"
    >
      <div className="ticker-pause flex animate-ticker-reverse items-center gap-7 whitespace-nowrap sm:gap-9">
        {loop.map((p, i) => (
          <Link
            key={i}
            href={`/${lang}/work/${p.slug}`}
            {...(i >= projects.length ? { 'aria-hidden': true, tabIndex: -1 } : {})}
            className="group flex items-center gap-3.5 py-1 font-mono text-[11px] tracking-wider text-secondary transition-colors hover:text-fg sm:text-[12px]"
          >
            <span className="size-1.5 shrink-0 bg-muted opacity-60" />
            <div className="relative aspect-[16/10] h-[60px] shrink-0 overflow-hidden border border-line-strong bg-surface shadow-sm sm:h-[68px]">
              <Cover title={p.title} number={p.number} domain={p.domain} image={p.media} lang={lang} sizes="120px" compact className="absolute inset-0" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <div className="flex items-center gap-1.5 text-[14px] font-bold tracking-tight text-fg underline-offset-2 group-hover:underline sm:text-[16px]">
                <span>{p.title}</span>
                <Icon name="arrowRight" className="size-3 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted sm:text-[11px]">{p.tags.join(' / ')}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
