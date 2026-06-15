import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Notifications V2',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Premium notification and alert components

### Info & Metadata
- **Category**: Alerts
- **Tags**: <code>notifications</code>, <code>alerts</code>, <code>bells</code>, <code>messages</code>, <code>premium</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html

  <a class="skip-link" href="#main-content">Skip to main content</a>


<div class="main-content">

  <!-- TOPBAR -->
  <header class="topbar">
    <div class="search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search notification components..." id="searchInput" data-a11y-remediation="label-needed">
    </div>
    <div class="topbar-actions">
      <button class="add-btn" onclick="triggerAllShowcase()" data-a11y-remediation="button-label-needed"><i class="fa-solid fa-play"></i> Test All</button>
      <button class="collection-btn" onclick="clearLiveToasts()"><i class="fa-solid fa-trash"></i> Clear Toasts</button>
      <button class="theme-btn"><i class="fa-solid fa-moon"></i></button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-left">
      <div class="breadcrumb">Home &gt; Notifications Premium</div>
      <h1>Notification UI</h1>
      <p>
        Modern, responsive notification elements built with clean HTML, CSS, and Vanilla JavaScript.
        Features premium glassmorphic blur effects, glowing active states, and custom micro-animations.
      </p>
      <div class="hero-tags">
        <span><i class="fa-solid fa-layer-group"></i> 5 Modern Elements</span>
        <span><i class="fa-solid fa-wand-magic-sparkles"></i> Glass & Glows</span>
        <span><i class="fa-solid fa-mobile-screen"></i> 100% Responsive</span>
      </div>
    </div>
    <div class="hero-preview">
      <div class="hero-notification-demo">
        <div class="demo-bubble active">
          <span class="demo-dot"></span>
          <i class="fa-solid fa-bell"></i>
          <span>Live Preview Active</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= SIDEBAR ================= -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <span class="brand-icon">⬡</span>
      <span class="brand-text">UIverse</span>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
        <li><a href="button.html"><i class="fa-solid fa-hand-pointer"></i><span>Buttons</span></a></li>
        <li><a href="dropdown-components.html"><i class="fa-solid fa-caret-down"></i><span>Dropdowns</span></a></li>
        <li><a href="profile-components.html"><i class="fa-solid fa-user"></i><span>Profiles</span></a></li>
        <li><a href="navbar.html"><i class="fa-solid fa-bars"></i><span>Navbar</span></a></li>
        <li><a href="cards.html"><i class="fa-solid fa-table-cells-large"></i><span>Cards</span></a></li>
        <li><a href="flipcards.html"><i class="fa-solid fa-clone"></i><span>3D Cards</span></a></li>
        <li><a href="inputs.html"><i class="fa-solid fa-keyboard"></i><span>Inputs</span></a></li>
        <li><a href="forms.html"><i class="fa-brands fa-wpforms"></i><span>Forms</span></a></li>
        <li><a href="badges.html"><i class="fa-solid fa-award"></i><span>Badges</span></a></li>
        <li><a href="blog.html"><i class="fa-solid fa-blog"></i><span>Blog</span></a></li>
        <li><a href="article.html"><i class="fa-solid fa-newspaper"></i><span>Articles</span></a></li>
        <li><a href="alerts.html"><i class="fa-solid fa-triangle-exclamation"></i><span>Alerts</span></a></li>
        <li><a href="color.html"><i class="fa-solid fa-palette"></i><span>Colors</span></a></li>
        <li><a href="charts.html"><i class="fa-solid fa-chart-pie"></i><span>Charts</span></a></li>
        <li><a href="dashboard.html"><i class="fa-solid fa-gauge-high"></i><span>Dashboard</span></a></li>
        <li><a href="div.html"><i class="fa-solid fa-square"></i><span>DIV</span></a></li>
        <li><a href="widgets.html"><i class="fa-solid fa-layer-group"></i><span>Widgets</span></a></li>
        <li><a href="search.html"><i class="fa-solid fa-magnifying-glass"></i><span>Search Bars</span></a></li>
        <li><a href="hover.html"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Hover Effects</span></a></li>
        <li><a href="error.html"><i class="fa-solid fa-circle-exclamation"></i><span>Error Pages</span></a></li>
        <li><a href="ecommerce.html"><i class="fa-solid fa-cart-shopping"></i><span>E-commerce</span></a></li>
        <li><a href="files.html"><i class="fa-solid fa-file-arrow-up"></i><span>Drag & Drop</span></a></li>
        <li><a href="hero.html"><i class="fa-solid fa-star"></i><span>Hero Sections</span></a></li>
        <li><a href="loaders.html"><i class="fa-solid fa-spinner"></i><span>Loaders</span></a></li>
        <li><a href="timeline.html"><i class="fa-solid fa-clock-rotate-left"></i><span>Timeline</span></a></li>
        <li><a href="map.html"><i class="fa-solid fa-map-location-dot"></i><span>Maps</span></a></li>
        <li><a href="menu.html"><i class="fa-solid fa-bars-staggered"></i><span>Menu</span></a></li>
        <li><a href="pricing.html"><i class="fa-solid fa-tags"></i><span>Pricing</span></a></li>
        <li>
          <a href="subscription.html">
            <i class="fa-solid fa-credit-card"></i>
            <span>Subscription</span>
          </a>
        </li>
        <li>
          <a href="auth.html">
            <i class="fa-solid fa-user-shield"></i>
            <span>Authentication</span>
          </a>
        </li>
          <li>
            <a href="recovery.html">
              <i class="fa-solid fa-key" aria-hidden="true"></i>
              <span>Password Recovery</span>
            </a>
          </li>
        <li><a href="section.html"><i class="fa-solid fa-rectangle-list"></i><span>Section</span></a></li>
        <li><a href="span.html"><i class="fa-solid fa-code"></i><span>Span</span></a></li>
        <li><a href="table.html"><i class="fa-solid fa-table"></i><span>Table</span></a></li>
        <li><a href="tabs.html"><i class="fa-solid fa-table-columns"></i><span>Tabs</span></a></li>
        <li><a href="terms.html"><i class="fa-solid fa-file-contract"></i><span>Terms</span></a></li>
        <li><a href="testimonials.html"><i class="fa-solid fa-comments"></i><span>Testimonials</span></a></li>
        <li><a href="toggles.html"><i class="fa-solid fa-toggle-on"></i><span>Toggle</span></a></li>
        <li><a href="radiobutton.html"><i class="fa-solid fa-circle-dot"></i><span>Radio Buttons</span></a></li>
        <li><a href="checkbox.html"><i class="fa-solid fa-square-check"></i><span>Checkboxes</span></a></li>
        <li class="active"><a href="notifications-premium.html"><i class="fa-solid fa-bell"></i><span>Notifications V2</span></a></li>
        <li><a href="step-indicators.html"><i class="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
        <li><a href="progress-premium.html"><i class="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
        <li><a href="ratings-premium.html"><i class="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
        <li><a href="filters-premium.html"><i class="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
        <li><a href="about.html"><i class="fa-solid fa-circle-info"></i><span>About</span></a></li>
        <li><a href="documentation.html"><i class="fa-solid fa-book"></i><span>Documentation</span></a></li>
        <li><a href="faq.html"><i class="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
        <li><a href="contact.html"><i class="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
      </ul>
    </nav>
    <div class="sidebar-footer">
      <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="#" title="Twitter"><i class="fab fa-x-twitter"></i></a>
    </div>
  </aside>

  <!-- FILTERS -->
  <div class="filters">
    <button class="filter-tab active" data-filter="all">All</button>
    <button class="filter-tab" data-filter="toasts">Toasts</button>
    <button class="filter-tab" data-filter="alerts">Alerts</button>
    <button class="filter-tab" data-filter="cards">Cards</button>
    <button class="filter-tab" data-filter="glass">Glass</button>
  </div>

  <!-- COMPONENT SHOWCASE GRID -->
  <section class="notification-grid">

    <!-- ============ 1: TOAST NOTIFICATION ============ -->
    <div class="component-card" data-category="toasts">
      <div class="card-preview">
        <div class="card-interactive-area">
          <div class="toast-preview-wrapper">
            <div class="premium-toast warning">
              <div class="toast-icon">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div class="toast-content">
                <h4 class="toast-title">Backup Required</h4>
                <p class="toast-desc">Your database was last backed up 7 days ago.</p>
              </div>
              <button class="toast-close-btn" onclick="resetToastPreview(this)"><i class="fa-solid fa-xmark"></i></button>
              <div class="toast-progress-bar"></div>
            </div>
          </div>
          <button class="trigger-live-btn orange" onclick="triggerToastDemo('warning')"><i class="fa-solid fa-bolt"></i> Trigger Live Toast</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Toast Notification</h3>
          <span>Interactive</span>
        </div>
        <p>Premium dark toast banner featuring high-contrast colored warning indicator, progress timer, and exit scale movements.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt1')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt1')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('success')"><i class="fa-solid fa-circle-check"></i> Success</button>
        </div>
      </div>
      <pre id="nt1" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-toast warning"&gt;
  &lt;div class="toast-icon"&gt;
    &lt;i class="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="toast-content"&gt;
    &lt;h4 class="toast-title"&gt;Backup Required&lt;/h4&gt;
    &lt;p class="toast-desc"&gt;Your database was last backed up 7 days ago.&lt;/p&gt;
  &lt;/div&gt;
  &lt;button class="toast-close-btn"&gt;&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
  &lt;div class="toast-progress-bar"&gt;&lt;/div&gt;
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

    <!-- ============ 2: SUCCESS ALERT NOTIFICATION ============ -->
    <div class="component-card" data-category="alerts">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-alert-success" id="successAlertPreview">
            <div class="alert-glow"></div>
            <div class="alert-icon-wrapper">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="alert-text">
              <h4 class="alert-title">Payment Successful</h4>
              <p class="alert-desc">Your premium upgrade is active! Invoice #2061 sent to your email.</p>
            </div>
            <button class="alert-close" onclick="dismissAlertPreview()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <button class="trigger-live-btn green" id="alertResetBtn" style="display: none;" onclick="resetAlertPreview()"><i class="fa-solid fa-rotate-left"></i> Reset Alert Banner</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Success Alert Notification</h3>
          <span>Premium Glow</span>
        </div>
        <p>Vibrant inline banner using a translucent matrix styling, bouncing tick animation, and glowing outer drop shadows.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt2')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt2')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerSuccessPulse()"><i class="fa-solid fa-heartbeat"></i> Pulse</button>
        </div>
      </div>
      <pre id="nt2" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-alert-success"&gt;
  &lt;div class="alert-glow"&gt;&lt;/div&gt;
  &lt;div class="alert-icon-wrapper"&gt;
    &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="alert-text"&gt;
    &lt;h4 class="alert-title"&gt;Payment Successful&lt;/h4&gt;
    &lt;p class="alert-desc"&gt;Your premium upgrade is active! Invoice #2061 sent.&lt;/p&gt;
  &lt;/div&gt;
  &lt;button class="alert-close"&gt;&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
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

    <!-- ============ 3: MESSAGE NOTIFICATION CARD ============ -->
    <div class="component-card" data-category="cards">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-msg-card" id="messageCardPreview">
            <div class="msg-header">
              <div class="msg-avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="avatar" class="msg-avatar">
                <span class="presence-dot online"></span>
              </div>
              <div class="msg-user-details">
                <span class="msg-username">Sophia Martinez</span>
                <span class="msg-time">Just now</span>
              </div>
              <div class="msg-badge">New Mention</div>
            </div>
            <div class="msg-body">
              <p class="msg-text">Hey! I reviewed the design layout for UI-Verse. It looks extremely premium! Let's schedule a call to finalize the glassmorphism parameters. ✨</p>
            </div>
            <div class="msg-actions">
              <button class="msg-btn reply-trigger" onclick="toggleCardReply()"><i class="fa-solid fa-reply"></i> Reply</button>
              <button class="msg-btn dismiss-btn" onclick="dismissMsgCard()"><i class="fa-solid fa-check"></i> Dismiss</button>
            </div>
            <div class="msg-reply-box" id="cardReplyBox" style="display: none;">
              <input type="text" placeholder="Type reply here..." class="msg-reply-input" id="cardReplyInput">
              <button class="msg-send-btn" onclick="sendCardReply()"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
          <button class="trigger-live-btn purple" id="msgCardResetBtn" style="display: none;" onclick="resetMsgCard()"><i class="fa-solid fa-rotate-left"></i> Restore Chat Card</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Message Notification Card</h3>
          <span>Interactive</span>
        </div>
        <p>Premium user avatar layout featuring real-time blinking online status, and sliding text reply input drawers.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt3')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt3')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="simulateBlinkStatus()"><i class="fa-solid fa-wifi"></i> Status Toggle</button>
        </div>
      </div>
      <pre id="nt3" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-msg-card"&gt;
  &lt;div class="msg-header"&gt;
    &lt;div class="msg-avatar-wrapper"&gt;
      &lt;img src="avatar.jpg" class="msg-avatar"&gt;
      &lt;span class="presence-dot online"&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="msg-user-details"&gt;
      &lt;span class="msg-username"&gt;Sophia Martinez&lt;/span&gt;
      &lt;span class="msg-time"&gt;Just now&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;p class="msg-text"&gt;Hey! I reviewed the design layout for UI-Verse...&lt;/p&gt;
  &lt;div class="msg-actions"&gt;
    &lt;button class="msg-btn reply-trigger"&gt;Reply&lt;/button&gt;
    &lt;button class="msg-btn dismiss-btn"&gt;Dismiss&lt;/button&gt;
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

    <!-- ============ 4: FLOATING NOTIFICATION POPUP ============ -->
    <div class="component-card" data-category="glass">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="floating-popup-showcase">
            <div class="premium-floating-popup" id="floatingPopupPreview">
              <div class="popup-brand-badge">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>AI Engine</span>
              </div>
              <div class="popup-info">
                <h5 class="popup-title">Neural Engine Active</h5>
                <p class="popup-desc">Model loaded. Generating ambient designs...</p>
              </div>
              <div class="popup-actions">
                <button class="popup-btn view" onclick="showPopupConf()">Configure</button>
                <button class="popup-close-btn" onclick="dismissFloatingPopup()"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          </div>
          <button class="trigger-live-btn purple" id="popupRestoreBtn" style="display: none;" onclick="resetFloatingPopup()"><i class="fa-solid fa-rotate-left"></i> Restore Floating Banner</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Floating Notification</h3>
          <span>Dynamic Pill</span>
        </div>
        <p>Sleek pill-shaped banner overlay with vibrant linear-gradients, mini logo badging, and customizable micro-actions.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt4')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt4')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerPopupAction()"><i class="fa-solid fa-sliders"></i> Action</button>
        </div>
      </div>
      <pre id="nt4" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-floating-popup"&gt;
  &lt;div class="popup-brand-badge"&gt;
    &lt;i class="fa-solid fa-wand-magic-sparkles"&gt;&lt;/i&gt;
    &lt;span&gt;AI Engine&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="popup-info"&gt;
    &lt;h5 class="popup-title"&gt;Neural Engine Active&lt;/h5&gt;
    &lt;p class="popup-desc"&gt;Model loaded. Generating ambient designs...&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="popup-actions"&gt;
    &lt;button class="popup-btn view"&gt;Configure&lt;/button&gt;
    &lt;button class="popup-close-btn"&gt;&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
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

    <!-- ============ 5: GLASSMORPHISM NOTIFICATION UI ============ -->
    <div class="component-card" data-category="glass">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-glass-card" id="glassCardPreview">
            <div class="glass-bg-glow"></div>
            <div class="glass-header">
              <div class="glass-icon-box">
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <div class="glass-title-area">
                <h4 class="glass-title">Cloud Synced</h4>
                <span class="glass-subtitle">2.4 MB updated</span>
              </div>
            </div>
            <p class="glass-content">Your local changes have been successfully merged with the upstream main repository.</p>
            <div class="glass-footer">
              <span class="glass-meta"><i class="fa-solid fa-clock"></i> 2 min ago</span>
              <button class="glass-action-btn" id="glassSyncBtn" onclick="triggerGlassSync()">Sync Workspace</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Glassmorphism UI</h3>
          <span>Premium Glass</span>
        </div>
        <p>Stunning frosted-glass panel relying on backdrop filters, subtle gradient overlays, and dynamic glass reflection glows.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt5')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt5')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="pulseGlassGlow()"><i class="fa-solid fa-sun"></i> Glow Pulse</button>
        </div>
      </div>
      <pre id="nt5" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-glass-card"&gt;
  &lt;div class="glass-bg-glow"&gt;&lt;/div&gt;
  &lt;div class="glass-header"&gt;
    &lt;div class="glass-icon-box"&gt;
      &lt;i class="fa-solid fa-cloud-arrow-up"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="glass-title-area"&gt;
      &lt;h4 class="glass-title"&gt;Cloud Synced&lt;/h4&gt;
      &lt;span class="glass-subtitle"&gt;2.4 MB updated&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;p class="glass-content"&gt;Your local changes have been successfully merged...&lt;/p&gt;
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

    <!-- ============ 6: STACKED NOTIFICATION CENTER ============ -->
    <div class="component-card" data-category="cards">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-stacked-center" id="stackedCenter">
            <div class="stacked-header">
              <span class="stacked-title">Notification Stack</span>
              <span class="stacked-badge" id="stackedBadge">3 New</span>
            </div>
            
            <div class="stacked-cards-container" id="stackedContainer">
              <!-- Card 1 (Top / Front) -->
              <div class="stacked-card-item card-top-item" data-index="0">
                <div class="item-avatar orange"><i class="fa-solid fa-fire"></i></div>
                <div class="item-body">
                  <strong>High CPU Alert</strong>
                  <span>Instance-12 is running at 98% load capacity.</span>
                </div>
                <button class="stacked-dismiss" onclick="dismissStackedItem(0, event)">&times;</button>
              </div>
              
              <!-- Card 2 -->
              <div class="stacked-card-item card-middle-item" data-index="1">
                <div class="item-avatar purple"><i class="fa-solid fa-code-merge"></i></div>
                <div class="item-body">
                  <strong>PR Approved</strong>
                  <span>Pull request #324 has been merged into main.</span>
                </div>
                <button class="stacked-dismiss" onclick="dismissStackedItem(1, event)">&times;</button>
              </div>
              
              <!-- Card 3 -->
              <div class="stacked-card-item card-bottom-item" data-index="2">
                <div class="item-avatar green"><i class="fa-solid fa-circle-check"></i></div>
                <div class="item-body">
                  <strong>Deploy Successful</strong>
                  <span>Production environment updated, all health-checks passed.</span>
                </div>
                <button class="stacked-dismiss" onclick="dismissStackedItem(2, event)">&times;</button>
              </div>
            </div>
            
            <div class="stacked-footer">
              <button class="stacked-action-btn primary" onclick="toggleNotificationStack()">Expand Stack</button>
              <button class="stacked-action-btn secondary" onclick="resetStackedCenter()">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Stacked Center</h3>
          <span>Interactive Stacking</span>
        </div>
        <p>A space-saving pile of notifications that spreads dynamically into a detailed vertical list with staggered transitions on hover or click.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt6')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt6')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="toggleNotificationStack()"><i class="fa-solid fa-expand"></i> Toggle Expand</button>
        </div>
      </div>
      <pre id="nt6" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-stacked-center"&gt;
  &lt;div class="stacked-header"&gt;
    &lt;span class="stacked-title"&gt;Notification Stack&lt;/span&gt;
    &lt;span class="stacked-badge"&gt;3 New&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="stacked-cards-container"&gt;
    &lt;div class="stacked-card-item card-top-item"&gt;...&lt;/div&gt;
    &lt;div class="stacked-card-item card-middle-item"&gt;...&lt;/div&gt;
    &lt;div class="stacked-card-item card-bottom-item"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 7: LIVE ACTIVITY FEED CARD ============ -->
    <div class="component-card" data-category="cards">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-activity-feed">
            <div class="feed-header">
              <span class="feed-title"><i class="fa-solid fa-wave-square pulse-icon"></i> System Activity</span>
              <span class="feed-status">Real-time</span>
            </div>
            
            <div class="feed-timeline">
              <div class="timeline-line"></div>
              
              <!-- Feed Item 1 -->
              <div class="feed-item" onclick="triggerFeedAlert('Server Node Alpha online')">
                <div class="feed-marker pulse-green"></div>
                <div class="feed-avatar"><img src="https://i.pravatar.cc/100?img=33" alt="User"></div>
                <div class="feed-content">
                  <span class="feed-user">Marcus V.</span>
                  <span class="feed-text">launched server <strong>Node Alpha</strong> in us-east-1</span>
                  <span class="feed-time">Just now</span>
                </div>
              </div>
              
              <!-- Feed Item 2 -->
              <div class="feed-item" onclick="triggerFeedAlert('User avatar upload Completed')">
                <div class="feed-marker pulse-orange"></div>
                <div class="feed-avatar"><img src="https://i.pravatar.cc/100?img=12" alt="User"></div>
                <div class="feed-content">
                  <span class="feed-user">Sarah Connor</span>
                  <span class="feed-text">uploaded a new 2.5MB high-res profile avatar</span>
                  <span class="feed-time">10 min ago</span>
                </div>
              </div>
              
              <!-- Feed Item 3 -->
              <div class="feed-item" onclick="triggerFeedAlert('Database backup Successful')">
                <div class="feed-marker pulse-purple"></div>
                <div class="feed-avatar"><div class="avatar-fallback"><i class="fa-solid fa-database"></i></div></div>
                <div class="feed-content">
                  <span class="feed-user">System Backup</span>
                  <span class="feed-text">successfully exported database logs to AWS S3 bucket</span>
                  <span class="feed-time">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Activity Feed</h3>
          <span>Dynamic Feed Timeline</span>
        </div>
        <p>A chronological, high-fidelity activity dashboard with glowing node pulses, active connecting timelines, and micro-hover transformations.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt7')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt7')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('info', 'Listening for live events...')"><i class="fa-solid fa-radio"></i> Live Listen</button>
        </div>
      </div>
      <pre id="nt7" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-activity-feed"&gt;
  &lt;div class="feed-timeline"&gt;
    &lt;div class="timeline-line"&gt;&lt;/div&gt;
    &lt;div class="feed-item"&gt;
      &lt;div class="feed-marker pulse-green"&gt;&lt;/div&gt;
      &lt;div class="feed-avatar"&gt;...&lt;/div&gt;
      &lt;div class="feed-content"&gt;...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 8: EXPANDABLE SYSTEM ALERT ============ -->
    <div class="component-card" data-category="alerts">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-system-alert danger" id="systemAlert">
            <div class="alert-banner" onclick="toggleDiagnosticAlert()">
              <div class="alert-icon-wrap">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div class="alert-brief">
                <strong>CRITICAL: Database connection pool exhausted</strong>
                <span>Timeout error occurred on thread pool #4592.</span>
              </div>
              <button class="alert-toggle-btn" id="alertChevron">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            
            <div class="alert-collapsible-wrapper" id="alertCollapsible">
              <div class="alert-details-content">
                <div class="detail-section">
                  <h5>Error Diagnostics</h5>
                  <pre class="diagnostic-code"><code>java.sql.SQLTransientConnectionException: HikariPool-1
  at com.zaxxer.hikari.pool.HikariPool.getConnection(HikariPool.java:218)
  at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl
  at threadpool.executor.Worker.run(Worker.java:62)</code></pre>
                </div>
                <div class="detail-actions">
                  <button class="alert-action-btn copy" onclick="copyLogsToClipboard(event)"><i class="fa-solid fa-copy"></i> Copy Logs</button>
                  <button class="alert-action-btn resolve" onclick="triggerToastDemo('success', 'Connection pool cleared. Diagnostic monitoring active.')"><i class="fa-solid fa-wrench"></i> Auto-Resolve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Expandable Alert</h3>
          <span>Interactive Crash Logs</span>
        </div>
        <p>A collapsing error banner showing simple warnings that slides open to reveal detailed raw telemetry log dumps and debugging utilities.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt8')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt8')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="toggleDiagnosticAlert()"><i class="fa-solid fa-arrow-down-up-lock"></i> Toggle Details</button>
        </div>
      </div>
      <pre id="nt8" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-system-alert danger"&gt;
  &lt;div class="alert-banner" onclick="toggleDiagnosticAlert()"&gt;
    &lt;div class="alert-icon-wrap"&gt;&lt;i class="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class="alert-brief"&gt;...&lt;/div&gt;
    &lt;button class="alert-toggle-btn"&gt;&lt;i class="fa-solid fa-chevron-down"&gt;&lt;/i&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="alert-collapsible-wrapper"&gt;
    &lt;div class="alert-details-content"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 9: PROGRESS UPLOAD NOTIFICATION ============ -->
    <div class="component-card" data-category="toasts">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-progress-upload" id="progressUploadCard">
            <div class="upload-header">
              <div class="upload-icon-box" id="uploadStatusIcon">
                <i class="fa-solid fa-file-arrow-up float-anim"></i>
              </div>
              <div class="upload-title-area">
                <strong id="uploadFileName">video_rendering_v2.mp4</strong>
                <span id="uploadFileSize">84.2 MB · Uploading</span>
              </div>
              <button class="upload-close" onclick="cancelUploadSimulation()">&times;</button>
            </div>
            
            <div class="upload-progress-section">
              <div class="upload-progress-bar-track">
                <div class="upload-progress-fill" id="uploadBarFill" style="width: 0%;"></div>
              </div>
              <div class="upload-progress-meta">
                <span id="uploadPercentage">0%</span>
                <span id="uploadEta">Est: 14s remaining</span>
              </div>
            </div>
            
            <div class="upload-actions">
              <button class="upload-action-btn pause" id="uploadPauseBtn" onclick="toggleUploadPause()">Pause</button>
              <button class="upload-action-btn cancel" onclick="cancelUploadSimulation()">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Progress Upload</h3>
          <span>Interactive Progress</span>
        </div>
        <p>A clean live-to-browser asset loading indicator featuring simulated background transfers, pausing, and status checks.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt9')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt9')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="startUploadSimulation()"><i class="fa-solid fa-play"></i> Run Upload</button>
        </div>
      </div>
      <pre id="nt9" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-progress-upload"&gt;
  &lt;div class="upload-header"&gt;
    &lt;div class="upload-icon-box"&gt;&lt;i class="fa-solid fa-file-arrow-up"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class="upload-title-area"&gt;...&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="upload-progress-section"&gt;
    &lt;div class="upload-progress-bar-track"&gt;
      &lt;div class="upload-progress-fill" style="width: 0%;"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 10: INTERACTIVE CHAT NOTIFICATION BUBBLE ============ -->
    <div class="component-card" data-category="glass">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width" style="min-height: 280px; display:flex; justify-content:center; align-items:center;">
          <div class="premium-chat-bubble-container">
            <!-- Floating Bubble Trigger -->
            <div class="chat-bubble-trigger" id="chatBubbleTrigger" onclick="toggleChatBubbleWindow()">
              <img src="https://i.pravatar.cc/100?img=47" alt="Support Avatar" class="bubble-avatar">
              <span class="chat-unread-badge" id="chatUnreadCount">2</span>
              <div class="bubble-ripple"></div>
            </div>
            
            <!-- Chat Popover Window -->
            <div class="chat-popover-window" id="chatPopoverWindow">
              <div class="chat-window-header">
                <div class="header-user-info">
                  <div class="header-avatar-status">
                    <img src="https://i.pravatar.cc/100?img=47" alt="Support">
                    <span class="online-indicator"></span>
                  </div>
                  <div class="header-text">
                    <h4>Clara Jenkins</h4>
                    <span>Customer Success Lead</span>
                  </div>
                </div>
                <button class="chat-header-close" onclick="toggleChatBubbleWindow()">&times;</button>
              </div>
              
              <div class="chat-messages-body" id="chatMessagesBody">
                <div class="msg-bubble incoming">
                  Hi there! We saw you exploring the UI-Verse catalog. Let us know if you need custom mockups!
                  <span class="msg-time">2 min ago</span>
                </div>
                <div class="msg-bubble incoming">
                  What sort of dashboard design are you currently engineering?
                  <span class="msg-time">Just now</span>
                </div>
              </div>
              
              <div class="chat-input-footer">
                <input type="text" id="chatBubbleInput" placeholder="Type a message..." onkeydown="handleChatBubbleInput(event)" />
                <button class="chat-send-btn" onclick="sendChatBubbleMessage()"><i class="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Chat Bubble</h3>
          <span>Interactive Chat Window</span>
        </div>
        <p>A floating message bubble with real-time unread counts that transitions smoothly into a glassmorphic chat thread with keyboard message insertion.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt10')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt10')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="toggleChatBubbleWindow()"><i class="fa-solid fa-message"></i> Open Thread</button>
        </div>
      </div>
      <pre id="nt10" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-chat-bubble-container"&gt;
  &lt;div class="chat-bubble-trigger" onclick="toggleChatBubbleWindow()"&gt;
    &lt;img src="avatar.png" class="bubble-avatar"&gt;
    &lt;span class="chat-unread-badge"&gt;2&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="chat-popover-window"&gt;
    &lt;div class="chat-window-header"&gt;...&lt;/div&gt;
    &lt;div class="chat-messages-body"&gt;...&lt;/div&gt;
    &lt;div class="chat-input-footer"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

  </section>

  <!-- ============ 11-15: ADDED PREMIUM VARIANTS ============ -->
  <section class="notification-grid" aria-label="Additional Premium Variants">

    <!-- 11: Sticky Persistent Banner -->
    <div class="component-card" data-category="banners">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="sticky-banner" id="stickyBannerPreview">
            <div class="sb-left">
              <div class="sb-icon"><i class="fa-solid fa-bell"></i></div>
              <div>
                <strong>Maintenance Window</strong>
                <div class="muted">Planned maintenance at 02:00 UTC — 5m</div>
              </div>
            </div>
            <div class="sb-actions">
              <button class="sb-cta" onclick="triggerToastDemo('warning','Planned maintenance starting soon')">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Sticky Banner</h3>
          <span>Banners</span>
        </div>
        <p>A compact persistent banner ideal for global maintenance alerts and account notices.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt11')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt11')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('warning','Maintenance scheduled')"><i class="fa-solid fa-bell"></i> Trigger</button>
        </div>
      </div>
      <pre id="nt11" class="code-block" style="display:none;"><code>&lt;div class="sticky-banner"&gt;
  &lt;div class="sb-left"&gt;&lt;i class="fa-solid fa-bell"&gt;&lt;/i&gt; &lt;strong&gt;Maintenance Window&lt;/strong&gt;&lt;/div&gt;
  &lt;button class="sb-cta"&gt;View Details&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 12: Actionable Inline Snackbar -->
    <div class="component-card" data-category="snackbars">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="inline-snackbar" id="inlineSnackPreview">
            <div class="snack-msg">Settings saved</div>
            <button class="snack-action" onclick="triggerToastDemo('success','Settings applied')">Undo</button>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Inline Snackbar</h3>
          <span>Snackbars</span>
        </div>
        <p>Small inline confirmation with optional undo action for quick interactions.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt12')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt12')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('success','Settings saved')"><i class="fa-solid fa-check"></i> Simulate</button>
        </div>
      </div>
      <pre id="nt12" class="code-block" style="display:none;"><code>&lt;div class="inline-snackbar"&gt;
  &lt;div class="snack-msg"&gt;Settings saved&lt;/div&gt;
  &lt;button class="snack-action"&gt;Undo&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 13: Centered Critical Modal Alert -->
    <div class="component-card" data-category="modals">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width modal-alert-preview">
          <div class="critical-modal" id="criticalModalPreview">
            <h4>Critical: Service Degraded</h4>
            <p>Multiple regions reporting increased latency. Immediate investigation recommended.</p>
            <div class="modal-actions">
              <button class="modal-btn ack" onclick="triggerToastDemo('error','Acknowledged')">Acknowledge</button>
              <button class="modal-btn dismiss" onclick="triggerToastDemo('info','Dismissed')">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Modal Alert</h3>
          <span>Critical</span>
        </div>
        <p>Centered modal-style alert for urgent system-wide notifications (preview only).</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt13')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt13')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('error','Modal Acknowledge')"><i class="fa-solid fa-exclamation-triangle"></i> Acknowledge</button>
        </div>
      </div>
      <pre id="nt13" class="code-block" style="display:none;"><code>&lt;div class="critical-modal"&gt;
  &lt;h4&gt;Critical: Service Degraded&lt;/h4&gt;
  &lt;p&gt;Multiple regions reporting increased latency.&lt;/p&gt;
  &lt;div class="modal-actions"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 14: Progress Toast List -->
    <div class="component-card" data-category="progress">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="progress-toast-list" id="progressToastPreview">
            <div class="progress-toast-item">
              <div class="progress-thumb"><i class="fa-solid fa-upload"></i></div>
              <div class="progress-line"><div class="progress-fill" style="width:38%"></div></div>
            </div>
            <div class="progress-toast-item">
              <div class="progress-thumb"><i class="fa-solid fa-database"></i></div>
              <div class="progress-line"><div class="progress-fill" style="width:62%"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Progress List</h3>
          <span>Multi-Progress</span>
        </div>
        <p>A vertical list of short progress toasts for concurrent transfers and background tasks.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt14')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt14')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="simulateProgressList()"><i class="fa-solid fa-play"></i> Simulate</button>
        </div>
      </div>
      <pre id="nt14" class="code-block" style="display:none;"><code>&lt;div class="progress-toast-item"&gt;&lt;div class="progress-thumb"&gt;&lt;/div&gt;&lt;div class="progress-line"&gt;&lt;div class="progress-fill" style="width:40%"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
    </div>

    <!-- 15: Avatar Notification Cluster -->
    <div class="component-card" data-category="avatars">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="avatar-cluster" id="avatarClusterPreview">
            <div class="avatar-stack">
              <img src="https://i.pravatar.cc/100?img=13" alt="A">
              <img src="https://i.pravatar.cc/100?img=27" alt="B">
              <img src="https://i.pravatar.cc/100?img=51" alt="C">
            </div>
            <div class="avatar-count">+12</div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Avatar Cluster</h3>
          <span>Groups</span>
        </div>
        <p>Compact representation of multiple participants or recipients with stacked avatars and overflow counts.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt15')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt15')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('info','3 participants added')"><i class="fa-solid fa-user-plus"></i> Notify</button>
        </div>
      </div>
      <pre id="nt15" class="code-block" style="display:none;"><code>&lt;div class="avatar-cluster"&gt;&lt;div class="avatar-stack"&gt;...&lt;/div&gt;&lt;div class="avatar-count"&gt;+12&lt;/div&gt;&lt;/div&gt;</code></pre>
    </div>

  </section>

</div>

<!-- LIVE TOAST CONTAINER FOR CORNER BANNERS -->
<div class="live-toast-container" id="liveToastContainer"></div>

<!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="footer-container">

    <div class="socials">
  <a href="https://github.com" target="_blank" title="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="https://twitter.com" target="_blank" title="Twitter">
    <i class="fab fa-x-twitter"></i>
  </a>
</div>

    <div class="footer-col">
      <h3>Explore</h3>
      <ul>
        <li><a href="button.html">Buttons</a></li>
        <li><a href="navbar.html">Navbars</a></li>
        <li><a href="cards.html">Cards</a></li>
        <li><a href="inputs.html">Inputs</a></li>
        <li><a href="forms.html">Forms</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Resources</h3>
      <ul>
        <li><a href="documentation.html">Documentation</a></li>
        <li><a href="contribute.html">Contribute</a></li>
        <li><a href="https://github.com/uiverse/uiverse" target="_blank">GitHub Repo</a></li>
        <li><a href="community.html">Community</a></li>
        <li><a href="support.html">Support</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Legal</h3>
      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="license.html">License</a></li>
      </ul>
    </div>

    <div class="footer-col newsletter">
      <h3>Stay Updated</h3>
      <p>Get notified when new components drop.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="your@email.com" />
        <button type="button" onclick="subscribe()">Subscribe</button>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
  </div>
</footer>



    

\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/notifications-premium.css\`

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
    title: 'Notifications V2',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/notifications-premium.css"],
    content: `
  <a class="skip-link" href="#main-content">Skip to main content</a>


<div class="main-content">

  <!-- TOPBAR -->
  <header class="topbar">
    <div class="search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search notification components..." id="searchInput" data-a11y-remediation="label-needed">
    </div>
    <div class="topbar-actions">
      <button class="add-btn" onclick="triggerAllShowcase()" data-a11y-remediation="button-label-needed"><i class="fa-solid fa-play"></i> Test All</button>
      <button class="collection-btn" onclick="clearLiveToasts()"><i class="fa-solid fa-trash"></i> Clear Toasts</button>
      <button class="theme-btn"><i class="fa-solid fa-moon"></i></button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-left">
      <div class="breadcrumb">Home &gt; Notifications Premium</div>
      <h1>Notification UI</h1>
      <p>
        Modern, responsive notification elements built with clean HTML, CSS, and Vanilla JavaScript.
        Features premium glassmorphic blur effects, glowing active states, and custom micro-animations.
      </p>
      <div class="hero-tags">
        <span><i class="fa-solid fa-layer-group"></i> 5 Modern Elements</span>
        <span><i class="fa-solid fa-wand-magic-sparkles"></i> Glass & Glows</span>
        <span><i class="fa-solid fa-mobile-screen"></i> 100% Responsive</span>
      </div>
    </div>
    <div class="hero-preview">
      <div class="hero-notification-demo">
        <div class="demo-bubble active">
          <span class="demo-dot"></span>
          <i class="fa-solid fa-bell"></i>
          <span>Live Preview Active</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= SIDEBAR ================= -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <span class="brand-icon">⬡</span>
      <span class="brand-text">UIverse</span>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li><a href="index.html"><i class="fa-solid fa-house"></i><span>Home</span></a></li>
        <li><a href="button.html"><i class="fa-solid fa-hand-pointer"></i><span>Buttons</span></a></li>
        <li><a href="dropdown-components.html"><i class="fa-solid fa-caret-down"></i><span>Dropdowns</span></a></li>
        <li><a href="profile-components.html"><i class="fa-solid fa-user"></i><span>Profiles</span></a></li>
        <li><a href="navbar.html"><i class="fa-solid fa-bars"></i><span>Navbar</span></a></li>
        <li><a href="cards.html"><i class="fa-solid fa-table-cells-large"></i><span>Cards</span></a></li>
        <li><a href="flipcards.html"><i class="fa-solid fa-clone"></i><span>3D Cards</span></a></li>
        <li><a href="inputs.html"><i class="fa-solid fa-keyboard"></i><span>Inputs</span></a></li>
        <li><a href="forms.html"><i class="fa-brands fa-wpforms"></i><span>Forms</span></a></li>
        <li><a href="badges.html"><i class="fa-solid fa-award"></i><span>Badges</span></a></li>
        <li><a href="blog.html"><i class="fa-solid fa-blog"></i><span>Blog</span></a></li>
        <li><a href="article.html"><i class="fa-solid fa-newspaper"></i><span>Articles</span></a></li>
        <li><a href="alerts.html"><i class="fa-solid fa-triangle-exclamation"></i><span>Alerts</span></a></li>
        <li><a href="color.html"><i class="fa-solid fa-palette"></i><span>Colors</span></a></li>
        <li><a href="charts.html"><i class="fa-solid fa-chart-pie"></i><span>Charts</span></a></li>
        <li><a href="dashboard.html"><i class="fa-solid fa-gauge-high"></i><span>Dashboard</span></a></li>
        <li><a href="div.html"><i class="fa-solid fa-square"></i><span>DIV</span></a></li>
        <li><a href="widgets.html"><i class="fa-solid fa-layer-group"></i><span>Widgets</span></a></li>
        <li><a href="search.html"><i class="fa-solid fa-magnifying-glass"></i><span>Search Bars</span></a></li>
        <li><a href="hover.html"><i class="fa-solid fa-wand-magic-sparkles"></i><span>Hover Effects</span></a></li>
        <li><a href="error.html"><i class="fa-solid fa-circle-exclamation"></i><span>Error Pages</span></a></li>
        <li><a href="ecommerce.html"><i class="fa-solid fa-cart-shopping"></i><span>E-commerce</span></a></li>
        <li><a href="files.html"><i class="fa-solid fa-file-arrow-up"></i><span>Drag & Drop</span></a></li>
        <li><a href="hero.html"><i class="fa-solid fa-star"></i><span>Hero Sections</span></a></li>
        <li><a href="loaders.html"><i class="fa-solid fa-spinner"></i><span>Loaders</span></a></li>
        <li><a href="timeline.html"><i class="fa-solid fa-clock-rotate-left"></i><span>Timeline</span></a></li>
        <li><a href="map.html"><i class="fa-solid fa-map-location-dot"></i><span>Maps</span></a></li>
        <li><a href="menu.html"><i class="fa-solid fa-bars-staggered"></i><span>Menu</span></a></li>
        <li><a href="pricing.html"><i class="fa-solid fa-tags"></i><span>Pricing</span></a></li>
        <li>
          <a href="subscription.html">
            <i class="fa-solid fa-credit-card"></i>
            <span>Subscription</span>
          </a>
        </li>
        <li>
          <a href="auth.html">
            <i class="fa-solid fa-user-shield"></i>
            <span>Authentication</span>
          </a>
        </li>
          <li>
            <a href="recovery.html">
              <i class="fa-solid fa-key" aria-hidden="true"></i>
              <span>Password Recovery</span>
            </a>
          </li>
        <li><a href="section.html"><i class="fa-solid fa-rectangle-list"></i><span>Section</span></a></li>
        <li><a href="span.html"><i class="fa-solid fa-code"></i><span>Span</span></a></li>
        <li><a href="table.html"><i class="fa-solid fa-table"></i><span>Table</span></a></li>
        <li><a href="tabs.html"><i class="fa-solid fa-table-columns"></i><span>Tabs</span></a></li>
        <li><a href="terms.html"><i class="fa-solid fa-file-contract"></i><span>Terms</span></a></li>
        <li><a href="testimonials.html"><i class="fa-solid fa-comments"></i><span>Testimonials</span></a></li>
        <li><a href="toggles.html"><i class="fa-solid fa-toggle-on"></i><span>Toggle</span></a></li>
        <li><a href="radiobutton.html"><i class="fa-solid fa-circle-dot"></i><span>Radio Buttons</span></a></li>
        <li><a href="checkbox.html"><i class="fa-solid fa-square-check"></i><span>Checkboxes</span></a></li>
        <li class="active"><a href="notifications-premium.html"><i class="fa-solid fa-bell"></i><span>Notifications V2</span></a></li>
        <li><a href="step-indicators.html"><i class="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
        <li><a href="progress-premium.html"><i class="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
        <li><a href="ratings-premium.html"><i class="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
        <li><a href="filters-premium.html"><i class="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
        <li><a href="about.html"><i class="fa-solid fa-circle-info"></i><span>About</span></a></li>
        <li><a href="documentation.html"><i class="fa-solid fa-book"></i><span>Documentation</span></a></li>
        <li><a href="faq.html"><i class="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
        <li><a href="contact.html"><i class="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
      </ul>
    </nav>
    <div class="sidebar-footer">
      <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="#" title="Twitter"><i class="fab fa-x-twitter"></i></a>
    </div>
  </aside>

  <!-- FILTERS -->
  <div class="filters">
    <button class="filter-tab active" data-filter="all">All</button>
    <button class="filter-tab" data-filter="toasts">Toasts</button>
    <button class="filter-tab" data-filter="alerts">Alerts</button>
    <button class="filter-tab" data-filter="cards">Cards</button>
    <button class="filter-tab" data-filter="glass">Glass</button>
  </div>

  <!-- COMPONENT SHOWCASE GRID -->
  <section class="notification-grid">

    <!-- ============ 1: TOAST NOTIFICATION ============ -->
    <div class="component-card" data-category="toasts">
      <div class="card-preview">
        <div class="card-interactive-area">
          <div class="toast-preview-wrapper">
            <div class="premium-toast warning">
              <div class="toast-icon">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div class="toast-content">
                <h4 class="toast-title">Backup Required</h4>
                <p class="toast-desc">Your database was last backed up 7 days ago.</p>
              </div>
              <button class="toast-close-btn" onclick="resetToastPreview(this)"><i class="fa-solid fa-xmark"></i></button>
              <div class="toast-progress-bar"></div>
            </div>
          </div>
          <button class="trigger-live-btn orange" onclick="triggerToastDemo('warning')"><i class="fa-solid fa-bolt"></i> Trigger Live Toast</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Toast Notification</h3>
          <span>Interactive</span>
        </div>
        <p>Premium dark toast banner featuring high-contrast colored warning indicator, progress timer, and exit scale movements.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt1')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt1')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('success')"><i class="fa-solid fa-circle-check"></i> Success</button>
        </div>
      </div>
      <pre id="nt1" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-toast warning"&gt;
  &lt;div class="toast-icon"&gt;
    &lt;i class="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="toast-content"&gt;
    &lt;h4 class="toast-title"&gt;Backup Required&lt;/h4&gt;
    &lt;p class="toast-desc"&gt;Your database was last backed up 7 days ago.&lt;/p&gt;
  &lt;/div&gt;
  &lt;button class="toast-close-btn"&gt;&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
  &lt;div class="toast-progress-bar"&gt;&lt;/div&gt;
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

    <!-- ============ 2: SUCCESS ALERT NOTIFICATION ============ -->
    <div class="component-card" data-category="alerts">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-alert-success" id="successAlertPreview">
            <div class="alert-glow"></div>
            <div class="alert-icon-wrapper">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="alert-text">
              <h4 class="alert-title">Payment Successful</h4>
              <p class="alert-desc">Your premium upgrade is active! Invoice #2061 sent to your email.</p>
            </div>
            <button class="alert-close" onclick="dismissAlertPreview()"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <button class="trigger-live-btn green" id="alertResetBtn" style="display: none;" onclick="resetAlertPreview()"><i class="fa-solid fa-rotate-left"></i> Reset Alert Banner</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Success Alert Notification</h3>
          <span>Premium Glow</span>
        </div>
        <p>Vibrant inline banner using a translucent matrix styling, bouncing tick animation, and glowing outer drop shadows.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt2')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt2')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerSuccessPulse()"><i class="fa-solid fa-heartbeat"></i> Pulse</button>
        </div>
      </div>
      <pre id="nt2" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-alert-success"&gt;
  &lt;div class="alert-glow"&gt;&lt;/div&gt;
  &lt;div class="alert-icon-wrapper"&gt;
    &lt;i class="fa-solid fa-circle-check"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="alert-text"&gt;
    &lt;h4 class="alert-title"&gt;Payment Successful&lt;/h4&gt;
    &lt;p class="alert-desc"&gt;Your premium upgrade is active! Invoice #2061 sent.&lt;/p&gt;
  &lt;/div&gt;
  &lt;button class="alert-close"&gt;&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
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

    <!-- ============ 3: MESSAGE NOTIFICATION CARD ============ -->
    <div class="component-card" data-category="cards">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-msg-card" id="messageCardPreview">
            <div class="msg-header">
              <div class="msg-avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="avatar" class="msg-avatar">
                <span class="presence-dot online"></span>
              </div>
              <div class="msg-user-details">
                <span class="msg-username">Sophia Martinez</span>
                <span class="msg-time">Just now</span>
              </div>
              <div class="msg-badge">New Mention</div>
            </div>
            <div class="msg-body">
              <p class="msg-text">Hey! I reviewed the design layout for UI-Verse. It looks extremely premium! Let's schedule a call to finalize the glassmorphism parameters. ✨</p>
            </div>
            <div class="msg-actions">
              <button class="msg-btn reply-trigger" onclick="toggleCardReply()"><i class="fa-solid fa-reply"></i> Reply</button>
              <button class="msg-btn dismiss-btn" onclick="dismissMsgCard()"><i class="fa-solid fa-check"></i> Dismiss</button>
            </div>
            <div class="msg-reply-box" id="cardReplyBox" style="display: none;">
              <input type="text" placeholder="Type reply here..." class="msg-reply-input" id="cardReplyInput">
              <button class="msg-send-btn" onclick="sendCardReply()"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
          <button class="trigger-live-btn purple" id="msgCardResetBtn" style="display: none;" onclick="resetMsgCard()"><i class="fa-solid fa-rotate-left"></i> Restore Chat Card</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Message Notification Card</h3>
          <span>Interactive</span>
        </div>
        <p>Premium user avatar layout featuring real-time blinking online status, and sliding text reply input drawers.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt3')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt3')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="simulateBlinkStatus()"><i class="fa-solid fa-wifi"></i> Status Toggle</button>
        </div>
      </div>
      <pre id="nt3" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-msg-card"&gt;
  &lt;div class="msg-header"&gt;
    &lt;div class="msg-avatar-wrapper"&gt;
      &lt;img src="avatar.jpg" class="msg-avatar"&gt;
      &lt;span class="presence-dot online"&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="msg-user-details"&gt;
      &lt;span class="msg-username"&gt;Sophia Martinez&lt;/span&gt;
      &lt;span class="msg-time"&gt;Just now&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;p class="msg-text"&gt;Hey! I reviewed the design layout for UI-Verse...&lt;/p&gt;
  &lt;div class="msg-actions"&gt;
    &lt;button class="msg-btn reply-trigger"&gt;Reply&lt;/button&gt;
    &lt;button class="msg-btn dismiss-btn"&gt;Dismiss&lt;/button&gt;
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

    <!-- ============ 4: FLOATING NOTIFICATION POPUP ============ -->
    <div class="component-card" data-category="glass">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="floating-popup-showcase">
            <div class="premium-floating-popup" id="floatingPopupPreview">
              <div class="popup-brand-badge">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>AI Engine</span>
              </div>
              <div class="popup-info">
                <h5 class="popup-title">Neural Engine Active</h5>
                <p class="popup-desc">Model loaded. Generating ambient designs...</p>
              </div>
              <div class="popup-actions">
                <button class="popup-btn view" onclick="showPopupConf()">Configure</button>
                <button class="popup-close-btn" onclick="dismissFloatingPopup()"><i class="fa-solid fa-xmark"></i></button>
              </div>
            </div>
          </div>
          <button class="trigger-live-btn purple" id="popupRestoreBtn" style="display: none;" onclick="resetFloatingPopup()"><i class="fa-solid fa-rotate-left"></i> Restore Floating Banner</button>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Floating Notification</h3>
          <span>Dynamic Pill</span>
        </div>
        <p>Sleek pill-shaped banner overlay with vibrant linear-gradients, mini logo badging, and customizable micro-actions.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt4')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt4')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerPopupAction()"><i class="fa-solid fa-sliders"></i> Action</button>
        </div>
      </div>
      <pre id="nt4" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-floating-popup"&gt;
  &lt;div class="popup-brand-badge"&gt;
    &lt;i class="fa-solid fa-wand-magic-sparkles"&gt;&lt;/i&gt;
    &lt;span&gt;AI Engine&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="popup-info"&gt;
    &lt;h5 class="popup-title"&gt;Neural Engine Active&lt;/h5&gt;
    &lt;p class="popup-desc"&gt;Model loaded. Generating ambient designs...&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="popup-actions"&gt;
    &lt;button class="popup-btn view"&gt;Configure&lt;/button&gt;
    &lt;button class="popup-close-btn"&gt;&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/button&gt;
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

    <!-- ============ 5: GLASSMORPHISM NOTIFICATION UI ============ -->
    <div class="component-card" data-category="glass">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-glass-card" id="glassCardPreview">
            <div class="glass-bg-glow"></div>
            <div class="glass-header">
              <div class="glass-icon-box">
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <div class="glass-title-area">
                <h4 class="glass-title">Cloud Synced</h4>
                <span class="glass-subtitle">2.4 MB updated</span>
              </div>
            </div>
            <p class="glass-content">Your local changes have been successfully merged with the upstream main repository.</p>
            <div class="glass-footer">
              <span class="glass-meta"><i class="fa-solid fa-clock"></i> 2 min ago</span>
              <button class="glass-action-btn" id="glassSyncBtn" onclick="triggerGlassSync()">Sync Workspace</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Glassmorphism UI</h3>
          <span>Premium Glass</span>
        </div>
        <p>Stunning frosted-glass panel relying on backdrop filters, subtle gradient overlays, and dynamic glass reflection glows.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt5')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt5')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="pulseGlassGlow()"><i class="fa-solid fa-sun"></i> Glow Pulse</button>
        </div>
      </div>
      <pre id="nt5" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-glass-card"&gt;
  &lt;div class="glass-bg-glow"&gt;&lt;/div&gt;
  &lt;div class="glass-header"&gt;
    &lt;div class="glass-icon-box"&gt;
      &lt;i class="fa-solid fa-cloud-arrow-up"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="glass-title-area"&gt;
      &lt;h4 class="glass-title"&gt;Cloud Synced&lt;/h4&gt;
      &lt;span class="glass-subtitle"&gt;2.4 MB updated&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;p class="glass-content"&gt;Your local changes have been successfully merged...&lt;/p&gt;
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

    <!-- ============ 6: STACKED NOTIFICATION CENTER ============ -->
    <div class="component-card" data-category="cards">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-stacked-center" id="stackedCenter">
            <div class="stacked-header">
              <span class="stacked-title">Notification Stack</span>
              <span class="stacked-badge" id="stackedBadge">3 New</span>
            </div>
            
            <div class="stacked-cards-container" id="stackedContainer">
              <!-- Card 1 (Top / Front) -->
              <div class="stacked-card-item card-top-item" data-index="0">
                <div class="item-avatar orange"><i class="fa-solid fa-fire"></i></div>
                <div class="item-body">
                  <strong>High CPU Alert</strong>
                  <span>Instance-12 is running at 98% load capacity.</span>
                </div>
                <button class="stacked-dismiss" onclick="dismissStackedItem(0, event)">&times;</button>
              </div>
              
              <!-- Card 2 -->
              <div class="stacked-card-item card-middle-item" data-index="1">
                <div class="item-avatar purple"><i class="fa-solid fa-code-merge"></i></div>
                <div class="item-body">
                  <strong>PR Approved</strong>
                  <span>Pull request #324 has been merged into main.</span>
                </div>
                <button class="stacked-dismiss" onclick="dismissStackedItem(1, event)">&times;</button>
              </div>
              
              <!-- Card 3 -->
              <div class="stacked-card-item card-bottom-item" data-index="2">
                <div class="item-avatar green"><i class="fa-solid fa-circle-check"></i></div>
                <div class="item-body">
                  <strong>Deploy Successful</strong>
                  <span>Production environment updated, all health-checks passed.</span>
                </div>
                <button class="stacked-dismiss" onclick="dismissStackedItem(2, event)">&times;</button>
              </div>
            </div>
            
            <div class="stacked-footer">
              <button class="stacked-action-btn primary" onclick="toggleNotificationStack()">Expand Stack</button>
              <button class="stacked-action-btn secondary" onclick="resetStackedCenter()">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Stacked Center</h3>
          <span>Interactive Stacking</span>
        </div>
        <p>A space-saving pile of notifications that spreads dynamically into a detailed vertical list with staggered transitions on hover or click.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt6')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt6')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="toggleNotificationStack()"><i class="fa-solid fa-expand"></i> Toggle Expand</button>
        </div>
      </div>
      <pre id="nt6" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-stacked-center"&gt;
  &lt;div class="stacked-header"&gt;
    &lt;span class="stacked-title"&gt;Notification Stack&lt;/span&gt;
    &lt;span class="stacked-badge"&gt;3 New&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="stacked-cards-container"&gt;
    &lt;div class="stacked-card-item card-top-item"&gt;...&lt;/div&gt;
    &lt;div class="stacked-card-item card-middle-item"&gt;...&lt;/div&gt;
    &lt;div class="stacked-card-item card-bottom-item"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 7: LIVE ACTIVITY FEED CARD ============ -->
    <div class="component-card" data-category="cards">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-activity-feed">
            <div class="feed-header">
              <span class="feed-title"><i class="fa-solid fa-wave-square pulse-icon"></i> System Activity</span>
              <span class="feed-status">Real-time</span>
            </div>
            
            <div class="feed-timeline">
              <div class="timeline-line"></div>
              
              <!-- Feed Item 1 -->
              <div class="feed-item" onclick="triggerFeedAlert('Server Node Alpha online')">
                <div class="feed-marker pulse-green"></div>
                <div class="feed-avatar"><img src="https://i.pravatar.cc/100?img=33" alt="User"></div>
                <div class="feed-content">
                  <span class="feed-user">Marcus V.</span>
                  <span class="feed-text">launched server <strong>Node Alpha</strong> in us-east-1</span>
                  <span class="feed-time">Just now</span>
                </div>
              </div>
              
              <!-- Feed Item 2 -->
              <div class="feed-item" onclick="triggerFeedAlert('User avatar upload Completed')">
                <div class="feed-marker pulse-orange"></div>
                <div class="feed-avatar"><img src="https://i.pravatar.cc/100?img=12" alt="User"></div>
                <div class="feed-content">
                  <span class="feed-user">Sarah Connor</span>
                  <span class="feed-text">uploaded a new 2.5MB high-res profile avatar</span>
                  <span class="feed-time">10 min ago</span>
                </div>
              </div>
              
              <!-- Feed Item 3 -->
              <div class="feed-item" onclick="triggerFeedAlert('Database backup Successful')">
                <div class="feed-marker pulse-purple"></div>
                <div class="feed-avatar"><div class="avatar-fallback"><i class="fa-solid fa-database"></i></div></div>
                <div class="feed-content">
                  <span class="feed-user">System Backup</span>
                  <span class="feed-text">successfully exported database logs to AWS S3 bucket</span>
                  <span class="feed-time">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Activity Feed</h3>
          <span>Dynamic Feed Timeline</span>
        </div>
        <p>A chronological, high-fidelity activity dashboard with glowing node pulses, active connecting timelines, and micro-hover transformations.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt7')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt7')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('info', 'Listening for live events...')"><i class="fa-solid fa-radio"></i> Live Listen</button>
        </div>
      </div>
      <pre id="nt7" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-activity-feed"&gt;
  &lt;div class="feed-timeline"&gt;
    &lt;div class="timeline-line"&gt;&lt;/div&gt;
    &lt;div class="feed-item"&gt;
      &lt;div class="feed-marker pulse-green"&gt;&lt;/div&gt;
      &lt;div class="feed-avatar"&gt;...&lt;/div&gt;
      &lt;div class="feed-content"&gt;...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 8: EXPANDABLE SYSTEM ALERT ============ -->
    <div class="component-card" data-category="alerts">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-system-alert danger" id="systemAlert">
            <div class="alert-banner" onclick="toggleDiagnosticAlert()">
              <div class="alert-icon-wrap">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div class="alert-brief">
                <strong>CRITICAL: Database connection pool exhausted</strong>
                <span>Timeout error occurred on thread pool #4592.</span>
              </div>
              <button class="alert-toggle-btn" id="alertChevron">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            
            <div class="alert-collapsible-wrapper" id="alertCollapsible">
              <div class="alert-details-content">
                <div class="detail-section">
                  <h5>Error Diagnostics</h5>
                  <pre class="diagnostic-code"><code>java.sql.SQLTransientConnectionException: HikariPool-1
  at com.zaxxer.hikari.pool.HikariPool.getConnection(HikariPool.java:218)
  at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl
  at threadpool.executor.Worker.run(Worker.java:62)</code></pre>
                </div>
                <div class="detail-actions">
                  <button class="alert-action-btn copy" onclick="copyLogsToClipboard(event)"><i class="fa-solid fa-copy"></i> Copy Logs</button>
                  <button class="alert-action-btn resolve" onclick="triggerToastDemo('success', 'Connection pool cleared. Diagnostic monitoring active.')"><i class="fa-solid fa-wrench"></i> Auto-Resolve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Expandable Alert</h3>
          <span>Interactive Crash Logs</span>
        </div>
        <p>A collapsing error banner showing simple warnings that slides open to reveal detailed raw telemetry log dumps and debugging utilities.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt8')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt8')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="toggleDiagnosticAlert()"><i class="fa-solid fa-arrow-down-up-lock"></i> Toggle Details</button>
        </div>
      </div>
      <pre id="nt8" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-system-alert danger"&gt;
  &lt;div class="alert-banner" onclick="toggleDiagnosticAlert()"&gt;
    &lt;div class="alert-icon-wrap"&gt;&lt;i class="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class="alert-brief"&gt;...&lt;/div&gt;
    &lt;button class="alert-toggle-btn"&gt;&lt;i class="fa-solid fa-chevron-down"&gt;&lt;/i&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div class="alert-collapsible-wrapper"&gt;
    &lt;div class="alert-details-content"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 9: PROGRESS UPLOAD NOTIFICATION ============ -->
    <div class="component-card" data-category="toasts">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-progress-upload" id="progressUploadCard">
            <div class="upload-header">
              <div class="upload-icon-box" id="uploadStatusIcon">
                <i class="fa-solid fa-file-arrow-up float-anim"></i>
              </div>
              <div class="upload-title-area">
                <strong id="uploadFileName">video_rendering_v2.mp4</strong>
                <span id="uploadFileSize">84.2 MB · Uploading</span>
              </div>
              <button class="upload-close" onclick="cancelUploadSimulation()">&times;</button>
            </div>
            
            <div class="upload-progress-section">
              <div class="upload-progress-bar-track">
                <div class="upload-progress-fill" id="uploadBarFill" style="width: 0%;"></div>
              </div>
              <div class="upload-progress-meta">
                <span id="uploadPercentage">0%</span>
                <span id="uploadEta">Est: 14s remaining</span>
              </div>
            </div>
            
            <div class="upload-actions">
              <button class="upload-action-btn pause" id="uploadPauseBtn" onclick="toggleUploadPause()">Pause</button>
              <button class="upload-action-btn cancel" onclick="cancelUploadSimulation()">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Progress Upload</h3>
          <span>Interactive Progress</span>
        </div>
        <p>A clean live-to-browser asset loading indicator featuring simulated background transfers, pausing, and status checks.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt9')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt9')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="startUploadSimulation()"><i class="fa-solid fa-play"></i> Run Upload</button>
        </div>
      </div>
      <pre id="nt9" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-progress-upload"&gt;
  &lt;div class="upload-header"&gt;
    &lt;div class="upload-icon-box"&gt;&lt;i class="fa-solid fa-file-arrow-up"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;div class="upload-title-area"&gt;...&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="upload-progress-section"&gt;
    &lt;div class="upload-progress-bar-track"&gt;
      &lt;div class="upload-progress-fill" style="width: 0%;"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- ============ 10: INTERACTIVE CHAT NOTIFICATION BUBBLE ============ -->
    <div class="component-card" data-category="glass">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width" style="min-height: 280px; display:flex; justify-content:center; align-items:center;">
          <div class="premium-chat-bubble-container">
            <!-- Floating Bubble Trigger -->
            <div class="chat-bubble-trigger" id="chatBubbleTrigger" onclick="toggleChatBubbleWindow()">
              <img src="https://i.pravatar.cc/100?img=47" alt="Support Avatar" class="bubble-avatar">
              <span class="chat-unread-badge" id="chatUnreadCount">2</span>
              <div class="bubble-ripple"></div>
            </div>
            
            <!-- Chat Popover Window -->
            <div class="chat-popover-window" id="chatPopoverWindow">
              <div class="chat-window-header">
                <div class="header-user-info">
                  <div class="header-avatar-status">
                    <img src="https://i.pravatar.cc/100?img=47" alt="Support">
                    <span class="online-indicator"></span>
                  </div>
                  <div class="header-text">
                    <h4>Clara Jenkins</h4>
                    <span>Customer Success Lead</span>
                  </div>
                </div>
                <button class="chat-header-close" onclick="toggleChatBubbleWindow()">&times;</button>
              </div>
              
              <div class="chat-messages-body" id="chatMessagesBody">
                <div class="msg-bubble incoming">
                  Hi there! We saw you exploring the UI-Verse catalog. Let us know if you need custom mockups!
                  <span class="msg-time">2 min ago</span>
                </div>
                <div class="msg-bubble incoming">
                  What sort of dashboard design are you currently engineering?
                  <span class="msg-time">Just now</span>
                </div>
              </div>
              
              <div class="chat-input-footer">
                <input type="text" id="chatBubbleInput" placeholder="Type a message..." onkeydown="handleChatBubbleInput(event)" />
                <button class="chat-send-btn" onclick="sendChatBubbleMessage()"><i class="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Chat Bubble</h3>
          <span>Interactive Chat Window</span>
        </div>
        <p>A floating message bubble with real-time unread counts that transitions smoothly into a glassmorphic chat thread with keyboard message insertion.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt10')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt10')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="toggleChatBubbleWindow()"><i class="fa-solid fa-message"></i> Open Thread</button>
        </div>
      </div>
      <pre id="nt10" class="code-block" style="display:none;"><code>&lt;!-- HTML --&gt;
&lt;div class="premium-chat-bubble-container"&gt;
  &lt;div class="chat-bubble-trigger" onclick="toggleChatBubbleWindow()"&gt;
    &lt;img src="avatar.png" class="bubble-avatar"&gt;
    &lt;span class="chat-unread-badge"&gt;2&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="chat-popover-window"&gt;
    &lt;div class="chat-window-header"&gt;...&lt;/div&gt;
    &lt;div class="chat-messages-body"&gt;...&lt;/div&gt;
    &lt;div class="chat-input-footer"&gt;...&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

  </section>

  <!-- ============ 11-15: ADDED PREMIUM VARIANTS ============ -->
  <section class="notification-grid" aria-label="Additional Premium Variants">

    <!-- 11: Sticky Persistent Banner -->
    <div class="component-card" data-category="banners">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="sticky-banner" id="stickyBannerPreview">
            <div class="sb-left">
              <div class="sb-icon"><i class="fa-solid fa-bell"></i></div>
              <div>
                <strong>Maintenance Window</strong>
                <div class="muted">Planned maintenance at 02:00 UTC — 5m</div>
              </div>
            </div>
            <div class="sb-actions">
              <button class="sb-cta" onclick="triggerToastDemo('warning','Planned maintenance starting soon')">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Sticky Banner</h3>
          <span>Banners</span>
        </div>
        <p>A compact persistent banner ideal for global maintenance alerts and account notices.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt11')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt11')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('warning','Maintenance scheduled')"><i class="fa-solid fa-bell"></i> Trigger</button>
        </div>
      </div>
      <pre id="nt11" class="code-block" style="display:none;"><code>&lt;div class="sticky-banner"&gt;
  &lt;div class="sb-left"&gt;&lt;i class="fa-solid fa-bell"&gt;&lt;/i&gt; &lt;strong&gt;Maintenance Window&lt;/strong&gt;&lt;/div&gt;
  &lt;button class="sb-cta"&gt;View Details&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 12: Actionable Inline Snackbar -->
    <div class="component-card" data-category="snackbars">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="inline-snackbar" id="inlineSnackPreview">
            <div class="snack-msg">Settings saved</div>
            <button class="snack-action" onclick="triggerToastDemo('success','Settings applied')">Undo</button>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Inline Snackbar</h3>
          <span>Snackbars</span>
        </div>
        <p>Small inline confirmation with optional undo action for quick interactions.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt12')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt12')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('success','Settings saved')"><i class="fa-solid fa-check"></i> Simulate</button>
        </div>
      </div>
      <pre id="nt12" class="code-block" style="display:none;"><code>&lt;div class="inline-snackbar"&gt;
  &lt;div class="snack-msg"&gt;Settings saved&lt;/div&gt;
  &lt;button class="snack-action"&gt;Undo&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 13: Centered Critical Modal Alert -->
    <div class="component-card" data-category="modals">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width modal-alert-preview">
          <div class="critical-modal" id="criticalModalPreview">
            <h4>Critical: Service Degraded</h4>
            <p>Multiple regions reporting increased latency. Immediate investigation recommended.</p>
            <div class="modal-actions">
              <button class="modal-btn ack" onclick="triggerToastDemo('error','Acknowledged')">Acknowledge</button>
              <button class="modal-btn dismiss" onclick="triggerToastDemo('info','Dismissed')">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Modal Alert</h3>
          <span>Critical</span>
        </div>
        <p>Centered modal-style alert for urgent system-wide notifications (preview only).</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt13')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt13')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('error','Modal Acknowledge')"><i class="fa-solid fa-exclamation-triangle"></i> Acknowledge</button>
        </div>
      </div>
      <pre id="nt13" class="code-block" style="display:none;"><code>&lt;div class="critical-modal"&gt;
  &lt;h4&gt;Critical: Service Degraded&lt;/h4&gt;
  &lt;p&gt;Multiple regions reporting increased latency.&lt;/p&gt;
  &lt;div class="modal-actions"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 14: Progress Toast List -->
    <div class="component-card" data-category="progress">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="progress-toast-list" id="progressToastPreview">
            <div class="progress-toast-item">
              <div class="progress-thumb"><i class="fa-solid fa-upload"></i></div>
              <div class="progress-line"><div class="progress-fill" style="width:38%"></div></div>
            </div>
            <div class="progress-toast-item">
              <div class="progress-thumb"><i class="fa-solid fa-database"></i></div>
              <div class="progress-line"><div class="progress-fill" style="width:62%"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Progress List</h3>
          <span>Multi-Progress</span>
        </div>
        <p>A vertical list of short progress toasts for concurrent transfers and background tasks.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt14')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt14')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="simulateProgressList()"><i class="fa-solid fa-play"></i> Simulate</button>
        </div>
      </div>
      <pre id="nt14" class="code-block" style="display:none;"><code>&lt;div class="progress-toast-item"&gt;&lt;div class="progress-thumb"&gt;&lt;/div&gt;&lt;div class="progress-line"&gt;&lt;div class="progress-fill" style="width:40%"&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;</code></pre>
    </div>

    <!-- 15: Avatar Notification Cluster -->
    <div class="component-card" data-category="avatars">
      <div class="card-preview dark-preview">
        <div class="card-interactive-area full-width">
          <div class="avatar-cluster" id="avatarClusterPreview">
            <div class="avatar-stack">
              <img src="https://i.pravatar.cc/100?img=13" alt="A">
              <img src="https://i.pravatar.cc/100?img=27" alt="B">
              <img src="https://i.pravatar.cc/100?img=51" alt="C">
            </div>
            <div class="avatar-count">+12</div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Avatar Cluster</h3>
          <span>Groups</span>
        </div>
        <p>Compact representation of multiple participants or recipients with stacked avatars and overflow counts.</p>
        <div class="card-actions">
          <button onclick="toggleCode('nt15')"><i class="fa-solid fa-code"></i> View Code</button>
          <button onclick="copyCode('nt15')"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="triggerToastDemo('info','3 participants added')"><i class="fa-solid fa-user-plus"></i> Notify</button>
        </div>
      </div>
      <pre id="nt15" class="code-block" style="display:none;"><code>&lt;div class="avatar-cluster"&gt;&lt;div class="avatar-stack"&gt;...&lt;/div&gt;&lt;div class="avatar-count"&gt;+12&lt;/div&gt;&lt;/div&gt;</code></pre>
    </div>

  </section>

</div>

<!-- LIVE TOAST CONTAINER FOR CORNER BANNERS -->
<div class="live-toast-container" id="liveToastContainer"></div>

<!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="footer-container">

    <div class="socials">
  <a href="https://github.com" target="_blank" title="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="https://twitter.com" target="_blank" title="Twitter">
    <i class="fab fa-x-twitter"></i>
  </a>
</div>

    <div class="footer-col">
      <h3>Explore</h3>
      <ul>
        <li><a href="button.html">Buttons</a></li>
        <li><a href="navbar.html">Navbars</a></li>
        <li><a href="cards.html">Cards</a></li>
        <li><a href="inputs.html">Inputs</a></li>
        <li><a href="forms.html">Forms</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Resources</h3>
      <ul>
        <li><a href="documentation.html">Documentation</a></li>
        <li><a href="contribute.html">Contribute</a></li>
        <li><a href="https://github.com/uiverse/uiverse" target="_blank">GitHub Repo</a></li>
        <li><a href="community.html">Community</a></li>
        <li><a href="support.html">Support</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Legal</h3>
      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="license.html">License</a></li>
      </ul>
    </div>

    <div class="footer-col newsletter">
      <h3>Stay Updated</h3>
      <p>Get notified when new components drop.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="your@email.com" />
        <button type="button" onclick="subscribe()">Subscribe</button>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
  </div>
</footer>



    
`
  })
};
