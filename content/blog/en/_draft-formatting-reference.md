---
title: Formatting reference
description: A draft that shows how every Markdown element renders. It is never published.
date: 2026-09-27
category: Reference / Markdown
tags: [Markdown, Draft]
translationSlug: _draft-formatting-reference
project: chatpack
featured: true
draft: true
---

This draft exists only to preview article typography in development. Paragraphs use a narrow reading column with generous line-height, and links such as [the GitHub profile](https://github.com/sin-soheili) are underlined. Inline code looks like `pip install requests`.

## Headings and paragraphs

Every `##` heading becomes a numbered section and an entry in the outline. A second paragraph shows spacing between blocks of text.

### A subsection

Subsections appear indented in the outline.

## Code

```python
async def handle(update, context):
    user = update.effective_user
    await context.bot.send_message(chat_id=user.id, text="Hello")
```

```bash
npm run build && npm run deploy
```

## Quotes and lists

> A blockquote for a short quotation or an important note.

- Unordered list item
- Another item with `inline code`
- A third item

1. Ordered step one
2. Ordered step two

## Tables

| Field | Required | Notes |
| ----- | -------- | ----- |
| title | yes | Shown as the H1 |
| date | yes | YYYY-MM-DD |
| tags | no | Shown at the end |
