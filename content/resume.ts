import type { Education, Experience, Language, SkillGroup } from './types'

export const experience: Experience[] | null = [
  {
    title: 'Software Engineer',
    org: { fa: 'فریلنس / مستقل', en: 'Freelance / Independent' },
    period: { fa: '2024 — اکنون', en: '2024 — PRESENT' },
    description: {
      fa: 'طراحی و توسعه‌ی نرم‌افزار، backend، ربات‌های پیام‌رسان، automation، API و وب‌اپلیکیشن برای پروژه‌های واقعی.',
      en: 'Designing and developing software, backend systems, messaging bots, automation workflows, APIs, and web applications for real-world projects.',
    },
  },
  {
    title: 'Software Development',
    period: { fa: 'پروژه‌های منتخب', en: 'SELECTED PROJECTS' },
    description: {
      fa: 'تجربه‌ی ساخت پروژه‌های مختلف از ربات و automation تا وب‌سایت، API و سیستم‌های داخلی.',
      en: 'Hands-on experience building different projects, from bots and automation to websites, APIs, and internal systems.',
    },
  },
]

// TODO: fill in once verified — null hides the Education block. Shape:
// [{ degree: { fa, en }, institution: { fa, en }, location: { fa, en }, period: '20xx — 20xx' }]
export const education: Education[] | null = null

export const skills: SkillGroup[] = [
  { label: 'Backend', items: ['Python', 'Django', 'FastAPI', 'REST API', 'Async', 'SQLAlchemy'] },
  { label: 'Automation', items: ['Telegram Bots', 'Bale Bots', 'Scraping', 'APIs', 'Workflow Automation'] },
  { label: 'Data', items: ['PostgreSQL', 'SQLite', 'Redis'] },
  { label: 'Infrastructure', items: ['Linux', 'Docker', 'Nginx', 'Cloudflare'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'] },
  { label: 'Other', items: ['WordPress', 'WooCommerce', 'Git'] },
]

export const languages: Language[] = [
  { name: { fa: 'فارسی', en: 'Persian' }, level: { fa: 'زبان مادری', en: 'Native' } },
  { name: { fa: 'انگلیسی', en: 'English' }, level: { fa: 'در حد کاری', en: 'Working proficiency' } },
]
