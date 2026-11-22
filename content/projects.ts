import type { Project } from "./types";

// Metadata lives here; the page body (its own sections) lives in content/work/<fa|en>/<slug>.md.
// Order = archive order. Set to null (or []) to hide the work archive entirely.
export const projects: Project[] | null = [
  {
    slug: "daypack",
    title: "Daypack",
    domain: "Web",
    group: "selected",
    featured: true,
    tags: ["Daily Planning", "Tasks", "Habits"],
    live: "https://daypack.setayesh-soheili.ir/",
    summary: {
      fa: "یک برنامه برای برنامه‌ریزی روزانه و پیگیری کارها، عادت‌ها و هدف‌ها، با تمرکز بر نگه‌داشتن اطلاعات روی دستگاه خودت و گرفتن نسخهٔ پشتیبان.",
      en: "An app for planning your days and keeping track of tasks, habits, and goals, built around keeping your data on your own device and being able to back it up.",
    },
  },
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
      fa: "ابزاری برای ساخت ربات‌های تلگرام که می‌توانند از کاربر سؤال بپرسند، جواب بگیرند و عکس جمع کنند.",
      en: "Tools for building Telegram bots that can ask questions, collect answers, and receive photos.",
    },
    links: [
      {
        label: { fa: "PyPI", en: "PyPI" },
        href: "https://pypi.org/project/chatpack-ui/",
      },
    ],
  },
  {
  slug: "fadak",
  title: "Fadak Brick Factory",
  kind: "client",
  domain: "Industrial Web",
  group: "selected",
  featured: true,
  tags: [
    "Industrial Website",
    "Manufacturing",
    "Virtual Tour",
    "SEO"
  ],
  stack: [
    "Next.js",
    "360° Photography",
    "Technical SEO"
  ],
  summary: {
    fa: "وب‌سایت کارخانه آجر فدک با بازدید مجازی ۳۶۰ درجه از محیط کارخانه و آشنایی با فرایند تولید آجر.",
    en: "A website for Fadak Brick Factory, with a 360-degree virtual tour of the factory and a look at how the bricks are made."
  },
  live: "https://fadakajor.com/",
  media: {
    src: "/images/work/fadak/desktop.png",
    alt: {
      fa: "وب‌سایت کارخانه آجر فدک",
      en: "Fadak Brick Factory website"
    },
    caption: {
      fa: "معرفی دیجیتال کارخانه آجر فدک و تجربه تعاملی محیط تولید.",
      en: "Fadak's digital presence and interactive factory experience."
    }
  },
  links: [
    {
      label: {
        fa: "تجربه تعاملی کارخانه",
        en: "Interactive Factory Experience"
      },
      href: "https://factory.fadakajor.com/"
    }
  ]
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
      fa: "ابزاری که حرکت دهان شخصیت‌های انیمیشن دوبعدی را با صدای گفت‌وگو هماهنگ می‌کند.",

      en: "A tool that matches a 2D animated character’s mouth movements to recorded dialogue.",
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
      fa: "ابزاری برای نوشتن و نگه‌داشتن یادداشت‌های رمزگذاری‌شده، قابل استفاده با دستورهای متنی.",
      en: "A tool for writing and storing encrypted notes using text commands.",
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
      fa: "ابزاری برای انتخاب رنگ داخل ویرایشگر کد Visual Studio Code.",
      en: "A tool for picking colors inside the Visual Studio Code editor.",
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
      fa: "منوی آنلاین کافه قرار که کارکنان کافه می‌توانند گزینه‌ها، دسته‌بندی‌ها و قیمت‌هایش را به‌روزرسانی کنند.",
      en: "An online menu for Gharar Cafe that staff can update with new items, categories, and prices.",
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
      fa: "وب‌سایت رضا پیری برای معرفی خدمات، اجارهٔ تجهیزات عکاسی، رزرو مشاورهٔ کسب‌وکار و تماس.",
      en: "Reza Piri’s website for browsing services, renting photography equipment, booking a business consultation, and getting in touch.",
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
    fa: "یک مدل سه‌بعدی از لپ‌تاپ که می‌توانی قطعه‌های داخلش را جدا کنی و از نزدیک ببینی.",
    en: "A 3D laptop model you can take apart to see what’s inside.",
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
