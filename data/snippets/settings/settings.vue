<template>
<i class="fa-solid fa-bars menu-toggle" id="menuToggle"></i>
    <aside class="sidebar">
      <h2>UIverse</h2>
      <ul>

<<<<<<< HEAD
        <li><a href="profile.html"><i class="fa-regular fa-circle-user"></i><p>Profile</p></a></li>
        <li>
          <a href="index.html"
            ><i class="fa-solid fa-house"></i>
            <p>Home</p></a
          >
        </li>
        <li>
          <a href="button.html"
            ><i class="fa-solid fa-mobile-button"></i>
            <p>Butttons</p></a
          >
        </li>
        <li>
          <a href="navbar.html"
            ><i class="fa-solid fa-bars"></i>
            <p>Navbar</p></a
          >
        </li>
        <li>
          <a href="contact.html"
            ><i class="fa-regular fa-user"></i>
            <p>Contact Us</p></a
          >
        </li>
        <li>
          <a href="forms.html"
            ><i class="fa-brands fa-wpforms"></i>
            <p>Forms</p></a
          >
        </li>
        <li>
          <a href="badges.html"
            ><i class="fa-solid fa-award"></i>
            <p>Badges</p></a
          >
        </li>
        <li>
          <a href="about.html"
            ><i class="fa-solid fa-mobile-button"></i>
            <p>About</p></a
          >
        </li>
        <li>
          <a href="settings.html"
            ><i class="fa-solid fa-gear"></i>
            <p>Settings</p></a
          >
        </li>
      </ul>
    </aside>

    <div class="settings-container">
      <h1>Settings</h1>
=======
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
            alt="Alex Carter Profile Picture"
          />

          <button type="button">
            Change
          </button>
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)

      <div class="settings-card">
        <h2>Profile</h2>
        <label>Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

<<<<<<< HEAD
        <label>Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
=======
        <div class="profile-form">

          <div class="input-group">

            <label for="fullName">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value="Alex Carter"
            />

          </div>

          <div class="input-group">

            <label for="emailAddress">
              Email Address
            </label>

            <input
              id="emailAddress"
              type="email"
              value="alex@uiverse.io"
            />

          </div>

          <div class="input-group">

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
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)

        <button id="saveBtn">Save Changes</button>
      </div>

      <div class="settings-card">
        <h2>Password</h2>
        <label>Current Password</label>
        <input type="password" id="currentPass" placeholder="Enter current password" autocomplete="off"/>

        <label>New Password</label>
        <input type="password" id="newPass" placeholder="Enter new password" autocomplete="off" />

        <button id="passBtn">Password update</button>
      </div>

      <div class="settings-card">
        <h2>Preferences</h2>

        <div class="toggle">
          <span>Dark Mode</span>
          <input type="checkbox" id="dark-Toggle"/>
        </div>

        <div class="toggle">
          <span>Email</span>
          <input type="checkbox" id="emailToggle"/>
        </div>
      </div>
    </div>

<<<<<<< HEAD
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
=======
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

          <label
            class="switch"
            aria-label="Toggle Push Notifications"
          >

            <input
              type="checkbox"
              checked
            />

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

          <label
            class="switch"
            aria-label="Toggle Email Alerts"
          >

            <input
              type="checkbox"
              checked
            />

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

          <label
            class="switch"
            aria-label="Toggle Mention Alerts"
          >

            <input type="checkbox" />

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

        <button
          type="button"
          class="security-btn"
        >

          <i
            class="fa-solid fa-lock"
            aria-hidden="true"
          ></i>

          Change Password

        </button>

        <button
          type="button"
          class="security-btn"
        >

          <i
            class="fa-solid fa-shield"
            aria-hidden="true"
          ></i>

          Enable 2FA

        </button>

        <button
          type="button"
          class="security-btn"
        >

          <i
            class="fa-solid fa-laptop"
            aria-hidden="true"
          ></i>

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

        <div
          class="progress-bar"
          aria-label="Storage Usage"
        >

          <div class="progress-fill"></div>

        </div>

        <button
          type="button"
          class="upgrade-btn"
        >
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

      <button
        type="button"
        class="danger-btn"
      >
        Delete Account
      </button>

    </div>

  </section>

</main>
>>>>>>> e2f342d ([Feature]: Create a snippet export pipeline that keeps HTML, JSX, and Vue examples in sync)
</template>

<script>
export default { name: 'Settings' }
</script>
