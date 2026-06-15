import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Home / Showcase',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Project homepage and featured components overview

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>home</code>, <code>showcase</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home" id="main-content">

  <!-- ===== HERO ===== -->
  <section class="hero">
    <!-- FIX #3: Corrected garbled â€" → — -->
    <div class="hero-badge"><i class="fa-solid fa-rocket"></i> v2.0 — Now with 120+ components</div>

    <h1 class="hero-title">
      Build <span class="hero-accent">beautiful UIs</span><br>
      in minutes, not hours.
    </h1>

    <!-- FIX #3: Corrected garbled â€" → — -->
    <p class="hero-desc">
      A curated library of reusable UI components crafted with pure HTML, CSS & JavaScript —
      no frameworks, no dependencies, just clean code.
    </p>

    <div class="hero-actions">
      <a href="button.html" class="btn-primary">
        Explore Components <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="form.html" class="btn-ghost">
        Start Learning
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number">120+</span>
        <span class="stat-label">Components</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">8</span>
        <span class="stat-label">Categories</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">100%</span>
        <span class="stat-label">Free & Open Source</span>
      </div>
    </div>

    <!-- floating orb decoration -->
    <div class="hero-orb orb-1"></div>
    <div class="hero-orb orb-2"></div>
  </section>

  <!-- ===== POPULAR COMPONENTS ===== -->
  <section class="section featured-section">
    <div class="section-header">
      <span class="section-tag">Most Loved</span>
      <h2 class="section-title"><i class="fa-solid fa-star"></i> Popular Components</h2>
      <p class="section-subtitle">Handpicked favorites from developers worldwide</p>
    </div>

    <div class="featured-cards">

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #ff6b6b;"><i class="fa-solid fa-bullseye"></i></div>
        <div class="feature-card-body">
          <h3>Gradient Button</h3>
          <p>Modern colorful buttons with smooth gradient design.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
            <span class="tag tag-trending">Trending</span>
          </div>
        </div>
        <a href="button.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #74b9ff;"><i class="fa-solid fa-palette"></i></div>
        <div class="feature-card-body">
          <h3>Glass Navbar</h3>
          <p>Transparent blurred navigation bar with modern aesthetics.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="navbar.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #55efc4;"><i class="fa-solid fa-box"></i></div>
        <div class="feature-card-body">
          <h3>Card UI</h3>
          <p>Clean and reusable card layout for content display.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="cards.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #fdcb6e;"><i class="fa-solid fa-bolt"></i></div>
        <div class="feature-card-body">
          <h3>Spinner Loaders</h3>
          <p>Smooth loading animations for better UX.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
          </div>
        </div>
        <a href="loaders.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #a29bfe;"><i class="fa-solid fa-sack-dollar"></i></div>
        <div class="feature-card-body">
          <h3>Pricing Cards</h3>
          <p>Professional pricing sections for SaaS products.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="pricing.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #fd79a8;"><i class="fa-solid fa-bell"></i></div>
        <div class="feature-card-body">
          <h3>Alert Boxes</h3>
          <p>Responsive alert components for notifications.</p>
          <div class="feature-tags">
            <span class="tag tag-essential">Essential</span>
          </div>
        </div>
        <a href="alerts.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #4ecdc4;"><i class="fa-solid fa-wheat-awn"></i></div>
        <div class="feature-card-body">
          <h3>Crop ROI Lab</h3>
          <p>Predict yield, revenue, and return on investment for the next harvest cycle.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Finance</span>
          </div>
        </div>
        <a href="roi_dashboard.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #86c06a;"><i class="fa-solid fa-box-open"></i></div>
        <div class="feature-card-body">
          <h3>Produce Traceability</h3>
          <p>Generate a QR code for each batch and verify the full farm-to-shelf timeline.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Supply Chain</span>
          </div>
        </div>
        <a href="trace.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #2f6f9f;"><i class="fa-solid fa-satellite-dish"></i></div>
        <div class="feature-card-body">
          <h3>IoT Sensor Hub</h3>
          <p>Track moisture, temperature, humidity, and nutrient levels from connected farm sensors.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Realtime</span>
          </div>
        </div>
        <a href="farm_dashboard.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #d97706;"><i class="fa-solid fa-tractor"></i></div>
        <div class="feature-card-body">
          <h3>Equipment Marketplace</h3>
          <p>Share tractors and heavy machinery with neighboring farms through a rental marketplace.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Sharing Economy</span>
          </div>
        </div>
        <a href="equipment.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

    </div>
  </section>

  <!-- ===== EXPLORE CATEGORIES ===== -->
  <section class="section categories-section">
    <div class="section-header">
      <span class="section-tag">Browse All</span>
      <h2 class="section-title"><i class="fa-solid fa-boxes-stacked"></i> Explore Categories</h2>
    </div>

    <div class="categories-grid">
      <a href="button.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-circle-dot"></i></div>
        <h3>Buttons</h3>
        <p>Interactive button styles</p>
        <span class="cat-count">24 items</span>
      </a>
      <a href="navbar.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-bars"></i></div>
        <h3>Navbars</h3>
        <p>Navigation UI components</p>
        <span class="cat-count">12 items</span>
      </a>
      <a href="cards.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-layer-group"></i></div>
        <h3>Cards</h3>
        <p>Flexible card layouts</p>
        <span class="cat-count">18 items</span>
      </a>
      <a href="inputs.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-keyboard"></i></div>
        <h3>Inputs</h3>
        <p>Forms & input fields</p>
        <span class="cat-count">20 items</span>
      </a>
      <a href="forms.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-clipboard-list"></i></div>
        <h3>Forms</h3>
        <p>Complete form templates</p>
        <span class="cat-count">10 items</span>
      </a>
      <a href="roi_dashboard.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-wheat-awn"></i></div>
        <h3>Finance Tools</h3>
        <p>Predict crop ROI and yield</p>
        <span class="cat-count">1 dashboard</span>
      </a>
      <a href="trace.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-box"></i></div>
        <h3>Traceability</h3>
        <p>QR code and ledger verification</p>
        <span class="cat-count">2 pages</span>
      </a>
      <a href="farm_dashboard.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-satellite-dish"></i></div>
        <h3>IoT Hub</h3>
        <p>Realtime sensor telemetry</p>
        <span class="cat-count">2 pages</span>
      </a>
      <a href="equipment.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-tractor"></i></div>
        <h3>Equipment</h3>
        <p>Rental listings and booking</p>
        <span class="cat-count">2 pages</span>
      </a>
      <a href="badges.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-medal"></i></div>
        <h3>Badges</h3>
        <p>Labels, tags & badges</p>
        <span class="cat-count">15 items</span>
      </a>
      <a href="color.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-palette"></i></div>
        <h3>Colors</h3>
        <p>Color palette & themes</p>
        <span class="cat-count">8 items</span>
      </a>
      <a href="footer.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-file-lines"></i></div>
        <h3>Footers</h3>
        <p>Footer section layouts</p>
        <span class="cat-count">9 items</span>
      </a>
    </div>
  </section>

  <!-- ===== DISCOVERY INSIGHTS ===== -->
  <section class="section insights-section">
    <div class="section-header">
      <span class="section-tag">Community Insights</span>
      <!-- FIX #3: Corrected garbled ðŸ"Š → 📊 -->
      <h2 class="section-title">📊 Component Analytics</h2>
      <p class="section-subtitle">Popular, trending, and hidden gem components based on real usage</p>
    </div>
    <div class="trending-section"></div>
  </section>

  <!-- ===== WHY UIVERSE ===== -->
  <section class="section why-section">
    <div class="section-header">
      <span class="section-tag">Why choose us</span>
      <h2 class="section-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Why UIverse?</h2>
    </div>

    <div class="why-grid">
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-bolt"></i></div>
        <h3>Fast & Lightweight</h3>
        <p>Zero frameworks, zero dependencies. Pure HTML, CSS and JavaScript for blazing fast performance.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-mobile-screen"></i></div>
        <h3>Fully Responsive</h3>
        <p>Every component is built mobile-first and works seamlessly on any device or screen size.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-bullseye"></i></div>
        <h3>Beginner Friendly</h3>
        <p>Clean, well-commented code that's easy to understand, learn from, and customize.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
        <h3>Fully Customizable</h3>
        <p>Simple CSS variables make it trivial to adapt any component to match your brand.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-handshake"></i></div>
        <h3>Open Source</h3>
        <p>Everything is free and open source. Contribute, fork, or use however you like.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-rotate"></i></div>
        <h3>Regularly Updated</h3>
        <p>New components and improvements are added regularly. Stay ahead with the latest UI trends.</p>
      </div>
    </div>
  </section>

  <!-- ===== CTA BANNER ===== -->
  <section class="cta-banner">
    <div class="cta-content">
      <h2>Ready to build something amazing?</h2>
      <p>Join thousands of developers already using UIverse components in their projects.</p>
      <a href="button.html" class="btn-primary">Get Started for Free <i class="fa-solid fa-rocket"></i></a>
    </div>
    <div class="cta-orb cta-orb-1"></div>
    <div class="cta-orb cta-orb-2"></div>
  </section>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/home.css\`
- \`/shared-page.css\`
- \`/layout.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`

#### JavaScript Scripts:
- \`/index.js\`
- \`/js/core/component-discovery.js\`
- \`/js/core/component-index.js\`
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
    title: 'Home / Showcase',
    styles: ["/design-tokens.css","/home.css","/shared-page.css","/layout.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"],
    content: `<main class="main-home" id="main-content">

  <!-- ===== HERO ===== -->
  <section class="hero">
    <!-- FIX #3: Corrected garbled â€" → — -->
    <div class="hero-badge"><i class="fa-solid fa-rocket"></i> v2.0 — Now with 120+ components</div>

    <h1 class="hero-title">
      Build <span class="hero-accent">beautiful UIs</span><br>
      in minutes, not hours.
    </h1>

    <!-- FIX #3: Corrected garbled â€" → — -->
    <p class="hero-desc">
      A curated library of reusable UI components crafted with pure HTML, CSS & JavaScript —
      no frameworks, no dependencies, just clean code.
    </p>

    <div class="hero-actions">
      <a href="button.html" class="btn-primary">
        Explore Components <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="form.html" class="btn-ghost">
        Start Learning
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number">120+</span>
        <span class="stat-label">Components</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">8</span>
        <span class="stat-label">Categories</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-number">100%</span>
        <span class="stat-label">Free & Open Source</span>
      </div>
    </div>

    <!-- floating orb decoration -->
    <div class="hero-orb orb-1"></div>
    <div class="hero-orb orb-2"></div>
  </section>

  <!-- ===== POPULAR COMPONENTS ===== -->
  <section class="section featured-section">
    <div class="section-header">
      <span class="section-tag">Most Loved</span>
      <h2 class="section-title"><i class="fa-solid fa-star"></i> Popular Components</h2>
      <p class="section-subtitle">Handpicked favorites from developers worldwide</p>
    </div>

    <div class="featured-cards">

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #ff6b6b;"><i class="fa-solid fa-bullseye"></i></div>
        <div class="feature-card-body">
          <h3>Gradient Button</h3>
          <p>Modern colorful buttons with smooth gradient design.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
            <span class="tag tag-trending">Trending</span>
          </div>
        </div>
        <a href="button.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #74b9ff;"><i class="fa-solid fa-palette"></i></div>
        <div class="feature-card-body">
          <h3>Glass Navbar</h3>
          <p>Transparent blurred navigation bar with modern aesthetics.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="navbar.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #55efc4;"><i class="fa-solid fa-box"></i></div>
        <div class="feature-card-body">
          <h3>Card UI</h3>
          <p>Clean and reusable card layout for content display.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="cards.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #fdcb6e;"><i class="fa-solid fa-bolt"></i></div>
        <div class="feature-card-body">
          <h3>Spinner Loaders</h3>
          <p>Smooth loading animations for better UX.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
          </div>
        </div>
        <a href="loaders.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #a29bfe;"><i class="fa-solid fa-sack-dollar"></i></div>
        <div class="feature-card-body">
          <h3>Pricing Cards</h3>
          <p>Professional pricing sections for SaaS products.</p>
          <div class="feature-tags">
            <span class="tag tag-popular">Popular</span>
          </div>
        </div>
        <a href="pricing.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #fd79a8;"><i class="fa-solid fa-bell"></i></div>
        <div class="feature-card-body">
          <h3>Alert Boxes</h3>
          <p>Responsive alert components for notifications.</p>
          <div class="feature-tags">
            <span class="tag tag-essential">Essential</span>
          </div>
        </div>
        <a href="alerts.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #4ecdc4;"><i class="fa-solid fa-wheat-awn"></i></div>
        <div class="feature-card-body">
          <h3>Crop ROI Lab</h3>
          <p>Predict yield, revenue, and return on investment for the next harvest cycle.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Finance</span>
          </div>
        </div>
        <a href="roi_dashboard.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #86c06a;"><i class="fa-solid fa-box-open"></i></div>
        <div class="feature-card-body">
          <h3>Produce Traceability</h3>
          <p>Generate a QR code for each batch and verify the full farm-to-shelf timeline.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Supply Chain</span>
          </div>
        </div>
        <a href="trace.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #2f6f9f;"><i class="fa-solid fa-satellite-dish"></i></div>
        <div class="feature-card-body">
          <h3>IoT Sensor Hub</h3>
          <p>Track moisture, temperature, humidity, and nutrient levels from connected farm sensors.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Realtime</span>
          </div>
        </div>
        <a href="farm_dashboard.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="feature-card">
        <div class="feature-icon-wrap" style="--icon-color: #d97706;"><i class="fa-solid fa-tractor"></i></div>
        <div class="feature-card-body">
          <h3>Equipment Marketplace</h3>
          <p>Share tractors and heavy machinery with neighboring farms through a rental marketplace.</p>
          <div class="feature-tags">
            <span class="tag tag-new">New</span>
            <span class="tag tag-essential">Sharing Economy</span>
          </div>
        </div>
        <a href="equipment.html" class="feature-link">View <i class="fa-solid fa-arrow-right"></i></a>
      </div>

    </div>
  </section>

  <!-- ===== EXPLORE CATEGORIES ===== -->
  <section class="section categories-section">
    <div class="section-header">
      <span class="section-tag">Browse All</span>
      <h2 class="section-title"><i class="fa-solid fa-boxes-stacked"></i> Explore Categories</h2>
    </div>

    <div class="categories-grid">
      <a href="button.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-circle-dot"></i></div>
        <h3>Buttons</h3>
        <p>Interactive button styles</p>
        <span class="cat-count">24 items</span>
      </a>
      <a href="navbar.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-bars"></i></div>
        <h3>Navbars</h3>
        <p>Navigation UI components</p>
        <span class="cat-count">12 items</span>
      </a>
      <a href="cards.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-layer-group"></i></div>
        <h3>Cards</h3>
        <p>Flexible card layouts</p>
        <span class="cat-count">18 items</span>
      </a>
      <a href="inputs.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-keyboard"></i></div>
        <h3>Inputs</h3>
        <p>Forms & input fields</p>
        <span class="cat-count">20 items</span>
      </a>
      <a href="forms.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-clipboard-list"></i></div>
        <h3>Forms</h3>
        <p>Complete form templates</p>
        <span class="cat-count">10 items</span>
      </a>
      <a href="roi_dashboard.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-wheat-awn"></i></div>
        <h3>Finance Tools</h3>
        <p>Predict crop ROI and yield</p>
        <span class="cat-count">1 dashboard</span>
      </a>
      <a href="trace.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-box"></i></div>
        <h3>Traceability</h3>
        <p>QR code and ledger verification</p>
        <span class="cat-count">2 pages</span>
      </a>
      <a href="farm_dashboard.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-satellite-dish"></i></div>
        <h3>IoT Hub</h3>
        <p>Realtime sensor telemetry</p>
        <span class="cat-count">2 pages</span>
      </a>
      <a href="equipment.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-tractor"></i></div>
        <h3>Equipment</h3>
        <p>Rental listings and booking</p>
        <span class="cat-count">2 pages</span>
      </a>
      <a href="badges.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-medal"></i></div>
        <h3>Badges</h3>
        <p>Labels, tags & badges</p>
        <span class="cat-count">15 items</span>
      </a>
      <a href="color.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-palette"></i></div>
        <h3>Colors</h3>
        <p>Color palette & themes</p>
        <span class="cat-count">8 items</span>
      </a>
      <a href="footer.html" class="cat-card">
        <div class="cat-icon"><i class="fa-solid fa-file-lines"></i></div>
        <h3>Footers</h3>
        <p>Footer section layouts</p>
        <span class="cat-count">9 items</span>
      </a>
    </div>
  </section>

  <!-- ===== DISCOVERY INSIGHTS ===== -->
  <section class="section insights-section">
    <div class="section-header">
      <span class="section-tag">Community Insights</span>
      <!-- FIX #3: Corrected garbled ðŸ"Š → 📊 -->
      <h2 class="section-title">📊 Component Analytics</h2>
      <p class="section-subtitle">Popular, trending, and hidden gem components based on real usage</p>
    </div>
    <div class="trending-section"></div>
  </section>

  <!-- ===== WHY UIVERSE ===== -->
  <section class="section why-section">
    <div class="section-header">
      <span class="section-tag">Why choose us</span>
      <h2 class="section-title"><i class="fa-solid fa-wand-magic-sparkles"></i> Why UIverse?</h2>
    </div>

    <div class="why-grid">
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-bolt"></i></div>
        <h3>Fast & Lightweight</h3>
        <p>Zero frameworks, zero dependencies. Pure HTML, CSS and JavaScript for blazing fast performance.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-mobile-screen"></i></div>
        <h3>Fully Responsive</h3>
        <p>Every component is built mobile-first and works seamlessly on any device or screen size.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-bullseye"></i></div>
        <h3>Beginner Friendly</h3>
        <p>Clean, well-commented code that's easy to understand, learn from, and customize.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
        <h3>Fully Customizable</h3>
        <p>Simple CSS variables make it trivial to adapt any component to match your brand.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-handshake"></i></div>
        <h3>Open Source</h3>
        <p>Everything is free and open source. Contribute, fork, or use however you like.</p>
      </div>
      <div class="why-card">
        <div class="why-icon"><i class="fa-solid fa-rotate"></i></div>
        <h3>Regularly Updated</h3>
        <p>New components and improvements are added regularly. Stay ahead with the latest UI trends.</p>
      </div>
    </div>
  </section>

  <!-- ===== CTA BANNER ===== -->
  <section class="cta-banner">
    <div class="cta-content">
      <h2>Ready to build something amazing?</h2>
      <p>Join thousands of developers already using UIverse components in their projects.</p>
      <a href="button.html" class="btn-primary">Get Started for Free <i class="fa-solid fa-rocket"></i></a>
    </div>
    <div class="cta-orb cta-orb-1"></div>
    <div class="cta-orb cta-orb-2"></div>
  </section>

</main>`
  })
};
