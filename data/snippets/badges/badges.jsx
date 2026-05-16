import React from 'react';

export default function badges(){
  return (
    <>
      <i className="fa-solid fa-bars menu-toggle" id="menuToggle"></i>
          <aside className="sidebar">
          <h2>UIverse</h2>
          <ul>
            <li><a href="profile.html"><i className="fa-regular fa-circle-user"></i><p>Profile</p></a></li>
            <li><a href="index.html"><i className="fa-solid fa-house"></i><p>Home</p></a></li>
            <li><a href="button.html"><i className="fa-solid fa-mobile-button"></i><p>Butttons</p></a></li>
            <li><a href="navbar.html"><i className="fa-solid fa-bars"></i><p>Navbar</p></a></li>
            <li><a href="contact.html"><i className="fa-regular fa-user"></i><p>Contact Us</p></a></li>
            <li><a href="forms.html"><i className="fa-brands fa-wpforms"></i><p>Forms</p></a></li>
            <li><a href="badges.html"><i className="fa-solid fa-award"></i><p>Badges</p></a></li>
            <li><a href="about.html"><i className="fa-solid fa-mobile-button"></i><p>About</p></a></li>
            <li><a href="settings.html"><i className="fa-solid fa-gear"></i><p>Settings</p></a></li>
          </ul>
        </aside>
      
      <section className="badges-page">
        <h1>🏆 My Badges</h1>
      
        <h2>Earned Badges</h2>
        <div className="badge-container">
          
          <div className="badge">
            <img src="badge1.jpg" alt="First PR badge icon" />
            <h3>First PR</h3>
            <p>Completed your first pull request</p>
          </div>
      
          <div className="badge">
             <img src="badge2.jpg" alt="Contributor badge icon" />
            <h3>Contributor</h3>
            <p>Contributed to 10 PRs</p>
          </div>
      
        </div>
      
        {/* In Progress */}
        <h2 className="prog-1">In Progress</h2>
        <div className="badge-container">
      
          <div className="badge progress">
            <img src="time.png" alt="Top Contributor badge with progress indicator" />
            <h3>Top Contributor</h3>
            <p>14/50 PRs completed</p>
            <progress value="14" max="50"></progress>
          </div>
      
        </div>
      
        {/* Earned Badges */}
      <h2>✨ Earned Badges</h2>
      <div className="badge-container">
      
        <div className="badge gold">
          <div className="badge-icon">
            <i className="fa-solid fa-code-pull-request"></i>
          </div>
          <h3>First PR</h3>
          <p>Completed your first pull request</p>
          <span className="badge-tag">Unlocked</span>
        </div>
      
        <div className="badge blue">
          <div className="badge-icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <h3>Contributor</h3>
          <p>Contributed to 10 PRs</p>
          <span className="badge-tag">Level 1</span>
        </div>
      
        <div className="badge purple">
          <div className="badge-icon">
            <i className="fa-solid fa-fire"></i>
          </div>
          <h3>Streak Master</h3>
          <p>Maintained a 30-day coding streak</p>
          <span className="badge-tag">Hot</span>
        </div>
      
        <div className="badge green">
          <div className="badge-icon">
            <i className="fa-solid fa-bug-slash"></i>
          </div>
          <h3>Bug Hunter</h3>
          <p>Resolved 25 reported issues</p>
          <span className="badge-tag">Expert</span>
        </div>
      
        <div className="badge orange">
          <div className="badge-icon">
            <i className="fa-solid fa-medal"></i>
          </div>
          <h3>Open Source Hero</h3>
          <p>Made impactful open-source contributions</p>
          <span className="badge-tag">Popular</span>
        </div>
      
      </div>
      
      
      {/* In Progress */}
      <h2 className="prog-1">🚀 In Progress</h2>
      <div className="badge-container">
      
        <div className="badge progress">
          <div className="badge-icon">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h3>Top Contributor</h3>
          <p>14/50 PRs completed</p>
          <progress value="14" max="50"></progress>
        </div>
      
        <div className="badge progress">
          <div className="badge-icon">
            <i className="fa-solid fa-terminal"></i>
          </div>
          <h3>Code Wizard</h3>
          <p>40/100 coding challenges solved</p>
          <progress value="40" max="100"></progress>
        </div>
      
      </div>
      
      
      {/* Locked Badges */}
      <h2 className="prog-2">🔒 Locked Badges</h2>
      <div className="badge-container">
      
        <div className="badge locked">
          <div className="badge-icon">
            <i className="fa-solid fa-crown"></i>
          </div>
          <h3>Elite Hacker</h3>
          <p>Complete 100 PRs</p>
        </div>
      
        <div className="badge locked">
          <div className="badge-icon">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <h3>Launch Legend</h3>
          <p>Deploy 50 successful projects</p>
        </div>
      
        <div className="badge locked">
          <div className="badge-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3>Security Master</h3>
          <p>Fix 100 security vulnerabilities</p>
        </div>
      
      </div>
      
        {/* Locked Badges */}
        <h2 className="prog-2">Locked Badges</h2>
        <div className="badge-container">
      
          <div className="badge locked">
            <img src="lock.jpg" alt="Elite Hacker locked badge icon" />
            <h3>Elite Hacker</h3>
            <p>Complete 100 PRs</p>
          </div>
      
        </div>
      
      </section>
      
        {/* UIverse Modular Scripts */}
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
      
        {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
      
          <div className="footer-col brand">
            <h2 className="footer-logo">⬡ UIverse</h2>
            <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
            <div className="socials">
              <a href="#" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" title="Twitter"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>
      
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><a href="button.html">Buttons</a></li>
              <li><a href="navbar.html">Navbars</a></li>
              <li><a href="cards.html">Cards</a></li>
              <li><a href="inputs.html">Inputs</a></li>
              <li><a href="forms.html">Forms</a></li>
            </ul>
          </div>
      
          <div className="footer-col">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">GitHub Repo</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
      
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="privacypolicy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms of Service</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </div>
      
          <div className="footer-col newsletter">
            <h3>Stay Updated</h3>
            <p>Get notified when new components drop.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button type="button" onclick="subscribe()">Subscribe</button>
            </div>
          </div>
      
        </div>
      
        <div className="footer-bottom">
          <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
        </div>
      </footer>
      
      {/* ================= COMMAND PALETTE ================= */}
      <div id="commandPaletteOverlay" className="command-palette-overlay">
        <div className="command-palette-container">
          <div className="command-palette-input-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
              type="text" 
              id="commandPaletteInput" 
              className="command-palette-input" 
              placeholder="Search components... (Cmd+K)"
              autocomplete="off"
            />
          </div>
          <ul id="commandPaletteResults" className="command-palette-results"></ul>
          <div className="command-palette-footer">
            <div className="command-palette-footer-item">
              <span className="command-palette-footer-kbd">↑↓</span>
              <span>Navigate</span>
            </div>
            <div className="command-palette-footer-item">
              <span className="command-palette-footer-kbd">⏎</span>
              <span>Select</span>
            </div>
            <div className="command-palette-footer-item">
              <span className="command-palette-footer-kbd">Esc</span>
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
