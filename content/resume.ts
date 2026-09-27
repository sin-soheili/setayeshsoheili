import type { Education, Experience, Language, SkillGroup } from './types'

export const experience: Experience[] | null = [

  {
    title: { fa: 'مهندس نرم‌افزار', en: 'Software Engineer' },
    org: { fa: 'فریلنس / مستقل', en: 'Freelance / Independent' },
    period: { fa: '2024 — اکنون', en: '2024 — PRESENT' },
    description: {
      fa: 'طراحی و توسعه‌ی نرم‌افزار، backend، ربات‌های پیام‌رسان، automation، API و وب‌اپلیکیشن برای پروژه‌های واقعی.',
      en: 'Designing and developing software, backend systems, messaging bots, automation workflows, APIs, and web applications for real-world projects.',
    },
  },

  {
    title: { fa: 'مدرس آزاد برنامه‌نویسی', en: 'Freelance Programming Instructor' },
    org: { fa: 'آموزش آزاد', en: 'Independent Teaching' },
    period: { fa: '۱۴۰۲ — اکنون', en: '2023 — PRESENT' },
    description: {
      fa: 'آموزش آزاد برنامه‌نویسی با تمرکز بر Python و توسعه‌ی Frontend، همراه با آموزش مفاهیم و پیاده‌سازی پروژه‌محور.',
      en: 'Independent programming instruction focused on Python and frontend development, combining core concepts with project-based implementation.',
    },
  },

  {
    title: { fa: 'مؤسس و مدیر شرکت', en: 'Founder & Managing Director' },
    org: { fa: 'نیک پیوند نوین هیرکان', en: 'Nik Peyvand Novin Hirkan' },
    period: { fa: '۱۴۰۳ — اکنون', en: '2024 — PRESENT' },
    description: {
      fa: 'تأسیس و فعالیت در زمینه‌ی طراحی و توسعه‌ی نرم‌افزار، وب‌سایت و ربات‌های پیام‌رسان.',
      en: 'Founded and operating a software development company focused on designing and developing software, websites, and messaging bots.',
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
