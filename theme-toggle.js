/* Simple theme toggle: adds a floating button and persists choice in localStorage */
(function () {
  function applyTheme(t) { document.documentElement.setAttribute('data-theme', t); }
  var saved = null;
  try { saved = localStorage.getItem('ui-theme'); } catch (e) { /* ignore */ }
  if (!saved) {
    saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  applyTheme(saved);

  function createButton() {
    if (document.getElementById('ui-theme-toggle')) return;
    var btn = document.createElement('button');
    btn.id = 'ui-theme-toggle';
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.innerHTML = '<span class="sun">☀️</span><span class="moon">🌙</span>';
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('ui-theme', next); } catch (e) {}
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createButton);
  } else {
    createButton();
  }
})();
