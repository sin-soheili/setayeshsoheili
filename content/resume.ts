import type { Education, Experience, Language, SkillGroup } from './types'

export const experience: Experience[] | null = [

  {
    title: { fa: 'مدرس آزاد برنامه‌نویسی', en: 'Freelance Programming Instructor' },
    org: { fa: 'آموزش آزاد', en: 'Independent Teaching' },
    period: { fa: '۱۴۰۲ — اکنون', en: '2023 — PRESENT' },
    description: {
      fa: 'آموزش برنامه‌نویسی با پایتون و ساخت بخش‌های قابل‌مشاهدهٔ وب‌سایت، با تمرین و ساخت پروژه.',
      en: 'Teaching Python and how to build the visible parts of websites, with hands-on projects.',
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

  {
    title: { fa: 'مهندس نرم‌افزار', en: 'Software Engineer' },
    org: { fa: 'فریلنس / مستقل', en: 'Freelance / Independent' },
    period: { fa: '۱۴۰۵ — اکنون', en: '2026 — PRESENT' },
    description: {
      fa: 'ساخت برنامه‌های تحت وب، ربات‌های پیام‌رسان و ابزارهایی برای خودکار کردن کارها یا اتصال برنامه‌ها به یکدیگر.',
      en: 'Building web apps, messaging bots, and tools that automate tasks or connect different apps.',
    },
  },
]

// TODO: fill in once verified — null hides the Education block. Shape:
// [{ degree: { fa, en }, institution: { fa, en }, location: { fa, en }, period: { fa, en } }]
export const education: Education[] | null = [
  {
    degree: {
      fa: "کاردانی نرم‌افزار",
      en: "Associate Degree in Software Engineering",
    },
    institution: {
      fa: "دانشکده فنی مائده گرگان",
      en: "Maedeh Technical College of Gorgan",
    },
    location: {
      fa: "گرگان، ایران",
      en: "Gorgan, Iran",
    },
    period: { fa: '۲۰۲۳ — ۲۰۲۵', en: '2023 — 2025' },
  },
  {
    degree: {
      fa: "دیپلم شبکه و نرم‌افزار رایانه",
      en: "Diploma in Computer Networks and Software",
    },
    institution: {
      fa: "هنرستان فنی و حرفه‌ای بعثت",
      en: "Besat Technical and Vocational High School",
    },
    location: {
      fa: "گرگان، ایران",
      en: "Gorgan, Iran",
    },
    period: { fa: '۲۰۲۰ — ۲۰۲۳', en: '2020 — 2023' },
  },
]

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
