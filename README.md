# 贺磊的个人主页

中英双语个人主页，基于 Astro + Tailwind CSS。页面在构建时生成，浏览器提供交互式研究方向点阵、滚动进度、深浅色切换和动画控制，推送后由 GitHub Actions 自动部署到 GitHub Pages。

线上地址：<https://hlhomes.github.io/>

英文版：<https://hlhomes.github.io/en/>

## 本次更新

依据 2026 年 9 月更新的 PDF 简历同步个人信息：

- 首页保留指定简介，末尾为 😊。
- 教育只展示学校、专业（学位）、时间；实习和工作只展示公司、部门、职位、时间。
- TIP 论文更新为“已录用，待刊”，加入已过初审的发明专利。
- 暂不公开展示项目经历；原项目链接跳回对应语言首页。
- 正文桌面 18px、手机 17px，增加动态点阵、章节导航、阅读进度和动画开关。
- 保留中英双语、深浅主题、博客、公式与 RSS。

详细记录见 [本次更新说明](docs/更新说明-2026-09.md)。

## 本地使用

需要 Node.js ≥ 22.12，推荐 Node.js 24。

```bash
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

开发预览：<http://localhost:4321>。Windows PowerShell 若限制执行 npm.ps1，可使用 `npm.cmd`。

## 内容与维护

| 要修改的内容 | 文件 |
| --- | --- |
| 姓名、首页简介、社交、技能 | `src/config.ts` |
| 教育经历 | `src/data/education.yaml` |
| 实习与工作经历 | `src/data/experience.yaml` |
| 论文与专利 | `src/data/publications.yaml` |
| 博客 | `src/content/blog/{zh,en}/*.md` |
| 配色、字号、布局 | `src/styles/global.css` |
| 中英文案 | `src/i18n/ui.ts` |
| 首页动态点阵 | `src/components/ResearchField.astro` |
| 动画开关与滚动进度 | `src/components/SiteEffects.astro` |

首页顺序：简介与研究方向 → 教育背景 → 实习经历 → 工作经历（有数据时）→ 论文与专利 → 技能栈 → 最新文章。

日常修改、项目恢复、动画开关、发布和排错步骤见 [维护指南](docs/维护指南.md)。

## 发布

```bash
npm run check
npm run build
git add .
git commit -m "Update homepage content"
git push origin main
```

推送后在 [GitHub Actions](https://github.com/HlHomes/HlHomes.github.io/actions) 查看部署结果。以工作流成功和线上内容更新为准，通常需要数分钟。

## 内容约定

- PDF 简历原件含手机号，继续由 `.gitignore` 忽略；无需上传原件即可更新主页。
- 简历未提供标题的两篇中文核心论文、两项已授权专利和专著未编造条目。
- 头像仍使用原有字母标，可在 `PROFILE.avatar` 中换成自己的照片。
- 项目源数据和组件保留，当前不生成项目展示内容。

## 技术约定

- Tailwind 4 通过 `@tailwindcss/vite` 接入，主题写在 CSS 的 `@theme` 中。
- Markdown 使用 `unified()` 配合 `remark-math` 和 `rehype-katex` 渲染公式。
- 字体使用本机字体，脚本与 KaTeX 字体由本站提供，无外部 CDN 依赖。
- Canvas 在离开视口、切换后台或关闭动态效果时停止刷新；禁用 JavaScript 时保留正文和静态图形。
- 中英页面共用 `src/components/views/`，路由文件位于 `src/pages/`。