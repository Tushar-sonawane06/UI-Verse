/**
 * UIverse Unified State Management System
 * 
 * Provides a centralized, standardized approach to managing component state
 * across the entire UIverse library. This ensures consistency and enables
 * easy synchronization of state across devices and user sessions.
 * 
 * @version 1.0.0
 * @author UIverse Community
 * @license MIT
 */

class StateManager {
  /**
   * Initialize the State Manager
   * 
   * @param {Object} options - Configuration options
   * @param {string} options.storageKey - LocalStorage prefix (default: 'uiverse')
   * @param {boolean} options.enableSync - Enable cross-tab synchronization (default: true)
   * @param {boolean} options.enableDebug - Enable debug logging (default: false)
   */
  constructor(options = {}) {
    this.storageKey = options.storageKey || 'uiverse';
    this.enableSync = options.enableSync !== false;
    this.enableDebug = options.enableDebug || false;
    
    // In-memory state store
    this.state = {};
    
    // Listeners for state changes
    this.listeners = {};
    
    // Pending transactions for rollback support
    this.transactions = [];
    
    this.log('State Manager initialized');
    
    // Setup cross-tab synchronization
    if (this.enableSync) {
      this.setupCrossTabSync();
    }
  }

  /**
   * Log debug messages
   * @private
   */
  log(...args) {
    if (this.enableDebug) {
      console.log('[UIverse StateManager]', ...args);
    }
  }

  /**
   * Set a state value with optional validation and notification
   * 
   * @param {string} key - State key (use dot notation for nested values: 'theme.dark')
   * @param {*} value - The value to set
   * @param {Object} options - Optional configuration
   * @param {boolean} options.persist - Save to localStorage (default: true)
   * @param {boolean} options.notify - Trigger listeners (default: true)
   * @param {Function} options.validator - Custom validation function
   * @returns {boolean} - Success status
   */
  setState(key, value, options = {}) {
    const {
      persist = true,
      notify = true,
      validator = null
    } = options;

    // Validate if validator provided
    if (validator && !validator(value)) {
      this.log(`Validation failed for key: ${key}`, value);
      return false;
    }

    const oldValue = this.getState(key);
    
    // Early return if value hasn't changed
    if (JSON.stringify(oldValue) === JSON.stringify(value)) {
      return true;
    }

    // Set nested state using dot notation
    this.setNestedState(this.state, key, value);
    this.log(`State updated: ${key} =`, value);

    // Persist to localStorage if requested
    if (persist) {
      this.persistState(key, value);
    }

    // Notify listeners if requested
    if (notify) {
      this.notifyListeners(key, value, oldValue);
    }

    return true;
  }

  /**
   * Get a state value
   * 
   * @param {string} key - State key (supports dot notation for nested values)
   * @param {*} defaultValue - Default value if key doesn't exist
   * @returns {*} - The state value
   */
  getState(key, defaultValue = null) {
    const value = this.getNestedState(this.state, key);
    return value !== undefined ? value : defaultValue;
  }

  /**
   * Update multiple state values at once
   * 
   * @param {Object} updates - Object with key-value pairs to update
   * @param {Object} options - Optional configuration (see setState)
   * @returns {boolean} - Success status
   */
  setStates(updates, options = {}) {
    const { transactional = true } = { ...options, transactional: true };
    
    if (transactional) {
      this.beginTransaction();
    }

    let success = true;
    for (const [key, value] of Object.entries(updates)) {
      if (!this.setState(key, value, options)) {
        success = false;
        if (transactional) {
          this.rollbackTransaction();
          return false;
        }
      }
    }

    if (transactional) {
      this.commitTransaction();
    }

    return success;
  }

  /**
   * Subscribe to state changes
   * 
   * @param {string|RegExp} keyPattern - State key or pattern to watch
   * @param {Function} callback - Function to call on change: callback(newValue, oldValue, key)
   * @returns {Function} - Unsubscribe function
   */
  subscribe(keyPattern, callback) {
    const pattern = keyPattern instanceof RegExp ? keyPattern : new RegExp(`^${keyPattern.replace(/\./g, '\\.')}($|\.)`);
    
    if (!this.listeners[pattern]) {
      this.listeners[pattern] = [];
    }

    this.listeners[pattern].push(callback);
    this.log(`Listener subscribed to pattern: ${pattern}`);

    // Return unsubscribe function
    return () => {
      const index = this.listeners[pattern].indexOf(callback);
      if (index > -1) {
        this.listeners[pattern].splice(index, 1);
      }
    };
  }

  /**
   * Notify all listeners for a state change
   * @private
   */
  notifyListeners(key, newValue, oldValue) {
    for (const [pattern, callbacks] of Object.entries(this.listeners)) {
      const regex = new RegExp(pattern);
      if (regex.test(key)) {
        callbacks.forEach(callback => {
          try {
            callback(newValue, oldValue, key);
          } catch (error) {
            console.error(`Error in listener for ${key}:`, error);
          }
        });
      }
    }
  }

  /**
   * Persist state to localStorage
   * @private
   */
  persistState(key, value) {
    try {
      const storageData = this.getStorageData();
      this.setNestedState(storageData, key, value);
      localStorage.setItem(this.storageKey, JSON.stringify(storageData));
      this.log(`State persisted: ${key}`);
    } catch (error) {
      console.error('Failed to persist state:', error);
    }
  }

  /**
   * Get data from localStorage
   * @private
   */
  getStorageData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Failed to read from localStorage:', error);
      return {};
    }
  }

  /**
   * Load state from localStorage
   * 
   * @returns {Object} - Loaded state
   */
  loadState() {
    try {
      const stored = this.getStorageData();
      this.state = { ...this.state, ...stored };
      this.log('State loaded from localStorage', stored);
      return stored;
    } catch (error) {
      console.error('Failed to load state:', error);
      return {};
    }
  }

  /**
   * Clear all persisted state
   * 
   * @param {Object} options - Configuration options
   * @param {boolean} options.memory - Also clear in-memory state (default: true)
   * @returns {boolean} - Success status
   */
  clearState(options = {}) {
    const { memory = true } = options;

    try {
      localStorage.removeItem(this.storageKey);
      if (memory) {
        this.state = {};
      }
      this.log('State cleared');
      return true;
    } catch (error) {
      console.error('Failed to clear state:', error);
      return false;
    }
  }

  /**
   * Set nested state using dot notation
   * @private
   */
  setNestedState(obj, path, value) {
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
   * Get nested state using dot notation
   * @private
   */
  getNestedState(obj, path) {
    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    }

    return current;
  }

  /**
   * Begin a transaction for atomic updates
   * @private
   */
  beginTransaction() {
    this.transactions.push(JSON.parse(JSON.stringify(this.state)));
    this.log('Transaction begun');
  }

  /**
   * Commit a transaction
   * @private
   */
  commitTransaction() {
    if (this.transactions.length > 0) {
      this.transactions.pop();
      this.log('Transaction committed');
    }
  }

  /**
   * Rollback a transaction
   * @private
   */
  rollbackTransaction() {
    if (this.transactions.length > 0) {
      this.state = this.transactions.pop();
      this.log('Transaction rolled back');
    }
  }

  /**
   * Setup cross-tab synchronization using storage events
   * @private
   */
  setupCrossTabSync() {
    window.addEventListener('storage', (event) => {
      if (event.key === this.storageKey && event.newValue) {
        try {
          const newState = JSON.parse(event.newValue);
          this.state = newState;
          this.log('State synchronized from another tab', newState);
          
          // Notify listeners of changes
          for (const [key, value] of Object.entries(newState)) {
            this.notifyListeners(key, value, undefined);
          }
        } catch (error) {
          console.error('Failed to sync state from storage event:', error);
        }
      }
    });
  }

  /**
   * Get all state as object
   * 
   * @returns {Object} - Complete state
   */
  getAll() {
    return JSON.parse(JSON.stringify(this.state));
  }

  /**
   * Reset state to initial value
   * 
   * @param {Object} initialState - Initial state object
   * @returns {boolean} - Success status
   */
  reset(initialState = {}) {
    this.state = JSON.parse(JSON.stringify(initialState));
    this.clearState({ memory: false });
    this.log('State reset', initialState);
    return true;
  }

  /**
   * Watch for state changes and execute callback
   * Convenience method that automatically unsubscribes after first change
   * 
   * @param {string} key - State key to watch
   * @param {Function} callback - Function to call on change
   * @returns {Function} - Unsubscribe function
   */
  once(key, callback) {
    const unsubscribe = this.subscribe(key, (newValue, oldValue) => {
      callback(newValue, oldValue, key);
      unsubscribe();
    });
    return unsubscribe;
  }
}

// Initialize global instance
const UIVerseStateManager = new StateManager({
  storageKey: 'uiverse-state',
  enableSync: true,
  enableDebug: false
});

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIVerseStateManager;
}
