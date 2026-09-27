## What it is

ChatPack is a Python library of interactive UI components for Telegram bots built on [Pyrogram](https://docs.pyrogram.org/). Each component — a confirmation, a menu, a form step — is awaited like a function call, so a multi-step conversation is written as sequential code instead of a set of callback handlers and stored state.

It is published on PyPI as `chatpack-ui` and requires Python 3.8+.

```bash
pip install chatpack-ui
```

## The flow it replaces

```text
Without ChatPack
  state (DB) ──> handler ──> edit UI ──> next state (DB)

With ChatPack
  data = await Form([Step1, Step2]).run()
```

## Architecture

Every component extends a shared `BaseField` class and can be called in two ways:

- `ask(client, chat_id)` returns the validated value together with the ids of the messages it sent, so a `Form` can clean the conversation up afterwards.
- `ask_value(client, chat_id)` returns only the value, for one-off prompts inside existing handlers.

Inline buttons carry namespaced callback data — `cp:<field key>:<action>[:<value>]` — and each field ignores payloads that belong to another key, so stale buttons from an earlier step cannot interfere.

## Components

- `ConfirmDialog` — yes/no confirmation before destructive actions
- `JoinChecker` — blocks access until the user joins required channels
- `RatingStars` — star rating on a single message
- `NestedMenu` — multi-level menus built from nested dictionaries
- `BroadcastSender` — copies a message to a list of users
- `ChunkSender` — splits text that exceeds Telegram's 4,096-character limit
- `BranchingForm` — forms whose next step depends on earlier answers
- `MultiSelectMenu` — checkbox menu with minimum and maximum limits
- `PhotoCollector` — collects a batch of photos within set limits

```python
from chatpack import ConfirmDialog

dialog = ConfirmDialog("Are you sure you want to permanently delete your data?")
confirmed = await dialog.ask_value(client, message.chat.id, timeout=30)
```

## Testing

The test suite runs offline: real Pyrogram update objects drive the components while a fake client records every outgoing API call. It uses pytest, with flake8 for linting.

## Status

Released as v1.0.3 in June 2026; the September 2026 release (V1.0.4) added more components. Distributed under the MIT License.
