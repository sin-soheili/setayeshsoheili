حتماً. این نسخه رو عمداً به شکل **source of truth** نوشتم تا Claude از خودش طراحی/هویت/متن جدید اختراع نکنه و سایت هم تبدیل به landing تبلیغاتی نشه.

### `design.md`

````md
# Setayesh Soheili — Design System

## 01. Product Definition

This is a personal website that also functions as Setayesh Soheili's digital resume.

It must replace the need to send a PDF resume.

The website should work for:

- recruiters
- software engineers
- business owners
- potential clients
- professional contacts
- people scanning an NFC card / QR code

The website is NOT:

- an agency website
- a SaaS landing page
- a freelancer sales page
- a consulting website
- a blog
- a generic developer portfolio template

The primary professional identity is:

**Software Engineer**

Secondary characteristics can emerge through the work and writing:

- curiosity
- systems thinking
- practical problem solving
- experimentation
- working with real-world software

Do not turn these characteristics into exaggerated professional titles.

---

# 02. Core Visual Identity

## LIGHT / DARK CHECKERBOARD

The site's most recognizable visual characteristic is the alternating section system.

Sections alternate between light and dark:

01 — Identity → LIGHT
02 — Selected Work → DARK
03 — Resume → LIGHT
04 — Currently → DARK
05 — About → LIGHT
06 — Contact → DARK

This is NOT a literal checkerboard background.

The checkerboard means:

**a sequence of full-width visual blocks alternating between light and dark.**

The rhythm should remain obvious on mobile.

The light and dark sections should feel like two states of the same visual system, not two unrelated designs.

---

# 03. Visual Character

Keywords:

- editorial
- technical
- minimal
- precise
- personal
- monochrome
- confident
- quiet
- modern
- slightly experimental

Avoid:

- startup aesthetics
- corporate SaaS aesthetics
- luxury aesthetics
- excessive decoration
- generic developer aesthetics

The site should feel designed by a technically-minded person with strong visual taste.

It should not look like a template.

---

# 04. Color System

## Light

Background:

#F4F3EF

Primary:

#111111

Secondary:

#73716C

Border:

#D7D5CF

Subtle surface:

#EAE8E2

## Dark

Background:

#111111

Primary:

#F4F3EF

Secondary:

#989898

Border:

#303030

Subtle surface:

#191919

## Accent

Optional extremely limited accent:

#C8FF45

The accent must never dominate the design.

Use it only for:

- tiny indicators
- hover states
- active language indicator
- cursor-like micro details
- small system markers

No gradients.

---

# 05. Typography

Persian:

**Vazirmatn**

English:

**Inter**

Technical metadata:

**DM Mono**

Typography hierarchy should be strong.

The name should be one of the largest visual elements.

Example:

STAYESH
SOHEILI

Technical metadata should use DM Mono:

SOFTWARE ENGINEER
GORGAN / IRAN
2026
01 / IDENTITY

Do not overuse uppercase Persian.

---

# 06. Layout System

Desktop:

```text
max-width: 1280px
horizontal padding: 48px
````

Large screens should have generous whitespace.

Mobile:

```text
horizontal padding: 20px
```

Use a consistent editorial grid.

Desktop section structure:

```text
┌────────────────────┬─────────────────────────────┐
│ 01 / IDENTITY      │                             │
│                    │ content                     │
│                    │                             │
└────────────────────┴─────────────────────────────┘
```

The section number can occupy a narrow column.

Mobile:

```text
01 / IDENTITY

content
```

Do not force desktop grids onto mobile.

---

# 07. Header

The pill-shaped header from the previous design should remain.

Characteristics:

* fixed
* rounded
* translucent
* subtle border
* backdrop blur
* minimal
* compact

Example:

```text
STAYESH SOHEILI       WORK   RESUME   CONTACT       FA / EN
```

The header should feel like a navigation device, not a marketing navbar.

No giant logo.

No hamburger menu unless genuinely necessary.

---

# 08. Section 01 — Identity

This is the hero and should also function as the first part of the resume.

Information:

```text
STAYESH SOHEILI

Software Engineer

Python · Backend · Bots · Automation

Gorgan, Iran
```

The hero should immediately answer:

* who is she?
* what does she do?
* where is she?

No giant slogan.

No "I transform businesses."

No consulting positioning.

No fake authority.

The hero should feel like a strong professional identity statement.

---

# 09. Section 02 — Selected Work

Dark.

Projects are presented as an editorial index.

Never use conventional cards.

Example:

```text
01

Fadak Factory
CRM · Website · Digital Systems                         ↗
```

Each project is a clickable row.

Rows should have:

* number
* title
* small metadata
* arrow

Desktop hover:

* tiny horizontal movement
* subtle background change
* arrow movement

Mobile:

* no hover dependency
* simple readable rows

---

# 10. Project Pages

Every important project opens.

Example:

```text
/fa/work/fadak
/en/work/fadak
```

Project page layout:

```text
PROJECT

TITLE

YEAR / STATUS

ROLE

SUMMARY

CONTEXT

PROBLEM / GOAL

APPROACH

BUILT

TECHNOLOGY

RESULT

LINKS

IMAGES

PREVIOUS / NEXT
```

Not every field is mandatory.

Unknown information must not be invented.

A project page should read like a compact technical case record.

Not like an advertisement.

---

# 11. Section 03 — Resume

Light.

This is the section that allows the site to replace a PDF CV.

It should contain actual resume information.

Required categories:

## Experience

## Education

## Technical Skills

## Languages

Optional:

## Selected achievements

## Certifications

Only if factual information exists.

The resume section should be highly scannable.

Dates should align visually.

Do not use skill percentage bars.

Do not use star ratings.

Do not use "expert / master / ninja" labels.

---

# 12. Resume Layout

Desktop:

```text
EXPERIENCE

2024 — PRESENT
Software Engineer
Freelance / Independent

Description...
```

Mobile:

```text
2024 — PRESENT

Software Engineer
Freelance / Independent

Description...
```

Keep dates visually distinct using monospace typography.

---

# 13. Section 04 — Currently

Dark.

This is deliberately not part of the static resume.

It answers:

**What is Setayesh doing right now?**

Example:

```text
CURRENTLY

AUGUST 2026

Building software.
Working on real projects.
Learning from what I build.
Figuring out what comes next.
```

The section should be easy to update.

It should make the site feel alive without becoming a blog.

---

# 14. Section 05 — About

Light.

Short.

Human.

No autobiography.

No life story.

No motivational essay.

The purpose is to provide context behind the technical profile.

Possible themes:

* started with networking
* moved toward software
* mostly works with Python/backend/bots/automation
* likes understanding systems
* learns through real projects
* interested in how software behaves outside the code editor

---

# 15. Section 06 — Contact

Dark.

Minimal.

Example:

```text
SAY HELLO.

Email
GitHub
Telegram
LinkedIn
```

No:

* Book a call
* Start your project
* Get a quote
* Hire me now
* pricing
* packages

The website should not feel like a sales funnel.

---

# 16. Responsive Rules

Mobile is a first-class design target.

On mobile:

* name remains dominant
* sections remain full-width
* alternating light/dark rhythm remains
* project list stays minimal
* no cards
* no horizontal overflow
* resume remains readable
* navigation remains compact
* technical metadata wraps naturally
* no microscopic text

---

# 17. Motion

Motion should be subtle.

Allowed:

* small arrow movement
* opacity transitions
* small translateX/Y
* subtle section entrance
* header state transition

Avoid:

* page loaders
* dramatic text animations
* huge parallax
* scroll hijacking
* WebGL
* 3D effects
* excessive blur animation
* animation libraries for trivial interactions

Respect:

```css
prefers-reduced-motion
```

---

# 18. Texture / Details

A very subtle technical texture is acceptable.

Possible visual language:

* tiny grid fragments
* coordinates
* numbered labels
* cursor-like markers
* system notation
* small technical annotations

But these must remain secondary.

Do not turn the site into:

* terminal cosplay
* hacker aesthetic
* cyberpunk
* developer cliché

Do NOT use `< />` as the primary brand symbol.

---

# 19. SEO Visual Constraints

SEO text must remain invisible as "SEO writing."

Do not add paragraphs just to insert keywords.

The phrase:

**برنامه‌نویس و طراح وبسایت در گرگان**

should exist naturally in the homepage metadata/profile context.

The visitor should never feel that the website is written for search engines.

---

# 20. Accessibility

Required:

* semantic HTML
* one meaningful H1 per page
* logical H2/H3 hierarchy
* keyboard navigation
* focus-visible
* accessible navigation
* adequate contrast
* reduced motion
* descriptive alt text
* correct language attributes
* correct RTL/LTR behavior

---

# 21. Final Design Test

The final result should feel like:

> a carefully designed personal technical record.

It should NOT feel like:

> a startup landing page.

It should NOT feel like:

> a freelancer service website.

It should NOT feel like:

> a generic CV template.

It should NOT feel like:

> an art portfolio.

The visitor should remember:

**STAYESH SOHEILI**
**SOFTWARE ENGINEER**

before remembering any other element.

````

---

### `content-setup.md`

```md
# Setayesh Soheili — Content Setup

This file is the source of truth for all visible content.

Do not invent factual information.

---

# Identity

## Persian

Name:

ستایش سهیلی

Professional title:

برنامه‌نویس

English title:

Software Engineer

Location:

گرگان، ایران

SEO phrase:

برنامه‌نویس و طراح وبسایت در گرگان

---

# Professional Positioning

Current professional identity:

**Software Engineer**

Main technical interests:

- Python
- Backend
- Web software
- Telegram bots
- Bale bots
- Automation
- API integration
- scraping
- infrastructure

Important:

Setayesh is NOT currently positioning herself as:

- Business Consultant
- Strategy Consultant
- Business Strategist
- Digital Transformation Consultant
- Systems Architect

Her systems thinking and business curiosity can appear naturally in project descriptions and About.

Do not turn those traits into professional titles.

---

# Voice

## Persian

Tone:

- professional
- natural
- precise
- simple
- confident
- understated
- human
- technical when necessary

Avoid:

- advertising language
- motivational language
- corporate buzzwords
- exaggerated claims
- fake confidence
- unnecessary English jargon

Bad:

> من به کسب‌وکارها کمک می‌کنم تا با راهکارهای نوآورانه متحول شوند.

Good:

> بیشتر با Python، backend، ربات‌ها و automation کار می‌کنم.

---

# English

Simple professional English.

Avoid:

> I empower businesses to unlock transformative digital opportunities.

Prefer:

> Software Engineer focused on Python, backend development, bots, automation, and web software.

---

# Homepage

## Hero

Eyebrow:

```text
SOFTWARE ENGINEER
````

Name:

```text
STAYESH
SOHEILI
```

Technical line:

```text
Python · Backend · Bots · Automation
```

Location:

```text
Gorgan, Iran
```

Persian profile:

> برنامه‌نویس نرم‌افزار با تمرکز روی Python، backend، ربات‌ها و automation. تجربه‌ی ساخت پروژه‌های واقعی و کار با سرویس‌ها و سیستم‌های مختلف.

English profile:

> Software Engineer focused on Python, backend development, bots, automation, and web software. Experienced in building real-world projects across different software systems and services.

---

# Selected Work

Persian:

```text
پروژه‌های منتخب
```

English:

```text
Selected Work
```

---

# Project: Fadak Factory

Title:

```text
Fadak Factory
```

Metadata:

```text
CRM · Website · Digital Systems
```

Current description:

> توسعه‌ی وب‌سایت و طراحی اولیه‌ی یک سیستم داخلی برای مدیریت و ثبت اطلاعات، در کنار تجربه‌ی دیجیتال تعاملی برای معرفی کارخانه.

English:

> A corporate website and an initial internal system for managing records and information, alongside an interactive digital experience for presenting the factory.

Important:

The actual role split between Setayesh and Eman must be stated accurately once finalized.

Do not claim that Setayesh independently built every part.

Known project context:

* corporate website
* multilingual website
* internal CRM / record management concept
* digital factory experience
* virtual tour / exhibition experience
* backend/API
* deployment

Do not invent final metrics.

---

# Project: ChatPack

Title:

```text
ChatPack
```

Metadata:

```text
Telegram · Automation · Web
```

Description:

> مجموعه‌ای از ابزارها و زیرساخت‌ها برای ساخت تجربه‌های تعاملی در ربات‌های پیام‌رسان.

English:

> A collection of tools and infrastructure for building interactive experiences in messaging bots.

Known technical context:

* Telegram
* bot components
* interactive forms
* branching flows
* photo collection
* reusable components
* documentation

Use only details that are actually present in the repository.

---

# Project: Brick Presentation

Title:

```text
Brick Presentation
```

Metadata:

```text
Next.js · Cloudflare · Interactive Experience
```

Description:

> یک تجربه‌ی وب تعاملی برای ارائه و معرفی محصولات و فضای کارخانه.

English:

> An interactive web experience designed for presenting and showcasing a factory and its products.

Technical context:

* Next.js
* React
* Cloudflare
* OpenNext
* interactive presentation

---

# Project: CatSync

Title:

```text
CatSync
```

Metadata:

```text
Python · Animation · Lip Sync
```

Description:

> یک پروژه‌ی آزمایشی برای ساخت workflow مربوط به lip-sync و تولید فریم‌های دهان برای انیمیشن دوبعدی.

English:

> An experimental workflow for 2D lip-sync animation and mouth-frame generation.

---

# Project: Scopick

Title:

```text
Scopick
```

Metadata:

```text
Web · Startup · Software
```

Do not invent description.

TODO:

Extract factual project information from repository/project source.

---

# Project Page Model

Every project can contain:

```text
title
slug
year
status
role
summary
context
problem
approach
built
technology
result
links
images
```

Fields can be omitted.

Rules:

* Never fabricate metrics.
* Never fabricate results.
* Never fabricate client names.
* Never fabricate dates.
* Never fabricate responsibilities.

If no measurable result exists, omit the result section.

---

# Resume

## Experience

### Persian

Title:

```text
Software Engineer
```

Employment:

```text
Freelance / Independent
```

Dates:

```text
2024 — Present
```

Description:

> طراحی و توسعه‌ی نرم‌افزار، backend، ربات‌های پیام‌رسان، automation، API و وب‌اپلیکیشن برای پروژه‌های واقعی.

### English

Title:

```text
Software Engineer
```

Employment:

```text
Freelance / Independent
```

Dates:

```text
2024 — Present
```

Description:

> Designing and developing software, backend systems, messaging bots, automation workflows, APIs, and web applications for real-world projects.

---

# Technical Skills

## Backend

```text
Python
Django
FastAPI
REST API
Async
SQLAlchemy
```

## Automation

```text
Telegram Bots
Bale Bots
Scraping
APIs
Workflow Automation
```

## Data

```text
PostgreSQL
SQLite
Redis
```

## Infrastructure

```text
Linux
Docker
Nginx
Cloudflare
```

## Frontend

```text
HTML
CSS
JavaScript
React
Next.js
```

## Other

```text
WordPress
WooCommerce
Git
```

Do not use skill percentages.

Do not use progress bars.

Do not label every skill "expert."

---

# Education

TODO.

Do not invent university information.

Structure:

```text
Degree
University
Location
Dates
```

Only populate once verified.

---

# Languages

Persian:

```text
Native
```

English:

```text
Working proficiency
```

Do not invent a CEFR level.

---

# Currently

Persian:

> الان بیشتر درگیر پروژه‌های واقعی، Python، backend، ربات‌ها و automation هستم و دارم مسیر بعدی کارم را از دل همین پروژه‌ها پیدا می‌کنم.

English:

> Currently building software, working with real projects, and figuring out what comes next.

The displayed month/year should be generated dynamically.

---

# About

Persian:

> از شبکه شروع کردم و به نرم‌افزار رسیدم. بیشتر با Python، backend، ربات‌ها و automation کار می‌کنم و معمولاً در هر پروژه چیز تازه‌ای یاد می‌گیرم.
>
> علاقه‌ام فقط به نوشتن کد محدود نیست؛ دوست دارم بفهمم نرم‌افزاری که می‌سازم در دنیای واقعی چطور استفاده می‌شود.

English:

> I started with networking and eventually moved into software development. I mostly work with Python, backend systems, bots, and automation, and I tend to learn something new from every project.
>
> My interest goes beyond writing code. I like understanding how the software I build actually works in the real world.

---

# Contact

Persian:

> اگر کاری، پروژه‌ای یا همکاری‌ای داری که فکر می‌کنی می‌تواند جالب باشد، می‌توانی با من در تماس باشی.

English:

> For projects, collaborations, or interesting work, feel free to get in touch.

---

# Links

GitHub:

[https://github.com/sin-soheili](https://github.com/sin-soheili)

Telegram:

[https://t.me/TheNewbieBackpack](https://t.me/TheNewbieBackpack)

Developer channel:

[https://t.me/backpack_dev](https://t.me/backpack_dev)

Email:

TODO

LinkedIn:

TODO

Website:

TODO

---

# SEO

## Homepage Persian

Title:

```text
ستایش سهیلی | برنامه‌نویس و طراح وبسایت در گرگان
```

Description:

```text
ستایش سهیلی، برنامه‌نویس و طراح وبسایت در گرگان؛ Software Engineer با تمرکز روی Python، Backend، ربات‌ها و اتوماسیون.
```

## Homepage English

Title:

```text
Setayesh Soheili | Software Engineer in Gorgan
```

Description:

```text
Setayesh Soheili is a Software Engineer in Gorgan, Iran, focused on Python, backend development, bots, automation, and web software.
```

---

# SEO Keyword Universe

This is a research/reference list.

Do NOT dump these keywords into visible text.

## Brand

```text
ستایش سهیلی
ستایش سهیلی برنامه نویس
ستایش سهیلی گرگان
Setayesh Soheili
Setayesh Soheili developer
Setayesh Soheili software engineer
```

## Local

```text
برنامه نویس گرگان
برنامه نویس در گرگان
طراح وبسایت در گرگان
طراح سایت در گرگان
برنامه نویس وب در گرگان
توسعه دهنده نرم افزار در گرگان
توسعه دهنده وب در گرگان
برنامه نویس پایتون گرگان
```

## Secondary

```text
Python developer Gorgan
web developer Gorgan
software engineer Gorgan
Telegram bot developer
Python automation developer
```

---

# SEO Rules

Use the keyword universe for:

* title research
* metadata
* semantic content
* structured data
* search console analysis

Do NOT:

* repeat keywords unnaturally
* create SEO paragraphs
* create doorway pages
* create fake location pages
* use keyword stuffing

`meta keywords` is not required.

Priority:

```text
Title
Meta description
H1
Headings
URL
Real project content
Canonical
hreflang
Structured data
Internal linking
Sitemap
```

---

# Content Principles

Every piece of copy should pass:

## 1. Is it true?

## 2. Is it useful?

## 3. Does it sound like Setayesh?

## 4. Is it unnecessarily promotional?

If yes → rewrite.

---

# Things Claude Must Never Invent

* university
* degree
* clients
* company names
* employment
* project results
* project metrics
* years
* certifications
* testimonials
* job titles
* responsibilities
* technologies not actually used

````

---

### `claude-prompt.md`

```md
# Build Prompt — Setayesh Soheili Personal Website

You are a senior frontend engineer, product designer, information architect, and technical SEO specialist.

Build the personal website of:

**Setayesh Soheili / ستایش سهیلی**

Use these files as the source of truth:

- `design.md`
- `content-setup.md`

Do not contradict them.

---

# 1. What you are building

Build a bilingual personal website that can replace Setayesh's PDF resume.

It must work as:

**Personal Website + Digital Resume + NFC/QR Professional Card**

Someone receiving the URL should immediately understand:

1. Who Setayesh is
2. What she currently does
3. What she has built
4. Her technical skills
5. Her experience
6. Her current direction
7. How to contact her

The site should NOT become a service landing page.

---

# 2. Current professional identity

Setayesh is currently a:

**Software Engineer**

This is extremely important.

Do NOT market her as:

- Business Consultant
- Strategy Consultant
- Business Strategist
- Digital Transformation Consultant
- Systems Architect
- Agency
- Business Solutions company

She does have strong curiosity around systems, businesses, workflows, and real-world problems.

That should emerge from the projects.

Do not turn it into an exaggerated title.

The website must represent what she is **now**, not what she might become later.

---

# 3. Stack

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- static content
- Cloudflare-compatible deployment

No database.

No CMS.

No unnecessary backend.

No unnecessary dependencies.

Use static content/data structures.

---

# 4. Architecture

Separate:

- content
- metadata
- project data
- components
- layout
- SEO utilities

Suggested model:

```ts
type Project = {
  slug: string
  title: LocalizedText
  year?: string
  status?: string
  role?: LocalizedText
  summary: LocalizedText
  context?: LocalizedText
  problem?: LocalizedText
  approach?: LocalizedText
  built?: LocalizedText
  technologies?: string[]
  result?: LocalizedText
  links?: ProjectLink[]
  images?: ProjectImage[]
}
````

Use equivalent clean models for:

```text
Experience
Education
SkillGroup
Language
SiteSettings
```

Do not scatter content throughout JSX.

---

# 5. Bilingual architecture

The website MUST have real indexable Persian and English URLs.

Preferred:

```text
/fa
/fa/work
/fa/work/fadak

/en
/en/work
/en/work/fadak
```

Persian:

```text
dir="rtl"
lang="fa"
```

English:

```text
dir="ltr"
lang="en"
```

Technical strings can use LTR boundaries where necessary.

The language switcher should preserve the equivalent current route whenever possible.

Do not implement language switching by simply hiding/showing text on the same URL.

---

# 6. Visual identity

The central design idea is:

# LIGHT / DARK CHECKERBOARD

Full-width sections alternate:

```text
Identity       LIGHT
Selected Work  DARK
Resume         LIGHT
Currently      DARK
About          LIGHT
Contact        DARK
```

This alternating rhythm is a core identity element.

Do not interpret "checkerboard" as a literal grid background.

The site should feel:

* editorial
* technical
* minimal
* monochrome
* personal
* precise
* modern
* slightly experimental

---

# 7. Header

Preserve the pill-shaped header from the previous iteration.

It should be:

* fixed
* rounded
* translucent
* subtle border
* backdrop blur
* compact

Example:

```text
STAYESH SOHEILI    WORK   RESUME   CONTACT    FA / EN
```

No huge logo.

No unnecessary menu complexity.

---

# 8. Homepage structure

Implement:

```text
01 Identity
02 Selected Work
03 Resume
04 Currently
05 About
06 Contact
```

Each section should visually feel like a full-width editorial block.

---

# 9. Identity / Hero

Hero should double as the first resume snapshot.

Show:

```text
STAYESH SOHEILI

Software Engineer

Python · Backend · Bots · Automation

Gorgan, Iran
```

Persian profile:

> برنامه‌نویس نرم‌افزار با تمرکز روی Python، backend، ربات‌ها و automation. تجربه‌ی ساخت پروژه‌های واقعی و کار با سرویس‌ها و سیستم‌های مختلف.

English:

> Software Engineer focused on Python, backend development, bots, automation, and web software. Experienced in building real-world projects across different software systems and services.

No giant slogan.

No consulting language.

No aggressive CTA.

---

# 10. Selected Work

Use an editorial list.

NOT cards.

Example:

```text
01  Fadak Factory
    CRM · Website · Digital Systems                         ↗

02  ChatPack
    Telegram · Automation · Web                            ↗

03  Brick Presentation
    Next.js · Cloudflare · Interactive Experience           ↗
```

Every row is clickable.

Desktop can have subtle hover movement.

Mobile must remain simple.

---

# 11. Project routes

Every project must open.

Example:

```text
/fa/work/fadak
/en/work/fadak
```

Project pages must be real pages, not modal dialogs.

Each project page should support:

```text
title
year
status
role
summary
context
problem
approach
built
technology
result
links
images
previous / next
```

Only render fields that contain real information.

Never fabricate missing information.

---

# 12. Resume

The Resume section must contain actual CV information.

Include:

## Experience

Software Engineer
Freelance / Independent
2024 — Present

## Education

TODO until verified.

## Technical Skills

Backend:

```text
Python
Django
FastAPI
REST API
Async
SQLAlchemy
```

Automation:

```text
Telegram Bots
Bale Bots
Scraping
APIs
Workflow Automation
```

Data:

```text
PostgreSQL
SQLite
Redis
```

Infrastructure:

```text
Linux
Docker
Nginx
Cloudflare
```

Frontend:

```text
HTML
CSS
JavaScript
React
Next.js
```

Other:

```text
WordPress
WooCommerce
Git
```

Languages:

```text
Persian — Native
English — Working proficiency
```

No progress bars.

No percentage scores.

No stars.

No "expert" labels unless explicitly supported by content.

---

# 13. Currently

Create a dark section that is intentionally dynamic.

Show current month/year.

Current copy:

Persian:

> الان بیشتر درگیر پروژه‌های واقعی، Python، backend، ربات‌ها و automation هستم و دارم مسیر بعدی کارم را از دل همین پروژه‌ها پیدا می‌کنم.

English:

> Currently building software, working with real projects, and figuring out what comes next.

Make the date easy to update.

---

# 14. About

Keep it short.

Persian:

> از شبکه شروع کردم و به نرم‌افزار رسیدم. بیشتر با Python، backend، ربات‌ها و automation کار می‌کنم و معمولاً در هر پروژه چیز تازه‌ای یاد می‌گیرم.
>
> علاقه‌ام فقط به نوشتن کد محدود نیست؛ دوست دارم بفهمم نرم‌افزاری که می‌سازم در دنیای واقعی چطور استفاده می‌شود.

English:

> I started with networking and eventually moved into software development. I mostly work with Python, backend systems, bots, and automation, and I tend to learn something new from every project.
>
> My interest goes beyond writing code. I like understanding how the software I build actually works in the real world.

---

# 15. Contact

Dark.

Minimal.

Persian:

> اگر کاری، پروژه‌ای یا همکاری‌ای داری که فکر می‌کنی می‌تواند جالب باشد، می‌توانی با من در تماس باشی.

English:

> For projects, collaborations, or interesting work, feel free to get in touch.

Links:

```text
GitHub
Telegram
Developer Channel
Email
LinkedIn
```

Use only real links from content-setup.md.

No:

```text
Book a call
Get a quote
Hire me
Start a project
```

---

# 16. SEO — CRITICAL

SEO is one of the highest priorities.

The most important local search intent is:

**برنامه‌نویس و طراح وبسایت در گرگان**

The homepage must target this naturally.

Primary Persian title:

```text
ستایش سهیلی | برنامه‌نویس و طراح وبسایت در گرگان
```

Primary Persian description:

```text
ستایش سهیلی، برنامه‌نویس و طراح وبسایت در گرگان؛ Software Engineer با تمرکز روی Python، Backend، ربات‌ها و اتوماسیون.
```

English:

```text
Setayesh Soheili | Software Engineer in Gorgan
```

Description:

```text
Setayesh Soheili is a Software Engineer in Gorgan, Iran, focused on Python, backend development, bots, automation, and web software.
```

---

# 17. Metadata

Use Next.js Metadata API.

Every route must have:

* unique title
* unique description
* canonical
* hreflang
* Open Graph
* Twitter metadata where appropriate

Do not use the same generic metadata for all project pages.

Project metadata should be generated from project content.

---

# 18. Canonical + hreflang

For every Persian/English equivalent:

```text
fa
en
x-default
```

Use proper absolute URLs.

Do not generate conflicting canonical URLs.

Make the site URL configurable through environment/site configuration.

---

# 19. Structured data

Homepage:

`Person`

Suggested JSON-LD:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Setayesh Soheili",
  "alternateName": "ستایش سهیلی",
  "jobTitle": "Software Engineer",
  "url": "https://YOUR-DOMAIN/",
  "sameAs": [
    "https://github.com/sin-soheili",
    "https://t.me/TheNewbieBackpack"
  ],
  "knowsAbout": [
    "Python",
    "Backend Development",
    "Web Development",
    "Telegram Bots",
    "Automation"
  ]
}
```

Replace the domain through configuration.

For project pages, only use schema types that genuinely represent the project.

Do not abuse structured data.

---

# 20. Local SEO

Naturally establish:

```text
ستایش سهیلی
گرگان
Gorgan
ایران
Iran
برنامه‌نویس و طراح وبسایت در گرگان
```

Do NOT create doorway pages such as:

```text
/gorgan-programmer
/gorgan-web-designer
/gorgan-python-developer
```

Do not repeat "برنامه نویس در گرگان" throughout the page.

Local SEO should come from:

* title
* description
* H1/H2 context
* About
* Person structured data where appropriate
* real location information
* real professional profile links
* sitemap
* canonical
* hreflang

---

# 21. meta keywords

Do not treat:

```html
<meta name="keywords">
```

as an SEO strategy.

Google does not use it as a ranking factor.

The real priorities are:

```text
title
description
H1
semantic headings
URLs
real content
structured data
canonical
hreflang
internal linking
sitemap
```

---

# 22. Sitemap

Generate:

```text
/sitemap.xml
```

Include:

* Persian homepage
* English homepage
* work index
* every project page in both languages

Do not include:

* irrelevant internal routes
* duplicate URLs
* development pages
* TODO routes

---

# 23. Robots

Generate:

```text
/robots.txt
```

Allow public pages.

Reference sitemap.

Do not accidentally block the entire site.

---

# 24. Open Graph

Homepage:

* title
* description
* URL
* image
* locale

Projects:

* project-specific title
* project-specific description
* project-specific image if available

Do not use random screenshots as the default OG image.

Create a consistent OG visual identity if no project image exists.

---

# 25. Favicon / Icons

Implement:

* favicon
* apple-touch-icon
* appropriate manifest
* theme-color if appropriate

Keep them visually consistent with the site's monochrome identity.

---

# 26. Performance

This site is NFC-first.

The first load must be fast.

Priorities:

```text
content
↓
HTML
↓
typography
↓
minimal CSS
↓
minimal JS
↓
images
↓
micro-interactions
```

Avoid:

* giant animation libraries
* WebGL
* heavy client-side rendering
* unnecessary dependencies
* loading screens

Optimize images.

Avoid layout shift.

Use static rendering wherever possible.

---

# 27. Accessibility

Implement:

* semantic HTML
* one meaningful H1 per page
* correct heading hierarchy
* keyboard navigation
* focus-visible
* accessible links
* good contrast
* reduced motion
* descriptive alt text
* correct lang
* correct dir
* proper RTL/LTR handling

---

# 28. Things you must NOT add

Do not add:

* blog
* newsletter
* testimonials
* pricing
* service packages
* SaaS cards
* dashboards
* glassmorphism
* gradients
* beige/gold palette
* generic `< />` logo
* skill bars
* fake metrics
* fake clients
* fake credentials
* aggressive CTAs
* stock imagery
* huge animations
* page loader
* scroll hijacking
* parallax-heavy UI

---

# 29. Content integrity

Never invent:

* university
* degree
* employment
* client
* date
* project metric
* project result
* certification
* responsibility
* technology

If information is missing:

**omit it or leave an explicit TODO in the content source.**

Do not fill gaps with plausible-looking information.

---

# 30. Final audit

Before considering the implementation finished, audit it from five perspectives.

## Recruiter

Can they find the equivalent of a CV quickly?

## Business owner

Can they understand what Setayesh actually does without knowing technical jargon?

## Senior developer

Does the technical profile look credible rather than inflated?

## NFC visitor

Can they understand the identity in approximately 20 seconds?

## Googlebot

Are:

* titles unique?
* descriptions unique?
* routes indexable?
* canonical correct?
* hreflang correct?
* sitemap correct?
* robots correct?
* structured data valid?
* semantic headings correct?
* content crawlable?

---

# Final visual test

The site must feel like:

**STAYESH SOHEILI — SOFTWARE ENGINEER**

with a distinctive personal visual identity.

It must NOT feel like:

**"Freelancer who wants you to buy a website."**

Build the complete first version from the supplied files.

Do not ask unnecessary questions.

If factual information is missing, create a clear TODO instead of inventing it.

```
```
