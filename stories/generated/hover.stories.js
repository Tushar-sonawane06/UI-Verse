import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Hover Effects',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Hover interaction effects and transitions

### Info & Metadata
- **Category**: Animations
- **Tags**: <code>hover</code>, <code>animation</code>, <code>effects</code>, <code>transitions</code>, <code>interactive</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">

  <header class="page-header">
    <h1>Hover Effects</h1>
    <p>Showcasing modern hover animations, 3D tilts, and interactive UI effects for reusable components.</p>
  </header>

  <section class="hover-hero">
  <div class="hero-content">
    <span class="hero-badge">100+ Interactive Effects</span>
    <h1>Create Amazing Hover Experiences</h1>
    <p>
      Explore modern CSS and JavaScript hover interactions including
      3D transforms, magnetic buttons, glassmorphism, neon effects,
      cursor trails, and much more.
    </p>

    <div class="hero-actions">
      <button class="primary-btn">Browse Effects</button>
      <button class="secondary-btn">View Source</button>
    </div>
  </div>
</section>

<section class="hover-stats">

  <div class="stat-card">
    <h2>24+</h2>
    <span>Hover Components</span>
  </div>

  <div class="stat-card">
    <h2>CSS</h2>
    <span>Animation Ready</span>
  </div>

  <div class="stat-card">
    <h2>JS</h2>
    <span>Interactive Effects</span>
  </div>

  <div class="stat-card">
    <h2>MIT</h2>
    <span>Reusable</span>
  </div>

</section>

<section class="featured-effects">

<h2>Featured Hover Effects</h2>

<div class="featured-row">

<div class="feature-card">
<i class="fa-solid fa-cube"></i>
<h3>3D Tilt</h3>
</div>

<div class="feature-card">
<i class="fa-solid fa-fire"></i>
<h3>Glow</h3>
</div>

<div class="feature-card">
<i class="fa-solid fa-water"></i>
<h3>Liquid</h3>
</div>

<div class="feature-card">
<i class="fa-solid fa-wand-magic"></i>
<h3>Magnetic</h3>
</div>

</div>

</section>

  <section class="hover-grid">

    <!-- 1. HOVER REVEAL CARDS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Hover Reveal Cards</h2>
        <p>A card that slides to reveal hidden content underneath.</p>
      </div>
      <div class="component-preview" id="preview-1">
        <div class="reveal-card">
          <div class="reveal-front">
            <i class="fa-solid fa-lock"></i>
            <span>Hover me</span>
          </div>
          <div class="reveal-back">
            <i class="fa-solid fa-unlock" style="font-size: 24px; margin-bottom: 8px;"></i>
            <p>Secret content revealed!</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-1">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="hover-filters">
  <button class="active">All</button>
  <button>Cards</button>
  <button>Buttons</button>
  <button>Text</button>
  <button>Interactive</button>
  <button>3D</button>
</div>

<div class="hover-search">
  <i class="fa-solid fa-magnifying-glass"></i>
  <input
    type="text"
    placeholder="Search hover effects..."
  >
</div>

    <!-- 2. GLOW HOVER BUTTONS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Glow Hover Button</h2>
        <p>A button that generates a soft neon gradient border upon hover.</p>
      </div>
      <div class="component-preview" id="preview-2">
        <button class="glow-btn">Hover for Glow</button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-2">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 3. 3D HOVER CARDS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>3D Hover Card</h2>
        <p>A card that tilts dynamically based on mouse position.</p>
      </div>
      <div class="component-preview" id="preview-3">
        <div class="perspective-container">
          <div class="tilt-card" id="tiltCard">
            <div class="tilt-content">
              <i class="fa-brands fa-space-awesome"></i>
              <br>
              <span>3D Space</span>
            </div>
          </div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-3">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 4. SPOTLIGHT HOVER EFFECT -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Spotlight Hover Effect</h2>
        <p>A radial gradient background that follows the cursor.</p>
      </div>
      <div class="component-preview" id="preview-4">
        <div class="spotlight-card" id="spotlightCard">
          <div class="spotlight-content">Spotlight Target</div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-4">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 5. FLOATING HOVER ELEMENTS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Floating Hover Elements</h2>
        <p>Elements that lift smoothly with dynamic drop-shadows.</p>
      </div>
      <div class="component-preview" id="preview-5">
        <div class="float-container">
          <div class="float-item"><i class="fa-brands fa-html5"></i></div>
          <div class="float-item"><i class="fa-brands fa-css3-alt"></i></div>
          <div class="float-item"><i class="fa-brands fa-js"></i></div>
          <div class="float-item"><i class="fa-brands fa-react"></i></div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-5">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 6. MAGNETIC BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Magnetic Button</h2>
        <p>A button that physically attracts to your cursor.</p>
      </div>
      <div class="component-preview" id="preview-6">
        <button class="magnetic-btn" id="magneticBtn">
          <span class="btn-text">Magnetic</span>
        </button>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-6">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 7. GLITCH TEXT EFFECT -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Glitch Text Effect</h2>
        <p>Cyberpunk style text glitch on hover.</p>
      </div>
      <div class="component-preview" id="preview-7">
        <h3 class="glitch-text" data-text="CYBERPUNK">CYBERPUNK</h3>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-7">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 8. NEUMORPHIC INSET HOVER -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Neumorphic Inset</h2>
        <p>Soft UI element that presses inwards.</p>
      </div>
      <div class="component-preview" id="preview-8">
        <div class="neumorphic-btn">
          <i class="fa-solid fa-power-off"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-8">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 9. IMAGE ZOOM OVERLAY -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Image Zoom Overlay</h2>
        <p>Image scales up while an overlay slides in.</p>
      </div>
      <div class="component-preview" id="preview-9">
        <div class="img-zoom-card">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract Art">
          <div class="img-overlay">
            <h3>Abstract Art</h3>
            <p>View Gallery &rarr;</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-9">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 10. LIQUID DISTORTION HOVER CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Liquid Distortion Hover Card</h2>
        <p>Futuristic displacement map distortion waves on hover.</p>
      </div>
      <div class="component-preview" id="preview-10">
        <div class="liquid-card">
          <svg class="liquid-svg" viewBox="0 0 200 200">
            <defs>
              <filter id="liquid-filter-10">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" class="disp-map" />
              </filter>
            </defs>
            <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" x="0" y="0" width="200" height="200" filter="url(#liquid-filter-10)"/>
          </svg>
          <div class="liquid-content">
            <h3>Cybernetic Wave</h3>
            <p>Interactive Turbulence</p>
          </div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-10">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 11. AURORA GRADIENT HOVER BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Aurora Gradient Hover Button</h2>
        <p>A button surrounded by glowing fluid aurora colors on hover.</p>
      </div>
      <div class="component-preview" id="preview-11">
        <button class="aurora-btn">
          <span class="aurora-glow"></span>
          <span class="aurora-glow"></span>
          <span class="aurora-glow"></span>
          <span class="aurora-btn-text">Initiate Aurora</span>
        </button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-11">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 12. TILT GLASSMORPHISM PANEL -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Tilt Glassmorphism Panel</h2>
        <p>A frosted glass panel featuring specular reflection highlights.</p>
      </div>
      <div class="component-preview" id="preview-12">
        <div class="glass-tilt-container">
          <div class="glass-tilt-card" id="glassTiltCard">
            <div class="glass-shine"></div>
            <div class="glass-content">
              <span class="glass-badge">PREMIUM</span>
              <h3>Specular Glass</h3>
              <p>Realistic light reflection mapping.</p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-12">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 13. CURSOR TRAIL HOVER EFFECT -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Cursor Trail Hover Effect</h2>
        <p>A interactive canvas container capturing neon particle cursor trails.</p>
      </div>
      <div class="component-preview" id="preview-13" style="position: relative; overflow: hidden; min-height: 220px; width: 100%;">
        <div class="trail-card" id="trailCardBox">
          <canvas id="trailCanvas"></canvas>
          <div class="trail-content">Move cursor here</div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-13">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 14. MORPHING ICON HOVER CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Morphing Icon Hover Card</h2>
        <p>Seamless SVG shape morph transition from octagon to shield on hover.</p>
      </div>
      <div class="component-preview" id="preview-14">
        <div class="morph-card">
          <div class="morph-svg-wrapper">
            <svg viewBox="0 0 100 100" class="morph-svg">
              <path class="morph-path" d="M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 Z" />
            </svg>
            <i class="fa-solid fa-shield-halved morph-icon"></i>
          </div>
          <div class="morph-content">
            <h3>Quantum Security</h3>
            <p>Shield engaged</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-14">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 15. NEON SWEEP CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Neon Sweep Card</h2>
        <p>A moving highlight beam glides across the surface on hover.</p>
      </div>
      <div class="component-preview" id="preview-15">
        <div class="neon-sweep-card">
          <span class="sweep-tag">Premium</span>
          <h3>Neon Sweep</h3>
          <p>Hover to send a light streak across the card.</p>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-15">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 16. SLIDE REVEAL CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Slide Reveal Card</h2>
        <p>The front layer slides away to reveal a deeper panel underneath.</p>
      </div>
      <div class="component-preview" id="preview-16">
        <div class="slide-reveal-card">
          <div class="slide-face slide-front">
            <i class="fa-solid fa-layer-group"></i>
            <h3>Workspace Sync</h3>
            <p>Lift the cover to reveal the payload.</p>
          </div>
          <div class="slide-face slide-back">
            <span class="slide-stat">24%</span>
            <p>Hover state unlocked</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-16">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 17. PRISM GLOW BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Prism Glow Button</h2>
        <p>A layered button that blooms with color and depth on hover.</p>
      </div>
      <div class="component-preview" id="preview-17">
        <button class="prism-btn">
          <span class="prism-btn-text">Activate Prism</span>
          <span class="prism-btn-ripple"></span>
        </button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-17">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 18. ORBIT HOVER TILE -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Orbit Hover Tile</h2>
        <p>Concentric rings spin and glow around the center icon.</p>
      </div>
      <div class="component-preview" id="preview-18">
        <div class="orbit-tile">
          <div class="orbit-ring orbit-ring-one"></div>
          <div class="orbit-ring orbit-ring-two"></div>
          <div class="orbit-core">
            <i class="fa-solid fa-satellite-dish"></i>
            <span>Signal</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-18">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 19. CORNER RIBBON CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Corner Ribbon Card</h2>
        <p>A crisp ribbon tag swings into view with a soft shadow lift.</p>
      </div>
      <div class="component-preview" id="preview-19">
        <div class="ribbon-card">
          <span class="ribbon-tag">New</span>
          <div class="ribbon-copy">
            <h3>Launch Ready</h3>
            <p>Hover to reveal the corner accent.</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-19">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 20. GLOW PILL TAG -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Glow Pill Tag</h2>
        <p>A minimal tag that blooms with a soft gradient aura on hover.</p>
      </div>
      <div class="component-preview" id="preview-20">
        <div class="glow-pill">
          <span>Premium Hover</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-20">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 21. FLIP ICON TILE -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Flip Icon Tile</h2>
        <p>A compact tile that flips to reveal a secondary state.</p>
      </div>
      <div class="component-preview" id="preview-21">
        <div class="flip-tile">
          <div class="flip-inner">
            <div class="flip-face flip-front">
              <i class="fa-solid fa-bolt"></i>
              <span>Hover</span>
            </div>
            <div class="flip-face flip-back">
              <span>Charged</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-21">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 22. SHIMMER INFO CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Shimmer Info Card</h2>
        <p>A soft sweep of light animates across a rich card surface.</p>
      </div>
      <div class="component-preview" id="preview-22">
        <div class="shimmer-card">
          <div>
            <h3>Insight Pulse</h3>
            <p>Hover to preview the shimmer.</p>
          </div>
          <span class="card-tag">INSIGHT</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-22">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 23. ELASTIC ARROW LINK -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Elastic Arrow Link</h2>
        <p>An underline grows while the arrow nudges forward.</p>
      </div>
      <div class="component-preview" id="preview-23">
        <a class="elastic-link" href="#">
          Explore Details <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-23">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 24. WAVE GLOW BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Wave Glow Button</h2>
        <p>A subtle wave of light expands behind the label on hover.</p>
      </div>
      <div class="component-preview" id="preview-24">
        <button class="wave-btn">
          <span>Launch Action</span>
        </button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-24">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

  </section>

  <!-- ================= FOOTER ================= -->
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <i class="fa-solid fa-hexagon-nodes"></i>
          <span>UIverse</span>
        </div>
        <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
        <div class="footer-socials">
          <a href="#"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="button.html">Buttons</a></li>
          <li><a href="navbar.html">Navbars</a></li>
          <li><a href="cards.html">Cards</a></li>
          <li><a href="inputs.html">Inputs</a></li>
          <li><a href="forms.html">Forms</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Contribute</a></li>
          <li><a href="#">GitHub Repo</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">License</a></li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Stay Updated</h4>
        <p>Get notified when new components drop.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="your@email.com" / data-a11y-remediation="label-needed">
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2026 UIverse. Made with <i class="fa-solid fa-heart heart"></i> for developers worldwide.</p>
    </div>
  </footer>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/hover.css\`

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
    title: 'Hover Effects',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/hover.css"],
    content: `<main class="main-home">

  <header class="page-header">
    <h1>Hover Effects</h1>
    <p>Showcasing modern hover animations, 3D tilts, and interactive UI effects for reusable components.</p>
  </header>

  <section class="hover-hero">
  <div class="hero-content">
    <span class="hero-badge">100+ Interactive Effects</span>
    <h1>Create Amazing Hover Experiences</h1>
    <p>
      Explore modern CSS and JavaScript hover interactions including
      3D transforms, magnetic buttons, glassmorphism, neon effects,
      cursor trails, and much more.
    </p>

    <div class="hero-actions">
      <button class="primary-btn">Browse Effects</button>
      <button class="secondary-btn">View Source</button>
    </div>
  </div>
</section>

<section class="hover-stats">

  <div class="stat-card">
    <h2>24+</h2>
    <span>Hover Components</span>
  </div>

  <div class="stat-card">
    <h2>CSS</h2>
    <span>Animation Ready</span>
  </div>

  <div class="stat-card">
    <h2>JS</h2>
    <span>Interactive Effects</span>
  </div>

  <div class="stat-card">
    <h2>MIT</h2>
    <span>Reusable</span>
  </div>

</section>

<section class="featured-effects">

<h2>Featured Hover Effects</h2>

<div class="featured-row">

<div class="feature-card">
<i class="fa-solid fa-cube"></i>
<h3>3D Tilt</h3>
</div>

<div class="feature-card">
<i class="fa-solid fa-fire"></i>
<h3>Glow</h3>
</div>

<div class="feature-card">
<i class="fa-solid fa-water"></i>
<h3>Liquid</h3>
</div>

<div class="feature-card">
<i class="fa-solid fa-wand-magic"></i>
<h3>Magnetic</h3>
</div>

</div>

</section>

  <section class="hover-grid">

    <!-- 1. HOVER REVEAL CARDS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Hover Reveal Cards</h2>
        <p>A card that slides to reveal hidden content underneath.</p>
      </div>
      <div class="component-preview" id="preview-1">
        <div class="reveal-card">
          <div class="reveal-front">
            <i class="fa-solid fa-lock"></i>
            <span>Hover me</span>
          </div>
          <div class="reveal-back">
            <i class="fa-solid fa-unlock" style="font-size: 24px; margin-bottom: 8px;"></i>
            <p>Secret content revealed!</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-1">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="hover-filters">
  <button class="active">All</button>
  <button>Cards</button>
  <button>Buttons</button>
  <button>Text</button>
  <button>Interactive</button>
  <button>3D</button>
</div>

<div class="hover-search">
  <i class="fa-solid fa-magnifying-glass"></i>
  <input
    type="text"
    placeholder="Search hover effects..."
  >
</div>

    <!-- 2. GLOW HOVER BUTTONS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Glow Hover Button</h2>
        <p>A button that generates a soft neon gradient border upon hover.</p>
      </div>
      <div class="component-preview" id="preview-2">
        <button class="glow-btn">Hover for Glow</button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-2">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 3. 3D HOVER CARDS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>3D Hover Card</h2>
        <p>A card that tilts dynamically based on mouse position.</p>
      </div>
      <div class="component-preview" id="preview-3">
        <div class="perspective-container">
          <div class="tilt-card" id="tiltCard">
            <div class="tilt-content">
              <i class="fa-brands fa-space-awesome"></i>
              <br>
              <span>3D Space</span>
            </div>
          </div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-3">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 4. SPOTLIGHT HOVER EFFECT -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Spotlight Hover Effect</h2>
        <p>A radial gradient background that follows the cursor.</p>
      </div>
      <div class="component-preview" id="preview-4">
        <div class="spotlight-card" id="spotlightCard">
          <div class="spotlight-content">Spotlight Target</div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-4">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 5. FLOATING HOVER ELEMENTS -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Floating Hover Elements</h2>
        <p>Elements that lift smoothly with dynamic drop-shadows.</p>
      </div>
      <div class="component-preview" id="preview-5">
        <div class="float-container">
          <div class="float-item"><i class="fa-brands fa-html5"></i></div>
          <div class="float-item"><i class="fa-brands fa-css3-alt"></i></div>
          <div class="float-item"><i class="fa-brands fa-js"></i></div>
          <div class="float-item"><i class="fa-brands fa-react"></i></div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-5">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 6. MAGNETIC BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Magnetic Button</h2>
        <p>A button that physically attracts to your cursor.</p>
      </div>
      <div class="component-preview" id="preview-6">
        <button class="magnetic-btn" id="magneticBtn">
          <span class="btn-text">Magnetic</span>
        </button>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-6">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 7. GLITCH TEXT EFFECT -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Glitch Text Effect</h2>
        <p>Cyberpunk style text glitch on hover.</p>
      </div>
      <div class="component-preview" id="preview-7">
        <h3 class="glitch-text" data-text="CYBERPUNK">CYBERPUNK</h3>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-7">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 8. NEUMORPHIC INSET HOVER -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Neumorphic Inset</h2>
        <p>Soft UI element that presses inwards.</p>
      </div>
      <div class="component-preview" id="preview-8">
        <div class="neumorphic-btn">
          <i class="fa-solid fa-power-off"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-8">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 9. IMAGE ZOOM OVERLAY -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Image Zoom Overlay</h2>
        <p>Image scales up while an overlay slides in.</p>
      </div>
      <div class="component-preview" id="preview-9">
        <div class="img-zoom-card">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract Art">
          <div class="img-overlay">
            <h3>Abstract Art</h3>
            <p>View Gallery &rarr;</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-9">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 10. LIQUID DISTORTION HOVER CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Liquid Distortion Hover Card</h2>
        <p>Futuristic displacement map distortion waves on hover.</p>
      </div>
      <div class="component-preview" id="preview-10">
        <div class="liquid-card">
          <svg class="liquid-svg" viewBox="0 0 200 200">
            <defs>
              <filter id="liquid-filter-10">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" class="disp-map" />
              </filter>
            </defs>
            <image href="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300&auto=format&fit=crop" x="0" y="0" width="200" height="200" filter="url(#liquid-filter-10)"/>
          </svg>
          <div class="liquid-content">
            <h3>Cybernetic Wave</h3>
            <p>Interactive Turbulence</p>
          </div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-10">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 11. AURORA GRADIENT HOVER BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Aurora Gradient Hover Button</h2>
        <p>A button surrounded by glowing fluid aurora colors on hover.</p>
      </div>
      <div class="component-preview" id="preview-11">
        <button class="aurora-btn">
          <span class="aurora-glow"></span>
          <span class="aurora-glow"></span>
          <span class="aurora-glow"></span>
          <span class="aurora-btn-text">Initiate Aurora</span>
        </button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-11">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 12. TILT GLASSMORPHISM PANEL -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Tilt Glassmorphism Panel</h2>
        <p>A frosted glass panel featuring specular reflection highlights.</p>
      </div>
      <div class="component-preview" id="preview-12">
        <div class="glass-tilt-container">
          <div class="glass-tilt-card" id="glassTiltCard">
            <div class="glass-shine"></div>
            <div class="glass-content">
              <span class="glass-badge">PREMIUM</span>
              <h3>Specular Glass</h3>
              <p>Realistic light reflection mapping.</p>
            </div>
          </div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-12">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 13. CURSOR TRAIL HOVER EFFECT -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Cursor Trail Hover Effect</h2>
        <p>A interactive canvas container capturing neon particle cursor trails.</p>
      </div>
      <div class="component-preview" id="preview-13" style="position: relative; overflow: hidden; min-height: 220px; width: 100%;">
        <div class="trail-card" id="trailCardBox">
          <canvas id="trailCanvas"></canvas>
          <div class="trail-content">Move cursor here</div>
        </div>
        
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-13">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 14. MORPHING ICON HOVER CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Morphing Icon Hover Card</h2>
        <p>Seamless SVG shape morph transition from octagon to shield on hover.</p>
      </div>
      <div class="component-preview" id="preview-14">
        <div class="morph-card">
          <div class="morph-svg-wrapper">
            <svg viewBox="0 0 100 100" class="morph-svg">
              <path class="morph-path" d="M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 Z" />
            </svg>
            <i class="fa-solid fa-shield-halved morph-icon"></i>
          </div>
          <div class="morph-content">
            <h3>Quantum Security</h3>
            <p>Shield engaged</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-14">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 15. NEON SWEEP CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Neon Sweep Card</h2>
        <p>A moving highlight beam glides across the surface on hover.</p>
      </div>
      <div class="component-preview" id="preview-15">
        <div class="neon-sweep-card">
          <span class="sweep-tag">Premium</span>
          <h3>Neon Sweep</h3>
          <p>Hover to send a light streak across the card.</p>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-15">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 16. SLIDE REVEAL CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Slide Reveal Card</h2>
        <p>The front layer slides away to reveal a deeper panel underneath.</p>
      </div>
      <div class="component-preview" id="preview-16">
        <div class="slide-reveal-card">
          <div class="slide-face slide-front">
            <i class="fa-solid fa-layer-group"></i>
            <h3>Workspace Sync</h3>
            <p>Lift the cover to reveal the payload.</p>
          </div>
          <div class="slide-face slide-back">
            <span class="slide-stat">24%</span>
            <p>Hover state unlocked</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-16">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 17. PRISM GLOW BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Prism Glow Button</h2>
        <p>A layered button that blooms with color and depth on hover.</p>
      </div>
      <div class="component-preview" id="preview-17">
        <button class="prism-btn">
          <span class="prism-btn-text">Activate Prism</span>
          <span class="prism-btn-ripple"></span>
        </button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-17">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 18. ORBIT HOVER TILE -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Orbit Hover Tile</h2>
        <p>Concentric rings spin and glow around the center icon.</p>
      </div>
      <div class="component-preview" id="preview-18">
        <div class="orbit-tile">
          <div class="orbit-ring orbit-ring-one"></div>
          <div class="orbit-ring orbit-ring-two"></div>
          <div class="orbit-core">
            <i class="fa-solid fa-satellite-dish"></i>
            <span>Signal</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-18">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 19. CORNER RIBBON CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Corner Ribbon Card</h2>
        <p>A crisp ribbon tag swings into view with a soft shadow lift.</p>
      </div>
      <div class="component-preview" id="preview-19">
        <div class="ribbon-card">
          <span class="ribbon-tag">New</span>
          <div class="ribbon-copy">
            <h3>Launch Ready</h3>
            <p>Hover to reveal the corner accent.</p>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-19">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 20. GLOW PILL TAG -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Glow Pill Tag</h2>
        <p>A minimal tag that blooms with a soft gradient aura on hover.</p>
      </div>
      <div class="component-preview" id="preview-20">
        <div class="glow-pill">
          <span>Premium Hover</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-20">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 21. FLIP ICON TILE -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Flip Icon Tile</h2>
        <p>A compact tile that flips to reveal a secondary state.</p>
      </div>
      <div class="component-preview" id="preview-21">
        <div class="flip-tile">
          <div class="flip-inner">
            <div class="flip-face flip-front">
              <i class="fa-solid fa-bolt"></i>
              <span>Hover</span>
            </div>
            <div class="flip-face flip-back">
              <span>Charged</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-21">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 22. SHIMMER INFO CARD -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Shimmer Info Card</h2>
        <p>A soft sweep of light animates across a rich card surface.</p>
      </div>
      <div class="component-preview" id="preview-22">
        <div class="shimmer-card">
          <div>
            <h3>Insight Pulse</h3>
            <p>Hover to preview the shimmer.</p>
          </div>
          <span class="card-tag">INSIGHT</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-22">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 23. ELASTIC ARROW LINK -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Elastic Arrow Link</h2>
        <p>An underline grows while the arrow nudges forward.</p>
      </div>
      <div class="component-preview" id="preview-23">
        <a class="elastic-link" href="#">
          Explore Details <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-23">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 24. WAVE GLOW BUTTON -->
    <div class="hover-card">
      <div class="hover-info">
        <h2>Wave Glow Button</h2>
        <p>A subtle wave of light expands behind the label on hover.</p>
      </div>
      <div class="component-preview" id="preview-24">
        <button class="wave-btn">
          <span>Launch Action</span>
        </button>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-24">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

  </section>

  <!-- ================= FOOTER ================= -->
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <i class="fa-solid fa-hexagon-nodes"></i>
          <span>UIverse</span>
        </div>
        <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
        <div class="footer-socials">
          <a href="#"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Explore</h4>
        <ul>
          <li><a href="button.html">Buttons</a></li>
          <li><a href="navbar.html">Navbars</a></li>
          <li><a href="cards.html">Cards</a></li>
          <li><a href="inputs.html">Inputs</a></li>
          <li><a href="forms.html">Forms</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Contribute</a></li>
          <li><a href="#">GitHub Repo</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">License</a></li>
        </ul>
      </div>

      <div class="footer-newsletter">
        <h4>Stay Updated</h4>
        <p>Get notified when new components drop.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="your@email.com" / data-a11y-remediation="label-needed">
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2026 UIverse. Made with <i class="fa-solid fa-heart heart"></i> for developers worldwide.</p>
    </div>
  </footer>

</main>`
  })
};
