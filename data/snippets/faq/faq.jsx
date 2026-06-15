import React from 'react';

export default function faq(){
  return (
    <>
      <div className="container">
          <header className="navbar" id="navbar">
            <button type="button" className="menu-toggle" onclick="toggleSidebar()" aria-label="Toggle Menu">
              <i className="fa-solid fa-bars"></i>
            </button>
      
            <div className="logo">UIverse</div>
      
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input type="text" id="searchInput" placeholder="Search components..." onkeydown="handleSearch(event)" />
              <kbd className="search-kbd">⌘K</kbd>
            </div>
      
            <div className="nav-right">
              <button type="button" className="nav-btn outline-nav-btn">
                <i className="fa-solid fa-plus"></i> Add Component
              </button>
              <a href="contributorss.html" className="nav-btn primary-nav-btn">
                Contributors
              </a>
              <button type="button" id="darkModeToggle" className="theme-toggle" title="Toggle Theme" aria-label="Toggle Theme">
                <i className="fa-solid fa-moon"></i>
              </button>
            </div>
          </header>
      
          {/* ================= SIDEBAR ================= */}
          <aside className="sidebar" id="sidebar">
            <div className="sidebar-brand">
              <span className="brand-icon">⬡</span>
              <span className="brand-text">UIverse <span className="brand-badge">V2</span></span>
            </div>
      
                <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="index.html">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="button.html">
                <i className="fa-solid fa-hand-pointer"></i>
                <span>Buttons</span>
              </a>
            </li>
                  <li>
              <a href="dropdown-components.html">
                <i className="fa-solid fa-caret-down"></i>
                <span>Dropdowns</span>
              </a>
            </li>
      <li>
              <a href="navbar.html">
                <i className="fa-solid fa-bars"></i>
                <span>Navbar</span>
              </a>
            </li>
            <li>
              <a href="cards.html">
                <i className="fa-solid fa-table-cells-large"></i>
                <span>Cards</span>
              </a>
            </li>
            <li>
              <a href="flipcards.html">
                <i className="fa-solid fa-clone"></i>
                <span>3D Cards</span>
              </a>
            </li>
            <li>
              <a href="inputs.html">
                <i className="fa-solid fa-keyboard"></i>
                <span>Inputs</span>
              </a>
            </li>
            <li>
              <a href="forms.html">
                <i className="fa-brands fa-wpforms"></i>
                <span>Forms</span>
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="fa-solid fa-award"></i>
                <span>Badges</span>
              </a>
            </li>
            <li>
              <a href="blog.html">
                <i className="fa-solid fa-blog"></i>
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a href="article.html">
                <i className="fa-solid fa-newspaper"></i>
                <span>Articles</span>
              </a>
            </li>
            <li>
              <a href="alerts.html">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <span>Alerts</span>
              </a>
            </li>
            <li>
              <a href="color.html">
                <i className="fa-solid fa-palette"></i>
                <span>Colors</span>
              </a>
            </li>
            <li>
              <a href="charts.html">
                <i className="fa-solid fa-chart-pie"></i>
                <span>Charts</span>
              </a>
            </li>
            <li>
              <a href="dashboard.html">
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="div.html">
                <i className="fa-solid fa-square"></i>
                <span>DIV</span>
              </a>
            </li>
            <li>
              <a href="widgets.html">
                <i className="fa-solid fa-layer-group"></i>
                <span>Widgets</span>
              </a>
            </li>
            <li>
              <a href="search.html">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search Bars</span>
              </a>
            </li>
            <li>
              <a href="hover.html">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>Hover Effects</span>
              </a>
            </li>
            <li>
              <a href="error.html">
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>Error Pages</span>
              </a>
            </li>
            <li>
              <a href="ecommerce.html">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>E-commerce</span>
              </a>
            </li>
            <li>
              <a href="files.html">
                <i className="fa-solid fa-file-arrow-up"></i>
                <span>Drag &amp; Drop</span>
              </a>
            </li>
            <li>
              <a href="hero.html">
                <i className="fa-solid fa-star"></i>
                <span>Hero Sections</span>
              </a>
            </li>
            <li>
              <a href="loaders.html">
                <i className="fa-solid fa-spinner"></i>
                <span>Loaders</span>
              </a>
            </li>
            <li>
              <a href="timeline.html">
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span>Timeline</span>
              </a>
            </li>
            <li>
              <a href="map.html">
                <i className="fa-solid fa-map-location-dot"></i>
                <span>Maps</span>
              </a>
            </li>
            <li>
              <a href="menu.html">
                <i className="fa-solid fa-bars-staggered"></i>
                <span>Menu</span>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <i className="fa-solid fa-tags"></i>
                <span>Pricing</span>
              </a>
            </li>
            <li>
              <a href="subscription.html">
                <i className="fa-solid fa-credit-card"></i>
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="auth.html">
                <i className="fa-solid fa-user-shield"></i>
                <span>Authentication</span>
              </a>
            </li>
              <li>
                <a href="recovery.html">
                  <i className="fa-solid fa-key" aria-hidden="true"></i>
                  <span>Password Recovery</span>
                </a>
              </li>
            <li>
              <a href="section.html">
                <i className="fa-solid fa-rectangle-list"></i>
                <span>Section</span>
              </a>
            </li>
            <li>
              <a href="span.html">
                <i className="fa-solid fa-code"></i>
                <span>Span</span>
              </a>
            </li>
            <li>
              <a href="table.html">
                <i className="fa-solid fa-table"></i>
                <span>Table</span>
              </a>
            </li>
            <li>
              <a href="tabs.html">
                <i className="fa-solid fa-table-columns"></i>
                <span>Tabs</span>
              </a>
            </li>
            <li>
              <a href="terms.html">
                <i className="fa-solid fa-file-contract"></i>
                <span>Terms</span>
              </a>
            </li>
            <li>
              <a href="testimonials.html">
                <i className="fa-solid fa-comments"></i>
                <span>Testimonials</span>
              </a>
            </li>
            <li>
              <a href="toggles.html">
                <i className="fa-solid fa-toggle-on"></i>
                <span>Toggle</span>
              </a>
            </li>
            <li>
              <a href="radiobutton.html">
                <i className="fa-solid fa-circle-dot"></i>
                <span>Radio Buttons</span>
              </a>
            </li>
            <li>
              <a href="checkbox.html">
                <i className="fa-solid fa-square-check"></i>
                <span>Checkboxes</span>
              </a>
            </li>
            <li>
              <a href="notifications-premium.html">
                <i className="fa-solid fa-bell"></i>
                <span>Notifications V2</span>
              </a>
            </li>
            <li>
              <a href="step-indicators.html">
                <i className="fa-solid fa-list-check"></i>
                <span>Steppers</span>
              </a>
            </li>
            <li>
              <a href="progress-premium.html">
                <i className="fa-solid fa-bars-progress"></i>
                <span>Progress V2</span>
              </a>
            </li>
            <li>
              <a href="ratings-premium.html">
                <i className="fa-solid fa-star"></i>
                <span>Ratings V2</span>
              </a>
            </li>
            <li>
              <a href="filters-premium.html">
                <i className="fa-solid fa-sliders"></i>
                <span>Filters V2</span>
              </a>
            </li>
            <li>
              <a href="admin-panel.html">
                <i className="fa-solid fa-gauge-high"></i>
                <span>Admin Panel V2</span>
              </a>
            </li>
      <li>
              <a href="about.html">
                <i className="fa-solid fa-circle-info"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="documentation.html">
                <i className="fa-solid fa-book"></i>
                <span>Documentation</span>
              </a>
            </li>
            <li className="active">
              <a href="faq.html">
                <i className="fa-solid fa-circle-question"></i>
                <span>Faq</span>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <i className="fa-regular fa-envelope"></i>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      
        <div className="sidebar-footer">
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter" title="Twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </aside>
      {/* ================= SIDEBAR BACKDROP ================= */}
      <div className="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleSidebar()"></div>
          {/* MAIN */}
          <div className="main-content">
      
            {/* HERO */}
            <div className="page-hero">
              <div className="page-hero-left">
                <div className="breadcrumb">
                  <a href="index.html">Home</a>
                  <i className="fa-solid fa-chevron-right"></i>
                  <span>FAQ</span>
                </div>
                <h1 className="page-title">Frequently Asked Questions</h1>
                <p className="page-desc">Find answers to common questions about UIverse, components, usage, setup, and contributions.</p>
                <div className="page-meta">
                  <span className="meta-badge"><i className="fa-solid fa-circle-question"></i> FAQ Helpdesk</span>
                  <span className="meta-badge"><i className="fa-solid fa-shield-halved"></i> CSP Secure</span>
                </div>
              </div>
            </div>
      
            {/* FAQ ITEMS */}
            <section className="faq-section" aria-label="Frequently asked questions">
      
              <div className="faq-actions">
                <button type="button" id="expandAllBtn" className="faq-action-btn">Expand all</button>
                <button type="button" id="collapseAllBtn" className="faq-action-btn">Collapse all</button>
              </div>
      
              <div className="faq-item active">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-1" className="faq-question-button" type="button" aria-expanded="true" aria-controls="faq-answer-1">
                      What is UIverse?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-1" className="faq-answer" role="region" aria-labelledby="faq-question-1" aria-hidden="false">
                  <p>
                    UIverse is a modern open-source UI component library built with
                    HTML, CSS, and JavaScript for faster and cleaner frontend
                    development.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-2" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-2">
                      Is UIverse free to use?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-2" className="faq-answer" role="region" aria-labelledby="faq-question-2" aria-hidden="true">
                  <p>
                    Yes, UIverse is completely free and open-source for personal,
                    educational, and commercial projects.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-3" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-3">
                      Do I need any framework?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-3" className="faq-answer" role="region" aria-labelledby="faq-question-3" aria-hidden="true">
                  <p>
                    No frameworks are required. UIverse works perfectly with pure
                    HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-4" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-4">
                      Can I contribute components?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-4" className="faq-answer" role="region" aria-labelledby="faq-question-4" aria-hidden="true">
                  <p>
                    Absolutely! You can contribute components, templates, or bug
                    fixes by following the contribution guidelines in the docs.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-5" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-5">
                      How do I start using UIverse?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-5" className="faq-answer" role="region" aria-labelledby="faq-question-5" aria-hidden="true">
                  <p>
                    Simply include the stylesheet and start using predefined classes
                    like buttons, cards, forms, and layouts in your project.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-6" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-6">
                      Does UIverse support responsive design?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-6" className="faq-answer" role="region" aria-labelledby="faq-question-6" aria-hidden="true">
                  <p>
                    Yes, all UIverse components are built to be responsive and adapt to
                    different screen sizes for mobile, tablet, and desktop.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-7" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-7">
                      Can I customize the components?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-7" className="faq-answer" role="region" aria-labelledby="faq-question-7" aria-hidden="true">
                  <p>
                    Absolutely! You can override styles with your own CSS or extend
                    components to match your project’s theme and branding.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-8" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-8">
                      Is UIverse compatible with frameworks?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-8" className="faq-answer" role="region" aria-labelledby="faq-question-8" aria-hidden="true">
                  <p>
                    Yes, UIverse works seamlessly with frameworks like React, Angular,
                    and Vue, but it also functions perfectly with plain HTML, CSS, and
                    JavaScript.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-9" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-9">
                      Where can I find documentation?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-9" className="faq-answer" role="region" aria-labelledby="faq-question-9" aria-hidden="true">
                  <p>
                    You can access detailed documentation and examples on the official
                    UIverse website or GitHub repository.
                  </p>
                </div>
              </div>
      
              <div className="faq-item">
                <div className="faq-question">
                  <h3>
                    <button id="faq-question-10" className="faq-question-button" type="button" aria-expanded="false" aria-controls="faq-answer-10">
                      Does UIverse provide accessibility support?
                      <i className="fa-solid fa-chevron-down faq-question-icon" aria-hidden="true"></i>
                    </button>
                  </h3>
                </div>
                <div id="faq-answer-10" className="faq-answer" role="region" aria-labelledby="faq-question-10" aria-hidden="true">
                  <p>
                    Yes, components are designed with accessibility in mind, following
                    ARIA guidelines and ensuring usability for all users.
                  </p>
                </div>
              </div>
      
            </section>
      
          </div>
      
        </div>
        {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col brand">
            <h2 className="footer-logo">⬡ UIverse</h2>
            <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
            <div className="socials">
              <a href="https://github.com" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
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
              <li><a href="#">GitHub Repo</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="privacypolicy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col newsletter">
            <h3>Stay Updated</h3>
            <p>Get notified when new components drop.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 UIverse. Made with ❤️ for developers worldwide.</p>
        </div>
      </footer>
      
      
        {/* FAQ TOGGLE SCRIPT */}
        <script>
          const faqItems = document.querySelectorAll('.faq-item');
          const expandAllBtn = document.getElementById('expandAllBtn');
          const collapseAllBtn = document.getElementById('collapseAllBtn');
      
          function setFaqState(item, open) {
            const button = item.querySelector('.faq-question-button');
            const answer = item.querySelector('.faq-answer');
            item.classList.toggle('active', open);
            button.setAttribute('aria-expanded', open);
            answer.setAttribute('aria-hidden', !open);
            if (open) {
              answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
              answer.style.maxHeight = null;
            }
          }
      
          faqItems.forEach(item => {
            const button = item.querySelector('.faq-question-button');
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');
      
            if (!button || !answer) return;
      
            answer.setAttribute('aria-hidden', String(!isActive));
            if (isActive) {
              answer.style.maxHeight = answer.scrollHeight + 'px';
            }
      
            button.addEventListener('click', () => {
              setFaqState(item, !item.classList.contains('active'));
            });
      
            button.addEventListener('keydown', event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setFaqState(item, !item.classList.contains('active'));
              }
            });
          });
      
          expandAllBtn.addEventListener('click', () => {
            faqItems.forEach(item => setFaqState(item, true));
          });
      
          collapseAllBtn.addEventListener('click', () => {
            faqItems.forEach(item => setFaqState(item, false));
          });
        </script>
    </>
  );
}
