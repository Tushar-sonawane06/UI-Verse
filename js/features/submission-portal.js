/**
 * Contributor Submission Portal
 * M5: Web UI for submitting components with live preview, token validation, auto-generated docs.
 */

const SubmissionPortal = (() => {
  'use strict';

  const API_BASE = window.UIVERSE_API_BASE || 'http://localhost:5000';

  function createModal() {
    const existing = document.getElementById('submission-modal-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'submission-modal-overlay';
    overlay.innerHTML = `
      <div class="submission-modal-backdrop">
        <div class="submission-modal">
          <div class="submission-modal-header">
            <h3>Submit Component</h3>
            <button class="submission-close" aria-label="Close">✕</button>
          </div>
          <div class="submission-modal-body">
            <div class="submission-field">
              <label>Component Name</label>
              <input type="text" id="sub-name" placeholder="e.g., Neon Glow Button" />
            </div>
            <div class="submission-field">
              <label>Description</label>
              <textarea id="sub-desc" placeholder="What does this component do?"></textarea>
            </div>
            <div class="submission-field">
              <label>HTML</label>
              <textarea id="sub-html" placeholder="<button class='my-btn'>Click me</button>"></textarea>
            </div>
            <div class="submission-field">
              <label>CSS</label>
              <textarea id="sub-css" placeholder=".my-btn { background: #333; }"></textarea>
            </div>
            <div class="submission-field">
              <label>JS (optional)</label>
              <textarea id="sub-js" placeholder="// optional interactivity"></textarea>
            </div>
            <div class="submission-field">
              <label>Your Name</label>
              <input type="text" id="sub-author" placeholder="Jane Doe" />
            </div>
            <div class="submission-field">
              <label>GitHub Username (optional)</label>
              <input type="text" id="sub-github" placeholder="jane-doe" />
            </div>
            <div class="submission-preview-wrap" style="margin-top:16px;">
              <label>Live Preview</label>
              <div class="submission-preview-box" style="min-height:120px;background:#f8fafc;border:1px solid rgba(0,0,0,0.08);border-radius:10px;padding:16px;display:flex;align-items:center;justify-content:center;">
                <span style="color:var(--text-secondary);font-size:13px;">Preview will appear here</span>
              </div>
            </div>
          </div>
          <div class="submission-modal-footer">
            <button class="submission-preview-btn" style="background:transparent;color:var(--text-secondary);border:1.5px solid rgba(0,0,0,0.1);">Refresh Preview</button>
            <button class="submission-submit-btn" style="background:var(--accent,#eb6835);color:#fff;">Submit</button>
          </div>
        </div>
      </div>
    `;

    injectStyles();
    document.body.appendChild(overlay);

    overlay.querySelector('.submission-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay.querySelector('.submission-modal-backdrop')) overlay.remove(); });

    const previewBox = overlay.querySelector('.submission-preview-box');

    function refreshPreview() {
      const html = overlay.querySelector('#sub-html').value;
      const css = overlay.querySelector('#sub-css').value;
      if (!html) {
        previewBox.innerHTML = '<span style="color:var(--text-secondary);font-size:13px;">Enter HTML to preview</span>';
        return;
      }
      previewBox.innerHTML = `
        <iframe sandbox="allow-scripts" style="width:100%;min-height:120px;border:none;" srcdoc="
          <!DOCTYPE html><html><head><style>${css.replace(/"/g,'&quot;')}</style></head><body>${html.replace(/"/g,'&quot;')}</body></html>
        "></iframe>
      `;
    }

    overlay.querySelector('.submission-preview-btn').addEventListener('click', refreshPreview);

    overlay.querySelector('.submission-submit-btn').addEventListener('click', async () => {
      const payload = {
        component_name: overlay.querySelector('#sub-name').value.trim(),
        description: overlay.querySelector('#sub-desc').value.trim(),
        html_content: overlay.querySelector('#sub-html').value.trim(),
        css_content: overlay.querySelector('#sub-css').value.trim(),
        js_content: overlay.querySelector('#sub-js').value.trim(),
        author_name: overlay.querySelector('#sub-author').value.trim(),
        github_username: overlay.querySelector('#sub-github').value.trim(),
      };

      if (!payload.component_name || !payload.html_content || !payload.css_content || !payload.author_name) {
        alert('Name, HTML, CSS, and author name are required.');
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/api/marketplace/submit`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok) {
          alert(`Submitted! ID: ${data.submission_id}. Status: ${data.status}`);
          overlay.remove();
        } else {
          alert(data.error || 'Submission failed.');
        }
      } catch (e) {
        alert('Backend unreachable. Is Flask running?');
      }
    });
  }

  function injectStyles() {
    if (document.getElementById('submission-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'submission-modal-styles';
    style.textContent = `
      .submission-modal-backdrop{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px;}
      .submission-modal{background:var(--card-bg,#fff);border-radius:16px;width:100%;max-width:640px;max-height:90vh;overflow:auto;box-shadow:0 24px 64px rgba(0,0,0,0.25);}
      .submission-modal-header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid rgba(0,0,0,0.06);}
      .submission-modal-header h3{margin:0;font-family:'Syne',sans-serif;font-size:16px;}
      .submission-close{background:none;border:none;font-size:18px;cursor:pointer;color:var(--text-secondary,#666);}
      .submission-modal-body{padding:20px;}
      .submission-field{display:flex;flex-direction:column;gap:6px;margin-bottom:14px;}
      .submission-field label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--text-secondary);}
      .submission-field input,.submission-field textarea{padding:10px 12px;border:1.5px solid rgba(0,0,0,0.1);border-radius:10px;font-family:inherit;font-size:13px;outline:none;}
      .submission-field input:focus,.submission-field textarea:focus{border-color:var(--accent,#eb6835);}
      .submission-field textarea{min-height:80px;resize:vertical;}
      .submission-modal-footer{display:flex;gap:10px;justify-content:flex-end;padding:14px 20px;border-top:1px solid rgba(0,0,0,0.06);}
      .submission-modal-footer button{padding:8px 16px;border-radius:8px;border:none;font-weight:600;font-size:13px;cursor:pointer;}
      body.dark-mode .submission-modal{background:var(--card-bg-dark,#1e1e2f);color:var(--text-primary-dark,#f0f0f5);}
    `;
    document.head.appendChild(style);
  }

  function init() {
    const trigger = document.getElementById('submission-portal-trigger');
    if (trigger) {
      trigger.addEventListener('click', createModal);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init, open: createModal };
})();

if (typeof window !== 'undefined') window.SubmissionPortal = SubmissionPortal;
if (typeof module !== 'undefined' && module.exports) module.exports = SubmissionPortal;