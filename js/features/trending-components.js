/**
 * UI-Verse - Trending Components Widget
 * Displays popular components based on analytics
 */

const TrendingComponents = {
  init(containerSelector = '.trending-section') {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    
    this.render();
  },

  _resolveTitle(id) {
    if (window.ComponentIndex) {
      const item = window.ComponentIndex.getById(id);
      if (item && item.title) return { title: item.title, path: item.path || '#' };
    }
    return {
      title: id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      path: id + '.html'
    };
  },

  render() {
    const trending = ComponentAnalytics.getTrending(10);
    
    if (trending.length === 0) {
      this.container.innerHTML = '<p class="no-data">No trending data yet. Start using components!</p>';
      return;
    }

    const html = `
      <div class="trending-list">
        ${trending.map((item, index) => `
          <div class="trending-item">
            <span class="rank">#${index + 1}</span>
            <span class="name">${item.id}</span>
            <span class="stats">
              <span>${item.views} views</span>
              <span>${item.copies} copies</span>
              <span>${item.likes} likes</span>
            </span>
          </div>
        `).join('')}
      </div>
    `;

    this.container.innerHTML = html;

    const style = document.createElement('style');
    style.textContent = `
      .trending-list { display: flex; flex-direction: column; gap: 8px; }
      .trending-item { 
        display: flex; 
        align-items: center; 
        gap: 12px; 
        padding: 8px 12px;
        background: rgba(0,0,0,0.05);
        border-radius: 8px;
      }
      .trending-item .rank { 
        font-weight: bold; 
        color: #eb6835; 
        min-width: 30px; 
      }
      .trending-item .name { 
        flex: 1; 
        font-weight: 500; 
      }
      .trending-item .stats { 
        display: flex; 
        gap: 12px; 
        font-size: 12px; 
        color: #666; 
      }
      .no-data { 
        text-align: center; 
        color: #888; 
        padding: 20px; 
      }
    `;
    if (!document.querySelector('#trending-styles')) {
      style.id = 'trending-styles';
      document.head.appendChild(style);
    }
  }
};

if (typeof window !== 'undefined') {
  window.TrendingComponents = TrendingComponents;
}

export default TrendingComponents;