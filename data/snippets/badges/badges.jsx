import React from 'react';

export default function badges(){
  return (
    <>
      <main className="main-home">
      
        {/* HERO */}
      
        <section className="hero-section">
      
          <div className="hero-badge">
            ✦ UIverse Badge Collection
          </div>
      
          <h1>
            Premium <span>Badges</span>
          </h1>
      
          <p>
      
            Futuristic badge components
            designed for dashboards,
            notifications, AI interfaces,
            admin panels and modern web apps.
      
          </p>
      
          {/* HERO STATS */}
      
          <div className="hero-stats">
      
            <div className="hero-stat">
      
              <h2>
                120+
              </h2>
      
              <span>
                Components
              </span>
      
            </div>
      
            <div className="hero-stat">
      
              <h2>
                14K
              </h2>
      
              <span>
                Downloads
              </span>
      
            </div>
      
            <div className="hero-stat">
      
              <h2>
                4.9
              </h2>
      
              <span>
                Rating
              </span>
      
            </div>
      
          </div>
      
        </section>
      
        {/* FILTERS */}
      
        <section className="filters-section">
      
          <button className="filter-btn active">
            All
          </button>
      
          <button className="filter-btn">
            Status
          </button>
      
          <button className="filter-btn">
            Notifications
          </button>
      
          <button className="filter-btn">
            Premium
          </button>
      
          <button className="filter-btn">
            Animated
          </button>
      
          <button className="filter-btn">
            Glass UI
          </button>
      
        </section>
      
      
        <div>
          <form className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter badges..." id="badgesSearch" />
          </form>
        </div>
      
        {/* GRID */}
      
        <section className="badges-grid">
      
        {/* =========================================
      BADGE CARD — VERIFIED BADGE
      ========================================= */}
      
      <div className="badge-card">
      
        <div className="card-top">
      
          <span className="card-tag">
            Verified
          </span>
      
          <button className="save-btn">
            <i className="fa-regular fa-bookmark"></i>
          </button>
      
        </div>
      
        <div className="badge-preview">
      
          <span className="verified-badge">
            <i className="fa-solid fa-circle-check"></i>
            VERIFIED
          </span>
      
        </div>
      
        <h2>
          Verified Badge
        </h2>
      
        <p>
      
          Trusted verification badge
          for creators, brands and
          official profiles.
      
        </p>
      
        <div className="card-actions">
      
          <button>
            Preview
          </button>
      
          <button>
            Copy
          </button>
      
        </div>
      
      </div>
      
      {/* =========================================
      BADGE CARD — GRADIENT BADGE
      ========================================= */}
      
      <div className="badge-card">
      
        <div className="card-top">
      
          <span className="card-tag">
            Gradient
          </span>
      
          <button className="save-btn active-save">
            <i className="fa-solid fa-bookmark"></i>
          </button>
      
        </div>
      
        <div className="badge-preview dark-preview">
      
          <span className="gradient-badge">
            NEW FEATURE
          </span>
      
        </div>
      
        <h2>
          Gradient Badge
        </h2>
      
        <p>
      
          Smooth animated gradient
          badge for futuristic
          interfaces and apps.
      
        </p>
      
        <div className="card-actions">
      
          <button>
            Preview
          </button>
      
          <button>
            Copy
          </button>
      
        </div>
      
      </div>
      
      {/* =========================================
      BADGE CARD — SALE BADGE
      ========================================= */}
      
      <div className="badge-card">
      
        <div className="card-top">
      
          <span className="card-tag">
            E-Commerce
          </span>
      
          <button className="save-btn">
            <i className="fa-regular fa-bookmark"></i>
          </button>
      
        </div>
      
        <div className="badge-preview">
      
          <span className="sale-badge">
            -50% OFF
          </span>
      
        </div>
      
        <h2>
          Sale Badge
        </h2>
      
        <p>
      
          Modern discount badge
          for shopping websites
          and product cards.
      
        </p>
      
        <div className="card-actions">
      
          <button>
            Preview
          </button>
      
          <button>
            Copy
          </button>
      
        </div>
      
      </div>
      
      {/* =========================================
      BADGE CARD — AI BADGE
      ========================================= */}
      
      <div className="badge-card">
      
        <div className="card-top">
      
          <span className="card-tag">
            AI
          </span>
      
          <button className="save-btn active-save">
            <i className="fa-solid fa-bookmark"></i>
          </button>
      
        </div>
      
        <div className="badge-preview dark-preview">
      
          <span className="ai-badge">
            <i className="fa-solid fa-robot"></i>
            AI POWERED
          </span>
      
        </div>
      
        <h2>
          AI Badge
        </h2>
      
        <p>
      
          Smart futuristic badge
          for AI dashboards and
          automation tools.
      
        </p>
      
        <div className="card-actions">
      
          <button>
            Preview
          </button>
      
          <button>
            Copy
          </button>
      
        </div>
      
      </div>
      
      {/* =========================================
      BADGE CARD — BETA BADGE
      ========================================= */}
      
      <div className="badge-card">
      
        <div className="card-top">
      
          <span className="card-tag">
            Beta
          </span>
      
          <button className="save-btn">
            <i className="fa-regular fa-bookmark"></i>
          </button>
      
        </div>
      
        <div className="badge-preview">
      
          <span className="beta-badge">
            BETA
          </span>
      
        </div>
      
        <h2>
          Beta Badge
        </h2>
      
        <p>
      
          Clean beta release badge
          for upcoming products
          and testing systems.
      
        </p>
      
        <div className="card-actions">
      
          <button>
            Preview
          </button>
      
          <button>
            Copy
          </button>
      
        </div>
      
      </div>
      
      {/* =========================================
      BADGE CARD — VIP BADGE
      ========================================= */}
      
      <div className="badge-card">
      
        <div className="card-top">
      
          <span className="card-tag">
            VIP
          </span>
      
          <button className="save-btn active-save">
            <i className="fa-solid fa-bookmark"></i>
          </button>
      
        </div>
      
        <div className="badge-preview dark-preview">
      
          <span className="vip-badge">
            <i className="fa-solid fa-crown"></i>
            VIP ACCESS
          </span>
      
        </div>
      
        <h2>
          VIP Badge
        </h2>
      
        <p>
      
          Luxury premium badge
          with elegant gold styling
          and glow effects.
      
        </p>
      
        <div className="card-actions">
      
          <button>
            Preview
          </button>
      
          <button>
            Copy
          </button>
      
        </div>
      
      </div>
      
      
      
          {/* CARD */}
      
          <div className="badge-card">
      
            <div className="card-top">
      
              <span className="card-tag">
                Status
              </span>
      
              <button className="save-btn">
                <i className="fa-regular fa-bookmark"></i>
              </button>
      
            </div>
      
            <div className="badge-preview">
      
              <span className="badge success-badge">
                Approved
              </span>
      
              <span className="badge warning-badge">
                Pending
              </span>
      
              <span className="badge danger-badge">
                Rejected
              </span>
      
            </div>
      
            <h2>
              Status Badges
            </h2>
      
            <p>
      
              Minimal soft status
              indicators for admin
              panels and dashboards.
      
            </p>
      
            <div className="card-actions">
      
              <button>
                Preview
              </button>
      
              <button>
                Copy
              </button>
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="badge-card">
      
            <div className="card-top">
      
              <span className="card-tag">
                Neon
              </span>
      
              <button className="save-btn active-save">
                <i className="fa-solid fa-bookmark"></i>
              </button>
      
            </div>
      
            <div className="badge-preview dark-preview">
      
              <span className="badge-neon">
                ONLINE
              </span>
      
            </div>
      
            <h2>
              Cyber Neon Badge
            </h2>
      
            <p>
      
              Futuristic cyberpunk
              neon glowing badge
              with terminal vibes.
      
            </p>
      
            <div className="card-actions">
      
              <button>
                Preview
              </button>
      
              <button>
                Copy
              </button>
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="badge-card">
      
            <div className="card-top">
      
              <span className="card-tag">
                Notification
              </span>
      
              <button className="save-btn">
                <i className="fa-regular fa-bookmark"></i>
              </button>
      
            </div>
      
            <div className="badge-preview">
      
              <div className="notification-box">
      
                <i className="fa-solid fa-bell"></i>
      
                <span className="notify-count">
                  9+
                </span>
      
              </div>
      
            </div>
      
            <h2>
              Notification Badge
            </h2>
      
            <p>
      
              Floating alert counter
              for inboxes and
              notification systems.
      
            </p>
      
            <div className="card-actions">
      
              <button>
                Preview
              </button>
      
              <button>
                Copy
              </button>
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="badge-card">
      
            <div className="card-top">
      
              <span className="card-tag">
                Premium
              </span>
      
              <button className="save-btn active-save">
                <i className="fa-solid fa-bookmark"></i>
              </button>
      
            </div>
      
            <div className="badge-preview dark-preview">
      
              <span className="badge-holo">
                ULTRA PRO
              </span>
      
            </div>
      
            <h2>
              Holographic Badge
            </h2>
      
            <p>
      
              Animated holographic
              gradients with futuristic
              premium visuals.
      
            </p>
      
            <div className="card-actions">
      
              <button>
                Preview
              </button>
      
              <button>
                Copy
              </button>
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="badge-card">
      
            <div className="card-top">
      
              <span className="card-tag">
                Live
              </span>
      
              <button className="save-btn">
                <i className="fa-regular fa-bookmark"></i>
              </button>
      
            </div>
      
            <div className="badge-preview">
      
              <span className="live-badge">
      
                <span className="pulse"></span>
      
                LIVE STREAM
      
              </span>
      
            </div>
      
            <h2>
              Live Indicator
            </h2>
      
            <p>
      
              Animated live badge
              with pulse effect for
              streaming interfaces.
      
            </p>
      
            <div className="card-actions">
      
              <button>
                Preview
              </button>
      
              <button>
                Copy
              </button>
      
            </div>
      
          </div>
      
          {/* CARD */}
      
          <div className="badge-card">
      
            <div className="card-top">
      
              <span className="card-tag">
                Glass
              </span>
      
              <button className="save-btn active-save">
                <i className="fa-solid fa-bookmark"></i>
              </button>
      
            </div>
      
            <div className="badge-preview glass-preview">
      
              <span className="glass-badge">
      
                <i className="fa-solid fa-bolt"></i>
      
                PREMIUM UI
      
              </span>
      
            </div>
      
            <h2>
              Glassmorphism Badge
            </h2>
      
            <p>
      
              Frosted glass badge
              with premium blur
              effects and gradients.
      
            </p>
      
            <div className="card-actions">
      
              <button>
                Preview
              </button>
      
              <button>
                Copy
              </button>
      
            </div>
      
          </div>
      
          {/* CARD 7 */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Gaming</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <span className="rank-badge">
                <i className="fa-solid fa-crown"></i> MVP
              </span>
            </div>
            <h2>Rank Badge</h2>
            <p>Gold themed prestige badge for leaderboards and gaming.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 8 */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Animated</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <span className="outline-pulse-badge">Recording</span>
            </div>
            <h2>Pulsing Outline Badge</h2>
            <p>Minimalistic outline badge with a radiating animation effect.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 9 */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Premium</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <span className="gradient-border-badge">PRO PLAN</span>
            </div>
            <h2>Gradient Border Badge</h2>
            <p>Sleek badge featuring a colorful gradient border and dark core.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 10 */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">UI</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <span className="role-pill-badge moderator">
                <span className="role-icon"><i className="fa-solid fa-shield-halved"></i></span>
                <span className="role-text">Moderator</span>
              </span>
            </div>
            <h2>Role Pill Badge</h2>
            <p>Split pill design ideal for user roles and forum titles.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 11 */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">3D</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <span className="chip-3d-badge">v2.0 Beta</span>
            </div>
            <h2>Floating 3D Badge</h2>
            <p>Isometric 3D pill badge with soft floating shadow effects.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
      
          {/* CARD 12 — Verified Tick Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Verified</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="verified-badge">
                <i className="fa-solid fa-circle-check"></i>
                Verified Creator
              </span>
            </div>
            <h2>Verified Tick Badge</h2>
            <p>Sleek identity badge with a glowing checkmark for verified accounts and creators.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 13 — XP Progress Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Gaming</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <div className="xp-badge">
                <div className="xp-top">
                  <span className="xp-label">⚡ Level 24</span>
                  <span className="xp-pct">72%</span>
                </div>
                <div className="xp-bar-track">
                  <div className="xp-bar-fill"></div>
                </div>
              </div>
            </div>
            <h2>XP Progress Badge</h2>
            <p>Animated XP bar badge for gaming dashboards and gamified apps.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 14 — Countdown Timer Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Event</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <span className="countdown-badge">
                <i className="fa-regular fa-clock"></i>
                <span className="cd-sep">02</span>:
                <span className="cd-sep">47</span>:
                <span className="cd-sep">59</span>
                <span className="cd-label">left</span>
              </span>
            </div>
            <h2>Countdown Timer Badge</h2>
            <p>Live-style countdown badge for sales, events, and limited offers.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 15 — Tag Stack Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Labels</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview">
              <div className="tag-stack">
                <span className="tag-chip blue">React</span>
                <span className="tag-chip purple">TypeScript</span>
                <span className="tag-chip green">Node.js</span>
                <span className="tag-chip orange">+4</span>
              </div>
            </div>
            <h2>Tag Stack Badge</h2>
            <p>Compact stacked tag chips for skills, frameworks, and category labels.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 16 — Aurora Glow Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Premium</span>
              <button className="save-btn active-save"><i className="fa-solid fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="aurora-badge">✦ ELITE ACCESS</span>
            </div>
            <h2>Aurora Glow Badge</h2>
            <p>Dreamy aurora-tinted badge with shifting colour glow for elite or VIP tiers.</p>
            <div className="card-actions">
              <button>Preview</button><button>Copy</button>
            </div>
          </div>
      
          {/* CARD 17 — AI Status Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">AI / System</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="ai-status-badge"><span className="ai-dot"></span> AI Processing</span>
            </div>
            <h2>AI Status Badge</h2>
            <p>Pulsing dot badge for AI and async processing states in dashboards.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 18 — Beta Tag */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Label</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="beta-tag"><i className="fa-solid fa-vial"></i></i> Beta</span>
            </div>
            <h2>Beta Tag</h2>
            <p>Compact amber label for marking experimental or unreleased features.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 19 — Version Chip */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Dev</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="version-chip"><span className="vc-label">v</span><span className="vc-num">3.2.1</span></span>
            </div>
            <h2>Version Chip</h2>
            <p>Split-pill version label for changelogs, release notes, and package badges.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 20 — Streak Badge */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Gamification</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="streak-badge"><span className="streak-flame"><i className="fa-solid fa-fire"></i></span> 14-Day Streak</span>
            </div>
            <h2>Streak Badge</h2>
            <p>Animated flame badge for streaks, daily goals, and habit trackers.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 21 — Trust Score */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Reputation</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="trust-badge">
                <span className="trust-num">98</span>
                <span className="trust-meta">
                  <span className="trust-label">Trust Score</span>
                  <span className="trust-sub">Top 1% seller</span>
                </span>
              </span>
            </div>
            <h2>Trust Score Badge</h2>
            <p>Numeric reputation badge for marketplaces, profiles, and review systems.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 22 — New Arrival */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">E-commerce</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="new-arrival-badge"><i className="fa-solid fa-tag"></i> New Arrival</span>
            </div>
            <h2>New Arrival Badge</h2>
            <p>Glowing gradient pill for highlighting new products and featured drops.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 23 — Permission Chips */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Permissions</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <div className="perm-set">
                <span className="perm-chip read"><i className="fa-solid fa-eye"></i> Read</span>
                <span className="perm-chip write"><i className="fa-solid fa-pencil"></i> Write</span>
                <span className="perm-chip admin"><i className="fa-solid fa-shield-halved"></i> Admin</span>
              </div>
            </div>
            <h2>Permission Chips</h2>
            <p>Color-coded access level chips for admin panels and user management UIs.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
          {/* CARD 24 — Typing Indicator */}
          <div className="badge-card">
            <div className="card-top">
              <span className="card-tag">Chat / UI</span>
              <button className="save-btn"><i className="fa-regular fa-bookmark"></i></button>
            </div>
            <div className="badge-preview dark-preview">
              <span className="typing-badge">
                <div className="dots">
                  <div className="dot"></div><div className="dot"></div><div className="dot"></div>
                </div>
                AI is typing
              </span>
            </div>
            <h2>Typing Indicator Badge</h2>
            <p>Bouncing dots badge for chat apps and AI response loading states.</p>
            <div className="card-actions"><button>Preview</button><button>Copy</button></div>
          </div>
      
        </section>
      
      </main>
    </>
  );
}
