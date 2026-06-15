import React from 'react';

export default function documentation(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Hero */}
        <div className="gl-hero">
          <div className="gl-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Guidelines</span>
            </div>
            <h1 className="page-title">UIverse Guidelines</h1>
            <p className="page-desc">Everything you need to know — how to use UIverse components in your project, how to contribute your own, and how the design system is structured.</p>
            <div className="gl-toc-pills">
              <a href="#getting-started" className="gl-pill"><i className="fa-solid fa-rocket"></i> Getting Started</a>
              <a href="#design-system"   className="gl-pill"><i className="fa-solid fa-palette"></i> Design System</a>
              <a href="#usage"           className="gl-pill"><i className="fa-solid fa-code"></i> How to Use</a>
              <a href="#contribute"      className="gl-pill"><i className="fa-brands fa-github"></i> Contribute</a>
              <a href="#naming"          className="gl-pill"><i className="fa-solid fa-tag"></i> Naming Rules</a>
              <a href="#accessibility"   className="gl-pill"><i className="fa-solid fa-universal-access"></i> Accessibility</a>
            </div>
          </div>
          <div className="gl-hero-right">
            <div className="gl-stats-grid">
              <div className="gl-stat">
                <span className="gl-stat-num">120+</span>
                <span className="gl-stat-label">Components</span>
              </div>
              <div className="gl-stat">
                <span className="gl-stat-num">10</span>
                <span className="gl-stat-label">Categories</span>
              </div>
              <div className="gl-stat">
                <span className="gl-stat-num">100%</span>
                <span className="gl-stat-label">Free & Open</span>
              </div>
              <div className="gl-stat">
                <span className="gl-stat-num">0</span>
                <span className="gl-stat-label">Dependencies</span>
              </div>
            </div>
          </div>
        </div>
      
        {/* ========================================================
             LAYOUT: TOC left + Content right
             ======================================================== */}
        <div className="gl-layout">
      
          {/* Sticky TOC */}
          <aside className="gl-toc">
            <p className="gl-toc-heading"><i className="fa-solid fa-list"></i> On this page</p>
            <ul className="gl-toc-list">
              <li><a href="#getting-started" className="gl-toc-link active"><span className="gl-toc-num">01</span> Getting Started</a></li>
              <li><a href="#design-system"   className="gl-toc-link"><span className="gl-toc-num">02</span> Design System</a></li>
              <li><a href="#usage"           className="gl-toc-link"><span className="gl-toc-num">03</span> How to Use</a></li>
              <li><a href="#contribute"      className="gl-toc-link"><span className="gl-toc-num">04</span> Contributing</a></li>
              <li><a href="#naming"          className="gl-toc-link"><span className="gl-toc-num">05</span> Naming Rules</a></li>
              <li><a href="#accessibility"   className="gl-toc-link"><span className="gl-toc-num">06</span> Accessibility</a></li>
              <li><a href="#faq"             className="gl-toc-link"><span className="gl-toc-num">07</span> FAQ</a></li>
            </ul>
          </aside>
      
          {/* Content */}
          <div className="gl-content">
      
            {/* ===== 01 GETTING STARTED ===== */}
            <section id="getting-started" className="gl-section">
              <div className="gl-section-icon"><i className="fa-solid fa-rocket"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">01</span>
                <h2>Getting Started</h2>
                <p>UIverse is a free, open-source library of copy-paste UI components built with pure HTML, CSS, and JavaScript. No npm, no build tools, no framework — just clean code you can drop into any project.</p>
      
                <div className="gl-steps">
                  <div className="gl-step">
                    <div className="gl-step-num">1</div>
                    <div className="gl-step-body">
                      <h4>Browse components</h4>
                      <p>Find the component you need from any category page — Buttons, Cards, Alerts, Tabs, etc.</p>
                    </div>
                  </div>
                  <div className="gl-step">
                    <div className="gl-step-num">2</div>
                    <div className="gl-step-body">
                      <h4>Click "View Code"</h4>
                      <p>Each card reveals a code snippet with the HTML and CSS needed for that exact component.</p>
                    </div>
                  </div>
                  <div className="gl-step">
                    <div className="gl-step-num">3</div>
                    <div className="gl-step-body">
                      <h4>Click "Copy"</h4>
                      <p>Hit copy and paste directly into your project. Customise the classes and colours to match your brand.</p>
                    </div>
                  </div>
                  <div className="gl-step">
                    <div className="gl-step-num">4</div>
                    <div className="gl-step-body">
                      <h4>That's it!</h4>
                      <p>No installation, no configuration. UIverse components are intentionally dependency-free.</p>
                    </div>
                  </div>
                </div>
      
                <div className="gl-callout gl-callout-info">
                  <i className="fa-solid fa-circle-info"></i>
                  <p>Some interactive components (tabs, toggles, alerts) need a few lines of JavaScript — it's always included in the code snippet alongside the HTML and CSS.</p>
                </div>
              </div>
            </section>
      
            {/* ===== 02 DESIGN SYSTEM ===== */}
            <section id="design-system" className="gl-section">
              <div className="gl-section-icon"><i className="fa-solid fa-palette"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">02</span>
                <h2>Design System</h2>
                <p>UIverse uses a small set of design tokens — colours, typography, spacing, and radius values — that run through every component. If you copy a component into a project that already uses these tokens, it will look consistent immediately.</p>
      
                {/* Colours */}
                <h3 className="gl-sub">🎨 Brand Colours</h3>
                <div className="gl-colour-grid">
                  <div className="gl-colour-swatch" style="background:#eb6835;">
                    <span>Accent</span><small>#eb6835</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#6c5ce7;">
                    <span>Secondary</span><small>#6c5ce7</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#00b894;">
                    <span>Success</span><small>#00b894</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#d63031;">
                    <span>Danger</span><small>#d63031</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#fdcb6e;color:#333;">
                    <span>Warning</span><small>#fdcb6e</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#0984e3;">
                    <span>Info</span><small>#0984e3</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#f5f4f2;color:#333;border:1px solid #e0e0e0;">
                    <span>Light BG</span><small>#f5f4f2</small>
                  </div>
                  <div className="gl-colour-swatch" style="background:#0f0f12;">
                    <span>Dark BG</span><small>#0f0f12</small>
                  </div>
                </div>
      
                {/* Typography */}
                <h3 className="gl-sub">✍️ Typography</h3>
                <div className="gl-type-table">
                  <div className="gl-type-row gl-type-header">
                    <span>Role</span><span>Font</span><span>Weight</span><span>Usage</span>
                  </div>
                  <div className="gl-type-row">
                    <span><strong>Heading</strong></span>
                    <span className="gl-mono">Syne</span>
                    <span>700 / 800</span>
                    <span>Page titles, card labels, hero text</span>
                  </div>
                  <div className="gl-type-row">
                    <span><strong>Body</strong></span>
                    <span className="gl-mono">DM Sans</span>
                    <span>400 / 500</span>
                    <span>Paragraphs, descriptions, labels</span>
                  </div>
                  <div className="gl-type-row">
                    <span><strong>Code</strong></span>
                    <span className="gl-mono">Fira Code / Courier New</span>
                    <span>400</span>
                    <span>Code blocks, inline code, kbd</span>
                  </div>
                </div>
      
                {/* Spacing & Radius */}
                <h3 className="gl-sub">📐 Spacing & Border Radius</h3>
                <div className="gl-token-grid">
                  <div className="gl-token-card">
                    <div className="gl-token-preview" style="border-radius:8px;"></div>
                    <code>--radius-sm</code>
                    <span>8px — inputs, tags, code</span>
                  </div>
                  <div className="gl-token-card">
                    <div className="gl-token-preview" style="border-radius:14px;"></div>
                    <code>--radius-md</code>
                    <span>14px — cards, dropdowns</span>
                  </div>
                  <div className="gl-token-card">
                    <div className="gl-token-preview" style="border-radius:20px;"></div>
                    <code>--radius-lg</code>
                    <span>20px — hero sections, modals</span>
                  </div>
                  <div className="gl-token-card">
                    <div className="gl-token-preview" style="border-radius:999px;"></div>
                    <code>999px</code>
                    <span>Pills, badges, toggles</span>
                  </div>
                </div>
      
                <div className="gl-callout gl-callout-tip">
                  <i className="fa-solid fa-lightbulb"></i>
                  <p>Add the UIverse CSS variables to your project's <code className="gl-inline-code">:root</code> and components will automatically adopt your theming when you override them.</p>
                </div>
      
                {/* CSS Variables snippet */}
                <h3 className="gl-sub">⚙️ CSS Custom Properties</h3>
                <pre className="gl-code-block"><code>:root {
        /* Brand */
        --accent:       #eb6835;
        --accent-2:     #6c5ce7;
        --accent-glow:  rgba(235, 104, 53, 0.18);
      
        /* Backgrounds */
        --body-bg:      #f5f4f2;
        --card-bg:      #ffffff;
        --card-border:  #ebebeb;
      
        /* Text */
        --text-primary:   #111111;
        --text-secondary: #666666;
      
        /* Radius */
        --radius-sm:  8px;
        --radius-md:  14px;
        --radius-lg:  20px;
      
        /* Fonts */
        --font-heading: 'Syne', sans-serif;
        --font-body:    'DM Sans', sans-serif;
      
        /* Transitions */
        --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Dark mode overrides */
      body.dark-mode {
        --body-bg:      #0f0f12;
        --card-bg:      #1a1a1e;
        --card-border:  #2a2a30;
        --text-primary:   #f0f0f0;
        --text-secondary: #999999;
      }</code></pre>
              </div>
            </section>
      
            {/* ===== 03 HOW TO USE ===== */}
            <section id="usage" className="gl-section">
              <div className="gl-section-icon"><i className="fa-solid fa-code"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">03</span>
                <h2>How to Use Components</h2>
                <p>Every UIverse component is self-contained. The code snippet shown in "View Code" is everything you need — HTML structure, CSS styles, and (where needed) JavaScript.</p>
      
                <h3 className="gl-sub">📋 Recommended File Structure</h3>
                <pre className="gl-code-block"><code>your-project/
      ├── index.html
      ├── style.css          ← Your global styles
      ├── components/
      │   ├── buttons.css    ← Paste button component styles here
      │   ├── cards.css
      │   └── alerts.css
      └── js/
          └── main.js        ← Paste any interactive JS here</code></pre>
      
                <h3 className="gl-sub">🔗 Linking Fonts & Icons</h3>
                <p>UIverse uses Google Fonts and Font Awesome. Add these to your <code className="gl-inline-code">&lt;head&gt;</code>:</p>
                <pre className="gl-code-block"><code>&lt;!-- Fonts --&gt;
      &lt;link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet"&gt;
      
      &lt;!-- Icons --&gt;
      &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"&gt;</code></pre>
      
                <h3 className="gl-sub">🎨 Customising a Component</h3>
                <p>All UIverse components use CSS custom properties. Override the variables in your own stylesheet to change the look globally:</p>
                <pre className="gl-code-block"><code>/* Override UIverse accent colour to your brand blue */
      :root {
        --accent: #3b82f6;
      }
      
      /* Or override a single component directly */
      .my-card .gradient-btn {
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      }</code></pre>
      
                <h3 className="gl-sub">💡 Dark Mode</h3>
                <p>UIverse dark mode is toggled by adding <code className="gl-inline-code">dark-mode</code> to the <code className="gl-inline-code">&lt;body&gt;</code> element. Persist the preference using localStorage:</p>
                <pre className="gl-code-block"><code>const btn = document.getElementById('themeToggle');
      
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
      
      // On page load — restore saved preference
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
      }</code></pre>
      
                <div className="gl-callout gl-callout-warning">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <p>UIverse is not a CSS framework. Do not import all styles at once — copy only the component styles you actually use to keep your CSS lean.</p>
                </div>
              </div>
            </section>
      
            {/* ===== 04 CONTRIBUTING ===== */}
            <section id="contribute" className="gl-section">
              <div className="gl-section-icon accent-icon"><i className="fa-brands fa-github"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">04</span>
                <h2>Contributing a Component</h2>
                <p>UIverse is community-driven. If you've built a cool component, we'd love to include it. Here's the step-by-step process:</p>
      
                <div className="gl-steps">
                  <div className="gl-step">
                    <div className="gl-step-num gl-step-github"><i className="fa-brands fa-github"></i></div>
                    <div className="gl-step-body">
                      <h4>Fork the repository</h4>
                      <p>Go to <a className="gl-link" href="https://github.com/chinmay1126/UI-Verse" target="_blank">github.com/chinmay1126/UI-Verse</a> and click "Fork" to create your own copy.</p>
                    </div>
                  </div>
                  <div className="gl-step">
                    <div className="gl-step-num">2</div>
                    <div className="gl-step-body">
                      <h4>Create a branch</h4>
                      <p>Name your branch descriptively: <code className="gl-inline-code">add-modal-component</code> or <code className="gl-inline-code">fix-button-hover</code>.</p>
                    </div>
                  </div>
                  <div className="gl-step">
                    <div className="gl-step-num">3</div>
                    <div className="gl-step-body">
                      <h4>Build your component</h4>
                      <p>Follow the component structure guidelines below. Keep it self-contained — HTML, CSS, and minimal JS in one file.</p>
                    </div>
                  </div>
                  <div className="gl-step">
                    <div className="gl-step-num">4</div>
                    <div className="gl-step-body">
                      <h4>Open a Pull Request</h4>
                      <p>Submit your PR with a clear title and description. Include a screenshot or GIF of the component in action.</p>
                    </div>
                  </div>
                </div>
      
                <h3 className="gl-sub">📦 Component File Template</h3>
                <p>Every new component page should follow this structure:</p>
                <pre className="gl-code-block"><code>&lt;!-- Component Card structure --&gt;
      &lt;div className="component-card" data-name="descriptive keywords here" data-cat="category"&gt;
      
        &lt;!-- Card header --&gt;
        &lt;div className="card-top"&gt;
          &lt;span className="card-label"&gt;Component Name&lt;/span&gt;
          &lt;span className="card-tag tag-popular"&gt;Popular&lt;/span&gt;
        &lt;/div&gt;
      
        &lt;!-- Live preview --&gt;
        &lt;div className="card-preview"&gt;
          &lt;!-- Your component HTML goes here --&gt;
        &lt;/div&gt;
      
        &lt;!-- Short description --&gt;
        &lt;p className="card-desc"&gt;One or two sentence description.&lt;/p&gt;
      
        &lt;!-- Code toggle + copy buttons --&gt;
        &lt;div className="actions"&gt;
          &lt;button className="action-btn view-btn" onclick="toggleCode('id', this)"&gt;View Code&lt;/button&gt;
          &lt;button className="action-btn copy-btn" onclick="copyCode('id', this)"&gt;Copy&lt;/button&gt;
        &lt;/div&gt;
      
            <p>
              UIverse includes reusable components such as cards,
              buttons, forms, navbars, inputs and more. Follow this
              pattern: include stylesheet, paste markup, then attach
              optional JavaScript behavior.
            </p>
      
            <ol className="usage-steps">
              <li>Import global styles and the component stylesheet.</li>
              <li>Paste the HTML snippet for the variant you need.</li>
              <li>Adjust colors and spacing using CSS variables.</li>
              <li>Add JavaScript only if the component is interactive.</li>
            </ol>
      
          </div>
      
          <div className="usage-grid">
      
            <article className="usage-item">
              <h3>Buttons</h3>
      <pre className="code-block"><code>&lt;link rel="stylesheet" href="button.css"&gt;
      
      &lt;button className="primary-btn"&gt;Get Started&lt;/button&gt;</code></pre>
            </article>
      
            <article className="usage-item">
              <h3>Cards</h3>
      <pre className="code-block"><code>&lt;link rel="stylesheet" href="cards.css"&gt;
      
      &lt;div className="profile-card"&gt;
        &lt;div className="profile-avatar"&gt;UI&lt;/div&gt;
        &lt;h3&gt;UIverse Card&lt;/h3&gt;
      &lt;/div&gt;</code></pre>
            </article>
      
            <article className="usage-item">
              <h3>Alerts</h3>
      <pre className="code-block"><code>&lt;link rel="stylesheet" href="alerts.css"&gt;
      
      &lt;div className="alert success"&gt;
        &lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;
        Saved successfully.
      &lt;/div&gt;</code></pre>
            </article>
      
            <article className="usage-item">
              <h3>Forms</h3>
      <pre className="code-block"><code>&lt;link rel="stylesheet" href="forms.css"&gt;
      
      &lt;form className="form-card"&gt;
        &lt;label&gt;Email&lt;/label&gt;
        &lt;input type="email" required&gt;
      &lt;/form&gt;</code></pre>
            </article>
      
            <article className="usage-item">
              <h3>Inputs</h3>
      <pre className="code-block"><code>&lt;link rel="stylesheet" href="input.css"&gt;
      
      &lt;input className="preview-input"
        type="text"
        placeholder="Search components"&gt;</code></pre>
            </article>
      
            <article className="usage-item">
              <h3>Navbar</h3>
      <pre className="code-block"><code>&lt;link rel="stylesheet" href="navbar.css"&gt;
      
      &lt;nav className="mini-nav"&gt;
        &lt;span className="mini-brand"&gt;UIverse&lt;/span&gt;
      &lt;/nav&gt;</code></pre>
            </article>
      
          </div>
      
          <div className="usage-card usage-note">
      
            <p>
              Need more variants? Open component pages like
              <a href="button.html">Buttons</a>,
              <a href="cards.html">Cards</a>,
              <a href="alerts.html">Alerts</a>, and
              <a href="forms.html">Forms</a>
              to copy complete production-ready examples.
            </p>
      
                <div className="gl-callout gl-callout-tip">
                  <i className="fa-solid fa-lightbulb"></i>
                  <p>Not sure where your component fits? Open a GitHub Discussion first and the maintainers will suggest the right category or create a new one.</p>
                </div>
              </div>
            </section>
      
            {/* ===== 05 NAMING RULES ===== */}
            <section id="naming" className="gl-section">
              <div className="gl-section-icon"><i className="fa-solid fa-tag"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">05</span>
                <h2>Naming Conventions</h2>
                <p>Consistent naming keeps the codebase easy to understand and search. Follow these rules when adding new components or CSS classes.</p>
      
                <div className="gl-rule-list">
      
                  <div className="gl-rule">
                    <div className="gl-rule-icon gl-rule-do"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>CSS Classes — BEM-inspired, kebab-case</h4>
                      <div className="gl-do-dont">
                        <div className="gl-do">
                          <span className="gl-badge gl-badge-do">✓ Do</span>
                          <pre className="gl-mini-code">.profile-card { }
      .profile-card__avatar { }
      .profile-card--featured { }</pre>
                        </div>
                        <div className="gl-dont">
                          <span className="gl-badge gl-badge-dont">✗ Don't</span>
                          <pre className="gl-mini-code">.ProfileCard { }
      .profilecard_avatar { }
      .FEATURED_CARD { }</pre>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="gl-rule">
                    <div className="gl-rule-icon gl-rule-do"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>data-name — lowercase, space-separated keywords</h4>
                      <div className="gl-do-dont">
                        <div className="gl-do">
                          <span className="gl-badge gl-badge-do">✓ Do</span>
                          <pre className="gl-mini-code">data-name="gradient button colorful hover"</pre>
                        </div>
                        <div className="gl-dont">
                          <span className="gl-badge gl-badge-dont">✗ Don't</span>
                          <pre className="gl-mini-code">data-name="GradientButton"
      data-name="gradient-button"</pre>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="gl-rule">
                    <div className="gl-rule-icon gl-rule-do"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>data-cat — single lowercase word</h4>
                      <div className="gl-do-dont">
                        <div className="gl-do">
                          <span className="gl-badge gl-badge-do">✓ Do</span>
                          <pre className="gl-mini-code">data-cat="style"
      data-cat="animated"
      data-cat="dark"</pre>
                        </div>
                        <div className="gl-dont">
                          <span className="gl-badge gl-badge-dont">✗ Don't</span>
                          <pre className="gl-mini-code">data-cat="Dark Theme"
      data-cat="animated-effects"</pre>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="gl-rule">
                    <div className="gl-rule-icon gl-rule-do"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>File names — lowercase, hyphenated</h4>
                      <div className="gl-do-dont">
                        <div className="gl-do">
                          <span className="gl-badge gl-badge-do">✓ Do</span>
                          <pre className="gl-mini-code">navbar-page.css
      progress.html
      alerts.css</pre>
                        </div>
                        <div className="gl-dont">
                          <span className="gl-badge gl-badge-dont">✗ Don't</span>
                          <pre className="gl-mini-code">NavbarPage.css
      Progress Page.html
      ALERTS.CSS</pre>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="gl-rule">
                    <div className="gl-rule-icon gl-rule-do"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>Code snippet IDs — short, unique, prefixed by page</h4>
                      <div className="gl-do-dont">
                        <div className="gl-do">
                          <span className="gl-badge gl-badge-do">✓ Do</span>
                          <pre className="gl-mini-code">id="btn1"   ← buttons page
      id="al3"    ← alerts page
      id="pb7"    ← progress page</pre>
                        </div>
                        <div className="gl-dont">
                          <span className="gl-badge gl-badge-dont">✗ Don't</span>
                          <pre className="gl-mini-code">id="code"
      id="myCode1"
      id="snippet-for-gradient-button"</pre>
                        </div>
                      </div>
                    </div>
                  </div>
      
                </div>
              </div>
            </section>
      
            {/* ===== 06 ACCESSIBILITY ===== */}
            <section id="accessibility" className="gl-section">
              <div className="gl-section-icon"><i className="fa-solid fa-universal-access"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">06</span>
                <h2>Accessibility</h2>
                <p>UIverse components are built to be usable by everyone. Here are the accessibility standards every component should meet:</p>
      
                <div className="gl-checklist">
                  <div className="gl-check-item">
                    <div className="gl-check-dot"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>Semantic HTML</h4>
                      <p>Use the correct element for the job. Buttons should be <code className="gl-inline-code">&lt;button&gt;</code>, not <code className="gl-inline-code">&lt;div&gt;</code>. Links should be <code className="gl-inline-code">&lt;a&gt;</code>.</p>
                    </div>
                  </div>
                  <div className="gl-check-item">
                    <div className="gl-check-dot"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>ARIA labels where needed</h4>
                      <p>Icon-only buttons must have <code className="gl-inline-code">aria-label</code>. Toggles and tabs must use the correct <code className="gl-inline-code">role</code> and <code className="gl-inline-code">aria-*</code> attributes.</p>
                      <pre className="gl-code-block" style="margin-top:10px;"><code>&lt;!-- Good --&gt;
      &lt;button aria-label="Close menu"&gt;
        &lt;i className="fa-solid fa-xmark"&gt;&lt;/i&gt;
      &lt;/button&gt;
      
      &lt;!-- Tabs example --&gt;
      &lt;div role="tablist"&gt;
        &lt;button role="tab" aria-selected="true"&gt;HTML&lt;/button&gt;
        &lt;button role="tab" aria-selected="false"&gt;CSS&lt;/button&gt;
      &lt;/div&gt;</code></pre>
                    </div>
                  </div>
                  <div className="gl-check-item">
                    <div className="gl-check-dot"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>Keyboard navigable</h4>
                      <p>All interactive components must be reachable and operable with a keyboard alone. Never remove the default browser focus outline without replacing it.</p>
                      <pre className="gl-code-block" style="margin-top:10px;"><code>/* Good — custom focus ring */
      .btn:focus-visible {
        outline: 2px solid #eb6835;
        outline-offset: 2px;
      }
      
      /* Bad — removes focus entirely */
      * { outline: none; } ← Never do this</code></pre>
                    </div>
                  </div>
                  <div className="gl-check-item">
                    <div className="gl-check-dot"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>Colour contrast</h4>
                      <p>Text must meet WCAG AA contrast ratio of at least 4.5:1 against its background. Never convey meaning through colour alone.</p>
                    </div>
                  </div>
                  <div className="gl-check-item">
                    <div className="gl-check-dot"><i className="fa-solid fa-check"></i></div>
                    <div>
                      <h4>Reduced motion</h4>
                      <p>Respect users who prefer reduced motion. Wrap all animations in a media query:</p>
                      <pre className="gl-code-block" style="margin-top:10px;"><code>@media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* ===== 07 FAQ ===== */}
            <section id="faq" className="gl-section">
              <div className="gl-section-icon"><i className="fa-solid fa-circle-question"></i></div>
              <div className="gl-section-body">
                <span className="gl-section-num">07</span>
                <h2>Frequently Asked Questions</h2>
      
                <div className="gl-faq-list">
      
                  <div className="gl-faq-item" onclick="toggleFaq(this)">
                    <div className="gl-faq-q">
                      <span>Is UIverse completely free?</span>
                      <i className="fa-solid fa-chevron-down gl-faq-icon"></i>
                    </div>
                    <div className="gl-faq-a">
                      <p>Yes, 100%. UIverse is open-source and free to use in personal and commercial projects. No attribution required, though it's appreciated.</p>
                    </div>
                  </div>
      
                  <div className="gl-faq-item" onclick="toggleFaq(this)">
                    <div className="gl-faq-q">
                      <span>Do I need to install anything?</span>
                      <i className="fa-solid fa-chevron-down gl-faq-icon"></i>
                    </div>
                    <div className="gl-faq-a">
                      <p>No. UIverse is a copy-paste library. There's no npm package, no CLI, and no build step. Just copy the HTML and CSS into your project and go.</p>
                    </div>
                  </div>
      
                  <div className="gl-faq-item" onclick="toggleFaq(this)">
                    <div className="gl-faq-q">
                      <span>Can I use UIverse with React, Vue, or Angular?</span>
                      <i className="fa-solid fa-chevron-down gl-faq-icon"></i>
                    </div>
                    <div className="gl-faq-a">
                      <p>Absolutely. Since UIverse components are pure HTML and CSS, you can convert them to framework components yourself. Just copy the structure into a JSX/Vue template and the styles into your component's CSS file.</p>
                    </div>
                  </div>
      
                  <div className="gl-faq-item" onclick="toggleFaq(this)">
                    <div className="gl-faq-q">
                      <span>How do I report a bug?</span>
                      <i className="fa-solid fa-chevron-down gl-faq-icon"></i>
                    </div>
                    <div className="gl-faq-a">
                      <p>Open an issue on <a className="gl-link" href="https://github.com/chinmay1126/UI-Verse" target="_blank">GitHub</a>. Include the component name, a description of the bug, and a screenshot if possible. We aim to respond within 48 hours.</p>
                    </div>
                  </div>
      
                  <div className="gl-faq-item" onclick="toggleFaq(this)">
                    <div className="gl-faq-q">
                      <span>Can I request a new component?</span>
                      <i className="fa-solid fa-chevron-down gl-faq-icon"></i>
                    </div>
                    <div className="gl-faq-a">
                      <p>Yes! Open a GitHub Discussion with the tag "Component Request". Describe what you need and how it would be used. The community votes on what gets built next.</p>
                    </div>
                  </div>
      
                  <div className="gl-faq-item" onclick="toggleFaq(this)">
                    <div className="gl-faq-q">
                      <span>My component isn't appearing after I paste the code — why?</span>
                      <i className="fa-solid fa-chevron-down gl-faq-icon"></i>
                    </div>
                    <div className="gl-faq-a">
                      <p>Check three things: (1) Did you include the CSS as well as the HTML? (2) Are the Font Awesome and Google Fonts CDN links in your <code className="gl-inline-code">&lt;head&gt;</code>? (3) Are there any CSS conflicts with your existing styles? Open your browser dev tools to inspect the element.</p>
                    </div>
                  </div>
      
                </div>
      
                {/* CTA */}
                <div className="gl-cta">
                  <div className="gl-cta-inner">
                    <h3>Still have questions?</h3>
                    <p>Reach out through GitHub, Discord, or the contact page and we'll help you out.</p>
                    <div className="gl-cta-btns">
                      <a href="https://github.com/chinmay1126/UI-Verse" target="_blank" className="gl-cta-btn gl-cta-primary">
                        <i className="fab fa-github"></i> Open an Issue
                      </a>
                      <a href="contact.html" className="gl-cta-btn gl-cta-outline">
                        <i className="fa-regular fa-envelope"></i> Contact Us
                      </a>
                    </div>
                  </div>
                </div>
      
              </div>
            </section>
      
          </div>{/* /gl-content */}
        </div>{/* /gl-layout */}
      
      </main>
    </>
  );
}
