import { createShadowRootStory } from './storybook-utils.js';

export default {
  title: 'Motion/Animation Library',
  tags: ['autodocs'],
};

const animationLibraryMarkup = `
  <div class="animation-library-app">
    <aside class="sidebar">
      <div class="logo">MotionUI</div>
      <nav>
        <a href="#" class="active">Animations</a>
        <a href="#">Hover Effects</a>
        <a href="#">Loaders</a>
        <a href="#">Transitions</a>
        <a href="#">Snippets</a>
        <a href="#">Favorites</a>
      </nav>
      <div class="side-card">
        <span>Featured Motion</span>
        <h2>Liquid Hover</h2>
        <p>Smooth glass morph hover animation.</p>
        <button type="button">Explore Effect</button>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <div>
          <h1>Animation Library</h1>
          <p>Explore modern CSS & JS motion effects.</p>
        </div>
        <div class="top-actions">
          <div class="search-box">
            <input type="text" placeholder="Search animations..." aria-label="Search animations" />
          </div>
          <button class="theme-btn" type="button" aria-label="Toggle theme">☾</button>
        </div>
      </header>

      <section class="hero">
        <div class="hero-content">
          <span class="hero-badge">Trending Animation Pack</span>
          <h2>Interactive Motion Effects</h2>
          <p>Create stunning UI experiences with reusable animations and hover effects.</p>
          <div class="hero-buttons">
            <button class="primary-btn" type="button">Preview Pack</button>
            <button class="glass-btn" type="button" aria-label="Favorite">♥</button>
          </div>
        </div>
        <div class="hero-preview">
          <div class="floating-card card-1"></div>
          <div class="floating-card card-2"></div>
          <div class="floating-card card-3"></div>
        </div>
      </section>

      <section class="chips" aria-label="Animation categories">
        <button class="chip active" type="button">All</button>
        <button class="chip" type="button">Hover</button>
        <button class="chip" type="button">Buttons</button>
        <button class="chip" type="button">Loaders</button>
        <button class="chip" type="button">Text</button>
        <button class="chip" type="button">Cards</button>
        <button class="chip" type="button">SVG</button>
      </section>

      <section class="animation-grid">
        <div class="animation-card">
          <div class="preview-box pulse-box"><div class="pulse-circle"></div></div>
          <div class="card-info">
            <h3>Pulse Loader</h3>
            <p>Smooth pulse loading animation.</p>
            <div class="card-footer"><span>CSS</span><button type="button">Copy Code</button></div>
          </div>
        </div>

        <div class="animation-card">
          <div class="preview-box"><button class="liquid-btn" type="button">Hover Me</button></div>
          <div class="card-info">
            <h3>Liquid Button</h3>
            <p>Fluid hover motion for primary actions.</p>
            <div class="card-footer"><span>CSS</span><button type="button">Copy Code</button></div>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

function renderAnimationLibrary() {
  return createShadowRootStory({
    title: 'Animation Library',
    styles: ['/Animation-Library/animation-library.css'],
    extraStyles: `
      .animation-library-app {
        display: flex;
        min-height: calc(100vh - 48px);
      }

      .animation-library-app .sidebar,
      .animation-library-app .main {
        min-height: calc(100vh - 48px);
      }

      .animation-library-app .search-box {
        overflow: hidden;
      }
    `,
    content: animationLibraryMarkup,
  });
}

export const Default = {
  render: renderAnimationLibrary,
};
