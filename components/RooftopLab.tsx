"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import ContentCommerceScroll from "@/components/ContentCommerceScroll";

type Copy = { es: string; en: string };

const stations: Array<{ title: Copy; short: Copy; mark: string }> = [
  {
    mark: "01",
    title: { es: "内容商业化闭环", en: "Content commerce loop" },
    short: { es: "从需求走到复盘", en: "From demand to review" },
  },
  {
    mark: "02",
    title: { es: "小红书批量制作 Skill", en: "Xiaohongshu batch Skill" },
    short: { es: "把资料变成发布包", en: "From material to posts" },
  },
  {
    mark: "03",
    title: { es: "电商实践成果", en: "E-commerce results" },
    short: { es: "真实运营与成交", en: "Real operation and sales" },
  },
  {
    mark: "04",
    title: { es: "教师备课 Skill", en: "Teacher lesson Skill" },
    short: { es: "一件已交付的产品", en: "A delivered product" },
  },
];

const lessonStages: Array<{ title: Copy; body: Copy }> = [
  {
    title: { es: "资料整理", en: "Organise" },
    body: { es: "把讲义、试卷梳理为课堂可用的内容结构。", en: "Turn handouts and papers into a classroom-ready structure." },
  },
  {
    title: { es: "题目展示", en: "Present" },
    body: { es: "按教学顺序呈现题目，并处理页面排版。", en: "Present questions in teaching order with readable page layout." },
  },
  {
    title: { es: "答案交互", en: "Interact" },
    body: { es: "让答案按需展开，配合课堂讲解节奏。", en: "Reveal answers when needed to support the pace of teaching." },
  },
];

const bearings = [
  { x: 160, y: 46 },
  { x: 274, y: 160 },
  { x: 160, y: 274 },
  { x: 46, y: 160 },
];

export default function RooftopLab({ onOpenBatchSkill }: { onOpenBatchSkill: () => void }) {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);
  const [lessonStep, setLessonStep] = useState(0);
  const vessel = useRef<SVGGElement>(null);
  const previousBearing = useRef(0);
  const read = (copy: Copy) => copy[lang];
  const selectStation = (index: number) => {
    setActive(index);
    window.dispatchEvent(new CustomEvent("portfolio:rooftop-station", { detail: { index } }));
  };
  useEffect(() => {
    const from = bearings[previousBearing.current];
    const to = bearings[active];
    previousBearing.current = active;
    if (!vessel.current || from === to || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = vessel.current.animate([
      { transform: `translate(${from.x}px, ${from.y}px)`, offset: 0 },
      { transform: "translate(160px, 160px)", offset: .48 },
      { transform: `translate(${to.x}px, ${to.y}px)`, offset: 1 },
    ], { duration: 760, easing: "cubic-bezier(.16, 1, .3, 1)" });
    return () => animation.cancel();
  }, [active]);
  useEffect(() => {
    const onExhibitClick = (event: Event) => {
      const index = (event as CustomEvent<{ index?: number }>).detail?.index;
      if (typeof index !== "number" || !Number.isInteger(index) || index < 0 || index >= stations.length) return;
      setActive(index);
      window.dispatchEvent(new CustomEvent("portfolio:rooftop-station", { detail: { index } }));
    };
    window.addEventListener("portfolio:rooftop-select", onExhibitClick);
    return () => window.removeEventListener("portfolio:rooftop-select", onExhibitClick);
  }, []);

  return (
    <div className="rooftop-lab relative z-10 pointer-events-auto">
      <header className="rooftop-lab__intro">
        <h2>{t("content.title")}</h2>
        <p>{t("content.intro")}</p>
        <span className="rooftop-lab__hint">{lang === "en" ? "Tap the reel, a workbench object, or a theme below" : "点击胶片卷轴、桌上展品，或下方主题"}</span>
      </header>

      <div className="rooftop-lab__navigation">
        <svg className="rooftop-lab__chart" viewBox="0 0 320 320" aria-hidden="true"
          onClick={event => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width * 320;
            const y = (event.clientY - rect.top) / rect.height * 320;
            const nearest = bearings.reduce((best, point, index) =>
              Math.hypot(point.x - x, point.y - y) < Math.hypot(bearings[best].x - x, bearings[best].y - y) ? index : best, 0);
            selectStation(nearest);
          }}>
          <circle cx="160" cy="160" r="144" className="rooftop-lab__chart-outer" />
          <circle cx="160" cy="160" r="114" className="rooftop-lab__chart-ring" />
          <circle cx="160" cy="160" r="54" className="rooftop-lab__chart-inner" />
          {bearings.map((point, index) => <g key={index}>
            <path d={`M160 160 L${point.x} ${point.y}`} className="rooftop-lab__chart-route" />
            <circle cx={point.x} cy={point.y} r={active === index ? 8 : 5} className={`rooftop-lab__chart-port ${active === index ? "is-active" : ""}`} />
          </g>)}
          <path key={active} d={`M160 160 L${bearings[active].x} ${bearings[active].y}`} className="rooftop-lab__chart-course" />
          <circle cx="160" cy="160" r="7" className="rooftop-lab__chart-hub" />
          <g ref={vessel} className="rooftop-lab__vessel" style={{ transform: `translate(${bearings[active].x}px, ${bearings[active].y}px)` }}>
            <path d="M-14 8 Q0 17 14 8 Z" className="rooftop-lab__vessel-hull" />
            <path d="M0-17 L0 7 L12 7 Q8-8 0-17 Z" className="rooftop-lab__vessel-sail" />
            <path d="M0-17 L0 8" className="rooftop-lab__vessel-mast" />
          </g>
        </svg>
        <div className="rooftop-lab__stations" aria-label={lang === "en" ? "Four content stations" : "四个内容栏目"}>
          {stations.map((item, index) => (
            <button
              type="button"
              key={item.mark}
              className={`rooftop-lab__station ${active === index ? "is-active" : ""}`}
              aria-pressed={active === index}
              aria-controls="rooftop-lab-stage"
              onClick={() => selectStation(index)}
            >
              <span className="rooftop-lab__station-mark">{item.mark}</span>
              <strong>{read(item.title)}</strong>
              <span className="rooftop-lab__station-short">{read(item.short)}</span>
              <span className="rooftop-lab__station-line" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div id="rooftop-lab-stage" className={`rooftop-lab__stage rooftop-lab__stage--${active}`} role="region" aria-label={read(stations[active].title)}>
        {active === 0 && (
          <ContentCommerceScroll onSelectStation={selectStation} />
        )}

        {active === 1 && (
          <div className="rooftop-lab__scene rooftop-lab__scene--batch" key="batch">
            <div className="rooftop-lab__batch-copy">
              <h3>{lang === "en" ? "One Skill. A complete publishing package." : "一套 Skill，把资料变成可发布的作品。"}</h3>
              <p>{lang === "en" ? "It turns batches of scattered source material into Xiaohongshu image posts, including topic selection, covers, content pages, differentiated titles, copy and tags. The workflow is reusable and traceable." : "把一批零散资料整理成可直接发布的小红书图文包，覆盖选题、封面、内容页、标题、正文和标签，重点解决批量制作时的重复与模板化问题。"}</p>
              <button className="rooftop-lab__action" type="button" onClick={onOpenBatchSkill}>{lang === "en" ? "Explore the production workflow" : "展开制作流程"}<span aria-hidden="true">→</span></button>
            </div>
            <div className="rooftop-lab__batch-map" aria-label={lang === "en" ? "Material to publishing package" : "从资料到发布包的流程示意"}>
              <div className="rooftop-lab__source"><span>{lang === "en" ? "SOURCE MATERIAL" : "原始资料"}</span><strong>{lang === "en" ? "Scattered files" : "零散资料"}</strong><small>{lang === "en" ? "Questions / notes / references" : "题目 · 文档 · 素材"}</small></div>
              <div className="rooftop-lab__connector" aria-hidden="true" />
              <div className="rooftop-lab__output"><span>{lang === "en" ? "PUBLISHING PACKAGE" : "可发布图文包"}</span><strong>{lang === "en" ? "A ready-to-publish set" : "一套可直接发布的内容"}</strong><div>{(lang === "en" ? ["Cover", "Pages", "Title", "Copy", "Tags"] : ["封面", "内容页", "标题", "正文", "标签"]).map(part => <em key={part}>{part}</em>)}</div></div>
            </div>
          </div>
        )}

        {active === 2 && (
          <div className="rooftop-lab__scene rooftop-lab__scene--commerce" key="commerce">
            <div className="rooftop-lab__commerce-main">
              <h3>{t("content.storeTitle")}</h3>
              <p>{t("content.storeMeta")}</p>
              <div className="rooftop-lab__figure"><strong>&gt;50K</strong><span>{lang === "en" ? "cumulative GMV" : "累计成交额"}</span></div>
              <p className="rooftop-lab__commerce-body">{t("content.storeBody")}</p>
            </div>
            <div className="rooftop-lab__commerce-side">
              <h4>{t("content.mediaTitle")}</h4>
              <p>{t("content.mediaBody")}</p>
              <div><span><strong>500+</strong>{lang === "en" ? "public-account followers" : "公众号粉丝"}</span><span><strong>1000+</strong>{lang === "en" ? "video-account followers" : "视频号粉丝"}</span></div>
            </div>
          </div>
        )}

        {active === 3 && (
          <div className="rooftop-lab__scene rooftop-lab__scene--teacher" key="teacher">
            <div className="rooftop-lab__teacher-copy">
              <h3>{lang === "en" ? "Teacher lesson-planning Skill" : "教师备课 Skill｜HTML 课件生成工具"}</h3>
              <p>{lang === "en" ? "Built for English teachers: it turns handouts and exam papers into ready-to-use interactive HTML lessons, with structured classroom content, question presentation, answer interaction and page layout." : "面向英语教师备课场景开发的 Skill，可将讲义、试卷等资料整理并生成可直接使用的 HTML 互动课件，支持课堂内容结构化、题目展示、答案交互和页面排版。"}</p>
              <p className="rooftop-lab__teacher-proof">{lang === "en" ? "Productised delivery · dozens of sales · improved from real customer feedback" : "已售出数十份，并根据客户反馈持续优化课件结构、视觉呈现和交付体验。"}</p>
            </div>
            <div className="rooftop-lab__lesson" aria-label={lang === "en" ? "Lesson workflow" : "课件制作流程"}>
              <div className="rooftop-lab__lesson-orbit" role="group" aria-label={lang === "en" ? "Select a workflow step" : "选择流程步骤"}>
                <div className="rooftop-lab__lesson-track" aria-hidden="true" />
                {lessonStages.map((stage, index) => <button
                  type="button"
                  key={stage.title.es}
                  className={`rooftop-lab__lesson-node rooftop-lab__lesson-node--${index} ${lessonStep === index ? "is-active" : ""}`}
                  aria-pressed={lessonStep === index}
                  onClick={() => setLessonStep(index)}
                ><span className="rooftop-lab__lesson-dot" aria-hidden="true" />{read(stage.title)}</button>)}
                <div className="rooftop-lab__lesson-center" aria-live="polite">
                  <span>{String(lessonStep + 1).padStart(2, "0")} / 03</span>
                  <strong>{read(lessonStages[lessonStep].title)}</strong>
                </div>
              </div>
              <p className="rooftop-lab__lesson-description" key={lessonStep}>{read(lessonStages[lessonStep].body)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
