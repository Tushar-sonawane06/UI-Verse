

/**
 * ==========================================================================
 * UI-VERSE INTERACTIVE COMPONENT HUB ENGINE
 * ==========================================================================
 * Core Architecture Scripting Pipeline for NSoC'26 Open Source Sandbox.
 * Focuses on execution safety, structural reusability, and clean state mutations.
 *
 * Modules Included:
 * 1. Core Framework App Bootstrapper
 * 2. Expandable Playground Drawer Engine
 * 3. Advanced Clipboard Extraction Stream
 * 4. State-Persisted Visual Theme Synchronizer
 * 5. Component Pipeline: Input Validation & String Masking
 * 6. Component Pipeline: Reactive Micro-Counter Badges
 * 7. Component Pipeline: Interactive Accordions & Fluent Tabs
 * 8. Accessibility (a11y) Layer: Keyboard Focus Trap System
 * 9. Centralized UI Toast Alert Dispatcher
 * ==========================================================================
 */

"use strict";

(function (window, document) {

    // Global Registry Cache for tracking cross-component state transitions
    const UI_Verse_Cache = {
        activeToasts: 0,
        maxAllowedToasts: 5,
        themeKey: "uiverse-preferred-theme",
        activeFocusTrap: null,
        componentMetrics: new Map()
    };

    /**
     * ==========================================================================
     * 1. CORE APPARATUS INITIALIZATION BOOTSTRAPPER
     * ==========================================================================
     */
    const initAppPipeline = () => {
        console.log("🚀 UI-Verse Core Runtime Pipeline initializing...");
        
        // Initialize Core System Modules
        try {
            ThemeEngine.SyncSystemState();
            PlaygroundDrawer.AttachListeners();
            ClipboardService.InitializeBindings();
            ComponentFormModule.RegisterControls();
            ComponentCounterModule.AttachEvents();
            ComponentFeedbackModule.BindGlobalDOM();
            AccessibilityEngine.ListenForGlobalKeyEvents();
            
            triggerToastNotification("Workspace Canvas Ready", "success");
        } catch (pipelineError) {
            console.error("Critical failure during UI-Verse orchestration boot:", pipelineError);
        }
    };

    /**
     * ==========================================================================
     * 2. EXPANDABLE PLAYGROUND DRAWER ENGINE
     * ==========================================================================
     */
    const PlaygroundDrawer = {
        Selectors: {
            triggerBtn: '.toggle-code-btn',
            cardShell: '.showcase-card',
            drawerContainer: '.code-container'
        },

        AttachListeners: function() {
            const triggers = document.querySelectorAll(this.Selectors.triggerBtn);
            
            triggers.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    this.ToggleDrawerState(button);
                });
                
                // Add keyboard accessibility support (Enter/Space triggers)
                button.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        this.ToggleDrawerState(button);
                    }
                });
            });
        },

        ToggleDrawerState: function(buttonElement) {
            const cardShell = buttonElement.closest(this.Selectors.cardShell);
            if (!cardShell) return;

            const drawer = cardShell.querySelector(this.Selectors.drawerContainer);
            if (!drawer) return;

            const isExpanding = !drawer.classList.contains('expanded');
            
            // Execute State Shifts
            if (isExpanding) {
                this.Expand(drawer, buttonElement);
            } else {
                this.Collapse(drawer, buttonElement);
            }
        },

        Expand: function(drawerElement, triggerButton) {
            drawerElement.classList.add('expanded');
            triggerButton.classList.add('active');
            triggerButton.setAttribute('aria-expanded', 'true');
            
            // Update semantic button inner elements safely
            const iconNode = triggerButton.querySelector('i');
            if (iconNode) {
                iconNode.className = 'fa-solid fa-folder-open';
            }
            
            // Log local tracking metrics
            UI_Verse_Cache.componentMetrics.set(drawerElement, { openedAt: Date.now() });
        },

        Collapse: function(drawerElement, triggerButton) {
            drawerElement.classList.remove('expanded');
            triggerButton.classList.remove('active');
            triggerButton.setAttribute('aria-expanded', 'false');
            
            const iconNode = triggerButton.querySelector('i');
            if (iconNode) {
                iconNode.className = 'fa-solid fa-code';
            }
        }
    };

    /**
     * ==========================================================================
     * 3. ADVANCED CLIPBOARD EXTRACTION STREAM
     * ==========================================================================
     */
    const ClipboardService = {
        Selector: '.copy-code-floating',

        InitializeBindings: function() {
            const copyButtons = document.querySelectorAll(this.Selector);
            
            copyButtons.forEach(btn => {
                btn.addEventListener('click', () => this.ExecuteExtraction(btn));
            });
        },

        ExecuteExtraction: function(buttonElement) {
            const parentBlock = buttonElement.parentElement;
            if (!parentBlock) return;

            const codeTarget = parentBlock.querySelector('code');
            if (!codeTarget) return;

            // Sanitize injection characters, line endings, and double backslashes
            const rawContent = codeTarget.innerText || codeTarget.textContent;
            const fullyCleanedString = rawContent.replace(/\\n/g, '\n').trim();

            if (!navigator.clipboard) {
                this.FallbackCopyEngine(fullyCleanedString, buttonElement);
                return;
            }

            navigator.clipboard.writeText(fullyCleanedString)
                .then(() => {
                    this.TriggerSuccessState(buttonElement);
                })
                .catch(err => {
                    console.error("Clipboard operational stream blocked:", err);
                    triggerToastNotification("Clipboard access denied by runtime engine", "danger");
                });
        },

        FallbackCopyEngine: function(textToCopy, nativeButton) {
            const textAreaFallback = document.createElement("textarea");
            textAreaFallback.value = textToCopy;
            
            // Lock positioning indicators offscreen to prevent UI jumping profiles
            textAreaFallback.style.position = "fixed";
            textAreaFallback.style.left = "-999999px";
            textAreaFallback.style.top = "-999999px";
            document.body.appendChild(textAreaFallback);
            
            textAreaFallback.focus();
            textAreaFallback.select();

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    this.TriggerSuccessState(nativeButton);
                } else {
                    triggerToastNotification("Fallback extraction sequence failed", "danger");
                }
            } catch (err) {
                console.error("Critical architecture fallback constraint tripped:", err);
            }

            document.body.removeChild(textAreaFallback);
        },

        TriggerSuccessState: function(btn) {
            const pristineText = btn.textContent || "Copy";
            btn.textContent = 'Copied!';
            btn.style.backgroundColor = 'var(--success)';
            btn.style.borderColor = 'var(--success)';
            
            triggerToastNotification('Code block extracted to system clipboard!', 'success');
            
            setTimeout(() => {
                btn.textContent = pristineText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
            }, 2000);
        }
    };

    /**
     * ==========================================================================
     * 4. STATE-PERSISTED VISUAL THEME SYNCHRONIZER
     * ==========================================================================
     */
    const ThemeEngine = {
        Selector: '#themeToggle',

        SyncSystemState: function() {
            const themeButton = document.querySelector(this.Selector);
            if (!themeButton) return;

            // Determine historical baseline preferences
            const cachedPreference = localStorage.getItem(UI_Verse_Cache.themeKey);
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (cachedPreference === 'dark' || (!cachedPreference && systemPrefersDark)) {
                this.ApplyDarkTheme(themeButton, false);
            } else {
                this.ApplyLightTheme(themeButton, false);
            }

            // Bind native UI activation sequences
            themeButton.addEventListener('click', () => this.InvertThemeState(themeButton));
        },

        InvertThemeState: function(btnElement) {
            const isCurrentlyDark = document.body.getAttribute('data-theme') === 'dark';
            if (isCurrentlyDark) {
                this.ApplyLightTheme(btnElement, true);
            } else {
                this.ApplyDarkTheme(btnElement, true);
            }
        },

        ApplyDarkTheme: function(btn, triggerAlert) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem(UI_Verse_Cache.themeKey, 'dark');
            btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            btn.setAttribute('aria-label', 'Switch to light layout theme');
            
            if (triggerAlert) {
                triggerToastNotification('Visual scheme switched to Dark Mode', 'success');
            }
        },

        ApplyLightTheme: function(btn, triggerAlert) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem(UI_Verse_Cache.themeKey, 'light');
            btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            btn.setAttribute('aria-label', 'Switch to dark layout theme');
            
            if (triggerAlert) {
                triggerToastNotification('Visual scheme switched to Light Mode', 'success');
            }
        }
    };

    /**
     * ==========================================================================
     * 5. COMPONENT PIPELINE: INPUT VALIDATION & STRING MASKING
     * ==========================================================================
     */
    const ComponentFormModule = {
        Bindings: {
            toggleSelector: '#passwordToggleBtn',
            inputSelector: '#passwordNode',
            switchSelector: '#systemToggleNode'
        },

        RegisterControls: function() {
            const toggleElement = document.querySelector(this.Bindings.toggleSelector);
            const inputField = document.querySelector(this.Bindings.inputSelector);
            
            if (toggleElement && inputField) {
                toggleElement.addEventListener('click', () => {
                    this.MutateMaskingState(inputField, toggleElement);
                });
            }

            const functionalSwitch = document.querySelector(this.Bindings.switchSelector);
            if (functionalSwitch) {
                functionalSwitch.addEventListener('change', (event) => {
                    const status = event.target.checked ? "Activated" : "Terminated";
                    triggerToastNotification(`Component Flag Updated: ${status}`, 'success');
                });
            }
        },

        MutateMaskingState: function(input, triggerBtn) {
            const activeType = input.getAttribute('type');
            
            if (activeType === 'password') {
                input.setAttribute('type', 'text');
                triggerBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
                triggerBtn.setAttribute('aria-label', 'Hide raw text password contents');
            } else {
                input.setAttribute('type', 'password');
                triggerBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
                triggerBtn.setAttribute('aria-label', 'Show hidden input password chars');
            }
        }
    };

    /**
     * ==========================================================================
     * 6. COMPONENT PIPELINE: REACTIVE MICRO-COUNTER BADGES
     * ==========================================================================
     */
    const ComponentCounterModule = {
        Config: {
            badgeAnchor: '#badgeTriggerNode',
            counterNode: '#counterNumber'
        },

        AttachEvents: function() {
            const anchor = document.querySelector(this.Config.badgeAnchor);
            const textDisplay = document.querySelector(this.Config.counterNode);
            
            if (!anchor || !textDisplay) return;

            let runtimeValue = 0;

            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                runtimeValue++;
                
                // Mutate the DOM surface safely
                textDisplay.textContent = runtimeValue > 99 ? "99+" : runtimeValue;
                
                // Trigger scaling keyframes transformations natively via resetting class strings
                textDisplay.classList.remove('uv-badge-pop');
                void textDisplay.offsetWidth; // Force CSS layout reflow architecture calculation
                textDisplay.classList.add('uv-badge-pop');

                triggerToastNotification(`Event registered. Internal count: ${runtimeValue}`, 'success');
            });
        }
    };

    /**
     * ==========================================================================
     * 7. COMPONENT PIPELINE: INTERACTIVE ACCORDIONS & FLUENT TABS
     * ==========================================================================
     */
    const ComponentFeedbackModule = {
        BindGlobalDOM: function() {
            // General capture structure for handling micro component layouts across standard frameworks
            document.body.addEventListener('click', (e) => {
                const targetAccordionHeader = e.target.closest('.uv-accordion-header');
                if (targetAccordionHeader) {
                    this.ProcessAccordionToggle(targetAccordionHeader);
                }
            });
        },

        ProcessAccordionToggle: function(headerElement) {
            const wrapper = headerElement.parentElement;
            if (!wrapper) return;

            const bodyContent = wrapper.querySelector('.uv-accordion-body');
            const iconIndicator = headerElement.querySelector('.uv-accordion-icon');
            
            const isOpen = wrapper.classList.contains('open');

            if (isOpen) {
                wrapper.classList.remove('open');
                if (bodyContent) bodyContent.style.maxHeight = null;
                if (iconIndicator) iconIndicator.style.transform = 'rotate(0deg)';
            } else {
                wrapper.classList.add('open');
                if (bodyContent) bodyContent.style.maxHeight = bodyContent.scrollHeight + "px";
                if (iconIndicator) iconIndicator.style.transform = 'rotate(180deg)';
            }
        }
    };

    /**
     * ==========================================================================
     * 8. ACCESSIBILITY (A11Y) LAYER: KEYBOARD FOCUS TRAP SYSTEM
     * ==========================================================================
     */
    const AccessibilityEngine = {
        FocusableElementsString: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',

        ListenForGlobalKeyEvents: function() {
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Tab' && UI_Verse_Cache.activeFocusTrap) {
                    this.EnforceTrapConstraints(e, UI_Verse_Cache.activeFocusTrap);
                }
            });
        },

        RegisterTrap: function(domContainerElement) {
            if (!domContainerElement) return;
            UI_Verse_Cache.activeFocusTrap = domContainerElement;
        },

        ReleaseTrap: function() {
            UI_Verse_Cache.activeFocusTrap = null;
        },

        EnforceTrapConstraints: function(eventInstance, trapNode) {
            const focusNodes = trapNode.querySelectorAll(this.FocusableElementsString);
            if (focusNodes.length === 0) return;

            const baseElement = focusNodes[0];
            const ceilingElement = focusNodes[focusNodes.length - 1];

            if (eventInstance.shiftKey) {
                if (document.activeElement === baseElement) {
                    ceilingElement.focus();
                    eventInstance.preventDefault();
                }
            } else {
                if (document.activeElement === ceilingElement) {
                    baseElement.focus();
                    eventInstance.preventDefault();
                }
            }
        }
    };

    /**
     * ==========================================================================
     * 9. CENTRALIZED UI TOAST ALERT DISPATCHER
     * ==========================================================================
     */
    const triggerToastNotification = (messageText, semanticType = "success") => {
        const rootContainer = document.getElementById('toastContainer');
        if (!rootContainer) return;

        // Throttle flood limits
        if (UI_Verse_Cache.activeToasts >= UI_Verse_Cache.maxAllowedToasts) {
            const oldestToast = rootContainer.querySelector('.toast-popup');
            if (oldestToast) oldestToast.remove();
            UI_Verse_Cache.activeToasts--;
        }

        const toastNode = document.createElement('div');
        toastNode.className = `toast-popup toast-${semanticType}`;
        toastNode.setAttribute('role', 'alert');
        toastNode.setAttribute('aria-live', 'assertive');

        // Resolve graphical context glyph map profiles
        let glyphString = 'fa-circle-check';
        if (semanticType === 'warning') glyphString = 'fa-triangle-exclamation';
        if (semanticType === 'danger') glyphString = 'fa-circle-xmark';

        toastNode.innerHTML = `
            <i class="fa-solid ${glyphString}" aria-hidden="true"></i>
            <span class="toast-message-text">${messageText}</span>
        `;

        rootContainer.appendChild(toastNode);
        UI_Verse_Cache.activeToasts++;

        // Lifecycle destruction pipeline processing loop
        const initiateEvacuationSequence = () => {
            toastNode.style.opacity = '0';
            toastNode.style.transform = 'translateY(25px) scale(0.95)';
            toastNode.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            toastNode.addEventListener('transitionend', function disposalCallback() {
                toastNode.removeEventListener('transitionend', disposalCallback);
                toastNode.remove();
                UI_Verse_Cache.activeToasts = Math.max(0, UI_Verse_Cache.activeToasts - 1);
            });
        };

        // Automatic scheduling sequence handles
        const processingTimerId = setTimeout(initiateEvacuationSequence, 3500);

        // Allow clear intercept metrics behaviors on explicit user touch definitions
        toastNode.addEventListener('click', () => {
            clearTimeout(processingTimerId);
            initiateEvacuationSequence();
        });
    };

    // Export internal framework structures directly onto scope visibility frames
    window.UI_Verse_Framework = {
        Boot: initAppPipeline,
        DispatchToast: triggerToastNotification,
        TrapAccess: AccessibilityEngine,
        Cache: UI_Verse_Cache
    };

    // Dispatch system core initialization when document markers resolve fully
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAppPipeline);
    } else {
        initAppPipeline();
    }

})(window, document);
/* ==========================================================================
   END OF ENGINE PIPELINE BUILD - UI-VERSE 2026
   ========================================================================== */