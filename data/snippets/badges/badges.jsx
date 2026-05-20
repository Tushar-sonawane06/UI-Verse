import React from 'react';

export default function badges(){
  return (
    <>
      <main className="badges-page">
      
          <div className="page-header">
            <h1>🏆 My Badges</h1>
            <p>Track your achievements and contribution progress</p>
          </div>
      
          {/* ================= BADGES HERO ================= */}
      <section className="badges-hero">
        <div className="badges-hero-content">
      
          <div className="badges-hero-left">
            <span className="hero-chip">
              <i className="fa-solid fa-award"></i>
              Achievement System
            </span>
      
            <h1>
              Unlock <span>Badges</span><br />
              Build Your Reputation
            </h1>
      
            <p>
              Track contributions, maintain streaks, complete challenges,
              and showcase your developer achievements with modern collectible badges.
            </p>
      
            <div className="hero-actions">
              <button className="hero-btn primary">
                <i className="fa-solid fa-trophy"></i>
                Explore Rewards
              </button>
      
              <button className="hero-btn secondary">
                <i className="fa-solid fa-fire"></i>
                View Streaks
              </button>
            </div>
      
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>28</h3>
                <span>Badges Earned</span>
              </div>
      
              <div className="hero-stat">
                <h3>94%</h3>
                <span>Completion Rate</span>
              </div>
      
              <div className="hero-stat">
                <h3>#12</h3>
                <span>Global Rank</span>
              </div>
            </div>
          </div>
      
          <div className="badges-hero-right">
      
            <div className="floating-badge fb-1">
              <i className="fa-solid fa-fire"></i>
            </div>
      
            <div className="floating-badge fb-2">
              <i className="fa-solid fa-crown"></i>
            </div>
      
            <div className="floating-badge fb-3">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
      
            <div className="hero-card-glow"></div>
      
            <div className="hero-preview-card">
      
              <div className="hero-preview-top">
                <div className="hero-user">
                  <div className="hero-avatar">D</div>
      
                  <div>
                    <h4>Dipanita</h4>
                    <p>Frontend Developer</p>
                  </div>
                </div>
      
                <span className="xp-pill">
                  <i className="fa-solid fa-bolt"></i>
                  4,820 XP
                </span>
              </div>
      
              <div className="hero-badge-grid">
      
                <div className="mini-badge gold">
                  <i className="fa-solid fa-code-pull-request"></i>
                </div>
      
                <div className="mini-badge purple">
                  <i className="fa-solid fa-fire"></i>
                </div>
      
                <div className="mini-badge blue">
                  <i className="fa-solid fa-users"></i>
                </div>
      
                <div className="mini-badge green">
                  <i className="fa-solid fa-bug-slash"></i>
                </div>
      
                <div className="mini-badge orange">
                  <i className="fa-solid fa-medal"></i>
                </div>
      
                <div className="mini-badge cyan">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
      
              </div>
      
              <div className="hero-progress-wrap">
                <div className="hero-progress-top">
                  <span>Level Progress</span>
                  <span>82%</span>
                </div>
      
                <div className="hero-progress-bar">
                  <div className="hero-progress-fill"></div>
                </div>
              </div>
      
            </div>
      
          </div>
      
        </div>
      </section>
      
          {/* Earned */}
          <section className="badge-section">
            <h2>Earned Badges</h2>
      <section className="badges-page">
        <h1><i className="fa-solid fa-trophy"></i> My Badges</h1>
      
        <h2><i className="fa-solid fa-medal"></i> Earned Badges</h2>
        <div className="badge-container">
          
          <div className="badge">
            <picture><source type="image/avif" srcset="generated-images/badge1/badge1-320.avif 320w, generated-images/badge1/badge1-480.avif 480w, generated-images/badge1/badge1-768.avif 768w, generated-images/badge1/badge1-1024.avif 1024w, generated-images/badge1/badge1-1300.avif 1300w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/badge1/badge1-320.webp 320w, generated-images/badge1/badge1-480.webp 480w, generated-images/badge1/badge1-768.webp 768w, generated-images/badge1/badge1-1024.webp 1024w, generated-images/badge1/badge1-1300.webp 1300w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/badge1/badge1-optimized-1300.jpg" alt="First PR badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="1300" height="1390" /></picture>
            <h3>First PR</h3>
            <p>Completed your first pull request</p>
          </div>
      
          <div className="badge">
             <picture><source type="image/avif" srcset="generated-images/badge2/badge2-212.avif 212w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/badge2/badge2-212.webp 212w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/badge2/badge2-optimized-212.jpg" alt="Contributor badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="212" height="238" /></picture>
            <h3>Contributor</h3>
            <p>Contributed to 10 PRs</p>
          </div>
      
            <div className="badge-container">
      
              <div className="badge earned">
                <div className="badge-img">
                  <img src="badge1.jpg" alt="First PR Badge" />
                </div>
      
                <h3>First PR</h3>
                <p>Completed your first pull request</p>
          <div className="badge progress">
            <picture><source type="image/avif" srcset="generated-images/time/time-320.avif 320w, generated-images/time/time-480.avif 480w, generated-images/time/time-512.avif 512w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/time/time-320.webp 320w, generated-images/time/time-480.webp 480w, generated-images/time/time-512.webp 512w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/time/time-optimized-512.png" alt="Top Contributor badge with progress indicator" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="512" height="512" /></picture>
            <h3>Top Contributor</h3>
            <p>14/50 PRs completed</p>
            <progress value="14" max="50"></progress>
          </div>
      
                <span className="badge-status success">
                  <i className="fa-solid fa-circle-check"></i>
                  Unlocked
                </span>
              </div>
      
              <div className="badge earned">
                <div className="badge-img">
                  <img src="badge2.jpg" alt="Contributor Badge" />
                </div>
      
                <h3>Contributor</h3>
                <p>Contributed to 10 pull requests</p>
      
                <span className="badge-status success">
                  <i className="fa-solid fa-circle-check"></i>
                  Unlocked
                </span>
              </div>
      
            </div>
          </section>
      
          {/* Progress */}
          <section className="badge-section">
            <h2>In Progress</h2>
      
            <div className="badge-container">
      
              <div className="badge progress-card">
      
                <div className="badge-img">
                  <img src="time.png" alt="Progress Badge" />
                </div>
      
                <h3>Top Contributor</h3>
                <p>14 / 50 PRs completed</p>
      
                <div className="progress-wrapper">
                  <progress value="14" max="50"></progress>
                  <span>28%</span>
                </div>
      
              </div>
      
            </div>
          </section>
      
          {/* Locked */}
          <section className="badge-section">
            <h2>Locked Badges</h2>
      
            <div className="badge-container">
      
              <div className="badge locked">
      
                <div className="badge-img">
                  <img src="lock.jpg" alt="Locked Badge" />
                </div>
      
                <h3>Elite Hacker</h3>
                <p>Complete 100 PRs to unlock</p>
      
                <span className="badge-status locked-status">
                  <i className="fa-solid fa-lock"></i>
                  Locked
                </span>
      
              </div>
      
            </div>
          </section>
        {/* Earned Badges */}
      <h2>✨ Earned Badges</h2>
      <div className="badge-container">
      
        <div className="badge gold" data-collectible="badge-first-pr">
          <div className="badge-icon">
            <i className="fa-solid fa-code-pull-request"></i>
          </div>
          <h3>First PR</h3>
          <p>Completed your first pull request</p>
          <span className="badge-tag">Unlocked</span>
          <button className="collect-btn" data-action="add" aria-label="Add to collection">👉 Save</button>
        </div>
      
        <div className="badge blue">
          <div className="badge-icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <h3>Contributor</h3>
          <p>Contributed to 10 PRs</p>
          <span className="badge-tag">Level 1</span>
        </div>
      
        <div className="badge purple">
          <div className="badge-icon">
            <i className="fa-solid fa-fire"></i>
          </div>
          <h3>Streak Master</h3>
          <p>Maintained a 30-day coding streak</p>
          <span className="badge-tag">Hot</span>
        </div>
      
        <div className="badge green">
          <div className="badge-icon">
            <i className="fa-solid fa-bug-slash"></i>
          </div>
          <h3>Bug Hunter</h3>
          <p>Resolved 25 reported issues</p>
          <span className="badge-tag">Expert</span>
        </div>
      
        <div className="badge orange">
          <div className="badge-icon">
            <i className="fa-solid fa-medal"></i>
          </div>
          <h3>Open Source Hero</h3>
          <p>Made impactful open-source contributions</p>
          <span className="badge-tag">Popular</span>
        </div>
      
      </div>
      
      
      {/* In Progress */}
      <h2 className="prog-1">🚀 In Progress</h2>
      <div className="badge-container">
      
        <div className="badge progress">
          <div className="badge-icon">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h3>Top Contributor</h3>
          <p>14/50 PRs completed</p>
          <progress value="14" max="50"></progress>
        </div>
      
        <div className="badge progress">
          <div className="badge-icon">
            <i className="fa-solid fa-terminal"></i>
          </div>
          <h3>Code Wizard</h3>
          <p>40/100 coding challenges solved</p>
          <progress value="40" max="100"></progress>
        </div>
      
      </div>
      
      
      {/* Locked Badges */}
      <h2 className="prog-2">🔒 Locked Badges</h2>
      <div className="badge-container">
      
        <div className="badge locked">
          <div className="badge-icon">
            <i className="fa-solid fa-crown"></i>
          </div>
          <h3>Elite Hacker</h3>
          <p>Complete 100 PRs</p>
        </div>
      
        <div className="badge locked">
          <div className="badge-icon">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <h3>Launch Legend</h3>
          <p>Deploy 50 successful projects</p>
        </div>
      
        <div className="badge locked">
          <div className="badge-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3>Security Master</h3>
          <p>Fix 100 security vulnerabilities</p>
        </div>
      
      </div>
      
        {/* Locked Badges */}
        <h2 className="prog-2">Locked Badges</h2>
        <div className="badge-container">
      
          <div className="badge locked">
            <picture><source type="image/avif" srcset="generated-images/lock/lock-320.avif 320w, generated-images/lock/lock-480.avif 480w, generated-images/lock/lock-612.avif 612w" sizes="(max-width: 768px) 96px, 160px"><source type="image/webp" srcset="generated-images/lock/lock-320.webp 320w, generated-images/lock/lock-480.webp 480w, generated-images/lock/lock-612.webp 612w" sizes="(max-width: 768px) 96px, 160px"><img src="generated-images/lock/lock-optimized-612.jpg" alt="Elite Hacker locked badge icon" sizes="(max-width: 768px) 96px, 160px" loading="lazy" decoding="async" width="612" height="612" /></picture>
            <h3>Elite Hacker</h3>
            <p>Complete 100 PRs</p>
          </div>
      
        </main>
    </>
  );
}
