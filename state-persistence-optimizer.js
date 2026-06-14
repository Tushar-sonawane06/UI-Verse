/**
 * UIverse State Persistence Optimizer
 * 
 * Optimizes high-frequency state updates to localStorage by implementing:
 * - Write debouncing and coalescing
 * - Batch update support
 * - Adaptive persistence based on update frequency
 * - Performance metrics and monitoring
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class StatePersistenceOptimizer {
  /**
   * Initialize State Persistence Optimizer
   * 
   * @param {Object} options - Configuration options
   * @param {number} options.debounceMs - Debounce window in milliseconds (default: 100)
   * @param {number} options.batchSize - Max items per batch before immediate flush (default: 50)
   * @param {boolean} options.enableCoalescing - Enable write coalescing (default: true)
   * @param {boolean} options.enableMetrics - Enable performance metrics (default: true)
   * @param {string} options.storageKey - localStorage key prefix (default: 'uiverse-state')
   */
  constructor(options = {}) {
    this.debounceMs = options.debounceMs || 100;
    this.batchSize = options.batchSize || 50;
    this.enableCoalescing = options.enableCoalescing !== false;
    this.enableMetrics = options.enableMetrics !== false;
    this.storageKey = options.storageKey || 'uiverse-state';

    // Pending writes queue
    this.pendingWrites = new Map();

    // Debounce timers per key
    this.debounceTimers = new Map();

    // Performance metrics
    this.metrics = {
      totalWrites: 0,
      coalescedWrites: 0,
      debouncedWrites: 0,
      batchedWrites: 0,
      totalWriteTime: 0,
      pendingOperations: 0,
      lastFlushTime: null,
      flushCount: 0
    };

    // Write listener callbacks
    this.listeners = [];

    // Adaptive persistence state
    this.updateFrequency = new Map();
    this.frequencyWindow = 1000; // 1 second window
  }

  /**
   * Schedule a state write with debouncing
   * 
   * @param {string} key - State key
   * @param {*} value - State value
   * @param {Object} options - Write options
   * @returns {Promise} - Resolves when write completes
   */
  scheduleWrite(key, value, options = {}) {
    const {
      immediate = false,
      skipDebounce = false,
      priority = 'normal'
    } = options;

    // Track update frequency
    this.trackUpdateFrequency(key);

    // Add to pending writes
    this.pendingWrites.set(key, {
      key,
      value,
      priority,
      timestamp: Date.now()
    });

    this.metrics.pendingOperations = this.pendingWrites.size;

    // Clear existing debounce timer if present
    if (this.debounceTimers.has(key)) {
      clearTimeout(this.debounceTimers.get(key));
    }

    // Determine if write should be immediate
    const shouldBeImmediate = immediate || skipDebounce || this.pendingWrites.size >= this.batchSize;

    if (shouldBeImmediate) {
      return this.flushWrites([key]);
    } else {
      // Schedule debounced write
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          this.flushWrites([key]).then(resolve);
        }, this.debounceMs);

        this.debounceTimers.set(key, timer);
      });
    }
  }

  /**
   * Schedule multiple writes in batch
   * 
   * @param {Object} updates - Key-value pairs to write
   * @param {Object} options - Batch options
   * @returns {Promise} - Resolves when batch completes
   */
  scheduleBatchWrites(updates, options = {}) {
    const {
      immediate = false,
      coalesce = true
    } = options;

    const keys = Object.keys(updates);

    // Add all updates to pending writes
    for (const key of keys) {
      this.pendingWrites.set(key, {
        key,
        value: updates[key],
        priority: 'normal',
        timestamp: Date.now()
      });

      // Clear existing timers
      if (this.debounceTimers.has(key)) {
        clearTimeout(this.debounceTimers.get(key));
      }
    }

    this.metrics.pendingOperations = this.pendingWrites.size;
    this.metrics.batchedWrites++;

    if (immediate || this.pendingWrites.size >= this.batchSize) {
      return this.flushWrites(keys);
    } else {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          this.flushWrites(keys).then(resolve);
        }, this.debounceMs);

        // Set timer for first key
        if (keys.length > 0) {
          this.debounceTimers.set(keys[0], timer);
        }
      });
    }
  }

  /**
   * Flush pending writes to localStorage
   * 
   * @private
   * @param {string[]} keys - Keys to flush
   * @returns {Promise} - Resolves when flush completes
   */
  async flushWrites(keys) {
    const startTime = performance.now();

    try {
      // Get current stored data
      let storedData = this.getStoredData();

      // Apply pending writes
      for (const key of keys) {
        if (this.pendingWrites.has(key)) {
          const { value } = this.pendingWrites.get(key);
          this.setNestedValue(storedData, key, value);
          this.pendingWrites.delete(key);
        }
      }

      // Coalesce writes if enabled
      if (this.enableCoalescing) {
        this.metrics.coalescedWrites++;
      }

      // Write to localStorage
      localStorage.setItem(this.storageKey, JSON.stringify(storedData));

      const duration = performance.now() - startTime;
      this.recordMetrics(duration, keys.length);

      // Notify listeners
      this.notifyListeners(keys, duration);

      this.metrics.lastFlushTime = Date.now();
      this.metrics.flushCount++;

      return { success: true, duration, keysWritten: keys.length };
    } catch (error) {
      console.error('Failed to flush state writes:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Force immediate flush of all pending writes
   * 
   * @returns {Promise} - Resolves when all writes complete
   */
  async flushAll() {
    const keys = Array.from(this.pendingWrites.keys());
    
    // Clear all debounce timers
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();

    if (keys.length === 0) {
      return { success: true, keysWritten: 0 };
    }

    return this.flushWrites(keys);
  }

  /**
   * Track update frequency for adaptive persistence
   * 
   * @private
   */
  trackUpdateFrequency(key) {
    if (!this.updateFrequency.has(key)) {
      this.updateFrequency.set(key, []);
    }

    const times = this.updateFrequency.get(key);
    const now = Date.now();

    // Add current timestamp
    times.push(now);

    // Remove old timestamps outside window
    const cutoff = now - this.frequencyWindow;
    const filtered = times.filter(t => t > cutoff);
    this.updateFrequency.set(key, filtered);

    this.metrics.debouncedWrites++;
  }

  /**
   * Get update frequency for a key
   * 
   * @param {string} key - State key
   * @returns {number} - Updates per second
   */
  getUpdateFrequency(key) {
    const times = this.updateFrequency.get(key) || [];
    return times.length / (this.frequencyWindow / 1000);
  }

  /**
   * Get stored data from localStorage
   * 
   * @private
   */
  getStoredData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Failed to read from localStorage:', error);
      return {};
    }
  }

  /**
   * Set nested value using dot notation
   * 
   * @private
   */
  setNestedValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key];
    }

    current[keys[keys.length - 1]] = value;
  }

  /**
   * Get adaptive debounce delay based on update frequency
   * 
   * @param {string} key - State key
   * @returns {number} - Debounce delay in milliseconds
   */
  getAdaptiveDebounce(key) {
    const frequency = this.getUpdateFrequency(key);

    // Adaptive debounce: higher frequency = longer debounce
    if (frequency > 10) return 500; // Very high frequency
    if (frequency > 5) return 300;  // High frequency
    if (frequency > 2) return 150;  // Medium frequency
    return this.debounceMs; // Default
  }

  /**
   * Record performance metrics
   * 
   * @private
   */
  recordMetrics(duration, keysWritten) {
    if (!this.enableMetrics) return;

    this.metrics.totalWrites++;
    this.metrics.totalWriteTime += duration;
  }

  /**
   * Subscribe to write events
   * 
   * @param {Function} callback - Called when writes complete
   * @returns {Function} - Unsubscribe function
   */
  subscribe(callback) {
    this.listeners.push(callback);

    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notify write listeners
   * 
   * @private
   */
  notifyListeners(keys, duration) {
    for (const listener of this.listeners) {
      try {
        listener({
          keys,
          duration,
          timestamp: Date.now()
        });
      } catch (error) {
        console.error('Error in write listener:', error);
      }
    }
  }

  /**
   * Get performance metrics
   * 
   * @returns {Object} - Metrics object
   */
  getMetrics() {
    return {
      ...this.metrics,
      averageWriteTime: this.metrics.totalWrites > 0 
        ? (this.metrics.totalWriteTime / this.metrics.totalWrites).toFixed(2)
        : 0,
      writeReductionPercent: this.metrics.totalWrites > 0
        ? ((this.metrics.coalescedWrites / this.metrics.totalWrites) * 100).toFixed(2)
        : 0,
      uptime: Date.now() - this.startTime
    };
  }

  /**
   * Reset metrics
   */
  resetMetrics() {
    this.metrics = {
      totalWrites: 0,
      coalescedWrites: 0,
      debouncedWrites: 0,
      batchedWrites: 0,
      totalWriteTime: 0,
      pendingOperations: 0,
      lastFlushTime: null,
      flushCount: 0
    };
  }

  /**
   * Get optimization status
   * 
   * @returns {Object} - Optimization status
   */
  getOptimizationStatus() {
    const metrics = this.getMetrics();
    
    return {
      isOptimized: this.metrics.coalescedWrites > 0,
      reductionRatio: metrics.writeReductionPercent,
      averageLatency: parseFloat(metrics.averageWriteTime),
      totalOptimizedWrites: this.metrics.coalescedWrites,
      pendingWrites: this.metrics.pendingOperations,
      updateFrequency: this.getUpdateFrequencyStats()
    };
  }

  /**
   * Get update frequency statistics
   * 
   * @private
   */
  getUpdateFrequencyStats() {
    const frequencies = [];
    
    for (const [key, times] of this.updateFrequency.entries()) {
      frequencies.push({
        key,
        frequency: (times.length / (this.frequencyWindow / 1000)).toFixed(2)
      });
    }

    return frequencies.sort((a, b) => parseFloat(b.frequency) - parseFloat(a.frequency));
  }

  /**
   * Configure optimization parameters
   * 
   * @param {Object} options - Configuration options
   */
  configure(options = {}) {
    if (options.debounceMs !== undefined) this.debounceMs = options.debounceMs;
    if (options.batchSize !== undefined) this.batchSize = options.batchSize;
    if (options.enableCoalescing !== undefined) this.enableCoalescing = options.enableCoalescing;
    if (options.enableMetrics !== undefined) this.enableMetrics = options.enableMetrics;
  }

  /**
   * Check pending write queue
   * 
   * @returns {Object[]} - Array of pending writes
   */
  getPendingWrites() {
    return Array.from(this.pendingWrites.values());
  }

  /**
   * Clear pending writes without flushing
   */
  clearPendingWrites() {
    this.pendingWrites.clear();
    
    // Clear timers
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();

    this.metrics.pendingOperations = 0;
  }

  /**
   * Estimate storage size
   * 
   * @returns {Object} - Storage size information
   */
  estimateStorageSize() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      const pending = this.getPendingWrites();

      return {
        storedSize: stored ? new Blob([stored]).size : 0,
        pendingSize: new Blob([JSON.stringify(pending)]).size,
        totalSize: (stored ? new Blob([stored]).size : 0) + 
                   new Blob([JSON.stringify(pending)]).size
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  /**
   * Initialize metrics tracking
   */
  init() {
    this.startTime = Date.now();
    this.metrics.pendingOperations = 0;
  }
}

// Initialize global instance
const UIVerseStatePersistenceOptimizer = new StatePersistenceOptimizer({
  debounceMs: 100,
  batchSize: 50,
  enableCoalescing: true,
  enableMetrics: true
});

UIVerseStatePersistenceOptimizer.init();

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIVerseStatePersistenceOptimizer;
}
