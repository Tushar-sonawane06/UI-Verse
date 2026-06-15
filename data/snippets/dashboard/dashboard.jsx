import React from 'react';

export default function dashboard(){
  return (
    <>
      <main className="main-home">
      
        {/* ======================================================
        NAVBAR
        ====================================================== */}
      
        <header className="navbar">
      
          {/* LEFT */}
      
          <div className="navbar-left">
      
            <div className="search-bar">
      
              <i className="fa-solid fa-magnifying-glass"></i>
      
              <input
                type="text"
                placeholder="Search analytics, reports..."
               />
      
            </div>
      
          </div>
      
          {/* RIGHT */}
      
          <div className="nav-right">
      
            {/* NOTIFICATION */}
      
            <button className="icon-btn">
      
              <i className="fa-regular fa-bell"></i>
      
              <span className="notify-dot"></span>
      
            </button>
      
            {/* MESSAGE */}
      
            <button className="icon-btn">
      
              <i className="fa-regular fa-envelope"></i>
      
            </button>
      
            {/* EXPORT */}
      
            <button className="nav-btn outline-btn">
      
              <i className="fa-solid fa-download"></i>
      
              Export
      
            </button>
      
            {/* UPGRADE */}
      
            <button className="nav-btn primary-btn">
      
              <i className="fa-solid fa-crown"></i>
      
              Upgrade
      
            </button>
      
            {/* PROFILE */}
      
            <div className="profile">
      
              <img
                src="https://i.pravatar.cc/100?img=15"
                alt="Profile"
               />
      
              <div className="profile-info">
      
                <strong>
                  Dipanita
                </strong>
      
                <span>
                  UI Designer
                </span>
      
              </div>
      
            </div>
      
          </div>
      
        </header>
      
        {/* ======================================================
        HERO SECTION
        ====================================================== */}
      
        <section className="hero-section">
      
          {/* LEFT */}
      
          <div className="hero-left">
      
            <span className="hero-badge">
      
              <i className="fa-solid fa-sparkles"></i>
      
              Premium Dashboard Experience
      
            </span>
      
            <h1>
      
              Modern Analytics
              <span>
                Dashboard
              </span>
      
            </h1>
      
            <p>
      
              Monitor growth, analyze traffic,
              manage users and track performance
              using futuristic widgets crafted
              for premium SaaS interfaces.
      
            </p>
      
            {/* ACTIONS */}
      
            <div className="hero-actions">
      
              <button className="hero-btn primary-btn">
      
                <i className="fa-solid fa-chart-line"></i>
      
                Open Analytics
      
              </button>
      
              <button className="hero-btn secondary-btn">
      
                <i className="fa-solid fa-play"></i>
      
                Watch Demo
      
              </button>
      
            </div>
      
            {/* MINI STATS */}
      
            <div className="hero-stats-row">
      
              <div className="mini-stat">
      
                <h3>
                  24K+
                </h3>
      
                <span>
                  Users
                </span>
      
              </div>
      
              <div className="mini-stat">
      
                <h3>
                  890K
                </h3>
      
                <span>
                  Views
                </span>
      
              </div>
      
              <div className="mini-stat">
      
                <h3>
                  99%
                </h3>
      
                <span>
                  Performance
                </span>
      
              </div>
      
            </div>
      
          </div>
      
          {/* RIGHT */}
      
          <div className="hero-visual">
      
            <div className="dashboard-preview">
      
              <div className="preview-top">
      
                <span></span>
                <span></span>
                <span></span>
      
              </div>
      
              <div className="preview-grid">
      
                <div className="preview-card purple-card">
      
                  <i className="fa-solid fa-chart-pie"></i>
      
                  <h4>
                    Analytics
                  </h4>
      
                </div>
      
                <div className="preview-card blue-card">
      
                  <i className="fa-solid fa-users"></i>
      
                  <h4>
                    Users
                  </h4>
      
                </div>
      
                <div className="preview-card glass-card">
      
                  <i className="fa-solid fa-layer-group"></i>
      
                  <h4>
                    Components
                  </h4>
      
                </div>
      
                <div className="preview-card orange-card">
      
                  <i className="fa-solid fa-bolt"></i>
      
                  <h4>
                    Realtime
                  </h4>
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
        </section>
      
        {/* ======================================================
        QUICK ACTIONS
        ====================================================== */}
      
        <section className="quick-actions">
      
          <button className="quick-card">
      
            <i className="fa-solid fa-plus"></i>
      
            <span>
              New Project
            </span>
      
          </button>
      
          <button className="quick-card">
      
            <i className="fa-solid fa-chart-line"></i>
      
            <span>
              Generate Report
            </span>
      
          </button>
      
          <button className="quick-card">
      
            <i className="fa-solid fa-users"></i>
      
            <span>
              Manage Team
            </span>
      
          </button>
      
          <button className="quick-card">
      
            <i className="fa-solid fa-cloud-arrow-up"></i>
      
            <span>
              Upload Files
            </span>
      
          </button>
      
        </section>
      
        {/* ======================================================
        STATS GRID
        ====================================================== */}
      
        <section className="stats-grid">
      
          {/* CARD */}
      
          <div className="stat-card">
      
            <div className="stat-icon orange">
      
              <i className="fa-solid fa-users"></i>
      
            </div>
      
            <div>
      
              <h2>
                24,580
              </h2>
      
              <p>
                Active Users
              </p>
      
            </div>
      
            <div className="trend positive">
      
              +12%
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="stat-card">
      
            <div className="stat-icon purple">
      
              <i className="fa-solid fa-layer-group"></i>
      
            </div>
      
            <div>
      
              <h2>
                128
              </h2>
      
              <p>
                Components
              </p>
      
            </div>
      
            <div className="trend positive">
      
              +8%
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="stat-card">
      
            <div className="stat-icon blue">
      
              <i className="fa-solid fa-eye"></i>
      
            </div>
      
            <div>
      
              <h2>
                890K
              </h2>
      
              <p>
                Monthly Views
              </p>
      
            </div>
      
            <div className="trend positive">
      
              +18%
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="stat-card">
      
            <div className="stat-icon green">
      
              <i className="fa-solid fa-chart-line"></i>
      
            </div>
      
            <div>
      
              <h2>
                82%
              </h2>
      
              <p>
                Growth Rate
              </p>
      
            </div>
      
            <div className="trend positive">
      
              +4%
      
            </div>
      
          </div>
      
        </section>
      
        {/* ======================================================
        DASHBOARD GRID
        ====================================================== */}
      
        <section className="dashboard-grid">
      
          {/* ANALYTICS */}
      
          <div className="dashboard-card large-card" id="card-traffic">
      
            <div className="nc-copy-btn" onclick="copyCode('card-traffic')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
      
            <div className="card-header">
      
              <div>
      
                <h2>
                  Traffic Analytics
                </h2>
      
                <p>
                  Website traffic for last 6 months
                </p>
      
              </div>
      
              <button className="filter-btn">
      
                Monthly
      
                <i className="fa-solid fa-angle-down"></i>
      
              </button>
      
            </div>
      
            {/* CHART */}
      
            <div className="line-chart">
      
              <span style="height:40%"></span>
              <span style="height:65%"></span>
              <span style="height:55%"></span>
              <span style="height:85%"></span>
              <span style="height:75%"></span>
              <span style="height:95%"></span>
      
            </div>
      
            {/* CHART LABELS */}
      
            <div className="chart-labels">
      
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
      
            </div>
      
            <textarea className="nc-code-storage" id="code-card-traffic" readonly>{/* Traffic Analytics Card */}
      <div className="dashboard-card large-card">
        <div className="card-header">
          <div>
            <h2>Traffic Analytics</h2>
            <p>Website traffic for last 6 months</p>
          </div>
          <button className="filter-btn">Monthly <i className="fa-solid fa-angle-down"></i></button>
        </div>
        <div className="line-chart">
          <span style="height:40%"></span>
          <span style="height:65%"></span>
          <span style="height:55%"></span>
          <span style="height:85%"></span>
          <span style="height:75%"></span>
          <span style="height:95%"></span>
        </div>
        <div className="chart-labels">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div></textarea>
      
          </div>
      
          {/* RECENT ACTIVITY */}
      
          <div className="dashboard-card" id="card-activity">
      
            <div className="nc-copy-btn" onclick="copyCode('card-activity')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
      
            <div className="card-header">
      
              <h2>
                Recent Activity
              </h2>
      
            </div>
      
            <div className="activity-list">
      
              <div className="activity-item">
      
                <div className="activity-dot green"></div>
      
                <div>
      
                  <strong>
                    New component uploaded
                  </strong>
      
                  <span>
                    2 minutes ago
                  </span>
      
                </div>
      
              </div>
      
              <div className="activity-item">
      
                <div className="activity-dot purple"></div>
      
                <div>
      
                  <strong>
                    UI template updated
                  </strong>
      
                  <span>
                    15 minutes ago
                  </span>
      
                </div>
      
              </div>
      
              <div className="activity-item">
      
                <div className="activity-dot orange"></div>
      
                <div>
      
                  <strong>
                    New contributor joined
                  </strong>
      
                  <span>
                    1 hour ago
                  </span>
      
                </div>
      
              </div>
      
            </div>
      
            <textarea className="nc-code-storage" id="code-card-activity" readonly>{/* Recent Activity Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Recent Activity</h2>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-dot green"></div>
            <div>
              <strong>New component uploaded</strong>
              <span>2 minutes ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot purple"></div>
            <div>
              <strong>UI template updated</strong>
              <span>15 minutes ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot orange"></div>
            <div>
              <strong>New contributor joined</strong>
              <span>1 hour ago</span>
            </div>
          </div>
        </div>
      </div></textarea>
      
          </div>
      
          {/* PROGRESS */}
      
          <div className="dashboard-card" id="card-progress">
      
            <div className="nc-copy-btn" onclick="copyCode('card-progress')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
      
            <div className="card-header">
      
              <h2>
                Project Progress
              </h2>
      
            </div>
      
            <div className="progress-group">
      
              <div className="progress-item">
      
                <div className="progress-top">
      
                  <span>
                    Dashboard UI
                  </span>
      
                  <strong>
                    90%
                  </strong>
      
                </div>
      
                <div className="progress-bar">
      
                  <div
                    className="progress-fill orange-fill"
                    style="width:90%"
                  ></div>
      
                </div>
      
              </div>
      
              <div className="progress-item">
      
                <div className="progress-top">
      
                  <span>
                    Components
                  </span>
      
                  <strong>
                    75%
                  </strong>
      
                </div>
      
                <div className="progress-bar">
      
                  <div
                    className="progress-fill purple-fill"
                    style="width:75%"
                  ></div>
      
                </div>
      
              </div>
      
              <div className="progress-item">
      
                <div className="progress-top">
      
                  <span>
                    API System
                  </span>
      
                  <strong>
                    60%
                  </strong>
      
                </div>
      
                <div className="progress-bar">
      
                  <div
                    className="progress-fill blue-fill"
                    style="width:60%"
                  ></div>
      
                </div>
      
              </div>
      
            </div>
      
            <textarea className="nc-code-storage" id="code-card-progress" readonly>{/* Project Progress Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Project Progress</h2>
        </div>
        <div className="progress-group">
          <div className="progress-item">
            <div className="progress-top">
              <span>Dashboard UI</span>
              <strong>90%</strong>
            </div>
            <div className="progress-bar">
              <div className="progress-fill orange-fill" style="width:90%"></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-top">
              <span>Components</span>
              <strong>75%</strong>
            </div>
            <div className="progress-bar">
              <div className="progress-fill purple-fill" style="width:75%"></div>
            </div>
          </div>
        </div>
      </div></textarea>
      
          </div>
      
          {/* TEAM */}
      
          <div className="dashboard-card" id="card-team">
      
            <div className="nc-copy-btn" onclick="copyCode('card-team')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
      
            <div className="card-header">
      
              <h2>
                Team Members
              </h2>
      
            </div>
      
            <div className="team-members">
      
              <img src="https://i.pravatar.cc/100?img=12" alt="" />
              <img src="https://i.pravatar.cc/100?img=22" alt="" />
              <img src="https://i.pravatar.cc/100?img=32" alt="" />
              <img src="https://i.pravatar.cc/100?img=42" alt="" />
      
            </div>
      
            <textarea className="nc-code-storage" id="code-card-team" readonly>{/* Team Members Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Team Members</h2>
        </div>
        <div className="team-members">
          <img src="https://i.pravatar.cc/100?img=12" alt="" />
          <img src="https://i.pravatar.cc/100?img=22" alt="" />
          <img src="https://i.pravatar.cc/100?img=32" alt="" />
          <img src="https://i.pravatar.cc/100?img=42" alt="" />
        </div>
      </div></textarea>
      
          </div>
      
          {/* REVENUE OVERVIEW */}
          <div className="dashboard-card" id="card-revenue">
            <div className="nc-copy-btn" onclick="copyCode('card-revenue')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
            <div className="card-header">
              <h2>Revenue</h2>
              <button className="filter-btn">This Week <i className="fa-solid fa-angle-down"></i></button>
            </div>
            <div className="revenue-stats">
              <h3>$45,231</h3>
              <span className="trend positive"><i className="fa-solid fa-arrow-up"></i> 14.5%</span>
            </div>
            <div className="revenue-chart">
              <div className="bar" style="height: 40%;"></div>
              <div className="bar" style="height: 60%;"></div>
              <div className="bar" style="height: 30%;"></div>
              <div className="bar" style="height: 80%;"></div>
              <div className="bar" style="height: 50%;"></div>
              <div className="bar" style="height: 90%;"></div>
              <div className="bar" style="height: 100%;"></div>
            </div>
            <textarea className="nc-code-storage" id="code-card-revenue" readonly>{/* Revenue Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Revenue</h2>
          <button className="filter-btn">This Week <i className="fa-solid fa-angle-down"></i></button>
        </div>
        <div className="revenue-stats">
          <h3>$45,231</h3>
          <span className="trend positive"><i className="fa-solid fa-arrow-up"></i> 14.5%</span>
        </div>
        <div className="revenue-chart">
          <div className="bar" style="height: 40%;"></div>
          <div className="bar" style="height: 60%;"></div>
          <div className="bar" style="height: 30%;"></div>
          <div className="bar" style="height: 80%;"></div>
          <div className="bar" style="height: 50%;"></div>
          <div className="bar" style="height: 90%;"></div>
          <div className="bar" style="height: 100%;"></div>
        </div>
      </div></textarea>
          </div>
      
          {/* SERVER STATUS */}
          <div className="dashboard-card" id="card-server">
            <div className="nc-copy-btn" onclick="copyCode('card-server')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
            <div className="card-header">
              <h2>Server Status</h2>
            </div>
            <div className="server-status-list">
              <div className="server-item">
                <div className="server-info">
                  <i className="fa-solid fa-server"></i>
                  <span>Main DB</span>
                </div>
                <div className="status-badge online">Online</div>
              </div>
              <div className="server-item">
                <div className="server-info">
                  <i className="fa-solid fa-cloud"></i>
                  <span>CDN</span>
                </div>
                <div className="status-badge online">Online</div>
              </div>
              <div className="server-item">
                <div className="server-info">
                  <i className="fa-solid fa-microchip"></i>
                  <span>Worker</span>
                </div>
                <div className="status-badge offline">Offline</div>
              </div>
            </div>
            <textarea className="nc-code-storage" id="code-card-server" readonly>{/* Server Status Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Server Status</h2>
        </div>
        <div className="server-status-list">
          <div className="server-item">
            <div className="server-info">
              <i className="fa-solid fa-server"></i>
              <span>Main DB</span>
            </div>
            <div className="status-badge online">Online</div>
          </div>
          <div className="server-item">
            <div className="server-info">
              <i className="fa-solid fa-cloud"></i>
              <span>CDN</span>
            </div>
            <div className="status-badge online">Online</div>
          </div>
        </div>
      </div></textarea>
          </div>
      
          {/* TOP PERFORMERS */}
          <div className="dashboard-card" id="card-performers">
            <div className="nc-copy-btn" onclick="copyCode('card-performers')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
            <div className="card-header">
              <h2>Top Performers</h2>
            </div>
            <div className="performers-list">
              <div className="performer-item">
                <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                <div className="performer-details">
                  <strong>John Doe</strong>
                  <span>1,430 Sales</span>
                </div>
                <div className="rank gold">#1</div>
              </div>
              <div className="performer-item">
                <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" />
                <div className="performer-details">
                  <strong>Jane Smith</strong>
                  <span>1,200 Sales</span>
                </div>
                <div className="rank silver">#2</div>
              </div>
              <div className="performer-item">
                <img src="https://i.pravatar.cc/100?img=9" alt="Avatar" />
                <div className="performer-details">
                  <strong>Mike Johnson</strong>
                  <span>980 Sales</span>
                </div>
                <div className="rank bronze">#3</div>
              </div>
            </div>
            <textarea className="nc-code-storage" id="code-card-performers" readonly>{/* Top Performers Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Top Performers</h2>
        </div>
        <div className="performers-list">
          <div className="performer-item">
            <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
            <div className="performer-details">
              <strong>John Doe</strong>
              <span>1,430 Sales</span>
            </div>
            <div className="rank gold">#1</div>
          </div>
          <div className="performer-item">
            <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" />
            <div className="performer-details">
              <strong>Jane Smith</strong>
              <span>1,200 Sales</span>
            </div>
            <div className="rank silver">#2</div>
          </div>
        </div>
      </div></textarea>
          </div>
      
          {/* SYSTEM LOAD */}
          <div className="dashboard-card" id="card-system">
            <div className="nc-copy-btn" onclick="copyCode('card-system')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
            <div className="card-header">
              <h2>System Load</h2>
            </div>
            <div className="system-load-circle">
              <div className="circle-outer">
                <div className="circle-inner">
                  <span className="load-value">78%</span>
                  <span className="load-label">CPU</span>
                </div>
              </div>
            </div>
            <div className="load-stats">
              <div className="load-stat-item">
                <span>RAM</span>
                <strong>12GB/16GB</strong>
              </div>
              <div className="load-stat-item">
                <span>Temp</span>
                <strong>65°C</strong>
              </div>
            </div>
            <textarea className="nc-code-storage" id="code-card-system" readonly>{/* System Load Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>System Load</h2>
        </div>
        <div className="system-load-circle">
          <div className="circle-outer">
            <div className="circle-inner">
              <span className="load-value">78%</span>
              <span className="load-label">CPU</span>
            </div>
          </div>
        </div>
        <div className="load-stats">
          <div className="load-stat-item">
            <span>RAM</span>
            <strong>12GB/16GB</strong>
          </div>
          <div className="load-stat-item">
            <span>Temp</span>
            <strong>65°C</strong>
          </div>
        </div>
      </div></textarea>
          </div>
      
          {/* UPCOMING TASKS */}
          <div className="dashboard-card" id="card-tasks">
            <div className="nc-copy-btn" onclick="copyCode('card-tasks')" title="Copy Code">
              <i className="fa-regular fa-copy"></i>
              <span className="copy-label">Copy</span>
            </div>
            <div className="card-header">
              <h2>Upcoming Tasks</h2>
            </div>
            <div className="task-list">
              <label className="task-item">
                <input type="checkbox" checked />
                <span className="task-text">Review Q3 Financials</span>
                <span className="task-tag urgent">Urgent</span>
              </label>
              <label className="task-item">
                <input type="checkbox" />
                <span className="task-text">Update Marketing Assets</span>
                <span className="task-tag medium">Medium</span>
              </label>
              <label className="task-item">
                <input type="checkbox" />
                <span className="task-text">Team Sync Meeting</span>
                <span className="task-tag low">Low</span>
              </label>
            </div>
            <textarea className="nc-code-storage" id="code-card-tasks" readonly>{/* Upcoming Tasks Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Upcoming Tasks</h2>
        </div>
        <div className="task-list">
          <label className="task-item">
            <input type="checkbox" checked />
            <span className="task-text">Review Q3 Financials</span>
            <span className="task-tag urgent">Urgent</span>
          </label>
          <label className="task-item">
            <input type="checkbox" />
            <span className="task-text">Update Marketing Assets</span>
            <span className="task-tag medium">Medium</span>
          </label>
          <label className="task-item">
            <input type="checkbox" />
            <span className="task-text">Team Sync Meeting</span>
            <span className="task-tag low">Low</span>
          </label>
        </div>
      </div></textarea>
          </div>
      
        </section>
      
        {/* ======================================================
        NEW COMPONENTS SECTION
        ====================================================== */}
        <section className="new-components-section">
      
          <div className="section-title-row">
            <h2 className="section-heading">Premium Components <span>+5 New</span></h2>
            <p className="section-sub">Click the copy icon on any card to grab the code instantly.</p>
          </div>
      
          <div className="dashboard-grid new-grid">
      
            {/* ── 1. CRYPTO WALLET ── */}
            <div className="dashboard-card nc-card" id="nc-crypto">
      
              <div className="nc-copy-btn" onclick="copyCode('nc-crypto')" title="Copy Code">
                <i className="fa-regular fa-copy"></i>
                <span className="copy-label">Copy</span>
              </div>
      
              <div className="card-header">
                <h2>Crypto Wallet</h2>
                <span className="nc-badge">Live</span>
              </div>
      
              <div className="wallet-balance-row">
                <div>
                  <p className="wallet-label">Total Balance</p>
                  <h3 className="wallet-total">$84,231.50</h3>
                </div>
                <div className="wallet-change positive">
                  <i className="fa-solid fa-arrow-trend-up"></i> +6.4%
                </div>
              </div>
      
              <div className="crypto-list">
                <div className="crypto-item">
                  <div className="crypto-icon btc-icon"><i className="fa-brands fa-bitcoin"></i></div>
                  <div className="crypto-details">
                    <strong>Bitcoin</strong>
                    <span>BTC</span>
                  </div>
                  <div className="crypto-right">
                    <strong>$51,320</strong>
                    <span className="positive-sm">+2.3%</span>
                  </div>
                </div>
                <div className="crypto-item">
                  <div className="crypto-icon eth-icon"><i className="fa-brands fa-ethereum"></i></div>
                  <div className="crypto-details">
                    <strong>Ethereum</strong>
                    <span>ETH</span>
                  </div>
                  <div className="crypto-right">
                    <strong>$22,411</strong>
                    <span className="positive-sm">+1.7%</span>
                  </div>
                </div>
                <div className="crypto-item">
                  <div className="crypto-icon sol-icon"><i className="fa-solid fa-coins"></i></div>
                  <div className="crypto-details">
                    <strong>Solana</strong>
                    <span>SOL</span>
                  </div>
                  <div className="crypto-right">
                    <strong>$10,500</strong>
                    <span className="negative-sm">-0.9%</span>
                  </div>
                </div>
              </div>
      
              {/* hidden code block */}
              <textarea className="nc-code-storage" id="code-nc-crypto" readonly>{/* Crypto Wallet Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Crypto Wallet</h2>
          <span className="nc-badge">Live</span>
        </div>
        <div className="wallet-balance-row">
          <div>
            <p className="wallet-label">Total Balance</p>
            <h3 className="wallet-total">$84,231.50</h3>
          </div>
          <div className="wallet-change positive">
            <i className="fa-solid fa-arrow-trend-up"></i> +6.4%
          </div>
        </div>
        <div className="crypto-list">
          <div className="crypto-item">
            <div className="crypto-icon btc-icon"><i className="fa-brands fa-bitcoin"></i></div>
            <div className="crypto-details"><strong>Bitcoin</strong><span>BTC</span></div>
            <div className="crypto-right"><strong>$51,320</strong><span className="positive-sm">+2.3%</span></div>
          </div>
          <div className="crypto-item">
            <div className="crypto-icon eth-icon"><i className="fa-brands fa-ethereum"></i></div>
            <div className="crypto-details"><strong>Ethereum</strong><span>ETH</span></div>
            <div className="crypto-right"><strong>$22,411</strong><span className="positive-sm">+1.7%</span></div>
          </div>
        </div>
      </div></textarea>
      
            </div>
      
            {/* ── 2. NOTIFICATION CENTER ── */}
            <div className="dashboard-card nc-card" id="nc-notif">
      
              <div className="nc-copy-btn" onclick="copyCode('nc-notif')" title="Copy Code">
                <i className="fa-regular fa-copy"></i>
                <span className="copy-label">Copy</span>
              </div>
      
              <div className="card-header">
                <h2>Notifications</h2>
                <span className="notif-count">3 New</span>
              </div>
      
              <div className="notif-feed">
      
                <div className="notif-row unread">
                  <div className="notif-avatar" style="background:linear-gradient(135deg,#7b5cff,#00d4ff)">
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <div className="notif-body">
                    <strong>New user registered</strong>
                    <span>Alex joined UIverse · 3m ago</span>
                  </div>
                  <div className="notif-dot"></div>
                </div>
      
                <div className="notif-row unread">
                  <div className="notif-avatar" style="background:linear-gradient(135deg,#ff7a3d,#ffb347)">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <div className="notif-body">
                    <strong>Server spike detected</strong>
                    <span>CPU hit 94% · 12m ago</span>
                  </div>
                  <div className="notif-dot"></div>
                </div>
      
                <div className="notif-row unread">
                  <div className="notif-avatar" style="background:linear-gradient(135deg,#22c55e,#4ade80)">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="notif-body">
                    <strong>Deployment successful</strong>
                    <span>v2.4.0 is live · 1h ago</span>
                  </div>
                  <div className="notif-dot"></div>
                </div>
      
                <div className="notif-row">
                  <div className="notif-avatar" style="background:linear-gradient(135deg,#ff4fd8,#9b59b6)">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="notif-body">
                    <strong>Design feedback received</strong>
                    <span>From Sarah · 3h ago</span>
                  </div>
                </div>
      
              </div>
      
              <button className="nc-mark-read-btn">Mark all as read</button>
      
              <textarea className="nc-code-storage" id="code-nc-notif" readonly>{/* Notification Center Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Notifications</h2>
          <span className="notif-count">3 New</span>
        </div>
        <div className="notif-feed">
          <div className="notif-row unread">
            <div className="notif-avatar"><i className="fa-solid fa-user-plus"></i></div>
            <div className="notif-body">
              <strong>New user registered</strong>
              <span>Alex joined UIverse · 3m ago</span>
            </div>
            <div className="notif-dot"></div>
          </div>
          <div className="notif-row unread">
            <div className="notif-avatar"><i className="fa-solid fa-bolt"></i></div>
            <div className="notif-body">
              <strong>Server spike detected</strong>
              <span>CPU hit 94% · 12m ago</span>
            </div>
            <div className="notif-dot"></div>
          </div>
        </div>
        <button className="nc-mark-read-btn">Mark all as read</button>
      </div></textarea>
      
            </div>
      
            {/* ── 3. USER ACQUISITION DONUT ── */}
            <div className="dashboard-card nc-card" id="nc-donut">
      
              <div className="nc-copy-btn" onclick="copyCode('nc-donut')" title="Copy Code">
                <i className="fa-regular fa-copy"></i>
                <span className="copy-label">Copy</span>
              </div>
      
              <div className="card-header">
                <h2>User Acquisition</h2>
              </div>
      
              <div className="donut-wrapper">
                <svg className="donut-svg" viewBox="0 0 120 120">
                  <circle className="donut-track" cx="60" cy="60" r="48"/>
                  <circle className="donut-seg seg1" cx="60" cy="60" r="48" stroke-dasharray="90 212"/>
                  <circle className="donut-seg seg2" cx="60" cy="60" r="48" stroke-dasharray="62 212" stroke-dashoffset="-90"/>
                  <circle className="donut-seg seg3" cx="60" cy="60" r="48" stroke-dasharray="40 212" stroke-dashoffset="-152"/>
                  <circle className="donut-seg seg4" cx="60" cy="60" r="48" stroke-dasharray="20 212" stroke-dashoffset="-192"/>
                </svg>
                <div className="donut-center">
                  <span className="donut-total">24K</span>
                  <span className="donut-lbl">Users</span>
                </div>
              </div>
      
              <div className="donut-legend">
                <div className="legend-item"><span className="legend-dot" style="background:#7b5cff"></span>Organic <strong>42%</strong></div>
                <div className="legend-item"><span className="legend-dot" style="background:#00d4ff"></span>Social <strong>29%</strong></div>
                <div className="legend-item"><span className="legend-dot" style="background:#ff7a3d"></span>Referral <strong>19%</strong></div>
                <div className="legend-item"><span className="legend-dot" style="background:#22c55e"></span>Direct <strong>10%</strong></div>
              </div>
      
              <textarea className="nc-code-storage" id="code-nc-donut" readonly>{/* User Acquisition Donut Card */}
      <div className="dashboard-card">
        <div className="card-header"><h2>User Acquisition</h2></div>
        <div className="donut-wrapper">
          <svg className="donut-svg" viewBox="0 0 120 120">
            <circle className="donut-track" cx="60" cy="60" r="48"/>
            <circle className="donut-seg seg1" cx="60" cy="60" r="48" stroke-dasharray="90 212"/>
            <circle className="donut-seg seg2" cx="60" cy="60" r="48" stroke-dasharray="62 212" stroke-dashoffset="-90"/>
            <circle className="donut-seg seg3" cx="60" cy="60" r="48" stroke-dasharray="40 212" stroke-dashoffset="-152"/>
            <circle className="donut-seg seg4" cx="60" cy="60" r="48" stroke-dasharray="20 212" stroke-dashoffset="-192"/>
          </svg>
          <div className="donut-center">
            <span className="donut-total">24K</span>
            <span className="donut-lbl">Users</span>
          </div>
        </div>
        <div className="donut-legend">
          <div className="legend-item"><span className="legend-dot" style="background:#7b5cff"></span>Organic <strong>42%</strong></div>
          <div className="legend-item"><span className="legend-dot" style="background:#00d4ff"></span>Social <strong>29%</strong></div>
        </div>
      </div></textarea>
      
            </div>
      
            {/* ── 4. WEATHER WIDGET ── */}
            <div className="dashboard-card nc-card weather-card" id="nc-weather">
      
              <div className="nc-copy-btn" onclick="copyCode('nc-weather')" title="Copy Code">
                <i className="fa-regular fa-copy"></i>
                <span className="copy-label">Copy</span>
              </div>
      
              <div className="weather-main">
                <div className="weather-icon-wrap">
                  <i className="fa-solid fa-sun weather-sun"></i>
                </div>
                <div className="weather-info">
                  <h2 className="weather-temp">28°C</h2>
                  <p className="weather-condition">Sunny & Clear</p>
                  <span className="weather-loc"><i className="fa-solid fa-location-dot"></i> Mumbai, IN</span>
                </div>
              </div>
      
              <div className="weather-stats-row">
                <div className="weather-stat">
                  <i className="fa-solid fa-droplet"></i>
                  <span>Humidity</span>
                  <strong>68%</strong>
                </div>
                <div className="weather-stat">
                  <i className="fa-solid fa-wind"></i>
                  <span>Wind</span>
                  <strong>14 km/h</strong>
                </div>
                <div className="weather-stat">
                  <i className="fa-solid fa-eye"></i>
                  <span>Visibility</span>
                  <strong>10 km</strong>
                </div>
              </div>
      
              <div className="weather-forecast">
                <div className="forecast-day">
                  <span>Mon</span>
                  <i className="fa-solid fa-sun"></i>
                  <strong>30°</strong>
                </div>
                <div className="forecast-day">
                  <span>Tue</span>
                  <i className="fa-solid fa-cloud-sun"></i>
                  <strong>27°</strong>
                </div>
                <div className="forecast-day">
                  <span>Wed</span>
                  <i className="fa-solid fa-cloud-rain"></i>
                  <strong>22°</strong>
                </div>
                <div className="forecast-day">
                  <span>Thu</span>
                  <i className="fa-solid fa-cloud"></i>
                  <strong>25°</strong>
                </div>
                <div className="forecast-day">
                  <span>Fri</span>
                  <i className="fa-solid fa-sun"></i>
                  <strong>31°</strong>
                </div>
              </div>
      
              <textarea className="nc-code-storage" id="code-nc-weather" readonly>{/* Weather Widget Card */}
      <div className="dashboard-card weather-card">
        <div className="weather-main">
          <div className="weather-icon-wrap">
            <i className="fa-solid fa-sun weather-sun"></i>
          </div>
          <div className="weather-info">
            <h2 className="weather-temp">28°C</h2>
            <p className="weather-condition">Sunny & Clear</p>
            <span className="weather-loc"><i className="fa-solid fa-location-dot"></i> Mumbai, IN</span>
          </div>
        </div>
        <div className="weather-stats-row">
          <div className="weather-stat"><i className="fa-solid fa-droplet"></i><span>Humidity</span><strong>68%</strong></div>
          <div className="weather-stat"><i className="fa-solid fa-wind"></i><span>Wind</span><strong>14 km/h</strong></div>
          <div className="weather-stat"><i className="fa-solid fa-eye"></i><span>Visibility</span><strong>10 km</strong></div>
        </div>
        <div className="weather-forecast">
          <div className="forecast-day"><span>Mon</span><i className="fa-solid fa-sun"></i><strong>30°</strong></div>
          <div className="forecast-day"><span>Tue</span><i className="fa-solid fa-cloud-sun"></i><strong>27°</strong></div>
          <div className="forecast-day"><span>Wed</span><i className="fa-solid fa-cloud-rain"></i><strong>22°</strong></div>
        </div>
      </div></textarea>
      
            </div>
      
            {/* ── 5. QUICK NOTES ── */}
            <div className="dashboard-card nc-card" id="nc-notes">
      
              <div className="nc-copy-btn" onclick="copyCode('nc-notes')" title="Copy Code">
                <i className="fa-regular fa-copy"></i>
                <span className="copy-label">Copy</span>
              </div>
      
              <div className="card-header">
                <h2>Quick Notes</h2>
                <button className="add-note-btn" onclick="addNote()" title="Add note">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
      
              <div className="notes-grid" id="notesGrid">
      
                <div className="sticky-note note-purple">
                  <div className="note-header">
                    <span className="note-dot"></span>
                    <button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <textarea className="note-area" placeholder="Write something...">Redesign landing page hero section by Friday 🚀</textarea>
                </div>
      
                <div className="sticky-note note-blue">
                  <div className="note-header">
                    <span className="note-dot"></span>
                    <button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <textarea className="note-area" placeholder="Write something...">Team standup at 10 AM – prepare sprint update</textarea>
                </div>
      
                <div className="sticky-note note-orange">
                  <div className="note-header">
                    <span className="note-dot"></span>
                    <button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <textarea className="note-area" placeholder="Write something...">Follow up with client re: API integration docs 📋</textarea>
                </div>
      
                <div className="sticky-note note-green">
                  <div className="note-header">
                    <span className="note-dot"></span>
                    <button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <textarea className="note-area" placeholder="Write something...">Ship v2.4.0 changelog to product team ✅</textarea>
                </div>
      
              </div>
      
              <textarea className="nc-code-storage" id="code-nc-notes" readonly>{/* Quick Notes Card */}
      <div className="dashboard-card">
        <div className="card-header">
          <h2>Quick Notes</h2>
          <button className="add-note-btn" onclick="addNote()"><i className="fa-solid fa-plus"></i></button>
        </div>
        <div className="notes-grid" id="notesGrid">
          <div className="sticky-note note-purple">
            <div className="note-header">
              <span className="note-dot"></span>
              <button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button>
            </div>
            <textarea className="note-area" placeholder="Write something...">Redesign landing page hero section by Friday 🚀</textarea>
          </div>
          <div className="sticky-note note-blue">
            <div className="note-header">
              <span className="note-dot"></span>
              <button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button>
            </div>
            <textarea className="note-area" placeholder="Write something...">Team standup at 10 AM – prepare sprint update</textarea>
          </div>
        </div>
      </div>
      
      <script>
      function addNote() {
        const colors = ['note-purple','note-blue','note-orange','note-green'];
        const grid = document.getElementById('notesGrid');
        const note = document.createElement('div');
        note.className = 'sticky-note ' + colors[Math.floor(Math.random()*colors.length)];
        note.innerHTML = '<div className="note-header"><span className="note-dot"></span><button className="note-del" onclick="deleteNote(this)"><i className="fa-solid fa-xmark"></i></button></div><textarea className="note-area" placeholder="Write something..."></textarea>';
        grid.appendChild(note);
      }
      function deleteNote(btn) { btn.closest('.sticky-note').remove(); }
      <\/script></textarea>
      
            </div>
      
          </div>{/* /.new-grid */}
      
        </section>
      
        {/* ── TOAST NOTIFICATION ── */}
        <div className="nc-toast" id="ncToast">
          <i className="fa-solid fa-circle-check"></i>
          <span>Code copied to clipboard!</span>
        </div>
      
      </main>
    </>
  );
}
