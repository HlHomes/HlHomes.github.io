/**
 * 全站唯一信息源 —— 改简介、社交、技能栈只需要动这个文件。
 *
 * 内容依据 2026-09 更新的简历。教育背景与实习/工作经历不在这里，
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
    zh: '贺磊，西南交通大学计算机与人工智能学院硕士研究生，导师为储节磊教授。研究方向：计算机视觉、图像/视频生成、模型推理加速。',
    en: 'Lei He, a master\'s student at Southwest Jiaotong University, advised by Prof. Jielei Chu. Research in computer vision, image/video generation and model inference acceleration.',
  } satisfies Localized,
};

export const PROFILE = {
  name: {
    zh: '贺磊',
    en: 'Lei He',
  } satisfies Localized,
  /** 侧栏姓名下方的研究定位，建议控制在 30 个汉字以内。 */
  tagline: {
    zh: '计算机视觉 · 生成式 AI · 推理加速',
    en: 'Computer Vision · Generative AI · Efficient Inference',
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
    zh: '我当前在西南交通大学计算机与人工智能学院攻读硕士学位，导师为储节磊教授，研究方向为：计算机视觉、图像/视频生成、模型推理加速。欢迎浏览我的个人主页！😊',
    en: "I am currently pursuing a master's degree at the School of Computing and Artificial Intelligence, Southwest Jiaotong University, advised by Prof. Jielei Chu. My research interests include computer vision, image/video generation, and model inference acceleration. Welcome to my personal website! 😊",
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
    group: { zh: '视觉与生成', en: 'Vision & Generation' },
    items: ['PyTorch', 'Image Restoration', 'Diffusion', 'SD / Flux', 'ComfyUI', 'CLIP / SigLIP'],
  },
  {
    group: { zh: '压缩与加速', en: 'Efficient Inference' },
    items: ['Distillation', 'QAT / GPTQ / AWQ', 'ONNX', 'vLLM / Ollama', 'FlashAttention', 'CacheDiT'],
  },
  {
    group: { zh: '大模型与智能体', en: 'LLMs & Agents' },
    items: ['SFT', 'LoRA / QLoRA', 'RAG', 'LangChain', 'MCP', 'Function Calling'],
  },
  {
    group: { zh: '工程工具', en: 'Tooling' },
    items: ['Python', 'Linux / SSH', 'Git', 'Claude Code / Codex / Cursor'],
  },
];

/** 首页各板块展示条数 */
export const HOME_LIMITS = {
  publications: 3,
  posts: 3,
};
