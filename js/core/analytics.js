/**
 * UI-Verse - Component Analytics
 * Tracks view counts, copies, likes, and trending metrics
 */

const ComponentAnalytics = {
  STORAGE_KEY: 'uiv-analytics',
  sessionId: null,

  init() {
    this.sessionId = this.generateSessionId();
    this.trackPageView();
    this.setupEventTracking();
  },

  generateSessionId() {
    return 'xxxx'.replace(/[x]/g, () => Math.floor(Math.random() * 16).toString(16));
  },

  getData() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  },

  save(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  increment(componentId, eventType) {
    const data = this.getData();
    if (!data[componentId]) {
      data[componentId] = { views: 0, copies: 0, likes: 0 };
    }
    data[componentId][eventType] = (data[componentId][eventType] || 0) + 1;
    data[componentId].lastUpdated = Date.now();
    this.save(data);
    this.updateDisplay(componentId);
  },

  trackPageView() {
    const path = window.location.pathname;
    const match = path.match(/\/([^\/]+)\.html/);
    if (match) {
      this.increment(match[1], 'views');
    }
  },

  trackCopy(componentId) {
    this.increment(componentId, 'copies');
    this.sendEvent('component_copy', { componentId });
  },

  trackLike(componentId) {
    this.increment(componentId, 'likes');
    this.sendEvent('component_like', { componentId });
  },

  getMetrics(componentId) {
    const data = this.getData();
    return data[componentId] || { views: 0, copies: 0, likes: 0 };
  },

  getTrending(limit = 10) {
    const data = this.getData();
    return Object.entries(data)
      .map(([id, metrics]) => ({
        id,
        ...metrics,
        score: (metrics.views || 0) + (metrics.copies || 0) * 2 + (metrics.likes || 0) * 3
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  },

  updateDisplay(componentId) {
    const metrics = this.getMetrics(componentId);
    const badge = document.querySelector(`[data-component="${componentId}"] .metric-badge`);
    if (badge) {
      badge.textContent = `${metrics.views} views`;
    }
  },

  setupEventTracking() {
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) {
        const card = e.target.closest('.component-card');
        if (card) {
          const id = card.dataset.name?.toLowerCase().replace(/\s+/g, '-');
          if (id) this.trackCopy(id);
        }
      }

      const likeBtn = e.target.closest('.like-btn');
      if (likeBtn) {
        const card = e.target.closest('.component-card');
        if (card) {
          const id = card.dataset.name?.toLowerCase().replace(/\s+/g, '-');
          if (id) this.trackLike(id);
        }
      }
    });
  },

  sendEvent(eventName, properties) {
    console.log('[Analytics]', eventName, properties);
  },

  renderMetricsBadge() {
    document.querySelectorAll('.component-card').forEach(card => {
      const name = card.dataset.name?.toLowerCase().replace(/\s+/g, '-');
      if (!name) return;

      const metrics = this.getMetrics(name);
      if (metrics.views > 0) {
        const badge = document.createElement('span');
        badge.className = 'metric-badge';
        badge.style.cssText = `
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 10px;
        `;
        badge.textContent = `${metrics.views} views`;
        
        if (!card.querySelector('.metric-badge')) {
          card.style.position = 'relative';
          card.appendChild(badge);
        }
      }
    });
  }
};

if (typeof window !== 'undefined') {
  window.ComponentAnalytics = ComponentAnalytics;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ComponentAnalytics.init();
      setTimeout(() => ComponentAnalytics.renderMetricsBadge(), 1000);
    });
  } else {
    ComponentAnalytics.init();
  }
}

export default ComponentAnalytics;