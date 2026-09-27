## What it does

A notes manager that runs in the terminal. Notes can be added, read, edited, deleted and searched by keyword. Everything stays on the local machine; there is no cloud storage.

## How it works

Each note is encrypted with Fernet symmetric encryption from the `cryptography` package, using a key derived from the user's password. The terminal interface is built with Rich.

```bash
pip install cryptography rich
python main.py
```
