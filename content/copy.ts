const fa = {

  skip: 'رفتن به محتوا',

  nav: {
    label: 'ناوبری اصلی',
    work: 'کارها',
    experience: 'تجربه',
    about: 'درباره',
    blog: 'نوشته‌ها',
    resume: 'رزومه',
    github: 'GitHub',
    language: 'زبان',
    openMenu: 'باز کردن منو',
    closeMenu: 'بستن منو',
    command: 'باز کردن جست‌وجو',
    toDark: 'تم تیره',
    toLight: 'تم روشن',
    home: 'ستایش سهیلی، خانه',
  },

  hero: {
    kicker: 'برنامه‌نویس و توسعه‌دهنده نرم‌افزار در گرگان',
    viewProjects: 'همه‌ی پروژه‌ها',
    resume: 'رزومه',
    stats: {
      projects: 'پروژه',
      repos: 'مخزن عمومی',
      contributions: 'مشارکت در GitHub',
      tools: 'ابزار و تکنولوژی',
    },
    showcase: 'پروژه‌های منتخب',
    prev: 'پروژه‌ی قبلی',
    next: 'پروژه‌ی بعدی',
    goTo: (n: number) => `رفتن به پروژه‌ی ${n}`,
  },

  experience: {
    kicker: 'تجربه',
    title: 'کارهایی که تا امروز انجام داده‌ام.',
  },

  capabilities: {
    kicker: 'مهارت‌ها',
    title: 'ابزارهایی که با آن‌ها کار می‌کنم.',
    description: 'بیشتر با Python، backend، ربات‌ها، automation و توسعه‌ی وب کار می‌کنم.',
    tools: (n: number) => `${n.toLocaleString('fa-IR')} مورد`,
    github: 'پروفایل GitHub',
  },

  activity: {
    kicker: 'فعالیت',
    title: 'فعالیت اخیر در GitHub.',
    description: 'مخزن‌های عمومی و بخشی از فعالیت‌های فنی من در GitHub.',
    contributions: 'مشارکت در یک سال گذشته',
    less: 'کمتر',
    more: 'بیشتر',
    repositories: 'مخزن‌ها',
    recent: 'فعالیت اخیر',
    type: {
      commit: 'کامیت',
      release: 'انتشار',
      repo: 'مخزن جدید',
    },
    created: 'ایجاد شد',
  },

  about: {
    kicker: 'درباره',
    title: 'مسیر من و شیوه‌ای که کار می‌کنم.',
    description: 'برنامه‌نویس ساکن گرگان، ایران.',

    lead: 'برنامه‌نویسی را از فرانت‌اند شروع کردم و کم‌کم به بخش‌های عمیق‌تر نرم‌افزار رسیدم. امروز بیشتر با Python، backend، ربات‌ها و automation کار می‌کنم و بیشتر چیزهایی که یاد گرفته‌ام، از دل پروژه‌های واقعی آمده‌اند.',

    notes: [
      'برای من برنامه‌نویسی فقط نوشتن کد نیست؛ دوست دارم بفهمم مسئله‌ی واقعی چیست و نرم‌افزاری که می‌سازم قرار است کجای کار را بهتر کند.',

      'هنوز خودم را در یک عنوان ثابت محدود نمی‌کنم. مسیرم از پروژه‌ای به پروژه‌ی دیگر شکل گرفته و ترجیح می‌دهم کارهایی که ساخته‌ام، بیشتر از یک عنوان درباره‌ام حرف بزنند.',
    ],

    based: 'محل زندگی',
    focus: 'تمرکز',
    now: 'این روزها',

    nowText: 'این روزها بیشتر روی پروژه‌های واقعی، Python، backend، ربات‌ها و automation کار می‌کنم و در کنار آن، به تجربه‌های تازه در نرم‌افزار و حل مسئله فکر می‌کنم.',
  },

  contact: {
    kicker: 'تماس',
    channels: 'راه‌های ارتباط',
    text: 'اگر پروژه، همکاری یا کاری داری که فکر می‌کنی می‌تواند جالب باشد، با من در تماس باش.',
    getInTouch: 'در تماس باشید',
  },

  work: {
    kicker: 'همه‌ی پروژه‌ها // آرشیو',
    title: 'چیزهایی که ساخته‌ام و روی آن‌ها کار کرده‌ام.',
    description: 'پروژه‌های منتخب ستایش سهیلی؛ از نرم‌افزار و ربات‌های پیام‌رسان تا automation و وب.',
    intro: 'آرشیوی از پروژه‌هایی که ساخته‌ام، توسعه داده‌ام یا در روند ساختشان چیز تازه‌ای یاد گرفته‌ام.',
    count: (n: number) => `${n.toLocaleString('fa-IR')} پروژه`,
    earlier: 'پروژه‌های قدیمی‌تر',
    caseStudy: 'مشاهده‌ی پروژه',
    openLive: (name: string) => `باز کردن نسخه‌ی آنلاین ${name}`,
  },

  project: {
    back: 'بازگشت به همه‌ی پروژه‌ها',
    outline: 'فهرست پروژه',
    links: 'لینک‌ها',
    repository: 'مخزن',
    live: 'نسخه‌ی آنلاین',
    source: 'کد منبع',
    liveDeployment: 'نسخه‌ی آنلاین',
    githubRepository: 'مخزن GitHub',
    language: 'زبان',
    stars: 'ستاره',
    forks: 'فورک',
    release: 'آخرین انتشار',
    updated: 'به‌روزرسانی',
    created: 'ایجاد',
    license: 'مجوز',
    previous: 'پروژه‌ی قبلی',
    next: 'پروژه‌ی بعدی',
    gallery: 'تصاویر',
    writing: 'نوشته‌های مرتبط',
    kinds: {
      'open-source': 'متن‌باز',
      client: 'پروژه‌ی مشتری',
      team: 'پروژه‌ی تیمی',
      experiment: 'آزمایشی',
      coursework: 'پروژه‌ی درسی',
    },
  },

  blog: {
    kicker: 'نوشته‌ها // یادداشت‌ها',
    title: 'یادداشت‌هایی درباره‌ی چیزهایی که می‌سازم و یاد می‌گیرم.',
    description: 'نوشته‌ها و یادداشت‌های ستایش سهیلی درباره‌ی نرم‌افزار، backend، ربات‌ها و automation.',
    intro: 'یادداشت‌های فنی، تجربه‌های پروژه‌ای و چیزهایی که در مسیر ساختن یاد گرفته‌ام.',
    count: (n: number) => `${n.toLocaleString('fa-IR')} نوشته‌ی منتشرشده`,
    empty: 'هنوز نوشته‌ای منتشر نشده است.',
    featured: 'ویژه',
    read: 'خواندن',
  },

  article: {
    back: 'همه‌ی نوشته‌ها',
    kicker: 'مقاله',
    outline: 'فهرست مقاله',
    details: 'مشخصات مقاله',
    published: 'انتشار',
    updated: 'به‌روزرسانی',
    readingTime: 'زمان مطالعه',
    minutes: (n: number) => `${n.toLocaleString('fa-IR')} دقیقه مطالعه`,
    tags: 'برچسب‌ها',
    share: 'اشتراک‌گذاری',
    linkCopied: 'لینک کپی شد',
    previous: 'نوشته‌ی قبلی',
    next: 'نوشته‌ی بعدی',
    related: 'پروژه‌ی مرتبط',
  },

  resume: {
    kicker: 'رزومه',
    title: 'رزومه',
    description: 'رزومه‌ی ستایش سهیلی، برنامه‌نویس و توسعه‌دهنده نرم‌افزار در گرگان.',
    intro: 'تجربه، مهارت‌ها و زبان‌هایی که بخشی از مسیر کاری من را شکل داده‌اند.',
    experience: 'تجربه',
    education: 'تحصیلات',
    capabilities: 'مهارت‌ها',
    languages: 'زبان‌ها',
    certificates: 'گواهی‌نامه‌ها',
    print: 'چاپ / ذخیره به PDF',
    verify: 'تأیید اعتبار',
    pdf: 'PDF',
    preview: 'پیش‌نمایش',
    close: 'بستن',
  },

  command: {
    placeholder: 'جست‌وجو در بخش‌ها، پروژه‌ها و نوشته‌ها…',
    label: 'جست‌وجو',
    empty: 'نتیجه‌ای پیدا نشد.',
    types: {
      section: 'بخش',
      page: 'صفحه',
      project: 'پروژه',
      article: 'مقاله',
      action: 'فرمان',
      link: 'لینک',
    },
    home: 'خانه',
    toggleTheme: 'تغییر تم',
    switchLanguage: 'English',
  },

  rail: 'پروژه‌ها',
  tickerSkills: 'مهارت‌ها',
  tickerProjects: 'پروژه‌های منتخب',
  dock: 'راه‌های ارتباط',
  section: 'بخش',
  copy: 'کپی',
  copied: 'کپی شد',
}

const en: typeof fa = {

  skip: 'Skip to content',

  nav: {
    label: 'Primary navigation',
    work: 'Work',
    experience: 'Experience',
    about: 'About',
    blog: 'Writing',
    resume: 'Résumé',
    github: 'GitHub',
    language: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    command: 'Open command menu',
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    home: 'Setayesh Soheili, home',
  },

  hero: {
    kicker: 'Software Developer based in Gorgan',
    viewProjects: 'View all projects',
    resume: 'Résumé',
    stats: {
      projects: 'Projects',
      repos: 'Public repos',
      contributions: 'GitHub contributions',
      tools: 'Tech & tools',
    },
    showcase: 'Featured projects',
    prev: 'Previous project',
    next: 'Next project',
    goTo: (n: number) => `Go to project ${n}`,
  },

  experience: {
    kicker: 'Experience',
    title: 'What I have worked on so far.',
  },

  capabilities: {
    kicker: 'Skills',
    title: 'The tools I work with.',
    description: 'I mostly work with Python, backend systems, bots, automation, and the web.',
    tools: (n: number) => `${n} tools`,
    github: 'View GitHub profile',
  },

  activity: {
    kicker: 'Activity',
    title: 'Recent activity on GitHub.',
    description: 'Public repositories and part of my engineering activity on GitHub.',
    contributions: 'contributions in the last year',
    less: 'Less',
    more: 'More',
    repositories: 'Repositories',
    recent: 'Recent activity',
    type: {
      commit: 'Commit',
      release: 'Release',
      repo: 'New repo',
    },
    created: 'created',
  },

  about: {
    kicker: 'About',
    title: 'My path and how I work.',
    description: 'A software developer based in Gorgan, Iran.',

    lead: 'I started programming with frontend development and gradually moved deeper into software development. These days I mostly work with Python, backend systems, bots, and automation, and much of what I have learned has come from working on real projects.',

    notes: [
      'For me, programming is not only about writing code. I like understanding the actual problem and where the software I build fits into the real world.',

      'I am still figuring out my path, so I do not try to fit myself into one fixed title. I would rather let the projects I have built say more about me.',
    ],

    based: 'Based in',
    focus: 'Focus',
    now: 'Currently',

    nowText: 'Currently working on real projects with Python, backend systems, bots, and automation, while exploring new areas of software development and problem solving.',
  },

  contact: {
    kicker: 'Contact',
    channels: 'Direct channels',
    text: 'For projects, collaborations, or interesting work, feel free to get in touch.',
    getInTouch: 'Get in touch',
  },

  work: {
    kicker: 'All projects // Archive',
    title: 'Things I have built and worked on.',
    description: 'Selected projects by Setayesh Soheili — software, messaging bots, automation, and web.',
    intro: 'An archive of projects I have built, developed, or learned something new from.',
    count: (n: number) => `${n} projects`,
    earlier: 'Earlier projects',
    caseStudy: 'View project',
    openLive: (name: string) => `Open ${name} live site`,
  },

  project: {
    back: 'Back to all projects',
    outline: 'Project Outline',
    links: 'Links',
    repository: 'Repository',
    live: 'Live Preview',
    source: 'Source Code',
    liveDeployment: 'Live Deployment',
    githubRepository: 'GitHub Repository',
    language: 'Language',
    stars: 'Stars',
    forks: 'Forks',
    release: 'Latest release',
    updated: 'Updated',
    created: 'Created',
    license: 'License',
    previous: 'Previous Project',
    next: 'Next Project',
    gallery: 'Screenshots',
    writing: 'Related writing',
    kinds: {
      'open-source': 'Open source',
      client: 'Client project',
      team: 'Team project',
      experiment: 'Experiment',
      coursework: 'Coursework',
    },
  },

  blog: {
    kicker: 'Writing // Notes',
    title: 'Notes on what I build and learn.',
    description: 'Notes and articles by Setayesh Soheili on software, backend development, bots, and automation.',
    intro: 'Technical notes, project experiences, and things I learn along the way.',
    count: (n: number) => `${n} published article${n === 1 ? '' : 's'}`,
    empty: 'Nothing published yet.',
    featured: 'Featured',
    read: 'Read',
  },

  article: {
    back: 'All articles',
    kicker: 'Article',
    outline: 'Article Outline',
    details: 'Article Details',
    published: 'Published',
    updated: 'Updated',
    readingTime: 'Reading Time',
    minutes: (n: number) => `${n} min read`,
    tags: 'Tags',
    share: 'Share article',
    linkCopied: 'Link copied',
    previous: 'Previous Note',
    next: 'Next Note',
    related: 'Related project',
  },

  resume: {
    kicker: 'Résumé',
    title: 'Résumé',
    description: 'Resume of Setayesh Soheili, software developer based in Gorgan, Iran.',
    intro: 'Experience, skills, and languages that have shaped my work so far.',
    experience: 'Experience',
    education: 'Education',
    capabilities: 'Skills',
    languages: 'Languages',
    certificates: 'Certificates',
    print: 'Print / Save as PDF',
    verify: 'Verify',
    pdf: 'PDF',
    preview: 'Preview',
    close: 'Close',
  },

  command: {
    placeholder: 'Type a command or search…',
    label: 'Search sections, projects, or actions',
    empty: 'No results.',
    types: {
      section: 'Section',
      page: 'Page',
      project: 'Project',
      article: 'Article',
      action: 'Action',
      link: 'Link',
    },
    home: 'Home',
    toggleTheme: 'Toggle theme',
    switchLanguage: 'فارسی',
  },

  rail: 'Projects',
  tickerSkills: 'Skills',
  tickerProjects: 'Featured projects',
  dock: 'Direct connections and profiles',
  section: 'Section',
  copy: 'Copy',
  copied: 'Copied',
}

export const copy = { fa, en }

export type Copy = typeof fa
