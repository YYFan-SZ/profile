import './practice-binder.css';

const practiceSection = document.querySelector('#experience');
const practiceHeading = practiceSection?.querySelector('.experience-board-heading');
const practiceBoard = practiceSection?.querySelector('.experience-board');

if (practiceSection && practiceHeading && practiceBoard) {
  practiceHeading.hidden = true;
  practiceBoard.hidden = true;

  const entries = [
    { title: 'SZPU 创业协会', role: '宣传部部长 / 核心骨干', summary: '担任宣传部部长，负责公众号选题与推文、活动海报、KT 板等物料的统筹，让活动信息形成统一表达。', detail: '独立完成多套活动海报、现场 KT 板和公众号推文；同时参与“科研新星”等活动的前期沟通、物料准备和现场执行。', image: 'image/海报正面.jpg', facts: ['视觉设计', '内容运营', '活动执行'], labels: ['校园组织', '品牌表达'] },
    { title: '校团委科创部', role: '学生骨干', summary: '经历五轮面试进入科创部，参与挑战杯、创新工程等重点赛事的报名组织、资料流转与参赛团队服务。', detail: '负责资料审核、团队沟通和专家对接等事务，在截止期明确、参与方众多的场景下推进任务并同步进度。', image: 'image/校团委科创部.jpg', facts: ['赛事流程', '多方沟通', '任务管理'], labels: ['赛事组织', '校园实践'] },
    { title: '全运会志愿服务', role: '媒体与转播现场', summary: '在第十五届全运会拳击赛事新媒体处协助电视转播、媒体签到及新闻发布厅等现场支持工作。', detail: '面对高节奏的赛场排期和多点协同需求，完成媒体支持与现场沟通，强化了应变、执行和抗压能力。', image: 'image/志愿者证书.jpg', facts: ['转播辅助', '媒体接待', '现场协调'], labels: ['志愿服务', '大型赛事'] },
    { title: '生财有术航海', role: '成长陪伴教练', summary: '作为成长陪伴教练，持续服务 30+ 位圈友：跟进任务、梳理卡点，并和领队、志愿者协同营地节奏。', detail: '通过每日沟通和关键节点提醒，帮助成员跨过启动与执行卡点；项目获得一次 A 评级并实现全员上岸。', image: 'image/生财有术.jpg', facts: ['社群陪伴', '问题拆解', '协作推进'], labels: ['社群运营', '成长陪伴'] },
    { title: '校园荣誉与表达', role: '持续投入的记录', summary: '三次校级奖学金、提案征集、演讲与策划竞赛，是长期学习、表达和方案思考的持续积累。', detail: '通过演讲准备、提案撰写和项目复盘，将零散想法训练成更有结构的观点、方案与现场表达。', image: 'image/演讲.jpg', facts: ['公开表达', '方案策划', '复盘沉淀'], labels: ['学习成长', '表达能力'] },
  ];

  const diary = document.createElement('section');
  diary.className = 'vibe-diary practice-diary';
  diary.innerHTML = `<div class="vibe-diary__cover" aria-hidden="true"></div><div class="vibe-diary__book"><div class="vibe-diary__left"><div class="vibe-diary__paper vibe-diary__contents"><p class="vibe-diary__eyebrow">PRACTICE / FIELD ARCHIVE</p><h3>实践档案</h3><p class="vibe-diary__hint">从目录翻开每一段真实经历。</p><nav aria-label="实践经历目录">${entries.map((entry, index) => `<button type="button" data-practice="${index}"><b>${String(index + 1).padStart(2, '0')}</b><span><strong>${entry.title}</strong><small>${entry.role}</small></span><em>→</em></button>`).join('')}</nav></div></div><div class="vibe-diary__spine" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div class="vibe-diary__right"><article class="vibe-diary__paper vibe-diary__detail"><p class="vibe-diary__placeholder">从左页目录选择一段经历<br>在这里翻开它的实践档案。</p></article></div></div>`;
  practiceHeading.before(diary);

  const leftPage = diary.querySelector('.vibe-diary__contents');
  const rightPage = diary.querySelector('.vibe-diary__detail');
  const contents = leftPage.innerHTML;
  const openEntry = (index) => {
    const entry = entries[index];
    diary.classList.add('is-flipping');
    window.setTimeout(() => {
      leftPage.className = 'vibe-diary__paper vibe-diary__detail practice-diary__detail';
      leftPage.innerHTML = `<p class="vibe-diary__eyebrow">PRACTICE ${String(index + 1).padStart(2, '0')} / ${entry.role}</p><div class="vibe-diary__detail-copy"><h3>${entry.title}</h3><p class="vibe-diary__summary">${entry.summary}</p><div class="vibe-diary__rule"></div><p class="vibe-diary__copy">${entry.detail}</p><div class="vibe-diary__notes">${entry.facts.map((fact) => `<span>${fact}</span>`).join('')}</div></div><div class="vibe-diary__footer"><div>${entry.labels.map((label) => `<span>#${label}</span>`).join('')}</div></div>`;
      rightPage.className = 'vibe-diary__paper vibe-diary__project-page practice-diary__visual';
      rightPage.innerHTML = `<p class="vibe-diary__eyebrow">FIELD NOTE</p><button type="button" class="vibe-diary__back" data-action="contents">← 返回目录</button><div class="vibe-diary__project-media"><img src="${entry.image}" alt="${entry.title}"></div>`;
      leftPage.querySelector('[data-action="previous"]')?.addEventListener('click', () => openEntry(index - 1));
      rightPage.querySelector('[data-action="next"]')?.addEventListener('click', () => openEntry(index + 1));
      rightPage.querySelector('[data-action="contents"]')?.addEventListener('click', () => openContents());
    }, 300);
    window.setTimeout(() => diary.classList.remove('is-flipping'), 820);
  };
  const openContents = () => {
    diary.classList.add('is-flipping');
    window.setTimeout(() => { leftPage.className = 'vibe-diary__paper vibe-diary__contents'; leftPage.innerHTML = contents; rightPage.className = 'vibe-diary__paper vibe-diary__detail'; rightPage.innerHTML = '<p class="vibe-diary__placeholder">从左页目录选择一段经历<br>在这里翻开它的实践档案。</p>'; }, 300);
    window.setTimeout(() => diary.classList.remove('is-flipping'), 820);
  };
  diary.addEventListener('click', (event) => { const item = event.target.closest('[data-practice]'); if (item) openEntry(Number(item.dataset.practice)); const image = event.target.closest('.practice-diary__visual img'); if (image) { const overlay = document.getElementById('lightbox-overlay'); const output = document.getElementById('lightbox-image'); const caption = document.getElementById('lightbox-caption'); if (overlay && output && caption) { output.src = image.src; output.alt = image.alt; caption.textContent = image.alt; overlay.classList.add('active'); document.body.style.overflow = 'hidden'; } } });
}

