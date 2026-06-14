/**
 * Component Metadata Feature
 * Dynamically resolves, matches, and displays component dependencies, browser compatibility,
 * css feature requirements, accessibility status, responsive status, and performance notes.
 */

(function () {
  'use strict';

  // 1. Detect preview elements. If none are present, do not initialize.
  const cards = document.querySelectorAll('.component-card');
  if (!cards.length) return;

  // 2. Inject CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/component-metadata.css';
  document.head.appendChild(link);

  // 3. Resolve category from page name
  const path = window.location.pathname;
  const pageFile = path.split('/').pop() || 'index.html';

  // Fetch component dependencies database
  fetch('component-dependencies.json')
    .then((response) => {
      if (!response.ok) throw new Error('Failed to load component metadata');
      return response.json();
    })
    .then((data) => {
      // Find category matching pageFile (case insensitive)
      let matchedCategory = null;
      const deps = data.componentDependencies || {};
      for (const key of Object.keys(deps)) {
        const cat = deps[key];
        if (cat.pageFile && cat.pageFile.toLowerCase() === pageFile.toLowerCase()) {
          matchedCategory = cat;
          break;
        }
      }
      
      // Initialize metadata rendering
      initializeMetadata(matchedCategory, data.compatibility);
    })
    .catch((err) => {
      console.warn('[ComponentMetadata]', err);
      // Fallback: render metadata with default rules
      initializeMetadata(null, null);
    });

  // 4. Initialize metadata rendering on the cards
  function initializeMetadata(categoryObj, globalCompatibility) {
    const componentCards = document.querySelectorAll('.component-card');
    
    componentCards.forEach((card) => {
      const actions = card.querySelector('.actions');
      if (!actions) return;
      
      // Resolve component metadata
      const componentData = findComponentData(card, categoryObj);

      // Create "Info" button
      const infoBtn = document.createElement('button');
      infoBtn.type = 'button';
      infoBtn.className = 'action-btn metadata-toggle-btn';
      infoBtn.innerHTML = '<i class="fa-solid fa-info-circle"></i> Info';
      
      // Create details panel element
      const detailsPanel = document.createElement('div');
      detailsPanel.className = 'component-metadata-details';
      
      if (componentData) {
        const metadata = buildMetadata(componentData, categoryObj, globalCompatibility);
        // Build HTML content for details panel
        detailsPanel.innerHTML = `
          <div class="meta-grid">
            <!-- Browser Compatibility -->
            <div class="meta-item">
              <span class="meta-label">
                <i class="fa-solid fa-laptop-code"></i> Compatibility
              </span>
              <div class="browser-support-row">
                <span class="browser-support-badge" title="Chrome"><i class="fa-brands fa-chrome"></i> ${metadata.compatibility.chrome}</span>
                <span class="browser-support-badge" title="Firefox"><i class="fa-brands fa-firefox"></i> ${metadata.compatibility.firefox}</span>
                <span class="browser-support-badge" title="Safari"><i class="fa-brands fa-safari"></i> ${metadata.compatibility.safari}</span>
                <span class="browser-support-badge" title="Edge"><i class="fa-brands fa-edge"></i> ${metadata.compatibility.edge}</span>
              </div>
            </div>

            <!-- Responsive Support -->
            <div class="meta-item">
              <span class="meta-label">
                <i class="fa-solid fa-mobile-screen-button"></i> Responsiveness
              </span>
              <span class="meta-value">
                <span class="meta-badge ${metadata.responsive ? 'badge-success' : 'badge-primary'}">
                  ${metadata.responsive ? 'Responsive' : 'Fixed Width'}
                </span>
              </span>
            </div>

            <!-- Required Dependencies -->
            <div class="meta-item full-width">
              <span class="meta-label">
                <i class="fa-solid fa-cubes"></i> Dependencies
              </span>
              <div class="meta-badge-list">
                ${metadata.dependencies.map(d => `<span class="meta-badge badge-primary">${d}</span>`).join('')}
              </div>
            </div>

            <!-- CSS Features -->
            <div class="meta-item full-width">
              <span class="meta-label">
                <i class="fa-brands fa-css3-alt"></i> CSS Features
              </span>
              <div class="meta-badge-list">
                ${metadata.cssFeatures.map(f => `<span class="meta-badge badge-info">${f}</span>`).join('')}
              </div>
            </div>

            <!-- Accessibility -->
            <div class="meta-item full-width">
              <span class="meta-label">
                <i class="fa-solid fa-universal-access"></i> Accessibility
              </span>
              <span class="meta-value">${metadata.accessibility}</span>
            </div>

            <!-- Performance Notes -->
            <div class="meta-item full-width">
              <span class="meta-label">
                <i class="fa-solid fa-gauge-high"></i> Performance Notes
              </span>
              <span class="meta-value">${metadata.performance}</span>
            </div>
          </div>
        `;
      } else {
        const cardName = card.dataset.name || 'unnamed-card';
        console.warn(`[ComponentMetadata] Missing metadata for card: "${cardName}"`);
        detailsPanel.innerHTML = `
          <div class="meta-unavailable">
            <i class="fa-solid fa-triangle-exclamation"></i> Metadata unavailable
          </div>
        `;
      }

      // Append Info button to card's actions
      actions.appendChild(infoBtn);
      
      // Append details panel to the component card
      card.appendChild(detailsPanel);

      // Bind toggle event
      infoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = detailsPanel.classList.toggle('open');
        infoBtn.classList.toggle('active', isOpen);
        
        // Handle height transition
        if (isOpen) {
          detailsPanel.style.maxHeight = detailsPanel.scrollHeight + 'px';
        } else {
          detailsPanel.style.maxHeight = '0';
        }
      });
    });
  }

  // Helper to match component card to component data from category JSON
  // Order: 1. Exact key match, 2. Deterministic alias lookup, 3. No fallback
  function findComponentData(card, categoryObj) {
    if (!categoryObj || !categoryObj.components) return null;
    
    const cardName = String(card.dataset.name || '').trim().toLowerCase();

    // 1. Try exact key match
    if (categoryObj.components[cardName]) {
      return categoryObj.components[cardName];
    }

    // 2. Try deterministic alias lookup
    if (categoryObj.aliases && categoryObj.aliases[cardName]) {
      const aliasKey = categoryObj.aliases[cardName];
      if (categoryObj.components[aliasKey]) {
        return categoryObj.components[aliasKey];
      }
    }

    return null;
  }

  // Helper to compile final metadata fields
  function buildMetadata(compData, catObj, globalCompat) {
    const compat = compData.compatibility || (globalCompat && globalCompat.browsers) || {
      chrome: '88+',
      firefox: '87+',
      safari: '14+',
      edge: '88+'
    };

    const cssFeatures = compData.cssFeatures || (globalCompat && globalCompat.cssFeatures && globalCompat.cssFeatures.required) || ['flexbox', 'css-custom-properties'];

    let dependencies = [];
    if (compData.requires) {
      dependencies = [...compData.requires];
    } else {
      if (catObj && catObj.categoryDependencies && catObj.categoryDependencies.required) {
        dependencies = [...catObj.categoryDependencies.required];
      }
      if (catObj && catObj.globalDependencies && catObj.globalDependencies.required) {
        dependencies = [...dependencies, ...catObj.globalDependencies.required];
      }
    }
    dependencies = [...new Set(dependencies)];

    const accessibility = compData.accessibility || 'WCAG 2.1 AA Compliant';
    const performance = compData.performance || 'Excellent';
    const responsive = compData.responsive !== false;

    return {
      compatibility: compat,
      cssFeatures,
      dependencies,
      accessibility,
      performance,
      responsive
    };
  }

})();
