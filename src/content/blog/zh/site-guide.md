---
title: 这个站点怎么维护
description: 加一篇文章、加一篇论文、改简介分别要动哪个文件。
pubDate: 2026-07-28
lang: zh
tags:
  - 站点
translationKey: site-guide
---

这篇是给我自己看的备忘。所有内容都是纯文本文件，改完 `git push` 约一分钟后自动上线。

## 加一篇文章

在 `src/content/blog/zh/` 下新建 `.md` 文件，文件名就是网址。frontmatter 至少要有：

```yaml
---
title: 文章标题
description: 一句话摘要，会显示在列表页和搜索结果里
pubDate: 2026-07-28
lang: zh
tags:
  - 标签一
---
```

英文版放到 `src/content/blog/en/`，`lang` 改成 `en`。

想让两种语言的同一篇文章互相关联，给它们加同一个 `translationKey`——这样读者在文章页切换语言会直接跳到译文，而不是退回列表页。

写作过程中不想被别人看到，加 `draft: true`，它就只在本地 `npm run dev` 里可见。

## 加一篇论文或专利

编辑 `src/data/publications.yaml`，追加一条记录。`type` 可选 `conference` / `journal` / `preprint` / `patent`；标了 `featured: true` 的会出现在首页。

作者名只要命中 `src/config.ts` 里 `PROFILE.authorAliases` 列出的写法，就会自动加粗，不用手动标。

## 加一个项目

编辑 `src/data/projects.yaml`，格式与论文类似，`description` 需要中英各一份。

## 改简介、社交链接、技能栈

统一在 `src/config.ts`。社交链接的 `url` 留空字符串即自动隐藏，不用删整条。

## 改配色

只改 `src/styles/global.css` 里的 `@theme` 块和紧随其后的 `html.dark` 块。这两处定义的是 CSS 变量，全站颜色都指向它们，改一个值整站跟着变，不需要逐个组件翻。

## 本地预览

```bash
npm run dev      # http://localhost:4321
npm run build    # 上线前先跑一遍，确保零报错
npm run preview  # 预览构建产物
```
