import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Progress V2',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Premium progress bar components

### Info & Metadata
- **Category**: Loaders
- **Tags**: <code>progress</code>, <code>bar</code>, <code>loading</code>, <code>premium</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-content" id="main-content">
    
    <section class="diagnostic-hero">
      <div class="hero-badge">
        <span class="pulse-dot"></span>
        <span>Distributed Compute Monitoring Stream Engaged</span>
      </div>
      <h1>Progressive <span>Telemetry Elements</span></h1>
      <p>A production-grade collection of asynchronous indicators, fluid layout loaders, and hardware-accelerated dashboard gauges engineered for massive micro-service tracking clusters.</p>
    </section>

    <section class="telemetry-grid">

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-01 // FLOW ACCENT</span>
            <h2>Chromatic Wave Track</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">Vibrant structural line tracking shifting fluidly along linear layout coordinates with saturated drop-shadow parameters.</p>
        
        <div class="interactive-sandbox-well">
          <div class="progress-container-shell">
            <div class="progress-meta-row">
              <span class="progress-label-string"><i class="fa-solid fa-bolt"></i> Cluster Memory Footprint</span>
              <span class="progress-value-string value-target-js" id="chroma-val">74%</span>
            </div>
            <div class="progress-track-base">
              <div class="progress-fill-core gradient-purple fill-target-js" style="width: 74%;"></div>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c1', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c1', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c1"><code>&lt;div class="progress-container-shell"&gt;
  &lt;div class="progress-track-base"&gt;
    &lt;div class="progress-fill-core gradient-purple" style="width: 74%;"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-02 // HARD GLOW</span>
            <h2>Neon Saturated Array</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">High-intensity photon track emission casting a localized ambient glow vector field over dense interface frames.</p>
        
        <div class="interactive-sandbox-well">
          <div class="progress-container-shell">
            <div class="progress-meta-row">
              <span class="progress-label-string"><i class="fa-solid fa-circle-nodes"></i> Active Sync Pipelines</span>
              <span class="progress-value-string value-target-js" id="neon-val">42%</span>
            </div>
            <div class="progress-track-base high-contrast-well">
              <div class="progress-fill-core neon-cyan-glow fill-target-js" style="width: 42%;"></div>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c2', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c2', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c2"><code>&lt;div class="progress-track-base high-contrast-well"&gt;
  &lt;div class="progress-fill-core neon-cyan-glow" style="width: 42%;"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-03 // ASYNC PATTERN</span>
            <h2>Indeterminate Scan Beam</h2>
          </div>
          <span class="telemetry-status-shield status-computing">Buffering</span>
        </div>
        <p class="panel-functional-desc">Continuous loop layout tracking system assets ahead of established data handshake resolution signals.</p>
        
        <div class="interactive-sandbox-well">
          <div class="progress-container-shell">
            <div class="progress-meta-row">
              <span class="progress-label-string"><i class="fa-solid fa-network-wired"></i> Resolving Gateway Tokens</span>
              <span class="progress-value-string state-string-pulsing">SCANNING</span>
            </div>
            <div class="progress-track-base overflow-hidden-shell">
              <div class="progress-fill-core indeterminate-marquee-beam"></div>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c3', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c3', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c3"><code>&lt;div class="progress-track-base overflow-hidden-shell"&gt;
  &lt;div class="progress-fill-core indeterminate-marquee-beam"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-04 // SVG GEOMETRY</span>
            <h2>Orbital Donut Vector</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">SVG path tracing displaying circular state calculations with total mathematical pixel precision alignment vectors.</p>
        
        <div class="interactive-sandbox-well flex-centered">
          <div class="orbital-svg-gauge-container">
            <svg class="circular-svg-frame" viewBox="0 0 120 120">
              <circle class="track-bg-ring" cx="60" cy="60" r="52"></circle>
              <circle class="fill-stroke-ring gauge-stroke-target-js" cx="60" cy="60" r="52" style="stroke-dashoffset: 98px;"></circle>
            </svg>
            <div class="gauge-center-text-block">
              <h3 class="gauge-percentage-string value-target-js" id="donut-val">70%</h3>
              <p class="gauge-micro-descriptor-string">GPU Weight</p>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c4', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c4', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c4"><code>&lt;svg viewBox="0 0 120 120"&gt;
  &lt;circle class="track-bg-ring" cx="60" cy="60" r="52"&gt;&lt;/circle&gt;
  &lt;circle class="fill-stroke-ring" cx="60" cy="60" r="52" style="stroke-dashoffset: 98px;"&gt;&lt;/circle&gt;
&lt;/svg&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card large-matrix-span-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-05 // GRID MONITOR</span>
            <h2>Clustered Compute Grid Monitor</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">Multi-row data visualization monitor tracking decoupled performance weights instantly down simultaneous service fields.</p>
        
        <div class="interactive-sandbox-well column-flex-stack">
          <div class="monitor-data-row">
            <div class="monitor-meta-info-strip"><span>Node Alpha Distribution</span><strong class="value-target-js" id="row-val-1">82%</strong></div>
            <div class="monitor-progress-bar-container"><div class="monitor-fill-inner bg-pink fill-target-js" style="width: 82%;"></div></div>
          </div>

          <div class="monitor-data-row">
            <div class="monitor-meta-info-strip"><span>Node Beta Trace Pipeline</span><strong class="value-target-js" id="row-val-2">55%</strong></div>
            <div class="monitor-progress-bar-container"><div class="monitor-fill-inner bg-blue fill-target-js" style="width: 55%;"></div></div>
          </div>

          <div class="monitor-data-row">
            <div class="monitor-meta-info-strip"><span>Node Gamma Cryptographic Shell</span><strong class="value-target-js" id="row-val-3">91%</strong></div>
            <div class="monitor-progress-bar-container"><div class="monitor-fill-inner bg-cyan fill-target-js" style="width: 91%;"></div></div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c5', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c5', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c5"><code>&lt;div class="monitor-data-row"&gt;
  &lt;div class="monitor-meta-info-strip"&gt;&lt;span&gt;Node Alpha&lt;/span&gt;&lt;/div&gt;
  &lt;div class="monitor-progress-bar-container"&gt;&lt;div class="monitor-fill-inner bg-pink" style="width: 82%;"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card large-matrix-span-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-06 // LINEAR TRAIL</span>
            <h2>Integrated Flow Sequential Path Indicators</h2>
          </div>
          <span class="telemetry-status-shield status-computing">Verification Phase</span>
        </div>
        <p class="panel-functional-desc">Interlocking verification trackers combining structural node states with linear progress fills cleanly.</p>
        
        <div class="interactive-sandbox-well flex-centered">
          <nav class="stepper-progress-navigation-matrix">
            <div class="stepper-progress-fill-line-track-backdrop">
              <div class="stepper-progress-fill-line-core" style="width: 50%;"></div>
            </div>
            
            <div class="stepper-node-wrapper state-validated">
              <div class="stepper-node-circle">01</div>
              <span class="stepper-node-label-string">Parse Manifest</span>
            </div>

            <div class="stepper-node-wrapper state-processing">
              <div class="stepper-node-circle">02</div>
              <span class="stepper-node-label-string">Compile Handshake</span>
            </div>

            <div class="stepper-node-wrapper state-future">
              <div class="stepper-node-circle">03</div>
              <span class="stepper-node-label-string">Deploy Cluster</span>
            </div>
          </nav>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c6', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c6', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c6"><code>&lt;nav class="stepper-progress-navigation-matrix"&gt;
  &lt;div class="stepper-node-wrapper state-validated"&gt;
    &lt;div class="stepper-node-circle"&gt;01&lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
      </div>

    </section>

  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/progress-premium.css\`

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
    title: 'Progress V2',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/progress-premium.css"],
    content: `<main class="main-content" id="main-content">
    
    <section class="diagnostic-hero">
      <div class="hero-badge">
        <span class="pulse-dot"></span>
        <span>Distributed Compute Monitoring Stream Engaged</span>
      </div>
      <h1>Progressive <span>Telemetry Elements</span></h1>
      <p>A production-grade collection of asynchronous indicators, fluid layout loaders, and hardware-accelerated dashboard gauges engineered for massive micro-service tracking clusters.</p>
    </section>

    <section class="telemetry-grid">

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-01 // FLOW ACCENT</span>
            <h2>Chromatic Wave Track</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">Vibrant structural line tracking shifting fluidly along linear layout coordinates with saturated drop-shadow parameters.</p>
        
        <div class="interactive-sandbox-well">
          <div class="progress-container-shell">
            <div class="progress-meta-row">
              <span class="progress-label-string"><i class="fa-solid fa-bolt"></i> Cluster Memory Footprint</span>
              <span class="progress-value-string value-target-js" id="chroma-val">74%</span>
            </div>
            <div class="progress-track-base">
              <div class="progress-fill-core gradient-purple fill-target-js" style="width: 74%;"></div>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c1', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c1', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c1"><code>&lt;div class="progress-container-shell"&gt;
  &lt;div class="progress-track-base"&gt;
    &lt;div class="progress-fill-core gradient-purple" style="width: 74%;"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-02 // HARD GLOW</span>
            <h2>Neon Saturated Array</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">High-intensity photon track emission casting a localized ambient glow vector field over dense interface frames.</p>
        
        <div class="interactive-sandbox-well">
          <div class="progress-container-shell">
            <div class="progress-meta-row">
              <span class="progress-label-string"><i class="fa-solid fa-circle-nodes"></i> Active Sync Pipelines</span>
              <span class="progress-value-string value-target-js" id="neon-val">42%</span>
            </div>
            <div class="progress-track-base high-contrast-well">
              <div class="progress-fill-core neon-cyan-glow fill-target-js" style="width: 42%;"></div>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c2', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c2', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c2"><code>&lt;div class="progress-track-base high-contrast-well"&gt;
  &lt;div class="progress-fill-core neon-cyan-glow" style="width: 42%;"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-03 // ASYNC PATTERN</span>
            <h2>Indeterminate Scan Beam</h2>
          </div>
          <span class="telemetry-status-shield status-computing">Buffering</span>
        </div>
        <p class="panel-functional-desc">Continuous loop layout tracking system assets ahead of established data handshake resolution signals.</p>
        
        <div class="interactive-sandbox-well">
          <div class="progress-container-shell">
            <div class="progress-meta-row">
              <span class="progress-label-string"><i class="fa-solid fa-network-wired"></i> Resolving Gateway Tokens</span>
              <span class="progress-value-string state-string-pulsing">SCANNING</span>
            </div>
            <div class="progress-track-base overflow-hidden-shell">
              <div class="progress-fill-core indeterminate-marquee-beam"></div>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c3', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c3', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c3"><code>&lt;div class="progress-track-base overflow-hidden-shell"&gt;
  &lt;div class="progress-fill-core indeterminate-marquee-beam"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-04 // SVG GEOMETRY</span>
            <h2>Orbital Donut Vector</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">SVG path tracing displaying circular state calculations with total mathematical pixel precision alignment vectors.</p>
        
        <div class="interactive-sandbox-well flex-centered">
          <div class="orbital-svg-gauge-container">
            <svg class="circular-svg-frame" viewBox="0 0 120 120">
              <circle class="track-bg-ring" cx="60" cy="60" r="52"></circle>
              <circle class="fill-stroke-ring gauge-stroke-target-js" cx="60" cy="60" r="52" style="stroke-dashoffset: 98px;"></circle>
            </svg>
            <div class="gauge-center-text-block">
              <h3 class="gauge-percentage-string value-target-js" id="donut-val">70%</h3>
              <p class="gauge-micro-descriptor-string">GPU Weight</p>
            </div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c4', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c4', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c4"><code>&lt;svg viewBox="0 0 120 120"&gt;
  &lt;circle class="track-bg-ring" cx="60" cy="60" r="52"&gt;&lt;/circle&gt;
  &lt;circle class="fill-stroke-ring" cx="60" cy="60" r="52" style="stroke-dashoffset: 98px;"&gt;&lt;/circle&gt;
&lt;/svg&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card large-matrix-span-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-05 // GRID MONITOR</span>
            <h2>Clustered Compute Grid Monitor</h2>
          </div>
          <span class="telemetry-status-shield status-active">Nominal Stream</span>
        </div>
        <p class="panel-functional-desc">Multi-row data visualization monitor tracking decoupled performance weights instantly down simultaneous service fields.</p>
        
        <div class="interactive-sandbox-well column-flex-stack">
          <div class="monitor-data-row">
            <div class="monitor-meta-info-strip"><span>Node Alpha Distribution</span><strong class="value-target-js" id="row-val-1">82%</strong></div>
            <div class="monitor-progress-bar-container"><div class="monitor-fill-inner bg-pink fill-target-js" style="width: 82%;"></div></div>
          </div>

          <div class="monitor-data-row">
            <div class="monitor-meta-info-strip"><span>Node Beta Trace Pipeline</span><strong class="value-target-js" id="row-val-2">55%</strong></div>
            <div class="monitor-progress-bar-container"><div class="monitor-fill-inner bg-blue fill-target-js" style="width: 55%;"></div></div>
          </div>

          <div class="monitor-data-row">
            <div class="monitor-meta-info-strip"><span>Node Gamma Cryptographic Shell</span><strong class="value-target-js" id="row-val-3">91%</strong></div>
            <div class="monitor-progress-bar-container"><div class="monitor-fill-inner bg-cyan fill-target-js" style="width: 91%;"></div></div>
          </div>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c5', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c5', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c5"><code>&lt;div class="monitor-data-row"&gt;
  &lt;div class="monitor-meta-info-strip"&gt;&lt;span&gt;Node Alpha&lt;/span&gt;&lt;/div&gt;
  &lt;div class="monitor-progress-bar-container"&gt;&lt;div class="monitor-fill-inner bg-pink" style="width: 82%;"&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <div class="glass-diagnostic-card large-matrix-span-card">
        <div class="card-header-telemetry">
          <div class="telemetry-title-group">
            <span class="telemetry-micro-tag">VARIANT PR-06 // LINEAR TRAIL</span>
            <h2>Integrated Flow Sequential Path Indicators</h2>
          </div>
          <span class="telemetry-status-shield status-computing">Verification Phase</span>
        </div>
        <p class="panel-functional-desc">Interlocking verification trackers combining structural node states with linear progress fills cleanly.</p>
        
        <div class="interactive-sandbox-well flex-centered">
          <nav class="stepper-progress-navigation-matrix">
            <div class="stepper-progress-fill-line-track-backdrop">
              <div class="stepper-progress-fill-line-core" style="width: 50%;"></div>
            </div>
            
            <div class="stepper-node-wrapper state-validated">
              <div class="stepper-node-circle">01</div>
              <span class="stepper-node-label-string">Parse Manifest</span>
            </div>

            <div class="stepper-node-wrapper state-processing">
              <div class="stepper-node-circle">02</div>
              <span class="stepper-node-label-string">Compile Handshake</span>
            </div>

            <div class="stepper-node-wrapper state-future">
              <div class="stepper-node-circle">03</div>
              <span class="stepper-node-label-string">Deploy Cluster</span>
            </div>
          </nav>
        </div>

        <div class="actions-strip">
          <button type="button" class="btn btn-secondary" onclick="toggleCodeBlock('c6', this)"><i class="fa-solid fa-code"></i> Inspect Sheet</button>
          <button type="button" class="btn btn-primary" onclick="copyCodePayload('c6', this)"><i class="fa-solid fa-copy"></i> Harvest Token</button>
        </div>
        <pre class="code-block" id="c6"><code>&lt;nav class="stepper-progress-navigation-matrix"&gt;
  &lt;div class="stepper-node-wrapper state-validated"&gt;
    &lt;div class="stepper-node-circle"&gt;01&lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
      </div>

    </section>

  </main>`
  })
};
