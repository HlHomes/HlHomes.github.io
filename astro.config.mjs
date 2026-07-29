import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// User site (repo named HlHomes.github.io) — served from the domain root, so no `base`.
export default defineConfig({
  site: 'https://hlhomes.github.io',

  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', en: 'en-US' },
      },
      // The 404 page is bilingual and exists only at the root, so it has no /en counterpart.
      filter: (page) => !page.includes('/404'),
    }),
  ],

  markdown: {
    // Astro 7's default Sätteri processor parses `$...$` but never renders it.
    // Switching back to unified is what makes KaTeX output possible.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
