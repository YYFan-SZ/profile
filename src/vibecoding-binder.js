import './vibecoding-binder.css';

const projectsSection = document.querySelector('#projects');
const originalGrid = projectsSection?.querySelector('.grid');

if (projectsSection && originalGrid) {
  originalGrid.hidden = true;

  const projects = [
    { title: '生日记录簿', tag: '微信小程序', color: 'pink', summary: '面向家人、朋友和同事生日的轻量级备忘录：一次录入即可记录公历、农历、关系和提醒时间。', detail: '从“总怕忘记重要日子”的日常痛点出发，设计了生日录入、临近提醒和纪念日查看等流程，把零散日期收进一个清晰的小程序。', image: 'image/生日记录簿.png', qr: 'image/生日记录簿小程序码.jpg', facts: ['公历 / 农历', '倒计时提醒', '微信小程序'], labels: ['日常工具', '微信生态'] },
    { title: '出行防遗漏清单', tag: '微信小程序', color: 'mint', summary: '按通勤、旅行和日常办事场景组织物品的核对工具，出门前可快速勾选并查看遗漏项。', detail: '提供场景清单、快捷核对和记录归档：把“钥匙带没带、证件放哪了”这类反复确认，变成一次可完成的出发检查。', image: 'image/出行防遗漏清单.png', qr: 'image/出行防遗漏二维码.jpg', facts: ['场景清单', '快捷核对', '记录归档'], labels: ['出行必备', '效率打卡'] },
    { title: '途说 APP', tag: 'Android · Beta', color: 'teal', summary: '为旅行创作者设计的移动端灵感采集工具，覆盖现场录音、语音转写、素材归类和内容草稿生成。', detail: '将户外录音、途中见闻和瞬时灵感串成“采集 → 转写 → 整理 → 成稿”的连续路径，减少回程后翻找录音和二次整理的时间。', video: 'image/tusuo-demo-web.mp4', facts: ['录音采集', '语音转写', 'AI 成稿'], labels: ['uni-app', '语音转写', 'AI 文案'] },
    { title: 'AI ArtPalette', tag: 'Web', color: 'gold', summary: '输入场景、情绪或创作关键词后，由 AI 生成可直接使用的主色、辅助色和渐变组合。', detail: '面向设计师、创作者与开发者，将抽象的氛围描述转为可用的色彩提案，减少从空白开始挑色的时间。', image: 'image/aiartpalette.png', link: 'https://aiartpalette.art', facts: ['关键词输入', '色彩生成', '渐变方案'], labels: ['AIGC', '设计工具'] },
    { title: 'RegretReset', tag: 'Web · Beta', color: 'purple', summary: '一个围绕“后悔、纠结与反复回想”的 AI 反思工具，帮助用户先看清问题，再找到能执行的下一步。', detail: '通过 CLARIFY 梳理事实与感受、CHOOSE 对齐价值和选择、ACT 生成下一步行动，把“卡住”转化为可推进的自我对话。', image: 'image/regretreset.png', link: 'https://regretreset.life', facts: ['AI 对话引导', 'Prompt 编排', '结构化行动输出'], labels: ['AI 陪伴', '行动规划'] },
    { title: '微信爆款追踪流', tag: 'n8n 自动化', color: 'blue', summary: '基于 n8n 搭建的内容调研工作流：按周触发、发现微信热门内容、提取正文与互动数据并沉淀到统一表格。', detail: '把“找爆文、抄数据、做汇总”拆成定时发现、内容抓取、字段清洗和数据沉淀四步，让运营时间回到选题与策略判断。', video: 'image/n8n.mp4', facts: ['定时触发', '内容抓取', '数据沉淀'], labels: ['自动化工作流', '数据追踪'] },
  ];

  const diary = document.createElement('section');
  diary.className = 'vibe-diary';
  diary.innerHTML = `
    <div class="vibe-diary__cover" aria-hidden="true"></div>
    <div class="vibe-diary__book">
      <div class="vibe-diary__left"><div class="vibe-diary__paper vibe-diary__contents"><p class="vibe-diary__eyebrow">VIBE CODING / ARCHIVE</p><h3>作品目录</h3><p class="vibe-diary__hint">选择一个项目，翻开它的完整双页。</p><nav aria-label="Vibe Coding 目录">${projects.map((project, index) => `<button type="button" data-project="${index}"><b>${String(index + 1).padStart(2, '0')}</b><span><strong>${project.title}</strong><small>${project.tag}</small></span><em>→</em></button>`).join('')}</nav></div></div>
      <div class="vibe-diary__spine" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      <div class="vibe-diary__right"><article class="vibe-diary__paper vibe-diary__detail" aria-live="polite"><p class="vibe-diary__placeholder">从左页目录选择一个作品<br>在这里翻开它的项目档案。</p></article></div>
    </div>`;
  originalGrid.before(diary);

  const leftPage = diary.querySelector('.vibe-diary__contents');
  const detail = diary.querySelector('.vibe-diary__detail');
  const contentsTemplate = leftPage.innerHTML;

  const mediaFor = (project) => project.video
    ? `<video src="${project.video}" muted loop playsinline controls aria-label="${project.title} 演示视频"></video>`
    : `<img src="${project.image}" alt="${project.title} 项目预览">`;

  const openProject = (index) => {
    const project = projects[index];
    diary.classList.add('is-flipping');
    window.setTimeout(() => {
      const qr = '';
      const qrAction = project.qr ? `<button type="button" class="vibe-diary__qr-button" data-action="show-qr" data-qr="${project.qr}" data-alt="${project.title} 小程序码">扫码体验 ↗</button>` : '';
      leftPage.className = `vibe-diary__paper vibe-diary__detail vibe-diary__detail--${project.color}`;
      leftPage.innerHTML = `<p class="vibe-diary__eyebrow">PROJECT ${String(index + 1).padStart(2, '0')} / ${project.tag}</p><div class="vibe-diary__detail-copy"><h3>${project.title}</h3><p class="vibe-diary__summary">${project.summary}</p><div class="vibe-diary__rule"></div><p class="vibe-diary__copy">${project.detail}</p>${project.facts.length ? `<div class="vibe-diary__notes">${project.facts.map((fact) => `<span>${fact}</span>`).join('')}</div>` : ''}</div><div class="vibe-diary__footer"><div>${project.labels.map((label) => `<span>#${label}</span>`).join('')}</div>${project.link ? `<a class="vibe-diary__link" href="${project.link}" target="_blank" rel="noopener noreferrer">访问项目 ↗</a>` : ''}${qrAction}</div>`;
      detail.className = `vibe-diary__paper vibe-diary__project-page vibe-diary__project-page--${project.color}`;
      detail.innerHTML = `<p class="vibe-diary__eyebrow">${project.tag.toUpperCase()}</p><button type="button" class="vibe-diary__back" data-action="contents">← 返回目录</button><div class="vibe-diary__project-media">${mediaFor(project)}</div><div class="vibe-diary__project-meta">${qr}</div>`;
      detail.querySelector('video')?.play().catch(() => {});
      detail.querySelector('[data-action="contents"]')?.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); openContents(); });
      leftPage.querySelector('[data-action="previous"]')?.addEventListener('click', () => openProject(index - 1));
      leftPage.querySelector('[data-action="show-qr"]')?.addEventListener('click', (event) => { const button = event.currentTarget; const overlay = document.getElementById('lightbox-overlay'); const image = document.getElementById('lightbox-image'); const caption = document.getElementById('lightbox-caption'); if (overlay && image && caption) { image.src = button.dataset.qr; image.alt = button.dataset.alt; caption.textContent = button.dataset.alt; overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } });
      detail.querySelector('[data-action="next"]')?.addEventListener('click', () => openProject(index + 1));
    }, 410);
    window.setTimeout(() => diary.classList.remove('is-flipping'), 820);
  };

  const openContents = () => {
    diary.classList.add('is-flipping');
    window.setTimeout(() => {
      leftPage.className = 'vibe-diary__paper vibe-diary__contents';
      leftPage.innerHTML = contentsTemplate;
      detail.className = 'vibe-diary__paper vibe-diary__detail';
      detail.innerHTML = '<p class="vibe-diary__placeholder">从左页目录选择一个作品<br>在这里翻开它的项目档案。</p>';
    }, 410);
    window.setTimeout(() => diary.classList.remove('is-flipping'), 820);
  };

  diary.addEventListener('click', (event) => {
    const image = event.target.closest('.vibe-diary__project-page img');
    if (image) {
      event.stopPropagation();
      const overlay = document.getElementById('lightbox-overlay');
      const lightboxImage = document.getElementById('lightbox-image');
      const caption = document.getElementById('lightbox-caption');
      if (overlay && lightboxImage && caption) {
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt || '';
        caption.textContent = image.alt || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
      return;
    }
    const item = event.target.closest('[data-project]');
    if (item) openProject(Number(item.dataset.project));
  });
}


















