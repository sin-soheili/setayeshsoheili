import { profile } from '@/content/profile'
import type { Copy } from '@/content/copy'
import type { Locale } from '@/lib/i18n'
import type { NumberedProject } from '@/lib/projects'
import { Container, HeroButton, Kicker } from '@/components/ui/primitives'
import { FeaturedCarousel, type Slide } from './FeaturedCarousel'

type Props = {
  lang: Locale
  t: Copy
  featured: NumberedProject[]
  /** Real counts only (computed from content and the GitHub snapshot). */
  stats: { value: number; label: string }[]
}

export function Hero({ lang, t, featured, stats }: Props) {
  const slides: Slide[] = featured.map((p, i) => ({
    slug: p.slug,
    title: p.title,
    number: p.number,
    domain: p.domain,
    category: p.tags.join(' / '),
    summary: p.summary![lang],
    chips: [p.kind ? t.project.kinds[p.kind] : null, p.yearResolved, p.stack?.[0]].filter((c): c is string => Boolean(c)),
    live: p.live ?? null,
    liveLabel: t.work.openLive(p.title),
    goToLabel: t.hero.goTo(i + 1),
    image: p.media ?? null,
  }))

  return (
    <section aria-label={profile.name[lang]} className="flex flex-col pb-8 pt-10 sm:pb-12 sm:pt-14 md:pt-16 lg:min-h-[calc(100dvh-64px-42px)] lg:justify-center lg:pb-8 lg:pt-8 xl:pt-10">
      <Container>
        <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
          <div className="flex w-full flex-col items-start lg:col-span-6">
            <Kicker>{t.hero.kicker}</Kicker>
            <h1 className="mt-[16px] text-balance text-[32px] font-bold leading-[1.05] tracking-[-0.035em] text-fg sm:mt-[20px] sm:text-[44px] md:text-[54px] lg:text-[60px]">
              {profile.name[lang]}
            </h1>
            <p className="mt-[20px] max-w-[32em] text-pretty text-[15px] leading-[1.55] text-secondary sm:mt-[24px] sm:text-[16px] lg:max-w-[28em]">
              {profile.summary[lang]}
            </p>
            <div className="mt-[28px] flex w-full flex-wrap items-center gap-3.5 sm:mt-[32px] sm:w-auto">
              <HeroButton href={`/${lang}/work`} icon='' >
                {t.hero.viewProjects}
              </HeroButton>
              <HeroButton href={`/${lang}/resume`} icon='' >
                {t.hero.resume}
              </HeroButton>
            </div>
            <div className="mt-[24px] flex select-none items-center gap-2.5 sm:mt-[28px]">
              <span className="size-1.5 shrink-0 bg-muted" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{profile.location[lang]}</span>
            </div>
     
          </div>

          <div className="hidden w-full items-center justify-center overflow-visible lg:col-span-6 lg:flex">
            <FeaturedCarousel
              slides={slides}
              lang={lang}
              t={{ showcase: t.hero.showcase, prev: t.hero.prev, next: t.hero.next, caseStudy: t.work.caseStudy }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
