import React from 'react';

export default function toggles(){
  return (
    <>
      <main className="main-home">
      
        <section className="page-hero">
          <div className="hero-left">
            <h1 className="page-title">Toggle Components</h1>
            <p className="page-desc">Modern toggles, switches and checkboxes designed with pure CSS. Lightweight and easy to integrate.</p>
            
            <div className="page-meta">
              <span className="meta-badge">
                <i className="fa-solid fa-layer-group"></i>
                14 Components
              </span>
      
              <span className="meta-badge">
                <i className="fa-solid fa-code"></i>
                CSS Only
              </span>
      
              <span className="meta-badge">
                <i className="fa-solid fa-bolt"></i>
                No JavaScript Needed
              </span>
            </div>
          </div>
      
          <div className="toggle-hero-preview">
      
            <div className="thp-row">
              <div className="toggle-wrap toggle-classic">
                <input type="checkbox" id="hero1" checked />
                <label for="hero1"></label>
              </div>
              <span>Classic</span>
            </div>
      
            <div className="thp-row">
              <div className="toggle-wrap toggle-ios">
                <input type="checkbox" id="hero2" checked />
                <label for="hero2"></label>
              </div>
              <span>iOS</span>
            </div>
      
            <div className="thp-row">
              <div className="toggle-wrap toggle-neon">
                <input type="checkbox" id="hero3" checked />
                <label for="hero3"></label>
              </div>
              <span>Neon</span>
            </div>
      
          </div>
      
        </section>
      
        {/* FILTER */}
      
        <div className="filter-bar">
      
          <button className="filter-btn active" onclick="filterCards('all', this)">
            All
          </button>
      
          <button className="filter-btn" onclick="filterCards('simple', this)">
            Simple
          </button>
      
          <button className="filter-btn" onclick="filterCards('styled', this)">
            Styled
          </button>
      
          <button className="filter-btn" onclick="filterCards('themed', this)">
            Themed
          </button>
      
        </div>
      
        {/* GRID */}
      
        <main className="toggles-grid">
      
          {/* CLASSIC */}
      
          <div
            className="component-card"
            data-cat="simple"
            data-name="classic toggle"
          >
      
            <div className="card-top">
              <span className="card-label">Classic Toggle</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
      
            <div className="card-preview">
      
              <div className="toggle-demo-rows">
      
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-classic">
                    <input type="checkbox" id="t1" />
                    <label for="t1"></label>
                  </div>
      
                  <span className="toggle-label-text">
                    Disabled
                  </span>
                </div>
      
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-classic">
                    <input type="checkbox" id="t2" checked />
                    <label for="t2"></label>
                  </div>
      
                  <span className="toggle-label-text">
                    Enabled
                  </span>
                </div>
      
              </div>
      
            </div>
      
            <p className="card-desc">
              Smooth animated classic toggle with modern purple accent.
            </p>
      
            <div className="actions">
      
              <button
                className="action-btn view-btn"
                onclick="toggleCode('code1', this)"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </button>
      
              <button
                className="action-btn copy-btn"
                onclick="copyCode('code1', this)"
              >
                <i className="fa-solid fa-copy"></i>
                Copy
              </button>
      
            </div>
      
            <pre
              id="code1"
              className="code-block"
            ><code>.toggle-classic input:checked + label{
        background:#6c5ce7;
      }</code></pre>
      
          </div>
      
          {/* IOS */}
      
          <div
            className="component-card"
            data-cat="simple"
            data-name="ios toggle"
          >
      
            <div className="card-top">
              <span className="card-label">iOS Toggle</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
      
            <div className="card-preview">
      
              <div className="toggle-demo-rows">
      
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-ios">
                    <input type="checkbox" id="ios1" checked />
                    <label for="ios1"></label>
                  </div>
      
                  <span className="toggle-label-text">
                    Wi-Fi
                  </span>
                </div>
      
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-ios">
                    <input type="checkbox" id="ios2" />
                    <label for="ios2"></label>
                  </div>
      
                  <span className="toggle-label-text">
                    Bluetooth
                  </span>
                </div>
      
                {/* FIXED LABEL */}
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-ios">
                    <input type="checkbox" id="ios3" checked />
                    <label for="ios3"></label>
                  </div>
      
                  <span className="toggle-label-text">
                    Notifications
                  </span>
                </div>
      
              </div>
      
            </div>
      
            <p className="card-desc">
              Apple-inspired smooth iOS style switch.
            </p>
      
            <div className="actions">
      
              <button
                className="action-btn view-btn"
                onclick="toggleCode('code2', this)"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </button>
      
              <button
                className="action-btn copy-btn"
                onclick="copyCode('code2', this)"
              >
                <i className="fa-solid fa-copy"></i>
                Copy
              </button>
      
            </div>
      
            <pre
              id="code2"
              className="code-block"
            ><code>.toggle-ios input:checked + label{
        background:#34c759;
      }</code></pre>
      
          </div>
      
          {/* NEON */}
      
          <div
            className="component-card"
            data-cat="themed"
            data-name="neon toggle"
          >
      
            <div className="card-top">
              <span className="card-label">Neon Toggle</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
      
            <div className="card-preview dark-preview">
      
              <div className="toggle-demo-rows">
      
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-neon">
                    <input type="checkbox" id="neon1" />
                    <label for="neon1"></label>
                  </div>
      
                  <span
                    className="toggle-label-text"
                    style="color:#a78bfa;"
                  >
                    Off
                  </span>
                </div>
      
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-neon">
                    <input type="checkbox" id="neon2" checked />
                    <label for="neon2"></label>
                  </div>
      
                  <span
                    className="toggle-label-text"
                    style="color:#a78bfa;"
                  >
                    Glow
                  </span>
                </div>
      
              </div>
      
            </div>
      
            <p className="card-desc">
              Glowing cyberpunk neon switch for dark UIs.
            </p>
      
            <div className="actions">
      
              <button
                className="action-btn view-btn"
                onclick="toggleCode('code3', this)"
              >
                <i className="fa-solid fa-code"></i>
                View Code
              </button>
      
              <button
                className="action-btn copy-btn"
                onclick="copyCode('code3', this)"
              >
                <i className="fa-solid fa-copy"></i>
                Copy
              </button>
      
            </div>
      
            <pre
              id="code3"
              className="code-block"
            ><code>.toggle-neon input:checked + label{
        box-shadow:0 0 16px rgba(167,139,250,.7);
      }</code></pre>
      
          </div>
      
          <div
            className="component-card"
            data-cat="simple"
            data-name="text toggle"
          >
            <div className="card-top">
              <span className="card-label">Text Toggle</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-text">
                    <input type="checkbox" id="text-t1" />
                    <label for="text-t1"></label>
                  </div>
                  <span className="toggle-label-text">Switch Mode</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A simple toggle featuring distinct internal text displays for state representation.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code4', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code4', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code4" className="code-block"><code>.toggle-text input:checked + label::before{
        content:"ON";
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="simple"
            data-name="flat toggle"
          >
            <div className="card-top">
              <span className="card-label">Flat Toggle</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-flat">
                    <input type="checkbox" id="flat-t1" />
                    <label for="flat-t1"></label>
                  </div>
                  <span className="toggle-label-text">Selectable option</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A minimal and modern flat switch featuring a bright coral background color when active.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code5', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code5', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code5" className="code-block"><code>.toggle-flat input:checked + label{
        background:#ff6b6b;
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="styled"
            data-name="gradient toggle"
          >
            <div className="card-top">
              <span className="card-label">Gradient Toggle</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-gradient">
                    <input type="checkbox" id="grad-t1" checked />
                    <label for="grad-t1"></label>
                  </div>
                  <span className="toggle-label-text">Gradient transition</span>
                </div>
              </div>
            </div>
            <p className="card-desc">An elegant styled toggle utilizing a vivid dual-color gradient overlay when enabled.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code6', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code6', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code6" className="code-block"><code>.toggle-gradient input:checked + label{
        background:linear-gradient(90deg, #eb6835, #6c5ce7);
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="styled"
            data-name="icon toggle"
          >
            <div className="card-top">
              <span className="card-label">Icon Toggle</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-icon">
                    <input type="checkbox" id="icon-t1" />
                    <label for="icon-t1">
                      <span className="icon-thumb"></span>
                      <i className="fa-solid fa-sun" style="font-size:12px; color:#f59e0b; z-index:1;"></i>
                      <i className="fa-solid fa-moon" style="font-size:12px; color:#94a3b8; z-index:1;"></i>
                    </label>
                  </div>
                  <span className="toggle-label-text">Active mode switch</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A beautiful design displaying a sun and moon representation for day and night transitions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code7', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code7', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code7" className="code-block"><code>.toggle-icon input:checked + label .icon-thumb{
        transform:translateX(36px);
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="simple"
            data-name="outline toggle"
          >
            <div className="card-top">
              <span className="card-label">Outline Toggle</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-outline">
                    <input type="checkbox" id="out-t1" checked />
                    <label for="out-t1"></label>
                  </div>
                  <span className="toggle-label-text">Outline mode</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A clean hollow border toggle switch featuring neat color transformations on state changes.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code8', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code8', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code8" className="code-block"><code>.toggle-outline input:checked + label{
        border-color:#eb6835;
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="simple"
            data-name="large toggle"
          >
            <div className="card-top">
              <span className="card-label">Large Toggle</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-large">
                    <input type="checkbox" id="large-t1" />
                    <label for="large-t1"></label>
                  </div>
                  <span className="toggle-label-text">Enhanced sizing</span>
                </div>
              </div>
            </div>
            <p className="card-desc">An oversized responsive toggle widget intended to maximize accessibility and ease of use.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code9', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code9', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code9" className="code-block"><code>.toggle-large input:checked + label::after{
        transform:translateX(36px);
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="themed"
            data-name="cyberpunk toggle"
          >
            <div className="card-top">
              <span className="card-label">Cyberpunk Toggle</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-cyberpunk">
                    <input type="checkbox" id="cyber-t1" checked />
                    <label for="cyber-t1"></label>
                  </div>
                  <span className="toggle-label-text" style="color:#00f2fe;">SYS_ACTIVE</span>
                </div>
              </div>
            </div>
            <p className="card-desc">Futuristic theme toggle utilizing neon cyan, glowing hot pink, and digital corner clips.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code10', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code10', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code10" className="code-block"><code>.toggle-cyberpunk input:checked + label{
        border-color:#ff007f;
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="styled"
            data-name="3d tactile toggle"
          >
            <div className="card-top">
              <span className="card-label">3D Tactile Toggle</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-3d">
                    <input type="checkbox" id="tactile-t1" />
                    <label for="tactile-t1"></label>
                  </div>
                  <span className="toggle-label-text">Tactile Switch</span>
                </div>
              </div>
            </div>
            <p className="card-desc">Highly polished three-dimensional physical switch replicating tactile pushing effects.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code11', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code11', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code11" className="code-block"><code>.toggle-3d label{
        box-shadow:inset 0 3px 8px rgba(0, 0, 0, 0.8);
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="styled"
            data-name="liquid jelly toggle"
          >
            <div className="card-top">
              <span className="card-label">Liquid Jelly Toggle</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-liquid">
                    <input type="checkbox" id="liquid-t1" checked />
                    <label for="liquid-t1"></label>
                  </div>
                  <span className="toggle-label-text">Jelly bounce</span>
                </div>
              </div>
            </div>
            <p className="card-desc">An organic toggle exhibiting elastic squash and stretch jelly physics on transitions.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code12', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code12', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code12" className="code-block"><code>.toggle-liquid input:checked + label::after{
        animation: jelly-bounce-css 0.4s linear;
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="themed"
            data-name="day/night solar toggle"
          >
            <div className="card-top">
              <span className="card-label">Day/Night Solar</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-solar">
                    <input type="checkbox" id="solar-t1" />
                    <label for="solar-t1">
                      <span className="solar-stars"></span>
                    </label>
                  </div>
                  <span className="toggle-label-text" style="color:#e2e8f0;">Astronomy Toggle</span>
                </div>
              </div>
            </div>
            <p className="card-desc">Advanced theme transition switch showing a detailed glowing sun and cratered moon.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code13', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code13', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code13" className="code-block"><code>.toggle-solar input:checked + label .solar-stars{
        opacity:1;
      }</code></pre>
          </div>
      
          <div
            className="component-card"
            data-cat="themed"
            data-name="retro arcade toggle"
          >
            <div className="card-top">
              <span className="card-label">Retro Arcade</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-arcade">
                    <input type="checkbox" id="arcade-t1" checked />
                    <label for="arcade-t1">
                      <span className="arcade-knob"></span>
                    </label>
                  </div>
                  <span className="toggle-label-text" style="color:#22c55e;">JOY_STATE_OK</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A classic red arcade joystick switcher tilting dynamically with organic 3D rotations.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code14', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code14', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code14" className="code-block"><code>.toggle-arcade input:checked + label .arcade-knob{
        transform:rotate(15deg);
      }</code></pre>
          </div>
      
          {/* NEW: Glass Toggle */}
          <div className="component-card" data-cat="styled" data-name="glass toggle">
            <div className="card-top">
              <span className="card-label">Glass Toggle</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-glass">
                    <input type="checkbox" id="glass-t1" />
                    <label for="glass-t1"></label>
                  </div>
                  <span className="toggle-label-text">Frosted UI</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A modern frosted glass style toggle with subtle blur and bright active gradient.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code15', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code15', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code15" className="code-block"><code>.toggle-glass input:checked + label{ background:linear-gradient(90deg,#6c5ce7,#eb6835); }</code></pre>
          </div>
      
          {/* NEW: Retro Slider */}
          <div className="component-card" data-cat="themed" data-name="retro slider">
            <div className="card-top">
              <span className="card-label">Retro Slider</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-retro">
                    <input type="checkbox" id="retro-t1" />
                    <label for="retro-t1"></label>
                  </div>
                  <span className="toggle-label-text" style="color:#e2e8f0;">Retro Mode</span>
                </div>
              </div>
            </div>
            <p className="card-desc">Classic retro slider with bold knob and strong color transitions for status indication.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code16', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code16', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code16" className="code-block"><code>.toggle-retro input:checked + label::after{ transform:translateX(30px); }</code></pre>
          </div>
      
          {/* NEW: Minimal Dot */}
          <div className="component-card" data-cat="simple" data-name="minimal dot">
            <div className="card-top">
              <span className="card-label">Minimal Dot</span>
              <span className="card-tag tag-essential">Essential</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-minimal">
                    <input type="checkbox" id="min-t1" />
                    <label for="min-t1"></label>
                  </div>
                  <span className="toggle-label-text">Compact</span>
                </div>
              </div>
            </div>
            <p className="card-desc">Tiny, unobtrusive toggle designed for space-constrained UIs.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code17', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code17', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code17" className="code-block"><code>.toggle-minimal input:checked + label{ background:#34d399; }</code></pre>
          </div>
      
          {/* NEW: Swirl Toggle */}
          <div className="component-card" data-cat="styled" data-name="swirl toggle">
            <div className="card-top">
              <span className="card-label">Swirl Toggle</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview">
              <div className="toggle-demo-rows">
                <div className="toggle-demo-row">
                  <div className="toggle-wrap toggle-swirl">
                    <input type="checkbox" id="swirl-t1" />
                    <label for="swirl-t1"></label>
                  </div>
                  <span className="toggle-label-text">Animated</span>
                </div>
              </div>
            </div>
            <p className="card-desc">A playful animated knob that rotates while sliding, adding motion personality.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code18', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code18', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre id="code18" className="code-block"><code>.toggle-swirl input:checked + label::after{ transform:translateX(34px) rotate(360deg); }</code></pre>
          </div>
      
        </main>
    </>
  );
}
