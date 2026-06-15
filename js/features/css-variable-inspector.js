/**
 * Live CSS Variable Inspector Feature
 * Automatically scans, categorizes, displays, and copies CSS custom properties
 * actively affecting or defined on component preview elements.
 */

(function () {
  'use strict';

  const CSSVariableInspector = {
    activeCategory: 'all',

    /**
     * Categorize a CSS custom property name
     */
    categorize(name) {
      const n = name.toLowerCase();
      if (n.includes('color') || n.includes('bg') || n.includes('fill') || n.includes('stroke') || n.includes('accent') || n.includes('primary') || n.includes('secondary') || n.includes('theme') || n.includes('text') || n.includes('border-color')) {
        return 'Colors';
      }
      if (n.includes('font') || n.includes('family') || n.includes('weight') || n.includes('size') || n.includes('line') || n.includes('letter')) {
        return 'Typography';
      }
      if (n.includes('padding') || n.includes('margin') || n.includes('gap') || n.includes('width') || n.includes('height') || n.includes('space') || n.includes('spacing') || n.includes('radius')) {
        return 'Spacing';
      }
      if (n.includes('shadow') || n.includes('glow') || n.includes('elevation') || n.includes('blur')) {
        return 'Shadows';
      }
      if (n.includes('anim') || n.includes('duration') || n.includes('delay') || n.includes('transition') || n.includes('ease') || n.includes('speed') || n.includes('keyframes')) {
        return 'Animations';
      }
      return 'Other';
    },

    /**
     * Detect if a string looks like a valid CSS color
     */
    isColorValue(val) {
      if (!val) return false;
      const clean = val.trim().toLowerCase();
      return (
        clean.startsWith('#') ||
        clean.startsWith('rgb') ||
        clean.startsWith('hsl') ||
        ['red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'purple', 'pink', 'transparent'].includes(clean)
      );
    },

    /**
     * Scan CSS variables declared or referenced on a component card
     */
    scanVariables(card) {
      const vars = new Set();
      const declared = new Set();
      const used = new Set();

      const extractVars = (text) => {
        // Find local declarations like: --var-name: value;
        const declRegex = /(--[\w-]+)\s*:/g;
        let match;
        while ((match = declRegex.exec(text)) !== null) {
          declared.add(match[1]);
          vars.add(match[1]);
        }
        // Find variable references like: var(--var-name)
        const useRegex = /var\(\s*(--[\w-]+)\s*\)/g;
        while ((match = useRegex.exec(text)) !== null) {
          used.add(match[1]);
          vars.add(match[1]);
        }
      };

      // 1. Scan inline style attributes on all children
      const allElems = card.querySelectorAll('*');
      allElems.forEach((el) => {
        const style = el.getAttribute('style');
        if (style) extractVars(style);
      });

      // 2. Scan parsed stylesheet rules in style tags or linked sheets matching the elements
      try {
        for (const sheet of document.styleSheets) {
          try {
            const rules = sheet.cssRules || sheet.rules;
            if (!rules) continue;
            for (const rule of rules) {
              if (rule.type === CSSRule.STYLE_RULE && rule.selectorText) {
                let matches = false;
                try {
                  const matchedEls = document.querySelectorAll(rule.selectorText);
                  for (const el of matchedEls) {
                    if (card.contains(el)) {
                      matches = true;
                      break;
                    }
                  }
                } catch (e) {
                  // Ignore invalid selector queries
                }

                if (matches) {
                  extractVars(rule.cssText);
                }
              }
            }
          } catch (e) {
            // Ignore cross-origin sheet errors
          }
        }
      } catch (e) {
        // Ignore global sheet lookup errors
      }

      return {
        all: Array.from(vars).sort(),
        declared: Array.from(declared),
        used: Array.from(used)
      };
    },

    /**
     * Copy text helper with fallback
     */
    copyText(text) {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        return navigator.clipboard.writeText(text);
      }
      return new Promise((resolve, reject) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        let success = false;
        try {
          success = document.execCommand('copy');
        } catch (e) {
          success = false;
        }
        textarea.remove();
        if (success) resolve();
        else reject(new Error('Copy failed'));
      });
    },

    /**
     * Trigger copy operation with button feedback
     */
    triggerCopy(text, btn) {
      this.copyText(text)
        .then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '<i class="fa-solid fa-check"></i>';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('copied');
          }, 1000);
        })
        .catch((err) => {
          console.error('[CSSVariableInspector] Copy failed', err);
        });
    },

    /**
     * Render the CSS variable list/table body
     */
    renderRows(card, bodyEl, scanned, previewEl) {
      bodyEl.innerHTML = '';
      
      const filtered = scanned.all.filter((vName) => {
        if (this.activeCategory === 'all') return true;
        return this.categorize(vName) === this.activeCategory;
      });

      if (filtered.length === 0) {
        bodyEl.innerHTML = `<div class="inspector-empty">No variables found for category "${this.activeCategory}"</div>`;
        return;
      }

      const rowsContainer = document.createElement('div');
      rowsContainer.className = 'inspector-rows';

      filtered.forEach((varName) => {
        const row = document.createElement('div');
        row.className = 'inspector-row';

        // Compute current live value
        const computedVal = getComputedStyle(previewEl).getPropertyValue(varName).trim();
        const isActive = scanned.used.includes(varName);
        const category = this.categorize(varName);

        // Name Column HTML
        let nameColHTML = `<div class="var-name-col">
          <span class="var-name" title="${varName}">${varName}</span>`;
        if (isActive) {
          nameColHTML += `<span class="var-badge active-badge" title="Actively styles this component">Active</span>`;
        }
        nameColHTML += `</div>`;

        // Value Column HTML (with color swatch preview if applicable)
        let valueColHTML = `<div class="var-value-col">`;
        if (category === 'Colors' && this.isColorValue(computedVal)) {
          valueColHTML += `<span class="color-preview" style="background: ${computedVal}"></span>`;
        }
        valueColHTML += `<span class="var-value" title="${computedVal}">${computedVal || 'unset'}</span></div>`;

        // Actions Column HTML
        const actionsColHTML = `
          <div class="var-actions-col">
            <button class="inspector-action-btn copy-name-btn" title="Copy variable name">
              <i class="fa-regular fa-copy"></i>
            </button>
            <button class="inspector-action-btn copy-val-btn" title="Copy variable value">
              <i class="fa-solid fa-paste"></i>
            </button>
          </div>
        `;

        row.innerHTML = nameColHTML + valueColHTML + actionsColHTML;

        // Bind copy click events
        row.querySelector('.copy-name-btn').addEventListener('click', (e) => {
          this.triggerCopy(varName, e.currentTarget);
        });
        row.querySelector('.copy-val-btn').addEventListener('click', (e) => {
          this.triggerCopy(computedVal, e.currentTarget);
        });

        rowsContainer.appendChild(row);
      });

      bodyEl.appendChild(rowsContainer);
    },

    /**
     * Setup tab filtration controls
     */
    setupTabs(card, headerEl, bodyEl, scanned, previewEl) {
      const tabs = headerEl.querySelectorAll('.inspector-tab-btn');
      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          tabs.forEach((t) => t.classList.remove('active'));
          tab.classList.add('active');
          this.activeCategory = tab.dataset.category;
          this.renderRows(card, bodyEl, scanned, previewEl);
        });
      });
    },

    /**
     * Initialize inspector on a card element
     */
    initCard(card) {
      const actions = card.querySelector('.actions');
      if (!actions) return;

      const previewEl = card.querySelector('.card-preview, .preview-box, .preview') || card;
      
      // 1. Create Inspect Toggle Button
      const inspectBtn = document.createElement('button');
      inspectBtn.type = 'button';
      inspectBtn.className = 'action-btn inspector-toggle-btn';
      inspectBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-chart"></i> Inspect';
      
      // 2. Create Inspector Panel
      const panel = document.createElement('div');
      panel.className = 'css-variables-inspector';
      panel.innerHTML = `
        <div class="inspector-header">
          <h4><i class="fa-solid fa-sliders"></i> CSS Variables</h4>
          <div class="inspector-tabs">
            <button class="inspector-tab-btn active" data-category="all">All</button>
            <button class="inspector-tab-btn" data-category="Colors">Colors</button>
            <button class="inspector-tab-btn" data-category="Typography">Typography</button>
            <button class="inspector-tab-btn" data-category="Spacing">Spacing</button>
            <button class="inspector-tab-btn" data-category="Shadows">Shadows</button>
            <button class="inspector-tab-btn" data-category="Animations">Animations</button>
            <button class="inspector-tab-btn" data-category="Other">Other</button>
          </div>
        </div>
        <div class="inspector-body"></div>
      `;

      const headerEl = panel.querySelector('.inspector-header');
      const bodyEl = panel.querySelector('.inspector-body');

      // Append Inspect button to actions toolbar
      actions.appendChild(inspectBtn);

      // Append panel below preview card structure
      card.appendChild(panel);

      let scannedData = null;

      // Update function
      const updateData = () => {
        scannedData = this.scanVariables(card);
        this.renderRows(card, bodyEl, scannedData, previewEl);
      };

      // Set up tabs
      updateData();
      this.setupTabs(card, headerEl, bodyEl, scannedData, previewEl);

      // Toggle behavior
      inspectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = panel.classList.toggle('open');
        inspectBtn.classList.toggle('active', isOpen);

        if (isOpen) {
          updateData();
          panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
          panel.style.maxHeight = '0';
        }
      });

      // 3. Dynamic mutation listener to update computed values live
      const observer = new MutationObserver(() => {
        if (panel.classList.contains('open')) {
          updateData();
          // Adjust height dynamic container size
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
      observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });
      observer.observe(card, { attributes: true, subtree: true, attributeFilter: ['class', 'style'] });
    },

    /**
     * Bootstrap inspector on all preview components
     */
    init() {
      const cards = document.querySelectorAll('.component-card');
      cards.forEach((card) => {
        // Prevent duplicate initialization
        if (card.dataset.inspectorInjected) return;
        this.initCard(card);
        card.dataset.inspectorInjected = '1';
      });
    }
  };

  // Auto-init after DOM Interactive
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CSSVariableInspector.init());
  } else {
    CSSVariableInspector.init();
  }

  // Register in global namespace for external triggers
  window.CSSVariableInspector = CSSVariableInspector;
})();
