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
                9 Components
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
      
        </main>
    </>
  );
}
