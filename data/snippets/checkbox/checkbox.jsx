import React from 'react';

export default function checkbox(){
  return (
    <>
      <html data-theme="light">
      
        <div className="main-content">
      
          {/* TOPBAR */}
          <header className="topbar">
            <div className="search-box">
              <span className="brand-icon">⬡</span>
              <span className="brand-text">UIverse</span>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search components..." />
            </div>
            <div className="topbar-actions">
              
              <button className="add-btn"><i className="fa-solid fa-plus"></i> Add Component</button>
              <button className="collection-btn">My Collection</button>
              <button className="theme-btn"><i className="fa-solid fa-moon"></i></button>
            </div>
          </header>
      
          {/* HERO */}
          <section className="hero">
            <div className="hero-left">
              <div className="breadcrumb">Home &gt; Checkboxes</div>
              <h1>Checkbox Components</h1>
              <p>
                Modern reusable checkbox UI elements with responsive layouts,
                interactive styling, and smooth check/uncheck animations using HTML, CSS, and Vanilla JavaScript.
              </p>
              <div className="hero-tags">
                <span><i className="fa-solid fa-layer-group"></i> 5 Components</span>
                <span><i className="fa-solid fa-code"></i> Pure HTML/CSS</span>
                <span><i className="fa-solid fa-mobile-screen"></i> Responsive</span>
              </div>
            </div>
            <div className="hero-preview">
              <div className="hero-checkbox-demo">
                <div className="hero-cb checked"><i className="fa-solid fa-check"></i></div>
                <div className="hero-cb"><i className="fa-solid fa-check"></i></div>
                <div className="hero-cb checked"><i className="fa-solid fa-check"></i></div>
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
                <li>
                  <a href="dropdown-components.html">
                    <i className="fa-solid fa-caret-down"></i>
                    <span>Dropdowns</span>
                  </a>
                </li>
                <li>
                  <a href="profile-components.html">
                    <i className="fa-solid fa-user"></i>
                    <span>Profiles</span>
                  </a>
                </li>
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
                <li className="active"><a href="checkbox.html"><i className="fa-solid fa-square-check"></i><span>Checkboxes</span></a>
                </li>
                <li><a href="notifications-premium.html"><i className="fa-solid fa-bell"></i><span>Notifications V2</span></a>
                </li>
                <li><a href="step-indicators.html"><i className="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
                <li><a href="progress-premium.html"><i className="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
                <li><a href="ratings-premium.html"><i className="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
                <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
                <li><a href="about.html"><i className="fa-solid fa-circle-info"></i><span>About</span></a></li>
                <li><a href="documentation.html"><i className="fa-solid fa-book"></i><span>Documentation</span></a></li>
                <li><a href="faq.html"><i className="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
                <li><a href="contact.html"><i className="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
              </ul>
            </nav>
            <div className="sidebar-footer">
              <a href="#" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" title="Twitter"><i className="fab fa-x-twitter"></i></a>
            </div>
          </aside>
      
          {/* FILTERS */}
          <div className="filters">
            <button className="active">All</button>
            <button>Minimal</button>
            <button>Gradient</button>
            <button>Glass</button>
            <button>Card</button>
          </div>
      
          {/* COMPONENT GRID */}
          <section className="checkbox-grid">
      
            {/* ============ 1: MINIMAL CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <div className="minimal-cb-group">
                  <label className="minimal-cb">
                    <input type="checkbox" checked />
                    <span className="minimal-box"><i className="fa-solid fa-check"></i></span>
                    <span className="minimal-text">Enable notifications</span>
                  </label>
                  <label className="minimal-cb">
                    <input type="checkbox" />
                    <span className="minimal-box"><i className="fa-solid fa-check"></i></span>
                    <span className="minimal-text">Auto-save drafts</span>
                  </label>
                  <label className="minimal-cb">
                    <input type="checkbox" />
                    <span className="minimal-box"><i className="fa-solid fa-check"></i></span>
                    <span className="minimal-text">Dark mode by default</span>
                  </label>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Minimal Checkbox</h3>
                  <span>Essential</span>
                </div>
                <p>Clean checkbox with smooth scale-in checkmark animation and subtle border transitions.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb1')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb1')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb1" className="code-block" style="display:none;"><code>&lt;label className="minimal-cb"&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;span className="minimal-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span&gt;Enable notifications&lt;/span&gt;
      &lt;/label&gt;
      
      .minimal-cb input:checked ~ .minimal-box {
        background: #6366f1;
        border-color: #6366f1;
      }
      .minimal-cb input:checked ~ .minimal-box i {
        transform: scale(1);
        opacity: 1;
      }</code></pre>
            </div>
      
            {/* ============ 2: GRADIENT CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <div className="gradient-cb-group">
                  <label className="gradient-cb">
                    <input type="checkbox" checked />
                    <span className="gradient-box"><i className="fa-solid fa-check"></i></span>
                    <span className="gradient-text">I agree to Terms of Service</span>
                  </label>
                  <label className="gradient-cb">
                    <input type="checkbox" />
                    <span className="gradient-box"><i className="fa-solid fa-check"></i></span>
                    <span className="gradient-text">Subscribe to newsletter</span>
                  </label>
                  <label className="gradient-cb">
                    <input type="checkbox" checked />
                    <span className="gradient-box"><i className="fa-solid fa-check"></i></span>
                    <span className="gradient-text">Remember my preferences</span>
                  </label>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Gradient Checkbox</h3>
                  <span>Trending</span>
                </div>
                <p>Vibrant gradient-filled checkbox with animated border glow on check and smooth colour transitions.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb2')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb2')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb2" className="code-block" style="display:none;"><code>&lt;label className="gradient-cb"&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;span className="gradient-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span&gt;I agree to Terms&lt;/span&gt;
      &lt;/label&gt;
      
      .gradient-cb input:checked ~ .gradient-box {
        background: linear-gradient(135deg, #7c3aed, #06b6d4);
        border-color: transparent;
        box-shadow: 0 0 12px rgba(124,58,237,0.35);
      }</code></pre>
            </div>
      
            {/* ============ 3: GLASSMORPHISM CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview dark-preview">
                <div className="glass-cb-group">
                  <label className="glass-cb">
                    <input type="checkbox" checked />
                    <span className="glass-box"><i className="fa-solid fa-check"></i></span>
                    <span className="glass-text"><i className="fa-solid fa-lock"></i> Two-Factor Auth</span>
                  </label>
                  <label className="glass-cb">
                    <input type="checkbox" />
                    <span className="glass-box"><i className="fa-solid fa-check"></i></span>
                    <span className="glass-text"><i className="fa-solid fa-eye-slash"></i> Incognito Mode</span>
                  </label>
                  <label className="glass-cb">
                    <input type="checkbox" />
                    <span className="glass-box"><i className="fa-solid fa-fingerprint"></i></span>
                    <span className="glass-text"><i className="fa-solid fa-fingerprint"></i> Biometric Login</span>
                  </label>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Glassmorphism Checkbox</h3>
                  <span>Premium</span>
                </div>
                <p>Frosted translucent checkbox cards with backdrop blur, glowing active states, and icon labels.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb3')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb3')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb3" className="code-block" style="display:none;"><code>&lt;label className="glass-cb"&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;span className="glass-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="glass-text"&gt;Two-Factor Auth&lt;/span&gt;
      &lt;/label&gt;
      
      .glass-cb input:checked ~ .glass-box {
        background: rgba(99,102,241,0.35);
        border-color: rgba(99,102,241,0.6);
        box-shadow: 0 0 14px rgba(99,102,241,0.3);
      }</code></pre>
            </div>
      
            {/* ============ 4: ANIMATED CHECKBOX TOGGLE ============ */}
            <div className="component-card">
              <div className="card-preview">
                <div className="anim-toggle-group">
                  <label className="anim-toggle">
                    <input type="checkbox" checked />
                    <span className="anim-track">
                      <span className="anim-thumb"></span>
                    </span>
                    <span className="anim-label">Airplane Mode</span>
                  </label>
                  <label className="anim-toggle">
                    <input type="checkbox" />
                    <span className="anim-track">
                      <span className="anim-thumb"></span>
                    </span>
                    <span className="anim-label">Wi-Fi Sync</span>
                  </label>
                  <label className="anim-toggle">
                    <input type="checkbox" checked />
                    <span className="anim-track">
                      <span className="anim-thumb"></span>
                    </span>
                    <span className="anim-label">Bluetooth</span>
                  </label>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Animated Checkbox Toggle</h3>
                  <span>Popular</span>
                </div>
                <p>iOS-inspired toggle switch using a checkbox with a sliding thumb and smooth colour fill transition.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb4')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb4')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb4" className="code-block" style="display:none;"><code>&lt;label className="anim-toggle"&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;span className="anim-track"&gt;
          &lt;span className="anim-thumb"&gt;&lt;/span&gt;
        &lt;/span&gt;
        &lt;span&gt;Airplane Mode&lt;/span&gt;
      &lt;/label&gt;
      
      .anim-toggle input:checked ~ .anim-track {
        background: #6366f1;
      }
      .anim-toggle input:checked ~ .anim-track .anim-thumb {
        transform: translateX(20px);
      }</code></pre>
            </div>
      
            {/* ============ 5: TASK LIST CHECKBOX CARD ============ */}
            <div className="component-card">
              <div className="card-preview dark-preview">
                <div className="task-card">
                  <div className="task-header">
                    <h4>Today's Tasks</h4>
                    <span className="task-count">2/4</span>
                  </div>
                  <label className="task-item">
                    <input type="checkbox" checked />
                    <span className="task-box"><i className="fa-solid fa-check"></i></span>
                    <span className="task-text done">Design landing page</span>
                  </label>
                  <label className="task-item">
                    <input type="checkbox" checked />
                    <span className="task-box"><i className="fa-solid fa-check"></i></span>
                    <span className="task-text done">Review pull requests</span>
                  </label>
                  <label className="task-item">
                    <input type="checkbox" />
                    <span className="task-box"><i className="fa-solid fa-check"></i></span>
                    <span className="task-text">Write unit tests</span>
                  </label>
                  <label className="task-item">
                    <input type="checkbox" />
                    <span className="task-box"><i className="fa-solid fa-check"></i></span>
                    <span className="task-text">Deploy to staging</span>
                  </label>
                </div>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Task List Checkbox Card</h3>
                  <span>New</span>
                </div>
                <p>Complete task list card with strikethrough animation, progress counter, and interactive checkbox states.
                </p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb5')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb5')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb5" className="code-block" style="display:none;"><code>&lt;div className="task-card"&gt;
        &lt;div className="task-header"&gt;
          &lt;h4&gt;Today's Tasks&lt;/h4&gt;
          &lt;span className="task-count"&gt;2/4&lt;/span&gt;
        &lt;/div&gt;
        &lt;label className="task-item"&gt;
          &lt;input type="checkbox" checked&gt;
          &lt;span className="task-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
          &lt;span className="task-text done"&gt;Design landing page&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      
      .task-item input:checked ~ .task-text {
        text-decoration: line-through;
        color: #475569;
      }</code></pre>
            </div>
            <div className="component-card">
              <div className="card-preview dark-preview">
                <label className="cyber-cb">
                  <input type="checkbox" />
                  <span className="cyber-box">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                  <span className="cyber-text">OVERRIDE</span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Cyberpunk Glitch Checkbox</h3>
                  <span>Premium</span>
                </div>
                <p>A futuristic glitchy checkbox with a neon crossed-out checkmark and jagged styling.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb6')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb6')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb6" className="code-block" style="display:none;"><code>&lt;label className="cyber-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="cyber-box"&gt;&lt;i className="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="cyber-text"&gt;OVERRIDE&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            <div className="component-card">
              <div className="card-preview" style="background:#e0e5ec;">
                <label className="neumorphic-cb">
                  <input type="checkbox" />
                  <span className="neu-box"><i className="fa-solid fa-power-off"></i></span>
                  <span className="neu-text">Power Up</span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Neumorphic Checkbox</h3>
                  <span>Popular</span>
                </div>
                <p>Soft UI neumorphic checkbox with extruded shadows and an inset pressed state.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb7')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb7')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb7" className="code-block" style="display:none;"><code>&lt;label className="neumorphic-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="neu-box"&gt;&lt;i className="fa-solid fa-power-off"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="neu-text"&gt;Power Up&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            <div className="component-card">
              <div className="card-preview">
                <label className="heart-cb">
                  <input type="checkbox" />
                  <span className="heart-icon"><i className="fa-solid fa-heart"></i></span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Heart Favorite Checkbox</h3>
                  <span>Essential</span>
                </div>
                <p>A simple animated heart for "Like" or "Favorite" interactions using standard checkbox inputs.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb8')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb8')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb8" className="code-block" style="display:none;"><code>&lt;label className="heart-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="heart-icon"&gt;&lt;i className="fa-solid fa-heart"&gt;&lt;/i&gt;&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            <div className="component-card">
              <div className="card-preview dark-preview">
                <label className="plan-cb">
                  <input type="checkbox" />
                  <div className="plan-card">
                    <div className="plan-header">
                      <span className="plan-title">Pro Tier</span>
                      <span className="plan-box"><i className="fa-solid fa-check"></i></span>
                    </div>
                    <div className="plan-price">$19<span>/mo</span></div>
                    <p>Access to all premium features and components.</p>
                  </div>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Subscription Plan Checkbox</h3>
                  <span>Trending</span>
                </div>
                <p>A selectable plan card built purely with a hidden checkbox, ideal for pricing tables.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb9')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb9')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb9" className="code-block" style="display:none;"><code>&lt;label className="plan-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;div className="plan-card"&gt;
          &lt;div className="plan-header"&gt;
            &lt;span className="plan-title"&gt;Pro Tier&lt;/span&gt;
            &lt;span className="plan-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="plan-price"&gt;$19&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
          &lt;p&gt;Premium features&lt;/p&gt;
        &lt;/div&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            <div className="component-card">
              <div className="card-preview">
                <label className="terms-cb">
                  <input type="checkbox" />
                  <span className="terms-box"><i className="fa-solid fa-check"></i></span>
                  <span className="terms-text">I agree to the <a href="#" onclick="event.preventDefault();">Terms</a> and <a
                      href="#" onclick="event.preventDefault();">Privacy Policy</a></span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Terms &amp; Conditions Checkbox</h3>
                  <span>Essential</span>
                </div>
                <p>A standard legal agreement checkbox with embedded links and neat alignment.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb10')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb10')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb10" className="code-block" style="display:none;"><code>&lt;label className="terms-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="terms-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="terms-text"&gt;I agree to the &lt;a href="#"&gt;Terms&lt;/a&gt;&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            {/* ============ 11: JELLY BLOB CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <label className="jelly-cb">
                  <input type="checkbox" checked />
                  <span className="jelly-box"><i className="fa-solid fa-check"></i></span>
                  <span className="jelly-text">Interactive Jelly Checkbox</span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Jelly Blob Checkbox</h3>
                  <span>Trending</span>
                </div>
                <p>A fun and elastic spring-like jelly checkbox that scales and bounces when clicked.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb11')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb11')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb11" className="code-block" style="display:none;"><code>&lt;label className="jelly-cb"&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;span className="jelly-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="jelly-text"&gt;Interactive Jelly Checkbox&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            {/* ============ 12: NEON PULSING CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <label className="neon-cb">
                  <input type="checkbox" />
                  <span className="neon-box"><i className="fa-solid fa-check"></i></span>
                  <span className="neon-text">Neon Cyberpunk Glow</span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Neon Pulsing Checkbox</h3>
                  <span>Premium</span>
                </div>
                <p>A vibrant cyan checkbox with an intense glowing state and active outer pulse ripple animation.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb12')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb12')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb12" className="code-block" style="display:none;"><code>&lt;label className="neon-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="neon-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="neon-text"&gt;Neon Cyberpunk Glow&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            {/* ============ 13: RETRO ARCADE CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <label className="arcade-cb">
                  <input type="checkbox" checked />
                  <span className="arcade-box"></span>
                  <span className="arcade-text">Insert Coin</span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Retro Arcade Checkbox</h3>
                  <span>New</span>
                </div>
                <p>A retro 8-bit arcade style checkbox utilizing stepping transitions and block pixel checkmarks.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb13')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb13')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb13" className="code-block" style="display:none;"><code>&lt;label className="arcade-cb"&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;span className="arcade-box"&gt;&lt;/span&gt;
        &lt;span className="arcade-text"&gt;Insert Coin&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            {/* ============ 14: SLIDE LOCK CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <label className="slidelock-cb">
                  <input type="checkbox" />
                  <div className="slidelock-track">Slide to Lock</div>
                  <div className="slidelock-handle">
                    <i className="fa-solid fa-angles-right"></i>
                  </div>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>Slide Lock Checkbox</h3>
                  <span>Premium</span>
                </div>
                <p>An interactive sliding track checkbox designed for locking settings or swipe-to-agree interactions.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb14')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb14')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb14" className="code-block" style="display:none;"><code>&lt;label className="slidelock-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;div className="slidelock-track"&gt;Slide to Lock&lt;/div&gt;
        &lt;div className="slidelock-handle"&gt;
          &lt;i className="fa-solid fa-angles-right"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/label&gt;</code></pre>
            </div>
      
            {/* ============ 15: 3D DEPTH FLIP CHECKBOX ============ */}
            <div className="component-card">
              <div className="card-preview">
                <label className="depth-cb">
                  <input type="checkbox" />
                  <span className="depth-box"></span>
                  <span className="depth-text">Enable 3D Acceleration</span>
                </label>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>3D Depth Flip Checkbox</h3>
                  <span>Trending</span>
                </div>
                <p>An isometric 3D depth-tilted card checkbox that rotates and flips upon clicking.</p>
                <div className="card-actions">
                  <button onclick="toggleCode('cb15')"><i className="fa-solid fa-code"></i> View Code</button>
                  <button onclick="copyCode('cb15')"><i className="fa-solid fa-copy"></i> Copy</button>
                  <button><i className="fa-solid fa-bookmark"></i> Save</button>
                </div>
              </div>
              <pre id="cb15" className="code-block" style="display:none;"><code>&lt;label className="depth-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="depth-box"&gt;&lt;/span&gt;
        &lt;span className="depth-text"&gt;Enable 3D Acceleration&lt;/span&gt;
      &lt;/label&gt;</code></pre>
            </section>
      
        </div> {/* main-content */}
      
        {/* ================= FOOTER ================= */}
        <footer className="footer">
          <div className="footer-container">
      
            <div className="footer-col">
              <div className="footer-logo">UIverse</div>
              <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
              <div className="socials">
                <a href="#" target="_blank" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" title="Twitter"><i className="fab fa-x-twitter"></i></a>
              </div>
            </div>
      <div className="component-card">
        <div className="card-preview">
          <label className="rainbow-cb">
            <input type="checkbox" />
            <span className="rainbow-box"><i className="fa-solid fa-check"></i></span>
            <span className="rainbow-text">Celebrate Diversity</span>
          </label>
        </div>
        <div className="card-content">
          <div className="card-top">
            <h3>Rainbow Checkbox</h3>
            <span>Colorful</span>
          </div>
          <p>Animated rainbow gradient fill with smooth transitions when checked.</p>
          <div className="card-actions">
            <button onclick="toggleCode('cb16')"><i className="fa-solid fa-code"></i> View Code</button>
            <button onclick="copyCode('cb16')"><i className="fa-solid fa-copy"></i> Copy</button>
            <button><i className="fa-solid fa-bookmark"></i> Save</button>
          </div>
        </div>
        <pre id="cb16" className="code-block" style="display:none;"><code>&lt;label className="rainbow-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="rainbow-box"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="rainbow-text"&gt;Celebrate Diversity&lt;/span&gt;
      &lt;/label&gt;</code></pre>
      </div>
      <div className="component-card">
        <div className="card-preview">
          <label className="music-cb">
            <input type="checkbox" />
            <span className="music-box"><i className="fa-solid fa-music"></i>🎵</span>
            <span className="music-text"> Enable Sound Effects</span>
          </label>
        </div>
        <div className="card-content">
          <div className="card-top">
            <h3>Music Note Checkbox</h3>
            <span>Fun</span>
          </div>
          <p>Checkbox with animated music note icon that pulses when selected.</p>
          <div className="card-actions">
            <button onclick="toggleCode('cb17')"><i className="fa-solid fa-code"></i> View Code</button>
            <button onclick="copyCode('cb17')"><i className="fa-solid fa-copy"></i> Copy</button>
            <button><i className="fa-solid fa-bookmark"></i> Save</button>
          </div>
        </div>
        <pre id="cb17" className="code-block" style="display:none;"><code>&lt;label className="music-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="music-box"&gt;&lt;i className="fa-solid fa-music"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="music-text"&gt;Enable Sound Effects&lt;/span&gt;
      &lt;/label&gt;</code></pre>
      </div>
      <div className="component-card">
        <div className="card-preview">
          <label className="earth-cb">
            <input type="checkbox" />
            <span className="earth-box"><i className="fa-solid fa-earth-americas"></i>🌍</span>
            <span className="earth-text">Eco Mode</span>
          </label>
        </div>
        <div className="card-content">
          <div className="card-top">
            <h3>Earth Checkbox</h3>
            <span>Eco</span>
          </div>
          <p>Eco-friendly themed checkbox with animated globe icon and green glow.</p>
          <div className="card-actions">
            <button onclick="toggleCode('cb18')"><i className="fa-solid fa-code"></i> View Code</button>
            <button onclick="copyCode('cb18')"><i className="fa-solid fa-copy"></i> Copy</button>
            <button><i className="fa-solid fa-bookmark"></i> Save</button>
          </div>
        </div>
        <pre id="cb18" className="code-block" style="display:none;"><code>&lt;label className="earth-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="earth-box"&gt;&lt;i className="fa-solid fa-earth-americas"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="earth-text"&gt;Eco Mode&lt;/span&gt;
      &lt;/label&gt;</code></pre>
      </div>
      <div className="component-card">
        <div className="card-preview">
          <label className="lightning-cb">
            <input type="checkbox" />
            <span className="lightning-box"><i className="fa-solid fa-bolt"></i>⚡</span>
            <span className="lightning-text">High Performance</span>
          </label>
        </div>
        <div className="card-content">
          <div className="card-top">
            <h3>Lightning Checkbox</h3>
            <span>Power</span>
          </div>
          <p>Dynamic lightning bolt icon with a flash animation when toggled.</p>
          <div className="card-actions">
            <button onclick="toggleCode('cb19')"><i className="fa-solid fa-code"></i> View Code</button>
            <button onclick="copyCode('cb19')"><i className="fa-solid fa-copy"></i> Copy</button>
            <button><i className="fa-solid fa-bookmark"></i> Save</button>
          </div>
        </div>
        <pre id="cb19" className="code-block" style="display:none;"><code>&lt;label className="lightning-cb"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span className="lightning-box"&gt;&lt;i className="fa-solid fa-bolt"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span className="lightning-text"&gt;High Performance&lt;/span&gt;
      &lt;/label&gt;</code></pre>
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
                <li><a href="#" target="_blank">GitHub Repo</a></li>
                <li><a href="community.html">Community</a></li>
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
                <button type="button">Subscribe</button>
              </div>
            </div>
      
          </div>
      
          <div className="footer-bottom">
            <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
          </div>
        </footer>
      
            <script>
              function toggleCode(id) {
                const el = document.getElementById(id);
                if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
              }
              function copyCode(id) {
                const el = document.getElementById(id);
                if (!el) return;
                navigator.clipboard.writeText(el.textContent).then(() => alert('Code copied!'));
              }
              function loadTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme, false);
      }
      
      function setTheme(theme, persist = true) {
        document.documentElement.setAttribute("data-theme", theme);
        if (persist) localStorage.setItem("theme", theme);
      }
      
      function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
      }
      
      window.onload = loadTheme;
      
          
            </script>
    </>
  );
}
