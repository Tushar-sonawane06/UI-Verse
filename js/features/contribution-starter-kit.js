/**
 * Contribution Starter Kit Generator
 * Builds a branch/commit/template pack from an issue title and component area.
 */

const ContributionStarterKit = (() => {
  const DEFAULT_CONFIG = {
    defaults: {
      branchPrefix: 'feature',
      branchTemplate: '{branchPrefix}/{areaSlug}-{issueSlug}{issueNumberSuffix}',
      commitTemplate: 'feat({areaSlug}): add {issueTitle}',
      folderSuggestions: [
        'data/snippets/{areaSlug}/',
        'data/meta/',
        'tests/visual/'
      ],
      filesToEdit: [
        '{areaSlug}.html',
        '{areaSlug}.css',
        'data/snippets/{areaSlug}/{areaSlug}.html',
        'data/meta/{areaSlug}.json',
        'data/components.json'
      ],
      prChecklist: [
        'Issue is assigned before opening the PR.',
        'Screenshots or short screen captures are attached.',
        'Responsive layout has been checked on mobile and desktop.',
        'Accessibility and keyboard focus states were verified.',
        'No console errors or broken links were introduced.'
      ],
      focusNotes: [
        'Keep the implementation small and reusable.',
        'Match the existing project folder structure.',
        'Update metadata if the component should appear in search.'
      ]
    },
    areas: []
  };

  const state = {
    initialized: false,
    config: null,
    elements: {},
    lastModel: null,
    copyTimer: null
  };

  function toSlug(value) {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'component';
  }

  function titleCase(value) {
    const text = String(value || '').trim();
    if (!text) return '';

    return text
      .split(/\s+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ');
  }

  function escapeHTML(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function templateString(template, tokens) {
    return String(template || '').replace(/\{([a-zA-Z0-9_]+)\}/g, (_, token) => {
      const value = tokens[token];
      return value == null ? '' : String(value);
    });
  }

  function inferBranchPrefix(issueTitle) {
    const text = String(issueTitle || '').toLowerCase();
    if (/bug|fix|broken|error|crash|fail/.test(text)) return 'fix';
    if (/docs?|documentation|readme|guide/.test(text)) return 'docs';
    if (/refactor|cleanup|simplify/.test(text)) return 'chore';
    if (/test|tests|spec/.test(text)) return 'test';
    return 'feature';
  }

  function parseGitHubIssueLink(value) {
    const text = String(value || '').trim();
    if (!text) return null;

    const match = text.match(/github\.com\/([^/]+)\/([^/]+)\/issues\/(\d+)/i);
    if (!match) return null;

    return {
      owner: match[1],
      repo: match[2],
      number: match[3],
      reference: `${match[1]}/${match[2]}#${match[3]}`
    };
  }

  function loadConfig() {
    if (state.config) return Promise.resolve(state.config);

    return fetch('data/meta/starter-kit.json', { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((config) => {
        state.config = {
          defaults: { ...DEFAULT_CONFIG.defaults, ...(config.defaults || {}) },
          areas: Array.isArray(config.areas) ? config.areas : []
        };
        return state.config;
      })
      .catch(() => {
        state.config = DEFAULT_CONFIG;
        return state.config;
      });
  }

  function getResolvedArea(areaInput) {
    const areaSlug = toSlug(areaInput);
    const config = state.config || DEFAULT_CONFIG;
    const area = (config.areas || []).find((entry) => {
      return toSlug(entry.id) === areaSlug || toSlug(entry.label) === areaSlug;
    });

    return area || {
      id: areaSlug,
      label: titleCase(areaInput || areaSlug),
      folderSuggestions: config.defaults.folderSuggestions,
      filesToEdit: config.defaults.filesToEdit,
      focusNotes: config.defaults.focusNotes
    };
  }

  function buildTokens() {
    const titleInput = state.elements.titleInput?.value || '';
    const areaInput = state.elements.areaInput?.value || '';
    const issueLinkInput = state.elements.linkInput?.value || '';

    const issueLink = parseGitHubIssueLink(issueLinkInput);
    const resolvedArea = getResolvedArea(areaInput);
    const issueTitle = titleInput.trim() || (issueLink ? `Issue #${issueLink.number}` : 'New contribution');
    const issueSlug = toSlug(titleInput || (issueLink ? `issue-${issueLink.number}` : issueTitle));
    const areaSlug = toSlug(resolvedArea.id || areaInput);
    const branchPrefix = inferBranchPrefix(issueTitle);
    const issueNumberSuffix = issueLink ? `-${issueLink.number}` : '';

    const defaults = state.config?.defaults || DEFAULT_CONFIG.defaults;

    return {
      titleInput,
      areaInput,
      issueLinkInput,
      issueLink,
      resolvedArea,
      issueTitle,
      issueSlug,
      areaSlug,
      branchPrefix,
      issueNumberSuffix,
      branchTemplate: templateString(defaults.branchTemplate, {
        branchPrefix,
        areaSlug,
        issueSlug,
        issueNumberSuffix
      }),
      commitTemplate: templateString(resolvedArea.commitTemplate || defaults.commitTemplate, {
        areaSlug,
        issueTitle,
        issueSlug,
        issueNumberSuffix
      }),
      folderSuggestions: (resolvedArea.folderSuggestions || defaults.folderSuggestions).map((item) =>
        templateString(item, { areaSlug, issueSlug, issueTitle, issueNumberSuffix })
      ),
      filesToEdit: (resolvedArea.filesToEdit || defaults.filesToEdit).map((item) =>
        templateString(item, { areaSlug, issueSlug, issueTitle, issueNumberSuffix })
      ),
      prChecklist: [...defaults.prChecklist, ...(resolvedArea.prChecklist || [])],
      focusNotes: [...defaults.focusNotes, ...(resolvedArea.focusNotes || [])]
    };
  }

  function buildCopyTemplate(model) {
    return [
      '# UIverse Starter Kit',
      `Issue title: ${model.issueTitle}`,
      `Component area: ${model.resolvedArea.label || model.areaSlug}`,
      model.issueLink ? `Linked issue: ${model.issueLink.reference}` : 'Linked issue: none',
      `Branch template: ${model.branchTemplate}`,
      `Commit message template: ${model.commitTemplate}`,
      '',
      'Folder path suggestions:',
      ...model.folderSuggestions.map((item) => `- ${item}`),
      '',
      'Files to edit:',
      ...model.filesToEdit.map((item) => `- ${item}`),
      '',
      'PR checklist:',
      ...model.prChecklist.map((item) => `- [ ] ${item}`),
      '',
      'Focus notes:',
      ...model.focusNotes.map((item) => `- ${item}`)
    ].join('\n');
  }

  function setStatus(message, success = false) {
    const statusEl = state.elements.status;
    if (!statusEl) return;

    statusEl.textContent = message;
    statusEl.style.color = success ? '#a7f3d0' : '#f8fafc';

    clearTimeout(state.copyTimer);
    state.copyTimer = setTimeout(() => {
      if (statusEl.textContent === message) {
        statusEl.textContent = '';
      }
    }, 2200);
  }

  function renderList(target, items, emptyLabel) {
    if (!target) return;

    target.innerHTML = '';

    if (!items.length) {
      const empty = document.createElement('li');
      empty.textContent = emptyLabel;
      target.appendChild(empty);
      return;
    }

    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      target.appendChild(li);
    });
  }

  function renderMeta(model) {
    const metaEl = state.elements.meta;
    if (!metaEl) return;

    const bits = [
      model.resolvedArea.label || model.areaSlug,
      model.issueLink ? `Issue #${model.issueLink.number}` : 'Manual issue'
    ];

    metaEl.innerHTML = bits.map((item) => `
      <span class="starter-kit-meta-pill">${escapeHTML(item)}</span>
    `).join('');
  }

  function render(model) {
    state.lastModel = model;

    const branchEl = state.elements.branch;
    const commitEl = state.elements.commit;

    if (branchEl) branchEl.textContent = model.branchTemplate;
    if (commitEl) commitEl.textContent = model.commitTemplate;

    renderList(state.elements.folders, model.folderSuggestions, 'No folder suggestions available.');
    renderList(state.elements.files, model.filesToEdit, 'No files suggested yet.');
    renderList(state.elements.checklist, model.prChecklist, 'No PR checklist items available.');

    renderMeta(model);
  }

  function update() {
    const model = buildTokens();
    render(model);
    return model;
  }

  async function copyTemplate() {
    const model = state.lastModel || update();
    const text = buildCopyTemplate(model);

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.pointerEvents = 'none';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      setStatus('Template copied to clipboard.', true);
    } catch (error) {
      setStatus('Copy failed. Select the text and copy manually.');
    }
  }

  function populateAreaSuggestions() {
    const datalist = document.getElementById('starterKitAreas');
    if (!datalist) return;

    const seen = new Set();
    const areas = (state.config?.areas || DEFAULT_CONFIG.areas).slice();

    areas.forEach((area) => {
      const value = area.label || area.id;
      const slug = toSlug(value);
      if (seen.has(slug)) return;
      seen.add(slug);

      const option = document.createElement('option');
      option.value = value;
      datalist.appendChild(option);
    });
  }

  function bindEvents() {
    const inputs = [state.elements.titleInput, state.elements.areaInput, state.elements.linkInput].filter(Boolean);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        update();
      });
    });

    state.elements.generate?.addEventListener('click', () => {
      update();
      setStatus('Starter kit updated.', true);
    });

    state.elements.copy?.addEventListener('click', () => {
      copyTemplate();
    });
  }

  async function init() {
    if (state.initialized) return;

    const root = document.querySelector('[data-starter-kit]');
    if (!root) {
      state.initialized = true;
      return;
    }

    state.elements = {
      root,
      titleInput: root.querySelector('[data-starter-title]'),
      areaInput: root.querySelector('[data-starter-area]'),
      linkInput: root.querySelector('[data-starter-link]'),
      generate: root.querySelector('[data-starter-generate]'),
      copy: root.querySelector('[data-starter-copy]'),
      meta: root.querySelector('[data-starter-meta]'),
      branch: root.querySelector('[data-starter-branch]'),
      commit: root.querySelector('[data-starter-commit]'),
      folders: root.querySelector('[data-starter-folders]'),
      files: root.querySelector('[data-starter-files]'),
      checklist: root.querySelector('[data-starter-checklist]'),
      status: root.querySelector('[data-starter-status]')
    };

    await loadConfig();
    populateAreaSuggestions();
    bindEvents();
    update();

    state.initialized = true;
  }

  return {
    init
  };
})();

if (typeof window !== 'undefined') {
  window.ContributionStarterKit = ContributionStarterKit;
}

document.addEventListener('DOMContentLoaded', () => {
  ContributionStarterKit.init();
});
