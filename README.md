# 个人主页

中英双语个人主页。Astro + Tailwind 构建，静态输出，推送代码后由 GitHub Actions 自动部署。

线上地址：<https://hlhomes.github.io>

## 快速开始

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 推送前必须跑一遍
```

需要 Node ≥ 22.12。

## 维护文档

**日常怎么改，全部写在 [docs/维护指南.md](docs/维护指南.md)。** 包含：

- 改个人资料、发文章、加论文、加项目
- 增删栏目与标签
- 换配色、字体、特效
- 发布流程、故障排查、禁忌清单

## 首次使用要改的四处

1. `src/config.ts` — 姓名（中文名当前是占位的拼音 `Helei`）、简介、社交链接、技能栈
2. `public/avatar.svg` — 换成你的真实头像
3. `src/data/publications.yaml` — 删掉标了 `placeholder: true` 的示例论文
4. `src/data/projects.yaml` — 补准 `DACG-IR` 的描述，删掉示例项目

## 技术选型备注

几处与常见教程不同、动手前值得知道的地方：

- **Tailwind 4 通过 `@tailwindcss/vite` 接入**，没有 `tailwind.config.js`，主题变量写在 `global.css` 的 `@theme` 里。旧的 `@astrojs/tailwind` 已被官方标为 legacy。
- **Markdown 处理器显式切成 `unified()`**。Astro 7 默认的 Sätteri 只解析 `$...$` 而不渲染，公式会不可见，所以必须切回来配 `remark-math` + `rehype-katex`。
- **全站零 CDN 依赖**：系统字体栈 + KaTeX 字体本地打包。这是为保证国内访问速度，不要引入外部字体或脚本。
- **深色模式用 class 变体加 `<head>` 内联脚本**，内联是为了避免刷新时闪白。
- **双语页面主体集中在 `src/components/views/`**，`src/pages/` 下的路由文件只是薄包装，改样式不用改两遍。
