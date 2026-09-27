import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { certificates } from '@/content/certificates'
import { profile } from '@/content/profile'
import { education, experience, languages, skills } from '@/content/resume'
import { personJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'
import { langParams, resolveLang, type LangParams } from '@/lib/params'
import { displayUrl, hasItems } from '@/lib/utils'
import { Container, JsonLd, Kicker } from '@/components/ui/primitives'
import { IndexHeader } from '@/components/ui/IndexHeader'
import { ExperienceTimeline } from '@/components/home/Experience'
import { CapabilityGrid } from '@/components/home/Capabilities'
import { PrintButton } from '@/components/resume/PrintButton'

export const generateStaticParams = langParams

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang, t } = await resolveLang(params)
  return pageMetadata({ lang, path: '/resume', title: t.resume.title, description: t.resume.description })
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14 first:mt-0 sm:mt-16" data-reveal>
      <div className="mb-8 border-b border-line pb-4">
        <Kicker>{title}</Kicker>
      </div>
      {children}
    </section>
  )
}

export default async function ResumePage({ params }: LangParams) {
  const { lang, t } = await resolveLang(params)

  return (
    <div className="py-10 sm:py-14 md:py-[72px]">
      <JsonLd data={personJsonLd(lang)} />
      <Container>
        <IndexHeader
          kicker={t.resume.kicker}
          title={profile.name[lang]}
          intro={`${profile.title} · ${profile.location[lang]} — ${t.resume.intro}`}
          aside={<PrintButton label={t.resume.print} />}
        />

        {hasItems(experience) && (
          <Block title={t.resume.experience}>
            <ExperienceTimeline items={experience} lang={lang} />
          </Block>
        )}

        {hasItems(education) && (
          <Block title={t.resume.education}>
            <ul className="flex flex-col gap-6">
              {education.map((e) => (
                <li key={e.degree.en} className="grid gap-2 lg:grid-cols-12 lg:gap-6">
                  <span className="font-mono text-[13px] text-muted lg:col-span-3">{e.period}</span>
                  <div className="lg:col-span-9">
                    <h3 className="text-[16px] font-semibold text-fg sm:text-[18px]">{e.degree[lang]}</h3>
                    <p className="mt-1 text-[15px] text-secondary">
                      {e.institution[lang]}
                      {e.location && ` · ${e.location[lang]}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block title={t.resume.capabilities}>
          <CapabilityGrid groups={skills} toolsLabel={t.capabilities.tools} className="" />
        </Block>

        <Block title={t.resume.languages}>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {languages.map((l) => (
              <div key={l.name.en} className="flex items-center justify-between border border-line bg-card px-5 py-4">
                <dt className="text-[16px] font-semibold text-fg">{l.name[lang]}</dt>
                <dd className="font-mono text-[12px] uppercase tracking-wider text-muted">{l.level[lang]}</dd>
              </div>
            ))}
          </dl>
        </Block>

        {hasItems(certificates) && (
          <Block title={t.resume.certificates}>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {certificates.map((c) => (
                <li key={`${c.issuer}-${c.title.en}`} className="border border-line bg-card p-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[16px] font-semibold text-fg">{c.title[lang]}</h3>
                    {c.year && <span className="font-mono text-[12px] text-muted">{c.year}</span>}
                  </div>
                  <p className="mt-1 text-[14px] text-secondary">{c.issuer}</p>
                  {c.href && (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-mono text-[12px] text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg">
                      {t.resume.view} <span dir="ltr">{displayUrl(c.href)} ↗</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Block>
        )}
      </Container>
    </div>
  )
}
