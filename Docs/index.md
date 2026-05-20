---
layout: home

hero:
  name: UI-Verse
  text: Open-Source UI Components
  tagline: A curated collection of HTML, CSS, and JavaScript components
  actions:
    - theme: brand
      text: Browse Components
      link: /components/
    - theme: alt
      text: Read Documentation
      link: /guide/

features:
  - title: Free & Open Source
    details: All components are free to use with MIT license
  - title: Framework Agnostic
    details: Works with React, Vue, Angular, or vanilla HTML
  - title: Regularly Updated
    details: New components added weekly with community contributions
  - title: Accessible
    details: WCAG compliant components with proper ARIA support
---

## Getting Started

```bash
# Using UI-Verse CLI
npx uiverse add button

# Or download directly from the website
```

## Quick Example

```html
<button class="gradient-btn">Click Me</button>

<style>
.gradient-btn {
  padding: 10px 24px;
  background: linear-gradient(45deg, #eb6835, #6c5ce7);
  border-radius: 8px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
```