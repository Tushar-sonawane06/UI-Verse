/**
 * Component Ratings UI
 * M2: Injects star rating display + review count on component cards.
 * Fetches from marketplace API. Allows users to submit ratings.
 */

const ComponentRatings = (() => {
  'use strict';

  const API_BASE = window.UIVERSE_API_BASE || 'http://localhost:5000';
  const STORAGE_KEY = 'uiv_user_id';

  function getUserId() {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = 'user_' + Math.random().toString(36).slice(2, 10);
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  }

  async function fetchRating(componentSlug) {
    try {
      const res = await fetch(`${API_BASE}/api/marketplace/components/${encodeURIComponent(componentSlug)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return { avg: data.avg_rating || 0, count: data.rating_count || 0, componentId: data.id };
    } catch (e) {
      return null;
    }
  }

  function renderStars(avg) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.round(avg)) {
        html += '<i class="fa-solid fa-star" style="color:#f59e0b;"></i>';
      } else {
        html += '<i class="fa-regular fa-star" style="color:#cbd5e1;"></i>';
      }
    }
    return html;
  }

  function injectRating(card, slug) {
    if (card.querySelector('.card-rating')) return;

    const top = card.querySelector('.card-top');
    if (!top) return;

    const ratingWrap = document.createElement('div');
    ratingWrap.className = 'card-rating';
    ratingWrap.style.cssText = 'display:flex;align-items:center;gap:4px;font-size:12px;color:var(--text-secondary,#666);margin-left:auto;';
    ratingWrap.innerHTML = '<span class="rating-loading" style="font-size:11px;">…</span>';

    top.appendChild(ratingWrap);

    fetchRating(slug).then(data => {
      if (!data) {
        ratingWrap.innerHTML = '';
        return;
      }
      ratingWrap.innerHTML = `${renderStars(data.avg)} <span style="font-size:11px;opacity:0.8;">(${data.count})</span>`;
      ratingWrap.dataset.componentId = data.componentId;
      ratingWrap.dataset.slug = slug;
      ratingWrap.style.cursor = 'pointer';
      ratingWrap.title = 'Click to rate';

      ratingWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        openRatingModal(data.componentId, slug, data.avg);
      });
    });
  }

  function openRatingModal(componentId, slug, currentAvg) {
    const existing = document.getElementById('rating-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'rating-modal-overlay';
    overlay.innerHTML = `
      <div class="rating-modal-backdrop">
        <div class="rating-modal">
          <div class="rating-modal-header">
            <h4>Rate Component</h4>
            <button class="rating-close" aria-label="Close">✕</button>
          </div>
          <div class="rating-modal-body">
            <div class="rating-stars-input" style="display:flex;gap:8px;justify-content:center;font-size:28px;margin:16px 0;">
              ${[1,2,3,4,5].map(i => `<i class="fa-regular fa-star rating-star-btn" data-score="${i}" style="cursor:pointer;color:#cbd5e1;transition:color .15s;"></i>`).join('')}
            </div>
            <p class="rating-current" style="text-align:center;font-size:13px;color:var(--text-secondary);">Current: ${currentAvg.toFixed(1)} / 5</p>
            <textarea class="rating-review-input" placeholder="Write a review (optional)..." style="width:100%;min-height:80px;padding:10px;border:1.5px solid rgba(0,0,0,0.1);border-radius:10px;font-family:inherit;font-size:13px;resize:vertical;"></textarea>
          </div>
          <div class="rating-modal-footer">
            <button class="rating-submit-btn" style="padding:8px 18px;border-radius:8px;border:none;background:var(--accent,#eb6835);color:#fff;font-weight:600;cursor:pointer;">Submit</button>
          </div>
        </div>
      </div>
    `;

    injectRatingStyles();
    document.body.appendChild(overlay);

    let selectedScore = 0;

    overlay.querySelectorAll('.rating-star-btn').forEach(star => {
      star.addEventListener('mouseenter', () => highlightStars(star.dataset.score));
      star.addEventListener('mouseleave', () => highlightStars(selectedScore));
      star.addEventListener('click', () => {
        selectedScore = parseInt(star.dataset.score);
        highlightStars(selectedScore);
      });
    });

    function highlightStars(score) {
      overlay.querySelectorAll('.rating-star-btn').forEach((s, idx) => {
        s.className = idx < score ? 'fa-solid fa-star rating-star-btn' : 'fa-regular fa-star rating-star-btn';
        s.style.color = idx < score ? '#f59e0b' : '#cbd5e1';
      });
    }

    overlay.querySelector('.rating-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay.querySelector('.rating-modal-backdrop')) overlay.remove(); });

    overlay.querySelector('.rating-submit-btn').addEventListener('click', async () => {
      if (!selectedScore) {
        alert('Please select a star rating.');
        return;
      }
      const body = overlay.querySelector('.rating-review-input').value.trim();

      try {
        await fetch(`${API_BASE}/api/marketplace/ratings`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ component_id: componentId, user_id: getUserId(), score: selectedScore }),
        });

        if (body) {
          await fetch(`${API_BASE}/api/marketplace/reviews`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ component_id: componentId, user_id: getUserId(), user_name: 'UIverse User', body }),
          });
        }

        overlay.remove();
        refreshCardRating(slug);
      } catch (e) {
        alert('Failed to submit. Is the backend running?');
      }
    });
  }

  function refreshCardRating(slug) {
    document.querySelectorAll('.component-card').forEach(card => {
      if (card.dataset.name === slug) {
        const old = card.querySelector('.card-rating');
        if (old) old.remove();
        injectRating(card, slug);
      }
    });
  }

  function injectRatingStyles() {
    if (document.getElementById('rating-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'rating-modal-styles';
    style.textContent = `
      .rating-modal-backdrop{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px;}
      .rating-modal{background:var(--card-bg,#fff);border-radius:16px;width:100%;max-width:420px;box-shadow:0 24px 64px rgba(0,0,0,0.25);overflow:hidden;}
      .rating-modal-header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.06);}
      .rating-modal-header h4{margin:0;font-family:'Syne',sans-serif;font-size:16px;}
      .rating-close{background:none;border:none;font-size:18px;cursor:pointer;color:var(--text-secondary,#666);}
      .rating-modal-body{padding:16px 20px;}
      .rating-modal-footer{padding:12px 20px;border-top:1px solid rgba(0,0,0,0.06);display:flex;justify-content:flex-end;}
      body.dark-mode .rating-modal{background:var(--card-bg-dark,#1e1e2f);color:var(--text-primary-dark,#f0f0f5);}
    `;
    document.head.appendChild(style);
  }

  function init() {
    document.querySelectorAll('.component-card').forEach(card => {
      const slug = card.dataset.name;
      if (!slug) return;
      injectRating(card, slug);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, injectRating };
})();

if (typeof window !== 'undefined') window.ComponentRatings = ComponentRatings;
if (typeof module !== 'undefined' && module.exports) module.exports = ComponentRatings;