const fa = {
  skip: 'رفتن به محتوای اصلی',

  nav: {
    label: 'ناوبری اصلی',
    work: 'پروژه‌ها',
    experience: 'تجربه‌ها',
    about: 'درباره‌ی من',
    blog: 'نوشته‌ها',
    resume: 'رزومه',
    github: 'گیت‌هاب',
    language: 'تغییر زبان',
    openMenu: 'باز کردن منو',
    closeMenu: 'بستن منو',
    command: 'جست‌وجو در سایت',
    toDark: 'فعال کردن تم تیره',
    toLight: 'فعال کردن تم روشن',
    home: 'صفحه‌ی اصلی ستایش سهیلی',
  },

  hero: {
    kicker: 'توسعه‌دهنده‌ی نرم‌افزار در گرگان',
    viewProjects: 'دیدن پروژه‌ها',
    resume: 'مشاهده‌ی رزومه',
    stats: {
      projects: 'پروژه',
      repos: 'مخزن عمومی',
      contributions: 'مشارکت در گیت‌هاب',
      tools: 'ابزار',
    },
    showcase: 'چند پروژه',
    prev: 'پروژه‌ی قبلی',
    next: 'پروژه‌ی بعدی',
    goTo: (n: number) => `رفتن به پروژه‌ی ${n.toLocaleString('fa-IR')}`,
  },

  experience: {
    kicker: 'تجربه',
    title: 'مسیر کاری من تا امروز.',
  },

  capabilities: {
    kicker: 'مهارت‌ها',
    title: 'ابزارهایی که استفاده می‌کنم.',
    description: 'بیشتر با Python، توسعه‌ی بک‌اند، ربات‌ها، خودکارسازی و وب کار می‌کنم.',
    tools: (n: number) => `${n.toLocaleString('fa-IR')} ابزار`,
    github: 'گیت‌هاب من',
  },

  activity: {
    kicker: 'گیت‌هاب',
    title: 'این روزها در گیت‌هاب.',
    description: 'مخزن‌های عمومی و بخشی از فعالیت‌های من در گیت‌هاب.',
    contributions: 'مشارکت‌ها در یک سال گذشته',
    less: 'کمتر',
    more: 'بیشتر',
    repositories: 'مخزن‌ها',
    recent: 'فعالیت‌های اخیر',
    type: {
      commit: 'ثبت تغییرات',
      release: 'انتشار نسخه',
      repo: 'مخزن جدید',
    },
    created: 'ایجاد شد',
  },

  about: {
    kicker: 'درباره‌ی من',
    title: 'کمی درباره‌ی مسیرم.',
    description: 'توسعه‌دهنده‌ی نرم‌افزار، ساکن گرگان.',

    lead: 'کارم را با فرانت‌اند شروع کردم و بعد سراغ بخش‌های دیگر نرم‌افزار رفتم. حالا بیشتر با Python و بک‌اند کار می‌کنم؛ از ساخت API و ربات گرفته تا خودکار کردن کارهای تکراری. بخش زیادی از تجربه‌ام را حین انجام پروژه‌ها به دست آورده‌ام.',

    notes: [
      'قبل از شروع پیاده‌سازی، سعی می‌کنم بفهمم دقیقاً چه چیزی قرار است ساخته شود و چه نیازی را برطرف کند. گاهی مسئله با کدنویسی حل می‌شود و گاهی باید اول خود مسئله را روشن‌تر کرد.',

      'تجربه‌هایم به یک حوزه‌ی مشخص محدود نبوده‌اند و هنوز هم چیزهای تازه یاد می‌گیرم. اینجا بخشی از پروژه‌ها، کارها و نوشته‌هایم را جمع کرده‌ام.',
    ],

    based: 'محل زندگی',
    focus: 'زمینه‌ی کاری',
    now: 'در حال حاضر',

    nowText: 'بیشتر وقتم صرف توسعه‌ی نرم‌افزار، کار روی پروژه‌های مشتری و ساخت ابزارهایی می‌شود که انجام بعضی کارها را ساده‌تر می‌کنند.',
  },

  contact: {
    kicker: 'تماس',
    channels: 'راه‌های ارتباطی',
    text: 'برای صحبت درباره‌ی یک پروژه یا همکاری، می‌توانی از راه‌های زیر با من در ارتباط باشی.',
    getInTouch: 'ارتباط با من',
  },

  work: {
    kicker: 'پروژه‌ها / آرشیو',
    title: 'پروژه‌هایی که رویشان کار کرده‌ام.',
    description: 'پروژه‌های ستایش سهیلی در زمینه‌ی نرم‌افزار، ربات‌ها، خودکارسازی و توسعه‌ی وب.',
    intro: 'مجموعه‌ای از پروژه‌های شخصی، کارهای مشتری و تجربه‌های فنی من.',
    count: (n: number) => `${n.toLocaleString('fa-IR')} پروژه`,
    earlier: 'کارهای قدیمی‌تر',
    caseStudy: 'جزئیات پروژه',
    openLive: (name: string) => `مشاهده‌ی ${name}`,
  },

  project: {
    back: 'بازگشت به پروژه‌ها',
    outline: 'فهرست مطالب',
    links: 'پیوندها',
    repository: 'مخزن کد',
    live: 'مشاهده‌ی آنلاین',
    source: 'کد منبع',
    liveDeployment: 'نسخه‌ی آنلاین',
    githubRepository: 'مخزن گیت‌هاب',
    language: 'زبان برنامه‌نویسی',
    stars: 'ستاره‌ها',
    forks: 'فورک‌ها',
    release: 'آخرین نسخه',
    updated: 'آخرین تغییر',
    created: 'تاریخ ایجاد',
    license: 'مجوز',
    previous: 'پروژه‌ی قبلی',
    next: 'پروژه‌ی بعدی',
    gallery: 'تصاویر پروژه',
    writing: 'نوشته‌های مرتبط',
    kinds: {
      'open-source': 'متن‌باز',
      client: 'پروژه‌ی مشتری',
      team: 'پروژه‌ی گروهی',
      experiment: 'آزمایشی',
      coursework: 'پروژه‌ی آموزشی',
    },
  },

  blog: {
    kicker: 'نوشته‌ها و یادداشت‌ها',
    title: 'چیزهایی که می‌نویسم.',
    description: 'یادداشت‌های ستایش سهیلی درباره‌ی نرم‌افزار، تجربه‌های فنی و پروژه‌ها.',
    intro: 'یادداشت‌های فنی و تجربه‌هایی که به نظرم ارزش ثبت کردن دارند.',
    count: (n: number) => `${n.toLocaleString('fa-IR')} نوشته`,
    empty: 'هنوز نوشته‌ای منتشر نکرده‌ام.',
    featured: 'منتخب',
    read: 'خواندن نوشته',
  },

  article: {
    back: 'بازگشت به نوشته‌ها',
    kicker: 'نوشته',
    outline: 'فهرست مطالب',
    details: 'اطلاعات نوشته',
    published: 'تاریخ انتشار',
    updated: 'آخرین به‌روزرسانی',
    readingTime: 'زمان مطالعه',
    minutes: (n: number) => `${n.toLocaleString('fa-IR')} دقیقه`,
    tags: 'برچسب‌ها',
    share: 'اشتراک‌گذاری',
    linkCopied: 'پیوند کپی شد',
    previous: 'نوشته‌ی قبلی',
    next: 'نوشته‌ی بعدی',
    related: 'پروژه‌ی مرتبط',
  },

  resume: {
    kicker: 'رزومه',
    title: 'رزومه',
    description: 'سوابق کاری و مهارت‌های ستایش سهیلی، توسعه‌دهنده‌ی نرم‌افزار در گرگان.',
    intro: 'مروری بر تجربه‌های کاری، تحصیلات و مهارت‌های من.',
    experience: 'سوابق کاری',
    education: 'تحصیلات',
    capabilities: 'مهارت‌ها',
    languages: 'زبان‌ها',
    certificates: 'گواهی‌نامه‌ها',
    print: 'چاپ یا ذخیره به‌صورت PDF',
    verify: 'بررسی اعتبار',
    pdf: 'PDF',
    preview: 'پیش‌نمایش',
    close: 'بستن',
  },

  command: {
    placeholder: 'دنبال چه چیزی می‌گردی؟',
    label: 'جست‌وجو در سایت',
    empty: 'چیزی پیدا نشد.',
    types: {
      section: 'بخش',
      page: 'صفحه',
      project: 'پروژه',
      article: 'نوشته',
      action: 'عملیات',
      link: 'پیوند',
    },
    home: 'خانه',
    toggleTheme: 'تغییر تم',
    switchLanguage: 'English',
  },

  rail: 'پروژه‌ها',
  tickerSkills: 'مهارت‌ها',
  tickerProjects: 'پروژه‌ها',
  dock: 'ارتباط',
  section: 'بخش',
  copy: 'کپی',
  copied: 'کپی شد',
}

const en: typeof fa = {
  skip: 'Skip to main content',

  nav: {
    label: 'Main navigation',
    work: 'Projects',
    experience: 'Experience',
    about: 'About',
    blog: 'Writing',
    resume: 'Résumé',
    github: 'GitHub',
    language: 'Change language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    command: 'Search the site',
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    home: 'Setayesh Soheili home page',
  },

  hero: {
    kicker: 'Software developer based in Gorgan, Iran',
    viewProjects: 'View projects',
    resume: 'View résumé',
    stats: {
      projects: 'Projects',
      repos: 'Public repositories',
      contributions: 'GitHub contributions',
      tools: 'Tools',
    },
    showcase: 'Selected projects',
    prev: 'Previous project',
    next: 'Next project',
    goTo: (n: number) => `Go to project ${n}`,
  },

  experience: {
    kicker: 'Experience',
    title: 'Where I’ve worked so far.',
  },

  capabilities: {
    kicker: 'Skills',
    title: 'Tools I use.',
    description: 'Most of my work involves Python, backend development, bots, automation, and the web.',
    tools: (n: number) => `${n} tools`,
    github: 'My GitHub profile',
  },

  activity: {
    kicker: 'GitHub',
    title: 'What I’ve been up to on GitHub.',
    description: 'My public repositories and some of my recent activity.',
    contributions: 'Contributions over the past year',
    less: 'Less',
    more: 'More',
    repositories: 'Repositories',
    recent: 'Recent activity',
    type: {
      commit: 'Commit',
      release: 'Release',
      repo: 'New repository',
    },
    created: 'Created',
  },

  about: {
    kicker: 'About',
    title: 'A bit about my work.',
    description: 'Software developer based in Gorgan, Iran.',

    lead: 'I started out in frontend development and gradually moved into other parts of software engineering. These days, I mostly work with Python and backend systems, building APIs, messaging bots, and tools that automate repetitive tasks. Much of my experience has come from working on actual projects.',

    notes: [
      'Before I start building something, I try to understand what it needs to do and why. Sometimes that means writing code; sometimes it means getting a clearer picture of the problem first.',

      'My work has taken me across a few different areas, and I’m still learning. This site brings together some of the projects, work, and notes I’ve collected along the way.',
    ],

    based: 'Based in',
    focus: 'Focus',
    now: 'Currently',

    nowText: 'Most of my time goes into software development, client projects, and building tools that make everyday tasks a little easier.',
  },

  contact: {
    kicker: 'Contact',
    channels: 'Find me online',
    text: 'If you’d like to discuss a project or work together, you can reach me through the links below.',
    getInTouch: 'Get in touch',
  },

  work: {
    kicker: 'Projects / Archive',
    title: 'Projects I’ve worked on.',
    description: 'Software, messaging bots, automation, and web projects by Setayesh Soheili.',
    intro: 'A collection of personal projects, client work, and technical experiments.',
    count: (n: number) => `${n} projects`,
    earlier: 'Earlier work',
    caseStudy: 'Project details',
    openLive: (name: string) => `View ${name}`,
  },

  project: {
    back: 'Back to projects',
    outline: 'Contents',
    links: 'Links',
    repository: 'Repository',
    live: 'View live site',
    source: 'Source code',
    liveDeployment: 'Live site',
    githubRepository: 'GitHub repository',
    language: 'Language',
    stars: 'Stars',
    forks: 'Forks',
    release: 'Latest release',
    updated: 'Last updated',
    created: 'Created',
    license: 'License',
    previous: 'Previous project',
    next: 'Next project',
    gallery: 'Screenshots',
    writing: 'Related writing',
    kinds: {
      'open-source': 'Open source',
      client: 'Client work',
      team: 'Team project',
      experiment: 'Experiment',
      coursework: 'Coursework',
    },
  },

  blog: {
    kicker: 'Writing and notes',
    title: 'Things I write about.',
    description: 'Notes by Setayesh Soheili on software, technical work, and projects.',
    intro: 'Technical notes and experiences worth writing down.',
    count: (n: number) => `${n} post${n === 1 ? '' : 's'}`,
    empty: 'No posts yet.',
    featured: 'Featured',
    read: 'Read post',
  },

  article: {
    back: 'Back to writing',
    kicker: 'Post',
    outline: 'Contents',
    details: 'Post details',
    published: 'Published',
    updated: 'Last updated',
    readingTime: 'Reading time',
    minutes: (n: number) => `${n} min read`,
    tags: 'Tags',
    share: 'Share',
    linkCopied: 'Link copied',
    previous: 'Previous post',
    next: 'Next post',
    related: 'Related project',
  },

  resume: {
    kicker: 'Résumé',
    title: 'Résumé',
    description: 'Work experience and skills of Setayesh Soheili, a software developer based in Gorgan, Iran.',
    intro: 'A look at my work experience, education, and skills.',
    experience: 'Experience',
    education: 'Education',
    capabilities: 'Skills',
    languages: 'Languages',
    certificates: 'Certificates',
    print: 'Print or save as PDF',
    verify: 'Verify',
    pdf: 'PDF',
    preview: 'Preview',
    close: 'Close',
  },

  command: {
    placeholder: 'What are you looking for?',
    label: 'Search the site',
    empty: 'Nothing found.',
    types: {
      section: 'Section',
      page: 'Page',
      project: 'Project',
      article: 'Post',
      action: 'Action',
      link: 'Link',
    },
    home: 'Home',
    toggleTheme: 'Toggle theme',
    switchLanguage: 'فارسی',
  },

  rail: 'Projects',
  tickerSkills: 'Skills',
  tickerProjects: 'Projects',
  dock: 'Contact',
  section: 'Section',
  copy: 'Copy',
  copied: 'Copied',
}

export const copy = { fa, en }

export type Copy = typeof fa
