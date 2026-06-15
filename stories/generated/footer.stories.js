import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Footer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Footer patterns and site utilities

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>layout</code>, <code>site</code>, <code>footer</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">

  <!-- PAGE HEADER -->
  <section class="footer-page-header">

    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>Footers</span>
    </div>

    <h1>Footer Components</h1>

    <p>
      Modern responsive footer sections for SaaS, portfolio,
      startup and product websites.
    </p>

    <div class="page-meta">

      <span class="meta-badge">
        <i class="fa-solid fa-layer-group"></i>
        4 Components
      </span>

      <span class="meta-badge">
        <i class="fa-solid fa-code"></i>
        HTML & CSS
      </span>

    </div>

  </section>

  <div>
    <form>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" name="" placeholder="Filter footers..." id="Scearch" onkeyup="SCEARCH()">
    </form>
  </div>

  <!-- ================= FOOTER ================= -->
<footer class="footer" aria-labelledby="footer-heading">

  <h2 id="footer-heading" class="sr-only">Site Footer</h2>

  <div class="footer-card">

    <!-- Brand -->
    <section class="footer-brand">
      <h3>UIverse</h3>

      <p>
        Open-source HTML, CSS and JavaScript UI components for modern web development.
      </p>

      <div class="footer-socials">

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub"
        >
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn"
        >
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit X (Twitter)"
        >
          <i class="fab fa-x-twitter" aria-hidden="true"></i>
        </a>

      </div>
    </section>

    <!-- Explore -->
    <nav class="footer-col" aria-labelledby="explore-links">
      <h3 id="explore-links">Explore</h3>

      <ul>
        <li><a href="button.html">Buttons</a></li>
        <li><a href="navbar.html">Navbars</a></li>
        <li><a href="cards.html">Cards</a></li>
        <li><a href="inputs.html">Inputs</a></li>
        <li><a href="forms.html">Forms</a></li>
      </ul>
    </nav>

    <!-- Resources -->
    <nav class="footer-col" aria-labelledby="resource-links">
      <h3 id="resource-links">Resources</h3>

      <ul>
        <li><a href="documentation.html">Documentation</a></li>
        <li><a href="howtocontribute.html">Contribute</a></li>

        <li>
          <a
            href="https://github.com/Tushar-sonawane06/UI-Verse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </li>

        <li>
          <a href="community/community.html">
            Community
          </a>
        </li>
      </ul>
    </nav>

    <!-- Legal -->
    <nav class="footer-col" aria-labelledby="legal-links">
      <h3 id="legal-links">Legal</h3>

      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="license.html">License</a></li>
      </ul>
    </nav>

    <!-- Newsletter -->
    <section class="footer-col newsletter">
      <h3>Stay Updated</h3>

      <p>
        Get notified when new components are released.
      </p>

      <form class="newsletter-form" id="newsletterForm">

        <label for="newsletterEmail" class="sr-only">
          Email Address
        </label>

        <input
          id="newsletterEmail"
          type="email"
          placeholder="your@email.com"
          autocomplete="email"
          required
        >

        <button type="submit">
          Subscribe
        </button>

      </form>

    </section>

  </div>

  <div class="footer-bottom">
    <p>
      © 2026 UIverse. Made with
      <i
        class="fa-solid fa-heart"
        aria-hidden="true"
      ></i>
      for developers worldwide.
    </p>
  </div>

</footer>

  <!-- GRID -->
  <div class="footer-grid">
    <!-- =========================================================
     FOOTER 10 — STARTUP FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Startup Footer</span>
    <span class="card-tag tag-new">Startup</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer startup-footer">

      <h2>Launch Faster</h2>

      <p>
        Modern startup footer for SaaS products.
      </p>

      <button>Start Free</button>

    </footer>


  </div>

  <!-- ================= FOOTER ================= -->
<footer class="footer" role="contentinfo">

  <div class="footer-card">

    <!-- Brand -->
    <div class="footer-brand">
      <h2>⬡ UIverse</h2>

      <p>
        Open-source UI components crafted for modern web development.
      </p>

      <div class="footer-socials">

        <a
          href="https://github.com/Tushar-sonawane06/UI-Verse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i class="fab fa-x-twitter"></i>
        </a>

      </div>
    </div>

    <!-- Explore -->
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

    <!-- Resources -->
    <div class="footer-col">
      <h3>Resources</h3>

      <ul>
        <li><a href="documentation.html">Documentation</a></li>
        <li><a href="howtocontribute.html">Contribute</a></li>

        <li>
          <a
            href="https://github.com/Tushar-sonawane06/UI-Verse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </li>

        <li>
          <a href="community/community.html">
            Community
          </a>
        </li>
      </ul>
    </div>

    <!-- Legal -->
    <div class="footer-col">
      <h3>Legal</h3>

      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="license.html">License</a></li>
      </ul>
    </div>

    <!-- Newsletter -->
    <div class="footer-col newsletter">
      <h3>Stay Updated</h3>

      <p>Get notified when new UI components are added.</p>

      <label for="newsletterEmail" class="sr-only">
        Email Address
      </label>

      <div class="newsletter-form">
        <input
          id="newsletterEmail"
          type="email"
          placeholder="your@email.com"
          aria-label="Email Address"
        >

        <button type="button" id="subscribeBtn">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>
      © 2026 UIverse. Made with ❤️ for developers worldwide.
    </p>
  </div>

</footer>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 11 — GRID FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Grid Footer</span>
    <span class="card-tag tag-popular">Grid</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer grid-footer">

      <div>Docs</div>
      <div>Pricing</div>
      <div>Support</div>
      <div>API</div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 12 — GLOW FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Glow Footer</span>
    <span class="card-tag tag-trending">Glow</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer glow-footer">

      <h2>Build Beautiful UI</h2>

      <p>
        Animated glow footer section.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 13 — APP FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">App Footer</span>
    <span class="card-tag tag-essential">Mobile</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer app-footer">

      <h2>Download App</h2>

      <div class="app-buttons">

        <button>App Store</button>

        <button>Google Play</button>

      </div>

      <div class="actions">
        <button onclick="toggleCode('f1')">Code</button>
        <button onclick="copyCode('f1',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Minimal Footer')">Add to My Collection</button>
      </div>
    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 14 — WAVE FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Wave Footer</span>
    <span class="card-tag tag-new">Wave</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer wave-footer">

      <h2>Creative Footer</h2>

      <p>
        Wave inspired modern footer design.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 15 — PORTFOLIO FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Portfolio Footer</span>
    <span class="card-tag tag-trending">Portfolio</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer portfolio-footer">

      <h2>John Doe</h2>

      <p>
        Frontend Developer & Designer
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 16 — BENTO FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Bento Footer</span>
    <span class="card-tag tag-popular">Bento</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer bento-footer">

      <div>UI</div>
      <div>Docs</div>
      <div>API</div>
      <div>Blog</div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 17 — ELEGANT FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Elegant Footer</span>
    <span class="card-tag tag-essential">Elegant</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer elegant-footer">

      <h2>Elegant UI</h2>

      <p>
        Minimal elegant footer layout.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 18 — DARK PRO FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Dark Pro Footer</span>
    <span class="card-tag tag-popular">Pro</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer darkpro-footer">

      <h2>UIverse Pro</h2>

      <p>
        Premium developer components.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 19 — COMMUNITY FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Community Footer</span>
    <span class="card-tag tag-new">Community</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer community-footer">

      <h2>Join Community</h2>

      <div class="community-icons">

        <i class="fab fa-discord"></i>

        <i class="fab fa-github"></i>

        <i class="fab fa-reddit"></i>


      </div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>
  <!-- FOOTER 5 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Glass Footer</span>
    <span class="card-tag tag-new">Glass</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer glass-footer">

      <h2>⬡ UIverse</h2>

      <p>
        Frosted glass footer with premium UI styling.
      </p>

      <div class="glass-links">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
      </div>

      <div class="actions">
        <button onclick="toggleCode('f2')">Code</button>
        <button onclick="copyCode('f2',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Grid Footer')">Add to My Collection</button>
      </div>
    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 6 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Social Footer</span>
    <span class="card-tag tag-trending">Social</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer social-footer">

      <h2>Connect with UIverse</h2>

      <div class="social-icons-big">
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-discord"></i>
        <i class="fab fa-x-twitter"></i>

      </div>

      <p>Follow us across platforms.</p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 7 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Split Footer</span>
    <span class="card-tag tag-essential">Layout</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer split-footer">

      <div>
        <h2>UIverse</h2>
        <p>Modern UI library for developers.</p>
      </div>

      <div class="actions">
        <button onclick="toggleCode('f3')">Code</button>
        <button onclick="copyCode('f3',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Dark Footer')">Add to My Collection</button>
      </div>
      <div class="split-links">
        <a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">Community</a>

      </div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 8 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Neon Footer</span>
    <span class="card-tag tag-popular">Neon</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer neon-footer">

      <h2>Future UI Starts Here</h2>

      <p>
        Neon styled futuristic footer component.
      </p>

      <button>Get Started</button>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 9 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Centered Footer</span>
    <span class="card-tag tag-new">Clean</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer centered-footer">

      <h2>⬡ UIverse</h2>

      <p>
        Simple centered footer with clean typography.
      </p>

      <div class="centered-links">
        <a href="#">About</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <div class="actions">
        <button onclick="toggleCode('f4')">Code</button>
        <button onclick="copyCode('f4',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Social Footer')">Add to My Collection</button>
      </div>
    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>
    <!-- FOOTER 1 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Modern SaaS Footer</span>
        <span class="card-tag tag-popular">Popular</span>

      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer dark-footer">

          <div class="demo-footer-grid">

            <div>
              <h2>⬡ UIverse</h2>
              <p>
                Build modern reusable UI components faster.
              </p>
            </div>

            <div>
              <h4>Product</h4>
              <a href="#">Components</a>
              <a href="#">Templates</a>
              <a href="#">Pricing</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#">Docs</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
            </div>

            <div>
              <h4>Social</h4>

              <div class="demo-socials">
                <i class="fab fa-github"></i>
                <i class="fab fa-discord"></i>
                <i class="fab fa-x-twitter"></i>
              </div>

            </div>

          </div>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f5')">Code</button>
        <button onclick="copyCode('f5',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Newsletter Footer')">Add to My Collection</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

    <!-- FOOTER 2 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Minimal Footer</span>
        <span class="card-tag tag-essential">Simple</span>
      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer minimal-footer">

          <div class="minimal-inner">

            <h2>UIverse</h2>

            <div class="minimal-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Docs</a>
              <a href="#">Contact</a>
            </div>

            <p>© 2026 UIverse</p>

          </div>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f6')">Code</button>
        <button onclick="copyCode('f6',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Multi Column Footer')">Add to My Collection</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

    <!-- FOOTER 3 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Newsletter Footer</span>
        <span class="card-tag tag-new">New</span>
      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer newsletter-footer">

          <h2>Stay Updated</h2>

          <p>
            Get notified when new UI components drop.
          </p>

          <div class="newsletter-demo">

            <input type="email" placeholder="Enter email">

            <button>Subscribe</button>

          </div>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f7')">Code</button>
        <button onclick="copyCode('f7',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Sticky Footer')">Add to My Collection</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

    <!-- FOOTER 4 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Gradient Footer</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer gradient-footer">

          <h2>Build Faster with UIverse</h2>

          <p>
            Reusable UI components crafted for developers.
          </p>

          <button>Explore Components</button>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f8')">Code</button>
        <button onclick="copyCode('f8',this)">Copy</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

  </div>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/footer.css\`

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
    title: 'Footer',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/footer.css"],
    content: `<main class="main-home">

  <!-- PAGE HEADER -->
  <section class="footer-page-header">

    <div class="breadcrumb">
      <a href="index.html">Home</a>
      <i class="fa-solid fa-chevron-right"></i>
      <span>Footers</span>
    </div>

    <h1>Footer Components</h1>

    <p>
      Modern responsive footer sections for SaaS, portfolio,
      startup and product websites.
    </p>

    <div class="page-meta">

      <span class="meta-badge">
        <i class="fa-solid fa-layer-group"></i>
        4 Components
      </span>

      <span class="meta-badge">
        <i class="fa-solid fa-code"></i>
        HTML & CSS
      </span>

    </div>

  </section>

  <div>
    <form>
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" name="" placeholder="Filter footers..." id="Scearch" onkeyup="SCEARCH()">
    </form>
  </div>

  <!-- ================= FOOTER ================= -->
<footer class="footer" aria-labelledby="footer-heading">

  <h2 id="footer-heading" class="sr-only">Site Footer</h2>

  <div class="footer-card">

    <!-- Brand -->
    <section class="footer-brand">
      <h3>UIverse</h3>

      <p>
        Open-source HTML, CSS and JavaScript UI components for modern web development.
      </p>

      <div class="footer-socials">

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub"
        >
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn"
        >
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit X (Twitter)"
        >
          <i class="fab fa-x-twitter" aria-hidden="true"></i>
        </a>

      </div>
    </section>

    <!-- Explore -->
    <nav class="footer-col" aria-labelledby="explore-links">
      <h3 id="explore-links">Explore</h3>

      <ul>
        <li><a href="button.html">Buttons</a></li>
        <li><a href="navbar.html">Navbars</a></li>
        <li><a href="cards.html">Cards</a></li>
        <li><a href="inputs.html">Inputs</a></li>
        <li><a href="forms.html">Forms</a></li>
      </ul>
    </nav>

    <!-- Resources -->
    <nav class="footer-col" aria-labelledby="resource-links">
      <h3 id="resource-links">Resources</h3>

      <ul>
        <li><a href="documentation.html">Documentation</a></li>
        <li><a href="howtocontribute.html">Contribute</a></li>

        <li>
          <a
            href="https://github.com/Tushar-sonawane06/UI-Verse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </li>

        <li>
          <a href="community/community.html">
            Community
          </a>
        </li>
      </ul>
    </nav>

    <!-- Legal -->
    <nav class="footer-col" aria-labelledby="legal-links">
      <h3 id="legal-links">Legal</h3>

      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="license.html">License</a></li>
      </ul>
    </nav>

    <!-- Newsletter -->
    <section class="footer-col newsletter">
      <h3>Stay Updated</h3>

      <p>
        Get notified when new components are released.
      </p>

      <form class="newsletter-form" id="newsletterForm">

        <label for="newsletterEmail" class="sr-only">
          Email Address
        </label>

        <input
          id="newsletterEmail"
          type="email"
          placeholder="your@email.com"
          autocomplete="email"
          required
        >

        <button type="submit">
          Subscribe
        </button>

      </form>

    </section>

  </div>

  <div class="footer-bottom">
    <p>
      © 2026 UIverse. Made with
      <i
        class="fa-solid fa-heart"
        aria-hidden="true"
      ></i>
      for developers worldwide.
    </p>
  </div>

</footer>

  <!-- GRID -->
  <div class="footer-grid">
    <!-- =========================================================
     FOOTER 10 — STARTUP FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Startup Footer</span>
    <span class="card-tag tag-new">Startup</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer startup-footer">

      <h2>Launch Faster</h2>

      <p>
        Modern startup footer for SaaS products.
      </p>

      <button>Start Free</button>

    </footer>


  </div>

  <!-- ================= FOOTER ================= -->
<footer class="footer" role="contentinfo">

  <div class="footer-card">

    <!-- Brand -->
    <div class="footer-brand">
      <h2>⬡ UIverse</h2>

      <p>
        Open-source UI components crafted for modern web development.
      </p>

      <div class="footer-socials">

        <a
          href="https://github.com/Tushar-sonawane06/UI-Verse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i class="fab fa-x-twitter"></i>
        </a>

      </div>
    </div>

    <!-- Explore -->
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

    <!-- Resources -->
    <div class="footer-col">
      <h3>Resources</h3>

      <ul>
        <li><a href="documentation.html">Documentation</a></li>
        <li><a href="howtocontribute.html">Contribute</a></li>

        <li>
          <a
            href="https://github.com/Tushar-sonawane06/UI-Verse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </li>

        <li>
          <a href="community/community.html">
            Community
          </a>
        </li>
      </ul>
    </div>

    <!-- Legal -->
    <div class="footer-col">
      <h3>Legal</h3>

      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="license.html">License</a></li>
      </ul>
    </div>

    <!-- Newsletter -->
    <div class="footer-col newsletter">
      <h3>Stay Updated</h3>

      <p>Get notified when new UI components are added.</p>

      <label for="newsletterEmail" class="sr-only">
        Email Address
      </label>

      <div class="newsletter-form">
        <input
          id="newsletterEmail"
          type="email"
          placeholder="your@email.com"
          aria-label="Email Address"
        >

        <button type="button" id="subscribeBtn">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>
      © 2026 UIverse. Made with ❤️ for developers worldwide.
    </p>
  </div>

</footer>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 11 — GRID FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Grid Footer</span>
    <span class="card-tag tag-popular">Grid</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer grid-footer">

      <div>Docs</div>
      <div>Pricing</div>
      <div>Support</div>
      <div>API</div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 12 — GLOW FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Glow Footer</span>
    <span class="card-tag tag-trending">Glow</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer glow-footer">

      <h2>Build Beautiful UI</h2>

      <p>
        Animated glow footer section.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 13 — APP FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">App Footer</span>
    <span class="card-tag tag-essential">Mobile</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer app-footer">

      <h2>Download App</h2>

      <div class="app-buttons">

        <button>App Store</button>

        <button>Google Play</button>

      </div>

      <div class="actions">
        <button onclick="toggleCode('f1')">Code</button>
        <button onclick="copyCode('f1',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Minimal Footer')">Add to My Collection</button>
      </div>
    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 14 — WAVE FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Wave Footer</span>
    <span class="card-tag tag-new">Wave</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer wave-footer">

      <h2>Creative Footer</h2>

      <p>
        Wave inspired modern footer design.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 15 — PORTFOLIO FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Portfolio Footer</span>
    <span class="card-tag tag-trending">Portfolio</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer portfolio-footer">

      <h2>John Doe</h2>

      <p>
        Frontend Developer & Designer
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 16 — BENTO FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Bento Footer</span>
    <span class="card-tag tag-popular">Bento</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer bento-footer">

      <div>UI</div>
      <div>Docs</div>
      <div>API</div>
      <div>Blog</div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 17 — ELEGANT FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Elegant Footer</span>
    <span class="card-tag tag-essential">Elegant</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer elegant-footer">

      <h2>Elegant UI</h2>

      <p>
        Minimal elegant footer layout.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 18 — DARK PRO FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Dark Pro Footer</span>
    <span class="card-tag tag-popular">Pro</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer darkpro-footer">

      <h2>UIverse Pro</h2>

      <p>
        Premium developer components.
      </p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- =========================================================
     FOOTER 19 — COMMUNITY FOOTER
========================================================= -->

<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Community Footer</span>
    <span class="card-tag tag-new">Community</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer community-footer">

      <h2>Join Community</h2>

      <div class="community-icons">

        <i class="fab fa-discord"></i>

        <i class="fab fa-github"></i>

        <i class="fab fa-reddit"></i>


      </div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>
  <!-- FOOTER 5 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Glass Footer</span>
    <span class="card-tag tag-new">Glass</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer glass-footer">

      <h2>⬡ UIverse</h2>

      <p>
        Frosted glass footer with premium UI styling.
      </p>

      <div class="glass-links">
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
      </div>

      <div class="actions">
        <button onclick="toggleCode('f2')">Code</button>
        <button onclick="copyCode('f2',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Grid Footer')">Add to My Collection</button>
      </div>
    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 6 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Social Footer</span>
    <span class="card-tag tag-trending">Social</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer social-footer">

      <h2>Connect with UIverse</h2>

      <div class="social-icons-big">
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-discord"></i>
        <i class="fab fa-x-twitter"></i>

      </div>

      <p>Follow us across platforms.</p>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 7 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Split Footer</span>
    <span class="card-tag tag-essential">Layout</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer split-footer">

      <div>
        <h2>UIverse</h2>
        <p>Modern UI library for developers.</p>
      </div>

      <div class="actions">
        <button onclick="toggleCode('f3')">Code</button>
        <button onclick="copyCode('f3',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Dark Footer')">Add to My Collection</button>
      </div>
      <div class="split-links">
        <a href="#">Docs</a>
        <a href="#">Blog</a>
        <a href="#">Community</a>

      </div>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 8 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Neon Footer</span>
    <span class="card-tag tag-popular">Neon</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer neon-footer">

      <h2>Future UI Starts Here</h2>

      <p>
        Neon styled futuristic footer component.
      </p>

      <button>Get Started</button>

    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>

<!-- FOOTER 9 -->
<div class="footer-component-card">

  <div class="card-top">
    <span class="card-label">Centered Footer</span>
    <span class="card-tag tag-new">Clean</span>
  </div>

  <div class="footer-preview">

    <footer aria-label="Site footer"  class="demo-footer centered-footer">

      <h2>⬡ UIverse</h2>

      <p>
        Simple centered footer with clean typography.
      </p>

      <div class="centered-links">
        <a href="#">About</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <div class="actions">
        <button onclick="toggleCode('f4')">Code</button>
        <button onclick="copyCode('f4',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Social Footer')">Add to My Collection</button>
      </div>
    </footer>

  </div>

  <div class="actions">
    <button class="action-btn view-btn">View Code</button>
    <button class="action-btn copy-btn">Copy</button>
  </div>

</div>
    <!-- FOOTER 1 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Modern SaaS Footer</span>
        <span class="card-tag tag-popular">Popular</span>

      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer dark-footer">

          <div class="demo-footer-grid">

            <div>
              <h2>⬡ UIverse</h2>
              <p>
                Build modern reusable UI components faster.
              </p>
            </div>

            <div>
              <h4>Product</h4>
              <a href="#">Components</a>
              <a href="#">Templates</a>
              <a href="#">Pricing</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#">Docs</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
            </div>

            <div>
              <h4>Social</h4>

              <div class="demo-socials">
                <i class="fab fa-github"></i>
                <i class="fab fa-discord"></i>
                <i class="fab fa-x-twitter"></i>
              </div>

            </div>

          </div>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f5')">Code</button>
        <button onclick="copyCode('f5',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Newsletter Footer')">Add to My Collection</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

    <!-- FOOTER 2 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Minimal Footer</span>
        <span class="card-tag tag-essential">Simple</span>
      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer minimal-footer">

          <div class="minimal-inner">

            <h2>UIverse</h2>

            <div class="minimal-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Docs</a>
              <a href="#">Contact</a>
            </div>

            <p>© 2026 UIverse</p>

          </div>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f6')">Code</button>
        <button onclick="copyCode('f6',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Multi Column Footer')">Add to My Collection</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

    <!-- FOOTER 3 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Newsletter Footer</span>
        <span class="card-tag tag-new">New</span>
      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer newsletter-footer">

          <h2>Stay Updated</h2>

          <p>
            Get notified when new UI components drop.
          </p>

          <div class="newsletter-demo">

            <input type="email" placeholder="Enter email">

            <button>Subscribe</button>

          </div>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f7')">Code</button>
        <button onclick="copyCode('f7',this)">Copy</button>
        <button onclick="addToCollectionFromCard(this, 'Sticky Footer')">Add to My Collection</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

    <!-- FOOTER 4 -->
    <div class="footer-component-card">

      <div class="card-top">
        <span class="card-label">Gradient Footer</span>
        <span class="card-tag tag-trending">Trending</span>
      </div>

      <div class="footer-preview">

        <footer aria-label="Site footer"  class="demo-footer gradient-footer">

          <h2>Build Faster with UIverse</h2>

          <p>
            Reusable UI components crafted for developers.
          </p>

          <button>Explore Components</button>

        </footer>

      </div>

      <div class="actions">

        <button onclick="toggleCode('f8')">Code</button>
        <button onclick="copyCode('f8',this)">Copy</button>

        <button class="action-btn view-btn">View Code</button>
        <button class="action-btn copy-btn">Copy</button>

      </div>

    </div>

  </div>

</main>`
  })
};
