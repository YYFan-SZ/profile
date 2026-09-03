"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyContact from "@/components/CopyContact";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ContentSkillModal from "@/components/ContentSkillModal";
import type { ProjectDetail } from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import type { Lang } from "@/lib/i18n";
import { siX, siXiaohongshu } from "simple-icons";

const EMAIL = "2388598618@qq.com";
const WECHAT = "zhengyyff123";

const EN_LABELS: Record<string, string> = {
  "SZPU 创业协会": "SZPU Entrepreneurship Association",
  "校团委科创部": "University Innovation Office",
  "全运会志愿服务": "National Games Volunteer Service",
  "生财有术航海": "Shengcai Growth Voyage",
  "校园荣誉与表达": "Campus honours & expression",
  "视觉设计": "Visual design",
  "内容运营": "Content operations",
  "活动执行": "Event execution",
  "赛事流程": "Event workflow",
  "多方沟通": "Stakeholder communication",
  "任务管理": "Task management",
  "转播辅助": "Broadcast support",
  "媒体接待": "Media reception",
  "现场协调": "On-site coordination",
  "社群陪伴": "Community support",
  "问题拆解": "Problem framing",
  "协作推进": "Collaboration",
  "公开表达": "Public speaking",
  "方案策划": "Planning",
  "复盘沉淀": "Review & learning",
  "校园组织": "Campus organisation",
  "校园实践": "Campus practice",
  "大型赛事": "Major event",
  "社群运营": "Community operations",
  "学习成长": "Learning & growth",
  "微信小程序": "WeChat Mini Program",
  "3000+ 用户": "3,000+ users",
  "互动内容": "Interactive content",
  "语音转写": "Speech transcription",
  "AI 文案": "AI copywriting",
  "AI 陪伴": "AI companion",
  "行动规划": "Action planning",
  "日常工具": "Everyday utilities",
};

function label(value: string, lang: Lang) {
  return lang === "en" ? (EN_LABELS[value] ?? value) : value;
}

// Localised content lives in `{ es, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time. Tech names stay
// as plain strings (they're brand names, not localised).
type Localised = { es: string; en: string };

type Project = ProjectDetail & {
};

const projectCatalog: Project[] = [
  {
    num: "01",
    name: { es: "五迷小记 · 微信小程序", en: "Mayday Fan Notes · WeChat Mini Program" },
    stack: ["微信小程序", "3000+ 用户", "互动内容"],
    desc: {
      es: "把五月天歌迷分散的听歌、测试、游戏与内容收藏，整理成一个可以持续探索的互动入口。",
      en: "An interactive mini-program that brings together listening, quizzes, games and collecting for Mayday fans.",
    },
    details: {
      es: "有真实用户和 3000+ 使用量，最能体现项目影响力。",
      en: "A real product with 3,000+ users, showing how an idea can grow into a working community experience.",
    },
    sections: {
      problem: {
        es: "歌词挑战、演唱会回忆、趣味测试、每日考古和素材资源彼此分散，缺少一个能够持续记录兴趣与参与痕迹的小工具。",
        en: "Lyrics challenges, concert memories, quizzes, daily archive content and resources were scattered across different places.",
      },
      made: {
        es: "一个面向五月天歌迷的微信小程序，包含歌词填空、五迷画像、趣味测试、每日考古、小游戏、书单收藏、演唱会回忆录和资源包等功能。",
        en: "A WeChat mini-program with lyric challenges, fan profiles, quizzes, daily archive content, games, booklists, concert memories and resource packs.",
      },
      solved: {
        es: "让用户可以在一个小程序内完成内容浏览、互动测试、日常签到、收藏记录和歌迷交流，获得更完整、更有参与感的五迷体验。",
        en: "It gives fans one place to browse, play, check in, collect and connect with a stronger sense of participation.",
      },
      technical: "微信原生小程序 · 主包 / 分包模块化架构 · 微信云开发数据存储与云函数 · 本地缓存与数据持久化 · Canvas 动态证书生成",
    },
    media: ["/projects/zhengyifan/mayday-intro.jpg"],
    mediaLayout: "portrait-still",
    qr: "/projects/zhengyifan/mayday-qr.jpg",
    highlights: ["html5"],
  },
  {
    num: "02",
    name: { es: "途说 · 安卓 APP", en: "Tusuo · Android App" },
    stack: ["Android · Beta", "uni-app", "语音转写", "AI 文案"],
    desc: {
      es: "为旅行创作者设计的移动端灵感采集工具，覆盖现场录音、语音转写、素材归类和内容草稿生成。",
      en: "A mobile idea-capture tool for travel creators, covering recording, transcription, sorting and draft generation.",
    },
    details: {
      es: "体现移动端开发、语音转写和 AI 内容生成能力。",
      en: "A mobile product combining field recording, speech transcription and AI-assisted content generation.",
    },
    sections: {
      problem: {
        es: "户外记录中的录音、途中见闻和即时灵感彼此分散，回程后还需要花大量时间查找和整理。",
        en: "Recordings, observations and fleeting ideas were scattered, creating a heavy organisation task after each trip.",
      },
      made: {
        es: "将“采集 → 转写 → 整理 → 成稿”串联成一条连续路径，让用户可以在移动端完成旅行素材的初步处理。",
        en: "A mobile flow connecting capture, transcription, organisation and drafting for travel material.",
      },
      solved: {
        es: "减少回程后翻找录音和二次整理的时间，让零散灵感更快转化为可继续编辑的内容。",
        en: "It reduces the time spent searching and reworking recordings, turning ideas into editable drafts faster.",
      },
      technical: "uni-app + Vue · 七牛云数据存储 · 火山引擎豆包语音 ASR · DeepSeek API 文案生成",
    },
    download: "/downloads/tusuo.apk",
    downloadLabel: { es: "下载安装包", en: "Download APK" },
    media: ["/projects/zhengyifan/tusuo-demo.mp4"],
    mediaLayout: "portrait",
    highlights: ["html5", "python"],
  },
  {
    num: "03",
    name: { es: "RegretReset · 网站", en: "RegretReset · Website" },
    stack: ["Web · Beta", "AI 陪伴", "行动规划"],
    desc: {
      es: "围绕后悔、纠结与反复回想的 AI 反思工具，帮助用户先看清问题，再找到能执行的下一步。",
      en: "An AI reflection tool for regret and indecision, helping users understand the issue and find a next step.",
    },
    details: {
      es: "AI 反思产品，体现方案设计、AI 能力和复杂产品逻辑。",
      en: "An AI reflection product built around structured guidance and a more complex decision flow.",
    },
    sections: {
      problem: {
        es: "人在后悔和纠结中容易反复回想，却很难分清事实、感受、真正重视的东西，以及现在可以采取的行动。",
        en: "People can get stuck replaying regret without separating facts, feelings, values and possible actions.",
      },
      made: {
        es: "通过 CLARIFY 梳理事实与感受、CHOOSE 对齐价值和选择、ACT 生成下一步行动，把混乱的情绪转化为结构化的自我对话。",
        en: "CLARIFY organises facts and feelings, CHOOSE aligns values and options, and ACT turns reflection into a structured dialogue.",
      },
      solved: {
        es: "帮助用户从反复纠结中抽离出来，逐步看清问题，并找到具体、可执行的下一步。",
        en: "It helps users step out of rumination, understand the issue and identify a concrete next step.",
      },
      technical: "Next.js + React + TypeScript + Tailwind CSS · NextAuth 邮箱登录 · PostgreSQL + Drizzle ORM · DeepSeek API 方案生成 · Creem 支付与订阅",
    },
    url: "https://regretreset.life",
    media: [
      "/projects/zhengyifan/regret-r1.png",
      "/projects/zhengyifan/regret-r2.png",
      "/projects/zhengyifan/regret-r3.png",
      "/projects/zhengyifan/regret-r4.png",
    ],
    mediaLayout: "web-gallery",
    highlights: ["react"],
  },
  {
    num: "04",
    name: { es: "梦小渡 · 鸿蒙 APP", en: "Meng Xiaodu · HarmonyOS App" },
    stack: ["HarmonyOS", "DeepSeek AI", "Widget"],
    desc: {
      es: "一款围绕噩梦安抚、梦境记录与情绪整理设计的鸿蒙 APP，帮助用户从情绪安抚走向持续记录。",
      en: "A HarmonyOS app for nightmare soothing, dream recording and emotional reflection — from immediate comfort to continued self-care.",
    },
    details: {
      es: "以完整页面流程展示鸿蒙端应用开发、AI 梦境分析与端云协同能力。",
      en: "A complete product flow showing HarmonyOS app development, AI dream analysis and cloud-device collaboration.",
    },
    sections: {
      problem: {
        es: "噩梦发生后，用户需要先获得安抚，再记录梦境和理解情绪，但安抚、记录与分析通常彼此割裂，难以形成连续的自我照护流程。",
        en: "After a nightmare, people need comfort first and reflection later, but soothing, recording and emotional analysis are often disconnected.",
      },
      made: {
        es: "一个面向梦境记录与情绪安抚的鸿蒙 APP，覆盖桌面 Widget、邮箱登录、首页功能入口、四步噩梦安抚、音频播放、梦境记录、AI 梦境详情和个人资料管理。",
        en: "A HarmonyOS app covering a desktop Widget, email login, home modules, four-step nightmare soothing, audio playback, dream recording, AI dream insights and profile management.",
      },
      solved: {
        es: "将从噩梦发生到情绪平复、梦境记录和复盘理解的过程串联起来，让用户在同一应用内完成安抚、记录与情绪整理。",
        en: "It connects the journey from a nightmare to calming down, recording and reflection, giving users one continuous place for emotional care.",
      },
      technical: "HarmonyOS · DeepSeek API 梦境分析 · 端云开发 · 邮箱登录认证 · Widget 卡片组件",
    },
    media: ["/projects/zhengyifan/mengxiaodu.mp4"],
    mediaLayout: "portrait",
    highlights: ["html5"],
  },
  {
    num: "05",
    name: { es: "日常工具 · 微信小程序", en: "Everyday Utilities · WeChat Mini Program" },
    stack: ["微信小程序", "日常工具"],
    desc: {
      es: "两个轻量的日常工具：记录重要日期，也帮助用户在出门前核对物品。",
      en: "Two lightweight utilities for remembering important dates and checking items before leaving home.",
    },
    details: {
      es: "把生日记录簿和出行防遗漏清单放在同一栏，分别展示两个简单、明确的日常使用场景。",
      en: "Two small utilities grouped together, each focused on one clear everyday scenario.",
    },
    subprojects: [
      {
        name: { es: "生日记录簿", en: "Birthday Notebook" },
        desc: { es: "记录公历、农历生日和提醒时间，减少忘记重要日子的情况。", en: "Records solar and lunar birthdays with reminders, reducing the chance of forgetting important dates." },
        qr: "/projects/zhengyifan/birthday-qr.jpg",
      },
      {
        name: { es: "出行防遗漏清单", en: "Leaving-home Checklist" },
        desc: { es: "按照不同出行场景整理物品，出门前逐项核对，减少物品遗漏。", en: "Organises items by travel scenario so users can check them one by one before leaving." },
        qr: "/projects/zhengyifan/travel-qr.jpg",
      },
    ],
    media: ["/projects/zhengyifan/birthday.png", "/projects/zhengyifan/travel.png"],
    mediaLayout: "utility",
    highlights: ["html5"],
  },
];

// 展示顺序按作品类型与完整度安排：微信小程序 → 安卓 APP → 鸿蒙 APP → 网站 → 微信小程序。
// 编号在这里统一重排，避免修改每个项目内部的内容数据。
const projects: Project[] = [
  projectCatalog[0],
  projectCatalog[1],
  projectCatalog[3],
  projectCatalog[2],
  projectCatalog[4],
].map((project, index) => ({
  ...project,
  num: String(index + 1).padStart(2, "0"),
}));

const experiences: Array<{
  title: string;
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
  image: string;
  gallery?: string[];
}> = [
  {
    title: "SZPU 创业协会",
    role: { es: "宣传部部长 / 核心骨干", en: "Publicity lead / core member" },
    company: "校园组织",
    period: { es: "实践 01", en: "Practice 01" },
    location: { es: "深圳", en: "Shenzhen" },
    summary: {
      es: "负责公众号选题与推文、活动海报、KT 板等物料的统筹，让活动信息形成统一表达。",
      en: "Coordinated public-account topics, posts, posters and event materials so campus activities had a consistent expression.",
    },
    bullets: [
      {
        es: "独立完成多套活动海报、现场 KT 板和公众号推文。",
        en: "Created event posters, on-site boards and public-account posts.",
      },
      {
        es: "参与“科研新星”等活动的前期沟通、物料准备和现场执行。",
        en: "Supported communication, materials and on-site execution for campus events.",
      },
    ],
    stack: ["视觉设计", "内容运营", "活动执行"],
    image: "/practice/association-poster.jpg",
    gallery: [
      "/practice/association-poster.jpg",
      "/practice/association-poster-back.jpg",
      "/practice/association-post-1.jpg",
      "/practice/association-post-2.jpg",
      "/practice/association-board.jpg",
    ],
  },
  {
    title: "校团委科创部",
    role: { es: "学生骨干", en: "Student leader" },
    company: "校园实践",
    period: { es: "实践 02", en: "Practice 02" },
    location: { es: "深圳", en: "Shenzhen" },
    summary: {
      es: "经历五轮面试进入科创部，参与挑战杯、创新工程等重点赛事的报名组织、资料流转与参赛团队服务。",
      en: "Joined the innovation department after five interview rounds and supported applications, document flow and team service for major competitions.",
    },
    bullets: [
      { es: "负责资料审核、团队沟通和专家对接。", en: "Handled document review, team communication and expert coordination." },
      { es: "在截止期明确、参与方众多的场景下推进任务并同步进度。", en: "Moved tasks forward and kept progress aligned across many participants." },
    ],
    stack: ["赛事流程", "多方沟通", "任务管理"],
    image: "/practice/innovation-department.jpg",
  },
  {
    title: "全运会志愿服务",
    role: { es: "媒体与转播现场", en: "Media and broadcast support" },
    company: "大型赛事",
    period: { es: "实践 03", en: "Practice 03" },
    location: { es: "赛事现场", en: "Event venue" },
    summary: {
      es: "在第十五届全运会拳击赛事新媒体处协助电视转播、媒体签到及新闻发布厅等现场支持工作。",
      en: "Supported TV broadcast, media check-in and the press room for the boxing event at the 15th National Games.",
    },
    bullets: [
      { es: "面对高节奏的赛场排期完成媒体支持与现场沟通。", en: "Supported media operations and communication under a fast event schedule." },
      { es: "在多点协同中强化应变、执行和抗压能力。", en: "Strengthened adaptability, execution and composure in a multi-team setting." },
    ],
    stack: ["转播辅助", "媒体接待", "现场协调"],
    image: "/practice/volunteer-certificate.jpg",
  },
  {
    title: "生财有术航海",
    role: { es: "成长陪伴教练", en: "Growth coach" },
    company: "社群运营",
    period: { es: "实践 04", en: "Practice 04" },
    location: { es: "线上协作", en: "Remote collaboration" },
    summary: {
      es: "作为成长陪伴教练，持续服务 30+ 位圈友：跟进任务、梳理卡点，并和领队、志愿者协同营地节奏。",
      en: "Served 30+ community members as a growth coach, following tasks, unpacking blockers and coordinating with leads and volunteers.",
    },
    bullets: [
      { es: "通过每日沟通和关键节点提醒，帮助成员跨过启动与执行卡点。", en: "Used daily communication and milestone reminders to help members start and follow through." },
      { es: "项目获得一次 A 评级并实现全员上岸。", en: "The project received an A rating and achieved full completion." },
    ],
    stack: ["社群陪伴", "问题拆解", "协作推进"],
    image: "/practice/shengcai.jpg",
  },
  {
    title: "校园荣誉与表达",
    role: { es: "持续投入的记录", en: "A record of sustained effort" },
    company: "学习成长",
    period: { es: "实践 05", en: "Practice 05" },
    location: { es: "校园经历", en: "Campus experience" },
    summary: {
      es: "三次校级奖学金、提案征集、演讲与策划竞赛，是长期学习、表达和方案思考的持续积累。",
      en: "Three campus scholarships, proposal calls, speaking and planning competitions form a sustained record of learning and expression.",
    },
    bullets: [
      { es: "通过演讲准备、提案撰写和项目复盘，训练结构化表达。", en: "Practised structured expression through speeches, proposals and project reviews." },
      { es: "将零散想法整理成更有结构的观点与方案。", en: "Turned scattered ideas into clearer viewpoints and proposals." },
    ],
    stack: ["公开表达", "方案策划", "复盘沉淀"],
    image: "/practice/speech.jpg",
  },
];

const abilityDetails = [
  {
    label: "产品开发",
    detail: "从具体需求和使用场景出发，梳理功能与交互流程，将想法实现为可体验、可持续迭代的产品。",
  },
  {
    label: "内容运营",
    detail: "围绕目标和主题进行选题、资料整理、文案组织与内容跟进，让信息更清晰、更有价值，也更适合传播。",
  },
  {
    label: "流程自动化",
    detail: "识别重复、分散的工作环节，借助工具将其串联成稳定、可复用的流程，减少重复操作和信息遗漏。",
  },
  {
    label: "视觉表达",
    detail: "通过版式、色彩和信息层级，将抽象内容转化为清晰、有吸引力且具有统一感的视觉表达。",
  },
  {
    label: "沟通协作",
    detail: "在多人协作和任务并行的环境中，主动同步信息、跟进关键节点、协调各方行动，推动事情顺利落地。",
  },
];

const contentWorkflow: Array<{ num: string; title: Localised; accent: Localised; body: Localised }> = [
  {
    num: "01",
    title: { es: "需求洞察与选题", en: "Demand insight & topics" },
    accent: { es: "考试节点、搜索与反馈", en: "Timing, search & feedback" },
    body: {
      es: "判断真实需求，筛选有明确使用场景、可持续交付的内容方向。",
      en: "Identify real demand and prioritise topics with a clear use case and repeatable delivery.",
    },
  },
  {
    num: "02",
    title: { es: "内容产品化", en: "Turn content into a product" },
    accent: { es: "结构、标题、封面与标签", en: "Structure, title, cover & tags" },
    body: {
      es: "把选题整理为清楚、可购买的内容产品。",
      en: "Turn each topic into clear, purchasable content.",
    },
  },
  {
    num: "03",
    title: { es: "AI 工作流搭建", en: "AI workflow design" },
    accent: { es: "Codex + 飞书", en: "Codex + Feishu" },
    body: {
      es: "串联素材、文案与归档，减少重复制作。",
      en: "Connect materials, copy and archiving to reduce repeated work.",
    },
  },
  {
    num: "04",
    title: { es: "数据复盘与迭代", en: "Review & iterate" },
    accent: { es: "点击、成交与售后反馈", en: "Clicks, sales & feedback" },
    body: {
      es: "识别值得放大的内容，调整下一轮选题与表达。",
      en: "Find what to scale and refine the next round of topics and expression.",
    },
  },
];

function pick<T>(loc: { es: T; en: T }, lang: Lang): T {
  return loc[lang];
}

function ProjectMedia({ project }: { project: Project }) {
  const media = project.media ?? [];
  const qrItems = project.subprojects?.filter((item) => item.qr) ?? [];
  const showQr = Boolean(project.qr) || project.showQrPlaceholder || qrItems.length > 0;
  const mediaLayout = project.mediaLayout ?? "default";
  const isPortrait = mediaLayout === "portrait" || mediaLayout === "portrait-still";

  return (
    <div
      className={`project-detail-media-stack project-detail-media-stack--${mediaLayout}`}
      style={
        mediaLayout === "web-gallery"
          ? {
              gridTemplateColumns: "minmax(0, 1fr)",
              gridTemplateRows: "repeat(4, minmax(0, 1fr))",
              height: "min(40rem, calc(100vh - 11rem))",
            }
          : mediaLayout === "portrait-still"
            ? { gridTemplateColumns: "minmax(0, 1fr) 7rem", alignItems: "center" }
            : undefined
      }
    >
      {media.length > 0 ? (
        media.map((src, index) => (
          <div
            className={`project-detail-media-frame${isPortrait ? " project-detail-media-frame--portrait" : ""}`}
            style={
              mediaLayout === "web-gallery"
                ? { width: "min(100%, 17rem)", height: "100%", minHeight: 0, aspectRatio: "1920 / 922", marginInline: "auto", padding: 0, border: 0, boxShadow: "none" }
                : undefined
            }
            key={src}
          >
            {src.toLowerCase().endsWith(".mp4") ? (
              <video
                src={src}
                className="project-detail-media-image project-detail-media-image--video"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={`${project.name.es}预览 ${index + 1}`}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={`${project.name.es}预览 ${index + 1}`}
                className="project-detail-media-image project-detail-media-image--still"
                loading="lazy"
              />
            )}
          </div>
        ))
      ) : (
        <div className="project-detail-media-placeholder">
          <span>{project.name.es} · 预览图待补充</span>
        </div>
      )}

      {showQr && (
        <div
          className="project-detail-qr-grid"
          style={mediaLayout === "portrait-still" ? { gridTemplateColumns: "minmax(0, 1fr)" } : undefined}
        >
          {project.qr && (
            <div className="project-detail-qr-item" key="project-qr">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.qr} alt={`${project.name.es}二维码`} />
              <span>小程序二维码</span>
            </div>
          )}
          {qrItems.map((item) => (
            <div className="project-detail-qr-item" key={item.name.es}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.qr} alt={`${item.name.es}二维码`} />
              <span>{item.name.es}二维码</span>
            </div>
          ))}
          {project.showQrPlaceholder && !project.qr && (
            <div className="project-detail-qr-item project-detail-qr-placeholder">
              <span>小程序二维码<br />待补充</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PracticeMedia({
  entry,
}: {
  entry: (typeof experiences)[number];
}) {
  const { lang } = useLanguage();
  const [flipped, setFlipped] = useState(false);
  const [materialIndex, setMaterialIndex] = useState(0);
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);
  const gallery = entry.gallery ?? [entry.image];
  const isPortraitEntry = ["全运会志愿服务", "生财有术航海"].includes(entry.title);

  if (entry.title === "SZPU 创业协会") {
    const materials = [
      { label: lang === "en" ? "Poster" : "海报", type: "poster" as const, src: gallery[0] },
      { label: lang === "en" ? "Article 01" : "推文 01", type: "long" as const, src: gallery[2] },
      { label: lang === "en" ? "Article 02" : "推文 02", type: "long" as const, src: gallery[3] },
      { label: lang === "en" ? "On-site KT board" : "现场 KT 板", type: "long" as const, src: gallery[4] },
    ];
    const material = materials[materialIndex] ?? materials[0];

    return (
      <div className="practice-association-media">
        <div className="practice-materials__tabs" role="tablist" aria-label={lang === "en" ? "Association materials" : "创业协会物料"}>
          {materials.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={materialIndex === index}
              onClick={() => {
                setMaterialIndex(index);
                if (index !== 0) setFlipped(false);
                setZoomedSrc(null);
              }}
              className={materialIndex === index ? "is-active" : ""}
            >
              {item.label}
            </button>
          ))}
        </div>

        {material.type === "poster" ? (
          <div className="practice-media-poster-wrap">
            <button
              type="button"
              className="practice-poster-flip"
              onClick={() => setFlipped((value) => !value)}
              aria-label={flipped ? (lang === "en" ? "View poster front" : "查看海报正面") : (lang === "en" ? "View poster back" : "查看海报背面")}
            >
              <span className={`practice-poster-flip__inner ${flipped ? "is-flipped" : ""}`}>
                <span className="practice-poster-flip__face">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={gallery[0]}
                    alt={lang === "en" ? "Entrepreneurship association poster front" : "创业协会活动海报正面"}
                    onClick={(event) => {
                      event.stopPropagation();
                      setZoomedSrc(gallery[0]);
                    }}
                  />
                  <span className="practice-media-hint">{lang === "en" ? "Click to flip" : "点击翻面"}</span>
                </span>
                <span className="practice-poster-flip__face practice-poster-flip__back">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={gallery[1]}
                    alt={lang === "en" ? "Entrepreneurship association poster back" : "创业协会活动海报背面"}
                    onClick={(event) => {
                      event.stopPropagation();
                      setZoomedSrc(gallery[1]);
                    }}
                  />
                  <span className="practice-media-hint">{lang === "en" ? "Click to return" : "点击返回正面"}</span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="practice-media-zoom"
              onClick={() => setZoomedSrc(flipped ? gallery[1] : gallery[0])}
              aria-label={lang === "en" ? "Zoom current poster" : "放大当前海报"}
            >
              {lang === "en" ? "Zoom ↗" : "放大 ↗"}
            </button>
          </div>
        ) : (
          <div className="practice-media-long-wrap">
            <div className="practice-long-media" aria-label={`${material.label}长图`}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={material.src}
                  alt={`${material.label}长图`}
                  loading="eager"
                  onClick={() => setZoomedSrc(material.src)}
                />
              </figure>
            </div>
            <button
              type="button"
              className="practice-media-zoom"
              onClick={() => setZoomedSrc(material.src)}
              aria-label={lang === "en" ? `Zoom ${material.label}` : `放大${material.label}`}
            >
              {lang === "en" ? "Zoom ↗" : "放大 ↗"}
            </button>
          </div>
        )}
        <p className="practice-media-caption">
          {material.type === "poster" ? (lang === "en" ? "Poster front & back · click to flip" : "海报正反面 · 点击图片翻转") : (lang === "en" ? "Scroll inside to view the full content" : "在图内向下滚动查看完整内容")}
        </p>
        {zoomedSrc && (
          <div
            className="practice-media-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="查看大图"
            onClick={() => setZoomedSrc(null)}
          >
            <div className="practice-media-lightbox__panel" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="practice-media-lightbox__close"
                onClick={() => setZoomedSrc(null)}
                aria-label="关闭大图"
              >
                ×
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="practice-media-lightbox__image" src={zoomedSrc} alt="创业协会物料大图" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`practice-entry-image relative aspect-[4/3] overflow-hidden bg-[#e9e0d5]${isPortraitEntry ? " practice-entry-image--portrait" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={entry.image} alt={entry.title} className="h-full w-full object-contain" loading="eager" />
    </div>
  );
}

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const lenis = useLenis();
  const [focusedProject, setFocusedProject] = useState<number | null>(null);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [selectedAbilityIndex, setSelectedAbilityIndex] = useState<number | null>(null);
  const [batchSkillOpen, setBatchSkillOpen] = useState(false);

  useEffect(() => {
    const onKeyboardFocus = (event: Event) => {
      const index = (event as CustomEvent<{ index?: number }>).detail?.index;
      if (typeof index !== "number" || !projects[index]) return;
      setFocusedProject(index);
      const target = document.querySelector<HTMLElement>('[data-kb-section="projects"]');
      if (!target) return;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.2, offset: -24 });
      } else {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    };
    window.addEventListener("portfolio:focus", onKeyboardFocus);
    return () => window.removeEventListener("portfolio:focus", onKeyboardFocus);
  }, [lenis]);

  useEffect(() => {
    const onAbilitySelect = (event: Event) => {
      const index = (event as CustomEvent<{ index?: number }>).detail?.index;
      if (typeof index === "number" && abilityDetails[index]) {
        setSelectedAbilityIndex(index);
      }
    };
    window.addEventListener("portfolio:ability", onAbilitySelect);
    return () => window.removeEventListener("portfolio:ability", onAbilitySelect);
  }, []);

  const chooseProject = (index: number) => {
    setFocusedProject(index);
    window.dispatchEvent(
      new CustomEvent("portfolio:select", { detail: { index } })
    );
  };
  const practice = experiences[practiceIndex] ?? experiences[0];

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="keyboard-scene fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              ZhengYifan
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none flex flex-col">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="order-1 min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {/* Mobile-only 3D centerpiece. Lives inside the hero (scrolls away
                with it) and takes pointer events so keycaps are tappable. */}
            {isMobile && (
              <div className="hero-mobile-keyboard pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="hero-profile mt-2 md:mt-20">
              <p
                className="hero-profile__eyebrow fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="hero-profile__name" style={{ color: "var(--ice-50)" }}>
                <HeroWord text="Zheng Yifan" delay={120} />
              </h1>

              <div className="hero-profile__content fade-in-up" style={{ ["--d" as string]: "420ms" }}>
                <figure className="hero-profile__portrait">
                  <div className="hero-profile__portrait-frame">
                    <img src="/profile-avatar.jpg" alt="ZhengYifan 个人照片" />
                  </div>
                  <figcaption>
                    <span>PROFILE</span>
                    <span>ZHENGYIFAN</span>
                  </figcaption>
                </figure>

                <div className="hero-profile__details">
                  <p className="hero-profile__role">{lang === "en" ? "AI product, content operations & practice" : "AI 产品、内容运营与实践项目"}</p>
                  <p className="hero-profile__intro">
                    {lang === "en" ? "I work across product design, content operations, campus organisations and real business projects, exploring how to find problems, organise resources and make things happen." : "我持续参与产品设计、内容运营、校园组织和真实业务实践，在不同场景中探索如何发现问题、组织资源并把事情落地。"}
                  </p>
                  <dl className="hero-profile__facts">
                    <div>
                      <dt>{lang === "en" ? "Age" : "年龄"}</dt>
                      <dd>{lang === "en" ? "20" : "20 岁"}</dd>
                    </div>
                    <div>
                      <dt>{lang === "en" ? "City" : "城市"}</dt>
                      <dd>{lang === "en" ? "Shenzhen" : "深圳"}</dd>
                    </div>
                  </dl>

                </div>
              </div>

            </div>
          </section>

          {/* Ability list — the keyboard carries the content. Five alternating
              keys are labelled; selecting one reveals the corresponding ability. */}
          <section
            data-kb-section="stack"
            className="section-space section-space--stack order-2 relative md:min-h-[150vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[120vh] pt-16 md:pt-24">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <p className="section-heading__kicker">01 / CAPABILITIES</p>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[0.98]" style={{ color: "var(--ice-50)" }}>
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-300">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
                <div className="ability-note" aria-live="polite">
                  {selectedAbilityIndex === null ? (
                    <span>{lang === "en" ? "Choose a key to see my focus" : "选择一枚琴键，查看我的能力侧重"}</span>
                  ) : (
                    <>
                      <strong>{abilityDetails[selectedAbilityIndex].label}</strong>
                      <span>{abilityDetails[selectedAbilityIndex].detail}</span>
                    </>
                  )}
                </div>
                {isMobile && (
                  <div className="ability-mobile-keyboard" aria-label="移动端能力琴键">
                    <FrozenKeyboard mobile />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Practice archive — real experience entries from the original
              resume, presented as a quiet directory + visual field note. */}
          <section
            data-kb-section="experience"
            className="section-space section-space--experience order-5 relative min-h-screen flex items-center p-6 sm:p-8 md:p-10 pt-24 md:pt-28 pb-12"
          >
            <div className="relative z-10 w-full max-w-5xl md:w-[56%] lg:w-[56%] md:ml-auto md:mr-0 pointer-events-auto">
              <Reveal>
                <div className="mb-4 max-w-xl">
                  <p className="section-heading__kicker">04 / EXPERIENCE</p>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[0.98]" style={{ color: "var(--ice-50)" }}>
                    {t("experience.title")}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-ice-300 leading-relaxed">
                    {t("experience.subtitle")}
                  </p>
                </div>
              </Reveal>

              <div className="practice-archive-shell">
                <nav aria-label={lang === "en" ? "Practice archive" : "实践经历目录"} className="practice-switcher">
                  {experiences.map((entry, idx) => (
                    <button
                      key={entry.title}
                      type="button"
                      onClick={() => setPracticeIndex(idx)}
                      aria-current={practiceIndex === idx ? "page" : undefined}
                      className={`practice-switcher__item ${practiceIndex === idx ? "is-active" : ""}`}
                    >
                      <span className="font-mono text-[10px] tracking-[0.12em]">{lang === "en" ? "Practice" : "实践"} {String(idx + 1).padStart(2, "0")}</span>
                      <span>{label(entry.title, lang)}</span>
                    </button>
                  ))}
                </nav>

                <Reveal key={practice.title} as="article" className="practice-detail">
                  <div className="practice-detail__copy">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-ice-400 mb-2">{pick(practice.period, lang)}</p>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[1.05]" style={{ color: "var(--ice-50)" }}>
                          {label(practice.title, lang)}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-ice-400">{pick(practice.role, lang)} · {label(practice.company, lang)}</p>
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.12em] text-ice-400 whitespace-nowrap">{pick(practice.location, lang)}</span>
                    </div>
                    <span className="practice-detail__accent" aria-hidden />
                    <p className="text-sm sm:text-[15px] text-ice-200 leading-relaxed mb-4">{pick(practice.summary, lang)}</p>
                    <ul className="space-y-2 mb-4 text-xs sm:text-sm text-ice-300 leading-relaxed">
                      {practice.bullets.map((bullet) => <li key={bullet.es}>· {pick(bullet, lang)}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {practice.stack.map((tag) => <span key={tag} className="font-mono text-[10px] tracking-[0.08em] text-ice-400">#{label(tag, lang)}</span>)}
                    </div>
                  </div>
                  <div className="practice-detail__media">
                    <PracticeMedia entry={practice} />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Portfolio exhibition — the piano occupies the left stage and the
              work previews live on the right without card borders. The first
              view is an overview; selecting a key reveals one work in detail. */}
          <section
            data-kb-section="projects"
            className="section-space section-space--projects order-3 relative py-24 md:min-h-screen flex items-start p-6 sm:p-10 md:p-14"
          >
            <div className="relative w-full max-w-6xl mx-auto md:ml-auto md:mr-0 md:w-[68%] lg:w-[68%]">
              {focusedProject === null ? (
                <>
                  <Reveal>
                    <div className="mb-8 md:mb-9 max-w-xl">
                      <p className="section-heading__kicker">02 / VIBECODING WORKS</p>
                      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[0.98]" style={{ color: "var(--ice-50)" }}>
                        {t("projects.title")}
                      </h2>
                      <p className="mt-4 text-sm sm:text-base text-ice-300 leading-relaxed">
                        {t("projects.subtitle")}
                      </p>
                      <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-ice-400">
                        {lang === "en" ? "Click a key to open a project" : "点击琴键，查看对应作品"}
                      </p>
                    </div>
                  </Reveal>

                  <div className="project-overview-list pointer-events-auto">
                    {projects.map((p, idx) => (
                      <Reveal key={p.num} delay={idx * 60} as="button" type="button" dataProjectIndex={idx} onClick={() => chooseProject(idx)} className="project-overview-row group text-left cursor-pointer">
                        <span className="project-overview-row__num">{p.num}</span>
                        <span className="project-overview-row__body">
                          <span className="project-overview-row__title">{pick(p.name, lang)}</span>
                          <span className="project-overview-row__desc">{pick(p.desc, lang)}</span>
                        </span>
                        <span className="project-overview-row__arrow" aria-hidden>↗</span>
                      </Reveal>
                    ))}
                  </div>
                </>
              ) : (
                (() => {
                  const p = projects[focusedProject];
                  return (
                    <Reveal key={p.num} dataProjectIndex={focusedProject}>
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setFocusedProject(null);
                            window.dispatchEvent(new CustomEvent("portfolio:clear"));
                          }}
                          className="mb-7 font-mono text-[11px] tracking-[0.14em] text-ice-400 hover:text-ice-100"
                        >
                          {lang === "en" ? "← Back to VibeCoding work overview" : "← 返回 VibeCoding 作品总览"}
                        </button>
                        <div className="practice-detail project-detail">
                          <div className="practice-detail__copy">
                            <p className="font-mono text-[10px] tracking-[0.18em] text-ice-400 mb-2">{p.num} · {lang === "en" ? "PROJECT" : "作品项目"}</p>
                            <div className="project-detail__title-row">
                              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[1.05]" style={{ color: "var(--ice-50)" }}>
                                {pick(p.name, lang)}
                              </h2>
                              {p.url && (
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="project-detail__title-link"
                                >
                                  {lang === "en" ? "Open website ↗" : "访问网站 ↗"}
                                </a>
                              )}
                            </div>
                            <div className="project-detail__meta">
                              {p.stack.map((tag) => <span key={tag}>#{label(tag, lang)}</span>)}
                            </div>
                            <span className="practice-detail__accent" aria-hidden />
                            <p className="text-sm sm:text-[15px] text-ice-200 leading-relaxed mb-3">{pick(p.desc, lang)}</p>
                            <p className="project-detail__note">{pick(p.details, lang)}</p>

                            {p.sections && (
                              <div className="project-detail__sections">
                                {p.sections.problem && (
                                  <div className="project-detail__section-card">
                                    <h4>{lang === "en" ? "Problem" : "发现的问题"}</h4>
                                    <p>{pick(p.sections.problem, lang)}</p>
                                  </div>
                                )}
                                {p.sections.made && (
                                  <div className="project-detail__section-card">
                                    <h4>{lang === "en" ? "What I made" : "我做成了什么"}</h4>
                                    <p>{pick(p.sections.made, lang)}</p>
                                  </div>
                                )}
                                {p.sections.solved && (
                                  <div className="project-detail__section-card">
                                    <h4>{lang === "en" ? "Outcome" : "它解决了什么"}</h4>
                                    <p>{pick(p.sections.solved, lang)}</p>
                                  </div>
                                )}
                                {p.sections.technical && (
                                  <div className="project-detail__section-card project-detail__tech-card">
                                    <h4>{lang === "en" ? "Technology & implementation" : "技术与实现"}</h4>
                                    <div className="project-detail__tech-list">
                                      {p.sections.technical.split(" · ").map((tech) => <span key={tech}>{label(tech, lang)}</span>)}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {p.subprojects && (
                              <div className="project-detail__subprojects">
                                {p.subprojects.map((subproject) => (
                                  <div key={subproject.name.es}>
                                    <h4>{pick(subproject.name, lang)}</h4>
                                    <p>{pick(subproject.desc, lang)}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {(p.github || p.download) && (
                              <div className="project-detail__links">
                                {p.github && <a href={p.github} target="_blank" rel="noreferrer">{lang === "en" ? "View code ↗" : "查看代码 ↗"}</a>}
                                {p.download && <a href={p.download} download>{lang === "en" ? "Download APK ↓" : "下载安装包 ↓"}</a>}
                              </div>
                            )}
                          </div>
                          <div className="practice-detail__media">
                            <ProjectMedia project={p} />
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })()
              )}
            </div>
          </section>

          {/* Content archive — a compact editorial spread for the real
              Xiaohongshu shop and media experiments from the original site. */}
          <section
            data-kb-section="content"
            className="content-section order-4 relative min-h-screen flex items-center p-6 sm:p-10 md:p-14"
            style={isMobile ? undefined : {
              height: "100svh",
              minHeight: "100svh",
              paddingTop: "clamp(4.5rem, 7vh, 5.75rem)",
              paddingBottom: "clamp(2.25rem, 4vh, 3.5rem)",
              overflow: "hidden",
            }}
          >
            <div className="content-archive relative z-10 w-full max-w-5xl md:w-[58%] md:mr-auto md:ml-0 pointer-events-auto">
              <Reveal>
                <div className="content-archive__masthead mb-3">
                  <div>
                    <p className="section-heading__kicker">
                      03 / CONTENT PRACTICE
                    </p>
                  </div>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[0.98]" style={{ color: "var(--ice-50)" }}>
                    {t("content.title")}
                  </h2>
                  <div className="content-archive__intro">
                    <p className="text-sm text-ice-300">{t("content.subtitle")}</p>
                    <p className="mt-2 max-w-2xl text-xs sm:text-sm text-ice-200 leading-relaxed">{t("content.intro")}</p>
                  </div>
                </div>
              </Reveal>

              <div className="content-archive__spread">
                <Reveal delay={90}>
                  <div className="content-archive__primary-grid" style={{ gap: "1rem" }}>
                    <section className="content-archive__workflow" aria-label={lang === "en" ? "Content commerce workflow" : "内容商业化闭环"}>
                      <div className="content-archive__section-label">
                        <span>01—04</span>
                        <strong>{lang === "en" ? "CONTENT COMMERCE LOOP" : "内容商业化闭环"}</strong>
                      </div>
                      <div className="content-archive__workflow-grid">
                        {contentWorkflow.map((step) => (
                          <article className="content-archive__step" key={step.num} style={{ minHeight: "6.8rem", padding: ".68rem .75rem" }}>
                            <span>{step.num}</span>
                            <h3>{pick(step.title, lang)}</h3>
                            <p><strong style={{ color: "var(--ice-600)", fontWeight: 700 }}>{pick(step.accent, lang)}</strong>，{pick(step.body, lang)}</p>
                          </article>
                        ))}
                      </div>
                    </section>

                    <aside className="content-archive__result" aria-label={lang === "en" ? "E-commerce results" : "电商实践成果"}>
                      <div className="content-archive__result-label">ECOMMERCE / {lang === "en" ? "RESULTS" : "实践成果"}</div>
                      <h3>{t("content.storeTitle")}</h3>
                      <p className="content-archive__result-meta">{t("content.storeMeta")}</p>
                      <div className="content-archive__gmv">
                        <strong>&gt;50K</strong>
                        <span>{lang === "en" ? "cumulative GMV" : "累计成交额"}</span>
                      </div>
                      <p className="content-archive__result-body">{t("content.storeBody")}</p>
                      <button type="button" className="content-archive__workflow-link" onClick={() => setBatchSkillOpen(true)}>
                        {lang === "en" ? "Xiaohongshu batch-production Skill" : "小红书笔记批量制作 Skill"} <span aria-hidden>↗</span>
                      </button>
                    </aside>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <article className="content-archive__experiment" style={{ marginTop: ".65rem", paddingTop: ".65rem" }}>
                    <div>
                      <p>SIDE EXPERIMENT / {lang === "en" ? "CONTENT TESTS" : "内容实验"}</p>
                      <h3>{t("content.mediaTitle")}</h3>
                      <p className="content-archive__experiment-body">{t("content.mediaBody")}</p>
                    </div>
                    <div className="content-archive__metrics">
                      <div>
                        <strong>500+</strong>
                        <span>{lang === "en" ? "public-account followers" : "公众号粉丝"}</span>
                      </div>
                      <div>
                        <strong>1000+</strong>
                        <span>{lang === "en" ? "video-account followers" : "视频号粉丝"}</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Contact keeps the 3D-room invitation. The global canvas stays in
              place while its keyboard eases into this section's own pose. */}
          <section
            data-kb-section="contact"
            className="section-space section-space--contact order-6 relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            <div className="contact-copy relative">
              <Reveal>
                <p className="section-heading__kicker">
                  05 / CONTACT
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[color:var(--ice-50)] leading-[0.98] mb-6" style={{ color: "var(--ice-50)" }}>
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="contact-methods pointer-events-auto">
                  <CopyContact
                    value={EMAIL}
                    toastText={t("contact.emailToast")}
                    ariaLabel={`${t("contact.copyEmail")} ${EMAIL}`}
                    fallbackHref={`mailto:${EMAIL}`}
                    className="contact-method contact-method--email"
                  >
                    <span className="contact-method__main">
                      <span className="contact-method__icon" aria-hidden>
                        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M3 7l9 6 9-6" />
                        </svg>
                      </span>
                      <span className="contact-method__text">
                        <span className="contact-method__value">{EMAIL}</span>
                        <span className="contact-method__hint">{lang === "en" ? "Copy" : "点击复制"}</span>
                      </span>
                    </span>
                    <span className="contact-method__action" aria-hidden>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="8" y="8" width="11" height="11" rx="2" />
                        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    </span>
                  </CopyContact>
                  <CopyContact
                    value={WECHAT}
                    toastText={t("contact.wechatToast")}
                    ariaLabel={`复制微信号 ${WECHAT}`}
                    className="contact-method contact-method--wechat"
                  >
                    <span className="contact-method__main">
                      <span className="contact-method__icon" aria-hidden>
                        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M8.5 5.5c-3.04 0-5.5 1.9-5.5 4.25 0 1.4.82 2.65 2.1 3.42L4.4 16l3.05-1.3c.34.06.69.1 1.05.1 3.04 0 5.5-1.9 5.5-4.25S11.54 5.5 8.5 5.5Z" />
                          <path d="M14.5 9.5c3.04 0 5.5 1.9 5.5 4.25 0 1.16-.58 2.2-1.52 2.96l.45 1.72-2.55-1.08c-.59.25-1.22.4-1.88.4-2.45 0-4.5-1.3-5.2-3.08" />
                        </svg>
                      </span>
                      <span className="contact-method__text">
                        <span className="contact-method__value">{WECHAT}</span>
                        <span className="contact-method__hint">{lang === "en" ? "Copy" : "点击复制"}</span>
                      </span>
                    </span>
                    <span className="contact-method__action" aria-hidden>
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="8" y="8" width="11" height="11" rx="2" />
                        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    </span>
                  </CopyContact>
                </div>
                <div className="contact-socials pointer-events-auto" aria-label={lang === "en" ? "Social links" : "社交主页"}>
                  <span className="contact-socials__note">{lang === "en" ? "Exploring AI content creation · Welcome to follow" : "AI 自媒体探索中 · 欢迎支持"}</span>
                  <div className="contact-socials__links">
                    <a
                      className="contact-social-link contact-social-link--xiaohongshu"
                      href="https://www.xiaohongshu.com/user/profile/60975a44000000000100a85d"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={lang === "en" ? "Open Xiaohongshu profile" : "打开小红书主页"}
                      title={lang === "en" ? "Xiaohongshu" : "小红书"}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siXiaohongshu.path} /></svg>
                      <span>{lang === "en" ? "Xiaohongshu" : "小红书"}</span>
                    </a>
                    <a
                      className="contact-social-link contact-social-link--x"
                      href="https://x.com/ZhengYiFan12345"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={lang === "en" ? "Open X profile" : "打开 X 主页"}
                      title="X"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siX.path} /></svg>
                      <span>X</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={280}>
              <div data-kb-section="room" className="life-room-entry pointer-events-auto">
                <span className="life-room-kicker">LIFE OUTSIDE WORK / {lang === "en" ? "EVERYDAY LIFE" : "生活日常"}</span>
                <a
                  href="/room"
                  data-cursor="hover"
                  data-magnetic
                  className="life-room-link"
                >
                  {lang === "en" ? "Enter my 3D room" : "进入我的 3D 房间"} <span aria-hidden>↗</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ContentSkillModal mode="batch" open={batchSkillOpen} onClose={() => setBatchSkillOpen(false)} />

      </div>
    </SmoothScroll>
  );
}
