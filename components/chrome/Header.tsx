'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { locales, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'
import { Brand } from './Brand'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu, type MenuChannel } from './MobileMenu'

export type NavItem = { href: string; label: string; external?: boolean }

type Props = {
  lang: Locale
  name: string
  nav: NavItem[]
  channels: MenuChannel[]
  blogTranslations: Record<string, string>
  t: {
    label: string
    language: string
    command: string
    openMenu: string
    closeMenu: string
    toDark: string
    toLight: string
    home: string
    channels: string
  }
}

/** Same page in the other language; untranslated posts fall back to the blog index. */
export function useAlternatePath(lang: Locale, blogTranslations: Record<string, string>) {
  const pathname = usePathname()
  const rest = pathname.replace(/^\/(fa|en)(?=\/|$)/, '').replace(/\/$/, '')
  return (target: Locale) => {
    if (target === lang) return `/${lang}${rest}`
    const post = rest.match(/^\/blog\/([^/]+)$/)
    if (post) {
      const translated = blogTranslations[`${lang}/${post[1]}`]
      return `/${target}${translated ? `/blog/${translated}` : '/blog'}`
    }
    return `/${target}${rest}`
  }
}

export const openCommandMenu = () => window.dispatchEvent(new Event('command:open'))

function LanguageSwitch({ lang, label, blogTranslations }: { lang: Locale; label: string; blogTranslations: Record<string, string> }) {
  const alternate = useAlternatePath(lang, blogTranslations)
  return (
    <div role="group" aria-label={label} dir="ltr" className="flex h-8 items-stretch border border-line-strong font-mono text-[12px] font-medium">
      {locales.map((l) => (
        <Link
          key={l}
          href={alternate(l)}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? 'true' : undefined}
          className={cn('flex items-center px-2.5 uppercase transition-colors', l === lang ? 'bg-fg text-bg' : 'text-secondary hover:bg-surface-hover hover:text-fg')}
        >
          {l}
        </Link>
      ))}
    </div>
  )
}

export function Header({ lang, name, nav, channels, blogTranslations, t }: Props) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isActive = (href: string) => !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-10 h-[56px] w-full border-b border-line bg-elevated/80 backdrop-blur-[12px] transition-[background-color,border-color] duration-150 md:h-[64px]">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-[20px] md:px-[32px] lg:px-[48px]">
        <Brand href={`/${lang}`} name={name} label={t.home} />

        <div className="flex items-center">
          <div className="hidden items-center gap-[32px] md:flex">
            <nav aria-label={t.label}>
              <ul className="flex items-center gap-[24px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium tracking-[0.02em] text-secondary transition-colors duration-150 hover:text-fg">
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className="text-[13px] font-medium tracking-[0.02em] text-secondary transition-colors duration-150 hover:text-fg aria-[current=page]:text-fg"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-[8px]">
              <button
                type="button"
                onClick={openCommandMenu}
                aria-label={t.command}
                className="inline-flex h-[32px] select-none items-center justify-center border border-line-strong bg-transparent px-[10px] font-mono text-[12px] font-medium text-secondary transition-colors hover:bg-surface hover:text-fg"
              >
                <span dir="ltr">Ctrl+K</span>
              </button>
              <LanguageSwitch lang={lang} label={t.language} blogTranslations={blogTranslations} />
              <ThemeToggle toDark={t.toDark} toLight={t.toLight} />
            </div>
          </div>

          <div className="flex items-center gap-[4px] md:hidden">
            <LanguageSwitch lang={lang} label={t.language} blogTranslations={blogTranslations} />
            <ThemeToggle toDark={t.toDark} toLight={t.toLight} />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.openMenu}
              aria-expanded={menuOpen}
              className="relative inline-flex size-10 items-center justify-center text-secondary transition-colors hover:bg-surface-hover hover:text-fg"
            >
              <Icon name="menu" className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu
          lang={lang}
          name={name}
          nav={nav}
          channels={channels}
          onClose={() => setMenuOpen(false)}
          t={{ label: t.label, close: t.closeMenu, home: t.home, channels: t.channels }}
        />
      )}
    </header>
  )
}
