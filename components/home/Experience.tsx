import type { Experience as ExperienceEntry } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { hasItems } from '@/lib/utils'

/** Vertical timeline: period · role · organisation, one row per entry. Accepts null. */
export function ExperienceTimeline({ items, lang }: { items: ExperienceEntry[] | null; lang: Locale }) {
  if (!hasItems(items)) return null
  return (
    <div className="relative flex flex-col">
      {items.map((e, i) => (
        <div key={e.title.en} className="group relative flex gap-6 pb-10 last:pb-0 sm:gap-8 sm:pb-12">
          <div className="relative flex w-4 shrink-0 flex-col items-center pt-1.5">
            <div className="z-10 size-3 border-2 border-line-strong bg-bg transition-all group-hover:scale-110 group-hover:border-fg" />
            {i < items.length - 1 && <div className="absolute bottom-0 top-5 w-px bg-line" />}
          </div>
          <div className="grid flex-1 grid-cols-1 items-start gap-y-3 lg:grid-cols-12 lg:gap-x-6">
            <div className="pt-0.5 font-mono text-[13px] tabular-nums text-muted lg:col-span-3">{e.period[lang]}</div>
            <div className="lg:col-span-9">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-[16px] font-semibold text-fg sm:text-[18px]">
                  {e.title[lang]}
                </h3>
                {e.org && (
                  <>
                    <span className="text-line-strong" aria-hidden>
                      ·
                    </span>
                    <span className="text-[15px] text-secondary sm:text-[16px]">{e.org[lang]}</span>
                  </>
                )}
              </div>
              <ul className="mt-2.5 space-y-1.5">
                <li className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-secondary sm:text-[14px] rtl:leading-[1.9]">
                  <span className="mt-[7px] size-1 shrink-0 bg-muted rtl:mt-[11px]" />
                  <span>{e.description[lang]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
