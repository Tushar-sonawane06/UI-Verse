/**
 * Image Optimizer Runtime
 * Intercepts image loading, monitors container bounds via ResizeObserver,
 * and requests optimized images from the Web Worker
 */

(function() {
  'use strict';

  const WORKER_PATH = 'scripts/image-worker.js';
  const DEBOUNCE_DELAY = 150;
  const DEFAULT_FORMAT = 'webp';

  /**
   * ImageOptimizerRuntime class
   * Manages the Web Worker and intercepts image loading
   */
  class ImageOptimizerRuntime {
    constructor() {
      this.worker = null;
      this.workerReady = false;
      this.pendingRequests = new Map();
      this.requestIdCounter = 0;
      this.observer = null;
      this.observedElements = new WeakMap();
      this.debounceTimers = new Map();
      this.supportedFormats = ['webp', 'avif'];
      this.activeFormat = this.detectBestFormat();
    }

    /**
     * Detect the best image format supported by the browser
     */
    detectBestFormat() {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      if (canvas.toBlob) {
        return 'webp';
      }
      return 'jpeg';
    }

    /**
     * Initialize the Web Worker
     */
    async init() {
      if (this.worker) return;

      try {
        this.worker = new Worker(WORKER_PATH);
        
        this.worker.onmessage = (event) => this.handleWorkerMessage(event);
        this.worker.onerror = (error) => {
          console.error('[ImageOptimizer] Worker error:', error);
        };

        // Wait for worker to be ready
        await this.waitForWorkerReady();
        this.workerReady = true;
        
        // Initialize ResizeObserver
        this.initResizeObserver();
        
        console.log('[ImageOptimizer] Initialized with format:', this.activeFormat);
      } catch (error) {
        console.error('[ImageOptimizer] Failed to initialize:', error);
      }
    }

    /**
     * Wait for the worker to send ready signal
     */
    waitForWorkerReady() {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Worker initialization timeout'));
        }, 5000);

        const handler = (event) => {
          if (event.data.type === 'WORKER_READY') {
            clearTimeout(timeout);
            this.worker.removeEventListener('message', handler);
            resolve();
          }
        };

        this.worker.addEventListener('message', handler);
      });
    }

    /**
     * Handle messages from the Web Worker
     */
    handleWorkerMessage(event) {
      const { id, type, payload } = event.data;

      if (type === 'ERROR') {
        console.error('[ImageOptimizer] Worker error:', payload.error);
        const pending = this.pendingRequests.get(id);
        if (pending && pending.reject) {
          pending.reject(new Error(payload.error));
        }
        this.pendingRequests.delete(id);
        return;
      }

      const pending = this.pendingRequests.get(id);
      if (!pending) return;

      switch (type) {
        case 'OPTIMIZE_RESULT':
          if (payload.success) {
            // Create object URL for the blob
            const objectUrl = URL.createObjectURL(payload.blob);
            pending.resolve({
              objectUrl,
              blob: payload.blob,
              fromCache: payload.fromCache,
              width: payload.width,
              height: payload.height
            });
          } else {
            pending.reject(new Error('Optimization failed'));
          }
          break;

        case 'IMAGE_INFO_RESULT':
          if (payload.success) {
            pending.resolve({
              width: payload.width,
              height: payload.height,
              aspectRatio: payload.aspectRatio
            });
          }
          break;

        case 'CACHE_CLEARED':
          console.log('[ImageOptimizer] Cache cleared:', payload.deletedCount, 'items');
          break;

        case 'CACHE_SIZE_RESULT':
          console.log('[ImageOptimizer] Cache size:', payload.size, '/', payload.maxSize);
          break;
      }

      this.pendingRequests.delete(id);
    }

    /**
     * Send a message to the worker and return a promise
     */
    sendToWorker(type, payload) {
      return new Promise((resolve, reject) => {
        if (!this.worker) {
          reject(new Error('Worker not initialized'));
          return;
        }

        const id = ++this.requestIdCounter;
        this.pendingRequests.set(id, { resolve, reject });

        this.worker.postMessage({ id, type, payload });

        // Timeout after 30 seconds
        setTimeout(() => {
          if (this.pendingRequests.has(id)) {
            this.pendingRequests.delete(id);
            reject(new Error('Request timeout'));
          }
        }, 30000);
      });
    }

    /**
     * Initialize ResizeObserver to monitor container bounds
     */
    initResizeObserver() {
      if (!('ResizeObserver' in window)) {
        console.warn('[ImageOptimizer] ResizeObserver not supported');
        return;
      }

      this.observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.handleResize(entry);
        }
      });

      // Observe existing optimized images
      this.observeExistingImages();
    }

    /**
     * Observe all images that should be optimized
     */
    observeExistingImages() {
      const images = document.querySelectorAll('img[data-optimize]');
      images.forEach(img => this.observeImage(img));
    }

    /**
     * Add an image to the ResizeObserver
     */
    observeImage(img) {
      if (!this.observer || this.observedElements.has(img)) return;
      
      this.observer.observe(img);
      this.observedElements.set(img, true);
    }

    /**
     * Handle resize events with debouncing
     */
    handleResize(entry) {
      const img = entry.target;
      const cacheKey = img.dataset.optimizeCacheKey;
      
      if (!cacheKey) return;

      // Debounce resize handling
      const existingTimer = this.debounceTimers.get(img);
      if (existingTimer) {
        clearTimeout(existingTimer);
      }

      const timer = setTimeout(() => {
        this.debounceTimers.delete(img);
        this.requestOptimizedImage(img);
      }, DEBOUNCE_DELAY);

      this.debounceTimers.set(img, timer);
    }

    /**
     * Request an optimized image from the worker
     */
    async requestOptimizedImage(img, options = {}) {
      const {
        maxWidth = options.maxWidth || img.clientWidth || 800,
        maxHeight = options.maxHeight || img.clientHeight || 600,
        format = this.activeFormat
      } = options;

      const url = img.dataset.src || img.src;
      
      if (!url || url.startsWith('data:') || url.startsWith('blob:')) {
        return;
      }

      try {
        const result = await this.sendToWorker('OPTIMIZE_IMAGE', {
          url,
          maxWidth,
          maxHeight,
          format,
          originalWidth: img.naturalWidth,
          originalHeight: img.naturalHeight
        });

        // Update the image with the optimized version
        if (result.objectUrl) {
          img.src = result.objectUrl;
          img.dataset.optimizeCacheKey = this.generateCacheKey(url, result.width, result.height, format);
          img.dataset.optimized = 'true';
          
          // Set dimensions to prevent layout shifts
          if (!img.width || !img.height) {
            img.width = result.width;
            img.height = result.height;
          }

          // Dispatch custom event
          img.dispatchEvent(new CustomEvent('image-optimized', {
            detail: {
              originalUrl: url,
              optimizedUrl: result.objectUrl,
              fromCache: result.fromCache,
              width: result.width,
              height: result.height,
              format
            }
          }));
        }
      } catch (error) {
        console.error('[ImageOptimizer] Optimization failed:', error);
        // Fall back to original image
      }
    }

    /**
     * Generate a cache key for tracking optimized images
     */
    generateCacheKey(url, width, height, format) {
      return `img-${btoa(url).replace(/[^a-zA-Z0-9]/g, '')}-${width}x${height}-${format}`;
    }

    /**
     * Optimize a single image
     */
    async optimizeImage(img, options = {}) {
      await this.init();
      this.observeImage(img);
      await this.requestOptimizedImage(img, options);
    }

    /**
     * Optimize all images with data-optimize attribute
     */
    async optimizeAllImages() {
      await this.init();
      
      const images = document.querySelectorAll('img[data-optimize]');
      const promises = Array.from(images).map(img => this.requestOptimizedImage(img));
      
      await Promise.allSettled(promises);
    }

    /**
     * Clear the image cache
     */
    async clearCache() {
      await this.init();
      await this.sendToWorker('CLEAR_CACHE', {});
    }

    /**
     * Get cache statistics
     */
    async getCacheSize() {
      await this.init();
      await this.sendToWorker('GET_CACHE_SIZE', {});
    }

    /**
     * Get information about an image
     */
    async getImageInfo(url) {
      await this.init();
      return await this.sendToWorker('GET_IMAGE_INFO', { url });
    }

    /**
     * Destroy the runtime and clean up
     */
    destroy() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }

      if (this.worker) {
        this.worker.terminate();
        this.worker = null;
      }

      this.pendingRequests.clear();
      this.debounceTimers.forEach(timer => clearTimeout(timer));
      this.debounceTimers.clear();
      this.workerReady = false;
    }
  }

  // Create global instance
  const imageOptimizer = new ImageOptimizerRuntime();

  // Auto-initialize on DOM ready
  function autoInit() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => imageOptimizer.init());
    } else {
      // Use requestAnimationFrame to ensure layout is ready
      requestAnimationFrame(() => {
        imageOptimizer.init();
      });
    }
  }

  // Expose API globally
  window.ImageOptimizer = {
    init: () => imageOptimizer.init(),
    optimize: (img, options) => imageOptimizer.optimizeImage(img, options),
    optimizeAll: () => imageOptimizer.optimizeAllImages(),
    clearCache: () => imageOptimizer.clearCache(),
    getCacheSize: () => imageOptimizer.getCacheSize(),
    getImageInfo: (url) => imageOptimizer.getImageInfo(url),
    destroy: () => imageOptimizer.destroy(),
    runtime: imageOptimizer
  };

  // Auto-init if data-auto-optimize attribute is present on body or html
  if (document.documentElement.dataset.autoOptimize !== undefined || 
      document.body?.dataset?.autoOptimize !== undefined) {
    autoInit();
  }

  // Export for module usage
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.ImageOptimizer;
  }

})();