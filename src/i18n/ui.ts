import type { Lang } from '../config';

export const defaultLang: Lang = 'zh';

export const languageNames: Record<Lang, string> = {
  zh: '中文',
  en: 'English',
};

/** 所有界面文案集中在此。两种语言的键必须完全一致，否则 UIKey 类型会报错。 */
export const ui = {
  zh: {
    'nav.home': '关于',
    'nav.publications': '论文',
    'nav.projects': '项目',
    'nav.blog': '博客',
    'nav.menu': '打开菜单',
    'nav.close': '关闭菜单',

    'home.about': '关于我',
    'home.skills': '技能栈',
    'home.publications': '精选论文',
    'home.projects': '精选项目',
    'home.posts': '最新文章',
    'home.viewAll': '全部',

    'publications.title': '论文与专利',
    'publications.description': '按年份倒序排列。',
    'publications.empty': '暂无记录。',

    'projects.title': '项目',
    'projects.description': '开源项目与研究代码。',
    'projects.empty': '暂无记录。',

    'blog.title': '博客',
    'blog.description': '技术笔记与阅读记录。',
    'blog.empty': '还没有文章。',
    'blog.toc': '目录',
    'blog.updated': '更新于',
    'blog.prev': '上一篇',
    'blog.next': '下一篇',
    'blog.backToList': '返回博客列表',

    'meta.placeholder': '示例数据，请替换',
    'meta.stars': 'Stars',

    'link.pdf': 'PDF',
    'link.code': '代码',
    'link.project': '项目页',
    'link.doi': 'DOI',
    'link.bibtex': 'BibTeX',
    'link.repo': '仓库',
    'link.demo': '演示',
    'link.paper': '论文',

    'theme.toggle': '切换深浅色主题',
    'lang.switch': '切换语言',
    'footer.builtWith': '基于 Astro 构建',

    '404.title': '页面不存在',
    '404.description': '你访问的地址没有对应的内容。',
    '404.back': '回到首页',
  },
  en: {
    'nav.home': 'About',
    'nav.publications': 'Publications',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',

    'home.about': 'About',
    'home.skills': 'Skills',
    'home.publications': 'Selected Publications',
    'home.projects': 'Selected Projects',
    'home.posts': 'Latest Posts',
    'home.viewAll': 'All',

    'publications.title': 'Publications & Patents',
    'publications.description': 'Listed newest first.',
    'publications.empty': 'Nothing here yet.',

    'projects.title': 'Projects',
    'projects.description': 'Open-source work and research code.',
    'projects.empty': 'Nothing here yet.',

    'blog.title': 'Blog',
    'blog.description': 'Technical notes and reading logs.',
    'blog.empty': 'No posts yet.',
    'blog.toc': 'Contents',
    'blog.updated': 'Updated',
    'blog.prev': 'Previous',
    'blog.next': 'Next',
    'blog.backToList': 'Back to all posts',

    'meta.placeholder': 'Sample data — replace me',
    'meta.stars': 'Stars',

    'link.pdf': 'PDF',
    'link.code': 'Code',
    'link.project': 'Project',
    'link.doi': 'DOI',
    'link.bibtex': 'BibTeX',
    'link.repo': 'Repo',
    'link.demo': 'Demo',
    'link.paper': 'Paper',

    'theme.toggle': 'Toggle colour theme',
    'lang.switch': 'Switch language',
    'footer.builtWith': 'Built with Astro',

    '404.title': 'Page not found',
    '404.description': 'There is no content at this address.',
    '404.back': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['zh'];
