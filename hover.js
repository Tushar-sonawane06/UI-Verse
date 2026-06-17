/**
 * ============================================================================
 * UIverse Hover Effects Hub Framework v2.5.0
 * Core Client-Side Visual Matrix Interaction Engine
 * File: hover-effects.js
 * Total Structural Payload: 500+ Lines of Production-Hardened Code
 * Language: ECMAScript 6+ (Strict Specification Layer)
 * ============================================================================
 */

"use strict";

(() => {
    /**
     * ============================================================================
     * MODULE 1: MATHEMATICAL VECTOR ENGINE & LERP PHYSICS MATRIX
     * Isolated processing layer to execute custom visuals without dependency files.
     * ============================================================================
     */
    const VisualPhysicsEngine = {
        /**
         * Clamps value inputs securely between rigid floor and ceiling parameters.
         */
        clamp: (value, floor, ceiling) => Math.max(floor, Math.min(ceiling, value)),

        /**
         * Standard Linear Interpolation formula to smooth target motion parameters.
         */
        lerp: (origin, destination, weight) => origin + (destination - origin) * weight,

        /**
         * Computes exact trigonometric length coordinates between two point vectors.
         */
        getDistanceVectors: (x1, y1, x2, y2) => {
            const coordinateDifferenceX = x2 - x1;
            const coordinateDifferenceY = y2 - y1;
            return Math.sqrt(coordinateDifferenceX * coordinateDifferenceX + coordinateDifferenceY * coordinateDifferenceY);
        },

        /**
         * Converts dynamic cursor positions to precise multi-axis degree orientation ranges.
         */
        calculateRelativeOrientation: (elementBox, mouseCursorX, mouseCursorY, limitThreshold) => {
            const horizontalCenter = elementBox.width / 2;
            const verticalCenter = elementBox.height / 2;
            const deviationX = (mouseCursorX - horizontalCenter) / horizontalCenter;
            const deviationY = (mouseCursorY - verticalCenter) / verticalCenter;

            return {
                rotationX: VisualPhysicsEngine.clamp(deviationY * -limitThreshold, -limitThreshold, limitThreshold),
                rotationY: VisualPhysicsEngine.clamp(deviationX * limitThreshold, -limitThreshold, limitThreshold)
            };
        }
    };

    /**
     * ============================================================================
     * MODULE 2: APPLICATION RUNTIME ARCHITECTURE CONSTRUCTOR
     * Orchestrates structural memory lifecycle states, hardware fallback hooks, and bindings.
     * ============================================================================
     */
    class UIverseCoreApplication {
        constructor() {
            this.activeComponentsRegistry = new Map();
            this.allocatedDOMListeners = [];
            this.hardwareProfile = {
                isLowPerformanceEnvironment: false,
                touchDeviceInterfaceDetected: false
            };
            
            this.evaluateClientHardwareCapabilities();
            this.establishLifecycleOrchestration();
        }

        /**
         * Evaluates memory bandwidth limits, system save-data flags, and interfaces to throttle cycles if required.
         */
        evaluateClientHardwareCapabilities() {
            try {
                if (navigator.deviceMemory && navigator.deviceMemory < 4) {
                    this.hardwareProfile.isLowPerformanceEnvironment = true;
                }
                const cellularNetworkConnection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (cellularNetworkConnection && (cellularNetworkConnection.saveData || /2g|3g/.test(cellularNetworkConnection.effectiveType))) {
                    this.hardwareProfile.isLowPerformanceEnvironment = true;
                }
                if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                    this.hardwareProfile.touchDeviceInterfaceDetected = true;
                }
            } catch (hardwareEvaluationError) {
                console.error("Framework performance evaluation metrics restricted:", hardwareEvaluationError);
            }
        }

        /**
         * Tracks DOM compliance models before firing initial execution patterns.
         */
        establishLifecycleOrchestration() {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", () => this.executeEngineBootSequence());
            } else {
                this.executeEngineBootSequence();
            }

            window.addEventListener("unload", () => this.executeDestructiveTearDownSequence());
        }

        /**
         * Boots framework subsystems sequentially with logging markers.
         */
        executeEngineBootSequence() {
            console.log("%c⚡ UIverse V2 Framework: Spawning architecture processing layer...", "color: #eb6835; font-weight: bold; font-size: 12px;");
            
            try {
                this.deployGlobalNavigationController();
                this.deploySearchAndFilteringModule();
                this.deployCopyCodeClipboardCore();
                this.deployPerspectiveThreeDPanels();
                this.deploySpotlightGradients();
                this.deployMagneticPhysicsElements();
                this.deploySVGFluidTurbulenceEngine();
                this.deployCyberpunkGlitchTextAlgorithm();
                this.deployCanvasParticleStreamTrails();
                this.deployPrismRippleInteractionNodes();
                this.deployAccessibilityLayerEnhancements();
                
                console.log(`%c✔ UIverse Framework Pipeline Status: ONLINE. Managing ${this.activeComponentsRegistry.size} active component controllers.`, "color: #7b61ff; font-weight: bold;");
            } catch (bootSequenceException) {
                console.error("Critical fault detected within core UIverse application execution timeline:", bootSequenceException);
            }
        }

        /**
         * Registers runtime functional scopes into memory grids to isolate references securely.
         */
        registerActiveComponentScope(componentId, contextualInstance) {
            if (this.activeComponentsRegistry.has(componentId)) {
                this.purgeComponentReferenceInstance(componentId);
            }
            this.activeComponentsRegistry.set(componentId, contextualInstance);
        }

        /**
         * Clears targeted tracking objects to prevent detached DOM memory leaks.
         */
        purgeComponentReferenceInstance(componentId) {
            const registeredInstance = this.activeComponentsRegistry.get(componentId);
            if (registeredInstance && typeof registeredInstance.destroy === "function") {
                try {
                    registeredInstance.destroy();
                } catch (destructionFaultStack) {
                    console.error(`Execution collapse during instantiation release sequence on target node [${componentId}]:`, destructionFaultStack);
                }
            }
            this.activeComponentsRegistry.delete(componentId);
        }

        /**
         * Monitors events safely while stacking internal configurations for garbage collection pipelines.
         */
        bindEventTracker(targetNode, operationalEvent, programmaticCallback, situationalOptions = {}) {
            if (!targetNode) return;
            targetNode.addEventListener(operationalEvent, programmaticCallback, situationalOptions);
            this.allocatedDOMListeners.push({ targetNode, operationalEvent, programmaticCallback, situationalOptions });
        }

        /**
         * System-wide clear routine designed to sweep background memory spaces clean on unload cycles.
         */
        executeDestructiveTearDownSequence() {
            console.log("UIverse Core Framework: Commencing application clear sequence down-stream...");
            
            this.activeComponentsRegistry.forEach((instance, elementKey) => {
                this.purgeComponentReferenceInstance(elementKey);
            });
            this.activeComponentsRegistry.clear();

            this.allocatedDOMListeners.forEach(({ targetNode, operationalEvent, programmaticCallback, situationalOptions }) => {
                if (targetNode) {
                    try {
                        targetNode.removeEventListener(operationalEvent, programmaticCallback, situationalOptions);
                    } catch (listenerException) {
                        // Suppressed execution exception parameters on host environment termination
                    }
                }
            });
            this.allocatedDOMListeners = [];
        }
    }

    // Instantiating Core Process Singleton Engine Context
    const AppFrameworkCore = new UIverseCoreApplication();

    /**
     * ============================================================================
     * MODULE 3: SIDEBAR CORE INTERACTION DRAWER INTERFACE MANAGER
     * Manages global backdrop layouts, structural canvas areas, and sidebar drawers.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployGlobalNavigationController = function() {
        const DOMSidebarNode = document.getElementById("sidebar");
        const DOMBackdropOverlay = document.getElementById("sidebarBackdrop");
        if (!DOMSidebarNode) return;

        window.toggleSidebar = () => {
            const isCurrentlyActive = DOMSidebarNode.classList.toggle("active");
            if (DOMBackdropOverlay) {
                DOMBackdropOverlay.classList.toggle("active", isCurrentlyActive);
                DOMBackdropOverlay.setAttribute("aria-hidden", (!isCurrentlyActive).toString());
            }
            DOMSidebarNode.setAttribute("aria-expanded", isCurrentlyActive.toString());
        };

        const executeKeyboardEscapeClose = (e) => {
            if (e.key === "Escape" && DOMSidebarNode.classList.contains("active")) {
                window.toggleSidebar();
            }
        };

        this.bindEventTracker(document, "keydown", executeKeyboardEscapeClose);
        this.registerActiveComponentScope("global_navigation_sidebar", {
            destroy: () => document.removeEventListener("keydown", executeKeyboardEscapeClose)
        });
    };

    /**
     * ============================================================================
     * MODULE 4: DYNAMIC SEARCH BARS & CATEGORY FILTERING ALGORITM
     * Filters grid sections dynamically via string parsing and custom categorizations.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deploySearchAndFilteringModule = function() {
        const structuralSearchInputElement = document.querySelector(".hover-search input");
        const contextualFilterPillButtons = document.querySelectorAll(".hover-filters button");
        const interactiveTargetCards = document.querySelectorAll(".hover-grid .hover-card");

        if (!structuralSearchInputElement && !contextualFilterPillButtons.length) return;

        let trackingActiveCategoryToken = "all";
        let filteredSearchQueryString = "";

        const processLayoutReconciliationGrid = () => {
            requestAnimationFrame(() => {
                interactiveTargetCards.forEach(cardNode => {
                    const cardTitleNode = cardNode.querySelector(".hover-info h2");
                    const cardDescriptionNode = cardNode.querySelector(".hover-info p");
                    
                    const extractedTitleString = cardTitleNode ? cardTitleNode.textContent.toLowerCase() : "";
                    const extractedDescriptionString = cardDescriptionNode ? cardDescriptionNode.textContent.toLowerCase() : "";
                    
                    const searchConditionSatisfied = extractedTitleString.includes(filteredSearchQueryString) || extractedDescriptionString.includes(filteredSearchQueryString);
                    let categoryConditionSatisfied = trackingActiveCategoryToken === "all";

                    if (!categoryConditionSatisfied) {
                        const targetMatchCards = trackingActiveCategoryToken === "cards" && (extractedTitleString.includes("card") || extractedTitleString.includes("panel") || extractedTitleString.includes("tile"));
                        const targetMatchButtons = trackingActiveCategoryToken === "buttons" && (extractedTitleString.includes("button") || extractedTitleString.includes("pill") || extractedTitleString.includes("link") || extractedTitleString.includes("tag"));
                        const targetMatchText = trackingActiveCategoryToken === "text" && extractedTitleString.includes("text");
                        const targetMatchInteractive = trackingActiveCategoryToken === "interactive" && (extractedTitleString.includes("trail") || extractedTitleString.includes("magnetic") || extractedTitleString.includes("spotlight") || extractedTitleString.includes("orbit") || extractedTitleString.includes("wave"));
                        const targetMatchThreeD = trackingActiveCategoryToken === "3d" && extractedTitleString.includes("3d");

                        if (targetMatchCards || targetMatchButtons || targetMatchText || targetMatchInteractive || targetMatchThreeD) {
                            categoryConditionSatisfied = true;
                        }
                    }

                    if (searchConditionSatisfied && categoryConditionSatisfied) {
                        cardNode.style.display = "";
                        setTimeout(() => {
                            cardNode.style.opacity = "1";
                            cardNode.style.transform = "scale(1)";
                        }, 10);
                    } else {
                        cardNode.style.opacity = "0";
                        cardNode.style.transform = "scale(0.95)";
                        cardNode.style.display = "none";
                    }
                });
            });
        };

        if (structuralSearchInputElement) {
            this.bindEventTracker(structuralSearchInputElement, "input", (e) => {
                filteredSearchQueryString = e.target.value.toLowerCase().trim();
                processLayoutReconciliationGrid();
            });
        }

        contextualFilterPillButtons.forEach((pillButton) => {
            this.bindEventTracker(pillButton, "click", () => {
                contextualFilterPillButtons.forEach(btnReference => btnReference.classList.remove("active"));
                pillButton.classList.add("active");
                trackingActiveCategoryToken = pillButton.textContent.toLowerCase().trim();
                processLayoutReconciliationGrid();
            });
        });
    };

    /**
     * ============================================================================
     * MODULE 5: COMPONENT PREVIEW SOURCE CODE PARSER & EMBEDDED EXTRACTOR
     * Clones runtime previews, strips active layout logic scripts, and copies clean HTML.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployCopyCodeClipboardCore = function() {
        const interactionCopyButtons = document.querySelectorAll(".copy-btn");
        if (!interactionCopyButtons.length) return;

        interactionCopyButtons.forEach((copyButtonNode, executionIndex) => {
            const dataTargetIdentifier = copyButtonNode.getAttribute("data-target");
            if (!dataTargetIdentifier) return;

            const referencePreviewSourceNode = document.getElementById(dataTargetIdentifier);
            if (!referencePreviewSourceNode) return;

            const executeSourceExtractionSequence = (event) => {
                event.preventDefault();
                
                // Clone node target to process and prune operational components before copying
                const processingSandboxClone = referencePreviewSourceNode.cloneNode(true);
                const targetedInternalScriptElements = processingSandboxClone.querySelectorAll("script");
                targetedInternalScriptElements.forEach(scriptTag => scriptTag.remove());

                // Scrub dynamic canvas tags inside target nodes to avoid copying runtime traces
                const structuralCanvasElements = processingSandboxClone.querySelectorAll("canvas");
                structuralCanvasElements.forEach(activeCanvas => activeCanvas.innerHTML = "");

                let normalizedHTMLOutputCode = processingSandboxClone.innerHTML;
                
                // Format code presentation fields
                normalizedHTMLOutputCode = normalizedHTMLOutputCode.trim()
                    .replace(/&amp;/g, "&")
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">");

                navigator.clipboard.writeText(normalizedHTMLOutputCode).then(() => {
                    const historicalButtonInnerContents = copyButtonNode.innerHTML;
                    copyButtonNode.classList.add("copied");
                    copyButtonNode.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied Clean Source!</span>';
                    copyButtonNode.setAttribute("aria-live", "polite");

                    setTimeout(() => {
                        copyButtonNode.classList.remove("copied");
                        copyButtonNode.innerHTML = historicalButtonInnerContents;
                    }, 2000);
                }).catch(extractionExecutionError => {
                    console.error(`Host clipboard subsystem transaction failure within execution step [${executionIndex}]:`, extractionExecutionError);
                });
            };

            this.bindEventTracker(copyButtonNode, "click", executeSourceExtractionSequence);
            this.registerActiveComponentScope(`copy_submodule_handler_${executionIndex}`, {
                destroy: () => copyButtonNode.removeEventListener("click", executeSourceExtractionSequence)
            });
        });
    };

    /**
     * ============================================================================
     * MODULE 6: 3D PERSPECTIVE INTERPOLATION MOUSE TRACKING MATRIX (TILT TILES)
     * Tracks dynamic mouse positions to calculate multi-axis rotation matrices.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployPerspectiveThreeDPanels = function() {
        const structuralThreeDCardNodes = document.querySelectorAll("#tiltCard, #glassTiltCard");
        if (!structuralThreeDCardNodes.length) return;

        structuralThreeDCardNodes.forEach((individualThreeDCard, elementIndex) => {
            const interactiveSpecularShineLayer = individualThreeDCard.querySelector(".glass-shine");
            let structuralAnimationTickerFrame = null;

            const processPerspectiveTrackingRotation = (mouseEvent) => {
                if (structuralAnimationTickerFrame) cancelAnimationFrame(structuralAnimationTickerFrame);

                structuralAnimationTickerFrame = requestAnimationFrame(() => {
                    const boundingGeometryBox = individualThreeDCard.getBoundingClientRect();
                    const computedCursorLocationX = mouseEvent.clientX - boundingGeometryBox.left;
                    const computedCursorLocationY = mouseEvent.clientY - boundingGeometryBox.top;

                    const operationalThresholdLimit = individualThreeDCard.id === "glassTiltCard" ? 12 : 16;
                    
                    const systemRotationMatrix = VisualPhysicsEngine.calculateRelativeOrientation(
                        boundingGeometryBox, 
                        computedCursorLocationX, 
                        computedCursorLocationY, 
                        operationalThresholdLimit
                    );

                    individualThreeDCard.style.transform = `perspective(1000px) rotateX(${systemRotationMatrix.rotationX}deg) rotateY(${systemRotationMatrix.rotationY}deg) scale3d(1.03, 1.03, 1.03)`;

                    if (interactiveSpecularShineLayer) {
                        const relativePercentageCoordinateX = (computedCursorLocationX / boundingGeometryBox.width) * 100;
                        const relativePercentageCoordinateY = (computedCursorLocationY / boundingGeometryBox.height) * 100;
                        interactiveSpecularShineLayer.style.background = `radial-gradient(circle at ${relativePercentageCoordinateX}% ${relativePercentageCoordinateY}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 60%)`;
                    }
                });
            };

            const resetPerspectiveOrientationBalance = () => {
                if (structuralAnimationTickerFrame) cancelAnimationFrame(structuralAnimationTickerFrame);
                
                structuralAnimationTickerFrame = requestAnimationFrame(() => {
                    individualThreeDCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                    if (interactiveSpecularShineLayer) {
                        interactiveSpecularShineLayer.style.background = `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60%)`;
                    }
                });
            };

            this.bindEventTracker(individualThreeDCard, "mousemove", processPerspectiveTrackingRotation);
            this.bindEventTracker(individualThreeDCard, "mouseleave", resetPerspectiveOrientationBalance);
            
            this.registerActiveComponentScope(`three_d_tilt_component_${elementIndex}`, {
                destroy: () => {
                    cancelAnimationFrame(structuralAnimationTickerFrame);
                }
            });
        });
    };

    /**
     * ============================================================================
     * MODULE 7: RADIAL SPOTLIGHT HOVER MATRIX INJECTOR
     * Passes raw relative coordinate structures straight into runtime CSS properties.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deploySpotlightGradients = function() {
        const coreSpotlightCardNode = document.getElementById("spotlightCard");
        if (!coreSpotlightCardNode) return;

        let spotlightAnimationFrameReference = null;

        const processSpotlightTrackingMatrix = (e) => {
            if (spotlightAnimationFrameReference) cancelAnimationFrame(spotlightAnimationFrameReference);

            spotlightAnimationFrameReference = requestAnimationFrame(() => {
                const targetAreaGeometry = coreSpotlightCardNode.getBoundingClientRect();
                const coordinateOffsetPositionX = e.clientX - targetAreaGeometry.left;
                const coordinateOffsetPositionY = e.clientY - targetAreaGeometry.top;

                coreSpotlightCardNode.style.setProperty("--x", `${coordinateOffsetPositionX}px`);
                coreSpotlightCardNode.style.setProperty("--y", `${coordinateOffsetPositionY}px`);
            });
        };

        this.bindEventTracker(coreSpotlightCardNode, "mousemove", processSpotlightTrackingMatrix);
        this.registerActiveComponentScope("spotlight_tracking_system", {
            destroy: () => cancelAnimationFrame(spotlightAnimationFrameReference)
        });
    };

    /**
     * ============================================================================
     * MODULE 8: MAGNETIC ATTRACTION CORE ELEMENT DAMPENER
     * Shifts elements with dynamic spring-dampened interpolation maps.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployMagneticPhysicsElements = function() {
        const structuralMagneticTargetNode = document.getElementById("magneticBtn");
        if (!structuralMagneticTargetNode) return;

        const internalTextLabelNode = structuralMagneticTargetNode.querySelector(".btn-text");
        let activePhysicsTickFrame = null;

        const initiateMagneticAttractionInterp = (e) => {
            if (activePhysicsTickFrame) cancelAnimationFrame(activePhysicsTickFrame);

            activePhysicsTickFrame = requestAnimationFrame(() => {
                const structuralTargetGeometry = structuralMagneticTargetNode.getBoundingClientRect();
                
                const alignmentDeltaX = e.clientX - structuralTargetGeometry.left - structuralTargetGeometry.width / 2;
                const alignmentDeltaY = e.clientY - structuralTargetGeometry.top - structuralTargetGeometry.height / 2;

                const hostDampeningScaleCoefficient = 0.32;
                const interiorLabelDampeningCoefficient = 0.12;

                structuralMagneticTargetNode.style.transform = `translate(${alignmentDeltaX * hostDampeningScaleCoefficient}px, ${alignmentDeltaY * hostDampeningScaleCoefficient}px)`;
                if (internalTextLabelNode) {
                    internalTextLabelNode.style.transform = `translate(${alignmentDeltaX * interiorLabelDampeningCoefficient}px, ${alignmentDeltaY * interiorLabelDampeningCoefficient}px)`;
                }
            });
        };

        const executeMagneticRestorationLoop = () => {
            if (activePhysicsTickFrame) cancelAnimationFrame(activePhysicsTickFrame);

            activePhysicsTickFrame = requestAnimationFrame(() => {
                structuralMagneticTargetNode.style.transform = "translate(0px, 0px)";
                if (internalTextLabelNode) {
                    internalTextLabelNode.style.transform = "translate(0px, 0px)";
                }
            });
        };

        this.bindEventTracker(structuralMagneticTargetNode, "mousemove", initiateMagneticAttractionInterp);
        this.bindEventTracker(structuralMagneticTargetNode, "mouseleave", executeMagneticRestorationLoop);
        
        this.registerActiveComponentScope("magnetic_physics_module", {
            destroy: () => cancelAnimationFrame(activePhysicsTickFrame)
        });
    };

    /**
     * ============================================================================
     * MODULE 9: SVG TURBULENCE LIQUID DISTORTION LOOP
     * Steps displacement variables inside standard requestAnimationFrame blocks.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deploySVGFluidTurbulenceEngine = function() {
        const interactiveLiquidCardTarget = document.querySelector("#preview-10 .liquid-card");
        const operationalDisplacementFilterMap = document.querySelector("#preview-10 .disp-map");
        if (!interactiveLiquidCardTarget || !operationalDisplacementFilterMap) return;

        let activeDisplacementTickFrame = null;
        let ongoingScaleMetricsRegister = 0;
        let computationalTargetScaleBoundary = 0;
        const matrixFluidDampeningConstant = 0.075;

        const executeFluidInterpolationLoop = () => {
            ongoingScaleMetricsRegister += (computationalTargetScaleBoundary - ongoingScaleMetricsRegister) * matrixFluidDampeningConstant;
            operationalDisplacementFilterMap.setAttribute("scale", ongoingScaleMetricsRegister.toFixed(3));
            
            if (Math.abs(computationalTargetScaleBoundary - ongoingScaleMetricsRegister) > 0.005) {
                activeDisplacementTickFrame = requestAnimationFrame(executeFluidInterpolationLoop);
            } else {
                ongoingScaleMetricsRegister = computationalTargetScaleBoundary;
                operationalDisplacementFilterMap.setAttribute("scale", ongoingScaleMetricsRegister.toString());
                activeDisplacementTickFrame = null;
            }
        };

        const commandFluidScaleUpdate = (targetScaleBoundary) => {
            computationalTargetScaleBoundary = targetScaleBoundary;
            if (!activeDisplacementTickFrame) {
                activeDisplacementTickFrame = requestAnimationFrame(executeFluidInterpolationLoop);
            }
        };

        this.bindEventTracker(interactiveLiquidCardTarget, "mouseenter", () => commandFluidScaleUpdate(26));
        this.bindEventTracker(interactiveLiquidCardTarget, "mouseleave", () => commandFluidScaleUpdate(0));
        
        this.registerActiveComponentScope("svg_liquid_turbulence_system", {
            destroy: () => {
                if (activeDisplacementTickFrame) cancelAnimationFrame(activeDisplacementTickFrame);
            }
        });
    };

    /**
     * ============================================================================
     * MODULE 10: RENDERLESS SCRAMBLE ENGINE (CYBERPUNK GLITCH ALGORITHM)
     * Slices and replaces strings with randomly processed cryptographic characters.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployCyberpunkGlitchTextAlgorithm = function() {
        const structuralGlitchTargetNodes = document.querySelectorAll(".glitch-text");
        if (!structuralGlitchTargetNodes.length) return;

        const cipherGlyphMatrixPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@*•§ΔΩ🎛️⚡";

        structuralGlitchTargetNodes.forEach((glitchTextNode, structuralIndex) => {
            const historicalBaseTextContent = glitchTextNode.getAttribute("data-text") || glitchTextNode.textContent;
            let tacticalScrambleIntervalReference = null;

            const triggerScrambleSequenceIteration = () => {
                let textProcessingProgressStep = 0;
                clearInterval(tacticalScrambleIntervalReference);

                tacticalScrambleIntervalReference = setInterval(() => {
                    glitchTextNode.textContent = historicalBaseTextContent
                        .split("")
                        .map((characterToken, mapIndex) => {
                            if (mapIndex < textProcessingProgressStep) {
                                return historicalBaseTextContent[mapIndex];
                            }
                            return cipherGlyphMatrixPool[Math.floor(Math.random() * cipherGlyphMatrixPool.length)];
                        })
                        .join("");

                    if (textProcessingProgressStep >= historicalBaseTextContent.length) {
                        clearInterval(tacticalScrambleIntervalReference);
                        glitchTextNode.textContent = historicalBaseTextContent;
                    }
                    textProcessingProgressStep += 1 / 2.5;
                }, 25);
            };

            this.bindEventTracker(glitchTextNode, "mouseenter", triggerScrambleSequenceIteration);
            this.registerActiveComponentScope(`cyberpunk_text_glitch_${structuralIndex}`, {
                destroy: () => clearInterval(tacticalScrambleIntervalReference)
            });
        });
    };

    /**
     * ============================================================================
     * MODULE 11: CANVAS PARTICLE TRAIL CONTEXT GRAPHICS ENGINE
     * Paints fluid particle traces over localized coordinate fields.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployCanvasParticleStreamTrails = function() {
        const operationalBoxFrameNode = document.getElementById("trailCardBox");
        const particleHostCanvasNode = document.getElementById("trailCanvas");
        if (!operationalBoxFrameNode || !particleHostCanvasNode) return;

        const primaryCanvasContext2D = particleHostCanvasNode.getContext("2d");
        let activeLiveParticleArray = [];
        let canvasRenderPipelineFrame = null;

        const synchronizedCanvasBoundaryAllocation = () => {
            particleHostCanvasNode.width = operationalBoxFrameNode.clientWidth;
            particleHostCanvasNode.height = operationalBoxFrameNode.clientHeight;
        };
        synchronizedCanvasBoundaryAllocation();

        const applicationResizeObserver = new ResizeObserver(() => synchronizedCanvasBoundaryAllocation());
        applicationResizeObserver.observe(operationalBoxFrameNode);

        /**
         * Particle Generation Structure Model
         */
        class VectorStreamParticle {
            constructor(spawnPointX, spawnPointY) {
                this.positionVectorX = spawnPointX;
                this.positionVectorY = spawnPointY;
                this.individualRadius = Math.random() * 2.5 + 1.0;
                this.trajectoryVelocityX = (Math.random() - 0.5) * 1.6;
                this.trajectoryVelocityY = (Math.random() - 0.5) * 1.6;
                this.currentAlphaOpacity = 1.0;
                
                const vibrantColorSwatches = ["#a855f7", "#06b6d4", "#ec4899", "#7b61ff"];
                this.assignedColorNode = vibrantColorSwatches[Math.floor(Math.random() * vibrantColorSwatches.length)];
            }

            advancePhysicsStep() {
                this.positionVectorX += this.trajectoryVelocityX;
                this.positionVectorY += this.trajectoryVelocityY;
                this.currentAlphaOpacity -= 0.022; // Particle decay lifespan parameter
            }

            renderToCanvasContext(renderingContext) {
                renderingContext.save();
                renderingContext.globalAlpha = this.currentAlphaOpacity;
                renderingContext.beginPath();
                renderingContext.arc(this.positionVectorX, this.positionVectorY, this.individualRadius, 0, Math.PI * 2);
                renderingContext.fillStyle = this.assignedColorNode;
                
                if (!AppFrameworkCore.hardwareProfile.isLowPerformanceEnvironment) {
                    renderingContext.shadowBlur = 8;
                    renderingContext.shadowColor = this.assignedColorNode;
                }
                
                renderingContext.fill();
                renderingContext.restore();
            }
        }

        const executeCanvasRenderPipelineLoop = () => {
            primaryCanvasContext2D.clearRect(0, 0, particleHostCanvasNode.width, particleHostCanvasNode.height);

            for (let particleIndex = 0; particleIndex < activeLiveParticleArray.length; particleIndex++) {
                const particleInstance = activeLiveParticleArray[particleIndex];
                particleInstance.advancePhysicsStep();
                particleInstance.renderToCanvasContext(primaryCanvasContext2D);

                if (particleInstance.currentAlphaOpacity <= 0) {
                    activeLiveParticleArray.splice(particleIndex, 1);
                    particleIndex--;
                }
            }

            canvasRenderPipelineFrame = requestAnimationFrame(executeCanvasRenderPipelineLoop);
        };

        const captureInterfaceMovementInput = (mouseMoveEvent) => {
            const alignmentBoundingBoxGeometry = operationalBoxFrameNode.getBoundingClientRect();
            const processTargetCoordinateX = mouseMoveEvent.clientX - alignmentBoundingBoxGeometry.left;
            const processTargetCoordinateY = mouseMoveEvent.clientY - alignmentBoundingBoxGeometry.top;

            const variableDensityLimit = AppFrameworkCore.hardwareProfile.isLowPerformanceEnvironment ? 1 : 2;
            for (let generatorIndex = 0; generatorIndex < variableDensityLimit; generatorIndex++) {
                activeLiveParticleArray.push(new VectorStreamParticle(processTargetCoordinateX, processTargetCoordinateY));
            }
        };

        this.bindEventTracker(operationalBoxFrameNode, "mousemove", captureInterfaceMovementInput);
        canvasRenderPipelineFrame = requestAnimationFrame(executeCanvasRenderPipelineLoop);

        this.registerActiveComponentScope("canvas_particle_trail_pipeline", {
            destroy: () => {
                cancelAnimationFrame(canvasRenderPipelineFrame);
                applicationResizeObserver.disconnect();
            }
        });
    };

    /**
     * ============================================================================
     * MODULE 12: PRISM SHOCKWAVE SURFACE RIPPLE LAYER ENGINE
     * Dynamically injects geometric ripple expanders directly over target vector hits.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployPrismRippleInteractionNodes = function() {
        const interactivePrismButtonElements = document.querySelectorAll(".prism-btn");
        if (!interactivePrismButtonElements.length) return;

        interactivePrismButtonElements.forEach((prismButtonNode, compilationIndex) => {
            const processShockwaveRippleGeneration = (clickEvent) => {
                const dedicatedRippleTargetContainer = prismButtonNode.querySelector(".prism-btn-ripple") || prismButtonNode;
                const containerGeometryBoundaries = prismButtonNode.getBoundingClientRect();
                
                const processOffsetClickX = clickEvent.clientX - containerGeometryBoundaries.left;
                const processOffsetClickY = clickEvent.clientY - containerGeometryBoundaries.top;

                const inlineRippleVisualNode = document.createElement("span");
                inlineRippleVisualNode.className = "prism-ripple-runtime-element";
                
                // Construct styles for dynamic particle expansion loops
                Object.assign(inlineRippleVisualNode.style, {
                    position: "absolute",
                    left: `${processOffsetClickX}px`,
                    top: `${processOffsetClickY}px`,
                    width: "2px",
                    height: "2px",
                    background: "rgba(255, 255, 255, 0.45)",
                    borderRadius: "50%",
                    transform: "scale(0)",
                    animation: "prismBlurExpandAnimation 0.75s cubic-bezier(0.0, 0.7, 0.1, 1) forwards",
                    pointerEvents: "none"
                });

                dedicatedRippleTargetContainer.appendChild(inlineRippleVisualNode);

                setTimeout(() => {
                    inlineRippleVisualNode.remove();
                }, 800);
            };

            this.bindEventTracker(prismButtonNode, "click", processShockwaveRippleGeneration);
        });

        if (!document.getElementById("uiverse-prism-keyframes-stylesheet")) {
            const architecturalRuntimeStyleSheet = document.createElement("style");
            architecturalRuntimeStyleSheet.id = "uiverse-prism-keyframes-stylesheet";
            architecturalRuntimeStyleSheet.textContent = `
                @keyframes prismBlurExpandAnimation {
                    to {
                        transform: scale(350);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(architecturalRuntimeStyleSheet);
        }
    };

    /**
     * ============================================================================
     * MODULE 13: FOCUS LAYER ACCESSIBILITY ENHANCEMENT ENGINE ($A11Y$)
     * Injects assistive markup, roles, and focus outlines onto interactive tiles.
     * ============================================================================
     */
    UIverseCoreApplication.prototype.deployAccessibilityLayerEnhancements = function() {
        const comprehensiveInteractiveTargetNodes = document.querySelectorAll(
            '.hover-card, .float-item, .glow-pill, .neumorphic-btn, .img-zoom-card, .liquid-card, .flip-tile'
        );

        if (!comprehensiveInteractiveTargetNodes.length) return;

        comprehensiveInteractiveTargetNodes.forEach((assistiveTargetNode) => {
            if (!assistiveTargetNode.hasAttribute("tabindex")) {
                assistiveTargetNode.setAttribute("tabindex", "0");
            }
            if (!assistiveTargetNode.hasAttribute("role")) {
                assistiveTargetNode.setAttribute("role", "button");
            }

            const processAssistiveKeyboardActivation = (keyboardEvent) => {
                if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                    keyboardEvent.preventDefault();
                    assistiveTargetNode.click();
                }
            };

            this.bindEventTracker(assistiveTargetNode, "keydown", processAssistiveKeyboardActivation);

            this.bindEventTracker(assistiveTargetNode, "focus", () => {
                assistiveTargetNode.style.outline = "2px solid #7b61ff";
                assistiveTargetNode.style.outlineOffset = "4px";
                assistiveTargetNode.style.transition = "outline-offset 0.15s ease, outline 0.15s ease";
            });

            this.bindEventTracker(assistiveTargetNode, "blur", () => {
                assistiveTargetNode.style.outline = "";
                assistiveTargetNode.style.outlineOffset = "";
            });
        });
    };

})();
/* ============================================================
   THEME STYLING LOGIC (theme.js)
   - Checks and applies dark/light mode immediately (pre-render)
   - Binds event listeners to theme toggles on DOM ready
   - Ensures visual synchronization of all toggles on the page
   ============================================================ */

// 1. Immediate execution to prevent theme flashing
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // Default to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
})();

// 2. Binding events when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtnIds = ['darkModeToggle', 'theme-toggle', 'themeToggle'];
  const toggleClasses = ['theme-toggle', 'theme-toggle-sidebar', 'theme-toggle-floating'];

  // Helper to collect all toggle buttons on the page
  function getAllToggles() {
    const toggles = new Set();
    
    // Add by IDs
    toggleBtnIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) toggles.add(el);
    });

    // Add by classes
    toggleClasses.forEach(className => {
      document.querySelectorAll('.' + className).forEach(el => toggles.add(el));
    });

    return Array.from(toggles);
  }

  // Helper to update a button's visual state (text and icon)
  function updateToggleVisual(btn) {
    if (!btn) return;
    const isDark = document.body.classList.contains('dark-mode');
    
    // Check if it's a sidebar toggle or text-based toggle
    if (btn.classList.contains('theme-toggle-sidebar') || btn.innerText.includes('Theme')) {
      btn.innerHTML = isDark 
        ? '<i class="fa-solid fa-sun"></i> Light Theme' 
        : '<i class="fa-solid fa-moon"></i> Dark Theme';
    } else {
      // Icon-only toggle (like in navbar or floating)
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      } else {
        btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

  // Sync visual state of all toggles on page load
  function syncAllToggles() {
    getAllToggles().forEach(btn => updateToggleVisual(btn));
  }

  // Handle theme toggle action
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Sync all toggles on the page
    syncAllToggles();

    // Fire custom event so page components can adapt if needed
    const event = new CustomEvent('themeChanged', { detail: { theme: isDark ? 'dark' : 'light' } });
    document.dispatchEvent(event);
  }

  // Dynamic self-healing: if no toggle exists on the page, create one
  let pageToggles = getAllToggles();
  if (pageToggles.length === 0) {
    const navRight = document.querySelector('.nav-right');
    const navbar = document.querySelector('.navbar') || document.querySelector('header.navbar') || document.querySelector('nav.navbar');
    const sidebarList = document.querySelector('.sidebar ul') || document.querySelector('.sidebar-nav ul');
    const sidebar = document.querySelector('.sidebar') || document.querySelector('aside.sidebar');

    if (navRight) {
      // Insert in navbar right section
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navRight.appendChild(btn);
    } else if (navbar) {
      // Append to navbar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.style.marginLeft = 'auto';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navbar.appendChild(btn);
    } else if (sidebarList) {
      // Append as sidebar link item
      const li = document.createElement('li');
      li.className = 'theme-toggle-item';
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      li.appendChild(btn);
      sidebarList.appendChild(li);
    } else if (sidebar) {
      // Append directly to sidebar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      sidebar.appendChild(btn);
    } else {
      // Floating button in corner
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle theme-toggle-floating';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      document.body.appendChild(btn);
    }
    
    // Refresh toggle list
    pageToggles = getAllToggles();
  }

  // Attach click listener to all buttons
  pageToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
    updateToggleVisual(btn);
  });
});