"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { commerceChapters } from "@/components/ContentCommerceScroll";

type Copy = { zh: string; en: string };

const stations: Array<{ title: Copy; short: Copy; exhibitIndex: number }> = [
  { title: { zh: "电商实践成果", en: "E-commerce results" }, short: { zh: "真实运营与成交", en: "Real operation and sales" }, exhibitIndex: 2 },
  { title: { zh: "小红书批量制作 Skill", en: "Xiaohongshu batch Skill" }, short: { zh: "把资料变成发布包", en: "From material to posts" }, exhibitIndex: 1 },
  { title: { zh: "教师备课 Skill", en: "Teacher lesson Skill" }, short: { zh: "一件已交付的产品", en: "A delivered product" }, exhibitIndex: 3 },
  { title: { zh: "内容商业化闭环", en: "Content commerce loop" }, short: { zh: "从需求走到复盘", en: "From demand to review" }, exhibitIndex: 0 },
];

const lessonStages: Array<{ title: Copy; body: Copy }> = [
  { title: { zh: "资料整理", en: "Organise" }, body: { zh: "把讲义、试卷梳理为课堂可用的内容结构。", en: "Turn handouts and papers into a classroom-ready structure." } },
  { title: { zh: "题目展示", en: "Present" }, body: { zh: "按教学顺序呈现题目，并处理页面排版。", en: "Present questions in teaching order with readable page layout." } },
  { title: { zh: "答案交互", en: "Interact" }, body: { zh: "让答案按需展开，配合课堂讲解节奏。", en: "Reveal answers when needed to support the pace of teaching." } },
];

export default function ContentOrbit({ onOpenBatchSkill }: { onOpenBatchSkill: () => void }) {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);
  const [turn, setTurn] = useState(0);
  const activeRef = useRef(0);
  const [storyStep, setStoryStep] = useState(0);
  const [resultView, setResultView] = useState(0);
  const [lessonStep, setLessonStep] = useState(0);
  const [filmOpen, setFilmOpen] = useState(false);
  const filmDialog = useRef<HTMLDialogElement>(null);
  const filmVideo = useRef<HTMLVideoElement>(null);
  const read = (copy: Copy) => copy[lang];

  useEffect(() => {
    if (!filmOpen) return;
    const dialog = filmDialog.current;
    const video = filmVideo.current;
    dialog?.showModal();
    return () => {
      video?.pause();
      if (dialog?.open) dialog.close();
    };
  }, [filmOpen]);

  const selectStation = useCallback((index: number) => {
    let steps = index - activeRef.current;
    if (steps > 2) steps -= 4;
    if (steps < -2) steps += 4;
    if (steps) setTurn(previous => previous + steps * 90);
    activeRef.current = index;
    setActive(index);
    window.dispatchEvent(new CustomEvent("portfolio:rooftop-station", { detail: { index: stations[index].exhibitIndex } }));
  }, []);

  const showContents = () => {
    let steps = -activeRef.current;
    if (steps < -2) steps += 4;
    if (steps) setTurn(previous => previous + steps * 90);
    activeRef.current = 0;
    setActive(null);
    window.dispatchEvent(new CustomEvent("portfolio:rooftop-station", { detail: { index: -1 } }));
  };

  useEffect(() => {
    const onExhibitClick = (event: Event) => {
      const exhibitIndex = (event as CustomEvent<{ index?: number }>).detail?.index;
      const index = stations.findIndex(station => station.exhibitIndex === exhibitIndex);
      if (index >= 0) selectStation(index);
    };
    window.addEventListener("portfolio:rooftop-select", onExhibitClick);
    return () => window.removeEventListener("portfolio:rooftop-select", onExhibitClick);
  }, [selectStation]);

  useEffect(() => {
    if (active === 3) window.dispatchEvent(new CustomEvent("portfolio:commerce-story-phase", { detail: { index: storyStep } }));
  }, [active, storyStep]);

  const chapter = commerceChapters[storyStep];
  const style = { "--orbit-turn": `${turn}deg`, "--orbit-counter-turn": `${-turn}deg` } as CSSProperties;

  return <section className="content-orbit" style={style} aria-label={t("content.title")}>
    <div className="content-orbit__dial">
      <svg className="content-orbit__geometry" viewBox="0 0 800 800" aria-hidden="true">
        <circle className="content-orbit__outer-line" cx="400" cy="400" r="376" />
        <circle className="content-orbit__fine-line" cx="400" cy="400" r="352" />
        <g className="content-orbit__rotor">
          <circle className="content-orbit__rotor-line" cx="400" cy="400" r="322" />
          <circle className="content-orbit__rotor-dashes" cx="400" cy="400" r="294" />
          <path className="content-orbit__sweep" d="M400 78 A322 322 0 0 1 561 121" />
          <circle className="content-orbit__sweep-end" cx="561" cy="121" r="4" />
          {Array.from({ length: 48 }, (_, index) => <path
            key={index}
            className={index % 6 === 0 ? "is-major" : ""}
            d={index % 6 === 0 ? "M400 79 L400 99" : "M400 80 L400 89"}
            transform={`rotate(${index * 7.5} 400 400)`}
          />)}
        </g>
      </svg>
      <div className="content-orbit__needle" aria-hidden="true"><span /></div>
      <nav className="content-orbit__stations" aria-label={lang === "en" ? "Four content themes" : "四个内容栏目"}>
        {stations.map((station, index) => <button
          key={station.title.zh}
          type="button"
          className={`content-orbit__station content-orbit__station--${index} ${active === index ? "is-active" : ""}`}
          aria-pressed={active === index}
          aria-controls="content-orbit-panel"
          onClick={() => selectStation(index)}
        ><span>{String(index + 1).padStart(2, "0")}</span><strong>{read(station.title)}</strong><small>{read(station.short)}</small></button>)}
      </nav>
      <div className="content-orbit__mobile-hub" aria-hidden="true"><span>{t("content.title")}</span><strong>{active === null ? (lang === "en" ? "Four chapters" : "四个栏目") : read(stations[active].title)}</strong></div>
    </div>

    <div id="content-orbit-panel" className={`content-orbit__content ${active === null ? "content-orbit__content--overview" : `content-orbit__content--${active}`}`} role="region" aria-label={active === null ? t("content.title") : read(stations[active].title)} data-lenis-prevent>
      {active === null ? <div className="content-orbit__overview">
        <span className="content-orbit__index-label">{lang === "en" ? "INDEX / 01—04" : "目录 / 01—04"}</span>
        <h2>{t("content.title")}</h2>
        <p>{t("content.subtitle")}</p>
        <nav className="content-orbit__mobile-index" aria-label={lang === "en" ? "Four content themes" : "四个内容栏目"}>
          {stations.map((station, index) => <button type="button" key={station.title.zh} onClick={() => selectStation(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{read(station.title)}</strong>
            <small>{read(station.short)}</small>
          </button>)}
        </nav>
        <div className="content-orbit__evidence">
          <span><strong>&gt;50K</strong>{lang === "en" ? "cumulative GMV" : "累计成交额"}</span>
          <span><strong>{lang === "en" ? "Dozens" : "数十份"}</strong>{lang === "en" ? "teacher Skill sales" : "教师备课 Skill 已售"}</span>
        </div>
        <p className="content-orbit__hint">{lang === "en" ? "Choose a chapter on the ring" : "点击圆环上的栏目，展开内容"}</p>
      </div> : <>
      <button className="content-orbit__back" type="button" onClick={showContents}>{lang === "en" ? "← Contents" : "← 返回目录"}</button>
      <h2>{read(stations[active].title)}</h2>
      <div className="content-orbit__reading" key={active} aria-live="polite">
        {active === 3 && <article>
          <h3>{chapter.title[lang]}</h3>
          <p>{chapter.body[lang]}</p>
          <p className="content-orbit__aside">{chapter.aside[lang]}</p>
          <div className="content-orbit__step-row" role="group" aria-label={lang === "en" ? "Choose a process step" : "选择商业化流程步骤"}>
            {commerceChapters.map((step, index) => <button type="button" key={step.kicker.zh} aria-label={step.kicker[lang]} aria-pressed={storyStep === index} onClick={() => setStoryStep(index)}>{String(index + 1).padStart(2, "0")}</button>)}
          </div>
          {storyStep === 2 && <div className="content-orbit__links">
            <button type="button" onClick={() => selectStation(1)}>{lang === "en" ? "See the batch Skill ↗" : "看小红书批量制作 Skill ↗"}</button>
            <button type="button" onClick={() => selectStation(2)}>{lang === "en" ? "See the teacher Skill ↗" : "看教师备课 Skill ↗"}</button>
          </div>}
        </article>}

        {active === 1 && <article>
          <h3>{lang === "en" ? "One Skill. A complete publishing package." : "一套 Skill，把资料变成可发布的作品。"}</h3>
          <p>{lang === "en" ? "It turns batches of scattered source material into Xiaohongshu image posts, including topic selection, covers, content pages, differentiated titles, copy and tags. The workflow is reusable and traceable." : "把一批零散资料整理成可直接发布的小红书图文包，覆盖选题、封面、内容页、标题、正文和标签，重点解决批量制作时的重复与模板化问题。"}</p>
          <p className="content-orbit__aside">{lang === "en" ? "Source material → publishing package" : "原始资料 → 可发布图文包"}</p>
          <button className="content-orbit__action" type="button" onClick={onOpenBatchSkill}>{lang === "en" ? "Explore the production workflow ↗" : "展开制作流程 ↗"}</button>
        </article>}

        {active === 0 && <article>
          {resultView === 0 ? <>
            <h3>{t("content.storeTitle")}</h3>
            <p className="content-orbit__aside">{t("content.storeMeta")}</p>
            <div className="content-orbit__metric"><strong>&gt;50K</strong><span>{lang === "en" ? "cumulative GMV" : "累计成交额"}</span></div>
            <p>{t("content.storeBody")}</p>
          </> : <>
            <h3>{t("content.mediaTitle")}</h3>
            <p>{t("content.mediaBody")}</p>
            <div className="content-orbit__media-metrics"><span><strong>500+</strong>{lang === "en" ? "public-account followers" : "公众号粉丝"}</span><span><strong>1000+</strong>{lang === "en" ? "video-account followers" : "视频号粉丝"}</span></div>
          </>}
          <div className="content-orbit__step-row content-orbit__step-row--two" role="group" aria-label={lang === "en" ? "Choose a result" : "选择实践成果"}>
            <button type="button" aria-pressed={resultView === 0} onClick={() => setResultView(0)}>{lang === "en" ? "Shop" : "店铺"}</button>
            <button type="button" aria-pressed={resultView === 1} onClick={() => setResultView(1)}>{lang === "en" ? "Media" : "账号"}</button>
          </div>
        </article>}

        {active === 2 && <article>
          <h3>{lang === "en" ? "Teacher lesson-planning Skill" : "教师备课 Skill｜HTML 课件生成工具"}</h3>
          <p>{lang === "en" ? "Built for English teachers: it turns handouts and exam papers into ready-to-use interactive HTML lessons, with structured classroom content, question presentation, answer interaction and page layout." : "面向英语教师备课场景开发的 Skill，可将讲义、试卷等资料整理并生成可直接使用的 HTML 互动课件，支持课堂内容结构化、题目展示、答案交互和页面排版。"}</p>
          <p className="content-orbit__aside">{lang === "en" ? "Productised delivery · dozens of sales · improved from real customer feedback" : "已售出数十份，并根据客户反馈持续优化课件结构、视觉呈现和交付体验。"}</p>
          <button className="content-orbit__film-trigger" type="button" onClick={() => setFilmOpen(true)}>
            <span className="content-orbit__film-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m9 6 9 6-9 6V6Z" fill="currentColor" /></svg></span>
            <span>{lang === "en" ? "Watch the Codex-edited demo" : "观看 Codex 剪辑成片"}</span>
            <small>01:57</small>
          </button>
          <div className="content-orbit__step-row" role="group" aria-label={lang === "en" ? "Choose a lesson step" : "选择课件制作步骤"}>
            {lessonStages.map((step, index) => <button type="button" key={step.title.zh} aria-label={read(step.title)} aria-pressed={lessonStep === index} onClick={() => setLessonStep(index)}>{String(index + 1).padStart(2, "0")}</button>)}
          </div>
          <p className="content-orbit__step-detail"><strong>{read(lessonStages[lessonStep].title)}</strong> · {read(lessonStages[lessonStep].body)}</p>
        </article>}
      </div>
      </>}
    </div>
    <dialog
      ref={filmDialog}
      className="content-orbit__film-dialog"
      aria-labelledby="teacher-film-title"
      aria-describedby="teacher-film-description"
      onClose={() => setFilmOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) setFilmOpen(false); }}
    >
      <button className="content-orbit__film-close" type="button" onClick={() => setFilmOpen(false)} aria-label={lang === "en" ? "Close video" : "关闭视频"}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5 19 19M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </button>
      <div className="content-orbit__film-layout">
        <div className="content-orbit__film-media">
          <video
            ref={filmVideo}
            src={filmOpen ? "/videos/teacher-skill-codex-demo.mp4" : undefined}
            controls
            playsInline
            preload="metadata"
            aria-label={lang === "en" ? "Teacher Skill product demonstration" : "教师备课 Skill 产品演示视频"}
          >{lang === "en" ? "Your browser does not support video playback." : "当前浏览器不支持视频播放。"}</video>
        </div>
        <div className="content-orbit__film-copy">
          <span className="content-orbit__film-label">{lang === "en" ? "PRODUCT FILM · 01:57" : "产品演示 · 01:57"}</span>
          <h3 id="teacher-film-title">{lang === "en" ? "From screen recording to a finished film" : "从操作录屏到演示成片"}</h3>
          <p id="teacher-film-description">{lang === "en"
            ? "I gave Codex the original recording of the lesson-making workflow. It planned the on-screen copy and shot order, then edited the footage into a finished demonstration. The film keeps the real interface and shows how a test paper becomes an interactive HTML lesson."
            : "我把课件制作的原始操作录屏交给 Codex，由它梳理演示重点、规划屏幕文字和分镜顺序，再自动剪辑成片。视频保留真实操作画面，展示一份试卷如何生成可直接使用的 HTML 互动课件。"}</p>
          <div className="content-orbit__film-process" aria-label={lang === "en" ? "Video production process" : "视频制作流程"}>
            <span>{lang === "en" ? "Screen recording" : "操作录屏"}</span>
            <span>{lang === "en" ? "Story and captions" : "文字与分镜"}</span>
            <span>{lang === "en" ? "Edited film" : "自动成片"}</span>
          </div>
        </div>
      </div>
    </dialog>
  </section>;
}
