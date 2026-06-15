import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Badges',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Small status badges and indicators

### Info & Metadata
- **Category**: Badges
- **Tags**: <code>status</code>, <code>components</code>, <code>labels</code>, <code>tags</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">

  <!-- HERO -->

  <section class="hero-section">

    <div class="hero-badge">
      <i class="fa-solid fa-sparkles"></i> UIverse Badge Collection
    </div>

    <h1>
      Premium <span>Badges</span>
    </h1>

    <p>

      Futuristic badge components
      designed for dashboards,
      notifications, AI interfaces,
      admin panels and modern web apps.

    </p>

    <!-- HERO STATS -->

    <div class="hero-stats">

      <div class="hero-stat">

        <h2>
          120+
        </h2>

        <span>
          Components
        </span>

      </div>

      <div class="hero-stat">

        <h2>
          14K
        </h2>

        <span>
          Downloads
        </span>

      </div>

      <div class="hero-stat">

        <h2>
          4.9
        </h2>

        <span>
          Rating
        </span>

      </div>

    </div>

  </section>

  <!-- FILTERS -->

  <section class="filters-section">

    <button class="filter-btn active">
      All
    </button>

    <button class="filter-btn">
      Status
    </button>

    <button class="filter-btn">
      Notifications
    </button>

    <button class="filter-btn">
      Premium
    </button>

    <button class="filter-btn">
      Animated
    </button>

    <button class="filter-btn">
      Glass UI
    </button>

  </section>


  <div>
    <form class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter badges..." id="badgesSearch">
    </form>
  </div>

  <!-- GRID -->

  <section class="badges-grid">
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Enterprise</span>
        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="enterprise-badge">
          <i class="fa-solid fa-building-shield"></i>
          ENTERPRISE
        </span>
      </div>
      <h2>Enterprise Badge</h2>
      <p>Corporate-grade badge designed for enterprise software and SaaS tools.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Verified Pro</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="verified-pro-badge">
          <i class="fa-solid fa-badge-check"></i>
          VERIFIED PRO
        </span>
      </div>
      <h2>Verified Pro Badge</h2>
      <p>Professional verified badge for agencies, creators and premium businesses.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Startup</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="startup-badge">
          <i class="fa-solid fa-rocket"></i>
          STARTUP READY
        </span>
      </div>
      <h2>Startup Badge</h2>
      <p>Energetic launch-style badge built for startup products and innovation platforms.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">API</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="api-badge">
          <i class="fa-solid fa-plug"></i>
          API ENABLED
        </span>
      </div>
      <h2>API Badge</h2>
      <p>Technical API badge for developer products, integrations and tools.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gold</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="gold-badge">
          <i class="fa-solid fa-trophy"></i>
          GOLD MEMBER
        </span>
      </div>
      <h2>Gold Member Badge</h2>
      <p>Elegant gold membership badge with luxurious premium visual styling.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Payments</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="payment-badge">
          <i class="fa-solid fa-lock"></i>
          SECURE PAYMENT
        </span>
      </div>
      <h2>Secure Payment Badge</h2>
      <p>Trusted payment security badge for checkout systems and gateways.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Analytics</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="analytics-badge">
          <i class="fa-solid fa-chart-line"></i>
          ANALYTICS
        </span>
      </div>
      <h2>Analytics Badge</h2>
      <p>Modern data-focused badge for dashboards and analytics platforms.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Delivery</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="delivery-badge">
          <i class="fa-solid fa-truck-fast"></i>
          FAST DELIVERY
        </span>
      </div>
      <h2>Delivery Badge</h2>
      <p>Clean delivery status badge for e-commerce stores and logistics apps.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Security</span>
        <button class="save-btn active-save" data-a11y-remediation="button-label-needed">
          <i class="fa-solid fa-bookmark"></i>
        </button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="security-badge">
          <i class="fa-solid fa-shield-halved"></i>
          SECURE
        </span>
      </div>
      <h2>Security Badge</h2>
      <p>Enterprise-grade secure badge for authentication, banking and admin systems.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Trending</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="trending-badge">
          <i class="fa-solid fa-fire"></i>
          TRENDING
        </span>
      </div>
      <h2>Trending Badge</h2>
      <p>Dynamic hot-trend badge for products, creators and viral content sections.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Pro</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="pro-badge">
          <i class="fa-solid fa-gem"></i>
          PRO MEMBER
        </span>
      </div>
      <h2>Pro Badge</h2>
      <p>Elegant premium member badge for subscriptions and exclusive access plans.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Featured</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="featured-badge">
          <i class="fa-solid fa-star"></i>
          FEATURED
        </span>
      </div>
      <h2>Featured Badge</h2>
      <p>Clean highlighted badge for top content, products and recommended sections.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Web3</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="nft-badge">
          <i class="fa-solid fa-cube"></i>
          NFT VERIFIED
        </span>
      </div>
      <h2>NFT Badge</h2>
      <p>Futuristic Web3 badge crafted for blockchain apps and NFT marketplaces.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Cloud</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="cloud-badge">
          <i class="fa-solid fa-cloud"></i>
          CLOUD READY
        </span>
      </div>
      <h2>Cloud Badge</h2>
      <p>Modern cloud-ready badge ideal for SaaS platforms and deployment dashboards.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Elite</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="elite-badge">
          <i class="fa-solid fa-medal"></i>
          ELITE ACCESS
        </span>
      </div>
      <h2>Elite Badge</h2>
      <p>Premium elite badge with luxury aesthetics and glowing visual effects.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Developer</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="dev-badge">
          <i class="fa-solid fa-code"></i>
          DEV MODE
        </span>
      </div>
      <h2>Developer Badge</h2>
      <p>Stylish coding badge for developer tools, APIs and coding platforms.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

  <!-- =========================================
BADGE CARD — VERIFIED BADGE
========================================= -->

<div class="badge-card" role="region" aria-label="Badge template">

  <div class="card-top">

    <span class="card-tag">
      Verified
    </span>

    <button class="save-btn">
      <i class="fa-regular fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview">

    <span class="verified-badge">
      <i class="fa-solid fa-circle-check"></i>
      VERIFIED
    </span>

  </div>

  <h2>
    Verified Badge
  </h2>

  <p>

    Trusted verification badge
    for creators, brands and
    official profiles.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — GRADIENT BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      Gradient
    </span>

    <button class="save-btn active-save">
      <i class="fa-solid fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview dark-preview">

    <span class="gradient-badge">
      NEW FEATURE
    </span>

  </div>

  <h2>
    Gradient Badge
  </h2>

  <p>

    Smooth animated gradient
    badge for futuristic
    interfaces and apps.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — SALE BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      E-Commerce
    </span>

    <button class="save-btn">
      <i class="fa-regular fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview">

    <span class="sale-badge">
      -50% OFF
    </span>

  </div>

  <h2>
    Sale Badge
  </h2>

  <p>

    Modern discount badge
    for shopping websites
    and product cards.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — AI BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      AI
    </span>

    <button class="save-btn active-save">
      <i class="fa-solid fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview dark-preview">

    <span class="ai-badge">
      <i class="fa-solid fa-robot"></i>
      AI POWERED
    </span>

  </div>

  <h2>
    AI Badge
  </h2>

  <p>

    Smart futuristic badge
    for AI dashboards and
    automation tools.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — BETA BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      Beta
    </span>

    <button class="save-btn">
      <i class="fa-regular fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview">

    <span class="beta-badge">
      BETA
    </span>

  </div>

  <h2>
    Beta Badge
  </h2>

  <p>

    Clean beta release badge
    for upcoming products
    and testing systems.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — VIP BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      VIP
    </span>

    <button class="save-btn active-save">
      <i class="fa-solid fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview dark-preview">

    <span class="vip-badge">
      <i class="fa-solid fa-crown"></i>
      VIP ACCESS
    </span>

  </div>

  <h2>
    VIP Badge
  </h2>

  <p>

    Luxury premium badge
    with elegant gold styling
    and glow effects.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>



    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Status
        </span>

        <button class="save-btn">
          <i class="fa-regular fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview">

        <span class="badge success-badge" role="status">
          Approved
        </span>

        <span class="badge warning-badge" role="status">
          Pending
        </span>

        <span class="badge danger-badge" role="status">
          Rejected
        </span>

      </div>

      <h2>
        Status Badges
      </h2>

      <p>

        Minimal soft status
        indicators for admin
        panels and dashboards.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Neon
        </span>

        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview dark-preview">

        <span class="badge-neon">
          ONLINE
        </span>

      </div>

      <h2>
        Cyber Neon Badge
      </h2>

      <p>

        Futuristic cyberpunk
        neon glowing badge
        with terminal vibes.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Notification
        </span>

        <button class="save-btn">
          <i class="fa-regular fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview">

        <div class="notification-box">

          <i class="fa-solid fa-bell"></i>

          <span class="notify-count">
            9+
          </span>

        </div>

      </div>

      <h2>
        Notification Badge
      </h2>

      <p>

        Floating alert counter
        for inboxes and
        notification systems.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Premium
        </span>

        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview dark-preview">

        <span class="badge-holo">
          ULTRA PRO
        </span>

      </div>

      <h2>
        Holographic Badge
      </h2>

      <p>

        Animated holographic
        gradients with futuristic
        premium visuals.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Live
        </span>

        <button class="save-btn">
          <i class="fa-regular fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview">

        <span class="live-badge">

          <span class="pulse"></span>

          LIVE STREAM

        </span>

      </div>

      <h2>
        Live Indicator
      </h2>

      <p>

        Animated live badge
        with pulse effect for
        streaming interfaces.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Glass
        </span>

        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview glass-preview">

        <span class="glass-badge">

          <i class="fa-solid fa-bolt"></i>

          PREMIUM UI

        </span>

      </div>

      <h2>
        Glassmorphism Badge
      </h2>

      <p>

        Frosted glass badge
        with premium blur
        effects and gradients.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD 7 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gaming</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="rank-badge">
          <i class="fa-solid fa-crown"></i> MVP
        </span>
      </div>
      <h2>Rank Badge</h2>
      <p>Gold themed prestige badge for leaderboards and gaming.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 8 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Animated</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="outline-pulse-badge">Recording</span>
      </div>
      <h2>Pulsing Outline Badge</h2>
      <p>Minimalistic outline badge with a radiating animation effect.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 9 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Premium</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="gradient-border-badge">PRO PLAN</span>
      </div>
      <h2>Gradient Border Badge</h2>
      <p>Sleek badge featuring a colorful gradient border and dark core.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 10 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">UI</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="role-pill-badge moderator">
          <span class="role-icon"><i class="fa-solid fa-shield-halved"></i></span>
          <span class="role-text">Moderator</span>
        </span>
      </div>
      <h2>Role Pill Badge</h2>
      <p>Split pill design ideal for user roles and forum titles.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 11 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">3D</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="chip-3d-badge">v2.0 Beta</span>
      </div>
      <h2>Floating 3D Badge</h2>
      <p>Isometric 3D pill badge with soft floating shadow effects.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>


    <!-- CARD 12 — Verified Tick Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Verified</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="verified-badge">
          <i class="fa-solid fa-circle-check"></i>
          Verified Creator
        </span>
      </div>
      <h2>Verified Tick Badge</h2>
      <p>Sleek identity badge with a glowing checkmark for verified accounts and creators.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 13 — XP Progress Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gaming</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <div class="xp-badge">
          <div class="xp-top">
            <span class="xp-label">⚡ Level 24</span>
            <span class="xp-pct">72%</span>
          </div>
          <div class="xp-bar-track">
            <div class="xp-bar-fill"></div>
          </div>
        </div>
      </div>
      <h2>XP Progress Badge</h2>
      <p>Animated XP bar badge for gaming dashboards and gamified apps.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 14 — Countdown Timer Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Event</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="countdown-badge">
          <i class="fa-regular fa-clock"></i>
          <span class="cd-sep">02</span>:
          <span class="cd-sep">47</span>:
          <span class="cd-sep">59</span>
          <span class="cd-label">left</span>
        </span>
      </div>
      <h2>Countdown Timer Badge</h2>
      <p>Live-style countdown badge for sales, events, and limited offers.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 15 — Tag Stack Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Labels</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <div class="tag-stack">
          <span class="tag-chip blue">React</span>
          <span class="tag-chip purple">TypeScript</span>
          <span class="tag-chip green">Node.js</span>
          <span class="tag-chip orange">+4</span>
        </div>
      </div>
      <h2>Tag Stack Badge</h2>
      <p>Compact stacked tag chips for skills, frameworks, and category labels.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 16 — Aurora Glow Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Premium</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="aurora-badge">✦ ELITE ACCESS</span>
      </div>
      <h2>Aurora Glow Badge</h2>
      <p>Dreamy aurora-tinted badge with shifting colour glow for elite or VIP tiers.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD -->
<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Styles</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-solid">Solid</span>
    <span class="badge badge-outline">Outlined</span>
    <span class="badge badge-gradient">Gradient</span>
  </div>

  <h2>Style Variations</h2>
  <p>Solid, outlined, and gradient badges for flexible UI design.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Sizes</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-sm badge-solid">Small</span>
    <span class="badge badge-md badge-solid">Medium</span>
    <span class="badge badge-lg badge-solid">Large</span>
  </div>

  <h2>Size Variations</h2>
  <p>Responsive badge sizes for different contexts.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Status</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-success">Success</span>
    <span class="badge badge-danger">Error</span>
    <span class="badge badge-warning">Warning</span>
  </div>

  <h2>Status Badges</h2>
  <p>Success, danger, and warning indicators for dashboards.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Animated</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-pulse">5</span>
  </div>

  <h2>Pulse Badge</h2>
  <p>Animated pulse effect for notifications and alerts.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Icons</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Active</span>
    <span class="badge badge-danger"><i class="fa-solid fa-circle-xmark"></i> Offline</span>
  </div>

  <h2>Icon Badges</h2>
  <p>Badges with integrated icons for status and labels.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>
    <!-- CARD 17 — AI Status Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">AI / System</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="ai-status-badge"><span class="ai-dot"></span> AI Processing</span>
      </div>
      <h2>AI Status Badge</h2>
      <p>Pulsing dot badge for AI and async processing states in dashboards.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 18 — Beta Tag -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Label</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="beta-tag"><i class="fa-solid fa-vial"></i></i> Beta</span>
      </div>
      <h2>Beta Tag</h2>
      <p>Compact amber label for marking experimental or unreleased features.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 19 — Version Chip -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Dev</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="version-chip"><span class="vc-label">v</span><span class="vc-num">3.2.1</span></span>
      </div>
      <h2>Version Chip</h2>
      <p>Split-pill version label for changelogs, release notes, and package badges.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 20 — Streak Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gamification</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="streak-badge"><span class="streak-flame"><i class="fa-solid fa-fire"></i></span> 14-Day Streak</span>
      </div>
      <h2>Streak Badge</h2>
      <p>Animated flame badge for streaks, daily goals, and habit trackers.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 21 — Trust Score -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Reputation</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="trust-badge">
          <span class="trust-num">98</span>
          <span class="trust-meta">
            <span class="trust-label">Trust Score</span>
            <span class="trust-sub">Top 1% seller</span>
          </span>
        </span>
      </div>
      <h2>Trust Score Badge</h2>
      <p>Numeric reputation badge for marketplaces, profiles, and review systems.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 22 — New Arrival -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">E-commerce</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="new-arrival-badge"><i class="fa-solid fa-tag"></i> New Arrival</span>
      </div>
      <h2>New Arrival Badge</h2>
      <p>Glowing gradient pill for highlighting new products and featured drops.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 23 — Permission Chips -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Permissions</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <div class="perm-set">
          <span class="perm-chip read"><i class="fa-solid fa-eye"></i> Read</span>
          <span class="perm-chip write"><i class="fa-solid fa-pencil"></i> Write</span>
          <span class="perm-chip admin"><i class="fa-solid fa-shield-halved"></i> Admin</span>
        </div>
      </div>
      <h2>Permission Chips</h2>
      <p>Color-coded access level chips for admin panels and user management UIs.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 24 — Typing Indicator -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Chat / UI</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="typing-badge">
          <div class="dots">
            <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          AI is typing
        </span>
      </div>
      <h2>Typing Indicator Badge</h2>
      <p>Bouncing dots badge for chat apps and AI response loading states.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

  </section>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`/badges.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css\`

#### JavaScript Scripts:
- \`/dist/shared.js\`
- \`/badges.js\`

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
    title: 'Badges',
    styles: ["/design-tokens.css","/dist/shared.css","/badges.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"],
    content: `<main class="main-home">

  <!-- HERO -->

  <section class="hero-section">

    <div class="hero-badge">
      <i class="fa-solid fa-sparkles"></i> UIverse Badge Collection
    </div>

    <h1>
      Premium <span>Badges</span>
    </h1>

    <p>

      Futuristic badge components
      designed for dashboards,
      notifications, AI interfaces,
      admin panels and modern web apps.

    </p>

    <!-- HERO STATS -->

    <div class="hero-stats">

      <div class="hero-stat">

        <h2>
          120+
        </h2>

        <span>
          Components
        </span>

      </div>

      <div class="hero-stat">

        <h2>
          14K
        </h2>

        <span>
          Downloads
        </span>

      </div>

      <div class="hero-stat">

        <h2>
          4.9
        </h2>

        <span>
          Rating
        </span>

      </div>

    </div>

  </section>

  <!-- FILTERS -->

  <section class="filters-section">

    <button class="filter-btn active">
      All
    </button>

    <button class="filter-btn">
      Status
    </button>

    <button class="filter-btn">
      Notifications
    </button>

    <button class="filter-btn">
      Premium
    </button>

    <button class="filter-btn">
      Animated
    </button>

    <button class="filter-btn">
      Glass UI
    </button>

  </section>


  <div>
    <form class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Filter badges..." id="badgesSearch">
    </form>
  </div>

  <!-- GRID -->

  <section class="badges-grid">
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Enterprise</span>
        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="enterprise-badge">
          <i class="fa-solid fa-building-shield"></i>
          ENTERPRISE
        </span>
      </div>
      <h2>Enterprise Badge</h2>
      <p>Corporate-grade badge designed for enterprise software and SaaS tools.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Verified Pro</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="verified-pro-badge">
          <i class="fa-solid fa-badge-check"></i>
          VERIFIED PRO
        </span>
      </div>
      <h2>Verified Pro Badge</h2>
      <p>Professional verified badge for agencies, creators and premium businesses.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Startup</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="startup-badge">
          <i class="fa-solid fa-rocket"></i>
          STARTUP READY
        </span>
      </div>
      <h2>Startup Badge</h2>
      <p>Energetic launch-style badge built for startup products and innovation platforms.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">API</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="api-badge">
          <i class="fa-solid fa-plug"></i>
          API ENABLED
        </span>
      </div>
      <h2>API Badge</h2>
      <p>Technical API badge for developer products, integrations and tools.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gold</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="gold-badge">
          <i class="fa-solid fa-trophy"></i>
          GOLD MEMBER
        </span>
      </div>
      <h2>Gold Member Badge</h2>
      <p>Elegant gold membership badge with luxurious premium visual styling.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Payments</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="payment-badge">
          <i class="fa-solid fa-lock"></i>
          SECURE PAYMENT
        </span>
      </div>
      <h2>Secure Payment Badge</h2>
      <p>Trusted payment security badge for checkout systems and gateways.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Analytics</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="analytics-badge">
          <i class="fa-solid fa-chart-line"></i>
          ANALYTICS
        </span>
      </div>
      <h2>Analytics Badge</h2>
      <p>Modern data-focused badge for dashboards and analytics platforms.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Delivery</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="delivery-badge">
          <i class="fa-solid fa-truck-fast"></i>
          FAST DELIVERY
        </span>
      </div>
      <h2>Delivery Badge</h2>
      <p>Clean delivery status badge for e-commerce stores and logistics apps.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Security</span>
        <button class="save-btn active-save" data-a11y-remediation="button-label-needed">
          <i class="fa-solid fa-bookmark"></i>
        </button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="security-badge">
          <i class="fa-solid fa-shield-halved"></i>
          SECURE
        </span>
      </div>
      <h2>Security Badge</h2>
      <p>Enterprise-grade secure badge for authentication, banking and admin systems.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Trending</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="trending-badge">
          <i class="fa-solid fa-fire"></i>
          TRENDING
        </span>
      </div>
      <h2>Trending Badge</h2>
      <p>Dynamic hot-trend badge for products, creators and viral content sections.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Pro</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="pro-badge">
          <i class="fa-solid fa-gem"></i>
          PRO MEMBER
        </span>
      </div>
      <h2>Pro Badge</h2>
      <p>Elegant premium member badge for subscriptions and exclusive access plans.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Featured</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="featured-badge">
          <i class="fa-solid fa-star"></i>
          FEATURED
        </span>
      </div>
      <h2>Featured Badge</h2>
      <p>Clean highlighted badge for top content, products and recommended sections.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Web3</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="nft-badge">
          <i class="fa-solid fa-cube"></i>
          NFT VERIFIED
        </span>
      </div>
      <h2>NFT Badge</h2>
      <p>Futuristic Web3 badge crafted for blockchain apps and NFT marketplaces.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Cloud</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="cloud-badge">
          <i class="fa-solid fa-cloud"></i>
          CLOUD READY
        </span>
      </div>
      <h2>Cloud Badge</h2>
      <p>Modern cloud-ready badge ideal for SaaS platforms and deployment dashboards.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Elite</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="elite-badge">
          <i class="fa-solid fa-medal"></i>
          ELITE ACCESS
        </span>
      </div>
      <h2>Elite Badge</h2>
      <p>Premium elite badge with luxury aesthetics and glowing visual effects.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Developer</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="dev-badge">
          <i class="fa-solid fa-code"></i>
          DEV MODE
        </span>
      </div>
      <h2>Developer Badge</h2>
      <p>Stylish coding badge for developer tools, APIs and coding platforms.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

  <!-- =========================================
BADGE CARD — VERIFIED BADGE
========================================= -->

<div class="badge-card" role="region" aria-label="Badge template">

  <div class="card-top">

    <span class="card-tag">
      Verified
    </span>

    <button class="save-btn">
      <i class="fa-regular fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview">

    <span class="verified-badge">
      <i class="fa-solid fa-circle-check"></i>
      VERIFIED
    </span>

  </div>

  <h2>
    Verified Badge
  </h2>

  <p>

    Trusted verification badge
    for creators, brands and
    official profiles.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — GRADIENT BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      Gradient
    </span>

    <button class="save-btn active-save">
      <i class="fa-solid fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview dark-preview">

    <span class="gradient-badge">
      NEW FEATURE
    </span>

  </div>

  <h2>
    Gradient Badge
  </h2>

  <p>

    Smooth animated gradient
    badge for futuristic
    interfaces and apps.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — SALE BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      E-Commerce
    </span>

    <button class="save-btn">
      <i class="fa-regular fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview">

    <span class="sale-badge">
      -50% OFF
    </span>

  </div>

  <h2>
    Sale Badge
  </h2>

  <p>

    Modern discount badge
    for shopping websites
    and product cards.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — AI BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      AI
    </span>

    <button class="save-btn active-save">
      <i class="fa-solid fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview dark-preview">

    <span class="ai-badge">
      <i class="fa-solid fa-robot"></i>
      AI POWERED
    </span>

  </div>

  <h2>
    AI Badge
  </h2>

  <p>

    Smart futuristic badge
    for AI dashboards and
    automation tools.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — BETA BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      Beta
    </span>

    <button class="save-btn">
      <i class="fa-regular fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview">

    <span class="beta-badge">
      BETA
    </span>

  </div>

  <h2>
    Beta Badge
  </h2>

  <p>

    Clean beta release badge
    for upcoming products
    and testing systems.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>

<!-- =========================================
BADGE CARD — VIP BADGE
========================================= -->

<div class="badge-card">

  <div class="card-top">

    <span class="card-tag">
      VIP
    </span>

    <button class="save-btn active-save">
      <i class="fa-solid fa-bookmark"></i>
    </button>

  </div>

  <div class="badge-preview dark-preview">

    <span class="vip-badge">
      <i class="fa-solid fa-crown"></i>
      VIP ACCESS
    </span>

  </div>

  <h2>
    VIP Badge
  </h2>

  <p>

    Luxury premium badge
    with elegant gold styling
    and glow effects.

  </p>

  <div class="card-actions">

    <button>
      Preview
    </button>

    <button>
      Copy
    </button>

  </div>

</div>



    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Status
        </span>

        <button class="save-btn">
          <i class="fa-regular fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview">

        <span class="badge success-badge" role="status">
          Approved
        </span>

        <span class="badge warning-badge" role="status">
          Pending
        </span>

        <span class="badge danger-badge" role="status">
          Rejected
        </span>

      </div>

      <h2>
        Status Badges
      </h2>

      <p>

        Minimal soft status
        indicators for admin
        panels and dashboards.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Neon
        </span>

        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview dark-preview">

        <span class="badge-neon">
          ONLINE
        </span>

      </div>

      <h2>
        Cyber Neon Badge
      </h2>

      <p>

        Futuristic cyberpunk
        neon glowing badge
        with terminal vibes.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Notification
        </span>

        <button class="save-btn">
          <i class="fa-regular fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview">

        <div class="notification-box">

          <i class="fa-solid fa-bell"></i>

          <span class="notify-count">
            9+
          </span>

        </div>

      </div>

      <h2>
        Notification Badge
      </h2>

      <p>

        Floating alert counter
        for inboxes and
        notification systems.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Premium
        </span>

        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview dark-preview">

        <span class="badge-holo">
          ULTRA PRO
        </span>

      </div>

      <h2>
        Holographic Badge
      </h2>

      <p>

        Animated holographic
        gradients with futuristic
        premium visuals.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Live
        </span>

        <button class="save-btn">
          <i class="fa-regular fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview">

        <span class="live-badge">

          <span class="pulse"></span>

          LIVE STREAM

        </span>

      </div>

      <h2>
        Live Indicator
      </h2>

      <p>

        Animated live badge
        with pulse effect for
        streaming interfaces.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD -->

    <div class="badge-card">

      <div class="card-top">

        <span class="card-tag">
          Glass
        </span>

        <button class="save-btn active-save">
          <i class="fa-solid fa-bookmark"></i>
        </button>

      </div>

      <div class="badge-preview glass-preview">

        <span class="glass-badge">

          <i class="fa-solid fa-bolt"></i>

          PREMIUM UI

        </span>

      </div>

      <h2>
        Glassmorphism Badge
      </h2>

      <p>

        Frosted glass badge
        with premium blur
        effects and gradients.

      </p>

      <div class="card-actions">

        <button>
          Preview
        </button>

        <button>
          Copy
        </button>

      </div>

    </div>

    <!-- CARD 7 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gaming</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="rank-badge">
          <i class="fa-solid fa-crown"></i> MVP
        </span>
      </div>
      <h2>Rank Badge</h2>
      <p>Gold themed prestige badge for leaderboards and gaming.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 8 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Animated</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="outline-pulse-badge">Recording</span>
      </div>
      <h2>Pulsing Outline Badge</h2>
      <p>Minimalistic outline badge with a radiating animation effect.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 9 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Premium</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="gradient-border-badge">PRO PLAN</span>
      </div>
      <h2>Gradient Border Badge</h2>
      <p>Sleek badge featuring a colorful gradient border and dark core.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 10 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">UI</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="role-pill-badge moderator">
          <span class="role-icon"><i class="fa-solid fa-shield-halved"></i></span>
          <span class="role-text">Moderator</span>
        </span>
      </div>
      <h2>Role Pill Badge</h2>
      <p>Split pill design ideal for user roles and forum titles.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 11 -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">3D</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="chip-3d-badge">v2.0 Beta</span>
      </div>
      <h2>Floating 3D Badge</h2>
      <p>Isometric 3D pill badge with soft floating shadow effects.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>


    <!-- CARD 12 — Verified Tick Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Verified</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="verified-badge">
          <i class="fa-solid fa-circle-check"></i>
          Verified Creator
        </span>
      </div>
      <h2>Verified Tick Badge</h2>
      <p>Sleek identity badge with a glowing checkmark for verified accounts and creators.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 13 — XP Progress Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gaming</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <div class="xp-badge">
          <div class="xp-top">
            <span class="xp-label">⚡ Level 24</span>
            <span class="xp-pct">72%</span>
          </div>
          <div class="xp-bar-track">
            <div class="xp-bar-fill"></div>
          </div>
        </div>
      </div>
      <h2>XP Progress Badge</h2>
      <p>Animated XP bar badge for gaming dashboards and gamified apps.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 14 — Countdown Timer Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Event</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <span class="countdown-badge">
          <i class="fa-regular fa-clock"></i>
          <span class="cd-sep">02</span>:
          <span class="cd-sep">47</span>:
          <span class="cd-sep">59</span>
          <span class="cd-label">left</span>
        </span>
      </div>
      <h2>Countdown Timer Badge</h2>
      <p>Live-style countdown badge for sales, events, and limited offers.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 15 — Tag Stack Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Labels</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview">
        <div class="tag-stack">
          <span class="tag-chip blue">React</span>
          <span class="tag-chip purple">TypeScript</span>
          <span class="tag-chip green">Node.js</span>
          <span class="tag-chip orange">+4</span>
        </div>
      </div>
      <h2>Tag Stack Badge</h2>
      <p>Compact stacked tag chips for skills, frameworks, and category labels.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD 16 — Aurora Glow Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Premium</span>
        <button class="save-btn active-save"><i class="fa-solid fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="aurora-badge">✦ ELITE ACCESS</span>
      </div>
      <h2>Aurora Glow Badge</h2>
      <p>Dreamy aurora-tinted badge with shifting colour glow for elite or VIP tiers.</p>
      <div class="card-actions">
        <button>Preview</button><button>Copy</button>
      </div>
    </div>

    <!-- CARD -->
<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Styles</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-solid">Solid</span>
    <span class="badge badge-outline">Outlined</span>
    <span class="badge badge-gradient">Gradient</span>
  </div>

  <h2>Style Variations</h2>
  <p>Solid, outlined, and gradient badges for flexible UI design.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Sizes</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-sm badge-solid">Small</span>
    <span class="badge badge-md badge-solid">Medium</span>
    <span class="badge badge-lg badge-solid">Large</span>
  </div>

  <h2>Size Variations</h2>
  <p>Responsive badge sizes for different contexts.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Status</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-success">Success</span>
    <span class="badge badge-danger">Error</span>
    <span class="badge badge-warning">Warning</span>
  </div>

  <h2>Status Badges</h2>
  <p>Success, danger, and warning indicators for dashboards.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Animated</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-pulse">5</span>
  </div>

  <h2>Pulse Badge</h2>
  <p>Animated pulse effect for notifications and alerts.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>

<div class="badge-card">
  <div class="card-top">
    <span class="card-tag">Icons</span>
    <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
  </div>

  <div class="badge-preview">
    <span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Active</span>
    <span class="badge badge-danger"><i class="fa-solid fa-circle-xmark"></i> Offline</span>
  </div>

  <h2>Icon Badges</h2>
  <p>Badges with integrated icons for status and labels.</p>

  <div class="card-actions">
    <button>Preview</button>
    <button>Copy</button>
  </div>
</div>
    <!-- CARD 17 — AI Status Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">AI / System</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="ai-status-badge"><span class="ai-dot"></span> AI Processing</span>
      </div>
      <h2>AI Status Badge</h2>
      <p>Pulsing dot badge for AI and async processing states in dashboards.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 18 — Beta Tag -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Label</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="beta-tag"><i class="fa-solid fa-vial"></i></i> Beta</span>
      </div>
      <h2>Beta Tag</h2>
      <p>Compact amber label for marking experimental or unreleased features.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 19 — Version Chip -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Dev</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="version-chip"><span class="vc-label">v</span><span class="vc-num">3.2.1</span></span>
      </div>
      <h2>Version Chip</h2>
      <p>Split-pill version label for changelogs, release notes, and package badges.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 20 — Streak Badge -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Gamification</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="streak-badge"><span class="streak-flame"><i class="fa-solid fa-fire"></i></span> 14-Day Streak</span>
      </div>
      <h2>Streak Badge</h2>
      <p>Animated flame badge for streaks, daily goals, and habit trackers.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 21 — Trust Score -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Reputation</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="trust-badge">
          <span class="trust-num">98</span>
          <span class="trust-meta">
            <span class="trust-label">Trust Score</span>
            <span class="trust-sub">Top 1% seller</span>
          </span>
        </span>
      </div>
      <h2>Trust Score Badge</h2>
      <p>Numeric reputation badge for marketplaces, profiles, and review systems.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 22 — New Arrival -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">E-commerce</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="new-arrival-badge"><i class="fa-solid fa-tag"></i> New Arrival</span>
      </div>
      <h2>New Arrival Badge</h2>
      <p>Glowing gradient pill for highlighting new products and featured drops.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 23 — Permission Chips -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Permissions</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <div class="perm-set">
          <span class="perm-chip read"><i class="fa-solid fa-eye"></i> Read</span>
          <span class="perm-chip write"><i class="fa-solid fa-pencil"></i> Write</span>
          <span class="perm-chip admin"><i class="fa-solid fa-shield-halved"></i> Admin</span>
        </div>
      </div>
      <h2>Permission Chips</h2>
      <p>Color-coded access level chips for admin panels and user management UIs.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

    <!-- CARD 24 — Typing Indicator -->
    <div class="badge-card">
      <div class="card-top">
        <span class="card-tag">Chat / UI</span>
        <button class="save-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
      <div class="badge-preview dark-preview">
        <span class="typing-badge">
          <div class="dots">
            <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          AI is typing
        </span>
      </div>
      <h2>Typing Indicator Badge</h2>
      <p>Bouncing dots badge for chat apps and AI response loading states.</p>
      <div class="card-actions"><button>Preview</button><button>Copy</button></div>
    </div>

  </section>

</main>`
  })
};
