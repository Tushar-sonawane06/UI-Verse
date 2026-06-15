import React from 'react';

export default function error(){
  return (
    <>
      <main className="main-home">
      
        <header className="page-header">
          <h1>Error Components</h1>
          <p>Responsive modern error layouts, status screens, and application fallback pages.</p>
        </header>
      
        {/* SEARCH + SORT TOOLBAR */}
        <div className="toolbar">
          <div className="toolbar-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="componentSearch" placeholder="Filter error components..." autocomplete="off" />
          </div>
      
          <div className="sort-dropdown-wrapper" id="sortWrapper">
            <button className="sort-trigger" id="sortTrigger" onclick="toggleSortMenu()">
              <i className="fa-solid fa-arrow-up-arrow-down"></i>
              <span id="sortLabel">Order</span>
              <i className="fa-solid fa-chevron-down sort-chevron" id="sortChevron"></i>
            </button>
            <div className="sort-menu" id="sortMenu">
              <label className="sort-option">
                <span>Default</span>
                <input type="radio" name="sort" value="default" checked onchange="sortCards('default')" />
                <span className="radio-dot"></span>
              </label>
              <label className="sort-option">
                <span>A → Z</span>
                <input type="radio" name="sort" value="az" onchange="sortCards('az')" />
                <span className="radio-dot"></span>
              </label>
              <label className="sort-option">
                <span>Z → A</span>
                <input type="radio" name="sort" value="za" onchange="sortCards('za')" />
                <span className="radio-dot"></span>
              </label>
            </div>
          </div>
      
          <span className="results-count" id="resultsCount">18 components</span>
        </div>
      
        <section className="error-grid">
      
          {/* 1. 404 ERROR PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>404 Error Page</h2>
              <p>A classic "Page Not Found" layout with a floating animation.</p>
            </div>
            <div className="component-preview" id="preview-1">
              <div className="error-screen err-404">
                <div className="error-code">404</div>
                <div className="error-title">Page Not Found</div>
                <div className="error-desc">The page you are looking for doesn't exist or has been moved.</div>
                <button className="error-btn">Go Back Home</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-1">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 2. 500 SERVER ERROR PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>500 Server Error</h2>
              <p>Internal server error screen with a stylized offset shadow.</p>
            </div>
            <div className="component-preview" id="preview-2">
              <div className="error-screen err-500">
                <div className="error-code">500</div>
                <div className="error-title">Internal Server Error</div>
                <div className="error-desc">Oops, something went wrong on our end. We are working to fix it.</div>
                <button className="error-btn">Try Again</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-2">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 3. MAINTENANCE PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>Maintenance Page</h2>
              <p>Scheduled maintenance screen with an animated progress bar.</p>
            </div>
            <div className="component-preview" id="preview-3">
              <div className="error-screen err-maint">
                <div className="icon-wrap"><i className="fa-solid fa-gear"></i></div>
                <div className="error-title">Under Maintenance</div>
                <div className="error-desc">We're upgrading our systems. Be right back!</div>
                <div className="progress-bar"><div className="progress-fill"></div></div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-3">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 4. ACCESS DENIED PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>Access Denied</h2>
              <p>A 403 Forbidden page for restricted areas.</p>
            </div>
            <div className="component-preview" id="preview-4">
              <div className="error-screen err-403">
                <div className="icon-wrap"><i className="fa-solid fa-lock"></i></div>
                <div className="error-code" style="font-size:32px;">403</div>
                <div className="error-title">Access Denied</div>
                <div className="error-desc">You do not have permission to view this directory or page.</div>
                <button className="error-btn">Request Access</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-4">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 5. NETWORK ERROR SCREEN */}
          <div className="error-card">
            <div className="error-info">
              <h2>Network Error</h2>
              <p>A connection failure state for offline applications.</p>
            </div>
            <div className="component-preview" id="preview-5">
              <div className="error-screen err-net">
                <div className="icon-wrap"><i className="fa-solid fa-wifi"></i></div>
                <div className="error-title">No Connection</div>
                <div className="error-desc">Please check your internet connection and try again.</div>
                <button className="error-btn">Retry Connection</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-5">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 6. SESSION EXPIRED SCREEN */}
          <div className="error-card">
            <div className="error-info">
              <h2>Session Expired Screen</h2>
              <p>A secure checkout or session expiry notification layout with an hourglass indicator.</p>
            </div>
            <div className="component-preview" id="preview-6">
              <div className="error-screen err-session">
                <div className="icon-wrap"><i className="fa-solid fa-hourglass-end"></i></div>
                <div className="error-title">Session Expired</div>
                <div className="error-desc">For your security, your session has timed out due to inactivity.</div>
                <button className="error-btn">Log In Again</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-6">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 7. PAYMENT FAILED ERROR PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>Payment Failed Page</h2>
              <p>Red-accented transaction failure page with glowing warning indicators and dual action CTA.</p>
            </div>
            <div className="component-preview" id="preview-7">
              <div className="error-screen err-payment">
                <div className="icon-wrap"><i className="fa-solid fa-circle-exclamation"></i></div>
                <div className="error-title">Payment Failed</div>
                <div className="error-desc">Your transaction could not be processed. Please check your card details or try again.</div>
                <div className="btn-group">
                  <button className="error-btn btn-retry">Retry Payment</button>
                  <button className="error-btn btn-cancel">Cancel</button>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-7">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 8. EMPTY SEARCH RESULT PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>Empty Search Result</h2>
              <p>A warm empty-state screen with search suggestions and an interactive reset option.</p>
            </div>
            <div className="component-preview" id="preview-8">
              <div className="error-screen err-empty-search">
                <div className="icon-wrap"><i className="fa-solid fa-magnifying-glass"></i></div>
                <div className="error-title">No Results Found</div>
                <div className="error-desc">We couldn't find any matches. Try using more general keywords or checking spelling.</div>
                <button className="error-btn">Clear Search</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-8">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 9. UNAUTHORIZED ACCESS SCREEN */}
          <div className="error-card">
            <div className="error-info">
              <h2>Unauthorized Access</h2>
              <p>Futuristic cyber-security restriction page with gold-shield warning tones.</p>
            </div>
            <div className="component-preview" id="preview-9">
              <div className="error-screen err-unauthorized">
                <div className="icon-wrap"><i className="fa-solid fa-shield-halved"></i></div>
                <div className="error-title">Access Restricted</div>
                <div className="error-desc">This directory requires elevated credentials. Please sign in with an admin account.</div>
                <button className="error-btn">Request Access</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-9">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 10. OFFLINE / NO INTERNET PAGE */}
          <div className="error-card">
            <div className="error-info">
              <h2>Offline State Screen</h2>
              <p>Playful, modern disconnect layout featuring pulsing network cloud status indicators.</p>
            </div>
            <div className="component-preview" id="preview-10">
              <div className="error-screen err-offline">
                <div className="icon-wrap"><i className="fa-solid fa-cloud-bolt"></i></div>
                <div className="error-title">You're Offline</div>
                <div className="error-desc">It looks like you've lost connection. Check your local connection or try reloading.</div>
                <button className="error-btn">Retry Connection</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-10">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 11. 429 TOO MANY REQUESTS */}
          <div className="error-card">
            <div className="error-info">
              <h2>429 Too Many Requests</h2>
              <p>Rate-limit screen with throttle animation and cooldown badges.</p>
            </div>
            <div className="component-preview" id="preview-11">
              <div className="error-screen err-429">
                <div className="error-icon-code">
                  <div className="icon-wrap"><i className="fa-solid fa-gauge-high"></i></div>
                  <div className="error-code" style="font-size:48px;">429</div>
                </div>
                <div className="error-title">Too Many Requests</div>
                <div className="rate-badges">
                  <span className="badge active">Rate Limited</span>
                  <span className="badge">Cooldown Active</span>
                </div>
                <div className="error-desc">You've sent too many requests in a short time. Please wait a moment before trying again.</div>
                <button className="error-btn"><i className="fa-solid fa-rotate-right"></i> Retry Later</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-11">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 12. LOCATION ACCESS DENIED */}
          <div className="error-card">
            <div className="error-info">
              <h2>Location Access Denied</h2>
              <p>Geo-permission blocked state with a redacted coordinates display.</p>
            </div>
            <div className="component-preview" id="preview-12">
              <div className="error-screen err-location">
                <div className="icon-wrap"><i className="fa-solid fa-location-dot"></i></div>
                <div className="error-title">Location Access Denied</div>
                <div className="coords"><span>LAT</span> ██.████  <span>LNG</span> ██.████</div>
                <div className="error-desc">Your browser has blocked location access. Enable permissions to use location-based features.</div>
                <button className="error-btn">Enable Location</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-12">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 13. 410 LINK / TOKEN EXPIRED */}
          <div className="error-card">
            <div className="error-info">
              <h2>Link / Token Expired</h2>
              <p>Amber-toned expiry page with a decaying token visualizer and flicker animation.</p>
            </div>
            <div className="component-preview" id="preview-13">
              <div className="error-screen err-410">
                <div className="error-icon-code">
                  <div className="icon-wrap"><i className="fa-solid fa-link-slash"></i></div>
                  <div className="error-code" style="font-size:48px; color:#92400e;">410</div>
                </div>
                <div className="error-title">Link Expired</div>
                <div className="token-row">
                  <div className="token-seg"></div>
                  <div className="token-seg"></div>
                  <div className="token-seg gone"></div>
                  <div className="token-seg"></div>
                </div>
                <div className="token-label">TOKEN EXPIRED</div>
                <div className="error-desc">This link is no longer valid. It may have expired or already been used.</div>
                <button className="error-btn">Request New Link</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-13">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
      
          {/* 14. ACCOUNT SUSPENDED */}
          <div className="error-card">
            <div className="error-info">
              <h2>Account Suspended</h2>
              <p>Suspension notice page with red-bar indicator and support contact option.</p>
            </div>
            <div className="component-preview" id="preview-14">
              <div className="error-screen err-suspended">
                <div className="icon-wrap"><i className="fa-solid fa-ban"></i></div>
                <div className="error-title">Account Suspended</div>
                <div className="suspended-bar">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="error-desc">Your account has been suspended due to a policy violation. Contact support to appeal.</div>
                <button className="error-btn">Contact Support</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-14">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 15. STORAGE FULL */}
          <div className="error-card">
            <div className="error-info">
              <h2>Storage Full</h2>
              <p>Disk capacity exceeded screen with a glowing fill-bar and upgrade CTA.</p>
            </div>
            <div className="component-preview" id="preview-15">
              <div className="error-screen err-storage">
                <div className="icon-wrap"><i className="fa-solid fa-hard-drive"></i></div>
                <div className="error-title">Storage Full</div>
                <div className="storage-meter">
                  <div className="storage-fill"></div>
                  <span className="storage-pct">100%</span>
                </div>
                <div className="error-desc">You've used all available storage. Delete files or upgrade your plan to continue.</div>
                <button className="error-btn">Upgrade Plan</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-15">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 16. REGION BLOCKED */}
          <div className="error-card">
            <div className="error-info">
              <h2>Region Blocked</h2>
              <p>Geo-restriction error with animated globe and country-code badge.</p>
            </div>
            <div className="component-preview" id="preview-16">
              <div className="error-screen err-region">
                <div className="icon-wrap"><i className="fa-solid fa-globe"></i></div>
                <div className="region-badge">
                  <span className="region-code">IN</span>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="error-title">Content Not Available</div>
                <div className="error-desc">This service is not available in your region due to licensing restrictions.</div>
                <button className="error-btn">Use a VPN</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-16">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 17. UNDER CONSTRUCTION */}
          <div className="error-card">
            <div className="error-info">
              <h2>Under Construction</h2>
              <p>Fun coming-soon state with blinking cursor and countdown placeholder.</p>
            </div>
            <div className="component-preview" id="preview-17">
              <div className="error-screen err-construction">
                <div className="icon-wrap"><i className="fa-solid fa-helmet-safety"></i></div>
                <div className="error-title">We're Building Something<span className="blink-cursor">|</span></div>
                <div className="construction-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="error-desc">This page is under construction. Check back soon — something great is on the way.</div>
                <button className="error-btn">Notify Me</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-17">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 18. UPLOAD FAILED */}
          <div className="error-card">
            <div className="error-info">
              <h2>Upload Failed</h2>
              <p>File upload failure state with a broken upload icon and retry controls.</p>
            </div>
            <div className="component-preview" id="preview-18">
              <div className="error-screen err-upload">
                <div className="icon-wrap"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                <div className="upload-x"><i className="fa-solid fa-xmark"></i></div>
                <div className="error-title">Upload Failed</div>
                <div className="upload-meta">
                  <span className="upload-tag">document.pdf</span>
                  <span className="upload-tag err">4.2 MB · Timed out</span>
                </div>
                <div className="error-desc">Your file could not be uploaded. Check your connection and file size, then try again.</div>
                <button className="error-btn"><i className="fa-solid fa-rotate-right"></i> Retry Upload</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-18">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
        </section>
      
        {/* ================= FOOTER ================= */}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fa-solid fa-hexagon-nodes"></i>
                <span>UIverse</span>
              </div>
              <p>Build modern, reusable UI components with clean HTML, CSS, and JavaScript.</p>
              <div className="footer-socials">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                <li><a href="button.html">Buttons</a></li>
                <li><a href="navbar.html">Navbars</a></li>
                <li><a href="cards.html">Cards</a></li>
                <li><a href="inputs.html">Inputs</a></li>
                <li><a href="forms.html">Forms</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">GitHub Repo</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
      
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">License</a></li>
              </ul>
            </div>
      
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get notified when new components drop.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="your@email.com" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 UIverse. Made with <i className="fa-solid fa-heart heart"></i> for developers worldwide.</p>
          </div>
        </footer>
      
      </main>
    </>
  );
}
