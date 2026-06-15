import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Sections',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Page section layout templates

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>sections</code>, <code>layout</code>, <code>page</code>, <code>structure</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">

  <!-- HERO -->

  <section class="hero-section">

    <div class="hero-badge">
      ✦ Premium Website Layouts
    </div>

    <h1>
      Modern <span>Website Sections</span>
    </h1>

    <p>

      Discover premium reusable website
      sections crafted for modern interfaces.
      Hero blocks, pricing layouts, stats,
      testimonials and more.

    </p>

  </section>

  <!-- =====================================================
PROFESSIONAL SECTION COMPONENTS
ADD INSIDE .sections-grid
===================================================== -->
<div class="sections-grid">

  <div class="section-card premium-card">
    <div class="section-icon gradient-crimson">🔒</div>
    <span class="card-tag">SECURITY</span>
    <h2>Security Sections</h2>
    <p>Cybersecurity landing pages for authentication, protection, and privacy tools.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-blue">📊</div>
    <span class="card-tag">DASHBOARD</span>
    <h2>Admin Dashboard Sections</h2>
    <p>Analytics-driven admin panels with charts, tables, and KPI widgets.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-purple">🌐</div>
    <span class="card-tag">COMMUNITY</span>
    <h2>Community Sections</h2>
    <p>Forum and social community layouts for engagement-driven platforms.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-gold">🧾</div>
    <span class="card-tag">BILLING</span>
    <h2>Billing Sections</h2>
    <p>Subscription billing, invoices, and payment management UI sections.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-navy">📦</div>
    <span class="card-tag">DEVELOPERS</span>
    <h2>API Sections</h2>
    <p>Developer-focused layouts for API documentation and integration guides.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-teal">🧭</div>
    <span class="card-tag">LANDING</span>
    <h2>Landing Sections</h2>
    <p>High-conversion landing page blocks with modern UX patterns.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-rose">🎁</div>
    <span class="card-tag">PROMO</span>
    <h2>Offer Sections</h2>
    <p>Discount banners, promotions, and limited-time offer UI layouts.</p>
    <a href="#">View Section</a>
  </div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-indigo">
    🏦
  </div>

  <span class="card-tag">
    ENTERPRISE
  </span>

  <h2>Enterprise Sections</h2>

  <p>
    Corporate enterprise layouts designed for scalable business platforms.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-emerald">
    💚
  </div>

  <span class="card-tag">
    HEALTHCARE
  </span>

  <h2>Healthcare Sections</h2>

  <p>
    Clean medical and healthcare website sections with modern UI patterns.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-rose">
    🏡
  </div>

  <span class="card-tag">
    REAL ESTATE
  </span>

  <h2>Property Sections</h2>

  <p>
    Real estate listing and property showcase layouts with elegant visuals.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-teal">
    📦
  </div>

  <span class="card-tag">
    LOGISTICS
  </span>

  <h2>Logistics Sections</h2>

  <p>
    Delivery and logistics management layouts for transport businesses.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-yellow">
    ☀️
  </div>

  <span class="card-tag">
    ENERGY
  </span>

  <h2>Energy Sections</h2>

  <p>
    Renewable energy and sustainability focused website layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-magenta">
    🎵
  </div>

  <span class="card-tag">
    MUSIC
  </span>

  <h2>Music Sections</h2>

  <p>
    Audio streaming and artist portfolio layouts with immersive visuals.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-navy">
    🛰️
  </div>

  <span class="card-tag">
    TECH
  </span>

  <h2>Tech Sections</h2>

  <p>
    Modern technology startup and innovation-focused landing layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-crimson">
    🍔
  </div>

  <span class="card-tag">
    FOOD
  </span>

  <h2>Restaurant Sections</h2>

  <p>
    Restaurant and food delivery layouts crafted for premium dining brands.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-silver">
    🚗
  </div>

  <span class="card-tag">
    AUTOMOTIVE
  </span>

  <h2>Automotive Sections</h2>

  <p>
    Vehicle showcase and automotive service layouts with sleek design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-aqua">
    ✈️
  </div>

  <span class="card-tag">
    AVIATION
  </span>

  <h2>Aviation Sections</h2>

  <p>
    Airline booking and aviation inspired layouts with futuristic UI.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-platinum">
    💼
  </div>

  <span class="card-tag">
    AGENCY
  </span>

  <h2>Agency Sections</h2>

  <p>
    Creative digital agency layouts built with bold typography and visuals.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-lavender">
    📚
  </div>

  <span class="card-tag">
    LIBRARY
  </span>

  <h2>Knowledge Sections</h2>

  <p>
    Documentation and knowledge-base layouts for modern web platforms.
  </p>

  <a href="#">
    View Section
  </a>

</div>

  <!-- FILTER -->

  <section class="filter-bar">

    <button class="filter-btn active">
      All
    </button>

    <button class="filter-btn">
      Hero
    </button>

    <button class="filter-btn">
      Pricing
    </button>

    <button class="filter-btn">
      Stats
    </button>

    <button class="filter-btn">
      Features
    </button>

  </section>

  <!-- MODERN SECTION COMPONENTS -->
  <section class="sections-grid">

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-purple">
    🚀
  </div>

  <span class="card-tag">
    STARTUP
  </span>

  <h2>Startup Sections</h2>

  <p>
    Modern startup landing page layouts with animated UI and bold typography.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-blue">
    💳
  </div>

  <span class="card-tag">
    FINTECH
  </span>

  <h2>Fintech Sections</h2>

  <p>
    Banking, payment and financial dashboard layouts with premium UI design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-pink">
    🛍️
  </div>

  <span class="card-tag">
    SHOPPING
  </span>

  <h2>Storefront Sections</h2>

  <p>
    Modern storefront and product discovery sections for online brands.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-green">
    🧑‍💻
  </div>

  <span class="card-tag">
    SAAS
  </span>

  <h2>SaaS Sections</h2>

  <p>
    SaaS dashboard and software showcase layouts with modern UX patterns.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-orange">
    🎬
  </div>

  <span class="card-tag">
    MEDIA
  </span>

  <h2>Streaming Sections</h2>

  <p>
    Netflix-inspired media layouts with cinematic cards and hero banners.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-cyan">
    📈
  </div>

  <span class="card-tag">
    BUSINESS
  </span>

  <h2>Growth Sections</h2>

  <p>
    KPI and growth showcase layouts with modern analytics inspired design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-red">
    🏢
  </div>

  <span class="card-tag">
    CORPORATE
  </span>

  <h2>Corporate Sections</h2>

  <p>
    Elegant enterprise and business layouts built for professional brands.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-gold">
    🎓
  </div>

  <span class="card-tag">
    EDUCATION
  </span>

  <h2>Learning Sections</h2>

  <p>
    Online course and education layouts with modern interactive UI blocks.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-dark">
    🌌
  </div>

  <span class="card-tag">
    FUTURE UI
  </span>

  <h2>Cyberpunk Sections</h2>

  <p>
    Futuristic neon-inspired layouts for gaming and AI interfaces.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-sky">
    ☁️
  </div>

  <span class="card-tag">
    CLOUD
  </span>

  <h2>Cloud Sections</h2>

  <p>
    Cloud platform and hosting layouts with premium glassmorphism styling.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-violet">
    📦
  </div>

  <span class="card-tag">
    PRODUCT
  </span>

  <h2>Product Launch</h2>

  <p>
    Product announcement and feature release layouts for modern startups.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-lime">
    🌿
  </div>

  <span class="card-tag">
    ECO
  </span>

  <h2>Eco Sections</h2>

  <p>
    Sustainable and eco-friendly brand sections with clean modern design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon orange">
        🚀
      </div>

      <span class="card-label">
        HERO
      </span>

      <h2>
        Hero Sections
      </h2>

      <p>

        Premium landing page hero
        layouts with modern typography,
        gradients and CTA buttons.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- ADD THESE NEW COMPONENTS INSIDE .sections-container -->

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🛒
  </div>

  <h2>E-Commerce Sections</h2>

  <p>
    Product showcase and shopping UI layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🎨
  </div>

  <h2>Portfolio Sections</h2>

  <p>
    Creative portfolio layouts for designers and developers.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    📱
  </div>

  <h2>App Showcase</h2>

  <p>
    Mobile app presentation and download sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🧠
  </div>

  <h2>AI Sections</h2>

  <p>
    Futuristic AI startup and chatbot website layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🎥
  </div>

  <h2>Video Sections</h2>

  <p>
    Video showcase blocks with modern media layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    📰
  </div>

  <h2>Blog Sections</h2>

  <p>
    Responsive article and blog listing layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    📅
  </div>

  <h2>Event Sections</h2>

  <p>
    Event schedule and conference landing sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🔐
  </div>

  <h2>Authentication</h2>

  <p>
    Login, signup and password recovery sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🌍
  </div>

  <h2>Travel Sections</h2>

  <p>
    Tourism and travel destination website layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🏆
  </div>

  <h2>Achievement Sections</h2>

  <p>
    Awards, milestones and company achievement blocks.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🎯
  </div>

  <h2>CTA Sections</h2>

  <p>
    High-converting call-to-action website sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    ⚡
  </div>

  <h2>Service Sections</h2>

  <p>
    Professional service showcase layouts for agencies.
  </p>

  <a href="#">
    View Section
  </a>

</div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon purple">
        💼
      </div>

      <span class="card-label">
        PRICING
      </span>

      <h2>
        Pricing Sections
      </h2>

      <p>

        Responsive SaaS pricing layouts
        with premium UI cards and
        subscription tables.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon blue">
        ⭐
      </div>

      <span class="card-label">
        TESTIMONIALS
      </span>

      <h2>
        Testimonial Blocks
      </h2>

      <p>

        Beautiful review and feedback
        sections with glassmorphism
        inspired layouts.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon green">
        📊
      </div>

      <span class="card-label">
        STATS
      </span>

      <h2>
        Analytics Sections
      </h2>

      <p>

        Dashboard analytics and stats
        layouts for admin interfaces
        and SaaS dashboards.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon orange">
        📩
      </div>

      <span class="card-label">
        NEWSLETTER
      </span>

      <h2>
        Newsletter Sections
      </h2>

      <p>

        Responsive email subscribe
        sections crafted with modern
        glassmorphism UI.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon purple">
        🧩
      </div>

      <span class="card-label">
        FEATURES
      </span>

      <h2>
        Feature Blocks
      </h2>

      <p>

        Showcase product features
        with premium modern
        layout sections.

      </p>

      <button>
        View Section
      </button>

    </div>

</div>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/section.css\`

#### JavaScript Scripts:
- \`/section.js\`
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
    title: 'Sections',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/section.css"],
    content: `<main class="main-home">

  <!-- HERO -->

  <section class="hero-section">

    <div class="hero-badge">
      ✦ Premium Website Layouts
    </div>

    <h1>
      Modern <span>Website Sections</span>
    </h1>

    <p>

      Discover premium reusable website
      sections crafted for modern interfaces.
      Hero blocks, pricing layouts, stats,
      testimonials and more.

    </p>

  </section>

  <!-- =====================================================
PROFESSIONAL SECTION COMPONENTS
ADD INSIDE .sections-grid
===================================================== -->
<div class="sections-grid">

  <div class="section-card premium-card">
    <div class="section-icon gradient-crimson">🔒</div>
    <span class="card-tag">SECURITY</span>
    <h2>Security Sections</h2>
    <p>Cybersecurity landing pages for authentication, protection, and privacy tools.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-blue">📊</div>
    <span class="card-tag">DASHBOARD</span>
    <h2>Admin Dashboard Sections</h2>
    <p>Analytics-driven admin panels with charts, tables, and KPI widgets.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-purple">🌐</div>
    <span class="card-tag">COMMUNITY</span>
    <h2>Community Sections</h2>
    <p>Forum and social community layouts for engagement-driven platforms.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-gold">🧾</div>
    <span class="card-tag">BILLING</span>
    <h2>Billing Sections</h2>
    <p>Subscription billing, invoices, and payment management UI sections.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-navy">📦</div>
    <span class="card-tag">DEVELOPERS</span>
    <h2>API Sections</h2>
    <p>Developer-focused layouts for API documentation and integration guides.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-teal">🧭</div>
    <span class="card-tag">LANDING</span>
    <h2>Landing Sections</h2>
    <p>High-conversion landing page blocks with modern UX patterns.</p>
    <a href="#">View Section</a>
  </div>

  <div class="section-card premium-card">
    <div class="section-icon gradient-rose">🎁</div>
    <span class="card-tag">PROMO</span>
    <h2>Offer Sections</h2>
    <p>Discount banners, promotions, and limited-time offer UI layouts.</p>
    <a href="#">View Section</a>
  </div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-indigo">
    🏦
  </div>

  <span class="card-tag">
    ENTERPRISE
  </span>

  <h2>Enterprise Sections</h2>

  <p>
    Corporate enterprise layouts designed for scalable business platforms.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-emerald">
    💚
  </div>

  <span class="card-tag">
    HEALTHCARE
  </span>

  <h2>Healthcare Sections</h2>

  <p>
    Clean medical and healthcare website sections with modern UI patterns.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-rose">
    🏡
  </div>

  <span class="card-tag">
    REAL ESTATE
  </span>

  <h2>Property Sections</h2>

  <p>
    Real estate listing and property showcase layouts with elegant visuals.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-teal">
    📦
  </div>

  <span class="card-tag">
    LOGISTICS
  </span>

  <h2>Logistics Sections</h2>

  <p>
    Delivery and logistics management layouts for transport businesses.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-yellow">
    ☀️
  </div>

  <span class="card-tag">
    ENERGY
  </span>

  <h2>Energy Sections</h2>

  <p>
    Renewable energy and sustainability focused website layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-magenta">
    🎵
  </div>

  <span class="card-tag">
    MUSIC
  </span>

  <h2>Music Sections</h2>

  <p>
    Audio streaming and artist portfolio layouts with immersive visuals.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-navy">
    🛰️
  </div>

  <span class="card-tag">
    TECH
  </span>

  <h2>Tech Sections</h2>

  <p>
    Modern technology startup and innovation-focused landing layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-crimson">
    🍔
  </div>

  <span class="card-tag">
    FOOD
  </span>

  <h2>Restaurant Sections</h2>

  <p>
    Restaurant and food delivery layouts crafted for premium dining brands.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-silver">
    🚗
  </div>

  <span class="card-tag">
    AUTOMOTIVE
  </span>

  <h2>Automotive Sections</h2>

  <p>
    Vehicle showcase and automotive service layouts with sleek design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-aqua">
    ✈️
  </div>

  <span class="card-tag">
    AVIATION
  </span>

  <h2>Aviation Sections</h2>

  <p>
    Airline booking and aviation inspired layouts with futuristic UI.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-platinum">
    💼
  </div>

  <span class="card-tag">
    AGENCY
  </span>

  <h2>Agency Sections</h2>

  <p>
    Creative digital agency layouts built with bold typography and visuals.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-lavender">
    📚
  </div>

  <span class="card-tag">
    LIBRARY
  </span>

  <h2>Knowledge Sections</h2>

  <p>
    Documentation and knowledge-base layouts for modern web platforms.
  </p>

  <a href="#">
    View Section
  </a>

</div>

  <!-- FILTER -->

  <section class="filter-bar">

    <button class="filter-btn active">
      All
    </button>

    <button class="filter-btn">
      Hero
    </button>

    <button class="filter-btn">
      Pricing
    </button>

    <button class="filter-btn">
      Stats
    </button>

    <button class="filter-btn">
      Features
    </button>

  </section>

  <!-- MODERN SECTION COMPONENTS -->
  <section class="sections-grid">

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-purple">
    🚀
  </div>

  <span class="card-tag">
    STARTUP
  </span>

  <h2>Startup Sections</h2>

  <p>
    Modern startup landing page layouts with animated UI and bold typography.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-blue">
    💳
  </div>

  <span class="card-tag">
    FINTECH
  </span>

  <h2>Fintech Sections</h2>

  <p>
    Banking, payment and financial dashboard layouts with premium UI design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-pink">
    🛍️
  </div>

  <span class="card-tag">
    SHOPPING
  </span>

  <h2>Storefront Sections</h2>

  <p>
    Modern storefront and product discovery sections for online brands.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-green">
    🧑‍💻
  </div>

  <span class="card-tag">
    SAAS
  </span>

  <h2>SaaS Sections</h2>

  <p>
    SaaS dashboard and software showcase layouts with modern UX patterns.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-orange">
    🎬
  </div>

  <span class="card-tag">
    MEDIA
  </span>

  <h2>Streaming Sections</h2>

  <p>
    Netflix-inspired media layouts with cinematic cards and hero banners.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-cyan">
    📈
  </div>

  <span class="card-tag">
    BUSINESS
  </span>

  <h2>Growth Sections</h2>

  <p>
    KPI and growth showcase layouts with modern analytics inspired design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-red">
    🏢
  </div>

  <span class="card-tag">
    CORPORATE
  </span>

  <h2>Corporate Sections</h2>

  <p>
    Elegant enterprise and business layouts built for professional brands.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-gold">
    🎓
  </div>

  <span class="card-tag">
    EDUCATION
  </span>

  <h2>Learning Sections</h2>

  <p>
    Online course and education layouts with modern interactive UI blocks.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-dark">
    🌌
  </div>

  <span class="card-tag">
    FUTURE UI
  </span>

  <h2>Cyberpunk Sections</h2>

  <p>
    Futuristic neon-inspired layouts for gaming and AI interfaces.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-sky">
    ☁️
  </div>

  <span class="card-tag">
    CLOUD
  </span>

  <h2>Cloud Sections</h2>

  <p>
    Cloud platform and hosting layouts with premium glassmorphism styling.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-violet">
    📦
  </div>

  <span class="card-tag">
    PRODUCT
  </span>

  <h2>Product Launch</h2>

  <p>
    Product announcement and feature release layouts for modern startups.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card premium-card">

  <div class="section-icon gradient-lime">
    🌿
  </div>

  <span class="card-tag">
    ECO
  </span>

  <h2>Eco Sections</h2>

  <p>
    Sustainable and eco-friendly brand sections with clean modern design.
  </p>

  <a href="#">
    View Section
  </a>

</div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon orange">
        🚀
      </div>

      <span class="card-label">
        HERO
      </span>

      <h2>
        Hero Sections
      </h2>

      <p>

        Premium landing page hero
        layouts with modern typography,
        gradients and CTA buttons.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- ADD THESE NEW COMPONENTS INSIDE .sections-container -->

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🛒
  </div>

  <h2>E-Commerce Sections</h2>

  <p>
    Product showcase and shopping UI layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🎨
  </div>

  <h2>Portfolio Sections</h2>

  <p>
    Creative portfolio layouts for designers and developers.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    📱
  </div>

  <h2>App Showcase</h2>

  <p>
    Mobile app presentation and download sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🧠
  </div>

  <h2>AI Sections</h2>

  <p>
    Futuristic AI startup and chatbot website layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🎥
  </div>

  <h2>Video Sections</h2>

  <p>
    Video showcase blocks with modern media layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    📰
  </div>

  <h2>Blog Sections</h2>

  <p>
    Responsive article and blog listing layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    📅
  </div>

  <h2>Event Sections</h2>

  <p>
    Event schedule and conference landing sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🔐
  </div>

  <h2>Authentication</h2>

  <p>
    Login, signup and password recovery sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🌍
  </div>

  <h2>Travel Sections</h2>

  <p>
    Tourism and travel destination website layouts.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🏆
  </div>

  <h2>Achievement Sections</h2>

  <p>
    Awards, milestones and company achievement blocks.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    🎯
  </div>

  <h2>CTA Sections</h2>

  <p>
    High-converting call-to-action website sections.
  </p>

  <a href="#">
    View Section
  </a>

</div>

<!-- CARD -->
<div class="section-card">

  <div class="section-icon">
    ⚡
  </div>

  <h2>Service Sections</h2>

  <p>
    Professional service showcase layouts for agencies.
  </p>

  <a href="#">
    View Section
  </a>

</div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon purple">
        💼
      </div>

      <span class="card-label">
        PRICING
      </span>

      <h2>
        Pricing Sections
      </h2>

      <p>

        Responsive SaaS pricing layouts
        with premium UI cards and
        subscription tables.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon blue">
        ⭐
      </div>

      <span class="card-label">
        TESTIMONIALS
      </span>

      <h2>
        Testimonial Blocks
      </h2>

      <p>

        Beautiful review and feedback
        sections with glassmorphism
        inspired layouts.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon green">
        📊
      </div>

      <span class="card-label">
        STATS
      </span>

      <h2>
        Analytics Sections
      </h2>

      <p>

        Dashboard analytics and stats
        layouts for admin interfaces
        and SaaS dashboards.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon orange">
        📩
      </div>

      <span class="card-label">
        NEWSLETTER
      </span>

      <h2>
        Newsletter Sections
      </h2>

      <p>

        Responsive email subscribe
        sections crafted with modern
        glassmorphism UI.

      </p>

      <button>
        View Section
      </button>

    </div>

    <!-- CARD -->

    <div class="section-card">

      <div class="card-icon purple">
        🧩
      </div>

      <span class="card-label">
        FEATURES
      </span>

      <h2>
        Feature Blocks
      </h2>

      <p>

        Showcase product features
        with premium modern
        layout sections.

      </p>

      <button>
        View Section
      </button>

    </div>

</div>

</main>`
  })
};
