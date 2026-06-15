// =========================================================
// CONTRIBUTOR IMPACT DASHBOARD
// Loads contributor metadata, merges with analytics data,
// and renders per-contributor stats + activity timeline.
// =========================================================

const ContributorDashboard = (() => {

  // ── State ─────────────────────────────────────────────
  const _state = {
    contributors: [],
    activeId:     null,   // currently selected contributor
    sortBy:       'impact' // 'impact' | 'components' | 'joined'
  };

  // ── Analytics integration ─────────────────────────────

  function getMetrics(componentId) {
    if (window.ComponentAnalytics) {
      return window.ComponentAnalytics.getMetrics(componentId);
    }
    try {
      const raw  = localStorage.getItem('uiv-analytics');
      const data = raw ? JSON.parse(raw) : {};
      return data[componentId] || { views: 0, copies: 0, likes: 0 };
    } catch (_) {
      return { views: 0, copies: 0, likes: 0 };
    }
  }

  function adoptionScore(metrics) {
    return (metrics.views || 0) +
           (metrics.copies || 0) * 2 +
           (metrics.likes  || 0) * 3;
  }

  // ── Data loading ──────────────────────────────────────

  async function load() {
    const res  = await fetch('data/contributors.json');
    if (!res.ok) throw new Error('Failed to load contributors.json');
    const raw  = await res.json();

    _state.contributors = raw.map(contributor => {
      const enriched = contributor.components.map(comp => ({
        ...comp,
        metrics: getMetrics(comp.id),
        score:   adoptionScore(getMetrics(comp.id))
      }));

      const totalScore = enriched.reduce((s, c) => s + c.score, 0);
      const topComp    = enriched.slice().sort((a, b) => b.score - a.score)[0] || null;
      const hidden     = enriched.filter(c => c.score < 3);

      return {
        ...contributor,
        components:  enriched,
        totalScore,
        topComponent: topComp,
        hiddenGems:   hidden
      };
    });

    return _state.contributors;
  }

  // ── Sorting ───────────────────────────────────────────

  function sorted() {
    const list = _state.contributors.slice();
    if (_state.sortBy === 'impact') {
      return list.sort((a, b) => b.totalScore - a.totalScore);
    }
    if (_state.sortBy === 'components') {
      return list.sort((a, b) => b.components.length - a.components.length);
    }
    if (_state.sortBy === 'joined') {
      return list.sort((a, b) => new Date(a.joinedAt) - new Date(b.joinedAt));
    }
    return list;
  }

  // ── Formatting helpers ────────────────────────────────

  function fmtDate(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function escHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Render: leaderboard list ──────────────────────────

  function renderLeaderboard(container) {
    const list = sorted();
    container.innerHTML = list.map((c, i) => `
      <button
        class="cb-card ${_state.activeId === c.id ? 'cb-card--active' : ''}"
        data-id="${escHtml(c.id)}"
        aria-pressed="${_state.activeId === c.id}"
      >
        <span class="cb-rank">#${i + 1}</span>
        <img
          class="cb-avatar"
          src="${escHtml(c.avatar)}"
          alt="${escHtml(c.name)}"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=eb6835&color=fff&size=48'"
        />
        <span class="cb-info">
          <span class="cb-name">${escHtml(c.name)}</span>
          <span class="cb-role">${escHtml(c.role)}</span>
        </span>
        <span class="cb-meta">
          <span class="cb-stat" title="Impact score">⚡ ${c.totalScore}</span>
          <span class="cb-stat" title="Components">🧩 ${c.components.length}</span>
        </span>
      </button>
    `).join('');
  }

  // ── Render: detail panel ──────────────────────────────

  function renderDetail(container, contributor) {
    if (!contributor) {
      container.innerHTML = '<p class="cb-hint">← Select a contributor to see their impact</p>';
      return;
    }

    const c       = contributor;
    const byScore = c.components.slice().sort((a, b) => b.score - a.score);

    // Timeline: sort by addedAt
    const timeline = c.components.slice().sort(
      (a, b) => new Date(a.addedAt) - new Date(b.addedAt)
    );

    container.innerHTML = `
      <div class="cb-detail-header">
        <img
          class="cb-avatar cb-avatar--lg"
          src="${escHtml(c.avatar)}"
          alt="${escHtml(c.name)}"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=eb6835&color=fff&size=80'"
        />
        <div class="cb-detail-meta">
          <h2 class="cb-detail-name">${escHtml(c.name)}</h2>
          <span class="cb-detail-role">${escHtml(c.role)}</span>
          <a
            class="cb-github-link"
            href="https://github.com/${escHtml(c.github)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i> @${escHtml(c.github)}
          </a>
        </div>
      </div>

      <div class="cb-stats-row">
        <div class="cb-stat-card">
          <span class="cb-stat-card__num">${c.components.length}</span>
          <span class="cb-stat-card__label">Components</span>
        </div>
        <div class="cb-stat-card cb-stat-card--accent">
          <span class="cb-stat-card__num">${c.totalScore}</span>
          <span class="cb-stat-card__label">Impact Score</span>
        </div>
        <div class="cb-stat-card">
          <span class="cb-stat-card__num">${c.components.reduce((s, x) => s + (x.metrics.views || 0), 0)}</span>
          <span class="cb-stat-card__label">Total Views</span>
        </div>
        <div class="cb-stat-card">
          <span class="cb-stat-card__num">${c.components.reduce((s, x) => s + (x.metrics.copies || 0), 0)}</span>
          <span class="cb-stat-card__label">Total Copies</span>
        </div>
      </div>

      ${c.topComponent ? `
      <div class="cb-highlight">
        <span class="cb-highlight__label">🏆 Top Component</span>
        <a href="${escHtml(c.topComponent.path)}" class="cb-highlight__link">
          ${escHtml(c.topComponent.title)}
          <span class="cb-highlight__score">⚡ ${c.topComponent.score}</span>
        </a>
      </div>` : ''}

      <h3 class="cb-section-title">All Components</h3>
      <div class="cb-comp-list">
        ${byScore.map(comp => `
          <a class="cb-comp-row" href="${escHtml(comp.path)}">
            <span class="cb-comp-title">${escHtml(comp.title)}</span>
            <span class="cb-comp-cat">${escHtml(comp.category)}</span>
            <span class="cb-comp-metrics">
              <span title="Views">👁 ${comp.metrics.views || 0}</span>
              <span title="Copies">📋 ${comp.metrics.copies || 0}</span>
              <span title="Likes">❤️ ${comp.metrics.likes || 0}</span>
              <span class="cb-comp-score" title="Impact score">⚡ ${comp.score}</span>
            </span>
          </a>
        `).join('')}
      </div>

      ${c.hiddenGems.length ? `
      <h3 class="cb-section-title">💎 Hidden Gems <span class="cb-section-hint">(low views — worth exploring)</span></h3>
      <div class="cb-gems">
        ${c.hiddenGems.map(g => `
          <a class="cb-gem-chip" href="${escHtml(g.path)}">${escHtml(g.title)}</a>
        `).join('')}
      </div>` : ''}

      <h3 class="cb-section-title">📅 Activity Timeline</h3>
      <div class="cb-timeline">
        ${timeline.map((comp, idx) => `
          <div class="cb-tl-item">
            <div class="cb-tl-dot ${idx === 0 ? 'cb-tl-dot--first' : ''}"></div>
            <div class="cb-tl-body">
              <a class="cb-tl-title" href="${escHtml(comp.path)}">${escHtml(comp.title)}</a>
              <span class="cb-tl-date">${fmtDate(comp.addedAt)}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <p class="cb-joined">Member since ${fmtDate(c.joinedAt)}</p>
    `;
  }

  // ── Init ──────────────────────────────────────────────

  async function init(options) {
    const leaderboardEl = document.getElementById('cbLeaderboard');
    const detailEl      = document.getElementById('cbDetail');
    const sortEl        = document.getElementById('cbSort');
    const searchEl      = document.getElementById('cbSearch');
    const loadingEl     = document.getElementById('cbLoading');
    const errorEl       = document.getElementById('cbError');

    if (!leaderboardEl || !detailEl) return;

    try {
      await load();
    } catch (err) {
      if (loadingEl) loadingEl.style.display = 'none';
      if (errorEl)   errorEl.style.display   = '';
      console.error('[ContributorDashboard]', err);
      return;
    }

    if (loadingEl) loadingEl.style.display = 'none';

    // Default: select first contributor
    if (_state.contributors.length) {
      _state.activeId = _state.contributors[0].id;
    }

    renderLeaderboard(leaderboardEl);
    renderDetail(detailEl, _state.contributors.find(c => c.id === _state.activeId));

    // Click on contributor card
    leaderboardEl.addEventListener('click', e => {
      const btn = e.target.closest('.cb-card');
      if (!btn) return;
      _state.activeId = btn.dataset.id;
      renderLeaderboard(leaderboardEl);
      renderDetail(detailEl, _state.contributors.find(c => c.id === _state.activeId));
    });

    // Sort change
    if (sortEl) {
      sortEl.addEventListener('change', () => {
        _state.sortBy = sortEl.value;
        renderLeaderboard(leaderboardEl);
      });
    }

    // Search filter
    if (searchEl) {
      searchEl.addEventListener('input', () => {
        const q = searchEl.value.toLowerCase().trim();
        leaderboardEl.querySelectorAll('.cb-card').forEach(btn => {
          const name = btn.querySelector('.cb-name')?.textContent.toLowerCase() || '';
          btn.style.display = name.includes(q) ? '' : 'none';
        });
      });
    }
  }

  // ── Expose ────────────────────────────────────────────

  return { init, load };

})();

window.ContributorDashboard = ContributorDashboard;