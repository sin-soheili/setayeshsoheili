import type { Project } from "./types";

// Metadata lives here; the page body (its own sections) lives in content/work/<fa|en>/<slug>.md.
// Order = archive order. Set to null (or []) to hide the work archive entirely.
export const projects: Project[] | null = [
  {
    slug: "chatpack",
    title: "ChatPack",
    kind: "open-source",
    domain: "Python",
    group: "selected",
    featured: true,
    tags: ["Telegram", "Automation", "Web"],
    stack: ["Python", "Pyrogram", "Telegram"],
    repo: "ChatPack",
    media: {
      src: "/images/work/chatpack/backpack.jpg",
      alt: {
        fa: "رابط کاربری ChatPack",
        en: "ChatPack user interface",
      },
      caption: {
        fa: "بخشی از رابط کاربری و قابلیت‌های ChatPack.",
        en: "A look at the ChatPack interface and its features.",
      },
    },
    summary: {
      fa: "مجموعه‌ای از ابزارها و زیرساخت‌ها برای ساخت تجربه‌های تعاملی در ربات‌های پیام‌رسان.",
      en: "A collection of tools and infrastructure for building interactive experiences in messaging bots.",
    },
    links: [
      {
        label: { fa: "PyPI", en: "PyPI" },
        href: "https://pypi.org/project/chatpack-ui/",
      },
    ],
  },
  {
    slug: "animasync",

    title: "AnimaSync",

    kind: "open-source",

    domain: "Animation",

    group: "selected",

    featured: true,

    tags: ["Animation", "Lip Sync", "Open Source"],

    stack: ["React", "Web Audio", "JavaScript"],

    repo: "AnimaSync",

    media: {
      src: "/images/work/animasync/desktop.png",
      alt: {
        fa: "رابط کاربری AnimaSync",
        en: "AnimaSync user interface",
      },
      caption: {
        fa: "بخشی از رابط کاربری و قابلیت‌های AnimaSync.",
        en: "A look at the AnimaSync interface and its features.",
      },
    },

    summary: {
      fa: "یک ابزار سبک برای ساخت lip-sync در انیمیشن‌های دوبعدی؛ با تمرکز روی کنترل فریم‌ها و یک workflow ساده برای صدا، پیش‌نمایش و خروجی.",

      en: "A lightweight tool for 2D animation lip-sync, focused on frame control and a simple workflow for audio, preview, and export.",
    },
  },
  {
    slug: "safepad",
    title: "SafePad",
    kind: "open-source",
    domain: "Python",
    group: "earlier",
    featured: true,
    tags: ["CLI", "Encryption"],
    stack: ["Python", "cryptography", "Rich"],
    repo: "SafePad",
    summary: {
      fa: "یک برنامه‌ی ترمینالی برای مدیریت یادداشت‌های رمزنگاری‌شده.",
      en: "A terminal-based manager for encrypted notes.",
    },
  },
  {
    slug: "steganography",
    title: "Steganography",
    // TODO: confirm "coursework" (commit history suggests the CS50 final project).
    kind:"coursework",
    domain: "Python",
    group: "earlier",
    featured: true,
    tags: ["Desktop", "Image Processing"],
    stack: ["Python", "Tkinter", "Pillow", "NumPy"],
    repo: "Steganography",
    summary: {
      fa: "یک ابزار دسکتاپ برای پنهان کردن متن داخل تصویر و بیرون کشیدن دوباره‌ی آن.",
      en: "A desktop tool for hiding text messages inside images and extracting them again.",
    },
    links: [
      {
        label: { fa: "ویدیوی دمو", en: "Demo video" },
        href: "https://youtu.be/wvBCzq1HGRc",
      },
    ],
    media: {
      src: "/images/work/steganography/encode.webp",
      alt: {
        fa: "تب Encode در ابزار Steganography",
        en: "The Encode tab of the Steganography tool",
      },
      caption: {
        fa: "تب Encode: انتخاب تصویر، متن و مسیر خروجی.",
        en: "Encode tab: pick an image, the text, and an output path.",
      },
    },
    gallery: [
      {
        src: "/images/work/steganography/decode.webp",
        alt: { fa: "تب Decode", en: "The Decode tab" },
      },
      {
        src: "/images/work/steganography/convert.webp",
        alt: { fa: "تب تبدیل به PNG", en: "The Convert to PNG tab" },
      },
      {
        src: "/images/work/steganography/example.webp",
        alt: { fa: "نمونه‌ی خروجی", en: "Example output" },
      },
    ],
  },
  {
    slug: "leecode",
    title: "LeeCode",
    kind: "open-source",
    domain: "VS Code",
    group: "earlier",
    tags: ["Extension", "Developer Tools"],
    stack: ["JavaScript", "VS Code"],
    repo: "leecode",
    summary: {
      fa: "یک افزونه‌ی انتخاب رنگ (Color Picker) برای Visual Studio Code.",
      en: "A color picker extension for Visual Studio Code.",
    },
    media: {
      src: "/images/work/leecode/color-picker.webp",
      alt: {
        fa: "پنل انتخاب رنگ LeeCode با اسلایدرهای RGB و کد hex",
        en: "The LeeCode picker panel with RGB sliders and the hex value",
      },
    },
  },
  {
    slug: "ghararcafe",
    title: "ghararcafe",
    kind: "client",
    domain: "Web",
    group: "selected",
    featured: true,
    tags: ["Digital Menu", "Django", "Tailwind"],
    stack: ["Python", "Django", "Tailwind CSS"],
    summary: {
      fa: "منوی آنلاین اختصاصی کافه قرار، همراه با پنل مدیریت برای مدیریت آیتم‌ها، دسته‌بندی‌ها، قیمت‌ها و محتوای منو.",
      en: "A custom digital menu for Gharar Cafe, with a dedicated management panel for managing menu items, categories, prices, and content.",
    },
    live: "https://ghararcafe.ir/",
    media: {
      src: "/images/work/ghararcafe/desktop.png",
      alt: {
        fa: "رابط کاربری کافه قرار",
        en: "Gharar Cafe user interface",
      },
      caption: {
        fa: "بخشی از رابط کاربری و قابلیت‌های Gharar Cafe.",
        en: "A look at the Gharar Cafe interface and its features.",
      },
    },
  },
  {
    slug: "rezapiri",
    title: "rezapiri",
    kind: "client",
    domain: "Web",
    group: "selected",
    featured: true,
    tags: ["Business Website", "Django", "Tailwind"],
    stack: ["Python", "Django", "Tailwind CSS"],
    summary: {
      fa: "وبسایت شخصی رضا پیری، شامل معرفی خدمات، امکان اجاره تجهیزات عکاسی، رزرو وقت مشاوره بیزنس کوچینگ و فرم ارتباط با مخاطبان.",
      en: "A personal website for Reza Piri, featuring service introduction, photography equipment rental, business coaching consultation booking, and a contact form.",
    },
    live: "http://website.rezapiri.ir/",
    media: {
      src: "/images/work/rezapiri/image.png",
      alt: {
        fa: "رابط کاربری وبسایت رضا پیری",
        en: "Reza Piri personal website interface",
      },
      caption: {
        fa: "نمایی از صفحه اصلی وبسایت شخصی رضا پیری.",
        en: "A look at the hero section of Reza Piri's personal website.",
      },
    },
  },
  {
  slug: "lapatlas",
  title: "LAPATLAS",
  kind: "experiment",
  domain: "Interactive Web",
  group: "selected",
  featured: true,
  tags: ["3D Web", "Interactive Atlas", "AI Assisted"],
  stack: ["Three.js", "WebGL", "JavaScript", "AI Tools"],
  summary: {
    fa: "اطلس تعاملی سه‌بعدی لپ‌تاپ که امکان مشاهده، جداسازی و بررسی اجزای داخلی دستگاه مانند مادربرد، CPU، GPU، RAM، NVMe، باتری و سیستم خنک‌کننده را فراهم می‌کند.",
    en: "An interactive 3D laptop atlas that allows users to explore, separate, and inspect internal components such as the motherboard, CPU, GPU, RAM, NVMe, battery, and cooling system.",
  },
  live: "https://lapatlas.samansoheili-is-here.workers.dev/",
  gallery: [
      {
        src: "/images/work/lapatlas/image.jpg",
        alt: { fa: "اطلس تعاملی لپتاپ  ", en: "Laptop Atlas" },
      },
      {
        src: "/images/work/lapatlas/image2.jpg",
        alt: { fa: "اطلس تعاملی لپتاپ  ", en: "Laptop Atlas" },
      },
      {
        src: "/images/work/lapatlas/image3.jpg",
        alt: { fa: "اطلس تعاملی لپتاپ  ", en: "Laptop Atlas" },
      },
    ],
  media: {
    src: "/images/work/lapatlas/image.jpg",
    alt: {
      fa: "اطلس سه‌بعدی تعاملی LAPATLAS",
      en: "LAPATLAS interactive 3D atlas",
    },
    caption: {
      fa: "نمایی از محیط تعاملی LAPATLAS و مدل سه‌بعدی قطعات لپ‌تاپ.",
      en: "A look at the LAPATLAS interactive environment and 3D laptop components.",
    },
  },
},
];
