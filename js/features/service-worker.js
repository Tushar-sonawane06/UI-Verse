/**
 * UIverse - Service Worker Registration
 * Handles offline caching and background sync
 */

const ServiceWorkerManager = {
  registration: null,
  updateFound: false,

  async init() {
    if (!('serviceWorker' in navigator)) {
      console.warn('[SW] Service Workers not supported');
      return false;
    }

    try {
      this.registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('[SW] Registered:', this.registration.scope);

      this.registration.addEventListener('updatefound', () => {
        this.handleUpdateFound();
      });

      if (this.registration.active) {
        console.log('[SW] Service Worker is active');
      }

      this.registration.addEventListener('controllerchange', () => {
        console.log('[SW] Controller changed, reloading...');
        window.location.reload();
      });

      return true;
    } catch (error) {
      console.error('[SW] Registration failed:', error);
      return false;
    }
  },

  async handleUpdateFound() {
    const newWorker = this.registration.installing;
    console.log('[SW] New service worker found');

    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        this.updateFound = true;
        this.notifyUpdate();
      }
    });
  },

  notifyUpdate() {
    const event = new CustomEvent('swUpdate', { detail: { update: true } });
    window.dispatchEvent(event);
  },

  async skipWaiting() {
    if (this.registration && this.registration.waiting) {
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },

  async updateNow() {
    await this.skipWaiting();
    window.location.reload();
  },

  async getCacheSize() {
    if ('caches' in window) {
      const keys = await caches.keys();
      let totalSize = 0;
      for (const key of keys) {
        const cache = await caches.open(key);
        const requests = await cache.keys();
        totalSize += requests.length;
      }
      return totalSize;
    }
    return 0;
  },

  async clearCache() {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(key => caches.delete(key)));
      console.log('[SW] Cache cleared');
      return true;
    }
    return false;
  }
};

if (typeof window !== 'undefined') {
  window.ServiceWorkerManager = ServiceWorkerManager;

  document.addEventListener('DOMContentLoaded', () => {
    ServiceWorkerManager.init();
  });

  window.addEventListener('swUpdate', () => {
    console.log('[UI] New version available, refresh to update');
  });
}

export default ServiceWorkerManager;