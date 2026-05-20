<template>
<main class="main-home">

  <!-- HERO -->

  <section class="hero-section">

    <div class="hero-badge">
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

  <!-- SETTINGS GRID -->

  <section class="settings-grid">

    <!-- PROFILE -->

    <div class="settings-card large-card">

      <div class="card-header">

        <div>

          <span class="card-label">
            PROFILE
          </span>

          <h2>
            Account Information
          </h2>

        </div>

      </div>

      <div class="profile-box">

        <div class="profile-avatar">

          <img
            src="https://i.pravatar.cc/200?img=12"
            alt=""
          >

          <button>
            Change
          </button>

        </div>

        <div class="profile-form">

          <div class="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              value="Alex Carter"
            >

          </div>

          <div class="input-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              value="alex@uiverse.io"
            >

          </div>

          <div class="input-group">

            <label>
              Username
            </label>

            <input
              type="text"
              value="@alexdev"
            >

          </div>

        </div>

      </div>

    </div>

    <!-- APPEARANCE -->

    <div class="settings-card">

      <div class="card-header">

        <div>

          <span class="card-label">
            APPEARANCE
          </span>

          <h2>
            Theme Settings
          </h2>

        </div>

      </div>

      <div class="theme-options">

        <div class="theme-card active-theme">

          <div class="theme-preview dark-preview"></div>

          <strong>
            Dark Mode
          </strong>

        </div>

        <div class="theme-card">

          <div class="theme-preview light-preview"></div>

          <strong>
            Light Mode
          </strong>

        </div>

        <div class="theme-card">

          <div class="theme-preview purple-preview"></div>

          <strong>
            Purple
          </strong>

        </div>

      </div>

    </div>

    <!-- NOTIFICATIONS -->

    <div class="settings-card">

      <div class="card-header">

        <div>

          <span class="card-label">
            NOTIFICATIONS
          </span>

          <h2>
            Alerts & Updates
          </h2>

        </div>

      </div>

      <div class="settings-list">

        <div class="setting-item">

          <div>

            <strong>
              Push Notifications
            </strong>

            <span>
              Get instant updates
            </span>

          </div>

          <label class="switch">

            <input
              type="checkbox"
              checked
            >

            <span class="slider"></span>

          </label>

        </div>

        <div class="setting-item">

          <div>

            <strong>
              Email Alerts
            </strong>

            <span>
              Weekly email summaries
            </span>

          </div>

          <label class="switch">

            <input
              type="checkbox"
              checked
            >

            <span class="slider"></span>

          </label>

        </div>

        <div class="setting-item">

          <div>

            <strong>
              Mentions
            </strong>

            <span>
              Alerts when tagged
            </span>

          </div>

          <label class="switch">

            <input type="checkbox">

            <span class="slider"></span>

          </label>

        </div>

      </div>

    </div>

    <!-- SECURITY -->

    <div class="settings-card">

      <div class="card-header">

        <div>

          <span class="card-label">
            SECURITY
          </span>

          <h2>
            Account Security
          </h2>

        </div>

      </div>

      <div class="security-list">

        <button class="security-btn">

          <i class="fa-solid fa-lock"></i>

          Change Password

        </button>

        <button class="security-btn">

          <i class="fa-solid fa-shield"></i>

          Enable 2FA

        </button>

        <button class="security-btn">

          <i class="fa-solid fa-laptop"></i>

          Manage Devices

        </button>

      </div>

    </div>

    <!-- STORAGE -->

    <div class="settings-card">

      <div class="card-header">

        <div>

          <span class="card-label">
            STORAGE
          </span>

          <h2>
            Usage Analytics
          </h2>

        </div>

      </div>

      <div class="storage-box">

        <div class="storage-header">

          <strong>
            78% Used
          </strong>

          <span>
            78GB / 100GB
          </span>

        </div>

        <div class="progress-bar">

          <div class="progress-fill"></div>

        </div>

        <button class="upgrade-btn">
          Upgrade Plan
        </button>

      </div>

    </div>

    <!-- DANGER -->

    <div class="settings-card danger-card">

      <div class="card-header">

        <div>

          <span class="card-label">
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

      <button class="danger-btn">
        Delete Account
      </button>

    </div>

  </section>

</main>
</template>

<script>
export default { name: 'Settings' }
</script>
