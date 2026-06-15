# Documentation

Component ID: documentation

- Path: documentation.html
- Version: 0.0.1
- Documentation score: 100/100
- Tags: docs, documentation, guide, reference
- Description: Documentation and guide page templates

## Assets

- CSS: dist/shared.css, documentation.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
- JS: dist/shared.js

## Headings

- H1: UIverse Guidelines
- H2: Getting Started
- H4: Browse components
- H4: Click "View Code"
- H4: Click "Copy"
- H4: That's it!
- H2: Design System
- H3: 🎨 Brand Colours

## Usage Snippet

```html
<section id="getting-started" class="gl-section">
        <div class="gl-section-icon"><i class="fa-solid fa-rocket"></i></div>
        <div class="gl-section-body">
          <span class="gl-section-num">01</span>
          <h2>Getting Started</h2>
          <p>UIverse is a free, open-source library of copy-paste UI components built with pure HTML, CSS, and JavaScript. No npm, no build tools, no framework — just clean code you can drop into any project.</p>

          <div class="gl-steps">
            <div class="gl-step">
              <div class="gl-step-num">1</div>
              <div class="gl-step-body">
                <h4>Browse components</h4>
                <p>Find the component you need from any category page — Buttons, Cards, Alerts, Tabs, etc.</p>
              </div>
            </div>
            <div class="gl-step">
              <div class="gl-step-num">2</div>
              <div class="gl-step-body">
                <h4>Click "View Code"</h4>
                <p>Each card reveals a code snippet with the HTML and CSS needed for that exact component.</p>
              </div>
            </div>
            <div class="gl-step">
              <div class="gl-step-num">3</div>
              <div class="gl-step-body">
                <h4>Click "Copy"</h4>
                <p>Hit copy and paste directly into your project. Customise the classes and colours to match your brand.</p>
              </div>
            </div>
            <div class="gl-step">
              <div class="gl-step-num">4</div>
              <div class="gl-step-body">
                <h4>That's it!</h4>
                <p>No installation, no configuration. UIverse components are intentionally dependency-free.</p>
              </div>
            </div>
          </div>

          <div class="gl-callout gl-callout-info">
            <i class="fa-solid fa-circle-info"></i>
            <p>Some interactive components (tabs, toggles, alerts) need a few lines of JavaScript — it's always included in the code snippet alongside the HTML and CSS.</p>
          </div>
        </div>
      </section>
```
