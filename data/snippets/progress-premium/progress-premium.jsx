import React from 'react';

export default function progressPremium(){
  return (
    <>
      <div className="main-content">
      
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search progress components..." id="searchInput" />
          </div>
      
          <div className="topbar-actions">
            <button className="add-btn" onclick="fillAllProgress()"><i className="fa-solid fa-play"></i> Fill All</button>
            <button className="collection-btn" onclick="resetAllProgress()"><i className="fa-solid fa-rotate-left"></i> Reset All</button>
            <button className="theme-btn"><i className="fa-solid fa-moon"></i></button>
          </div>
      
          <div className="topbar-actions">
            <button className="add-btn" onclick="fillAllProgress()"><i className="fa-solid fa-play"></i> Fill All</button>
            <button className="collection-btn" onclick="resetAllProgress()"><i className="fa-solid fa-rotate-left"></i> Reset All</button>
            <button className="theme-btn"><i className="fa-solid fa-moon"></i></button>
          </div>
        </header>
      
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="breadcrumb">Home &gt; Progress Indicators</div>
            <h1>Premium Progress Bars</h1>
            <p>Modern reusable progress loaders, orbital circular indicators, multi-color skill cards, and dynamic percentage trackers. Crafted with pure CSS gradients, backdrop filter blurs, and interactive vanilla JavaScript.</p>
            
            <div className="hero-tags">
              <span><i className="fa-solid fa-gauge-high"></i> Fluid Animation</span>
              <span><i className="fa-solid fa-star"></i> High-End Glows</span>
              <span><i className="fa-solid fa-layer-group"></i> Glassmorphic Blurs</span>
            </div>
          </div>
      
          {/* Hero Progress Preview Animation */}
          <div className="hero-preview">
            <div className="hero-progress-demo">
              <div className="demo-track">
                <div className="demo-fill"></div>
              </div>
              <span className="demo-label">Processing...</span>
            </div>
          </div>
        </section>
      
        {/* FILTERS */}
        <section className="filters">
          <button className="active" onclick="filterCategory('all', this)">All Components</button>
          <button onclick="filterCategory('linear', this)">Linear Bars</button>
          <button onclick="filterCategory('circular', this)">Circular</button>
          <button onclick="filterCategory('loaders', this)">Loaders</button>
          <button onclick="filterCategory('cards', this)">Cards</button>
        </section>
      
        {/* SHOWROOM GRID */}
        <div className="notification-grid" id="progressGrid">
      
          {/* 1. LINEAR PROGRESS BAR */}
          <div className="component-card" data-category="linear">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-linear-container">
                  <div className="premium-linear-bar">
                    <div className="linear-track-fill" id="lFill" style="width: 50%;">
                      <div className="linear-tooltip" id="lTooltip">50%</div>
                    </div>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="display:flex; gap:10px; margin-top:30px;">
                  <button className="trigger-live-btn purple" onclick="adjustProgress('linear', -10)"><i className="fa-solid fa-minus"></i> Decrease</button>
                  <button className="trigger-live-btn orange" onclick="adjustProgress('linear', 10)"><i className="fa-solid fa-plus"></i> Increase</button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Linear Progress</h3>
                <span>Linear Bars</span>
              </div>
              <p>A sleek horizontal progress bar featuring an HSL violet-to-orange gradient fill and a glass-frosted indicator tooltip.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeL', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeL', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeL" style="display:none;"><code>&lt;div className="premium-linear-container"&gt;
        &lt;div className="premium-linear-bar"&gt;
          &lt;div className="linear-track-fill" style="width: 50%;"&gt;
            &lt;div className="linear-tooltip"&gt;50%&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 2. CIRCULAR PROGRESS INDICATOR */}
          <div className="component-card" data-category="circular">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-circular-progress">
                  <div className="circular-svg-wrap">
                    <svg width="120" height="120" className="circle-svg">
                      <circle className="circle-track" cx="60" cy="60" r="50"></circle>
                      <circle className="circle-fill-path" id="cPath" cx="60" cy="60" r="50" stroke-dasharray="314.16" stroke-dashoffset="157.08"></circle>
                    </svg>
                    {/* Glowing Orbital Dot */}
                    <div className="orbital-dot" id="orbitalDot" style="transform: rotate(90deg) translate(50px) rotate(-90deg);"></div>
                    <div className="circle-center-text">
                      <span className="circle-num" id="cNum">50%</span>
                    </div>
                  </div>
      
                  {/* Interaction Controls */}
                  <div style="display:flex; gap:10px; margin-top:20px;">
                    <button className="trigger-live-btn purple" onclick="adjustProgress('circular', -10)"><i className="fa-solid fa-minus"></i></button>
                    <button className="trigger-live-btn green" onclick="adjustProgress('circular', 10)"><i className="fa-solid fa-plus"></i></button>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Circular Progress</h3>
                <span>Circular</span>
              </div>
              <p>A circular indicator utilizing SVG stroke offsets, active neon glows, and a physical glowing dot orbiting the track path.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeC', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeC', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeC" style="display:none;"><code>&lt;div className="premium-circular-progress"&gt;
        &lt;svg width="120" height="120" className="circle-svg"&gt;
          &lt;circle className="circle-track" cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
          &lt;circle className="circle-fill-path" cx="60" cy="60" r="50" stroke-dasharray="314.16" stroke-dashoffset="157.08"&gt;&lt;/circle&gt;
        &lt;/svg&gt;
        &lt;div className="orbital-dot"&gt;&lt;/div&gt;
        &lt;div className="circle-center-text"&gt;
          &lt;span className="circle-num"&gt;50%&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 3. GRADIENT PROGRESS LOADER */}
          <div className="component-card" data-category="loaders">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-gradient-loader">
                  <div className="loader-track">
                    <div className="loader-running-gradient" id="gFill" style="width: 0%;"></div>
                  </div>
                  <div className="loader-meta">
                    <span className="loader-status" id="loaderStatus">Ready to load</span>
                    <span className="loader-pct" id="loaderPct">0%</span>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="margin-top:20px;">
                  <button className="trigger-live-btn orange" onclick="startSimulatedLoad()"><i className="fa-solid fa-rotate"></i> Simulate Load</button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Gradient Loader</h3>
                <span>Loaders</span>
              </div>
              <p>A glass-embedded progress loader displaying a continuous overlapping active gradient filling track on trigger.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeG', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeG', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeG" style="display:none;"><code>&lt;div className="premium-gradient-loader"&gt;
        &lt;div className="loader-track"&gt;
          &lt;div className="loader-running-gradient" style="width: 75%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="loader-meta"&gt;
          &lt;span className="loader-status"&gt;Loading assets...&lt;/span&gt;
          &lt;span className="loader-pct"&gt;75%&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 4. SKILL PROGRESS CARD */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-skill-card" onclick="refillSkills()">
                  <div className="skill-row">
                    <div className="skill-header">
                      <span>UI / UX Design</span>
                      <span className="skill-val">90%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill violet" id="sFill1" style="width: 90%;"></div>
                    </div>
                  </div>
                  
                  <div className="skill-row">
                    <div className="skill-header">
                      <span>Frontend Code</span>
                      <span className="skill-val">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill green" id="sFill2" style="width: 85%;"></div>
                    </div>
                  </div>
      
                  <div className="skill-row">
                    <div className="skill-header">
                      <span>Backend Logic</span>
                      <span className="skill-val">70%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill gold" id="sFill3" style="width: 70%;"></div>
                    </div>
                  </div>
                  
                  <span className="skill-card-tip"><i className="fa-solid fa-wand-magic-sparkles"></i> Click Card to Refill</span>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Skill Progress Card</h3>
                <span>Cards</span>
              </div>
              <p>A multi-row dashboard card featuring specific colored progress tracks, responsive layouts, and elegant text details.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeS', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeS', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeS" style="display:none;"><code>&lt;div className="premium-skill-card"&gt;
        &lt;div className="skill-row"&gt;
          &lt;div className="skill-header"&gt;
            &lt;span&gt;UI / UX Design&lt;/span&gt;
            &lt;span className="skill-val"&gt;90%&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="skill-bar"&gt;
            &lt;div className="skill-fill violet" style="width: 90%;"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 5. ANIMATED PERCENTAGE TRACKER */}
          <div className="component-card" data-category="circular">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-percentage-tracker">
                  <div className="tracker-circle">
                    <svg width="100" height="100" className="tracker-svg">
                      <circle className="tracker-bg" cx="50" cy="50" r="42"></circle>
                      <circle className="tracker-fill" id="tPath" cx="50" cy="50" r="42" stroke-dasharray="263.89" stroke-dashoffset="65.97"></circle>
                    </svg>
                    <div className="tracker-center">
                      <span className="tracker-pct" id="trackerNum">75%</span>
                    </div>
                  </div>
      
                  {/* Dynamic Input Target */}
                  <div className="tracker-input-box">
                    <input type="number" min="0" max="100" value="75" id="targetInput" placeholder="Target %" />
                    <button onclick="applyTrackerTarget()"><i className="fa-solid fa-chevron-right"></i> Set</button>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Percentage Tracker</h3>
                <span>Circular</span>
              </div>
              <p>A round progress gauge that updates in real time by taking user inputs and ticking progress numbers smoothly up or down.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeP', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeP', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeP" style="display:none;"><code>&lt;div className="premium-percentage-tracker"&gt;
        &lt;div className="tracker-circle"&gt;
          &lt;svg width="100" height="100" className="tracker-svg"&gt;
            &lt;circle className="tracker-bg" cx="50" cy="50" r="42"&gt;&lt;/circle&gt;
            &lt;circle className="tracker-fill" cx="50" cy="50" r="42" stroke-dasharray="263.89" stroke-dashoffset="131.95"&gt;&lt;/circle&gt;
          &lt;/svg&gt;
          &lt;div className="tracker-center"&gt;
            &lt;span className="tracker-pct"&gt;50%&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 6. SEGMENTED MULTI-STEP PROGRESS BAR */}
          <div className="component-card" data-category="linear">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-segmented-progress">
                  <div className="segmented-steps" id="segSteps">
                    <span className="seg-step active" data-seg="1"></span>
                    <span className="seg-step" data-seg="2"></span>
                    <span className="seg-step" data-seg="3"></span>
                    <span className="seg-step" data-seg="4"></span>
                    <span className="seg-step" data-seg="5"></span>
                  </div>
                  <div className="segmented-subtext">
                    <span id="segStatus">Phase 1: Environment Provisioning</span>
                    <span id="segPct">20%</span>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="display:flex; gap:10px; margin-top:25px;">
                  <button className="trigger-live-btn purple" onclick="adjustProgress('segmented', -1)"><i className="fa-solid fa-chevron-left"></i> Prev</button>
                  <button className="trigger-live-btn orange" onclick="adjustProgress('segmented', 1)">Next <i className="fa-solid fa-chevron-right"></i></button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Segmented Steps</h3>
                <span>Linear Bars</span>
              </div>
              <p>A step-based segmented layout designed with pill indicators, dynamic description subtitles, and smooth glowing activations.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeSeg', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeSeg', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeSeg" style="display:none;"><code>&lt;div className="premium-segmented-progress"&gt;
        &lt;div className="segmented-steps"&gt;
          &lt;span className="seg-step active"&gt;&lt;/span&gt;
          &lt;span className="seg-step active"&gt;&lt;/span&gt;
          &lt;span className="seg-step"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="segmented-subtext"&gt;
          &lt;span&gt;Phase 2: Database Setup&lt;/span&gt;
          &lt;span&gt;40%&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 7. WAVE ANIMATED PROGRESS LOADER */}
          <div className="component-card" data-category="loaders">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-wave-progress">
                  <div className="wave-tank">
                    <svg className="wave-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path className="wave-fill-path" id="waveFill" d="M0,50 C30,45 70,55 100,50 L100,100 L0,100 Z" style="transform: translateY(50%);"></path>
                    </svg>
                    <div className="wave-center-text">
                      <span id="wavePct">50%</span>
                    </div>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="display:flex; gap:10px; margin-top:20px;">
                  <button className="trigger-live-btn purple" onclick="adjustProgress('wave', -10)"><i className="fa-solid fa-minus"></i></button>
                  <button className="trigger-live-btn blue" onclick="adjustProgress('wave', 10)"><i className="fa-solid fa-plus"></i></button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Wave Liquid Tank</h3>
                <span>Loaders</span>
              </div>
              <p>A fluid-dynamic tank rendering an animated sinusoidal wave mask overlay syncing directly with loader values.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeWave', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeWave', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeWave" style="display:none;"><code>&lt;div className="premium-wave-progress"&gt;
        &lt;div className="wave-tank"&gt;
          &lt;svg className="wave-svg" viewBox="0 0 100 100"&gt;
            &lt;path className="wave-fill-path" d="M0,50 C30,45 70,55 100,50 L100,100 L0,100 Z"&gt;&lt;/path&gt;
          &lt;/svg&gt;
          &lt;span className="wave-pct"&gt;50%&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 8. GLASSMORPHISM BATTERY PROGRESS */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-battery-progress">
                  <div className="battery-body">
                    <div className="battery-fill" id="batFill" style="width: 60%;"></div>
                    <div className="battery-nipple"></div>
                    <div className="battery-content">
                      <i className="fa-solid fa-bolt battery-bolt active" id="batBolt"></i>
                      <span id="batPct">60%</span>
                    </div>
                  </div>
                  <div className="battery-status" id="batStatus">Fast Charging (Active)</div>
                </div>
      
                {/* Interaction Controls */}
                <div style="display:flex; gap:10px; margin-top:20px;">
                  <button className="trigger-live-btn purple" onclick="adjustProgress('battery', -20)"><i className="fa-solid fa-minus"></i></button>
                  <button className="trigger-live-btn green" onclick="adjustProgress('battery', 20)"><i className="fa-solid fa-plus"></i></button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Battery Indicator</h3>
                <span>Cards</span>
              </div>
              <p>A frosted glass-body battery layout displaying charging segments, neon status logs, and pulsating active lightning bolts.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeBat', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeBat', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeBat" style="display:none;"><code>&lt;div className="premium-battery-progress"&gt;
        &lt;div className="battery-body"&gt;
          &lt;div className="battery-fill" style="width: 75%;"&gt;&lt;/div&gt;
          &lt;div className="battery-nipple"&gt;&lt;/div&gt;
          &lt;span&gt;75%&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 9. NEON GRADIENT ACTIVITY TRACKER */}
          <div className="component-card" data-category="circular">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-activity-tracker">
                  <div className="activity-concentric">
                    {/* Outer Ring: CPU */}
                    <svg className="act-ring outer" width="130" height="130">
                      <circle className="act-track" cx="65" cy="65" r="55"></circle>
                      <circle className="act-fill cpu" id="actFillCPU" cx="65" cy="65" r="55" stroke-dasharray="345.58" stroke-dashoffset="138.23"></circle>
                    </svg>
                    {/* Middle Ring: RAM */}
                    <svg className="act-ring middle" width="100" height="100">
                      <circle className="act-track" cx="50" cy="50" r="40"></circle>
                      <circle className="act-fill ram" id="actFillRAM" cx="50" cy="50" r="40" stroke-dasharray="251.33" stroke-dashoffset="75.4"></circle>
                    </svg>
                    {/* Inner Ring: Network */}
                    <svg className="act-ring inner" width="70" height="70">
                      <circle className="act-track" cx="35" cy="35" r="25"></circle>
                      <circle className="act-fill net" id="actFillNET" cx="35" cy="35" r="25" stroke-dasharray="157.08" stroke-dashoffset="31.42"></circle>
                    </svg>
                  </div>
                  
                  {/* Statistics logs */}
                  <div className="activity-stats">
                    <span className="stat-row cpu">CPU: <b id="actValCPU">60%</b></span>
                    <span className="stat-row ram">RAM: <b id="actValRAM">70%</b></span>
                    <span className="stat-row net">NET: <b id="actValNET">80%</b></span>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="margin-top:20px;">
                  <button className="trigger-live-btn orange" onclick="jitterActivityTracker()"><i className="fa-solid fa-bolt"></i> Stream Live Loads</button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Concentric Rings</h3>
                <span>Circular</span>
              </div>
              <p>Concentric activity rings that visualize multiple active parameters simultaneously using custom gradients.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeAct', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeAct', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeAct" style="display:none;"><code>&lt;div className="premium-activity-tracker"&gt;
        &lt;div className="activity-concentric"&gt;
          &lt;svg className="act-ring"&gt;
            &lt;circle className="act-fill" cx="50" cy="50" r="40" stroke-dasharray="251" stroke-dashoffset="100"&gt;&lt;/circle&gt;
          &lt;/svg&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 10. REAL-TIME ANALYTICS PROGRESS CHART */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-analytics-chart">
                  <h5 className="chart-header">Analytics Throughput</h5>
                  
                  <div className="chart-row">
                    <div className="chart-info">
                      <span>Ingestion Stream</span>
                      <span className="val" id="chartVal1">65%</span>
                    </div>
                    <div className="chart-progress">
                      <div className="chart-fill magenta" id="chartFill1" style="width: 65%;"></div>
                    </div>
                  </div>
      
                  <div className="chart-row">
                    <div className="chart-info">
                      <span>Processing Workers</span>
                      <span className="val" id="chartVal2">82%</span>
                    </div>
                    <div className="chart-progress">
                      <div className="chart-fill neon-blue" id="chartFill2" style="width: 82%;"></div>
                    </div>
                  </div>
      
                  <div className="chart-row">
                    <div className="chart-info">
                      <span>Query Load</span>
                      <span className="val" id="chartVal3">45%</span>
                    </div>
                    <div className="chart-progress">
                      <div className="chart-fill amber" id="chartFill3" style="width: 45%;"></div>
                    </div>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="margin-top:20px;">
                  <button className="trigger-live-btn blue" onclick="startChartSimulate()"><i className="fa-solid fa-chart-line"></i> Pulse Stream</button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Analytics Chart</h3>
                <span>Cards</span>
              </div>
              <p>An interactive system analytics board demonstrating progress bar streams, numeric ticking values, and real-time status pulses.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeChart', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeChart', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeChart" style="display:none;"><code>&lt;div className="premium-analytics-chart"&gt;
        &lt;div className="chart-row"&gt;
          &lt;div className="chart-info"&gt;
            &lt;span&gt;Ingestion Stream&lt;/span&gt;
            &lt;span className="val"&gt;65%&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="chart-progress"&gt;
            &lt;div className="chart-fill magenta" style="width: 65%;"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ============ 11-15: ADDITIONAL PROGRESS COMPONENTS ============ */}
      
          {/* 11. DOWNLOAD MANAGER */}
          <div className="component-card" data-category="progress">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="download-manager" id="downloadManagerPreview">
                  <div className="d-item">
                    <div className="d-thumb"><i className="fa-solid fa-file-arrow-down"></i></div>
                    <div className="d-meta">
                      <div className="d-title">assets_bundle.zip</div>
                      <div className="d-sub">Downloading • 12.4 MB / 32.1 MB</div>
                      <div className="d-progress"><div className="d-fill dwn-fill" style="width:38%"></div></div>
                    </div>
                    <div className="d-actions"><button onclick="simulateDownloadManager()"><i className="fa-solid fa-play"></i></button></div>
                  </div>
                  <div className="d-item">
                    <div className="d-thumb"><i className="fa-solid fa-file-zipper"></i></div>
                    <div className="d-meta">
                      <div className="d-title">icons_pack.zip</div>
                      <div className="d-sub">Queued • 0 MB</div>
                      <div className="d-progress"><div className="d-fill dwn-fill" style="width:0%"></div></div>
                    </div>
                    <div className="d-actions"><button onclick="simulateDownloadManager()"><i className="fa-solid fa-rotate"></i></button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Download Manager</h3><span>Progress</span></div>
              <p>Multiple concurrent downloads with per-file progress fills and small inline controls.</p>
              <div className="card-actions">
                <button onclick="toggleCode('code11', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('code11', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="code11" style="display:none;"><code>&lt;div className="d-item"&gt;...&lt;/div&gt;</code></pre>
          </div>
      
          {/* 12. INDETERMINATE SKELETON STRIP */}
          <div className="component-card" data-category="loaders">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="indeterminate-strip" id="indStripPreview"></div>
                <div style="margin-top:18px;"><button className="trigger-live-btn purple" onclick="toggleIndeterminateStrip()">Toggle</button></div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Indeterminate Strip</h3><span>Loaders</span></div>
              <p>A subtle skeleton loader strip used to indicate indeterminate loading states in place of numeric progress.</p>
              <div className="card-actions">
                <button onclick="toggleCode('code12', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('code12', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="code12" style="display:none;"><code>&lt;div className="indeterminate-strip"&gt;...&lt;/div&gt;</code></pre>
          </div>
      
          {/* 13. DONUT METER */}
          <div className="component-card" data-category="circular">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="donut-meter" id="donutPreview">
                  <svg className="donut-svg" width="140" height="140" viewBox="0 0 140 140">
                    <defs>
                      <linearGradient id="donutGradient" x1="0%" x2="100%">
                        <stop offset="0%" stop-color="#7b61ff" />
                        <stop offset="100%" stop-color="#ff7a3d" />
                      </linearGradient>
                    </defs>
                    <circle className="donut-track" cx="70" cy="70" r="52"></circle>
                    <circle className="donut-fill" id="donutFill" cx="70" cy="70" r="52" stroke-dasharray="326.73" stroke-dashoffset="130"></circle>
                  </svg>
                  <div className="donut-center"><div className="num" id="donutNum">60%</div><div className="muted" style="font-size:12px;color:var(--text-muted);">Overall</div></div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Donut Meter</h3><span>Circular</span></div>
              <p>A decorative donut meter with gradient stroke and center label for compact KPI displays.</p>
              <div className="card-actions">
                <button onclick="toggleCode('code13', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('code13', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="code13" style="display:none;"><code>&lt;svg className="donut-svg"&gt;...&lt;/svg&gt;</code></pre>
          </div>
      
          {/* 14. TRANSFER QUEUE */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="transfer-queue" id="transferQueuePreview">
                  <div className="t-item">
                    <div style="width:36px;text-align:center;color:#a394ff;"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                    <div className="t-meta">
                      <div style="display:flex;justify-content:space-between"><strong>backup.tar</strong><span className="muted">28%</span></div>
                      <div className="t-progress"><div className="t-fill" style="width:28%"></div></div>
                    </div>
                    <div className="t-actions"><button onclick="simulateTransferQueue()"><i className="fa-solid fa-arrow-up-right-from-square"></i></button></div>
                  </div>
                  <div className="t-item">
                    <div style="width:36px;text-align:center;color:#10b981;"><i className="fa-solid fa-cloud-arrow-down"></i></div>
                    <div className="t-meta">
                      <div style="display:flex;justify-content:space-between"><strong>db_snapshot.sql</strong><span className="muted">4%</span></div>
                      <div className="t-progress"><div className="t-fill" style="width:4%"></div></div>
                    </div>
                    <div className="t-actions"><button onclick="simulateTransferQueue()"><i className="fa-solid fa-rotate"></i></button></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Transfer Queue</h3><span>Cards</span></div>
              <p>Queue view for file transfers with per-item progress and quick cancel or retry actions.</p>
              <div className="card-actions">
                <button onclick="toggleCode('code14', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('code14', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="code14" style="display:none;"><code>&lt;div className="t-item"&gt;...&lt;/div&gt;</code></pre>
          </div>
      
          {/* 15. MARATHON LINEAR */}
          <div className="component-card" data-category="linear">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="marathon-track" id="marathonPreview">
                  <div className="marathon-fill"></div>
                </div>
                <div style="margin-top:18px;"><button className="trigger-live-btn orange" onclick="startMarathon(this)">Start</button></div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Marathon Progress</h3><span>Linear</span></div>
              <p>A long-running marquee-style progress bar ideal for background syncs and live gradients.</p>
              <div className="card-actions">
                <button onclick="toggleCode('code15', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('code15', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="code15" style="display:none;"><code>&lt;div className="marathon-track"&gt;&lt;div className="marathon-fill"&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
          </div>
      
        </div>
      
      </div>
      
      {/* INJECT SIDEBAR VIA CLIENT-SIDE HOOKS OR INLINE ASSETS */}
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-brand">
          <span className="brand-icon">⬡</span>
          <span className="brand-text">UIverse <span style="font-size: 9px; background: linear-gradient(135deg, #eb6835, #7b61ff); color: white; padding: 1px 6px; border-radius: 10px; font-weight: 800; margin-left: 4px; letter-spacing: 0.5px; vertical-align: middle; box-shadow: 0 0 8px rgba(235,104,53,0.3);">V2</span></span>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="index.html"><i className="fa-solid fa-house"></i><span>Home</span></a></li>
            <li><a href="button.html"><i className="fa-solid fa-hand-pointer"></i><span>Buttons</span></a></li>
            <li><a href="dropdown-components.html"><i className="fa-solid fa-caret-down"></i><span>Dropdowns</span></a></li>
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
            <li><a href="files.html"><i className="fa-solid fa-file-arrow-up"></i><span>Drag & Drop</span></a></li>
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
            <li><a href="notifications-premium.html"><i className="fa-solid fa-bell"></i><span>Notifications V2</span></a></li>
            <li><a href="step-indicators.html"><i className="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
            <li className="active"><a href="progress-premium.html"><i className="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
            <li><a href="ratings-premium.html"><i className="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
            <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
            <li><a href="about.html"><i className="fa-solid fa-circle-info"></i><span>About</span></a></li>
            <li><a href="documentation.html"><i className="fa-solid fa-book"></i><span>Documentation</span></a></li>
            <li><a href="faq.html"><i className="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
            <li><a href="contact.html"><i className="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
          </ul>
        </nav>
      </aside>
      
      <script>
        // PROGRESS STATE variables
        let linearVal = 50;
        let circularVal = 50;
        let trackerVal = 75;
      
        // New component states
        let segmentedVal = 1; // 1 to 5
        let waveVal = 50;
        let batteryVal = 60;
        let activityVals = { cpu: 60, ram: 70, net: 80 };
        let chartVals = { ing: 65, proc: 82, query: 45 };
      
        // 1. Linear Bar Adjuster
        function updateLinearUI() {
          const fill = document.getElementById('lFill');
          const tooltip = document.getElementById('lTooltip');
          fill.style.width = linearVal + '%';
          tooltip.innerText = linearVal + '%';
        }
      
        // 2. Circular Bar Adjuster
        function updateCircularUI() {
          const path = document.getElementById('cPath');
          const dot = document.getElementById('orbitalDot');
          const num = document.getElementById('cNum');
      
          // Circumference = 2 * PI * 50 = 314.16
          const circumference = 314.16;
          const progress = circularVal / 100;
          const offset = circumference - (progress * circumference);
      
          path.style.strokeDashoffset = offset;
          num.innerText = circularVal + '%';
      
          // Calculate dynamic rotation angle of orbital dot
          const angle = (progress * 360) - 90;
          dot.style.transform = `rotate(${angle}deg) translate(50px) rotate(-${angle}deg)`;
        }
      
        // 6. Segmented Multi-Step Adjuster
        function updateSegmentedUI() {
          const steps = document.querySelectorAll('#segSteps .seg-step');
          const status = document.getElementById('segStatus');
          const pct = document.getElementById('segPct');
      
          const phases = [
            "Phase 1: Environment Provisioning",
            "Phase 2: Database Setup & Sync",
            "Phase 3: Core API Integration",
            "Phase 4: CDN Edge Deployment",
            "Phase 5: Cloud Pipeline Online"
          ];
      
          steps.forEach((step, idx) => {
            if (idx < segmentedVal) {
              step.classList.add('active');
            } else {
              step.classList.remove('active');
            }
          });
      
          status.innerText = phases[segmentedVal - 1] || "Deployment Idle";
          pct.innerText = (segmentedVal * 20) + '%';
        }
      
        // 7. Wave Animated Progress Adjuster
        function updateWaveUI() {
          const fill = document.getElementById('waveFill');
          const pct = document.getElementById('wavePct');
          
          pct.innerText = waveVal + '%';
          // Translate Y: 100% is empty, 0% is full
          const translateY = 100 - waveVal;
          fill.style.transform = `translateY(${translateY}%)`;
        }
      
        // 8. Glassmorphism Battery Progress Adjuster
        function updateBatteryUI() {
          const fill = document.getElementById('batFill');
          const pct = document.getElementById('batPct');
          const status = document.getElementById('batStatus');
          const bolt = document.getElementById('batBolt');
      
          fill.style.width = batteryVal + '%';
          pct.innerText = batteryVal + '%';
      
          if (batteryVal === 100) {
            status.innerText = "Battery Fully Charged";
            bolt.classList.remove('active');
          } else if (batteryVal === 0) {
            status.innerText = "Battery Critical (Empty)";
            bolt.classList.remove('active');
          } else {
            status.innerText = "Fast Charging (Active)";
            bolt.classList.add('active');
          }
        }
      
        // Global Progress Adjuster
        function adjustProgress(type, val) {
          if (type === 'linear') {
            linearVal = Math.min(100, Math.max(0, linearVal + val));
            updateLinearUI();
          }
          if (type === 'circular') {
            circularVal = Math.min(100, Math.max(0, circularVal + val));
            updateCircularUI();
          }
          if (type === 'segmented') {
            segmentedVal = Math.min(5, Math.max(1, segmentedVal + val));
            updateSegmentedUI();
          }
          if (type === 'wave') {
            waveVal = Math.min(100, Math.max(0, waveVal + val));
            updateWaveUI();
          }
          if (type === 'battery') {
            batteryVal = Math.min(100, Math.max(0, batteryVal + val));
            updateBatteryUI();
          }
        }
      
        // 3. Simulated Load System
        let simulateInterval = null;
        function startSimulatedLoad() {
          const fill = document.getElementById('gFill');
          const status = document.getElementById('loaderStatus');
          const pct = document.getElementById('loaderPct');
          const btn = document.querySelector('[onclick="startSimulatedLoad()"]');
      
          if (simulateInterval) clearInterval(simulateInterval);
          btn.disabled = true;
          
          let loadProgress = 0;
          status.innerText = "Initializing assets...";
          
          simulateInterval = setInterval(() => {
            loadProgress += Math.floor(Math.random() * 8) + 4;
            if (loadProgress >= 100) {
              loadProgress = 100;
              clearInterval(simulateInterval);
              status.innerText = "Fetch Completed!";
              btn.disabled = false;
            } else if (loadProgress > 75) {
              status.innerText = "Finalizing pipeline...";
            } else if (loadProgress > 40) {
              status.innerText = "Loading shaders & assets...";
            } else if (loadProgress > 15) {
              status.innerText = "Connecting secure workspace...";
            }
            
            fill.style.width = loadProgress + '%';
            pct.innerText = loadProgress + '%';
          }, 150);
        }
      
        // 4. Refill Skills Panel
        function refillSkills() {
          const fill1 = document.getElementById('sFill1');
          const fill2 = document.getElementById('sFill2');
          const fill3 = document.getElementById('sFill3');
      
          // Drain
          fill1.style.width = '0%';
          fill2.style.width = '0%';
          fill3.style.width = '0%';
      
          // Refill
          setTimeout(() => {
            fill1.style.width = '90%';
            fill2.style.width = '85%';
            fill3.style.width = '70%';
          }, 200);
        }
      
        // 5. Dynamic Percentage Tracker Selector
        function applyTrackerTarget() {
          const input = document.getElementById('targetInput');
          const target = Math.min(100, Math.max(0, parseInt(input.value) || 0));
          
          const path = document.getElementById('tPath');
          const num = document.getElementById('trackerNum');
      
          // Circumference = 2 * PI * 42 = 263.89
          const circumference = 263.89;
          
          // Animate path fill
          const progress = target / 100;
          const offset = circumference - (progress * circumference);
          path.style.strokeDashoffset = offset;
      
          // JavaScript ticker counting numbers smoothly
          let current = trackerVal;
          const isUp = target > current;
          
          const tickInterval = setInterval(() => {
            if (current === target) {
              clearInterval(tickInterval);
              trackerVal = target;
            } else {
              current = isUp ? current + 1 : current - 1;
              num.innerText = current + '%';
            }
          }, 15);
        }
      
        // 9. Concentric Rings UI Adjuster
        function updateActivityRings() {
          const fillCPU = document.getElementById('actFillCPU');
          const fillRAM = document.getElementById('actFillRAM');
          const fillNET = document.getElementById('actFillNET');
      
          const valCPU = document.getElementById('actValCPU');
          const valRAM = document.getElementById('actValRAM');
          const valNET = document.getElementById('actValNET');
      
          // Outer radius 55 => C = 345.58
          const cCPU = 345.58;
          fillCPU.style.strokeDashoffset = cCPU - (activityVals.cpu / 100 * cCPU);
          valCPU.innerText = activityVals.cpu + '%';
      
          // Middle radius 40 => C = 251.33
          const cRAM = 251.33;
          fillRAM.style.strokeDashoffset = cRAM - (activityVals.ram / 100 * cRAM);
          valRAM.innerText = activityVals.ram + '%';
      
          // Inner radius 25 => C = 157.08
          const cNET = 157.08;
          fillNET.style.strokeDashoffset = cNET - (activityVals.net / 100 * cNET);
          valNET.innerText = activityVals.net + '%';
        }
      
        let activityInterval = null;
        function jitterActivityTracker() {
          const btn = document.querySelector('[onclick="jitterActivityTracker()"]');
          if (activityInterval) {
            clearInterval(activityInterval);
            activityInterval = null;
            btn.innerHTML = '<i className="fa-solid fa-bolt"></i> Stream Live Loads';
            btn.classList.remove('active');
            return;
          }
      
          btn.innerHTML = '<i className="fa-solid fa-pause"></i> Pause Stream';
          btn.classList.add('active');
      
          activityInterval = setInterval(() => {
            activityVals.cpu = Math.min(100, Math.max(10, activityVals.cpu + Math.floor(Math.random() * 21) - 10));
            activityVals.ram = Math.min(100, Math.max(10, activityVals.ram + Math.floor(Math.random() * 15) - 7));
            activityVals.net = Math.min(100, Math.max(10, activityVals.net + Math.floor(Math.random() * 25) - 12));
            updateActivityRings();
          }, 400);
        }
      
        // 10. Analytics Chart UI Adjuster
        function updateChartsUI() {
          document.getElementById('chartFill1').style.width = chartVals.ing + '%';
          document.getElementById('chartVal1').innerText = chartVals.ing + '%';
      
          document.getElementById('chartFill2').style.width = chartVals.proc + '%';
          document.getElementById('chartVal2').innerText = chartVals.proc + '%';
      
          document.getElementById('chartFill3').style.width = chartVals.query + '%';
          document.getElementById('chartVal3').innerText = chartVals.query + '%';
        }
      
        let chartInterval = null;
        function startChartSimulate() {
          const btn = document.querySelector('[onclick="startChartSimulate()"]');
          if (chartInterval) {
            clearInterval(chartInterval);
            chartInterval = null;
            btn.innerHTML = '<i className="fa-solid fa-chart-line"></i> Pulse Stream';
            btn.classList.remove('active');
            return;
          }
      
          btn.innerHTML = '<i className="fa-solid fa-pause"></i> Pause Pulse';
          btn.classList.add('active');
      
          chartInterval = setInterval(() => {
            chartVals.ing = Math.min(100, Math.max(20, chartVals.ing + Math.floor(Math.random() * 17) - 8));
            chartVals.proc = Math.min(100, Math.max(20, chartVals.proc + Math.floor(Math.random() * 11) - 5));
            chartVals.query = Math.min(100, Math.max(15, chartVals.query + Math.floor(Math.random() * 21) - 10));
            updateChartsUI();
          }, 500);
        }
      
        // Global Actions
        function fillAllProgress() {
          linearVal = 100;
          circularVal = 100;
          segmentedVal = 5;
          waveVal = 100;
          batteryVal = 100;
          
          activityVals = { cpu: 100, ram: 100, net: 100 };
          chartVals = { ing: 100, proc: 100, query: 100 };
      
          updateLinearUI();
          updateCircularUI();
          updateSegmentedUI();
          updateWaveUI();
          updateBatteryUI();
          updateActivityRings();
          updateChartsUI();
          
          // Fill skills
          document.getElementById('sFill1').style.width = '100%';
          document.getElementById('sFill2').style.width = '100%';
          document.getElementById('sFill3').style.width = '100%';
      
          // Fill loader
          document.getElementById('gFill').style.width = '100%';
          document.getElementById('loaderPct').innerText = '100%';
          document.getElementById('loaderStatus').innerText = 'Fetch Completed!';
      
          // Fill tracker
          document.getElementById('targetInput').value = 100;
          applyTrackerTarget();
        }
      
        // Reset progress states
        function resetAllProgress() {
          linearVal = 50;
          circularVal = 50;
          trackerVal = 75;
      
          segmentedVal = 1;
          waveVal = 50;
          batteryVal = 60;
          activityVals = { cpu: 60, ram: 70, net: 80 };
          chartVals = { ing: 65, proc: 82, query: 45 };
          
          updateLinearUI();
          updateCircularUI();
          updateSegmentedUI();
          updateWaveUI();
          updateBatteryUI();
          updateActivityRings();
          updateChartsUI();
      
          // Clear simulation intervals if any
          if (activityInterval) {
            clearInterval(activityInterval);
            activityInterval = null;
            const actBtn = document.querySelector('[onclick="jitterActivityTracker()"]');
            if (actBtn) {
              actBtn.innerHTML = '<i className="fa-solid fa-bolt"></i> Stream Live Loads';
              actBtn.classList.remove('active');
            }
          }
          if (chartInterval) {
            clearInterval(chartInterval);
            chartInterval = null;
            const chartBtn = document.querySelector('[onclick="startChartSimulate()"]');
            if (chartBtn) {
              chartBtn.innerHTML = '<i className="fa-solid fa-chart-line"></i> Pulse Stream';
              chartBtn.classList.remove('active');
            }
          }
          
          // Reset skills
          document.getElementById('sFill1').style.width = '90%';
          document.getElementById('sFill2').style.width = '85%';
          document.getElementById('sFill3').style.width = '70%';
      
          // Reset loader
          document.getElementById('gFill').style.width = '0%';
          document.getElementById('loaderPct').innerText = '0%';
          document.getElementById('loaderStatus').innerText = 'Ready to load';
      
          // Reset tracker
          document.getElementById('targetInput').value = 75;
          applyTrackerTarget();
        }
      
        // Filter category
        function filterCategory(cat, btn) {
          const buttons = document.querySelectorAll('.filters button');
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
      
          const cards = document.querySelectorAll('.component-card');
          cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (cat === 'all' || cardCat === cat) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        }
      
        // Search input system
        document.getElementById('searchInput').addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          const cards = document.querySelectorAll('.component-card');
          
          cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const desc = card.querySelector('p').innerText.toLowerCase();
            if (title.includes(query) || desc.includes(query)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      
        // Code toggle and copy clipboard methods
        function toggleCode(id, btn) {
          const block = document.getElementById(id);
          if (block.style.display === 'none') {
            block.style.display = 'block';
            btn.innerHTML = '<i className="fa-solid fa-eye-slash"></i> Hide Code';
          } else {
            block.style.display = 'none';
            btn.innerHTML = '<i className="fa-solid fa-code"></i> View Code';
          }
        }
      
        function copyCode(id, btn) {
          const code = document.getElementById(id).innerText;
          navigator.clipboard.writeText(code).then(() => {
            const origText = btn.innerHTML;
            btn.innerHTML = '<i className="fa-solid fa-check"></i> Copied!';
            btn.style.color = '#10b981';
            btn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            setTimeout(() => {
              btn.innerHTML = origText;
              btn.style.color = '';
              btn.style.borderColor = '';
            }, 1800);
          });
        }
      
        // Run on start
        updateLinearUI();
        updateCircularUI();
        updateSegmentedUI();
        updateWaveUI();
        updateBatteryUI();
        updateActivityRings();
        updateChartsUI();
      
        /* --------------------
           New helpers for added components
           -------------------- */
        function simulateDownloadManager(){
          const fills = document.querySelectorAll('.dwn-fill');
          fills.forEach((f) => {
            const cur = parseInt(f.style.width) || 0;
            const next = Math.min(100, cur + Math.floor(Math.random()*22)+8);
            f.style.width = next + '%';
          });
        }
      
        function toggleIndeterminateStrip(){
          const el = document.getElementById('indStripPreview');
          if (!el) return;
          el.classList.toggle('active');
          triggerToastDemo('info', el.classList.contains('active') ? 'Indeterminate started' : 'Indeterminate stopped');
        }
      
        function animateDonutMeter(){
          const fill = document.getElementById('donutFill');
          const num = document.getElementById('donutNum');
          if (!fill) return;
          const target = Math.floor(Math.random()*80) + 10;
          const circumference = 2 * Math.PI * 52; // ~326.73
          const offset = circumference - (target/100 * circumference);
          fill.style.strokeDashoffset = offset;
          num.innerText = target + '%';
        }
      
        function simulateTransferQueue(){
          const fills = document.querySelectorAll('.t-fill');
          fills.forEach((f) => {
            const cur = parseInt(f.style.width) || 0;
            const next = Math.min(100, cur + Math.floor(Math.random()*30)+4);
            f.style.width = next + '%';
          });
          triggerToastDemo('info', 'Queue progressed');
        }
      
        function startMarathon(btn){
          const track = document.getElementById('marathonPreview');
          if (!track) return;
          track.classList.toggle('running');
          btn.innerText = track.classList.contains('running') ? 'Stop' : 'Start';
        }
      </script>
    </>
  );
}
