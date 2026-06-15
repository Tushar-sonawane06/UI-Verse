import { Collab } from './features/collab.js';
import { initEditor } from './features/workspace-editor.js';
import { Presence } from './features/presence.js';
import { initPreview } from './features/workspace-preview.js';

const roomId = location.hash.replace('#room=', '') || 'workspace-default';
const seed = JSON.parse(sessionStorage.getItem('workspace-seed') || '{}');

const collab = new Collab(roomId, {
  html: seed.html || '<button class="gradient-btn">Click Me</button>',
  css: seed.css || '.gradient-btn { padding: 10px 24px; background: linear-gradient(45deg, #eb6835, #6c5ce7); color: white; border: none; border-radius: 8px; cursor: pointer; }',
  js: seed.js || ''
});

const presence = new Presence(collab.provider, document.getElementById('presenceBar'));

const editorContainer = document.getElementById('editorContainer');
let currentView = null;

function switchTab(tab) {
  if (currentView) currentView.destroy();
  const ytext = tab === 'html' ? collab.htmlText : tab === 'css' ? collab.cssText : collab.jsText;
  currentView = initEditor(editorContainer, ytext, collab.awareness, tab);
  document.querySelectorAll('.editor-tab').forEach((t) => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
}

document.querySelectorAll('.editor-tab').forEach((tab) => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

switchTab('html');

const preview = initPreview(document.getElementById('previewContainer'), collab);

if (seed.title) {
  document.getElementById('workspaceTitle').textContent = seed.title + ' — Workspace';
}

document.getElementById('shareBtn').addEventListener('click', () => {
  const url = new URL(location.href);
  url.hash = '#room=' + roomId;
  navigator.clipboard.writeText(url.toString()).then(() => {
    if (typeof showToast === 'function') showToast('Room URL copied!');
  });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset to original component? This will overwrite current content for everyone in the room.')) {
    collab.htmlText.delete(0, collab.htmlText.length);
    collab.cssText.delete(0, collab.cssText.length);
    collab.jsText.delete(0, collab.jsText.length);
    if (seed.html) collab.htmlText.insert(0, seed.html);
    if (seed.css) collab.cssText.insert(0, seed.css);
    if (seed.js) collab.jsText.insert(0, seed.js);
  }
});

const mobileToggle = document.getElementById('mobileToggleEditor');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    document.getElementById('editorPanel').classList.toggle('visible');
  });
}

sessionStorage.removeItem('workspace-seed');

window.addEventListener('beforeunload', () => collab.destroy());