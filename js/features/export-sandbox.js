/**
 * UI-Verse - One-Click Export to Sandboxes
 * Export components to CodePen and StackBlitz
 */

const SandboxExporter = {
  exportToCodePen(html, css, js = '') {
    const data = {
      title: 'UI-Verse Component',
      html: html,
      css: css,
      js: js
    };

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codepen.io/pen/define';
    form.target = '_blank';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify(data);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  },

  exportToStackBlitz(html, css, js = '') {
    const project = {
      files: {
        'index.html': this.generateStackBlitzHTML(html, css, js),
        'style.css': css,
        'script.js': js
      },
      template: 'javascript'
    };

    const url = `https://stackblitz.com/run?file=index.html&github=${encodeURIComponent(JSON.stringify(project))}`;
    window.open(url, '_blank');
  },

  generateStackBlitzHTML(html, css, js) {
    return `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
${html}
<script src="script.js"></script>
</body>
</html>`;
  },

  extractCode(card) {
    const codeBlock = card.querySelector('.code-block code');
    if (!codeBlock) return { html: '', css: '', js: '' };

    const text = codeBlock.textContent;
    
    let html = '';
    let css = '';
    let js = '';

    const htmlMatch = text.match(/<html>([\s\S]*?)<\/html>/i);
    const cssMatch = text.match(/<style>([\s\S]*?)<\/style>/i);
    const jsMatch = text.match(/<script>([\s\S]*?)<\/script>/i);

    if (htmlMatch) {
      html = htmlMatch[1].replace(/<body>([\s\S]*)<\/body>/i, '$1').trim();
    } else if (text.includes('<') && text.includes('>')) {
      html = text.split('<style>')[0].trim();
    }

    if (cssMatch) {
      css = cssMatch[1];
    } else if (text.includes('{') && text.includes('}')) {
      const styleMatch = text.match(/[^<]*\{[\s\S]*?\}/);
      if (styleMatch) css = styleMatch[0];
    }

    if (jsMatch) {
      js = jsMatch[1];
    }

    return { html: html || text, css, js };
  },

  init() {
    document.addEventListener('click', (e) => {
      const exportBtn = e.target.closest('[data-export]');
      if (!exportBtn) return;

      const type = exportBtn.dataset.export;
      const card = e.target.closest('.component-card');
      if (!card) return;

      const code = this.extractCode(card);

      if (type === 'codepen') {
        this.exportToCodePen(code.html, code.css, code.js);
      } else if (type === 'stackblitz') {
        this.exportToStackBlitz(code.html, code.css, code.js);
      }
    });
  },

  addExportButtons() {
    document.querySelectorAll('.component-card .actions').forEach(actions => {
      if (actions.querySelector('[data-export]')) return;

      const codepenBtn = document.createElement('button');
      codepenBtn.className = 'action-btn export-btn';
      codepenBtn.dataset.export = 'codepen';
      codepenBtn.innerHTML = '<i class="fa-brands fa-codepen"></i> CodePen';

      const stackblitzBtn = document.createElement('button');
      stackblitzBtn.className = 'action-btn export-btn';
      stackblitzBtn.dataset.export = 'stackblitz';
      stackblitzBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> StackBlitz';

      actions.appendChild(codepenBtn);
      actions.appendChild(stackblitzBtn);
    });
  }
};

if (typeof window !== 'undefined') {
  window.SandboxExporter = SandboxExporter;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      SandboxExporter.init();
      SandboxExporter.addExportButtons();
    });
  } else {
    SandboxExporter.init();
    SandboxExporter.addExportButtons();
  }
}

export default SandboxExporter;