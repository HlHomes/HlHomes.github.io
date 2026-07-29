---
title: Maintaining this site
description: Which file to touch when adding a post, a paper, or editing the bio.
pubDate: 2026-07-28
lang: en
tags:
  - meta
translationKey: site-guide
---

A note to self. Everything is a plain text file; a `git push` puts it live in about a minute.

## Adding a post

Create a `.md` file under `src/content/blog/en/`. The filename becomes the URL. Minimum frontmatter:

```yaml
---
title: Post title
description: One-line summary, shown in listings and search results
pubDate: 2026-07-28
lang: en
tags:
  - some-tag
---
```

The Chinese version lives in `src/content/blog/zh/` with `lang: zh`.

Give both versions the same `translationKey` to link them — the language switch then jumps straight to the translation instead of falling back to the index.

Set `draft: true` while writing; drafts appear only in local `npm run dev`.

## Adding a paper or patent

Append a record to `src/data/publications.yaml`. `type` is one of `conference` / `journal` / `preprint` / `patent`, and `featured: true` promotes it to the home page.

Author names matching `PROFILE.authorAliases` in `src/config.ts` are bolded automatically.

## Adding a project

Append to `src/data/projects.yaml`. Same shape, except `description` needs both languages.

## Editing bio, socials, skills

All in `src/config.ts`. Leave a social `url` as an empty string to hide that entry without deleting it.

## Changing colours

Edit only the `@theme` block in `src/styles/global.css` and the `html.dark` block right after it. Those define CSS variables that every utility class points at, so one edit repaints the whole site.

## Local preview

```bash
npm run dev      # http://localhost:4321
npm run build    # run before pushing; must be clean
npm run preview  # inspect the built output
```
