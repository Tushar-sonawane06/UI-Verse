/**
 * Marketplace Feeds
 * M3: Curated collections — trending, new arrivals, staff picks.
 * Renders feed sections on marketplace pages.
 */

const MarketplaceFeeds = (() => {
  'use strict';

  const API_BASE = window.UIVERSE_API_BASE || 'http://localhost:5000';

  async function fetchFeed(endpoint, limit = 8) {
    try {
      const res = await fetch(`${API_BASE}/api/marketplace/${endpoint}?limit=${limit}`);
      if (!res.ok) return [];
      const data = await res.json();
      return data.components || [];
    } catch (e) {
      return [];
    }
  }

  function renderFeedSection(title, components, container) {
    if (!components.length) return;

    const section = document.createElement('section');
    section.className = 'marketplace-feed';
    section.innerHTML = `
      <h2 class="feed-title" style="font-family:var(--font-heading,'Syne',sans-serif);font-size:22px;font-weight:700;margin:32px 0 16px;">${title}</h2>
      <div class="feed-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">
        ${components.map(c => `
          <div class="feed-card" data-slug="${c.slug}" style="background:var(--card-bg,#fff);border:1px solid var(--card-border,rgba(0,0,0,0.08));border-radius:var(--radius-md,14px);padding:20px;cursor:pointer;transition:transform .2s,box-shadow .2s;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
              <span style="font-weight:700;font-size:14px;color:var(--text-primary);">${escapeHtml(c.name)}</span>
              <span style="font-size:12px;color:#f59e0b;"><i class="fa-solid fa-star"></i> ${c.avg_rating || 0}</span>
            </div>
            <p style="font-size:13px;color:var(--text-secondary);line-height:1.5;margin:0 0 12px;">${escapeHtml(c.description || '').slice(0, 80)}${c.description?.length > 80 ? '…' : ''}</p>
            <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-secondary);">
              <span>by ${escapeHtml(c.author?.display_name || c.author?.username || 'unknown')}</span>
              <span style="margin-left:auto;"><i class="fa-solid fa-download"></i> ${c.download_count || 0}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    section.querySelectorAll('.feed-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.href = `marketplace-detail.html?slug=${encodeURIComponent(card.dataset.slug)}`;
      });
    });

    container.appendChild(section);
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  async function init() {
    const container = document.getElementById('marketplace-feeds');
    if (!container) return;

    const [trending, newArrivals] = await Promise.all([
      fetchFeed('trending', 6),
      fetchFeed('new-arrivals', 6),
    ]);

    renderFeedSection('🔥 Trending This Week', trending, container);
    renderFeedSection('✨ New Arrivals', newArrivals, container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, fetchFeed, renderFeedSection };
})();

if (typeof window !== 'undefined') window.MarketplaceFeeds = MarketplaceFeeds;
if (typeof module !== 'undefined' && module.exports) module.exports = MarketplaceFeeds;