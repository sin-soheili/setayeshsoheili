import Link from 'next/link'
import type { Copy } from '@/content/copy'
import type { Locale } from '@/lib/i18n'
import type { NumberedProject } from '@/lib/projects'
import { Cover } from '@/components/ui/Cover'
import { Icon } from '@/components/ui/Icon'

export function ProjectCard({ project: p, lang, t }: { project: NumberedProject; lang: Locale; t: Copy }) {
  const href = p.summary ? `/${lang}/work/${p.slug}` : null
  const description = p.summary?.[lang] ?? p.tags.join(' · ')

  return (
    <div data-reveal className="h-full">
      <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-card shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-line-strong">
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface">
          <Cover title={p.title} number={p.number} domain={p.domain} image={p.media} lang={lang} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="absolute inset-0" />
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.work.openLive(p.title)}
              className="absolute end-3 top-3 z-10 flex size-8 items-center justify-center border border-white/20 bg-black/60 text-white/90 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white"
            >
              <Icon name="arrowUpRight" className="size-4" />
            </a>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
          <div className="flex flex-col">
            <span dir="ltr" className="mb-1.5 truncate font-mono text-[10px] uppercase tracking-wider text-muted rtl:text-end">
              {[p.kind ? t.project.kinds[p.kind] : null, p.tags.join(' / ')].filter(Boolean).join(' // ')}
            </span>
            <h3 className="text-[18px] font-semibold tracking-tight text-fg sm:text-[20px]">
              {href ? (
                <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                  {p.title}
                </Link>
              ) : (
                p.title
              )}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.5] text-secondary sm:text-[14px] rtl:leading-[1.9]">{description}</p>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            {p.stack && (
              <div className="flex flex-wrap gap-1.5" dir="ltr">
                {p.stack.map((s) => (
                  <span key={s} className="border border-line bg-surface px-2.5 py-0.5 text-[11px] font-medium text-secondary">
                    {s}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between border-t border-line/60 pt-3">
              {href ? (
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-fg">
                  <span>{t.work.caseStudy}</span>
                  <Icon name="arrowRight" className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              ) : (
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">—</span>
              )}
              {p.yearResolved && (
                <span dir="ltr" className="font-mono text-[11px] text-muted">
                  {p.yearResolved}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
