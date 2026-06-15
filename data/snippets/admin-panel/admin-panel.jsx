import React from 'react';

export default function adminPanel(){
  return (
    <>
      <div className="main-content">
      
          {/* TOPBAR */}
          <header className="topbar">
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search admin components..." id="searchInput" />
            </div>
            <div className="topbar-actions">
              <button type="button" className="add-btn" onclick="triggerAllShowcase()"><i className="fa-solid fa-play"></i> Test All
                Panels</button>
              <button type="button" className="collection-btn" onclick="resetAllPanels()"><i className="fa-solid fa-rotate-left"></i>
                Reset Previews</button>
              <button type="button" className="theme-btn" aria-label="Toggle Theme"><i className="fa-solid fa-moon"></i></button>
            </div>
          </header>
      
          {/* HERO */}
          <section className="hero">
            <div className="hero-left">
              <div className="breadcrumb">Home &gt; Admin Panel Premium</div>
              <h1>Admin Dashboards</h1>
              <p>
                Futuristic, highly-responsive administration widgets built with clean HTML, CSS, and Vanilla JavaScript.
                Includes modular dashboard structural configurations, charts, collapsible navigations, telemetry stats, and
                user listings.
              </p>
              <div className="hero-tags">
                <span><i className="fa-solid fa-layer-group"></i> 5 Modern Categories</span>
                <span><i className="fa-solid fa-wand-magic-sparkles"></i> Glows &amp; Interactions</span>
                <span><i className="fa-solid fa-mobile-screen"></i> Responsive layouts</span>
              </div>
            </div>
            <div className="hero-preview">
              <div className="hero-notification-demo">
                <div className="demo-bubble active">
                  <span className="demo-dot"></span>
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>Admin Console Active</span>
                </div>
              </div>
            </div>
          </section>
      
          {/* ================= SIDEBAR ================= */}
          <aside className="sidebar" id="sidebar">
            <div className="sidebar-brand">
              <span className="brand-icon">⬡</span>
              <span className="brand-text">UIverse</span>
            </div>
            <nav className="sidebar-nav">
              <ul>
                <li><a href="index.html"><i className="fa-solid fa-house"></i><span>Home</span></a></li>
                <li><a href="button.html"><i className="fa-solid fa-hand-pointer"></i><span>Buttons</span></a></li>
                <li><a href="dropdown-components.html"><i className="fa-solid fa-caret-down"></i><span>Dropdowns</span></a></li>
                <li><a href="profile-components.html"><i className="fa-solid fa-user"></i><span>Profiles</span></a></li>
                <li><a href="navbar.html"><i className="fa-solid fa-bars"></i><span>Navbar</span></a></li>
                <li><a href="cards.html"><i className="fa-solid fa-table-cells-large"></i><span>Cards</span></a></li>
                <li><a href="flipcards.html"><i className="fa-solid fa-clone"></i><span>3D Cards</span></a></li>
                <li><a href="inputs.html"><i className="fa-solid fa-keyboard"></i><span>Inputs</span></a></li>
                <li><a href="forms.html"><i className="fa-brands fa-wpforms"></i><span>Forms</span></a></li>
                <li><a href="badges.html"><i className="fa-solid fa-award"></i><span>Badges</span></a></li>
                <li><a href="blog.html"><i className="fa-solid fa-blog"></i><span>Blog</span></a></li>
                <li><a href="article.html"><i className="fa-solid fa-newspaper"></i><span>Articles</span></a></li>
                <li><a href="alerts.html"><i className="fa-solid fa-triangle-exclamation"></i><span>Alerts</span></a></li>
                <li><a href="color.html"><i className="fa-solid fa-palette"></i><span>Colors</span></a></li>
                <li><a href="charts.html"><i className="fa-solid fa-chart-pie"></i><span>Charts</span></a></li>
                <li><a href="dashboard.html"><i className="fa-solid fa-gauge-high"></i><span>Dashboard</span></a></li>
                <li><a href="div.html"><i className="fa-solid fa-square"></i><span>DIV</span></a></li>
                <li><a href="widgets.html"><i className="fa-solid fa-layer-group"></i><span>Widgets</span></a></li>
                <li><a href="search.html"><i className="fa-solid fa-magnifying-glass"></i><span>Search Bars</span></a></li>
                <li><a href="hover.html"><i className="fa-solid fa-wand-magic-sparkles"></i><span>Hover Effects</span></a></li>
                <li><a href="error.html"><i className="fa-solid fa-circle-exclamation"></i><span>Error Pages</span></a></li>
                <li><a href="ecommerce.html"><i className="fa-solid fa-cart-shopping"></i><span>E-commerce</span></a></li>
                <li><a href="files.html"><i className="fa-solid fa-file-arrow-up"></i><span>Drag &amp; Drop</span></a></li>
                <li><a href="hero.html"><i className="fa-solid fa-star"></i><span>Hero Sections</span></a></li>
                <li><a href="loaders.html"><i className="fa-solid fa-spinner"></i><span>Loaders</span></a></li>
                <li><a href="timeline.html"><i className="fa-solid fa-clock-rotate-left"></i><span>Timeline</span></a></li>
                <li><a href="map.html"><i className="fa-solid fa-map-location-dot"></i><span>Maps</span></a></li>
                <li><a href="menu.html"><i className="fa-solid fa-bars-staggered"></i><span>Menu</span></a></li>
                <li><a href="pricing.html"><i className="fa-solid fa-tags"></i><span>Pricing</span></a></li>
                <li>
                  <a href="subscription.html">
                    <i className="fa-solid fa-credit-card"></i>
                    <span>Subscription</span>
                  </a>
                </li>
                <li>
                  <a href="auth.html">
                    <i className="fa-solid fa-user-shield"></i>
                    <span>Authentication</span>
                  </a>
                </li>
                  <li>
                    <a href="recovery.html">
                      <i className="fa-solid fa-key" aria-hidden="true"></i>
                      <span>Password Recovery</span>
                    </a>
                  </li>
                <li><a href="section.html"><i className="fa-solid fa-rectangle-list"></i><span>Section</span></a></li>
                <li><a href="span.html"><i className="fa-solid fa-code"></i><span>Span</span></a></li>
                <li><a href="table.html"><i className="fa-solid fa-table"></i><span>Table</span></a></li>
                <li><a href="tabs.html"><i className="fa-solid fa-table-columns"></i><span>Tabs</span></a></li>
                <li><a href="terms.html"><i className="fa-solid fa-file-contract"></i><span>Terms</span></a></li>
                <li><a href="testimonials.html"><i className="fa-solid fa-comments"></i><span>Testimonials</span></a></li>
                <li><a href="toggles.html"><i className="fa-solid fa-toggle-on"></i><span>Toggle</span></a></li>
                <li><a href="radiobutton.html"><i className="fa-solid fa-circle-dot"></i><span>Radio Buttons</span></a></li>
                <li><a href="checkbox.html"><i className="fa-solid fa-square-check"></i><span>Checkboxes</span></a></li>
                <li><a href="notifications-premium.html"><i className="fa-solid fa-bell"></i><span>Notifications V2</span></a>
                </li>
                <li><a href="step-indicators.html"><i className="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
                <li><a href="progress-premium.html"><i className="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
                <li><a href="ratings-premium.html"><i className="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
                <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
                <li className="active"><a href="admin-panel.html"><i className="fa-solid fa-gauge-high"></i><span>Admin Panel
                    </span></a></li>
                <li><a href="about.html"><i className="fa-solid fa-circle-info"></i><span>About</span></a></li>
                <li><a href="documentation.html"><i className="fa-solid fa-book"></i><span>Documentation</span></a></li>
                <li><a href="faq.html"><i className="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
                <li><a href="contact.html"><i className="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
              </ul>
            </nav>
            <div className="sidebar-footer">
              <a href="#" title="GitHub" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" title="LinkedIn" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" title="Twitter" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
            </div>
          </aside>
      
          {/* FILTERS */}
          <div className="filters">
            <button type="button" className="filter-tab active" data-filter="all">All Panels</button>
            <button type="button" className="filter-tab" data-filter="layouts">Layouts</button>
            <button type="button" className="filter-tab" data-filter="analytics">Analytics</button>
            <button type="button" className="filter-tab" data-filter="sidebars">Sidebars</button>
            <button type="button" className="filter-tab" data-filter="kpis">KPI Stats</button>
            <button type="button" className="filter-tab" data-filter="tables">Tables</button>
          </div>
      
          {/* COMPONENT SHOWCASE GRID */}
          <section className="admin-grid">
      
            {/* ============ 1: DASHBOARD LAYOUTS ============ */}
            <div className="component-card no-sandbox" data-category="layouts">
              <div className="card-preview">
                <div className="card-interactive-area full-width">
                  <div className="admin-layout-preview" id="layoutPreviewContainer">
                    {/* Simulated Mockup Desktop Frame */}
                    <div className="mock-desktop layout-split" id="mockDesktop">
                      {/* Top Header Bar */}
                      <div className="mock-header">
                        <div className="header-dots">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                        </div>
                        <div className="header-search-bar"></div>
                        <div className="header-avatar"></div>
                      </div>
      
                      {/* Content Wrapper */}
                      <div className="mock-content-wrapper">
                        {/* Sidebar */}
                        <div className="mock-sidebar">
                          <div className="sidebar-line active"></div>
                          <div className="sidebar-line"></div>
                          <div className="sidebar-line"></div>
                          <div className="sidebar-line"></div>
                        </div>
      
                        {/* Main Body Workspace */}
                        <div className="mock-body">
                          <div className="body-title"></div>
                          <div className="body-grid">
                            <div className="body-tile tile-1"></div>
                            <div className="body-tile tile-2"></div>
                            <div className="body-tile tile-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="layout-toggle-row">
                    <button type="button" className="layout-toggle-btn active" onclick="switchMockLayout('split')"><i
                        className="fa-solid fa-columns"></i> Split View</button>
                    <button type="button" className="layout-toggle-btn" onclick="switchMockLayout('wide')"><i
                        className="fa-solid fa-table-columns"></i> Compact Board</button>
                    <button type="button" className="layout-toggle-btn" onclick="switchMockLayout('glass')"><i
                        className="fa-solid fa-square-envelope"></i> Glass Tile</button>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Interactive Dashboard Layouts</h3>
                  <span>Premium Grid</span>
                </div>
                <p>Three flexible structural layout skeletons switching dynamic alignment classes via responsive transition
                  metrics.</p>
                <div className="card-actions">
                  <button type="button" onclick="toggleCode('ad1')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button type="button" onclick="copyCode('ad1')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button type="button" onclick="triggerLayoutGlow()"><i className="fa-solid fa-wand-magic-sparkles"></i> Pulse
                    Outer Glow</button>
                </div>
              </div>
              <pre id="ad1" className="code-block" style="display:none;"><code>&lt;!-- HTML Layout Structure --&gt;
      &lt;div className="dashboard-container layout-split"&gt;
        &lt;header className="dashboard-header"&gt;
          &lt;div className="search-wrap"&gt;&lt;/div&gt;
          &lt;div className="user-avatar"&gt;&lt;/div&gt;
        &lt;/header&gt;
        &lt;div className="dashboard-workspace"&gt;
          &lt;aside className="dashboard-sidebar"&gt;
            &lt;div className="nav-item active"&gt;&lt;/div&gt;
            &lt;div className="nav-item"&gt;&lt;/div&gt;
          &lt;/aside&gt;
          &lt;main className="dashboard-main"&gt;
            &lt;div className="grid-card-3"&gt;&lt;/div&gt;
          &lt;/main&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      /* Responsive Layout Matrix CSS */
      .dashboard-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #090d16;
      }
      .dashboard-workspace {
        display: flex;
        flex: 1;
      }
      /* Split view vs compact board triggers */
      .layout-split .dashboard-sidebar { width: 240px; }
      .layout-wide .dashboard-sidebar { width: 70px; }
      .layout-glass .dashboard-sidebar {
        margin: 15px;
        border-radius: 12px;
        backdrop-filter: blur(15px);
      }</code></pre>
            </div>
      
            {/* ============ 2: ANALYTICS PANELS ============ */}
            <div className="component-card no-sandbox" data-category="analytics">
              <div className="card-preview">
                <div className="card-interactive-area full-width">
                  <div className="analytics-card-preview">
                    <div className="analytics-widget-header">
                      <div className="widget-title-area">
                        <h4>SaaS Conversion Metrics</h4>
                        <span>Active platform telemetry</span>
                      </div>
                      <div className="period-selectors">
                        <button type="button" className="period-btn active" onclick="updateAnalyticsPeriod('24h')">24h</button>
                        <button type="button" className="period-btn" onclick="updateAnalyticsPeriod('7d')">7d</button>
                        <button type="button" className="period-btn" onclick="updateAnalyticsPeriod('30d')">30d</button>
                      </div>
                    </div>
      
                    <div className="widget-visual-grid">
                      {/* Area Trend Chart */}
                      <div className="visual-area-chart">
                        <svg viewBox="0 0 300 100" className="chart-svg">
                          <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stop-color="#eb6835" stop-opacity="0.3"></stop>
                              <stop offset="100%" stop-color="#eb6835" stop-opacity="0"></stop>
                            </linearGradient>
                          </defs>
                          {/* Gradient Area */}
                          <path id="chartAreaPath" d="M 0 100 L 0 50 Q 50 20 100 60 T 200 30 T 300 40 L 300 100 Z"
                            fill="url(#areaGradient)"></path>
                          {/* Stroke Line */}
                          <path id="chartLinePath" d="M 0 50 Q 50 20 100 60 T 200 30 T 300 40" fill="none" stroke="#eb6835"
                            stroke-width="2.5" stroke-linecap="round"></path>
                        </svg>
                      </div>
      
                      {/* Segment Data Blocks */}
                      <div className="analytics-metrics-row">
                        {/* Bar stats */}
                        <div className="metric-progress-column">
                          <span className="column-title">Telemetry Index</span>
                          <div className="column-bar-group">
                            <div className="col-bar" id="bar-metric-1"></div>
                            <div className="col-bar" id="bar-metric-2"></div>
                            <div className="col-bar" id="bar-metric-3"></div>
                            <div className="col-bar" id="bar-metric-4"></div>
                          </div>
                        </div>
      
                        {/* Doughnut progress */}
                        <div className="metric-doughnut-box">
                          <svg viewBox="0 0 36 36" className="circular-chart-svg">
                            <path className="circle-bg"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            <path className="circle" id="doughnutCircle" stroke-dasharray="85, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                          </svg>
                          <div className="doughnut-text" id="doughnutValue">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Telemetry Analytics Panels</h3>
                  <span>Interactive Charts</span>
                </div>
                <p>Bespoke dashboard analytics board combining SVG vector curves, doughnut counters, and active data bars
                  redrawing live on click.</p>
                <div className="card-actions">
                  <button type="button" onclick="toggleCode('ad2')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button type="button" onclick="copyCode('ad2')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button type="button" onclick="triggerMetricPulse()"><i className="fa-solid fa-wave-square"></i> Pulse
                    Telemetry</button>
                </div>
              </div>
              <pre id="ad2" className="code-block" style="display:none;"><code>&lt;!-- HTML SVG Vector Charts --&gt;
      &lt;div className="analytics-panel"&gt;
        &lt;div className="area-chart"&gt;
          &lt;svg viewBox="0 0 300 100"&gt;
            &lt;path className="gradient-area" fill="url(#gradient)" d="..."&gt;&lt;/path&gt;
            &lt;path className="line-stroke" stroke="#eb6835" d="..."&gt;&lt;/path&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
        &lt;div className="radial-metric"&gt;
          &lt;svg viewBox="0 0 36 36"&gt;
            &lt;path stroke-dasharray="85, 100" className="ring-fill"&gt;&lt;/path&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      /* SVG Telemetry Dashboard CSS */
      .circular-chart-svg {
        width: 70px;
        height: 70px;
      }
      .circular-chart-svg .circle {
        fill: none;
        stroke: #7b61ff;
        stroke-width: 3;
        stroke-linecap: round;
        transition: stroke-dasharray 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }
      .col-bar {
        background: #eb6835;
        border-radius: 4px 4px 0 0;
        transition: height 0.5s ease-out;
      }</code></pre>
            </div>
      
            {/* ============ 3: ADMIN SIDEBARS ============ */}
            <div className="component-card no-sandbox" data-category="sidebars">
              <div className="card-preview">
                <div className="card-interactive-area full-width">
                  <div className="sidebar-showcase-panel">
                    <div className="mini-sidebar" id="miniSidebar">
                      <div className="mini-brand">
                        <span className="brand-hexagon">⬡</span>
                        <span className="brand-lbl">UIverse</span>
                      </div>
                      <ul className="mini-sidebar-menu">
                        <li className="active"><a href="#" onclick="switchMiniSidebarLink(this)"><i
                              className="fa-solid fa-chart-line"></i> <span>Overview</span></a></li>
                        <li><a href="#" onclick="switchMiniSidebarLink(this)"><i className="fa-solid fa-wallet"></i>
                            <span>Transactions</span></a></li>
                        <li><a href="#" onclick="switchMiniSidebarLink(this)"><i className="fa-solid fa-users-gear"></i>
                            <span>Operators</span></a></li>
                        <li><a href="#" onclick="switchMiniSidebarLink(this)"><i className="fa-solid fa-headset"></i>
                            <span>Inquiries</span></a></li>
                      </ul>
      
                      <button type="button" className="mini-collapse-btn" onclick="toggleMiniSidebarCollapse()"
                        aria-label="Collapse Mini Sidebar"><i className="fa-solid fa-chevron-left" id="miniChevron"></i></button>
                    </div>
      
                    <div className="glass-sidebar-demo">
                      <div className="glass-brand"><span>⬡</span></div>
                      <div className="glass-menu-icons">
                        <span className="active"><i className="fa-solid fa-house-laptop"></i></span>
                        <span><i className="fa-solid fa-shield-cat"></i></span>
                        <span><i className="fa-solid fa-database"></i></span>
                      </div>
                      <div className="glass-footer-orb"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Premium Admin Sidebars</h3>
                  <span>Responsive Nav</span>
                </div>
                <p>A pair of elegant dashboard sidebars showing Collapsible Nav Menu panels and Glassmorphic floating
                  shortcuts.</p>
                <div className="card-actions">
                  <button type="button" onclick="toggleCode('ad3')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button type="button" onclick="copyCode('ad3')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button type="button" onclick="toggleMiniSidebarCollapse()"><i className="fa-solid fa-circle-arrow-left"></i>
                    Toggle Collapse</button>
                </div>
              </div>
              <pre id="ad3" className="code-block" style="display:none;"><code>&lt;!-- HTML Sidebars --&gt;
      &lt;!-- 1: Compact Collapsible Sidebar --&gt;
      &lt;div className="mini-sidebar collapsed"&gt;
        &lt;div className="brand"&gt;&lt;span&gt;⬡&lt;/span&gt;&lt;h2&gt;UIverse&lt;/h2&gt;&lt;/div&gt;
        &lt;ul className="menu"&gt;
          &lt;li className="active"&gt;&lt;a href="#"&gt;&lt;i className="fa-solid fa-chart-line"&gt;&lt;/i&gt;&lt;span&gt;Overview&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
        &lt;button className="collapse-toggle"&gt;&lt;i className="fa-solid fa-chevron-left"&gt;&lt;/i&gt;&lt;/button&gt;
      &lt;/div&gt;
      
      /* CSS Collapsible transitions */
      .mini-sidebar {
        width: 200px;
        background: #0d121f;
        transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        overflow: hidden;
      }
      .mini-sidebar.collapsed {
        width: 65px;
      }
      .mini-sidebar.collapsed span {
        display: none;
      }
      .glass-sidebar-demo {
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(16px);
        border-right: 1px solid rgba(255, 255, 255, 0.06);
      }</code></pre>
            </div>
      
            {/* ============ 4: KPI STATS CARDS ============ */}
            <div className="component-card no-sandbox" data-category="kpis">
              <div className="card-preview">
                <div className="card-interactive-area full-width">
                  <div className="kpi-deck-showcase">
                    {/* Stat Card 1 */}
                    <div className="kpi-spotlight-card" id="kpiCard1" onmousemove="kpiCardSpotlight(event, this)">
                      <div className="spotlight-glow"></div>
                      <div className="kpi-card-header">
                        <span className="kpi-title">Daily Operations</span>
                        <span className="kpi-trend up"><i className="fa-solid fa-arrow-up-right-dots"></i> +14.2%</span>
                      </div>
                      <div className="kpi-card-value">14,240</div>
                      <div className="kpi-sparkline-wrap">
                        <svg viewBox="0 0 120 30" className="sparkline-svg">
                          <path d="M 0 25 Q 20 10 40 22 T 80 5 T 120 12" fill="none" stroke="#10b981" stroke-width="2"
                            stroke-linecap="round"></path>
                        </svg>
                      </div>
                    </div>
      
                    {/* Stat Card 2 */}
                    <div className="kpi-spotlight-card" id="kpiCard2" onmousemove="kpiCardSpotlight(event, this)">
                      <div className="spotlight-glow"></div>
                      <div className="kpi-card-header">
                        <span className="kpi-title">Weekly Revenue</span>
                        <span className="kpi-trend down"><i className="fa-solid fa-arrow-down-right-dots"></i> -3.8%</span>
                      </div>
                      <div className="kpi-card-value">$24,850</div>
                      <div className="kpi-sparkline-wrap">
                        <svg viewBox="0 0 120 30" className="sparkline-svg">
                          <path d="M 0 10 Q 20 28 40 12 T 80 25 T 120 5" fill="none" stroke="#ef4444" stroke-width="2"
                            stroke-linecap="round"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>KPI Statistics Spotlight Cards</h3>
                  <span>Interactive Deck</span>
                </div>
                <p>Telemetry stats cards overlaying mini vector sparklines and high-fidelity spot radial glows that follow
                  mouse positions.</p>
                <div className="card-actions">
                  <button type="button" onclick="toggleCode('ad4')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button type="button" onclick="copyCode('ad4')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button type="button" onclick="simulateKpiBounce()"><i className="fa-solid fa-chart-line"></i> Update
                    Counters</button>
                </div>
              </div>
              <pre id="ad4" className="code-block" style="display:none;"><code>&lt;!-- HTML Spotlight KPI Cards --&gt;
      &lt;div className="kpi-spotlight-card" onmousemove="spotlight(event, this)"&gt;
        &lt;div className="spotlight-glow"&gt;&lt;/div&gt;
        &lt;div className="card-head"&gt;
          &lt;span&gt;Daily Operations&lt;/span&gt;
          &lt;span className="trend up"&gt;+14.2%&lt;/span&gt;
        &lt;/div&gt;
        &lt;h3 className="value"&gt;14,240&lt;/h3&gt;
        &lt;svg className="sparkline" viewBox="0 0 120 30"&gt;
          &lt;path stroke="#10b981" d="..." fill="none"&gt;&lt;/path&gt;
        &lt;/svg&gt;
      &lt;/div&gt;
      
      /* Spotlight Glow effect CSS */
      .kpi-spotlight-card {
        position: relative;
        background: #0b0f19;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        overflow: hidden;
        padding: 20px;
      }
      .spotlight-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle 80px at var(--x, 0px) var(--y, 0px), rgba(235, 104, 53, 0.15) 0%, transparent 80%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }
      .kpi-spotlight-card:hover .spotlight-glow {
        opacity: 1;
      }</code></pre>
            </div>
      
            {/* ============ 5: USER MANAGEMENT TABLES ============ */}
            <div className="component-card no-sandbox" data-category="tables">
              <div className="card-preview">
                <div className="card-interactive-area full-width">
                  <div className="admin-table-widget">
                    <div className="table-widget-header">
                      <div className="header-search-wrap">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="userTableSearch" placeholder="Search user directory..."
                          onkeyup="filterUserDirectoryTable()" />
                      </div>
                      <span className="table-records-badge" id="tableRecordsCount">3 active records</span>
                    </div>
      
                    <div className="directory-table-container">
                      <table id="user-directory-table">
                        <thead>
                          <tr>
                            <th scope="col">
                              <div className="td-checkbox-wrap">
                                <input type="checkbox" id="userHeaderCheckbox" onclick="toggleAllUserCheckboxes(this)" />
                              </div>
                            </th>
                            <th scope="col">User Profile</th>
                            <th scope="col">Clearance</th>
                            <th scope="col">Condition</th>
                            <th scope="col">Control</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="user-row">
                            <td>
                              <div className="td-checkbox-wrap">
                                <input type="checkbox" className="user-row-checkbox" />
                              </div>
                            </td>
                            <td>
                              <div className="td-profile-box">
                                <img src="https://i.pravatar.cc/100?img=33" alt="avatar" className="td-avatar" />
                                <div className="td-profile-info">
                                  <strong>Marcus V.</strong>
                                  <span>marcus@uiverse.io</span>
                                </div>
                              </div>
                            </td>
                            <td><span className="td-role-badge lead">Lead Admin</span></td>
                            <td><span className="td-status active">Active</span></td>
                            <td>
                              <button type="button" className="td-action-icon-btn" onclick="toggleUserRowStatus(this)"><i
                                  className="fa-solid fa-power-off"></i> Toggle</button>
                            </td>
                          </tr>
      
                          <tr className="user-row">
                            <td>
                              <div className="td-checkbox-wrap">
                                <input type="checkbox" className="user-row-checkbox" />
                              </div>
                            </td>
                            <td>
                              <div className="td-profile-box">
                                <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="td-avatar" />
                                <div className="td-profile-info">
                                  <strong>Sarah Connor</strong>
                                  <span>sconnor@uiverse.io</span>
                                </div>
                              </div>
                            </td>
                            <td><span className="td-role-badge operator">Operator</span></td>
                            <td><span className="td-status active">Active</span></td>
                            <td>
                              <button type="button" className="td-action-icon-btn" onclick="toggleUserRowStatus(this)"><i
                                  className="fa-solid fa-power-off"></i> Toggle</button>
                            </td>
                          </tr>
      
                          <tr className="user-row">
                            <td>
                              <div className="td-checkbox-wrap">
                                <input type="checkbox" className="user-row-checkbox" />
                              </div>
                            </td>
                            <td>
                              <div className="td-profile-box">
                                <img src="https://i.pravatar.cc/100?img=47" alt="avatar" className="td-avatar" />
                                <div className="td-profile-info">
                                  <strong>Clara Jenkins</strong>
                                  <span>clara@uiverse.io</span>
                                </div>
                              </div>
                            </td>
                            <td><span className="td-role-badge reviewer">Reviewer</span></td>
                            <td><span className="td-status paused">Paused</span></td>
                            <td>
                              <button type="button" className="td-action-icon-btn" onclick="toggleUserRowStatus(this)"><i
                                  className="fa-solid fa-power-off"></i> Toggle</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>User Directory Tables</h3>
                  <span>Interactive Data</span>
                </div>
                <p>A feature-rich administrative directory table featuring online avatars, clearance tags, multi-select
                  triggers, and search algorithms.</p>
                <div className="card-actions">
                  <button type="button" onclick="toggleCode('ad5')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button type="button" onclick="copyCode('ad5')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button type="button" onclick="simulateUserAddition()"><i className="fa-solid fa-user-plus"></i> Add Mock
                    Operator</button>
                </div>
              </div>
              <pre id="ad5" className="code-block" style="display:none;"><code>&lt;!-- HTML Directory Grid --&gt;
      &lt;div className="directory-widget"&gt;
        &lt;input type="text" id="search" placeholder="Search..."&gt;
        &lt;table&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;th&gt;&lt;input type="checkbox"&gt;&lt;/th&gt;
              &lt;th&gt;User Profile&lt;/th&gt;
              &lt;th&gt;Clearance&lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            &lt;tr&gt;
              &lt;td&gt;&lt;input type="checkbox"&gt;&lt;/td&gt;
              &lt;td&gt;&lt;img src="avatar.jpg"&gt;&lt;strong&gt;Marcus V.&lt;/strong&gt;&lt;/td&gt;
              &lt;td&gt;&lt;span className="role"&gt;Lead&lt;/span&gt;&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      
      /* High-Contrast Table CSS */
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th {
        background: #111522;
        color: #64748b;
        font-size: 12px;
        text-transform: uppercase;
      }
      tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        transition: background 0.3s;
      }
      tr:hover {
        background: rgba(255, 255, 255, 0.01);
      }</code></pre>
            </div>
      
          </section>
      
        </div>
      
        <script src="script.js"></script>
        <script src="admin-panel.js"></script>
    </>
  );
}
