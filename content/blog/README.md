# Writing posts

One Markdown file per post: `content/blog/<fa|en>/<slug>.md`. The file name is the URL slug
(`content/blog/en/telegram-bots.md` → `/en/blog/telegram-bots`). The blog index, homepage list,
sitemap, prev/next links and metadata are generated from these files — no UI edits needed.

```yaml
---
title: Things I learned while building Telegram bots   # required
description: One or two sentences for the list and search results.   # required
date: 2026-09-20            # required, YYYY-MM-DD
updatedAt: 2026-09-25       # optional
category: Python / Automation   # required, shown in mono caps
tags: [Python, Telegram]    # optional
translationSlug: telegram-bots-fa   # optional: slug of the same post in the other language
coverImage: /images/blog/telegram-bots.webp   # optional, file in /public/images/blog/
coverAlt: Describe the image      # required when coverImage is set
readingTime: 6              # optional, otherwise computed
project: chatpack           # optional: related project slug (linked both ways)
featured: true              # optional: FEATURED badge on the blog index
draft: true                 # optional: visible only in `npm run dev`
---
```

Use `##` for sections (they get numbered `01 // SECTION` labels and appear in the outline) and `###`
for subsections. Fenced code blocks get a language label and a copy button.

`_draft-formatting-reference.md` files are formatting references marked `draft: true`; they never ship.
