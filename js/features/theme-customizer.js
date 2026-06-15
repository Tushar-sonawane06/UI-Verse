/**
 * Theme Customizer Panel Feature
 * Allows real-time modification of light/dark theme, primary color, border radius, spacing, and typography.
 */

(function () {
  // 1. Detect preview elements. If none are present, do not initialize.
  function hasPreviewElements() {
    return !!document.querySelector('.component-card, .preview-box, .card-preview, [class*="-preview"]');
  }

  function init() {
    if (!hasPreviewElements()) {
      return;
    }

    // Inject Customizer stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/theme-customizer.css';
    document.head.appendChild(link);

    // Helper to get CSS variables
    function getCSSVar(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    // 2. Cache Initial State for Reset feature
    const initialTheme = window.DesignTokens ? window.DesignTokens.getResolvedTheme(window.DesignTokens.getStoredTheme()) : 'light';
    const initialAccent = getCSSVar('--accent') || '#eb6835';
    const initialColorAccent = getCSSVar('--color-accent') || '#eb6835';
    const initialPrimary = getCSSVar('--primary') || '#6c5ce7';

    const initialRadiusSm = getCSSVar('--radius-sm') || '8px';
    const initialRadiusMd = getCSSVar('--radius-md') || '14px';
    const initialRadiusLg = getCSSVar('--radius-lg') || '20px';

    const initialSpacingXs = getCSSVar('--spacing-xs') || '4px';
    const initialSpacingSm = getCSSVar('--spacing-sm') || '8px';
    const initialSpacingMd = getCSSVar('--spacing-md') || '12px';
    const initialSpacingLg = getCSSVar('--spacing-lg') || '16px';
    const initialSpacingXl = getCSSVar('--spacing-xl') || '24px';
    const initialSpacing2xl = getCSSVar('--spacing-2xl') || '32px';

    const initialFontHeading = getCSSVar('--font-heading') || "'Syne', sans-serif";
    const initialFontBody = getCSSVar('--font-body') || "'DM Sans', sans-serif";

    // Current customizable states
    let currentThemeMode = initialTheme;
    let currentAccent = initialAccent;
    let currentRadiusBase = parseInt(initialRadiusMd) || 14;
    let currentSpacingBase = parseInt(initialSpacingMd) || 12;
    let currentFontHeading = initialFontHeading;
    let currentFontBody = initialFontBody;

    // Preset color values
    const presetColors = [
      { name: 'purple', value: '#6c5ce7' },
      { name: 'orange', value: '#eb6835' },
      { name: 'teal', value: '#00cec9' },
      { name: 'green', value: '#00b894' },
      { name: 'blue', value: '#0984e3' },
      { name: 'pink', value: '#e84393' }
    ];

    // 3. Create DOM Elements
    // Toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'theme-customizer-toggle';
    toggleBtn.setAttribute('aria-label', 'Open theme customizer');
    toggleBtn.innerHTML = '<i class="fa-solid fa-sliders"></i>';
    document.body.appendChild(toggleBtn);

    // Customizer Panel Drawer
    const panel = document.createElement('aside');
    panel.className = 'theme-customizer-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = `
      <div class="theme-customizer-header">
        <h3 class="theme-customizer-title">🎨 Theme Customizer</h3>
        <button type="button" class="theme-customizer-close" aria-label="Close customizer">&times;</button>
      </div>
      <div class="theme-customizer-content">
        <!-- Theme Mode Toggle -->
        <div class="customizer-group">
          <label class="customizer-label">Theme Mode</label>
          <div class="customizer-row-buttons">
            <button type="button" class="customizer-btn" data-theme-btn="light">☀️ Light</button>
            <button type="button" class="customizer-btn" data-theme-btn="dark">🌙 Dark</button>
          </div>
        </div>

        <!-- Accent Color Picker & Swatches -->
        <div class="customizer-group">
          <label class="customizer-label">Accent Color</label>
          <div class="customizer-color-control">
            <div class="customizer-color-picker-wrapper">
              <input type="color" class="customizer-color-picker" id="customizerColorPicker" value="${currentAccent}">
            </div>
            <div class="customizer-swatches">
              ${presetColors.map(c => `
                <div class="customizer-swatch" data-color="${c.value}" style="background-color: ${c.value};" title="${c.name}"></div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Border Radius Slider -->
        <div class="customizer-group">
          <label class="customizer-label">Border Radius <span class="customizer-val-label" id="radiusValLabel">${currentRadiusBase}px</span></label>
          <input type="range" class="customizer-slider" id="radiusSlider" min="0" max="30" value="${currentRadiusBase}">
        </div>

        <!-- Spacing Scale Slider -->
        <div class="customizer-group">
          <label class="customizer-label">Spacing Scale <span class="customizer-val-label" id="spacingValLabel">${currentSpacingBase}px</span></label>
          <input type="range" class="customizer-slider" id="spacingSlider" min="2" max="24" value="${currentSpacingBase}">
        </div>

        <!-- Typography Variations -->
        <div class="customizer-group">
          <label class="customizer-label">Heading Font</label>
          <select class="customizer-select" id="fontHeadingSelect">
            <option value="'Syne', sans-serif">Syne</option>
            <option value="'Outfit', sans-serif">Outfit</option>
            <option value="'DM Sans', sans-serif">DM Sans</option>
            <option value="system-ui, sans-serif">System UI</option>
          </select>
        </div>

        <div class="customizer-group">
          <label class="customizer-label">Body Font</label>
          <select class="customizer-select" id="fontBodySelect">
            <option value="'DM Sans', sans-serif">DM Sans</option>
            <option value="'Inter', sans-serif">Inter</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="monospace">Monospace</option>
          </select>
        </div>
      </div>
      <div class="theme-customizer-footer">
        <button type="button" class="customizer-btn-reset">Reset to Defaults</button>
      </div>
    `;
    document.body.appendChild(panel);

    // Get input elements
    const closeBtn = panel.querySelector('.theme-customizer-close');
    const themeBtnLight = panel.querySelector('[data-theme-btn="light"]');
    const themeBtnDark = panel.querySelector('[data-theme-btn="dark"]');
    const colorPicker = panel.querySelector('#customizerColorPicker');
    const swatches = panel.querySelectorAll('.customizer-swatch');
    const radiusSlider = panel.querySelector('#radiusSlider');
    const radiusValLabel = panel.querySelector('#radiusValLabel');
    const spacingSlider = panel.querySelector('#spacingSlider');
    const spacingValLabel = panel.querySelector('#spacingValLabel');
    const fontHeadingSelect = panel.querySelector('#fontHeadingSelect');
    const fontBodySelect = panel.querySelector('#fontBodySelect');
    const resetBtn = panel.querySelector('.customizer-btn-reset');

    // 4. Panel Toggle Interactions
    function openPanel() {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
    }

    function closePanel() {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (panel.classList.contains('open')) {
        closePanel();
      } else {
        openPanel();
      }
    });

    closeBtn.addEventListener('click', closePanel);

    // Close on clicking outside panel
    document.addEventListener('click', (e) => {
      if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
        closePanel();
      }
    });

    // Prevent panel clicks from closing it
    panel.addEventListener('click', (e) => e.stopPropagation());

    // 5. Apply Customizations Function
    function applyCustomizations() {
      const root = document.documentElement;

      // Apply Accent Colors
      root.style.setProperty('--accent', currentAccent);
      root.style.setProperty('--color-accent', currentAccent);
      root.style.setProperty('--primary', currentAccent);

      // Apply Border Radii proportionally
      const r = currentRadiusBase;
      root.style.setProperty('--radius-sm', `${Math.round(r * (8/14))}px`);
      root.style.setProperty('--radius-md', `${r}px`);
      root.style.setProperty('--radius-lg', `${Math.round(r * (20/14))}px`);

      // Apply Spacing proportionally
      const s = currentSpacingBase;
      root.style.setProperty('--spacing-xs', `${Math.round(s * (4/12))}px`);
      root.style.setProperty('--spacing-sm', `${Math.round(s * (8/12))}px`);
      root.style.setProperty('--spacing-md', `${s}px`);
      root.style.setProperty('--spacing-lg', `${Math.round(s * (16/12))}px`);
      root.style.setProperty('--spacing-xl', `${Math.round(s * (24/12))}px`);
      root.style.setProperty('--spacing-2xl', `${Math.round(s * (32/12))}px`);

      // Apply Typography
      root.style.setProperty('--font-heading', currentFontHeading);
      root.style.setProperty('--font-body', currentFontBody);

      // Sync active inputs UI
      updateUIControls();
    }

    // 6. Update UI Control values to match state
    function updateUIControls() {
      // Theme switches active state
      themeBtnLight.classList.toggle('active', currentThemeMode === 'light');
      themeBtnDark.classList.toggle('active', currentThemeMode === 'dark');

      // Accent color inputs
      colorPicker.value = currentAccent;
      swatches.forEach(swatch => {
        const isMatch = swatch.dataset.color.toLowerCase() === currentAccent.toLowerCase();
        swatch.classList.toggle('active', isMatch);
      });

      // Radii & Spacing sliders
      radiusSlider.value = currentRadiusBase;
      radiusValLabel.textContent = `${currentRadiusBase}px`;

      spacingSlider.value = currentSpacingBase;
      spacingValLabel.textContent = `${currentSpacingBase}px`;

      // Select dropdowns
      // Match value or closest text
      Array.from(fontHeadingSelect.options).forEach(opt => {
        opt.selected = opt.value.replace(/['"\s]/g, '') === currentFontHeading.replace(/['"\s]/g, '');
      });
      Array.from(fontBodySelect.options).forEach(opt => {
        opt.selected = opt.value.replace(/['"\s]/g, '') === currentFontBody.replace(/['"\s]/g, '');
      });
    }

    // 7. Event Listeners for controls
    // Theme switching
    function changeTheme(mode) {
      currentThemeMode = mode;
      if (window.DesignTokens) {
        window.DesignTokens.applyTheme(mode, { persist: false });
      } else {
        // Fallback standard behavior
        document.documentElement.dataset.theme = mode;
        document.body.classList.toggle('dark-mode', mode === 'dark');
        document.body.classList.toggle('dark', mode === 'dark');
      }
      
      // Re-apply other CSS customization variables over the new theme defaults
      applyCustomizations();
    }

    themeBtnLight.addEventListener('click', () => changeTheme('light'));
    themeBtnDark.addEventListener('click', () => changeTheme('dark'));

    // Color Swatches
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        currentAccent = swatch.dataset.color;
        applyCustomizations();
      });
    });

    // Color Picker input
    colorPicker.addEventListener('input', (e) => {
      currentAccent = e.target.value;
      applyCustomizations();
    });

    // Radius Slider
    radiusSlider.addEventListener('input', (e) => {
      currentRadiusBase = parseInt(e.target.value) || 0;
      applyCustomizations();
    });

    // Spacing Slider
    spacingSlider.addEventListener('input', (e) => {
      currentSpacingBase = parseInt(e.target.value) || 0;
      applyCustomizations();
    });

    // Fonts Selects
    fontHeadingSelect.addEventListener('change', (e) => {
      currentFontHeading = e.target.value;
      applyCustomizations();
    });

    fontBodySelect.addEventListener('change', (e) => {
      currentFontBody = e.target.value;
      applyCustomizations();
    });

    // Listen to changes from existing page theme switcher if triggered elsewhere
    window.addEventListener('design-tokens:themechange', (event) => {
      const newTheme = event.detail?.resolvedTheme || event.detail?.theme;
      if (newTheme && newTheme !== currentThemeMode) {
        currentThemeMode = newTheme;
        applyCustomizations();
      }
    });

    // 8. Reset to Defaults action
    resetBtn.addEventListener('click', () => {
      currentThemeMode = initialTheme;
      currentAccent = initialAccent;
      currentRadiusBase = parseInt(initialRadiusMd) || 14;
      currentSpacingBase = parseInt(initialSpacingMd) || 12;
      currentFontHeading = initialFontHeading;
      currentFontBody = initialFontBody;

      // Reapply original theme
      if (window.DesignTokens) {
        window.DesignTokens.applyTheme(initialTheme, { persist: false });
      } else {
        document.documentElement.dataset.theme = initialTheme;
        document.body.classList.toggle('dark-mode', initialTheme === 'dark');
        document.body.classList.toggle('dark', initialTheme === 'dark');
      }

      // Reset style properties on document root back to initial page values
      const root = document.documentElement;
      root.style.setProperty('--accent', initialAccent);
      root.style.setProperty('--color-accent', initialColorAccent);
      root.style.setProperty('--primary', initialPrimary);

      root.style.setProperty('--radius-sm', initialRadiusSm);
      root.style.setProperty('--radius-md', initialRadiusMd);
      root.style.setProperty('--radius-lg', initialRadiusLg);

      root.style.setProperty('--spacing-xs', initialSpacingXs);
      root.style.setProperty('--spacing-sm', initialSpacingSm);
      root.style.setProperty('--spacing-md', initialSpacingMd);
      root.style.setProperty('--spacing-lg', initialSpacingLg);
      root.style.setProperty('--spacing-xl', initialSpacingXl);
      root.style.setProperty('--spacing-2xl', initialSpacing2xl);

      root.style.setProperty('--font-heading', initialFontHeading);
      root.style.setProperty('--font-body', initialFontBody);

      updateUIControls();
    });

    // Perform initial sync of UI
    updateUIControls();
  }

  // Run when document is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
