import type { ContactLink } from './types'

export const profile = {
  name: { fa: 'ستایش سهیلی', en: 'Setayesh Soheili' },
  displayName: ['SETAYESH', 'SOHEILI'],
  title: 'Software Engineer',
  focus: ['Python', 'Backend', 'Bots', 'Automation'],
  location: { fa: 'گرگان، ایران', en: 'Gorgan, Iran' },
  summary: {
    fa: 'برنامه‌نویس نرم‌افزار با تمرکز روی Python، backend، ربات‌ها و automation. تجربه‌ی ساخت پروژه‌های واقعی و کار با سرویس‌ها و سیستم‌های مختلف.',
    en: 'Software Engineer focused on Python, backend development, bots, automation, and web software. Experienced in building real-world projects across different software systems and services.',
  },
  knowsAbout: ['Python', 'Backend Development', 'Web Development', 'Telegram Bots', 'Automation'],
}

export const seo = {
  fa: {
    title: 'ستایش سهیلی | برنامه‌نویس و طراح وبسایت در گرگان',
    description:
      'ستایش سهیلی، برنامه‌نویس و طراح وبسایت در گرگان؛ Software Engineer با تمرکز روی Python، Backend، ربات‌ها و اتوماسیون.',
  },
  en: {
    title: 'Setayesh Soheili | Software Engineer in Gorgan',
    description:
      'Setayesh Soheili is a Software Engineer in Gorgan, Iran, focused on Python, backend development, bots, automation, and web software.',
  },
}

// href: null hides the link.
export const links: ContactLink[] = [
  { label: { fa: 'ایمیل', en: 'Email' }, href: 'mailto:sinsoheili11@gmail.com' },
  { label: { fa: 'گیت‌هاب', en: 'GitHub' }, href: 'https://github.com/sin-soheili' },
  { label: { fa: 'تلگرام', en: 'Telegram' }, href: 'https://t.me/TheNewbieBackpack' },
  { label: { fa: 'کانال توسعه', en: 'Developer channel' }, href: 'https://t.me/backpack_dev' },
  { label: { fa: 'لینکدین', en: 'LinkedIn' }, href: 'https://ir.linkedin.com/in/sin-soheili' },
  { label: { fa: 'اینستاگرام', en: 'Instagram' }, href: 'https://www.instagram.com/setayesh_soheili__/' },
]
