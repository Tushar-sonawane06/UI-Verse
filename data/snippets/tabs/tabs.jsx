import React from 'react';

export default function tabs(){
  return (
    <>
      <main className="main-home">
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Tabs</span>
            </div>
            <h1 className="page-title">Tab Components</h1>
            <p className="page-desc">Modern, interactive tab sets crafted with minimal, accessible layouts and stunning aesthetics. Features classic layouts, iOS switches, circular selectors, and advanced interactive sandboxes.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-layer-group"></i> 16 Premium Styles</span>
              <span className="meta-badge"><i className="fa-solid fa-code"></i> HTML + CSS + JS</span>
              <span className="meta-badge"><i className="fa-solid fa-mobile-screen"></i> Responsive</span>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="tabs-hero-preview">
              <div className="thp-nav">
                <button className="thp-btn thp-active">HTML</button>
                <button className="thp-btn">CSS</button>
                <button className="thp-btn">JS</button>
              </div>
              <div className="thp-body">
                <div className="thp-code-line" style="width:75%;"></div>
                <div className="thp-code-line" style="width:90%;"></div>
                <div className="thp-code-line" style="width:50%;"></div>
                <div className="thp-code-line" style="width:85%;"></div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="tab-builder-container">
          <div className="builder-header">
            <h2 className="builder-title">Interactive Tab Sandbox</h2>
            <p className="builder-desc">Customize your layout settings, modify designs in real-time, and extract responsive modular code blocks instantly.</p>
          </div>
          <div className="builder-layout">
            <div className="builder-controls">
              <div className="control-group">
                <label className="control-label">Tab Theme Style</label>
                <select id="sandboxStyle" className="control-select" onchange="updateSandbox()">
                  <option value="pill">Pill Theme</option>
                  <option value="underline">Underline Accent</option>
                  <option value="card">Folder Card</option>
                  <option value="glass">Muted Glass</option>
                </select>
              </div>
              <div className="control-group">
                <label className="control-label">Accent Theme Color</label>
                <div className="control-color-wrap">
                  <input type="color" id="sandboxColor" className="control-color" value="#7b61ff" oninput="updateSandbox()" />
                  <span id="sandboxColorVal" className="slider-val">#7b61ff</span>
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Card Border Radius</label>
                <div className="control-slider-wrap">
                  <input type="range" id="sandboxRadius" className="control-slider" min="0" max="30" value="16" oninput="updateSandbox()" />
                  <span id="sandboxRadiusVal" className="slider-val">16px</span>
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Tab Spacing Gap</label>
                <div className="control-slider-wrap">
                  <input type="range" id="sandboxGap" className="control-slider" min="0" max="24" value="8" oninput="updateSandbox()" />
                  <span id="sandboxGapVal" className="slider-val">8px</span>
                </div>
              </div>
            </div>
            <div className="builder-preview-panel">
              <div className="preview-box">
                <div className="sandbox-tab-container" id="sandboxContainer">
                  <div className="sandbox-nav" id="sandboxNav" style="gap: 8px;">
                    <button className="sandbox-btn active" onclick="switchSandbox('sb-p1')">Explore</button>
                    <button className="sandbox-btn" onclick="switchSandbox('sb-p2')">Build</button>
                    <button className="sandbox-btn" onclick="switchSandbox('sb-p3')">Launch</button>
                  </div>
                  <div className="sandbox-content">
                    <div className="sandbox-panel active" id="sb-p1">
                      <p>Welcome to the custom visual selector sandbox. Play with controls to customize values.</p>
                    </div>
                    <div className="sandbox-panel" id="sb-p2">
                      <p>Add fields, expand columns, and design layouts inside this sandbox container preview.</p>
                    </div>
                    <div className="sandbox-panel" id="sb-p3">
                      <p>Copy compiled styles instantly and integrate them smoothly into your workspace.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-output-box">
                <button className="action-btn copy-btn" style="position: absolute; right: 16px; top: 16px; max-width: 120px; font-size: 12px; padding: 8px 12px;" onclick="copySandboxCode(this)">
                  <i className="fa-solid fa-copy"></i> Copy Code
                </button>
                <pre><code id="sandboxCode"></code></pre>
              </div>
            </div>
          </div>
        </div>
      
        <div className="filter-bar">
          <button className="filter-btn active" onclick="filterCards('all', this)">All Layouts</button>
          <button className="filter-btn" onclick="filterCards('basic', this)">Basic</button>
          <button className="filter-btn" onclick="filterCards('styled', this)">Styled</button>
          <button className="filter-btn" onclick="filterCards('advanced', this)">Advanced</button>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter tabs..." oninput="liveFilter(this.value)" />
          </div>
        </div>
      
        <div className="tabs-comp-grid" id="tabsGrid">
      
          <div className="component-card" data-name="classic default tab panel" data-cat="basic">
            <div className="card-top">
              <span className="card-label">Classic Tabs</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="demo-tabs" id="dt1">
                <div className="dt-nav">
                  <button className="dt-btn dt-active" onclick="switchTab('dt1','p1a')">HTML</button>
                  <button className="dt-btn" onclick="switchTab('dt1','p1b')">CSS</button>
                  <button className="dt-btn" onclick="switchTab('dt1','p1c')">JavaScript</button>
                </div>
                <div className="dt-content">
                  <div className="dt-panel dt-show" id="p1a">
                    <p>HTML — Build semantic layouts with reusable elements.</p>
                  </div>
                  <div className="dt-panel" id="p1b">
                    <p>CSS — Create responsive UI layouts with modern styling rules.</p>
                  </div>
                  <div className="dt-panel" id="p1c">
                    <p>JavaScript — Introduce logic transitions and dynamic states.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-desc">The basic tab design — active buttons acquire a solid contrast gradient backdrop with smooth panel switching.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc1', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc1" className="code-block"><code>&lt;div className="tabs"&gt;
        &lt;div className="tabs-nav"&gt;
          &lt;button className="tab-btn active" data-tab="html"&gt;HTML&lt;/button&gt;
          &lt;button className="tab-btn" data-tab="css"&gt;CSS&lt;/button&gt;
          &lt;button className="tab-btn" data-tab="js"&gt;JavaScript&lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="tab-panel active" id="html"&gt;HTML content here&lt;/div&gt;
        &lt;div className="tab-panel" id="css"&gt;CSS content here&lt;/div&gt;
        &lt;div className="tab-panel" id="js"&gt;JS content here&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="pill tab rounded chip" data-cat="styled">
            <div className="card-top">
              <span className="card-label">Pill Tabs</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="demo-tabs" id="dt2">
                <div className="dt-nav-pill">
                  <button className="dt-pill dt-pill-active" onclick="switchPill('dt2','pp2a','dt-pill')">Overview</button>
                  <button className="dt-pill" onclick="switchPill('dt2','pp2b','dt-pill')">Features</button>
                  <button className="dt-pill" onclick="switchPill('dt2','pp2c','dt-pill')">Reviews</button>
                </div>
                <div className="dt-content">
                  <div className="dt-panel dt-show" id="pp2a"><p>Overview — High level view of the product performance metrics.</p></div>
                  <div className="dt-panel" id="pp2b"><p>Features — Complete details on modular structures and configurations.</p></div>
                  <div className="dt-panel" id="pp2c"><p>Reviews — Star counts and feedback statements compiled from customers.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Capsule indicators contained inside a dark track wrapper — very clean and suitable for settings screens.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc2', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc2" className="code-block"><code>&lt;div className="pill-tabs"&gt;
        &lt;button className="pill active"&gt;Overview&lt;/button&gt;
        &lt;button className="pill"&gt;Features&lt;/button&gt;
        &lt;button className="pill"&gt;Reviews&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="underline tab line border bottom" data-cat="styled">
            <div className="card-top">
              <span className="card-label">Underline Tabs</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="demo-tabs" id="dt3">
                <div className="dt-nav-underline">
                  <button className="dt-uline dt-uline-active" onclick="switchPill('dt3','up3a','dt-uline')">Trending</button>
                  <button className="dt-uline" onclick="switchPill('dt3','up3b','dt-uline')">Latest</button>
                  <button className="dt-uline" onclick="switchPill('dt3','up3c','dt-uline')">Popular</button>
                </div>
                <div className="dt-content">
                  <div className="dt-panel dt-show" id="up3a"><p>Trending — Components seeing massive traffic logs this week.</p></div>
                  <div className="dt-panel" id="up3b"><p>Latest — Dynamic features published just a few moments ago.</p></div>
                  <div className="dt-panel" id="up3c"><p>Popular — Best rated UI pieces of all time in the directory.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Minimalist layout where active tabs draw a solid underline stroke. Ideal for enterprise dashboards.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc3', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc3" className="code-block"><code>&lt;div className="underline-tabs"&gt;
        &lt;button className="uline-btn active"&gt;Trending&lt;/button&gt;
        &lt;button className="uline-btn"&gt;Latest&lt;/button&gt;
        &lt;button className="uline-btn"&gt;Popular&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="icon tab emoji symbol label" data-cat="styled">
            <div className="card-top">
              <span className="card-label">Icon Tabs</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="demo-tabs" id="dt4">
                <div className="dt-nav">
                  <button className="dt-btn dt-icon-btn dt-active" onclick="switchTab('dt4','ip4a')">
                    <i className="fa-solid fa-house"></i> Home
                  </button>
                  <button className="dt-btn dt-icon-btn" onclick="switchTab('dt4','ip4b')">
                    <i className="fa-solid fa-chart-line"></i> Stats
                  </button>
                  <button className="dt-btn dt-icon-btn" onclick="switchTab('dt4','ip4c')">
                    <i className="fa-solid fa-gear"></i> Settings
                  </button>
                </div>
                <div className="dt-content">
                  <div className="dt-panel dt-show" id="ip4a"><p>Home — Back to your system welcome console and summary reports.</p></div>
                  <div className="dt-panel" id="ip4b"><p>Stats — Read live telemetry streams and compute metrics curves.</p></div>
                  <div className="dt-panel" id="ip4c"><p>Settings — Configure privacy tokens, layout scales, and themes.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Visual icons placed inside tab layouts to quickly communicate purposes and reduce layout clutter.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc4', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc4', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc4" className="code-block"><code>&lt;div className="tabs-nav"&gt;
        &lt;button className="tab-btn active"&gt;&lt;i className="fa-solid fa-house"&gt;&lt;/i&gt; Home&lt;/button&gt;
        &lt;button className="tab-btn"&gt;&lt;i className="fa-solid fa-chart-line"&gt;&lt;/i&gt; Stats&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="card border box tab panel" data-cat="styled">
            <div className="card-top">
              <span className="card-label">Card Tabs</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="demo-tabs" id="dt5">
                <div className="dt-nav-card">
                  <button className="dt-card-btn dt-card-active" onclick="switchPill('dt5','cp5a','dt-card-btn')">Profile</button>
                  <button className="dt-card-btn" onclick="switchPill('dt5','cp5b','dt-card-btn')">Portfolio</button>
                  <button className="dt-card-btn" onclick="switchPill('dt5','cp5c','dt-card-btn')">Contact</button>
                </div>
                <div className="dt-card-content">
                  <div className="dt-panel dt-show" id="cp5a"><p>Profile — Edit public card parameters, user handle, and bio text.</p></div>
                  <div className="dt-panel" id="cp5b"><p>Portfolio — Showcase finished illustrations, mockups, and client logs.</p></div>
                  <div className="dt-panel" id="cp5c"><p>Contact — Direct message boxes and calendar appointment triggers.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Simulates structural tab folder shapes where the active tab borders blend straight into content grids.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc5', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc5', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc5" className="code-block"><code>&lt;div className="tabs-nav-card"&gt;
        &lt;button className="card-tab active"&gt;Profile&lt;/button&gt;
        &lt;button className="card-tab"&gt;Portfolio&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="segmented control ios toggle tabs" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Segmented Tabs</span>
              <span className="card-tag tag-popular">New</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="seg-tabs" id="st8">
                <div className="seg-nav">
                  <button className="seg-btn seg-active" onclick="switchSeg('st8','sp8a')">Monthly</button>
                  <button className="seg-btn" onclick="switchSeg('st8','sp8b')">Quarterly</button>
                  <button className="seg-btn" onclick="switchSeg('st8','sp8c')">Yearly</button>
                </div>
                <div className="seg-content">
                  <div className="seg-panel seg-show" id="sp8a"><p>Monthly — Recur credit card logs on the 1st of every month.</p></div>
                  <div className="seg-panel" id="sp8b"><p>Quarterly — Batch billing schedules processed every 90 days.</p></div>
                  <div className="seg-panel" id="sp8c"><p>Yearly — Continuous annual plan saving up to 25% overheads.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">An iOS styled segment pill switcher. Features tight tracks and quick background shifting toggles.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc8', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc8', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc8" className="code-block"><code>&lt;div className="seg-nav"&gt;
        &lt;button className="seg-btn seg-active"&gt;Monthly&lt;/button&gt;
        &lt;button className="seg-btn"&gt;Quarterly&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="vertical sidebar tab left panel" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Vertical Tabs</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview tabs-preview">
              <div className="demo-vtabs" id="dv6">
                <div className="dv-nav">
                  <button className="dv-btn dv-active" onclick="switchVTab('dv6','vp6a')">
                    <i className="fa-solid fa-user"></i> Account
                  </button>
                  <button className="dv-btn" onclick="switchVTab('dv6','vp6b')">
                    <i className="fa-solid fa-lock"></i> Security
                  </button>
                  <button className="dv-btn" onclick="switchVTab('dv6','vp6c')">
                    <i className="fa-solid fa-bell"></i> Alerts
                  </button>
                  <button className="dv-btn" onclick="switchVTab('dv6','vp6d')">
                    <i className="fa-solid fa-credit-card"></i> Billing
                  </button>
                </div>
                <div className="dv-content">
                  <div className="dv-panel dv-show" id="vp6a"><strong>Account</strong><p>Manage your account name, active user credentials, and location settings.</p></div>
                  <div className="dv-panel" id="vp6b"><strong>Security</strong><p>Enforce double authentication steps, update password hashes, and inspect logins.</p></div>
                  <div className="dv-panel" id="vp6c"><strong>Alerts</strong><p>Toggle desktop notifications, daily email digests, and SMS metrics updates.</p></div>
                  <div className="dv-panel" id="vp6d"><strong>Billing</strong><p>Download invoices, update card details, or configure corporate billing targets.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Left vertical menu mapping to a wider right preview container. Highly suited for dashboard setting panels.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc6', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc6', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc6" className="code-block"><code>&lt;div className="demo-vtabs"&gt;
        &lt;div className="dv-nav"&gt;
          &lt;button className="dv-btn dv-active"&gt;Account&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="glass morphism floating blur tabs" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Glass Tabs</span>
              <span className="card-tag tag-trending">Modern</span>
            </div>
            <div className="card-preview glass-bg">
              <div className="glass-tabs" id="gt9">
                <div className="glass-nav">
                  <button className="glass-btn glass-active" onclick="switchGlass('gt9','gp9a')">Explore</button>
                  <button className="glass-btn" onclick="switchGlass('gt9','gp9b')">Discover</button>
                  <button className="glass-btn" onclick="switchGlass('gt9','gp9c')">Learn</button>
                </div>
                <div className="glass-content">
                  <div className="glass-panel glass-show" id="gp9a"><p>Explore — Travel across new layouts and find dynamic CSS tricks.</p></div>
                  <div className="glass-panel" id="gp9b"><p>Discover — Inspect hidden codes and learn how to align containers.</p></div>
                  <div className="glass-panel" id="gp9c"><p>Learn — Get direct access to video modules and professional books.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Glassmorphic backdrop tabs with blur filters and transparent borders, giving cards a floating feel.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc9', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc9', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc9" className="code-block"><code>&lt;div className="glass-tabs"&gt;
        &lt;div className="glass-nav"&gt;
          &lt;button className="glass-btn glass-active"&gt;Explore&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="gradient colorful tab dark themed" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Gradient Tabs</span>
              <span className="card-tag tag-trending">Trending</span>
            </div>
            <div className="card-preview dark-preview tabs-preview">
              <div className="demo-tabs" id="dt7">
                <div className="dt-nav-grad">
                  <button className="dt-grad dt-grad-active" onclick="switchPill('dt7','gp7a','dt-grad')">Design</button>
                  <button className="dt-grad" onclick="switchPill('dt7','gp7b','dt-grad')">Code</button>
                  <button className="dt-grad" onclick="switchPill('dt7','gp7c','dt-grad')">Deploy</button>
                </div>
                <div className="dt-content dt-content-dark">
                  <div className="dt-panel dt-show" id="gp7a"><p>Design — Craft beautiful design templates in Figma, then align shapes.</p></div>
                  <div className="dt-panel" id="gp7b"><p>Code — Translate static models into clean, responsive HTML, CSS sets.</p></div>
                  <div className="dt-panel" id="gp7c"><p>Deploy — Publish build maps directly into production clouds.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Stunning gradient selections tailored for high fidelity landing pages and gaming portfolios.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc7', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc7', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc7" className="code-block"><code>&lt;div className="grad-tabs"&gt;
        &lt;button className="grad-btn active"&gt;Design&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="animated slider indicator tabs smooth motion" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Sliding Tabs</span>
              <span className="card-tag tag-popular">Pro</span>
            </div>
            <div className="card-preview">
              <div className="slide-tabs" id="sl10">
                <div className="slide-nav">
                  <span className="slider"></span>
                  <button className="sl-btn sl-active" onclick="switchSlide(event,'sl10','0')">Home</button>
                  <button className="sl-btn" onclick="switchSlide(event,'sl10','1')">Projects</button>
                  <button className="sl-btn" onclick="switchSlide(event,'sl10','2')">Contact</button>
                </div>
                <div className="sl-content">
                  <div className="sl-panel show"><p>Home Section — Dashboard welcome grids and system activity logs.</p></div>
                  <div className="sl-panel"><p>Projects Section — Visual list of ongoing engineering sprints and tasks.</p></div>
                  <div className="sl-panel"><p>Contact Section — Secure messaging portals and client ticket consoles.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Animated sliding indicator. A responsive floating backdrop slides to highlight the active tab.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tc10', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tc10', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tc10" className="code-block"><code>&lt;div className="slide-tabs"&gt;
        &lt;div className="slide-nav"&gt;
          &lt;span className="slider"&gt;&lt;/span&gt;
          &lt;button className="sl-btn active"&gt;Home&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="cyberpunk glitch terminal console tabs" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Cyberpunk Tabs</span>
              <span className="card-tag tag-pro">Pro</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="cyber-tabs" id="ct1">
                <div className="cyber-nav">
                  <button className="cyber-btn active" onclick="switchCyber('ct1', 0)">/bin/html</button>
                  <button className="cyber-btn" onclick="switchCyber('ct1', 1)">/etc/css</button>
                  <button className="cyber-btn" onclick="switchCyber('ct1', 2)">/usr/js</button>
                </div>
                <div className="cyber-content">
                  <div className="cyber-panel active"><p>&gt; SYSTEM STATUS: HYPERTEXT LINK OK<br />&gt; COMPILING SEMANTIC NODES... DONE.</p></div>
                  <div className="cyber-panel"><p>&gt; LOADING STYLESHEET CORE... OK<br />&gt; EMITTING NEON GRID GRADIENTS... ACTIVE.</p></div>
                  <div className="cyber-panel"><p>&gt; BOOTING LOGIC ENG... STATUS 200<br />&gt; LISTENING TELEMETRY CHANNELS... ONLINE.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Neo-brutalist cyberpunk terminal styles. Click triggers custom glitch animations and cyber glowing borders.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tccy', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tccy', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tccy" className="code-block"><code>&lt;div className="cyber-tabs"&gt;
        &lt;div className="cyber-nav"&gt;
          &lt;button className="cyber-btn active"&gt;/bin/html&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="elastic spring organic active indicator tabs" data-cat="styled">
            <div className="card-top">
              <span className="card-label">Elastic Tabs</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview">
              <div className="elastic-tabs" id="et1">
                <div className="elastic-nav">
                  <button className="elastic-pill active" onclick="switchElastic('et1', 0)">Performance</button>
                  <button className="elastic-pill" onclick="switchElastic('et1', 1)">Aesthetics</button>
                  <button className="elastic-pill" onclick="switchElastic('et1', 2)">Utility</button>
                </div>
                <div className="elastic-content">
                  <div className="elastic-panel active"><p>Fast page responses, compressed images, and optimized scripting execution loops.</p></div>
                  <div className="elastic-panel"><p>Beautiful glass overlays, smooth transitions, custom curves, and HSL palettes.</p></div>
                  <div className="elastic-panel"><p>Modular components, flexible classes, clear indicators, and reusable styles.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Elastic spring effect. Active buttons expand with organic stretch animations when selected.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tcel', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tcel', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tcel" className="code-block"><code>&lt;div className="elastic-tabs"&gt;
        &lt;div className="elastic-nav"&gt;
          &lt;button className="elastic-pill active"&gt;Performance&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="recessed neumorphic glass tabs shadow inner" data-cat="basic">
            <div className="card-top">
              <span className="card-label">Recessed Tabs</span>
              <span className="card-tag tag-popular">Popular</span>
            </div>
            <div className="card-preview dark-preview">
              <div className="recessed-tabs" id="rt1">
                <div className="recessed-nav">
                  <button className="recessed-btn active" onclick="switchRecessed('rt1', 0)">Overview</button>
                  <button className="recessed-btn" onclick="switchRecessed('rt1', 1)">Changelog</button>
                  <button className="recessed-btn" onclick="switchRecessed('rt1', 2)">Integrations</button>
                </div>
                <div className="recessed-content">
                  <div className="recessed-panel active"><p>General performance metrics showing database access loops and active threads.</p></div>
                  <div className="recessed-panel"><p>Listing minor feature revisions, UI tweaks, library version bumps, and patches.</p></div>
                  <div className="recessed-panel"><p>Connect Slack, GitHub, Stripe, and Discord servers inside your main dashboard.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Features deep interior inset shadows that make active elements look physically recessed inside the dashboard frame.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tcre', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tcre', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tcre" className="code-block"><code>&lt;div className="recessed-tabs"&gt;
        &lt;div className="recessed-nav"&gt;
          &lt;button className="recessed-btn active"&gt;Overview&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="3d perspective card flip book tabs" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">3D Flip Tabs</span>
              <span className="card-tag tag-pro">Pro</span>
            </div>
            <div className="card-preview">
              <div className="perspective-tabs" id="pt1">
                <div className="perspective-nav">
                  <button className="perspective-btn active" onclick="switchPerspective('pt1', 0)">Database</button>
                  <button className="perspective-btn" onclick="switchPerspective('pt1', 1)">Server</button>
                  <button className="perspective-btn" onclick="switchPerspective('pt1', 2)">Frontend</button>
                </div>
                <div className="perspective-content">
                  <div className="perspective-panel active"><p>PostgreSQL nodes with cluster scaling and real-time replica streams.</p></div>
                  <div className="perspective-panel"><p>Node.js edge runtimes managing heavy visual file compression engines.</p></div>
                  <div className="perspective-panel"><p>Next.js dashboard utilizing highly responsive HSL layout systems.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Interactive perspective layouts. Tabs tilt and rotate in 3D coordinate space when hovered or selected.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tcpe', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tcpe', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tcpe" className="code-block"><code>&lt;div className="perspective-tabs"&gt;
        &lt;div className="perspective-nav"&gt;
          &lt;button className="perspective-btn active"&gt;Database&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="material design ripple click wave tabs" data-cat="styled">
            <div className="card-top">
              <span className="card-label">Ripple Tabs</span>
              <span className="card-tag tag-new">New</span>
            </div>
            <div className="card-preview">
              <div className="ripple-tabs" id="rp1">
                <div className="ripple-nav">
                  <button className="ripple-btn active" onclick="switchRipple(event, 'rp1', 0)">Analytics</button>
                  <button className="ripple-btn" onclick="switchRipple(event, 'rp1', 1)">Audience</button>
                  <button className="ripple-btn" onclick="switchRipple(event, 'rp1', 2)">Campaigns</button>
                </div>
                <div className="ripple-content">
                  <div className="ripple-panel active"><p>Review daily sessions counts, bounce rates, conversions, and exit rates.</p></div>
                  <div className="ripple-panel"><p>Compare returning visitors, geographic locales, browser versions, and devices.</p></div>
                  <div className="ripple-panel"><p>Manage active email marketing lists, referral triggers, and sponsorship slots.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Google Material style. Propagates a glowing ripple wave expanding outward from the cursor click point.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tcrp', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tcrp', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tcrp" className="code-block"><code>&lt;div className="ripple-tabs"&gt;
        &lt;div className="ripple-nav"&gt;
          &lt;button className="ripple-btn active"&gt;Analytics&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-name="circular dial wheel rotating selector tabs" data-cat="advanced">
            <div className="card-top">
              <span className="card-label">Dial Selector</span>
              <span className="card-tag tag-pro">Pro</span>
            </div>
            <div className="card-preview">
              <div className="dial-tabs" id="dl1">
                <div className="dial-wrapper">
                  <div className="dial-circle" id="dialCircle">
                    <button className="dial-btn active" onclick="switchDial(0, 0)" style="transform: rotate(0deg);"><i className="fa-solid fa-chart-pie"></i></button>
                    <button className="dial-btn" onclick="switchDial(1, 90)" style="transform: rotate(-90deg);"><i className="fa-solid fa-bell"></i></button>
                    <button className="dial-btn" onclick="switchDial(2, 180)" style="transform: rotate(-180deg);"><i className="fa-solid fa-gear"></i></button>
                    <button className="dial-btn" onclick="switchDial(3, 270)" style="transform: rotate(-270deg);"><i className="fa-solid fa-circle-question"></i></button>
                  </div>
                </div>
                <div className="dial-content">
                  <div className="dial-panel active"><p><strong>Dashboard</strong><br />Check live telemetry channels and monitor user databases in real-time.</p></div>
                  <div className="dial-panel"><p><strong>Notifications</strong><br />Review active emails, platform messages, security logs, and updates.</p></div>
                  <div className="dial-panel"><p><strong>Settings</strong><br />Configure dark profiles, HSL scales, responsive breakpoints, and filters.</p></div>
                  <div className="dial-panel"><p><strong>Help Center</strong><br />Read developer document sets, API models, and contact customer service.</p></div>
                </div>
              </div>
            </div>
            <p className="card-desc">Radial dialing system. Click rotations spin the dashed border wheel and reveal targeted panel messages.</p>
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('tcdl', this)"><i className="fa-solid fa-code"></i> View Code</button>
              <button className="action-btn copy-btn" onclick="copyCode('tcdl', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            </div>
            <pre id="tcdl" className="code-block"><code>&lt;div className="dial-tabs"&gt;
        &lt;div className="dial-wrapper"&gt;
          &lt;div className="dial-circle"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* =========================
       MODERN AI DASHBOARD TABS
      ========================= */}
      
      <div className="ai-tabs" id="aiTabs">
        <div className="ai-tabs-nav">
          <button className="ai-tab active" onclick="switchAITab('aiTabs',0)">
            <i className="fa-solid fa-chart-simple"></i>
            Analytics
          </button>
      
          <button className="ai-tab" onclick="switchAITab('aiTabs',1)">
            <i className="fa-solid fa-bolt"></i>
            Automation
          </button>
      
          <button className="ai-tab" onclick="switchAITab('aiTabs',2)">
            <i className="fa-solid fa-shield-halved"></i>
            Security
          </button>
      
          <button className="ai-tab" onclick="switchAITab('aiTabs',3)">
            <i className="fa-solid fa-layer-group"></i>
            Integrations
          </button>
        </div>
      
        <div className="ai-tabs-content">
          <div className="ai-panel active">
            <h3>Analytics Dashboard</h3>
            <p>Track real-time user activity, engagement metrics, bounce rates, and performance insights.</p>
          </div>
      
          <div className="ai-panel">
            <h3>Workflow Automation</h3>
            <p>Create intelligent automations, schedule workflows, and optimize productivity pipelines.</p>
          </div>
      
          <div className="ai-panel">
            <h3>Security Center</h3>
            <p>Enable advanced threat monitoring, access policies, encrypted sessions, and audit reports.</p>
          </div>
      
          <div className="ai-panel">
            <h3>Platform Integrations</h3>
            <p>Connect GitHub, Slack, Stripe, Discord, and cloud services with seamless APIs.</p>
          </div>
        </div>
      </div>
      
        </div>
      </main>
    </>
  );
}
