/**
 * Component Dependency Graph
 * Renders a static adjacency list from component metadata files.
 */

const DependencyGraph = {
  _state: {
    initialized: false,
    components: [],
    nodes: [],
    startTime: 0
  },

  _slug(value) {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  _escape(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  _normalizeDependency(item, fallbackType = 'script') {
    if (!item) return null;

    if (typeof item === 'string') {
      const type = item.match(/\.css$/i) ? 'style' : fallbackType;
      return { type, path: item, label: '' };
    }

    if (typeof item !== 'object') return null;

    const path = item.path || item.file || item.href || item.url;
    if (!path) return null;

    return {
      type: item.type || (path.match(/\.css$/i) ? 'style' : fallbackType),
      path,
      label: item.label || item.description || ''
    };
  },

  _inferDependencies(component) {
    const slug = this._slug(component.id || component.path || component.title);
    const styleName = slug === 'index' ? 'home.css' : `${slug}.css`;
    const styleFallbacks = slug === 'color' ? ['colors.css'] : [styleName];
    const scriptFallbacks = [
      'script.js',
      'js/features/theme.js',
      'js/features/accessibility.js'
    ];

    if (slug === 'index') {
      return {
        styles: ['style.css', 'home.css'],
        scripts: ['script.js', 'js/features/theme.js', 'js/features/search.js', 'js/features/command-palette.js', 'js/features/accessibility.js']
      };
    }

    if (slug === 'settings') {
      return {
        styles: ['style.css', 'css/main.css'],
        scripts: ['script.js', 'js/features/theme.js', 'js/features/sidebar.js', 'js/features/search.js', 'js/features/code-tools.js', 'js/features/sandbox.js', 'js/features/accessibility.js']
      };
    }

    return {
      styles: ['style.css', 'css/main.css'].concat(styleFallbacks),
      scripts: scriptFallbacks.concat(['js/features/code-tools.js', 'js/features/sandbox.js'])
    };
  },

  _buildNode(component, metadata) {
    const dependencySource = metadata && metadata.dependencies ? metadata.dependencies : this._inferDependencies(component);
    const styles = Array.isArray(dependencySource.styles) ? dependencySource.styles : [];
    const scripts = Array.isArray(dependencySource.scripts) ? dependencySource.scripts : [];

    const normalizedStyles = styles.map((item) => this._normalizeDependency(item, 'style')).filter(Boolean);
    const normalizedScripts = scripts.map((item) => this._normalizeDependency(item, 'script')).filter(Boolean);

    const slug = this._slug(component.id || component.path || component.title);

    return {
      id: slug,
      title: component.title || metadata?.title || slug,
      path: component.path || metadata?.path || '',
      metadataPath: `data/meta/${slug}.json`,
      styles: normalizedStyles,
      scripts: normalizedScripts,
      total: normalizedStyles.length + normalizedScripts.length
    };
  },

  _renderSkeleton(root) {
    root.innerHTML = `
      <div class="dependency-skeleton" aria-hidden="true">
        <div class="dependency-skeleton-line long"></div>
        <div class="dependency-skeleton-line medium"></div>
        <div class="dependency-skeleton-line short"></div>
        <div class="dependency-skeleton-line long"></div>
      </div>
      <div class="dependency-skeleton" aria-hidden="true">
        <div class="dependency-skeleton-line medium"></div>
        <div class="dependency-skeleton-line long"></div>
        <div class="dependency-skeleton-line short"></div>
      </div>
    `;
  },

  _renderSummary(root, nodes) {
    const summary = document.getElementById('dependencySummary');
    if (!summary) return;

    const sharedFileCount = new Map();
    nodes.forEach((node) => {
      node.styles.concat(node.scripts).forEach((dep) => {
        const key = dep.path.toLowerCase();
        sharedFileCount.set(key, (sharedFileCount.get(key) || 0) + 1);
      });
    });

    const mostShared = Array.from(sharedFileCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    summary.innerHTML = `
      <span class="dependency-summary-pill"><i class="fa-solid fa-diagram-project"></i>${nodes.length} components</span>
      <span class="dependency-summary-pill"><i class="fa-solid fa-file-code"></i>${sharedFileCount.size} tracked files</span>
      ${mostShared.map(([file, count]) => `
        <span class="dependency-summary-pill">
          <i class="fa-solid fa-link"></i>
          ${this._escape(file)} · ${count} component${count === 1 ? '' : 's'}
        </span>
      `).join('')}
    `;
  },

  _renderNodeCard(node) {
    const styleItems = node.styles.map((dependency) => `
      <li class="dependency-item">
        <div>
          <a class="dependency-file-link" href="${this._escape(dependency.path)}">
            <i class="fa-solid fa-file-lines"></i>
            ${this._escape(dependency.path)}
          </a>
          ${dependency.label ? `<small>${this._escape(dependency.label)}</small>` : ''}
        </div>
        <a class="dependency-count" href="${this._escape(dependency.path)}">View file</a>
      </li>
    `).join('');

    const scriptItems = node.scripts.map((dependency) => `
      <li class="dependency-item">
        <div>
          <a class="dependency-file-link" href="${this._escape(dependency.path)}">
            <i class="fa-solid fa-file-code"></i>
            ${this._escape(dependency.path)}
          </a>
          ${dependency.label ? `<small>${this._escape(dependency.label)}</small>` : ''}
        </div>
        <a class="dependency-count" href="${this._escape(dependency.path)}">View file</a>
      </li>
    `).join('');

    return `
      <article class="dependency-card">
        <div class="dependency-card-header">
          <div class="dependency-card-title">
            <h3>${this._escape(node.title)}</h3>
            <p>${this._escape(node.path || 'No direct page path found')}</p>
          </div>
          <a class="dependency-meta-link" href="${this._escape(node.metadataPath)}">
            <i class="fa-solid fa-file-lines"></i>
            View metadata
          </a>
        </div>

        <div class="dependency-group">
          <h4><i class="fa-solid fa-palette"></i> Styles</h4>
          <ul class="dependency-list">
            ${styleItems || '<li class="dependency-empty">No style dependencies declared.</li>'}
          </ul>
        </div>

        <div class="dependency-group">
          <h4><i class="fa-solid fa-code"></i> Scripts</h4>
          <ul class="dependency-list">
            ${scriptItems || '<li class="dependency-empty">No script dependencies declared.</li>'}
          </ul>
        </div>
      </article>
    `;
  },

  async init() {
    if (this._state.initialized) return;

    const root = document.getElementById('dependencyGraph');
    if (!root) {
      this._state.initialized = true;
      return;
    }

    this._state.startTime = performance.now();
    this._renderSkeleton(root);

    try {
      const response = await fetch('data/components.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`Failed to load components.json (${response.status})`);

      const components = await response.json();
      const items = Array.isArray(components) ? components : [];

      const nodes = await Promise.all(items.map(async (component) => {
        const slug = this._slug(component.id || component.path || component.title);
        let metadata = null;

        try {
          const metaResponse = await fetch(`data/meta/${slug}.json`, { cache: 'no-store' });
          if (metaResponse.ok) {
            metadata = await metaResponse.json();
          }
        } catch (error) {
          metadata = null;
        }

        return this._buildNode(component, metadata);
      }));

      this._state.components = items;
      this._state.nodes = nodes;

      root.innerHTML = nodes.map((node) => this._renderNodeCard(node)).join('');
      this._renderSummary(root, nodes);

      const elapsed = Math.round(performance.now() - this._state.startTime);
      console.info(`[DependencyGraph] Loaded ${nodes.length} components in ${elapsed}ms`);
    } catch (error) {
      console.error('[DependencyGraph] Failed to load graph', error);
      root.innerHTML = `
        <div class="dependency-error">
          Unable to load dependency metadata right now. Check <code>data/components.json</code> and the matching files in <code>data/meta/</code>.
        </div>
      `;
    } finally {
      this._state.initialized = true;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DependencyGraph.init();
});

if (typeof window !== 'undefined') {
  window.DependencyGraph = DependencyGraph;
}
