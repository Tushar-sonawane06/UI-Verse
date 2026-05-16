// Simple Theme API: toggles data-theme on <html> and exposes programmatic methods
(function () {
  const KEY = 'uiverse:theme';
  const root = document.documentElement;

  function applyTheme(name) {
    if (name === 'dark') {
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      root.removeAttribute('data-theme');
      document.body.classList.remove('dark-mode');
    }
    try { localStorage.setItem(KEY, name); } catch (e) {}
  }

  function toggle() {
    const next = (get() === 'dark') ? 'light' : 'dark';
    applyTheme(next);
    return next;
  }

  function get() {
    try { return localStorage.getItem(KEY) || 'light'; } catch (e) { return 'light'; }
  }

  // Initialize
  const initial = get();
  applyTheme(initial);

  // Expose API
  window.ThemeAPI = {
    set: applyTheme,
    toggle,
    get
  };

  // auto-toggle via media query preference (first-run only)
  if (!localStorage.getItem(KEY) && window.matchMedia) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
})();
