# Badges

Component ID: badges

- Path: badges.html
- Version: 0.1.0
- Documentation score: 100/100
- Tags: status, components
- Description: Small status badges and indicators

## Assets

- CSS: badges.css, command-palette.css, css/main.css, css/url-state.css, https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css, style.css
- JS: badges.js, js/bootstrap.js, js/core/utils.js, js/features/accessibility.js, js/features/alerts.js, js/features/code-tools.js, js/features/command-palette.js, js/features/popup.js, js/features/sandbox.js, js/features/scroll.js, js/features/search.js, js/features/sidebar.js, js/features/theme.js, js/features/toast.js, js/features/url-state-integration.js, js/features/url-state.js

## Headings

- H1: My Badges
- H2: Earned Badges
- H3: First PR
- H3: Contributor
- H2: In Progress
- H3: Top Contributor
- H2: ✨ Earned Badges
- H3: First PR

## Usage Snippet

```html
<section class="badges-page">
  <h1><i class="fa-solid fa-trophy"></i> My Badges</h1>

  <h2><i class="fa-solid fa-medal"></i> Earned Badges</h2>
  <div class="badge-container">
    
    <div class="badge">
      <picture><source type="image/avif" srcset="generated-images/badge1/badge1-320.avif 320w, generated-images/badge1/badge1-480.avif 480w, generated-images/badge1/badge1-768.avif 768w, generated-images/badge1/badge1-1024.avif 1024w, generated-images/badge1/badge1-1300.avif 1300w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/badge1/badge1-320.webp 320w, generated-images/badge1/badge1-480.webp 480w, generated-images/badge1/badge1-768.webp 768w, generated-images/badge1/badge1-1024.webp 1024w, generated-images/badge1/badge1-1300.webp 1300w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/badge1/badge1-optimized-1300.jpg" alt="First PR badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="1300" height="1390"></picture>
      <h3>First PR</h3>
      <p>Completed your first pull request</p>
    </div>

    <div class="badge">
       <picture><source type="image/avif" srcset="generated-images/badge2/badge2-212.avif 212w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/badge2/badge2-212.webp 212w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/badge2/badge2-optimized-212.jpg" alt="Contributor badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="212" height="238"></picture>
      <h3>Contributor</h3>
      <p>Contributed to 10 PRs</p>
    </div>

  </div>

  <!-- In Progress -->
  <h2 class="prog-1">In Progress</h2>
  <div class="badge-container">

    <div class="badge progress">
      <picture><source type="image/avif" srcset="generated-images/time/time-320.avif 320w, generated-images/time/time-480.avif 480w, generated-images/time/time-512.avif 512w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/time/time-320.webp 320w, generated-images/time/time-480.webp 480w, generated-images/time/time-512.webp 512w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/time/time-optimized-512.png" alt="Top Contributor badge with progress indicator" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="512" height="512"></picture>
      <h3>Top Contributor</h3>
      <p>14/50 PRs completed</p>
      <progress value="14" max="50"></progress>
    </div>

  </div>

  <!-- Earned Badges -->
<h2>✨ Earned Badges</h2>
<div class="badge-container">

  <div class="badge gold" data-collectible="badge-first-pr">
    <div class="badge-icon">
      <i class="fa-solid fa-code-pull-request"></i>
    </div>
    <h3>First PR</h3>
    <p>Completed your first pull request</p>
    <span class="badge-tag">Unlocked</span>
    <button class="collect-btn" data-action="add" aria-label="Add to collection">👉 Save</button>
  </div>

  <div class="badge blue">
    <div class="badge-icon">
      <i class="fa-solid fa-users"></i>
    </div>
    <h3>Contributor</h3>
    <p>Contributed to 10 PRs</p>
    <span class="badge-tag">Level 1</span>
  </div>

  <div class="badge purple">
    <div class="badge-icon">
      <i class="fa-solid fa-fire"></i>
    </div>
    <h3>Streak Master</h3>
    <p>Maintained a 30-day coding streak</p>
    <span class="badge-tag">Hot</span>
  </div>

  <div class="badge green">
    <div class="badge-icon">
      <i class="fa-solid fa-bug-slash"></i>
    </div>
    <h3>Bug Hunter</h3>
    <p>Resolved 25 reported issues</p>
    <span class="badge-tag">Expert</span>
  </div>

  <div class="badge orange">
    <div class="badge-icon">
      <i class="fa-solid fa-medal"></i>
    </div>
    <h3>Open Source Hero</h3>
    <p>Made impactful open-source contributions</p>
    <span class="badge-tag">Popular</span>
  </div>

</div>


<!-- In Progress -->
<h2 class="prog-1">🚀 In Progress</h2>
<div class="badge-container">

  <div class="badge progress">
    <div class="badge-icon">
      <i class="fa-solid fa-chart-line"></i>
    </div>
    <h3>Top Contributor</h3>
    <p>14/50 PRs completed</p>
    <progress value="14" max="50"></progress>
  </div>

  <div class="badge progress">
    <div class="badge-icon">
      <i class="fa-solid fa-terminal"></i>
    </div>
    <h3>Code Wizard</h3>
    <p>40/100 coding challenges solved</p>
    <progress value="40" max="100"></progress>
  </div>

</div>


<!-- Locked Badges -->
<h2 class="prog-2">🔒 Locked Badges</h2>
<div class="badge-container">

  <div class="badge locked">
    <div class="badge-icon">
      <i class="fa-solid fa-crown"></i>
    </div>
    <h3>Elite Hacker</h3>
    <p>Complete 100 PRs</p>
  </div>

  <div class="badge locked">
    <div class="badge-icon">
      <i class="fa-solid fa-rocket"></i>
    </div>
    <h3>Launch Legend</h3>
    <p>Deploy 50 successful projects</p>
  </div>

  <div class="badge locked">
    <div class="badge-icon">
      <i class="fa-solid fa-shield-halved"></i>
    </div>
    <h3>Security Master</h3>
    <p>Fix 100 security vulnerabilities</p>
  </div>

</div>

  <!-- Locked Badges -->
  <h2 class="prog-2">Locked Badges</h2>
  <div class="badge-container">

    <div class="badge locked">
      <picture><source type="image/avif" srcset="generated-images/lock/lock-320.avif 320w, generated-images/lock/lock-480.avif 480w, generated-images/lock/lock-612.avif 612w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/lock/lock-320.webp 320w, generated-images/lock/lock-480.webp 480w, generated-images/lock/lock-612.webp 612w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/lock/lock-optimized-612.jpg" alt="Elite Hacker locked badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="612" height="612"></picture>
      <h3>Elite Hacker</h3>
      <p>Complete 100 PRs</p>
    </div>

  </div>

</section>
```
