import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Toggles',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Toggle switches and binary controls

### Info & Metadata
- **Category**: Forms
- **Tags**: <code>controls</code>, <code>components</code>, <code>switches</code>, <code>binary</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html


<!-- ==================================
BACKGROUND
================================== -->

<div class="bg-gradient"></div>

<!-- ==================================
NAVBAR
================================== -->

<header class="navbar">

<div class="logo">

⚡ ToggleVerse

</div>

<nav>

<a href="#">Basic</a>

<a href="#">Advanced</a>

<a href="#">Animated</a>

<a href="#">Docs</a>

</nav>

<div class="nav-actions">

<button class="outline-btn">

Preview

</button>

<button class="primary-btn">

Get Started

</button>

</div>

</header>

<!-- ==================================
HERO
================================== -->

<section class="hero">

<div class="hero-left">

<div class="hero-badge">

✨ Premium Toggle Collection

</div>

<h1>

Beautiful

<span>

Toggle Switches

</span>

For Every UI

</h1>

<p>

A modern collection of
toggle switches including
iOS, Material, Glassmorphism,
Neon, AI and Animated styles.

</p>

<div class="hero-buttons">

<button class="primary-btn">

Explore Components

</button>

<button class="outline-btn">

Documentation

</button>

</div>

</div>

<div class="hero-right">

<div class="hero-preview">

<div class="toggle-row">

<span>

Dark Mode

</span>

<label class="toggle ios">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-row">

<span>

Notifications

</span>

<label class="toggle neon">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-row">

<span>

AI Assistant

</span>

<label class="toggle gradient">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</div>

</section>

<!-- ==================================
BASIC TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Basic Toggles

</span>

<h2>

Classic Switches

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Classic

</h3>

<label class="toggle classic">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Rounded

</h3>

<label class="toggle rounded">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Square

</h3>

<label class="toggle square">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Outline

</h3>

<label class="toggle outline">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
IOS TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Apple Style

</span>

<h2>

iOS Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

iOS Default

</h3>

<label class="toggle ios">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Large iOS

</h3>

<label class="toggle ios-large">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Minimal iOS

</h3>

<label class="toggle ios-minimal">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
NEON TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Cyber UI

</span>

<h2>

Neon Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Purple Neon

</h3>

<label class="toggle neon">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Blue Neon

</h3>

<label class="toggle neon-blue">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Pink Neon

</h3>

<label class="toggle neon-pink">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Cyberpunk

</h3>

<label class="toggle cyber">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GRADIENT TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Colorful

</span>

<h2>

Gradient Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Sunset

</h3>

<label class="toggle sunset">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Ocean

</h3>

<label class="toggle ocean">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Aurora

</h3>

<label class="toggle aurora">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Rainbow

</h3>

<label class="toggle rainbow">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GLASSMORPHISM
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Glass UI

</span>

<h2>

Glass Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card glass-card">

<h3>

Glass Toggle

</h3>

<label class="toggle glass">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card glass-card">

<h3>

Blur Toggle

</h3>

<label class="toggle blur">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card glass-card">

<h3>

Crystal Toggle

</h3>

<label class="toggle crystal">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
MATERIAL UI
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Google Style

</span>

<h2>

Material Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Material Default

</h3>

<label class="toggle material">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Material Filled

</h3>

<label class="toggle material-fill">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Material Outlined

</h3>

<label class="toggle material-outline">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
TEXT TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Labels

</span>

<h2>

ON / OFF Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Text Toggle

</h3>

<label class="toggle text-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

YES / NO

</h3>

<label class="toggle yesno">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

ENABLE

</h3>

<label class="toggle enable">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
STATUS TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

System States

</span>

<h2>

Status Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Online

</h3>

<label class="toggle online">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Offline

</h3>

<label class="toggle offline">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Live Server

</h3>

<label class="toggle server">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Protected

</h3>

<label class="toggle secure">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
ANIMATED TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Motion UI

</span>

<h2>

Animated Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Bounce Toggle

</h3>

<label class="toggle bounce">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Elastic Toggle

</h3>

<label class="toggle elastic">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Slide Toggle

</h3>

<label class="toggle slide">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Pulse Toggle

</h3>

<label class="toggle pulse">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
AI TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Artificial Intelligence

</span>

<h2>

AI Controls

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

AI Assistant

</h3>

<label class="toggle ai">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Auto Learning

</h3>

<label class="toggle neural">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Smart Reply

</h3>

<label class="toggle smart">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

AI Vision

</h3>

<label class="toggle vision">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GAMING TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Gaming UI

</span>

<h2>

Gaming Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

RGB Mode

</h3>

<label class="toggle rgb">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Turbo Mode

</h3>

<label class="toggle turbo">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

FPS Boost

</h3>

<label class="toggle fps">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Pro Gamer

</h3>

<label class="toggle gamer">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
MUSIC TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Audio Controls

</span>

<h2>

Music Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Play Music

</h3>

<label class="toggle music">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Bass Boost

</h3>

<label class="toggle bass">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

3D Audio

</h3>

<label class="toggle audio3d">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
NOTIFICATION TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Notifications

</span>

<h2>

Alert Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Push Alerts

</h3>

<label class="toggle notify">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Email Alerts

</h3>

<label class="toggle email">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

SMS Alerts

</h3>

<label class="toggle sms">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
THEME SWITCHERS
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Themes

</span>

<h2>

Theme Switchers

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Dark Mode

</h3>

<label class="toggle dark-mode">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Light Mode

</h3>

<label class="toggle light-mode">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Auto Theme

</h3>

<label class="toggle auto-theme">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
DASHBOARD TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Admin Panel

</span>

<h2>

Dashboard Controls

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Analytics

</h3>

<label class="toggle dashboard">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Live Tracking

</h3>

<label class="toggle tracking">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Auto Reports

</h3>

<label class="toggle reports">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Cloud Sync

</h3>

<label class="toggle cloud">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
SOCIAL MEDIA TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Social Media

</span>

<h2>

Social Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Instagram Sync

</h3>

<label class="toggle instagram">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Twitter/X Feed

</h3>

<label class="toggle twitter">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

LinkedIn Updates

</h3>

<label class="toggle linkedin">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

YouTube Alerts

</h3>

<label class="toggle youtube">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
FINANCE TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

FinTech

</span>

<h2>

Finance Controls

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Auto Invest

</h3>

<label class="toggle invest">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Savings Mode

</h3>

<label class="toggle savings">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Crypto Alerts

</h3>

<label class="toggle crypto">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Secure Payments

</h3>

<label class="toggle payment">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
SMART HOME
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Smart Home

</span>

<h2>

Home Automation

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Living Room Lights

</h3>

<label class="toggle home-light">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Smart Lock

</h3>

<label class="toggle lock">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Air Conditioner

</h3>

<label class="toggle ac">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Security Camera

</h3>

<label class="toggle camera">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GLASS DASHBOARD
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Glass Dashboard

</span>

<h2>

Glassmorphism Controls

</h2>

</div>

<div class="glass-dashboard">

<div class="glass-widget">

<h3>

Analytics Engine

</h3>

<label class="toggle glass-dashboard-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="glass-widget">

<h3>

Cloud Services

</h3>

<label class="toggle glass-dashboard-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="glass-widget">

<h3>

AI Processing

</h3>

<label class="toggle glass-dashboard-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
PREMIUM TOGGLE CARDS
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Premium Cards

</span>

<h2>

Feature Toggles

</h2>

</div>

<div class="premium-grid">

<div class="premium-card">

<h3>

Premium Membership

</h3>

<p>

Unlock all premium features.

</p>

<label class="toggle premium">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="premium-card">

<h3>

Cloud Backup

</h3>

<p>

Automatic secure backups.

</p>

<label class="toggle premium">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="premium-card">

<h3>

AI Automation

</h3>

<p>

Enable workflow automation.

</p>

<label class="toggle premium">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
BENTO TOGGLE LAYOUT
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Bento UI

</span>

<h2>

Dashboard Bento Toggles

</h2>

</div>

<div class="bento-layout">

<div class="bento-card large">

<h3>

System Controls

</h3>

<label class="toggle bento-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="bento-card">

<h3>

Security

</h3>

<label class="toggle bento-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="bento-card">

<h3>

Updates

</h3>

<label class="toggle bento-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
INTERACTIVE PREVIEW
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Live Demo

</span>

<h2>

Interactive Preview Panel

</h2>

</div>

<div class="preview-dashboard">

<div class="preview-item">

<span>

Dark Mode

</span>

<label class="toggle preview-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="preview-item">

<span>

Notifications

</span>

<label class="toggle preview-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="preview-item">

<span>

AI Assistant

</span>

<label class="toggle preview-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="preview-item">

<span>

Cloud Sync

</span>

<label class="toggle preview-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
FAQ SECTION
================================== -->

<section class="faq-section">

<div class="section-header">

<span>

FAQ

</span>

<h2>

Frequently Asked Questions

</h2>

</div>

<div class="faq-grid">

<div class="faq-card">

<h3>

Can I customize colors?

</h3>

<p>

Yes. Every toggle component
supports custom colors,
gradients and animations.

</p>

</div>

<div class="faq-card">

<h3>

Are these mobile responsive?

</h3>

<p>

Absolutely. All toggle layouts
adapt perfectly across devices.

</p>

</div>

<div class="faq-card">

<h3>

Can I use them commercially?

</h3>

<p>

Yes. They are suitable for
personal and commercial
projects.

</p>

</div>

</div>

</section>

<!-- ==================================
DOCUMENTATION
================================== -->

<section class="docs-section">

<div class="section-header">

<span>

Documentation

</span>

<h2>

Basic Usage

</h2>

</div>

<div class="docs-card">

<pre>

&lt;label class="toggle ios"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span&gt;&lt;/span&gt;
&lt;/label&gt;

</pre>

</div>

</section>

<!-- ==================================
TOGGLE PLAYGROUND
================================== -->

<section class="playground-section">

<div class="section-header">

<span>

Playground

</span>

<h2>

Test Toggle States

</h2>

</div>

<div class="playground-card">

<div class="play-row">

<span>

Enable Experimental Features

</span>

<label class="toggle playground">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="play-row">

<span>

Smart Suggestions

</span>

<label class="toggle playground">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="play-row">

<span>

Performance Mode

</span>

<label class="toggle playground">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
CTA SECTION
================================== -->

<section class="cta-section">

<div class="cta-card">

<div>

<span>

Premium Toggle Library

</span>

<h2>

Build Better Interfaces

</h2>

<p>

A complete collection of modern
toggle switches for dashboards,
mobile apps and web products.

</p>

<button class="primary-btn">

Get Started

</button>

</div>

<div class="cta-icon">

⚡

</div>

</div>

</section>

<!-- ==================================
NEWSLETTER
================================== -->

<section class="newsletter-section">

<div class="newsletter-card">

<h2>

Stay Updated

</h2>

<p>

Receive new UI components,
toggle designs and updates.

</p>

<form class="newsletter-form">

<input
type="email"
placeholder="Enter your email">

<button>

Subscribe

</button>

</form>

</div>

</section>

<!-- ==================================
FOOTER
================================== -->

<footer class="footer">

<div class="footer-grid">

<div>

<h3>

ToggleVerse

</h3>

<p>

Premium toggle switch
components and UI systems.

</p>

</div>

<div>

<h4>

Resources

</h4>

<ul>

<li>Docs</li>
<li>Components</li>
<li>Templates</li>

</ul>

</div>

<div>

<h4>

Company

</h4>

<ul>

<li>About</li>
<li>Contact</li>
<li>Support</li>

</ul>

</div>

<div>

<h4>

Social

</h4>

<ul>

<li>Twitter</li>
<li>GitHub</li>
<li>Discord</li>

</ul>

</div>

</div>

<div class="footer-bottom">

© 2026 ToggleVerse UI Library

</div>

</footer>

<!-- ==================================
SCROLL TO TOP
================================== -->

<button
id="scrollTop"
class="scroll-top">

<i class="fa-solid fa-arrow-up"></i>

</button>

<!-- ==================================
JAVASCRIPT
================================== -->




\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/toggles.css\`

#### JavaScript Scripts:
None

### Accessibility (a11y) Checklist

- [x] Semantic HTML: appropriate tags are utilized.
- [x] Focus states: interactive elements show native or custom focus styling.
- [x] Color contrast: contrast ratios meet WCAG standard compliance.
- [x] Form inputs: linked to labels or use ARIA labelling.
- [x] Keyboard traversal: supports standard tab navigation and activation.


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
    title: 'Toggles',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/toggles.css"],
    content: `

<!-- ==================================
BACKGROUND
================================== -->

<div class="bg-gradient"></div>

<!-- ==================================
NAVBAR
================================== -->

<header class="navbar">

<div class="logo">

⚡ ToggleVerse

</div>

<nav>

<a href="#">Basic</a>

<a href="#">Advanced</a>

<a href="#">Animated</a>

<a href="#">Docs</a>

</nav>

<div class="nav-actions">

<button class="outline-btn">

Preview

</button>

<button class="primary-btn">

Get Started

</button>

</div>

</header>

<!-- ==================================
HERO
================================== -->

<section class="hero">

<div class="hero-left">

<div class="hero-badge">

✨ Premium Toggle Collection

</div>

<h1>

Beautiful

<span>

Toggle Switches

</span>

For Every UI

</h1>

<p>

A modern collection of
toggle switches including
iOS, Material, Glassmorphism,
Neon, AI and Animated styles.

</p>

<div class="hero-buttons">

<button class="primary-btn">

Explore Components

</button>

<button class="outline-btn">

Documentation

</button>

</div>

</div>

<div class="hero-right">

<div class="hero-preview">

<div class="toggle-row">

<span>

Dark Mode

</span>

<label class="toggle ios">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-row">

<span>

Notifications

</span>

<label class="toggle neon">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-row">

<span>

AI Assistant

</span>

<label class="toggle gradient">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</div>

</section>

<!-- ==================================
BASIC TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Basic Toggles

</span>

<h2>

Classic Switches

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Classic

</h3>

<label class="toggle classic">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Rounded

</h3>

<label class="toggle rounded">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Square

</h3>

<label class="toggle square">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Outline

</h3>

<label class="toggle outline">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
IOS TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Apple Style

</span>

<h2>

iOS Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

iOS Default

</h3>

<label class="toggle ios">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Large iOS

</h3>

<label class="toggle ios-large">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Minimal iOS

</h3>

<label class="toggle ios-minimal">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
NEON TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Cyber UI

</span>

<h2>

Neon Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Purple Neon

</h3>

<label class="toggle neon">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Blue Neon

</h3>

<label class="toggle neon-blue">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Pink Neon

</h3>

<label class="toggle neon-pink">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Cyberpunk

</h3>

<label class="toggle cyber">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GRADIENT TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Colorful

</span>

<h2>

Gradient Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Sunset

</h3>

<label class="toggle sunset">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Ocean

</h3>

<label class="toggle ocean">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Aurora

</h3>

<label class="toggle aurora">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Rainbow

</h3>

<label class="toggle rainbow">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GLASSMORPHISM
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Glass UI

</span>

<h2>

Glass Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card glass-card">

<h3>

Glass Toggle

</h3>

<label class="toggle glass">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card glass-card">

<h3>

Blur Toggle

</h3>

<label class="toggle blur">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card glass-card">

<h3>

Crystal Toggle

</h3>

<label class="toggle crystal">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
MATERIAL UI
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Google Style

</span>

<h2>

Material Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Material Default

</h3>

<label class="toggle material">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Material Filled

</h3>

<label class="toggle material-fill">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Material Outlined

</h3>

<label class="toggle material-outline">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
TEXT TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Labels

</span>

<h2>

ON / OFF Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Text Toggle

</h3>

<label class="toggle text-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

YES / NO

</h3>

<label class="toggle yesno">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

ENABLE

</h3>

<label class="toggle enable">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
STATUS TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

System States

</span>

<h2>

Status Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Online

</h3>

<label class="toggle online">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Offline

</h3>

<label class="toggle offline">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Live Server

</h3>

<label class="toggle server">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Protected

</h3>

<label class="toggle secure">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
ANIMATED TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Motion UI

</span>

<h2>

Animated Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Bounce Toggle

</h3>

<label class="toggle bounce">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Elastic Toggle

</h3>

<label class="toggle elastic">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Slide Toggle

</h3>

<label class="toggle slide">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Pulse Toggle

</h3>

<label class="toggle pulse">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
AI TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Artificial Intelligence

</span>

<h2>

AI Controls

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

AI Assistant

</h3>

<label class="toggle ai">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Auto Learning

</h3>

<label class="toggle neural">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Smart Reply

</h3>

<label class="toggle smart">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

AI Vision

</h3>

<label class="toggle vision">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GAMING TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Gaming UI

</span>

<h2>

Gaming Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

RGB Mode

</h3>

<label class="toggle rgb">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Turbo Mode

</h3>

<label class="toggle turbo">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

FPS Boost

</h3>

<label class="toggle fps">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Pro Gamer

</h3>

<label class="toggle gamer">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
MUSIC TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Audio Controls

</span>

<h2>

Music Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Play Music

</h3>

<label class="toggle music">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Bass Boost

</h3>

<label class="toggle bass">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

3D Audio

</h3>

<label class="toggle audio3d">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
NOTIFICATION TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Notifications

</span>

<h2>

Alert Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Push Alerts

</h3>

<label class="toggle notify">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Email Alerts

</h3>

<label class="toggle email">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

SMS Alerts

</h3>

<label class="toggle sms">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
THEME SWITCHERS
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Themes

</span>

<h2>

Theme Switchers

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Dark Mode

</h3>

<label class="toggle dark-mode">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Light Mode

</h3>

<label class="toggle light-mode">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Auto Theme

</h3>

<label class="toggle auto-theme">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
DASHBOARD TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Admin Panel

</span>

<h2>

Dashboard Controls

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Analytics

</h3>

<label class="toggle dashboard">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Live Tracking

</h3>

<label class="toggle tracking">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Auto Reports

</h3>

<label class="toggle reports">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Cloud Sync

</h3>

<label class="toggle cloud">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
SOCIAL MEDIA TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Social Media

</span>

<h2>

Social Toggles

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Instagram Sync

</h3>

<label class="toggle instagram">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Twitter/X Feed

</h3>

<label class="toggle twitter">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

LinkedIn Updates

</h3>

<label class="toggle linkedin">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

YouTube Alerts

</h3>

<label class="toggle youtube">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
FINANCE TOGGLES
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

FinTech

</span>

<h2>

Finance Controls

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Auto Invest

</h3>

<label class="toggle invest">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Savings Mode

</h3>

<label class="toggle savings">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Crypto Alerts

</h3>

<label class="toggle crypto">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Secure Payments

</h3>

<label class="toggle payment">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
SMART HOME
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Smart Home

</span>

<h2>

Home Automation

</h2>

</div>

<div class="toggle-grid">

<div class="toggle-card">

<h3>

Living Room Lights

</h3>

<label class="toggle home-light">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Smart Lock

</h3>

<label class="toggle lock">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Air Conditioner

</h3>

<label class="toggle ac">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="toggle-card">

<h3>

Security Camera

</h3>

<label class="toggle camera">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
GLASS DASHBOARD
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Glass Dashboard

</span>

<h2>

Glassmorphism Controls

</h2>

</div>

<div class="glass-dashboard">

<div class="glass-widget">

<h3>

Analytics Engine

</h3>

<label class="toggle glass-dashboard-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="glass-widget">

<h3>

Cloud Services

</h3>

<label class="toggle glass-dashboard-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="glass-widget">

<h3>

AI Processing

</h3>

<label class="toggle glass-dashboard-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
PREMIUM TOGGLE CARDS
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Premium Cards

</span>

<h2>

Feature Toggles

</h2>

</div>

<div class="premium-grid">

<div class="premium-card">

<h3>

Premium Membership

</h3>

<p>

Unlock all premium features.

</p>

<label class="toggle premium">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="premium-card">

<h3>

Cloud Backup

</h3>

<p>

Automatic secure backups.

</p>

<label class="toggle premium">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="premium-card">

<h3>

AI Automation

</h3>

<p>

Enable workflow automation.

</p>

<label class="toggle premium">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
BENTO TOGGLE LAYOUT
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Bento UI

</span>

<h2>

Dashboard Bento Toggles

</h2>

</div>

<div class="bento-layout">

<div class="bento-card large">

<h3>

System Controls

</h3>

<label class="toggle bento-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="bento-card">

<h3>

Security

</h3>

<label class="toggle bento-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="bento-card">

<h3>

Updates

</h3>

<label class="toggle bento-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
INTERACTIVE PREVIEW
================================== -->

<section class="toggle-section">

<div class="section-header">

<span>

Live Demo

</span>

<h2>

Interactive Preview Panel

</h2>

</div>

<div class="preview-dashboard">

<div class="preview-item">

<span>

Dark Mode

</span>

<label class="toggle preview-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="preview-item">

<span>

Notifications

</span>

<label class="toggle preview-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="preview-item">

<span>

AI Assistant

</span>

<label class="toggle preview-toggle">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="preview-item">

<span>

Cloud Sync

</span>

<label class="toggle preview-toggle">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>
<!-- ==================================
FAQ SECTION
================================== -->

<section class="faq-section">

<div class="section-header">

<span>

FAQ

</span>

<h2>

Frequently Asked Questions

</h2>

</div>

<div class="faq-grid">

<div class="faq-card">

<h3>

Can I customize colors?

</h3>

<p>

Yes. Every toggle component
supports custom colors,
gradients and animations.

</p>

</div>

<div class="faq-card">

<h3>

Are these mobile responsive?

</h3>

<p>

Absolutely. All toggle layouts
adapt perfectly across devices.

</p>

</div>

<div class="faq-card">

<h3>

Can I use them commercially?

</h3>

<p>

Yes. They are suitable for
personal and commercial
projects.

</p>

</div>

</div>

</section>

<!-- ==================================
DOCUMENTATION
================================== -->

<section class="docs-section">

<div class="section-header">

<span>

Documentation

</span>

<h2>

Basic Usage

</h2>

</div>

<div class="docs-card">

<pre>

&lt;label class="toggle ios"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span&gt;&lt;/span&gt;
&lt;/label&gt;

</pre>

</div>

</section>

<!-- ==================================
TOGGLE PLAYGROUND
================================== -->

<section class="playground-section">

<div class="section-header">

<span>

Playground

</span>

<h2>

Test Toggle States

</h2>

</div>

<div class="playground-card">

<div class="play-row">

<span>

Enable Experimental Features

</span>

<label class="toggle playground">

<input type="checkbox">

<span></span>

</label>

</div>

<div class="play-row">

<span>

Smart Suggestions

</span>

<label class="toggle playground">

<input type="checkbox" checked>

<span></span>

</label>

</div>

<div class="play-row">

<span>

Performance Mode

</span>

<label class="toggle playground">

<input type="checkbox">

<span></span>

</label>

</div>

</div>

</section>

<!-- ==================================
CTA SECTION
================================== -->

<section class="cta-section">

<div class="cta-card">

<div>

<span>

Premium Toggle Library

</span>

<h2>

Build Better Interfaces

</h2>

<p>

A complete collection of modern
toggle switches for dashboards,
mobile apps and web products.

</p>

<button class="primary-btn">

Get Started

</button>

</div>

<div class="cta-icon">

⚡

</div>

</div>

</section>

<!-- ==================================
NEWSLETTER
================================== -->

<section class="newsletter-section">

<div class="newsletter-card">

<h2>

Stay Updated

</h2>

<p>

Receive new UI components,
toggle designs and updates.

</p>

<form class="newsletter-form">

<input
type="email"
placeholder="Enter your email">

<button>

Subscribe

</button>

</form>

</div>

</section>

<!-- ==================================
FOOTER
================================== -->

<footer class="footer">

<div class="footer-grid">

<div>

<h3>

ToggleVerse

</h3>

<p>

Premium toggle switch
components and UI systems.

</p>

</div>

<div>

<h4>

Resources

</h4>

<ul>

<li>Docs</li>
<li>Components</li>
<li>Templates</li>

</ul>

</div>

<div>

<h4>

Company

</h4>

<ul>

<li>About</li>
<li>Contact</li>
<li>Support</li>

</ul>

</div>

<div>

<h4>

Social

</h4>

<ul>

<li>Twitter</li>
<li>GitHub</li>
<li>Discord</li>

</ul>

</div>

</div>

<div class="footer-bottom">

© 2026 ToggleVerse UI Library

</div>

</footer>

<!-- ==================================
SCROLL TO TOP
================================== -->

<button
id="scrollTop"
class="scroll-top">

<i class="fa-solid fa-arrow-up"></i>

</button>

<!-- ==================================
JAVASCRIPT
================================== -->



`
  })
};
