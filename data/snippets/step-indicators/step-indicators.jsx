import React from 'react';

export default function stepIndicators(){
  return (
    <>
      <div className="main-content">
      
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search stepper components..." id="searchInput" />
          </div>
          <div className="topbar-actions">
            <button className="add-btn" onclick="advanceAllSteps()"><i className="fa-solid fa-play"></i> Advance All</button>
            <button className="collection-btn" onclick="resetAllSteps()"><i className="fa-solid fa-rotate-left"></i> Reset All</button>
            <button className="theme-btn"><i className="fa-solid fa-moon"></i></button>
          </div>
        </header>
      
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="breadcrumb">Home &gt; Step Indicators</div>
            <h1>Sleek Step Indicators</h1>
            <p>Modern reusable progress elements, vertical checkout steppers, and interactive numbered flows. Designed with clean HSL gradients, frosted glass reflections, and ultra-smooth CSS keyframe transitions.</p>
            
            <div className="hero-tags">
              <span><i className="fa-solid fa-bolt"></i> Zero Dependencies</span>
              <span><i className="fa-solid fa-mobile-screen-button"></i> Mobile Responsive</span>
              <span><i className="fa-solid fa-wand-magic-sparkles"></i> Pure CSS Keyframes</span>
            </div>
          </div>
      
          {/* Hero Stepper Preview Animation */}
          <div className="hero-preview">
            <div className="hero-stepper-demo">
              <div className="demo-track">
                <div className="demo-fill"></div>
              </div>
              <div className="demo-nodes">
                <div className="demo-node active"><i className="fa-solid fa-check"></i></div>
                <div className="demo-node active"><i className="fa-solid fa-spinner fa-spin"></i></div>
                <div className="demo-node">3</div>
              </div>
            </div>
          </div>
        </section>
      
        {/* FILTERS */}
        <section className="filters">
          <button className="active" onclick="filterCategory('all', this)">All Steppers</button>
          <button onclick="filterCategory('horizontal', this)">Horizontal</button>
          <button onclick="filterCategory('vertical', this)">Vertical</button>
          <button onclick="filterCategory('checkout', this)">Checkout Flows</button>
          <button onclick="filterCategory('animated', this)">Animated</button>
        </section>
      
        {/* SHOWROOM GRID */}
        <div className="notification-grid" id="stepperGrid">
      
          {/* 1. HORIZONTAL STEP INDICATOR */}
          <div className="component-card" data-category="horizontal">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-horizontal-stepper" id="horizontalStepper">
                  <div className="stepper-track-bg">
                    <div className="stepper-track-fill" id="hFill" style="width: 0%;"></div>
                  </div>
                  
                  <div className="stepper-nodes">
                    <div className="step-node active" data-step="1">
                      <span className="node-icon">1</span>
                      <span className="node-label">Start</span>
                    </div>
                    <div className="step-node" data-step="2">
                      <span className="node-icon">2</span>
                      <span className="node-label">Verify</span>
                    </div>
                    <div className="step-node" data-step="3">
                      <span className="node-icon">3</span>
                      <span className="node-label">Launch</span>
                    </div>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="display:flex; gap:10px; margin-top:20px;">
                  <button className="trigger-live-btn purple" onclick="prevStep('horizontal')"><i className="fa-solid fa-arrow-left"></i> Prev</button>
                  <button className="trigger-live-btn orange" onclick="nextStep('horizontal')">Next <i className="fa-solid fa-arrow-right"></i></button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Horizontal Indicator</h3>
                <span>Horizontal</span>
              </div>
              <p>Interactive horizontal progress stepper with animated track filling, scaling icons, and clean text description anchors.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeH', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeH', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeH" style="display:none;"><code>&lt;div className="premium-horizontal-stepper"&gt;
        &lt;div className="stepper-track-bg"&gt;
          &lt;div className="stepper-track-fill" style="width: 50%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="stepper-nodes"&gt;
          &lt;div className="step-node active"&gt;
            &lt;span className="node-icon"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
            &lt;span className="node-label"&gt;Start&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="step-node active"&gt;
            &lt;span className="node-icon"&gt;2&lt;/span&gt;
            &lt;span className="node-label"&gt;Verify&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="step-node"&gt;
            &lt;span className="node-icon"&gt;3&lt;/span&gt;
            &lt;span className="node-label"&gt;Launch&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 2. VERTICAL PROGRESS STEPS */}
          <div className="component-card" data-category="vertical">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-vertical-stepper">
                  <div className="vertical-track">
                    <div className="vertical-fill" id="vFill" style="height: 0%;"></div>
                  </div>
                  
                  <div className="vertical-steps">
                    <div className="v-step active" onclick="setStep('vertical', 1)" data-vstep="1">
                      <div className="v-node">1</div>
                      <div className="v-text">
                        <h4>Configure Repository</h4>
                        <p>Initialize workspace guidelines and tokens.</p>
                      </div>
                    </div>
                    <div className="v-step" onclick="setStep('vertical', 2)" data-vstep="2">
                      <div className="v-node">2</div>
                      <div className="v-text">
                        <h4>Style Implementation</h4>
                        <p>Write standard glassmorphism layouts.</p>
                      </div>
                    </div>
                    <div className="v-step" onclick="setStep('vertical', 3)" data-vstep="3">
                      <div className="v-node">3</div>
                      <div className="v-text">
                        <h4>Automated Deploy</h4>
                        <p>Run Node sidebar connector hooks.</p>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Vertical Progress</h3>
                <span>Vertical</span>
              </div>
              <p>A timeline checklist stepper ideal for task tracking, setups, and processes. Supports click-to-activate node transitions.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeV', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeV', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeV" style="display:none;"><code>&lt;div className="premium-vertical-stepper"&gt;
        &lt;div className="vertical-track"&gt;
          &lt;div className="vertical-fill" style="height: 50%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="vertical-steps"&gt;
          &lt;div className="v-step active"&gt;
            &lt;div className="v-node"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div className="v-text"&gt;
              &lt;h4&gt;Configure&lt;/h4&gt;
              &lt;p&gt;Initialize workspace guidelines.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="v-step active"&gt;
            &lt;div className="v-node"&gt;2&lt;/div&gt;
            &lt;div className="v-text"&gt;
              &lt;h4&gt;Style&lt;/h4&gt;
              &lt;p&gt;Write standard glassmorphism.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 3. CHECKOUT STEPPER */}
          <div className="component-card" data-category="checkout">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-checkout-stepper" id="checkoutStepper">
                  <div className="checkout-track">
                    <div className="checkout-fill" id="cFill" style="width: 0%;"></div>
                  </div>
                  
                  <div className="checkout-steps">
                    <div className="c-step active" data-cstep="1">
                      <div className="c-badge"><i className="fa-solid fa-truck-fast"></i></div>
                      <span className="c-label">Shipping</span>
                    </div>
                    <div className="c-step" data-cstep="2">
                      <div className="c-badge"><i className="fa-solid fa-credit-card"></i></div>
                      <span className="c-label">Payment</span>
                    </div>
                    <div className="c-step" data-cstep="3">
                      <div className="c-badge"><i className="fa-solid fa-bag-shopping"></i></div>
                      <span className="c-label">Confirm</span>
                    </div>
                  </div>
                </div>
      
                {/* Interaction Controls */}
                <div style="display:flex; gap:10px; margin-top:20px;">
                  <button className="trigger-live-btn purple" onclick="prevStep('checkout')"><i className="fa-solid fa-arrow-left"></i> Back</button>
                  <button className="trigger-live-btn green" onclick="nextStep('checkout')">Next <i className="fa-solid fa-arrow-right"></i></button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Checkout Stepper</h3>
                <span>Checkout</span>
              </div>
              <p>Premium multi-step shopping checkout visualizer using dual-outline glassmorphism boxes and sleek responsive badges.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeC', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeC', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeC" style="display:none;"><code>&lt;div className="premium-checkout-stepper"&gt;
        &lt;div className="checkout-track"&gt;
          &lt;div className="checkout-fill" style="width: 100%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="checkout-steps"&gt;
          &lt;div className="c-step completed"&gt;
            &lt;div className="c-badge"&gt;&lt;i className="fa-solid fa-truck"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;span className="c-label"&gt;Shipping&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="c-step completed"&gt;
            &lt;div className="c-badge"&gt;&lt;i className="fa-solid fa-credit-card"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;span className="c-label"&gt;Payment&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="c-step active"&gt;
            &lt;div className="c-badge"&gt;&lt;i className="fa-solid fa-bag-shopping"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;span className="c-label"&gt;Confirm&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 4. NUMBERED STEP FLOW */}
          <div className="component-card" data-category="horizontal">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-numbered-flow">
                  <div className="flow-nodes">
                    <div className="flow-node active" onclick="setStep('flow', 1)" data-fstep="1">
                      <span className="flow-num">01</span>
                      <span className="flow-title">Basics</span>
                    </div>
                    <div className="flow-node" onclick="setStep('flow', 2)" data-fstep="2">
                      <span className="flow-num">02</span>
                      <span className="flow-title">Security</span>
                    </div>
                    <div className="flow-node" onclick="setStep('flow', 3)" data-fstep="3">
                      <span className="flow-num">03</span>
                      <span className="flow-title">Deploy</span>
                    </div>
                    
                    {/* Sliding Indicator Underline */}
                    <div className="flow-underline" id="fUnderline" style="left: 0%; width: 33.3%;"></div>
                  </div>
      
                  {/* Active Content Block */}
                  <div className="flow-content-panel" id="flowPanel">
                    <h5 id="panelTitle">Configure Basic Details</h5>
                    <p id="panelText">Input primary username, repository parameters, and naming standards to set up the foundation.</p>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Numbered Flow</h3>
                <span>Horizontal</span>
              </div>
              <p>A minimalist horizontal numbered design flow using glass nodes and an active sliding border underline.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeF', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeF', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeF" style="display:none;"><code>&lt;div className="premium-numbered-flow"&gt;
        &lt;div className="flow-nodes"&gt;
          &lt;div className="flow-node active"&gt;
            &lt;span className="flow-num"&gt;01&lt;/span&gt;
            &lt;span className="flow-title"&gt;Basics&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="flow-node"&gt;
            &lt;span className="flow-num"&gt;02&lt;/span&gt;
            &lt;span className="flow-title"&gt;Security&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="flow-underline" style="left: 0%; width: 50%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 5. ANIMATED PROGRESS STEPPER */}
          <div className="component-card" data-category="animated">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-animated-stepper">
                  <div className="svg-ring-container">
                    <svg className="progress-ring" width="120" height="120">
                      <circle className="ring-bg" cx="60" cy="60" r="50"></circle>
                      <circle className="ring-fill" id="svgCircle" cx="60" cy="60" r="50" stroke-dasharray="314.16" stroke-dashoffset="314.16"></circle>
                    </svg>
                    <div className="ring-content">
                      <span className="ring-step-num" id="ringStepNum">1 / 4</span>
                      <span className="ring-step-name" id="ringStepLabel">Start</span>
                    </div>
                  </div>
      
                  {/* Play/Advance Buttons */}
                  <div style="display:flex; gap:10px; margin-top:20px;">
                    <button className="trigger-live-btn purple" onclick="toggleAutoPlay(this)"><i className="fa-solid fa-play"></i> Auto Play</button>
                    <button className="trigger-live-btn orange" onclick="nextStep('animated')"><i className="fa-solid fa-chevron-right"></i> Advance</button>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Animated SVG Stepper</h3>
                <span>Animated</span>
              </div>
              <p>Advanced circular progress stepper utilizing fluid SVG dash-offsets and auto-advancing play capabilities.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeA', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeA', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeA" style="display:none;"><code>&lt;div className="premium-animated-stepper"&gt;
        &lt;svg className="progress-ring" width="120" height="120"&gt;
          &lt;circle className="ring-bg" cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
          &lt;circle className="ring-fill" cx="60" cy="60" r="50" stroke-dasharray="314.16" stroke-dashoffset="157.08"&gt;&lt;/circle&gt;
        &lt;/svg&gt;
        &lt;div className="ring-content"&gt;
          &lt;span className="ring-step-num"&gt;2 / 4&lt;/span&gt;
          &lt;span className="ring-step-name"&gt;Verify&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 6. TIMELINE JOURNEY STEPPER */}
          <div className="component-card" data-category="animated">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="timeline-journey-stepper" id="journeyStepper">
                  {/* Curved path linking nodes */}
                  <svg className="journey-track" viewBox="0 0 320 80">
                    <path className="journey-track-bg" d="M 20 40 Q 95 10, 160 40 T 300 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"></path>
                    <path className="journey-track-fill" id="jFill" d="M 20 40 Q 95 10, 160 40 T 300 40" fill="none" stroke="url(#journeyGradient)" stroke-width="4" stroke-dasharray="320" stroke-dashoffset="320"></path>
                    <defs>
                      <linearGradient id="journeyGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#7b61ff"></stop>
                        <stop offset="100%" stop-color="#ff7a3d"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="journey-nodes">
                    <div className="journey-node active" data-jstep="1" style="left: 20px; top: 40px;">
                      <span className="j-dot"></span>
                      <span className="j-label">Discovery</span>
                    </div>
                    <div className="journey-node" data-jstep="2" style="left: 160px; top: 40px;">
                      <span className="j-dot"></span>
                      <span className="j-label">Prototype</span>
                    </div>
                    <div className="journey-node" data-jstep="3" style="left: 300px; top: 40px;">
                      <span className="j-dot"></span>
                      <span className="j-label">Delivery</span>
                    </div>
                  </div>
                </div>
      
                {/* Controls */}
                <div style="display:flex; gap:10px; margin-top:20px;">
                  <button className="trigger-live-btn purple" onclick="prevStep('journey')"><i className="fa-solid fa-chevron-left"></i> Prev</button>
                  <button className="trigger-live-btn orange" onclick="nextStep('journey')">Next <i className="fa-solid fa-chevron-right"></i></button>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Timeline Journey</h3>
                <span>Animated</span>
              </div>
              <p>A stylized wavy timeline path designed using animated SVG bezier curves, responsive floating milestone labels, and smooth state transitions.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeJ', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeJ', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeJ" style="display:none;"><code>&lt;div className="timeline-journey-stepper"&gt;
        &lt;svg className="journey-track" viewBox="0 0 320 80"&gt;
          &lt;path className="journey-track-bg" d="M 20 40 Q 95 10, 160 40 T 300 40" fill="none" stroke-width="4"&gt;&lt;/path&gt;
          &lt;path className="journey-track-fill" d="M 20 40 Q 95 10, 160 40 T 300 40" fill="none" stroke-width="4" stroke-dasharray="320" stroke-dashoffset="320"&gt;&lt;/path&gt;
        &lt;/svg&gt;
        &lt;div className="journey-nodes"&gt;
          &lt;div className="journey-node completed" style="left: 20px; top: 40px;"&gt;
            &lt;span className="j-dot"&gt;&lt;/span&gt;
            &lt;span className="j-label"&gt;Discovery&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="journey-node active" style="left: 160px; top: 40px;"&gt;
            &lt;span className="j-dot"&gt;&lt;/span&gt;
            &lt;span className="j-label"&gt;Prototype&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="journey-node" style="left: 300px; top: 40px;"&gt;
            &lt;span className="j-dot"&gt;&lt;/span&gt;
            &lt;span className="j-label"&gt;Delivery&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 7. GLASSMORPHISM WIZARD FLOW */}
          <div className="component-card" data-category="checkout">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="glassmorphism-wizard">
                  <div className="wizard-header">
                    <span className="wizard-step-tag" id="wizardTag">STEP 1 OF 3</span>
                    <h4 id="wizardStepTitle">Identity Profile</h4>
                  </div>
                  
                  <div className="wizard-carousel">
                    <div className="wizard-slider" id="wizardSlider" style="transform: translateX(0%);">
                      {/* Page 1 */}
                      <div className="wizard-slide">
                        <div className="wizard-input-group">
                          <label>Workspace Alias</label>
                          <input type="text" value="@neotech" placeholder="e.g. @workspace" readonly />
                        </div>
                      </div>
                      {/* Page 2 */}
                      <div className="wizard-slide">
                        <div className="wizard-input-group">
                          <label>Credentials Level</label>
                          <input type="password" value="••••••••" readonly />
                        </div>
                      </div>
                      {/* Page 3 */}
                      <div className="wizard-slide">
                        <div className="wizard-success-card">
                          <i className="fa-solid fa-circle-check"></i>
                          <span>Ready for Deployment</span>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="wizard-nav">
                    <button className="wizard-btn-prev" onclick="prevStep('wizard')"><i className="fa-solid fa-angle-left"></i> Back</button>
                    <button className="wizard-btn-next" onclick="nextStep('wizard')">Continue <i className="fa-solid fa-angle-right"></i></button>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Glassmorphic Wizard</h3>
                <span>Checkout</span>
              </div>
              <p>A multi-step setup card implementing glassmorphism, responsive forms inputs, slide-transition tab sheets, and glowing validation tags.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeW', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeW', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeW" style="display:none;"><code>&lt;div className="glassmorphism-wizard"&gt;
        &lt;div className="wizard-header"&gt;
          &lt;span className="wizard-step-tag"&gt;STEP 2 OF 3&lt;/span&gt;
          &lt;h4&gt;Security Credentials&lt;/h4&gt;
        &lt;/div&gt;
        &lt;div className="wizard-carousel"&gt;
          &lt;div className="wizard-slider" style="transform: translateX(-100%);"&gt;
            &lt;div className="wizard-slide"&gt;...&lt;/div&gt;
            &lt;div className="wizard-slide"&gt;...&lt;/div&gt;
            &lt;div className="wizard-slide"&gt;...&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 8. CIRCULAR ORBIT STEP INDICATOR */}
          <div className="component-card" data-category="animated">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="circular-orbit-stepper">
                  <div className="orbit-wheel" id="orbitWheel" style="transform: rotate(0deg);">
                    <div className="orbit-ring"></div>
                    
                    {/* Orbital Nodes */}
                    <div className="orbit-node active" data-ostep="1" onclick="setStep('orbit', 1)" style="top: 0%; left: 50%; transform: translate(-50%, -50%);">
                      <i className="fa-solid fa-shield"></i>
                    </div>
                    <div className="orbit-node" data-ostep="2" onclick="setStep('orbit', 2)" style="top: 75%; left: 93.3%; transform: translate(-50%, -50%);">
                      <i className="fa-solid fa-server"></i>
                    </div>
                    <div className="orbit-node" data-ostep="3" onclick="setStep('orbit', 3)" style="top: 75%; left: 6.7%; transform: translate(-50%, -50%);">
                      <i className="fa-solid fa-rocket"></i>
                    </div>
                  </div>
      
                  {/* Central Hub Status */}
                  <div className="orbit-hub">
                    <span className="hub-label" id="hubLabel">SHIELD</span>
                    <span className="hub-status" id="hubStatus">Stage 1</span>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Circular Orbit</h3>
                <span>Animated</span>
              </div>
              <p>A futuristic circular layout with nodes positioned orbitally around a status hub. Shifts the planetary angles on node click.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeO', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeO', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeO" style="display:none;"><code>&lt;div className="circular-orbit-stepper"&gt;
        &lt;div className="orbit-wheel" style="transform: rotate(-120deg);"&gt;
          &lt;div className="orbit-node active" style="top: 0%; left: 50%;"&gt;&lt;i className="fa-solid fa-shield"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;div className="orbit-node" style="top: 75%; left: 93.3%;"&gt;&lt;i className="fa-solid fa-server"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="orbit-hub"&gt;
          &lt;span className="hub-label"&gt;SERVER&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 9. EXPANDABLE ACCORDION STEPPER */}
          <div className="component-card" data-category="vertical">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="expandable-accordion-stepper">
                  {/* Row 1 */}
                  <div className="acc-row active" id="accRow-1" onclick="setStep('accordion', 1)">
                    <div className="acc-header">
                      <div className="acc-indicator">1</div>
                      <h4 className="acc-title">Build Infrastructure</h4>
                      <i className="fa-solid fa-chevron-down acc-arrow"></i>
                    </div>
                    <div className="acc-body">
                      <p>Provision VM cloud server networks, initialize Docker volumes, and set database replicas.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="acc-row" id="accRow-2" onclick="setStep('accordion', 2)">
                    <div className="acc-header">
                      <div className="acc-indicator">2</div>
                      <h4 className="acc-title">Verify Firewalls</h4>
                      <i className="fa-solid fa-chevron-down acc-arrow"></i>
                    </div>
                    <div className="acc-body">
                      <p>Filter port access, inject secure TLS certs, and establish proxy router policies.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="acc-row" id="accRow-3" onclick="setStep('accordion', 3)">
                    <div className="acc-header">
                      <div className="acc-indicator">3</div>
                      <h4 className="acc-title">Launch Pipeline</h4>
                      <i className="fa-solid fa-chevron-down acc-arrow"></i>
                    </div>
                    <div className="acc-body">
                      <p>Build bundles, execute integration diagnostics, and deploy straight to live servers.</p>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Accordion Stepper</h3>
                <span>Vertical</span>
              </div>
              <p>A vertical accordion stepper. Automatically expands selected node parameters while collapsing sibling checklists.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeAcc', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeAcc', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeAcc" style="display:none;"><code>&lt;div className="expandable-accordion-stepper"&gt;
        &lt;div className="acc-row active"&gt;
          &lt;div className="acc-header"&gt;
            &lt;div className="acc-indicator"&gt;1&lt;/div&gt;
            &lt;h4 className="acc-title"&gt;Title&lt;/h4&gt;
          &lt;/div&gt;
          &lt;div className="acc-body"&gt;Detailed checklist text.&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 10. MOBILE SWIPE STEP FLOW */}
          <div className="component-card" data-category="horizontal">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="mobile-swipe-stepper">
                  <div className="phone-screen">
                    <div className="swipe-carousel">
                      <div className="swipe-slider" id="swipeSlider" style="transform: translateX(0%);">
                        <div className="swipe-page">
                          <div className="swipe-icon"><i className="fa-solid fa-user-ninja"></i></div>
                          <h5>User Setup</h5>
                          <p>Enter your profile alias to initialize settings.</p>
                        </div>
                        <div className="swipe-page">
                          <div className="swipe-icon"><i className="fa-solid fa-fingerprint"></i></div>
                          <h5>Bio-Lock</h5>
                          <p>Add fingerprint security protection layers.</p>
                        </div>
                        <div className="swipe-page">
                          <div className="swipe-icon"><i className="fa-solid fa-bell-concierge"></i></div>
                          <h5>Fully Ready</h5>
                          <p>You are now fully configured and launch-ready!</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom dot indicator */}
                    <div className="swipe-footer">
                      <button className="swipe-nav-btn" onclick="prevStep('swipe')">&larr;</button>
                      <div className="swipe-dots">
                        <span className="swipe-dot active" data-swipe-dot="1"></span>
                        <span className="swipe-dot" data-swipe-dot="2"></span>
                        <span className="swipe-dot" data-swipe-dot="3"></span>
                      </div>
                      <button className="swipe-nav-btn" onclick="nextStep('swipe')">&rarr;</button>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Mobile Swipe Flow</h3>
                <span>Horizontal</span>
              </div>
              <p>A sleek iOS-style mobile wizard simulation showcasing sliding onboarding panels and dot indicator paginations.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeSwipe', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeSwipe', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeSwipe" style="display:none;"><code>&lt;div className="mobile-swipe-stepper"&gt;
        &lt;div className="swipe-carousel"&gt;
          &lt;div className="swipe-slider" style="transform: translateX(-100%);"&gt;
            &lt;div className="swipe-page"&gt;...&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="swipe-dots"&gt;
          &lt;span className="swipe-dot active"&gt;&lt;/span&gt;
          &lt;span className="swipe-dot"&gt;&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 11. DOTTED PATH STEPPER */}
          <div className="component-card" data-category="horizontal">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-dotted-stepper">
                  <div className="dot-step active">
                    <div className="dot-icon"><i className="fa-solid fa-cart-shopping"></i></div>
                    <span>Cart</span>
                  </div>
                  <div className="dot-line active"></div>
                  <div className="dot-step active">
                    <div className="dot-icon"><i className="fa-solid fa-credit-card"></i></div>
                    <span>Pay</span>
                  </div>
                  <div className="dot-line"></div>
                  <div className="dot-step">
                    <div className="dot-icon"><i className="fa-solid fa-box-open"></i></div>
                    <span>Done</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Dotted Path Stepper</h3>
                <span>Horizontal</span>
              </div>
              <p>A minimalist horizontal stepper with connected dashed lines and icon-based step indicators.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeDot', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeDot', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeDot" style="display:none;"><code>&lt;div className="premium-dotted-stepper"&gt;
        &lt;div className="dot-step active"&gt;
          &lt;div className="dot-icon"&gt;&lt;i className="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;span&gt;Cart&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="dot-line active"&gt;&lt;/div&gt;
        &lt;!-- More steps... --&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 12. MINIMAL TEXT STEPPER */}
          <div className="component-card" data-category="vertical">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-text-stepper">
                  <div className="text-step completed">
                    <span className="t-step-num">01</span>
                    <span className="t-step-label">Account Setup</span>
                  </div>
                  <div className="text-step active">
                    <span className="t-step-num">02</span>
                    <span className="t-step-label">Profile Details</span>
                  </div>
                  <div className="text-step">
                    <span className="t-step-num">03</span>
                    <span className="t-step-label">Verification</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Minimal Text Stepper</h3>
                <span>Vertical</span>
              </div>
              <p>A sleek, typography-focused vertical stepper relying on opacity and clean spacing to indicate progress.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeText', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeText', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeText" style="display:none;"><code>&lt;div className="premium-text-stepper"&gt;
        &lt;div className="text-step active"&gt;
          &lt;span className="t-step-num"&gt;02&lt;/span&gt;
          &lt;span className="t-step-label"&gt;Profile Details&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 13. CARD-BASED STEPPER */}
          <div className="component-card" data-category="horizontal">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-card-stepper">
                  <div className="card-step completed">
                    <i className="fa-solid fa-check"></i>
                    <span>Plan</span>
                  </div>
                  <div className="card-step active">
                    <i className="fa-solid fa-pen-nib"></i>
                    <span>Design</span>
                  </div>
                  <div className="card-step">
                    <i className="fa-solid fa-code"></i>
                    <span>Build</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Card-Based Stepper</h3>
                <span>Horizontal</span>
              </div>
              <p>A modern segmented control style stepper using distinct interactive cards with dynamic glow effects.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeCardStep', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeCardStep', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeCardStep" style="display:none;"><code>&lt;div className="premium-card-stepper"&gt;
        &lt;div className="card-step active"&gt;
          &lt;i className="fa-solid fa-pen-nib"&gt;&lt;/i&gt;
          &lt;span&gt;Design&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 14. NEON PROGRESS STEPPER */}
          <div className="component-card" data-category="animated">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-neon-stepper">
                  <div className="neon-track">
                    <div className="neon-fill" style="width: 50%;"></div>
                  </div>
                  <div className="neon-nodes">
                    <div className="neon-node active"></div>
                    <div className="neon-node active"></div>
                    <div className="neon-node"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Neon Progress Stepper</h3>
                <span>Animated</span>
              </div>
              <p>A bright, glowing neon progress bar with pulsating active nodes for a futuristic, cyberpunk aesthetic.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeNeon', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeNeon', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeNeon" style="display:none;"><code>&lt;div className="premium-neon-stepper"&gt;
        &lt;div className="neon-track"&gt;
          &lt;div className="neon-fill" style="width: 50%;"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="neon-nodes"&gt;
          &lt;div className="neon-node active"&gt;&lt;/div&gt;
          &lt;div className="neon-node active"&gt;&lt;/div&gt;
          &lt;div className="neon-node"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 15. TIMELINE STEPS */}
          <div className="component-card" data-category="vertical">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-timeline-stepper">
                  <div className="timeline-step completed">
                    <div className="t-dot"></div>
                    <div className="t-content">
                      <h5>Order Placed</h5>
                      <p>Dec 12, 10:00 AM</p>
                    </div>
                  </div>
                  <div className="timeline-step active">
                    <div className="t-dot"></div>
                    <div className="t-content">
                      <h5>Processing</h5>
                      <p>Dec 13, 02:30 PM</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <div className="t-dot"></div>
                    <div className="t-content">
                      <h5>Delivered</h5>
                      <p>Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Timeline Steps</h3>
                <span>Vertical</span>
              </div>
              <p>An elegant vertical timeline stepper ideal for order tracking, complete with descriptive meta data.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeTimeline', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeTimeline', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeTimeline" style="display:none;"><code>&lt;div className="premium-timeline-stepper"&gt;
        &lt;div className="timeline-step active"&gt;
          &lt;div className="t-dot"&gt;&lt;/div&gt;
          &lt;div className="t-content"&gt;
            &lt;h5&gt;Processing&lt;/h5&gt;
            &lt;p&gt;Dec 13, 02:30 PM&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
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
            <li className="active"><a href="step-indicators.html"><i className="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
            <li><a href="progress-premium.html"><i className="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
            <li><a href="ratings-premium.html"><i className="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
            <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
            <li><a href="about.html"><i className="fa-solid fa-circle-info"></i><span>About</span></a></li>
            <li><a href="documentation.html"><i className="fa-solid fa-book"></i><span>Documentation</span></a></li>
            <li><a href="faq.html"><i className="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
            <li><a href="contact.html"><i className="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
          </ul>
        </nav>
      </aside>
        {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
      
          <div className="socials">
        <a href="https://github.com" target="_blank" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" title="Twitter">
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
      
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><a href="button.html">Buttons</a></li>
              <li><a href="navbar.html">Navbars</a></li>
              <li><a href="cards.html">Cards</a></li>
              <li><a href="inputs.html">Inputs</a></li>
              <li><a href="forms.html">Forms</a></li>
            </ul>
          </div>
      
          <div className="footer-col">
            <h3>Resources</h3>
            <ul>
              <li><a href="documentation.html">Documentation</a></li>
              <li><a href="contribute.html">Contribute</a></li>
              <li><a href="https://github.com/uiverse/uiverse" target="_blank">GitHub Repo</a></li>
              <li><a href="community.html">Community</a></li>
              <li><a href="support.html">Support</a></li>
            </ul>
          </div>
      
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="privacypolicy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms of Service</a></li>
              <li><a href="license.html">License</a></li>
            </ul>
          </div>
      
          <div className="footer-col newsletter">
            <h3>Stay Updated</h3>
            <p>Get notified when new components drop.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button type="button" onclick="subscribe()">Subscribe</button>
            </div>
          </div>
      
        </div>
      
        <div className="footer-bottom">
          <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
        </div>
      </footer>
      
      
      <script>
        // STEPPER STATE TRACKING variables
        let currentSteps = {
          horizontal: 1,
          vertical: 1,
          checkout: 1,
          flow: 1,
          animated: 1,
          journey: 1,
          wizard: 1,
          orbit: 1,
          accordion: 1,
          swipe: 1
        };
       
        const totalSteps = {
          horizontal: 3,
          vertical: 3,
          checkout: 3,
          flow: 3,
          animated: 4,
          journey: 3,
          wizard: 3,
          orbit: 3,
          accordion: 3,
          swipe: 3
        };
       
        const animatedLabels = ["Start", "Verify", "Launch", "Finished!"];
       
        // 1. Horizontal Stepper Logic
        function updateHorizontalUI() {
          const fill = document.getElementById('hFill');
          const nodes = document.querySelectorAll('#horizontalStepper .step-node');
          const step = currentSteps.horizontal;
       
          // Update progress track
          fill.style.width = ((step - 1) / (totalSteps.horizontal - 1)) * 100 + '%';
       
          // Update nodes
          nodes.forEach(node => {
            const nodeStep = parseInt(node.getAttribute('data-step'));
            if (nodeStep < step) {
              node.className = 'step-node completed';
              node.querySelector('.node-icon').innerHTML = '<i className="fa-solid fa-check"></i>';
            } else if (nodeStep === step) {
              node.className = 'step-node active';
              node.querySelector('.node-icon').innerText = nodeStep;
            } else {
              node.className = 'step-node';
              node.querySelector('.node-icon').innerText = nodeStep;
            }
          });
        }
       
        // 2. Vertical Stepper Logic
        function updateVerticalUI() {
          const fill = document.getElementById('vFill');
          const steps = document.querySelectorAll('.v-step');
          const step = currentSteps.vertical;
       
          fill.style.height = ((step - 1) / (totalSteps.vertical - 1)) * 100 + '%';
       
          steps.forEach(s => {
            const vstep = parseInt(s.getAttribute('data-vstep'));
            if (vstep < step) {
              s.className = 'v-step completed';
              s.querySelector('.v-node').innerHTML = '<i className="fa-solid fa-check"></i>';
            } else if (vstep === step) {
              s.className = 'v-step active';
              s.querySelector('.v-node').innerText = vstep;
            } else {
              s.className = 'v-step';
              s.querySelector('.v-node').innerText = vstep;
            }
          });
        }
       
        // 3. Checkout Stepper Logic
        function updateCheckoutUI() {
          const fill = document.getElementById('cFill');
          const steps = document.querySelectorAll('#checkoutStepper .c-step');
          const step = currentSteps.checkout;
       
          fill.style.width = ((step - 1) / (totalSteps.checkout - 1)) * 100 + '%';
       
          steps.forEach(s => {
            const cstep = parseInt(s.getAttribute('data-cstep'));
            if (cstep < step) {
              s.className = 'c-step completed';
            } else if (cstep === step) {
              s.className = 'c-step active';
            } else {
              s.className = 'c-step';
            }
          });
        }
       
        // 4. Numbered Flow Logic
        const flowData = {
          1: {
            title: "Configure Basic Details",
            text: "Input primary username, repository parameters, and naming standards to set up the foundation."
          },
          2: {
            title: "Establish Security Rules",
            text: "Write standard API keys, authorize workspace contributors, and deploy TLS credentials."
          },
          3: {
            title: "Automated Deploy Hooks",
            text: "Publish modules, execute regression checks, and trigger live client page notifications."
          }
        };
       
        function updateFlowUI() {
          const underline = document.getElementById('fUnderline');
          const nodes = document.querySelectorAll('.flow-node');
          const step = currentSteps.flow;
       
          underline.style.left = ((step - 1) * 33.3) + '%';
       
          nodes.forEach(node => {
            const fstep = parseInt(node.getAttribute('data-fstep'));
            node.classList.toggle('active', fstep === step);
          });
       
          document.getElementById('panelTitle').innerText = flowData[step].title;
          document.getElementById('panelText').innerText = flowData[step].text;
        }
       
        // 5. Animated Progress Stepper Logic
        let autoPlayInterval = null;
       
        function updateAnimatedUI() {
          const circle = document.getElementById('svgCircle');
          const stepLabel = document.getElementById('ringStepLabel');
          const stepNum = document.getElementById('ringStepNum');
          const step = currentSteps.animated;
       
          // Circumference = 2 * PI * 50 = 314.16
          const circumference = 314.16;
          const progress = (step - 1) / (totalSteps.animated - 1);
          const offset = circumference - (progress * circumference);
       
          circle.style.strokeDashoffset = offset;
          stepNum.innerText = `${step} / ${totalSteps.animated}`;
          stepLabel.innerText = animatedLabels[step - 1];
        }
       
        function toggleAutoPlay(btn) {
          if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            btn.innerHTML = '<i className="fa-solid fa-play"></i> Auto Play';
          } else {
            btn.innerHTML = '<i className="fa-solid fa-pause"></i> Pause';
            autoPlayInterval = setInterval(() => {
              currentSteps.animated = (currentSteps.animated % totalSteps.animated) + 1;
              updateAnimatedUI();
            }, 1500);
          }
        }
      
        // 6. Timeline Journey Stepper Logic
        function updateJourneyUI() {
          const fill = document.getElementById('jFill');
          const nodes = document.querySelectorAll('#journeyStepper .journey-node');
          const step = currentSteps.journey;
      
          // SVG dash offset animation
          const offset = 320 - ((step - 1) / (totalSteps.journey - 1)) * 320;
          fill.style.strokeDashoffset = offset;
      
          nodes.forEach(node => {
            const jstep = parseInt(node.getAttribute('data-jstep'));
            if (jstep < step) {
              node.className = 'journey-node completed';
            } else if (jstep === step) {
              node.className = 'journey-node active';
            } else {
              node.className = 'journey-node';
            }
          });
        }
      
        // 7. Glassmorphism Wizard Logic
        const wizardTitles = ["Identity Profile", "Security Credentials", "System Status"];
        function updateWizardUI() {
          const slider = document.getElementById('wizardSlider');
          const tag = document.getElementById('wizardTag');
          const title = document.getElementById('wizardStepTitle');
          const step = currentSteps.wizard;
      
          slider.style.transform = `translateX(-${(step - 1) * 100}%)`;
          tag.innerText = `STEP ${step} OF ${totalSteps.wizard}`;
          title.innerText = wizardTitles[step - 1];
        }
      
        // 8. Circular Orbit Logic
        const orbitInfo = [
          { label: "SHIELD", status: "Stage 1" },
          { label: "SERVER", status: "Stage 2" },
          { label: "ROCKET", status: "Stage 3" }
        ];
        function updateOrbitUI() {
          const wheel = document.getElementById('orbitWheel');
          const nodes = document.querySelectorAll('.orbit-node');
          const step = currentSteps.orbit;
      
          const angle = -(step - 1) * 120;
          wheel.style.transform = `rotate(${angle}deg)`;
      
          nodes.forEach(node => {
            const ostep = parseInt(node.getAttribute('data-ostep'));
            node.classList.toggle('active', ostep === step);
          });
      
          document.getElementById('hubLabel').innerText = orbitInfo[step - 1].label;
          document.getElementById('hubStatus').innerText = orbitInfo[step - 1].status;
        }
      
        // 9. Expandable Accordion Logic
        function updateAccordionUI() {
          const rows = document.querySelectorAll('.acc-row');
          const step = currentSteps.accordion;
      
          rows.forEach((row, idx) => {
            const isCurrent = (idx + 1) === step;
            row.classList.toggle('active', isCurrent);
          });
        }
      
        // 10. Mobile Swipe Logic
        function updateSwipeUI() {
          const slider = document.getElementById('swipeSlider');
          const dots = document.querySelectorAll('.swipe-dot');
          const step = currentSteps.swipe;
      
          slider.style.transform = `translateX(-${(step - 1) * 100}%)`;
          dots.forEach((dot, idx) => {
            dot.classList.toggle('active', (idx + 1) === step);
          });
        }
       
        // Next / Prev button triggers
        function nextStep(type) {
          if (currentSteps[type] < totalSteps[type]) {
            currentSteps[type]++;
            triggerUpdate(type);
          }
        }
       
        // Custom back handler to support looping circular orbit stepper
        function prevStep(type) {
          if (currentSteps[type] > 1) {
            currentSteps[type]--;
            triggerUpdate(type);
          }
        }
       
        function setStep(type, val) {
          currentSteps[type] = val;
          triggerUpdate(type);
        }
       
        function triggerUpdate(type) {
          if (type === 'horizontal') updateHorizontalUI();
          if (type === 'vertical') updateVerticalUI();
          if (type === 'checkout') updateCheckoutUI();
          if (type === 'flow') updateFlowUI();
          if (type === 'animated') updateAnimatedUI();
          if (type === 'journey') updateJourneyUI();
          if (type === 'wizard') updateWizardUI();
          if (type === 'orbit') updateOrbitUI();
          if (type === 'accordion') updateAccordionUI();
          if (type === 'swipe') updateSwipeUI();
        }
       
        // Global Actions
        function advanceAllSteps() {
          Object.keys(currentSteps).forEach(key => {
            if (currentSteps[key] < totalSteps[key]) {
              currentSteps[key]++;
              triggerUpdate(key);
            }
          });
        }
       
        // Custom reset method to clear auto play intervals
        function resetAllSteps() {
          Object.keys(currentSteps).forEach(key => {
            currentSteps[key] = 1;
            triggerUpdate(key);
          });
          if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
            document.querySelector('[onclick="toggleAutoPlay(this)"]').innerHTML = '<i className="fa-solid fa-play"></i> Auto Play';
          }
        }
       
        // Filter functionality
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
      </script>
    </>
  );
}
