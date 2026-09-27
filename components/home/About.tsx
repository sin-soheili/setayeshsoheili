import Link from 'next/link'
import type { Copy } from '@/content/copy'
import { profile } from '@/content/profile'
import { languages } from '@/content/resume'
import type { Locale } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'
import type { Social } from '@/lib/social'
import { displayUrl } from '@/lib/utils'
import { Container, Kicker, boxTitleClass } from '@/components/ui/primitives'
import { Icon } from '@/components/ui/Icon'

// Rendered at build time: the month updates on every deploy.
const monthOf = (lang: Locale) =>
  new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { month: 'long', year: 'numeric' }).format(new Date())

/** About + contact. The reference shows a portrait on the start side; without one, that column holds facts. */
export function AboutSection({ lang, t, channels }: { lang: Locale; t: Copy; channels: Social[] }) {
  const facts = [
    { label: t.about.based, value: profile.location[lang] },
    { label: t.about.focus, value: profile.focus.join(' · '), ltr: true },
    { label: t.resume.languages, value: languages.map((l) => `${l.name[lang]} (${l.level[lang]})`).join(lang === 'fa' ? '، ' : ', ') },
  ]

  return (
    <section id="about" aria-labelledby="about-title" data-reveal className="scroll-mt-[80px] py-10 sm:py-12 md:py-14 lg:py-16">
      <Container narrow>
        <div className="flex flex-col">
          <Kicker>{t.about.kicker}</Kicker>
          <h2 id="about-title" className="mt-[12px] text-balance text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-fg sm:text-[28px] md:text-[32px]">
            {t.about.title}
          </h2>
          <p className="mt-[16px] max-w-[40em] text-pretty text-[15px] leading-[1.5] text-secondary sm:text-[16px]">{t.about.description}</p>
        </div>

        <div className="mt-[32px] flex flex-col items-start gap-x-[64px] gap-y-[32px] md:mt-[48px] lg:flex-row">
          <div className="w-full shrink-0 lg:max-w-[320px]">
            <dl className="border border-line bg-card p-6">
              {facts.map((f) => (
                <div key={f.label} className="border-b border-line py-3 first:pt-0 last:border-b-0 last:pb-0">
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd dir={f.ltr ? 'ltr' : undefined} className="mt-1 text-[14px] text-fg rtl:text-end">
                    {f.value}
                  </dd>
                </div>
              ))}
              <div className="mt-3 border-t border-line pt-3">
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {t.about.now} · <time>{monthOf(lang)}</time>
                </dt>
                <dd className="mt-1 text-[14px] leading-relaxed text-secondary">{t.about.nowText}</dd>
              </div>
            </dl>
          </div>

          <div className="flex max-w-[720px] flex-1 flex-col gap-[16px]">
            <p className="text-pretty text-[16px] leading-relaxed text-fg sm:text-[17px] lg:text-[18px] rtl:leading-[2]">{t.about.lead}</p>
            {t.about.notes.map((n) => (
              <p key={n} className="text-pretty text-[15px] leading-relaxed text-secondary sm:text-[16px] rtl:leading-[2]">
                {n}
              </p>
            ))}

            <div id="contact" className="mt-6 scroll-mt-[96px] border-t border-line pt-6">
              <span className={boxTitleClass}>{t.contact.channels}</span>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">{t.contact.text}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {channels.map((c) => {
                  const cls =
                    'group flex items-center justify-between gap-3 border border-line bg-card p-3 transition-all hover:border-line-strong hover:bg-surface-hover'
                  const inner = (
                    <>
                      <span className="flex min-w-0 flex-col">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted">{c.label}</span>
                        <span dir="ltr" className="truncate text-[13px] font-medium text-fg rtl:text-end">
                          {displayUrl(c.href.startsWith('/') ? `${SITE_URL}${c.href}` : c.href)}
                        </span>
                      </span>
                      <Icon name={c.icon} className="size-4 shrink-0 text-muted transition-colors group-hover:text-fg" />
                    </>
                  )
                  return (
                    <li key={c.href}>
                      {c.href.startsWith('/') ? (
                        <Link href={c.href} className={cls}>
                          {inner}
                        </Link>
                      ) : (
                        <a href={c.href} target="_blank" rel="me noopener noreferrer" className={cls}>
                          {inner}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
