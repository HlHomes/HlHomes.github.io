---
title: Maintaining this site
description: Which file to touch when adding a post, a paper, or editing the bio.
pubDate: 2026-07-28
updatedDate: 2026-09-20
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

## Project visibility

Project entries are currently hidden. Their source data remains in the repository, and old project URLs redirect to the home page. See `docs/维护指南.md` in the repository for restoration steps.

## Education and experience

Edit `src/data/education.yaml` for the school, major, degree and dates. Internships and employment share `src/data/experience.yaml`: use `kind: internship` or `kind: work`, and provide the company, bilingual `department`, role and dates.

## Motion and typography

The home page has three interactive research visualizations. The Motion button pauses animation; the system's reduced-motion preference also disables it. Body text is 18px on desktop and 17px on mobile. Adjust typography and layout in `src/styles/global.css`.

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
