/**
 * ==========================================================================
 * UI-VERSE CIRCULAR FAB SPEED DIAL CORE ENGINE
 * ==========================================================================
 * Production-Grade Micro-Interaction Runtime Pipeline for NSoC'26.
 * Designed with defensive variable scope handling, memory cache barriers,
 * and semantic coordinate geometry projection matrices.
 *
 * Architecture Modules:
 * 1. Immediate Invoked Function Expression (IIFE) Enclosure Shield
 * 2. Central Framework Registry State-Cache Maps
 * 3. Radial Configuration Vector Geometry Tables
 * 4. Micro-Drawer Layout Animation Engine
 * 5. Clipboard Text Extraction Data Pipeline
 * 6. State-Persisted Interface Workspace Switcher
 * 7. Active Component Pipeline: Multi-Angle Coordinate Projector
 * 8. Central Event Broker & Delegated Execution Dispatch
 * 9. Accessibility (a11y) Web Layer: Keyboard Focus Loop Shifter
 * 10. High-Density Layout Viewport Toast Notification Module
 * ==========================================================================
 */

"use strict";

(function (window, document) {

    // ==========================================================================
    // 2. CENTRAL FRAMEWORK REGISTRY STATE-CACHE MAPS
    // ==========================================================================
    const Dial_Lab_Cache = {
        toastCount: 0,
        maxToastsAllowed: 4,
        storageThemeToken: "uiverse-dial-lab-theme",
        activeFocusEnclosure: null,
        executionLog: new Map(),
        animationFrames: new Set(),
        registeredDials: new Map()
    };

    // ==========================================================================
    // 3. RADIAL CONFIGURATION VECTOR GEOMETRY TABLES
    // ==========================================================================
    const SpeedDialGeometryMap = {
        'dial-v1-housing': { radius: 76, startAngle: -90, endAngle: 0, mode: 'arc' },
        'dial-v3-housing': { radius: 82, startAngle: -180, endAngle: 0, mode: 'arc' },
        'dial-v4-housing': { radius: 86, startAngle: -90, endAngle: 270, mode: 'circle' },
        'dial-v5-housing': { radius: 88, startAngle: -180, endAngle: -90, mode: 'arc' },
        'dial-v7-housing': { radius: 82, startAngle: -150, endAngle: -100, mode: 'arc' },
        'dial-v8-housing': { radius: 96, startAngle: -90, endAngle: 0, mode: 'elastic' }
    };

    /**
     * Core Application Pipeline Orchestrator Entry Point
     */
    const bootstrapHubPipeline = () => {
        console.log("⚙️ Circular FAB Menu Web Pipeline Initializing...");

        try {
            WorkspaceThemeController.SynchronizeCanvasMode();
            PlaygroundDrawerController.RegisterStructuralListeners();
            ClipboardCaptureService.BindTextExtract Pipelines();
            SpeedDialFunctionalCore.OrchestrateActiveElements();
            CentralEventBroker.InitializeGlobalDelegation();
            AccessibilityEngine.AttachCoreTrapListeners();

            executeFrameworkLogRegistry("Engine Pipeline Deployment Complete", "system");
        } catch (initializationFault) {
            console.error("Fatal failure encountered during UI-Verse application setup:", initializationFault);
        }
    };

    /**
     * Internal Logger for operational monitoring across pipeline cycles
     */
    const executeFrameworkLogRegistry = (message, contextualModule) => {
        const structuralTimestamp = new Date().toISOString();
        Dial_Lab_Cache.executionLog.set(structuralTimestamp, {
            module: contextualModule,
            detail: message
        });
    };

    // ==========================================================================
    // 4. MICRO-DRAWER LAYOUT ANIMATION ENGINE
    // ==========================================================================
    const PlaygroundDrawerController = {
        Selectors: {
            inspectTrigger: '.code-inspect-trigger',
            cardContainer: '.showcase-card',
            codeDrawer: '.drawer-code-container'
        },

        RegisterStructuralListeners: function () {
            const structuralTriggers = document.querySelectorAll(this.Selectors.inspectTrigger);

            structuralTriggers.forEach(triggerNode => {
                triggerNode.addEventListener('click', (event) => {
                    event.preventDefault();
                    this.ToggleDrawerViewport(triggerNode);
                });

                triggerNode.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        this.ToggleDrawerViewport(triggerNode);
                    }
                });
            });
        },

        ToggleDrawerViewport: function (buttonElement) {
            const referenceCard = buttonElement.closest(this.Selectors.cardContainer);
            if (!referenceCard) return;

            const targetDrawer = referenceCard.querySelector(this.Selectors.codeDrawer);
            if (!targetDrawer) return;

            const isClosedState = !targetDrawer.classList.contains('expanded');

            if (isClosedState) {
                targetDrawer.classList.add('expanded');
                buttonElement.classList.add('active');
                buttonElement.setAttribute('aria-expanded', 'true');

                const innerGlyph = buttonElement.querySelector('i');
                if (innerGlyph) innerGlyph.className = 'fa-solid fa-folder-open';
                buttonElement.innerHTML = `<i class="fa-solid fa-folder-open"></i> Hide Spec`;
                
                executeFrameworkLogRegistry("Drawer viewport expanded for custom component code validation.", "PlaygroundDrawerController");
            } else {
                targetDrawer.classList.remove('expanded');
                buttonElement.classList.remove('active');
                buttonElement.setAttribute('aria-expanded', 'false');

                const innerGlyph = buttonElement.querySelector('i');
                if (innerGlyph) innerGlyph.className = 'fa-solid fa-code';
                buttonElement.innerHTML = `<i class="fa-solid fa-code"></i> Code`;
            }
        }
    };

    // ==========================================================================
    // 5. CLIPBOARD TEXT EXTRACTION DATA PIPELINE
    // ==========================================================================
    const ClipboardCaptureService = {
        SelectorAnchor: '.copy-absolute-trigger',

        BindTextExtractPipelines: function () {
            const absoluteTriggers = document.querySelectorAll(this.SelectorAnchor);

            absoluteTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => this.ProcessStringExtraction(trigger));
            });
        },

        ProcessStringExtraction: function (buttonNode) {
            const parentContext = buttonNode.parentElement;
            if (!parentContext) return;

            const standardCodeNode = parentContext.querySelector('code');
            if (!standardCodeNode) return;

            const targetedRawText = standardCodeNode.innerText || standardCodeNode.textContent;
            const fullyFilteredText = targetedRawText.replace(/\\n/g, '\n').trim();

            if (!navigator.clipboard) {
                this.DeployLegacyFallbackEngine(fullyFilteredText, buttonNode);
                return;
            }

            navigator.clipboard.writeText(fullyFilteredText)
                .then(() => {
                    this.CommitSuccessVisualChanges(buttonNode);
                })
                .catch(streamFault => {
                    console.error("Native system async clipboard engine encountered context drop:", streamFault);
                    injectToastAlertNotification("System security layer blocked async clipboard interaction", "danger");
                });
        },

        DeployLegacyFallbackEngine: function (filteredTextContent, fallbackNativeButton) {
            const temporaryTextNode = document.createElement('textarea');
            temporaryTextNode.value = filteredTextContent;
            
            // Absolute positioning structures offscreen to dodge browser scrolling bugs
            temporaryTextNode.style.position = 'fixed';
            temporaryTextNode.style.left = '-999999px';
            temporaryTextNode.style.top = '-999999px';
            temporaryTextNode.setAttribute('readonly', '');
            
            document.body.appendChild(temporaryTextNode);
            temporaryTextNode.focus();
            temporaryTextNode.select();

            try {
                const operationalStatus = document.execCommand('copy');
                if (operationalStatus) {
                    this.CommitSuccessVisualChanges(fallbackNativeButton);
                } else {
                    injectToastAlertNotification("Legacy layout memory stream allocation fault encountered", "danger");
                }
            } catch (legacyFault) {
                console.error("Critical failure fallback parsing configuration constraints:", legacyFault);
            }

            document.body.removeChild(temporaryTextNode);
        },

        CommitSuccessVisualChanges: function (buttonElement) {
            const historicalLabelString = buttonElement.textContent || "Copy Code";
            buttonElement.textContent = 'Copied!';
            buttonElement.style.backgroundColor = 'var(--success)';
            buttonElement.style.borderColor = 'var(--success)';

            injectToastAlertNotification('Source text block pulled into local operational clipboard frames.', 'success');

            setTimeout(() => {
                buttonElement.textContent = historicalLabelString;
                buttonElement.style.backgroundColor = '';
                buttonElement.style.borderColor = '';
            }, 2200);
        }
    };

    // ==========================================================================
    // 6. STATE-PERSISTED INTERFACE WORKSPACE SWITCHER
    // ==========================================================================
    const WorkspaceThemeController = {
        TriggerSelector: '#workspaceThemeTrigger',

        SynchronizeCanvasMode: function () {
            const masterTriggerButton = document.querySelector(this.TriggerSelector);
            if (!masterTriggerButton) return;

            const structuredHistoricalPreference = localStorage.getItem(Dial_Lab_Cache.storageThemeToken);
            const physicalHardwarePrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (structuredHistoricalPreference === 'dark' || (!structuredHistoricalPreference && physicalHardwarePrefersDark)) {
                this.EnforceHighDensityDarkTheme(masterTriggerButton, false);
            } else {
                this.EnforceStandardLightTheme(masterTriggerButton, false);
            }

            masterTriggerButton.addEventListener('click', () => this.InvertWorkspaceTheme(masterTriggerButton));
        },

        InvertWorkspaceTheme: function (activeButtonNode) {
            const isCanvasCurrentlyDark = document.body.getAttribute('data-theme') === 'dark';
            if (isCanvasCurrentlyDark) {
                this.EnforceStandardLightTheme(activeButtonNode, true);
            } else {
                this.EnforceHighDensityDarkTheme(activeButtonNode, true);
            }
        },

        EnforceHighDensityDarkTheme: function (buttonNode, broadcastToastRequired) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem(Dial_Lab_Cache.storageThemeToken, 'dark');
            buttonNode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            buttonNode.setAttribute('aria-label', 'Invert layout system schema configurations to light frames');

            if (broadcastToastRequired) {
                injectToastAlertNotification('Interface style engine successfully updated to high-density Dark Contrast layout profiles.', 'success');
            }
        },

        EnforceStandardLightTheme: function (buttonNode, broadcastToastRequired) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem(Dial_Lab_Cache.storageThemeToken, 'light');
            buttonNode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            buttonNode.setAttribute('aria-label', 'Invert layout system schema configurations to dark frames');

            if (broadcastToastRequired) {
                injectToastAlertNotification('Interface style engine successfully updated to standard light canvas profiles.', 'success');
            }
        }
    };

    // ==========================================================================
    // 7. ACTIVE COMPONENT PIPELINE: MULTI-ANGLE COORDINATE PROJECTOR
    // ==========================================================================
    const SpeedDialFunctionalCore = {
        Selectors: {
            globalHousings: '.uv-speed-dial-housing',
            baseTriggers: '.uv-fab-base, .uv-fab-neu-base',
            satelliteNodes: '.uv-fab-item-node, .uv-fab-neu-node, .uv-fab-chip-node, .uv-fab-glass-node'
        },

        OrchestrateActiveElements: function () {
            const coreHousings = document.querySelectorAll(this.Selectors.globalHousings);

            coreHousings.forEach(housingNode => {
                let uniqueIdentifierClass = null;
                
                // Track down structural identity assignments
                housingNode.classList.forEach(classItem => {
                    if (SpeedDialGeometryMap[classItem]) {
                        uniqueIdentifierClass = classItem;
                    }
                });

                if (uniqueIdentifierClass) {
                    this.BindGeometricCalculationsToDOM(housingNode, SpeedDialGeometryMap[uniqueIdentifierClass]);
                }
            });
        },

        BindGeometricCalculationsToDOM: function (housingElement, polarConfigObject) {
            const triggeringBase = housingElement.querySelector(this.Selectors.baseTriggers);
            const childNodesList = housingElement.querySelectorAll(this.Selectors.satelliteNodes);

            if (!triggeringBase || childNodesList.length === 0) return;

            // Track internal registration profile reference pointers
            Dial_Lab_Cache.registeredDials.set(housingElement, {
                trigger: triggeringBase,
                children: childNodesList,
                geometry: polarConfigObject
            });

            triggeringBase.addEventListener('click', (event) => {
                event.stopPropagation();
                this.ToggleSpeedDialStateChain(housingElement, triggeringBase, childNodesList, polarConfigObject);
            });
        },

        ToggleSpeedDialStateChain: function (housing, baseButton, children, geometryConfig) {
            const isCurrentlyActive = housing.classList.contains('active');
            
            // Minimize all sibling elements across the document canvas view space
            this.CollapseAllActiveDialsExcludingTarget(housing);

            if (!isCurrentlyActive) {
                housing.classList.add('active');
                baseButton.setAttribute('aria-expanded', 'true');
                this.ProjectPolarMathematicalVectors(children, geometryConfig);
                injectToastAlertNotification('Action grid speed matrix shifted to open execution frame.', 'success');
            } else {
                this.MinimizeTargetDialHousingFrame(housing, baseButton, children);
            }
        },

        ProjectPolarMathematicalVectors: function (nodeCollection, configurationProfile) {
            const calculatedTotalNodes = nodeCollection.length;
            if (calculatedTotalNodes === 0) return;

            const radialSpanRadius = configurationProfile.radius;
            const angularStartPoint = configurationProfile.startAngle;
            const angularEndPoint = configurationProfile.endAngle;
            const operationalMode = configurationProfile.mode;

            nodeCollection.forEach((node, positionIndex) => {
                let variableAngleStep = angularStartPoint;

                if (calculatedTotalNodes > 1) {
                    // Avoid full loop overlapping computations on incomplete polar curves
                    const segmentDivisor = (operationalMode === 'circle') ? calculatedTotalNodes : (calculatedTotalNodes - 1);
                    variableAngleStep = angularStartPoint + (positionIndex * ((angularEndPoint - angularStartPoint) / segmentDivisor));
                }

                // Math conversion mappings to resolve coordinate offsets
                const translatedRadianMetric = variableAngleStep * (Math.PI / 180);
                const coordinateDeltaX = Math.round(radialSpanRadius * Math.cos(translatedRadianMetric));
                const coordinateDeltaY = Math.round(radialSpanRadius * Math.sin(translatedRadianMetric));

                // Process transformation states
                if (!node.classList.contains('node-v2-1') && !node.classList.contains('node-v2-2') && !node.classList.contains('node-v2-3') &&
                    !node.closest('.dial-v6-housing')) {
                    
                    const renderingPipelineTask = () => {
                        node.style.transform = `translate(${coordinateDeltaX}px, ${coordinateDeltaY}px) scale(1)`;
                    };
                    
                    const executionId = requestAnimationFrame(renderingPipelineTask);
                    Dial_Lab_Cache.animationFrames.add(executionId);
                }
            });
        },

        MinimizeTargetDialHousingFrame: function (housingNode, baseBtn, activeChildrenCollection) {
            housingNode.classList.remove('active');
            baseBtn.setAttribute('aria-expanded', 'false');

            activeChildrenCollection.forEach(childNode => {
                if (!childNode.classList.contains('node-v2-1') && !childNode.classList.contains('node-v2-2') && !childNode.classList.contains('node-v2-3') &&
                    !childNode.closest('.dial-v6-housing')) {
                    
                    const resetRenderingTask = () => {
                        childNode.style.transform = '';
                    };
                    requestAnimationFrame(resetRenderingTask);
                }
            });
        },

        CollapseAllActiveDialsExcludingTarget: function (whitelistedTargetHousing) {
            Dial_Lab_Cache.registeredDials.forEach((structuralConfig, historicalHousingNode) => {
                if (historicalHousingNode !== whitelistedTargetHousing && historicalHousingNode.classList.contains('active')) {
                    this.MinimizeTargetDialHousingFrame(historicalHousingNode, structuralConfig.trigger, structuralConfig.children);
                }
            });
        }
    };

    // ==========================================================================
    // 8. CENTRAL EVENT BROKER & DELEGATED EXECUTION DISPATCH
    // ==========================================================================
    const CentralEventBroker = {
        InitializeGlobalDelegation: function () {
            // Document background layout boundary monitoring task
            document.addEventListener('click', () => {
                SpeedDialFunctionalCore.CollapseAllActiveDialsExcludingTarget(null);
            });

            // Delegate intercept metrics across child runtime action slots
            document.body.addEventListener('click', (eventInstance) => {
                const targetNodeReference = eventInstance.target.closest('.uv-fab-item-node, .uv-fab-neu-node, .uv-fab-chip-node, .uv-fab-glass-node');
                if (targetNodeReference) {
                    eventInstance.stopPropagation();
                    this.ExecuteDelegatedSatelliteCommand(targetNodeReference);
                }
            });
        },

        ExecuteDelegatedSatelliteCommand: function (capturedNodeElement) {
            const theoreticalTitleLabel = capturedNodeElement.getAttribute('title') || 
                                          capturedNodeElement.innerText.trim() || 
                                          "Isolated Target Satellite Node Slot";
            
            injectToastAlertNotification(`Operational Action Context Sent: ${theoreticalTitleLabel}`, 'success');
            executeFrameworkLogRegistry(`Satellite action element successfully selected: [${theoreticalTitleLabel}]`, "CentralEventBroker");

            // Close containing housing grid automatically following step complete confirmation
            const enclosingHousing = capturedNodeElement.closest('.uv-speed-dial-housing');
            if (enclosingHousing) {
                const dialProfile = Dial_Lab_Cache.registeredDials.get(enclosingHousing);
                if (dialProfile) {
                    SpeedDialFunctionalCore.MinimizeTargetDialHousingFrame(enclosingHousing, dialProfile.trigger, dialProfile.children);
                }
            }
        }
    };

    // ==========================================================================
    // 9. ACCESSIBILITY (A11Y) WEB LAYER: KEYBOARD FOCUS LOOP SHIFTER
    // ==========================================================================
    const AccessibilityEngine = {
        QueryFocusableString: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',

        AttachCoreTrapListeners: function () {
            window.addEventListener('keydown', (eventContext) => {
                if (eventContext.key === 'Tab' && Dial_Lab_Cache.activeFocusEnclosure) {
                    this.EvaluateFocusBoundaries(eventContext, Dial_Lab_Cache.activeFocusEnclosure);
                }
                
                // Global access escape latch intercept mechanics override
                if (eventContext.key === 'Escape') {
                    SpeedDialFunctionalCore.CollapseAllActiveDialsExcludingTarget(null);
                    injectToastAlertNotification('Active contextual interface grids collapsed via escape sequence.');
                }
            });
        },

        LockViewportFocusToNode: function (domWrapperNode) {
            if (!domWrapperNode) return;
            Dial_Lab_Cache.activeFocusEnclosure = domWrapperNode;
        },

        ClearActiveTrapBoundaries: function () {
            Dial_Lab_Cache.activeFocusEnclosure = null;
        },

        EvaluateFocusBoundaries: function (event, elementBox) {
            const matchingFocusNodes = elementBox.querySelectorAll(this.QueryFocusableString);
            if (matchingFocusNodes.length === 0) return;

            const initialFocusBoundaryNode = matchingFocusNodes[0];
            const terminationFocusBoundaryNode = matchingFocusNodes[matchingFocusNodes.length - 1];

            if (event.shiftKey) {
                if (document.activeElement === initialFocusBoundaryNode) {
                    terminationFocusBoundaryNode.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === terminationFocusBoundaryNode) {
                    initialFocusBoundaryNode.focus();
                    event.preventDefault();
                }
            }
        }
    };

    // ==========================================================================
    // 10. HIGH-DENSITY LAYOUT VIEWPORT TOAST NOTIFICATION MODULE
    // ==========================================================================
    const injectToastAlertNotification = (alertTextMessage, aestheticThemeVariant = "success") => {
        const structuralAlertOutputHub = document.getElementById('appNotificationHub');
        if (!structuralAlertOutputHub) return;

        // Verify active capacity parameters are not exceeded
        if (Dial_Lab_Cache.toastCount >= Dial_Lab_Cache.maxToastsAllowed) {
            const stagnantToastElement = structuralAlertOutputHub.querySelector('.toast-popup-card');
            if (stagnantToastElement) stagnantToastElement.remove();
            Dial_Lab_Cache.toastCount = Math.max(0, Dial_Lab_Cache.toastCount - 1);
        }

        const notificationCard = document.createElement('div');
        notificationCard.className = `toast-popup-card variant-profile-${aestheticThemeVariant}`;
        notificationCard.setAttribute('role', 'status');
        notificationCard.setAttribute('aria-live', 'polite');

        // Map icons dynamically depending on evaluation strings
        let functionalGlyphString = 'fa-circle-check';
        if (aestheticThemeVariant === 'danger') functionalGlyphString = 'fa-circle-xmark';
        if (aestheticThemeVariant === 'warning') functionalGlyphString = 'fa-triangle-exclamation';

        notificationCard.innerHTML = `
            <i class="fa-solid ${functionalGlyphString}" aria-hidden="true"></i>
            <span class="toast-internal-text-frame">${alertTextMessage}</span>
        `;

        structuralAlertOutputHub.appendChild(notificationCard);
        Dial_Lab_Cache.toastCount++;

        const triggerEvacuationSequence = () => {
            notificationCard.style.opacity = '0';
            notificationCard.style.transform = 'translateY(20px) scale(0.95)';
            notificationCard.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            notificationCard.addEventListener('transitionend', function operationalCleanupCallback() {
                notificationCard.removeEventListener('transitionend', operationalCleanupCallback);
                notificationCard.remove();
                Dial_Lab_Cache.toastCount = Math.max(0, Dial_Lab_Cache.toastCount - 1);
            });
        };

        const operationalAutoTimerId = setTimeout(triggerEvacuationSequence, 3800);

        // Immediate user manual override handling logic
        notificationCard.addEventListener('click', () => {
            clearTimeout(operationalAutoTimerId);
            triggerEvacuationSequence();
        });
    };

    // Exposed interfaces for local workflow tooling hooks and test suits
    window.UI_Verse_SpeedDial_Framework = {
        Kickstart: bootstrapHubPipeline,
        PushToast: injectToastAlertNotification,
        A11yController: AccessibilityEngine,
        FetchStateCache: () => Object.freeze({ ...Dial_Lab_Cache })
    };

    // Confirm lifecycle frame status to safely evaluate execution targets
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapHubPipeline);
    } else {
        bootstrapHubPipeline();
    }

})(window, document);
/* ==========================================================================
   END OF FILE CODE - UI-VERSE 2026
   ========================================================================== */