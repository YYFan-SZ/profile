"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/i18n";

type Localised = { zh: string; en: string };
type Report = { date: Localised; entries: Array<{ title: Localised; items: Localised[] }> };
const text = (zh: string, en: string): Localised => ({ zh, en });

const reports: Report[] = [
  { date: text("10 月月报", "October 2026"), entries: [
    { title: text("生日祝福网站", "Birthday greeting website"), items: [
      text("从零开始设计和制作 3D 生日祝福网站，规划花园场景、礼物、花田、烟花和整体体验路线。", "Designed and built a 3D birthday greeting website from scratch, planning its garden scenes, gifts, flower fields, fireworks and overall experience route."),
      text("梳理管理员端与用户端，让管理员能为不同收件人编辑专属祝福，并通过姓名缩写、专属链接或二维码进入对应内容。", "Mapped admin and guest experiences so personalised greetings can be prepared for different recipients and opened through initials, individual links or QR codes."),
    ] },
    { title: text("教师备课 Skill 与教育产品", "Teacher lesson-planning Skill & education product"), items: [
      text("持续收集教师备课 Skill 的客户反馈，关注使用中的问题和新需求，并据此完善产品与使用流程、推进版本迭代。", "Continued collecting customer feedback on the teacher lesson-planning Skill, improving the product and workflow and advancing iterations based on real issues and new needs."),
      text("练习面向一线教师做 AI 产品规划，梳理目标用户、使用场景、产品指标和功能优先级；初步考虑资料读取、AI 笔记生成、内容预览与修改等功能。", "Practised planning an AI product for frontline teachers by defining users, use cases, product metrics and priorities. Initial MVP ideas included resource reading, AI-generated notes, and content preview and editing."),
      text("将课件制作拓展到其他学科，制作英语、语文等课堂课件案例，并核对题目、答案、解析与原始资料的对应关系。", "Extended lesson creation to other subjects, producing English and Chinese classroom examples and checking that questions, answers and explanations matched the source material."),
    ] },
  ] },
  { date: text("9 月月报", "September 2026"), entries: [
    { title: text("教师备课 Skill 与课堂课件", "Teacher lesson-planning Skill & classroom materials"), items: [
      text("制作并持续完善教师备课 Skill，围绕英语课堂资料、阅读理解和完形填空等场景测试课件生成效果。", "Built and refined the teacher lesson-planning Skill, testing classroom materials for English, reading comprehension and cloze exercises."),
      text("根据测试情况调整课件与原始资料的对应关系，重点检查题目顺序、答案解析和课堂呈现是否准确。", "Improved source alignment based on testing, with particular attention to question order, answer explanations and classroom presentation."),
      text("逐步把教师备课和课件制作作为持续打磨的产品方向。", "Developed lesson planning and classroom materials into an ongoing product direction."),
    ] },
    { title: text("小红书内容流程与选题研究", "Xiaohongshu workflows & topic research"), items: [
      text("研究小红书 MCP 和相关运营案例，探索资料整理、内容制作和发布准备之间更顺畅的工作流。", "Studied Xiaohongshu MCP options and operating examples, exploring a smoother workflow from source organisation through content production to publishing preparation."),
      text("继续打磨 AI 自媒体选题和账号定位，学习视频画面呈现方式，思考如何提升 AI 内容的辨识度。", "Continued shaping AI creator topics and account positioning, studying video presentation styles and ways to make AI content more distinctive."),
    ] },
    { title: text("MCP 工作流研究", "MCP workflow research"), items: [
      text("梳理百度网盘资料与闲鱼商品制作相关的 MCP 流程。", "Mapped MCP workflows for organising Baidu Netdisk materials and preparing Xianyu listings."),
    ] },
  ] },
  { date: text("8 月月报", "August 2026"), entries: [
    { title: text("小红书运营与内容电商", "Xiaohongshu operations & content commerce"), items: [
      text("梳理小红书 SEO、关键词布局和内容矩阵，制作并完善批量笔记制作 Skill，减少选题、封面、正文和标签制作中的重复劳动。", "Developed Xiaohongshu SEO, keyword placement and content-matrix practices, and refined a batch note-production Skill to reduce repetitive work across topics, covers, copy and tags."),
      text("研究虚拟学习资料和实物商品的详情页结构，探索把资料整理、内容制作和商品交付串成可复用流程。", "Studied detail-page structures for digital learning materials and physical goods, exploring a reusable process from source organisation to content production and delivery."),
      text("复盘小红书店铺经营、笔记、搜索词、客服和售后数据。", "Reviewed Xiaohongshu store operations, notes, search terms, customer service and after-sales data."),
    ] },
    { title: text("视频制作与 AI 内容", "Video production & AI content"), items: [
      text("研究人物志、传统文化类视频号图书带货视频的制作方式，梳理口播稿、配音、字幕、配图、运镜、BGM 和分段渲染流程。", "Studied book-commerce videos for profile stories and traditional culture, mapping scripts, voice-over, subtitles, images, camera movement, BGM and segmented rendering."),
      text("学习镜头配方、Gallery 和 Remotion，梳理使用 Codex 制作产品宣传片的流程；同时练习口播文案改写和图文内容规划。", "Studied shot recipes, Gallery and Remotion, mapped a Codex workflow for product videos, and practised spoken-script adaptation and image-note planning."),
    ] },
    { title: text("个人网站", "Personal website"), items: [
      text("制作 3D 个人房间网页，完善模型加载、互动和照片展示，探索用更具体验感的方式呈现个人经历与作品。", "Built a 3D personal-room webpage, improving model loading, interactions and photo displays to present personal experience and work in a more immersive way."),
    ] },
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
    <section data-kb-section="weekly" className="weekly-island-section" aria-label={lang === "en" ? "Monthly reports" : "月报"}>
      <div className="weekly-island pointer-events-auto">
        <header className="weekly-island__heading">
          <h2>{lang === "en" ? "What I have been working on" : "最近在做什么"}</h2>
          <p>{lang === "en" ? "Alongside the work and practice archive, I keep a monthly record of what moved forward." : "作品和实践之外，也按月记录正在推进的事情。"}</p>
          <span className="weekly-island__count">{lang === "en" ? `Monthly reports · ${reports.length} issues` : `月报 · ${reports.length} 期`}</span>
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
