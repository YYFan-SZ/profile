"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/i18n";

type Localised = { zh: string; en: string };
type Report = { date: Localised; entries: Array<{ title: Localised; items: Localised[] }> };
const text = (zh: string, en: string): Localised => ({ zh, en });

const reports: Report[] = [
  { date: text("9 月 21 日—9 月 27 日", "September 21–27"), entries: [
    { title: text("教师备课 Skill 与内容传播", "Teacher lesson-planning Skill & content publishing"), items: [
      text("整理阅读理解、完形填空相关 Skill。", "Organised Skills for reading comprehension and cloze exercises."),
      text("跟进教师 HTML 课堂课件 Skill 的更新版本。", "Worked with the updated version of the teacher HTML lesson Skill."),
      text("根据 Skill 的功能和使用场景，规划并制作宣传视频、视频分镜和公众号文章。", "Planned promotional videos, storyboards and public-account articles around the Skill's real use cases."),
    ] },
    { title: text("AI 视觉审美与内容研究", "AI visual aesthetics & content research"), items: [
      text("研究 AI 图片产生“AI 感”的常见原因，梳理画面构图、细节、材质和整体协调性等视觉判断标准。", "Studied why AI-generated images can feel artificial, focusing on composition, detail, material and overall coherence."),
      text("使用 Browser Skill 查找两个平台的相关对标内容，整理案例和参考链接。", "Used Browser Skill to find comparable work on two platforms and organise examples and reference links."),
      text("尝试将审美判断转化为可执行的画面创作规则，为后续 AI 图片制作和内容创作提供参考。", "Turned aesthetic observations into practical visual rules for future AI image and content work."),
    ] },
  ] },
  { date: text("9 月 7 日—9 月 13 日", "September 7–13"), entries: [
    { title: text("百度网盘与闲鱼 MCP", "Baidu Netdisk & Xianyu MCP"), items: [text("梳理百度网盘资料与闲鱼商品制作的 MCP 流程。", "Mapped the MCP workflow for organising Baidu Netdisk material and creating Xianyu listings.")] },
    { title: text("教师备课 Skill", "Teacher lesson-planning Skill"), items: [
      text("制作教师资料的小红书图文包。", "Created Xiaohongshu image-note packages from teacher materials."),
      text("完成资料处理、封面、内容页、标题、正文和标签制作。", "Handled source processing, covers, content pages, titles, copy and tags."),
      text("Skill 已用于小红书上架，并产生订单。", "Used the Skill to publish on Xiaohongshu and generate orders."),
    ] },
    { title: text("AI 自媒体选题", "AI creator topics"), items: [text("继续规划 AI 产品、AI 应用和 AI 副业相关选题。", "Continued planning topics around AI products, applications and AI-assisted side projects.")] },
  ] },
  { date: text("8 月 31 日—9 月 6 日", "August 31–September 6"), entries: [
    { title: text("小红书批量制作 Skill", "Xiaohongshu batch-production Skill"), items: [
      text("完善标题、正文和标签的差异化规则。", "Refined differentiation rules for titles, copy and tags."),
      text("减少模板化、重复内容和平台违规风险。", "Reduced templated repetition and platform-compliance risks."),
    ] },
    { title: text("Video Shotcraft Skill", "Video Shotcraft Skill"), items: [
      text("学习镜头配方、Gallery 和 Remotion。", "Studied shot recipes, Gallery and Remotion."),
      text("梳理使用 Codex 制作产品宣传片的视频流程。", "Mapped a Codex workflow for producing product-promo videos."),
    ] },
  ] },
  { date: text("8 月 24 日—8 月 30 日", "August 24–30"), entries: [
    { title: text("3D 个人房间", "3D personal room"), items: [text("制作个人网站 3D 房间。", "Built a 3D room for the personal website."), text("完善模型加载、互动和照片展示功能。", "Improved model loading, interactions and photo presentation.")] },
    { title: text("视频号传统文化账号", "Traditional-culture video account"), items: [text("从传统文化资料中筛选视频号选题。", "Selected video topics from traditional-culture material."), text("完善传统文化类带货视频制作工作流。", "Improved the production workflow for traditional-culture commerce videos.")] },
    { title: text("小红书 AI 自媒体", "AI creator account on Xiaohongshu"), items: [text("梳理旧账号内容，确定保留和隐藏方向。", "Reviewed the old account and decided what to keep or hide."), text("初步确定 AI 产品、AI 应用和 AI 副业三个内容方向。", "Set three initial directions: AI products, AI applications and AI-assisted side projects.")] },
    { title: text("小红书千帆复盘", "Xiaohongshu Qianfan review"), items: [text("复盘经营、笔记、搜索词、客服和售后数据。", "Reviewed store, note, search-term, customer-service and after-sales data."), text("生成日报和周报，并封装成可复用 Skill。", "Generated daily and weekly reports and packaged the process as a reusable Skill.")] },
    { title: text("短视频文案二创", "Short-video copy adaptation"), items: [text("学习保留原意和原框架的文案改写方法。", "Studied how to rewrite copy while preserving its original meaning and structure."), text("优化开头钩子、口语化表达和 AI 味。", "Improved opening hooks, spoken phrasing and the overall feel of AI-assisted copy.")] },
  ] },
  { date: text("8 月 17 日—8 月 23 日", "August 17–23"), entries: [
    { title: text("视频号人物志带货视频工作流", "Video-account profile-commerce workflow"), items: [text("研究人物志、文化类口播和读书带货视频的制作流程。", "Studied production workflows for profile stories, cultural narration and book-commerce videos."), text("梳理配音、字幕、图片、运镜、BGM 和分段渲染等技术。", "Mapped voice-over, subtitles, images, camera movement, BGM and segmented rendering.")] },
    { title: text("小红书 SEO Skill", "Xiaohongshu SEO Skill"), items: [text("研究关键词、埋词位置和内容矩阵。", "Studied keywords, placement and content-matrix structure."), text("完成小红书 SEO 方案与文案 Skill。", "Completed the Xiaohongshu SEO plan and copywriting Skill.")] },
  ] },
];

const pick = (value: Localised, lang: Lang) => value[lang];

export function StairApproach() {
  const { lang } = useLanguage();
  return <section data-kb-section="stairs" className="terrace-approach" aria-label={lang === "en" ? "Stairs to the rooftop" : "沿楼梯前往天台"}><p>{lang === "en" ? "Follow the stairs into the content space" : "沿楼梯，进入内容空间"} <span aria-hidden="true">↑</span></p></section>;
}

export function WeeklyIsland() {
  const { lang } = useLanguage();
  return (
    <section data-kb-section="weekly" className="weekly-island-section" aria-label={lang === "en" ? "Weekly notes" : "周报岛"}>
      <div className="weekly-island pointer-events-auto">
        <header className="weekly-island__heading">
          <h2>{lang === "en" ? "What I have been working on" : "最近在做什么"}</h2>
          <p>{lang === "en" ? "Alongside the work and practice archive, I keep a record of what moved forward each week." : "作品和实践之外，也把每一周正在推进的事情留在这里。按时间翻阅我的周报。"}</p>
          <span className="weekly-island__count">{lang === "en" ? `Weekly notes · ${reports.length} issues` : `周报 · ${reports.length} 期`}</span>
        </header>
        <div className="weekly-island__reports">
          {reports.map((report, index) => <details key={report.date.zh} className="weekly-report" open={index === 0}>
            <summary><span className="weekly-report__index">{String(index + 1).padStart(2, "0")}</span><span className="weekly-island__date">{pick(report.date, lang)}</span><span className="weekly-island__toggle" aria-hidden="true" /></summary>
            <div className="weekly-report__body">{report.entries.map(entry => <article key={entry.title.zh}><h3>{pick(entry.title, lang)}</h3><ul>{entry.items.map(item => <li key={item.zh}>{pick(item, lang)}</li>)}</ul></article>)}</div>
          </details>)}
        </div>
      </div>
    </section>
  );
}

export function TerraceDescent() {
  const { lang } = useLanguage();
  return <section data-kb-section="descent" className="terrace-approach" aria-label={lang === "en" ? "Back stairs to the work island" : "从后侧楼梯前往作品岛"}><p>{lang === "en" ? "Take the back stairs to the work island" : "沿后侧楼梯，前往作品岛"} <span aria-hidden="true">↓</span></p></section>;
}
