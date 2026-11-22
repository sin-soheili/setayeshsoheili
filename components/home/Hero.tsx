import Link from 'next/link'
import { profile } from '@/content/profile'
import type { Copy } from '@/content/copy'
import type { Locale } from '@/lib/i18n'
import type { NumberedProject } from '@/lib/projects'
import { Icon } from '@/components/ui/Icon'
import { Container, HeroButton } from '@/components/ui/primitives'

type Props = {
  lang: Locale
  t: Copy
  featured: NumberedProject[]
}

export function Hero({ lang, t, featured }: Props) {
  return (
    <section aria-labelledby="home-title" className="pb-10 pt-10 sm:pb-14 sm:pt-14 lg:py-16">
      <Container className="grid items-start gap-y-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-10 xl:gap-x-16">
        <div className="flex min-w-0 flex-col items-start lg:sticky lg:top-24">
          <h1 id="home-title" className="text-balance text-[32px] font-bold leading-[1.05] tracking-[-0.035em] text-fg sm:text-[44px] md:text-[54px] lg:text-[60px]">
            {profile.name[lang]}
          </h1>
          <p className="mt-3 text-[16px] font-semibold text-fg sm:text-[18px]">{t.hero.kicker}</p>
          <p className="mt-4 max-w-[34em] text-pretty text-[15px] leading-relaxed text-secondary sm:text-[16px]">
            {profile.summary[lang]}
          </p>
          <p className="mt-3 text-sm text-secondary">{profile.location[lang]}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
            <HeroButton href="#selected-work" icon="" primary>
              {t.hero.viewProjects}
            </HeroButton>
            <HeroButton href={`/${lang}/resume`} icon="">
              {t.hero.resume}
            </HeroButton>
          </div>
        </div>

        <section id="selected-work" aria-labelledby="selected-work-title" className="min-w-0 scroll-mt-20">
          <h2 id="selected-work-title" className="border-b border-line pb-4 text-[24px] font-bold tracking-tight text-fg sm:text-[28px]">
            {t.hero.showcase}
          </h2>
          <ul>
            {featured.map((project) => (
              <li key={project.slug} className="border-b border-line">
                <Link
                  href={`/${lang}/work/${project.slug}`}
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:bg-surface"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold text-fg"><bdi>{project.title}</bdi></h3>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">{project.summary?.[lang]}</p>
                  </div>
                  <Icon name="arrowRight" className="size-4 shrink-0 text-secondary transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:rtl:group-hover:-translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/${lang}/work`} className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-fg underline underline-offset-4">
            {t.hero.allProjects}
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </section>
      </Container>
    </section>
  )
}
