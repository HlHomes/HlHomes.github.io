/**
 * 全站唯一信息源 —— 改简介、社交、技能栈只需要动这个文件。
 *
 * 内容来自你的简历《贺磊-算法工程师.pdf》。教育背景与实习/工作经历不在这里，
 * 它们在 src/data/education.yaml 与 src/data/experience.yaml，详见 docs/维护指南.md。
 */

export type Lang = 'zh' | 'en';
export type Localized<T = string> = Record<Lang, T>;

export const SITE = {
  /** 必须与 astro.config.mjs 的 site 保持一致 */
  url: 'https://hlhomes.github.io',
  /** 浏览器标签页与 SEO 用的站点名 */
  name: {
    zh: '贺磊',
    en: 'Lei He',
  } satisfies Localized,
  description: {
    zh: '算法工程师，研究方向为 Low-Level Vision 与统一图像修复，兼顾大模型应用、搜广推与 Agent 开发。',
    en: 'Algorithm engineer working on low-level vision and unified image restoration, with interests in LLM applications, recommender systems and agents.',
  } satisfies Localized,
};

export const PROFILE = {
  name: {
    zh: '贺磊',
    en: 'Lei He',
  } satisfies Localized,
  /** 侧栏姓名下方那行。侧栏只有 224px 宽，建议控制在 30 个汉字以内，否则会折成很多行 */
  tagline: {
    zh: '算法工程师 · 视觉 / 大模型应用 / 搜广推 / Agent',
    en: 'Algorithm Engineer · Vision / LLM Apps / RecSys / Agent',
  } satisfies Localized,
  /** 侧栏显示的学校与单位，按顺序排列。想加减条目直接改这个数组 */
  affiliations: [
    {
      zh: '西南交通大学 · 人工智能硕士在读',
      en: 'M.Eng. in AI · Southwest Jiaotong University',
    },
    {
      zh: '阶跃星辰 · AIGC 算法实习生',
      en: 'AIGC Algorithm Intern · StepFun',
    },
  ] satisfies Localized[],
  bio: {
    zh: '我是西南交通大学人工智能硕士在读，研究方向是 Low-Level Vision 与统一图像修复，一篇一作论文在投 IEEE TIP。目前在阶跃星辰做 AIGC 算法实习，负责屏下画质修复与端侧扩散模型的轻量化；此前在旷视科技做人像感知算法，参与过百亿级人脸识别算法的预训练、蒸馏与端侧部署。此外也在做大模型应用、生成式推荐与 Agent 方向的项目。这里记录我的论文、项目和技术笔记。',
    en: "I am a master's student in Artificial Intelligence at Southwest Jiaotong University, working on low-level vision and unified image restoration; my first-author paper is under review at IEEE TIP. I am currently an AIGC algorithm intern at StepFun, working on under-display image restoration and lightweight on-device diffusion models. Previously at Megvii I worked on face perception, including pretraining, distillation and on-device deployment of billion-scale face recognition models. I also build projects around LLM applications, generative recommendation and agents. This site collects my papers, projects and technical notes.",
  } satisfies Localized,
  avatar: '/avatar.svg',
  location: {
    zh: '四川成都',
    en: 'Chengdu, China',
  } satisfies Localized,
  /** 论文作者列表中命中这些写法的会自动加粗，把你论文里用过的署名都列进来 */
  authorAliases: ['贺磊', 'Lei He', 'He Lei'],
};

/**
 * url 留空字符串的条目不会渲染，方便你按需启用。
 * 注意：邮箱必须写成 mailto:xxx@xx.com，只写邮箱地址会被当成相对路径而跳到 404。
 */
export const SOCIALS: ReadonlyArray<{
  label: string;
  url: string;
  icon: 'github' | 'mail' | 'scholar' | 'zhihu' | 'x';
}> = [
  { label: 'GitHub', url: 'https://github.com/HlHomes', icon: 'github' },
  { label: 'Email', url: 'mailto:1601339895@qq.com', icon: 'mail' },
  { label: '知乎', url: 'https://www.zhihu.com/people/sunshine-47-19-49', icon: 'zhihu' },
  { label: 'Google Scholar', url: '', icon: 'scholar' },
];

export const SKILLS: ReadonlyArray<{
  group: Localized;
  items: readonly string[];
}> = [
  {
    group: { zh: '研究方向', en: 'Research' },
    items: [
      'Image Restoration',
      'Low-Level Vision',
      'Image Generation',
      'Face Recognition',
      'Generative Recommendation',
      'Agent',
    ],
  },
  {
    group: { zh: '大模型与 AIGC', en: 'LLM & AIGC' },
    items: [
      'LoRA / QLoRA',
      'GPTQ / AWQ',
      'vLLM',
      'RAG',
      'LangChain',
      'MCP',
      'GRPO / PPO',
      'Diffusion (Flux / SD)',
    ],
  },
  {
    group: { zh: '框架与语言', en: 'Frameworks & Languages' },
    items: ['PyTorch', 'Python', 'C', 'NumPy', 'OpenCV', 'MySQL', 'Transformer', 'CNN'],
  },
  {
    group: { zh: '工程工具', en: 'Tooling' },
    items: ['Linux', 'SSH', 'Git', 'Docker', 'CUDA', 'Claude Code / Codex / TRAE'],
  },
];

/** 首页各板块展示条数 */
export const HOME_LIMITS = {
  publications: 3,
  projects: 3,
  posts: 3,
};
