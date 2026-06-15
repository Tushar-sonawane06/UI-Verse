<template>
<main class="main-home">
  <div class="page-hero">
    <div class="page-hero-left">
      <div class="breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <span>Tabs</span>
      </div>
      <h1 class="page-title">Tab Components</h1>
      <p class="page-desc">Modern, interactive tab sets crafted with minimal, accessible layouts and stunning aesthetics. Features classic layouts, iOS switches, circular selectors, and advanced interactive sandboxes.</p>
      <div class="page-meta">
        <span class="meta-badge"><i class="fa-solid fa-layer-group"></i> 16 Premium Styles</span>
        <span class="meta-badge"><i class="fa-solid fa-code"></i> HTML + CSS + JS</span>
        <span class="meta-badge"><i class="fa-solid fa-mobile-screen"></i> Responsive</span>
      </div>
    </div>
    <div class="page-hero-right">
      <div class="tabs-hero-preview">
        <div class="thp-nav">
          <button class="thp-btn thp-active">HTML</button>
          <button class="thp-btn">CSS</button>
          <button class="thp-btn">JS</button>
        </div>
        <div class="thp-body">
          <div class="thp-code-line" style="width:75%;"></div>
          <div class="thp-code-line" style="width:90%;"></div>
          <div class="thp-code-line" style="width:50%;"></div>
          <div class="thp-code-line" style="width:85%;"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-builder-container">
    <div class="builder-header">
      <h2 class="builder-title">Interactive Tab Sandbox</h2>
      <p class="builder-desc">Customize your layout settings, modify designs in real-time, and extract responsive modular code blocks instantly.</p>
    </div>
    <div class="builder-layout">
      <div class="builder-controls">
        <div class="control-group">
          <label class="control-label">Tab Theme Style</label>
          <select id="sandboxStyle" class="control-select" onchange="updateSandbox()">
            <option value="pill">Pill Theme</option>
            <option value="underline">Underline Accent</option>
            <option value="card">Folder Card</option>
            <option value="glass">Muted Glass</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label">Accent Theme Color</label>
          <div class="control-color-wrap">
            <input type="color" id="sandboxColor" class="control-color" value="#7b61ff" oninput="updateSandbox()" />
            <span id="sandboxColorVal" class="slider-val">#7b61ff</span>
          </div>
        </div>
        <div class="control-group">
          <label class="control-label">Card Border Radius</label>
          <div class="control-slider-wrap">
            <input type="range" id="sandboxRadius" class="control-slider" min="0" max="30" value="16" oninput="updateSandbox()" />
            <span id="sandboxRadiusVal" class="slider-val">16px</span>
          </div>
        </div>
        <div class="control-group">
          <label class="control-label">Tab Spacing Gap</label>
          <div class="control-slider-wrap">
            <input type="range" id="sandboxGap" class="control-slider" min="0" max="24" value="8" oninput="updateSandbox()" />
            <span id="sandboxGapVal" class="slider-val">8px</span>
          </div>
        </div>
      </div>
      <div class="builder-preview-panel">
        <div class="preview-box">
          <div class="sandbox-tab-container" id="sandboxContainer">
            <div class="sandbox-nav" id="sandboxNav" style="gap: 8px;">
              <button class="sandbox-btn active" onclick="switchSandbox('sb-p1')">Explore</button>
              <button class="sandbox-btn" onclick="switchSandbox('sb-p2')">Build</button>
              <button class="sandbox-btn" onclick="switchSandbox('sb-p3')">Launch</button>
            </div>
            <div class="sandbox-content">
              <div class="sandbox-panel active" id="sb-p1">
                <p>Welcome to the custom visual selector sandbox. Play with controls to customize values.</p>
              </div>
              <div class="sandbox-panel" id="sb-p2">
                <p>Add fields, expand columns, and design layouts inside this sandbox container preview.</p>
              </div>
              <div class="sandbox-panel" id="sb-p3">
                <p>Copy compiled styles instantly and integrate them smoothly into your workspace.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="code-output-box">
          <button class="action-btn copy-btn" style="position: absolute; right: 16px; top: 16px; max-width: 120px; font-size: 12px; padding: 8px 12px;" onclick="copySandboxCode(this)">
            <i class="fa-solid fa-copy"></i> Copy Code
          </button>
          <pre><code id="sandboxCode"></code></pre>
        </div>
      </div>
    </div>
  </div>

  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterCards('all', this)">All Layouts</button>
    <button class="filter-btn" onclick="filterCards('basic', this)">Basic</button>
    <button class="filter-btn" onclick="filterCards('styled', this)">Styled</button>
    <button class="filter-btn" onclick="filterCards('advanced', this)">Advanced</button>
    <div class="filter-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter tabs..." oninput="liveFilter(this.value)" />
    </div>
  </div>

  <div class="tabs-comp-grid" id="tabsGrid">

    <div class="component-card" data-name="classic default tab panel" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Classic Tabs</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="demo-tabs" id="dt1">
          <div class="dt-nav">
            <button class="dt-btn dt-active" onclick="switchTab('dt1','p1a')">HTML</button>
            <button class="dt-btn" onclick="switchTab('dt1','p1b')">CSS</button>
            <button class="dt-btn" onclick="switchTab('dt1','p1c')">JavaScript</button>
          </div>
          <div class="dt-content">
            <div class="dt-panel dt-show" id="p1a">
              <p>HTML — Build semantic layouts with reusable elements.</p>
            </div>
            <div class="dt-panel" id="p1b">
              <p>CSS — Create responsive UI layouts with modern styling rules.</p>
            </div>
            <div class="dt-panel" id="p1c">
              <p>JavaScript — Introduce logic transitions and dynamic states.</p>
            </div>
          </div>
        </div>
      </div>
      <p class="card-desc">The basic tab design — active buttons acquire a solid contrast gradient backdrop with smooth panel switching.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc1', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc1" class="code-block"><code>&lt;div class="tabs"&gt;
  &lt;div class="tabs-nav"&gt;
    &lt;button class="tab-btn active" data-tab="html"&gt;HTML&lt;/button&gt;
    &lt;button class="tab-btn" data-tab="css"&gt;CSS&lt;/button&gt;
    &lt;button class="tab-btn" data-tab="js"&gt;JavaScript&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="tab-panel active" id="html"&gt;HTML content here&lt;/div&gt;
  &lt;div class="tab-panel" id="css"&gt;CSS content here&lt;/div&gt;
  &lt;div class="tab-panel" id="js"&gt;JS content here&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="pill tab rounded chip" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Pill Tabs</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="demo-tabs" id="dt2">
          <div class="dt-nav-pill">
            <button class="dt-pill dt-pill-active" onclick="switchPill('dt2','pp2a','dt-pill')">Overview</button>
            <button class="dt-pill" onclick="switchPill('dt2','pp2b','dt-pill')">Features</button>
            <button class="dt-pill" onclick="switchPill('dt2','pp2c','dt-pill')">Reviews</button>
          </div>
          <div class="dt-content">
            <div class="dt-panel dt-show" id="pp2a"><p>Overview — High level view of the product performance metrics.</p></div>
            <div class="dt-panel" id="pp2b"><p>Features — Complete details on modular structures and configurations.</p></div>
            <div class="dt-panel" id="pp2c"><p>Reviews — Star counts and feedback statements compiled from customers.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Capsule indicators contained inside a dark track wrapper — very clean and suitable for settings screens.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc2', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc2" class="code-block"><code>&lt;div class="pill-tabs"&gt;
  &lt;button class="pill active"&gt;Overview&lt;/button&gt;
  &lt;button class="pill"&gt;Features&lt;/button&gt;
  &lt;button class="pill"&gt;Reviews&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="underline tab line border bottom" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Underline Tabs</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="demo-tabs" id="dt3">
          <div class="dt-nav-underline">
            <button class="dt-uline dt-uline-active" onclick="switchPill('dt3','up3a','dt-uline')">Trending</button>
            <button class="dt-uline" onclick="switchPill('dt3','up3b','dt-uline')">Latest</button>
            <button class="dt-uline" onclick="switchPill('dt3','up3c','dt-uline')">Popular</button>
          </div>
          <div class="dt-content">
            <div class="dt-panel dt-show" id="up3a"><p>Trending — Components seeing massive traffic logs this week.</p></div>
            <div class="dt-panel" id="up3b"><p>Latest — Dynamic features published just a few moments ago.</p></div>
            <div class="dt-panel" id="up3c"><p>Popular — Best rated UI pieces of all time in the directory.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Minimalist layout where active tabs draw a solid underline stroke. Ideal for enterprise dashboards.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc3', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc3" class="code-block"><code>&lt;div class="underline-tabs"&gt;
  &lt;button class="uline-btn active"&gt;Trending&lt;/button&gt;
  &lt;button class="uline-btn"&gt;Latest&lt;/button&gt;
  &lt;button class="uline-btn"&gt;Popular&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="icon tab emoji symbol label" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Icon Tabs</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="demo-tabs" id="dt4">
          <div class="dt-nav">
            <button class="dt-btn dt-icon-btn dt-active" onclick="switchTab('dt4','ip4a')">
              <i class="fa-solid fa-house"></i> Home
            </button>
            <button class="dt-btn dt-icon-btn" onclick="switchTab('dt4','ip4b')">
              <i class="fa-solid fa-chart-line"></i> Stats
            </button>
            <button class="dt-btn dt-icon-btn" onclick="switchTab('dt4','ip4c')">
              <i class="fa-solid fa-gear"></i> Settings
            </button>
          </div>
          <div class="dt-content">
            <div class="dt-panel dt-show" id="ip4a"><p>Home — Back to your system welcome console and summary reports.</p></div>
            <div class="dt-panel" id="ip4b"><p>Stats — Read live telemetry streams and compute metrics curves.</p></div>
            <div class="dt-panel" id="ip4c"><p>Settings — Configure privacy tokens, layout scales, and themes.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Visual icons placed inside tab layouts to quickly communicate purposes and reduce layout clutter.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc4', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc4', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc4" class="code-block"><code>&lt;div class="tabs-nav"&gt;
  &lt;button class="tab-btn active"&gt;&lt;i class="fa-solid fa-house"&gt;&lt;/i&gt; Home&lt;/button&gt;
  &lt;button class="tab-btn"&gt;&lt;i class="fa-solid fa-chart-line"&gt;&lt;/i&gt; Stats&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="card border box tab panel" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Card Tabs</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="demo-tabs" id="dt5">
          <div class="dt-nav-card">
            <button class="dt-card-btn dt-card-active" onclick="switchPill('dt5','cp5a','dt-card-btn')">Profile</button>
            <button class="dt-card-btn" onclick="switchPill('dt5','cp5b','dt-card-btn')">Portfolio</button>
            <button class="dt-card-btn" onclick="switchPill('dt5','cp5c','dt-card-btn')">Contact</button>
          </div>
          <div class="dt-card-content">
            <div class="dt-panel dt-show" id="cp5a"><p>Profile — Edit public card parameters, user handle, and bio text.</p></div>
            <div class="dt-panel" id="cp5b"><p>Portfolio — Showcase finished illustrations, mockups, and client logs.</p></div>
            <div class="dt-panel" id="cp5c"><p>Contact — Direct message boxes and calendar appointment triggers.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Simulates structural tab folder shapes where the active tab borders blend straight into content grids.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc5', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc5', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc5" class="code-block"><code>&lt;div class="tabs-nav-card"&gt;
  &lt;button class="card-tab active"&gt;Profile&lt;/button&gt;
  &lt;button class="card-tab"&gt;Portfolio&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="segmented control ios toggle tabs" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Segmented Tabs</span>
        <span class="card-tag tag-popular">New</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="seg-tabs" id="st8">
          <div class="seg-nav">
            <button class="seg-btn seg-active" onclick="switchSeg('st8','sp8a')">Monthly</button>
            <button class="seg-btn" onclick="switchSeg('st8','sp8b')">Quarterly</button>
            <button class="seg-btn" onclick="switchSeg('st8','sp8c')">Yearly</button>
          </div>
          <div class="seg-content">
            <div class="seg-panel seg-show" id="sp8a"><p>Monthly — Recur credit card logs on the 1st of every month.</p></div>
            <div class="seg-panel" id="sp8b"><p>Quarterly — Batch billing schedules processed every 90 days.</p></div>
            <div class="seg-panel" id="sp8c"><p>Yearly — Continuous annual plan saving up to 25% overheads.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">An iOS styled segment pill switcher. Features tight tracks and quick background shifting toggles.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc8', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc8', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc8" class="code-block"><code>&lt;div class="seg-nav"&gt;
  &lt;button class="seg-btn seg-active"&gt;Monthly&lt;/button&gt;
  &lt;button class="seg-btn"&gt;Quarterly&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="vertical sidebar tab left panel" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Vertical Tabs</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview tabs-preview">
        <div class="demo-vtabs" id="dv6">
          <div class="dv-nav">
            <button class="dv-btn dv-active" onclick="switchVTab('dv6','vp6a')">
              <i class="fa-solid fa-user"></i> Account
            </button>
            <button class="dv-btn" onclick="switchVTab('dv6','vp6b')">
              <i class="fa-solid fa-lock"></i> Security
            </button>
            <button class="dv-btn" onclick="switchVTab('dv6','vp6c')">
              <i class="fa-solid fa-bell"></i> Alerts
            </button>
            <button class="dv-btn" onclick="switchVTab('dv6','vp6d')">
              <i class="fa-solid fa-credit-card"></i> Billing
            </button>
          </div>
          <div class="dv-content">
            <div class="dv-panel dv-show" id="vp6a"><strong>Account</strong><p>Manage your account name, active user credentials, and location settings.</p></div>
            <div class="dv-panel" id="vp6b"><strong>Security</strong><p>Enforce double authentication steps, update password hashes, and inspect logins.</p></div>
            <div class="dv-panel" id="vp6c"><strong>Alerts</strong><p>Toggle desktop notifications, daily email digests, and SMS metrics updates.</p></div>
            <div class="dv-panel" id="vp6d"><strong>Billing</strong><p>Download invoices, update card details, or configure corporate billing targets.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Left vertical menu mapping to a wider right preview container. Highly suited for dashboard setting panels.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc6', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc6', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc6" class="code-block"><code>&lt;div class="demo-vtabs"&gt;
  &lt;div class="dv-nav"&gt;
    &lt;button class="dv-btn dv-active"&gt;Account&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="glass morphism floating blur tabs" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Glass Tabs</span>
        <span class="card-tag tag-trending">Modern</span>
      </div>
      <div class="card-preview glass-bg">
        <div class="glass-tabs" id="gt9">
          <div class="glass-nav">
            <button class="glass-btn glass-active" onclick="switchGlass('gt9','gp9a')">Explore</button>
            <button class="glass-btn" onclick="switchGlass('gt9','gp9b')">Discover</button>
            <button class="glass-btn" onclick="switchGlass('gt9','gp9c')">Learn</button>
          </div>
          <div class="glass-content">
            <div class="glass-panel glass-show" id="gp9a"><p>Explore — Travel across new layouts and find dynamic CSS tricks.</p></div>
            <div class="glass-panel" id="gp9b"><p>Discover — Inspect hidden codes and learn how to align containers.</p></div>
            <div class="glass-panel" id="gp9c"><p>Learn — Get direct access to video modules and professional books.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Glassmorphic backdrop tabs with blur filters and transparent borders, giving cards a floating feel.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc9', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc9', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc9" class="code-block"><code>&lt;div class="glass-tabs"&gt;
  &lt;div class="glass-nav"&gt;
    &lt;button class="glass-btn glass-active"&gt;Explore&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="gradient colorful tab dark themed" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Gradient Tabs</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>
      <div class="card-preview dark-preview tabs-preview">
        <div class="demo-tabs" id="dt7">
          <div class="dt-nav-grad">
            <button class="dt-grad dt-grad-active" onclick="switchPill('dt7','gp7a','dt-grad')">Design</button>
            <button class="dt-grad" onclick="switchPill('dt7','gp7b','dt-grad')">Code</button>
            <button class="dt-grad" onclick="switchPill('dt7','gp7c','dt-grad')">Deploy</button>
          </div>
          <div class="dt-content dt-content-dark">
            <div class="dt-panel dt-show" id="gp7a"><p>Design — Craft beautiful design templates in Figma, then align shapes.</p></div>
            <div class="dt-panel" id="gp7b"><p>Code — Translate static models into clean, responsive HTML, CSS sets.</p></div>
            <div class="dt-panel" id="gp7c"><p>Deploy — Publish build maps directly into production clouds.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Stunning gradient selections tailored for high fidelity landing pages and gaming portfolios.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc7', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc7', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc7" class="code-block"><code>&lt;div class="grad-tabs"&gt;
  &lt;button class="grad-btn active"&gt;Design&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="animated slider indicator tabs smooth motion" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Sliding Tabs</span>
        <span class="card-tag tag-popular">Pro</span>
      </div>
      <div class="card-preview">
        <div class="slide-tabs" id="sl10">
          <div class="slide-nav">
            <span class="slider"></span>
            <button class="sl-btn sl-active" onclick="switchSlide(event,'sl10','0')">Home</button>
            <button class="sl-btn" onclick="switchSlide(event,'sl10','1')">Projects</button>
            <button class="sl-btn" onclick="switchSlide(event,'sl10','2')">Contact</button>
          </div>
          <div class="sl-content">
            <div class="sl-panel show"><p>Home Section — Dashboard welcome grids and system activity logs.</p></div>
            <div class="sl-panel"><p>Projects Section — Visual list of ongoing engineering sprints and tasks.</p></div>
            <div class="sl-panel"><p>Contact Section — Secure messaging portals and client ticket consoles.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Animated sliding indicator. A responsive floating backdrop slides to highlight the active tab.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tc10', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tc10', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tc10" class="code-block"><code>&lt;div class="slide-tabs"&gt;
  &lt;div class="slide-nav"&gt;
    &lt;span class="slider"&gt;&lt;/span&gt;
    &lt;button class="sl-btn active"&gt;Home&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="cyberpunk glitch terminal console tabs" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Cyberpunk Tabs</span>
        <span class="card-tag tag-pro">Pro</span>
      </div>
      <div class="card-preview dark-preview">
        <div class="cyber-tabs" id="ct1">
          <div class="cyber-nav">
            <button class="cyber-btn active" onclick="switchCyber('ct1', 0)">/bin/html</button>
            <button class="cyber-btn" onclick="switchCyber('ct1', 1)">/etc/css</button>
            <button class="cyber-btn" onclick="switchCyber('ct1', 2)">/usr/js</button>
          </div>
          <div class="cyber-content">
            <div class="cyber-panel active"><p>&gt; SYSTEM STATUS: HYPERTEXT LINK OK<br>&gt; COMPILING SEMANTIC NODES... DONE.</p></div>
            <div class="cyber-panel"><p>&gt; LOADING STYLESHEET CORE... OK<br>&gt; EMITTING NEON GRID GRADIENTS... ACTIVE.</p></div>
            <div class="cyber-panel"><p>&gt; BOOTING LOGIC ENG... STATUS 200<br>&gt; LISTENING TELEMETRY CHANNELS... ONLINE.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Neo-brutalist cyberpunk terminal styles. Click triggers custom glitch animations and cyber glowing borders.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tccy', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tccy', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tccy" class="code-block"><code>&lt;div class="cyber-tabs"&gt;
  &lt;div class="cyber-nav"&gt;
    &lt;button class="cyber-btn active"&gt;/bin/html&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="elastic spring organic active indicator tabs" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Elastic Tabs</span>
        <span class="card-tag tag-new">New</span>
      </div>
      <div class="card-preview">
        <div class="elastic-tabs" id="et1">
          <div class="elastic-nav">
            <button class="elastic-pill active" onclick="switchElastic('et1', 0)">Performance</button>
            <button class="elastic-pill" onclick="switchElastic('et1', 1)">Aesthetics</button>
            <button class="elastic-pill" onclick="switchElastic('et1', 2)">Utility</button>
          </div>
          <div class="elastic-content">
            <div class="elastic-panel active"><p>Fast page responses, compressed images, and optimized scripting execution loops.</p></div>
            <div class="elastic-panel"><p>Beautiful glass overlays, smooth transitions, custom curves, and HSL palettes.</p></div>
            <div class="elastic-panel"><p>Modular components, flexible classes, clear indicators, and reusable styles.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Elastic spring effect. Active buttons expand with organic stretch animations when selected.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tcel', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tcel', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tcel" class="code-block"><code>&lt;div class="elastic-tabs"&gt;
  &lt;div class="elastic-nav"&gt;
    &lt;button class="elastic-pill active"&gt;Performance&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="recessed neumorphic glass tabs shadow inner" data-cat="basic">
      <div class="card-top">
        <span class="card-label">Recessed Tabs</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview dark-preview">
        <div class="recessed-tabs" id="rt1">
          <div class="recessed-nav">
            <button class="recessed-btn active" onclick="switchRecessed('rt1', 0)">Overview</button>
            <button class="recessed-btn" onclick="switchRecessed('rt1', 1)">Changelog</button>
            <button class="recessed-btn" onclick="switchRecessed('rt1', 2)">Integrations</button>
          </div>
          <div class="recessed-content">
            <div class="recessed-panel active"><p>General performance metrics showing database access loops and active threads.</p></div>
            <div class="recessed-panel"><p>Listing minor feature revisions, UI tweaks, library version bumps, and patches.</p></div>
            <div class="recessed-panel"><p>Connect Slack, GitHub, Stripe, and Discord servers inside your main dashboard.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Features deep interior inset shadows that make active elements look physically recessed inside the dashboard frame.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tcre', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tcre', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tcre" class="code-block"><code>&lt;div class="recessed-tabs"&gt;
  &lt;div class="recessed-nav"&gt;
    &lt;button class="recessed-btn active"&gt;Overview&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="3d perspective card flip book tabs" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">3D Flip Tabs</span>
        <span class="card-tag tag-pro">Pro</span>
      </div>
      <div class="card-preview">
        <div class="perspective-tabs" id="pt1">
          <div class="perspective-nav">
            <button class="perspective-btn active" onclick="switchPerspective('pt1', 0)">Database</button>
            <button class="perspective-btn" onclick="switchPerspective('pt1', 1)">Server</button>
            <button class="perspective-btn" onclick="switchPerspective('pt1', 2)">Frontend</button>
          </div>
          <div class="perspective-content">
            <div class="perspective-panel active"><p>PostgreSQL nodes with cluster scaling and real-time replica streams.</p></div>
            <div class="perspective-panel"><p>Node.js edge runtimes managing heavy visual file compression engines.</p></div>
            <div class="perspective-panel"><p>Next.js dashboard utilizing highly responsive HSL layout systems.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Interactive perspective layouts. Tabs tilt and rotate in 3D coordinate space when hovered or selected.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tcpe', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tcpe', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tcpe" class="code-block"><code>&lt;div class="perspective-tabs"&gt;
  &lt;div class="perspective-nav"&gt;
    &lt;button class="perspective-btn active"&gt;Database&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="material design ripple click wave tabs" data-cat="styled">
      <div class="card-top">
        <span class="card-label">Ripple Tabs</span>
        <span class="card-tag tag-new">New</span>
      </div>
      <div class="card-preview">
        <div class="ripple-tabs" id="rp1">
          <div class="ripple-nav">
            <button class="ripple-btn active" onclick="switchRipple(event, 'rp1', 0)">Analytics</button>
            <button class="ripple-btn" onclick="switchRipple(event, 'rp1', 1)">Audience</button>
            <button class="ripple-btn" onclick="switchRipple(event, 'rp1', 2)">Campaigns</button>
          </div>
          <div class="ripple-content">
            <div class="ripple-panel active"><p>Review daily sessions counts, bounce rates, conversions, and exit rates.</p></div>
            <div class="ripple-panel"><p>Compare returning visitors, geographic locales, browser versions, and devices.</p></div>
            <div class="ripple-panel"><p>Manage active email marketing lists, referral triggers, and sponsorship slots.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Google Material style. Propagates a glowing ripple wave expanding outward from the cursor click point.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tcrp', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tcrp', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tcrp" class="code-block"><code>&lt;div class="ripple-tabs"&gt;
  &lt;div class="ripple-nav"&gt;
    &lt;button class="ripple-btn active"&gt;Analytics&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-name="circular dial wheel rotating selector tabs" data-cat="advanced">
      <div class="card-top">
        <span class="card-label">Dial Selector</span>
        <span class="card-tag tag-pro">Pro</span>
      </div>
      <div class="card-preview">
        <div class="dial-tabs" id="dl1">
          <div class="dial-wrapper">
            <div class="dial-circle" id="dialCircle">
              <button class="dial-btn active" onclick="switchDial(0, 0)" style="transform: rotate(0deg);"><i class="fa-solid fa-chart-pie"></i></button>
              <button class="dial-btn" onclick="switchDial(1, 90)" style="transform: rotate(-90deg);"><i class="fa-solid fa-bell"></i></button>
              <button class="dial-btn" onclick="switchDial(2, 180)" style="transform: rotate(-180deg);"><i class="fa-solid fa-gear"></i></button>
              <button class="dial-btn" onclick="switchDial(3, 270)" style="transform: rotate(-270deg);"><i class="fa-solid fa-circle-question"></i></button>
            </div>
          </div>
          <div class="dial-content">
            <div class="dial-panel active"><p><strong>Dashboard</strong><br>Check live telemetry channels and monitor user databases in real-time.</p></div>
            <div class="dial-panel"><p><strong>Notifications</strong><br>Review active emails, platform messages, security logs, and updates.</p></div>
            <div class="dial-panel"><p><strong>Settings</strong><br>Configure dark profiles, HSL scales, responsive breakpoints, and filters.</p></div>
            <div class="dial-panel"><p><strong>Help Center</strong><br>Read developer document sets, API models, and contact customer service.</p></div>
          </div>
        </div>
      </div>
      <p class="card-desc">Radial dialing system. Click rotations spin the dashed border wheel and reveal targeted panel messages.</p>
      <div class="actions">
        <button class="action-btn view-btn" onclick="toggleCode('tcdl', this)"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn" onclick="copyCode('tcdl', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
      <pre id="tcdl" class="code-block"><code>&lt;div class="dial-tabs"&gt;
  &lt;div class="dial-wrapper"&gt;
    &lt;div class="dial-circle"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- =========================
 MODERN AI DASHBOARD TABS
========================= -->

<div class="ai-tabs" id="aiTabs">
  <div class="ai-tabs-nav">
    <button class="ai-tab active" onclick="switchAITab('aiTabs',0)">
      <i class="fa-solid fa-chart-simple"></i>
      Analytics
    </button>

    <button class="ai-tab" onclick="switchAITab('aiTabs',1)">
      <i class="fa-solid fa-bolt"></i>
      Automation
    </button>

    <button class="ai-tab" onclick="switchAITab('aiTabs',2)">
      <i class="fa-solid fa-shield-halved"></i>
      Security
    </button>

    <button class="ai-tab" onclick="switchAITab('aiTabs',3)">
      <i class="fa-solid fa-layer-group"></i>
      Integrations
    </button>
  </div>

  <div class="ai-tabs-content">
    <div class="ai-panel active">
      <h3>Analytics Dashboard</h3>
      <p>Track real-time user activity, engagement metrics, bounce rates, and performance insights.</p>
    </div>

    <div class="ai-panel">
      <h3>Workflow Automation</h3>
      <p>Create intelligent automations, schedule workflows, and optimize productivity pipelines.</p>
    </div>

    <div class="ai-panel">
      <h3>Security Center</h3>
      <p>Enable advanced threat monitoring, access policies, encrypted sessions, and audit reports.</p>
    </div>

    <div class="ai-panel">
      <h3>Platform Integrations</h3>
      <p>Connect GitHub, Slack, Stripe, Discord, and cloud services with seamless APIs.</p>
    </div>
  </div>
</div>

  </div>
</main>
</template>

<script>
export default { name: 'Tabs' }
</script>
