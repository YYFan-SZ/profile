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
    title: { es: "收集素材", en: "Collect topics and source material" },
    body: {
      es: "选题/资料，存放在本地文件夹",
      en: "Gather topics, source files, images, video or product information, then define the batch and its audience.",
    },
  },
  {
    eyebrow: "02 / PLAN",
    title: { es: "设定规则", en: "Lock the content rules" },
    body: {
      es: "模板/字段（已提前预设并封装成 Skill）",
      en: "Set the scope, file order, publishing template, fields and naming rules so the batch can be processed consistently.",
    },
  },
  {
    eyebrow: "03 / PRODUCE",
    title: { es: "批量制作", en: "Produce the notes in batches" },
    body: {
      es: "Codex 发送指令，即可直接整理：封面、标题、正文、标签",
      en: "Use reusable Skills and templates for covers, pages, titles, copy and tags while keeping each note tied to its real source.",
    },
  },
  {
    eyebrow: "04 / PACKAGE",
    title: { es: "整理发布包", en: "Assemble the publishing package" },
    body: {
      es: "一篇一记录汇总",
      en: "Turn each note into a standalone package with images, copy, tags and source mapping for publishing and tracking.",
    },
  },
  {
    eyebrow: "05 / VERIFY",
    title: { es: "写入飞书", en: "Write, archive and verify" },
    body: {
      es: "飞书归档：发布素材汇总 / 多账号视图",
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
          kicker: "内容生产流程",
          title: "小红书笔记批量制作",
          lead: "把一批零散素材，整理成多套可直接发布的小红书笔记。",
          intro: "",
          route: ["输入素材", "制作规则", "批量生成", "发布包", "归档核验"],
          system: "可复用的制作规则与 Skill",
          systemBody: "",
          boundary: "",
          deliverables: "素材清单 · 完整笔记 · 发布包 · 发布记录",
          deliverableItems: ["可发布", "可追踪", "可复用"],
          github: "查看Github仓库 ↗",
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

  const flowLine = text.route.join("  →  ");

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
            {text.intro && <span>{text.intro}</span>}
          </header>

          {isBatch && !isEnglish ? null : (
            <p className="content-skill-modal__flow-line">{flowLine}</p>
          )}

          <div className="content-skill-modal__steps" aria-label={`${text.title} workflow`}>
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
              <p>{isBatch && !isEnglish ? "这套能力沉淀了什么？" : isBatch ? "SKILL SYSTEM / 01" : "REVIEW / METHOD"}</p>
              <h3>{text.system}</h3>
              {text.systemBody && <span>{text.systemBody}</span>}
              {text.boundary && <small>{text.boundary}</small>}
              {text.github && <a className="content-skill-modal__github" href={githubUrl} target="_blank" rel="noreferrer">{text.github}</a>}
            </section>
            <section className="content-skill-modal__deliverables">
              <p>{isBatch && !isEnglish ? "最终交付什么？" : "DELIVERABLES / 02"}</p>
              <h3>{text.deliverables}</h3>
              <ul>{text.deliverableItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
