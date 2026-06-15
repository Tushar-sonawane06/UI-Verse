(function () {
    "use strict";

    // --- Global Application State Frame ---
    const State = {
        category: "all",
        searchQuery: "",
        layoutMode: "grid",
        theme: "dark",
        customSlidersArray: [],
        focusedIndex: -1
    };

    // --- Static DOM Reference Cache Registry ---
    const DOM = {
        globalSearch: document.getElementById("uiv-global-search"),
        categoryMenuItems: document.querySelectorAll("#uiv-category-menu .uiv-menu-item"),
        catalogGrid: document.getElementById("uiv-catalog-grid"),
        componentNodes: document.querySelectorAll(".uiv-component-card-node"),
        themeToggleBtn: document.getElementById("uiv-theme-toggle"),
        layoutGridBtn: document.getElementById("uiv-layout-grid-trigger"),
        layoutListBtn: document.getElementById("uiv-layout-list-trigger"),
        catalogSummaryText: document.getElementById("uiv-catalog-summary-text"),
        toastDock: document.getElementById("uiv-toast-dock"),
        
        // Workbench Engine DOM Element Connections
        workbenchClose: document.getElementById("uiv-workbench-close"),
        workbenchPanel: document.getElementById("uiv-dynamic-workbench"),
        creatorTriggerBtn: document.getElementById("uiv-creator-trigger-btn"),
        newSliderName: document.getElementById("uiv-new-slider-name"),
        newSliderStyle: document.getElementById("uiv-new-slider-style"),
        newSliderMax: document.getElementById("uiv-new-slider-max"),
        newSliderSubmit: document.getElementById("uiv-new-slider-submit"),
        sandboxRuntimeTarget: document.getElementById("uiv-sandbox-runtime-target"),
        sandboxEmptyPrompt: document.getElementById("uiv-sandbox-empty-prompt"),
        
        // Dynamic Metric Trackers
        countAll: document.getElementById("count-all"),
        countMinimal: document.getElementById("count-minimal"),
        countVfx: document.getElementById("count-vfx"),
        countMulti: document.getElementById("count-multi"),
        countFunctional: document.getElementById("count-functional"),
        statsTotalPreviews: document.getElementById("stats-total-previews"),
        statsDynamicNodes: document.getElementById("stats-dynamic-nodes"),
        scrollTarget: document.getElementById("uiv-scroll-target"),
        heroBrowse: document.getElementById("uiv-hero-action-browse"),
        heroDocs: document.getElementById("uiv-hero-action-docs")
    };

    // ==========================================================================
    // NOTIFICATION PIPELINE ENGINE (TOAST HUB)
    // ==========================================================================
    const ToastHub = {
        trigger: function (messageString) {
            if (!DOM.toastDock) return;
            const toastNode = document.createElement("div");
            toastNode.className = "uiv-system-toast-node";
            toastNode.innerHTML = `<i class="fas fa-sliders-h" style="color: var(--uiv-primary); margin-right: 10px;"></i> <span>${messageString}</span>`;
            
            DOM.toastDock.appendChild(toastNode);
            
            setTimeout(() => {
                toastNode.style.opacity = "0";
                toastNode.style.transform = "translateY(12px)";
                toastNode.style.transition = "all 0.2s ease-out";
                setTimeout(() => { toastNode.remove(); }, 200);
            }, 2500);
        }
    };

    // ==========================================================================
    // SYSTEM FILTERING & TAXONOMY TRACKING METRICS
    // ==========================================================================
    const MetricEngine = {
        syncSidebarStatistics: function () {
            let minimalStatic = 0, vfxStatic = 0, multiStatic = 0, functionalStatic = 0;
            const preRenderedCards = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node");
            
            preRenderedCards.forEach(card => {
                const categoryToken = card.getAttribute("data-category");
                if (categoryToken === "minimal") minimalStatic++;
                if (categoryToken === "vfx") vfxStatic++;
                if (categoryToken === "multi") multiStatic++;
                if (categoryToken === "functional") functionalStatic++;
            });

            let minimalDynamic = 0, vfxDynamic = 0, multiDynamic = 0, functionalDynamic = 0;
            State.customSlidersArray.forEach(slider => {
                if (slider.assignedCategory === "minimal") minimalDynamic++;
                if (slider.assignedCategory === "vfx") vfxDynamic++;
                if (slider.assignedCategory === "multi") multiDynamic++;
                if (slider.assignedCategory === "functional") functionalDynamic++;
            });

            const collectiveAll = minimalStatic + vfxStatic + multiStatic + functionalStatic + State.customSlidersArray.length;

            if (DOM.countAll) DOM.countAll.textContent = collectiveAll;
            if (DOM.countMinimal) DOM.countMinimal.textContent = minimalStatic + minimalDynamic;
            if (DOM.countVfx) DOM.countVfx.textContent = vfxStatic + vfxDynamic;
            if (DOM.countMulti) DOM.countMulti.textContent = multiStatic + multiDynamic;
            if (DOM.countFunctional) DOM.countFunctional.textContent = functionalStatic + functionalDynamic;

            if (DOM.statsTotalPreviews) DOM.statsTotalPreviews.textContent = collectiveAll;
            if (DOM.statsDynamicNodes) DOM.statsDynamicNodes.textContent = State.customSlidersArray.length;
        },

        evaluateVisibilityFilters: function () {
            const currentQuery = State.searchQuery.toLowerCase().trim();
            const chosenCategory = State.category;
            let activeVisiblesCount = 0;

            // Handle standard statically rendered cards
            const staticCards = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node");
            staticCards.forEach(card => {
                const nodeCat = card.getAttribute("data-category");
                const nodeTags = card.getAttribute("data-tags").toLowerCase();
                const nodeTitle = card.querySelector(".uiv-node-title").textContent.toLowerCase();

                const matchedCategory = (chosenCategory === "all" || nodeCat === chosenCategory);
                const matchedSearch = (nodeTitle.includes(currentQuery) || nodeTags.includes(currentQuery));

                if (matchedCategory && matchedSearch) {
                    card.style.display = "block";
                    activeVisiblesCount++;
                } else {
                    card.style.display = "none";
                }
            });

            // Handle dynamically generated workspace cards
            const dynamicCards = document.querySelectorAll("#uiv-sandbox-runtime-target .uiv-component-card-node");
            dynamicCards.forEach(card => {
                const nodeCat = card.getAttribute("data-category");
                const nodeTitle = card.querySelector(".uiv-node-title").textContent.toLowerCase();

                const matchedCategory = (chosenCategory === "all" || nodeCat === chosenCategory);
                const matchedSearch = nodeTitle.includes(currentQuery);

                if (matchedCategory && matchedSearch) {
                    card.style.display = "block";
                    activeVisiblesCount++;
                } else {
                    card.style.display = "none";
                }
            });

            if (DOM.catalogSummaryText) {
                DOM.catalogSummaryText.textContent = `Displaying ${activeVisiblesCount} slider track configurations inside standard viewports`;
            }
        },

        refreshTrackBackgroundFill: function (inputElement) {
            if (!inputElement || inputElement.classList.contains("uiv-slider-gradient-magma") || inputElement.classList.contains("uiv-slider-premium-gold")) return;
            
            const valueMin = inputElement.min ? parseFloat(inputElement.min) : 0;
            const valueMax = inputElement.max ? parseFloat(inputElement.max) : 100;
            const valueCurrent = inputElement.value ? parseFloat(inputElement.value) : 0;
            
            const rawPercentage = ((valueCurrent - valueMin) / (valueMax - valueMin)) * 100;
            
            if (inputElement.classList.contains("uiv-slider-filled-track")) {
                inputElement.style.background = `linear-gradient(to right, rgb(0, 123, 255) 0%, rgb(0, 123, 255) ${rawPercentage}%, rgb(46, 46, 56) ${rawPercentage}%, rgb(46, 46, 56) 100%)`;
            }
        }
    };

    // ==========================================================================
    // MEMORY EXTRACTION PIPELINE (CLIPBOARD CONTROLLER)
    // ==========================================================================
    const ClipboardController = {
        extractTextToSystemMemory: function (stringData) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(stringData).then(() => {
                    ToastHub.trigger("Copied syntax implementation framework package.");
                }).catch(() => {
                    this.triggerTextareaFallbackAllocation(stringData);
                });
            } else {
                this.triggerTextareaFallbackAllocation(stringData);
            }
        },

        triggerTextareaFallbackAllocation: function (text) {
            const contextTextarea = document.createElement("textarea");
            contextTextarea.value = text;
            contextTextarea.style.position = "fixed"; contextTextarea.style.opacity = "0";
            document.body.appendChild(contextTextarea);
            contextTextarea.focus(); contextTextarea.select();
            try {
                document.execCommand("copy");
                ToastHub.trigger("Extracted source block to clipboard registry.");
            } catch (err) {
                console.error("Memory layout pipeline capture aborted", err);
            }
            document.body.removeChild(contextTextarea);
        }
    };

    // ==========================================================================
    // DYNAMIC RUNTIME COMPONENT FACTORY ENGINE
    // ==========================================================================
    const RuntimeFactory = {
        saveTrackManifestToRegistry: function () {
            localStorage.setItem("uiv-slider-persistence-payload", JSON.stringify(State.customSlidersArray));
        },

        loadTrackManifestFromRegistry: function () {
            const rawPayloadString = localStorage.getItem("uiv-slider-persistence-payload");
            if (rawPayloadString) {
                try {
                    State.customSlidersArray = JSON.parse(rawPayloadString);
                    this.renderActiveArrayToSandboxZone();
                } catch (e) {
                    console.error("Persisted cache payload extraction cycle failed", e);
                }
            }
        },

        generateSliderInstanceNode: function () {
            if (!DOM.newSliderName) return;
            const clearTitle = DOM.newSliderName.value.trim();
            if (!clearTitle) {
                ToastHub.trigger("Validation Error: Input label string parameter empty.");
                return;
            }

            const activeStyleToken = DOM.newSliderStyle.value;
            const maximumLimitValue = DOM.newSliderMax.value;
            
            let deducedCategory = "minimal";
            if (activeStyleToken.includes("cyan") || activeStyleToken.includes("magma")) deducedCategory = "vfx";

            const generationID = "range-node-" + Date.now();
            const synthesizedObject = {
                id: generationID,
                title: clearTitle,
                skinClass: activeStyleToken,
                maxLimit: maximumLimitValue,
                assignedCategory: deducedCategory
            };

            State.customSlidersArray.push(synthesizedObject);
            this.saveTrackManifestToRegistry();
            this.renderActiveArrayToSandboxZone();
            
            DOM.newSliderName.value = ""; // Clear parameters field fields
            ToastHub.trigger(`Synthesized custom element track [${clearTitle}] to canvas.`);
            MetricEngine.syncSidebarStatistics();
            MetricEngine.evaluateVisibilityFilters();
        },

        evictSliderInstanceNode: function (nodeID) {
            State.customSlidersArray = State.customSlidersArray.filter(item => item.id !== nodeID);
            this.saveTrackManifestToRegistry();
            this.renderActiveArrayToSandboxZone();
            ToastHub.trigger("Evicted custom node asset template array item.");
            MetricEngine.syncSidebarStatistics();
            MetricEngine.evaluateVisibilityFilters();
        },

        renderActiveArrayToSandboxZone: function () {
            if (!DOM.sandboxRuntimeTarget || !DOM.sandboxEmptyPrompt) return;
            
            // Wipe standard arrays before iteration rendering sets run
            const presentDynamicCards = DOM.sandboxRuntimeTarget.querySelectorAll(".uiv-component-card-node");
            presentDynamicCards.forEach(c => c.remove());

            if (State.customSlidersArray.length === 0) {
                DOM.sandboxEmptyPrompt.style.display = "block";
                return;
            }

            DOM.sandboxEmptyPrompt.style.display = "none";

            State.customSlidersArray.forEach(data => {
                const targetArticleNode = document.createElement("article");
                targetArticleNode.className = "uiv-component-card-node";
                targetArticleNode.setAttribute("data-id", data.id);
                targetArticleNode.setAttribute("data-category", data.assignedCategory);

                targetArticleNode.innerHTML = `
                    <div class="uiv-node-card-header">
                        <div class="uiv-node-title-group">
                            <h4 class="uiv-node-title">Dynamic Module: ${data.title}</h4>
                            <span class="uiv-node-meta-badge uiv-badge-functional">Runtime Synthesis</span>
                        </div>
                        <div class="uiv-node-action-cluster">
                            <button class="uiv-node-btn uiv-trash-destruction-trigger" title="Evict model definition from system viewport"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <p class="uiv-node-description-text">Synthesized range instance tracking bounds mapped up to ${data.maxLimit} fine calibration points.</p>
                    <div class="uiv-node-live-preview-box">
                        <div class="uiv-slider-wrapper-box">
                            <input type="range" class="uiv-input-range-native ${data.skinClass}" min="0" max="${data.maxLimit}" value="${Math.round(data.maxLimit / 2)}">
                            <span class="uiv-slider-live-value-output">${Math.round(data.maxLimit / 2)}</span>
                        </div>
                    </div>
                `;

                // Wire numerical runtime value rendering connections
                const internalRangeNode = targetArticleNode.querySelector('input[type="range"]');
                const internalOutputSpan = targetArticleNode.querySelector(".uiv-slider-live-value-output");
                
                if (internalRangeNode && internalOutputSpan) {
                    MetricEngine.refreshTrackBackgroundFill(internalRangeNode);
                    internalRangeNode.addEventListener("input", function (e) {
                        internalOutputSpan.textContent = e.target.value;
                        MetricEngine.refreshTrackBackgroundFill(e.target);
                    });
                }

                // Bind functional trash disposal action listeners
                const deleteActionBtn = targetArticleNode.querySelector(".uiv-trash-destruction-trigger");
                if (deleteActionBtn) {
                    deleteActionBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        this.evictSliderInstanceNode(data.id);
                    });
                }

                DOM.sandboxRuntimeTarget.appendChild(targetArticleNode);
            });
        }
    };

    // ==========================================================================
    // SYSTEM ACCESSIBILITY NAVIGATION ENGINE
    // ==========================================================================
    class FocusAccessibilityEngine {
        constructor() {
            this.activeMatchingList = [];
            this.focusedIndexPointer = -1;
        }

        refreshMatchingIndices() {
            const matchingCards = document.querySelectorAll(".uiv-component-card-node");
            this.activeMatchingList = Array.from(matchingCards).filter(node => node.style.display !== "none");
        }

        traverseForward() {
            this.refreshMatchingIndices();
            if (this.activeMatchingList.length === 0) return;
            this.focusedIndexPointer = (this.focusedIndexPointer + 1) % this.activeMatchingList.length;
            this.applyIndicatorOutline();
        }

        traverseBackward() {
            this.refreshMatchingIndices();
            if (this.activeMatchingList.length === 0) return;
            this.focusedIndexPointer = (this.focusedIndexPointer - 1 + this.activeMatchingList.length) % this.activeMatchingList.length;
            this.applyIndicatorOutline();
        }

        applyIndicatorOutline() {
            this.activeMatchingList.forEach(n => n.style.borderColor = "");
            const focusedCard = this.activeMatchingList[this.focusedIndexPointer];
            if (focusedCard) {
                focusedCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
                focusedCard.style.borderColor = "var(--uiv-primary)";
            }
        }

        clearFocusRegistries() {
            this.activeMatchingList.forEach(n => n.style.borderColor = "");
            this.focusedIndexPointer = -1;
        }
    }

    const InterfaceA11yNavigator = new FocusAccessibilityEngine();

    // ==========================================================================
    // INTERACTION BUS PLATFORM WIREUP ACTIONS
    // ==========================================================================
    function initializeCoreInteractionBridges() {
        
        // Wire standard live values updates across all statically mounted templates
        const standardRangeElements = document.querySelectorAll('.uiv-component-card-node input[type="range"]');
        standardRangeElements.forEach(rangeNode => {
            MetricEngine.refreshTrackBackgroundFill(rangeNode);
            
            rangeNode.addEventListener("input", function (event) {
                const containerNode = this.closest(".uiv-slider-wrapper-box");
                const outputSpan = containerNode ? containerNode.querySelector(".uiv-slider-live-value-output") : null;
                
                if (outputSpan) {
                    outputSpan.textContent = event.target.value;
                }

                // Handle status tier labeling shifts conditional card classes
                const statusLabelsBox = containerNode ? containerNode.querySelector(".status-labels-row") : null;
                if (statusLabelsBox) {
                    const stepIndex = parseInt(event.target.value);
                    const spans = statusLabelsBox.querySelectorAll("span");
                    spans.forEach((s, idx) => {
                        if (idx === (stepIndex - 1)) s.className = "active-lbl";
                        else s.className = "";
                    });
                }

                // Handle user live text scaling preview loops
                const textPreviewBox = containerNode ? containerNode.querySelector(".user-live-text-preview") : null;
                if (textPreviewBox) {
                    textPreviewBox.style.fontSize = `${event.target.value}px`;
                }

                MetricEngine.refreshTrackBackgroundFill(event.target);
            });
        });

        // Setup live mirroring event for linked numeric verification fields
        const numericTunerField = document.querySelector(".uiv-fine-tuning-numeric-field");
        const linkedRangeTuner = numericTunerField ? numericTunerField.closest(".uiv-slider-wrapper-box").querySelector('input[type="range"]') : null;
        
        if (numericTunerField && linkedRangeTuner) {
            numericTunerField.addEventListener("input", function(e) {
                linkedRangeTuner.value = e.target.value;
                MetricEngine.refreshTrackBackgroundFill(linkedRangeTuner);
            });
            linkedRangeTuner.addEventListener("input", function(e) {
                numericTunerField.value = e.target.value;
            });
        }

        // Live double pointer alignment loops logic mapping parameters
        const dualRangeBlocks = document.querySelectorAll(".uiv-dual-range-container-block");
        dualRangeBlocks.forEach(block => {
            const minInputNode = block.querySelector(".min-pointer-handle");
            const maxInputNode = block.querySelector(".max-pointer-handle");
            const labelsDisplay = block.querySelector(".price-bound-labels");

            if (minInputNode && maxInputNode && labelsDisplay) {
                minInputNode.addEventListener("input", function() {
                    if (parseInt(minInputNode.value) >= parseInt(maxInputNode.value)) {
                        minInputNode.value = maxInputNode.value - 1;
                    }
                    labelsDisplay.innerHTML = `<span>Min: $${minInputNode.value}</span><span>Max: $${maxInputNode.value}</span>`;
                });
                maxInputNode.addEventListener("input", function() {
                    if (parseInt(maxInputNode.value) <= parseInt(minInputNode.value)) {
                        maxInputNode.value = parseInt(minInputNode.value) + 1;
                    }
                    labelsDisplay.innerHTML = `<span>Min: $${minInputNode.value}</span><span>Max: $${maxInputNode.value}</span>`;
                });
            }
        });

        // INTERACTIVE BEHAVIOR SIMULATIONS: Closable track eviction routing
        const closeTriggerInstance = document.querySelector("#uiv-closable-demo-track .uiv-track-close-trigger-btn");
        if (closeTriggerInstance) {
            closeTriggerInstance.addEventListener("click", function() {
                const targetBox = this.closest("#uiv-closable-demo-track");
                targetBox.style.opacity = "0.2"; targetBox.style.pointerEvents = "none";
                ToastHub.trigger("Simulated input card erasure sequence initialized.");
            });
        }

        // INTERACTIVE BEHAVIOR SIMULATIONS: Removable track block collapse sequence
        const removeTriggerInstance = document.querySelector("#uiv-removable-demo-track .uiv-track-remove-glyph-btn");
        if (removeTriggerInstance) {
            removeTriggerInstance.addEventListener("click", function() {
                const wholeCardBox = this.closest("#uiv-removable-demo-track");
                wholeCardBox.style.display = "none";
                ToastHub.trigger("Simulated target row track field removal extraction.");
                setTimeout(() => { wholeCardBox.style.display = "flex"; wholeCardBox.style.opacity = "1"; }, 3500);
            });
        }

        // INTERACTIVE BEHAVIOR SIMULATIONS: Selectable logic binding loops
        const checkboxSelectorSwitch = document.querySelector("#uiv-selectable-demo-box .uiv-track-checkbox-switch");
        const targetedDisabledRangeNode = document.querySelector("#uiv-selectable-demo-box input[type='range']");
        if (checkboxSelectorSwitch && targetedDisabledRangeNode) {
            checkboxSelectorSwitch.addEventListener("change", function() {
                if (this.checked) {
                    targetedDisabledRangeNode.removeAttribute("disabled");
                    targetedDisabledRangeNode.classList.remove("opacity-dimmed");
                    ToastHub.trigger("Range element selection toggle active.");
                } else {
                    targetedDisabledRangeNode.setAttribute("disabled", "true");
                    targetedDisabledRangeNode.classList.add("opacity-dimmed");
                    ToastHub.trigger("Range selection parameters locked down.");
                }
            });
        }

        // Real-Time Search Query Tracker Handler Binding
        if (DOM.globalSearch) {
            DOM.globalSearch.addEventListener("input", function (event) {
                State.searchQuery = event.target.value;
                MetricEngine.evaluateVisibilityFilters();
            });
        }

        // Left Navigation Category Menu Clicks Routing
        DOM.categoryMenuItems.forEach(item => {
            item.addEventListener("click", function () {
                DOM.categoryMenuItems.forEach(node => node.classList.remove("uiv-active"));
                this.classList.add("uiv-active");
                State.category = this.getAttribute("data-category");
                MetricEngine.evaluateVisibilityFilters();
            });
        });

        // Source Code Drawer Visibility Toggle Mechanics Matrix Loop
        DOM.componentNodes.forEach(card => {
            const viewSourceBtn = card.querySelector(".view-source-trigger");
            const copySourceBtn = card.querySelector(".copy-markup-trigger");
            const templateCodePanel = card.querySelector(".uiv-node-code-drawer-panel");
            const structuralTabs = card.querySelectorAll(".uiv-tab-selector");
            const markupBlocksList = card.querySelectorAll(".uiv-markup-block");

            if (viewSourceBtn && templateCodePanel) {
                viewSourceBtn.addEventListener("click", function (event) {
                    event.stopPropagation();
                    templateCodePanel.classList.toggle("uiv-visible");
                    this.classList.toggle("uiv-active");
                });
            }

            if (copySourceBtn) {
                copySourceBtn.addEventListener("click", function (event) {
                    event.stopPropagation();
                    const htmlCodeBlockText = card.querySelector(".html-format-block code").textContent;
                    const cssCodeBlockText = card.querySelector(".css-format-block code").textContent;
                    const unifiedCodeBlockPackage = `<!-- HTML Layout Component -->
${htmlCodeBlockText}

/* CSS Styling Rules */
${cssCodeBlockText}`;
                    ClipboardController.extractTextToSystemMemory(unifiedCodeBlockPackage);
                });
            }

            structuralTabs.forEach(tab => {
                tab.addEventListener("click", function (event) {
                    event.stopPropagation();
                    structuralTabs.forEach(t => t.classList.remove("uiv-active"));
                    markupBlocksList.forEach(b => b.classList.remove("uiv-active"));

                    this.classList.add("uiv-active");
                    const dataSyntaxLang = this.getAttribute("data-format");
                    card.querySelector(`.${dataSyntaxLang}-format-block`).classList.add("uiv-active");
                });
            });
        });

        // Synthesis Control Panel Open/Close Toggle Handlers
        if (DOM.creatorTriggerBtn && DOM.workbenchPanel) {
            DOM.creatorTriggerBtn.addEventListener("click", function () {
                DOM.workbenchPanel.style.display = (DOM.workbenchPanel.style.display === "none") ? "block" : "none";
                DOM.workbenchPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        }
        if (DOM.workbenchClose && DOM.workbenchPanel) {
            DOM.workbenchClose.addEventListener("click", function () {
                DOM.workbenchPanel.style.display = "none";
            });
        }
        if (DOM.newSliderSubmit) {
            DOM.newSliderSubmit.addEventListener("click", function () {
                RuntimeFactory.generateSliderInstanceNode();
            });
        }

        // View Mode Layout Presentation Switch Handles
        if (DOM.layoutGridBtn && DOM.layoutListBtn && DOM.catalogGrid) {
            DOM.layoutGridBtn.addEventListener("click", function () {
                DOM.layoutListBtn.classList.remove("uiv-active");
                this.classList.add("uiv-active");
                DOM.catalogGrid.classList.remove("uiv-list-layout-active");
                State.layoutMode = "grid";
            });
            DOM.layoutListBtn.addEventListener("click", function () {
                DOM.layoutGridBtn.classList.remove("uiv-active");
                this.classList.add("uiv-active");
                DOM.catalogGrid.classList.add("uiv-list-layout-active");
                State.layoutMode = "list";
            });
        }

        // Core Platform Action Buttons Redirection Routines
        if (DOM.heroBrowse && DOM.scrollTarget) {
            DOM.heroBrowse.addEventListener("click", function () {
                DOM.scrollTarget.scrollIntoView({ behavior: "smooth" });
            });
        }
        if (DOM.heroDocs) {
            DOM.heroDocs.addEventListener("click", function () {
                ToastHub.trigger("Range sliders global stylesheet tokens manifest printed to logs window.");
            });
        }

        // Persistent Session System Theme Manager Toggles Wireup
        if (DOM.themeToggleBtn) {
            DOM.themeToggleBtn.addEventListener("click", function () {
                const moonIcon = this.querySelector(".theme-icon-dark");
                const sunIcon = this.querySelector(".theme-icon-light");

                if (State.theme === "dark") {
                    document.body.classList.remove("uiv-dark-theme");
                    document.body.classList.add("uiv-light-theme");
                    moonIcon.style.display = "none";
                    sunIcon.style.display = "inline-block";
                    State.theme = "light";
                } else {
                    document.body.classList.remove("uiv-light-theme");
                    document.body.classList.add("uiv-dark-theme");
                    sunIcon.style.display = "none";
                    moonIcon.style.display = "inline-block";
                    State.theme = "dark";
                }
                localStorage.setItem("uiv-sliders-persistence-theme", State.theme);
            });
        }

        // Keyboard Shortcut Pipeline Event Orchestrators Mapping
        window.addEventListener("keydown", function (event) {
            if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

            // Slash '/' keyboard key autofocus query field tracking sequence
            if (event.key === "/") {
                event.preventDefault();
                if (DOM.globalSearch) {
                    DOM.globalSearch.focus(); DOM.globalSearch.select();
                }
            }

            // Universal background scheme override combination 'Shift+T'
            if (event.shiftKey && (event.key === "T" || event.key === "t")) {
                event.preventDefault();
                if (DOM.themeToggleBtn) DOM.themeToggleBtn.click();
            }

            // Key mapping 'N' & 'P' Accessibility focus row steps loops traversal indicators
            if (event.key === "n" || event.key === "N") {
                event.preventDefault();
                InterfaceA11yNavigator.traverseForward();
            }
            if (event.key === "p" || event.key === "P") {
                event.preventDefault();
                InterfaceA11yNavigator.traverseBackward();
            }
            if (event.key === "r" || event.key === "R") {
                event.preventDefault();
                InterfaceA11yNavigator.clearFocusRegistries();
                ToastHub.trigger("Accessibility outline tracers cleared.");
            }
        });
    }

    // ==========================================================================
    // INITIALIZATION RUNTIME ENGINE LIFECYCLE
    // ==========================================================================
    function bootstrapApplicationPipeline() {
        
        // Synchronize active stored configuration layout patterns before compilation loops
        const storedThemePref = localStorage.getItem("uiv-sliders-persistence-theme");
        if (storedThemePref === "light" && DOM.themeToggleBtn) {
            DOM.themeToggleBtn.click();
        }

        RuntimeFactory.loadTrackManifestFromRegistry();
        initializeCoreInteractionBridges();
        MetricEngine.syncSidebarStatistics();
        MetricEngine.evaluateVisibilityFilters();
    }

    // Fire application initialization after stack verification settling phases complete safely
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootstrapApplicationPipeline);
    } else {
        bootstrapApplicationPipeline();
    }

})();