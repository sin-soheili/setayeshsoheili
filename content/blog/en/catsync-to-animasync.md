---
title: From CatSync to AnimaSync
description: How a small problem while making a 2D animation turned into redesigning an open-source lip-sync tool.
date: 2026-09-27
category: Development / Notes
tags: [AnimaSync, CatSync, Animation, Lip Sync, Open Source]
translationSlug: catsync-to-animasync
project: animasync
featured: true
draft: false
---

# From CatSync to AnimaSync

For a few days, I was experimenting with a simple 2D animation.

It wasn't anything complicated. I had a character made of several frames, with separate mouth shapes for different sounds. I was also using TTS for the dialogue.

What I wanted was simple: synchronize those mouth frames with the character's voice without having to use a full animation suite or rely on an AI lip-sync service every time I changed a line of dialogue.

After quite a bit of searching — and quite a bit of talking to ChatGPT — I found **CatSync**.

The concept was exactly what I was looking for:

**Sprite Sheet + Audio → Lip Sync**

Upload a sprite sheet, add an audio file, and let the tool synchronize the frames with the audio.

There was just one small problem that turned into a rather annoying one.

The frames I had designed didn't fit perfectly into a regular grid. CatSync's default slicing therefore didn't match the actual boundaries of my frames.

The result was that the frames shifted slightly during playback.

My temporary solution was honestly a little ridiculous:

**CatSync → InShot → Stabilizer**

I would export each dialogue, open it in InShot, and use Stabilizer to fix the movement.

Once or twice? Fine.

But when you have to do it for every dialogue, the problem is no longer the output. The problem is the workflow.

So instead of fixing the output every time, I decided to fix the tool.

I opened CatSync's source code and discovered that the whole application was essentially contained in a single HTML file.

So I forked it.

The first thing I wanted to add was independent frame boundaries — a way to define exactly where each frame starts and how large it is, instead of forcing every frame into a predefined grid.

But eventually, the problem became bigger than slicing.

CatSync had a lot of useful controls, but its interface was quite technical and busy for the simple task I was trying to accomplish. A user shouldn't have to deal with every advanced setting just to get from a sprite sheet and an audio file to a preview.

So the project gradually stopped being just a small fork and became a redesign of the workflow itself:

**Add the sprite sheet → Add the audio → Configure the frames → Preview → Export.**

The advanced controls were kept, but moved behind an Advanced section instead of being part of the main path.

Persian and RTL support, responsive and mobile-first design, better settings management, and safer reset behavior followed the same direction.

Eventually, the project became **AnimaSync**.

What I found interesting was how a very small problem in a personal animation project turned into a real software-design problem.

Sometimes the right solution isn't to keep fixing the output of a system. It's to step back and ask whether the system's workflow is actually designed for the problem in the first place.

That's where AnimaSync started.
