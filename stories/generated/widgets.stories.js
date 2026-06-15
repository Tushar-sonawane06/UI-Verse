import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Widgets',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Widget and panel UI components

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>widgets</code>, <code>components</code>, <code>panels</code>, <code>mini</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="widgets-page">

<!-- ==================================
HERO
================================== -->

<section class="hero-section">

<div class="hero-badge">

⚡ 25 Premium Developer Widgets

</div>

<h1>

Modern Widgets
For

<span>

Dashboards

</span>

And Apps

</h1>

<p>

Beautiful analytics, AI,
monitoring, productivity and
developer-focused widgets
built with modern UI patterns.

</p>

<div class="hero-buttons">

<a href="#widgets"
class="primary-btn">

Browse Widgets

</a>

<a href="#stats"
class="secondary-btn">

Explore Stats

</a>

</div>

<div
class="hero-stats"
id="stats">

<div class="hero-stat">

<h3>

25+

</h3>

<p>

Widgets

</p>

</div>

<div class="hero-stat">

<h3>

100%

</h3>

<p>

Responsive

</p>

</div>

<div class="hero-stat">

<h3>

Dark

</h3>

<p>

Theme

</p>

</div>

<div class="hero-stat">

<h3>

UIverse

</h3>

<p>

Premium

</p>

</div>

</div>

</section>

<!-- ==================================
WIDGET GRID START
================================== -->

<section
class="widgets-grid"
id="widgets">

<!-- REVENUE WIDGET -->

<div class="widget-card">

<div class="widget-header">

<h3>

Revenue Analytics

</h3>

<button>

Copy

</button>

</div>

<div class="revenue-widget">

<div class="revenue-top">

<span>

Monthly Revenue

</span>

<h2>

$48,420

</h2>

<span class="success">

+12.8%

</span>

</div>

<div class="revenue-chart">

<div
class="bar"
style="height:40%"></div>

<div
class="bar"
style="height:70%"></div>

<div
class="bar"
style="height:55%"></div>

<div
class="bar"
style="height:90%"></div>

<div
class="bar"
style="height:100%"></div>

</div>

</div>

      <div class="footer-col brand">
        <h2 class="footer-logo">⬡ UIverse</h2>
        <p>A curated library of premium UI components crafted with pure HTML, CSS, and JS — no frameworks, no
          dependencies, just clean code.</p>
        <div class="socials">
          <a href="https://github.com" target="_blank" aria-label="GitHub" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" title="Twitter">
            <i class="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>

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

      <div class="footer-col">
        <h3>Resources</h3>
        <ul>
          <li><a href="documentation.html">Documentation</a></li>
          <li><a href="contribute.html">Contribute</a></li>
          <li><a href="https://github.com/uiverse/uiverse" target="_blank">GitHub Repo</a></li>
          <li><a href="community.html">Community</a></li>
          <li><a href="support.html">Support</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Legal</h3>
        <ul>
          <li><a href="privacypolicy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Service</a></li>
          <li><a href="license.html">License</a></li>
        </ul>
      </div>

      <div class="footer-col newsletter">
        <h3>Stay Updated</h3>
        <p>Get notified when new components drop.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="your@email.com">
          <button type="button" onclick="subscribe()">Subscribe</button>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
    </div>
  </footer>

  

    
</body>

<!-- ==================================
GITHUB STATS
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

GitHub Statistics

</h3>

<button>

Copy

</button>

</div>

<div class="github-widget">

<div class="github-top">

<i class="fab fa-github"></i>

<h4>

uiverse/ui-library

</h4>

</div>

<div class="github-grid">

<div>

<h3>

15.2K

</h3>

<span>

Stars

</span>

</div>

<div>

<h3>

1.2K

</h3>

<span>

Forks

</span>

</div>

<div>

<h3>

482

</h3>

<span>

Commits

</span>

</div>

<div>

<h3>

89

</h3>

<span>

PRs

</span>

</div>

</div>

</div>

</div>
<!-- ==================================
TERMINAL WIDGET
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Terminal Console

</h3>

<button>

Copy

</button>

</div>

<div class="terminal-widget">

<div class="terminal-top">

<span class="dot red"></span>

<span class="dot yellow"></span>

<span class="dot green"></span>

</div>

<div class="terminal-body">

<p>

<span class="prompt">

$

</span>

npm install uiverse-ui

</p>

<p>

<span class="success">

✔

</span>

Packages installed successfully

</p>

<p>

<span class="prompt">

$

</span>

npm run dev

</p>

<p>

Server running on localhost:3000

</p>

</div>

</div>

</div>

<!-- ==================================
CODE SNIPPET WIDGET
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Code Snippet

</h3>

<button>

Copy

</button>

</div>

<div class="snippet-widget">

<div class="snippet-top">

<span>

JavaScript

</span>

</div>

<pre>

<code>

function hello(){

console.log(
"UIverse"
);

}

hello();

</code>

</pre>

</div>

</div>

<!-- ==================================
ACTIVITY TRACKER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Activity Tracker

</h3>

<button>

Copy

</button>

</div>

<div class="activity-widget">

<div class="activity-grid">

<div class="cell level-1"></div>
<div class="cell level-2"></div>
<div class="cell level-3"></div>
<div class="cell level-4"></div>

<div class="cell level-2"></div>
<div class="cell level-4"></div>
<div class="cell level-1"></div>
<div class="cell level-3"></div>

<div class="cell level-4"></div>
<div class="cell level-3"></div>
<div class="cell level-2"></div>
<div class="cell level-1"></div>

<div class="cell level-2"></div>
<div class="cell level-3"></div>
<div class="cell level-4"></div>
<div class="cell level-1"></div>

</div>

<p>

124 contributions
this month

</p>

</div>

</div>

<!-- ==================================
DEVELOPER PROFILE
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Developer Profile

</h3>

<button>

Copy

</button>

</div>

<div class="profile-widget">

<div class="avatar">

👨‍💻

</div>

<h3>

Alex Johnson

</h3>

<p>

Frontend Engineer

</p>

<div class="profile-stats">

<div>

<strong>

48

</strong>

<span>

Projects

</span>

</div>

<div>

<strong>

8.4K

</strong>

<span>

Followers

</span>

</div>

<div>

<strong>

320

</strong>

<span>

Repos

</span>

</div>

</div>

</div>

</div>

<!-- ==================================
SYSTEM HEALTH
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

System Health

</h3>

<button>

Copy

</button>

</div>

<div class="system-widget">

<div class="system-top">

<h4>

Server Status

</h4>

<span class="online">

Online

</span>

</div>

<div class="metric">

<div class="metric-label">

CPU Usage

</div>

<div class="metric-bar">

<div
class="metric-fill cpu">
</div>

</div>

</div>

<div class="metric">

<div class="metric-label">

Memory

</div>

<div class="metric-bar">

<div
class="metric-fill memory">
</div>

</div>

</div>

<div class="metric">

<div class="metric-label">

Disk Space

</div>

<div class="metric-bar">

<div
class="metric-fill disk">
</div>

</div>

</div>

</div>

</div>
<!-- ==================================
KANBAN TICKET
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Kanban Ticket

</h3>

<button>

Copy

</button>

</div>

<div class="kanban-widget">

<div class="ticket-priority high">

High Priority

</div>

<h4>

Redesign Dashboard UI

</h4>

<p>

Improve analytics layout,
mobile responsiveness and
component accessibility.

</p>

<div class="ticket-footer">

<span>

Due: 12 Jun

</span>

<span>

👥 4 Members

</span>

</div>

</div>

</div>

<!-- ==================================
SQL CONSOLE
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

SQL Console

</h3>

<button>

Copy

</button>

</div>

<div class="sql-widget">

<div class="sql-header">

MySQL Database

</div>

<pre>

SELECT *
FROM users
WHERE status =
'active'
LIMIT 10;

</pre>

<div class="sql-result">

10 rows returned

</div>

</div>

</div>

<!-- ==================================
API LOG VIEWER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

API Traffic

</h3>

<button>

Copy

</button>

</div>

<div class="api-widget">

<div class="api-log success">

200 GET /users

</div>

<div class="api-log success">

201 POST /projects

</div>

<div class="api-log warning">

429 Rate Limited

</div>

<div class="api-log error">

500 Server Error

</div>

<div class="api-log success">

200 GET /dashboard

</div>

</div>

</div>

<!-- ==================================
TECH STACK
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Tech Stack

</h3>

<button>

Copy

</button>

</div>

<div class="tech-widget">

<div class="tech-item">

<i class="fab fa-html5"></i>

<span>

HTML5

</span>

</div>

<div class="tech-item">

<i class="fab fa-css3-alt"></i>

<span>

CSS3

</span>

</div>

<div class="tech-item">

<i class="fab fa-js"></i>

<span>

JavaScript

</span>

</div>

<div class="tech-item">

<i class="fab fa-react"></i>

<span>

React

</span>

</div>

<div class="tech-item">

<i class="fab fa-node-js"></i>

<span>

Node.js

</span>

</div>

<div class="tech-item">

<i class="fa-solid fa-database"></i>

<span>

MongoDB

</span>

</div>

</div>

</div>

<!-- ==================================
AI ANALYTICS
================================== -->

<div class="widget-card large-widget">

<div class="widget-header">

<h3>

AI Analytics Dashboard

</h3>

<button>

Copy

</button>

</div>

<div class="ai-widget">

<div class="ai-stat">

<h2>

98.4%

</h2>

<p>

Model Accuracy

</p>

</div>

<div class="ai-stat">

<h2>

24ms

</h2>

<p>

Response Time

</p>

</div>

<div class="ai-stat">

<h2>

1.2M

</h2>

<p>

Requests

</p>

</div>

<div class="ai-chart">

<div class="line"></div>

</div>

</div>

</div>
<!-- ==================================
DEPLOYMENT TRACKER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Deployment Tracker

</h3>

<button>

Copy

</button>

</div>

<div class="deploy-widget">

<div class="deploy-stage success">

Build

</div>

<div class="deploy-stage success">

Test

</div>

<div class="deploy-stage active">

Deploy

</div>

<div class="deploy-stage">

Monitor

</div>

<div class="deploy-footer">

<span>

v2.8.1

</span>

<span>

87% Complete

</span>

</div>

</div>

</div>

<!-- ==================================
TEAM CHAT
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Team Chat

</h3>

<button>

Copy

</button>

</div>

<div class="chat-widget">

<div class="message">

<strong>

Sarah

</strong>

<p>

Dashboard update is ready.

</p>

</div>

<div class="message">

<strong>

Alex

</strong>

<p>

Reviewing it now 👍

</p>

</div>

<div class="message">

<strong>

Ryan

</strong>

<p>

Let's deploy today.

</p>

</div>

</div>

</div>

<!-- ==================================
NOTIFICATIONS
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Notifications

</h3>

<button>

Copy

</button>

</div>

<div class="notification-widget">

<div class="notification-item">

🔔 New project assigned

</div>

<div class="notification-item">

✅ Build completed

</div>

<div class="notification-item">

⚡ AI report generated

</div>

<div class="notification-item">

📅 Meeting starts in 15 min

</div>

</div>

</div>

<!-- ==================================
WEATHER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Weather Widget

</h3>

<button>

Copy

</button>

</div>

<div class="weather-widget">

<div class="weather-top">

☀️

<h2>

28°C

</h2>

</div>

<p>

Sunny • Pune

</p>

<div class="weather-stats">

<span>

Humidity 42%

</span>

<span>

Wind 9 km/h

</span>

</div>

</div>

</div>

<!-- ==================================
NEWSLETTER
================================== -->

<section class="newsletter-section">

<div class="newsletter-card">

<h2>

Get New Widgets Weekly

</h2>

<p>

Receive premium dashboard
widgets, developer tools and
UI components every week.

</p>

<form class="newsletter-form">

<input
type="email"
placeholder="your@email.com">

<button>

Subscribe

</button>

</form>

</div>

</section>

</section>

<!-- ==================================
FOOTER
================================== -->

<footer class="footer">

<div class="footer-container">

<div class="footer-brand">

<h2>

⬡ UIverse

</h2>

<p>

Premium widgets and modern
UI components for developers.

</p>

</div>

<div class="footer-column">

<h3>

Components

</h3>

<ul>

<li><a href="#">Widgets</a></li>
<li><a href="#">Cards</a></li>
<li><a href="#">Forms</a></li>
<li><a href="#">Calendars</a></li>

</ul>

</div>

<div class="footer-column">

<h3>

Resources

</h3>

<ul>

<li><a href="#">Documentation</a></li>
<li><a href="#">Templates</a></li>
<li><a href="#">GitHub</a></li>
<li><a href="#">Support</a></li>

</ul>

</div>

<div class="footer-column">

<h3>

Community

</h3>

<ul>

<li><a href="#">Discord</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">LinkedIn</a></li>
<li><a href="#">Blog</a></li>

</ul>

</div>

</div>

<div class="footer-bottom">

© 2026 UIverse Widgets Collection

</div>

</footer>



</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/widgets.css\`

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
    title: 'Widgets',
    styles: ["/design-tokens.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/widgets.css"],
    content: `<main class="widgets-page">

<!-- ==================================
HERO
================================== -->

<section class="hero-section">

<div class="hero-badge">

⚡ 25 Premium Developer Widgets

</div>

<h1>

Modern Widgets
For

<span>

Dashboards

</span>

And Apps

</h1>

<p>

Beautiful analytics, AI,
monitoring, productivity and
developer-focused widgets
built with modern UI patterns.

</p>

<div class="hero-buttons">

<a href="#widgets"
class="primary-btn">

Browse Widgets

</a>

<a href="#stats"
class="secondary-btn">

Explore Stats

</a>

</div>

<div
class="hero-stats"
id="stats">

<div class="hero-stat">

<h3>

25+

</h3>

<p>

Widgets

</p>

</div>

<div class="hero-stat">

<h3>

100%

</h3>

<p>

Responsive

</p>

</div>

<div class="hero-stat">

<h3>

Dark

</h3>

<p>

Theme

</p>

</div>

<div class="hero-stat">

<h3>

UIverse

</h3>

<p>

Premium

</p>

</div>

</div>

</section>

<!-- ==================================
WIDGET GRID START
================================== -->

<section
class="widgets-grid"
id="widgets">

<!-- REVENUE WIDGET -->

<div class="widget-card">

<div class="widget-header">

<h3>

Revenue Analytics

</h3>

<button>

Copy

</button>

</div>

<div class="revenue-widget">

<div class="revenue-top">

<span>

Monthly Revenue

</span>

<h2>

$48,420

</h2>

<span class="success">

+12.8%

</span>

</div>

<div class="revenue-chart">

<div
class="bar"
style="height:40%"></div>

<div
class="bar"
style="height:70%"></div>

<div
class="bar"
style="height:55%"></div>

<div
class="bar"
style="height:90%"></div>

<div
class="bar"
style="height:100%"></div>

</div>

</div>

      <div class="footer-col brand">
        <h2 class="footer-logo">⬡ UIverse</h2>
        <p>A curated library of premium UI components crafted with pure HTML, CSS, and JS — no frameworks, no
          dependencies, just clean code.</p>
        <div class="socials">
          <a href="https://github.com" target="_blank" aria-label="GitHub" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" title="Twitter">
            <i class="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>

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

      <div class="footer-col">
        <h3>Resources</h3>
        <ul>
          <li><a href="documentation.html">Documentation</a></li>
          <li><a href="contribute.html">Contribute</a></li>
          <li><a href="https://github.com/uiverse/uiverse" target="_blank">GitHub Repo</a></li>
          <li><a href="community.html">Community</a></li>
          <li><a href="support.html">Support</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Legal</h3>
        <ul>
          <li><a href="privacypolicy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Service</a></li>
          <li><a href="license.html">License</a></li>
        </ul>
      </div>

      <div class="footer-col newsletter">
        <h3>Stay Updated</h3>
        <p>Get notified when new components drop.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="your@email.com">
          <button type="button" onclick="subscribe()">Subscribe</button>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
    </div>
  </footer>

  

    
</body>

<!-- ==================================
GITHUB STATS
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

GitHub Statistics

</h3>

<button>

Copy

</button>

</div>

<div class="github-widget">

<div class="github-top">

<i class="fab fa-github"></i>

<h4>

uiverse/ui-library

</h4>

</div>

<div class="github-grid">

<div>

<h3>

15.2K

</h3>

<span>

Stars

</span>

</div>

<div>

<h3>

1.2K

</h3>

<span>

Forks

</span>

</div>

<div>

<h3>

482

</h3>

<span>

Commits

</span>

</div>

<div>

<h3>

89

</h3>

<span>

PRs

</span>

</div>

</div>

</div>

</div>
<!-- ==================================
TERMINAL WIDGET
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Terminal Console

</h3>

<button>

Copy

</button>

</div>

<div class="terminal-widget">

<div class="terminal-top">

<span class="dot red"></span>

<span class="dot yellow"></span>

<span class="dot green"></span>

</div>

<div class="terminal-body">

<p>

<span class="prompt">

$

</span>

npm install uiverse-ui

</p>

<p>

<span class="success">

✔

</span>

Packages installed successfully

</p>

<p>

<span class="prompt">

$

</span>

npm run dev

</p>

<p>

Server running on localhost:3000

</p>

</div>

</div>

</div>

<!-- ==================================
CODE SNIPPET WIDGET
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Code Snippet

</h3>

<button>

Copy

</button>

</div>

<div class="snippet-widget">

<div class="snippet-top">

<span>

JavaScript

</span>

</div>

<pre>

<code>

function hello(){

console.log(
"UIverse"
);

}

hello();

</code>

</pre>

</div>

</div>

<!-- ==================================
ACTIVITY TRACKER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Activity Tracker

</h3>

<button>

Copy

</button>

</div>

<div class="activity-widget">

<div class="activity-grid">

<div class="cell level-1"></div>
<div class="cell level-2"></div>
<div class="cell level-3"></div>
<div class="cell level-4"></div>

<div class="cell level-2"></div>
<div class="cell level-4"></div>
<div class="cell level-1"></div>
<div class="cell level-3"></div>

<div class="cell level-4"></div>
<div class="cell level-3"></div>
<div class="cell level-2"></div>
<div class="cell level-1"></div>

<div class="cell level-2"></div>
<div class="cell level-3"></div>
<div class="cell level-4"></div>
<div class="cell level-1"></div>

</div>

<p>

124 contributions
this month

</p>

</div>

</div>

<!-- ==================================
DEVELOPER PROFILE
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Developer Profile

</h3>

<button>

Copy

</button>

</div>

<div class="profile-widget">

<div class="avatar">

👨‍💻

</div>

<h3>

Alex Johnson

</h3>

<p>

Frontend Engineer

</p>

<div class="profile-stats">

<div>

<strong>

48

</strong>

<span>

Projects

</span>

</div>

<div>

<strong>

8.4K

</strong>

<span>

Followers

</span>

</div>

<div>

<strong>

320

</strong>

<span>

Repos

</span>

</div>

</div>

</div>

</div>

<!-- ==================================
SYSTEM HEALTH
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

System Health

</h3>

<button>

Copy

</button>

</div>

<div class="system-widget">

<div class="system-top">

<h4>

Server Status

</h4>

<span class="online">

Online

</span>

</div>

<div class="metric">

<div class="metric-label">

CPU Usage

</div>

<div class="metric-bar">

<div
class="metric-fill cpu">
</div>

</div>

</div>

<div class="metric">

<div class="metric-label">

Memory

</div>

<div class="metric-bar">

<div
class="metric-fill memory">
</div>

</div>

</div>

<div class="metric">

<div class="metric-label">

Disk Space

</div>

<div class="metric-bar">

<div
class="metric-fill disk">
</div>

</div>

</div>

</div>

</div>
<!-- ==================================
KANBAN TICKET
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Kanban Ticket

</h3>

<button>

Copy

</button>

</div>

<div class="kanban-widget">

<div class="ticket-priority high">

High Priority

</div>

<h4>

Redesign Dashboard UI

</h4>

<p>

Improve analytics layout,
mobile responsiveness and
component accessibility.

</p>

<div class="ticket-footer">

<span>

Due: 12 Jun

</span>

<span>

👥 4 Members

</span>

</div>

</div>

</div>

<!-- ==================================
SQL CONSOLE
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

SQL Console

</h3>

<button>

Copy

</button>

</div>

<div class="sql-widget">

<div class="sql-header">

MySQL Database

</div>

<pre>

SELECT *
FROM users
WHERE status =
'active'
LIMIT 10;

</pre>

<div class="sql-result">

10 rows returned

</div>

</div>

</div>

<!-- ==================================
API LOG VIEWER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

API Traffic

</h3>

<button>

Copy

</button>

</div>

<div class="api-widget">

<div class="api-log success">

200 GET /users

</div>

<div class="api-log success">

201 POST /projects

</div>

<div class="api-log warning">

429 Rate Limited

</div>

<div class="api-log error">

500 Server Error

</div>

<div class="api-log success">

200 GET /dashboard

</div>

</div>

</div>

<!-- ==================================
TECH STACK
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Tech Stack

</h3>

<button>

Copy

</button>

</div>

<div class="tech-widget">

<div class="tech-item">

<i class="fab fa-html5"></i>

<span>

HTML5

</span>

</div>

<div class="tech-item">

<i class="fab fa-css3-alt"></i>

<span>

CSS3

</span>

</div>

<div class="tech-item">

<i class="fab fa-js"></i>

<span>

JavaScript

</span>

</div>

<div class="tech-item">

<i class="fab fa-react"></i>

<span>

React

</span>

</div>

<div class="tech-item">

<i class="fab fa-node-js"></i>

<span>

Node.js

</span>

</div>

<div class="tech-item">

<i class="fa-solid fa-database"></i>

<span>

MongoDB

</span>

</div>

</div>

</div>

<!-- ==================================
AI ANALYTICS
================================== -->

<div class="widget-card large-widget">

<div class="widget-header">

<h3>

AI Analytics Dashboard

</h3>

<button>

Copy

</button>

</div>

<div class="ai-widget">

<div class="ai-stat">

<h2>

98.4%

</h2>

<p>

Model Accuracy

</p>

</div>

<div class="ai-stat">

<h2>

24ms

</h2>

<p>

Response Time

</p>

</div>

<div class="ai-stat">

<h2>

1.2M

</h2>

<p>

Requests

</p>

</div>

<div class="ai-chart">

<div class="line"></div>

</div>

</div>

</div>
<!-- ==================================
DEPLOYMENT TRACKER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Deployment Tracker

</h3>

<button>

Copy

</button>

</div>

<div class="deploy-widget">

<div class="deploy-stage success">

Build

</div>

<div class="deploy-stage success">

Test

</div>

<div class="deploy-stage active">

Deploy

</div>

<div class="deploy-stage">

Monitor

</div>

<div class="deploy-footer">

<span>

v2.8.1

</span>

<span>

87% Complete

</span>

</div>

</div>

</div>

<!-- ==================================
TEAM CHAT
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Team Chat

</h3>

<button>

Copy

</button>

</div>

<div class="chat-widget">

<div class="message">

<strong>

Sarah

</strong>

<p>

Dashboard update is ready.

</p>

</div>

<div class="message">

<strong>

Alex

</strong>

<p>

Reviewing it now 👍

</p>

</div>

<div class="message">

<strong>

Ryan

</strong>

<p>

Let's deploy today.

</p>

</div>

</div>

</div>

<!-- ==================================
NOTIFICATIONS
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Notifications

</h3>

<button>

Copy

</button>

</div>

<div class="notification-widget">

<div class="notification-item">

🔔 New project assigned

</div>

<div class="notification-item">

✅ Build completed

</div>

<div class="notification-item">

⚡ AI report generated

</div>

<div class="notification-item">

📅 Meeting starts in 15 min

</div>

</div>

</div>

<!-- ==================================
WEATHER
================================== -->

<div class="widget-card">

<div class="widget-header">

<h3>

Weather Widget

</h3>

<button>

Copy

</button>

</div>

<div class="weather-widget">

<div class="weather-top">

☀️

<h2>

28°C

</h2>

</div>

<p>

Sunny • Pune

</p>

<div class="weather-stats">

<span>

Humidity 42%

</span>

<span>

Wind 9 km/h

</span>

</div>

</div>

</div>

<!-- ==================================
NEWSLETTER
================================== -->

<section class="newsletter-section">

<div class="newsletter-card">

<h2>

Get New Widgets Weekly

</h2>

<p>

Receive premium dashboard
widgets, developer tools and
UI components every week.

</p>

<form class="newsletter-form">

<input
type="email"
placeholder="your@email.com">

<button>

Subscribe

</button>

</form>

</div>

</section>

</section>

<!-- ==================================
FOOTER
================================== -->

<footer class="footer">

<div class="footer-container">

<div class="footer-brand">

<h2>

⬡ UIverse

</h2>

<p>

Premium widgets and modern
UI components for developers.

</p>

</div>

<div class="footer-column">

<h3>

Components

</h3>

<ul>

<li><a href="#">Widgets</a></li>
<li><a href="#">Cards</a></li>
<li><a href="#">Forms</a></li>
<li><a href="#">Calendars</a></li>

</ul>

</div>

<div class="footer-column">

<h3>

Resources

</h3>

<ul>

<li><a href="#">Documentation</a></li>
<li><a href="#">Templates</a></li>
<li><a href="#">GitHub</a></li>
<li><a href="#">Support</a></li>

</ul>

</div>

<div class="footer-column">

<h3>

Community

</h3>

<ul>

<li><a href="#">Discord</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">LinkedIn</a></li>
<li><a href="#">Blog</a></li>

</ul>

</div>

</div>

<div class="footer-bottom">

© 2026 UIverse Widgets Collection

</div>

</footer>



</main>`
  })
};
