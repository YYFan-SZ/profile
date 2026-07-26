import './hero-redesign.css';

const hero = document.querySelector('#hero > .reveal');

if (hero) {
  hero.className = 'reveal sac-hero';
  hero.innerHTML = `
    <div class="sac-hero__left">
      <header class="sac-hero__heading">
        <div class="sac-hero__eyebrow"><i></i><span>PERSONAL PORTFOLIO · 2026</span></div>
        <h1>ZhengYifan</h1>
      </header>

      <div class="sac-hero__profile">
        <figure class="sac-portrait">
          <div class="sac-portrait__frame">
            <img src="image/头像.jpg" alt="ZhengYifan" class="no-lightbox" />
            <div class="sac-portrait__tone" aria-hidden="true"></div>
          </div>
          <figcaption><span>PROFILE</span><small>ZHENGYIFAN</small></figcaption>
        </figure>

        <div class="sac-hero__story">
          <p>产品设计 × AI 应用 × Vibe Coding × 内容增长与电商实践。既把模糊想法做成可验证的产品、网站与工作流，也在内容运营、用户需求与商业转化中持续验证它们的价值。</p>
          <dl>
            <div><dt>年龄</dt><dd>20 岁</dd></div>
            <div><dt>城市</dt><dd>深圳</dd></div>
            <div><dt>专业</dt><dd>移动互联网应用技术</dd></div>
          </dl>
        </div>
      </div>
    </div>

    <div class="sac-hero__orbit-side" aria-hidden="true">
      <span>INTERACTIVE ORBIT / 360°</span>
    </div>
  `;
}


