import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import type { NumberedProject } from '@/lib/projects'
import { Cover } from '@/components/ui/Cover'

/** Fixed start-side rail (lg+): an endlessly scrolling stream of every project. */
export function ProjectRail({ projects, lang, title, kinds }: { projects: NumberedProject[]; lang: Locale; title: string; kinds: Record<string, string> }) {
  if (!projects.length) return null
  const loop = [...projects, ...projects]

  return (
    <aside
      aria-label={title}
      className="pointer-events-auto fixed bottom-[42px] start-0 top-0 z-30 hidden w-[230px] select-none flex-col overflow-hidden border-e border-line bg-bg/95 backdrop-blur-xl lg:flex xl:w-[260px]"
    >
      <div className="flex h-[64px] shrink-0 items-center bg-bg/80 px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="size-1.5 shrink-0 bg-fg" />
          <span className="truncate font-mono text-[11px] font-bold uppercase tracking-wider text-fg">
            {title} ( <span dir="ltr">{projects.length}</span> )
          </span>
        </div>
      </div>
      <div className="mask-fade-y relative flex-1 overflow-hidden px-2 py-1.5">
        <div className="ticker-pause flex animate-ticker-vertical flex-col gap-2">
          {loop.map((p, i) => {
            const meta = [p.kind ? kinds[p.kind] : p.domain, p.yearResolved].filter(Boolean).join(' • ')
            const inner = (
              <>
                <div className="relative min-h-[52px] w-[70px] shrink-0 overflow-hidden border-e border-line bg-card xl:min-h-[58px] xl:w-[80px]">
                  <Cover title={p.title} number={p.number} domain={p.domain} image={p.media} lang={lang} sizes="80px" compact className="absolute inset-0" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center py-1.5 ps-2.5">
                  <span dir="ltr" className="block truncate font-mono text-[8px] uppercase tracking-wider text-muted xl:text-[8.5px] rtl:text-end">
                    {p.tags.join(' / ')}
                  </span>
                  <h4 className="mt-0.5 truncate text-[12px] font-bold tracking-tight text-fg underline-offset-2 group-hover/card:underline xl:text-[13px]">{p.title}</h4>
                  <span className="mt-0.5 block truncate font-mono text-[8px] text-secondary opacity-80">{meta}</span>
                </div>
              </>
            )
            const cls = 'group/card flex items-stretch overflow-hidden border border-line-subtle bg-surface/40 pe-2.5 transition-all duration-150 hover:border-line-strong hover:bg-surface-hover'
            // The duplicated half is decorative only.
            const hidden = i >= projects.length ? { 'aria-hidden': true, tabIndex: -1 } : {}
            return p.summary ? (
              <Link key={i} href={`/${lang}/work/${p.slug}`} className={cls} {...hidden}>
                {inner}
              </Link>
            ) : (
              <div key={i} className={cls} {...(i >= projects.length ? { 'aria-hidden': true } : {})}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
