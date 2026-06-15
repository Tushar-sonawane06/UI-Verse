import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Span Components',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Span and inline UI elements

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>span</code>, <code>inline</code>, <code>text</code>, <code>code</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html


<div class="bg-gradient"></div>

<!-- =========================
NAVBAR
========================= -->

<header class="navbar">

<div class="logo">

SpanVerse

</div>

<nav>

<a href="#components">

Components

</a>

<a href="#status">

Status

</a>

<a href="#badges">

Badges

</a>

<a href="#tooltips">

Tooltips

</a>

</nav>

<div class="nav-actions">

<button class="outline-btn">

Documentation

</button>

<button class="primary-btn">

Browse Library

</button>

</div>

</header>

<!-- =========================
HERO
========================= -->

<section class="hero">

<div class="hero-content">

<div class="hero-badge">

✨ 40+ Premium Span Components

</div>

<h1>

Beautiful

<span>

Inline UI Elements

</span>

For Modern Interfaces

</h1>

<p>

Create elegant badges,
status indicators,
labels, chips, tooltips,
keyboard shortcuts,
version tags, and
highlighted text using
lightweight reusable
span components.

</p>

<div class="hero-actions">

<button class="primary-btn">

Explore Components

</button>

<button class="outline-btn">

View Examples

</button>

</div>

</div>

<div class="hero-preview">

<div class="preview-card">

<p>

Status:
<span class="demo-online">

● Online

</span>

</p>

<p>

Plan:
<span class="demo-pill">

Pro

</span>

</p>

<p>

Version:
<span class="demo-version">

v2.1

</span>

</p>

</div>

</div>

</section>

<!-- =========================
OVERVIEW STATS
========================= -->

<section class="overview-section">

<div class="section-header">

<span>

Overview

</span>

<h2>

Component Library

</h2>

</div>

<div class="stats-grid">

<div class="stat-card">

<h1>

40+

</h1>

<p>

Span Components

</p>

</div>

<div class="stat-card">

<h1>

100%

</h1>

<p>

Pure CSS

</p>

</div>

<div class="stat-card">

<h1>

Responsive

</h1>

<p>

Mobile Ready

</p>

</div>

<div class="stat-card">

<h1>

Modern

</h1>

<p>

Production Ready

</p>

</div>

</div>

</section>

<!-- =========================
COMPONENT CATEGORIES
========================= -->

<section
id="components"
class="categories-section">

<div class="section-header">

<span>

Categories

</span>

<h2>

Explore Components

</h2>

</div>

<div class="category-grid">

<div class="category-card">

🏷️

<h3>

Labels

</h3>

<p>

Tags, pills,
badges and chips.

</p>

</div>

<div class="category-card">

🟢

<h3>

Status

</h3>

<p>

Online, offline,
busy indicators.

</p>

</div>

<div class="category-card">

💡

<h3>

Tooltips

</h3>

<p>

Helpful inline
information.

</p>

</div>

<div class="category-card">

⌨️

<h3>

Keyboard

</h3>

<p>

Shortcut keys
and commands.

</p>

</div>

</div>

</section>

<!-- =========================
STATUS SPANS
========================= -->

<section
id="status"
class="status-section">

<div class="section-header">

<span>

Status

</span>

<h2>

Status Indicators

</h2>

</div>

<div class="status-grid">

<div class="status-card">

<span class="online">

● Online

</span>

</div>

<div class="status-card">

<span class="offline">

● Offline

</span>

</div>

<div class="status-card">

<span class="busy">

● Busy

</span>

</div>

<div class="status-card">

<span class="away">

● Away

</span>

</div>

</div>

</section>
<!-- =========================
BADGES
========================= -->

<section
id="badges"
class="badges-section">

<div class="section-header">

<span>

Badges

</span>

<h2>

Notification Badges

</h2>

</div>

<div class="badge-grid">

<div class="badge-card">

<span class="badge red">

3

</span>

<h3>

Notifications

</h3>

</div>

<div class="badge-card">

<span class="badge green">

12

</span>

<h3>

Messages

</h3>

</div>

<div class="badge-card">

<span class="badge orange">

!

</span>

<h3>

Alerts

</h3>

</div>

<div class="badge-card">

<span class="badge purple">

99+

</span>

<h3>

Updates

</h3>

</div>

</div>

</section>

<!-- =========================
TAGS & CHIPS
========================= -->

<section class="tags-section">

<div class="section-header">

<span>

Tags

</span>

<h2>

Tag Components

</h2>

</div>

<div class="tag-showcase">

<span class="tag">

UI

</span>

<span class="tag">

Design

</span>

<span class="tag">

CSS

</span>

<span class="tag red">

Bug

</span>

<span class="tag green">

Feature

</span>

<span class="tag orange">

Review

</span>

<span class="tag purple">

Premium

</span>

<span class="tag cyan">

New

</span>

</div>

</section>

<!-- =========================
PILLS
========================= -->

<section class="pills-section">

<div class="section-header">

<span>

Pills

</span>

<h2>

Pill Components

</h2>

</div>

<div class="pill-grid">

<div class="pill-card">

<span class="pill accent">

Pro

</span>

</div>

<div class="pill-card">

<span class="pill success">

Active

</span>

</div>

<div class="pill-card">

<span class="pill danger">

Blocked

</span>

</div>

<div class="pill-card">

<span class="pill warning">

Pending

</span>

</div>

<div class="pill-card">

<span class="pill purple">

VIP

</span>

</div>

<div class="pill-card">

<span class="pill dark">

Premium

</span>

</div>

</div>

</section>

<!-- =========================
VERSION LABELS
========================= -->

<section class="versions-section">

<div class="section-header">

<span>

Versions

</span>

<h2>

Version Labels

</h2>

</div>

<div class="version-grid">

<div class="version-card">

<span class="version stable">

v2.5 Stable

</span>

</div>

<div class="version-card">

<span class="version beta">

v3.0 Beta

</span>

</div>

<div class="version-card">

<span class="version alpha">

v4.0 Alpha

</span>

</div>

<div class="version-card">

<span class="version release">

v5.0 Release

</span>

</div>

</div>

</section>

<!-- =========================
HIGHLIGHT TEXT
========================= -->

<section class="highlight-section">

<div class="section-header">

<span>

Highlights

</span>

<h2>

Highlighted Text

</h2>

</div>

<div class="highlight-card">

<p>

This is a

<span class="highlight">

highlighted

</span>

word inside text.

</p>

<p>

Using

<span class="highlight yellow">

yellow

</span>

and

<span class="highlight green">

green

</span>

variants.

</p>

<p>

Premium

<span class="highlight purple">

gradient

</span>

highlight styles.

</p>

</div>

</section>

<!-- =========================
GRADIENT TEXT
========================= -->

<section class="gradient-section">

<div class="section-header">

<span>

Typography

</span>

<h2>

Gradient Text Styles

</h2>

</div>

<div class="gradient-grid">

<div class="gradient-card">

<span class="gradient orange">

Creative

</span>

</div>

<div class="gradient-card">

<span class="gradient purple">

Premium

</span>

</div>

<div class="gradient-card">

<span class="gradient cyan">

Modern

</span>

</div>

<div class="gradient-card">

<span class="gradient sunset">

Trending

</span>

</div>

</div>

</section>

<!-- =========================
TEXT DECORATIONS
========================= -->

<section class="decorations-section">

<div class="section-header">

<span>

Decorations

</span>

<h2>

Text Effects

</h2>

</div>

<div class="decorations-card">

<p>

<span class="underline-accent">

Accent Underline

</span>

</p>

<p>

<span class="strike">

Deprecated Feature

</span>

</p>

<p>

<span class="bold-accent">

Important Notice

</span>

</p>

<p>

<span class="text-glow">

Glowing Text

</span>

</p>

</div>

</section>

<!-- =========================
INLINE CODE
========================= -->

<section class="code-section">

<div class="section-header">

<span>

Code

</span>

<h2>

Inline Code Components

</h2>

</div>

<div class="inline-code-grid">

<div class="code-card">

<p>

Use

<span class="inline-code">

display:flex

</span>

for layouts.

</p>

</div>

<div class="code-card">

<p>

Apply

<span class="inline-code">

border-radius

</span>

for rounded corners.

</p>

</div>

<div class="code-card">

<p>

Enable

<span class="inline-code">

backdrop-filter

</span>

for glassmorphism.

</p>

</div>

</div>

</section>
<!-- =========================
TOOLTIPS
========================= -->

<section
id="tooltips"
class="tooltips-section">

<div class="section-header">

<span>

Tooltips

</span>

<h2>

Interactive Tooltips

</h2>

</div>

<div class="tooltip-grid">

<div class="tooltip-card">

<span class="tooltip">

Hover Me

<span class="tooltip-text">

Simple tooltip message

</span>

</span>

</div>

<div class="tooltip-card">

<span class="tooltip">

Information

<span class="tooltip-text">

Helpful explanation appears here

</span>

</span>

</div>

<div class="tooltip-card">

<span class="tooltip">

Bottom Tooltip

<span class="tooltip-text bottom">

Displayed below the element

</span>

</span>

</div>

<div class="tooltip-card">

<span class="tooltip">

Premium

<span class="tooltip-text">

Advanced tooltip styling

</span>

</span>

</div>

</div>

</section>

<!-- =========================
KEYBOARD SHORTCUTS
========================= -->

<section class="keyboard-section">

<div class="section-header">

<span>

Keyboard

</span>

<h2>

Keyboard Shortcut Spans

</h2>

</div>

<div class="keyboard-grid">

<div class="keyboard-card">

<kbd class="kbd">

Ctrl

</kbd>

+

<kbd class="kbd">

S

</kbd>

</div>

<div class="keyboard-card">

<kbd class="kbd">

Ctrl

</kbd>

+

<kbd class="kbd">

K

</kbd>

</div>

<div class="keyboard-card">

<kbd class="kbd">

Alt

</kbd>

+

<kbd class="kbd">

Tab

</kbd>

</div>

<div class="keyboard-card">

<kbd class="kbd">

Shift

</kbd>

+

<kbd class="kbd">

A

</kbd>

</div>

</div>

</section>

<!-- =========================
ANIMATED BADGES
========================= -->

<section class="animated-badges-section">

<div class="section-header">

<span>

Animation

</span>

<h2>

Animated Badges

</h2>

</div>

<div class="animated-grid">

<div class="animated-card">

<span class="animated-badge red">

Live

</span>

</div>

<div class="animated-card">

<span class="animated-badge green">

Active

</span>

</div>

<div class="animated-card">

<span class="animated-badge orange">

Trending

</span>

</div>

<div class="animated-card">

<span class="animated-badge purple">

Popular

</span>

</div>

</div>

</section>

<!-- =========================
LIVE INDICATORS
========================= -->

<section class="live-section">

<div class="section-header">

<span>

Indicators

</span>

<h2>

Live Status Indicators

</h2>

</div>

<div class="live-grid">

<div class="live-card">

<span class="live-dot"></span>

Online

</div>

<div class="live-card">

<span class="live-dot green"></span>

Connected

</div>

<div class="live-card">

<span class="live-dot orange"></span>

Streaming

</div>

<div class="live-card">

<span class="live-dot red"></span>

Recording

</div>

</div>

</section>

<!-- =========================
LOADING SPANS
========================= -->

<section class="loading-section">

<div class="section-header">

<span>

Loading

</span>

<h2>

Loading Indicators

</h2>

</div>

<div class="loading-grid">

<div class="loading-card">

<span class="loading-spinner"></span>

Loading

</div>

<div class="loading-card">

<span class="loading-spinner accent"></span>

Processing

</div>

<div class="loading-card">

<span class="loading-spinner purple"></span>

Fetching

</div>

</div>

</section>

<!-- =========================
PROGRESS SPANS
========================= -->

<section class="progress-section">

<div class="section-header">

<span>

Progress

</span>

<h2>

Progress Labels

</h2>

</div>

<div class="progress-grid">

<div class="progress-card">

<span class="progress-label">

25%

</span>

</div>

<div class="progress-card">

<span class="progress-label success">

64%

</span>

</div>

<div class="progress-card">

<span class="progress-label warning">

82%

</span>

</div>

<div class="progress-card">

<span class="progress-label danger">

97%

</span>

</div>

</div>

</section>

<!-- =========================
PREMIUM LABELS
========================= -->

<section class="premium-section">

<div class="section-header">

<span>

Labels

</span>

<h2>

Premium Labels

</h2>

</div>

<div class="premium-grid">

<span class="premium-label">

Featured

</span>

<span class="premium-label gold">

Premium

</span>

<span class="premium-label silver">

Enterprise

</span>

<span class="premium-label purple">

Exclusive

</span>

</div>

</section>

<!-- =========================
VERIFIED BADGES
========================= -->

<section class="verified-section">

<div class="section-header">

<span>

Verification

</span>

<h2>

Verified Badges

</h2>

</div>

<div class="verified-grid">

<div class="verified-card">

John Smith

<span class="verified-badge">

✓

</span>

</div>

<div class="verified-card">

Design Team

<span class="verified-badge blue">

✓

</span>

</div>

<div class="verified-card">

Premium Creator

<span class="verified-badge gold">

✓

</span>

</div>

<div class="verified-card">

Official Account

<span class="verified-badge purple">

✓

</span>

</div>

</div>

</section>
<!-- =========================
NOTIFICATION LABELS
========================= -->

<section class="notification-section">

<div class="section-header">

<span>

Notifications

</span>

<h2>

Notification Labels

</h2>

</div>

<div class="notification-grid">

<div class="notification-card">

<span class="notify-label info">

3 New Messages

</span>

</div>

<div class="notification-card">

<span class="notify-label success">

Payment Received

</span>

</div>

<div class="notification-card">

<span class="notify-label warning">

Action Required

</span>

</div>

<div class="notification-card">

<span class="notify-label danger">

Security Alert

</span>

</div>

</div>

</section>

<!-- =========================
ALERT SPANS
========================= -->

<section class="alert-section">

<div class="section-header">

<span>

Alerts

</span>

<h2>

Alert Spans

</h2>

</div>

<div class="alert-grid">

<div class="alert-card">

<span class="alert-span success">

✓ Success

</span>

</div>

<div class="alert-card">

<span class="alert-span warning">

⚠ Warning

</span>

</div>

<div class="alert-card">

<span class="alert-span danger">

✕ Error

</span>

</div>

<div class="alert-card">

<span class="alert-span info">

ℹ Information

</span>

</div>

</div>

</section>

<!-- =========================
SOCIAL COUNTERS
========================= -->

<section class="social-section">

<div class="section-header">

<span>

Social

</span>

<h2>

Social Counters

</h2>

</div>

<div class="social-grid">

<div class="social-card">

❤️

<span class="social-count">

12.4K

</span>

</div>

<div class="social-card">

💬

<span class="social-count">

4.8K

</span>

</div>

<div class="social-card">

🔁

<span class="social-count">

2.2K

</span>

</div>

<div class="social-card">

⭐

<span class="social-count">

9.1K

</span>

</div>

</div>

</section>

<!-- =========================
RATING BADGES
========================= -->

<section class="rating-section">

<div class="section-header">

<span>

Ratings

</span>

<h2>

Rating Badges

</h2>

</div>

<div class="rating-grid">

<div class="rating-card">

<span class="rating-badge">

⭐ 4.8

</span>

</div>

<div class="rating-card">

<span class="rating-badge gold">

🏆 Top Rated

</span>

</div>

<div class="rating-card">

<span class="rating-badge green">

✓ Trusted

</span>

</div>

<div class="rating-card">

<span class="rating-badge purple">

👑 Elite

</span>

</div>

</div>

</section>

<!-- =========================
USER MENTIONS
========================= -->

<section class="mentions-section">

<div class="section-header">

<span>

Mentions

</span>

<h2>

User Mention Spans

</h2>

</div>

<div class="mentions-card">

<p>

Hello

<span class="mention">

@john

</span>

please review this design.

</p>

<p>

Assigned to

<span class="mention purple">

@sarah

</span>

for approval.

</p>

<p>

Thanks

<span class="mention green">

@team

</span>

for the update.

</p>

</div>

</section>

<!-- =========================
CATEGORY MARKERS
========================= -->

<section class="marker-section">

<div class="section-header">

<span>

Categories

</span>

<h2>

Category Markers

</h2>

</div>

<div class="marker-grid">

<span class="marker design">

Design

</span>

<span class="marker code">

Development

</span>

<span class="marker marketing">

Marketing

</span>

<span class="marker finance">

Finance

</span>

<span class="marker support">

Support

</span>

<span class="marker ai">

Artificial Intelligence

</span>

</div>

</section>

<!-- =========================
AVAILABILITY LABELS
========================= -->

<section class="availability-section">

<div class="section-header">

<span>

Availability

</span>

<h2>

Availability Labels

</h2>

</div>

<div class="availability-grid">

<div class="availability-card">

<span class="availability available">

Available

</span>

</div>

<div class="availability-card">

<span class="availability limited">

Limited

</span>

</div>

<div class="availability-card">

<span class="availability soldout">

Sold Out

</span>

</div>

<div class="availability-card">

<span class="availability preorder">

Pre Order

</span>

</div>

</div>

</section>

<!-- =========================
SMART METADATA SPANS
========================= -->

<section class="metadata-section">

<div class="section-header">

<span>

Metadata

</span>

<h2>

Smart Metadata Spans

</h2>

</div>

<div class="metadata-grid">

<div class="metadata-card">

<span class="meta-item">

👁 12.8K Views

</span>

</div>

<div class="metadata-card">

<span class="meta-item">

⏱ 8 min read

</span>

</div>

<div class="metadata-card">

<span class="meta-item">

📅 Updated Today

</span>

</div>

<div class="metadata-card">

<span class="meta-item">

🌍 Global

</span>

</div>

</div>

</section>
<!-- =========================
ACHIEVEMENT BADGES
========================= -->

<section class="achievement-section">

<div class="section-header">

<span>

Achievements

</span>

<h2>

Achievement Badges

</h2>

</div>

<div class="achievement-grid">

<div class="achievement-card">

<span class="achievement-badge gold">

🏆 Top Performer

</span>

</div>

<div class="achievement-card">

<span class="achievement-badge silver">

🥈 Contributor

</span>

</div>

<div class="achievement-card">

<span class="achievement-badge bronze">

🥉 Rising Star

</span>

</div>

<div class="achievement-card">

<span class="achievement-badge diamond">

💎 Elite Member

</span>

</div>

</div>

</section>

<!-- =========================
AI LABELS
========================= -->

<section class="ai-section">

<div class="section-header">

<span>

Artificial Intelligence

</span>

<h2>

AI Generated Labels

</h2>

</div>

<div class="ai-grid">

<span class="ai-label">

🤖 AI Generated

</span>

<span class="ai-label purple">

✨ Smart Suggestion

</span>

<span class="ai-label cyan">

⚡ Auto Optimized

</span>

<span class="ai-label green">

🎯 AI Recommended

</span>

</div>

</section>

<!-- =========================
FEATURE FLAGS
========================= -->

<section class="flags-section">

<div class="section-header">

<span>

Development

</span>

<h2>

Feature Flags

</h2>

</div>

<div class="flags-grid">

<div class="flag-card">

<span class="feature-flag enabled">

Enabled

</span>

</div>

<div class="flag-card">

<span class="feature-flag disabled">

Disabled

</span>

</div>

<div class="flag-card">

<span class="feature-flag beta">

Beta

</span>

</div>

<div class="flag-card">

<span class="feature-flag experimental">

Experimental

</span>

</div>

</div>

</section>

<!-- =========================
ACTIVITY INDICATORS
========================= -->

<section class="activity-section">

<div class="section-header">

<span>

Activity

</span>

<h2>

Activity Indicators

</h2>

</div>

<div class="activity-grid">

<div class="activity-card">

<span class="activity-indicator">

🟢 Active Now

</span>

</div>

<div class="activity-card">

<span class="activity-indicator yellow">

🟡 Idle

</span>

</div>

<div class="activity-card">

<span class="activity-indicator red">

🔴 Busy

</span>

</div>

<div class="activity-card">

<span class="activity-indicator blue">

🔵 Updating

</span>

</div>

</div>

</section>

<!-- =========================
FAQ
========================= -->

<section class="faq-section">

<div class="section-header">

<span>

Help

</span>

<h2>

Frequently Asked Questions

</h2>

</div>

<div class="faq-grid">

<div class="faq-card">

<h3>

Why use span components?

</h3>

<p>

Span elements are lightweight,
semantic and ideal for inline
status indicators, badges and
micro UI components.

</p>

</div>

<div class="faq-card">

<h3>

Are these production ready?

</h3>

<p>

Yes. Every component is fully
responsive and optimized for
modern interfaces.

</p>

</div>

<div class="faq-card">

<h3>

Can I customize colors?

</h3>

<p>

Absolutely. All styles are
designed using reusable
utility classes.

</p>

</div>

</div>

</section>

<!-- =========================
DOCUMENTATION
========================= -->

<section class="docs-section">

<div class="section-header">

<span>

Documentation

</span>

<h2>

Component Structure

</h2>

</div>

<div class="docs-card">

<pre>

Span Components
│
├ Status Indicators
├ Notification Badges
├ Tags & Chips
├ Pills
├ Version Labels
├ Tooltips
├ Keyboard Shortcuts
├ AI Labels
├ Feature Flags
├ Metadata
├ Mentions
├ Activity Indicators
└ Achievement Badges

</pre>

</div>

</section>

<!-- =========================
COMPONENT GALLERY
========================= -->

<section class="gallery-section">

<div class="section-header">

<span>

Gallery

</span>

<h2>

Span Showcase

</h2>

</div>

<div class="gallery-grid">

<div class="gallery-card">

🏷️

<h3>

Labels

</h3>

</div>

<div class="gallery-card">

✨

<h3>

Effects

</h3>

</div>

<div class="gallery-card">

🟢

<h3>

Status

</h3>

</div>

<div class="gallery-card">

🤖

<h3>

AI Tags

</h3>

</div>

</div>

</section>

<!-- =========================
FOOTER
========================= -->

<footer class="footer">

<div class="footer-grid">

<div>

<h3>

SpanVerse

</h3>

<p>

Premium span component
library for modern web apps.

</p>

</div>

<div>

<h4>

Components

</h4>

<ul>

<li>Badges</li>
<li>Tags</li>
<li>Tooltips</li>

</ul>

</div>

<div>

<h4>

Resources

</h4>

<ul>

<li>Docs</li>
<li>Examples</li>
<li>Guides</li>

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

</div>

<div class="footer-bottom">

© 2026 SpanVerse UI Library

</div>

</footer>

<!-- =========================
MODAL
========================= -->

<div
class="modal-overlay"
id="spanModal">

<div class="modal">

<div class="modal-header">

<h3>

Component Preview

</h3>

<button
id="closeModal">

✕

</button>

</div>

<div class="modal-content">

<h2>

Span Component

</h2>

<p>

Preview detailed information
about selected components.

</p>

</div>

</div>

</div>

<!-- =========================
SCROLL TO TOP
========================= -->

<button
id="scrollTop"
class="scroll-top">

↑

</button>

<!-- =========================
JAVASCRIPT
========================= -->




\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/span.css\`

#### JavaScript Scripts:
None

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
    title: 'Span Components',
    styles: ["/design-tokens.css","/span.css"],
    content: `

<div class="bg-gradient"></div>

<!-- =========================
NAVBAR
========================= -->

<header class="navbar">

<div class="logo">

SpanVerse

</div>

<nav>

<a href="#components">

Components

</a>

<a href="#status">

Status

</a>

<a href="#badges">

Badges

</a>

<a href="#tooltips">

Tooltips

</a>

</nav>

<div class="nav-actions">

<button class="outline-btn">

Documentation

</button>

<button class="primary-btn">

Browse Library

</button>

</div>

</header>

<!-- =========================
HERO
========================= -->

<section class="hero">

<div class="hero-content">

<div class="hero-badge">

✨ 40+ Premium Span Components

</div>

<h1>

Beautiful

<span>

Inline UI Elements

</span>

For Modern Interfaces

</h1>

<p>

Create elegant badges,
status indicators,
labels, chips, tooltips,
keyboard shortcuts,
version tags, and
highlighted text using
lightweight reusable
span components.

</p>

<div class="hero-actions">

<button class="primary-btn">

Explore Components

</button>

<button class="outline-btn">

View Examples

</button>

</div>

</div>

<div class="hero-preview">

<div class="preview-card">

<p>

Status:
<span class="demo-online">

● Online

</span>

</p>

<p>

Plan:
<span class="demo-pill">

Pro

</span>

</p>

<p>

Version:
<span class="demo-version">

v2.1

</span>

</p>

</div>

</div>

</section>

<!-- =========================
OVERVIEW STATS
========================= -->

<section class="overview-section">

<div class="section-header">

<span>

Overview

</span>

<h2>

Component Library

</h2>

</div>

<div class="stats-grid">

<div class="stat-card">

<h1>

40+

</h1>

<p>

Span Components

</p>

</div>

<div class="stat-card">

<h1>

100%

</h1>

<p>

Pure CSS

</p>

</div>

<div class="stat-card">

<h1>

Responsive

</h1>

<p>

Mobile Ready

</p>

</div>

<div class="stat-card">

<h1>

Modern

</h1>

<p>

Production Ready

</p>

</div>

</div>

</section>

<!-- =========================
COMPONENT CATEGORIES
========================= -->

<section
id="components"
class="categories-section">

<div class="section-header">

<span>

Categories

</span>

<h2>

Explore Components

</h2>

</div>

<div class="category-grid">

<div class="category-card">

🏷️

<h3>

Labels

</h3>

<p>

Tags, pills,
badges and chips.

</p>

</div>

<div class="category-card">

🟢

<h3>

Status

</h3>

<p>

Online, offline,
busy indicators.

</p>

</div>

<div class="category-card">

💡

<h3>

Tooltips

</h3>

<p>

Helpful inline
information.

</p>

</div>

<div class="category-card">

⌨️

<h3>

Keyboard

</h3>

<p>

Shortcut keys
and commands.

</p>

</div>

</div>

</section>

<!-- =========================
STATUS SPANS
========================= -->

<section
id="status"
class="status-section">

<div class="section-header">

<span>

Status

</span>

<h2>

Status Indicators

</h2>

</div>

<div class="status-grid">

<div class="status-card">

<span class="online">

● Online

</span>

</div>

<div class="status-card">

<span class="offline">

● Offline

</span>

</div>

<div class="status-card">

<span class="busy">

● Busy

</span>

</div>

<div class="status-card">

<span class="away">

● Away

</span>

</div>

</div>

</section>
<!-- =========================
BADGES
========================= -->

<section
id="badges"
class="badges-section">

<div class="section-header">

<span>

Badges

</span>

<h2>

Notification Badges

</h2>

</div>

<div class="badge-grid">

<div class="badge-card">

<span class="badge red">

3

</span>

<h3>

Notifications

</h3>

</div>

<div class="badge-card">

<span class="badge green">

12

</span>

<h3>

Messages

</h3>

</div>

<div class="badge-card">

<span class="badge orange">

!

</span>

<h3>

Alerts

</h3>

</div>

<div class="badge-card">

<span class="badge purple">

99+

</span>

<h3>

Updates

</h3>

</div>

</div>

</section>

<!-- =========================
TAGS & CHIPS
========================= -->

<section class="tags-section">

<div class="section-header">

<span>

Tags

</span>

<h2>

Tag Components

</h2>

</div>

<div class="tag-showcase">

<span class="tag">

UI

</span>

<span class="tag">

Design

</span>

<span class="tag">

CSS

</span>

<span class="tag red">

Bug

</span>

<span class="tag green">

Feature

</span>

<span class="tag orange">

Review

</span>

<span class="tag purple">

Premium

</span>

<span class="tag cyan">

New

</span>

</div>

</section>

<!-- =========================
PILLS
========================= -->

<section class="pills-section">

<div class="section-header">

<span>

Pills

</span>

<h2>

Pill Components

</h2>

</div>

<div class="pill-grid">

<div class="pill-card">

<span class="pill accent">

Pro

</span>

</div>

<div class="pill-card">

<span class="pill success">

Active

</span>

</div>

<div class="pill-card">

<span class="pill danger">

Blocked

</span>

</div>

<div class="pill-card">

<span class="pill warning">

Pending

</span>

</div>

<div class="pill-card">

<span class="pill purple">

VIP

</span>

</div>

<div class="pill-card">

<span class="pill dark">

Premium

</span>

</div>

</div>

</section>

<!-- =========================
VERSION LABELS
========================= -->

<section class="versions-section">

<div class="section-header">

<span>

Versions

</span>

<h2>

Version Labels

</h2>

</div>

<div class="version-grid">

<div class="version-card">

<span class="version stable">

v2.5 Stable

</span>

</div>

<div class="version-card">

<span class="version beta">

v3.0 Beta

</span>

</div>

<div class="version-card">

<span class="version alpha">

v4.0 Alpha

</span>

</div>

<div class="version-card">

<span class="version release">

v5.0 Release

</span>

</div>

</div>

</section>

<!-- =========================
HIGHLIGHT TEXT
========================= -->

<section class="highlight-section">

<div class="section-header">

<span>

Highlights

</span>

<h2>

Highlighted Text

</h2>

</div>

<div class="highlight-card">

<p>

This is a

<span class="highlight">

highlighted

</span>

word inside text.

</p>

<p>

Using

<span class="highlight yellow">

yellow

</span>

and

<span class="highlight green">

green

</span>

variants.

</p>

<p>

Premium

<span class="highlight purple">

gradient

</span>

highlight styles.

</p>

</div>

</section>

<!-- =========================
GRADIENT TEXT
========================= -->

<section class="gradient-section">

<div class="section-header">

<span>

Typography

</span>

<h2>

Gradient Text Styles

</h2>

</div>

<div class="gradient-grid">

<div class="gradient-card">

<span class="gradient orange">

Creative

</span>

</div>

<div class="gradient-card">

<span class="gradient purple">

Premium

</span>

</div>

<div class="gradient-card">

<span class="gradient cyan">

Modern

</span>

</div>

<div class="gradient-card">

<span class="gradient sunset">

Trending

</span>

</div>

</div>

</section>

<!-- =========================
TEXT DECORATIONS
========================= -->

<section class="decorations-section">

<div class="section-header">

<span>

Decorations

</span>

<h2>

Text Effects

</h2>

</div>

<div class="decorations-card">

<p>

<span class="underline-accent">

Accent Underline

</span>

</p>

<p>

<span class="strike">

Deprecated Feature

</span>

</p>

<p>

<span class="bold-accent">

Important Notice

</span>

</p>

<p>

<span class="text-glow">

Glowing Text

</span>

</p>

</div>

</section>

<!-- =========================
INLINE CODE
========================= -->

<section class="code-section">

<div class="section-header">

<span>

Code

</span>

<h2>

Inline Code Components

</h2>

</div>

<div class="inline-code-grid">

<div class="code-card">

<p>

Use

<span class="inline-code">

display:flex

</span>

for layouts.

</p>

</div>

<div class="code-card">

<p>

Apply

<span class="inline-code">

border-radius

</span>

for rounded corners.

</p>

</div>

<div class="code-card">

<p>

Enable

<span class="inline-code">

backdrop-filter

</span>

for glassmorphism.

</p>

</div>

</div>

</section>
<!-- =========================
TOOLTIPS
========================= -->

<section
id="tooltips"
class="tooltips-section">

<div class="section-header">

<span>

Tooltips

</span>

<h2>

Interactive Tooltips

</h2>

</div>

<div class="tooltip-grid">

<div class="tooltip-card">

<span class="tooltip">

Hover Me

<span class="tooltip-text">

Simple tooltip message

</span>

</span>

</div>

<div class="tooltip-card">

<span class="tooltip">

Information

<span class="tooltip-text">

Helpful explanation appears here

</span>

</span>

</div>

<div class="tooltip-card">

<span class="tooltip">

Bottom Tooltip

<span class="tooltip-text bottom">

Displayed below the element

</span>

</span>

</div>

<div class="tooltip-card">

<span class="tooltip">

Premium

<span class="tooltip-text">

Advanced tooltip styling

</span>

</span>

</div>

</div>

</section>

<!-- =========================
KEYBOARD SHORTCUTS
========================= -->

<section class="keyboard-section">

<div class="section-header">

<span>

Keyboard

</span>

<h2>

Keyboard Shortcut Spans

</h2>

</div>

<div class="keyboard-grid">

<div class="keyboard-card">

<kbd class="kbd">

Ctrl

</kbd>

+

<kbd class="kbd">

S

</kbd>

</div>

<div class="keyboard-card">

<kbd class="kbd">

Ctrl

</kbd>

+

<kbd class="kbd">

K

</kbd>

</div>

<div class="keyboard-card">

<kbd class="kbd">

Alt

</kbd>

+

<kbd class="kbd">

Tab

</kbd>

</div>

<div class="keyboard-card">

<kbd class="kbd">

Shift

</kbd>

+

<kbd class="kbd">

A

</kbd>

</div>

</div>

</section>

<!-- =========================
ANIMATED BADGES
========================= -->

<section class="animated-badges-section">

<div class="section-header">

<span>

Animation

</span>

<h2>

Animated Badges

</h2>

</div>

<div class="animated-grid">

<div class="animated-card">

<span class="animated-badge red">

Live

</span>

</div>

<div class="animated-card">

<span class="animated-badge green">

Active

</span>

</div>

<div class="animated-card">

<span class="animated-badge orange">

Trending

</span>

</div>

<div class="animated-card">

<span class="animated-badge purple">

Popular

</span>

</div>

</div>

</section>

<!-- =========================
LIVE INDICATORS
========================= -->

<section class="live-section">

<div class="section-header">

<span>

Indicators

</span>

<h2>

Live Status Indicators

</h2>

</div>

<div class="live-grid">

<div class="live-card">

<span class="live-dot"></span>

Online

</div>

<div class="live-card">

<span class="live-dot green"></span>

Connected

</div>

<div class="live-card">

<span class="live-dot orange"></span>

Streaming

</div>

<div class="live-card">

<span class="live-dot red"></span>

Recording

</div>

</div>

</section>

<!-- =========================
LOADING SPANS
========================= -->

<section class="loading-section">

<div class="section-header">

<span>

Loading

</span>

<h2>

Loading Indicators

</h2>

</div>

<div class="loading-grid">

<div class="loading-card">

<span class="loading-spinner"></span>

Loading

</div>

<div class="loading-card">

<span class="loading-spinner accent"></span>

Processing

</div>

<div class="loading-card">

<span class="loading-spinner purple"></span>

Fetching

</div>

</div>

</section>

<!-- =========================
PROGRESS SPANS
========================= -->

<section class="progress-section">

<div class="section-header">

<span>

Progress

</span>

<h2>

Progress Labels

</h2>

</div>

<div class="progress-grid">

<div class="progress-card">

<span class="progress-label">

25%

</span>

</div>

<div class="progress-card">

<span class="progress-label success">

64%

</span>

</div>

<div class="progress-card">

<span class="progress-label warning">

82%

</span>

</div>

<div class="progress-card">

<span class="progress-label danger">

97%

</span>

</div>

</div>

</section>

<!-- =========================
PREMIUM LABELS
========================= -->

<section class="premium-section">

<div class="section-header">

<span>

Labels

</span>

<h2>

Premium Labels

</h2>

</div>

<div class="premium-grid">

<span class="premium-label">

Featured

</span>

<span class="premium-label gold">

Premium

</span>

<span class="premium-label silver">

Enterprise

</span>

<span class="premium-label purple">

Exclusive

</span>

</div>

</section>

<!-- =========================
VERIFIED BADGES
========================= -->

<section class="verified-section">

<div class="section-header">

<span>

Verification

</span>

<h2>

Verified Badges

</h2>

</div>

<div class="verified-grid">

<div class="verified-card">

John Smith

<span class="verified-badge">

✓

</span>

</div>

<div class="verified-card">

Design Team

<span class="verified-badge blue">

✓

</span>

</div>

<div class="verified-card">

Premium Creator

<span class="verified-badge gold">

✓

</span>

</div>

<div class="verified-card">

Official Account

<span class="verified-badge purple">

✓

</span>

</div>

</div>

</section>
<!-- =========================
NOTIFICATION LABELS
========================= -->

<section class="notification-section">

<div class="section-header">

<span>

Notifications

</span>

<h2>

Notification Labels

</h2>

</div>

<div class="notification-grid">

<div class="notification-card">

<span class="notify-label info">

3 New Messages

</span>

</div>

<div class="notification-card">

<span class="notify-label success">

Payment Received

</span>

</div>

<div class="notification-card">

<span class="notify-label warning">

Action Required

</span>

</div>

<div class="notification-card">

<span class="notify-label danger">

Security Alert

</span>

</div>

</div>

</section>

<!-- =========================
ALERT SPANS
========================= -->

<section class="alert-section">

<div class="section-header">

<span>

Alerts

</span>

<h2>

Alert Spans

</h2>

</div>

<div class="alert-grid">

<div class="alert-card">

<span class="alert-span success">

✓ Success

</span>

</div>

<div class="alert-card">

<span class="alert-span warning">

⚠ Warning

</span>

</div>

<div class="alert-card">

<span class="alert-span danger">

✕ Error

</span>

</div>

<div class="alert-card">

<span class="alert-span info">

ℹ Information

</span>

</div>

</div>

</section>

<!-- =========================
SOCIAL COUNTERS
========================= -->

<section class="social-section">

<div class="section-header">

<span>

Social

</span>

<h2>

Social Counters

</h2>

</div>

<div class="social-grid">

<div class="social-card">

❤️

<span class="social-count">

12.4K

</span>

</div>

<div class="social-card">

💬

<span class="social-count">

4.8K

</span>

</div>

<div class="social-card">

🔁

<span class="social-count">

2.2K

</span>

</div>

<div class="social-card">

⭐

<span class="social-count">

9.1K

</span>

</div>

</div>

</section>

<!-- =========================
RATING BADGES
========================= -->

<section class="rating-section">

<div class="section-header">

<span>

Ratings

</span>

<h2>

Rating Badges

</h2>

</div>

<div class="rating-grid">

<div class="rating-card">

<span class="rating-badge">

⭐ 4.8

</span>

</div>

<div class="rating-card">

<span class="rating-badge gold">

🏆 Top Rated

</span>

</div>

<div class="rating-card">

<span class="rating-badge green">

✓ Trusted

</span>

</div>

<div class="rating-card">

<span class="rating-badge purple">

👑 Elite

</span>

</div>

</div>

</section>

<!-- =========================
USER MENTIONS
========================= -->

<section class="mentions-section">

<div class="section-header">

<span>

Mentions

</span>

<h2>

User Mention Spans

</h2>

</div>

<div class="mentions-card">

<p>

Hello

<span class="mention">

@john

</span>

please review this design.

</p>

<p>

Assigned to

<span class="mention purple">

@sarah

</span>

for approval.

</p>

<p>

Thanks

<span class="mention green">

@team

</span>

for the update.

</p>

</div>

</section>

<!-- =========================
CATEGORY MARKERS
========================= -->

<section class="marker-section">

<div class="section-header">

<span>

Categories

</span>

<h2>

Category Markers

</h2>

</div>

<div class="marker-grid">

<span class="marker design">

Design

</span>

<span class="marker code">

Development

</span>

<span class="marker marketing">

Marketing

</span>

<span class="marker finance">

Finance

</span>

<span class="marker support">

Support

</span>

<span class="marker ai">

Artificial Intelligence

</span>

</div>

</section>

<!-- =========================
AVAILABILITY LABELS
========================= -->

<section class="availability-section">

<div class="section-header">

<span>

Availability

</span>

<h2>

Availability Labels

</h2>

</div>

<div class="availability-grid">

<div class="availability-card">

<span class="availability available">

Available

</span>

</div>

<div class="availability-card">

<span class="availability limited">

Limited

</span>

</div>

<div class="availability-card">

<span class="availability soldout">

Sold Out

</span>

</div>

<div class="availability-card">

<span class="availability preorder">

Pre Order

</span>

</div>

</div>

</section>

<!-- =========================
SMART METADATA SPANS
========================= -->

<section class="metadata-section">

<div class="section-header">

<span>

Metadata

</span>

<h2>

Smart Metadata Spans

</h2>

</div>

<div class="metadata-grid">

<div class="metadata-card">

<span class="meta-item">

👁 12.8K Views

</span>

</div>

<div class="metadata-card">

<span class="meta-item">

⏱ 8 min read

</span>

</div>

<div class="metadata-card">

<span class="meta-item">

📅 Updated Today

</span>

</div>

<div class="metadata-card">

<span class="meta-item">

🌍 Global

</span>

</div>

</div>

</section>
<!-- =========================
ACHIEVEMENT BADGES
========================= -->

<section class="achievement-section">

<div class="section-header">

<span>

Achievements

</span>

<h2>

Achievement Badges

</h2>

</div>

<div class="achievement-grid">

<div class="achievement-card">

<span class="achievement-badge gold">

🏆 Top Performer

</span>

</div>

<div class="achievement-card">

<span class="achievement-badge silver">

🥈 Contributor

</span>

</div>

<div class="achievement-card">

<span class="achievement-badge bronze">

🥉 Rising Star

</span>

</div>

<div class="achievement-card">

<span class="achievement-badge diamond">

💎 Elite Member

</span>

</div>

</div>

</section>

<!-- =========================
AI LABELS
========================= -->

<section class="ai-section">

<div class="section-header">

<span>

Artificial Intelligence

</span>

<h2>

AI Generated Labels

</h2>

</div>

<div class="ai-grid">

<span class="ai-label">

🤖 AI Generated

</span>

<span class="ai-label purple">

✨ Smart Suggestion

</span>

<span class="ai-label cyan">

⚡ Auto Optimized

</span>

<span class="ai-label green">

🎯 AI Recommended

</span>

</div>

</section>

<!-- =========================
FEATURE FLAGS
========================= -->

<section class="flags-section">

<div class="section-header">

<span>

Development

</span>

<h2>

Feature Flags

</h2>

</div>

<div class="flags-grid">

<div class="flag-card">

<span class="feature-flag enabled">

Enabled

</span>

</div>

<div class="flag-card">

<span class="feature-flag disabled">

Disabled

</span>

</div>

<div class="flag-card">

<span class="feature-flag beta">

Beta

</span>

</div>

<div class="flag-card">

<span class="feature-flag experimental">

Experimental

</span>

</div>

</div>

</section>

<!-- =========================
ACTIVITY INDICATORS
========================= -->

<section class="activity-section">

<div class="section-header">

<span>

Activity

</span>

<h2>

Activity Indicators

</h2>

</div>

<div class="activity-grid">

<div class="activity-card">

<span class="activity-indicator">

🟢 Active Now

</span>

</div>

<div class="activity-card">

<span class="activity-indicator yellow">

🟡 Idle

</span>

</div>

<div class="activity-card">

<span class="activity-indicator red">

🔴 Busy

</span>

</div>

<div class="activity-card">

<span class="activity-indicator blue">

🔵 Updating

</span>

</div>

</div>

</section>

<!-- =========================
FAQ
========================= -->

<section class="faq-section">

<div class="section-header">

<span>

Help

</span>

<h2>

Frequently Asked Questions

</h2>

</div>

<div class="faq-grid">

<div class="faq-card">

<h3>

Why use span components?

</h3>

<p>

Span elements are lightweight,
semantic and ideal for inline
status indicators, badges and
micro UI components.

</p>

</div>

<div class="faq-card">

<h3>

Are these production ready?

</h3>

<p>

Yes. Every component is fully
responsive and optimized for
modern interfaces.

</p>

</div>

<div class="faq-card">

<h3>

Can I customize colors?

</h3>

<p>

Absolutely. All styles are
designed using reusable
utility classes.

</p>

</div>

</div>

</section>

<!-- =========================
DOCUMENTATION
========================= -->

<section class="docs-section">

<div class="section-header">

<span>

Documentation

</span>

<h2>

Component Structure

</h2>

</div>

<div class="docs-card">

<pre>

Span Components
│
├ Status Indicators
├ Notification Badges
├ Tags & Chips
├ Pills
├ Version Labels
├ Tooltips
├ Keyboard Shortcuts
├ AI Labels
├ Feature Flags
├ Metadata
├ Mentions
├ Activity Indicators
└ Achievement Badges

</pre>

</div>

</section>

<!-- =========================
COMPONENT GALLERY
========================= -->

<section class="gallery-section">

<div class="section-header">

<span>

Gallery

</span>

<h2>

Span Showcase

</h2>

</div>

<div class="gallery-grid">

<div class="gallery-card">

🏷️

<h3>

Labels

</h3>

</div>

<div class="gallery-card">

✨

<h3>

Effects

</h3>

</div>

<div class="gallery-card">

🟢

<h3>

Status

</h3>

</div>

<div class="gallery-card">

🤖

<h3>

AI Tags

</h3>

</div>

</div>

</section>

<!-- =========================
FOOTER
========================= -->

<footer class="footer">

<div class="footer-grid">

<div>

<h3>

SpanVerse

</h3>

<p>

Premium span component
library for modern web apps.

</p>

</div>

<div>

<h4>

Components

</h4>

<ul>

<li>Badges</li>
<li>Tags</li>
<li>Tooltips</li>

</ul>

</div>

<div>

<h4>

Resources

</h4>

<ul>

<li>Docs</li>
<li>Examples</li>
<li>Guides</li>

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

</div>

<div class="footer-bottom">

© 2026 SpanVerse UI Library

</div>

</footer>

<!-- =========================
MODAL
========================= -->

<div
class="modal-overlay"
id="spanModal">

<div class="modal">

<div class="modal-header">

<h3>

Component Preview

</h3>

<button
id="closeModal">

✕

</button>

</div>

<div class="modal-content">

<h2>

Span Component

</h2>

<p>

Preview detailed information
about selected components.

</p>

</div>

</div>

</div>

<!-- =========================
SCROLL TO TOP
========================= -->

<button
id="scrollTop"
class="scroll-top">

↑

</button>

<!-- =========================
JAVASCRIPT
========================= -->



`
  })
};
