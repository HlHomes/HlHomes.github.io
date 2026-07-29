/**
 * 全站唯一信息源 —— 改简介、社交、技能栈只需要动这个文件。
 *
 * 首次使用请检查以下几处（其余可保持默认）：
 *   1. PROFILE.name.zh    我不知道你的中文名，暂用拼音 "Helei"，请替换
 *   2. PROFILE.tagline / bio   一句话定位与自我介绍
 *   3. SOCIALS            把 url 填上即显示，留空字符串则自动隐藏该项
 *   4. SKILLS             按你的实际技能改
 *   5. public/avatar.svg  换成你的真实头像（jpg/png 也可，记得同步下面的 avatar 路径）
 */

export type Lang = 'zh' | 'en';
export type Localized<T = string> = Record<Lang, T>;

export const SITE = {
  /** 必须与 astro.config.mjs 的 site 保持一致 */
  url: 'https://hlhomes.github.io',
  /** 浏览器标签页与 SEO 用的站点名 */
  name: {
    zh: 'Helei',
    en: 'Helei',
  } satisfies Localized,
  description: {
    zh: '算法工程师，研究方向为图像修复与 Low-Level Vision，兼顾混合专家模型与多模态大模型。',
    en: 'Algorithm engineer working on image restoration and low-level vision, with interests in mixture-of-experts and multimodal LLMs.',
  } satisfies Localized,
};

export const PROFILE = {
  name: {
    // TODO: 换成你的中文名
    zh: 'Helei',
    en: 'Helei',
  } satisfies Localized,
  tagline: {
    zh: '算法工程师 · 图像修复与 Low-Level Vision',
    en: 'Algorithm Engineer · Image Restoration & Low-Level Vision',
  } satisfies Localized,
  bio: {
    zh: '我的工作集中在图像修复与 Low-Level Vision，关注如何让复原模型在真实退化场景下依然稳定。近期也在跟进混合专家模型（MoE）与多模态大模型的进展，尝试把它们的稀疏化与表征能力迁移到底层视觉任务上。这里记录我的论文、开源项目和技术笔记。',
    en: 'My work centres on image restoration and low-level vision, with a focus on keeping restoration models reliable under real-world degradations. I also follow progress in mixture-of-experts and multimodal LLMs, and explore how their sparsity and representation power transfer to low-level tasks. This site collects my papers, open-source projects and technical notes.',
  } satisfies Localized,
  avatar: '/avatar.svg',
  location: {
    zh: '中国',
    en: 'China',
  } satisfies Localized,
  /** 论文作者列表中命中这些写法的会自动加粗，把你论文里用过的署名都列进来 */
  authorAliases: ['Helei', 'Lei He'],
};

/** url 留空字符串的条目不会渲染，方便你按需启用 */
export const SOCIALS: ReadonlyArray<{
  label: string;
  url: string;
  icon: 'github' | 'mail' | 'scholar' | 'zhihu' | 'x';
}> = [
  { label: 'GitHub', url: 'https://github.com/HlHomes', icon: 'github' },
  { label: 'Email', url: '', icon: 'mail' },
  { label: 'Google Scholar', url: '', icon: 'scholar' },
  { label: '知乎', url: '', icon: 'zhihu' },
];

export const SKILLS: ReadonlyArray<{
  group: Localized;
  items: readonly string[];
}> = [
  {
    group: { zh: '研究方向', en: 'Research' },
    items: ['Image Restoration', 'Low-Level Vision', 'Mixture-of-Experts', 'Multimodal LLM'],
  },
  {
    group: { zh: '框架与语言', en: 'Frameworks & Languages' },
    items: ['PyTorch', 'Python', 'NumPy', 'OpenCV', 'C++'],
  },
  {
    group: { zh: '工程工具', en: 'Tooling' },
    items: ['Linux', 'Git', 'Docker', 'CUDA', 'Weights & Biases'],
  },
];

/** 首页各板块展示条数 */
export const HOME_LIMITS = {
  publications: 3,
  projects: 3,
  posts: 3,
};
