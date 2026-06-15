import React from 'react';

export default function charts(){
  return (
    <>
      <main className="main-home" id="main-content">
      
          <header className="page-header">
            <h1>Charts & Data Visualization Components</h1>
            <p>Modern, responsive analytics components using pure HTML, CSS, and Vanilla JavaScript. No heavy frameworks.</p>
          </header>
      
          <section className="component-grid" aria-label="Charts and visualization components">
      
            {/* 1. Analytics Dashboard Cards */}
            <div className="component-card" id="component-1">
              <div className="card-header">
                <h3>Dashboard Stat Cards</h3>
                <p>Premium stat cards with mini sparklines.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-1">
      
                <div className="stat-card-container">
                  <div className="stat-item">
                    <div className="chart-subtitle">Total Revenue</div>
                    <div className="stat-value">$45,231</div>
                    <div className="stat-change positive">
                      <i className="fa-solid fa-arrow-trend-up"></i> +12.5% this month
                    </div>
                    <div className="mini-sparkline"
                      style="background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2)); border-bottom: 2px solid var(--ch-green);">
                    </div>
                  </div>
      
                  <div className="stat-item">
                    <div className="chart-subtitle">Active Users</div>
                    <div className="stat-value">2,845</div>
                    <div className="stat-change negative">
                      <i className="fa-solid fa-arrow-trend-down"></i> -2.4% this week
                    </div>
                    <div className="mini-sparkline"
                      style="background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.2)); border-bottom: 2px solid var(--ch-pink);">
                    </div>
                  </div>
                </div>
      
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-1')"
                  aria-label="View HTML code for Dashboard Stat Cards" aria-expanded="false" aria-controls="code-1">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('preview-1', this)"
                  aria-label="Copy Dashboard Stat Cards component code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-1" role="region" aria-label="Code snippet for Dashboard Stat Cards">
                <pre>&lt;!-- Add charts.css for styles --&gt;
      &lt;div className="stat-card-container"&gt;
        &lt;div className="stat-item"&gt;
          &lt;div className="chart-subtitle"&gt;Total Revenue&lt;/div&gt;
          &lt;div className="stat-value"&gt;$45,231&lt;/div&gt;
          &lt;div className="stat-change positive"&gt;
            &lt;i className="fa-solid fa-arrow-trend-up"&gt;&lt;/i&gt; +12.5%
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
      
            {/* 2. Animated Bar Chart */}
            <div className="component-card" id="component-2">
              <div className="card-header">
                <h3>Responsive Bar Chart</h3>
                <p>Dynamic CSS bar chart with JS animation.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-2">
      
                <div className="chart-card">
          {/* 11. Candlestick Financial Chart */}
      <div className="component-card" id="component-11">
        <div className="card-header">
          <h3>Financial Candlestick Chart</h3>
          <p>Modern trading-style market activity chart.</p>
        </div>
      
        <div className="preview-box charts-wrapper" id="preview-11">
          <div className="chart-card candle-card">
      
            <div className="chart-header">
              <div>
                <h3 className="chart-title">BTC / USD</h3>
                <p className="chart-subtitle">24 Hour Market Trend</p>
              </div>
              <span className="market-badge positive">+8.2%</span>
            </div>
      
            <div className="candlestick-chart">
      
              <div className="candle positive" style="height:90px;">
                <span className="wick"></span>
              </div>
      
              <div className="candle negative" style="height:60px;">
                <span className="wick"></span>
              </div>
      
              <div className="candle positive" style="height:120px;">
                <span className="wick"></span>
              </div>
      
              <div className="candle positive" style="height:80px;">
                <span className="wick"></span>
              </div>
      
              <div className="candle negative" style="height:70px;">
                <span className="wick"></span>
              </div>
      
            </div>
          </div>
        </div>
      </div>
      
          {/* 2. Animated Bar Chart */}
          <div className="component-card" id="component-2">
            <div className="card-header">
              <h3>Responsive Bar Chart</h3>
              <p>Dynamic CSS bar chart with JS animation.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-2">
              
              <div className="chart-card">
                  <div className="chart-header">
                    <div>
                      <h3 className="chart-title">Weekly Traffic</h3>
                      <p className="chart-subtitle">Unique visitors over 7 days</p>
                    </div>
                    <div className="chart-actions">
                      <button><i className="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                  </div>
                  <div className="bar-chart" id="bar-chart-bars">
                    {/* Bars injected by charts.js */}
                  </div>
                </div>
      
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-2')"
                  aria-label="View HTML code for Responsive Bar Chart" aria-expanded="false" aria-controls="code-2">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('preview-2', this)"
                  aria-label="Copy Responsive Bar Chart code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-2" role="region" aria-label="Code snippet for Responsive Bar Chart">
                <pre>&lt;!-- CSS Bar Chart Container --&gt;
      &lt;div className="chart-card"&gt;
        &lt;h3 className="chart-title"&gt;Weekly Traffic&lt;/h3&gt;
        &lt;div className="bar-chart" id="bar-chart-bars"&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;!-- See charts.js for injection logic --&gt;</pre>
              </div>
            </div>
      
            {/* 3. Pie / Donut Chart */}
            <div className="component-card" id="component-3">
              <div className="card-header">
                <h3>Gradient Donut Chart</h3>
                <p>CSS Conic-gradient based donut chart.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-3">
      
                <div className="chart-card">
      
          {/* 12. Circular KPI Progress */}
      <div className="component-card" id="component-12">
      
        <div className="card-header">
          <h3>Circular KPI Ring</h3>
          <p>Animated radial metric component.</p>
        </div>
      
        <div className="preview-box charts-wrapper" id="preview-12">
      
          <div className="chart-card radial-card">
      
            <div className="radial-progress">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" className="ring-bg"></circle>
      
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  className="ring-progress"
                  stroke-dasharray="314"
                  stroke-dashoffset="60">
                </circle>
              </svg>
      
              <div className="radial-center">
                <h2>81%</h2>
                <span>Conversion</span>
              </div>
            </div>
      
          </div>
        </div>
      </div>
      
      {/* 13. Floating Wave Chart */}
      <div className="component-card" id="component-13">
      
        <div className="card-header">
          <h3>Floating Wave Analytics</h3>
          <p>Animated fluid SVG wave visualization.</p>
        </div>
      
        <div className="preview-box charts-wrapper" id="preview-13">
      
          <div className="chart-card wave-card">
      
            <div className="wave-top">
              <h2>72%</h2>
              <span>Storage Used</span>
            </div>
      
            <svg viewBox="0 0 500 120" className="wave-svg">
      
              <path
                className="wave-path"
                d="M0,60 C100,20 200,100 300,60 C400,20 500,100 500,60 L500,120 L0,120 Z">
              </path>
      
            </svg>
      
          </div>
        </div>
      </div>
      
      
      {/* 14. Neon Timeline Chart */}
      <div className="component-card" id="component-14">
      
        <div className="card-header">
          <h3>Neon Timeline Analytics</h3>
          <p>Cyberpunk inspired timeline graph.</p>
        </div>
      
        <div className="preview-box charts-wrapper" id="preview-14">
      
          <div className="chart-card neon-timeline-card">
      
            <div className="timeline-line"></div>
      
            <div className="timeline-node active">
              <span>Mon</span>
            </div>
      
            <div className="timeline-node">
              <span>Tue</span>
            </div>
      
            <div className="timeline-node">
              <span>Wed</span>
            </div>
      
            <div className="timeline-node">
              <span>Thu</span>
            </div>
      
            <div className="timeline-node">
              <span>Fri</span>
            </div>
      
          </div>
        </div>
      </div>
      
      {/* 15. Split Revenue Comparison */}
      <div className="component-card" id="component-15">
      
        <div className="card-header">
          <h3>Revenue Split Comparison</h3>
          <p>Dual-axis comparative growth bars.</p>
        </div>
      
        <div className="preview-box charts-wrapper" id="preview-15">
      
          <div className="chart-card split-chart-card">
      
            <div className="split-bar-group">
              <span>Q1</span>
      
              <div className="split-bars">
      
                <div className="split-bar purple" style="height:80px;"></div>
      
                <div className="split-bar cyan" style="height:55px;"></div>
      
              </div>
            </div>
      
            <div className="split-bar-group">
              <span>Q2</span>
      
              <div className="split-bars">
      
                <div className="split-bar purple" style="height:110px;"></div>
      
                <div className="split-bar cyan" style="height:70px;"></div>
      
              </div>
            </div>
      
            <div className="split-bar-group">
              <span>Q3</span>
      
              <div className="split-bars">
      
                <div className="split-bar purple" style="height:95px;"></div>
      
                <div className="split-bar cyan" style="height:88px;"></div>
      
              </div>
            </div>
      
          </div>
        </div>
      </div>
      
          {/* 3. Pie / Donut Chart */}
          <div className="component-card" id="component-3">
            <div className="card-header">
              <h3>Gradient Donut Chart</h3>
              <p>CSS Conic-gradient based donut chart.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-3">
              
              <div className="chart-card">
                  <div className="chart-header">
                    <h3 className="chart-title">Device Usage</h3>
                  </div>
                  <div className="donut-container">
                    <div className="donut-chart">
                      <div className="donut-hole">
                        <div className="donut-total">100%</div>
                        <div className="donut-label">Total Visits</div>
                      </div>
                    </div>
                  </div>
                  <div className="donut-legend">
                    <div className="legend-item">
                      <div className="legend-color" style="background: var(--ch-purple)"></div> Mobile
                    </div>
                    <div className="legend-item">
                      <div className="legend-color" style="background: var(--ch-cyan)"></div> Desktop
                    </div>
                    <div className="legend-item">
                      <div className="legend-color" style="background: var(--ch-pink)"></div> Tablet
                    </div>
                  </div>
                </div>
      
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-3')"
                  aria-label="View HTML code for Gradient Donut Chart" aria-expanded="false" aria-controls="code-3">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('preview-3', this)"
                  aria-label="Copy Gradient Donut Chart code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-3" role="region" aria-label="Code snippet for Gradient Donut Chart">
                <pre>&lt;div className="donut-container"&gt;
        &lt;div className="donut-chart" style="background: conic-gradient(#8b5cf6 0% 45%, #06b6d4 45% 75%, #ec4899 75% 100%);"&gt;
          &lt;div className="donut-hole"&gt;
            &lt;div className="donut-total"&gt;100%&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
      
            {/* 4. Progress Analytics Graph */}
            <div className="component-card" id="component-4">
              <div className="card-header">
                <h3>Target Progress Metrics</h3>
                <p>Animated shimmer progress bars.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-4">
      
                <div className="chart-card">
                  <div className="chart-header">
                    <h3 className="chart-title">Monthly Goals</h3>
                  </div>
                  <div className="progress-list">
                    <div className="progress-item">
                      <div className="progress-info">
                        <span>New Signups</span>
                        <span>80%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style="width: 80%; background: var(--ch-cyan);"></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <div className="progress-info">
                        <span>Revenue Target</span>
                        <span>65%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style="width: 65%; background: var(--ch-purple);"></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <div className="progress-info">
                        <span>Customer Retention</span>
                        <span>92%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style="width: 92%; background: var(--ch-green);"></div>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-4')"
                  aria-label="View HTML code for Target Progress Metrics" aria-expanded="false" aria-controls="code-4">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('preview-4', this)"
                  aria-label="Copy Target Progress Metrics code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-4" role="region" aria-label="Code snippet for Target Progress Metrics">
                <pre>&lt;div className="progress-item"&gt;
        &lt;div className="progress-info"&gt;
          &lt;span&gt;New Signups&lt;/span&gt;&lt;span&gt;80%&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="progress-track"&gt;
          &lt;div className="progress-fill" style="width: 80%; background: #06b6d4;"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</pre>
              </div>
            </div>
      
            {/* 5. SVG Line Activity Graph */}
            <div className="component-card" id="component-5">
              <div className="card-header">
                <h3>SVG Line Activity Tracker</h3>
                <p>Interactive smooth SVG line graph.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-5">
      
                <div className="chart-card">
                  <div className="chart-header">
                    <h3 className="chart-title">Server Activity</h3>
                  </div>
      
                  <svg className="svg-line-chart" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="pinkGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="var(--ch-pink)" stop-opacity="0.8" />
                        <stop offset="100%" stop-color="var(--ch-pink)" stop-opacity="0" />
                      </linearGradient>
                    </defs>
      
                    {/* Area */}
                    <path className="svg-area" d="M0,120 L0,80 Q50,40 100,60 T200,30 T300,70 T400,20 L400,120 Z"></path>
      
                    {/* Line */}
                    <path className="svg-line" d="M0,80 Q50,40 100,60 T200,30 T300,70 T400,20"></path>
      
                    {/* Points */}
                    <circle className="svg-point" cx="0" cy="80" r="4" data-value="80"></circle>
                    <circle className="svg-point" cx="100" cy="60" r="4" data-value="60"></circle>
                    <circle className="svg-point" cx="200" cy="30" r="4" data-value="30"></circle>
                    <circle className="svg-point" cx="300" cy="70" r="4" data-value="70"></circle>
                    <circle className="svg-point" cx="400" cy="20" r="4" data-value="20"></circle>
                  </svg>
      
                  <div className="heatmap-grid" id="heatmap-grid">
                    {/* Heatmap cells injected by JS */}
                  </div>
                </div>
      
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-5')"
                  aria-label="View HTML code for SVG Line Activity Tracker" aria-expanded="false" aria-controls="code-5">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('preview-5', this)"
                  aria-label="Copy SVG Line Activity Tracker code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-5" role="region" aria-label="Code snippet for SVG Line Activity Tracker">
                <pre>&lt;svg className="svg-line-chart" viewBox="0 0 400 120"&gt;
        &lt;path className="svg-line" d="M0,80 Q50,40 100,60 T200,30 T300,70 T400,20"&gt;&lt;/path&gt;
        &lt;circle className="svg-point" cx="100" cy="60" r="4"&gt;&lt;/circle&gt;
      &lt;/svg&gt;</pre>
              </div>
            </div>
      
            {/* 6. Interactive Area Chart */}
            <div className="component-card" id="component-6">
              <div className="card-header">
                <h3>Interactive Area Chart</h3>
                <p>Smooth SVG area chart with real-time mouse hover tracking.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-6" style="padding: 1.5rem 1rem;">
                <div className="chart-card interactive-area-chart" id="area-chart-6">
                  <div className="area-tooltip" id="area-tooltip-el">
                    <span className="tooltip-time">12:00 PM</span>
                    <span className="tooltip-val">580 Users</span>
                  </div>
                  <div className="marker-line" id="marker-line-el"></div>
                  <svg className="area-svg" viewBox="0 0 500 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGrad6" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="var(--ch-cyan)" stop-opacity="0.45" />
                        <stop offset="100%" stop-color="var(--ch-cyan)" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="area-fill-path" d="M0,160 L0,110 Q100,50 200,90 T400,30 L500,60 L500,160 Z"
                      fill="url(#areaGrad6)"></path>
                    <path className="area-line-path" d="M0,110 Q100,50 200,90 T400,30 L500,60" fill="none" stroke="var(--ch-cyan)"
                      stroke-width="3"></path>
      
                    <circle cx="0" cy="110" r="5" className="tracker-node" data-index="0" data-x="0" data-y="110" data-val="120"
                      data-time="09:00 AM"></circle>
                    <circle cx="100" cy="50" r="5" className="tracker-node" data-index="1" data-x="100" data-y="50" data-val="350"
                      data-time="11:00 AM"></circle>
                    <circle cx="200" cy="90" r="5" className="tracker-node" data-index="2" data-x="200" data-y="90" data-val="210"
                      data-time="01:00 PM"></circle>
                    <circle cx="300" cy="60" r="5" className="tracker-node" data-index="3" data-x="300" data-y="60" data-val="430"
                      data-time="03:00 PM"></circle>
                    <circle cx="400" cy="30" r="5" className="tracker-node" data-index="4" data-x="400" data-y="30" data-val="580"
                      data-time="05:00 PM"></circle>
                    <circle cx="500" cy="60" r="5" className="tracker-node" data-index="5" data-x="500" data-y="60" data-val="490"
                      data-time="07:00 PM"></circle>
                  </svg>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-6', this)"
                  aria-label="View HTML code for Interactive Area Chart" aria-expanded="false" aria-controls="code-6">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('code-6-text', this)"
                  aria-label="Copy Interactive Area Chart code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-6" role="region" aria-label="Code snippet for Interactive Area Chart">
                <pre id="code-6-text"><code>&lt;div className="chart-card interactive-area-chart"&gt;
        &lt;div className="area-tooltip"&gt;
          &lt;span className="tooltip-time"&gt;12:00 PM&lt;/span&gt;
          &lt;span className="tooltip-val"&gt;580 Users&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="marker-line"&gt;&lt;/div&gt;
        &lt;svg className="area-svg" viewBox="0 0 500 160"&gt;
          &lt;path d="M0,160 L0,110 Q100,50 200,90 T400,30 L500,60 L500,160 Z" fill="url(#areaGrad)"&gt;&lt;/path&gt;
          &lt;path d="M0,110 Q100,50 200,90 T400,30 L500,60" fill="none" stroke="#06b6d4" stroke-width="3"&gt;&lt;/path&gt;
        &lt;/svg&gt;
      &lt;/div&gt;</code></pre>
              </div>
            </div>
      
            {/* 7. Glassmorphism Pie Chart */}
            <div className="component-card" id="component-7">
              <div className="card-header">
                <h3>Glassmorphism Pie Chart</h3>
                <p>Premium frosted glass conic-gradient pie layout with core overlay.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-7" style="padding: 1.5rem 1rem;">
                <div className="chart-card glass-pie-card">
                  <div className="pie-container">
                    <div className="glass-pie" id="glass-pie-el"></div>
                    <div className="glass-pie-center">
                      <span id="pie-center-value">45%</span>
                      <span id="pie-center-label">Chrome</span>
                    </div>
                  </div>
                  <div className="glass-pie-legend">
                    <span className="pie-legend-tag active" data-pct="45" data-browser="Chrome"
                      style="border-color: var(--ch-purple)">Chrome</span>
                    <span className="pie-legend-tag" data-pct="30" data-browser="Safari"
                      style="border-color: var(--ch-cyan)">Safari</span>
                    <span className="pie-legend-tag" data-pct="15" data-browser="Firefox"
                      style="border-color: var(--ch-pink)">Firefox</span>
                    <span className="pie-legend-tag" data-pct="10" data-browser="Edge"
                      style="border-color: var(--ch-orange)">Edge</span>
                  </div>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-7', this)"
                  aria-label="View HTML code for Glassmorphism Pie Chart" aria-expanded="false" aria-controls="code-7">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('code-7-text', this)"
                  aria-label="Copy Glassmorphism Pie Chart code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-7" role="region" aria-label="Code snippet for Glassmorphism Pie Chart">
                <pre id="code-7-text"><code>&lt;div className="chart-card glass-pie-card"&gt;
        &lt;div className="pie-container"&gt;
          &lt;div className="glass-pie" style="background: conic-gradient(#8b5cf6 0% 45%, #06b6d4 45% 75%, #ec4899 75% 90%, #f59e0b 90% 100%);"&gt;&lt;/div&gt;
          &lt;div className="glass-pie-center"&gt;
            &lt;span&gt;45%&lt;/span&gt;
            &lt;span&gt;Chrome&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
              </div>
            </div>
      
            {/* 8. Animated Radar Chart */}
            <div className="component-card" id="component-8">
              <div className="card-header">
                <h3>Animated Radar Chart</h3>
                <p>Concentric SVG pentagon axes with dynamic profile selector triggers.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-8" style="padding: 1rem;">
                <div className="chart-card radar-card">
                  <div className="profile-selectors">
                    <button className="profile-tab active" onclick="switchRadarProfile('striker', this)">Striker</button>
                    <button className="profile-tab" onclick="switchRadarProfile('balanced', this)">Balanced</button>
                    <button className="profile-tab" onclick="switchRadarProfile('defender', this)">Defender</button>
                  </div>
                  <svg className="radar-svg" viewBox="0 0 200 200">
                    <polygon points="100,10 185,72 153,171 47,171 15,72" className="radar-grid-bg"></polygon>
                    <polygon points="100,32.5 163.75,79 139.75,153.25 60.25,153.25 36.25,79" className="radar-grid-bg"></polygon>
                    <polygon points="100,55 142.5,86 126.5,135.5 73.5,135.5 57.5,86" className="radar-grid-bg"></polygon>
                    <polygon points="100,77.5 121.25,93 113.25,117.75 86.75,117.75 78.75,93" className="radar-grid-bg"></polygon>
      
                    <line x1="100" y1="100" x2="100" y2="10" className="radar-axis"></line>
                    <line x1="100" y1="100" x2="185" y2="72" className="radar-axis"></line>
                    <line x1="100" y1="100" x2="153" y2="171" className="radar-axis"></line>
                    <line x1="100" y1="100" x2="47" y2="171" className="radar-axis"></line>
                    <line x1="100" y1="100" x2="15" y2="72" className="radar-axis"></line>
      
                    <polygon points="100,30 176,82 121,128 73,128 40,78" className="radar-poly" id="radar-poly-el"></polygon>
      
                    <text x="100" y="8" className="radar-label" text-anchor="middle">ATK</text>
                    <text x="190" y="75" className="radar-label" text-anchor="start">SPD</text>
                    <text x="158" y="183" className="radar-label" text-anchor="start">DEF</text>
                    <text x="42" y="183" className="radar-label" text-anchor="end">STM</text>
                    <text x="10" y="75" className="radar-label" text-anchor="end">TEC</text>
                  </svg>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-8', this)"
                  aria-label="View HTML code for Animated Radar Chart" aria-expanded="false" aria-controls="code-8">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('code-8-text', this)"
                  aria-label="Copy Animated Radar Chart code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-8" role="region" aria-label="Code snippet for Animated Radar Chart">
                <pre id="code-8-text"><code>&lt;svg className="radar-svg" viewBox="0 0 200 200"&gt;
        &lt;polygon points="100,10 185,72 153,171 47,171 15,72" className="radar-grid"&gt;&lt;/polygon&gt;
        &lt;polygon points="100,30 176,82 121,128 73,128 40,78" className="radar-active-poly"&gt;&lt;/polygon&gt;
      &lt;/svg&gt;</code></pre>
              </div>
            </div>
      
            {/* 9. Real-Time Analytics Graph */}
            <div className="component-card" id="component-9">
              <div className="card-header">
                <h3>Real-Time Analytics Graph</h3>
                <p>Smooth crawling streaming graph using progressive coordinate injection.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-9" style="padding: 1.5rem 1rem;">
                <div className="chart-card real-time-card">
                  <div className="real-time-header">
                    <span className="live-dot-tag"><span className="live-pulse"></span>LIVE STREAMS</span>
                    <span className="real-time-value" id="rt-value-el">45.2 MB/s</span>
                  </div>
                  <svg className="real-time-svg" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="rtGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="var(--ch-purple)" stop-opacity="0.3" />
                        <stop offset="100%" stop-color="var(--ch-purple)" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                    <path id="rt-area-el" className="rt-area" fill="url(#rtGradient)" d="M0,120 L400,120 Z"></path>
                    <path id="rt-path-el" className="rt-line" d="M0,120 L400,120" fill="none" stroke="var(--ch-purple)"
                      stroke-width="3"></path>
                  </svg>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-9', this)"
                  aria-label="View HTML code for Real-Time Analytics Graph" aria-expanded="false" aria-controls="code-9">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('code-9-text', this)"
                  aria-label="Copy Real-Time Analytics Graph code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-9" role="region" aria-label="Code snippet for Real-Time Analytics Graph">
                <pre id="code-9-text"><code>&lt;div className="chart-card real-time-card"&gt;
        &lt;span className="live-dot-tag"&gt;&lt;span className="live-pulse"&gt;&lt;/span&gt;LIVE&lt;/span&gt;
        &lt;svg viewBox="0 0 400 120"&gt;
          &lt;path id="realtime-line-path" fill="none" stroke="#8b5cf6" stroke-width="3"&gt;&lt;/path&gt;
        &lt;/svg&gt;
      &lt;/div&gt;</code></pre>
              </div>
            </div>
      
            {/* 10. Heatmap Activity Grid */}
            <div className="component-card" id="component-10">
              <div className="card-header">
                <h3>Heatmap Activity Grid</h3>
                <p>Interactive calendar grid tracking 364 annual commit contribution details.</p>
              </div>
              <div className="preview-box charts-wrapper" id="preview-10" style="padding: 1.5rem 1rem;">
                <div className="chart-card annual-heatmap-card">
                  <div className="heatmap-header">
                    <span>Activity Log (2026)</span>
                    <div className="heatmap-key">
                      <span>Less</span>
                      <span className="key-cell level-0"></span>
                      <span className="key-cell level-1"></span>
                      <span className="key-cell level-2"></span>
                      <span className="key-cell level-3"></span>
                      <span className="key-cell level-4"></span>
                      <span>More</span>
                    </div>
                  </div>
                  <div className="annual-grid" id="annual-grid-el"></div>
                  <div className="heatmap-detail-card" id="heatmap-detail-el">
                    Hover over cells to see activity
                  </div>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-code" onclick="toggleCode('code-10', this)"
                  aria-label="View HTML code for Heatmap Activity Grid" aria-expanded="false" aria-controls="code-10">
                  <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
                </button>
                <button className="btn btn-copy" onclick="copyCode('code-10-text', this)"
                  aria-label="Copy Heatmap Activity Grid code">
                  <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
                </button>
              </div>
              <div className="code-snippet" id="code-10" role="region" aria-label="Code snippet for Heatmap Activity Grid">
                <pre id="code-10-text"><code>&lt;div className="chart-card annual-heatmap-card"&gt;
        &lt;div className="annual-grid" id="annual-grid"&gt;&lt;/div&gt;
        &lt;div className="heatmap-detail-card"&gt;Hover over cells to see activity&lt;/div&gt;
      &lt;/div&gt;</code></pre>
              </div>
            </div>
      
          </section>
          {/* 11. Revenue Split Bars */}
          <div className="component-card" id="component-11">
            <div className="card-header">
              <h3>Revenue Split Bars</h3>
              <p>Compact stacked share bars for channel mix and product splits.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-11" style="padding: 1.25rem 1rem;">
              <div className="chart-card split-card">
                <div className="chart-header">
                  <div>
                    <h3 className="chart-title">Revenue by Channel</h3>
                    <p className="chart-subtitle">Last 30 days</p>
                  </div>
                </div>
                <div className="split-list">
                  <div className="split-row">
                    <span className="split-label">Direct</span>
                    <div className="split-track"><div className="split-fill split-cyan" style="width: 42%"></div></div>
                    <span className="split-value">42%</span>
                  </div>
                  <div className="split-row">
                    <span className="split-label">Paid</span>
                    <div className="split-track"><div className="split-fill split-purple" style="width: 28%"></div></div>
                    <span className="split-value">28%</span>
                  </div>
                  <div className="split-row">
                    <span className="split-label">Organic</span>
                    <div className="split-track"><div className="split-fill split-green" style="width: 18%"></div></div>
                    <span className="split-value">18%</span>
                  </div>
                  <div className="split-row">
                    <span className="split-label">Referral</span>
                    <div className="split-track"><div className="split-fill split-orange" style="width: 12%"></div></div>
                    <span className="split-value">12%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-code" onclick="toggleCode('code-11', this)" aria-label="View HTML code for Revenue Split Bars" aria-expanded="false" aria-controls="code-11">
                <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
              </button>
              <button className="btn btn-copy" onclick="copyCode('code-11-text', this)" aria-label="Copy Revenue Split Bars code">
                <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
              </button>
            </div>
            <div className="code-snippet" id="code-11" role="region" aria-label="Code snippet for Revenue Split Bars">
              <pre id="code-11-text"><code>&lt;div className="chart-card split-card"&gt;
        &lt;div className="split-row"&gt;
          &lt;span className="split-label"&gt;Direct&lt;/span&gt;
          &lt;div className="split-track"&gt;&lt;div className="split-fill split-cyan" style="width: 42%"&gt;&lt;/div&gt;&lt;/div&gt;
          &lt;span className="split-value"&gt;42%&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
            </div>
          </div>
      
          {/* 12. Circular KPI Gauge */}
          <div className="component-card" id="component-12">
            <div className="card-header">
              <h3>Circular KPI Gauge</h3>
              <p>Quick performance dial with a bright center readout.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-12" style="padding: 1.25rem 1rem;">
              <div className="chart-card gauge-card">
                <div className="chart-header">
                  <div>
                    <h3 className="chart-title">Conversion Health</h3>
                    <p className="chart-subtitle">Pipeline score</p>
                  </div>
                </div>
                <div className="gauge-ring" style="background: conic-gradient(var(--ch-green) 0% 78%, rgba(255,255,255,0.08) 78% 100%);">
                  <div className="gauge-center">
                    <span className="gauge-value">78%</span>
                    <span className="gauge-label">On Track</span>
                  </div>
                </div>
                <div className="gauge-footer"><span>Target</span><strong>100%</strong></div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-code" onclick="toggleCode('code-12', this)" aria-label="View HTML code for Circular KPI Gauge" aria-expanded="false" aria-controls="code-12">
                <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
              </button>
              <button className="btn btn-copy" onclick="copyCode('code-12-text', this)" aria-label="Copy Circular KPI Gauge code">
                <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
              </button>
            </div>
            <div className="code-snippet" id="code-12" role="region" aria-label="Code snippet for Circular KPI Gauge">
              <pre id="code-12-text"><code>&lt;div className="chart-card gauge-card"&gt;
        &lt;div className="gauge-ring" style="background: conic-gradient(#10b981 0% 78%, rgba(255,255,255,0.08) 78% 100%);"&gt;
          &lt;div className="gauge-center"&gt;
            &lt;span className="gauge-value"&gt;78%&lt;/span&gt;
            &lt;span className="gauge-label"&gt;On Track&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
            </div>
          </div>
      
          {/* 13. Dual Trend Comparison */}
          <div className="component-card" id="component-13">
            <div className="card-header">
              <h3>Dual Trend Comparison</h3>
              <p>Side-by-side line comparison for current and previous period.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-13" style="padding: 1.25rem 1rem;">
              <div className="chart-card comparison-card">
                <div className="chart-header">
                  <div>
                    <h3 className="chart-title">Sales Trend</h3>
                    <p className="chart-subtitle">This month vs last month</p>
                  </div>
                </div>
                <svg className="comparison-svg" viewBox="0 0 420 150" preserveAspectRatio="none">
                  <path d="M0,110 Q60,70 105,82 T210,52 T315,64 T420,28" fill="none" stroke="var(--ch-cyan)" stroke-width="4" stroke-linecap="round"></path>
                  <path d="M0,125 Q60,110 105,118 T210,96 T315,104 T420,80" fill="none" stroke="var(--ch-purple)" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8"></path>
                  <path d="M0,110 Q60,70 105,82 T210,52 T315,64 T420,28 L420,150 L0,150 Z" fill="rgba(6,182,212,0.12)"></path>
                </svg>
                <div className="comparison-legend">
                  <span><i className="legend-swatch cyan"></i> Current</span>
                  <span><i className="legend-swatch purple"></i> Previous</span>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-code" onclick="toggleCode('code-13', this)" aria-label="View HTML code for Dual Trend Comparison" aria-expanded="false" aria-controls="code-13">
                <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
              </button>
              <button className="btn btn-copy" onclick="copyCode('code-13-text', this)" aria-label="Copy Dual Trend Comparison code">
                <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
              </button>
            </div>
            <div className="code-snippet" id="code-13" role="region" aria-label="Code snippet for Dual Trend Comparison">
              <pre id="code-13-text"><code>&lt;svg className="comparison-svg" viewBox="0 0 420 150"&gt;
        &lt;path d="M0,110 Q60,70 105,82 T210,52 T315,64 T420,28" stroke="#06b6d4" stroke-width="4" fill="none"&gt;&lt;/path&gt;
        &lt;path d="M0,125 Q60,110 105,118 T210,96 T315,104 T420,80" stroke="#8b5cf6" stroke-width="4" fill="none" stroke-dasharray="8 8"&gt;&lt;/path&gt;
      &lt;/svg&gt;</code></pre>
            </div>
          </div>
      
          {/* 14. Funnel Conversion Flow */}
          <div className="component-card" id="component-14">
            <div className="card-header">
              <h3>Funnel Conversion Flow</h3>
              <p>Clear step-down funnel for conversions and drop-off analysis.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-14" style="padding: 1.25rem 1rem;">
              <div className="chart-card funnel-card">
                <div className="chart-header">
                  <div>
                    <h3 className="chart-title">Signup Funnel</h3>
                    <p className="chart-subtitle">Live conversion overview</p>
                  </div>
                </div>
                <div className="funnel-stack">
                  <div className="funnel-step step-1"><span>Visits</span><strong>12.4K</strong></div>
                  <div className="funnel-step step-2"><span>Signups</span><strong>6.8K</strong></div>
                  <div className="funnel-step step-3"><span>Trials</span><strong>3.5K</strong></div>
                  <div className="funnel-step step-4"><span>Paid</span><strong>1.9K</strong></div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-code" onclick="toggleCode('code-14', this)" aria-label="View HTML code for Funnel Conversion Flow" aria-expanded="false" aria-controls="code-14">
                <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
              </button>
              <button className="btn btn-copy" onclick="copyCode('code-14-text', this)" aria-label="Copy Funnel Conversion Flow code">
                <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
              </button>
            </div>
            <div className="code-snippet" id="code-14" role="region" aria-label="Code snippet for Funnel Conversion Flow">
              <pre id="code-14-text"><code>&lt;div className="funnel-stack"&gt;
        &lt;div className="funnel-step step-1"&gt;&lt;span&gt;Visits&lt;/span&gt;&lt;strong&gt;12.4K&lt;/strong&gt;&lt;/div&gt;
        &lt;div className="funnel-step step-2"&gt;&lt;span&gt;Signups&lt;/span&gt;&lt;strong&gt;6.8K&lt;/strong&gt;&lt;/div&gt;
      &lt;/div&gt;</code></pre>
            </div>
          </div>
      
          {/* 15. Bubble Insight Matrix */}
          <div className="component-card" id="component-15">
            <div className="card-header">
              <h3>Bubble Insight Matrix</h3>
              <p>Quick-glance bubble sizing for engagement, impact, and priority.</p>
            </div>
            <div className="preview-box charts-wrapper" id="preview-15" style="padding: 1.25rem 1rem;">
              <div className="chart-card bubble-card">
                <div className="chart-header">
                  <div>
                    <h3 className="chart-title">Engagement Matrix</h3>
                    <p className="chart-subtitle">Audience touchpoints</p>
                  </div>
                </div>
                <div className="bubble-grid">
                  <div className="bubble-node size-lg cyan">A</div>
                  <div className="bubble-node size-md purple">B</div>
                  <div className="bubble-node size-sm green">C</div>
                  <div className="bubble-node size-md orange">D</div>
                  <div className="bubble-node size-lg pink">E</div>
                  <div className="bubble-node size-sm cyan">F</div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-code" onclick="toggleCode('code-15', this)" aria-label="View HTML code for Bubble Insight Matrix" aria-expanded="false" aria-controls="code-15">
                <i className="fa-solid fa-code" aria-hidden="true"></i> View Code
              </button>
              <button className="btn btn-copy" onclick="copyCode('code-15-text', this)" aria-label="Copy Bubble Insight Matrix code">
                <i className="fa-regular fa-copy" aria-hidden="true"></i> Copy
              </button>
            </div>
            <div className="code-snippet" id="code-15" role="region" aria-label="Code snippet for Bubble Insight Matrix">
              <pre id="code-15-text"><code>&lt;div className="bubble-grid"&gt;
        &lt;div className="bubble-node size-lg cyan"&gt;A&lt;/div&gt;
        &lt;div className="bubble-node size-md purple"&gt;B&lt;/div&gt;
        &lt;div className="bubble-node size-sm green"&gt;C&lt;/div&gt;
      &lt;/div&gt;</code></pre>
            </div>
          </div>
      
        </section>
      
        {/* Scroll to Top */}
        <button id="scrollTopBtn" onclick="scrollToTop()" aria-label="Scroll to top of page">
          <i className="fa-solid fa-chevron-up" aria-hidden="true"></i>
        </button>
      
        {/* Copy Toast */}
        <div id="copyToast" className="copy-toast"><i className="fa-solid fa-check"></i> Copied to clipboard!</div>
      
      </main>
    </>
  );
}
