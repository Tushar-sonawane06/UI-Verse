import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/About',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
About and team page templates

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>about</code>, <code>info</code>, <code>team</code>, <code>pages</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home" id="main-content">

    <!-- HERO -->
    <section class="about-hero" aria-labelledby="hero-heading">

      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        <span aria-current="page">About</span>
      </nav>

      <div class="about-hero-inner">

        <div class="about-icon" aria-hidden="true">
          <i class="fa-solid fa-layer-group"></i>
        </div>

        <div>
          <h1 class="page-title" id="hero-heading">About UIverse</h1>

          <p class="page-desc">
            UIverse is a modern component library crafted for developers
            and designers who love clean, reusable, and beautiful UI.
          </p>

          <div class="page-meta">
            <span class="meta-badge">
              <i class="fa-solid fa-code" aria-hidden="true"></i>
              HTML &bull; CSS &bull; JavaScript
            </span>
            <span class="meta-badge">
              <i class="fa-solid fa-palette" aria-hidden="true"></i>
              Modern UI/UX
            </span>
            <span class="meta-badge">
              <i class="fa-solid fa-globe" aria-hidden="true"></i>
              Open for Everyone
            </span>
          </div>
        </div>

      </div>

    </section>

    <!-- ================= ABOUT CONTENT ================= -->
    <section class="about-layout" aria-labelledby="about-heading">

      <div class="about-content">

        <div class="about-card">
          <h2 id="about-heading">
            <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
            What is UIverse?
          </h2>
          <p>
            <strong>UIverse</strong> is a creative platform designed to
            showcase modern and beautiful user interface components.
          </p>
          <p>
            It helps developers and designers explore, learn,
            and build stunning web experiences using simple
            technologies like HTML, CSS, and JavaScript.
          </p>
          <p>
            Whether you are a beginner or an experienced developer,
            UIverse provides reusable UI inspiration to speed up
            your workflow and improve creativity.
          </p>
        </div>

        <div class="about-card">
          <h2>
            <i class="fa-solid fa-bullseye" aria-hidden="true"></i>
            Our Mission
          </h2>
          <p>
            Our mission is to make UI design easy, attractive,
            reusable, and accessible for everyone.
          </p>
          <p>
            We focus on creating clean layouts, modern interactions,
            smooth animations, and responsive experiences that work
            beautifully across all devices.
          </p>
        </div>

      </div>

      <div class="about-stats">
        <div class="stat-card">
          <h3><span class="counter" data-target="120">0</span>+</h3>
          <p>UI Components</p>
        </div>
        <div class="stat-card">
          <h3><span class="counter" data-target="25">0</span>+</h3>
          <p>Modern Layouts</p>
        </div>
        <div class="stat-card">
          <h3><span class="counter" data-target="24">0</span>/7</h3>
          <p>Community Support</p>
        </div>
      </div>

    </section>

    <!-- ================= WHY DEVELOPERS ================= -->
    <!--
      FIX 11: All sections that were incorrectly nested inside
      <section class="team-section"> (and never closed out of
      <section class="about-layout">) are now independent siblings.
    -->
    <section class="team-section" aria-labelledby="why-heading">

      <div class="section-title">
        <h2 id="why-heading">Why Developers Love UIverse</h2>
        <p>Crafted to make frontend development faster, cleaner, and more enjoyable.</p>
      </div>

      <div class="team-grid">
        <div class="team-card">
          <i class="fa-solid fa-bolt" aria-hidden="true"></i>
          <h3>Fast Development</h3>
          <p>Reusable components help speed up your workflow.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-mobile-screen" aria-hidden="true"></i>
          <h3>Responsive Design</h3>
          <p>Every component works beautifully on all devices.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
          <h3>Modern Aesthetics</h3>
          <p>Clean layouts with modern UI/UX principles.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>
          <h3>Theme Support</h3>
          <p>Built-in light and dark mode support for modern projects.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-gauge-high" aria-hidden="true"></i>
          <h3>Performance Optimized</h3>
          <p>Lightweight components designed for speed and efficiency.</p>
        </div>
      </div>

    </section>

    <!-- ================= TESTIMONIALS ================= -->
    <section class="about-grid" aria-labelledby="testimonials-heading">

      <div class="section-title">
        <h2 id="testimonials-heading">What Our Community Says</h2>
        <p>
          Hear directly from developers and designers who use UIverse
          to build faster and design better.
        </p>
      </div>

      <div class="about-card">
        <div class="card-icon orange" aria-hidden="true">
          <i class="fa-solid fa-user"></i>
        </div>
        <h3>Jane Doe</h3>
        <p>"UIverse helped me speed up my workflow and deliver polished designs faster."</p>
      </div>

      <div class="about-card">
        <div class="card-icon purple" aria-hidden="true">
          <i class="fa-solid fa-user"></i>
        </div>
        <h3>John Smith</h3>
        <p>"The reusable components are a lifesaver for rapid prototyping."</p>
      </div>

    </section>

    <!-- ================= VALUES ================= -->
    <section class="values-section" aria-labelledby="values-heading">

      <div class="section-title">
        <h2 id="values-heading">Our Values</h2>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
          <h3>Innovation</h3>
          <p>Always exploring fresh UI ideas.</p>
        </div>
        <div class="value-card">
          <i class="fa-solid fa-heart" aria-hidden="true"></i>
          <h3>Simplicity</h3>
          <p>Clean and easy-to-use components.</p>
        </div>
        <div class="value-card">
          <i class="fa-solid fa-users" aria-hidden="true"></i>
          <h3>Community</h3>
          <p>Built for designers and developers.</p>
        </div>
      </div>

    </section>

    <!-- ================= TECH ================= -->
    <section class="tech-section" aria-labelledby="tech-heading">

      <div class="section-title">
        <h2 id="tech-heading">Built With Modern Technologies</h2>
      </div>

      <div class="tech-grid" role="list">
        <div class="tech-pill" role="listitem">HTML5</div>
        <div class="tech-pill" role="listitem">CSS3</div>
        <div class="tech-pill" role="listitem">JavaScript</div>
        <div class="tech-pill" role="listitem">Font Awesome</div>
        <div class="tech-pill" role="listitem">Responsive Design</div>
      </div>

    </section>

    <!-- ================= FAQ =================
      FIX 7: Each FAQ button now has aria-expanded and aria-controls
      linked to its answer panel, which has role="region" and
      aria-labelledby pointing back to the button.
    -->
    <section class="faq-section" aria-labelledby="faq-heading">

      <div class="section-title">
        <h2 id="faq-heading">Frequently Asked Questions</h2>
      </div>

      <div class="faq-item">
        <button
          class="faq-btn"
          id="faq-btn-1"
          aria-expanded="false"
          aria-controls="faq-panel-1"
        >
          Is UIverse free to use?
        </button>
        <div
          class="faq-content"
          id="faq-panel-1"
          role="region"
          aria-labelledby="faq-btn-1"
          hidden
        >
          Yes, all showcased UI components are free to explore.
        </div>
      </div>

      <div class="faq-item">
        <button
          class="faq-btn"
          id="faq-btn-2"
          aria-expanded="false"
          aria-controls="faq-panel-2"
        >
          Can I use these components commercially?
        </button>
        <div
          class="faq-content"
          id="faq-panel-2"
          role="region"
          aria-labelledby="faq-btn-2"
          hidden
        >
          Yes, unless otherwise specified.
        </div>
      </div>

    </section>

    <!-- ================= INSIGHT CARD ================= -->
    <div class="insight-card">

      <div class="insight-header">
        <div class="insight-icon" aria-hidden="true">
          <i class="fa-solid fa-sparkles"></i>
        </div>
        <span class="insight-badge">AI Powered</span>
      </div>

      <h3>Engagement Growth</h3>

      <p>
        Your product engagement increased by
        <strong>18.6%</strong> compared to last month.
      </p>

      <div class="insight-chart" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    <!-- ================= KPI CARD =================
      FIX 10: Ellipsis button now has aria-label so screen readers
      announce its purpose rather than reading nothing.
    -->
    <div class="kpi-card">

      <div class="kpi-top">
        <span>Total Revenue</span>
        <button aria-label="More options for Total Revenue">
          <i class="fa-solid fa-ellipsis" aria-hidden="true"></i>
        </button>
      </div>

      <h2>$48,920</h2>

      <div class="kpi-change positive">
        <i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
        +12.4%
      </div>

    </div>

    <!-- ================= CTA ================= -->
    <section class="about-cta" aria-labelledby="cta-heading">

      <div class="cta-content">
        <span class="cta-badge">✨ Join Thousands of Developers</span>
        <h2 id="cta-heading">Start Building Beautiful Interfaces Today</h2>
        <p>
          Explore modern UI components, layouts,
          animations, and design inspiration.
        </p>
        <div class="cta-actions">
          <a href="button.html" class="cta-btn primary">Explore Components</a>
          <a href="index.html" class="cta-btn secondary">View Collections</a>
        </div>
      </div>

    </section>

  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/dist/shared.css\`
- \`/style.css\`
- \`/home.css\`
- \`/shared-sidebar.css\`
- \`/about.css\`

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
    title: 'About',
    styles: ["/design-tokens.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/dist/shared.css","/style.css","/home.css","/shared-sidebar.css","/about.css"],
    content: `<main class="main-home" id="main-content">

    <!-- HERO -->
    <section class="about-hero" aria-labelledby="hero-heading">

      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="index.html">Home</a>
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        <span aria-current="page">About</span>
      </nav>

      <div class="about-hero-inner">

        <div class="about-icon" aria-hidden="true">
          <i class="fa-solid fa-layer-group"></i>
        </div>

        <div>
          <h1 class="page-title" id="hero-heading">About UIverse</h1>

          <p class="page-desc">
            UIverse is a modern component library crafted for developers
            and designers who love clean, reusable, and beautiful UI.
          </p>

          <div class="page-meta">
            <span class="meta-badge">
              <i class="fa-solid fa-code" aria-hidden="true"></i>
              HTML &bull; CSS &bull; JavaScript
            </span>
            <span class="meta-badge">
              <i class="fa-solid fa-palette" aria-hidden="true"></i>
              Modern UI/UX
            </span>
            <span class="meta-badge">
              <i class="fa-solid fa-globe" aria-hidden="true"></i>
              Open for Everyone
            </span>
          </div>
        </div>

      </div>

    </section>

    <!-- ================= ABOUT CONTENT ================= -->
    <section class="about-layout" aria-labelledby="about-heading">

      <div class="about-content">

        <div class="about-card">
          <h2 id="about-heading">
            <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
            What is UIverse?
          </h2>
          <p>
            <strong>UIverse</strong> is a creative platform designed to
            showcase modern and beautiful user interface components.
          </p>
          <p>
            It helps developers and designers explore, learn,
            and build stunning web experiences using simple
            technologies like HTML, CSS, and JavaScript.
          </p>
          <p>
            Whether you are a beginner or an experienced developer,
            UIverse provides reusable UI inspiration to speed up
            your workflow and improve creativity.
          </p>
        </div>

        <div class="about-card">
          <h2>
            <i class="fa-solid fa-bullseye" aria-hidden="true"></i>
            Our Mission
          </h2>
          <p>
            Our mission is to make UI design easy, attractive,
            reusable, and accessible for everyone.
          </p>
          <p>
            We focus on creating clean layouts, modern interactions,
            smooth animations, and responsive experiences that work
            beautifully across all devices.
          </p>
        </div>

      </div>

      <div class="about-stats">
        <div class="stat-card">
          <h3><span class="counter" data-target="120">0</span>+</h3>
          <p>UI Components</p>
        </div>
        <div class="stat-card">
          <h3><span class="counter" data-target="25">0</span>+</h3>
          <p>Modern Layouts</p>
        </div>
        <div class="stat-card">
          <h3><span class="counter" data-target="24">0</span>/7</h3>
          <p>Community Support</p>
        </div>
      </div>

    </section>

    <!-- ================= WHY DEVELOPERS ================= -->
    <!--
      FIX 11: All sections that were incorrectly nested inside
      <section class="team-section"> (and never closed out of
      <section class="about-layout">) are now independent siblings.
    -->
    <section class="team-section" aria-labelledby="why-heading">

      <div class="section-title">
        <h2 id="why-heading">Why Developers Love UIverse</h2>
        <p>Crafted to make frontend development faster, cleaner, and more enjoyable.</p>
      </div>

      <div class="team-grid">
        <div class="team-card">
          <i class="fa-solid fa-bolt" aria-hidden="true"></i>
          <h3>Fast Development</h3>
          <p>Reusable components help speed up your workflow.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-mobile-screen" aria-hidden="true"></i>
          <h3>Responsive Design</h3>
          <p>Every component works beautifully on all devices.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
          <h3>Modern Aesthetics</h3>
          <p>Clean layouts with modern UI/UX principles.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>
          <h3>Theme Support</h3>
          <p>Built-in light and dark mode support for modern projects.</p>
        </div>
        <div class="team-card">
          <i class="fa-solid fa-gauge-high" aria-hidden="true"></i>
          <h3>Performance Optimized</h3>
          <p>Lightweight components designed for speed and efficiency.</p>
        </div>
      </div>

    </section>

    <!-- ================= TESTIMONIALS ================= -->
    <section class="about-grid" aria-labelledby="testimonials-heading">

      <div class="section-title">
        <h2 id="testimonials-heading">What Our Community Says</h2>
        <p>
          Hear directly from developers and designers who use UIverse
          to build faster and design better.
        </p>
      </div>

      <div class="about-card">
        <div class="card-icon orange" aria-hidden="true">
          <i class="fa-solid fa-user"></i>
        </div>
        <h3>Jane Doe</h3>
        <p>"UIverse helped me speed up my workflow and deliver polished designs faster."</p>
      </div>

      <div class="about-card">
        <div class="card-icon purple" aria-hidden="true">
          <i class="fa-solid fa-user"></i>
        </div>
        <h3>John Smith</h3>
        <p>"The reusable components are a lifesaver for rapid prototyping."</p>
      </div>

    </section>

    <!-- ================= VALUES ================= -->
    <section class="values-section" aria-labelledby="values-heading">

      <div class="section-title">
        <h2 id="values-heading">Our Values</h2>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
          <h3>Innovation</h3>
          <p>Always exploring fresh UI ideas.</p>
        </div>
        <div class="value-card">
          <i class="fa-solid fa-heart" aria-hidden="true"></i>
          <h3>Simplicity</h3>
          <p>Clean and easy-to-use components.</p>
        </div>
        <div class="value-card">
          <i class="fa-solid fa-users" aria-hidden="true"></i>
          <h3>Community</h3>
          <p>Built for designers and developers.</p>
        </div>
      </div>

    </section>

    <!-- ================= TECH ================= -->
    <section class="tech-section" aria-labelledby="tech-heading">

      <div class="section-title">
        <h2 id="tech-heading">Built With Modern Technologies</h2>
      </div>

      <div class="tech-grid" role="list">
        <div class="tech-pill" role="listitem">HTML5</div>
        <div class="tech-pill" role="listitem">CSS3</div>
        <div class="tech-pill" role="listitem">JavaScript</div>
        <div class="tech-pill" role="listitem">Font Awesome</div>
        <div class="tech-pill" role="listitem">Responsive Design</div>
      </div>

    </section>

    <!-- ================= FAQ =================
      FIX 7: Each FAQ button now has aria-expanded and aria-controls
      linked to its answer panel, which has role="region" and
      aria-labelledby pointing back to the button.
    -->
    <section class="faq-section" aria-labelledby="faq-heading">

      <div class="section-title">
        <h2 id="faq-heading">Frequently Asked Questions</h2>
      </div>

      <div class="faq-item">
        <button
          class="faq-btn"
          id="faq-btn-1"
          aria-expanded="false"
          aria-controls="faq-panel-1"
        >
          Is UIverse free to use?
        </button>
        <div
          class="faq-content"
          id="faq-panel-1"
          role="region"
          aria-labelledby="faq-btn-1"
          hidden
        >
          Yes, all showcased UI components are free to explore.
        </div>
      </div>

      <div class="faq-item">
        <button
          class="faq-btn"
          id="faq-btn-2"
          aria-expanded="false"
          aria-controls="faq-panel-2"
        >
          Can I use these components commercially?
        </button>
        <div
          class="faq-content"
          id="faq-panel-2"
          role="region"
          aria-labelledby="faq-btn-2"
          hidden
        >
          Yes, unless otherwise specified.
        </div>
      </div>

    </section>

    <!-- ================= INSIGHT CARD ================= -->
    <div class="insight-card">

      <div class="insight-header">
        <div class="insight-icon" aria-hidden="true">
          <i class="fa-solid fa-sparkles"></i>
        </div>
        <span class="insight-badge">AI Powered</span>
      </div>

      <h3>Engagement Growth</h3>

      <p>
        Your product engagement increased by
        <strong>18.6%</strong> compared to last month.
      </p>

      <div class="insight-chart" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    <!-- ================= KPI CARD =================
      FIX 10: Ellipsis button now has aria-label so screen readers
      announce its purpose rather than reading nothing.
    -->
    <div class="kpi-card">

      <div class="kpi-top">
        <span>Total Revenue</span>
        <button aria-label="More options for Total Revenue">
          <i class="fa-solid fa-ellipsis" aria-hidden="true"></i>
        </button>
      </div>

      <h2>$48,920</h2>

      <div class="kpi-change positive">
        <i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
        +12.4%
      </div>

    </div>

    <!-- ================= CTA ================= -->
    <section class="about-cta" aria-labelledby="cta-heading">

      <div class="cta-content">
        <span class="cta-badge">✨ Join Thousands of Developers</span>
        <h2 id="cta-heading">Start Building Beautiful Interfaces Today</h2>
        <p>
          Explore modern UI components, layouts,
          animations, and design inspiration.
        </p>
        <div class="cta-actions">
          <a href="button.html" class="cta-btn primary">Explore Components</a>
          <a href="index.html" class="cta-btn secondary">View Collections</a>
        </div>
      </div>

    </section>

  </main>`
  })
};
