import React from 'react';

export default function menu(){
  return (
    <>
      <main className="main-home">
          <section className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">Navigation Components</span>
              <h1>Modern <span>Menus</span></h1>
              <p>Explore premium menu components including dropdowns, sidebars, glass navbars, dock menus, and command palettes crafted for modern interfaces.</p>
              <div className="hero-actions">
                <button className="primary-btn">Browse Menus</button>
                <button className="outline-btn">View Docs</button>
              </div>
            </div>
            <div className="hero-preview">
              <div className="floating-menu">
                <a href="#"><i className="fa-solid fa-house"></i> Home</a>
                <a href="#"><i className="fa-solid fa-layer-group"></i> Components</a>
                <a href="#"><i className="fa-solid fa-gear"></i> Settings</a>
              </div>
            </div>
          </section>
      
          <section className="menu-grid">
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Dropdown Menu</span><span className="card-tag purple">Dropdown</span></div>
              <div className="card-preview">
                <div className="dropdown-demo">
                  <button className="dropdown-btn">Options <i className="fa-solid fa-angle-down"></i></button>
                  <div className="dropdown-content"><a href="#">Profile</a><a href="#">Settings</a><a href="#">Logout</a></div>
                </div>
              </div>
              <p>Compact action menu for profile, settings, and account flows.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Mini Sidebar</span><span className="card-tag blue">Sidebar</span></div>
              <div className="card-preview dark">
                <div className="mini-sidebar">
                  <a href="#"><i className="fa-solid fa-house"></i></a>
                  <a href="#"><i className="fa-solid fa-box"></i></a>
                  <a href="#"><i className="fa-solid fa-envelope"></i></a>
                  <a href="#"><i className="fa-solid fa-gear"></i></a>
                </div>
              </div>
              <p>Minimal vertical navigation for compact dashboards.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Glass Navbar</span><span className="card-tag pink">Navigation</span></div>
              <div className="card-preview">
                <div className="glass-navbar"><strong>UIverse</strong><div><a href="#">Home</a><a href="#">Docs</a><a href="#">Pricing</a></div></div>
              </div>
              <p>Frosted horizontal navigation with clean spacing and depth.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Hamburger Menu</span><span className="card-tag yellow">Mobile</span></div>
              <div className="card-preview dark"><div className="hamburger"><span></span><span></span><span></span></div></div>
              <p>Simple mobile trigger with strong silhouette and rhythm.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Dock Menu</span><span className="card-tag purple">Dock</span></div>
              <div className="card-preview"><div className="dock-menu"><i className="fa-solid fa-house"></i><i className="fa-solid fa-bell"></i><i className="fa-solid fa-user"></i></div></div>
              <p>Floating icon dock for fast-access product actions.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Command Menu</span><span className="card-tag blue">Search</span></div>
              <div className="card-preview dark"><div className="command-menu"><i className="fa-solid fa-magnifying-glass"></i><input placeholder="Search commands..." /></div></div>
              <p>Keyboard-first command surface for power users.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Floating Bubble Menu</span><span className="card-tag purple">Interactive</span></div>
              <div className="card-preview">
                <div className="bubble-menu-container">
                  <button className="bubble-trigger"><i className="fa-solid fa-plus"></i></button>
                  <div className="bubble-items">
                    <a href="#" className="bubble-item"><i className="fa-solid fa-pen"></i></a>
                    <a href="#" className="bubble-item"><i className="fa-solid fa-image"></i></a>
                    <a href="#" className="bubble-item"><i className="fa-solid fa-link"></i></a>
                  </div>
                </div>
              </div>
              <p>A floating action button that expands into a bubble menu on hover.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Searchable Command</span><span className="card-tag blue">Keyboard</span></div>
              <div className="card-preview dark">
                <button className="open-command-btn">Open Command Menu <kbd>⌘K</kbd></button>
                
                <div className="command-palette-overlay" id="cmdPalette">
                  <div className="command-palette-modal">
                    <div className="cmd-search">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input type="text" id="cmdInput" placeholder="Type a command or search..." autofocus />
                    </div>
                    <div className="cmd-results">
                      <div className="cmd-group">Suggestions</div>
                      <a href="#" className="cmd-item"><i className="fa-regular fa-file"></i> Create New File</a>
                      <a href="#" className="cmd-item"><i className="fa-solid fa-user-plus"></i> Invite Team Member</a>
                      <a href="#" className="cmd-item"><i className="fa-solid fa-gear"></i> Open Settings</a>
                    </div>
                  </div>
                </div>
              </div>
              <p>Interactive command palette. Press CMD+K to trigger, searchable with keyboard navigation.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Notification Dropdown</span><span className="card-tag yellow">Alerts</span></div>
              <div className="card-preview">
                <div className="notification-dropdown">
                  <button className="notify-btn">
                    <i className="fa-regular fa-bell"></i>
                    <span className="notify-badge">3</span>
                  </button>
                  <div className="notify-content">
                    <div className="notify-header">Notifications <span>Mark all read</span></div>
                    <div className="notify-list">
                      <a href="#" className="notify-item unread">
                        <div className="notify-icon success"><i className="fa-solid fa-check"></i></div>
                        <div className="notify-text"><strong>Deploy Successful</strong><p>Your app is now live.</p></div>
                      </a>
                      <a href="#" className="notify-item">
                        <div className="notify-icon warning"><i className="fa-solid fa-triangle-exclamation"></i></div>
                        <div className="notify-text"><strong>Storage Warning</strong><p>You are at 90% capacity.</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>Feature-rich notification center with unread states and custom icons.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Profile Avatar Menu</span><span className="card-tag pink">Account</span></div>
              <div className="card-preview">
                <div className="profile-dropdown">
                  <button className="profile-btn">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
                  </button>
                  <div className="profile-content">
                    <div className="profile-header">
                      <strong>Felix Dev</strong>
                      <p>felix@uiverse.com</p>
                    </div>
                    <hr />
                    <a href="#"><i className="fa-regular fa-user"></i> My Profile</a>
                    <a href="#"><i className="fa-solid fa-sliders"></i> Preferences</a>
                    <hr />
                    <a href="#" className="logout-link"><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</a>
                  </div>
                </div>
              </div>
              <p>Detailed profile menu with user info, actions, and custom styling.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Radial Navigation</span><span className="card-tag purple">Radial</span></div>
              <div className="card-preview">
                <div className="radial-menu">
                  <button className="radial-trigger"><i className="fa-solid fa-compass"></i></button>
                  <div className="radial-items">
                    <a href="#" className="radial-item"><i className="fa-solid fa-house"></i></a>
                    <a href="#" className="radial-item"><i className="fa-solid fa-user"></i></a>
                    <a href="#" className="radial-item"><i className="fa-solid fa-envelope"></i></a>
                    <a href="#" className="radial-item"><i className="fa-solid fa-gear"></i></a>
                    <a href="#" className="radial-item"><i className="fa-solid fa-bell"></i></a>
                  </div>
                </div>
              </div>
              <p>A circular menu that expands options outwards radially on trigger hover.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Segmented Glider</span><span className="card-tag blue">Navigation</span></div>
              <div className="card-preview">
                <div className="segmented-nav">
                  <input type="radio" name="seg-tab" id="seg1" checked />
                  <input type="radio" name="seg-tab" id="seg2" />
                  <input type="radio" name="seg-tab" id="seg3" />
                  <label for="seg1"><i className="fa-solid fa-chart-simple"></i> Analytics</label>
                  <label for="seg2"><i className="fa-solid fa-wallet"></i> Wallet</label>
                  <label for="seg3"><i className="fa-solid fa-gear"></i> Setup</label>
                  <div className="seg-glider"></div>
                </div>
              </div>
              <p>A CSS-only horizontal menu featuring a smooth capsule slider indicator.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Columns Mega Menu</span><span className="card-tag pink">Dropdown</span></div>
              <div className="card-preview">
                <div className="mega-menu-container">
                  <button className="mega-trigger">Products <i className="fa-solid fa-chevron-down"></i></button>
                  <div className="mega-dropdown">
                    <div className="mega-grid-inner">
                      <div className="mega-col">
                        <h4>Services</h4>
                        <a href="#" className="mega-link">
                          <div className="mega-icon pink"><i className="fa-solid fa-cloud"></i></div>
                          <div>
                            <strong>Cloud Hosting</strong>
                            <span>Scalable VPS solutions</span>
                          </div>
                        </a>
                        <a href="#" className="mega-link">
                          <div className="mega-icon blue"><i className="fa-solid fa-shield-halved"></i></div>
                          <div>
                            <strong>Security</strong>
                            <span>Enterprise firewall protection</span>
                          </div>
                        </a>
                      </div>
                      <div className="mega-col">
                        <h4>Developers</h4>
                        <a href="#" className="mega-link">
                          <div className="mega-icon purple"><i className="fa-solid fa-code"></i></div>
                          <div>
                            <strong>API Docs</strong>
                            <span>Full references & specs</span>
                          </div>
                        </a>
                        <a href="#" className="mega-link">
                          <div className="mega-icon yellow"><i className="fa-solid fa-terminal"></i></div>
                          <div>
                            <strong>CLI Tool</strong>
                            <span>Command-line automation</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>A multi-column hovering dropdown menu displaying detailed option descriptions.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Cascading Context</span><span className="card-tag yellow">Submenu</span></div>
              <div className="card-preview">
                <div className="context-menu-container">
                  <div className="context-menu">
                    <a href="#" className="context-item"><span className="context-item-text"><i className="fa-regular fa-copy"></i> Copy</span> <span className="context-shortcut">Ctrl+C</span></a>
                    <a href="#" className="context-item"><span className="context-item-text"><i className="fa-regular fa-file-lines"></i> Paste</span> <span className="context-shortcut">Ctrl+V</span></a>
                    <hr className="context-divider" />
                    <div className="context-item context-submenu-trigger">
                      <span className="context-item-text"><i className="fa-solid fa-share-nodes"></i> Share</span>
                      <i className="fa-solid fa-chevron-right context-arrow"></i>
                      <div className="context-submenu">
                        <a href="#" className="context-item"><span className="context-item-text"><i className="fa-brands fa-twitter"></i> Twitter</span></a>
                        <a href="#" className="context-item"><span className="context-item-text"><i className="fa-brands fa-discord"></i> Discord</span></a>
                        <a href="#" className="context-item"><span className="context-item-text"><i className="fa-regular fa-envelope"></i> Email</span></a>
                      </div>
                    </div>
                    <a href="#" className="context-item delete-item"><span className="context-item-text"><i className="fa-regular fa-trash-can"></i> Delete</span> <span className="context-shortcut">Del</span></a>
                  </div>
                </div>
              </div>
              <p>A desktop-grade cascading context menu with nested hovering slide-out options.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
      
            <article className="menu-card">
              <div className="card-top"><span className="card-label">Vertical Expanded Dock</span><span className="card-tag blue">Dock</span></div>
              <div className="card-preview">
                <div className="circle-dock-container">
                  <div className="circle-dock">
                    <a href="#" className="dock-item">
                      <span className="dock-label">Dashboard</span>
                      <div className="dock-icon purple"><i className="fa-solid fa-chart-pie"></i></div>
                    </a>
                    <a href="#" className="dock-item">
                      <span className="dock-label">Messages</span>
                      <div className="dock-icon blue"><i className="fa-solid fa-message"></i></div>
                    </a>
                    <a href="#" className="dock-item">
                      <span className="dock-label">Documents</span>
                      <div className="dock-icon pink"><i className="fa-solid fa-folder-open"></i></div>
                    </a>
                    <a href="#" className="dock-item">
                      <span className="dock-label">Settings</span>
                      <div className="dock-icon yellow"><i className="fa-solid fa-sliders"></i></div>
                    </a>
                  </div>
                </div>
              </div>
              <p>A vertical dock structure displaying labels on trigger hover.</p>
              <div className="card-actions"><button className="view-btn">Preview</button><button className="copy-btn">Copy Code</button></div>
            </article>
          </section>
        </main>
    </>
  );
}
