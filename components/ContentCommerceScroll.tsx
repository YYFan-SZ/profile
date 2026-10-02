"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Copy = { es: string; en: string };

export const commerceChapters: Array<{ kicker: Copy; title: Copy; body: Copy; aside: Copy }> = [
  {
    kicker: { es: "01 / 找到问题", en: "01 / Find the question" },
    title: { es: "一条搜索词，也是一条需求线索。", en: "A search can be the start of a real need." },
    body: { es: "从考试节点、搜索词和用户提问里，找反复出现的困惑。先弄清谁需要、什么时候用，再决定做什么。", en: "I look at exam dates, searches and recurring questions to learn who needs something, and when they need it." },
    aside: { es: "考试节点 · 搜索需求 · 用户反馈", en: "Timing · searches · feedback" },
  },
  {
    kicker: { es: "02 / 整理成产品", en: "02 / Shape the product" },
    title: { es: "把零散资料，装订成拿来就能用的东西。", en: "Give scattered material a useful form." },
    body: { es: "重新组织讲义、试卷和素材，明确内容结构与交付形式。标题说清它解决什么，成品要让用户真正用得上。", en: "I organise handouts, papers and source material into a clear structure and a deliverable people can actually use." },
    aside: { es: "资料 → 结构 → 可交付的内容", en: "Material → structure → delivery" },
  },
  {
    kicker: { es: "03 / 让流程运转", en: "03 / Build the workflow" },
    title: { es: "重复制作交给 Skill，判断仍由我完成。", en: "Let the Skill handle repetition." },
    body: { es: "小红书批量制作 Skill 串起选题、封面、内容页、文案和标签；教师备课 Skill 则把讲义、试卷变成可用的 HTML 互动课件。", en: "The Xiaohongshu Skill connects topics, covers, pages, copy and tags. The teacher Skill turns handouts and papers into interactive HTML lessons." },
    aside: { es: "两种工具 · 同一套产品化思路", en: "Two tools · one product mindset" },
  },
  {
    kicker: { es: "04 / 带着反馈再出发", en: "04 / Learn and repeat" },
    title: { es: "交付之后，下一轮才真正开始。", en: "Delivery starts the next round." },
    body: { es: "点击和咨询说明内容有没有被看见；成交与售后说明它有没有帮上忙。教师备课 Skill 已售出数十份，也在根据真实反馈持续改版。", en: "Clicks and enquiries show what gets noticed. Sales and feedback show what helps. Dozens of teacher Skill sales inform each new version." },
    aside: { es: "看见 → 使用 → 成交 → 改版", en: "Discovery → use → sales → revision" },
  },
];

function Artifact({ stage, lang }: { stage: number; lang: "es" | "en" }) {
  if (stage === 0) return <div className="commerce-scroll__artifact commerce-scroll__artifact--notes" aria-hidden="true">
    <span>{lang === "en" ? "What do I need?" : "这份资料怎么用？"}</span>
    <span>{lang === "en" ? "Before the exam" : "考试前来得及吗？"}</span>
    <span>{lang === "en" ? "Too many files" : "资料太散了"}</span>
    <i />
  </div>;
  if (stage === 1) return <div className="commerce-scroll__artifact commerce-scroll__artifact--book" aria-hidden="true">
    <div className="commerce-scroll__book-cover"><small>VOL. 01</small><strong>{lang === "en" ? "A useful product" : "一份能用的产品"}</strong><span>{lang === "en" ? "From question to delivery" : "从问题到交付"}</span></div>
    <i /><i />
  </div>;
  if (stage === 2) return <div className="commerce-scroll__artifact commerce-scroll__artifact--press" aria-hidden="true">
    <div className="commerce-scroll__press-head"><span>SKILL / PRODUCE</span><b /></div>
    <div className="commerce-scroll__press-paper"><i /><i /><i /></div>
    <div className="commerce-scroll__press-tray"><span>{lang === "en" ? "COVER" : "封面"}</span><span>{lang === "en" ? "PAGES" : "内容页"}</span><span>{lang === "en" ? "COPY" : "文案"}</span></div>
  </div>;
  return <div className="commerce-scroll__artifact commerce-scroll__artifact--receipt" aria-hidden="true">
    <div className="commerce-scroll__receipt-sheet"><small>ORDER / FEEDBACK</small><i /><i /><i /><strong>{lang === "en" ? "Delivered" : "已交付"}</strong></div>
    <span className="commerce-scroll__receipt-return">↶</span>
  </div>;
}

export default function ContentCommerceScroll({ onSelectStation }: { onSelectStation: (index: number) => void }) {
  const { lang } = useLanguage();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("portfolio:commerce-story-phase", { detail: { index: phase } }));
  }, [phase]);

  return <div className="commerce-scroll" style={{ "--story-offset": `${-phase * 25}%`, "--story-progress": `${phase / 3 * 100}%` } as CSSProperties}>
    <header className="commerce-scroll__heading">
      <span>CONTENT → COMMERCE</span>
      <h3>{lang === "en" ? "From one real question to the next." : "从一个真实问题，走向下一次交付。"}</h3>
      <p>{lang === "en" ? "Choose a step to unfold the work." : "点击下方步骤，看看内容怎样一步步成为产品。"}</p>
    </header>
    <div className="commerce-scroll__frame">
      <div className="commerce-scroll__spool commerce-scroll__spool--left" aria-hidden="true" />
      <div className="commerce-scroll__viewport" aria-label={lang === "en" ? "Content commerce process" : "内容商业化过程"}>
        <div className="commerce-scroll__track">
          {commerceChapters.map((chapter, index) => <article className={`commerce-scroll__chapter ${phase === index ? "is-active" : ""}`} key={chapter.kicker.es} aria-hidden={phase !== index}>
            <div className="commerce-scroll__copy">
              <span className="commerce-scroll__chapter-kicker">{chapter.kicker[lang]}</span>
              <h4>{chapter.title[lang]}</h4>
              <p>{chapter.body[lang]}</p>
              <span className="commerce-scroll__aside">{chapter.aside[lang]}</span>
              {index === 2 && <div className="commerce-scroll__links">
                <button type="button" tabIndex={phase === 2 ? 0 : -1} onClick={() => onSelectStation(1)}>{lang === "en" ? "See the batch Skill ↗" : "看小红书批量制作 Skill ↗"}</button>
                <button type="button" tabIndex={phase === 2 ? 0 : -1} onClick={() => onSelectStation(3)}>{lang === "en" ? "See the teacher Skill ↗" : "看教师备课 Skill ↗"}</button>
              </div>}
              {index === 3 && <span className="commerce-scroll__next">↶ {lang === "en" ? "Back to a new question" : "回到新的用户问题"}</span>}
            </div>
            <Artifact stage={index} lang={lang} />
          </article>)}
        </div>
      </div>
      <div className="commerce-scroll__spool commerce-scroll__spool--right" aria-hidden="true" />
    </div>
    <div className="commerce-scroll__steps" role="group" aria-label={lang === "en" ? "Choose a process step" : "选择流程步骤"}>
      {commerceChapters.map((chapter, index) => <button type="button" key={chapter.kicker.es} aria-pressed={phase === index} onClick={() => setPhase(index)}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        {chapter.kicker[lang].split(" / ")[1]}
      </button>)}
    </div>
    <div className="commerce-scroll__footer">
      <span>{String(phase + 1).padStart(2, "0")} / 04</span>
      <div className="commerce-scroll__progress" aria-hidden="true"><i /></div>
      <span>{lang === "en" ? "A continuing loop" : "持续运转的闭环"}</span>
    </div>
  </div>;
}
