# My website & blog

[TOC]

## New post

```bash
pnpm new:post
```

## Pre-commit build step

Need to build the resume PDF *prior* to pushing to `origin` because Vercel sometimes fails to run phaontomjs to generate teh PDF:

```bash
pnpm build:cv
```
