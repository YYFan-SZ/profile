// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ZH and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "zh" | "en";

export const LANGUAGES: Lang[] = ["zh", "en"];
export const DEFAULT_LANG: Lang = "zh";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).zh === "string";
}

export const DICT = {
  picker: {
    season: { zh: "主题", en: "Season" },
    language: { zh: "语言", en: "Language" },
  },
  seasons: {
    paper: { zh: "纸白", en: "Paper" },
    ink: { zh: "墨色", en: "Ink" },
    mono: { zh: "Mono", en: "Mono" },
  },
  nav: {
    aria: { zh: "页面章节", en: "Sections" },
      home: { zh: "首页", en: "Home" },
    stack: { zh: "能力", en: "Abilities" },
    experience: { zh: "实践", en: "Practice" },
    project: { zh: "作品", en: "Work" },
    content: { zh: "内容运营", en: "Content" },
    contact: { zh: "联系", en: "Contact" },
  },
  header: {
    availability: {
      zh: "欢迎交流",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { zh: "你好，我是", en: "Hi, I am" },
    roleLine: {
      zh: "ZhengYifan · 移动互联应用技术",
      en: "ZhengYifan · Mobile Internet Application Technology",
    },
    tagline: {
      zh: "20 岁，来自深圳。平时做小程序、网页、AI 工具和内容运营相关的实践。",
      en: "20, from Shenzhen. I work on small programs, websites, AI tools and content projects.",
    },
    cv: { zh: "查看简历", en: "View CV" },
    hire: { zh: "联系我", en: "Contact me" },
    room: { zh: "我的房间", en: "My Room" },
    scroll: { zh: "向下浏览", en: "Scroll to explore" },
    keysHint: {
      zh: "· 悬停查看能力",
      en: "· hover over the keys",
    },
  },
  stack: {
    title: { zh: "我的能力清单", en: "My abilities" },
    hint: {
      zh: "点击琴键，查看对应能力",
      en: "Click a key to see the corresponding ability",
    },
    hintMobile: {
      zh: "点击琴键，查看对应能力。",
      en: "Click a key to see the corresponding ability.",
    },
  },
  experience: {
    kicker: { zh: "实践经历", en: "experience" },
    title: { zh: "实践经历", en: "Practice" },
    subtitle: {
      zh: "从校园组织、赛事现场到社群协作，记录真实参与并完成落地的事情。",
      en: "From campus organisations and event venues to community work — a record of things I actually did.",
    },
  },
  projects: {
    kicker: { zh: "作品集", en: "portfolio" },
    title: { zh: "VibeCoding 作品总览", en: "VibeCoding work overview" },
    subtitle: {
      zh: "把真实需求、日常想法和产品练习，做成可以使用的作品。",
      en: "Five project groups across mini-programs, mobile apps, AI tools and complete web products.",
    },
    viewMore: { zh: "查看详情", en: "View details" },
    openSite: { zh: "打开网站", en: "Open site" },
    viewCode: { zh: "查看代码", en: "View code" },
    close: { zh: "关闭", en: "Close" },
    stackLabel: { zh: "相关标签", en: "Tags" },
    overview: { zh: "项目说明", en: "Overview" },
  },
  content: {
    kicker: { zh: "内容商业化实践", en: "content commerce practice" },
    title: { zh: "内容增长与电商实践", en: "Content growth & commerce" },
    subtitle: {
      zh: "围绕真实用户需求，完成从选题、生产到交付和复盘的完整闭环。",
      en: "From audience insight and production to commercial validation.",
    },
    intro: {
      zh: "",
      en: "I turn real demand into topics, content, delivery and review loops, then use customer feedback to improve both the work and its conversion path.",
    },
    storeTitle: { zh: "小红书 K12 教育资料店铺", en: "Xiaohongshu K12 learning-material shop" },
    storeMeta: { zh: "K12 教育赛道 · 稳定运营 1 年+", en: "K12 education · operating for 1+ year" },
    storeBody: {
      zh: "已跑通“需求发现—内容种草—虚拟商品交付—反馈迭代”的基本链路，月度流水保持增长。",
      en: "Built a repeatable loop from demand discovery and content to virtual-product delivery and iteration, with steadily growing monthly revenue.",
    },
    model: { zh: "选题拆解 · 批量制作 · 发布管理 · 数据复盘", en: "Topic planning · batch production · publishing log · data review" },
    mediaTitle: { zh: "泛娱乐账号运营探索", en: "Entertainment account experiments" },
    mediaBody: {
      zh: "除商业化内容外，也持续测试娱乐向内容的选题、表达节奏与平台反馈，培养内容感知和跨平台运营能力。",
      en: "Alongside commercial work, I test entertainment-led topics, pacing and platform response to sharpen content judgement across platforms.",
    },
    imageCaption: { zh: "小红书店铺 · 点击查看图片", en: "Xiaohongshu shop · open image" },
  },
  contact: {
    kicker: { zh: "联系方式", en: "contact" },
    title: { zh: "联系我", en: "Let's talk?" },
    body: {
      zh: "如果你想交流产品、内容运营或 AI 实践，欢迎联系我。",
      en: "If what you've seen interests you, the keyboard is ready for the first message.",
    },
    copyEmail: { zh: "复制邮箱", en: "Copy email" },
    openMail: { zh: "打开邮箱", en: "Open mailto" },
    github: { zh: "GitHub", en: "GitHub" },
    linkedin: { zh: "LinkedIn", en: "LinkedIn" },
    emailToast: { zh: "邮箱已复制", en: "Email copied" },
    wechatToast: { zh: "微信已复制", en: "WeChat copied" },
    footer: {
      zh: "© 2026 ZhengYifan. 保留所有权利。",
      en: "© 2026 ZhengYifan. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        zh: "从这里开始，持续打磨。",
        en: "Where it all started. Still here, still in charge.",
      },
      typescript: {
        zh: "让 JavaScript 更可靠。",
        en: "Same JS, with a seatbelt.",
      },
      html5: {
        zh: "小程序和网页实践。",
        en: "Mini-program and web practice.",
      },
      css: {
        zh: "活动海报与宣传物料。",
        en: "Posters and event materials.",
      },
      tailwindcss: {
        zh: "用工具类样式快速搭建界面。",
        en: "Utility-first. Design inside the HTML.",
      },
      python: {
        zh: "把 AI 工具用在配色、整理和内容处理上。",
        en: "Using AI tools for palettes, organisation and content work.",
      },
      react: {
        zh: "在团队和项目中保持沟通协作。",
        en: "Keeping communication clear across teams and projects.",
      },
      nextdotjs: {
        zh: "路由、服务端渲染与页面组织。",
        en: "React all grown up: routing, SSR, edge.",
      },
      vuedotjs: {
        zh: "组件化的前端实践。",
        en: "The most relaxed frontend.",
      },
      nodedotjs: {
        zh: "公众号选题、推送和内容整理。",
        en: "Public-account topics, posts and content organisation.",
      },
      php: {
        zh: "搭建与连接网页服务。",
        en: "Runs more of the web than you think.",
      },
      odoo: {
        zh: "业务系统与流程管理。",
        en: "ERP that doesn't make you cry.",
      },
      postgresql: {
        zh: "稳定地整理与存储数据。",
        en: "The boring database that always works.",
      },
      docker: {
        zh: "让本地与部署环境保持一致。",
        en: "Same on my machine, same in production.",
      },
      git: {
        zh: "活动现场的执行与任务跟进。",
        en: "Event execution and task follow-up.",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.zh ?? path;
  return path;
}
