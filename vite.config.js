import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        forms: resolve(__dirname, 'forms.html'),
        cards: resolve(__dirname, 'cards.html'),
        buttons: resolve(__dirname, 'button.html'),
        badges: resolve(__dirname, 'badges.html'),
        alerts: resolve(__dirname, 'alerts.html'),
        toggles: resolve(__dirname, 'toggles.html'),
        navbar: resolve(__dirname, 'navbar.html'),
        footer: resolve(__dirname, 'footer.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        settings: resolve(__dirname, 'settings.html'),
        color: resolve(__dirname, 'color.html')
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        manualChunks: {
          'core': [
            'js/registry.js',
            'js/core/utils.js',
            'js/core/security.js',
            'js/core/components-registry.js',
            'js/core/sanitize.js'
          ],
          'ui': [
            'js/features/toast.js',
            'js/features/popup.js',
            'js/features/sidebar.js',
            'js/features/theme.js',
            'js/features/alerts.js'
          ],
          'features': [
            'js/features/code-tools.js',
            'js/features/search.js',
            'js/features/scroll.js',
            'js/features/sandbox.js',
            'js/features/accessibility.js',
            'js/features/command-palette.js',
            'js/features/url-state.js',
            'js/features/profile-editor.js',
            'js/features/component-gallery.js'
          ]
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    cssCodeSplit: true,
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'js')
    }
  },
  server: {
    port: 3000,
    open: false
  },
  preview: {
    port: 4173
  }
});