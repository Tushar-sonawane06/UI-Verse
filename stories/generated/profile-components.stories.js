import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Profile Cards',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
User profile card components

### Info & Metadata
- **Category**: Cards
- **Tags**: <code>profile</code>, <code>avatar</code>, <code>user</code>, <code>card</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html

  <a class="skip-link" href="#main-content">Skip to main content</a>

  <!-- =========================================================
     GLOBAL VIEWPORT PLATFORM SIDEBAR MODULE
  ========================================================= -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <span class="brand-icon">⬡</span>
      <span class="brand-text">UIverse <span class="engine-badge">Identity Layer</span></span>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-group-wrapper">
        <span class="nav-group-title">Ecosystem Foundations</span>
        <ul>
          <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home Registry</span></a></li>
          <li><a href="leaderboard-components.html"><i class="fa-solid fa-ranking-star"></i><span>Leaderboard Sheets</span></a></li>
          <li><a href="button.html"><i class="fa-solid fa-hand-pointer"></i><span>Action Toggles</span></a></li>
          <li><a href="dropdown-components.html"><i class="fa-solid fa-caret-down"></i><span>Dropdown Cascades</span></a></li>
          <li><a href="navbar.html"><i class="fa-solid fa-bars"></i><span>Navigation Shells</span></a></li>
          <li><a href="cards.html"><i class="fa-solid fa-table-cells-large"></i><span>Component Cards</span></a></li>
          <li><a href="flipcards.html"><i class="fa-solid fa-clone"></i><span>3D Perspective Units</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">Data Intake Pipelines</span>
        <ul>
          <li><a href="inputs.html"><i class="fa-solid fa-keyboard"></i><span>Form Inputs</span></a></li>
          <li><a href="forms.html"><i class="fa-brands fa-wpforms"></i><span>Schema Intakes</span></a></li>
          <li><a href="badges.html"><i class="fa-solid fa-award"></i><span>Status Badges</span></a></li>
          <li><a href="blog.html"><i class="fa-solid fa-blog"></i><span>Blog Channels</span></a></li>
          <li><a href="article.html"><i class="fa-solid fa-newspaper"></i><span>Article Modules</span></a></li>
          <li><a href="alerts.html"><i class="fa-solid fa-triangle-exclamation"></i><span>Alert Canvas Frames</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">SaaS Visualizations</span>
        <ul>
          <li><a href="color.html"><i class="fa-solid fa-palette"></i><span>Global Color Tokens</span></a></li>
          <li><a href="charts.html"><i class="fa-solid fa-chart-pie"></i><span>Data Visualizers</span></a></li>
          <li><a href="dashboard.html"><i class="fa-solid fa-gauge-high"></i><span>Admin Viewports</span></a></li>
          <li><a href="div.html"><i class="fa-solid fa-square"></i><span>Structural Div Units</span></a></li>
          <li><a href="widgets.html"><i class="fa-solid fa-layer-group"></i><span>Utility Widgets</span></a></li>
          <li><a href="search.html"><i class="fa-solid fa-magnifying-glass"></i><span>Search Interfaces</span></a></li>
          <li><a href="hover.html"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Micro-Physics Hover</span></a></li>
          <li><a href="error.html"><i class="fa-solid fa-circle-exclamation"></i><span>Error Canvas Sheets</span></a></li>
          <li><a href="ecommerce.html"><i class="fa-solid fa-cart-shopping"></i><span>E-Commerce Pools</span></a></li>
          <li><a href="files.html"><i class="fa-solid fa-file-arrow-up"></i><span>File Drop Vaults</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">Enterprise Infrastructure</span>
        <ul>
          <li><a href="hero.html"><i class="fa-solid fa-star"></i><span>Hero Landing Arenas</span></a></li>
          <li><a href="loaders.html"><i class="fa-solid fa-spinner"></i><span>System Loaders</span></a></li>
          <li><a href="timeline.html"><i class="fa-solid fa-clock-rotate-left"></i><span>Milestone Trails</span></a></li>
          <li><a href="map.html"><i class="fa-solid fa-map-location-dot"></i><span>Spatial Location Maps</span></a></li>
          <li><a href="menu.html"><i class="fa-solid fa-bars-staggered"></i><span>Context Lists</span></a></li>
          <li><a href="pricing.html"><i class="fa-solid fa-tags"></i><span>Subscription Tiers</span></a></li>
          <li><a href="section.html"><i class="fa-solid fa-rectangle-list"></i><span>Layout Segments</span></a></li>
          <li><a href="span.html"><i class="fa-solid fa-code"></i><span>Inline Micro-Spans</span></a></li>
          <li><a href="table.html"><i class="fa-solid fa-table"></i><span>Data Matrices</span></a></li>
          <li><a href="tabs.html"><i class="fa-solid fa-table-columns"></i><span>Viewport Tabs</span></a></li>
          <li><a href="terms.html"><i class="fa-solid fa-file-contract"></i><span>Terms & Compliances</span></a></li>
          <li><a href="testimonials.html"><i class="fa-solid fa-comments"></i><span>Social Proof Matrix</span></a></li>
          <li class="active"><a href="profile-components.html"><i class="fa-solid fa-user"></i><span>Identity Profiles Hub</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">Platform Controls</span>
        <ul>
          <li><a href="toggles.html"><i class="fa-solid fa-toggle-on"></i><span>Tactile Power Switches</span></a></li>
          <li><a href="radiobutton.html"><i class="fa-solid fa-circle-dot"></i><span>Radio Arrays</span></a></li>
          <li><a href="checkbox.html"><i class="fa-solid fa-square-check"></i><span>Binary Check Boxes</span></a></li>
          <li><a href="notifications-premium.html"><i class="fa-solid fa-bell"></i><span>Notification Streams</span></a></li>
          <li><a href="step-indicators.html"><i class="fa-solid fa-list-check"></i><span>Stepper Linear Trails</span></a></li>
          <li><a href="progress-premium.html"><i class="fa-solid fa-bars-progress"></i><span>Velocity Tracking Rails</span></a></li>
          <li><a href="ratings-premium.html"><i class="fa-solid fa-star"></i><span>Feedback Reputations</span></a></li>
          <li><a href="filters-premium.html"><i class="fa-solid fa-sliders"></i><span>Multi-Token Data Filters</span></a></li>
          <li><a href="admin-panel.html"><i class="fa-solid fa-gauge-high"></i><span>Admin Terminal V2</span></a></li>
          <li><a href="about.html"><i class="fa-solid fa-circle-info"></i><span>Ecosystem Blueprint</span></a></li>
          <li><a href="documentation.html"><i class="fa-solid fa-book"></i><span>Core Technical Manuals</span></a></li>
          <li><a href="faq.html"><i class="fa-solid fa-circle-question"></i><span>Central FAQ Vault</span></a></li>
          <li><a href="contact.html"><i class="fa-regular fa-envelope"></i><span>Emergency Protocols</span></a></li>
        </ul>
      </div>
    </nav>

    <div class="sidebar-footer">
      <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub Repository Pipeline Source"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="Corporate Directory Network Node"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/yourusername" target="_blank" aria-label="Streaming Log Updates Channels"><i class="fab fa-x-twitter"></i></a>
    </div>
  </aside>

  <!-- SIDEBAR MOBILITY INTERCEPTOR LAYER -->
  <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleSidebar()"></div>

  <!-- =========================================================
     TOP INTEGRATED PLATFORM NAVBAR
  ========================================================= -->
  <div class="main-content">
    <header class="navbar" id="navbar">
      <button class="menu-toggle" onclick="toggleSidebar()" aria-label="Toggle system navigation menu">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="logo">UIverse <span class="badge-pro">IDENTITY v2</span></div>
      
      <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" id="searchInput" placeholder="Query profile cards, alignment states, user tokens..." aria-label="Filter identity modules">
        <kbd class="search-kbd">⌘K</kbd>
      </div>

      <div class="nav-right">
        <button class="nav-btn outline-nav-btn" type="button"><i class="fa-solid fa-plus"></i> Add Account Node</button>
        <a href="contributorss.html" class="nav-link-wrapper"><button class="nav-btn primary-nav-btn" type="button">Core Registry Directory</button></a>
        <button id="darkModeToggle" class="theme-toggle" title="Toggle Surface Lighting State" type="button"><i class="fa-solid fa-moon"></i></button>
      </div>
    </header>

    <!-- CENTRAL JUMBOTRON HERO CONTAINER -->
    <section class="page-hero">
      <div class="page-hero-left">
        <div class="breadcrumb">
          <a href="index.html">Home Infrastructure</a>
          <i class="fa-solid fa-chevron-right"></i>
          <span class="current-target">User Identity Profiles</span>
        </div>
        <h1 class="page-title">Profile Matrices</h1>
        <p class="page-desc">High-fidelity responsive profile components structured for micro-services, data registries, and interactive directory views.</p>
        <div class="page-meta">
          <span class="meta-badge"><i class="fa-solid fa-tags"></i> 15 Identity Concepts</span>
          <span class="meta-badge"><i class="fa-solid fa-bolt"></i> Hardware-Accelerated Variables</span>
          <span class="meta-badge"><i class="fa-solid fa-mobile-screen-button"></i> Symmetrical Layout Scales</span>
        </div>
      </div>
    </section>

    <!-- LIVE RUNTIME QUERY FILTER SEGMENTS BAR -->
    <div class="filter-bar">
      <div class="filter-bar-left">
        <button class="filter-btn active" type="button" onclick="filterUploads('all', this)">All Identity Units</button>
        <button class="filter-btn" type="button" onclick="filterUploads('developers', this)">Software Engineers</button>
        <button class="filter-btn" type="button" onclick="filterUploads('creators', this)">Content Directors</button>
        <button class="filter-btn" type="button" onclick="filterUploads('interactive', this)">Kinetic Controls</button>
      </div>
      <div class="filter-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Live filter token keys..." oninput="liveFilter(this.value)" aria-label="Quick string filter tool" />
      </div>
    </div>

    <!-- DYNAMIC TILES PROFILE SECTOR GRID -->
    <section class="profile-grid">

      <!-- CARD 1: STANDARD DEV UNIT -->
      <div class="upload-card" data-name="developer profile card ariana reed frontend react css typescript" data-cat="developers">
        <div class="card-preview">
          <div class="profile-card developer-card">
            <span class="status">Active Node</span>
            <div class="avatar">AR</div>
            <h2>Ariana Reed</h2>
            <p>Principal Frontend Architect</p>
            <div class="skills"><span>React Shell</span><span>Advanced CSS</span><span>TypeScript Matrix</span></div>
            <button type="button">Inspect Portfolio System</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Standard Developer Relay</h3>
            <span class="card-tag tag-essential">Core Pack</span>
          </div>
          <p>Clean engineering layout featuring explicit tag channels and live network state metrics.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-dev-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-dev-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-dev-card"><code>&lt;div class="profile-card developer-card"&gt;
  &lt;span class="status"&gt;Active Node&lt;/span&gt;
  &lt;div class="avatar"&gt;AR&lt;/div&gt;
  &lt;h2&gt;Ariana Reed&lt;/h2&gt;
  &lt;p&gt;Principal Frontend Architect&lt;/p&gt;
  &lt;div class="skills"&gt;&lt;span&gt;React Shell&lt;/span&gt;&lt;span&gt;Advanced CSS&lt;/span&gt;&lt;/div&gt;
  &lt;button type="button"&gt;Inspect Portfolio System&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 2: SOCIAL INJECTOR NODE -->
      <div class="upload-card" data-name="social media profile ui lena moore content creator instagram twitter youtube" data-cat="creators">
        <div class="card-preview">
          <div class="profile-card social-card">
            <div class="avatar image-avatar">LM</div>
            <h2>Lena Moore</h2>
            <p>Creative Content Director</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram Stream Endpoint"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Twitter Metadata Stream"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube Live Channel Vector"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <button type="button">Establish Social Pipeline</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Social Sync Channel</h3>
            <span class="card-tag tag-essential">Essential</span>
          </div>
          <p>Circular token links mapped inside fluid containers with clean interaction structures.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-social-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-social-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-social-card"><code>&lt;div class="profile-card social-card"&gt;
  &lt;div class="avatar"&gt;LM&lt;/div&gt;
  &lt;h2&gt;Lena Moore&lt;/h2&gt;
  &lt;div class="social-links"&gt;
    &lt;a href="#" aria-label="Instagram"&gt;&lt;i class="fa-brands fa-instagram"&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;/div&gt;
  &lt;button type="button"&gt;Establish Social Pipeline&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 3: TEAM MATRIX LEDGER CARD -->
      <div class="upload-card" data-name="team member card noah kim product lead projects members" data-cat="developers">
        <div class="card-preview">
          <div class="profile-card team-card">
            <div class="team-head">
              <div class="avatar">NK</div>
              <div class="team-identity-block">
                <h2>Noah Kim</h2>
                <p>Enterprise Product Lead</p>
              </div>
            </div>
            <div class="team-meta">
              <span><strong>12</strong> Tracked Epics</span>
              <span><strong>8</strong> Sync Nodes</span>
            </div>
            <button type="button">Open Interlock Chat</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Team Infrastructure Node</h3>
            <span class="card-tag tag-trending">Structural Pack</span>
          </div>
          <p>Compact directional layout formatting performance weight indexes and tracking parameters.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-team-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-team-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-team-card"><code>&lt;div class="profile-card team-card"&gt;
  &lt;div class="team-head"&gt;
    &lt;div class="avatar"&gt;NK&lt;/div&gt;
    &lt;h2&gt;Noah Kim&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="team-meta"&gt;&lt;span&gt;&lt;strong&gt;12&lt;/strong&gt; Tracked Epics&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 4: MULTI-FIELD HARD METRIC CARD -->
      <div class="upload-card" data-name="user stats profile sofia patel growth analyst posts followers following" data-cat="creators">
        <div class="card-preview">
          <div class="profile-card stats-card">
            <div class="avatar">SP</div>
            <h2>Sofia Patel</h2>
            <p>Senior Performance Analyst</p>
            <div class="stats">
              <span><strong>248</strong> Commits</span>
              <span><strong>14.2k</strong> Node Points</span>
              <span><strong>682</strong> Peer Anchors</span>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Symmetrical Stats Matrix</h3>
            <span class="card-tag tag-essential">Framework Matrix</span>
          </div>
          <p>High-density data row balancing multiple parameter counts inside absolute proportional spacing frames.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-stats-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-stats-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-stats-card"><code>&lt;div class="profile-card stats-card"&gt;
  &lt;div class="avatar"&gt;SP&lt;/div&gt;
  &lt;div class="stats"&gt;&lt;span&gt;&lt;strong&gt;248&lt;/strong&gt; Commits&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 5: AMBIENT FROSTED GLASS LAYER -->
      <div class="upload-card" data-name="glassmorphism profile layout elijah stone ui designer rating reviews hire me" data-cat="creators">
        <div class="card-preview">
          <div class="profile-card glass-card">
            <div class="avatar">EI</div>
            <h2>Elijah Stone</h2>
            <p>Principal Experience Designer</p>
            <div class="glass-row">
              <span>4.9 Validation Factor</span>
              <span>96 Retrospectives</span>
            </div>
            <button type="button">Initialize Retainer Contract</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Glassmorphic Shimmer Unit</h3>
            <span class="card-tag tag-trending">Frosted Core</span>
          </div>
          <p>Frosted glass blur backing with bright white type vectors constructed for dark workspace blocks.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-glass-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-glass-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-glass-card"><code>&lt;div class="profile-card glass-card"&gt;
  &lt;div class="avatar"&gt;EI&lt;/div&gt;
  &lt;div class="glass-row"&gt;&lt;span&gt;4.9 Validation&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 6: 3D ROTATIONAL FLIP CARD -->
      <div class="upload-card" data-name="3d interactive flip profile card rotate hover ariana reed frontend developer email github" data-cat="interactive">
        <div class="card-preview">
          <div class="flip-profile-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="avatar">AR</div>
                <h2>Ariana Reed</h2>
                <p>Principal Frontend Architect</p>
                <span class="status-flip"><i class="fa-solid fa-arrows-spin"></i> Trigger Spatial Rotation</span>
              </div>
              <div class="flip-card-back">
                <h3>System Endpoints</h3>
                <p class="back-contact-item"><i class="fa-regular fa-envelope"></i> operator@uiverse.domain</p>
                <p class="back-contact-item"><i class="fa-brands fa-github"></i> cluster-source-01</p>
                <button type="button" class="back-btn">Node Operational</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>3D Perspective Rotator</h3>
            <span class="card-tag tag-new">Kinetic Framework</span>
          </div>
          <p>Interactive mechanical flip module rotating exactly 180 degrees in three-dimensional space vectors.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-flip-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-flip-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-flip-card"><code>&lt;div class="flip-profile-card"&gt;
  &lt;div class="flip-card-inner"&gt;
    &lt;div class="flip-card-front"&gt;...&lt;/div&gt;
    &lt;div class="flip-card-back"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 7: HIGH-SATURATION CYBERPUNK NETRUNNER LAYER -->
      <div class="upload-card" data-name="neon cyberpunk netrunner profile card noah kim glitch stats tech security" data-cat="interactive">
        <div class="card-preview dark-preview">
          <div class="cyberpunk-card">
            <div class="cyberpunk-grid"></div>
            <div class="cyberpunk-header">
              <div class="avatar cyberpunk-avatar">NK</div>
              <span class="cyberpunk-badge">SECTOR S-CLASS</span>
            </div>
            <h2 class="cyber-glitch" data-text="Noah Kim">Noah Kim</h2>
            <p>Netrunner Terminal Operator</p>
            <div class="cyberpunk-stats">
              <div class="cyber-stat">
                <span class="stat-lbl">LOGIC_FLOW</span>
                <span class="stat-val">99</span>
              </div>
              <div class="cyber-stat">
                <span class="stat-lbl">DECR_FACTOR</span>
                <span class="stat-val">84</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Cyberpunk Netrunner Node</h3>
            <span class="card-tag tag-new">High-Lux Saturation</span>
          </div>
          <p>Cyberpunk execution framework incorporating integrated backdrop search coordinate meshes and laser scan vectors.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-cyber-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-cyber-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-cyber-card"><code>&lt;div class="cyberpunk-card"&gt;
  &lt;div class="cyberpunk-grid"&gt;&lt;/div&gt;
  &lt;h2 class="cyber-glitch" data-text="Noah Kim"&gt;Noah Kim&lt;/h2&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 8: METRIC DRIVEN PROCESS BARS PROFILE -->
      <div class="upload-card" data-name="glassmorphic skills progress profile card sofia patel growth analyst seo stats" data-cat="developers">
        <div class="card-preview">
          <div class="skills-progress-card">
            <div class="progress-header">
              <div class="avatar progress-avatar">SP</div>
              <div class="progress-info">
                <h2>Sofia Patel</h2>
                <p>Senior Performance Analyst</p>
              </div>
            </div>
            <div class="progress-section">
              <div class="progress-item">
                <span class="progress-label">Fuzzy Matrix Processing <strong class="progress-percentage">90%</strong></span>
                <div class="progress-bar-v2">
                  <div class="progress-fill-v2" style="width: 90%;"></div>
                </div>
              </div>
              <div class="progress-item">
                <span class="progress-label">Data Structural Parsing <strong class="progress-percentage">75%</strong></span>
                <div class="progress-bar-v2">
                  <div class="progress-fill-v2" style="width: 75%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Telemetry Progress Matrix</h3>
            <span class="card-tag tag-new">Linear Metrics</span>
          </div>
          <p>Translucent container elements with integrated variable scaling metric tracking channels.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-skills-progress-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-skills-progress-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-skills-progress-card"><code>&lt;div class="skills-progress-card"&gt;
  &lt;div class="progress-bar-v2"&gt;&lt;div class="progress-fill-v2" style="width: 90%;"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 9: EXPANDABLE INNER TAB CONTEXT ENGINE -->
      <div class="upload-card" data-name="expandable tabbed profile card elijah stone ui designer bio skills interactive" data-cat="interactive">
        <div class="card-preview">
          <div class="expandable-card">
            <div class="expandable-header">
              <div class="avatar">EI</div>
              <div class="expandable-title-block">
                <h2>Elijah Stone</h2>
                <p>Principal Experience Designer</p>
              </div>
            </div>
            <div class="card-tabs">
              <button type="button" class="tab-btn active" onclick="switchTab(this, 'bio')">Parameters Base</button>
              <button type="button" class="tab-btn" onclick="switchTab(this, 'skills')">Skill Tree Index</button>
            </div>
            <div class="tab-contents">
              <div class="tab-pane active" data-pane="bio">
                <p class="tab-text">Compiling architectural interfaces with over five seasons of structural deployment record logs verified upstream.</p>
              </div>
              <div class="tab-pane" data-pane="skills">
                <div class="skills-mini">
                  <span>Figma Logic</span><span>UI/UX Metrics</span><span>Prototyping Clusters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Tabbed Compartment Shell</h3>
            <span class="card-tag tag-new">Dynamic Layout</span>
          </div>
          <p>Micro interactive selectors providing immediate state changes across tabbed interior segments.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-expandable-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-expandable-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-expandable-card"><code>&lt;div class="expandable-card"&gt;
  &lt;div class="card-tabs"&gt;&lt;button onclick="switchTab(this, 'bio')"&gt;Parameters Base&lt;/button&gt;&lt;/div&gt;
  &lt;div class="tab-contents"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 10: COVER SHAPED LANDING OVERLAP COMPONENT -->
      <div class="upload-card" data-name="creative banner portfolio profile card lena moore content creator reach projects" data-cat="creators">
        <div class="card-preview">
          <div class="banner-card">
            <div class="banner-bg"></div>
            <div class="banner-avatar-wrap">
              <div class="avatar banner-avatar">LM</div>
            </div>
            <div class="banner-details">
              <h2>Lena Moore</h2>
              <p>Creative Content Director</p>
              <div class="banner-stats">
                <div class="b-stat-col">
                  <strong>142K</strong>
                  <span>Broadcast Weight</span>
                </div>
                <div class="b-stat-col">
                  <strong>48</strong>
                  <span>Merged Assets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Cover Intersection Banner</h3>
            <span class="card-tag tag-new">Aesthetic Core</span>
          </div>
          <p>Cover vector envelope style containing complex absolute centered overlap alignments.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-banner-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-banner-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-banner-card"><code>&lt;div class="banner-card"&gt;
  &lt;div class="banner-bg"&gt;&lt;/div&gt;
  &lt;div class="avatar banner-avatar"&gt;LM&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 11: MINIMAL OUTLINE SIDEBAR LIST UNIT -->
      <div class="upload-card" data-name="minimal outline profile clean compact" data-cat="developers">
        <div class="card-preview">
          <div class="profile-card outline-card">
            <div class="avatar">MO</div>
            <h2>Max Owens</h2>
            <p>Back-End Infrastructure Engineer</p>
            <div class="outline-meta">
              <span>Thread Ready</span>
              <span>Remote Matrix</span>
            </div>
            <button type="button">Inspect Node</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Minimal Boundary Track</h3>
            <span class="card-tag tag-essential">Minimal</span>
          </div>
          <p>Clean monochrome geometric footprint optimized for condensed listing views and options panels.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-outline-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-outline-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-outline-card"><code>&lt;div class="profile-card outline-card"&gt;
  &lt;div class="avatar"&gt;MO&lt;/div&gt;
  &lt;div class="outline-meta"&gt;&lt;span&gt;Thread Ready&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 12: TACTILE DIRECT CONTACT CHANNELS CONTAINER -->
      <div class="upload-card" data-name="contact stack profile contact details phone email links" data-cat="interactive">
        <div class="card-preview">
          <div class="contact-card">
            <div class="avatar">CR</div>
            <h2>Casey Rivers</h2>
            <p>Lead Developer Advocate</p>
            <div class="contact-list">
              <a href="#" onclick="return false;"><i class="fa-regular fa-envelope"></i> Push Event Payload Email</a>
              <a href="#" onclick="return false;"><i class="fa-solid fa-phone"></i> Initialize Audio Stream Link</a>
              <a href="#" onclick="return false;"><i class="fa-brands fa-linkedin"></i> Symmetrical Protocol Handshake</a>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Direct Operational Stack</h3>
            <span class="card-tag tag-trending">Tactile Link</span>
          </div>
          <p>Vertical execution rows mapping instant outreach handshake anchors evenly.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-contact-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-contact-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-contact-card"><code>&lt;div class="contact-card"&gt;
  &lt;div class="contact-list"&gt;&lt;a href="#"&gt;&lt;i class="fa-solid fa-phone"&gt;&lt;/i&gt; Link&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 13: GALLERY MATRIX THUMBNAIL CANVAS -->
      <div class="upload-card" data-name="portfolio showcase profile works project thumbnails" data-cat="creators">
        <div class="card-preview">
          <div class="portfolio-card">
            <div class="avatar">PV</div>
            <h2>Priya Venk</h2>
            <p>Lead Architectural Designer</p>
            <div class="thumbs">
              <div class="thumb" title="Asset compilation Alpha Reference"></div>
              <div class="thumb" title="Asset compilation Beta Sequence"></div>
              <div class="thumb" title="Asset compilation Gamma Cluster"></div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Asset Portfolio Arena</h3>
            <span class="card-tag tag-essential">Gallery Row</span>
          </div>
          <p>Miniature linear display slots tracking recently compiled workspace units beneath profile meta logs.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-portfolio-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-portfolio-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-portfolio-card"><code>&lt;div class="portfolio-card"&gt;
  &lt;div class="thumbs"&gt;&lt;div class="thumb"&gt;&lt;/div&gt;&lt;div class="thumb"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 14: BADGE MATRIX OVERLAY CONTAINER -->
      <div class="upload-card" data-name="circular badge profile compact badge reputation rating" data-cat="developers">
        <div class="card-preview">
          <div class="badge-card">
            <div class="badge-wrap">
              <div class="avatar">BG</div>
              <div class="badge">PRO</div>
            </div>
            <h2>Brynn Gale</h2>
            <p>Lead DevOps Architect</p>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Reputation Badge Circle</h3>
            <span class="card-tag tag-essential">Overlay Node</span>
          </div>
          <p>Absolute corner-anchored level tracking badges intersecting parent image rings cleanly.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-badge-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-badge-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-badge-card"><code>&lt;div class="badge-card"&gt;
  &lt;div class="badge-wrap"&gt;&lt;div class="badge"&gt;PRO&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 15: HIGH-DENSITY MINIMAL LIST UNIT -->
      <div class="upload-card" data-name="compact mini profile small list item" data-cat="developers">
        <div class="card-preview">
          <div class="compact-card">
            <div class="avatar">CM</div>
            <div class="compact-info">
              <h3>Cam Morin</h3>
              <p class="muted">Mobile Systems Engineer</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Micro-Row Node Unit</h3>
            <span class="card-tag tag-essential">Condensed List</span>
          </div>
          <p>Ultra-condensed list format optimized for real-time trace activity streams and mention containers.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-compact-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-compact-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-compact-card"><code>&lt;div class="compact-card"&gt;
  &lt;div class="avatar"&gt;CM&lt;/div&gt;
  &lt;div class="compact-info"&gt;&lt;h3&gt;Cam Morin&lt;/h3&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

    </section>
  </div>

  <!-- =========================================================
     COMPREHENSIVE GLOBAL FOOTER ARCHITECTURE
  ========================================================= -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-col brand">
        <h2 class="footer-logo">⬡ UIverse</h2>
        <p>Architecting fine structural user interface layers utilizing standard low-latency layout variables, geometric spacing matrices, and secure core scripts guidelines.</p>
        <div class="socials">
          <a href="https://github.com" target="_blank" aria-label="GitHub Code Repositories Vault"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" aria-label="Corporate Directory Operations Network"><i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" aria-label="Streaming Architecture Logs Updates Channel"><i class="fab fa-x-twitter"></i></a>
        </div>
      </div>
      
      <div class="footer-col">
        <h3>Ecosystem Registry</h3>
        <ul>
          <li><a href="button.html">Action Toggles Matrix</a></li>
          <li><a href="navbar.html">Navigation Shell Arrays</a></li>
          <li><a href="cards.html">Canvas Card Layouts</a></li>
          <li><a href="inputs.html">Form Input Channels</a></li>
          <li><a href="forms.html">Schema Layout Forms</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Technical Manuals</h3>
        <ul>
          <li><a href="#">Technical Documentation Vault</a></li>
          <li><a href="#">Open Source Repositories</a></li>
          <li><a href="#">Developer Core Communities</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Regulatory Compliance</h3>
        <ul>
          <li><a href="privacypolicy.html">Data Isolation Policy Frameworks</a></li>
          <li><a href="terms.html">Terms of System Operations Matrix</a></li>
        </ul>
      </div>

      <div class="footer-col newsletter">
        <h3>Continuous Integration Feeds</h3>
        <p>Subscribe to register your local node configuration and receive low-frequency layout updates logs directly.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="operator@engine.domain" aria-label="Operator email register input path" />
          <button type="button" onclick="alert('Destination node bound successfully inside telemetry channels.');">Sync Core Hub</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 UIverse Engine Modules. Compiled and engineered with absolute mechanical mathematical precision for professional front-end architects globally.</p>
    </div>
  </footer>

  <!-- =========================================================
     COMPREHENSIVE CORE EXECUTION SCRIPTS ENGINE
  ========================================================= -->
  
  

\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/profile-components.css\`

#### JavaScript Scripts:
- \`/dist/shared.js\`

### Accessibility (a11y) Checklist

- [x] Semantic HTML: appropriate tags are utilized.
- [x] Focus states: interactive elements show native or custom focus styling.
- [x] Color contrast: contrast ratios meet WCAG standard compliance.


### Visual & Interactive Test Cases

- [x] Render check: component layout presents visual elements clearly.
- [x] Hover check: interactive elements trigger hover states and transitions.
- [x] Responsive layout: scales and nests correctly across viewports.

`
      }
    }
  }
};

export const Default = {
  render: () => createShadowRootStory({
    title: 'Profile Cards',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/profile-components.css"],
    content: `
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <!-- =========================================================
     GLOBAL VIEWPORT PLATFORM SIDEBAR MODULE
  ========================================================= -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <span class="brand-icon">⬡</span>
      <span class="brand-text">UIverse <span class="engine-badge">Identity Layer</span></span>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-group-wrapper">
        <span class="nav-group-title">Ecosystem Foundations</span>
        <ul>
          <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home Registry</span></a></li>
          <li><a href="leaderboard-components.html"><i class="fa-solid fa-ranking-star"></i><span>Leaderboard Sheets</span></a></li>
          <li><a href="button.html"><i class="fa-solid fa-hand-pointer"></i><span>Action Toggles</span></a></li>
          <li><a href="dropdown-components.html"><i class="fa-solid fa-caret-down"></i><span>Dropdown Cascades</span></a></li>
          <li><a href="navbar.html"><i class="fa-solid fa-bars"></i><span>Navigation Shells</span></a></li>
          <li><a href="cards.html"><i class="fa-solid fa-table-cells-large"></i><span>Component Cards</span></a></li>
          <li><a href="flipcards.html"><i class="fa-solid fa-clone"></i><span>3D Perspective Units</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">Data Intake Pipelines</span>
        <ul>
          <li><a href="inputs.html"><i class="fa-solid fa-keyboard"></i><span>Form Inputs</span></a></li>
          <li><a href="forms.html"><i class="fa-brands fa-wpforms"></i><span>Schema Intakes</span></a></li>
          <li><a href="badges.html"><i class="fa-solid fa-award"></i><span>Status Badges</span></a></li>
          <li><a href="blog.html"><i class="fa-solid fa-blog"></i><span>Blog Channels</span></a></li>
          <li><a href="article.html"><i class="fa-solid fa-newspaper"></i><span>Article Modules</span></a></li>
          <li><a href="alerts.html"><i class="fa-solid fa-triangle-exclamation"></i><span>Alert Canvas Frames</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">SaaS Visualizations</span>
        <ul>
          <li><a href="color.html"><i class="fa-solid fa-palette"></i><span>Global Color Tokens</span></a></li>
          <li><a href="charts.html"><i class="fa-solid fa-chart-pie"></i><span>Data Visualizers</span></a></li>
          <li><a href="dashboard.html"><i class="fa-solid fa-gauge-high"></i><span>Admin Viewports</span></a></li>
          <li><a href="div.html"><i class="fa-solid fa-square"></i><span>Structural Div Units</span></a></li>
          <li><a href="widgets.html"><i class="fa-solid fa-layer-group"></i><span>Utility Widgets</span></a></li>
          <li><a href="search.html"><i class="fa-solid fa-magnifying-glass"></i><span>Search Interfaces</span></a></li>
          <li><a href="hover.html"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Micro-Physics Hover</span></a></li>
          <li><a href="error.html"><i class="fa-solid fa-circle-exclamation"></i><span>Error Canvas Sheets</span></a></li>
          <li><a href="ecommerce.html"><i class="fa-solid fa-cart-shopping"></i><span>E-Commerce Pools</span></a></li>
          <li><a href="files.html"><i class="fa-solid fa-file-arrow-up"></i><span>File Drop Vaults</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">Enterprise Infrastructure</span>
        <ul>
          <li><a href="hero.html"><i class="fa-solid fa-star"></i><span>Hero Landing Arenas</span></a></li>
          <li><a href="loaders.html"><i class="fa-solid fa-spinner"></i><span>System Loaders</span></a></li>
          <li><a href="timeline.html"><i class="fa-solid fa-clock-rotate-left"></i><span>Milestone Trails</span></a></li>
          <li><a href="map.html"><i class="fa-solid fa-map-location-dot"></i><span>Spatial Location Maps</span></a></li>
          <li><a href="menu.html"><i class="fa-solid fa-bars-staggered"></i><span>Context Lists</span></a></li>
          <li><a href="pricing.html"><i class="fa-solid fa-tags"></i><span>Subscription Tiers</span></a></li>
          <li><a href="section.html"><i class="fa-solid fa-rectangle-list"></i><span>Layout Segments</span></a></li>
          <li><a href="span.html"><i class="fa-solid fa-code"></i><span>Inline Micro-Spans</span></a></li>
          <li><a href="table.html"><i class="fa-solid fa-table"></i><span>Data Matrices</span></a></li>
          <li><a href="tabs.html"><i class="fa-solid fa-table-columns"></i><span>Viewport Tabs</span></a></li>
          <li><a href="terms.html"><i class="fa-solid fa-file-contract"></i><span>Terms & Compliances</span></a></li>
          <li><a href="testimonials.html"><i class="fa-solid fa-comments"></i><span>Social Proof Matrix</span></a></li>
          <li class="active"><a href="profile-components.html"><i class="fa-solid fa-user"></i><span>Identity Profiles Hub</span></a></li>
        </ul>
      </div>

      <div class="nav-group-wrapper">
        <span class="nav-group-title">Platform Controls</span>
        <ul>
          <li><a href="toggles.html"><i class="fa-solid fa-toggle-on"></i><span>Tactile Power Switches</span></a></li>
          <li><a href="radiobutton.html"><i class="fa-solid fa-circle-dot"></i><span>Radio Arrays</span></a></li>
          <li><a href="checkbox.html"><i class="fa-solid fa-square-check"></i><span>Binary Check Boxes</span></a></li>
          <li><a href="notifications-premium.html"><i class="fa-solid fa-bell"></i><span>Notification Streams</span></a></li>
          <li><a href="step-indicators.html"><i class="fa-solid fa-list-check"></i><span>Stepper Linear Trails</span></a></li>
          <li><a href="progress-premium.html"><i class="fa-solid fa-bars-progress"></i><span>Velocity Tracking Rails</span></a></li>
          <li><a href="ratings-premium.html"><i class="fa-solid fa-star"></i><span>Feedback Reputations</span></a></li>
          <li><a href="filters-premium.html"><i class="fa-solid fa-sliders"></i><span>Multi-Token Data Filters</span></a></li>
          <li><a href="admin-panel.html"><i class="fa-solid fa-gauge-high"></i><span>Admin Terminal V2</span></a></li>
          <li><a href="about.html"><i class="fa-solid fa-circle-info"></i><span>Ecosystem Blueprint</span></a></li>
          <li><a href="documentation.html"><i class="fa-solid fa-book"></i><span>Core Technical Manuals</span></a></li>
          <li><a href="faq.html"><i class="fa-solid fa-circle-question"></i><span>Central FAQ Vault</span></a></li>
          <li><a href="contact.html"><i class="fa-regular fa-envelope"></i><span>Emergency Protocols</span></a></li>
        </ul>
      </div>
    </nav>

    <div class="sidebar-footer">
      <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub Repository Pipeline Source"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="Corporate Directory Network Node"><i class="fab fa-linkedin"></i></a>
      <a href="https://twitter.com/yourusername" target="_blank" aria-label="Streaming Log Updates Channels"><i class="fab fa-x-twitter"></i></a>
    </div>
  </aside>

  <!-- SIDEBAR MOBILITY INTERCEPTOR LAYER -->
  <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleSidebar()"></div>

  <!-- =========================================================
     TOP INTEGRATED PLATFORM NAVBAR
  ========================================================= -->
  <div class="main-content">
    <header class="navbar" id="navbar">
      <button class="menu-toggle" onclick="toggleSidebar()" aria-label="Toggle system navigation menu">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="logo">UIverse <span class="badge-pro">IDENTITY v2</span></div>
      
      <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" id="searchInput" placeholder="Query profile cards, alignment states, user tokens..." aria-label="Filter identity modules">
        <kbd class="search-kbd">⌘K</kbd>
      </div>

      <div class="nav-right">
        <button class="nav-btn outline-nav-btn" type="button"><i class="fa-solid fa-plus"></i> Add Account Node</button>
        <a href="contributorss.html" class="nav-link-wrapper"><button class="nav-btn primary-nav-btn" type="button">Core Registry Directory</button></a>
        <button id="darkModeToggle" class="theme-toggle" title="Toggle Surface Lighting State" type="button"><i class="fa-solid fa-moon"></i></button>
      </div>
    </header>

    <!-- CENTRAL JUMBOTRON HERO CONTAINER -->
    <section class="page-hero">
      <div class="page-hero-left">
        <div class="breadcrumb">
          <a href="index.html">Home Infrastructure</a>
          <i class="fa-solid fa-chevron-right"></i>
          <span class="current-target">User Identity Profiles</span>
        </div>
        <h1 class="page-title">Profile Matrices</h1>
        <p class="page-desc">High-fidelity responsive profile components structured for micro-services, data registries, and interactive directory views.</p>
        <div class="page-meta">
          <span class="meta-badge"><i class="fa-solid fa-tags"></i> 15 Identity Concepts</span>
          <span class="meta-badge"><i class="fa-solid fa-bolt"></i> Hardware-Accelerated Variables</span>
          <span class="meta-badge"><i class="fa-solid fa-mobile-screen-button"></i> Symmetrical Layout Scales</span>
        </div>
      </div>
    </section>

    <!-- LIVE RUNTIME QUERY FILTER SEGMENTS BAR -->
    <div class="filter-bar">
      <div class="filter-bar-left">
        <button class="filter-btn active" type="button" onclick="filterUploads('all', this)">All Identity Units</button>
        <button class="filter-btn" type="button" onclick="filterUploads('developers', this)">Software Engineers</button>
        <button class="filter-btn" type="button" onclick="filterUploads('creators', this)">Content Directors</button>
        <button class="filter-btn" type="button" onclick="filterUploads('interactive', this)">Kinetic Controls</button>
      </div>
      <div class="filter-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Live filter token keys..." oninput="liveFilter(this.value)" aria-label="Quick string filter tool" />
      </div>
    </div>

    <!-- DYNAMIC TILES PROFILE SECTOR GRID -->
    <section class="profile-grid">

      <!-- CARD 1: STANDARD DEV UNIT -->
      <div class="upload-card" data-name="developer profile card ariana reed frontend react css typescript" data-cat="developers">
        <div class="card-preview">
          <div class="profile-card developer-card">
            <span class="status">Active Node</span>
            <div class="avatar">AR</div>
            <h2>Ariana Reed</h2>
            <p>Principal Frontend Architect</p>
            <div class="skills"><span>React Shell</span><span>Advanced CSS</span><span>TypeScript Matrix</span></div>
            <button type="button">Inspect Portfolio System</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Standard Developer Relay</h3>
            <span class="card-tag tag-essential">Core Pack</span>
          </div>
          <p>Clean engineering layout featuring explicit tag channels and live network state metrics.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-dev-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-dev-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-dev-card"><code>&lt;div class="profile-card developer-card"&gt;
  &lt;span class="status"&gt;Active Node&lt;/span&gt;
  &lt;div class="avatar"&gt;AR&lt;/div&gt;
  &lt;h2&gt;Ariana Reed&lt;/h2&gt;
  &lt;p&gt;Principal Frontend Architect&lt;/p&gt;
  &lt;div class="skills"&gt;&lt;span&gt;React Shell&lt;/span&gt;&lt;span&gt;Advanced CSS&lt;/span&gt;&lt;/div&gt;
  &lt;button type="button"&gt;Inspect Portfolio System&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 2: SOCIAL INJECTOR NODE -->
      <div class="upload-card" data-name="social media profile ui lena moore content creator instagram twitter youtube" data-cat="creators">
        <div class="card-preview">
          <div class="profile-card social-card">
            <div class="avatar image-avatar">LM</div>
            <h2>Lena Moore</h2>
            <p>Creative Content Director</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram Stream Endpoint"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Twitter Metadata Stream"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube Live Channel Vector"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <button type="button">Establish Social Pipeline</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Social Sync Channel</h3>
            <span class="card-tag tag-essential">Essential</span>
          </div>
          <p>Circular token links mapped inside fluid containers with clean interaction structures.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-social-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-social-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-social-card"><code>&lt;div class="profile-card social-card"&gt;
  &lt;div class="avatar"&gt;LM&lt;/div&gt;
  &lt;h2&gt;Lena Moore&lt;/h2&gt;
  &lt;div class="social-links"&gt;
    &lt;a href="#" aria-label="Instagram"&gt;&lt;i class="fa-brands fa-instagram"&gt;&lt;/i&gt;&lt;/a&gt;
  &lt;/div&gt;
  &lt;button type="button"&gt;Establish Social Pipeline&lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 3: TEAM MATRIX LEDGER CARD -->
      <div class="upload-card" data-name="team member card noah kim product lead projects members" data-cat="developers">
        <div class="card-preview">
          <div class="profile-card team-card">
            <div class="team-head">
              <div class="avatar">NK</div>
              <div class="team-identity-block">
                <h2>Noah Kim</h2>
                <p>Enterprise Product Lead</p>
              </div>
            </div>
            <div class="team-meta">
              <span><strong>12</strong> Tracked Epics</span>
              <span><strong>8</strong> Sync Nodes</span>
            </div>
            <button type="button">Open Interlock Chat</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Team Infrastructure Node</h3>
            <span class="card-tag tag-trending">Structural Pack</span>
          </div>
          <p>Compact directional layout formatting performance weight indexes and tracking parameters.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-team-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-team-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-team-card"><code>&lt;div class="profile-card team-card"&gt;
  &lt;div class="team-head"&gt;
    &lt;div class="avatar"&gt;NK&lt;/div&gt;
    &lt;h2&gt;Noah Kim&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="team-meta"&gt;&lt;span&gt;&lt;strong&gt;12&lt;/strong&gt; Tracked Epics&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 4: MULTI-FIELD HARD METRIC CARD -->
      <div class="upload-card" data-name="user stats profile sofia patel growth analyst posts followers following" data-cat="creators">
        <div class="card-preview">
          <div class="profile-card stats-card">
            <div class="avatar">SP</div>
            <h2>Sofia Patel</h2>
            <p>Senior Performance Analyst</p>
            <div class="stats">
              <span><strong>248</strong> Commits</span>
              <span><strong>14.2k</strong> Node Points</span>
              <span><strong>682</strong> Peer Anchors</span>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Symmetrical Stats Matrix</h3>
            <span class="card-tag tag-essential">Framework Matrix</span>
          </div>
          <p>High-density data row balancing multiple parameter counts inside absolute proportional spacing frames.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-stats-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-stats-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-stats-card"><code>&lt;div class="profile-card stats-card"&gt;
  &lt;div class="avatar"&gt;SP&lt;/div&gt;
  &lt;div class="stats"&gt;&lt;span&gt;&lt;strong&gt;248&lt;/strong&gt; Commits&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 5: AMBIENT FROSTED GLASS LAYER -->
      <div class="upload-card" data-name="glassmorphism profile layout elijah stone ui designer rating reviews hire me" data-cat="creators">
        <div class="card-preview">
          <div class="profile-card glass-card">
            <div class="avatar">EI</div>
            <h2>Elijah Stone</h2>
            <p>Principal Experience Designer</p>
            <div class="glass-row">
              <span>4.9 Validation Factor</span>
              <span>96 Retrospectives</span>
            </div>
            <button type="button">Initialize Retainer Contract</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Glassmorphic Shimmer Unit</h3>
            <span class="card-tag tag-trending">Frosted Core</span>
          </div>
          <p>Frosted glass blur backing with bright white type vectors constructed for dark workspace blocks.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-glass-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-glass-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-glass-card"><code>&lt;div class="profile-card glass-card"&gt;
  &lt;div class="avatar"&gt;EI&lt;/div&gt;
  &lt;div class="glass-row"&gt;&lt;span&gt;4.9 Validation&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 6: 3D ROTATIONAL FLIP CARD -->
      <div class="upload-card" data-name="3d interactive flip profile card rotate hover ariana reed frontend developer email github" data-cat="interactive">
        <div class="card-preview">
          <div class="flip-profile-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="avatar">AR</div>
                <h2>Ariana Reed</h2>
                <p>Principal Frontend Architect</p>
                <span class="status-flip"><i class="fa-solid fa-arrows-spin"></i> Trigger Spatial Rotation</span>
              </div>
              <div class="flip-card-back">
                <h3>System Endpoints</h3>
                <p class="back-contact-item"><i class="fa-regular fa-envelope"></i> operator@uiverse.domain</p>
                <p class="back-contact-item"><i class="fa-brands fa-github"></i> cluster-source-01</p>
                <button type="button" class="back-btn">Node Operational</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>3D Perspective Rotator</h3>
            <span class="card-tag tag-new">Kinetic Framework</span>
          </div>
          <p>Interactive mechanical flip module rotating exactly 180 degrees in three-dimensional space vectors.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-flip-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-flip-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-flip-card"><code>&lt;div class="flip-profile-card"&gt;
  &lt;div class="flip-card-inner"&gt;
    &lt;div class="flip-card-front"&gt;...&lt;/div&gt;
    &lt;div class="flip-card-back"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 7: HIGH-SATURATION CYBERPUNK NETRUNNER LAYER -->
      <div class="upload-card" data-name="neon cyberpunk netrunner profile card noah kim glitch stats tech security" data-cat="interactive">
        <div class="card-preview dark-preview">
          <div class="cyberpunk-card">
            <div class="cyberpunk-grid"></div>
            <div class="cyberpunk-header">
              <div class="avatar cyberpunk-avatar">NK</div>
              <span class="cyberpunk-badge">SECTOR S-CLASS</span>
            </div>
            <h2 class="cyber-glitch" data-text="Noah Kim">Noah Kim</h2>
            <p>Netrunner Terminal Operator</p>
            <div class="cyberpunk-stats">
              <div class="cyber-stat">
                <span class="stat-lbl">LOGIC_FLOW</span>
                <span class="stat-val">99</span>
              </div>
              <div class="cyber-stat">
                <span class="stat-lbl">DECR_FACTOR</span>
                <span class="stat-val">84</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Cyberpunk Netrunner Node</h3>
            <span class="card-tag tag-new">High-Lux Saturation</span>
          </div>
          <p>Cyberpunk execution framework incorporating integrated backdrop search coordinate meshes and laser scan vectors.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-cyber-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-cyber-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-cyber-card"><code>&lt;div class="cyberpunk-card"&gt;
  &lt;div class="cyberpunk-grid"&gt;&lt;/div&gt;
  &lt;h2 class="cyber-glitch" data-text="Noah Kim"&gt;Noah Kim&lt;/h2&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 8: METRIC DRIVEN PROCESS BARS PROFILE -->
      <div class="upload-card" data-name="glassmorphic skills progress profile card sofia patel growth analyst seo stats" data-cat="developers">
        <div class="card-preview">
          <div class="skills-progress-card">
            <div class="progress-header">
              <div class="avatar progress-avatar">SP</div>
              <div class="progress-info">
                <h2>Sofia Patel</h2>
                <p>Senior Performance Analyst</p>
              </div>
            </div>
            <div class="progress-section">
              <div class="progress-item">
                <span class="progress-label">Fuzzy Matrix Processing <strong class="progress-percentage">90%</strong></span>
                <div class="progress-bar-v2">
                  <div class="progress-fill-v2" style="width: 90%;"></div>
                </div>
              </div>
              <div class="progress-item">
                <span class="progress-label">Data Structural Parsing <strong class="progress-percentage">75%</strong></span>
                <div class="progress-bar-v2">
                  <div class="progress-fill-v2" style="width: 75%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Telemetry Progress Matrix</h3>
            <span class="card-tag tag-new">Linear Metrics</span>
          </div>
          <p>Translucent container elements with integrated variable scaling metric tracking channels.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-skills-progress-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-skills-progress-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-skills-progress-card"><code>&lt;div class="skills-progress-card"&gt;
  &lt;div class="progress-bar-v2"&gt;&lt;div class="progress-fill-v2" style="width: 90%;"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 9: EXPANDABLE INNER TAB CONTEXT ENGINE -->
      <div class="upload-card" data-name="expandable tabbed profile card elijah stone ui designer bio skills interactive" data-cat="interactive">
        <div class="card-preview">
          <div class="expandable-card">
            <div class="expandable-header">
              <div class="avatar">EI</div>
              <div class="expandable-title-block">
                <h2>Elijah Stone</h2>
                <p>Principal Experience Designer</p>
              </div>
            </div>
            <div class="card-tabs">
              <button type="button" class="tab-btn active" onclick="switchTab(this, 'bio')">Parameters Base</button>
              <button type="button" class="tab-btn" onclick="switchTab(this, 'skills')">Skill Tree Index</button>
            </div>
            <div class="tab-contents">
              <div class="tab-pane active" data-pane="bio">
                <p class="tab-text">Compiling architectural interfaces with over five seasons of structural deployment record logs verified upstream.</p>
              </div>
              <div class="tab-pane" data-pane="skills">
                <div class="skills-mini">
                  <span>Figma Logic</span><span>UI/UX Metrics</span><span>Prototyping Clusters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Tabbed Compartment Shell</h3>
            <span class="card-tag tag-new">Dynamic Layout</span>
          </div>
          <p>Micro interactive selectors providing immediate state changes across tabbed interior segments.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-expandable-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-expandable-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-expandable-card"><code>&lt;div class="expandable-card"&gt;
  &lt;div class="card-tabs"&gt;&lt;button onclick="switchTab(this, 'bio')"&gt;Parameters Base&lt;/button&gt;&lt;/div&gt;
  &lt;div class="tab-contents"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 10: COVER SHAPED LANDING OVERLAP COMPONENT -->
      <div class="upload-card" data-name="creative banner portfolio profile card lena moore content creator reach projects" data-cat="creators">
        <div class="card-preview">
          <div class="banner-card">
            <div class="banner-bg"></div>
            <div class="banner-avatar-wrap">
              <div class="avatar banner-avatar">LM</div>
            </div>
            <div class="banner-details">
              <h2>Lena Moore</h2>
              <p>Creative Content Director</p>
              <div class="banner-stats">
                <div class="b-stat-col">
                  <strong>142K</strong>
                  <span>Broadcast Weight</span>
                </div>
                <div class="b-stat-col">
                  <strong>48</strong>
                  <span>Merged Assets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Cover Intersection Banner</h3>
            <span class="card-tag tag-new">Aesthetic Core</span>
          </div>
          <p>Cover vector envelope style containing complex absolute centered overlap alignments.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-banner-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-banner-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-banner-card"><code>&lt;div class="banner-card"&gt;
  &lt;div class="banner-bg"&gt;&lt;/div&gt;
  &lt;div class="avatar banner-avatar"&gt;LM&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 11: MINIMAL OUTLINE SIDEBAR LIST UNIT -->
      <div class="upload-card" data-name="minimal outline profile clean compact" data-cat="developers">
        <div class="card-preview">
          <div class="profile-card outline-card">
            <div class="avatar">MO</div>
            <h2>Max Owens</h2>
            <p>Back-End Infrastructure Engineer</p>
            <div class="outline-meta">
              <span>Thread Ready</span>
              <span>Remote Matrix</span>
            </div>
            <button type="button">Inspect Node</button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Minimal Boundary Track</h3>
            <span class="card-tag tag-essential">Minimal</span>
          </div>
          <p>Clean monochrome geometric footprint optimized for condensed listing views and options panels.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-outline-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-outline-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-outline-card"><code>&lt;div class="profile-card outline-card"&gt;
  &lt;div class="avatar"&gt;MO&lt;/div&gt;
  &lt;div class="outline-meta"&gt;&lt;span&gt;Thread Ready&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 12: TACTILE DIRECT CONTACT CHANNELS CONTAINER -->
      <div class="upload-card" data-name="contact stack profile contact details phone email links" data-cat="interactive">
        <div class="card-preview">
          <div class="contact-card">
            <div class="avatar">CR</div>
            <h2>Casey Rivers</h2>
            <p>Lead Developer Advocate</p>
            <div class="contact-list">
              <a href="#" onclick="return false;"><i class="fa-regular fa-envelope"></i> Push Event Payload Email</a>
              <a href="#" onclick="return false;"><i class="fa-solid fa-phone"></i> Initialize Audio Stream Link</a>
              <a href="#" onclick="return false;"><i class="fa-brands fa-linkedin"></i> Symmetrical Protocol Handshake</a>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Direct Operational Stack</h3>
            <span class="card-tag tag-trending">Tactile Link</span>
          </div>
          <p>Vertical execution rows mapping instant outreach handshake anchors evenly.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-contact-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-contact-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-contact-card"><code>&lt;div class="contact-card"&gt;
  &lt;div class="contact-list"&gt;&lt;a href="#"&gt;&lt;i class="fa-solid fa-phone"&gt;&lt;/i&gt; Link&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 13: GALLERY MATRIX THUMBNAIL CANVAS -->
      <div class="upload-card" data-name="portfolio showcase profile works project thumbnails" data-cat="creators">
        <div class="card-preview">
          <div class="portfolio-card">
            <div class="avatar">PV</div>
            <h2>Priya Venk</h2>
            <p>Lead Architectural Designer</p>
            <div class="thumbs">
              <div class="thumb" title="Asset compilation Alpha Reference"></div>
              <div class="thumb" title="Asset compilation Beta Sequence"></div>
              <div class="thumb" title="Asset compilation Gamma Cluster"></div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Asset Portfolio Arena</h3>
            <span class="card-tag tag-essential">Gallery Row</span>
          </div>
          <p>Miniature linear display slots tracking recently compiled workspace units beneath profile meta logs.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-portfolio-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-portfolio-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-portfolio-card"><code>&lt;div class="portfolio-card"&gt;
  &lt;div class="thumbs"&gt;&lt;div class="thumb"&gt;&lt;/div&gt;&lt;div class="thumb"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 14: BADGE MATRIX OVERLAY CONTAINER -->
      <div class="upload-card" data-name="circular badge profile compact badge reputation rating" data-cat="developers">
        <div class="card-preview">
          <div class="badge-card">
            <div class="badge-wrap">
              <div class="avatar">BG</div>
              <div class="badge">PRO</div>
            </div>
            <h2>Brynn Gale</h2>
            <p>Lead DevOps Architect</p>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Reputation Badge Circle</h3>
            <span class="card-tag tag-essential">Overlay Node</span>
          </div>
          <p>Absolute corner-anchored level tracking badges intersecting parent image rings cleanly.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-badge-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-badge-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-badge-card"><code>&lt;div class="badge-card"&gt;
  &lt;div class="badge-wrap"&gt;&lt;div class="badge"&gt;PRO&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- CARD 15: HIGH-DENSITY MINIMAL LIST UNIT -->
      <div class="upload-card" data-name="compact mini profile small list item" data-cat="developers">
        <div class="card-preview">
          <div class="compact-card">
            <div class="avatar">CM</div>
            <div class="compact-info">
              <h3>Cam Morin</h3>
              <p class="muted">Mobile Systems Engineer</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-top">
            <h3>Micro-Row Node Unit</h3>
            <span class="card-tag tag-essential">Condensed List</span>
          </div>
          <p>Ultra-condensed list format optimized for real-time trace activity streams and mention containers.</p>
          <div class="actions">
            <button type="button" class="action-btn view-btn" onclick="toggleCode('code-compact-card', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
            <button type="button" class="action-btn copy-btn" onclick="copyCode('code-compact-card', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
          </div>
          <pre class="code-block" id="code-compact-card"><code>&lt;div class="compact-card"&gt;
  &lt;div class="avatar"&gt;CM&lt;/div&gt;
  &lt;div class="compact-info"&gt;&lt;h3&gt;Cam Morin&lt;/h3&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

    </section>
  </div>

  <!-- =========================================================
     COMPREHENSIVE GLOBAL FOOTER ARCHITECTURE
  ========================================================= -->
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-col brand">
        <h2 class="footer-logo">⬡ UIverse</h2>
        <p>Architecting fine structural user interface layers utilizing standard low-latency layout variables, geometric spacing matrices, and secure core scripts guidelines.</p>
        <div class="socials">
          <a href="https://github.com" target="_blank" aria-label="GitHub Code Repositories Vault"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" aria-label="Corporate Directory Operations Network"><i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" aria-label="Streaming Architecture Logs Updates Channel"><i class="fab fa-x-twitter"></i></a>
        </div>
      </div>
      
      <div class="footer-col">
        <h3>Ecosystem Registry</h3>
        <ul>
          <li><a href="button.html">Action Toggles Matrix</a></li>
          <li><a href="navbar.html">Navigation Shell Arrays</a></li>
          <li><a href="cards.html">Canvas Card Layouts</a></li>
          <li><a href="inputs.html">Form Input Channels</a></li>
          <li><a href="forms.html">Schema Layout Forms</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Technical Manuals</h3>
        <ul>
          <li><a href="#">Technical Documentation Vault</a></li>
          <li><a href="#">Open Source Repositories</a></li>
          <li><a href="#">Developer Core Communities</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Regulatory Compliance</h3>
        <ul>
          <li><a href="privacypolicy.html">Data Isolation Policy Frameworks</a></li>
          <li><a href="terms.html">Terms of System Operations Matrix</a></li>
        </ul>
      </div>

      <div class="footer-col newsletter">
        <h3>Continuous Integration Feeds</h3>
        <p>Subscribe to register your local node configuration and receive low-frequency layout updates logs directly.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="operator@engine.domain" aria-label="Operator email register input path" />
          <button type="button" onclick="alert('Destination node bound successfully inside telemetry channels.');">Sync Core Hub</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 UIverse Engine Modules. Compiled and engineered with absolute mechanical mathematical precision for professional front-end architects globally.</p>
    </div>
  </footer>

  <!-- =========================================================
     COMPREHENSIVE CORE EXECUTION SCRIPTS ENGINE
  ========================================================= -->
  
  
`
  })
};
