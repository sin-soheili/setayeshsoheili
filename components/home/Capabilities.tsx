import type { SkillGroup } from '@/content/types'
import { cn, pad } from '@/lib/utils'

/** Skill groups as cards: "01 // BACKEND" + count + items. No ratings, no bars. */
export function CapabilityGrid({ groups, toolsLabel, className = 'mt-8 sm:mt-10' }: { groups: SkillGroup[]; toolsLabel: (n: number) => string; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3', className)}>
      {groups.map((g, i) => (
        <div key={g.label} data-reveal className="h-full">
          <div className="group flex h-full flex-col justify-between border border-line bg-card p-5 transition-all duration-150 hover:border-line-strong hover:shadow-sm sm:p-8">
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2" dir="ltr">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-muted">{pad(i + 1)} //</span>
                  <h3 className="font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-fg">{g.label}</h3>
                </div>
                <span className="border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">{toolsLabel(g.items.length)}</span>
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    dir="ltr"
                    className="flex items-center gap-2.5 border border-line/60 bg-surface/40 px-3 py-2 transition-all duration-150 hover:border-line-strong hover:bg-surface-hover"
                  >
                    <span className="size-1.5 shrink-0 bg-muted transition-colors group-hover:bg-fg" />
                    <span className="truncate text-[13px] font-medium text-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
