/**
 * @fileoverview UIverse Profile Core Management Engine
 * Provides reactive data abstraction layers, input synchronization pipelines,
 * async state mutations, transactional visual fallbacks, and real-time validation matrices.
 * @version 2.4.0
 */

"use strict";

(function (window, document) {

  /**
   * Application-wide Constants & Config Mapping
   * @type {Object}
   */
  const CONFIG = {
    MOCK_LATENCY: 850,
    MAX_AVATAR_SIZE_BYTES: 2 * 1024 * 1024, // 2MB Bounds
    ALLOWED_AVATAR_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
    TOAST_DURATION_MS: 3500,
    ANIMATION_FRAME_MS: 16,
    SELECTORS: {
      tabElement: '.tab',
      panelElement: '.tab-panel',
      passwordToggle: '.toggle-pass',
      interactiveInputs: 'input, textarea, select'
    },
    REGEX: {
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      phone: /^\+?[1-9]\d{1,14}$/,
      url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
    }
  };

  /**
   * Central Memory State Store
   * Encapsulates structural values and UI operational locks.
   */
  const State = {
    user: {
      fullName: "Alex Mercer",
      email: "alex.mercer@uiverse.io",
      phone: "+15550199",
      bio: "UI Enthusiast & Open Source Contributor",
      avatarSrc: "assets/default-avatar.svg",
      marketingEmails: true,
      securityLogs: false,
      twoFactorEnabled: true
    },
    ui: {
      activeTab: "general",
      isDirty: false,
      isSubmitting: false,
      hasErrors: false,
      activeValidationTrackers: new Map()
    },
    transient: {
      avatarFile: null,
      avatarDataUrl: null
    }
  };

  /**
   * DOM Elements Cache Registry Engine
   */
  const DOM = {
    cache: {},
    get(id) {
      if (!this.cache[id]) {
        this.cache[id] = document.getElementById(id);
      }
      return this.cache[id];
    },
    queryAll(selector) {
      return document.querySelectorAll(selector);
    },
    invalidate(id) {
      if (this.cache[id]) {
        delete this.cache[id];
      }
    }
  };

  /**
   * Mathematical and String Utility Helpers
   */
  const Utils = {
    /**
     * Creates a debounced version of an execution pipeline
     */
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    /**
     * Safely escapes input content strings to prevent XSS entry vectors
     */
    escapeHtml(str) {
      if (!str) return '';
      return str.replace(/[&<>"']/g, (match) => {
        const entities = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        };
        return entities[match];
      });
    },

    /**
     * Humanizes raw file sizing integers
     */
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  };

  /**
   * UI Messaging and Live Toast Overlay Controller
   */
  const ToastController = {
    timeoutId: null,

    /**
     * Dispatches visual global signals based on async results
     * @param {string} message - text payload
     * @param {'success'|'error'|'info'} type - structural color flag
     */
    show(message, type = 'success') {
      const toastEl = DOM.get('toast');
      if (!toastEl) return;

      clearTimeout(this.timeoutId);

      // Clean existing structural tokens
      toastEl.className = 'toast-notification hidden';
      
      // Force repaint loop to guarantee re-trigger of CSS animations
      void toastEl.offsetWidth;

      toastEl.textContent = message;
      toastEl.classList.add(`toast-${type}`);
      toastEl.classList.remove('hidden');
      toastEl.setAttribute('aria-hidden', 'false');

      this.timeoutId = setTimeout(() => {
        this.hide();
      }, CONFIG.TOAST_DURATION_MS);
    },

    hide() {
      const toastEl = DOM.get('toast');
      if (toastEl) {
        toastEl.classList.add('hidden');
        toastEl.setAttribute('aria-hidden', 'true');
      }
    }
  };

  /**
   * Operational Validation Subsystem
   */
  const Validator = {
    /**
     * Runs structural audits across target node fields
     * @param {HTMLInputElement} inputEl
     * @returns {boolean} isValid context
     */
    validateField(inputEl) {
      if (!inputEl) return true;

      const value = inputEl.value.trim();
      const fieldId = inputEl.id;
      let isValid = true;
      let errorMessage = "";

      // Required verification checks
      if (inputEl.hasAttribute('required') && value.length === 0) {
        isValid = false;
        errorMessage = "This target profile field is mandatory.";
      }

      // Format constraints analysis
      if (isValid && value.length > 0) {
        if (inputEl.type === 'email' || fieldId === 'email') {
          if (!CONFIG.REGEX.email.test(value)) {
            isValid = false;
            errorMessage = "Please enter a valid structure email account framework.";
          }
        } else if (inputEl.type === 'tel' || fieldId === 'phone') {
          if (!CONFIG.REGEX.phone.test(value)) {
            isValid = false;
            errorMessage = "Invalid international phone sequence syntax.";
          }
        }
      }

      // Boundary length conditions
      if (isValid && inputEl.hasAttribute('minlength')) {
        const minLen = parseInt(inputEl.getAttribute('minlength'), 10);
        if (value.length < minLen) {
          isValid = false;
          errorMessage = `Requires at minimum ${minLen} characters.`;
        }
      }

      this.toggleErrorState(inputEl, isValid, errorMessage);
      this.evaluateFormGlobalState();
      return isValid;
    },

    /**
     * Manages state presentation bindings around nodes
     */
    toggleErrorState(inputEl, isValid, message) {
      const fieldGroup = inputEl.closest('.form-group');
      if (!fieldGroup) return;

      let errorDisplay = fieldGroup.querySelector('.error-message-node');

      if (!isValid) {
        inputEl.classList.add('input-error');
        inputEl.setAttribute('aria-invalid', 'true');
        State.ui.activeValidationTrackers.set(inputEl.id, message);

        if (!errorDisplay) {
          errorDisplay = document.createElement('span');
          errorDisplay.className = 'error-message-node';
          fieldGroup.appendChild(errorDisplay);
        }
        errorDisplay.textContent = message;
      } else {
        inputEl.classList.remove('input-error');
        inputEl.removeAttribute('aria-invalid');
        State.ui.activeValidationTrackers.delete(inputEl.id);
        
        if (errorDisplay) {
          errorDisplay.remove();
        }
      }
    },

    evaluateFormGlobalState() {
      State.ui.hasErrors = State.ui.activeValidationTrackers.size > 0;
      const saveBtn = DOM.get('saveBtn');
      if (saveBtn) {
        saveBtn.disabled = State.ui.hasErrors || State.ui.isSubmitting;
      }
    }
  };

  /**
   * Mock API Operations Abstraction layer
   */
  const ProfileAPI = {
    /**
     * Pushes local states out to target storage platforms
     * @param {Object} dataPayload
     * @returns {Promise<Object>} response
     */
    saveProfileData(dataPayload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Failure condition tracking metrics
          if (dataPayload.fullName && dataPayload.fullName.toLowerCase() === 'error') {
            reject(new Error("Database transaction rejected operational payloads."));
          } else {
            resolve({ status: 200, timestamp: Date.now(), data: dataPayload });
          }
        }, CONFIG.MOCK_LATENCY);
      });
    },

    /**
     * Streams binary strings out to assets CDN nodes
     * @param {File} fileObject
     * @returns {Promise<string>} resolved remote path destination
     */
    uploadAvatarStream(fileObject) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("https://cdn.uiverse.io/profiles/avatars/" + Date.now() + "_" + fileObject.name);
        }, CONFIG.MOCK_LATENCY * 1.5);
      });
    }
  };

  /**
   * Tab Navigation Routing Module
   */
  const NavigationEngine = {
    init() {
      const tabs = DOM.queryAll(CONFIG.SELECTORS.tabElement);
      if (!tabs.length) return;

      tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          this.switchTab(tab);
        });

        // Keyboard mapping paths for structural grids
        tab.addEventListener('keydown', (e) => {
          this.handleKeyboardTraversals(e, tab);
        });
      });
    },

    /**
     * Switches viewport contextual displays
     * @param {HTMLElement} selectedTabToken
     */
    switchTab(selectedTabToken) {
      const targetPanelId = selectedTabToken.dataset.tab;
      if (!targetPanelId || State.ui.activeTab === targetPanelId) return;

      const tabs = DOM.queryAll(CONFIG.SELECTORS.tabElement);
      const panels = DOM.queryAll(CONFIG.SELECTORS.panelElement);

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });

      panels.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-hidden', 'true');
      });

      selectedTabToken.classList.add('active');
      selectedTabToken.setAttribute('aria-selected', 'true');
      selectedTabToken.setAttribute('tabindex', '0');
      selectedTabToken.focus();

      const targetPanel = DOM.get('tab-' + targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        targetPanel.setAttribute('aria-hidden', 'false');
      }

      State.ui.activeTab = targetPanelId;
    },

    /**
     * Enforces explicit WAI-ARIA tab navigation standard rules
     */
    handleKeyboardTraversals(event, activeTab) {
      const tabsArray = Array.from(DOM.queryAll(CONFIG.SELECTORS.tabElement));
      const currentIndex = tabsArray.indexOf(activeTab);
      let targetIndex = null;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          targetIndex = (currentIndex + 1) % tabsArray.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          targetIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
          break;
        case 'Home':
          targetIndex = 0;
          break;
        case 'End':
          targetIndex = tabsArray.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      if (targetIndex !== null && tabsArray[targetIndex]) {
        this.switchTab(tabsArray[targetIndex]);
      }
    }
  };

  /**
   * Avatar Binary Management Pipeline
   */
  const AvatarProcessor = {
    init() {
      const input = DOM.get('avatarInput');
      const dropZone = DOM.get('avatarDropZone');

      if (input) {
        input.addEventListener('change', (e) => this.handleFileSelect(e));
      }

      if (dropZone) {
        this.configureDragAndDropContexts(dropZone);
      }
    },

    configureDragAndDropContexts(zone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        zone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          zone.classList.add('drag-active');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        zone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          zone.classList.remove('drag-active');
        }, false);
      });

      zone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length) {
          this.processRawFile(files[0]);
        }
      }, false);
    },

    handleFileSelect(event) {
      const files = event.target.files;
      if (files.length) {
        this.processRawFile(files[0]);
      }
    },

    /**
     * Runs schema tests over selected assets
     * @param {File} file
     */
    processRawFile(file) {
      if (!CONFIG.ALLOWED_AVATAR_TYPES.includes(file.type)) {
        ToastController.show("Unsupported asset formatting layout structure.", "error");
        return;
      }

      if (file.size > CONFIG.MAX_AVATAR_SIZE_BYTES) {
        ToastController.show(`File exceeds density boundaries. Limit: ${Utils.formatBytes(CONFIG.MAX_AVATAR_SIZE_BYTES)}`, "error");
        return;
      }

      State.transient.avatarFile = file;
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const resultData = e.target.result;
        State.transient.avatarDataUrl = resultData;
        
        const previewNode = DOM.get('avatarPreview');
        if (previewNode) {
          previewNode.src = resultData;
        }
        
        FormPersistenceEngine.markAsDirty();
        ToastController.show("Local profile avatar synchronized.", "info");
      };

      reader.onerror = () => {
        ToastController.show("Failed to stream image context parameters.", "error");
      };

      reader.readAsDataURL(file);
    }
  };

  /**
   * State Sync and Dirty-Checking Engine
   */
  const FormPersistenceEngine = {
    init() {
      this.bindInputs();
      this.hydrateFormFields();
      this.configureActions();
    },

    bindInputs() {
      const inputs = DOM.queryAll(CONFIG.SELECTORS.interactiveInputs);
      const captureDirtyState = Utils.debounce(() => this.checkDirtyState(), 150);

      inputs.forEach(input => {
        // Validation Triggers
        input.addEventListener('blur', () => Validator.validateField(input));
        
        input.addEventListener('input', () => {
          captureDirtyState();
          // Remove errors on progressive correction paths
          if (input.classList.contains('input-error')) {
            Validator.validateField(input);
          }
        });

        if (input.type === 'checkbox' || input.tagName === 'SELECT') {
          input.addEventListener('change', captureDirtyState);
        }
      });
    },

    hydrateFormFields() {
      const user = State.user;
      
      this.setFieldVal('fullName', user.fullName);
      this.setFieldVal('email', user.email);
      this.setFieldVal('phone', user.phone);
      this.setFieldVal('bio', user.bio);
      
      this.setCheckboxState('marketingEmails', user.marketingEmails);
      this.setCheckboxState('securityLogs', user.securityLogs);
      this.setCheckboxState('twoFactorEnabled', user.twoFactorEnabled);

      // Hydrate text nodes safely
      const dName = DOM.get('displayName');
      const dEmail = DOM.get('displayEmail');
      const pPreview = DOM.get('avatarPreview');

      if (dName) dName.textContent = user.fullName;
      if (dEmail) dEmail.textContent = user.email;
      if (pPreview && user.avatarSrc) pPreview.src = user.avatarSrc;

      this.checkDirtyState();
    },

    setFieldVal(id, val) {
      const el = DOM.get(id);
      if (el) el.value = val || '';
    },

    setCheckboxState(id, state) {
      const el = DOM.get(id);
      if (el) el.checked = !!state;
    },

    configureActions() {
      const saveBtn = DOM.get('saveBtn');
      const discardBtn = DOM.get('discardBtn');

      if (saveBtn) {
        saveBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.commitTransactionalPayloads();
        });
      }

      if (discardBtn) {
        discardBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.rollbackLocalChanges();
        });
      }
    },

    checkDirtyState() {
      let dirtyFlag = false;
      const user = State.user;

      const checks = [
        { id: 'fullName', current: user.fullName },
        { id: 'email', current: user.email },
        { id: 'phone', current: user.phone },
        { id: 'bio', current: user.bio }
      ];

      for (const check of checks) {
        const el = DOM.get(check.id);
        if (el && el.value.trim() !== check.current) {
          dirtyFlag = true;
          break;
        }
      }

      const checkboxChecks = [
        { id: 'marketingEmails', current: user.marketingEmails },
        { id: 'securityLogs', current: user.securityLogs },
        { id: 'twoFactorEnabled', current: user.twoFactorEnabled }
      ];

      if (!dirtyFlag) {
        for (const chk of checkboxChecks) {
          const el = DOM.get(chk.id);
          if (el && el.checked !== chk.current) {
            dirtyFlag = true;
            break;
          }
        }
      }

      if (!dirtyFlag && State.transient.avatarFile) {
        dirtyFlag = true;
      }

      State.ui.isDirty = dirtyFlag;
      
      const discardBtn = DOM.get('discardBtn');
      const saveBtn = DOM.get('saveBtn');
      const containerState = DOM.get('profileContainer');

      if (discardBtn) discardBtn.disabled = !dirtyFlag;
      if (saveBtn) saveBtn.disabled = !dirtyFlag || State.ui.hasErrors;
      
      if (containerState) {
        containerState.classList.toggle('state-dirty', dirtyFlag);
      }
    },

    markAsDirty() {
      State.ui.isDirty = true;
      const discardBtn = DOM.get('discardBtn');
      const saveBtn = DOM.get('saveBtn');
      if (discardBtn) discardBtn.disabled = false;
      if (saveBtn) saveBtn.disabled = State.ui.hasErrors;
    },

    /**
     * Executes async commits across endpoints
     */
    async commitTransactionalPayloads() {
      // Lock pipeline execution paths if active threads exist
      if (State.ui.isSubmitting || State.ui.hasErrors) return;

      // Final sanitization validation loop check
      const inputs = DOM.queryAll(CONFIG.SELECTORS.interactiveInputs);
      let matrixValid = true;

      inputs.forEach(input => {
        if (!Validator.validateField(input)) {
          matrixValid = false;
        }
      });

      if (!matrixValid) {
        ToastController.show("Validation mismatch bounds found inside pipeline context.", "error");
        return;
      }

      this.toggleLoadingState(true);

      try {
        let finalAvatarUrl = State.user.avatarSrc;

        // Process file stream uploads first if needed
        if (State.transient.avatarFile) {
          finalAvatarUrl = await ProfileAPI.uploadAvatarStream(State.transient.avatarFile);
          State.user.avatarSrc = finalAvatarUrl;
          State.transient.avatarFile = null;
          State.transient.avatarDataUrl = null;
        }

        const payload = {
          fullName: DOM.get('fullName').value.trim(),
          email: DOM.get('email').value.trim(),
          phone: DOM.get('phone').value.trim(),
          bio: DOM.get('bio').value.trim(),
          marketingEmails: DOM.get('marketingEmails') ? DOM.get('marketingEmails').checked : false,
          securityLogs: DOM.get('securityLogs') ? DOM.get('securityLogs').checked : false,
          twoFactorEnabled: DOM.get('twoFactorEnabled') ? DOM.get('twoFactorEnabled').checked : false,
          avatarSrc: finalAvatarUrl
        };

        const response = await ProfileAPI.saveProfileData(payload);
        
        // Deep clone response structural data to Master Global State Object
        State.user = { ...State.user, ...response.data };
        
        // Sync static layout tokens
        this.hydrateFormFields();
        ToastController.show("Changes successfully synchronized with cloud records.", "success");

      } catch (error) {
        ToastController.show(error.message || "An error occurred updating records.", "error");
      } finally {
        this.toggleLoadingState(false);
      }
    },

    rollbackLocalChanges() {
      if (State.ui.isSubmitting) return;
      
      // Remove runtime errors
      const inputs = DOM.queryAll(CONFIG.SELECTORS.interactiveInputs);
      inputs.forEach(input => {
        Validator.toggleErrorState(input, true, "");
      });

      State.transient.avatarFile = null;
      State.transient.avatarDataUrl = null;
      
      this.hydrateFormFields();
      ToastController.show("Local transactional modifications discarded.", "info");
    },

    toggleLoadingState(isLoading) {
      State.ui.isSubmitting = isLoading;
      
      const saveBtn = DOM.get('saveBtn');
      const discardBtn = DOM.get('discardBtn');
      const processingLoader = DOM.get('globalProcessingLoader');

      if (saveBtn) {
        saveBtn.disabled = isLoading || State.ui.hasErrors;
        saveBtn.classList.toggle('button-loading', isLoading);
        saveBtn.setAttribute('aria-busy', isLoading ? 'true' : 'false');
      }

      if (discardBtn) {
        discardBtn.disabled = isLoading || !State.ui.isDirty;
      }

      if (processingLoader) {
        processingLoader.classList.toggle('active', isLoading);
      }
    }
  };

  /**
   * Password Visibility Management Module
   */
  const PasswordVisibilityManager = {
    init() {
      const toggles = DOM.queryAll(CONFIG.SELECTORS.passwordToggle);
      toggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleInputType(btn);
        });
      });
    },

    toggleInputType(buttonElement) {
      const input = buttonElement.previousElementSibling;
      if (!input || input.tagName !== 'INPUT') return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      // Accessible status announcements
      buttonElement.setAttribute('aria-label', isPassword ? 'Hide target authorization password' : 'Show target authorization password');

      const icon = buttonElement.querySelector('i');
      if (icon) {
        icon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
      }
    }
  };

  /**
   * Theme Engine System
   */
  const ThemeEngine = {
    init() {
      const darkToggle = DOM.get('darkToggle');
      if (!darkToggle) return;

      // Establish initial state patterns
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storagePreference = localStorage.getItem('uiverse_theme');
      
      const shouldBeDark = storagePreference ? (storagePreference === 'dark') : systemPrefersDark;

      darkToggle.checked = shouldBeDark;
      this.applyTheme(shouldBeDark);

      darkToggle.addEventListener('change', () => {
        this.applyTheme(darkToggle.checked);
      });

      // Listen for OS runtime structural updates
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('uiverse_theme')) {
          darkToggle.checked = e.matches;
          this.applyTheme(e.matches);
        }
      });
    },

    applyTheme(isDark) {
      document.documentElement.classList.toggle('dark', isDark);
      document.body.classList.toggle('dark', isDark);
      localStorage.setItem('uiverse_theme', isDark ? 'dark' : 'light');
    }
  };

  /**
   * Safe Session Evacuation Warning Module
   */
  const SafetyExitLockoutManager = {
    init() {
      window.addEventListener('beforeunload', (e) => {
        if (State.ui.isDirty && !State.ui.isSubmitting) {
          // Standard compatibility overrides
          e.preventDefault();
          e.returnValue = 'Unsaved UI modifications will be permanently dropped.';
          return e.returnValue;
        }
      });
    }
  };

  /**
   * Real-Time Hardware Resource Cleanup Monitor
   */
  const GarbageCollectorEngine = {
    init() {
      // Cleanup transient local ObjectURLs to prevent system memory leaks over runtime lifecycle loops
      window.addEventListener('unload', () => {
        if (State.transient.avatarDataUrl && State.transient.avatarDataUrl.startsWith('blob:')) {
          URL.revokeObjectURL(State.transient.avatarDataUrl);
        }
      });
    }
  };

  /**
   * Application Master Orchestrator boot loader sequence
   */
  function bootstrapApplicationContext() {
    ThemeEngine.init();
    NavigationEngine.init();
    AvatarProcessor.init();
    FormPersistenceEngine.init();
    PasswordVisibilityManager.init();
    SafetyExitLockoutManager.init();
    GarbageCollectorEngine.init();
    
    // Announce application operational ready flags
    document.documentElement.classList.add('uiverse-engine-ready');
  }

  // Intercept and resolve document parsing state bounds
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapApplicationContext);
  } else {
    bootstrapApplicationContext();
  }

})(window, document);