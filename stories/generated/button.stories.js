import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Button styles, variants and examples

### Info & Metadata
- **Category**: Buttons
- **Tags**: <code>controls</code>, <code>components</code>, <code>interactive</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">
  <div style="margin-bottom: 40px;">
    <h1 style="font-family: var(--font-heading, 'Syne', sans-serif); font-size: 36px; font-weight: 800;">Buttons</h1>
    <p style="color: var(--text-secondary); margin-top: 10px;">A clean collection of 5 beautifully crafted button components.</p>
  </div>

  <div class="button-grid">
    
    <!-- 1 -->
    <div class="component-card" data-name="gradient" data-cat="style">
      <div class="card-top">
        <span class="card-label">Gradient</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <button class="gradient-btn">Gradient</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 2 -->
    <div class="component-card" data-name="neon" data-cat="effect">
      <div class="card-top">
        <span class="card-label">Neon</span>
        <span class="card-tag tag-trending">Animated</span>
      </div>
      <div class="card-preview dark-preview">
        <button class="neon-btn">Neon</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 3 -->
    <div class="component-card" data-name="glass" data-cat="style">
      <div class="card-top">
        <span class="card-label">Glassmorphism</span>
        <span class="card-tag tag-premium">Premium</span>
      </div>
      <div class="card-preview glass-preview" style="background: linear-gradient(135deg, #6c5ce7, #eb6835);">
        <button class="glass-btn">Glass</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 4 -->
    <div class="component-card" data-name="outline" data-cat="style">
      <div class="card-top">
        <span class="card-label">Outline</span>
        <span class="card-tag tag-essential">Clean</span>
      </div>
      <div class="card-preview">
        <button class="outline-btn">Outline</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 5 -->
    <div class="component-card" data-name="3d" data-cat="effect">
      <div class="card-top">
        <span class="card-label">3D Press</span>
        <span class="card-tag tag-new">Interactive</span>
      </div>
      <div class="card-preview">
        <button class="btn-3d">3D</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

  </div>
</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`/style.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/button.css\`

#### JavaScript Scripts:
- \`/js/loader.js\`
- \`/js/features/export-sandbox.js\`
- \`/js/features/component-playground.js\`
- \`/script.js\`
- \`/js/features/code-diff.js\`
- \`/playground.js\`
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
    title: 'Buttons',
    styles: ["/design-tokens.css","/dist/shared.css","/style.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/button.css"],
    content: `<main class="main-home">
  <div style="margin-bottom: 40px;">
    <h1 style="font-family: var(--font-heading, 'Syne', sans-serif); font-size: 36px; font-weight: 800;">Buttons</h1>
    <p style="color: var(--text-secondary); margin-top: 10px;">A clean collection of 5 beautifully crafted button components.</p>
  </div>

  <div class="button-grid">
    
    <!-- 1 -->
    <div class="component-card" data-name="gradient" data-cat="style">
      <div class="card-top">
        <span class="card-label">Gradient</span>
        <span class="card-tag tag-popular">Popular</span>
      </div>
      <div class="card-preview">
        <button class="gradient-btn">Gradient</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 2 -->
    <div class="component-card" data-name="neon" data-cat="effect">
      <div class="card-top">
        <span class="card-label">Neon</span>
        <span class="card-tag tag-trending">Animated</span>
      </div>
      <div class="card-preview dark-preview">
        <button class="neon-btn">Neon</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 3 -->
    <div class="component-card" data-name="glass" data-cat="style">
      <div class="card-top">
        <span class="card-label">Glassmorphism</span>
        <span class="card-tag tag-premium">Premium</span>
      </div>
      <div class="card-preview glass-preview" style="background: linear-gradient(135deg, #6c5ce7, #eb6835);">
        <button class="glass-btn">Glass</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 4 -->
    <div class="component-card" data-name="outline" data-cat="style">
      <div class="card-top">
        <span class="card-label">Outline</span>
        <span class="card-tag tag-essential">Clean</span>
      </div>
      <div class="card-preview">
        <button class="outline-btn">Outline</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

    <!-- 5 -->
    <div class="component-card" data-name="3d" data-cat="effect">
      <div class="card-top">
        <span class="card-label">3D Press</span>
        <span class="card-tag tag-new">Interactive</span>
      </div>
      <div class="card-preview">
        <button class="btn-3d">3D</button>
      </div>
      <div class="actions">
        <button class="action-btn view-btn"><i class="fa-solid fa-code"></i> View Code</button>
        <button class="action-btn copy-btn"><i class="fa-solid fa-copy"></i> Copy</button>
      </div>
    </div>

  </div>
</main>`
  })
};
