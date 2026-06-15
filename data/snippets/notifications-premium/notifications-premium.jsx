import React from 'react';

export default function notificationsPremium(){
  return (
    <>
      <div className="main-content">
      
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search notification components..." id="searchInput" />
          </div>
          <div className="topbar-actions">
            <button className="add-btn" onclick="triggerAllShowcase()"><i className="fa-solid fa-play"></i> Test All</button>
            <button className="collection-btn" onclick="clearLiveToasts()"><i className="fa-solid fa-trash"></i> Clear Toasts</button>
            <button className="theme-btn"><i className="fa-solid fa-moon"></i></button>
          </div>
        </header>
      
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="breadcrumb">Home &gt; Notifications Premium</div>
            <h1>Notification UI</h1>
            <p>
              Modern, responsive notification elements built with clean HTML, CSS, and Vanilla JavaScript.
              Features premium glassmorphic blur effects, glowing active states, and custom micro-animations.
            </p>
            <div className="hero-tags">
              <span><i className="fa-solid fa-layer-group"></i> 5 Modern Elements</span>
              <span><i className="fa-solid fa-wand-magic-sparkles"></i> Glass & Glows</span>
              <span><i className="fa-solid fa-mobile-screen"></i> 100% Responsive</span>
            </div>
          </div>
          <div className="hero-preview">
            <div className="hero-notification-demo">
              <div className="demo-bubble active">
                <span className="demo-dot"></span>
                <i className="fa-solid fa-bell"></i>
                <span>Live Preview Active</span>
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
              <li className="active"><a href="notifications-premium.html"><i className="fa-solid fa-bell"></i><span>Notifications V2</span></a></li>
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
          <button className="filter-tab active" data-filter="all">All</button>
          <button className="filter-tab" data-filter="toasts">Toasts</button>
          <button className="filter-tab" data-filter="alerts">Alerts</button>
          <button className="filter-tab" data-filter="cards">Cards</button>
          <button className="filter-tab" data-filter="glass">Glass</button>
        </div>
      
        {/* COMPONENT SHOWCASE GRID */}
        <section className="notification-grid">
      
          {/* ============ 1: TOAST NOTIFICATION ============ */}
          <div className="component-card" data-category="toasts">
            <div className="card-preview">
              <div className="card-interactive-area">
                <div className="toast-preview-wrapper">
                  <div className="premium-toast warning">
                    <div className="toast-icon">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div className="toast-content">
                      <h4 className="toast-title">Backup Required</h4>
                      <p className="toast-desc">Your database was last backed up 7 days ago.</p>
                    </div>
                    <button className="toast-close-btn" onclick="resetToastPreview(this)"><i className="fa-solid fa-xmark"></i></button>
                    <div className="toast-progress-bar"></div>
                  </div>
                </div>
                <button className="trigger-live-btn orange" onclick="triggerToastDemo('warning')"><i className="fa-solid fa-bolt"></i> Trigger Live Toast</button>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Toast Notification</h3>
                <span>Interactive</span>
              </div>
              <p>Premium dark toast banner featuring high-contrast colored warning indicator, progress timer, and exit scale movements.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt1')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt1')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerToastDemo('success')"><i className="fa-solid fa-circle-check"></i> Success</button>
              </div>
            </div>
            <pre id="nt1" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-toast warning"&gt;
        &lt;div className="toast-icon"&gt;
          &lt;i className="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div className="toast-content"&gt;
          &lt;h4 className="toast-title"&gt;Backup Required&lt;/h4&gt;
          &lt;p className="toast-desc"&gt;Your database was last backed up 7 days ago.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="toast-close-btn"&gt;&lt;i className="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
        &lt;div className="toast-progress-bar"&gt;&lt;/div&gt;
      &lt;/div&gt;
      
      /* CSS */
      .premium-toast {
        position: relative;
        background: #131722;
        border-left: 4px solid #f97316;
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        gap: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        overflow: hidden;
        max-width: 350px;
      }
      .toast-progress-bar {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 3px;
        background: #f97316;
        animation: drainProgress 4s linear forwards;
      }
      @keyframes drainProgress {
        to { width: 0; }
      }</code></pre>
          </div>
      
          {/* ============ 2: SUCCESS ALERT NOTIFICATION ============ */}
          <div className="component-card" data-category="alerts">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-alert-success" id="successAlertPreview">
                  <div className="alert-glow"></div>
                  <div className="alert-icon-wrapper">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="alert-text">
                    <h4 className="alert-title">Payment Successful</h4>
                    <p className="alert-desc">Your premium upgrade is active! Invoice #2061 sent to your email.</p>
                  </div>
                  <button className="alert-close" onclick="dismissAlertPreview()"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <button className="trigger-live-btn green" id="alertResetBtn" style="display: none;" onclick="resetAlertPreview()"><i className="fa-solid fa-rotate-left"></i> Reset Alert Banner</button>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Success Alert Notification</h3>
                <span>Premium Glow</span>
              </div>
              <p>Vibrant inline banner using a translucent matrix styling, bouncing tick animation, and glowing outer drop shadows.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt2')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt2')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerSuccessPulse()"><i className="fa-solid fa-heartbeat"></i> Pulse</button>
              </div>
            </div>
            <pre id="nt2" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-alert-success"&gt;
        &lt;div className="alert-glow"&gt;&lt;/div&gt;
        &lt;div className="alert-icon-wrapper"&gt;
          &lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div className="alert-text"&gt;
          &lt;h4 className="alert-title"&gt;Payment Successful&lt;/h4&gt;
          &lt;p className="alert-desc"&gt;Your premium upgrade is active! Invoice #2061 sent.&lt;/p&gt;
        &lt;/div&gt;
        &lt;button className="alert-close"&gt;&lt;i className="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
      &lt;/div&gt;
      
      /* CSS */
      .premium-alert-success {
        position: relative;
        background: rgba(16,185,129,0.06);
        border: 1px solid rgba(16,185,129,0.18);
        border-radius: 18px;
        padding: 18px 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 0 30px rgba(16,185,129,0.05);
      }
      .alert-icon-wrapper i {
        font-size: 24px;
        color: #10b981;
        animation: tickBounce 0.6s cubic-bezier(0.175,0.885,0.32,1.275);
      }
      @keyframes tickBounce {
        0% { transform: scale(0); }
        70% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }</code></pre>
          </div>
      
          {/* ============ 3: MESSAGE NOTIFICATION CARD ============ */}
          <div className="component-card" data-category="cards">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-msg-card" id="messageCardPreview">
                  <div className="msg-header">
                    <div className="msg-avatar-wrapper">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="avatar" className="msg-avatar" />
                      <span className="presence-dot online"></span>
                    </div>
                    <div className="msg-user-details">
                      <span className="msg-username">Sophia Martinez</span>
                      <span className="msg-time">Just now</span>
                    </div>
                    <div className="msg-badge">New Mention</div>
                  </div>
                  <div className="msg-body">
                    <p className="msg-text">Hey! I reviewed the design layout for UI-Verse. It looks extremely premium! Let's schedule a call to finalize the glassmorphism parameters. ✨</p>
                  </div>
                  <div className="msg-actions">
                    <button className="msg-btn reply-trigger" onclick="toggleCardReply()"><i className="fa-solid fa-reply"></i> Reply</button>
                    <button className="msg-btn dismiss-btn" onclick="dismissMsgCard()"><i className="fa-solid fa-check"></i> Dismiss</button>
                  </div>
                  <div className="msg-reply-box" id="cardReplyBox" style="display: none;">
                    <input type="text" placeholder="Type reply here..." className="msg-reply-input" id="cardReplyInput" />
                    <button className="msg-send-btn" onclick="sendCardReply()"><i className="fa-solid fa-paper-plane"></i></button>
                  </div>
                </div>
                <button className="trigger-live-btn purple" id="msgCardResetBtn" style="display: none;" onclick="resetMsgCard()"><i className="fa-solid fa-rotate-left"></i> Restore Chat Card</button>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Message Notification Card</h3>
                <span>Interactive</span>
              </div>
              <p>Premium user avatar layout featuring real-time blinking online status, and sliding text reply input drawers.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt3')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt3')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="simulateBlinkStatus()"><i className="fa-solid fa-wifi"></i> Status Toggle</button>
              </div>
            </div>
            <pre id="nt3" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-msg-card"&gt;
        &lt;div className="msg-header"&gt;
          &lt;div className="msg-avatar-wrapper"&gt;
            &lt;img src="avatar.jpg" className="msg-avatar"&gt;
            &lt;span className="presence-dot online"&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;div className="msg-user-details"&gt;
            &lt;span className="msg-username"&gt;Sophia Martinez&lt;/span&gt;
            &lt;span className="msg-time"&gt;Just now&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;p className="msg-text"&gt;Hey! I reviewed the design layout for UI-Verse...&lt;/p&gt;
        &lt;div className="msg-actions"&gt;
          &lt;button className="msg-btn reply-trigger"&gt;Reply&lt;/button&gt;
          &lt;button className="msg-btn dismiss-btn"&gt;Dismiss&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      /* CSS */
      .presence-dot.online {
        background: #10b981;
        box-shadow: 0 0 10px #10b981;
        animation: presencePulse 2s infinite ease-in-out;
      }
      @keyframes presencePulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.6; }
      }</code></pre>
          </div>
      
          {/* ============ 4: FLOATING NOTIFICATION POPUP ============ */}
          <div className="component-card" data-category="glass">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="floating-popup-showcase">
                  <div className="premium-floating-popup" id="floatingPopupPreview">
                    <div className="popup-brand-badge">
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                      <span>AI Engine</span>
                    </div>
                    <div className="popup-info">
                      <h5 className="popup-title">Neural Engine Active</h5>
                      <p className="popup-desc">Model loaded. Generating ambient designs...</p>
                    </div>
                    <div className="popup-actions">
                      <button className="popup-btn view" onclick="showPopupConf()">Configure</button>
                      <button className="popup-close-btn" onclick="dismissFloatingPopup()"><i className="fa-solid fa-xmark"></i></button>
                    </div>
                  </div>
                </div>
                <button className="trigger-live-btn purple" id="popupRestoreBtn" style="display: none;" onclick="resetFloatingPopup()"><i className="fa-solid fa-rotate-left"></i> Restore Floating Banner</button>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Floating Notification</h3>
                <span>Dynamic Pill</span>
              </div>
              <p>Sleek pill-shaped banner overlay with vibrant linear-gradients, mini logo badging, and customizable micro-actions.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt4')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt4')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerPopupAction()"><i className="fa-solid fa-sliders"></i> Action</button>
              </div>
            </div>
            <pre id="nt4" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-floating-popup"&gt;
        &lt;div className="popup-brand-badge"&gt;
          &lt;i className="fa-solid fa-wand-magic-sparkles"&gt;&lt;/i&gt;
          &lt;span&gt;AI Engine&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="popup-info"&gt;
          &lt;h5 className="popup-title"&gt;Neural Engine Active&lt;/h5&gt;
          &lt;p className="popup-desc"&gt;Model loaded. Generating ambient designs...&lt;/p&gt;
        &lt;/div&gt;
        &lt;div className="popup-actions"&gt;
          &lt;button className="popup-btn view"&gt;Configure&lt;/button&gt;
          &lt;button className="popup-close-btn"&gt;&lt;i className="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      /* CSS */
      .premium-floating-popup {
        background: rgba(18, 22, 38, 0.7);
        backdrop-filter: blur(14px);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 40px;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 16px 36px rgba(0,0,0,0.3);
      }</code></pre>
          </div>
      
          {/* ============ 5: GLASSMORPHISM NOTIFICATION UI ============ */}
          <div className="component-card" data-category="glass">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-glass-card" id="glassCardPreview">
                  <div className="glass-bg-glow"></div>
                  <div className="glass-header">
                    <div className="glass-icon-box">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <div className="glass-title-area">
                      <h4 className="glass-title">Cloud Synced</h4>
                      <span className="glass-subtitle">2.4 MB updated</span>
                    </div>
                  </div>
                  <p className="glass-content">Your local changes have been successfully merged with the upstream main repository.</p>
                  <div className="glass-footer">
                    <span className="glass-meta"><i className="fa-solid fa-clock"></i> 2 min ago</span>
                    <button className="glass-action-btn" id="glassSyncBtn" onclick="triggerGlassSync()">Sync Workspace</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Glassmorphism UI</h3>
                <span>Premium Glass</span>
              </div>
              <p>Stunning frosted-glass panel relying on backdrop filters, subtle gradient overlays, and dynamic glass reflection glows.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt5')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt5')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="pulseGlassGlow()"><i className="fa-solid fa-sun"></i> Glow Pulse</button>
              </div>
            </div>
            <pre id="nt5" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-glass-card"&gt;
        &lt;div className="glass-bg-glow"&gt;&lt;/div&gt;
        &lt;div className="glass-header"&gt;
          &lt;div className="glass-icon-box"&gt;
            &lt;i className="fa-solid fa-cloud-arrow-up"&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className="glass-title-area"&gt;
            &lt;h4 className="glass-title"&gt;Cloud Synced&lt;/h4&gt;
            &lt;span className="glass-subtitle"&gt;2.4 MB updated&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;p className="glass-content"&gt;Your local changes have been successfully merged...&lt;/p&gt;
      &lt;/div&gt;
      
      /* CSS */
      .premium-glass-card {
        position: relative;
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(22px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 28px;
        padding: 24px;
        overflow: hidden;
      }
      .glass-bg-glow {
        position: absolute;
        top: -40px; right: -40px;
        width: 120px; height: 120px;
        background: radial-gradient(circle, rgba(123,97,255,0.2) 0%, transparent 70%);
        border-radius: 50%;
      }</code></pre>
          </div>
      
          {/* ============ 6: STACKED NOTIFICATION CENTER ============ */}
          <div className="component-card" data-category="cards">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-stacked-center" id="stackedCenter">
                  <div className="stacked-header">
                    <span className="stacked-title">Notification Stack</span>
                    <span className="stacked-badge" id="stackedBadge">3 New</span>
                  </div>
                  
                  <div className="stacked-cards-container" id="stackedContainer">
                    {/* Card 1 (Top / Front) */}
                    <div className="stacked-card-item card-top-item" data-index="0">
                      <div className="item-avatar orange"><i className="fa-solid fa-fire"></i></div>
                      <div className="item-body">
                        <strong>High CPU Alert</strong>
                        <span>Instance-12 is running at 98% load capacity.</span>
                      </div>
                      <button className="stacked-dismiss" onclick="dismissStackedItem(0, event)">&times;</button>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="stacked-card-item card-middle-item" data-index="1">
                      <div className="item-avatar purple"><i className="fa-solid fa-code-merge"></i></div>
                      <div className="item-body">
                        <strong>PR Approved</strong>
                        <span>Pull request #324 has been merged into main.</span>
                      </div>
                      <button className="stacked-dismiss" onclick="dismissStackedItem(1, event)">&times;</button>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="stacked-card-item card-bottom-item" data-index="2">
                      <div className="item-avatar green"><i className="fa-solid fa-circle-check"></i></div>
                      <div className="item-body">
                        <strong>Deploy Successful</strong>
                        <span>Production environment updated, all health-checks passed.</span>
                      </div>
                      <button className="stacked-dismiss" onclick="dismissStackedItem(2, event)">&times;</button>
                    </div>
                  </div>
                  
                  <div className="stacked-footer">
                    <button className="stacked-action-btn primary" onclick="toggleNotificationStack()">Expand Stack</button>
                    <button className="stacked-action-btn secondary" onclick="resetStackedCenter()">Reset</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Stacked Center</h3>
                <span>Interactive Stacking</span>
              </div>
              <p>A space-saving pile of notifications that spreads dynamically into a detailed vertical list with staggered transitions on hover or click.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt6')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt6')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="toggleNotificationStack()"><i className="fa-solid fa-expand"></i> Toggle Expand</button>
              </div>
            </div>
            <pre id="nt6" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-stacked-center"&gt;
        &lt;div className="stacked-header"&gt;
          &lt;span className="stacked-title"&gt;Notification Stack&lt;/span&gt;
          &lt;span className="stacked-badge"&gt;3 New&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="stacked-cards-container"&gt;
          &lt;div className="stacked-card-item card-top-item"&gt;...&lt;/div&gt;
          &lt;div className="stacked-card-item card-middle-item"&gt;...&lt;/div&gt;
          &lt;div className="stacked-card-item card-bottom-item"&gt;...&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ============ 7: LIVE ACTIVITY FEED CARD ============ */}
          <div className="component-card" data-category="cards">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-activity-feed">
                  <div className="feed-header">
                    <span className="feed-title"><i className="fa-solid fa-wave-square pulse-icon"></i> System Activity</span>
                    <span className="feed-status">Real-time</span>
                  </div>
                  
                  <div className="feed-timeline">
                    <div className="timeline-line"></div>
                    
                    {/* Feed Item 1 */}
                    <div className="feed-item" onclick="triggerFeedAlert('Server Node Alpha online')">
                      <div className="feed-marker pulse-green"></div>
                      <div className="feed-avatar"><img src="https://i.pravatar.cc/100?img=33" alt="User" /></div>
                      <div className="feed-content">
                        <span className="feed-user">Marcus V.</span>
                        <span className="feed-text">launched server <strong>Node Alpha</strong> in us-east-1</span>
                        <span className="feed-time">Just now</span>
                      </div>
                    </div>
                    
                    {/* Feed Item 2 */}
                    <div className="feed-item" onclick="triggerFeedAlert('User avatar upload Completed')">
                      <div className="feed-marker pulse-orange"></div>
                      <div className="feed-avatar"><img src="https://i.pravatar.cc/100?img=12" alt="User" /></div>
                      <div className="feed-content">
                        <span className="feed-user">Sarah Connor</span>
                        <span className="feed-text">uploaded a new 2.5MB high-res profile avatar</span>
                        <span className="feed-time">10 min ago</span>
                      </div>
                    </div>
                    
                    {/* Feed Item 3 */}
                    <div className="feed-item" onclick="triggerFeedAlert('Database backup Successful')">
                      <div className="feed-marker pulse-purple"></div>
                      <div className="feed-avatar"><div className="avatar-fallback"><i className="fa-solid fa-database"></i></div></div>
                      <div className="feed-content">
                        <span className="feed-user">System Backup</span>
                        <span className="feed-text">successfully exported database logs to AWS S3 bucket</span>
                        <span className="feed-time">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Activity Feed</h3>
                <span>Dynamic Feed Timeline</span>
              </div>
              <p>A chronological, high-fidelity activity dashboard with glowing node pulses, active connecting timelines, and micro-hover transformations.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt7')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt7')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerToastDemo('info', 'Listening for live events...')"><i className="fa-solid fa-radio"></i> Live Listen</button>
              </div>
            </div>
            <pre id="nt7" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-activity-feed"&gt;
        &lt;div className="feed-timeline"&gt;
          &lt;div className="timeline-line"&gt;&lt;/div&gt;
          &lt;div className="feed-item"&gt;
            &lt;div className="feed-marker pulse-green"&gt;&lt;/div&gt;
            &lt;div className="feed-avatar"&gt;...&lt;/div&gt;
            &lt;div className="feed-content"&gt;...&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ============ 8: EXPANDABLE SYSTEM ALERT ============ */}
          <div className="component-card" data-category="alerts">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-system-alert danger" id="systemAlert">
                  <div className="alert-banner" onclick="toggleDiagnosticAlert()">
                    <div className="alert-icon-wrap">
                      <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div className="alert-brief">
                      <strong>CRITICAL: Database connection pool exhausted</strong>
                      <span>Timeout error occurred on thread pool #4592.</span>
                    </div>
                    <button className="alert-toggle-btn" id="alertChevron">
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>
                  
                  <div className="alert-collapsible-wrapper" id="alertCollapsible">
                    <div className="alert-details-content">
                      <div className="detail-section">
                        <h5>Error Diagnostics</h5>
                        <pre className="diagnostic-code"><code>java.sql.SQLTransientConnectionException: HikariPool-1
        at com.zaxxer.hikari.pool.HikariPool.getConnection(HikariPool.java:218)
        at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl
        at threadpool.executor.Worker.run(Worker.java:62)</code></pre>
                      </div>
                      <div className="detail-actions">
                        <button className="alert-action-btn copy" onclick="copyLogsToClipboard(event)"><i className="fa-solid fa-copy"></i> Copy Logs</button>
                        <button className="alert-action-btn resolve" onclick="triggerToastDemo('success', 'Connection pool cleared. Diagnostic monitoring active.')"><i className="fa-solid fa-wrench"></i> Auto-Resolve</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Expandable Alert</h3>
                <span>Interactive Crash Logs</span>
              </div>
              <p>A collapsing error banner showing simple warnings that slides open to reveal detailed raw telemetry log dumps and debugging utilities.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt8')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt8')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="toggleDiagnosticAlert()"><i className="fa-solid fa-arrow-down-up-lock"></i> Toggle Details</button>
              </div>
            </div>
            <pre id="nt8" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-system-alert danger"&gt;
        &lt;div className="alert-banner" onclick="toggleDiagnosticAlert()"&gt;
          &lt;div className="alert-icon-wrap"&gt;&lt;i className="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;div className="alert-brief"&gt;...&lt;/div&gt;
          &lt;button className="alert-toggle-btn"&gt;&lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;&lt;/button&gt;
        &lt;/div&gt;
        &lt;div className="alert-collapsible-wrapper"&gt;
          &lt;div className="alert-details-content"&gt;...&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ============ 9: PROGRESS UPLOAD NOTIFICATION ============ */}
          <div className="component-card" data-category="toasts">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-progress-upload" id="progressUploadCard">
                  <div className="upload-header">
                    <div className="upload-icon-box" id="uploadStatusIcon">
                      <i className="fa-solid fa-file-arrow-up float-anim"></i>
                    </div>
                    <div className="upload-title-area">
                      <strong id="uploadFileName">video_rendering_v2.mp4</strong>
                      <span id="uploadFileSize">84.2 MB · Uploading</span>
                    </div>
                    <button className="upload-close" onclick="cancelUploadSimulation()">&times;</button>
                  </div>
                  
                  <div className="upload-progress-section">
                    <div className="upload-progress-bar-track">
                      <div className="upload-progress-fill" id="uploadBarFill" style="width: 0%;"></div>
                    </div>
                    <div className="upload-progress-meta">
                      <span id="uploadPercentage">0%</span>
                      <span id="uploadEta">Est: 14s remaining</span>
                    </div>
                  </div>
                  
                  <div className="upload-actions">
                    <button className="upload-action-btn pause" id="uploadPauseBtn" onclick="toggleUploadPause()">Pause</button>
                    <button className="upload-action-btn cancel" onclick="cancelUploadSimulation()">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Progress Upload</h3>
                <span>Interactive Progress</span>
              </div>
              <p>A clean live-to-browser asset loading indicator featuring simulated background transfers, pausing, and status checks.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt9')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt9')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="startUploadSimulation()"><i className="fa-solid fa-play"></i> Run Upload</button>
              </div>
            </div>
            <pre id="nt9" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-progress-upload"&gt;
        &lt;div className="upload-header"&gt;
          &lt;div className="upload-icon-box"&gt;&lt;i className="fa-solid fa-file-arrow-up"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;div className="upload-title-area"&gt;...&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="upload-progress-section"&gt;
          &lt;div className="upload-progress-bar-track"&gt;
            &lt;div className="upload-progress-fill" style="width: 0%;"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* ============ 10: INTERACTIVE CHAT NOTIFICATION BUBBLE ============ */}
          <div className="component-card" data-category="glass">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width" style="min-height: 280px; display:flex; justify-content:center; align-items:center;">
                <div className="premium-chat-bubble-container">
                  {/* Floating Bubble Trigger */}
                  <div className="chat-bubble-trigger" id="chatBubbleTrigger" onclick="toggleChatBubbleWindow()">
                    <img src="https://i.pravatar.cc/100?img=47" alt="Support Avatar" className="bubble-avatar" />
                    <span className="chat-unread-badge" id="chatUnreadCount">2</span>
                    <div className="bubble-ripple"></div>
                  </div>
                  
                  {/* Chat Popover Window */}
                  <div className="chat-popover-window" id="chatPopoverWindow">
                    <div className="chat-window-header">
                      <div className="header-user-info">
                        <div className="header-avatar-status">
                          <img src="https://i.pravatar.cc/100?img=47" alt="Support" />
                          <span className="online-indicator"></span>
                        </div>
                        <div className="header-text">
                          <h4>Clara Jenkins</h4>
                          <span>Customer Success Lead</span>
                        </div>
                      </div>
                      <button className="chat-header-close" onclick="toggleChatBubbleWindow()">&times;</button>
                    </div>
                    
                    <div className="chat-messages-body" id="chatMessagesBody">
                      <div className="msg-bubble incoming">
                        Hi there! We saw you exploring the UI-Verse catalog. Let us know if you need custom mockups!
                        <span className="msg-time">2 min ago</span>
                      </div>
                      <div className="msg-bubble incoming">
                        What sort of dashboard design are you currently engineering?
                        <span className="msg-time">Just now</span>
                      </div>
                    </div>
                    
                    <div className="chat-input-footer">
                      <input type="text" id="chatBubbleInput" placeholder="Type a message..." onkeydown="handleChatBubbleInput(event)" />
                      <button className="chat-send-btn" onclick="sendChatBubbleMessage()"><i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Chat Bubble</h3>
                <span>Interactive Chat Window</span>
              </div>
              <p>A floating message bubble with real-time unread counts that transitions smoothly into a glassmorphic chat thread with keyboard message insertion.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt10')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt10')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="toggleChatBubbleWindow()"><i className="fa-solid fa-message"></i> Open Thread</button>
              </div>
            </div>
            <pre id="nt10" className="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
      &lt;div className="premium-chat-bubble-container"&gt;
        &lt;div className="chat-bubble-trigger" onclick="toggleChatBubbleWindow()"&gt;
          &lt;img src="avatar.png" className="bubble-avatar"&gt;
          &lt;span className="chat-unread-badge"&gt;2&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="chat-popover-window"&gt;
          &lt;div className="chat-window-header"&gt;...&lt;/div&gt;
          &lt;div className="chat-messages-body"&gt;...&lt;/div&gt;
          &lt;div className="chat-input-footer"&gt;...&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
        </section>
      
        {/* ============ 11-15: ADDED PREMIUM VARIANTS ============ */}
        <section className="notification-grid" aria-label="Additional Premium Variants">
      
          {/* 11: Sticky Persistent Banner */}
          <div className="component-card" data-category="banners">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="sticky-banner" id="stickyBannerPreview">
                  <div className="sb-left">
                    <div className="sb-icon"><i className="fa-solid fa-bell"></i></div>
                    <div>
                      <strong>Maintenance Window</strong>
                      <div className="muted">Planned maintenance at 02:00 UTC — 5m</div>
                    </div>
                  </div>
                  <div className="sb-actions">
                    <button className="sb-cta" onclick="triggerToastDemo('warning','Planned maintenance starting soon')">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Sticky Banner</h3>
                <span>Banners</span>
              </div>
              <p>A compact persistent banner ideal for global maintenance alerts and account notices.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt11')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt11')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerToastDemo('warning','Maintenance scheduled')"><i className="fa-solid fa-bell"></i> Trigger</button>
              </div>
            </div>
            <pre id="nt11" className="code-block" style="display:none;"><code>&lt;div className="sticky-banner"&gt;
        &lt;div className="sb-left"&gt;&lt;i className="fa-solid fa-bell"&gt;&lt;/i&gt; &lt;strong&gt;Maintenance Window&lt;/strong&gt;&lt;/div&gt;
        &lt;button className="sb-cta"&gt;View Details&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 12: Actionable Inline Snackbar */}
          <div className="component-card" data-category="snackbars">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="inline-snackbar" id="inlineSnackPreview">
                  <div className="snack-msg">Settings saved</div>
                  <button className="snack-action" onclick="triggerToastDemo('success','Settings applied')">Undo</button>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Inline Snackbar</h3>
                <span>Snackbars</span>
              </div>
              <p>Small inline confirmation with optional undo action for quick interactions.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt12')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt12')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerToastDemo('success','Settings saved')"><i className="fa-solid fa-check"></i> Simulate</button>
              </div>
            </div>
            <pre id="nt12" className="code-block" style="display:none;"><code>&lt;div className="inline-snackbar"&gt;
        &lt;div className="snack-msg"&gt;Settings saved&lt;/div&gt;
        &lt;button className="snack-action"&gt;Undo&lt;/button&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 13: Centered Critical Modal Alert */}
          <div className="component-card" data-category="modals">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width modal-alert-preview">
                <div className="critical-modal" id="criticalModalPreview">
                  <h4>Critical: Service Degraded</h4>
                  <p>Multiple regions reporting increased latency. Immediate investigation recommended.</p>
                  <div className="modal-actions">
                    <button className="modal-btn ack" onclick="triggerToastDemo('error','Acknowledged')">Acknowledge</button>
                    <button className="modal-btn dismiss" onclick="triggerToastDemo('info','Dismissed')">Dismiss</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Modal Alert</h3>
                <span>Critical</span>
              </div>
              <p>Centered modal-style alert for urgent system-wide notifications (preview only).</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt13')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt13')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerToastDemo('error','Modal Acknowledge')"><i className="fa-solid fa-exclamation-triangle"></i> Acknowledge</button>
              </div>
            </div>
            <pre id="nt13" className="code-block" style="display:none;"><code>&lt;div className="critical-modal"&gt;
        &lt;h4&gt;Critical: Service Degraded&lt;/h4&gt;
        &lt;p&gt;Multiple regions reporting increased latency.&lt;/p&gt;
        &lt;div className="modal-actions"&gt;...&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 14: Progress Toast List */}
          <div className="component-card" data-category="progress">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="progress-toast-list" id="progressToastPreview">
                  <div className="progress-toast-item">
                    <div className="progress-thumb"><i className="fa-solid fa-upload"></i></div>
                    <div className="progress-line"><div className="progress-fill" style="width:38%"></div></div>
                  </div>
                  <div className="progress-toast-item">
                    <div className="progress-thumb"><i className="fa-solid fa-database"></i></div>
                    <div className="progress-line"><div className="progress-fill" style="width:62%"></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Progress List</h3>
                <span>Multi-Progress</span>
              </div>
              <p>A vertical list of short progress toasts for concurrent transfers and background tasks.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt14')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt14')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="simulateProgressList()"><i className="fa-solid fa-play"></i> Simulate</button>
              </div>
            </div>
            <pre id="nt14" className="code-block" style="display:none;"><code>&lt;div className="progress-toast-item"&gt;&lt;div className="progress-thumb"&gt;&lt;/div&gt;&lt;div className="progress-line"&gt;&lt;div className="progress-fill" style="width:40%"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
          </div>
      
          {/* 15: Avatar Notification Cluster */}
          <div className="component-card" data-category="avatars">
            <div className="card-preview dark-preview">
              <div className="card-interactive-area full-width">
                <div className="avatar-cluster" id="avatarClusterPreview">
                  <div className="avatar-stack">
                    <img src="https://i.pravatar.cc/100?img=13" alt="A" />
                    <img src="https://i.pravatar.cc/100?img=27" alt="B" />
                    <img src="https://i.pravatar.cc/100?img=51" alt="C" />
                  </div>
                  <div className="avatar-count">+12</div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Avatar Cluster</h3>
                <span>Groups</span>
              </div>
              <p>Compact representation of multiple participants or recipients with stacked avatars and overflow counts.</p>
              <div className="card-actions">
                <button onclick="toggleCode('nt15')"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('nt15')"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="triggerToastDemo('info','3 participants added')"><i className="fa-solid fa-user-plus"></i> Notify</button>
              </div>
            </div>
            <pre id="nt15" className="code-block" style="display:none;"><code>&lt;div className="avatar-cluster"&gt;&lt;div className="avatar-stack"&gt;...&lt;/div&gt;&lt;div className="avatar-count"&gt;+12&lt;/div&gt;&lt;/div&gt;</code></pre>
          </div>
      
        </section>
      
      </div>
      
      {/* LIVE TOAST CONTAINER FOR CORNER BANNERS */}
      <div className="live-toast-container" id="liveToastContainer"></div>
      
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
      /* ==========================================
         INTERACTIVE SCRIPTING LOGIC
         ========================================== */
      
      // 1. Filter Tab Filtering
      const filterTabs = document.querySelectorAll('.filter-tab');
      const cards = document.querySelectorAll('.component-card');
      
      filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          filterTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
      
          const filterVal = tab.getAttribute('data-filter');
      
          cards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterVal === 'all' || category === filterVal || (filterVal === 'glass' && category === 'glass')) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
      
      // 2. Search Box Filter
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        cards.forEach(card => {
          const text = card.innerText.toLowerCase();
          if (text.includes(query)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
      
      // 3. View Code Drawer Toggle
      function toggleCode(id) {
        const el = document.getElementById(id);
        if (el) {
          el.style.display = el.style.display === 'none' ? 'block' : 'none';
        }
      }
      
      // 4. Copy Code Functionality
      function copyCode(id) {
        const el = document.getElementById(id);
        if (!el) return;
      
        // Extract clean text
        const cleanCode = el.textContent;
      
        navigator.clipboard.writeText(cleanCode).then(() => {
          // Show visual toast feedback
          triggerToastDemo('success', 'Code copied to clipboard!');
        }).catch(() => {
          alert('Failed to copy to clipboard.');
        });
      }
      
      // 5. Success Alert Reset / Dismiss
      function dismissAlertPreview() {
        const banner = document.getElementById('successAlertPreview');
        const resetBtn = document.getElementById('alertResetBtn');
        if (banner) {
          banner.style.opacity = '0';
          banner.style.transform = 'scale(0.95)';
          setTimeout(() => {
            banner.style.display = 'none';
            if (resetBtn) resetBtn.style.display = 'inline-flex';
          }, 300);
        }
      }
      
      function resetAlertPreview() {
        const banner = document.getElementById('successAlertPreview');
        const resetBtn = document.getElementById('alertResetBtn');
        if (banner) {
          banner.style.display = 'flex';
          setTimeout(() => {
            banner.style.opacity = '1';
            banner.style.transform = 'scale(1)';
            if (resetBtn) resetBtn.style.display = 'none';
          }, 50);
        }
      }
      
      function triggerSuccessPulse() {
        const banner = document.getElementById('successAlertPreview');
        if (banner) {
          banner.style.transform = 'scale(1.05)';
          banner.style.boxShadow = '0 0 35px rgba(16,185,129,0.3)';
          setTimeout(() => {
            banner.style.transform = 'scale(1)';
            banner.style.boxShadow = '0 0 30px rgba(16,185,129,0.05)';
          }, 300);
        }
      }
      
      // 6. Toast resets and triggers
      function resetToastPreview(btn) {
        const toast = btn.parentElement;
        toast.style.opacity = '0.3';
        setTimeout(() => {
          toast.style.opacity = '1';
          // Restart animation by re-rendering progress bar
          const pBar = toast.querySelector('.toast-progress-bar');
          if (pBar) {
            pBar.style.animation = 'none';
            pBar.offsetHeight; /* trigger reflow */
            pBar.style.animation = null;
          }
        }, 1000);
      }
      
      // Trigger Live Corner Toasts
      function triggerToastDemo(type, customText) {
        const container = document.getElementById('liveToastContainer');
        if (!container) return;
      
        const toast = document.createElement('div');
        toast.className = `premium-toast live-toast ${type}`;
      
        let icon = 'fa-circle-check';
        let title = 'Notification Sent';
        let desc = customText || 'Operation executed successfully with 0 warnings.';
      
        if (type === 'warning') {
          icon = 'fa-triangle-exclamation';
          title = 'System Warning';
          desc = customText || 'Storage limit is exceeding active parameters.';
        } else if (type === 'error') {
          icon = 'fa-circle-xmark';
          title = 'Error Occurred';
          desc = customText || 'Failed to update changes to remote source.';
        } else if (type === 'success' && customText) {
          title = 'Success';
        }
      
        toast.innerHTML = `
          <div className="toast-icon">
            <i className="fa-solid ${icon}"></i>
          </div>
          <div className="toast-content">
            <h4 className="toast-title">${title}</h4>
            <p className="toast-desc">${desc}</p>
          </div>
          <button className="toast-close-btn" onclick="this.parentElement.remove()"><i className="fa-solid fa-xmark"></i></button>
          <div className="toast-progress-bar"></div>
        `;
      
        container.appendChild(toast);
      
        // Auto-remove toast after 4s
        setTimeout(() => {
          toast.style.animation = 'toastSlideOut 0.4s cubic-bezier(0.175,0.885,0.32,1.275) forwards';
          setTimeout(() => {
            toast.remove();
          }, 400);
        }, 4000);
      }
      
      function clearLiveToasts() {
        const container = document.getElementById('liveToastContainer');
        if (container) {
          container.innerHTML = '';
        }
      }
      
      // 7. Message Notification Reply logic
      function toggleCardReply() {
        const box = document.getElementById('cardReplyBox');
        if (box) {
          box.style.display = box.style.display === 'none' ? 'flex' : 'none';
          if (box.style.display === 'flex') {
            document.getElementById('cardReplyInput').focus();
          }
        }
      }
      
      function sendCardReply() {
        const input = document.getElementById('cardReplyInput');
        const box = document.getElementById('cardReplyBox');
        if (input && input.value.trim() !== '') {
          const text = input.value;
          input.value = '';
          if (box) box.style.display = 'none';
          triggerToastDemo('success', `Replied: "${text}"`);
        }
      }
      
      function dismissMsgCard() {
        const card = document.getElementById('messageCardPreview');
        const restoreBtn = document.getElementById('msgCardResetBtn');
        if (card) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px) scale(0.98)';
          setTimeout(() => {
            card.style.display = 'none';
            if (restoreBtn) restoreBtn.style.display = 'inline-flex';
          }, 300);
        }
      }
      
      function resetMsgCard() {
        const card = document.getElementById('messageCardPreview');
        const restoreBtn = document.getElementById('msgCardResetBtn');
        if (card) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            if (restoreBtn) restoreBtn.style.display = 'none';
          }, 50);
        }
      }
      
      function simulateBlinkStatus() {
        const dot = document.querySelector('.presence-dot');
        if (dot) {
          if (dot.classList.contains('online')) {
            dot.classList.remove('online');
            dot.classList.add('offline');
            triggerToastDemo('warning', 'Sophia Martinez went offline.');
          } else {
            dot.classList.remove('offline');
            dot.classList.add('online');
            triggerToastDemo('success', 'Sophia Martinez is now online!');
          }
        }
      }
      
      // 8. Floating Popup Logic
      function dismissFloatingPopup() {
        const popup = document.getElementById('floatingPopupPreview');
        const restoreBtn = document.getElementById('popupRestoreBtn');
        if (popup) {
          popup.style.opacity = '0';
          popup.style.transform = 'scale(0.9) translateY(-10px)';
          setTimeout(() => {
            popup.style.display = 'none';
            if (restoreBtn) restoreBtn.style.display = 'inline-flex';
          }, 300);
        }
      }
      
      function resetFloatingPopup() {
        const popup = document.getElementById('floatingPopupPreview');
        const restoreBtn = document.getElementById('popupRestoreBtn');
        if (popup) {
          popup.style.display = 'flex';
          setTimeout(() => {
            popup.style.opacity = '1';
            popup.style.transform = 'scale(1) translateY(0)';
            if (restoreBtn) restoreBtn.style.display = 'none';
          }, 50);
        }
      }
      
      function triggerPopupAction() {
        triggerToastDemo('success', 'Neural model configurations updated.');
      }
      
      function showPopupConf() {
        triggerToastDemo('success', 'Configure dashboard parameters initialized.');
      }
      
      // 9. Glassmorphism UI actions
      function triggerGlassSync() {
        const btn = document.getElementById('glassSyncBtn');
        if (btn) {
          btn.innerHTML = '<i className="fa-solid fa-spinner fa-spin"></i> Syncing...';
          btn.disabled = true;
          setTimeout(() => {
            btn.innerHTML = '<i className="fa-solid fa-check"></i> Synced!';
            triggerToastDemo('success', 'Workspace synchronized with remote master.');
            setTimeout(() => {
              btn.innerHTML = 'Sync Workspace';
              btn.disabled = false;
            }, 2000);
          }, 1800);
        }
      }
      
      // Simulation for progress list
      function simulateProgressList(){
        const fills = document.querySelectorAll('.progress-fill');
        fills.forEach((f, i) => {
          const target = [38,62,18,84][i] || Math.floor(Math.random()*80)+10;
          f.style.width = target + '%';
        });
        triggerToastDemo('info','Progress simulation started');
      }
      
      function pulseGlassGlow() {
        const card = document.getElementById('glassCardPreview');
        const glow = card.querySelector('.glass-bg-glow');
        if (glow) {
          glow.style.transform = 'scale(2.2)';
          glow.style.background = 'radial-gradient(circle, rgba(123,97,255,0.4) 0%, transparent 70%)';
          setTimeout(() => {
            glow.style.transform = 'scale(1)';
            glow.style.background = 'radial-gradient(circle, rgba(123,97,255,0.2) 0%, transparent 70%)';
          }, 500);
        }
      }
      
      // 10. Stacked Notification Center Logic
      let stackedDismissedCount = 0;
      function toggleNotificationStack() {
        const center = document.getElementById('stackedCenter');
        if (center) {
          center.classList.toggle('expanded');
          const isExpanded = center.classList.contains('expanded');
          const btn = center.querySelector('.stacked-action-btn.primary');
          if (btn) btn.innerText = isExpanded ? 'Collapse Stack' : 'Expand Stack';
          triggerToastDemo('info', isExpanded ? 'Notification stack expanded.' : 'Notification stack collapsed.');
        }
      }
      
      function dismissStackedItem(index, event) {
        if (event) event.stopPropagation();
        const items = document.querySelectorAll('#stackedContainer .stacked-card-item');
        items.forEach(item => {
          if (parseInt(item.getAttribute('data-index')) === index) {
            item.style.opacity = '0';
            item.style.transform = 'translateX(100px)';
            setTimeout(() => {
              item.style.display = 'none';
              stackedDismissedCount++;
              const badge = document.getElementById('stackedBadge');
              if (badge) {
                const remaining = Math.max(0, 3 - stackedDismissedCount);
                badge.innerText = remaining > 0 ? `${remaining} New` : 'Cleared';
                if (remaining === 0) {
                  badge.style.background = 'rgba(255, 255, 255, 0.1)';
                  badge.style.color = '#8a9bc0';
                }
              }
              triggerToastDemo('success', 'Stacked notification dismissed.');
            }, 300);
          }
        });
      }
      
      function resetStackedCenter() {
        stackedDismissedCount = 0;
        const badge = document.getElementById('stackedBadge');
        if (badge) {
          badge.innerText = '3 New';
          badge.style.background = '';
          badge.style.color = '';
        }
        const center = document.getElementById('stackedCenter');
        if (center) center.classList.remove('expanded');
        const primaryBtn = center ? center.querySelector('.stacked-action-btn.primary') : null;
        if (primaryBtn) primaryBtn.innerText = 'Expand Stack';
        
        const items = document.querySelectorAll('#stackedContainer .stacked-card-item');
        items.forEach(item => {
          item.style.display = '';
          item.style.opacity = '';
          item.style.transform = '';
        });
        triggerToastDemo('success', 'Notification stack reset.');
      }
      
      // 11. Live Activity Feed Alerts
      function triggerFeedAlert(activity) {
        triggerToastDemo('info', `Feed Event: ${activity}`);
      }
      
      // 12. Expandable System Alert Diagnostics
      function toggleDiagnosticAlert() {
        const alertBox = document.getElementById('systemAlert');
        const chevron = document.getElementById('alertChevron');
        if (alertBox) {
          alertBox.classList.toggle('expanded');
          const isExpanded = alertBox.classList.contains('expanded');
          if (chevron) {
            chevron.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0)';
          }
          triggerToastDemo('info', isExpanded ? 'Diagnostic crash log expanded.' : 'Diagnostic logs hidden.');
        }
      }
      
      function copyLogsToClipboard(event) {
        if (event) event.stopPropagation();
        const codeBlock = document.querySelector('.diagnostic-code code');
        if (codeBlock) {
          navigator.clipboard.writeText(codeBlock.innerText).then(() => {
            triggerToastDemo('success', 'Diagnostic stack trace copied!');
          });
        }
      }
      
      // 13. Progress Upload Simulation Logic
      let uploadInterval = null;
      let uploadPercent = 0;
      let uploadIsPaused = false;
      function startUploadSimulation() {
        if (uploadInterval) clearInterval(uploadInterval);
        uploadPercent = 0;
        uploadIsPaused = false;
        
        const fill = document.getElementById('uploadBarFill');
        const percentageText = document.getElementById('uploadPercentage');
        const etaText = document.getElementById('uploadEta');
        const pauseBtn = document.getElementById('uploadPauseBtn');
        const statusIcon = document.getElementById('uploadStatusIcon');
        
        if (pauseBtn) {
          pauseBtn.innerText = 'Pause';
          pauseBtn.classList.remove('resume');
        }
        
        if (statusIcon) {
          statusIcon.innerHTML = '<i className="fa-solid fa-spinner fa-spin orange"></i>';
        }
        
        triggerToastDemo('info', 'File upload initialized...');
        
        uploadInterval = setInterval(() => {
          if (uploadIsPaused) return;
          
          uploadPercent += Math.floor(Math.random() * 8) + 4;
          if (uploadPercent >= 100) {
            uploadPercent = 100;
            clearInterval(uploadInterval);
            uploadInterval = null;
            if (statusIcon) {
              statusIcon.innerHTML = '<i className="fa-solid fa-circle-check green"></i>';
            }
            triggerToastDemo('success', 'Asset uploaded successfully!');
          }
          
          if (fill) fill.style.width = `${uploadPercent}%`;
          if (percentageText) percentageText.innerText = `${uploadPercent}%`;
          if (etaText) {
            const remainingSeconds = Math.max(0, Math.ceil((100 - uploadPercent) * 0.15));
            etaText.innerText = uploadPercent === 100 ? 'Completed' : `Est: ${remainingSeconds}s remaining`;
          }
        }, 450);
      }
      
      function toggleUploadPause() {
        const pauseBtn = document.getElementById('uploadPauseBtn');
        if (!uploadInterval && uploadPercent === 0) {
          startUploadSimulation();
          return;
        }
        uploadIsPaused = !uploadIsPaused;
        if (pauseBtn) {
          pauseBtn.innerText = uploadIsPaused ? 'Resume' : 'Pause';
          if (uploadIsPaused) {
            pauseBtn.classList.add('resume');
            triggerToastDemo('warning', 'Upload paused.');
          } else {
            pauseBtn.classList.remove('resume');
            triggerToastDemo('info', 'Upload resumed.');
          }
        }
      }
      
      function cancelUploadSimulation() {
        if (uploadInterval) {
          clearInterval(uploadInterval);
          uploadInterval = null;
        }
        uploadPercent = 0;
        uploadIsPaused = false;
        
        const fill = document.getElementById('uploadBarFill');
        const percentageText = document.getElementById('uploadPercentage');
        const etaText = document.getElementById('uploadEta');
        const statusIcon = document.getElementById('uploadStatusIcon');
        const pauseBtn = document.getElementById('uploadPauseBtn');
        
        if (fill) fill.style.width = '0%';
        if (percentageText) percentageText.innerText = '0%';
        if (etaText) etaText.innerText = 'Est: --s remaining';
        if (pauseBtn) {
          pauseBtn.innerText = 'Pause';
          pauseBtn.classList.remove('resume');
        }
        if (statusIcon) {
          statusIcon.innerHTML = '<i className="fa-solid fa-file-arrow-up float-anim"></i>';
        }
        triggerToastDemo('error', 'Upload cancelled.');
      }
      
      // 14. Interactive Chat Bubble Logic
      function toggleChatBubbleWindow() {
        const win = document.getElementById('chatPopoverWindow');
        const badge = document.getElementById('chatUnreadCount');
        if (win) {
          win.classList.toggle('open');
          const isOpen = win.classList.contains('open');
          if (isOpen && badge) {
            badge.style.display = 'none';
          }
          triggerToastDemo('info', isOpen ? 'Chat thread initialized.' : 'Chat thread closed.');
        }
      }
      
      function sendChatBubbleMessage() {
        const input = document.getElementById('chatBubbleInput');
        const body = document.getElementById('chatMessagesBody');
        if (!input || !input.value.trim() || !body) return;
        
        const text = input.value.trim();
        input.value = '';
        
        // Append user message
        const userMsg = document.createElement('div');
        userMsg.className = 'msg-bubble outgoing';
        userMsg.innerHTML = `${text}<span className="msg-time">Just now</span>`;
        body.appendChild(userMsg);
        body.scrollTop = body.scrollHeight;
        
        // Simulate Support Typing Response
        setTimeout(() => {
          const typingMsg = document.createElement('div');
          typingMsg.className = 'msg-bubble incoming typing-indicator';
          typingMsg.id = 'claraTyping';
          typingMsg.innerHTML = '<div className="typing-dot"></div><div className="typing-dot"></div><div className="typing-dot"></div>';
          body.appendChild(typingMsg);
          body.scrollTop = body.scrollHeight;
          
          setTimeout(() => {
            const liveTyping = document.getElementById('claraTyping');
            if (liveTyping) liveTyping.remove();
            
            const ClaraReplies = [
              "That sounds incredible! Pure HTML and CSS keeps the rendering super-fast.",
              "Excellent selection! Our team is focused on maximizing premium aesthetics.",
              "That's fantastic. Let me know if you would like me to compile a custom zip showcase for your team!",
              "Stunning decision. Don't forget to mark our repository as starred on GitHub!"
            ];
            const randomReply = ClaraReplies[Math.floor(Math.random() * ClaraReplies.length)];
            
            const supportMsg = document.createElement('div');
            supportMsg.className = 'msg-bubble incoming';
            supportMsg.innerHTML = `${randomReply}<span className="msg-time">Just now</span>`;
            body.appendChild(supportMsg);
            body.scrollTop = body.scrollHeight;
            
            // Corner Toast trigger
            triggerToastDemo('success', 'New reply received from Clara Jenkins.');
          }, 1500);
        }, 800);
      }
      
      function handleChatBubbleInput(event) {
        if (event.key === 'Enter') {
          sendChatBubbleMessage();
        }
      }
      
      // Test All Trigger Button
      function triggerAllShowcase() {
        triggerToastDemo('success', 'Showroom Live Testing Initialized.');
        setTimeout(() => {
          triggerToastDemo('warning', 'Live Toast components operational.');
        }, 600);
        setTimeout(() => {
          triggerToastDemo('error', 'All modules verified successfully.');
        }, 1200);
        
        // Trigger simulation actions for premium components
        setTimeout(() => {
          toggleNotificationStack();
        }, 1600);
        setTimeout(() => {
          startUploadSimulation();
        }, 2500);
      }
      </script>
    </>
  );
}
