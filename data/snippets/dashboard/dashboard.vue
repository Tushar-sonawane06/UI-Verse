<template>
<main class="main-home">

  <!-- ======================================================
  NAVBAR
  ====================================================== -->

  <header class="navbar">

    <!-- LEFT -->

    <div class="navbar-left">

      <div class="search-bar">

        <i class="fa-solid fa-magnifying-glass"></i>

        <input
          type="text"
          placeholder="Search analytics, reports..."
        >

      </div>

    </div>

    <!-- RIGHT -->

    <div class="nav-right">

      <!-- NOTIFICATION -->

      <button class="icon-btn">

        <i class="fa-regular fa-bell"></i>

        <span class="notify-dot"></span>

      </button>

      <!-- MESSAGE -->

      <button class="icon-btn">

        <i class="fa-regular fa-envelope"></i>

      </button>

      <!-- EXPORT -->

      <button class="nav-btn outline-btn">

        <i class="fa-solid fa-download"></i>

        Export

      </button>

      <!-- UPGRADE -->

      <button class="nav-btn primary-btn">

        <i class="fa-solid fa-crown"></i>

        Upgrade

      </button>

      <!-- PROFILE -->

      <div class="profile">

        <img
          src="https://i.pravatar.cc/100?img=15"
          alt="Profile"
        >

        <div class="profile-info">

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

  <!-- ======================================================
  HERO SECTION
  ====================================================== -->

  <section class="hero-section">

    <!-- LEFT -->

    <div class="hero-left">

      <span class="hero-badge">

        <i class="fa-solid fa-sparkles"></i>

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

      <!-- ACTIONS -->

      <div class="hero-actions">

        <button class="hero-btn primary-btn">

          <i class="fa-solid fa-chart-line"></i>

          Open Analytics

        </button>

        <button class="hero-btn secondary-btn">

          <i class="fa-solid fa-play"></i>

          Watch Demo

        </button>

      </div>

      <!-- MINI STATS -->

      <div class="hero-stats-row">

        <div class="mini-stat">

          <h3>
            24K+
          </h3>

          <span>
            Users
          </span>

        </div>

        <div class="mini-stat">

          <h3>
            890K
          </h3>

          <span>
            Views
          </span>

        </div>

        <div class="mini-stat">

          <h3>
            99%
          </h3>

          <span>
            Performance
          </span>

        </div>

      </div>

    </div>

    <!-- RIGHT -->

    <div class="hero-visual">

      <div class="dashboard-preview">

        <div class="preview-top">

          <span></span>
          <span></span>
          <span></span>

        </div>

        <div class="preview-grid">

          <div class="preview-card purple-card">

            <i class="fa-solid fa-chart-pie"></i>

            <h4>
              Analytics
            </h4>

          </div>

          <div class="preview-card blue-card">

            <i class="fa-solid fa-users"></i>

            <h4>
              Users
            </h4>

          </div>

          <div class="preview-card glass-card">

            <i class="fa-solid fa-layer-group"></i>

            <h4>
              Components
            </h4>

          </div>

          <div class="preview-card orange-card">

            <i class="fa-solid fa-bolt"></i>

            <h4>
              Realtime
            </h4>

          </div>

        </div>

      </div>

    </div>

  </section>

  <!-- ======================================================
  QUICK ACTIONS
  ====================================================== -->

  <section class="quick-actions">

    <button class="quick-card">

      <i class="fa-solid fa-plus"></i>

      <span>
        New Project
      </span>

    </button>

    <button class="quick-card">

      <i class="fa-solid fa-chart-line"></i>

      <span>
        Generate Report
      </span>

    </button>

    <button class="quick-card">

      <i class="fa-solid fa-users"></i>

      <span>
        Manage Team
      </span>

    </button>

    <button class="quick-card">

      <i class="fa-solid fa-cloud-arrow-up"></i>

      <span>
        Upload Files
      </span>

    </button>

  </section>

  <!-- ======================================================
  STATS GRID
  ====================================================== -->

  <section class="stats-grid">

    <!-- CARD -->

    <div class="stat-card">

      <div class="stat-icon orange">

        <i class="fa-solid fa-users"></i>

      </div>

      <div>

        <h2>
          24,580
        </h2>

        <p>
          Active Users
        </p>

      </div>

      <div class="trend positive">

        +12%

      </div>

    </div>

    <!-- CARD -->

    <div class="stat-card">

      <div class="stat-icon purple">

        <i class="fa-solid fa-layer-group"></i>

      </div>

      <div>

        <h2>
          128
        </h2>

        <p>
          Components
        </p>

      </div>

      <div class="trend positive">

        +8%

      </div>

    </div>

    <!-- CARD -->

    <div class="stat-card">

      <div class="stat-icon blue">

        <i class="fa-solid fa-eye"></i>

      </div>

      <div>

        <h2>
          890K
        </h2>

        <p>
          Monthly Views
        </p>

      </div>

      <div class="trend positive">

        +18%

      </div>

    </div>

    <!-- CARD -->

    <div class="stat-card">

      <div class="stat-icon green">

        <i class="fa-solid fa-chart-line"></i>

      </div>

      <div>

        <h2>
          82%
        </h2>

        <p>
          Growth Rate
        </p>

      </div>

      <div class="trend positive">

        +4%

      </div>

    </div>

  </section>

  <!-- ======================================================
  DASHBOARD GRID
  ====================================================== -->

  <section class="dashboard-grid">

    <!-- ANALYTICS -->

    <div class="dashboard-card large-card" id="card-traffic">

      <div class="nc-copy-btn" onclick="copyCode('card-traffic')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>

      <div class="card-header">

        <div>

          <h2>
            Traffic Analytics
          </h2>

          <p>
            Website traffic for last 6 months
          </p>

        </div>

        <button class="filter-btn">

          Monthly

          <i class="fa-solid fa-angle-down"></i>

        </button>

      </div>

      <!-- CHART -->

      <div class="line-chart">

        <span style="height:40%"></span>
        <span style="height:65%"></span>
        <span style="height:55%"></span>
        <span style="height:85%"></span>
        <span style="height:75%"></span>
        <span style="height:95%"></span>

      </div>

      <!-- CHART LABELS -->

      <div class="chart-labels">

        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>

      </div>

      <textarea class="nc-code-storage" id="code-card-traffic" readonly><!-- Traffic Analytics Card -->
<div class="dashboard-card large-card">
  <div class="card-header">
    <div>
      <h2>Traffic Analytics</h2>
      <p>Website traffic for last 6 months</p>
    </div>
    <button class="filter-btn">Monthly <i class="fa-solid fa-angle-down"></i></button>
  </div>
  <div class="line-chart">
    <span style="height:40%"></span>
    <span style="height:65%"></span>
    <span style="height:55%"></span>
    <span style="height:85%"></span>
    <span style="height:75%"></span>
    <span style="height:95%"></span>
  </div>
  <div class="chart-labels">
    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
    <span>Apr</span>
    <span>May</span>
    <span>Jun</span>
  </div>
</div></textarea>

    </div>

    <!-- RECENT ACTIVITY -->

    <div class="dashboard-card" id="card-activity">

      <div class="nc-copy-btn" onclick="copyCode('card-activity')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>

      <div class="card-header">

        <h2>
          Recent Activity
        </h2>

      </div>

      <div class="activity-list">

        <div class="activity-item">

          <div class="activity-dot green"></div>

          <div>

            <strong>
              New component uploaded
            </strong>

            <span>
              2 minutes ago
            </span>

          </div>

        </div>

        <div class="activity-item">

          <div class="activity-dot purple"></div>

          <div>

            <strong>
              UI template updated
            </strong>

            <span>
              15 minutes ago
            </span>

          </div>

        </div>

        <div class="activity-item">

          <div class="activity-dot orange"></div>

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

      <textarea class="nc-code-storage" id="code-card-activity" readonly><!-- Recent Activity Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Recent Activity</h2>
  </div>
  <div class="activity-list">
    <div class="activity-item">
      <div class="activity-dot green"></div>
      <div>
        <strong>New component uploaded</strong>
        <span>2 minutes ago</span>
      </div>
    </div>
    <div class="activity-item">
      <div class="activity-dot purple"></div>
      <div>
        <strong>UI template updated</strong>
        <span>15 minutes ago</span>
      </div>
    </div>
    <div class="activity-item">
      <div class="activity-dot orange"></div>
      <div>
        <strong>New contributor joined</strong>
        <span>1 hour ago</span>
      </div>
    </div>
  </div>
</div></textarea>

    </div>

    <!-- PROGRESS -->

    <div class="dashboard-card" id="card-progress">

      <div class="nc-copy-btn" onclick="copyCode('card-progress')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>

      <div class="card-header">

        <h2>
          Project Progress
        </h2>

      </div>

      <div class="progress-group">

        <div class="progress-item">

          <div class="progress-top">

            <span>
              Dashboard UI
            </span>

            <strong>
              90%
            </strong>

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill orange-fill"
              style="width:90%"
            ></div>

          </div>

        </div>

        <div class="progress-item">

          <div class="progress-top">

            <span>
              Components
            </span>

            <strong>
              75%
            </strong>

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill purple-fill"
              style="width:75%"
            ></div>

          </div>

        </div>

        <div class="progress-item">

          <div class="progress-top">

            <span>
              API System
            </span>

            <strong>
              60%
            </strong>

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill blue-fill"
              style="width:60%"
            ></div>

          </div>

        </div>

      </div>

      <textarea class="nc-code-storage" id="code-card-progress" readonly><!-- Project Progress Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Project Progress</h2>
  </div>
  <div class="progress-group">
    <div class="progress-item">
      <div class="progress-top">
        <span>Dashboard UI</span>
        <strong>90%</strong>
      </div>
      <div class="progress-bar">
        <div class="progress-fill orange-fill" style="width:90%"></div>
      </div>
    </div>
    <div class="progress-item">
      <div class="progress-top">
        <span>Components</span>
        <strong>75%</strong>
      </div>
      <div class="progress-bar">
        <div class="progress-fill purple-fill" style="width:75%"></div>
      </div>
    </div>
  </div>
</div></textarea>

    </div>

    <!-- TEAM -->

    <div class="dashboard-card" id="card-team">

      <div class="nc-copy-btn" onclick="copyCode('card-team')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>

      <div class="card-header">

        <h2>
          Team Members
        </h2>

      </div>

      <div class="team-members">

        <img src="https://i.pravatar.cc/100?img=12" alt="">
        <img src="https://i.pravatar.cc/100?img=22" alt="">
        <img src="https://i.pravatar.cc/100?img=32" alt="">
        <img src="https://i.pravatar.cc/100?img=42" alt="">

      </div>

      <textarea class="nc-code-storage" id="code-card-team" readonly><!-- Team Members Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Team Members</h2>
  </div>
  <div class="team-members">
    <img src="https://i.pravatar.cc/100?img=12" alt="">
    <img src="https://i.pravatar.cc/100?img=22" alt="">
    <img src="https://i.pravatar.cc/100?img=32" alt="">
    <img src="https://i.pravatar.cc/100?img=42" alt="">
  </div>
</div></textarea>

    </div>

    <!-- REVENUE OVERVIEW -->
    <div class="dashboard-card" id="card-revenue">
      <div class="nc-copy-btn" onclick="copyCode('card-revenue')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>
      <div class="card-header">
        <h2>Revenue</h2>
        <button class="filter-btn">This Week <i class="fa-solid fa-angle-down"></i></button>
      </div>
      <div class="revenue-stats">
        <h3>$45,231</h3>
        <span class="trend positive"><i class="fa-solid fa-arrow-up"></i> 14.5%</span>
      </div>
      <div class="revenue-chart">
        <div class="bar" style="height: 40%;"></div>
        <div class="bar" style="height: 60%;"></div>
        <div class="bar" style="height: 30%;"></div>
        <div class="bar" style="height: 80%;"></div>
        <div class="bar" style="height: 50%;"></div>
        <div class="bar" style="height: 90%;"></div>
        <div class="bar" style="height: 100%;"></div>
      </div>
      <textarea class="nc-code-storage" id="code-card-revenue" readonly><!-- Revenue Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Revenue</h2>
    <button class="filter-btn">This Week <i class="fa-solid fa-angle-down"></i></button>
  </div>
  <div class="revenue-stats">
    <h3>$45,231</h3>
    <span class="trend positive"><i class="fa-solid fa-arrow-up"></i> 14.5%</span>
  </div>
  <div class="revenue-chart">
    <div class="bar" style="height: 40%;"></div>
    <div class="bar" style="height: 60%;"></div>
    <div class="bar" style="height: 30%;"></div>
    <div class="bar" style="height: 80%;"></div>
    <div class="bar" style="height: 50%;"></div>
    <div class="bar" style="height: 90%;"></div>
    <div class="bar" style="height: 100%;"></div>
  </div>
</div></textarea>
    </div>

    <!-- SERVER STATUS -->
    <div class="dashboard-card" id="card-server">
      <div class="nc-copy-btn" onclick="copyCode('card-server')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>
      <div class="card-header">
        <h2>Server Status</h2>
      </div>
      <div class="server-status-list">
        <div class="server-item">
          <div class="server-info">
            <i class="fa-solid fa-server"></i>
            <span>Main DB</span>
          </div>
          <div class="status-badge online">Online</div>
        </div>
        <div class="server-item">
          <div class="server-info">
            <i class="fa-solid fa-cloud"></i>
            <span>CDN</span>
          </div>
          <div class="status-badge online">Online</div>
        </div>
        <div class="server-item">
          <div class="server-info">
            <i class="fa-solid fa-microchip"></i>
            <span>Worker</span>
          </div>
          <div class="status-badge offline">Offline</div>
        </div>
      </div>
      <textarea class="nc-code-storage" id="code-card-server" readonly><!-- Server Status Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Server Status</h2>
  </div>
  <div class="server-status-list">
    <div class="server-item">
      <div class="server-info">
        <i class="fa-solid fa-server"></i>
        <span>Main DB</span>
      </div>
      <div class="status-badge online">Online</div>
    </div>
    <div class="server-item">
      <div class="server-info">
        <i class="fa-solid fa-cloud"></i>
        <span>CDN</span>
      </div>
      <div class="status-badge online">Online</div>
    </div>
  </div>
</div></textarea>
    </div>

    <!-- TOP PERFORMERS -->
    <div class="dashboard-card" id="card-performers">
      <div class="nc-copy-btn" onclick="copyCode('card-performers')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>
      <div class="card-header">
        <h2>Top Performers</h2>
      </div>
      <div class="performers-list">
        <div class="performer-item">
          <img src="https://i.pravatar.cc/100?img=1" alt="Avatar">
          <div class="performer-details">
            <strong>John Doe</strong>
            <span>1,430 Sales</span>
          </div>
          <div class="rank gold">#1</div>
        </div>
        <div class="performer-item">
          <img src="https://i.pravatar.cc/100?img=5" alt="Avatar">
          <div class="performer-details">
            <strong>Jane Smith</strong>
            <span>1,200 Sales</span>
          </div>
          <div class="rank silver">#2</div>
        </div>
        <div class="performer-item">
          <img src="https://i.pravatar.cc/100?img=9" alt="Avatar">
          <div class="performer-details">
            <strong>Mike Johnson</strong>
            <span>980 Sales</span>
          </div>
          <div class="rank bronze">#3</div>
        </div>
      </div>
      <textarea class="nc-code-storage" id="code-card-performers" readonly><!-- Top Performers Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Top Performers</h2>
  </div>
  <div class="performers-list">
    <div class="performer-item">
      <img src="https://i.pravatar.cc/100?img=1" alt="Avatar">
      <div class="performer-details">
        <strong>John Doe</strong>
        <span>1,430 Sales</span>
      </div>
      <div class="rank gold">#1</div>
    </div>
    <div class="performer-item">
      <img src="https://i.pravatar.cc/100?img=5" alt="Avatar">
      <div class="performer-details">
        <strong>Jane Smith</strong>
        <span>1,200 Sales</span>
      </div>
      <div class="rank silver">#2</div>
    </div>
  </div>
</div></textarea>
    </div>

    <!-- SYSTEM LOAD -->
    <div class="dashboard-card" id="card-system">
      <div class="nc-copy-btn" onclick="copyCode('card-system')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>
      <div class="card-header">
        <h2>System Load</h2>
      </div>
      <div class="system-load-circle">
        <div class="circle-outer">
          <div class="circle-inner">
            <span class="load-value">78%</span>
            <span class="load-label">CPU</span>
          </div>
        </div>
      </div>
      <div class="load-stats">
        <div class="load-stat-item">
          <span>RAM</span>
          <strong>12GB/16GB</strong>
        </div>
        <div class="load-stat-item">
          <span>Temp</span>
          <strong>65°C</strong>
        </div>
      </div>
      <textarea class="nc-code-storage" id="code-card-system" readonly><!-- System Load Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>System Load</h2>
  </div>
  <div class="system-load-circle">
    <div class="circle-outer">
      <div class="circle-inner">
        <span class="load-value">78%</span>
        <span class="load-label">CPU</span>
      </div>
    </div>
  </div>
  <div class="load-stats">
    <div class="load-stat-item">
      <span>RAM</span>
      <strong>12GB/16GB</strong>
    </div>
    <div class="load-stat-item">
      <span>Temp</span>
      <strong>65°C</strong>
    </div>
  </div>
</div></textarea>
    </div>

    <!-- UPCOMING TASKS -->
    <div class="dashboard-card" id="card-tasks">
      <div class="nc-copy-btn" onclick="copyCode('card-tasks')" title="Copy Code">
        <i class="fa-regular fa-copy"></i>
        <span class="copy-label">Copy</span>
      </div>
      <div class="card-header">
        <h2>Upcoming Tasks</h2>
      </div>
      <div class="task-list">
        <label class="task-item">
          <input type="checkbox" checked>
          <span class="task-text">Review Q3 Financials</span>
          <span class="task-tag urgent">Urgent</span>
        </label>
        <label class="task-item">
          <input type="checkbox">
          <span class="task-text">Update Marketing Assets</span>
          <span class="task-tag medium">Medium</span>
        </label>
        <label class="task-item">
          <input type="checkbox">
          <span class="task-text">Team Sync Meeting</span>
          <span class="task-tag low">Low</span>
        </label>
      </div>
      <textarea class="nc-code-storage" id="code-card-tasks" readonly><!-- Upcoming Tasks Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Upcoming Tasks</h2>
  </div>
  <div class="task-list">
    <label class="task-item">
      <input type="checkbox" checked>
      <span class="task-text">Review Q3 Financials</span>
      <span class="task-tag urgent">Urgent</span>
    </label>
    <label class="task-item">
      <input type="checkbox">
      <span class="task-text">Update Marketing Assets</span>
      <span class="task-tag medium">Medium</span>
    </label>
    <label class="task-item">
      <input type="checkbox">
      <span class="task-text">Team Sync Meeting</span>
      <span class="task-tag low">Low</span>
    </label>
  </div>
</div></textarea>
    </div>

  </section>

  <!-- ======================================================
  NEW COMPONENTS SECTION
  ====================================================== -->
  <section class="new-components-section">

    <div class="section-title-row">
      <h2 class="section-heading">Premium Components <span>+5 New</span></h2>
      <p class="section-sub">Click the copy icon on any card to grab the code instantly.</p>
    </div>

    <div class="dashboard-grid new-grid">

      <!-- ── 1. CRYPTO WALLET ── -->
      <div class="dashboard-card nc-card" id="nc-crypto">

        <div class="nc-copy-btn" onclick="copyCode('nc-crypto')" title="Copy Code">
          <i class="fa-regular fa-copy"></i>
          <span class="copy-label">Copy</span>
        </div>

        <div class="card-header">
          <h2>Crypto Wallet</h2>
          <span class="nc-badge">Live</span>
        </div>

        <div class="wallet-balance-row">
          <div>
            <p class="wallet-label">Total Balance</p>
            <h3 class="wallet-total">$84,231.50</h3>
          </div>
          <div class="wallet-change positive">
            <i class="fa-solid fa-arrow-trend-up"></i> +6.4%
          </div>
        </div>

        <div class="crypto-list">
          <div class="crypto-item">
            <div class="crypto-icon btc-icon"><i class="fa-brands fa-bitcoin"></i></div>
            <div class="crypto-details">
              <strong>Bitcoin</strong>
              <span>BTC</span>
            </div>
            <div class="crypto-right">
              <strong>$51,320</strong>
              <span class="positive-sm">+2.3%</span>
            </div>
          </div>
          <div class="crypto-item">
            <div class="crypto-icon eth-icon"><i class="fa-brands fa-ethereum"></i></div>
            <div class="crypto-details">
              <strong>Ethereum</strong>
              <span>ETH</span>
            </div>
            <div class="crypto-right">
              <strong>$22,411</strong>
              <span class="positive-sm">+1.7%</span>
            </div>
          </div>
          <div class="crypto-item">
            <div class="crypto-icon sol-icon"><i class="fa-solid fa-coins"></i></div>
            <div class="crypto-details">
              <strong>Solana</strong>
              <span>SOL</span>
            </div>
            <div class="crypto-right">
              <strong>$10,500</strong>
              <span class="negative-sm">-0.9%</span>
            </div>
          </div>
        </div>

        <!-- hidden code block -->
        <textarea class="nc-code-storage" id="code-nc-crypto" readonly><!-- Crypto Wallet Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Crypto Wallet</h2>
    <span class="nc-badge">Live</span>
  </div>
  <div class="wallet-balance-row">
    <div>
      <p class="wallet-label">Total Balance</p>
      <h3 class="wallet-total">$84,231.50</h3>
    </div>
    <div class="wallet-change positive">
      <i class="fa-solid fa-arrow-trend-up"></i> +6.4%
    </div>
  </div>
  <div class="crypto-list">
    <div class="crypto-item">
      <div class="crypto-icon btc-icon"><i class="fa-brands fa-bitcoin"></i></div>
      <div class="crypto-details"><strong>Bitcoin</strong><span>BTC</span></div>
      <div class="crypto-right"><strong>$51,320</strong><span class="positive-sm">+2.3%</span></div>
    </div>
    <div class="crypto-item">
      <div class="crypto-icon eth-icon"><i class="fa-brands fa-ethereum"></i></div>
      <div class="crypto-details"><strong>Ethereum</strong><span>ETH</span></div>
      <div class="crypto-right"><strong>$22,411</strong><span class="positive-sm">+1.7%</span></div>
    </div>
  </div>
</div></textarea>

      </div>

      <!-- ── 2. NOTIFICATION CENTER ── -->
      <div class="dashboard-card nc-card" id="nc-notif">

        <div class="nc-copy-btn" onclick="copyCode('nc-notif')" title="Copy Code">
          <i class="fa-regular fa-copy"></i>
          <span class="copy-label">Copy</span>
        </div>

        <div class="card-header">
          <h2>Notifications</h2>
          <span class="notif-count">3 New</span>
        </div>

        <div class="notif-feed">

          <div class="notif-row unread">
            <div class="notif-avatar" style="background:linear-gradient(135deg,#7b5cff,#00d4ff)">
              <i class="fa-solid fa-user-plus"></i>
            </div>
            <div class="notif-body">
              <strong>New user registered</strong>
              <span>Alex joined UIverse · 3m ago</span>
            </div>
            <div class="notif-dot"></div>
          </div>

          <div class="notif-row unread">
            <div class="notif-avatar" style="background:linear-gradient(135deg,#ff7a3d,#ffb347)">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div class="notif-body">
              <strong>Server spike detected</strong>
              <span>CPU hit 94% · 12m ago</span>
            </div>
            <div class="notif-dot"></div>
          </div>

          <div class="notif-row unread">
            <div class="notif-avatar" style="background:linear-gradient(135deg,#22c55e,#4ade80)">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="notif-body">
              <strong>Deployment successful</strong>
              <span>v2.4.0 is live · 1h ago</span>
            </div>
            <div class="notif-dot"></div>
          </div>

          <div class="notif-row">
            <div class="notif-avatar" style="background:linear-gradient(135deg,#ff4fd8,#9b59b6)">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="notif-body">
              <strong>Design feedback received</strong>
              <span>From Sarah · 3h ago</span>
            </div>
          </div>

        </div>

        <button class="nc-mark-read-btn">Mark all as read</button>

        <textarea class="nc-code-storage" id="code-nc-notif" readonly><!-- Notification Center Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Notifications</h2>
    <span class="notif-count">3 New</span>
  </div>
  <div class="notif-feed">
    <div class="notif-row unread">
      <div class="notif-avatar"><i class="fa-solid fa-user-plus"></i></div>
      <div class="notif-body">
        <strong>New user registered</strong>
        <span>Alex joined UIverse · 3m ago</span>
      </div>
      <div class="notif-dot"></div>
    </div>
    <div class="notif-row unread">
      <div class="notif-avatar"><i class="fa-solid fa-bolt"></i></div>
      <div class="notif-body">
        <strong>Server spike detected</strong>
        <span>CPU hit 94% · 12m ago</span>
      </div>
      <div class="notif-dot"></div>
    </div>
  </div>
  <button class="nc-mark-read-btn">Mark all as read</button>
</div></textarea>

      </div>

      <!-- ── 3. USER ACQUISITION DONUT ── -->
      <div class="dashboard-card nc-card" id="nc-donut">

        <div class="nc-copy-btn" onclick="copyCode('nc-donut')" title="Copy Code">
          <i class="fa-regular fa-copy"></i>
          <span class="copy-label">Copy</span>
        </div>

        <div class="card-header">
          <h2>User Acquisition</h2>
        </div>

        <div class="donut-wrapper">
          <svg class="donut-svg" viewBox="0 0 120 120">
            <circle class="donut-track" cx="60" cy="60" r="48"/>
            <circle class="donut-seg seg1" cx="60" cy="60" r="48" stroke-dasharray="90 212"/>
            <circle class="donut-seg seg2" cx="60" cy="60" r="48" stroke-dasharray="62 212" stroke-dashoffset="-90"/>
            <circle class="donut-seg seg3" cx="60" cy="60" r="48" stroke-dasharray="40 212" stroke-dashoffset="-152"/>
            <circle class="donut-seg seg4" cx="60" cy="60" r="48" stroke-dasharray="20 212" stroke-dashoffset="-192"/>
          </svg>
          <div class="donut-center">
            <span class="donut-total">24K</span>
            <span class="donut-lbl">Users</span>
          </div>
        </div>

        <div class="donut-legend">
          <div class="legend-item"><span class="legend-dot" style="background:#7b5cff"></span>Organic <strong>42%</strong></div>
          <div class="legend-item"><span class="legend-dot" style="background:#00d4ff"></span>Social <strong>29%</strong></div>
          <div class="legend-item"><span class="legend-dot" style="background:#ff7a3d"></span>Referral <strong>19%</strong></div>
          <div class="legend-item"><span class="legend-dot" style="background:#22c55e"></span>Direct <strong>10%</strong></div>
        </div>

        <textarea class="nc-code-storage" id="code-nc-donut" readonly><!-- User Acquisition Donut Card -->
<div class="dashboard-card">
  <div class="card-header"><h2>User Acquisition</h2></div>
  <div class="donut-wrapper">
    <svg class="donut-svg" viewBox="0 0 120 120">
      <circle class="donut-track" cx="60" cy="60" r="48"/>
      <circle class="donut-seg seg1" cx="60" cy="60" r="48" stroke-dasharray="90 212"/>
      <circle class="donut-seg seg2" cx="60" cy="60" r="48" stroke-dasharray="62 212" stroke-dashoffset="-90"/>
      <circle class="donut-seg seg3" cx="60" cy="60" r="48" stroke-dasharray="40 212" stroke-dashoffset="-152"/>
      <circle class="donut-seg seg4" cx="60" cy="60" r="48" stroke-dasharray="20 212" stroke-dashoffset="-192"/>
    </svg>
    <div class="donut-center">
      <span class="donut-total">24K</span>
      <span class="donut-lbl">Users</span>
    </div>
  </div>
  <div class="donut-legend">
    <div class="legend-item"><span class="legend-dot" style="background:#7b5cff"></span>Organic <strong>42%</strong></div>
    <div class="legend-item"><span class="legend-dot" style="background:#00d4ff"></span>Social <strong>29%</strong></div>
  </div>
</div></textarea>

      </div>

      <!-- ── 4. WEATHER WIDGET ── -->
      <div class="dashboard-card nc-card weather-card" id="nc-weather">

        <div class="nc-copy-btn" onclick="copyCode('nc-weather')" title="Copy Code">
          <i class="fa-regular fa-copy"></i>
          <span class="copy-label">Copy</span>
        </div>

        <div class="weather-main">
          <div class="weather-icon-wrap">
            <i class="fa-solid fa-sun weather-sun"></i>
          </div>
          <div class="weather-info">
            <h2 class="weather-temp">28°C</h2>
            <p class="weather-condition">Sunny & Clear</p>
            <span class="weather-loc"><i class="fa-solid fa-location-dot"></i> Mumbai, IN</span>
          </div>
        </div>

        <div class="weather-stats-row">
          <div class="weather-stat">
            <i class="fa-solid fa-droplet"></i>
            <span>Humidity</span>
            <strong>68%</strong>
          </div>
          <div class="weather-stat">
            <i class="fa-solid fa-wind"></i>
            <span>Wind</span>
            <strong>14 km/h</strong>
          </div>
          <div class="weather-stat">
            <i class="fa-solid fa-eye"></i>
            <span>Visibility</span>
            <strong>10 km</strong>
          </div>
        </div>

        <div class="weather-forecast">
          <div class="forecast-day">
            <span>Mon</span>
            <i class="fa-solid fa-sun"></i>
            <strong>30°</strong>
          </div>
          <div class="forecast-day">
            <span>Tue</span>
            <i class="fa-solid fa-cloud-sun"></i>
            <strong>27°</strong>
          </div>
          <div class="forecast-day">
            <span>Wed</span>
            <i class="fa-solid fa-cloud-rain"></i>
            <strong>22°</strong>
          </div>
          <div class="forecast-day">
            <span>Thu</span>
            <i class="fa-solid fa-cloud"></i>
            <strong>25°</strong>
          </div>
          <div class="forecast-day">
            <span>Fri</span>
            <i class="fa-solid fa-sun"></i>
            <strong>31°</strong>
          </div>
        </div>

        <textarea class="nc-code-storage" id="code-nc-weather" readonly><!-- Weather Widget Card -->
<div class="dashboard-card weather-card">
  <div class="weather-main">
    <div class="weather-icon-wrap">
      <i class="fa-solid fa-sun weather-sun"></i>
    </div>
    <div class="weather-info">
      <h2 class="weather-temp">28°C</h2>
      <p class="weather-condition">Sunny & Clear</p>
      <span class="weather-loc"><i class="fa-solid fa-location-dot"></i> Mumbai, IN</span>
    </div>
  </div>
  <div class="weather-stats-row">
    <div class="weather-stat"><i class="fa-solid fa-droplet"></i><span>Humidity</span><strong>68%</strong></div>
    <div class="weather-stat"><i class="fa-solid fa-wind"></i><span>Wind</span><strong>14 km/h</strong></div>
    <div class="weather-stat"><i class="fa-solid fa-eye"></i><span>Visibility</span><strong>10 km</strong></div>
  </div>
  <div class="weather-forecast">
    <div class="forecast-day"><span>Mon</span><i class="fa-solid fa-sun"></i><strong>30°</strong></div>
    <div class="forecast-day"><span>Tue</span><i class="fa-solid fa-cloud-sun"></i><strong>27°</strong></div>
    <div class="forecast-day"><span>Wed</span><i class="fa-solid fa-cloud-rain"></i><strong>22°</strong></div>
  </div>
</div></textarea>

      </div>

      <!-- ── 5. QUICK NOTES ── -->
      <div class="dashboard-card nc-card" id="nc-notes">

        <div class="nc-copy-btn" onclick="copyCode('nc-notes')" title="Copy Code">
          <i class="fa-regular fa-copy"></i>
          <span class="copy-label">Copy</span>
        </div>

        <div class="card-header">
          <h2>Quick Notes</h2>
          <button class="add-note-btn" onclick="addNote()" title="Add note">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>

        <div class="notes-grid" id="notesGrid">

          <div class="sticky-note note-purple">
            <div class="note-header">
              <span class="note-dot"></span>
              <button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <textarea class="note-area" placeholder="Write something...">Redesign landing page hero section by Friday 🚀</textarea>
          </div>

          <div class="sticky-note note-blue">
            <div class="note-header">
              <span class="note-dot"></span>
              <button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <textarea class="note-area" placeholder="Write something...">Team standup at 10 AM – prepare sprint update</textarea>
          </div>

          <div class="sticky-note note-orange">
            <div class="note-header">
              <span class="note-dot"></span>
              <button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <textarea class="note-area" placeholder="Write something...">Follow up with client re: API integration docs 📋</textarea>
          </div>

          <div class="sticky-note note-green">
            <div class="note-header">
              <span class="note-dot"></span>
              <button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <textarea class="note-area" placeholder="Write something...">Ship v2.4.0 changelog to product team ✅</textarea>
          </div>

        </div>

        <textarea class="nc-code-storage" id="code-nc-notes" readonly><!-- Quick Notes Card -->
<div class="dashboard-card">
  <div class="card-header">
    <h2>Quick Notes</h2>
    <button class="add-note-btn" onclick="addNote()"><i class="fa-solid fa-plus"></i></button>
  </div>
  <div class="notes-grid" id="notesGrid">
    <div class="sticky-note note-purple">
      <div class="note-header">
        <span class="note-dot"></span>
        <button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <textarea class="note-area" placeholder="Write something...">Redesign landing page hero section by Friday 🚀</textarea>
    </div>
    <div class="sticky-note note-blue">
      <div class="note-header">
        <span class="note-dot"></span>
        <button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <textarea class="note-area" placeholder="Write something...">Team standup at 10 AM – prepare sprint update</textarea>
    </div>
  </div>
</div>

<script>
function addNote() {
  const colors = ['note-purple','note-blue','note-orange','note-green'];
  const grid = document.getElementById('notesGrid');
  const note = document.createElement('div');
  note.className = 'sticky-note ' + colors[Math.floor(Math.random()*colors.length)];
  note.innerHTML = '<div class="note-header"><span class="note-dot"></span><button class="note-del" onclick="deleteNote(this)"><i class="fa-solid fa-xmark"></i></button></div><textarea class="note-area" placeholder="Write something..."></textarea>';
  grid.appendChild(note);
}
function deleteNote(btn) { btn.closest('.sticky-note').remove(); }
<\/script></textarea>

      </div>

    </div><!-- /.new-grid -->

  </section>

  <!-- ── TOAST NOTIFICATION ── -->
  <div class="nc-toast" id="ncToast">
    <i class="fa-solid fa-circle-check"></i>
    <span>Code copied to clipboard!</span>
  </div>

</main>
</template>

<script>
export default { name: 'Dashboard' }
</script>
