(function () {
    "use strict";

    // --- Core Architecture Application State Matrix ---
    const State = {
        category: "all",
        searchQuery: "",
        layoutMode: "grid",
        theme: "dark",
        customScrollbarsArray: [],
        focusedIndexPointer: -1
    };

    // --- Static DOM Reference Registry Cache ---
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
        newScrollName: document.getElementById("uiv-new-scroll-name"),
        newScrollStyle: document.getElementById("uiv-new-scroll-style"),
        newScrollSize: document.getElementById("uiv-new-scroll-size"),
        newScrollSubmit: document.getElementById("uiv-new-scroll-submit"),
        sandboxRuntimeTarget: document.getElementById("uiv-sandbox-runtime-target"),
        sandboxEmptyPrompt: document.getElementById("uiv-sandbox-empty-prompt"),
        
        // Dynamic Counter Targets
        countAll: document.getElementById("count-all"),
        countMinimal: document.getElementById("count-minimal"),
        countVfx: document.getElementById("count-vfx"),
        countUi: document.getElementById("count-ui"),
        countPremium: document.getElementById("count-premium"),
        statsTotalPreviews: document.getElementById("stats-total-previews"),
        statsDynamicNodes: document.getElementById("stats-dynamic-nodes"),
        scrollTarget: document.getElementById("uiv-scroll-target"),
        heroBrowse: document.getElementById("uiv-hero-action-browse"),
        heroDocs: document.getElementById("uiv-hero-action-docs")
    };

    // ==========================================================================
    // NOTIFICATION ENGINE PIPELINE (TOAST INFRASTRUCTURE)
    // ==========================================================================
    const ToastSystem = {
        dispatchNotice: function (messageText) {
            if (!DOM.toastDock) return;
            const toastNode = document.createElement("div");
            toastNode.className = "uiv-system-toast-node";
            toastNode.innerHTML = `<i class="fas fa-scroll" style="color: var(--uiv-primary); margin-right: 10px;"></i> <span>${messageText}</span>`;
            
            DOM.toastDock.appendChild(toastNode);
            
            setTimeout(() => {
                toastNode.style.opacity = "0";
                toastNode.style.transform = "translateY(12px)";
                toastNode.style.transition = "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)";
                setTimeout(() => { toastNode.remove(); }, 200);
            }, 2500);
        }
    };

    // ==========================================================================
    // LIVE INDEXER & METRIC COMPUTATION LOGIC
    // ==========================================================================
    const MetricEngine = {
        syncSidebarCounters: function () {
            let minimalStatic = 0, vfxStatic = 0, uiStatic = 0, premiumStatic = 0;
            const staticCardsList = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node");
            
            staticCardsList.forEach(card => {
                const nodeCategory = card.getAttribute("data-category");
                if (nodeCategory === "minimal") minimalStatic++;
                if (nodeCategory === "vfx") vfxStatic++;
                if (nodeCategory === "ui") uiStatic++;
                if (nodeCategory === "premium") premiumStatic++;
            });

            let minimalDynamic = 0, vfxDynamic = 0, uiDynamic = 0, premiumDynamic = 0;
            State.customScrollbarsArray.forEach(scrollItem => {
                if (sliderCategoryParser(scrollItem.skinClass) === "minimal") minimalDynamic++;
                if (sliderCategoryParser(scrollItem.skinClass) === "vfx") vfxDynamic++;
                if (sliderCategoryParser(scrollItem.skinClass) === "ui") uiDynamic++;
                if (sliderCategoryParser(scrollItem.skinClass) === "premium") premiumDynamic++;
            });

            const totalCollectiveCount = minimalStatic + vfxStatic + uiStatic + premiumStatic + State.customScrollbarsArray.length;

            if (DOM.countAll) DOM.countAll.textContent = totalCollectiveCount;
            if (DOM.countMinimal) DOM.countMinimal.textContent = minimalStatic + minimalDynamic;
            if (DOM.countVfx) DOM.countVfx.textContent = vfxStatic + vfxDynamic;
            if (DOM.countUi) DOM.countUi.textContent = uiStatic + uiDynamic;
            if (DOM.countPremium) DOM.countPremium.textContent = premiumStatic + premiumDynamic;

            if (DOM.statsTotalPreviews) DOM.statsTotalPreviews.textContent = totalCollectiveCount;
            if (DOM.statsDynamicNodes) DOM.statsDynamicNodes.textContent = State.customScrollbarsArray.length;
        },

        evaluateVisibilityFilters: function () {
            const currentSearchQuery = State.searchQuery.toLowerCase().trim();
            const selectedCategory = State.category;
            let totalActiveVisibles = 0;

            const standardStaticCards = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node");
            standardStaticCards.forEach(card => {
                const nodeCategory = card.getAttribute("data-category");
                const nodeTags = card.getAttribute("data-tags").toLowerCase();
                const nodeTitle = card.querySelector(".uiv-node-title").textContent.toLowerCase();

                const categoryVerification = (selectedCategory === "all" || nodeCategory === selectedCategory);
                const searchFieldVerification = (nodeTitle.includes(currentSearchQuery) || nodeTags.includes(currentSearchQuery));

                if (categoryVerification && searchFieldVerification) {
                    card.style.display = "block";
                    totalActiveVisibles++;
                } else {
                    card.style.display = "none";
                }
            });

            const operationalDynamicCards = document.querySelectorAll("#uiv-sandbox-runtime-target .uiv-component-card-node");
            operationalDynamicCards.forEach(card => {
                const nodeCategory = card.getAttribute("data-category");
                const nodeTitle = card.querySelector(".uiv-node-title").textContent.toLowerCase();

                const categoryVerification = (selectedCategory === "all" || nodeCategory === selectedCategory);
                const searchFieldVerification = nodeTitle.includes(currentSearchQuery);

                if (categoryVerification && searchFieldVerification) {
                    card.style.display = "block";
                    totalActiveVisibles++;
                } else {
                    card.style.display = "none";
                }
            });

            if (DOM.catalogSummaryText) {
                DOM.catalogSummaryText.textContent = `Displaying ${totalActiveVisibles} custom scrollbar system layouts inside current view grid`;
            }
        }
    };

    function sliderCategoryParser(cssClassName) {
        if (cssClassName.includes("thin")) return "minimal";
        if (cssClassName.includes("cyan") || cssClassName.includes("sunset")) return "vfx";
        return "ui";
    }

    // ==========================================================================
    // MEMORY COPIER SYSTEM HANDLERS
    // ==========================================================================
    const MemoryCopier = {
        saveStringToClipboard: function (codeContentString) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(codeContentString).then(() => {
                    ToastSystem.dispatchNotice("Copied scrollbar definitions package cleanly.");
                }).catch(() => {
                    this.executeTextareaFallbackChannel(codeContentString);
                });
            } else {
                this.executeTextareaFallbackChannel(codeContentString);
            }
        },

        executeTextareaFallbackChannel: function (textString) {
            const dynamicTextareaNode = document.createElement("textarea");
            dynamicTextareaNode.value = textString;
            dynamicTextareaNode.style.position = "fixed"; dynamicTextareaNode.style.opacity = "0";
            document.body.appendChild(dynamicTextareaNode);
            dynamicTextareaNode.focus(); dynamicTextareaNode.select();
            try {
                document.execCommand("copy");
                ToastSystem.dispatchNotice("Extracted source block to operational clipboard.");
            } catch (err) {
                console.error("Critical extraction channel failed execution tasks", err);
            }
            document.body.removeChild(dynamicTextareaNode);
        }
    };

    // ==========================================================================
    // INTERACTIVE RUNTIME COMPONENT FACTORY MODULE
    // ==========================================================================
    const ScrollbarFactory = {
        commitStateToLocalStorage: function () {
            localStorage.setItem("uiv-scrollbar-persistence-payload", JSON.stringify(State.customScrollbarsArray));
        },

        extractStateFromLocalStorage: function () {
            const persistentDataString = localStorage.getItem("uiv-scrollbar-persistence-payload");
            if (persistentDataString) {
                try {
                    State.customScrollbarsArray = JSON.parse(persistentDataString);
                    this.compileArrayElementsToWorkspace();
                } catch (e) {
                    console.error("Local registry synchronization error recorded", e);
                }
            }
        },

        generateCustomScrollbarNode: function () {
            if (!DOM.newScrollName) return;
            const contextTitleText = DOM.newScrollName.value.trim();
            if (!contextTitleText) {
                ToastSystem.dispatchNotice("Validation Warning: Customized layout label string empty.");
                return;
            }

            const chosenSkinTokenClass = DOM.newScrollStyle.value;
            const trackedSizingValue = DOM.newScrollSize.value;
            const mappedTargetCategory = sliderCategoryParser(chosenSkinTokenClass);

            const generatedIDKey = "scroll-node-" + Date.now();
            const compiledObjectNode = {
                id: generatedIDKey,
                name: contextTitleText,
                skinClass: chosenSkinTokenClass,
                trackSize: trackedSizingValue,
                assignedCategory: mappedTargetCategory
            };

            State.customScrollbarsArray.push(compiledObjectNode);
            this.commitStateToLocalStorage();
            this.compileArrayElementsToWorkspace();

            DOM.newScrollName.value = ""; // Clear active input fields parameter paths
            ToastSystem.dispatchNotice(`Compiled customized scroll container [${contextTitleText}] successfully.`);
            MetricEngine.syncSidebarStatistics();
            MetricEngine.evaluateVisibilityFilters();
        },

        evictCustomScrollbarNode: function (uniqueNodeID) {
            State.customScrollbarsArray = State.customScrollbarsArray.filter(item => item.id !== uniqueNodeID);
            this.commitStateToLocalStorage();
            this.compileArrayElementsToWorkspace();
            ToastSystem.dispatchNotice("Evicted customized runtime workspace chassis entry.");
            MetricEngine.syncSidebarStatistics();
            MetricEngine.evaluateVisibilityFilters();
        },

        compileArrayElementsToWorkspace: function () {
            if (!DOM.sandboxRuntimeTarget || !DOM.sandboxEmptyPrompt) return;

            const existingDynamicElements = DOM.sandboxRuntimeTarget.querySelectorAll(".uiv-component-card-node");
            existingDynamicElements.forEach(element => element.remove());

            if (State.customScrollbarsArray.length === 0) {
                DOM.sandboxEmptyPrompt.style.display = "block";
                return;
            }

            DOM.sandboxEmptyPrompt.style.display = "none";

            State.customScrollbarsArray.forEach(data => {
                const targetCardNode = document.createElement("article");
                targetCardNode.className = "uiv-component-card-node";
                targetCardNode.setAttribute("data-id", data.id);
                targetCardNode.setAttribute("data-category", data.assignedCategory);

                targetCardNode.innerHTML = `
                    <div class="uiv-node-card-header">
                        <div class="uiv-node-title-group">
                            <h4 class="uiv-node-title">Dynamic Module: ${data.name}</h4>
                            <span class="uiv-node-meta-badge uiv-badge-ui">Compiled Instance</span>
                        </div>
                        <div class="uiv-node-action-cluster">
                            <button class="uiv-node-btn uiv-trash-disposal-action-btn" title="Evict model tracking parameters array index item"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <p class="uiv-node-description-text">Runtime generated container allocating a specific track viewport configuration sizing profile of ${data.trackSize}.</p>
                    <div class="uiv-node-live-preview-box">
                        <div class="uiv-scrollbar-preview-well ${data.skinClass}" style="scrollbar-width: thin;">
                            <div class="uiv-dummy-content-scroller">
                                <h5>Dynamic Scrollable Matrix</h5>
                                <p>Scroll here inside your compiled workbench block node layer to observe custom tracking parameters rules. Testing overflow pools prevents content bleed parameters.</p>
                            </div>
                        </div>
                    </div>
                `;

                const destroyActionBtn = targetCardNode.querySelector(".uiv-trash-disposal-action-btn");
                if (destroyActionBtn) {
                    destroyActionBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        this.evictCustomScrollbarNode(data.id);
                    });
                }

                DOM.sandboxRuntimeTarget.appendChild(targetCardNode);
            });
        }
    };

    // ==========================================================================
    // CORE SYSTEM EVENT LISTENER ASSIGNMENTS BRIDGES
    // ==========================================================================
    function wirePlatformInterfaceEvents() {
        
        // Input Query Search Match Interceptor Event Hook
        if (DOM.globalSearch) {
            DOM.globalSearch.addEventListener("input", function (event) {
                State.searchQuery = event.target.value;
                MetricEngine.evaluateVisibilityFilters();
            });
        }

        // Left Navigation Category List Item Click Routing Channels
        DOM.categoryMenuItems.forEach(item => {
            item.addEventListener("click", function () {
                DOM.categoryMenuItems.forEach(node => node.classList.remove("uiv-active"));
                this.classList.add("uiv-active");
                State.category = this.getAttribute("data-category");
                MetricEngine.evaluateVisibilityFilters();
            });
        });

        // Source Code Tabs Drawer Action Bindings Setup
        DOM.componentNodes.forEach(card => {
            const viewCodeBtn = card.querySelector(".view-source-trigger");
            const copyCodeBtn = card.querySelector(".copy-markup-trigger");
            const drawerPanelNode = card.querySelector(".uiv-node-code-drawer-panel");
            const actionLanguageTabs = card.querySelectorAll(".uiv-tab-selector");
            const preformattedCodeBlocks = card.querySelectorAll(".uiv-markup-block");

            if (viewCodeBtn && drawerPanelNode) {
                viewCodeBtn.addEventListener("click", function (event) {
                    event.stopPropagation();
                    drawerPanelNode.classList.toggle("uiv-visible");
                    this.classList.toggle("uiv-active");
                });
            }

            if (copyCodeBtn) {
                copyCodeBtn.addEventListener("click", function (event) {
                    event.stopPropagation();
                    const htmlContentText = card.querySelector(".html-format-block code").textContent;
                    const cssContentText = card.querySelector(".css-format-block code").textContent;
                    const bundledComponentPackage = `<!-- UIverse Component HTML -->
${htmlContentText}

/* UIverse Component CSS Overrides */
${cssContentText}`;
                    MemoryCopier.saveStringToClipboard(bundledComponentPackage);
                });
            }

            actionLanguageTabs.forEach(tab => {
                tab.addEventListener("click", function (event) {
                    event.stopPropagation();
                    actionLanguageTabs.forEach(t => t.classList.remove("uiv-active"));
                    preformattedCodeBlocks.forEach(b => b.classList.remove("uiv-active"));

                    this.classList.add("uiv-active");
                    const TargetSyntaxLanguage = this.getAttribute("data-format");
                    card.querySelector(`.${TargetSyntaxLanguage}-format-block`).classList.add("uiv-active");
                });
            });
        });

        // Structural Synthesis Panels Interceptor Wires
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
        if (DOM.newScrollSubmit) {
            DOM.newScrollSubmit.addEventListener("click", function () {
                ScrollbarFactory.generateCustomScrollbarNode();
            });
        }

        // View Mode Matrix Layout Toggle Assignments Routing
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

        // Core CTA Landing Banner Operations Routing Setup
        if (DOM.heroBrowse && DOM.scrollTarget) {
            DOM.heroBrowse.addEventListener("click", function () {
                DOM.scrollTarget.scrollIntoView({ behavior: "smooth" });
            });
        }
        if (DOM.heroDocs) {
            DOM.heroDocs.addEventListener("click", function () {
                ToastSystem.dispatchNotice("Custom pseudo-elements webkit standard schema variables exported.");
            });
        }

        // System Persistence Light Theme State Switching Management Wireup
        if (DOM.themeToggleBtn) {
            DOM.themeToggleBtn.addEventListener("click", function () {
                const darkMoonIcon = this.querySelector(".theme-icon-dark");
                const lightSunIcon = this.querySelector(".theme-icon-light");

                if (State.theme === "dark") {
                    document.body.classList.remove("uiv-dark-theme");
                    document.body.classList.add("uiv-light-theme");
                    darkMoonIcon.style.display = "none";
                    lightSunIcon.style.display = "inline-block";
                    State.theme = "light";
                } else {
                    document.body.classList.remove("uiv-light-theme");
                    document.body.classList.add("uiv-dark-theme");
                    lightSunIcon.style.display = "none";
                    darkMoonIcon.style.display = "inline-block";
                    State.theme = "dark";
                }
                localStorage.setItem("uiv-scrollbars-persistence-theme", State.theme);
            });
        }
    }

    // ==========================================================================
    // INITIALIZATION RUNTIME ENGINE PARAMETERS LIFECYCLE
    // ==========================================================================
    function bootstrapApplicationPipeline() {
        
        // Recover explicit user theme persistence flags before execution stacks settle
        const savedThemeMetric = localStorage.getItem("uiv-scrollbars-persistence-theme");
        if (savedThemeMetric === "light" && DOM.themeToggleBtn) {
            DOM.themeToggleBtn.click();
        }

        ScrollbarFactory.extractStateFromLocalStorage();
        wirePlatformInterfaceEvents();
        MetricEngine.syncSidebarCounters();
        MetricEngine.evaluateVisibilityFilters();
        
        console.log("UIverse Systems Integration Framework: Custom Scrollbar System Engine Module Verification Complete.");
    }

    // Execute safe DOM element loading safety checkpoints pipeline loops routing
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootstrapApplicationPipeline);
    } else {
        bootstrapApplicationPipeline();
    }

})();

/**
 * ==========================================================================
 * ACCESSIBILITY KEYBOARD HOTKEY EVENT NAVIGATOR CLASS LAYOUT
 * ==========================================================================
 * Enables standard desktop terminal operators to step index highlights via keyboard paths.
 */
class SystemFocusStepNavigator {
    constructor() {
        this.monitoredCardElements = [];
        this.cursorIndexTracker = -1;
    }

    refreshVisibleNodeManifest() {
        const structuralCards = document.querySelectorAll(".uiv-component-card-node");
        this.monitoredCardElements = Array.from(structuralCards).filter(node => node.style.display !== "none");
    }

    advanceSelectorForward() {
        this.refreshVisibleNodeManifest();
        if (this.monitoredCardElements.length === 0) return;
        this.cursorIndexTracker = (this.cursorIndexTracker + 1) % this.monitoredCardElements.length;
        this.applyVisualHighlightBorder();
    }

    advanceSelectorBackward() {
        this.refreshVisibleNodeManifest();
        if (this.monitoredCardElements.length === 0) return;
        this.cursorIndexTracker = (this.cursorIndexTracker - 1 + this.monitoredCardElements.length) % this.monitoredCardElements.length;
        this.applyVisualHighlightBorder();
    }

    applyVisualHighlightBorder() {
        this.monitoredCardElements.forEach(card => card.style.borderColor = "");
        const activeNode = this.monitoredCardElements[this.cursorIndexTracker];
        if (activeNode) {
            activeNode.scrollIntoView({ behavior: "smooth", block: "nearest" });
            activeNode.style.borderColor = "var(--uiv-primary)";
        }
    }

    eraseTracerHighlights() {
        this.monitoredCardElements.forEach(card => card.style.borderColor = "");
        this.cursorIndexTracker = -1;
    }
}

// Instantiate internal keyboard stepping focus systems navigator module
const PlatformA11yStepNavigator = new SystemFocusStepNavigator();

window.addEventListener("keydown", function (event) {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

    // Direct Forward-slash query target key mapping '/' focus trigger
    if (event.key === "/") {
        event.preventDefault();
        const searchInputNode = document.getElementById("uiv-global-search");
        if (searchInputNode) { searchInputNode.focus(); searchInputNode.select(); }
    }

    // Shift + T Theme Toggle Combination hotkey assignment
    if (event.shiftKey && (event.key === "T" || event.key === "t")) {
        event.preventDefault();
        const themeButtonNode = document.getElementById("uiv-theme-toggle");
        if (themeButtonNode) themeButtonNode.click();
    }

    // Keyboard 'N' and 'P' step navigation keys
    if (event.key === "n" || event.key === "N") {
        event.preventDefault();
        PlatformA11yStepNavigator.advanceSelectorForward();
    }
    if (event.key === "p" || event.key === "P") {
        event.preventDefault();
        PlatformA11yStepNavigator.advanceSelectorBackward();
    }
    if (event.key === "r" || event.key === "R") {
        event.preventDefault();
        PlatformA11yStepNavigator.eraseTracerHighlights();
        const toastDockNode = document.getElementById("uiv-toast-dock");
        if (toastDockNode) {
            const clearNotice = document.createElement("div");
            clearNotice.className = "uiv-system-toast-node";
            clearNotice.innerHTML = `<span>Accessibility tracers cleared.</span>`;
            toastDockNode.appendChild(clearNotice);
            setTimeout(() => { clearNotice.remove(); }, 2000);
        }
    }
});

/**
 * --- Standard System Configuration Audit Diagnostic Checklist Loop ---
 * Internal diagnostic script ensuring static structural template matrices match baseline constraints.
 */
function runSystemManifestIntegrityCheck() {
    const baselineExpectedTotal = 30;
    const discoveredCatalogTotal = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node").length;
    console.group("UIverse System Integrity Verification Logs");
    if (discoveredCatalogTotal >= baselineExpectedTotal) {
        console.info(`Integrity Check Passed: Found ${discoveredCatalogTotal} active card template blocks.`);
    } else {
        console.warn(`Integrity Warning Framework: Expected ${baselineExpectedTotal} nodes, discovered ${discoveredCatalogTotal}.`);
    }
    console.groupEnd();
}

window.addEventListener("load", function () {
    setTimeout(runSystemManifestIntegrityCheck, 1000);
});