<template>
<i class="fa-solid fa-bars menu-toggle" id="menuToggle"></i>
    <aside class="sidebar">
    <h2>UIverse</h2>
    <ul>
      <li><a href="profile.html"><i class="fa-regular fa-circle-user"></i><p>Profile</p></a></li>
      <li><a href="index.html"><i class="fa-solid fa-house"></i><p>Home</p></a></li>
      <li><a href="button.html"><i class="fa-solid fa-mobile-button"></i><p>Butttons</p></a></li>
      <li><a href="navbar.html"><i class="fa-solid fa-bars"></i><p>Navbar</p></a></li>
      <li><a href="contact.html"><i class="fa-regular fa-user"></i><p>Contact Us</p></a></li>
      <li><a href="forms.html"><i class="fa-brands fa-wpforms"></i><p>Forms</p></a></li>
      <li><a href="badges.html"><i class="fa-solid fa-award"></i><p>Badges</p></a></li>
      <li><a href="about.html"><i class="fa-solid fa-mobile-button"></i><p>About</p></a></li>
      <li><a href="settings.html"><i class="fa-solid fa-gear"></i><p>Settings</p></a></li>
    </ul>
  </aside>

<section class="badges-page">
  <h1>🏆 My Badges</h1>

  <h2>Earned Badges</h2>
  <div class="badge-container">
    
    <div class="badge">
      <img src="badge1.jpg" alt="First PR badge icon">
      <h3>First PR</h3>
      <p>Completed your first pull request</p>
    </div>

    <div class="badge">
       <img src="badge2.jpg" alt="Contributor badge icon">
      <h3>Contributor</h3>
      <p>Contributed to 10 PRs</p>
    </div>

  </div>

  <!-- In Progress -->
  <h2 class="prog-1">In Progress</h2>
  <div class="badge-container">

    <div class="badge progress">
      <img src="time.png" alt="Top Contributor badge with progress indicator">
      <h3>Top Contributor</h3>
      <p>14/50 PRs completed</p>
      <progress value="14" max="50"></progress>
    </div>

  </div>

  <!-- Earned Badges -->
<h2>✨ Earned Badges</h2>
<div class="badge-container">

  <div class="badge gold">
    <div class="badge-icon">
      <i class="fa-solid fa-code-pull-request"></i>
    </div>
    <h3>First PR</h3>
    <p>Completed your first pull request</p>
    <span class="badge-tag">Unlocked</span>
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
      <img src="lock.jpg" alt="Elite Hacker locked badge icon">
      <h3>Elite Hacker</h3>
      <p>Complete 100 PRs</p>
    </div>

  </div>

</section>

  <!-- UIverse Modular Scripts -->
  <script src="js/core/utils.js"></script>
  <script src="js/features/toast.js"></script>
  <script src="js/features/popup.js"></script>
  <script src="js/features/code-tools.js"></script>
  <script src="js/features/sidebar.js"></script>
  <script src="js/features/search.js"></script>
  <script src="js/features/theme.js"></script>
  <script src="js/features/scroll.js"></script>
  <script src="js/features/alerts.js"></script>
  <script src="js/features/sandbox.js"></script>
  <script src="js/features/accessibility.js"></script>
<script src="js/bootstrap.js"></script>

  <!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="footer-container">

    <div class="footer-col brand">
      <h2 class="footer-logo">⬡ UIverse</h2>
      <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
      <div class="socials">
        <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
        <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="#" title="Twitter"><i class="fab fa-x-twitter"></i></a>
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
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Contribute</a></li>
        <li><a href="#">GitHub Repo</a></li>
        <li><a href="#">Community</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Legal</h3>
      <ul>
        <li><a href="privacypolicy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="#">License</a></li>
      </ul>
    </div>

    <div class="footer-col newsletter">
      <h3>Stay Updated</h3>
      <p>Get notified when new components drop.</p>
      <div class="newsletter-form">
        <input type="email" placeholder="your@email.com" />
        <button type="button" onclick="subscribe()">Subscribe</button>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
  </div>
</footer>

<!-- ================= COMMAND PALETTE ================= -->
<div id="commandPaletteOverlay" class="command-palette-overlay">
  <div class="command-palette-container">
    <div class="command-palette-input-wrapper">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input 
        type="text" 
        id="commandPaletteInput" 
        class="command-palette-input" 
        placeholder="Search components... (Cmd+K)"
        autocomplete="off"
      />
    </div>
    <ul id="commandPaletteResults" class="command-palette-results"></ul>
    <div class="command-palette-footer">
      <div class="command-palette-footer-item">
        <span class="command-palette-footer-kbd">↑↓</span>
        <span>Navigate</span>
      </div>
      <div class="command-palette-footer-item">
        <span class="command-palette-footer-kbd">⏎</span>
        <span>Select</span>
      </div>
      <div class="command-palette-footer-item">
        <span class="command-palette-footer-kbd">Esc</span>
        <span>Close</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default { name: 'Badges' }
</script>
