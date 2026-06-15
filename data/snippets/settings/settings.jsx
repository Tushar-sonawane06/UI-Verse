import React from 'react';

export default function settings(){
  return (
    <>
      <i className="fa-solid fa-bars menu-toggle" id="menuToggle"></i>
          <aside className="sidebar">
            <h2>UIverse</h2>
            <ul>
      
<<<<<<< HEAD
              <li><a href="profile.html"><i className="fa-regular fa-circle-user"></i><p>Profile</p></a></li>
              <li>
                <a href="index.html"
                  ><i className="fa-solid fa-house"></i>
                  <p>Home</p></a
                >
              </li>
              <li>
                <a href="button.html"
                  ><i className="fa-solid fa-mobile-button"></i>
                  <p>Butttons</p></a
                >
              </li>
              <li>
                <a href="navbar.html"
                  ><i className="fa-solid fa-bars"></i>
                  <p>Navbar</p></a
                >
              </li>
              <li>
                <a href="contact.html"
                  ><i className="fa-regular fa-user"></i>
                  <p>Contact Us</p></a
                >
              </li>
              <li>
                <a href="forms.html"
                  ><i className="fa-brands fa-wpforms"></i>
                  <p>Forms</p></a
                >
              </li>
              <li>
                <a href="badges.html"
                  ><i className="fa-solid fa-award"></i>
                  <p>Badges</p></a
                >
              </li>
              <li>
                <a href="about.html"
                  ><i className="fa-solid fa-mobile-button"></i>
                  <p>About</p></a
                >
              </li>
              <li>
                <a href="settings.html"
                  ><i className="fa-solid fa-gear"></i>
                  <p>Settings</p></a
                >
              </li>
            </ul>
          </aside>
      
          <div className="settings-container">
            <h1>Settings</h1>
=======
        {/* HERO */}
        <section className="hero-section">
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
      
            <div className="settings-card">
              <h2>Profile</h2>
              <label>Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
      
              <label>Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
      
              <button id="saveBtn">Save Changes</button>
            </div>
      
            <div className="settings-card">
              <h2>Password</h2>
              <label>Current Password</label>
              <input type="password" id="currentPass" placeholder="Enter current password" autocomplete="off"/>
      
              <label>New Password</label>
              <input type="password" id="newPass" placeholder="Enter new password" autocomplete="off" />
      
              <button id="passBtn">Password update</button>
            </div>
      
            <div className="settings-card">
              <h2>Preferences</h2>
      
              <div className="toggle">
                <span>Dark Mode</span>
                <input type="checkbox" id="dark-Toggle"/>
              </div>
      
              <div className="toggle">
                <span>Email</span>
                <input type="checkbox" id="emailToggle"/>
              </div>
            </div>
          </div>
      
<<<<<<< HEAD
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
=======
          <h1>
            Account <span>Settings</span>
          </h1>
      
          <p>
            Customize your workspace,
            profile, notifications and
            appearance with premium
            settings components.
          </p>
      
        </section>
      
        {/* SETTINGS GRID */}
        <section className="settings-grid">
      
          {/* PROFILE */}
          <div className="settings-card large-card">
      
            <div className="card-header">
      
              <div>
      
                <span className="card-label">
                  PROFILE
                </span>
      
                <h2>
                  Account Information
                </h2>
      
              </div>
      
            </div>
      
            <div className="profile-box">
      
              <div className="profile-avatar">
      
                <img
                  src="https://i.pravatar.cc/200?img=12"
                  alt="Alex Carter Profile Picture"
                />
      
                <button type="button">
                  Change
                </button>
      
              </div>
      
              <div className="profile-form">
      
                <div className="input-group">
      
                  <label for="fullName">
                    Full Name
                  </label>
      
                  <input
                    id="fullName"
                    type="text"
                    value="Alex Carter"
                  />
      
                </div>
      
                <div className="input-group">
      
                  <label for="emailAddress">
                    Email Address
                  </label>
      
                  <input
                    id="emailAddress"
                    type="email"
                    value="alex@uiverse.io"
                  />
      
                </div>
      
                <div className="input-group">
      
                  <label for="username">
                    Username
                  </label>
      
                  <input
                    id="username"
                    type="text"
                    value="@alexdev"
                  />
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
          {/* APPEARANCE */}
          <div className="settings-card">
      
            <div className="card-header">
      
              <div>
      
                <span className="card-label">
                  APPEARANCE
                </span>
      
                <h2>
                  Theme Settings
                </h2>
      
              </div>
      
            </div>
      
            <div className="theme-options">
      
              <div className="theme-card active-theme">
      
                <div className="theme-preview dark-preview"></div>
      
                <strong>
                  Dark Mode
                </strong>
      
              </div>
      
              <div className="theme-card">
      
                <div className="theme-preview light-preview"></div>
      
                <strong>
                  Light Mode
                </strong>
      
              </div>
      
              <div className="theme-card">
      
                <div className="theme-preview purple-preview"></div>
      
                <strong>
                  Purple
                </strong>
      
              </div>
      
            </div>
      
          </div>
      
          {/* NOTIFICATIONS */}
          <div className="settings-card">
      
            <div className="card-header">
      
              <div>
      
                <span className="card-label">
                  NOTIFICATIONS
                </span>
      
                <h2>
                  Alerts & Updates
                </h2>
      
              </div>
      
            </div>
      
            <div className="settings-list">
      
              <div className="setting-item">
      
                <div>
      
                  <strong>
                    Push Notifications
                  </strong>
      
                  <span>
                    Get instant updates
                  </span>
      
                </div>
      
                <label
                  className="switch"
                  aria-label="Toggle Push Notifications"
                >
      
                  <input
                    type="checkbox"
                    checked
                  />
      
                  <span className="slider"></span>
      
                </label>
      
              </div>
      
              <div className="setting-item">
      
                <div>
      
                  <strong>
                    Email Alerts
                  </strong>
      
                  <span>
                    Weekly email summaries
                  </span>
      
                </div>
      
                <label
                  className="switch"
                  aria-label="Toggle Email Alerts"
                >
      
                  <input
                    type="checkbox"
                    checked
                  />
      
                  <span className="slider"></span>
      
                </label>
      
              </div>
      
              <div className="setting-item">
      
                <div>
      
                  <strong>
                    Mentions
                  </strong>
      
                  <span>
                    Alerts when tagged
                  </span>
      
                </div>
      
                <label
                  className="switch"
                  aria-label="Toggle Mention Alerts"
                >
      
                  <input type="checkbox" />
      
                  <span className="slider"></span>
      
                </label>
      
              </div>
      
            </div>
      
          </div>
      
          {/* SECURITY */}
          <div className="settings-card">
      
            <div className="card-header">
      
              <div>
      
                <span className="card-label">
                  SECURITY
                </span>
      
                <h2>
                  Account Security
                </h2>
      
              </div>
      
            </div>
      
            <div className="security-list">
      
              <button
                type="button"
                className="security-btn"
              >
      
                <i
                  className="fa-solid fa-lock"
                  aria-hidden="true"
                ></i>
      
                Change Password
      
              </button>
      
              <button
                type="button"
                className="security-btn"
              >
      
                <i
                  className="fa-solid fa-shield"
                  aria-hidden="true"
                ></i>
      
                Enable 2FA
      
              </button>
      
              <button
                type="button"
                className="security-btn"
              >
      
                <i
                  className="fa-solid fa-laptop"
                  aria-hidden="true"
                ></i>
      
                Manage Devices
      
              </button>
      
            </div>
      
          </div>
      
          {/* STORAGE */}
          <div className="settings-card">
      
            <div className="card-header">
      
              <div>
      
                <span className="card-label">
                  STORAGE
                </span>
      
                <h2>
                  Usage Analytics
                </h2>
      
              </div>
      
            </div>
      
            <div className="storage-box">
      
              <div className="storage-header">
      
                <strong>
                  78% Used
                </strong>
      
                <span>
                  78GB / 100GB
                </span>
      
              </div>
      
              <div
                className="progress-bar"
                aria-label="Storage Usage"
              >
      
                <div className="progress-fill"></div>
      
              </div>
      
              <button
                type="button"
                className="upgrade-btn"
              >
                Upgrade Plan
              </button>
      
            </div>
      
          </div>
      
          {/* DANGER */}
          <div className="settings-card danger-card">
      
            <div className="card-header">
      
              <div>
      
                <span className="card-label">
                  DANGER
                </span>
      
                <h2>
                  Delete Account
                </h2>
      
              </div>
      
            </div>
      
            <p>
              Permanently delete your
              account and all data.
            </p>
      
            <button
              type="button"
              className="danger-btn"
            >
              Delete Account
            </button>
      
          </div>
      
        </section>
      
      </main>
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
    </>
  );
}
