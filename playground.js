(function () {
  const DEFAULT_SCHEMAS = {
    button: {
      title: 'Button Playground',
      targetMode: 'button',
      controls: [
        { key: 'size', label: 'Size', type: 'range', min: 96, max: 320, step: 2, value: 160, unit: 'px' },
        { key: 'radius', label: 'Radius', type: 'range', min: 0, max: 36, step: 1, value: 12, unit: 'px' },
        { key: 'color', label: 'Color', type: 'color', value: '#eb6835' },
        {
          key: 'variant',
          label: 'Variant',
          type: 'select',
          value: 'solid',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Gradient', value: 'gradient' }
          ]
        }
      ]
    },
    card: {
      title: 'Card Playground',
      targetMode: 'card',
      controls: [
        { key: 'size', label: 'Width', type: 'range', min: 220, max: 420, step: 4, value: 260, unit: 'px' },
        { key: 'radius', label: 'Radius', type: 'range', min: 0, max: 40, step: 1, value: 16, unit: 'px' },
        { key: 'color', label: 'Color', type: 'color', value: '#eb6835' },
        {
          key: 'variant',
          label: 'Variant',
          type: 'select',
          value: 'elevated',
          options: [
            { label: 'Elevated', value: 'elevated' },
            { label: 'Flat', value: 'flat' },
            { label: 'Outline', value: 'outline' },
            { label: 'Glass', value: 'glass' }
          ]
        }
      ]
    },
    input: {
      title: 'Input Playground',
      targetMode: 'input',
      controls: [
        { key: 'size', label: 'Width', type: 'range', min: 180, max: 420, step: 4, value: 260, unit: 'px' },
        { key: 'radius', label: 'Radius', type: 'range', min: 0, max: 32, step: 1, value: 10, unit: 'px' },
        { key: 'color', label: 'Color', type: 'color', value: '#eb6835' },
        {
          key: 'variant',
          label: 'Variant',
          type: 'select',
          value: 'outline',
          options: [
            { label: 'Outline', value: 'outline' },
            { label: 'Filled', value: 'filled' },
            { label: 'Soft', value: 'soft' },
            { label: 'Glass', value: 'glass' }
          ]
        }
      ]
    },
    default: {
      title: 'Component Playground',
      targetMode: 'card',
      controls: [
        { key: 'size', label: 'Size', type: 'range', min: 180, max: 420, step: 4, value: 260, unit: 'px' },
        { key: 'radius', label: 'Radius', type: 'range', min: 0, max: 40, step: 1, value: 16, unit: 'px' },
        { key: 'color', label: 'Color', type: 'color', value: '#eb6835' },
        {
          key: 'variant',
          label: 'Variant',
          type: 'select',
          value: 'elevated',
          options: [
            { label: 'Elevated', value: 'elevated' },
            { label: 'Flat', value: 'flat' },
            { label: 'Outline', value: 'outline' },
            { label: 'Glass', value: 'glass' }
          ]
        }
      ]
    }
  };

  const COMPONENT_REGISTRY = {
    button: {
      name: 'Button',
      controls: ['size', 'radius', 'padding', 'fontSize', 'background', 'textColor', 'shadow'],
      defaults: { size: 160, radius: 10, padding: 12, fontSize: 14, background: '#eb6835', textColor: '#ffffff', shadow: 12 },
      selector: 'button, .btn, [class*="btn"]'
    },
    card: {
      name: 'Card',
      controls: ['size', 'radius', 'padding', 'fontSize', 'background', 'textColor', 'shadow'],
      defaults: { size: 260, radius: 16, padding: 20, fontSize: 14, background: '#ffffff', textColor: '#111111', shadow: 16 },
      selector: '.card, .component-card, [class*="card"]'
    },
    input: {
      name: 'Input',
      controls: ['size', 'radius', 'padding', 'fontSize', 'background', 'textColor', 'shadow'],
      defaults: { size: 260, radius: 10, padding: 10, fontSize: 14, background: '#ffffff', textColor: '#111111', shadow: 8 },
      selector: 'input, textarea, select, [class*="input"]'
    },
    navbar: {
      name: 'Navbar',
      controls: ['size', 'radius', 'padding', 'fontSize'],
      defaults: { size: 100, radius: 0, padding: 16, fontSize: 14 },
      selector: 'nav, .navbar, [class*="nav"]'
    },
    badge: {
      name: 'Badge',
      controls: ['size', 'radius', 'padding', 'fontSize', 'background'],
      defaults: { size: 80, radius: 12, padding: 4, fontSize: 12, background: '#eb6835' },
      selector: '.badge, [class*="badge"]'
    }
  };

  const defaultsByType = {};
  Object.entries(COMPONENT_REGISTRY).forEach(([key, val]) => {
    defaultsByType[key] = val.defaults;
  });

  function registerComponentType(name, config) {
    COMPONENT_REGISTRY[name] = config;
    defaultsByType[name] = config.defaults;
    console.debug(`[Playground] Registered component type: ${name}`);
  }

  function isSupported(type) {
    return COMPONENT_REGISTRY.hasOwnProperty(type);
  }

  function getComponentInfo(type) {
    return COMPONENT_REGISTRY[type] || null;
  }

  function showUnsupportedFeedback(type) {
    const msg = `Playground not supported for "${type}" components. Use button, card, input, navbar, or badge.`;
    if (typeof showToastSafe === 'function') showToastSafe(msg);
    console.warn('[Playground]', msg);
  }

  let activeType = document.body.dataset.playgroundType || "button";
  let activeTarget = null;
  let activeCard = null;
  let activeSchema = null;
  let controlState = {};
  let activeTargetBaseStyle = '';
  let debounceTimer = null;

  function clonePlain(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function parseJSONConfig(raw) {
    if (!raw) return null;
    if (typeof raw === 'object') return raw;
    try {
      return JSON.parse(String(raw));
    } catch (error) {
      if (window.UIVERSE_DEBUG) console.warn('playground schema parse failed', error);
      return null;
    }
  }

  function mergeSchema(base, overrides) {
    if (!overrides) return base;
    const merged = clonePlain(base);

    Object.keys(overrides).forEach((key) => {
      if (key === 'controls' && Array.isArray(overrides.controls)) {
        merged.controls = overrides.controls;
      } else if (key === 'variantPresets' && overrides.variantPresets) {
        merged.variantPresets = Object.assign({}, merged.variantPresets || {}, overrides.variantPresets);
      } else if (overrides[key] !== undefined) {
        merged[key] = overrides[key];
      }
    });

    return merged;
  }

  function createDrawerIfNeeded() {
    let drawerEl = document.getElementById('playgroundDrawer');
    let backdropEl = document.getElementById('playgroundBackdrop');

    if (!drawerEl) {
      drawerEl = document.createElement('aside');
      drawerEl.id = 'playgroundDrawer';
      drawerEl.className = 'playground-drawer';
      drawerEl.setAttribute('aria-hidden', 'true');
      drawerEl.innerHTML = `
        <div class="playground-header">
          <div>
            <span class="playground-title">Playground</span>
            <span class="playground-subtitle" id="playgroundTitle">Select a component</span>
          </div>
          <div class="playground-header-actions">
            <button type="button" class="playground-reset" id="playgroundReset">Reset</button>
            <button type="button" class="playground-close" id="playgroundClose">Close</button>
          </div>
        </div>
        <div class="playground-preview" id="playgroundPreview"></div>
        <pre class="playground-code"><code id="playgroundCode"></code></pre>
        <div class="playground-controls" id="playgroundControls"></div>
      `;
      document.body.appendChild(drawerEl);
    }

    if (!backdropEl) {
      backdropEl = document.createElement('div');
      backdropEl.id = 'playgroundBackdrop';
      backdropEl.className = 'playground-backdrop';
      document.body.appendChild(backdropEl);
    }

    const previewEl = drawerEl.querySelector('#playgroundPreview');
    const codeEl = drawerEl.querySelector('#playgroundCode');
    const titleEl = drawerEl.querySelector('#playgroundTitle');
    const resetEl = drawerEl.querySelector('#playgroundReset');
    const closeEl = drawerEl.querySelector('#playgroundClose');
    const controlsEl = drawerEl.querySelector('#playgroundControls');
    const actionsEl = drawerEl.querySelector('.playground-header-actions');

    return {
      drawer: drawerEl,
      backdrop: backdropEl,
      preview: previewEl,
      code: codeEl,
      title: titleEl,
      resetBtn: resetEl,
      closeBtn: closeEl,
      controlsHost: controlsEl,
      headerActions: actionsEl
    };
  }

  function getPageConfig(type) {
    const schemaNode = document.getElementById('playgroundSchema');
    const schemaFromNode = schemaNode ? parseJSONConfig(schemaNode.textContent) : null;
    const schemaFromBody = parseJSONConfig(document.body.dataset.playgroundSchema);
    const base = clonePlain(DEFAULT_SCHEMAS[type] || DEFAULT_SCHEMAS.default);
    return mergeSchema(mergeSchema(base, schemaFromBody), schemaFromNode);
  }

  function getCardConfig(card) {
    if (!card) return null;
    return parseJSONConfig(card.getAttribute('data-playground-schema') || card.dataset.playgroundSchema || card.dataset.variants);
  }

  function getSchema(type, card) {
    return mergeSchema(getPageConfig(type), getCardConfig(card));
  }

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-modal", "true");
    if (window.FocusTrap) {
      window.FocusTrap.activate(drawer);
    }
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    drawer.removeAttribute("role");
    drawer.removeAttribute("aria-modal");
    if (window.FocusTrap) {
      window.FocusTrap.deactivate();
    }
  }

  function getControlValue(control) {
    if (control.type === 'range' || control.type === 'number') return Number(control.value);
    return control.value;
  }

  function getDefaultValue(control) {
    if (control.value !== undefined) return control.value;
    if (control.type === 'range' || control.type === 'number') return Number(control.min || 0);
    if (control.type === 'select' && Array.isArray(control.options) && control.options.length > 0) {
      return control.options[0].value;
    }
    if (control.type === 'color') return '#eb6835';
    return '';
  }

  function getRangeSuffix(control) {
    return control.unit || (control.type === 'range' ? 'px' : '');
  }

  function formatControlValue(control, value) {
    if (control.type === 'range' || control.type === 'number') return String(value) + getRangeSuffix(control);
    if (control.type === 'select') {
      const option = (control.options || []).find((item) => item.value === value);
      return option ? option.label : String(value);
    }
    return String(value);
  }

  function setValueLabel(key, text) {
    controlsHost.querySelectorAll('[data-value]').forEach((label) => {
      if (label.dataset.value === key) label.textContent = text;
    });
  }

  function targetTagName() {
    return activeTarget ? activeTarget.tagName.toLowerCase() : '';
  }

  function inferTargetMode(schema) {
    return schema.targetMode || (targetTagName() === 'button' ? 'button' : targetTagName() === 'input' ? 'input' : 'card');
  }

  function applySizing(target, schema, values, styles) {
    const mode = inferTargetMode(schema);
    const sizeValue = Number(values.size);

    if (!Number.isFinite(sizeValue)) return;

    if (mode === 'button') {
      styles.minWidth = sizeValue + 'px';
    } else {
      styles.width = sizeValue + 'px';
      if (mode === 'input' && target.matches('input[type="range"]')) {
        styles.width = sizeValue + 'px';
      }
    }
  }

  function applyVariantStyles(target, schema, values, styles) {
    const mode = inferTargetMode(schema);
    const accent = values.color || '#eb6835';
    const presetGroup = VARIANT_PRESETS[mode] || VARIANT_PRESETS.card;
    const variant = values.variant || (schema.controls.find((control) => control.key === 'variant')?.value || 'elevated');
    const preset = presetGroup[variant];

    if (!preset) return;

    Object.assign(styles, preset(accent));
  }

  function buildBaseStyles(schema, values) {
    const styles = {};
    const accent = values.color || '#eb6835';
    const radius = Number(values.radius);
    const mode = inferTargetMode(schema);

    if (Number.isFinite(radius)) styles.borderRadius = radius + 'px';

    if (mode === 'button') {
      styles.padding = '0.85em 1.2em';
      styles.fontSize = '14px';
      styles.lineHeight = '1.1';
      styles.transition = 'all 0.25s ease';
    } else if (mode === 'input') {
      styles.padding = '0.85em 1em';
      styles.fontSize = '14px';
      styles.transition = 'all 0.25s ease';
    } else {
      styles.padding = '20px';
      styles.fontSize = '14px';
      styles.transition = 'all 0.25s ease';
    }

    styles['--playground-accent'] = accent;

    applySizing(activeTarget, schema, values, styles);
    applyVariantStyles(activeTarget, schema, values, styles);

    return styles;
  }

  function setInlineStyle(target, styles) {
    Object.keys(styles).forEach((key) => {
      if (typeof styles[key] === 'function') return;
      if (key === 'setProperty') return;
      if (key.startsWith('--')) {
        target.style.setProperty(key, styles[key]);
        return;
      }
      target.style[key] = styles[key];
    });
  }

  function resetInlineStyle(target) {
    target.style.cssText = activeTargetBaseStyle || '';
  }

  function getCurrentValues(schema) {
    const values = {};
    schema.controls.forEach((control) => {
      values[control.key] = control.value;
    });
    controlsHost.querySelectorAll('[data-control]').forEach((input) => {
      const key = input.dataset.control;
      if (!key) return;
      values[key] = getControlValue(input);
    });
    return values;
  }

  function buildVariantCss(schema, values) {
    const mode = inferTargetMode(schema);
    const accent = values.color || '#eb6835';
    const variant = values.variant || 'default';
    const lines = ['.playground-target {'];

    if (mode === 'button') {
      lines.push('  min-width: ' + values.size + 'px;');
      lines.push('  border-radius: ' + values.radius + 'px;');
      lines.push('  padding: 0.85em 1.2em;');
      lines.push('  --playground-accent: ' + accent + ';');
      lines.push('}');
      lines.push('.playground-target[data-playground-variant="' + variant + '"] {');
      if (variant === 'solid') {
        lines.push('  background: ' + accent + ';');
        lines.push('  color: #ffffff;');
      } else if (variant === 'outline') {
        lines.push('  background: transparent;');
        lines.push('  color: ' + accent + ';');
        lines.push('  border: 1px solid ' + accent + ';');
      } else if (variant === 'ghost') {
        lines.push('  background: transparent;');
        lines.push('  color: ' + accent + ';');
      } else if (variant === 'gradient') {
        lines.push('  background: linear-gradient(135deg, ' + accent + ', #ffb36b);');
        lines.push('  color: #ffffff;');
      }
      lines.push('}');
      return lines.join('\n');
    }

    if (mode === 'input') {
      lines.push('  width: ' + values.size + 'px;');
      lines.push('  border-radius: ' + values.radius + 'px;');
      lines.push('  --playground-accent: ' + accent + ';');
      lines.push('}');
      lines.push('.playground-target[data-playground-variant="' + variant + '"] {');
      if (variant === 'outline') {
        lines.push('  background: #ffffff;');
        lines.push('  border: 1px solid ' + accent + ';');
      } else if (variant === 'filled') {
        lines.push('  background: #f8fafc;');
        lines.push('  border: 1px solid rgba(17, 24, 39, 0.08);');
      } else if (variant === 'soft') {
        lines.push('  background: ' + accent + '10;');
        lines.push('  border: 1px solid ' + accent + '26;');
      } else if (variant === 'glass') {
        lines.push('  background: rgba(255, 255, 255, 0.72);');
        lines.push('  backdrop-filter: blur(12px);');
      }
      lines.push('}');
      return lines.join('\n');
    }

    lines.push('  width: ' + values.size + 'px;');
    lines.push('  border-radius: ' + values.radius + 'px;');
    lines.push('  --playground-accent: ' + accent + ';');
    lines.push('}');
    lines.push('.playground-target[data-playground-variant="' + variant + '"] {');
    if (variant === 'elevated') {
      lines.push('  box-shadow: 0 18px 36px rgba(17, 24, 39, 0.12), 0 0 0 1px ' + accent + '18;');
    } else if (variant === 'flat') {
      lines.push('  box-shadow: none;');
    } else if (variant === 'outline') {
      lines.push('  border: 1px solid ' + accent + '55;');
      lines.push('  box-shadow: none;');
    } else if (variant === 'glass') {
      lines.push('  background: rgba(255, 255, 255, 0.72);');
      lines.push('  backdrop-filter: blur(16px);');
    }
    lines.push('}');
    return lines.join('\n');
  }

  function buildConfiguredCode(schema) {
    if (!activeTarget) return '';

    const values = getCurrentValues(schema);
    const html = activeTarget.outerHTML;
    const css = buildVariantCss(schema, values);
    return '<!-- HTML -->\n' + html + '\n\n<!-- CSS -->\n' + css;
  }

  function applyTarget(schema, immediate) {
    if (!activeTarget) return;

    clearTimeout(debounceTimer);

    // Generate CSS class-based output
    const className = 'uiv-component';
    activeTarget.classList.add(className);
    
    // Remove inline styles and use CSS classes
    Object.keys(styles).forEach((prop) => {
      activeTarget.style[prop] = '';
    });

    const cssOutput = generateCSS(className, styles, activeType);
    activeTarget.setAttribute('class', activeTarget.className.replace('uiv-component', '').trim());
    
    const htmlOutput = `<div class="${className}">\n  ${activeTarget.outerHTML}\n</div>\n\n<style>\n${cssOutput}</style>`;
    code.textContent = htmlOutput;
  }

  function generateCSS(className, styles, type) {
    const rules = [];
    
    rules.push(`.${className} {`);
    Object.keys(styles).forEach((prop) => {
      const cssKey = prop.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
      rules.push(`  ${cssKey}: ${styles[prop]};`);
    });
    rules.push('}');
    
    return rules.join('\n');
  }

  function clonePreviewElement(card) {
    if (!card) return null;

    const previewBox = card.querySelector('.card-preview');
    if (previewBox && previewBox.firstElementChild) return previewBox.firstElementChild.cloneNode(true);

    const candidate = Array.from(card.querySelectorAll('input, textarea, select, button, .profile-card, .simple-card, .product-card, .pricing-card, .image-card, .blog-card, .notif-card, .social-card')).find((element) => !element.closest('.actions'));
    return candidate ? candidate.cloneNode(true) : null;
  }

  function findComponentRoot(card) {
    if (!card) return null;
    const previewBox = card.querySelector('.card-preview');
    if (previewBox) return previewBox;
    return card;
  }

  function openFromCard(card) {
    if (!card) return;

    const type = card.dataset.playgroundType || document.body.dataset.playgroundType;
    
    // Check if component type is supported
    if (type && !isSupported(type)) {
      showUnsupportedFeedback(type);
      return;
    }

    const fallbackType = type || 'button';
    const previewEl = findPreviewElement(card);
    if (!previewEl) {
      console.warn('[Playground] No preview element found in card');
      return;
    }

    activeType = fallbackType;
    preview.innerHTML = "";

    renderControls(schema, initialValues);
    setTitle(schema, card);
    applyTarget(schema, true);
    openDrawer();
  }

  function copyText(text) {
    if (!navigator.clipboard) {
      const temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
      return Promise.resolve();
    }

    const componentInfo = getComponentInfo(fallbackType);
    const defaults = defaultsByType[fallbackType] || defaultsByType.button;
    setControls(defaults);
    updateControlsVisibility(fallbackType);
    applyStyles();
    openDrawer();

    const cardTitle = card.querySelector("h3")?.textContent || (componentInfo?.name || "Component");
    if (title) title.textContent = cardTitle;
  }

  // Export / copy button
  async function copyPlaygroundCode() {
    try {
      const text = code.textContent || '';
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        const success = document.execCommand('copy');
        document.body.removeChild(ta);
        if (!success) throw new Error('Fallback copy failed');
      }
      
      if (typeof showToastSafe === 'function') showToastSafe('Playground code copied ✓');
    } catch (e) {
      console.error('copyPlaygroundCode', e);
      if (typeof showToastSafe === 'function') showToastSafe('Failed to copy');
    }
  }

  function injectCopyButton() {
    if (!headerActions || headerActions.querySelector('.playground-export-btn')) return;

    const exportBtn = document.createElement('button');
    exportBtn.type = 'button';
    exportBtn.className = 'playground-export-btn';
    exportBtn.textContent = 'Copy Configured HTML/CSS';
    exportBtn.addEventListener('click', (event) => {
      event.preventDefault();
      copyConfiguredCode();
    });

    const closeButton = headerActions.querySelector('#playgroundClose');
    if (closeButton) {
      headerActions.insertBefore(exportBtn, closeButton);
    } else {
      headerActions.appendChild(exportBtn);
    }
  }

  // Initial button injection (now also handled by MutationObserver)
  document.querySelectorAll('.component-card').forEach(injectButtonToCard);

  function bindDrawerControls() {
    resetBtn?.addEventListener('click', () => {
      if (!activeSchema) return;
      const defaults = {};
      activeSchema.controls.forEach((control) => {
        defaults[control.key] = getDefaultValue(control);
      });

      controlsHost.querySelectorAll('[data-control]').forEach((input) => {
        const key = input.dataset.control;
        if (defaults[key] === undefined) return;
        input.value = String(defaults[key]);
        const control = activeSchema.controls.find((item) => item.key === key);
        setValueLabel(key, formatControlValue(control, getControlValue(input)));
      });

      applyTarget(activeSchema, true);
    });

    closeBtn?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer);
  }

  function init() {
    injectPlaygroundButtons();
    observeDynamicComponents();
    closeDrawer();
  }

  function observeDynamicComponents() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.classList?.contains('component-card')) {
              injectButtonToCard(node);
            } else if (node.querySelector) {
              node.querySelectorAll('.component-card').forEach(injectButtonToCard);
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    console.debug('[Playground] MutationObserver active for dynamic components');
  }

  function injectButtonToCard(card) {
    const actions = card.querySelector('.actions');
    if (!actions || actions.querySelector('.playground-open-btn')) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'playground-open-btn';
    btn.textContent = 'Playground';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openFromCard(card);
    });
    actions.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
