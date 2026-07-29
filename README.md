# 个人主页

中英双语个人主页。Astro + Tailwind 构建，静态输出，推送代码后由 GitHub Actions 自动部署。

线上地址：<https://hlhomes.github.io>

## 快速开始

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 推送前必须跑一遍

以后更新只需三步
npm run build     # 确认无报错
git add . && git commit -m "说明"
git push          # 约 1~2 分钟自动上线
```

需要 Node ≥ 22.12。

## 维护文档

**日常怎么改，全部写在 [docs/维护指南.md](docs/维护指南.md)。** 包含：

- 改个人资料、教育背景、实习/工作经历
- 发文章、加论文、加项目
- 调整首页板块顺序、增删导航栏目与标签
- 换配色、字体、特效
- 发布流程、故障排查、禁忌清单

## 内容都放在哪

| 内容 | 文件 |
| --- | --- |
| 姓名、定位、学校/单位、简介、社交、技能 | `src/config.ts` |
| 教育背景 | `src/data/education.yaml` |
| 实习 + 工作经历（`kind` 字段区分） | `src/data/experience.yaml` |
| 论文与专利 | `src/data/publications.yaml` |
| 项目 | `src/data/projects.yaml` |
| 博客文章 | `src/content/blog/{zh,en}/*.md` |

首页板块顺序：关于我 → 教育背景 → 实习经历 → 工作经历 → 技能栈 → 精选论文 → 精选项目 → 最新文章。**没有数据的板块自动隐藏**。

## 还没补全的内容

- `public/avatar.svg` 是占位的字母组合标，换成你的真实头像
- `src/data/publications.yaml` 里注释掉了 2 篇中文核心期刊论文与 2 项专利的模板 —— 简历里没写标题，需要你填
- `src/data/projects.yaml` 里 MiniOneRec 的仓库链接注释掉了 —— 你账号下那个是官方仓库的 fork，不是你的优化代码

## 隐私提醒

这是**公开仓库**。`.gitignore` 已全局忽略 `.pdf` / `.doc` / `.docx`，因为简历原件含手机号。**不要为了做「简历下载」把原件放进 `public/`**，那会把手机号公开到互联网。

## 技术选型备注

几处与常见教程不同、动手前值得知道的地方：

- **Tailwind 4 通过 `@tailwindcss/vite` 接入**，没有 `tailwind.config.js`，主题变量写在 `global.css` 的 `@theme` 里。旧的 `@astrojs/tailwind` 已被官方标为 legacy。
- **Markdown 处理器显式切成 `unified()`**。Astro 7 默认的 Sätteri 只解析 `$...$` 而不渲染，公式会不可见，所以必须切回来配 `remark-math` + `rehype-katex`。
- **全站零 CDN 依赖**：系统字体栈 + KaTeX 字体本地打包。这是为保证国内访问速度，不要引入外部字体或脚本。
- **深色模式用 class 变体加 `<head>` 内联脚本**，内联是为了避免刷新时闪白。
- **双语页面主体集中在 `src/components/views/`**，`src/pages/` 下的路由文件只是薄包装，改样式不用改两遍。
