import { links } from '@/content/profile'
import type { IconName } from '@/components/ui/Icon'
import type { Locale } from './i18n'
import { github } from './github'

const icons: Record<string, IconName> = { Email: 'mail', GitHub: 'github', Telegram: 'send', 'Developer channel': 'megaphone', LinkedIn: 'arrowUpRight' }

export type Social = { label: string; href: string; icon: IconName }

/** Real contact links (href: null ones are skipped) plus the resume page. */
export function socials(lang: Locale, resumeLabel: string): Social[] {
  return [
    ...links
      .filter((l): l is typeof l & { href: string } => Boolean(l.href))
      .map((l) => ({ label: l.label[lang], href: l.href, icon: icons[l.label.en] ?? 'arrowUpRight' })),
    { label: resumeLabel, href: `/${lang}/resume`, icon: 'file' as const },
  ]
}

export const githubUrl = github.profileUrl
