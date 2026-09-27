import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Geist, Geist_Mono, Vazirmatn } from 'next/font/google'
import { profile, seo } from '@/content/profile'
import { blogTranslationMap, getPosts } from '@/lib/blog'
import { dirOf, otherLocale } from '@/lib/i18n'
import { allSkills, langParams, resolveLang, type LangParams } from '@/lib/params'
import { listedProjects, projectPages } from '@/lib/projects'
import { SITE_URL } from '@/lib/site'
import { githubUrl, socials } from '@/lib/social'
import { Header, type NavItem } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { CommandMenu, type CommandItem } from '@/components/chrome/CommandMenu'
import { ProjectRail } from '@/components/chrome/ProjectRail'
import { SocialDock } from '@/components/chrome/SocialDock'
import { ProjectTicker, SkillTicker } from '@/components/chrome/Tickers'
import { ClientEffects } from '@/components/chrome/ClientEffects'
import '../globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })
const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazirmatn', display: 'swap' })

export const dynamicParams = false
export const generateStaticParams = langParams

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
  viewportFit: 'cover',
}

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang } = await resolveLang(params)
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: seo[lang].title, template: lang === 'fa' ? '%s | ستایش سهیلی' : '%s — Setayesh Soheili' },
    description: seo[lang].description,
    applicationName: profile.name[lang],
    authors: [{ name: profile.name[lang], url: `${SITE_URL}/${lang}` }],
    creator: profile.name.en,
    appleWebApp: { capable: true, title: 'Setayesh', statusBarStyle: 'default' },
    formatDetection: { telephone: false, email: false, address: false },
  }
}

// Runs before paint: stored theme (light by default, like the reference) and the `js` flag for reveals.
const bootScript = `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}document.documentElement.classList.add('js')`

export default async function LangLayout({ children, params }: LangParams & { children: ReactNode }) {
  const { lang, t } = await resolveLang(params)
  const name = profile.name[lang]
  const home = `/${lang}`

  const nav: NavItem[] = [
    { href: `${home}/work`, label: t.nav.work },
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#about`, label: t.nav.about },
    { href: `${home}/blog`, label: t.nav.blog },
    { href: githubUrl, label: t.nav.github, external: true },
  ]
  const footerLinks: NavItem[] = [
    { href: `${home}/work`, label: t.nav.work },
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#about`, label: t.nav.about },
    { href: `${home}/blog`, label: t.nav.blog },
    { href: `${home}/resume`, label: t.nav.resume },
    ...socials(lang, t.nav.resume)
      .filter((s) => s.href.startsWith('http'))
      .map((s) => ({ href: s.href, label: s.label, external: true })),
  ]
  const dock = socials(lang, t.nav.resume)

  const types = t.command.types
  const commands: CommandItem[] = [
    { label: t.command.home, type: types.section, href: home },
    { label: t.nav.work, type: types.page, href: `${home}/work` },
    { label: t.experience.kicker, type: types.section, href: `${home}#experience` },
    { label: t.capabilities.kicker, type: types.section, href: `${home}#capabilities` },
    { label: t.activity.kicker, type: types.section, href: `${home}#activity` },
    { label: t.about.kicker, type: types.section, href: `${home}#about` },
    { label: t.contact.kicker, type: types.section, href: `${home}#contact` },
    { label: t.nav.blog, type: types.page, href: `${home}/blog` },
    { label: t.nav.resume, type: types.page, href: `${home}/resume` },
    ...projectPages.map((p) => ({ label: p.title, type: types.project, href: `${home}/work/${p.slug}`, keywords: p.tags.join(' ') })),
    ...getPosts(lang).map((p) => ({ label: p.title, type: types.article, href: `${home}/blog/${p.slug}`, keywords: p.tags.join(' ') })),
    { label: t.command.toggleTheme, type: types.action, action: 'toggle-theme' as const, keywords: 'dark light theme' },
    { label: t.command.switchLanguage, type: types.action, href: `/${otherLocale(lang)}`, keywords: 'language fa en' },
    { label: 'GitHub', type: types.link, href: githubUrl },
  ]

  return (
    <html
      lang={lang}
      dir={dirOf(lang)}
      className={`${geist.variable} ${geistMono.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <div className="flex min-h-screen flex-col pb-[116px] pe-0 ps-0 sm:pb-[128px] md:pe-[48px] lg:pb-[42px] lg:pe-[64px] lg:ps-[230px] xl:pe-[72px] xl:ps-[260px]">
          <a
            href="#main"
            className="sr-only border border-line-strong bg-elevated px-4 py-2 text-[14px] font-medium text-fg shadow-md focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60]"
          >
            {t.skip}
          </a>
          <Header
            lang={lang}
            name={name}
            nav={nav}
            channels={dock}
            blogTranslations={blogTranslationMap()}
            t={{ ...t.nav, channels: t.contact.channels }}
          />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer name={name} links={footerLinks} label={t.nav.label} />
          <SocialDock items={dock} label={t.dock} />
          <ProjectRail projects={listedProjects} lang={lang} title={t.rail} kinds={t.project.kinds} />
          <ProjectTicker projects={projectPages} lang={lang} label={t.tickerProjects} />
          <SkillTicker skills={allSkills} label={t.tickerSkills} />
        </div>
        <CommandMenu items={commands} t={t.command} />
        <ClientEffects copied={t.copied} />
      </body>
    </html>
  )
}
