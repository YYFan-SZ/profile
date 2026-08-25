"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/i18n";

type Localised = { es: string; en: string };
type Mode = "batch" | "review";

type Props = {
  mode: Mode;
  open: boolean;
  onClose: () => void;
};

type Step = {
  eyebrow: string;
  title: Localised;
  body: Localised;
};

const BATCH_STEPS: readonly Step[] = [
  {
    eyebrow: "01 / INPUT",
    title: { es: "整理选题与素材", en: "Collect topics and source material" },
    body: {
      es: "接收选题、原始资料、图片、视频或商品信息，先把这一批要处理的内容和目标人群整理清楚。",
      en: "Gather topics, source files, images, video or product information, then define the batch and its audience.",
    },
  },
  {
    eyebrow: "02 / PLAN",
    title: { es: "锁定内容规则", en: "Lock the content rules" },
    body: {
      es: "确认内容范围、文件顺序、发布模板、字段和命名方式，让同一批素材可以按统一规则处理。",
      en: "Set the scope, file order, publishing template, fields and naming rules so the batch can be processed consistently.",
    },
  },
  {
    eyebrow: "03 / PRODUCE",
    title: { es: "批量生成笔记", en: "Produce the notes in batches" },
    body: {
      es: "用 Skill 和可复用模板处理封面、内容页、标题、正文和标签；统一制作标准，但保留每篇笔记的真实差异。",
      en: "Use reusable Skills and templates for covers, pages, titles, copy and tags while keeping each note tied to its real source.",
    },
  },
  {
    eyebrow: "04 / PACKAGE",
    title: { es: "组装发布包", en: "Assemble the publishing package" },
    body: {
      es: "将每篇内容整理成独立发布包，包含图片、标题、正文、标签和素材对应关系，方便批量发布和后续追踪。",
      en: "Turn each note into a standalone package with images, copy, tags and source mapping for publishing and tracking.",
    },
  },
  {
    eyebrow: "05 / VERIFY",
    title: { es: "写入、归档与核验", en: "Write, archive and verify" },
    body: {
      es: "通过飞书 Base 或表格记录内容和发布状态，检查附件数量、顺序、名称与字段，确保制作结果可以被复用和追踪。",
      en: "Record the content and status in Feishu Base or a table, then check attachment counts, order, names and fields.",
    },
  },
];

const REVIEW_STEPS: readonly Step[] = [
  {
    eyebrow: "01 / COLLECT",
    title: { es: "整理发布后的数据", en: "Collect post-publication data" },
    body: {
      es: "按笔记记录实际能取得的曝光、阅读、点赞、收藏、评论、关注，以及点击或成交等结果。",
      en: "Record available signals such as impressions, reads, likes, saves, comments, follows and downstream clicks or conversions.",
    },
  },
  {
    eyebrow: "02 / MAP",
    title: { es: "把数据对应到内容", en: "Map data back to the content" },
    body: {
      es: "把表现和选题、封面、标题、关键词、发布时间、内容结构等信息放在一起，避免只看孤立的数字。",
      en: "Read performance alongside topic, cover, title, keywords, timing and structure instead of looking at isolated numbers.",
    },
  },
  {
    eyebrow: "03 / COMPARE",
    title: { es: "进行横向比较", en: "Compare the notes" },
    body: {
      es: "对比同一批内容，观察哪些选题和表达方式更容易获得阅读、收藏、互动或进一步行动。",
      en: "Compare the batch to see which topics and expressions lead to stronger reading, saves, interaction or follow-up actions.",
    },
  },
  {
    eyebrow: "04 / DIAGNOSE",
    title: { es: "判断表现差异", en: "Diagnose the differences" },
    body: {
      es: "区分是选题、封面、标题、内容结构、发布节奏还是承接方式造成了差异，形成有依据的判断。",
      en: "Separate the effects of topic, cover, title, structure, timing and follow-up so the conclusions stay evidence-based.",
    },
  },
  {
    eyebrow: "05 / OUTPUT",
    title: { es: "沉淀复盘结论", en: "Turn the review into findings" },
    body: {
      es: "把表现较好的方向、需要调整的问题和暂时无法判断的变量分开记录，形成下一轮可以参考的结论。",
      en: "Separate promising directions, problems to adjust and variables that remain uncertain into reusable findings.",
    },
  },
];

function pick(loc: Localised, lang: Lang) {
  return loc[lang];
}

export default function ContentSkillModal({ mode, open, onClose }: Props) {
  const { lang } = useLanguage();
  const lenis = useLenis();
  const dialogRef = useRef<HTMLDivElement>(null);
  const isBatch = mode === "batch";
  const steps = isBatch ? BATCH_STEPS : REVIEW_STEPS;
  const githubUrl = "https://github.com/YYFan-SZ/yf-skill";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [open, lenis]);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  const isEnglish = lang === "en";
  const text = isEnglish
    ? isBatch
      ? {
          kicker: "CONTENT / BATCH PRODUCTION",
          title: "Xiaohongshu note production",
          lead: "Turn a batch of source material into complete, traceable notes ready to publish.",
          intro: "This is the production workflow: organise inputs, apply reusable Skills and templates, package each note, then archive and verify the result.",
          route: ["Inputs", "Rules", "Production", "Package", "Verify"],
          system: "Reusable execution layer",
          systemBody: "exam-paper-xiaohongshu-feishu and yf-xhs-batch-publisher are two concrete Skills developed for this production layer. The first one is available as a public GitHub repository.",
          boundary: "This archive describes the production process only. Content data review is shown as a separate capability.",
          deliverables: "Output",
          deliverableItems: ["Structured topic and source list", "Covers, image pages, titles, copy and tags", "Independent publishing packages", "Publishing records and asset archive"],
          github: "Open GitHub repository ↗",
          close: "Close batch production archive",
        }
      : {
          kicker: "CONTENT / DATA REVIEW",
          title: "Xiaohongshu content review",
          lead: "Read the results of published notes and turn them into usable content decisions.",
          intro: "This is a separate review workflow. It does not generate notes; it connects performance data with the actual topic, cover, title, timing and structure behind each note.",
          route: ["Collect", "Map", "Compare", "Diagnose", "Findings"],
          system: "Independent review layer",
          systemBody: "The review layer uses available platform data and content records to compare notes and explain differences. It stays separate from the batch-production Skills.",
          boundary: "When a project does not have complete metrics, the review records the limitation instead of inventing a result.",
          deliverables: "Output",
          deliverableItems: ["Note-level performance records", "Cross-note comparison", "Content variable diagnosis", "Reusable findings for future planning"],
          github: "",
          close: "Close content review archive",
        }
    : isBatch
      ? {
          kicker: "CONTENT / BATCH PRODUCTION",
          title: "小红书笔记批量制作",
          lead: "把一批素材整理成可直接发布、可追踪的内容包。",
          intro: "这里展示的是一次批量制作任务如何被拆解和执行：从输入素材，到 Skill 和模板处理，再到发布包归档与结果核验。",
          route: ["输入素材", "制作规则", "批量生成", "发布包", "归档核验"],
          system: "可复用的执行层",
          systemBody: "exam-paper-xiaohongshu-feishu 和 yf-xhs-batch-publisher 是这套批量制作能力中已经沉淀下来的两个执行 Skill。前者的公开 GitHub 仓库可以查看具体实现。",
          boundary: "这里讲的是内容制作流程；发布后的数据复盘是另一项独立能力。",
          deliverables: "实现结果",
          deliverableItems: ["结构化的选题与素材清单", "封面、图文页、标题、正文和标签", "每篇独立的发布包", "发布记录与素材归档"],
          github: "查看 GitHub 仓库 ↗",
          close: "关闭批量制作档案",
        }
      : {
          kicker: "CONTENT / DATA REVIEW",
          title: "小红书内容数据复盘",
          lead: "把发布后的结果整理成下一轮可以使用的内容判断。",
          intro: "复盘不负责生成笔记，而是单独对已经发布的内容进行记录、比较和判断，把数据和具体的选题、封面、标题及结构对应起来。",
          route: ["数据记录", "内容对应", "横向比较", "问题判断", "结论沉淀"],
          system: "独立的分析层",
          systemBody: "这部分和批量制作 Skill 分开运行，重点是建立笔记表现记录，分析不同内容变量与结果之间的关系。",
          boundary: "如果项目没有完整指标，就记录数据限制，只做内容和流程层面的复盘，不虚构结果。",
          deliverables: "复盘结果",
          deliverableItems: ["单篇笔记表现记录", "不同笔记的横向对比", "内容变量与表现差异判断", "下一轮可参考的复盘结论"],
          github: "",
          close: "关闭数据复盘档案",
        };

  return (
    <div className={`content-skill-modal ${open ? "content-skill-modal--open" : ""}`} aria-hidden={!open}>
      <button className="content-skill-modal__backdrop" type="button" onClick={onClose} aria-label={text.close} />
      <div ref={dialogRef} className="content-skill-modal__dialog" role="dialog" aria-modal="true" aria-labelledby={`content-skill-modal-title-${mode}`} tabIndex={-1}>
        <button className="content-skill-modal__close" type="button" onClick={onClose} aria-label={text.close}>×</button>
        <div className="content-skill-modal__body">
          <header className="content-skill-modal__header">
            <p>{text.kicker}</p>
            <h2 id={`content-skill-modal-title-${mode}`}>{text.title}</h2>
            <strong>{text.lead}</strong>
            <span>{text.intro}</span>
          </header>

          <div className="content-skill-modal__route" aria-label={`${text.title} workflow`}>
            {text.route.map((item, index) => (
              <span key={item}>{item}{index < text.route.length - 1 && <i aria-hidden>→</i>}</span>
            ))}
          </div>

          <div className="content-skill-modal__steps">
            {steps.map((step) => (
              <article key={step.eyebrow} className="content-skill-modal__step">
                <p>{step.eyebrow}</p>
                <div>
                  <h3>{pick(step.title, lang)}</h3>
                  <span>{pick(step.body, lang)}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="content-skill-modal__footer">
            <section className="content-skill-modal__system">
              <p>{isBatch ? "SKILL / IMPLEMENTATION" : "REVIEW / METHOD"}</p>
              <h3>{text.system}</h3>
              <span>{text.systemBody}</span>
              <small>{text.boundary}</small>
              {text.github && <a className="content-skill-modal__github" href={githubUrl} target="_blank" rel="noreferrer">{text.github}</a>}
            </section>
            <section className="content-skill-modal__deliverables">
              <p>OUTPUT / CHECKLIST</p>
              <h3>{text.deliverables}</h3>
              <ul>{text.deliverableItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
