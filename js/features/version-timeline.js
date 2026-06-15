/**
 * UI-Verse Component Version Timeline
 * Renders interactive timeline from data/component-versions.json
 */

const VersionTimeline = {
  _state: {
    initialized: false,
    catalog: null,
    activeComponent: null,
    activeFilter: 'all'
  },

  async init() {
    if (this._state.initialized) return;
    try {
      const res = await fetch('./data/component-versions.json');
      if (!res.ok) throw new Error('component-versions.json not found');
      this._state.catalog = await res.json();
      this._state.initialized = true;
    } catch (e) {
      console.warn('[VersionTimeline] Failed to load version catalog:', e.message);
    }
  },

  getCatalog() {
    return this._state.catalog || [];
  },

  findComponent(id) {
    const catalog = this.getCatalog();
    return catalog.find(c => c.id === id || c.id.toLowerCase() === id.toLowerCase()) || null;
  },

  renderTimeline(container, componentId, options = {}) {
    const component = this.findComponent(componentId);
    if (!component) {
      container.innerHTML = '<p style="color:#888">No version history found for this component.</p>';
      return;
    }

    const changelog = component.changelog || [];
    const filter = options.filter || 'all';
    const filtered = filter === 'all' ? changelog : changelog.filter(e => e.changeType === filter);

    const changeTypes = [...new Set(changelog.map(e => e.changeType))];
    const typeColors = {
      style: '#eb6835',
      structure: '#6c5ce7',
      behaviour: '#00b894',
      accessibility: '#0984e3',
      fix: '#fdcb6e',
      feature: '#74b9ff'
    };

    const filterHtml = `
      <div class="vt-filters">
        <span class="vt-filter ${filter === 'all' ? 'active' : ''}" data-type="all">All</span>
        ${changeTypes.map(t => `<span class="vt-filter ${filter === t ? 'active' : ''}" data-type="${t}" style="--type-color:${typeColors[t] || '#888'}">${t}</span>`).join('')}
      </div>
    `;

    const timelineHtml = filtered.map((entry, i) => `
      <div class="vt-entry" data-version="${entry.version}">
        <div class="vt-dot" style="background:${typeColors[entry.changeType] || '#888'}"></div>
        <div class="vt-content">
          <div class="vt-header">
            <span class="vt-version">v${entry.version}</span>
            <span class="vt-date">${entry.date}</span>
            <span class="vt-type" style="background:${typeColors[entry.changeType] || '#888'}22;color:${typeColors[entry.changeType] || '#888'}">${entry.changeType}</span>
            ${entry.contributor ? `<span class="vt-contributor">@${entry.contributor}</span>` : ''}
          </div>
          <div class="vt-note">${entry.note}</div>
          ${i < filtered.length - 1 ? `<button class="vt-diff-btn" data-from="${filtered[i+1].version}" data-to="${entry.version}">Compare with v${filtered[i+1].version}</button>` : ''}
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="vt-timeline">
        <div class="vt-header-bar">
          <h3 class="vt-title">${component.title}</h3>
          <span class="vt-current">Current: v${component.version}</span>
        </div>
        ${filterHtml}
        <div class="vt-entries">${timelineHtml || '<p style="color:#666;padding:20px">No entries match this filter.</p>'}</div>
      </div>
    `;

    // Attach filter handlers
    container.querySelectorAll('.vt-filter').forEach(chip => {
      chip.addEventListener('click', () => {
        this.renderTimeline(container, componentId, { ...options, filter: chip.dataset.type });
      });
    });

    // Attach diff button handlers
    container.querySelectorAll('.vt-diff-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const event = new CustomEvent('version-timeline:diff-requested', {
          detail: {
            componentId,
            fromVersion: btn.dataset.from,
            toVersion: btn.dataset.to
          }
        });
        document.dispatchEvent(event);
      });
    });
  },

  injectStyles() {
    if (document.getElementById('version-timeline-styles')) return;
    const style = document.createElement('style');
    style.id = 'version-timeline-styles';
    style.textContent = `
      .vt-timeline { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #e0e0e0; }
      .vt-header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #2a2a4a; }
      .vt-title { font-size: 16px; margin: 0; color: #fff; }
      .vt-current { font-size: 12px; color: #888; }
      .vt-filters { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
      .vt-filter { padding: 4px 10px; border-radius: 999px; font-size: 11px; cursor: pointer; border: 1px solid #2a2a4a; background: #1a1a2e; color: #aaa; transition: all 0.2s; }
      .vt-filter.active { background: #6c5ce7; color: #fff; border-color: #6c5ce7; }
      .vt-filter:hover:not(.active) { border-color: #444; color: #fff; }
      .vt-entries { position: relative; padding-left: 24px; }
      .vt-entries::before { content: ''; position: absolute; left: 6px; top: 0; bottom: 0; width: 2px; background: #2a2a4a; }
      .vt-entry { position: relative; margin-bottom: 16px; padding-left: 20px; }
      .vt-dot { position: absolute; left: -21px; top: 2px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #0f0f1a; }
      .vt-content { background: #1a1a2e; border: 1px solid #2a2a4a; border-radius: 8px; padding: 12px; }
      .vt-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap; }
      .vt-version { font-weight: 700; color: #fff; font-size: 13px; }
      .vt-date { font-size: 11px; color: #888; }
      .vt-type { font-size: 10px; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
      .vt-contributor { font-size: 11px; color: #6c5ce7; }
      .vt-note { font-size: 12px; color: #aaa; line-height: 1.5; }
      .vt-diff-btn { margin-top: 8px; padding: 6px 12px; border: 1px solid #2a2a4a; background: #252545; color: #aaa; border-radius: 6px; font-size: 11px; cursor: pointer; transition: all 0.2s; }
      .vt-diff-btn:hover { background: #6c5ce7; color: #fff; border-color: #6c5ce7; }
    `;
    document.head.appendChild(style);
  }
};

window.VersionTimeline = VersionTimeline;