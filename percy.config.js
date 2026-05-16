module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 768, 1280],
    minHeight: 1024,
    percyCSS: `
      /* Disable animations for consistent screenshots */
      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }
    `
  },
  discovery: {
    allowedHostnames: ['localhost', '127.0.0.1'],
    networkIdleTimeout: 250
  }
};