---
title: راهنمای قالب‌بندی
description: پیش‌نویسی برای دیدن شکل همه‌ی عناصر Markdown. هیچ‌وقت منتشر نمی‌شود.
date: 2026-09-27
category: Reference / Markdown
tags: [Markdown, Draft]
translationSlug: _draft-formatting-reference
project: chatpack
featured: true
draft: true
---

این پیش‌نویس فقط برای دیدن تایپوگرافی مقاله در حالت توسعه است. پاراگراف‌ها در یک ستون باریک با فاصله‌ی خطوط مناسب نمایش داده می‌شوند و لینک‌هایی مثل [پروفایل گیت‌هاب](https://github.com/sin-soheili) زیرخط دارند. کد درون‌خطی این شکلی است: `pip install requests`.

## تیترها و پاراگراف‌ها

هر تیتر `##` یک بخش شماره‌دار می‌شود و در فهرست مطالب می‌آید. پاراگراف دوم فاصله‌ی بین بلوک‌های متن را نشان می‌دهد.

### یک زیربخش

زیربخش‌ها در فهرست مطالب با تورفتگی نمایش داده می‌شوند.

## کد

```python
async def handle(update, context):
    user = update.effective_user
    await context.bot.send_message(chat_id=user.id, text="سلام")
```

## نقل‌قول و فهرست

> یک نقل‌قول کوتاه یا یک نکته‌ی مهم.

- مورد اول فهرست
- مورد دوم با `inline code`
- مورد سوم

1. مرحله‌ی اول
2. مرحله‌ی دوم

## جدول

| فیلد | الزامی | توضیح |
| ---- | ------ | ----- |
| title | بله | به‌عنوان H1 نمایش داده می‌شود |
| date | بله | YYYY-MM-DD |
| tags | خیر | در انتهای مقاله |
