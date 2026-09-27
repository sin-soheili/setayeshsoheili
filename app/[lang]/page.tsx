import type { Metadata } from 'next'
import { seo } from '@/content/profile'
import { experience, skills } from '@/content/resume'
import { github } from '@/lib/github'
import { personJsonLd, websiteJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'
import { allSkills, langParams, resolveLang, type LangParams } from '@/lib/params'
import { featuredProjects, listedProjects } from '@/lib/projects'
import { githubUrl, socials } from '@/lib/social'
import { Container, JsonLd, OutlineButton, SectionHeader } from '@/components/ui/primitives'
import { Hero } from '@/components/home/Hero'
import { ExperienceTimeline } from '@/components/home/Experience'
import { CapabilityGrid } from '@/components/home/Capabilities'
import { ActivityPanel } from '@/components/home/Activity'
import { AboutSection } from '@/components/home/About'

export const generateStaticParams = langParams

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await resolveLang(params)
  return pageMetadata({ lang, path: '', title: seo[lang].title, description: seo[lang].description, absoluteTitle: true })
}

export default async function Home({ params }: LangParams) {
  const { lang, t } = await resolveLang(params)

  // Only counts that can be verified from content and the GitHub snapshot.
  const stats = [
    { value: listedProjects.length, label: t.hero.stats.projects },
    { value: github.repos.length, label: t.hero.stats.repos },
    { value: github.contributions.total, label: t.hero.stats.contributions },
    { value: allSkills.length, label: t.hero.stats.tools },
  ]

  return (
    <>
      <JsonLd data={personJsonLd(lang)} />
      <JsonLd data={websiteJsonLd(lang)} />

      <Hero lang={lang} t={t} featured={featuredProjects} stats={stats} />

      <section id="experience" aria-labelledby="experience-title" className="scroll-mt-[80px] pb-10 pt-4 sm:pb-12 sm:pt-8 md:pb-14 md:pt-12 lg:pb-16 lg:pt-16">
        <Container>
          <SectionHeader id="experience-title" kicker={t.experience.kicker} title={t.experience.title} />
          <div data-reveal className="mt-8 sm:mt-10">
            <ExperienceTimeline items={experience} lang={lang} />
          </div>
        </Container>
      </section>

      <section id="capabilities" aria-labelledby="capabilities-title" className="scroll-mt-[80px] py-10 sm:py-12 md:py-14 lg:py-16">
        <Container>
          <SectionHeader
            id="capabilities-title"
            kicker={t.capabilities.kicker}
            title={t.capabilities.title}
            description={t.capabilities.description}
            action={<OutlineButton href={githubUrl}>{t.capabilities.github}</OutlineButton>}
          />
          <CapabilityGrid groups={skills} toolsLabel={t.capabilities.tools} />
        </Container>
      </section>

      <section id="activity" aria-labelledby="activity-title" className="scroll-mt-[80px] py-10 sm:py-12 md:py-14 lg:py-16">
        <Container>
          <SectionHeader
            id="activity-title"
            kicker={t.activity.kicker}
            title={t.activity.title}
            description={t.activity.description}
            action={<OutlineButton href={githubUrl}>{t.capabilities.github}</OutlineButton>}
          />
          <ActivityPanel lang={lang} t={t.activity} />
        </Container>
      </section>

      <AboutSection lang={lang} t={t} channels={socials(lang, t.nav.resume)} />
    </>
  )
}
