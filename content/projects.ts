import type { Project } from './types'

// Metadata lives here; the page body (its own sections) lives in content/work/<fa|en>/<slug>.md.
// Order = archive order. Set to null (or []) to hide the work archive entirely.
export const projects: Project[] | null = [
  {
    slug: 'chatpack',
    title: 'ChatPack',
    kind: 'open-source',
    domain: 'Python',
    group: 'selected',
    featured: true,
    tags: ['Telegram', 'Automation', 'Web'],
    stack: ['Python', 'Pyrogram', 'Telegram'],
    repo: 'ChatPack',
    summary: {
      fa: 'مجموعه‌ای از ابزارها و زیرساخت‌ها برای ساخت تجربه‌های تعاملی در ربات‌های پیام‌رسان.',
      en: 'A collection of tools and infrastructure for building interactive experiences in messaging bots.',
    },
    links: [{ label: { fa: 'PyPI', en: 'PyPI' }, href: 'https://pypi.org/project/chatpack-ui/' }],
  },
  {
    slug: 'safepad',
    title: 'SafePad',
    kind: 'open-source',
    domain: 'Python',
    group: 'earlier',
    featured: true,
    tags: ['CLI', 'Encryption'],
    stack: ['Python', 'cryptography', 'Rich'],
    repo: 'SafePad',
    summary: {
      fa: 'یک برنامه‌ی ترمینالی برای مدیریت یادداشت‌های رمزنگاری‌شده.',
      en: 'A terminal-based manager for encrypted notes.',
    },
  },
  {
    slug: 'steganography',
    title: 'Steganography',
    // TODO: confirm "coursework" (commit history suggests the CS50 final project).
    domain: 'Python',
    group: 'earlier',
    featured: true,
    tags: ['Desktop', 'Image Processing'],
    stack: ['Python', 'Tkinter', 'Pillow', 'NumPy'],
    repo: 'Steganography',
    summary: {
      fa: 'یک ابزار دسکتاپ برای پنهان کردن متن داخل تصویر و بیرون کشیدن دوباره‌ی آن.',
      en: 'A desktop tool for hiding text messages inside images and extracting them again.',
    },
    links: [{ label: { fa: 'ویدیوی دمو', en: 'Demo video' }, href: 'https://youtu.be/wvBCzq1HGRc' }],
    media: {
      src: '/images/work/steganography/encode.webp',
      alt: { fa: 'تب Encode در ابزار Steganography', en: 'The Encode tab of the Steganography tool' },
      width: 446,
      height: 481,
      caption: { fa: 'تب Encode: انتخاب تصویر، متن و مسیر خروجی.', en: 'Encode tab: pick an image, the text, and an output path.' },
    },
    gallery: [
      { src: '/images/work/steganography/decode.webp', alt: { fa: 'تب Decode', en: 'The Decode tab' }, width: 446, height: 481 },
      { src: '/images/work/steganography/convert.webp', alt: { fa: 'تب تبدیل به PNG', en: 'The Convert to PNG tab' }, width: 446, height: 481 },
      { src: '/images/work/steganography/example.webp', alt: { fa: 'نمونه‌ی خروجی', en: 'Example output' }, width: 446, height: 481 },
    ],
  },
  {
    slug: 'leecode',
    title: 'LeeCode',
    kind: 'open-source',
    domain: 'VS Code',
    group: 'earlier',
    tags: ['Extension', 'Developer Tools'],
    stack: ['JavaScript', 'VS Code'],
    repo: 'leecode',
    summary: {
      fa: 'یک افزونه‌ی انتخاب رنگ (Color Picker) برای Visual Studio Code.',
      en: 'A color picker extension for Visual Studio Code.',
    },
    media: {
      src: '/images/work/leecode/color-picker.webp',
      alt: { fa: 'پنل انتخاب رنگ LeeCode با اسلایدرهای RGB و کد hex', en: 'The LeeCode picker panel with RGB sliders and the hex value' },
      width: 590,
      height: 580,
    },
  },
  {
    slug: 'mope',
    title: 'Mope',
    domain: 'Web',
    group: 'earlier',
    tags: ['Map', 'To-do'],
    stack: ['Leaflet.js', 'HTML', 'CSS', 'JavaScript'],
    repo: 'Mope',
    summary: {
      fa: 'یک برنامه‌ی تودو روی نقشه‌ی تعاملی؛ کارها به مکان‌ها وصل می‌شوند.',
      en: 'A to-do app on an interactive map, where tasks are attached to places.',
    },
    live: 'https://mope-map.netlify.app/',
  },
]
