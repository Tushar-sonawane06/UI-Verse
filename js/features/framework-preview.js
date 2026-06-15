/**
 * Framework Preview Engine
 * M2: Live preview in iframes via CDN compilers (React, Vue)
 * M4: Prop changes sync across previews via postMessage + iframe reload
 */

const FrameworkPreview = (() => {
  'use strict';

  const CDN = {
    react: 'https://unpkg.com/react@18/umd/react.development.js',
    reactDom: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    babel: 'https://unpkg.com/@babel/standalone@7/babel.min.js',
    vue: 'https://unpkg.com/vue@3/dist/vue.global.js'
  };

  let loadedScripts = new Set();

  function loadScript(src) {
    if (loadedScripts.has(src)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => { loadedScripts.add(src); resolve(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function buildReactDoc(code, props) {
    const propValues = props.map(p => {
      if (p.type === 'number') return `${p.name}={${p.default}}`;
      if (p.type === 'boolean') return `${p.name}={${p.default}}`;
      return `${p.name}="${p.default}"`;
    }).join(' ');

    const nameMatch = code.match(/export const (\w+)/);
    const componentName = nameMatch ? nameMatch[1] : 'Component';

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:system-ui;background:#f8fafc;padding:24px;}</style>
<script src="${CDN.react}"></script>
<script src="${CDN.reactDom}"></script>
<script src="${CDN.babel}"></script>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
${code}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<${componentName} ${propValues} />);
</script>
</body>
</html>`;
  }

  function buildVueDoc(code, props) {
    const templateMatch = code.match(/<<template>([\s\S]*?)<<\/template>/);
    const styleMatch = code.match(/<<style[^>]*>([\s\S]*?)<<\/style>/);
    const template = templateMatch ? templateMatch[1].trim() : code;
    const style = styleMatch ? styleMatch[1].trim() : '';

    const propDefaults = props.map(p => {
      if (p.type === 'number') return `${p.name}: ${p.default}`;
      if (p.type === 'boolean') return `${p.name}: ${p.default}`;
      return `${p.name}: '${p.default}'`;
    }).join(',\n    ');

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:system-ui;background:#f8fafc;padding:24px;}
${style}
</style>
<script src="${CDN.vue}"></script>
</head>
<body>
<div id="app"></div>
<script>
const { createApp } = Vue;
createApp({
  template: \`${template.replace(/`/g, '\\`')}\`,
  data() { return { ${propDefaults} }; }
}).mount('#app');
</script>
</body>
</html>`;
  }

  function createModal() {
    const existing = document.getElementById('fw-preview-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'fw-preview-modal';
    overlay.innerHTML = `
      <div class="fw-modal-backdrop">
        <div class="fw-modal">
          <div class="fw-modal-header">
            <h3>Framework Preview</h3>
            <button class="fw-close-btn" aria-label="Close">✕</button>
          </div>
          <div class="fw-modal-tabs">
            <button class="fw-tab active" data-fw="react">React</button>
            <button class="fw-tab" data-fw="vue">Vue</button>
            <button class="fw-tab" data-fw="svelte">Svelte</button>
            <button class="fw-tab" data-fw="angular">Angular</button>
          </div>
          <div class="fw-modal-body">
            <div class="fw-preview-panel" data-fw="react">
              <iframe class="fw-preview-frame" sandbox="allow-scripts allow-same-origin"></iframe>
            </div>
            <div class="fw-preview-panel" data-fw="vue" hidden>
              <iframe class="fw-preview-frame" sandbox="allow-scripts allow-same-origin"></iframe>
            </div>
            <div class="fw-preview-panel" data-fw="svelte" hidden>
              <div class="fw-code-panel">
                <pre><code class="fw-code-block svelte-code"></code></pre>
                <button class="fw-action-btn" data-action="stackblitz-svelte">Open in StackBlitz</button>
              </div>
            </div>
            <div class="fw-preview-panel" data-fw="angular" hidden>
              <div class="fw-code-panel">
                <pre><code class="fw-code-block angular-code"></code></pre>
                <button class="fw-action-btn" data-action="stackblitz-angular">Open in StackBlitz</button>
              </div>
            </div>
          </div>
          <div class="fw-modal-props">
            <h4>Props</h4>
            <div class="fw-props-form"></div>
          </div>
          <div class="fw-modal-footer">
            <button class="fw-action-btn secondary" data-action="copy">Copy Code</button>
            <button class="fw-action-btn secondary" data-action="download">Download</button>
            <button class="fw-action-btn" data-action="codesandbox">Open in CodeSandbox</button>
          </div>
        </div>
      </div>
    `;

    injectStyles();
    document.body.appendChild(overlay);
    bindEvents(overlay);
    return overlay;
  }

  function injectStyles() {
    if (document.getElementById('fw-preview-styles')) return;
    const style = document.createElement('style');
    style.id = 'fw-preview-styles';
    style.textContent = `
      .fw-modal-backdrop{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;}
      .fw-modal{background:var(--card-bg,#fff);border-radius:16px;width:100%;max-width:960px;height:85vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,0.3);}
      .fw-modal-header{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;border-bottom:1px solid rgba(0,0,0,0.06);}
      .fw-modal-header h3{margin:0;font-family:'Syne',sans-serif;font-size:18px;}
      .fw-close-btn{background:none;border:none;font-size:20px;cursor:pointer;color:var(--text-secondary,#666);padding:4px;border-radius:6px;}
      .fw-close-btn:hover{background:rgba(0,0,0,0.06);}
      .fw-modal-tabs{display:flex;gap:4px;padding:8px 24px;border-bottom:1px solid rgba(0,0,0,0.06);background:rgba(0,0,0,0.02);}
      .fw-tab{padding:8px 16px;border:none;background:transparent;border-radius:8px;cursor:pointer;font-weight:600;font-size:13px;color:var(--text-secondary,#666);transition:all .15s;}
      .fw-tab:hover{background:rgba(0,0,0,0.04);}
      .fw-tab.active{background:var(--accent,#eb6835);color:#fff;}
      .fw-modal-body{flex:1;overflow:hidden;position:relative;}
      .fw-preview-panel{position:absolute;inset:0;display:flex;flex-direction:column;}
      .fw-preview-panel[hidden]{display:none;}
      .fw-preview-frame{flex:1;width:100%;border:none;background:#f8fafc;}
      .fw-code-panel{flex:1;overflow:auto;padding:20px;background:#0d0d0f;}
      .fw-code-block{font-family:'Fira Code',monospace;font-size:13px;line-height:1.6;color:#e0e0e0;white-space:pre;margin:0;}
      .fw-modal-props{padding:12px 24px;border-top:1px solid rgba(0,0,0,0.06);background:rgba(0,0,0,0.02);max-height:160px;overflow-y:auto;}
      .fw-modal-props h4{margin:0 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:var(--text-secondary,#666);}
      .fw-props-form{display:flex;flex-wrap:wrap;gap:12px;}
      .fw-prop-field{display:flex;flex-direction:column;gap:4px;min-width:140px;}
      .fw-prop-field label{font-size:12px;font-weight:600;color:var(--text-secondary,#666);}
      .fw-prop-field input{padding:6px 10px;border:1.5px solid rgba(0,0,0,0.1);border-radius:8px;font-size:13px;outline:none;}
      .fw-prop-field input:focus{border-color:var(--accent,#eb6835);}
      .fw-modal-footer{display:flex;gap:10px;justify-content:flex-end;padding:14px 24px;border-top:1px solid rgba(0,0,0,0.06);}
      .fw-action-btn{padding:8px 16px;border-radius:8px;border:1.5px solid var(--accent,#eb6835);background:var(--accent,#eb6835);color:#fff;font-weight:600;font-size:13px;cursor:pointer;transition:opacity .15s;}
      .fw-action-btn:hover{opacity:.9;}
      .fw-action-btn.secondary{background:transparent;color:var(--accent,#eb6835);}
      body.dark-mode .fw-modal{background:var(--card-bg-dark,#1e1e2f);color:var(--text-primary-dark,#f0f0f5);}
      body.dark-mode .fw-tab{color:var(--text-secondary-dark,#aaa);}
      body.dark-mode .fw-modal-tabs,body.dark-mode .fw-modal-props,body.dark-mode .fw-modal-footer{border-color:rgba(255,255,255,0.06);}
    `;
    document.head.appendChild(style);
  }

  function bindEvents(overlay) {
    overlay.querySelector('.fw-close-btn').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay.querySelector('.fw-modal-backdrop')) overlay.remove(); });

    overlay.querySelectorAll('.fw-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        overlay.querySelectorAll('.fw-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const fw = tab.dataset.fw;
        overlay.querySelectorAll('.fw-preview-panel').forEach(p => p.hidden = p.dataset.fw !== fw);
      });
    });
  }

  function renderPropsForm(props, container, onChange) {
    container.innerHTML = '';
    props.forEach(prop => {
      const field = document.createElement('div');
      field.className = 'fw-prop-field';
      const label = document.createElement('label');
      label.textContent = prop.label || prop.name;
      const input = document.createElement('input');
      input.type = prop.type === 'color' ? 'color' : prop.type === 'number' ? 'number' : 'text';
      input.value = prop.default;
      input.addEventListener('input', (e) => onChange(prop.name, e.target.value));
      field.appendChild(label);
      field.appendChild(input);
      container.appendChild(field);
    });
  }

  async function open(html, css, componentName) {
    await Promise.all([loadScript(CDN.react), loadScript(CDN.reactDom), loadScript(CDN.babel), loadScript(CDN.vue)]);

    const modal = createModal();
    const reactResult = window.FrameworkTranspiler.transpile(html, css, 'react', componentName);
    const vueResult = window.FrameworkTranspiler.transpile(html, css, 'vue', componentName);
    const svelteResult = window.FrameworkTranspiler.transpile(html, css, 'svelte', componentName);
    const angularResult = window.FrameworkTranspiler.transpile(html, css, 'angular', componentName);

    const reactFrame = modal.querySelector('.fw-preview-panel[data-fw="react"] iframe');
    const vueFrame = modal.querySelector('.fw-preview-panel[data-fw="vue"] iframe');

    function refreshAll(propOverrides = {}) {
      const mergedProps = (result) => result.props.map(p => ({ ...p, default: propOverrides[p.name] !== undefined ? propOverrides[p.name] : p.default }));
      reactFrame.srcdoc = buildReactDoc(reactResult.code, mergedProps(reactResult));
      vueFrame.srcdoc = buildVueDoc(vueResult.code, mergedProps(vueResult));
    }

    refreshAll();

    modal.querySelector('.svelte-code').textContent = svelteResult.code;
    modal.querySelector('.angular-code').textContent = angularResult.code;

    const propsForm = modal.querySelector('.fw-props-form');
    const propOverrides = {};
    renderPropsForm(reactResult.props, propsForm, (name, value) => {
      propOverrides[name] = value;
      refreshAll(propOverrides);
    });

    modal.dataset.reactCode = reactResult.code;
    modal.dataset.vueCode = vueResult.code;
    modal.dataset.svelteCode = svelteResult.code;
    modal.dataset.angularCode = angularResult.code;
    modal.dataset.componentName = componentName;

    modal.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        const activeTab = modal.querySelector('.fw-tab.active').dataset.fw;
        let code = '';

        switch (action) {
          case 'copy':
            code = modal.dataset[`${activeTab}Code`];
            navigator.clipboard.writeText(code).then(() => btnFeedback(btn, 'Copied!'));
            break;
          case 'download':
            code = modal.dataset[`${activeTab}Code`];
            const ext = activeTab === 'react' ? 'tsx' : activeTab === 'vue' ? 'vue' : activeTab === 'svelte' ? 'svelte' : 'ts';
            downloadFile(code, `${componentName}.${ext}`);
            break;
          case 'codesandbox':
            code = modal.dataset[`${activeTab}Code`];
            openCodeSandbox(code, activeTab, componentName);
            break;
          case 'stackblitz-svelte':
            openStackBlitz(modal.dataset.svelteCode, 'svelte', componentName);
            break;
          case 'stackblitz-angular':
            openStackBlitz(modal.dataset.angularCode, 'angular', componentName);
            break;
        }
      });
    });
  }

  function btnFeedback(btn, text) {
    const orig = btn.textContent;
    btn.textContent = text;
    setTimeout(() => btn.textContent = orig, 1500);
  }

  function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function openCodeSandbox(code, framework, componentName) {
    const files = {};
    if (framework === 'react') {
      files['src/App.tsx'] = { content: code, isBinary: false };
      files['src/index.tsx'] = { content: `import React from 'react'; import ReactDOM from 'react-dom/client'; import { App } from './App'; ReactDOM.createRoot(document.getElementById('root')!).render(<App />);`, isBinary: false };
      files['public/index.html'] = { content: '<div id="root"></div>', isBinary: false };
    } else if (framework === 'vue') {
      files['src/App.vue'] = { content: code, isBinary: false };
      files['src/main.js'] = { content: `import { createApp } from 'vue'; import App from './App.vue'; createApp(App).mount('#app');`, isBinary: false };
      files['public/index.html'] = { content: '<div id="app"></div>', isBinary: false };
    } else {
      alert('CodeSandbox export only available for React and Vue in this preview.');
      return;
    }

    const parameters = { files };
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'parameters';
    input.value = JSON.stringify(parameters);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  function openStackBlitz(code, framework, componentName) {
    const files = {};
    const template = framework === 'react' ? 'create-react-app' : framework === 'vue' ? 'vue' : 'javascript';

    if (framework === 'react') {
      files['src/App.tsx'] = code;
      files['src/index.tsx'] = `import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App'; ReactDOM.createRoot(document.getElementById('root')!).render(<App />);`;
      files['public/index.html'] = '<div id="root"></div>';
    } else if (framework === 'vue') {
      files['src/App.vue'] = code;
      files['src/main.js'] = `import { createApp } from 'vue'; import App from './App.vue'; createApp(App).mount('#app');`;
      files['public/index.html'] = '<div id="app"></div>';
    } else if (framework === 'svelte') {
      files['App.svelte'] = code;
      files['main.js'] = `import App from './App.svelte'; new App({ target: document.body });`;
    } else if (framework === 'angular') {
      files['src/app/app.component.ts'] = code;
      files['src/main.ts'] = `import { bootstrapApplication } from '@angular/platform-browser'; import { AppComponent } from './app/app.component'; bootstrapApplication(AppComponent);`;
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://stackblitz.com/run';
    form.target = '_blank';

    Object.entries(files).forEach(([path, content]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = `project[files][${path}]`;
      input.value = content;
      form.appendChild(input);
    });

    const titleInput = document.createElement('input');
    titleInput.type = 'hidden';
    titleInput.name = 'project[title]';
    titleInput.value = `${componentName} — UIverse`;
    form.appendChild(titleInput);

    const templateInput = document.createElement('input');
    templateInput.type = 'hidden';
    templateInput.name = 'project[template]';
    templateInput.value = template;
    form.appendChild(templateInput);

    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  return { open };
})();

if (typeof window !== 'undefined') window.FrameworkPreview = FrameworkPreview;
if (typeof module !== 'undefined' && module.exports) module.exports = FrameworkPreview;