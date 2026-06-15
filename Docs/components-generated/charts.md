# Charts

Component ID: charts

- Path: charts.html
- Version: 0.0.1
- Documentation score: 100/100
- Tags: charts, graphs, analytics, data, visualization
- Description: Chart and data visualization components

## Assets

- CSS: accessibility.css, charts.css, dist/shared.css, home.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css, shared-sidebar.css, style.css
- JS: charts.js, dist/shared.js

## Headings

- H1: Charts & Data Visualization Components
- H3: Dashboard Stat Cards
- H3: Sunburst Chart
- H3: Chord Diagram
- H3: Stream Graph
- H3: Stacked Area Chart
- H3: User Growth
- H3: Parallel Coordinates

## Usage Snippet

```html
<section class="component-grid" aria-label="Charts and visualization components">

      <!-- 1. Analytics Dashboard Cards -->
      <div class="component-card" id="component-1">
        <div class="card-header">
          <h3>Dashboard Stat Cards</h3>
          <p>Premium stat cards with mini sparklines.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-1">

          <div class="stat-card-container">
            <div class="stat-item">
              <div class="chart-subtitle">Total Revenue</div>
              <div class="stat-value">$45,231</div>
              <div class="stat-change positive">
                <i class="fa-solid fa-arrow-trend-up"></i> +12.5% this month
              </div>
              <div class="mini-sparkline"
                style="background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2)); border-bottom: 2px solid var(--ch-green);">
              </div>
            </div>

            <div class="stat-item">
              <div class="chart-subtitle">Active Users</div>
              <div class="stat-value">2,845</div>
              <div class="stat-change negative">
                <i class="fa-solid fa-arrow-trend-down"></i> -2.4% this week
              </div>
              <div class="mini-sparkline"
                style="background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.2)); border-bottom: 2px solid var(--ch-pink);">
              </div>
            </div>
          </div>

        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-1')"
            aria-label="View HTML code for Dashboard Stat Cards" aria-expanded="false" aria-controls="code-1">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('preview-1', this)"
            aria-label="Copy Dashboard Stat Cards component code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-1" role="region" aria-label="Code snippet for Dashboard Stat Cards">
          <pre>&lt;!-- Add charts.css for styles --&gt;
&lt;div class="stat-card-container"&gt;
  &lt;div class="stat-item"&gt;
    &lt;div class="chart-subtitle"&gt;Total Revenue&lt;/div&gt;
    &lt;div class="stat-value"&gt;$45,231&lt;/div&gt;
    &lt;div class="stat-change positive"&gt;
      &lt;i class="fa-solid fa-arrow-trend-up"&gt;&lt;/i&gt; +12.5%
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
      </div>
    </div>
<div class="component-card" id="component-31">
  <div class="card-header">
    <h3>Sunburst Chart</h3>
    <p>Radial hierarchy visualization.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="sunburst-chart">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>
    </div>
  </div>
</div>

<div class="component-card" id="component-32">
  <div class="card-header">
    <h3>Chord Diagram</h3>
    <p>Visualize data flow between groups.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <svg viewBox="0 0 300 300" class="chord-svg">
      <circle cx="150" cy="150" r="100"></circle>

      <path d="M100 80 Q150 150 220 120"
            class="chord-link"></path>

      <path d="M80 180 Q150 150 220 220"
            class="chord-link"></path>
    </svg>
  </div>
</div>

<div class="component-card" id="component-33">
  <div class="card-header">
    <h3>Stream Graph</h3>
    <p>Flowing stacked trends over time.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 500 180">

      <path class="stream-layer layer-1"
      d="M0 90 Q120 40 240 90 T500 70"></path>

      <path class="stream-layer layer-2"
      d="M0 120 Q120 70 240 120 T500 100"></path>

    </svg>

  </div>
</div>

    <div class="component-card" id="component-16">
  <div class="card-header">
    <h3>Stacked Area Chart</h3>
    <p>Multi-series trend visualization with layered data flow.</p>
  </div>
  <div class="preview-box charts-wrapper">
    <div class="chart-card stacked-area-card">
      
      <div class="chart-header">
        <h3 class="chart-title">User Growth</h3>
        <p class="chart-subtitle">Organic vs Paid vs Referral</p>
      </div>

      <svg viewBox="0 0 500 160" class="stacked-area-svg">

        <path d="M0,160 L0,120 Q100,90 200,110 T500,80 L500,160 Z"
              fill="rgba(139,92,246,0.4)"></path>

        <path d="M0,160 L0,100 Q100,70 200,90 T500,60 L500,160 Z"
              fill="rgba(6,182,212,0.3)"></path>

        <path d="M0,160 L0,80 Q100,50 200,70 T500,40 L500,160 Z"
              fill="rgba(236,72,153,0.25)"></path>

      </svg>
    </div>
  </div>
</div>

  <div class="component-card" id="component-34">
  <div class="card-header">
    <h3>Parallel Coordinates</h3>
    <p>Multi-dimensional comparison.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 500 200">

      <line x1="50" y1="20" x2="50" y2="180"></line>
      <line x1="150" y1="20" x2="150" y2="180"></line>
      <line x1="250" y1="20" x2="250" y2="180"></line>
      <line x1="350" y1="20" x2="350" y2="180"></line>

      <polyline points="50,70 150,40 250,120 350,80"
      class="parallel-line"></polyline>

    </svg>

  </div>
</div>

<div class="component-card" id="component-35">
  <div class="card-header">
    <h3>Box Plot</h3>
    <p>Distribution and quartile analysis.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 400 160">

      <line x1="50" y1="80" x2="350" y2="80"></line>

      <rect x="130" y="50"
      width="120"
      height="60"></rect>

      <line x1="190" y1="50"
      x2="190" y2="110"></line>

    </svg>

  </div>
</div>


<div class="component-card" id="component-36">
  <div class="card-header">
    <h3>Violin Plot</h3>
    <p>Density distribution chart.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 250 200">

      <path
      d="M125 20
      C70 60 70 140 125 180
      C180 140 180 60 125 20"
      class="violin-shape"></path>

    </svg>

  </div>
</div>

<div class="component-card" id="component-37">
  <div class="card-header">
    <h3>Gantt Chart</h3>
    <p>Project planning timeline.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="gantt-chart">

      <div class="gantt-row">
        <span>Design</span>
        <div class="gantt-bar" style="width:40%"></div>
      </div>

      <div class="gantt-row">
        <span>Development</span>
        <div class="gantt-bar" style="width:70%"></div>
      </div>

    </div>

  </div>
</div>


<div class="component-card" id="component-38">
  <div class="card-header">
    <h3>Cohort Retention</h3>
    <p>User retention heatmap.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="cohort-grid">

      <div class="cohort-cell high"></div>
      <div class="cohort-cell medium"></div>
      <div class="cohort-cell low"></div>

    </div>

  </div>
</div>

<div class="component-card" id="component-39">
  <div class="card-header">
    <h3>Forecast Chart</h3>
    <p>Predicted future growth.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 500 180">

      <path
      d="M0 130 Q100 90 200 100 T350 70"
      class="actual-line"></path>

      <path
      d="M350 70 Q420 40 500 20"
      class="forecast-line"></path>

    </svg>

  </div>
</div>

<div class="component-card" id="component-40">
  <div class="card-header">
    <h3>Candlestick + Volume</h3>
    <p>Professional trading dashboard.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="trading-chart">

      <svg viewBox="0 0 500 250">
        <!-- Candlesticks -->
      </svg>

      <div class="volume-bars">

        <div class="volume-bar"></div>
        <div class="volume-bar"></div>
        <div class="volume-bar"></div>

      </div>

    </div>

  </div>
</div>

<div class="component-card" id="component-41">
  <div class="card-header">
    <h3>World Analytics Map</h3>
    <p>Traffic by country.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 600 300" class="world-map-svg">
      <!-- Simplified SVG continents -->
    </svg>

  </div>
</div>

<div class="component-card" id="component-21">
  <div class="card-header">
    <h3>Waterfall Revenue Chart</h3>
    <p>Visualize gains and losses across a process.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="chart-card waterfall-card">

      <div class="waterfall-bar positive" style="height:120px">
        <span>+12k</span>
      </div>

      <div class="waterfall-bar negative" style="height:80px">
        <span>-4k</span>
      </div>

      <div class="waterfall-bar positive" style="height:100px">
        <span>+8k</span>
      </div>

      <div class="waterfall-bar total" style="height:140px">
        <span>16k</span>
      </div>

    </div>
  </div>
</div>


<div class="component-card" id="component-22">
  <div class="card-header">
    <h3>Treemap Analytics</h3>
    <p>Hierarchical performance visualization.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="chart-card treemap-card">

      <div class="tree-box large">Marketing</div>
      <div class="tree-box medium">Sales</div>
      <div class="tree-box small">Support</div>
      <div class="tree-box medium">SEO</div>

    </div>
  </div>
</div>

<div class="component-card" id="component-23">
  <div class="card-header">
    <h3>Polar Area Chart</h3>
    <p>Segment-based radial comparison.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="chart-card polar-card">

      <div class="polar-segment p1"></div>
      <div class="polar-segment p2"></div>
      <div class="polar-segment p3"></div>
      <div class="polar-segment p4"></div>

    </div>
  </div>
</div>

<div class="component-card" id="component-24">
  <div class="card-header">
    <h3>Scatter Plot</h3>
    <p>Relationship between two variables.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 400 200" class="scatter-svg">
      <circle cx="50" cy="120" r="6"></circle>
      <circle cx="120" cy="80" r="6"></circle>
      <circle cx="200" cy="60" r="6"></circle>
      <circle cx="310" cy="40" r="6"></circle>
    </svg>

  </div>
</div>

<div class="component-card" id="component-25">
  <div class="card-header">
    <h3>Timeline Performance</h3>
    <p>Milestone-based growth tracking.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="timeline-chart">

      <div class="timeline-node active">
        <span>Q1</span>
      </div>

      <div class="timeline-node active">
        <span>Q2</span>
      </div>

      <div class="timeline-node">
        <span>Q3</span>
      </div>

      <div class="timeline-node">
        <span>Q4</span>
      </div>

    </div>

  </div>
</div>

<div class="component-card" id="component-26">
  <div class="card-header">
    <h3>Radial Progress Group</h3>
    <p>Multiple KPI progress indicators.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="radial-grid">

      <div class="radial-item">
        <div class="radial-circle">82%</div>
        <span>Sales</span>
      </div>

      <div class="radial-item">
        <div class="radial-circle">65%</div>
        <span>Users</span>
      </div>

    </div>

  </div>
</div>

<div class="component-card" id="component-27">
  <div class="card-header">
    <h3>Sankey Flow Diagram</h3>
    <p>Visualize user movement between stages.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 500 180">

      <rect x="20" y="40" width="60" height="40"></rect>

      <path d="M80 60 C160 60 160 100 240 100"
        stroke-width="20"
        fill="none"></path>

      <rect x="240" y="80" width="60" height="40"></rect>

    </svg>

  </div>
</div>
<div class="component-card" id="component-28">
  <div class="card-header">
    <h3>Speedometer Gauge</h3>
    <p>Half-circle KPI indicator.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="speedometer">
      <div class="needle"></div>
      <div class="speed-value">72%</div>
    </div>

  </div>
</div>

<div class="component-card" id="component-29">
  <div class="card-header">
    <h3>Network Relationship Graph</h3>
    <p>Visualize connections between nodes.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <svg viewBox="0 0 300 200">

      <line x1="50" y1="100" x2="150" y2="50"></line>
      <line x1="150" y1="50" x2="250" y2="120"></line>

      <circle cx="50" cy="100" r="12"></circle>
      <circle cx="150" cy="50" r="12"></circle>
      <circle cx="250" cy="120" r="12"></circle>

    </svg>

  </div>
</div>

<div class="component-card" id="component-30">
  <div class="card-header">
    <h3>3D Isometric Bars</h3>
    <p>Modern dashboard-style visualization.</p>
  </div>

  <div class="preview-box charts-wrapper">

    <div class="iso-chart">

      <div class="iso-bar h1"></div>
      <div class="iso-bar h2"></div>
      <div class="iso-bar h3"></div>
      <div class="iso-bar h4"></div>

    </div>

  </div>
</div>
<div class="component-card" id="component-18">
  <div class="card-header">
    <h3>Multi-Ring KPI Tracker</h3>
    <p>Nested circular progress for multiple metrics.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="chart-card multi-ring-card">

      <svg viewBox="0 0 120 120">

        <circle cx="60" cy="60" r="50"
                class="ring-bg"></circle>

        <circle cx="60" cy="60" r="42"
                class="ring-progress"
                stroke-dasharray="264"
                stroke-dashoffset="70"></circle>

        <circle cx="60" cy="60" r="34"
                class="ring-progress alt"
                stroke-dasharray="214"
                stroke-dashoffset="90"></circle>

      </svg>

      <div class="radial-center">
        <h2>KPIs</h2>
        <span>Multi Metric</span>
      </div>

    </div>
  </div>
</div>

<div class="component-card" id="component-19">
  <div class="card-header">
    <h3>Benchmark Comparison</h3>
    <p>Horizontal performance comparison across teams.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="chart-card benchmark-card">

      <div class="bench-row">
        <span>Team A</span>
        <div class="bench-bar"><div style="width:80%"></div></div>
      </div>

      <div class="bench-row">
        <span>Team B</span>
        <div class="bench-bar"><div style="width:65%"></div></div>
      </div>

      <div class="bench-row">
        <span>Team C</span>
        <div class="bench-bar"><div style="width:92%"></div></div>
      </div>

    </div>
  </div>
</div>

<div class="component-card" id="component-20">
  <div class="card-header">
    <h3>Calendar Heatmap</h3>
    <p>GitHub-style activity visualization.</p>
  </div>

  <div class="preview-box charts-wrapper">
    <div class="chart-card calendar-heatmap-card">

      <div class="calendar-grid">
        <div class="day low"></div>
        <div class="day mid"></div>
        <div class="day high"></div>
        <div class="day max"></div>
        <div class="day mid"></div>
        <div class="day low"></div>
        <div class="day high"></div>
      </div>

    </div>
  </div>
</div>
    <!-- 11. Candlestick Financial Chart -->
<div class="component-card" id="component-11">
  <div class="card-header">
    <h3>Financial Candlestick Chart</h3>
    <p>Modern trading-style market activity chart.</p>
  </div>

  <div class="preview-box charts-wrapper" id="preview-11">
    <div class="chart-card candle-card">

      <div class="chart-header">
        <div>
          <h3 class="chart-title">BTC / USD</h3>
          <p class="chart-subtitle">24 Hour Market Trend</p>
        </div>
      </div>
    </div>
  <!-- 31. Gradient Bar Chart -->
<div class="component-card" id="component-31">
  <div class="card-header">
    <h3>Gradient Bar Chart</h3>
    <p>Stylized bar chart with gradient-filled bars for visual impact.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-31" style="padding: 1.25rem 1rem;">
    <div class="chart-card bar-card">
      <div class="chart-header">
        <div>
          <h3 class="chart-title">Performance Metrics</h3>
          <p class="chart-subtitle">Quarterly comparison</p>
        </div>
      </div>
      <div class="bar-grid">
        <div class="bar-node bar-lg red">Q1</div>
        <div class="bar-node bar-md blue">Q2</div>
        <div class="bar-node bar-sm green">Q3</div>
        <div class="bar-node bar-lg orange">Q4</div>
      </div>
    </div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-31', this)" aria-label="View HTML code for Gradient Bar Chart" aria-expanded="false" aria-controls="code-31">
      <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-31-text', this)" aria-label="Copy Gradient Bar Chart code">
      <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-31" role="region" aria-label="Code snippet for Gradient Bar Chart">
    <pre id="code-31-text"><code>&lt;div class="bar-grid"&gt;
  &lt;div class="bar-node bar-lg red"&gt;Q1&lt;/div&gt;
  &lt;div class="bar-node bar-md blue"&gt;Q2&lt;/div&gt;
  &lt;div class="bar-node bar-sm green"&gt;Q3&lt;/div&gt;
  &lt;div class="bar-node bar-lg orange"&gt;Q4&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
</div>
<!-- 32. Line Chart -->
<div class="component-card" id="component-32">
  <div class="card-header">
    <h3>Line Chart</h3>
    <p>Animated line chart for trend visualization.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-32" style="padding:1.25rem 1rem;">
    <svg class="line-chart" viewBox="0 0 200 100">
      <polyline points="0,80 40,60 80,40 120,50 160,20 200,40" />
    </svg>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-32', this)" aria-label="View HTML code for Line Chart" aria-expanded="false" aria-controls="code-32">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-32-text', this)" aria-label="Copy Line Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-32" role="region" aria-label="Code snippet for Line Chart">
    <pre id="code-32-text"><code>&lt;svg class="line-chart" viewBox="0 0 200 100"&gt;
  &lt;polyline points="0,80 40,60 80,40 120,50 160,20 200,40" /&gt;
&lt;/svg&gt;</code></pre>
  </div>
</div>
<!-- 33. Pie Chart -->
<div class="component-card" id="component-33">
  <div class="card-header">
    <h3>Pie Chart</h3>
    <p>Segmented pie chart for distribution.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-33" style="padding:1.25rem 1rem;">
    <div class="pie-chart"></div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-33', this)" aria-label="View HTML code for Pie Chart" aria-expanded="false" aria-controls="code-33">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-33-text', this)" aria-label="Copy Pie Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-33" role="region" aria-label="Code snippet for Pie Chart">
    <pre id="code-33-text"><code>&lt;div class="pie-chart"&gt;&lt;/div&gt;</code></pre>
  </div>
</div>
<!-- 34. Donut Chart -->
<div class="component-card" id="component-34">
  <div class="card-header">
    <h3>Donut Chart</h3>
    <p>Ring-style chart for proportional data.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-34" style="padding:1.25rem 1rem;">
    <div class="donut-chart"></div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-34', this)" aria-label="View HTML code for Donut Chart" aria-expanded="false" aria-controls="code-34">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-34-text', this)" aria-label="Copy Donut Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-34" role="region" aria-label="Code snippet for Donut Chart">
    <pre id="code-34-text"><code>&lt;div class="donut-chart"&gt;&lt;/div&gt;</code></pre>
  </div>
</div>
<!-- 35. Radar Chart -->
<div class="component-card" id="component-35">
  <div class="card-header">
    <h3>Radar Chart</h3>
    <p>Polygon chart for multi-dimensional data.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-35" style="padding:1.25rem 1rem;">
    <svg class="radar-chart" viewBox="0 0 200 200">
      <polygon points="100,20 180,60 160,160 40,160 20,60" />
    </svg>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-35', this)" aria-label="View HTML code for Radar Chart" aria-expanded="false" aria-controls="code-35">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-35-text', this)" aria-label="Copy Radar Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-35" role="region" aria-label="Code snippet for Radar Chart">
    <pre id="code-35-text"><code>&lt;svg class="radar-chart" viewBox="0 0 200 200"&gt;
  &lt;polygon points="100,20 180,60 160,160 40,160 20,60" /&gt;
&lt;/svg&gt;</code></pre>
  </div>
</div>
<!-- 36. Progress Circle -->
<div class="component-card" id="component-36">
  <div class="card-header">
    <h3>Progress Circle</h3>
    <p>Circular progress indicator.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-36" style="padding:1.25rem 1rem;">
    <svg class="progress-circle" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" />
    </svg>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-36', this)" aria-label="View HTML code for Progress Circle" aria-expanded="false" aria-controls="code-36">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-36-text', this)" aria-label="Copy Progress Circle code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-36" role="region" aria-label="Code snippet for Progress Circle">
    <pre id="code-36-text"><code>&lt;svg class="progress-circle" viewBox="0 0 100 100"&gt;
  &lt;circle cx="50" cy="50" r="45" /&gt;
&lt;/svg&gt;</code></pre>
  </div>
</div>
<!-- 37. Heatmap Grid -->
<div class="component-card" id="component-37">
  <div class="card-header">
    <h3>Heatmap Grid</h3>
    <p>Color-coded grid for intensity visualization.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-37" style="padding:1.25rem 1rem;">
    <div class="heatmap">
      <div style="--color:#ff5722"></div>
      <div style="--color:#ff9800"></div>
      <div style="--color:#ffc107"></div>
      <div style="--color:#8bc34a"></div>
    </div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-37', this)" aria-label="View HTML code for Heatmap Grid" aria-expanded="false" aria-controls="code-37">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-37',this)" aria-label="Copy Progress Circle code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-36" role="region" aria-label="Code snippet for Progress Circle">
    <pre id="code-36-text"><code>&lt;svg class="progress-circle" viewBox="0 0 100 100"&gt;
  &lt;circle cx="50" cy="50" r="45" /&gt;
&lt;/svg&gt;</code></pre>
  </div>
</div>
<!-- 41. Stacked Bar Chart -->
<div class="component-card" id="component-41">
  <div class="card-header">
    <h3>Stacked Bar Chart</h3>
    <p>Layered bars showing category breakdowns.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-41" style="padding:1.25rem 1rem;">
    <div class="stacked-bar">
      <div class="segment red" style="width:40%">40%</div>
      <div class="segment blue" style="width:30%">30%</div>
      <div class="segment green" style="width:30%">30%</div>
    </div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-41', this)" aria-label="View HTML code for Stacked Bar Chart" aria-expanded="false" aria-controls="code-41">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-41-text', this)" aria-label="Copy Stacked Bar Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-41" role="region" aria-label="Code snippet for Stacked Bar Chart">
    <pre id="code-41-text"><code>&lt;div class="stacked-bar"&gt;
  &lt;div class="segment red" style="width:40%"&gt;40%&lt;/div&gt;
  &lt;div class="segment blue" style="width:30%"&gt;30%&lt;/div&gt;
  &lt;div class="segment green" style="width:30%"&gt;30%&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
</div>
<!-- 42. Polar Area Chart -->
<div class="component-card" id="component-42">
  <div class="card-header">
    <h3>Polar Area Chart</h3>
    <p>Radial segments for proportional data.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-42" style="padding:1.25rem 1rem;">
    <div class="polar-chart"></div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-42', this)" aria-label="View HTML code for Polar Area Chart" aria-expanded="false" aria-controls="code-42">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-42-text', this)" aria-label="Copy Polar Area Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-42" role="region" aria-label="Code snippet for Polar Area Chart">
    <pre id="code-42-text"><code>&lt;div class="polar-chart"&gt;&lt;/div&gt;</code></pre>
  </div>
</div>
<!-- 43. Sparkline Chart -->
<div class="component-card" id="component-43">
  <div class="card-header">
    <h3>Sparkline Chart</h3>
    <p>Minimal line chart for quick trends.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-43" style="padding:1.25rem 1rem;">
    <svg class="sparkline" viewBox="0 0 200 50">
      <polyline points="0,40 40,30 80,20 120,25 160,10 200,20" />
    </svg>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-43', this)" aria-label="View HTML code for Sparkline Chart" aria-expanded="false" aria-controls="code-43">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-43-text', this)" aria-label="Copy Sparkline Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-43" role="region" aria-label="Code snippet for Sparkline Chart">
    <pre id="code-43-text"><code>&lt;svg class="sparkline" viewBox="0 0 200 50"&gt;
  &lt;polyline points="0,40 40,30 80,20 120,25 160,10 200,20" /&gt;
&lt;/svg&gt;</code></pre>
  </div>
</div>
<!-- 44. Funnel Chart -->
<div class="component-card" id="component-44">
  <div class="card-header">
    <h3>Funnel Chart</h3>
    <p>Step-down funnel for conversion stages.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-44" style="padding:1.25rem 1rem;">
    <div class="funnel">
      <div class="funnel-step step1">Stage 1</div>
      <div class="funnel-step step2">Stage 2</div>
      <div class="funnel-step step3">Stage 3</div>
    </div>
  </div>
  <div class="card-actions">
    <button class="btn btn-code" onclick="toggleCode('code-44', this)" aria-label="View HTML code for Funnel Chart" aria-expanded="false" aria-controls="code-44">
      <i class="fa-solid fa-code"></i> View Code
    </button>
    <button class="btn btn-copy" onclick="copyCode('code-44-text', this)" aria-label="Copy Funnel Chart code">
      <i class="fa-regular fa-copy"></i> Copy
    </button>
  </div>
  <div class="code-snippet" id="code-44" role="region" aria-label="Code snippet for Funnel Chart">
    <pre id="code-44-text"><code>&lt;div class="funnel"&gt;
  &lt;div class="funnel-step step1"&gt;Stage 1&lt;/div&gt;
  &lt;div class="funnel-step step2"&gt;Stage 2&lt;/div&gt;
  &lt;div class="funnel-step step3"&gt;Stage 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>
</div>
<!-- 45. Timeline Chart -->
<div class="component-card" id="component-45">
  <div class="card-header">
    <h3>Timeline Chart</h3>
    <p>Sequential events displayed along a line.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-45" style="padding:1.25rem 1rem;">
    <div class="timeline">
      <div class="event">Start</div>
      <div class="event">Milestone</div>
      <div class="event">Finish</div>
    </div>
  </div>
<!-- 45. Timeline Chart -->
<div class="component-card" id="component-45">
  <div class="card-header">
    <h3>Timeline Chart</h3>
    <p>Sequential events displayed along a line.</p>
  </div>
  <div class="preview-box charts-wrapper" id="preview-45" style="padding:1.25rem 1rem;">
    <div class="timeline">
      <div class="event">Start</div>
      <div class="event">Milestone</div>
      <div class="event">Finish</div>
    </div>
  </div>

<!-- 2. Animated Bar Chart -->
    <div class="component-card" id="component-2">
      <div class="card-header">
        <h3>Responsive Bar Chart</h3>
        <p>Dynamic CSS bar chart with JS animation.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-2">
        
        <div class="chart-card">
            <div class="chart-header">
              <div>
                <h3 class="chart-title">Weekly Traffic</h3>
                <p class="chart-subtitle">Unique visitors over 7 days</p>
              </div>
              <div class="chart-actions">
                <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
              </div>
            </div>
            <div class="bar-chart" id="bar-chart-bars">
              <!-- Bars injected by charts.js -->
            </div>
          </div>

        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-2')"
            aria-label="View HTML code for Responsive Bar Chart" aria-expanded="false" aria-controls="code-2">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('preview-2', this)"
            aria-label="Copy Responsive Bar Chart code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-2" role="region" aria-label="Code snippet for Responsive Bar Chart">
          <pre>&lt;!-- CSS Bar Chart Container --&gt;
&lt;div class="chart-card"&gt;
  &lt;h3 class="chart-title"&gt;Weekly Traffic&lt;/h3&gt;
  &lt;div class="bar-chart" id="bar-chart-bars"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;!-- See charts.js for injection logic --&gt;</pre>
        </div>
      </div>



    <!-- 3. Pie / Donut Chart -->
    <div class="component-card" id="component-3">
      <div class="card-header">
        <h3>Gradient Donut Chart</h3>
        <p>CSS Conic-gradient based donut chart.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-3">
        
        <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Device Usage</h3>
            </div>
            <div class="donut-container">
              <div class="donut-chart">
                <div class="donut-hole">
                  <div class="donut-total">100%</div>
                  <div class="donut-label">Total Visits</div>
                </div>
              </div>
            </div>
            <div class="donut-legend">
              <div class="legend-item">
                <div class="legend-color" style="background: var(--ch-purple)"></div> Mobile
              </div>
              <div class="legend-item">
                <div class="legend-color" style="background: var(--ch-cyan)"></div> Desktop
              </div>
              <div class="legend-item">
                <div class="legend-color" style="background: var(--ch-pink)"></div> Tablet
              </div>
            </div>
          </div>

        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-3')"
            aria-label="View HTML code for Gradient Donut Chart" aria-expanded="false" aria-controls="code-3">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('preview-3', this)"
            aria-label="Copy Gradient Donut Chart code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-3" role="region" aria-label="Code snippet for Gradient Donut Chart">
          <pre>&lt;div class="donut-container"&gt;
  &lt;div class="donut-chart" style="background: conic-gradient(#8b5cf6 0% 45%, #06b6d4 45% 75%, #ec4899 75% 100%);"&gt;
    &lt;div class="donut-hole"&gt;
      &lt;div class="donut-total"&gt;100%&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </div>

      <!-- 4. Progress Analytics Graph -->
      <div class="component-card" id="component-4">
        <div class="card-header">
          <h3>Target Progress Metrics</h3>
          <p>Animated shimmer progress bars.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-4">

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Monthly Goals</h3>
            </div>
            <div class="progress-list">
              <div class="progress-item">
                <div class="progress-info">
                  <span>New Signups</span>
                  <span>80%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: 80%; background: var(--ch-cyan);"></div>
                </div>
              </div>
              <div class="progress-item">
                <div class="progress-info">
                  <span>Revenue Target</span>
                  <span>65%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: 65%; background: var(--ch-purple);"></div>
                </div>
              </div>
              <div class="progress-item">
                <div class="progress-info">
                  <span>Customer Retention</span>
                  <span>92%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: 92%; background: var(--ch-green);"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-4')"
            aria-label="View HTML code for Target Progress Metrics" aria-expanded="false" aria-controls="code-4">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('preview-4', this)"
            aria-label="Copy Target Progress Metrics code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-4" role="region" aria-label="Code snippet for Target Progress Metrics">
          <pre>&lt;div class="progress-item"&gt;
  &lt;div class="progress-info"&gt;
    &lt;span&gt;New Signups&lt;/span&gt;&lt;span&gt;80%&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="progress-track"&gt;
    &lt;div class="progress-fill" style="width: 80%; background: #06b6d4;"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </div>

      <!-- 5. SVG Line Activity Graph -->
      <div class="component-card" id="component-5">
        <div class="card-header">
          <h3>SVG Line Activity Tracker</h3>
          <p>Interactive smooth SVG line graph.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-5">

          <div class="chart-card">
            <div class="chart-header">
              <h3 class="chart-title">Server Activity</h3>
            </div>

            <svg class="svg-line-chart" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pinkGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="var(--ch-pink)" stop-opacity="0.8" />
                  <stop offset="100%" stop-color="var(--ch-pink)" stop-opacity="0" />
                </linearGradient>
              </defs>

              <!-- Area -->
              <path class="svg-area" d="M0,120 L0,80 Q50,40 100,60 T200,30 T300,70 T400,20 L400,120 Z"></path>

              <!-- Line -->
              <path class="svg-line" d="M0,80 Q50,40 100,60 T200,30 T300,70 T400,20"></path>

              <!-- Points -->
              <circle class="svg-point" cx="0" cy="80" r="4" data-value="80"></circle>
              <circle class="svg-point" cx="100" cy="60" r="4" data-value="60"></circle>
              <circle class="svg-point" cx="200" cy="30" r="4" data-value="30"></circle>
              <circle class="svg-point" cx="300" cy="70" r="4" data-value="70"></circle>
              <circle class="svg-point" cx="400" cy="20" r="4" data-value="20"></circle>
            </svg>

            <div class="heatmap-grid" id="heatmap-grid">
              <!-- Heatmap cells injected by JS -->
            </div>
          </div>

        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-5')"
            aria-label="View HTML code for SVG Line Activity Tracker" aria-expanded="false" aria-controls="code-5">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('preview-5', this)"
            aria-label="Copy SVG Line Activity Tracker code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-5" role="region" aria-label="Code snippet for SVG Line Activity Tracker">
          <pre>&lt;svg class="svg-line-chart" viewBox="0 0 400 120"&gt;
  &lt;path class="svg-line" d="M0,80 Q50,40 100,60 T200,30 T300,70 T400,20"&gt;&lt;/path&gt;
  &lt;circle class="svg-point" cx="100" cy="60" r="4"&gt;&lt;/circle&gt;
&lt;/svg&gt;</pre>
        </div>
      </div>

      <!-- 6. Interactive Area Chart -->
      <div class="component-card" id="component-6">
        <div class="card-header">
          <h3>Interactive Area Chart</h3>
          <p>Smooth SVG area chart with real-time mouse hover tracking.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-6" style="padding: 1.5rem 1rem;">
          <div class="chart-card interactive-area-chart" id="area-chart-6">
            <div class="area-tooltip" id="area-tooltip-el">
              <span class="tooltip-time">12:00 PM</span>
              <span class="tooltip-val">580 Users</span>
            </div>
            <div class="marker-line" id="marker-line-el"></div>
            <svg class="area-svg" viewBox="0 0 500 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad6" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="var(--ch-cyan)" stop-opacity="0.45" />
                  <stop offset="100%" stop-color="var(--ch-cyan)" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path class="area-fill-path" d="M0,160 L0,110 Q100,50 200,90 T400,30 L500,60 L500,160 Z"
                fill="url(#areaGrad6)"></path>
              <path class="area-line-path" d="M0,110 Q100,50 200,90 T400,30 L500,60" fill="none" stroke="var(--ch-cyan)"
                stroke-width="3"></path>

              <circle cx="0" cy="110" r="5" class="tracker-node" data-index="0" data-x="0" data-y="110" data-val="120"
                data-time="09:00 AM"></circle>
              <circle cx="100" cy="50" r="5" class="tracker-node" data-index="1" data-x="100" data-y="50" data-val="350"
                data-time="11:00 AM"></circle>
              <circle cx="200" cy="90" r="5" class="tracker-node" data-index="2" data-x="200" data-y="90" data-val="210"
                data-time="01:00 PM"></circle>
              <circle cx="300" cy="60" r="5" class="tracker-node" data-index="3" data-x="300" data-y="60" data-val="430"
                data-time="03:00 PM"></circle>
              <circle cx="400" cy="30" r="5" class="tracker-node" data-index="4" data-x="400" data-y="30" data-val="580"
                data-time="05:00 PM"></circle>
              <circle cx="500" cy="60" r="5" class="tracker-node" data-index="5" data-x="500" data-y="60" data-val="490"
                data-time="07:00 PM"></circle>
            </svg>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-6', this)"
            aria-label="View HTML code for Interactive Area Chart" aria-expanded="false" aria-controls="code-6">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('code-6-text', this)"
            aria-label="Copy Interactive Area Chart code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-6" role="region" aria-label="Code snippet for Interactive Area Chart">
          <pre id="code-6-text"><code>&lt;div class="chart-card interactive-area-chart"&gt;
  &lt;div class="area-tooltip"&gt;
    &lt;span class="tooltip-time"&gt;12:00 PM&lt;/span&gt;
    &lt;span class="tooltip-val"&gt;580 Users&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="marker-line"&gt;&lt;/div&gt;
  &lt;svg class="area-svg" viewBox="0 0 500 160"&gt;
    &lt;path d="M0,160 L0,110 Q100,50 200,90 T400,30 L500,60 L500,160 Z" fill="url(#areaGrad)"&gt;&lt;/path&gt;
    &lt;path d="M0,110 Q100,50 200,90 T400,30 L500,60" fill="none" stroke="#06b6d4" stroke-width="3"&gt;&lt;/path&gt;
  &lt;/svg&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- 7. Glassmorphism Pie Chart -->
      <div class="component-card" id="component-7">
        <div class="card-header">
          <h3>Glassmorphism Pie Chart</h3>
          <p>Premium frosted glass conic-gradient pie layout with core overlay.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-7" style="padding: 1.5rem 1rem;">
          <div class="chart-card glass-pie-card">
            <div class="pie-container">
              <div class="glass-pie" id="glass-pie-el"></div>
              <div class="glass-pie-center">
                <span id="pie-center-value">45%</span>
                <span id="pie-center-label">Chrome</span>
              </div>
            </div>
            <div class="glass-pie-legend">
              <span class="pie-legend-tag active" data-pct="45" data-browser="Chrome"
                style="border-color: var(--ch-purple)">Chrome</span>
              <span class="pie-legend-tag" data-pct="30" data-browser="Safari"
                style="border-color: var(--ch-cyan)">Safari</span>
              <span class="pie-legend-tag" data-pct="15" data-browser="Firefox"
                style="border-color: var(--ch-pink)">Firefox</span>
              <span class="pie-legend-tag" data-pct="10" data-browser="Edge"
                style="border-color: var(--ch-orange)">Edge</span>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-7', this)"
            aria-label="View HTML code for Glassmorphism Pie Chart" aria-expanded="false" aria-controls="code-7">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('code-7-text', this)"
            aria-label="Copy Glassmorphism Pie Chart code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-7" role="region" aria-label="Code snippet for Glassmorphism Pie Chart">
          <pre id="code-7-text"><code>&lt;div class="chart-card glass-pie-card"&gt;
  &lt;div class="pie-container"&gt;
    &lt;div class="glass-pie" style="background: conic-gradient(#8b5cf6 0% 45%, #06b6d4 45% 75%, #ec4899 75% 90%, #f59e0b 90% 100%);"&gt;&lt;/div&gt;
    &lt;div class="glass-pie-center"&gt;
      &lt;span&gt;45%&lt;/span&gt;
      &lt;span&gt;Chrome&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- 8. Animated Radar Chart -->
      <div class="component-card" id="component-8">
        <div class="card-header">
          <h3>Animated Radar Chart</h3>
          <p>Concentric SVG pentagon axes with dynamic profile selector triggers.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-8" style="padding: 1rem;">
          <div class="chart-card radar-card">
            <div class="profile-selectors">
              <button class="profile-tab active" onclick="switchRadarProfile('striker', this)">Striker</button>
              <button class="profile-tab" onclick="switchRadarProfile('balanced', this)">Balanced</button>
              <button class="profile-tab" onclick="switchRadarProfile('defender', this)">Defender</button>
            </div>
            <svg class="radar-svg" viewBox="0 0 200 200">
              <polygon points="100,10 185,72 153,171 47,171 15,72" class="radar-grid-bg"></polygon>
              <polygon points="100,32.5 163.75,79 139.75,153.25 60.25,153.25 36.25,79" class="radar-grid-bg"></polygon>
              <polygon points="100,55 142.5,86 126.5,135.5 73.5,135.5 57.5,86" class="radar-grid-bg"></polygon>
              <polygon points="100,77.5 121.25,93 113.25,117.75 86.75,117.75 78.75,93" class="radar-grid-bg"></polygon>

              <line x1="100" y1="100" x2="100" y2="10" class="radar-axis"></line>
              <line x1="100" y1="100" x2="185" y2="72" class="radar-axis"></line>
              <line x1="100" y1="100" x2="153" y2="171" class="radar-axis"></line>
              <line x1="100" y1="100" x2="47" y2="171" class="radar-axis"></line>
              <line x1="100" y1="100" x2="15" y2="72" class="radar-axis"></line>

              <polygon points="100,30 176,82 121,128 73,128 40,78" class="radar-poly" id="radar-poly-el"></polygon>

              <text x="100" y="8" class="radar-label" text-anchor="middle">ATK</text>
              <text x="190" y="75" class="radar-label" text-anchor="start">SPD</text>
              <text x="158" y="183" class="radar-label" text-anchor="start">DEF</text>
              <text x="42" y="183" class="radar-label" text-anchor="end">STM</text>
              <text x="10" y="75" class="radar-label" text-anchor="end">TEC</text>
            </svg>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-8', this)"
            aria-label="View HTML code for Animated Radar Chart" aria-expanded="false" aria-controls="code-8">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('code-8-text', this)"
            aria-label="Copy Animated Radar Chart code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-8" role="region" aria-label="Code snippet for Animated Radar Chart">
          <pre id="code-8-text"><code>&lt;svg class="radar-svg" viewBox="0 0 200 200"&gt;
  &lt;polygon points="100,10 185,72 153,171 47,171 15,72" class="radar-grid"&gt;&lt;/polygon&gt;
  &lt;polygon points="100,30 176,82 121,128 73,128 40,78" class="radar-active-poly"&gt;&lt;/polygon&gt;
&lt;/svg&gt;</code></pre>
        </div>
      </div>

      <!-- 9. Real-Time Analytics Graph -->
      <div class="component-card" id="component-9">
        <div class="card-header">
          <h3>Real-Time Analytics Graph</h3>
          <p>Smooth crawling streaming graph using progressive coordinate injection.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-9" style="padding: 1.5rem 1rem;">
          <div class="chart-card real-time-card">
            <div class="real-time-header">
              <span class="live-dot-tag"><span class="live-pulse"></span>LIVE STREAMS</span>
              <span class="real-time-value" id="rt-value-el">45.2 MB/s</span>
            </div>
            <svg class="real-time-svg" viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="rtGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="var(--ch-purple)" stop-opacity="0.3" />
                  <stop offset="100%" stop-color="var(--ch-purple)" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path id="rt-area-el" class="rt-area" fill="url(#rtGradient)" d="M0,120 L400,120 Z"></path>
              <path id="rt-path-el" class="rt-line" d="M0,120 L400,120" fill="none" stroke="var(--ch-purple)"
                stroke-width="3"></path>
            </svg>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-9', this)"
            aria-label="View HTML code for Real-Time Analytics Graph" aria-expanded="false" aria-controls="code-9">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('code-9-text', this)"
            aria-label="Copy Real-Time Analytics Graph code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-9" role="region" aria-label="Code snippet for Real-Time Analytics Graph">
          <pre id="code-9-text"><code>&lt;div class="chart-card real-time-card"&gt;
  &lt;span class="live-dot-tag"&gt;&lt;span class="live-pulse"&gt;&lt;/span&gt;LIVE&lt;/span&gt;
  &lt;svg viewBox="0 0 400 120"&gt;
    &lt;path id="realtime-line-path" fill="none" stroke="#8b5cf6" stroke-width="3"&gt;&lt;/path&gt;
  &lt;/svg&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <!-- 10. Heatmap Activity Grid -->
      <div class="component-card" id="component-10">
        <div class="card-header">
          <h3>Heatmap Activity Grid</h3>
          <p>Interactive calendar grid tracking 364 annual commit contribution details.</p>
        </div>
        <div class="preview-box charts-wrapper" id="preview-10" style="padding: 1.5rem 1rem;">
          <div class="chart-card annual-heatmap-card">
            <div class="heatmap-header">
              <span>Activity Log (2026)</span>
              <div class="heatmap-key">
                <span>Less</span>
                <span class="key-cell level-0"></span>
                <span class="key-cell level-1"></span>
                <span class="key-cell level-2"></span>
                <span class="key-cell level-3"></span>
                <span class="key-cell level-4"></span>
                <span>More</span>
              </div>
            </div>
            <div class="annual-grid" id="annual-grid-el"></div>
            <div class="heatmap-detail-card" id="heatmap-detail-el">
              Hover over cells to see activity
            </div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-code" onclick="toggleCode('code-10', this)"
            aria-label="View HTML code for Heatmap Activity Grid" aria-expanded="false" aria-controls="code-10">
            <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
          </button>
          <button class="btn btn-copy" onclick="copyCode('code-10-text', this)"
            aria-label="Copy Heatmap Activity Grid code">
            <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
          </button>
        </div>
        <div class="code-snippet" id="code-10" role="region" aria-label="Code snippet for Heatmap Activity Grid">
          <pre id="code-10-text"><code>&lt;div class="chart-card annual-heatmap-card"&gt;
  &lt;div class="annual-grid" id="annual-grid"&gt;&lt;/div&gt;
  &lt;div class="heatmap-detail-card"&gt;Hover over cells to see activity&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    <!-- 11. Revenue Split Bars -->
    <div class="component-card" id="component-11">
      <div class="card-header">
        <h3>Revenue Split Bars</h3>
        <p>Compact stacked share bars for channel mix and product splits.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-11" style="padding: 1.25rem 1rem;">
        <div class="chart-card split-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Revenue by Channel</h3>
              <p class="chart-subtitle">Last 30 days</p>
            </div>
          </div>
          <div class="split-list">
            <div class="split-row">
              <span class="split-label">Direct</span>
              <div class="split-track"><div class="split-fill split-cyan" style="width: 42%"></div></div>
              <span class="split-value">42%</span>
            </div>
            <div class="split-row">
              <span class="split-label">Paid</span>
              <div class="split-track"><div class="split-fill split-purple" style="width: 28%"></div></div>
              <span class="split-value">28%</span>
            </div>
            <div class="split-row">
              <span class="split-label">Organic</span>
              <div class="split-track"><div class="split-fill split-green" style="width: 18%"></div></div>
              <span class="split-value">18%</span>
            </div>
            <div class="split-row">
              <span class="split-label">Referral</span>
              <div class="split-track"><div class="split-fill split-orange" style="width: 12%"></div></div>
              <span class="split-value">12%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-code" onclick="toggleCode('code-11', this)" aria-label="View HTML code for Revenue Split Bars" aria-expanded="false" aria-controls="code-11">
          <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
        </button>
        <button class="btn btn-copy" onclick="copyCode('code-11-text', this)" aria-label="Copy Revenue Split Bars code">
          <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
        </button>
      </div>
      <div class="code-snippet" id="code-11" role="region" aria-label="Code snippet for Revenue Split Bars">
        <pre id="code-11-text"><code>&lt;div class="chart-card split-card"&gt;
  &lt;div class="split-row"&gt;
    &lt;span class="split-label"&gt;Direct&lt;/span&gt;
    &lt;div class="split-track"&gt;&lt;div class="split-fill split-cyan" style="width: 42%"&gt;&lt;/div&gt;&lt;/div&gt;
    &lt;span class="split-value"&gt;42%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- 12. Circular KPI Gauge -->
    <div class="component-card" id="component-12">
      <div class="card-header">
        <h3>Circular KPI Gauge</h3>
        <p>Quick performance dial with a bright center readout.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-12" style="padding: 1.25rem 1rem;">
        <div class="chart-card gauge-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Conversion Health</h3>
              <p class="chart-subtitle">Pipeline score</p>
            </div>
          </div>
          <div class="gauge-ring" style="background: conic-gradient(var(--ch-green) 0% 78%, rgba(255,255,255,0.08) 78% 100%);">
            <div class="gauge-center">
              <span class="gauge-value">78%</span>
              <span class="gauge-label">On Track</span>
            </div>
          </div>
          <div class="gauge-footer"><span>Target</span><strong>100%</strong></div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-code" onclick="toggleCode('code-12', this)" aria-label="View HTML code for Circular KPI Gauge" aria-expanded="false" aria-controls="code-12">
          <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
        </button>
        <button class="btn btn-copy" onclick="copyCode('code-12-text', this)" aria-label="Copy Circular KPI Gauge code">
          <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
        </button>
      </div>
      <div class="code-snippet" id="code-12" role="region" aria-label="Code snippet for Circular KPI Gauge">
        <pre id="code-12-text"><code>&lt;div class="chart-card gauge-card"&gt;
  &lt;div class="gauge-ring" style="background: conic-gradient(#10b981 0% 78%, rgba(255,255,255,0.08) 78% 100%);"&gt;
    &lt;div class="gauge-center"&gt;
      &lt;span class="gauge-value"&gt;78%&lt;/span&gt;
      &lt;span class="gauge-label"&gt;On Track&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- 13. Dual Trend Comparison -->
    <div class="component-card" id="component-13">
      <div class="card-header">
        <h3>Dual Trend Comparison</h3>
        <p>Side-by-side line comparison for current and previous period.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-13" style="padding: 1.25rem 1rem;">
        <div class="chart-card comparison-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Sales Trend</h3>
              <p class="chart-subtitle">This month vs last month</p>
            </div>
          </div>
          <svg class="comparison-svg" viewBox="0 0 420 150" preserveAspectRatio="none">
            <path d="M0,110 Q60,70 105,82 T210,52 T315,64 T420,28" fill="none" stroke="var(--ch-cyan)" stroke-width="4" stroke-linecap="round"></path>
            <path d="M0,125 Q60,110 105,118 T210,96 T315,104 T420,80" fill="none" stroke="var(--ch-purple)" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8"></path>
            <path d="M0,110 Q60,70 105,82 T210,52 T315,64 T420,28 L420,150 L0,150 Z" fill="rgba(6,182,212,0.12)"></path>
          </svg>
          <div class="comparison-legend">
            <span><i class="legend-swatch cyan"></i> Current</span>
            <span><i class="legend-swatch purple"></i> Previous</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-code" onclick="toggleCode('code-13', this)" aria-label="View HTML code for Dual Trend Comparison" aria-expanded="false" aria-controls="code-13">
          <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
        </button>
        <button class="btn btn-copy" onclick="copyCode('code-13-text', this)" aria-label="Copy Dual Trend Comparison code">
          <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
        </button>
      </div>
      <div class="code-snippet" id="code-13" role="region" aria-label="Code snippet for Dual Trend Comparison">
        <pre id="code-13-text"><code>&lt;svg class="comparison-svg" viewBox="0 0 420 150"&gt;
  &lt;path d="M0,110 Q60,70 105,82 T210,52 T315,64 T420,28" stroke="#06b6d4" stroke-width="4" fill="none"&gt;&lt;/path&gt;
  &lt;path d="M0,125 Q60,110 105,118 T210,96 T315,104 T420,80" stroke="#8b5cf6" stroke-width="4" fill="none" stroke-dasharray="8 8"&gt;&lt;/path&gt;
&lt;/svg&gt;</code></pre>
      </div>
    </div>

    <!-- 14. Funnel Conversion Flow -->
    <div class="component-card" id="component-14">
      <div class="card-header">
        <h3>Funnel Conversion Flow</h3>
        <p>Clear step-down funnel for conversions and drop-off analysis.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-14" style="padding: 1.25rem 1rem;">
        <div class="chart-card funnel-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Signup Funnel</h3>
              <p class="chart-subtitle">Live conversion overview</p>
            </div>
          </div>
          <div class="funnel-stack">
            <div class="funnel-step step-1"><span>Visits</span><strong>12.4K</strong></div>
            <div class="funnel-step step-2"><span>Signups</span><strong>6.8K</strong></div>
            <div class="funnel-step step-3"><span>Trials</span><strong>3.5K</strong></div>
            <div class="funnel-step step-4"><span>Paid</span><strong>1.9K</strong></div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-code" onclick="toggleCode('code-14', this)" aria-label="View HTML code for Funnel Conversion Flow" aria-expanded="false" aria-controls="code-14">
          <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
        </button>
        <button class="btn btn-copy" onclick="copyCode('code-14-text', this)" aria-label="Copy Funnel Conversion Flow code">
          <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
        </button>
      </div>
      <div class="code-snippet" id="code-14" role="region" aria-label="Code snippet for Funnel Conversion Flow">
        <pre id="code-14-text"><code>&lt;div class="funnel-stack"&gt;
  &lt;div class="funnel-step step-1"&gt;&lt;span&gt;Visits&lt;/span&gt;&lt;strong&gt;12.4K&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="funnel-step step-2"&gt;&lt;span&gt;Signups&lt;/span&gt;&lt;strong&gt;6.8K&lt;/strong&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <!-- 15. Bubble Insight Matrix -->
    <div class="component-card" id="component-15">
      <div class="card-header">
        <h3>Bubble Insight Matrix</h3>
        <p>Quick-glance bubble sizing for engagement, impact, and priority.</p>
      </div>
      <div class="preview-box charts-wrapper" id="preview-15" style="padding: 1.25rem 1rem;">
        <div class="chart-card bubble-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Engagement Matrix</h3>
              <p class="chart-subtitle">Audience touchpoints</p>
            </div>
          </div>
          <div class="bubble-grid">
            <div class="bubble-node size-lg cyan">A</div>
            <div class="bubble-node size-md purple">B</div>
            <div class="bubble-node size-sm green">C</div>
            <div class="bubble-node size-md orange">D</div>
            <div class="bubble-node size-lg pink">E</div>
            <div class="bubble-node size-sm cyan">F</div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn btn-code" onclick="toggleCode('code-15', this)" aria-label="View HTML code for Bubble Insight Matrix" aria-expanded="false" aria-controls="code-15">
          <i class="fa-solid fa-code" aria-hidden="true"></i> View Code
        </button>
        <button class="btn btn-copy" onclick="copyCode('code-15-text', this)" aria-label="Copy Bubble Insight Matrix code">
          <i class="fa-regular fa-copy" aria-hidden="true"></i> Copy
        </button>
      </div>
      <div class="code-snippet" id="code-15" role="region" aria-label="Code snippet for Bubble Insight Matrix">
        <pre id="code-15-text"><code>&lt;div class="bubble-grid"&gt;
  &lt;div class="bubble-node size-lg cyan"&gt;A&lt;/div&gt;
  &lt;div class="bubble-node size-md purple"&gt;B&lt;/div&gt;
  &lt;div class="bubble-node size-sm green"&gt;C&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  
  </section>
```
