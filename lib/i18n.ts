// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ES and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).es === "string";
}

export const DICT = {
  picker: {
    season: { es: "Estación", en: "Season" },
    language: { es: "Idioma", en: "Language" },
  },
  seasons: {
    paper: { es: "Papel", en: "Paper" },
    ink: { es: "Tinta", en: "Ink" },
    mono: { es: "Mono", en: "Mono" },
  },
  nav: {
    aria: { es: "Secciones", en: "Sections" },
      home: { es: "首页", en: "Home" },
    stack: { es: "能力", en: "Abilities" },
    experience: { es: "实践", en: "Practice" },
    project: { es: "作品", en: "Work" },
    content: { es: "内容运营", en: "Content" },
    contact: { es: "联系", en: "Contact" },
  },
  header: {
    availability: {
      es: "欢迎交流",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { es: "你好，我是", en: "Hi, I am" },
    roleLine: {
      es: "ZhengYifan · 移动互联应用技术",
      en: "ZhengYifan · Mobile Internet Application Technology",
    },
    tagline: {
      es: "20 岁，来自深圳。平时做小程序、网页、AI 工具和内容运营相关的实践。",
      en: "20, from Shenzhen. I work on small programs, websites, AI tools and content projects.",
    },
    cv: { es: "查看简历", en: "View CV" },
    hire: { es: "联系我", en: "Contact me" },
    room: { es: "我的房间", en: "My Room" },
    scroll: { es: "向下浏览", en: "Scroll to explore" },
    keysHint: {
      es: "· 悬停查看能力",
      en: "· hover over the keys",
    },
  },
  stack: {
    title: { es: "我的能力清单", en: "My abilities" },
    hint: {
      es: "点击琴键，查看对应能力",
      en: "Click a key to see the corresponding ability",
    },
    hintMobile: {
      es: "点击琴键，查看对应能力。",
      en: "Click a key to see the corresponding ability.",
    },
  },
  experience: {
    kicker: { es: "实践档案", en: "practice archive" },
    title: { es: "实践经历", en: "Practice" },
    subtitle: {
      es: "从校园组织、赛事现场到社群协作，记录真实做过的事。",
      en: "From campus organisations and event venues to community work — a record of things I actually did.",
    },
  },
  projects: {
    kicker: { es: "作品集", en: "portfolio" },
    title: { es: "作品总览", en: "Work overview" },
    subtitle: {
      es: "五组作品，覆盖小程序、移动端、AI 工具与完整网站产品。",
      en: "Five project groups across mini-programs, mobile apps, AI tools and complete web products.",
    },
    viewMore: { es: "查看详情", en: "View details" },
    openSite: { es: "打开网站", en: "Open site" },
    viewCode: { es: "查看代码", en: "View code" },
    close: { es: "关闭", en: "Close" },
    stackLabel: { es: "相关标签", en: "Tags" },
    overview: { es: "项目说明", en: "Overview" },
  },
  content: {
    kicker: { es: "内容运营档案", en: "content archive" },
    title: { es: "自媒体生长域", en: "Media growth field" },
    subtitle: {
      es: "从内容表达，到商业验证。",
      en: "From content expression to commercial validation.",
    },
    intro: {
      es: "不仅会写代码，也在持续尝试内容运营和电商实践。从 K12 教育资料的商业变现，到泛娱乐账号的内容试水，用真实反馈验证想法。",
      en: "Beyond code, I keep exploring content operations and e-commerce — from monetising K12 materials to testing entertainment content and learning from real feedback.",
    },
    storeTitle: { es: "小红书店铺", en: "Xiaohongshu shop" },
    storeMeta: { es: "K12 教育赛道 · 稳定运营 1 年+", en: "K12 education · operating for 1+ year" },
    storeBody: {
      es: "从 0 到 1 跑通虚拟商品交付链路，月均流水稳中上升。",
      en: "Built the virtual-product delivery loop from zero, with steadily growing monthly revenue.",
    },
    model: { es: "选题拆解 · 批量制作 · 发布管理 · 数据复盘", en: "Topic planning · batch production · publishing log · data review" },
    mediaTitle: { es: "泛娱乐内容探索", en: "Entertainment content exploration" },
    mediaBody: {
      es: "通过娱乐向内容试水和数据复盘，持续摸索网感、内容节奏与平台规律。",
      en: "Testing entertainment-led content and reviewing the data to build a feel for tone, rhythm and platform patterns.",
    },
    imageCaption: { es: "小红书店铺 · 点击查看图片", en: "Xiaohongshu shop · open image" },
  },
  contact: {
    kicker: { es: "联系方式", en: "contact" },
    title: { es: "联系我", en: "Let's talk?" },
    body: {
      es: "如果你对我的作品、内容运营或 AI 工具实践感兴趣，欢迎通过邮箱或微信联系我。",
      en: "If what you've seen interests you, the keyboard is ready for the first message.",
    },
    copyEmail: { es: "复制邮箱", en: "Copy email" },
    openMail: { es: "打开邮箱", en: "Open mailto" },
    github: { es: "GitHub", en: "GitHub" },
    linkedin: { es: "LinkedIn", en: "LinkedIn" },
    emailToast: { es: "邮箱已复制", en: "Email copied" },
    wechatToast: { es: "微信已复制", en: "WeChat copied" },
    footer: {
      es: "© 2026 ZhengYifan. 保留所有权利。",
      en: "© 2026 ZhengYifan. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        es: "Donde empezó todo. Sigue aquí, sigue mandando.",
        en: "Where it all started. Still here, still in charge.",
      },
      typescript: {
        es: "Mismo JS, con cinturón de seguridad.",
        en: "Same JS, with a seatbelt.",
      },
      html5: {
        es: "小程序和网页实践。",
        en: "Mini-program and web practice.",
      },
      css: {
        es: "活动海报与宣传物料。",
        en: "Posters and event materials.",
      },
      tailwindcss: {
        es: "Utility-first. Diseño en el HTML.",
        en: "Utility-first. Design inside the HTML.",
      },
      python: {
        es: "把 AI 工具用在配色、整理和内容处理上。",
        en: "Using AI tools for palettes, organisation and content work.",
      },
      react: {
        es: "在团队和项目中保持沟通协作。",
        en: "Keeping communication clear across teams and projects.",
      },
      nextdotjs: {
        es: "React adulto: routing, SSR, edge.",
        en: "React all grown up: routing, SSR, edge.",
      },
      vuedotjs: {
        es: "El frontend más relajado.",
        en: "The most relaxed frontend.",
      },
      nodedotjs: {
        es: "公众号选题、推送和内容整理。",
        en: "Public-account topics, posts and content organisation.",
      },
      php: {
        es: "Mueve más web de la que crees.",
        en: "Runs more of the web than you think.",
      },
      odoo: {
        es: "ERP que no hace llorar.",
        en: "ERP that doesn't make you cry.",
      },
      postgresql: {
        es: "La base de datos aburrida que siempre funciona.",
        en: "The boring database that always works.",
      },
      docker: {
        es: "Igual en mi máquina, igual en producción.",
        en: "Same on my machine, same in production.",
      },
      git: {
        es: "活动现场的执行与任务跟进。",
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
  if (isLeaf(ref)) return ref[lang] ?? ref.es ?? path;
  return path;
}
