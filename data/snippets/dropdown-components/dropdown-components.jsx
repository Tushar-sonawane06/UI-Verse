import React from 'react';

export default function dropdownComponents(){
  return (
    <>
      <main className="main-home">
      
        {/* HERO */}
      
        <section className="hero-section">
      
          <div className="hero-badge">
            ✦ Navigation Components
          </div>
      
          <h1>
            Modern <span>Dropdowns</span>
          </h1>
      
          <p>
      
            Beautiful futuristic dropdown
            components crafted for premium
            dashboards and modern websites.
      
          </p>
      
        </section>
      
        {/* GRID */}
      
        <section className="dropdown-grid">
      
          {/* BASIC */}
      
          <div className="dropdown-card">
      
            <div className="card-top">
      
              <span className="card-label">
                BASIC
              </span>
      
              <div className="card-icon purple">
                <i className="fa-solid fa-list"></i>
              </div>
      
            </div>
      
            <h2>
              Simple Dropdown
            </h2>
      
            <p>
      
              Clean modern dropdown
              menu with smooth transitions.
      
            </p>
      
            <div className="dropdown-wrapper">
      
              <button className="dropdown-btn">
      
                Select Option
      
                <i className="fa-solid fa-chevron-down"></i>
      
              </button>
      
              <div className="dropdown-menu">
      
                <div className="dropdown-item">
                  Dashboard
                </div>
      
                <div className="dropdown-item">
                  Analytics
                </div>
      
                <div className="dropdown-item">
                  Settings
                </div>
      
                <div className="dropdown-item">
                  Logout
                </div>
      
              </div>
      
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code1', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code1', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code1" className="code-block"><code>&lt;div className="dropdown-wrapper"&gt;
        &lt;button className="dropdown-btn"&gt;
          Select Option
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu"&gt;
          &lt;div className="dropdown-item"&gt;Dashboard&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;Analytics&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;Settings&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;Logout&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      
          </div>
      
          {/* PROFILE */}
      
          <div className="dropdown-card">
      
            <div className="card-top">
      
              <span className="card-label">
                PROFILE
              </span>
      
              <div className="card-icon blue">
                <i className="fa-solid fa-user"></i>
              </div>
      
            </div>
      
            <h2>
              Profile Menu
            </h2>
      
            <p>
      
              Beautiful profile dropdown
              with icon based navigation.
      
            </p>
      
            <div className="dropdown-wrapper">
      
              <button className="dropdown-btn profile-btn">
      
                <img
                  src="https://i.pravatar.cc/100"
                  alt=""
                 />
      
                Chinmay
      
                <i className="fa-solid fa-chevron-down"></i>
      
              </button>
      
              <div className="dropdown-menu">
      
                <div className="dropdown-item">
                  <i className="fa-solid fa-user"></i>
                  Profile
                </div>
      
                <div className="dropdown-item">
                  <i className="fa-solid fa-gear"></i>
                  Settings
                </div>
      
                <div className="dropdown-item">
                  <i className="fa-solid fa-bookmark"></i>
                  Saved
                </div>
      
                <div className="dropdown-item logout">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Logout
                </div>
      
              </div>
      
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code2', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code2', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code2" className="code-block"><code>&lt;div className="dropdown-wrapper"&gt;
        &lt;button className="dropdown-btn profile-btn"&gt;
          &lt;img src="https://i.pravatar.cc/100" alt=""&gt;
          Chinmay
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu"&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-user"&gt;&lt;/i&gt; Profile
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-gear"&gt;&lt;/i&gt; Settings
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-bookmark"&gt;&lt;/i&gt; Saved
          &lt;/div&gt;
          &lt;div className="dropdown-item logout"&gt;
            &lt;i className="fa-solid fa-right-from-bracket"&gt;&lt;/i&gt; Logout
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      
          </div>
      
          {/* NOTIFICATION */}
      
          <div className="dropdown-card large-card">
      
            <div className="card-top">
      
              <span className="card-label">
                ADVANCED
              </span>
      
              <div className="card-icon orange">
                <i className="fa-solid fa-bell"></i>
              </div>
      
            </div>
      
            <h2>
              Notification Dropdown
            </h2>
      
            <p>
      
              Interactive dropdown panel
              perfect for notifications
              and activity feeds.
      
            </p>
      
            <div className="dropdown-wrapper notification-wrap">
      
              <button className="dropdown-btn notification-btn">
      
                <i className="fa-solid fa-bell"></i>
      
                Notifications
      
                <span className="badge">
                  4
                </span>
      
              </button>
      
              <div className="dropdown-menu notification-menu">
      
                <div className="notify-item">
      
                  <div className="notify-icon green">
                    <i className="fa-solid fa-check"></i>
                  </div>
      
                  <div>
      
                    <strong>
                      Deployment Successful
                    </strong>
      
                    <span>
                      2 min ago
                    </span>
      
                  </div>
      
                </div>
      
                <div className="notify-item">
      
                  <div className="notify-icon purple-bg">
                    <i className="fa-solid fa-code"></i>
                  </div>
      
                  <div>
      
                    <strong>
                      New Component Added
                    </strong>
      
                    <span>
                      10 min ago
                    </span>
      
                  </div>
      
                </div>
      
                <div className="notify-item">
      
                  <div className="notify-icon orange-bg">
                    <i className="fa-solid fa-fire"></i>
                  </div>
      
                  <div>
      
                    <strong>
                      Trending UI Layout
                    </strong>
      
                    <span>
                      1 hour ago
                    </span>
      
                  </div>
      
                </div>
      
              </div>
      
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code3', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code3', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code3" className="code-block"><code>&lt;div className="dropdown-wrapper notification-wrap"&gt;
        &lt;button className="dropdown-btn notification-btn"&gt;
          &lt;i className="fa-solid fa-bell"&gt;&lt;/i&gt; Notifications
          &lt;span className="badge"&gt;4&lt;/span&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu notification-menu"&gt;
          &lt;div className="notify-item"&gt;
            &lt;div className="notify-icon green"&gt;&lt;i className="fa-solid fa-check"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div&gt;
              &lt;strong&gt;Deployment Successful&lt;/strong&gt;
              &lt;span&gt;2 min ago&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="notify-item"&gt;
            &lt;div className="notify-icon purple-bg"&gt;&lt;i className="fa-solid fa-code"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div&gt;
              &lt;strong&gt;New Component Added&lt;/strong&gt;
              &lt;span&gt;10 min ago&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="notify-item"&gt;
            &lt;div className="notify-icon orange-bg"&gt;&lt;i className="fa-solid fa-fire"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div&gt;
              &lt;strong&gt;Trending UI Layout&lt;/strong&gt;
              &lt;span&gt;1 hour ago&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
      
          </div>
      
          {/* 4. MULTI-LEVEL DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                NESTED MENU
              </span>
              <div className="card-icon teal-grad">
                <i className="fa-solid fa-folder-tree"></i>
              </div>
            </div>
            <h2>
              Nested Dropdown
            </h2>
            <p>
              Tiered option menus that reveal secondary slide-out panels on hover.
            </p>
            <div className="dropdown-wrapper multilevel-wrap">
              <button className="dropdown-btn">
                <span>Options Menu</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <i className="fa-solid fa-file-export"></i>
                  <span>Share Project</span>
                  <i className="fa-solid fa-chevron-right submenu-arrow"></i>
                  <div className="dropdown-submenu">
                    <div className="dropdown-item">
                      <i className="fa-solid fa-envelope"></i>
                      <span>Email Link</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-link"></i>
                      <span>Copy Link</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-brands fa-slack"></i>
                      <span>Slack</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Preferences</span>
                  <i className="fa-solid fa-chevron-right submenu-arrow"></i>
                  <div className="dropdown-submenu">
                    <div className="dropdown-item">
                      <i className="fa-solid fa-user-lock"></i>
                      <span>Permissions</span>
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid fa-palette"></i>
                      <span>Themes</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-download"></i>
                  <span>Export Raw File</span>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code4', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code4', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code4" className="code-block"><code>&lt;div className="dropdown-wrapper multilevel-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;Options Menu&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu"&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-file-export"&gt;&lt;/i&gt; Share Project
            &lt;i className="fa-solid fa-chevron-right submenu-arrow"&gt;&lt;/i&gt;
            &lt;div className="dropdown-submenu"&gt;
              &lt;div className="dropdown-item"&gt;Email Link&lt;/div&gt;
              &lt;div className="dropdown-item"&gt;Copy Link&lt;/div&gt;
              &lt;div className="dropdown-item"&gt;Slack&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-pen-to-square"&gt;&lt;/i&gt; Preferences
            &lt;i className="fa-solid fa-chevron-right submenu-arrow"&gt;&lt;/i&gt;
            &lt;div className="dropdown-submenu"&gt;
              &lt;div className="dropdown-item"&gt;Permissions&lt;/div&gt;
              &lt;div className="dropdown-item"&gt;Themes&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;&lt;i className="fa-solid fa-download"&gt;&lt;/i&gt; Export Raw File&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 5. SEARCHABLE SELECT DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                SEARCHABLE
              </span>
              <div className="card-icon cyan-grad">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <h2>
              Searchable Select
            </h2>
            <p>
              Filterable selection dropdown optimal for search and tag management.
            </p>
            <div className="dropdown-wrapper searchable-wrap">
              <button className="dropdown-btn">
                <span>Select Country</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu">
                <div className="search-input-wrapper">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" className="dropdown-search-input" placeholder="Search country..." />
                </div>
                <div className="dropdown-items-list">
                  <div className="dropdown-item">
                    <span className="flag">🇺🇸</span> United States
                  </div>
                  <div className="dropdown-item">
                    <span className="flag">🇬🇧</span> United Kingdom
                  </div>
                  <div className="dropdown-item">
                    <span className="flag">🇩🇪</span> Germany
                  </div>
                  <div className="dropdown-item">
                    <span className="flag">🇮🇳</span> India
                  </div>
                  <div className="dropdown-item">
                    <span className="flag">🇯🇵</span> Japan
                  </div>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code5', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code5', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code5" className="code-block"><code>&lt;div className="dropdown-wrapper searchable-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;Select Country&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu"&gt;
          &lt;div className="search-input-wrapper"&gt;
            &lt;i className="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
            &lt;input type="text" className="dropdown-search-input" placeholder="Search country..."&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-items-list"&gt;
            &lt;div className="dropdown-item"&gt;&lt;span className="flag"&gt;🇺🇸&lt;/span&gt; United States&lt;/div&gt;
            &lt;div className="dropdown-item"&gt;&lt;span className="flag"&gt;🇬🇧&lt;/span&gt; United Kingdom&lt;/div&gt;
            &lt;div className="dropdown-item"&gt;&lt;span className="flag"&gt;🇩🇪&lt;/span&gt; Germany&lt;/div&gt;
            &lt;div className="dropdown-item"&gt;&lt;span className="flag"&gt;🇮🇳&lt;/span&gt; India&lt;/div&gt;
            &lt;div className="dropdown-item"&gt;&lt;span className="flag"&gt;🇯🇵&lt;/span&gt; Japan&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 6. ACTIONS GRID DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                ACTIONS
              </span>
              <div className="card-icon yellow-grad">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <h2>
              Quick Actions
            </h2>
            <p>
              Clean context-style menu containing shortcut badges and destructive alerts.
            </p>
            <div className="dropdown-wrapper actions-wrap">
              <button className="dropdown-btn actions-btn" aria-label="Action Menu">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <div className="dropdown-menu actions-menu">
                <div className="dropdown-item">
                  <i className="fa-solid fa-file-pen"></i>
                  <span>Rename File</span>
                  <kbd className="shortcut">⌘R</kbd>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-copy"></i>
                  <span>Duplicate</span>
                  <kbd className="shortcut">⌘D</kbd>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <span>Add to Favorites</span>
                  <kbd className="shortcut">⌘F</kbd>
                </div>
                <div className="divider"></div>
                <div className="dropdown-item delete-action">
                  <i className="fa-solid fa-trash-can"></i>
                  <span>Move to Trash</span>
                  <kbd className="shortcut">⌘⌫</kbd>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code6', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code6', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code6" className="code-block"><code>&lt;div className="dropdown-wrapper actions-wrap"&gt;
        &lt;button className="dropdown-btn actions-btn" aria-label="Action Menu"&gt;
          &lt;i className="fa-solid fa-ellipsis-vertical"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu actions-menu"&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-file-pen"&gt;&lt;/i&gt; Rename File
            &lt;kbd className="shortcut"&gt;⌘R&lt;/kbd&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-copy"&gt;&lt;/i&gt; Duplicate
            &lt;kbd className="shortcut"&gt;⌘D&lt;/kbd&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;i className="fa-solid fa-star-half-stroke"&gt;&lt;/i&gt; Add to Favorites
            &lt;kbd className="shortcut"&gt;⌘F&lt;/kbd&gt;
          &lt;/div&gt;
          &lt;div className="divider"&gt;&lt;/div&gt;
          &lt;div className="dropdown-item delete-action"&gt;
            &lt;i className="fa-solid fa-trash-can"&gt;&lt;/i&gt; Move to Trash
            &lt;kbd className="shortcut"&gt;⌘⌫&lt;/kbd&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 7. RICH CONTENT MEGA DROPDOWN */}
          <div className="dropdown-card large-card">
            <div className="card-top">
              <span className="card-label">
                RICH MEDIA
              </span>
              <div className="card-icon pink-grad">
                <i className="fa-solid fa-grip-vertical"></i>
              </div>
            </div>
            <h2>
              Rich Mega Dropdown
            </h2>
            <p>
              Productivity grid containing headers, rich-styled list options, and links.
            </p>
            <div className="dropdown-wrapper mega-wrap">
              <button className="dropdown-btn">
                <span>Browse Solutions</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-grid">
                  <div className="mega-col">
                    <span className="mega-title">PRODUCTIVITY</span>
                    <div className="mega-item">
                      <i className="fa-solid fa-briefcase"></i>
                      <div>
                        <strong>Task Manager</strong>
                        <span>Track team projects and tasks</span>
                      </div>
                    </div>
                    <div className="mega-item">
                      <i className="fa-solid fa-chart-line"></i>
                      <div>
                        <strong>Analytics Tool</strong>
                        <span>Visualize conversion funnels</span>
                      </div>
                    </div>
                  </div>
                  <div className="mega-col">
                    <span className="mega-title">SECURITY</span>
                    <div className="mega-item">
                      <i className="fa-solid fa-shield-halved"></i>
                      <div>
                        <strong>Auth Shield</strong>
                        <span>Secure user authentication</span>
                      </div>
                    </div>
                    <div className="mega-item">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      <div>
                        <strong>Cloud Backup</strong>
                        <span>Encrypted cloud asset storage</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mega-footer">
                  <a href="#">Explore All Solutions <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code7', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code7', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code7" className="code-block"><code>&lt;div className="dropdown-wrapper mega-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;Browse Solutions&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu mega-menu"&gt;
          &lt;div className="mega-grid"&gt;
            &lt;div className="mega-col"&gt;
              &lt;span className="mega-title"&gt;PRODUCTIVITY&lt;/span&gt;
              &lt;div className="mega-item"&gt;
                &lt;i className="fa-solid fa-briefcase"&gt;&lt;/i&gt;
                &lt;div&gt;
                  &lt;strong&gt;Task Manager&lt;/strong&gt;
                  &lt;span&gt;Track team projects and tasks&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div className="mega-item"&gt;
                &lt;i className="fa-solid fa-chart-line"&gt;&lt;/i&gt;
                &lt;div&gt;
                  &lt;strong&gt;Analytics Tool&lt;/strong&gt;
                  &lt;span&gt;Visualize conversion funnels&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div className="mega-col"&gt;
              &lt;span className="mega-title"&gt;SECURITY&lt;/span&gt;
              &lt;div className="mega-item"&gt;
                &lt;i className="fa-solid fa-shield-halved"&gt;&lt;/i&gt;
                &lt;div&gt;
                  &lt;strong&gt;Auth Shield&lt;/strong&gt;
                  &lt;span&gt;Secure user authentication&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
              &lt;div className="mega-item"&gt;
                &lt;i className="fa-solid fa-cloud-arrow-up"&gt;&lt;/i&gt;
                &lt;div&gt;
                  &lt;strong&gt;Cloud Backup&lt;/strong&gt;
                  &lt;span&gt;Encrypted cloud asset storage&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="mega-footer"&gt;
            &lt;a href="#"&gt;Explore All Solutions&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 8. REGION SELECT DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                GEOLOCATION
              </span>
              <div className="card-icon green-grad">
                <i className="fa-solid fa-earth-americas"></i>
              </div>
            </div>
            <h2>
              Region & Currency
            </h2>
            <p>
              Select localization parameters containing active checkmarks and flag assets.
            </p>
            <div className="dropdown-wrapper language-wrap">
              <button className="dropdown-btn lang-select-btn">
                <span>English (USD)</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu language-menu">
                <div className="dropdown-item active-lang">
                  <span className="lang-flag">🇺🇸</span>
                  <span>English (USD)</span>
                  <i className="fa-solid fa-circle-check check-icon"></i>
                </div>
                <div className="dropdown-item">
                  <span className="lang-flag">🇩🇪</span>
                  <span>Deutsch (EUR)</span>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
                <div className="dropdown-item">
                  <span className="lang-flag">🇯🇵</span>
                  <span>日本語 (JPY)</span>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
                <div className="dropdown-item">
                  <span className="lang-flag">🇫🇷</span>
                  <span>Français (EUR)</span>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code8', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code8', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code8" className="code-block"><code>&lt;div className="dropdown-wrapper language-wrap"&gt;
        &lt;button className="dropdown-btn lang-select-btn"&gt;
          &lt;span&gt;English (USD)&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu"&gt;
          &lt;div className="dropdown-item active-lang"&gt;
            &lt;span className="lang-flag"&gt;🇺🇸&lt;/span&gt; English (USD)
            &lt;i className="fa-solid fa-circle-check check-icon"&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;span className="lang-flag"&gt;🇩🇪&lt;/span&gt; Deutsch (EUR)
            &lt;i className="fa-solid fa-circle check-icon empty"&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;span className="lang-flag"&gt;🇯🇵&lt;/span&gt; 日本語 (JPY)
            &lt;i className="fa-solid fa-circle check-icon empty"&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className="dropdown-item"&gt;
            &lt;span className="lang-flag"&gt;🇫🇷&lt;/span&gt; Français (EUR)
            &lt;i className="fa-solid fa-circle check-icon empty"&gt;&lt;/i&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 9. STATUS FILTER DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                FILTER
              </span>
              <div className="card-icon pink-grad">
                <i className="fa-solid fa-filter"></i>
              </div>
            </div>
            <h2>
              Status Filter
            </h2>
            <p>
              Quick status selector with pills, counts, and a subtle active state.
            </p>
            <div className="dropdown-wrapper status-wrap">
              <button className="dropdown-btn">
                <span>All statuses</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu status-menu">
                <div className="dropdown-item">
                  <i className="fa-solid fa-layer-group"></i>
                  <span>All</span>
                  <span className="count-pill">128</span>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Completed</span>
                  <span className="count-pill green">52</span>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-clock"></i>
                  <span>In review</span>
                  <span className="count-pill purple">19</span>
                </div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>Blocked</span>
                  <span className="count-pill red">7</span>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code9', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code9', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code9" className="code-block"><code>&lt;div className="dropdown-wrapper status-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;All statuses&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu status-menu"&gt;
          &lt;div className="dropdown-item"&gt;&lt;i className="fa-solid fa-layer-group"&gt;&lt;/i&gt; &lt;span&gt;All&lt;/span&gt; &lt;span className="count-pill"&gt;128&lt;/span&gt;&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;&lt;i className="fa-solid fa-circle-check"&gt;&lt;/i&gt; &lt;span&gt;Completed&lt;/span&gt; &lt;span className="count-pill green"&gt;52&lt;/span&gt;&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;&lt;i className="fa-solid fa-clock"&gt;&lt;/i&gt; &lt;span&gt;In review&lt;/span&gt; &lt;span className="count-pill purple"&gt;19&lt;/span&gt;&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;&lt;i className="fa-solid fa-triangle-exclamation"&gt;&lt;/i&gt; &lt;span&gt;Blocked&lt;/span&gt; &lt;span className="count-pill red"&gt;7&lt;/span&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 10. THEME SWATCH DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                THEMES
              </span>
              <div className="card-icon teal-grad">
                <i className="fa-solid fa-palette"></i>
              </div>
            </div>
            <h2>
              Theme Swatches
            </h2>
            <p>
              Visual color choices with gradient swatches and a compact preview grid.
            </p>
            <div className="dropdown-wrapper swatch-wrap">
              <button className="dropdown-btn">
                <span>Midnight</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu swatch-menu">
                <div className="swatch-grid">
                  <div className="dropdown-item swatch-item">
                    <span className="swatch-dot swatch-midnight"></span>
                    <span>Midnight</span>
                    <i className="fa-solid fa-circle-check check-icon"></i>
                  </div>
                  <div className="dropdown-item swatch-item">
                    <span className="swatch-dot swatch-sunset"></span>
                    <span>Sunset</span>
                    <i className="fa-solid fa-circle check-icon empty"></i>
                  </div>
                  <div className="dropdown-item swatch-item">
                    <span className="swatch-dot swatch-mint"></span>
                    <span>Mint</span>
                    <i className="fa-solid fa-circle check-icon empty"></i>
                  </div>
                  <div className="dropdown-item swatch-item">
                    <span className="swatch-dot swatch-royal"></span>
                    <span>Royal</span>
                    <i className="fa-solid fa-circle check-icon empty"></i>
                  </div>
                </div>
                <div className="swatch-footer">
                  <span className="hint">Tip:</span>
                  <span className="hint-text">Pick a theme for your dashboard.</span>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code10', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code10', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code10" className="code-block"><code>&lt;div className="dropdown-wrapper swatch-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;Midnight&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu swatch-menu"&gt;
          &lt;div className="swatch-grid"&gt;
            &lt;div className="dropdown-item swatch-item"&gt;&lt;span className="swatch-dot swatch-midnight"&gt;&lt;/span&gt; &lt;span&gt;Midnight&lt;/span&gt; &lt;i className="fa-solid fa-circle-check check-icon"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div className="dropdown-item swatch-item"&gt;&lt;span className="swatch-dot swatch-sunset"&gt;&lt;/span&gt; &lt;span&gt;Sunset&lt;/span&gt; &lt;i className="fa-solid fa-circle check-icon empty"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div className="dropdown-item swatch-item"&gt;&lt;span className="swatch-dot swatch-mint"&gt;&lt;/span&gt; &lt;span&gt;Mint&lt;/span&gt; &lt;i className="fa-solid fa-circle check-icon empty"&gt;&lt;/i&gt;&lt;/div&gt;
            &lt;div className="dropdown-item swatch-item"&gt;&lt;span className="swatch-dot swatch-royal"&gt;&lt;/span&gt; &lt;span&gt;Royal&lt;/span&gt; &lt;i className="fa-solid fa-circle check-icon empty"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 11. AVATAR SWITCHER DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                TEAMS
              </span>
              <div className="card-icon cyan-grad">
                <i className="fa-solid fa-users"></i>
              </div>
            </div>
            <h2>
              Workspace Switcher
            </h2>
            <p>
              Fast workspace switching with avatars, roles, and a pinned active team.
            </p>
            <div className="dropdown-wrapper workspace-wrap">
              <button className="dropdown-btn profile-btn">
                <img src="https://i.pravatar.cc/100?img=13" alt="" />
                <span>UIverse Studio</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu workspace-menu">
                <div className="dropdown-item active-team">
                  <img src="https://i.pravatar.cc/100?img=13" alt="" />
                  <div className="ws-meta">
                    <strong>UIverse Studio</strong>
                    <span>Owner</span>
                  </div>
                  <i className="fa-solid fa-circle-check check-icon"></i>
                </div>
                <div className="dropdown-item">
                  <img src="https://i.pravatar.cc/100?img=32" alt="" />
                  <div className="ws-meta">
                    <strong>Design Lab</strong>
                    <span>Member</span>
                  </div>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
                <div className="dropdown-item">
                  <img src="https://i.pravatar.cc/100?img=45" alt="" />
                  <div className="ws-meta">
                    <strong>Ops Squad</strong>
                    <span>Viewer</span>
                  </div>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
                <div className="divider"></div>
                <div className="dropdown-item">
                  <i className="fa-solid fa-plus"></i>
                  <span>Create workspace</span>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code11', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code11', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code11" className="code-block"><code>&lt;div className="dropdown-wrapper workspace-wrap"&gt;
        &lt;button className="dropdown-btn profile-btn"&gt;
          &lt;img src="https://i.pravatar.cc/100?img=13" alt=""&gt;
          &lt;span&gt;UIverse Studio&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu workspace-menu"&gt;
          &lt;div className="dropdown-item active-team"&gt;...&lt;/div&gt;
          &lt;div className="dropdown-item"&gt;...&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 12. DATE RANGE DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                ANALYTICS
              </span>
              <div className="card-icon yellow-grad">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
            </div>
            <h2>
              Date Range
            </h2>
            <p>
              Compact date range picker layout for dashboards (static UI, no calendar JS).
            </p>
            <div className="dropdown-wrapper daterange-wrap">
              <button className="dropdown-btn">
                <span>Last 30 days</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu daterange-menu">
                <div className="range-presets">
                  <div className="dropdown-item"><span>Today</span></div>
                  <div className="dropdown-item"><span>Last 7 days</span></div>
                  <div className="dropdown-item"><span>Last 30 days</span></div>
                  <div className="dropdown-item"><span>This quarter</span></div>
                </div>
                <div className="range-divider"></div>
                <div className="range-fields">
                  <label className="range-field">
                    <span>From</span>
                    <input type="text" value="Apr 20, 2026" readonly />
                  </label>
                  <label className="range-field">
                    <span>To</span>
                    <input type="text" value="May 20, 2026" readonly />
                  </label>
                </div>
                <div className="range-actions">
                  <button className="range-btn ghost">Cancel</button>
                  <button className="range-btn primary">Apply</button>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code12', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code12', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code12" className="code-block"><code>&lt;div className="dropdown-wrapper daterange-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;Last 30 days&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu daterange-menu"&gt;...&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 13. PRIORITY SORT DROPDOWN */}
          <div className="dropdown-card">
            <div className="card-top">
              <span className="card-label">
                SORTING
              </span>
              <div className="card-icon purple">
                <i className="fa-solid fa-arrow-up-wide-short"></i>
              </div>
            </div>
            <h2>
              Priority Sort
            </h2>
            <p>
              Radio-style sort options with an inline check indicator and descriptions.
            </p>
            <div className="dropdown-wrapper sort-wrap">
              <button className="dropdown-btn">
                <span>Sort: Recommended</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div className="dropdown-menu sort-menu">
                <div className="dropdown-item sort-item active-sort">
                  <div className="sort-text">
                    <strong>Recommended</strong>
                    <span>Balanced for most lists</span>
                  </div>
                  <i className="fa-solid fa-circle-check check-icon"></i>
                </div>
                <div className="dropdown-item sort-item">
                  <div className="sort-text">
                    <strong>Newest</strong>
                    <span>Recently updated first</span>
                  </div>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
                <div className="dropdown-item sort-item">
                  <div className="sort-text">
                    <strong>Highest priority</strong>
                    <span>Urgent tasks on top</span>
                  </div>
                  <i className="fa-solid fa-circle check-icon empty"></i>
                </div>
              </div>
            </div>
      
            <div className="actions">
              <button className="action-btn view-btn" onclick="toggleCode('code13', this)">
                <i className="fa-solid fa-code"></i> View Code
              </button>
              <button className="action-btn copy-btn" onclick="copyCode('code13', this)">
                <i className="fa-solid fa-copy"></i> Copy
              </button>
            </div>
      
            <pre id="code13" className="code-block"><code>&lt;div className="dropdown-wrapper sort-wrap"&gt;
        &lt;button className="dropdown-btn"&gt;
          &lt;span&gt;Sort: Recommended&lt;/span&gt;
          &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu sort-menu"&gt;
          &lt;div className="dropdown-item sort-item"&gt;...&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
        </section>
      
      </main>
    </>
  );
}
