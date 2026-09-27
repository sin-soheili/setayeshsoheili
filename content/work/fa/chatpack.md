## ChatPack چیست

ChatPack یک کتابخانه‌ی Python شامل کامپوننت‌های تعاملی برای ربات‌های تلگرامی است که با [Pyrogram](https://docs.pyrogram.org/) ساخته می‌شوند. هر کامپوننت — یک تأیید، یک منو یا یک مرحله از فرم — مثل یک تابع `await` می‌شود؛ بنابراین یک گفت‌وگوی چندمرحله‌ای به‌صورت کد ترتیبی نوشته می‌شود، نه مجموعه‌ای از callback handlerها و state ذخیره‌شده.

روی PyPI با نام `chatpack-ui` منتشر شده و به Python 3.8 یا بالاتر نیاز دارد.

```bash
pip install chatpack-ui
```

## جریانی که جایگزین می‌شود

```text
Without ChatPack
  state (DB) ──> handler ──> edit UI ──> next state (DB)

With ChatPack
  data = await Form([Step1, Step2]).run()
```

## معماری

همه‌ی کامپوننت‌ها از کلاس مشترک `BaseField` ارث می‌برند و به دو شکل صدا زده می‌شوند:

- `ask(client, chat_id)` مقدار اعتبارسنجی‌شده را همراه با شناسه‌ی پیام‌هایی که فرستاده برمی‌گرداند تا `Form` بتواند بعد از پایان، گفت‌وگو را تمیز کند.
- `ask_value(client, chat_id)` فقط مقدار را برمی‌گرداند؛ برای پرسش‌های تکی داخل handlerهای موجود.

دکمه‌های inline داده‌ی callback فضای‌نام‌دار دارند — `cp:<field key>:<action>[:<value>]` — و هر فیلد payloadهای متعلق به کلید دیگر را نادیده می‌گیرد؛ پس دکمه‌های قدیمی مراحل قبل تداخلی ایجاد نمی‌کنند.

## کامپوننت‌ها

- `ConfirmDialog` — تأیید بله/خیر پیش از کارهای برگشت‌ناپذیر
- `JoinChecker` — تا عضویت کاربر در کانال‌های لازم، دسترسی را می‌بندد
- `RatingStars` — امتیازدهی ستاره‌ای روی یک پیام
- `NestedMenu` — منوی چندسطحی از دیکشنری‌های تودرتو
- `BroadcastSender` — ارسال یک پیام به فهرستی از کاربران
- `ChunkSender` — تقسیم متن‌های بلندتر از سقف ۴۰۹۶ کاراکتری تلگرام
- `BranchingForm` — فرمی که مرحله‌ی بعدش به پاسخ‌های قبلی بستگی دارد
- `MultiSelectMenu` — منوی چندانتخابی با حداقل و حداکثر
- `PhotoCollector` — جمع‌آوری چند عکس در محدوده‌ی تعیین‌شده

```python
from chatpack import ConfirmDialog

dialog = ConfirmDialog("Are you sure you want to permanently delete your data?")
confirmed = await dialog.ask_value(client, message.chat.id, timeout=30)
```

## تست

مجموعه‌ی تست‌ها بدون اینترنت اجرا می‌شود: آبجکت‌های واقعی update در Pyrogram کامپوننت‌ها را اجرا می‌کنند و یک client جعلی همه‌ی درخواست‌های خروجی را ثبت می‌کند. از pytest و برای lint از flake8 استفاده شده است.

## وضعیت

نسخه‌ی v1.0.3 در خرداد ۱۴۰۵ (ژوئن ۲۰۲۶) منتشر شد و نسخه‌ی V1.0.4 در شهریور ۱۴۰۵ (سپتامبر ۲۰۲۶) کامپوننت‌های بیشتری اضافه کرد. تحت مجوز MIT منتشر می‌شود.
