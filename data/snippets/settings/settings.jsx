import React from 'react';

export default function settings(){
  return (
    <>
      <i className="fa-solid fa-bars menu-toggle" id="menuToggle"></i>
          <aside className="sidebar">
            <h2>UIverse</h2>
            <ul>
      
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
    </>
  );
}
