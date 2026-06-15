function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.CommandPalette && typeof CommandPalette.init === 'function') {
    CommandPalette.init();
  }
  if (window.AIGenerator && typeof AIGenerator.init === 'function') {
    AIGenerator.init();
  }
});