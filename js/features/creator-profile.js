/**
 * Creator Profile Overlay
 * M4: Shows creator attribution on cards, clickable profile modal.
 */

const CreatorProfile = (() => {
  'use strict';

  const API_BASE = window.UIVERSE_API_BASE || 'http://localhost:5000';

  async function fetchCreator(username) {
    try {
      const res = await fetch(`${API_BASE}/api/marketplace/creators/${encodeURIComponent(username)}`);
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  function injectCreatorBadge(card, author) {
    if (card.querySelector('.creator-badge')) return;
    if (!author || !author.username) return;

    const top = card.querySelector('.card-top');
    if (!top) return;

    const badge = document.createElement('span');
    badge.className = 'creator-badge';
    badge.style.cssText = 'display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--text-secondary);margin-left:8px;cursor:pointer;';
    badge.innerHTML = `<i class="fa-solid fa-user-circle"></i> ${escapeHtml(author.display_name || author.username)}`;
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      openProfileModal(author.username);
    });

    top.appendChild(badge);
  }

  function openProfileModal(username) {
    const existing = document.getElementById('creator-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'creator-modal-overlay';
    overlay.innerHTML = `
      <div class="creator-modal-backdrop">
        <div class="creator-modal">
          <div class="creator-modal-header">
            <h3>Creator Profile</h3>
            <button class="creator-close" aria-label="Close">✕</button>
          </div>
          <div class="creator-modal-body">
            <div class="creator-loading" style="text-align:center;padding:40px;color:var(--text-secondary);">Loading…</div>
          </div>
        </div>
      </div>
    `;

    injectCreatorStyles();
    document.body.appendChild(overlay);

    overlay.querySelector('.creator-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay.querySelector('.creator-modal-backdrop')) overlay.remove(); });

    fetchCreator(username).then(profile => {
      const body = overlay.querySelector('.creator-modal-body');
      if (!profile) {
        body.innerHTML = '<p style="text-align:center;color:var(--text-secondary);">Creator not found.</p>';
        return;
      }

      body.innerHTML = `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
          <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--accent,#eb6835),#7b61ff);display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;font-weight:700;">
            ${(profile.display_name || profile.username).charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 style="margin:0;font-size:18px;">${escapeHtml(profile.display_name || profile.username)}</h2>
            <p style="margin:4px 0 0;font-size:13px;color:var(--text-secondary);">@${profile.username}</p>
            ${profile.bio ? `<p style="margin:6px 0 0;font-size:13px;">${escapeHtml(profile.bio)}</p>` : ''}
          </div>
        </div>
        <div style="display:flex;gap:20px;margin-bottom:20px;">
          <div style="text-align:center;"><strong style="display:block;font-size:20px;">${profile.components?.length || 0}</strong><span style="font-size:12px;color:var(--text-secondary);">Components</span></div>
          <div style="text-align:center;"><strong style="display:block;font-size:20px;">${profile.total_downloads || 0}</strong><span style="font-size:12px;color:var(--text-secondary);">Downloads</span></div>
        </div>
        <h4 style="font-size:14px;margin:0 0 10px;">Components</h4>
        <div style="display:grid;gap:10px;">
          ${(profile.components || []).map(c => `
            <div class="creator-component-row" data-slug="${c.slug}" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:rgba(0,0,0,0.03);border-radius:10px;cursor:pointer;">
              <span style="font-weight:600;font-size:13px;">${escapeHtml(c.name)}</span>
              <span style="font-size:12px;color:var(--text-secondary);"><i class="fa-solid fa-star" style="color:#f59e0b;"></i> ${c.avg_rating || 0} · <i class="fa-solid fa-download"></i> ${c.download_count || 0}</span>
            </div>
          `).join('') || '<p style="font-size:13px;color:var(--text-secondary);">No published components yet.</p>'}
        </div>
      `;

      body.querySelectorAll('.creator-component-row').forEach(row => {
        row.addEventListener('click', () => {
          window.location.href = `marketplace-detail.html?slug=${encodeURIComponent(row.dataset.slug)}`;
        });
      });
    });
  }

  function injectCreatorStyles() {
    if (document.getElementById('creator-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'creator-modal-styles';
    style.textContent = `
      .creator-modal-backdrop{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px;}
      .creator-modal{background:var(--card-bg,#fff);border-radius:16px;width:100%;max-width:520px;max-height:80vh;overflow:auto;box-shadow:0 24px 64px rgba(0,0,0,0.25);}
      .creator-modal-header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.06);}
      .creator-modal-header h3{margin:0;font-family:'Syne',sans-serif;font-size:16px;}
      .creator-close{background:none;border:none;font-size:18px;cursor:pointer;color:var(--text-secondary,#666);}
      .creator-modal-body{padding:20px;}
      body.dark-mode .creator-modal{background:var(--card-bg-dark,#1e1e2f);color:var(--text-primary-dark,#f0f0f5);}
    `;
    document.head.appendChild(style);
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function init() {
    document.querySelectorAll('.component-card').forEach(card => {
      const author = card.dataset.author ? JSON.parse(card.dataset.author) : null;
      if (author) injectCreatorBadge(card, author);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, openProfileModal, injectCreatorBadge };
})();

if (typeof window !== 'undefined') window.CreatorProfile = CreatorProfile;
if (typeof module !== 'undefined' && module.exports) module.exports = CreatorProfile;