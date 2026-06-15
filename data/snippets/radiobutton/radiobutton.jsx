import React from 'react';

export default function radiobutton(){
  return (
    <>
      <div className="main-content">
      
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search components..." />
          </div>
          <div className="topbar-actions">
            <button className="add-btn">
              <i className="fa-solid fa-plus"></i>
              Add Component
            </button>
            <button className="collection-btn">
              My Collection
            </button>
            <button className="theme-btn">
              <i className="fa-solid fa-moon"></i>
            </button>
          </div>
        </header>
      
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="breadcrumb">
              Home &gt; Radio Buttons
            </div>
            <h1>Radio Button Components</h1>
            <p>
              Modern reusable radio button UI elements with responsive layouts,
              interactive styling, and smooth animations using HTML, CSS, and Vanilla JavaScript.
            </p>
            <div className="hero-tags">
              <span>
                <i className="fa-solid fa-layer-group"></i>
                5 Components
              </span>
              <span>
                <i className="fa-solid fa-code"></i>
                Pure HTML/CSS
              </span>
              <span>
                <i className="fa-solid fa-mobile-screen"></i>
                Responsive
              </span>
            </div>
          </div>
          <div className="hero-preview">
            <div className="hero-radio-demo">
              <div className="hero-radio checked"><div className="hero-radio-dot"></div></div>
              <div className="hero-radio"><div className="hero-radio-dot"></div></div>
              <div className="hero-radio"><div className="hero-radio-dot"></div></div>
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
              <li className="active"><a href="radiobutton.html"><i className="fa-solid fa-circle-dot"></i><span>Radio Buttons</span></a></li>
            <li>
              <a href="checkbox.html">
                <i className="fa-solid fa-square-check"></i>
                <span>Checkboxes</span>
              </a>
            </li>
            <li>
              <a href="notifications-premium.html">
                <i className="fa-solid fa-bell"></i>
                <span>Notifications V2</span>
              </a>
            </li>
            <li>
              <a href="step-indicators.html">
                <i className="fa-solid fa-list-check"></i>
                <span>Steppers</span>
              </a>
            </li>
            <li>
              <a href="progress-premium.html">
                <i className="fa-solid fa-bars-progress"></i>
                <span>Progress V2</span>
              </a>
            </li>
            <li>
              <a href="ratings-premium.html">
                <i className="fa-solid fa-star"></i>
                <span>Ratings V2</span>
              </a>
            </li>
            <li>
              <a href="filters-premium.html">
                <i className="fa-solid fa-sliders"></i>
                <span>Filters V2</span>
              </a>
            </li>
            <li>
              <a href="admin-panel.html">
                <i className="fa-solid fa-gauge-high"></i>
                <span>Admin Panel V2</span>
              </a>
            </li>
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
        <section className="radio-grid">
      
          {/* ============ COMPONENT 1: MINIMAL RADIO BUTTON ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="minimal-radio-group">
                <label className="minimal-radio">
                  <input type="radio" name="minimal" checked />
                  <span className="minimal-indicator"></span>
                  <span className="minimal-label">Option One</span>
                </label>
                <label className="minimal-radio">
                  <input type="radio" name="minimal" />
                  <span className="minimal-indicator"></span>
                  <span className="minimal-label">Option Two</span>
                </label>
                <label className="minimal-radio">
                  <input type="radio" name="minimal" />
                  <span className="minimal-indicator"></span>
                  <span className="minimal-label">Option Three</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Minimal Radio Button</h3>
                <span>Essential</span>
              </div>
              <p>Clean minimal radio button with a smooth scaling dot animation on selection.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r1')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r1')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r1" className="code-block" style="display:none;"><code>&lt;label className="minimal-radio"&gt;
        &lt;input type="radio" name="group" checked&gt;
        &lt;span className="minimal-indicator"&gt;&lt;/span&gt;
        &lt;span className="minimal-label"&gt;Option One&lt;/span&gt;
      &lt;/label&gt;
      
      .minimal-radio input:checked ~ .minimal-indicator::after {
        transform: scale(1);
        opacity: 1;
      }</code></pre>
          </div>
      
          {/* ============ COMPONENT 2: GRADIENT RADIO SELECTOR ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="gradient-radio-group">
                <label className="gradient-radio">
                  <input type="radio" name="gradient" checked />
                  <span className="gradient-indicator"></span>
                  <span className="gradient-label">Starter</span>
                </label>
                <label className="gradient-radio">
                  <input type="radio" name="gradient" />
                  <span className="gradient-indicator"></span>
                  <span className="gradient-label">Professional</span>
                </label>
                <label className="gradient-radio">
                  <input type="radio" name="gradient" />
                  <span className="gradient-indicator"></span>
                  <span className="gradient-label">Enterprise</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Gradient Radio Selector</h3>
                <span>Trending</span>
              </div>
              <p>Vibrant gradient-styled radio buttons with animated ring transitions and colour shifts.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r2')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r2')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r2" className="code-block" style="display:none;"><code>&lt;label className="gradient-radio"&gt;
        &lt;input type="radio" name="gradient" checked&gt;
        &lt;span className="gradient-indicator"&gt;&lt;/span&gt;
        &lt;span className="gradient-label"&gt;Starter&lt;/span&gt;
      &lt;/label&gt;
      
      .gradient-radio input:checked ~ .gradient-indicator {
        background: linear-gradient(135deg, #7c3aed, #06b6d4);
        border-color: transparent;
      }</code></pre>
          </div>
      
          {/* ============ COMPONENT 3: GLASSMORPHISM RADIO BUTTON ============ */}
          <div className="component-card">
            <div className="card-preview dark-preview">
              <div className="glass-radio-group">
                <label className="glass-radio">
                  <input type="radio" name="glass" checked />
                  <span className="glass-indicator"></span>
                  <span className="glass-label"><i className="fa-solid fa-bolt"></i> Performance</span>
                </label>
                <label className="glass-radio">
                  <input type="radio" name="glass" />
                  <span className="glass-indicator"></span>
                  <span className="glass-label"><i className="fa-solid fa-shield-halved"></i> Security</span>
                </label>
                <label className="glass-radio">
                  <input type="radio" name="glass" />
                  <span className="glass-indicator"></span>
                  <span className="glass-label"><i className="fa-solid fa-gauge-high"></i> Speed</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Glassmorphism Radio</h3>
                <span>Premium</span>
              </div>
              <p>Translucent glassmorphic radio buttons with frosted blur backdrop and glowing active states.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r3')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r3')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r3" className="code-block" style="display:none;"><code>&lt;label className="glass-radio"&gt;
        &lt;input type="radio" name="glass" checked&gt;
        &lt;span className="glass-indicator"&gt;&lt;/span&gt;
        &lt;span className="glass-label"&gt;Performance&lt;/span&gt;
      &lt;/label&gt;
      
      .glass-radio input:checked ~ .glass-indicator {
        background: rgba(99,102,241,0.4);
        box-shadow: 0 0 12px rgba(99,102,241,0.5);
      }</code></pre>
          </div>
      
          {/* ============ COMPONENT 4: ANIMATED TOGGLE RADIO GROUP ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="toggle-radio-wrapper">
                <div className="toggle-radio-group">
                  <input type="radio" name="toggle" id="toggle-monthly" checked />
                  <input type="radio" name="toggle" id="toggle-yearly" />
                  <input type="radio" name="toggle" id="toggle-lifetime" />
                  <div className="toggle-slider"></div>
                  <label for="toggle-monthly">Monthly</label>
                  <label for="toggle-yearly">Yearly</label>
                  <label for="toggle-lifetime">Lifetime</label>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Animated Toggle Radio</h3>
                <span>Popular</span>
              </div>
              <p>Pill-shaped toggle group with a smooth sliding highlight indicator between options.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r4')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r4')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r4" className="code-block" style="display:none;"><code>&lt;div className="toggle-radio-group"&gt;
        &lt;input type="radio" name="toggle" id="monthly" checked&gt;
        &lt;input type="radio" name="toggle" id="yearly"&gt;
        &lt;input type="radio" name="toggle" id="lifetime"&gt;
        &lt;div className="toggle-slider"&gt;&lt;/div&gt;
        &lt;label for="monthly"&gt;Monthly&lt;/label&gt;
        &lt;label for="yearly"&gt;Yearly&lt;/label&gt;
        &lt;label for="lifetime"&gt;Lifetime&lt;/label&gt;
      &lt;/div&gt;
      
      #toggle-yearly:checked ~ .toggle-slider {
        transform: translateX(100%);
      }</code></pre>
          </div>
      
          {/* ============ COMPONENT 5: PAYMENT METHOD RADIO CARD ============ */}
          <div className="component-card">
            <div className="card-preview dark-preview">
              <div className="payment-radio-group">
                <label className="payment-radio">
                  <input type="radio" name="payment" checked />
                  <div className="payment-card-inner">
                    <div className="payment-icon"><i className="fa-brands fa-cc-visa"></i></div>
                    <div className="payment-info">
                      <strong>Visa Card</strong>
                      <span>**** 4242</span>
                    </div>
                    <div className="payment-check"><i className="fa-solid fa-circle-check"></i></div>
                  </div>
                </label>
                <label className="payment-radio">
                  <input type="radio" name="payment" />
                  <div className="payment-card-inner">
                    <div className="payment-icon"><i className="fa-brands fa-cc-mastercard"></i></div>
                    <div className="payment-info">
                      <strong>Mastercard</strong>
                      <span>**** 8371</span>
                    </div>
                    <div className="payment-check"><i className="fa-solid fa-circle-check"></i></div>
                  </div>
                </label>
                <label className="payment-radio">
                  <input type="radio" name="payment" />
                  <div className="payment-card-inner">
                    <div className="payment-icon"><i className="fa-brands fa-paypal"></i></div>
                    <div className="payment-info">
                      <strong>PayPal</strong>
                      <span>user@email.com</span>
                    </div>
                    <div className="payment-check"><i className="fa-solid fa-circle-check"></i></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Payment Method Radio</h3>
                <span>New</span>
              </div>
              <p>Card-based radio group for payment method selection with animated check and border glow.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r5')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r5')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r5" className="code-block" style="display:none;"><code>&lt;label className="payment-radio"&gt;
        &lt;input type="radio" name="payment" checked&gt;
        &lt;div className="payment-card-inner"&gt;
          &lt;div className="payment-icon"&gt;&lt;i className="fa-brands fa-cc-visa"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;div className="payment-info"&gt;
            &lt;strong&gt;Visa Card&lt;/strong&gt;
            &lt;span&gt;**** 4242&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="payment-check"&gt;&lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/label&gt;
      
      .payment-radio input:checked ~ .payment-card-inner {
        border-color: #6366f1;
        box-shadow: 0 0 16px rgba(99,102,241,0.25);
      }</code></pre>
          </div>
      
          <div className="component-card">
            <div className="card-preview dark-preview">
              <div className="cyber-radio-group">
                <label className="cyber-radio">
                  <input type="radio" name="cyber" checked />
                  <div className="cyber-indicator"></div>
                  <span className="cyber-label">Cyber</span>
                </label>
                <label className="cyber-radio">
                  <input type="radio" name="cyber" />
                  <div className="cyber-indicator"></div>
                  <span className="cyber-label">Punk</span>
                </label>
                <label className="cyber-radio">
                  <input type="radio" name="cyber" />
                  <div className="cyber-indicator"></div>
                  <span className="cyber-label">Neon</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Cyberpunk Radio</h3>
                <span>Neon</span>
              </div>
              <p>A futuristic radio button with neon glow effects, harsh angles, and vivid magenta/cyan contrasts.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r6')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r6')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r6" className="code-block" style="display:none;"><code>&lt;label className="cyber-radio"&gt;
        &lt;input type="radio" name="cyber" checked&gt;
        &lt;div className="cyber-indicator"&gt;&lt;/div&gt;
        &lt;span className="cyber-label"&gt;Cyber&lt;/span&gt;
      &lt;/label&gt;
      
      .cyber-radio input:checked ~ .cyber-indicator {
        border-color: #f0f;
        box-shadow: 0 0 10px #f0f;
        transform: rotate(90deg);
      }</code></pre>
          </div>
      
          <div className="component-card">
            <div className="card-preview dark-preview">
              <div className="neu-radio-group">
                <label className="neu-radio">
                  <input type="radio" name="neu" checked />
                  <div className="neu-indicator"></div>
                  <span className="neu-label">System Default</span>
                </label>
                <label className="neu-radio">
                  <input type="radio" name="neu" />
                  <div className="neu-indicator"></div>
                  <span className="neu-label">Dark Mode</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Neumorphic Radio</h3>
                <span>Dark</span>
              </div>
              <p>Dark themed neumorphic radio buttons with deep inset shadows and bright glowing active indicators.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r7')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r7')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r7" className="code-block" style="display:none;"><code>&lt;label className="neu-radio"&gt;
        &lt;input type="radio" name="neu" checked&gt;
        &lt;div className="neu-indicator"&gt;&lt;/div&gt;
        &lt;span className="neu-label"&gt;System Default&lt;/span&gt;
      &lt;/label&gt;
      
      .neu-radio input:checked ~ .neu-indicator {
        box-shadow: inset 4px 4px 8px #080a14, inset -4px -4px 8px #202652;
      }</code></pre>
          </div>
      
          <div className="component-card">
            <div className="card-preview">
              <div className="emoji-radio-group">
                <label className="emoji-radio">
                  <input type="radio" name="emoji" />
                  <span className="emoji-icon">😠</span>
                  <span className="emoji-label">Poor</span>
                </label>
                <label className="emoji-radio">
                  <input type="radio" name="emoji" />
                  <span className="emoji-icon">😐</span>
                  <span className="emoji-label">Fair</span>
                </label>
                <label className="emoji-radio">
                  <input type="radio" name="emoji" checked />
                  <span className="emoji-icon">😊</span>
                  <span className="emoji-label">Good</span>
                </label>
                <label className="emoji-radio">
                  <input type="radio" name="emoji" />
                  <span className="emoji-icon">😍</span>
                  <span className="emoji-label">Great</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Feedback Emoji Radio</h3>
                <span>Fun</span>
              </div>
              <p>Interactive emoji-based radio selector perfect for feedback forms, featuring bouncy scale animations.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r8')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r8')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r8" className="code-block" style="display:none;"><code>&lt;label className="emoji-radio"&gt;
        &lt;input type="radio" name="emoji" checked&gt;
        &lt;span className="emoji-icon"&gt;😊&lt;/span&gt;
        &lt;span className="emoji-label"&gt;Good&lt;/span&gt;
      &lt;/label&gt;
      
      .emoji-radio input:checked ~ .emoji-icon {
        filter: grayscale(0%) opacity(1);
        transform: scale(1.2) translateY(-5px);
      }</code></pre>
          </div>
      
          <div className="component-card">
            <div className="card-preview">
              <div className="accordion-radio-group">
                <label className="accordion-radio">
                  <input type="radio" name="accordion" checked />
                  <div className="accordion-header">
                    <span className="accordion-title">Standard Shipping</span>
                    <div className="accordion-indicator"></div>
                  </div>
                  <div className="accordion-body">
                    Delivery in 3-5 business days. Available for all orders under 5lbs.
                  </div>
                </label>
                <label className="accordion-radio">
                  <input type="radio" name="accordion" />
                  <div className="accordion-header">
                    <span className="accordion-title">Express Shipping</span>
                    <div className="accordion-indicator"></div>
                  </div>
                  <div className="accordion-body">
                    Get it tomorrow! Orders must be placed before 2 PM local time.
                  </div>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Accordion Radio</h3>
                <span>Interactive</span>
              </div>
              <p>Radio buttons combined with an accordion layout, expanding to show more details upon selection.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r9')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r9')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r9" className="code-block" style="display:none;"><code>&lt;label className="accordion-radio"&gt;
        &lt;input type="radio" name="accordion" checked&gt;
        &lt;div className="accordion-header"&gt;
          &lt;span className="accordion-title"&gt;Standard Shipping&lt;/span&gt;
          &lt;div className="accordion-indicator"&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="accordion-body"&gt;
          Delivery in 3-5 business days.
        &lt;/div&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          <div className="component-card">
            <div className="card-preview">
              <div className="pricing-radio-group">
                <label className="pricing-radio">
                  <input type="radio" name="pricing" />
                  <div className="pricing-card">
                    <span className="pricing-tier">Basic</span>
                    <div className="pricing-amount">$9<span>/mo</span></div>
                  </div>
                </label>
                <label className="pricing-radio">
                  <input type="radio" name="pricing" checked />
                  <div className="pricing-card">
                    <span className="pricing-tier">Pro</span>
                    <div className="pricing-amount">$19<span>/mo</span></div>
                  </div>
                </label>
                <label className="pricing-radio">
                  <input type="radio" name="pricing" />
                  <div className="pricing-card">
                    <span className="pricing-tier">Max</span>
                    <div className="pricing-amount">$29<span>/mo</span></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Pricing Tier Radio</h3>
                <span>Cards</span>
              </div>
              <p>A set of radio cards designed for subscription selection with elevated 3D states and shadow effects.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r10')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r10')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r10" className="code-block" style="display:none;"><code>&lt;label className="pricing-radio"&gt;
        &lt;input type="radio" name="pricing" checked&gt;
        &lt;div className="pricing-card"&gt;
          &lt;span className="pricing-tier"&gt;Pro&lt;/span&gt;
          &lt;div className="pricing-amount"&gt;$19&lt;span&gt;/mo&lt;/span&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/label&gt;
      
      .pricing-radio input:checked ~ .pricing-card {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
        transform: translateY(-5px);
      }</code></pre>
          </div>
      
          {/* ============ ADDITIONAL COMPONENTS (5 NEW) ============ */}
      
          {/* BADGE RADIO */}
          <div className="component-card">
            <div className="card-preview">
              <div className="badge-radio-group">
                <label className="badge-radio">
                  <input type="radio" name="badge" checked />
                  <span className="badge-indicator"></span>
                  <span className="badge-count">4</span>
                </label>
                <label className="badge-radio">
                  <input type="radio" name="badge" />
                  <span className="badge-indicator"></span>
                  <span className="badge-count">12</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Badge Radio</h3><span>Compact</span></div>
              <p>Small badge-style radios ideal for notifications and quick counts.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r11')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r11')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r11" className="code-block" style="display:none;"><code>&lt;label className="badge-radio"&gt;
        &lt;input type="radio" name="badge" checked&gt;
        &lt;span className="badge-indicator"&gt;&lt;/span&gt;
        &lt;span className="badge-count"&gt;4&lt;/span&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          {/* ICON RADIO */}
          <div className="component-card">
            <div className="card-preview">
              <div className="icon-radio-group">
                <label className="icon-radio">
                  <input type="radio" name="icon" />
                  <i className="fa-solid fa-wifi"></i>
                </label>
                <label className="icon-radio">
                  <input type="radio" name="icon" checked />
                  <i className="fa-brands fa-bluetooth-b"></i>
                </label>
                <label className="icon-radio">
                  <input type="radio" name="icon" />
                  <i className="fa-solid fa-bell"></i>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Icon Radio</h3><span>UI</span></div>
              <p>Centered icon radios for compact control panels and quick toggles.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r12')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r12')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r12" className="code-block" style="display:none;"><code>&lt;label className="icon-radio"&gt;
        &lt;input type="radio" name="icon" checked&gt;
        &lt;i className="fa-solid fa-bluetooth"&gt;&lt;/i&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          {/* RING RADIO */}
          <div className="component-card">
            <div className="card-preview">
              <div className="ring-radio-group">
                <label className="ring-radio">
                  <input type="radio" name="ring" checked />
                  <span className="ring-dot"></span>
                  <span className="minimal-label">Primary</span>
                </label>
                <label className="ring-radio">
                  <input type="radio" name="ring" />
                  <span className="ring-dot"></span>
                  <span className="minimal-label">Secondary</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Ring Radio</h3><span>Focus</span></div>
              <p>Radio with an animated outer ring — great for emphasizing selection.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r13')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r13')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r13" className="code-block" style="display:none;"><code>&lt;label className="ring-radio"&gt;
        &lt;input type="radio" name="ring" checked&gt;
        &lt;span className="ring-dot"&gt;&lt;/span&gt;
        &lt;span&gt;Primary&lt;/span&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          {/* STEPPER RADIO */}
          <div className="component-card">
            <div className="card-preview">
              <div className="stepper-radio-group">
                <label className="stepper-radio">
                  <input type="radio" name="stepper" checked />
                  <div className="step-number">1</div>
                  <div className="stepper-body">Account setup<br /><small>Enter profile details</small></div>
                </label>
                <label className="stepper-radio">
                  <input type="radio" name="stepper" />
                  <div className="step-number">2</div>
                  <div className="stepper-body">Billing<br /><small>Choose plan</small></div>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Stepper Radio</h3><span>Workflow</span></div>
              <p>Numbered stepper radios for multi-step flows and wizards.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r14')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r14')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r14" className="code-block" style="display:none;"><code>&lt;label className="stepper-radio"&gt;
        &lt;input type="radio" name="stepper" checked&gt;
        &lt;div className="step-number"&gt;1&lt;/div&gt;
        &lt;div className="stepper-body"&gt;Account setup&lt;/div&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          {/* INLINE RADIO */}
          <div className="component-card">
            <div className="card-preview">
              <div className="inline-radio-group">
                <label className="inline-radio">
                  <input type="radio" name="inline" checked />
                  <span className="inline-dot"></span>
                  <span className="minimal-label">Yes</span>
                </label>
                <label className="inline-radio">
                  <input type="radio" name="inline" />
                  <span className="inline-dot"></span>
                  <span className="minimal-label">No</span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Compact Inline Radio</h3><span>Form</span></div>
              <p>Compact inline radios built for dense form rows and settings panels.</p>
              <div className="card-actions">
                <button onclick="toggleCode('r15')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('r15')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r15" className="code-block" style="display:none;"><code>&lt;label className="inline-radio"&gt;
        &lt;input type="radio" name="inline" checked&gt;
        &lt;span className="inline-dot"&gt;&lt;/span&gt;
        &lt;span&gt;Yes&lt;/span&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          {/* ============ COMPONENT: COLOR SWATCH RADIO ============ */}
          <style>
            .swatch-dot.indigo { background: #6366f1; }
            .swatch-dot.green { background: #10b981; }
            .swatch-dot.orange { background: #f97316; }
            .swatch-dot.pink { background: #ec4899; }
            .swatch-dot.yellow { background: #eab308; }
          </style>
      
          <div className="component-card">
            <div className="card-preview">
              <div className="swatch-radio-group">
                <label className="swatch-radio">
                  <input type="radio" name="swatch" checked title="Indigo" aria-label="Indigo" />
                  <span className="swatch-dot indigo"></span>
                </label>
                <label className="swatch-radio">
                  <input type="radio" name="swatch" title="Green" aria-label="Green" />
                  <span className="swatch-dot green"></span>
                </label>
                <label className="swatch-radio">
                  <input type="radio" name="swatch" title="Orange" aria-label="Orange" />
                  <span className="swatch-dot orange"></span>
                </label>
                <label className="swatch-radio">
                  <input type="radio" name="swatch" title="Pink" aria-label="Pink" />
                  <span className="swatch-dot pink"></span>
                </label>
                <label className="swatch-radio">
                  <input type="radio" name="swatch" title="Yellow" aria-label="Yellow" />
                  <span className="swatch-dot yellow"></span>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Color Swatch Radio</h3>
                <span>Picker</span>
              </div>
              <p>Circular colour swatch radio selector — ideal for theme or palette pickers with a ring highlight on selection.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('r16')"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('r16')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button type="button"><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r16" className="code-block" style="display:none;"><code>&lt;label className="swatch-radio"&gt;
            &lt;input type="radio" name="swatch" checked&gt;
            &lt;span className="swatch-dot indigo"&gt;&lt;/span&gt;
          &lt;/label&gt;
      
          .swatch-radio input:checked ~ .swatch-dot {
            box-shadow: 0 0 0 3px #0b0f1a, 0 0 0 5px currentColor;
            transform: scale(1.15);
          }</code></pre>
          </div>
      
          {/* ============ COMPONENT: HORIZONTAL CARD RADIO ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="hcard-radio-group">
                <label className="hcard-radio">
                  <input type="radio" name="hcard" checked />
                  <div className="hcard-inner">
                    <i className="fa-solid fa-house"></i>
                    <div className="hcard-text">
                      <strong>Home</strong>
                      <span>123 Main St</span>
                    </div>
                    <div className="hcard-pip"></div>
                  </div>
                </label>
                <label className="hcard-radio">
                  <input type="radio" name="hcard" />
                  <div className="hcard-inner">
                    <i className="fa-solid fa-building"></i>
                    <div className="hcard-text">
                      <strong>Office</strong>
                      <span>456 Work Ave</span>
                    </div>
                    <div className="hcard-pip"></div>
                  </div>
                </label>
                <label className="hcard-radio">
                  <input type="radio" name="hcard" />
                  <div className="hcard-inner">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="hcard-text">
                      <strong>Other</strong>
                      <span>Custom address</span>
                    </div>
                    <div className="hcard-pip"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Address Radio Card</h3>
                <span>Delivery</span>
              </div>
              <p>Horizontal card radio for selecting saved addresses or delivery locations with icon, label, and animated pip.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('r17')"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('r17')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button type="button"><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r17" className="code-block" style="display:none;"><code>&lt;label className="hcard-radio"&gt;
            &lt;input type="radio" name="hcard" checked&gt;
            &lt;div className="hcard-inner"&gt;
              &lt;i className="fa-solid fa-house"&gt;&lt;/i&gt;
              &lt;div className="hcard-text"&gt;
                &lt;strong&gt;Home&lt;/strong&gt;
                &lt;span&gt;123 Main St&lt;/span&gt;
              &lt;/div&gt;
              &lt;div className="hcard-pip"&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/label&gt;
      
          .hcard-radio input:checked ~ .hcard-inner {
            border-color: #6366f1;
            background: rgba(99,102,241,0.08);
          }
          .hcard-radio input:checked ~ .hcard-inner .hcard-pip {
            background: #6366f1;
            box-shadow: 0 0 8px rgba(99,102,241,0.5);
          }</code></pre>
          </div>
      
          {/* ============ COMPONENT: STAR RATING RADIO ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="star-radio-group">
                <label className="star-radio"><input type="radio" name="star" value="1" aria-label="1 star" /><i className="fa-solid fa-star"></i></label>
                <label className="star-radio"><input type="radio" name="star" value="2" aria-label="2 stars" /><i className="fa-solid fa-star"></i></label>
                <label className="star-radio"><input type="radio" name="star" value="3" checked aria-label="3 stars" /><i className="fa-solid fa-star"></i></label>
                <label className="star-radio"><input type="radio" name="star" value="4" aria-label="4 stars" /><i className="fa-solid fa-star"></i></label>
                <label className="star-radio"><input type="radio" name="star" value="5" aria-label="5 stars" /><i className="fa-solid fa-star"></i></label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Star Rating Radio</h3>
                <span>Rating</span>
              </div>
              <p>Classic five-star rating implemented as a pure CSS radio group with a hover fill-cascade effect.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('r18')"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('r18')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button type="button"><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r18" className="code-block" style="display:none;"><code>&lt;div className="star-radio-group"&gt;
            &lt;label className="star-radio"&gt;&lt;input type="radio" name="star" value="1"&gt;&lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;&lt;/label&gt;
            &lt;label className="star-radio"&gt;&lt;input type="radio" name="star" value="2"&gt;&lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;&lt;/label&gt;
            &lt;label className="star-radio"&gt;&lt;input type="radio" name="star" value="3"&gt;&lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;&lt;/label&gt;
            &lt;label className="star-radio"&gt;&lt;input type="radio" name="star" value="4"&gt;&lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;&lt;/label&gt;
            &lt;label className="star-radio"&gt;&lt;input type="radio" name="star" value="5"&gt;&lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;&lt;/label&gt;
          &lt;/div&gt;
      
          .star-radio-group { direction: rtl; }
          .star-radio i { color: #334155; transition: color .2s; }
          .star-radio:hover ~ .star-radio i,
          .star-radio:hover i { color: #eab308; }</code></pre>
          </div>
      
          {/* ============ COMPONENT: PILL CHIP RADIO ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="chip-radio-group">
                <label className="chip-radio"><input type="radio" name="chip" checked /><span>Design</span></label>
                <label className="chip-radio"><input type="radio" name="chip" /><span>Engineering</span></label>
                <label className="chip-radio"><input type="radio" name="chip" /><span>Marketing</span></label>
                <label className="chip-radio"><input type="radio" name="chip" /><span>Product</span></label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Pill Chip Radio</h3>
                <span>Filter</span>
              </div>
              <p>Tag-style pill chips as radio buttons — perfect for category filters, tags, and preference selectors.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('r19')"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('r19')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button type="button"><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r19" className="code-block" style="display:none;"><code>&lt;label className="chip-radio"&gt;
            &lt;input type="radio" name="chip" checked&gt;
            &lt;span&gt;Design&lt;/span&gt;
          &lt;/label&gt;
      
          .chip-radio input:checked ~ span {
            background: #6366f1;
            color: #fff;
            border-color: #6366f1;
          }</code></pre>
          </div>
      
          {/* ============ COMPONENT: DARK/LIGHT THEME RADIO ============ */}
          <div className="component-card">
            <div className="card-preview">
              <div className="theme-radio-group">
                <label className="theme-radio">
                  <input type="radio" name="thememode" checked />
                  <div className="theme-card-inner theme-light-card">
                    <i className="fa-solid fa-sun"></i>
                    <span>Light</span>
                    <div className="theme-check"><i className="fa-solid fa-check"></i></div>
                  </div>
                </label>
                <label className="theme-radio">
                  <input type="radio" name="thememode" />
                  <div className="theme-card-inner theme-dark-card">
                    <i className="fa-solid fa-moon"></i>
                    <span>Dark</span>
                    <div className="theme-check"><i className="fa-solid fa-check"></i></div>
                  </div>
                </label>
                <label className="theme-radio">
                  <input type="radio" name="thememode" />
                  <div className="theme-card-inner theme-auto-card">
                    <i className="fa-solid fa-circle-half-stroke"></i>
                    <span>Auto</span>
                    <div className="theme-check"><i className="fa-solid fa-check"></i></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Theme Mode Radio</h3>
                <span>Settings</span>
              </div>
              <p>Visual theme selector with icon cards for Light, Dark, and Auto modes — great for settings panels.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('r20')"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('r20')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button type="button"><i className="fa-solid fa-bookmark"></i> Save</button>
              </div>
            </div>
            <pre id="r20" className="code-block" style="display:none;"><code>&lt;label className="theme-radio"&gt;
            &lt;input type="radio" name="thememode" checked&gt;
            &lt;div className="theme-card-inner theme-light-card"&gt;
              &lt;i className="fa-solid fa-sun"&gt;&lt;/i&gt;
              &lt;span&gt;Light&lt;/span&gt;
              &lt;div className="theme-check"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/label&gt;
      
          .theme-radio input:checked ~ .theme-card-inner {
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.25);
          }
          .theme-radio input:checked ~ .theme-card-inner .theme-check {
            opacity: 1;
            transform: scale(1);
          }</code></pre>
          </div>
      
        </section>
      
      </div>
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
      function toggleCode(id) {
        const el = document.getElementById(id);
        if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
      }
      function copyCode(id) {
        const el = document.getElementById(id);
        if (!el) return;
        navigator.clipboard.writeText(el.textContent).then(() => {
          alert('Code copied to clipboard!');
        });
      }
      </script>
    </>
  );
}
