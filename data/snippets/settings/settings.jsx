import React from 'react';

export default function settings(){
  return (
    <>
      <main className="main-home">
      
        {/* HERO */}
      
        <section className="hero-section">
      
          <div className="hero-badge">
            ✦ Dashboard Preferences
          </div>
      
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
                  alt=""
                 />
      
                <button>
                  Change
                </button>
      
              </div>
      
              <div className="profile-form">
      
                <div className="input-group">
      
                  <label>
                    Full Name
                  </label>
      
                  <input
                    type="text"
                    value="Alex Carter"
                   />
      
                </div>
      
                <div className="input-group">
      
                  <label>
                    Email Address
                  </label>
      
                  <input
                    type="email"
                    value="alex@uiverse.io"
                   />
      
                </div>
      
                <div className="input-group">
      
                  <label>
                    Username
                  </label>
      
                  <input
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
      
                <label className="switch">
      
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
      
                <label className="switch">
      
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
      
                <label className="switch">
      
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
      
              <button className="security-btn">
      
                <i className="fa-solid fa-lock"></i>
      
                Change Password
      
              </button>
      
              <button className="security-btn">
      
                <i className="fa-solid fa-shield"></i>
      
                Enable 2FA
      
              </button>
      
              <button className="security-btn">
      
                <i className="fa-solid fa-laptop"></i>
      
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
      
              <div className="progress-bar">
      
                <div className="progress-fill"></div>
      
              </div>
      
              <button className="upgrade-btn">
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
      
            <button className="danger-btn">
              Delete Account
            </button>
      
          </div>
      
        </section>
      
      </main>
    </>
  );
}
