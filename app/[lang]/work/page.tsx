import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/metadata'
import { langParams, resolveLang, type LangParams } from '@/lib/params'
import { listedProjects } from '@/lib/projects'
import { hasItems } from '@/lib/utils'
import { Container, Kicker } from '@/components/ui/primitives'
import { CountBadge, IndexHeader } from '@/components/ui/IndexHeader'
import { ProjectCard } from '@/components/work/ProjectCard'

export const generateStaticParams = langParams

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang, t } = await resolveLang(params)
  return pageMetadata({ lang, path: '/work', title: t.nav.work, description: t.work.description })
}

export default async function WorkPage({ params }: LangParams) {
  const { lang, t } = await resolveLang(params)
  const selected = listedProjects.filter((p) => p.group === 'selected')
  const earlier = listedProjects.filter((p) => p.group === 'earlier')
  const grid = 'grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className="py-10 sm:py-14 md:py-[72px]">
      <Container>
        <IndexHeader kicker={t.work.kicker} title={t.work.title} intro={t.work.intro} aside={<CountBadge>{t.work.count(listedProjects.length)}</CountBadge>} />
        {hasItems(selected) && (
          <div className={grid}>
            {selected.map((p) => (
              <ProjectCard key={p.slug} project={p} lang={lang} t={t} />
            ))}
          </div>
        )}
        {hasItems(earlier) && (
          <section aria-labelledby="earlier-title" className="mt-14 sm:mt-20">
            <div className="mb-8 border-b border-line pb-4">
              <Kicker>
                <span id="earlier-title">{t.work.earlier}</span>
              </Kicker>
            </div>
            <div className={grid}>
              {earlier.map((p) => (
                <ProjectCard key={p.slug} project={p} lang={lang} t={t} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  )
}
