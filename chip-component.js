(function () {
    "use strict";

    // --- Core Application State Matrix ---
    const State = {
        category: "all",
        searchQuery: "",
        layoutMode: "grid",
        theme: "dark",
        customChipsArray: [],
        focusedIndex: -1
    };

    // --- DOM Reference Registry ---
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
        
        // Workbench Engine DOM Element Bindings
        workbenchClose: document.getElementById("uiv-workbench-close"),
        workbenchPanel: document.getElementById("uiv-dynamic-workbench"),
        creatorTriggerBtn: document.getElementById("uiv-creator-trigger-btn"),
        newChipText: document.getElementById("uiv-new-chip-text"),
        newChipStyle: document.getElementById("uiv-new-chip-style"),
        newChipIcon: document.getElementById("uiv-new-chip-icon"),
        newChipSubmit: document.getElementById("uiv-new-chip-submit"),
        sandboxRuntimeTarget: document.getElementById("uiv-sandbox-runtime-target"),
        sandboxEmptyPrompt: document.getElementById("uiv-sandbox-empty-prompt"),
        
        // Dynamic Metrics Text Trackers
        countAll: document.getElementById("count-all"),
        countCore: document.getElementById("count-core"),
        countInteractive: document.getElementById("count-interactive"),
        countData: document.getElementById("count-data"),
        countPremium: document.getElementById("count-premium"),
        statsTotalPreviews: document.getElementById("stats-total-previews"),
        statsDynamicNodes: document.getElementById("stats-dynamic-nodes"),
        scrollTarget: document.getElementById("uiv-scroll-target"),
        heroBrowse: document.getElementById("uiv-hero-action-browse"),
        heroDocs: document.getElementById("uiv-hero-action-docs")
    };

    // ==========================================================================
    // MICRO-INTERACTION & FEEDBACK TOAST SYSTEM
    // ==========================================================================
    const ToastSystem = {
        notify: function (message) {
            if (!DOM.toastDock) return;
            const toastElement = document.createElement("div");
            toastElement.className = "uiv-system-toast-node";
            toastElement.innerHTML = `<i class="fas fa-info-circle" style="color: var(--uiv-primary); margin-right: 8px;"></i> ${message}`;
            
            DOM.toastDock.appendChild(toastElement);
            
            setTimeout(() => {
                toastElement.style.opacity = "0";
                toastElement.style.transform = "translateY(12px)";
                toastElement.style.transition = "all 0.25s ease-out";
                setTimeout(() => { toastElement.remove(); }, 250);
            }, 3000);
        }
    };

    // ==========================================================================
    // DATA LAYER & INDEXER MANAGEMENT METRICS
    // ==========================================================================
    const MetricEngine = {
        updateSidebarCounters: function () {
            let coreStatic = 0, premiumStatic = 0, interactiveStatic = 0, dataStatic = 0;
            const staticElements = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node");
            
            staticElements.forEach(node => {
                const category = node.getAttribute("data-category");
                if (category === "core") coreStatic++;
                if (category === "premium") premiumStatic++;
                if (category === "interactive") interactiveStatic++;
                if (category === "data") dataStatic++;
            });

            let customCore = 0, customPremium = 0, customInteractive = 0, customData = 0;
            State.customChipsArray.forEach(chip => {
                if (chip.calculatedCategory === "core") customCore++;
                if (chip.calculatedCategory === "premium") customPremium++;
                if (chip.calculatedCategory === "interactive") customInteractive++;
                if (chip.calculatedCategory === "data") customData++;
            });

            const totalCore = coreStatic + customCore;
            const totalPremium = premiumStatic + customPremium;
            const totalInteractive = interactiveStatic + customInteractive;
            const totalData = dataStatic + customData;
            const totalAllItems = totalCore + totalPremium + totalInteractive + totalData;

            if (DOM.countAll) DOM.countAll.textContent = totalAllItems;
            if (DOM.countCore) DOM.countCore.textContent = totalCore;
            if (DOM.countPremium) DOM.countPremium.textContent = totalPremium;
            if (DOM.countInteractive) DOM.countInteractive.textContent = totalInteractive;
            if (DOM.countData) DOM.countData.textContent = totalData;

            if (DOM.statsTotalPreviews) DOM.statsTotalPreviews.textContent = totalAllItems;
            if (DOM.statsDynamicNodes) DOM.statsDynamicNodes.textContent = State.customChipsArray.length;
        },

        filterCatalogView: function () {
            const query = State.searchQuery.toLowerCase().trim();
            const categoryFilter = State.category;
            let counterMatches = 0;

            // Sort standard pre-rendered component list cards
            const staticElements = document.querySelectorAll(".uiv-components-catalog-grid > .uiv-component-card-node");
            staticElements.forEach(node => {
                const nodeCategory = node.getAttribute("data-category");
                const nodeTags = node.getAttribute("data-tags").toLowerCase();
                const nodeTitle = node.querySelector(".uiv-node-title").textContent.toLowerCase();

                const categoryCheck = (categoryFilter === "all" || nodeCategory === categoryFilter);
                const searchCheck = (nodeTitle.includes(query) || nodeTags.includes(query));

                if (categoryCheck && searchCheck) {
                    node.style.display = "block";
                    counterMatches++;
                } else {
                    node.style.display = "none";
                }
            });

            // Re-evaluate visibility of items inside the dynamic array element cards
            const dynamicElements = document.querySelectorAll("#uiv-sandbox-runtime-target .uiv-component-card-node");
            dynamicElements.forEach(node => {
                const nodeCategory = node.getAttribute("data-category");
                const nodeTitle = node.querySelector(".uiv-node-title").textContent.toLowerCase();
                
                const categoryCheck = (categoryFilter === "all" || nodeCategory === categoryFilter);
                const searchCheck = nodeTitle.includes(query);

                if (categoryCheck && searchCheck) {
                    node.style.display = "block";
                    counterMatches++;
                } else {
                    node.style.display = "none";
                }
            });

            if (DOM.catalogSummaryText) {
                DOM.catalogSummaryText.textContent = `Displaying ${counterMatches} structural variations matching system flags`;
            }
        }
    };

    // ==========================================================================
    // CLIPBOARD PIPELINE CONTROLLER ARCHITECTURE
    // ==========================================================================
    const ClipboardPipe = {
        copyTextToClipboard: function (rawTextString) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(rawTextString).then(() => {
                    ToastSystem.notify("Copied implementation string cleanly to clipboard.");
                }).catch(() => {
                    this.executeFallbackExtraction(rawTextString);
                });
            } else {
                this.executeFallbackExtraction(rawTextString);
            }
        },

        executeFallbackExtraction: function (text) {
            const hiddenTextarea = document.createElement("textarea");
            hiddenTextarea.value = text;
            hiddenTextarea.style.position = "fixed"; hiddenTextarea.style.opacity = "0";
            document.body.appendChild(hiddenTextarea);
            hiddenTextarea.focus(); hiddenTextarea.select();
            try {
                document.execCommand("copy");
                ToastSystem.notify("Extracted source layout using internal memory registers.");
            } catch (err) {
                console.error("Critical memory block translation channel failure", err);
            }
            document.body.removeChild(hiddenTextarea);
        }
    };

    // ==========================================================================
    // DYNAMIC CHIP ENGINE CONSTRUCTOR GENERATOR
    // ==========================================================================
    const ChipFactoryEngine = {
        saveStateToLocalStorage: function () {
            localStorage.setItem("uiv-custom-chips-payload", JSON.stringify(State.customChipsArray));
        },

        loadPersistedCustomChips: function () {
            const payloadString = localStorage.getItem("uiv-custom-chips-payload");
            if (payloadString) {
                try {
                    State.customChipsArray = JSON.parse(payloadString);
                    this.renderCustomChipsArrayToSandbox();
                } catch (e) {
                    console.error("Local registry parsing failure sequence aborted", e);
                }
            }
        },

        createNewChipNode: function () {
            if (!DOM.newChipText) return;
            const contentLabel = DOM.newChipText.value.trim();
            if (!contentLabel) {
                ToastSystem.notify("Validation warning: Input parameter label cannot be blank.");
                return;
            }

            const chosenStyleClass = DOM.newChipStyle.value;
            const chosenGlyphIcon = DOM.newChipIcon.value;
            
            // Map design configurations back to internal system metrics tags categories
            let targetedCat = "core";
            if (chosenStyleClass.includes("vfx")) targetedCat = "premium";

            const uniqueID = "custom-node-" + Date.now();
            const newChipObject = {
                id: uniqueID,
                label: contentLabel,
                styleClass: chosenStyleClass,
                iconClass: chosenGlyphIcon,
                calculatedCategory: targetedCat
            };

            State.customChipsArray.push(newChipObject);
            this.saveStateToLocalStorage();
            this.renderCustomChipsArrayToSandbox();
            
            DOM.newChipText.value = ""; // Reset entry field parameters
            ToastSystem.notify(`Injected active runtime node structure [${contentLabel}] to memory.`);
            MetricEngine.updateSidebarCounters();
            MetricEngine.filterCatalogView();
        },

        deleteChipNodeInstance: function (nodeID) {
            State.customChipsArray = State.customChipsArray.filter(item => item.id !== nodeID);
            this.saveStateToLocalStorage();
            this.renderCustomChipsArrayToSandbox();
            ToastSystem.notify("Evicted explicit dynamic node framework binding.");
            MetricEngine.updateSidebarCounters();
            MetricEngine.filterCatalogView();
        },

        renderCustomChipsArrayToSandbox: function () {
            if (!DOM.sandboxRuntimeTarget || !DOM.sandboxEmptyPrompt) return;
            
            // Clear prior dynamic iterations cleanly
            const priorNodes = DOM.sandboxRuntimeTarget.querySelectorAll(".uiv-component-card-node");
            priorNodes.forEach(n => n.remove());

            if (State.customChipsArray.length === 0) {
                DOM.sandboxEmptyPrompt.style.display = "block";
                return;
            }

            DOM.sandboxEmptyPrompt.style.display = "none";

            State.customChipsArray.forEach(data => {
                const articleCard = document.createElement("article");
                articleCard.className = "uiv-component-card-node";
                articleCard.setAttribute("data-id", data.id);
                articleCard.setAttribute("data-category", data.calculatedCategory);

                let inlineIconMarkup = "";
                if (data.iconClass !== "none") {
                    inlineIconMarkup = `<i class="${data.iconClass} icon-spacing" aria-hidden="true"></i>`;
                }

                // Inject full architectural block blueprint matching static list layouts
                articleCard.innerHTML = `
                    <div class="uiv-node-card-header">
                        <div class="uiv-node-title-group">
                            <h4 class="uiv-node-title">Runtime Dynamic: ${data.label}</h4>
                            <span class="uiv-node-meta-badge uiv-badge-interactive">Runtime Instance</span>
                        </div>
                        <div class="uiv-node-action-cluster">
                            <button class="uiv-node-btn uiv-destroy-trigger-btn" title="Evict node architecture from framework container"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <p class="uiv-node-description-text">Dynamically synthesized token built via parameters inside the workbench cluster matrix.</p>
                    <div class="uiv-node-live-preview-box">
                        <div class="${data.styleClass}" role="note">
                            ${inlineIconMarkup}
                            <span>${data.label}</span>
                        </div>
                    </div>
                `;

                // Wire localized layout destruction tracking bindings
                const deleteBtn = articleCard.querySelector(".uiv-destroy-trigger-btn");
                if (deleteBtn) {
                    deleteBtn.addEventListener("click", (e) => {
                        e.stopPropagation();
                        this.deleteChipNodeInstance(data.id);
                    });
                }

                DOM.sandboxRuntimeTarget.appendChild(articleCard);
            });
        }
    };

    // ==========================================================================
    // CORE SYSTEM INTERACTION PLATFORM EVENT HANDLERS
    // ==========================================================================
    function wirePlatformInterfaceEvents() {
        
        // Input Filter Lookup Event Watcher
        if (DOM.globalSearch) {
            DOM.globalSearch.addEventListener("input", function (e) {
                State.searchQuery = e.target.value;
                MetricEngine.filterCatalogView();
            });
        }

        // Left Navigation Category Panel Mapping
        DOM.categoryMenuItems.forEach(item => {
            item.addEventListener("click", function () {
                DOM.categoryMenuItems.forEach(node => node.classList.remove("uiv-active"));
                this.classList.add("uiv-active");
                State.category = this.getAttribute("data-category");
                MetricEngine.filterCatalogView();
            });
        });

        // Interactive Static Component Card Toggles and Copy Utilities
        DOM.componentNodes.forEach(card => {
            const codeTrigger = card.querySelector(".view-source-trigger");
            const copyTrigger = card.querySelector(".copy-markup-trigger");
            const drawerPanel = card.querySelector(".uiv-node-code-drawer-panel");
            const languageTabs = card.querySelectorAll(".uiv-tab-selector");
            const sourceCodeBlocks = card.querySelectorAll(".uiv-markup-block");

            if (codeTrigger && drawerPanel) {
                codeTrigger.addEventListener("click", function (e) {
                    e.stopPropagation();
                    drawerPanel.classList.toggle("uiv-visible");
                    this.classList.toggle("uiv-active");
                });
            }

            if (copyTrigger) {
                copyTrigger.addEventListener("click", function (e) {
                    e.stopPropagation();
                    const htmlCode = card.querySelector(".html-format-block code").textContent;
                    const cssCode = card.querySelector(".css-format-block code").textContent;
                    const combinedPackage = `<!-- UIverse Component HTML -->
${htmlCode}

/* UIverse Component CSS */
${cssCode}`;
                    ClipboardPipe.copyTextToClipboard(combinedPackage);
                });
            }

            languageTabs.forEach(tab => {
                tab.addEventListener("click", function (e) {
                    e.stopPropagation();
                    languageTabs.forEach(t => t.classList.remove("uiv-active"));
                    sourceCodeBlocks.forEach(b => b.classList.remove("uiv-active"));

                    this.classList.add("uiv-active");
                    const syntaxFormat = this.getAttribute("data-format");
                    card.querySelector(`.${syntaxFormat}-format-block`).classList.add("uiv-active");
                });
            });

            // INTERACTIVE COMPONENT BEHAVIORS: Selectable Chip Toggle
            const previewZone = card.querySelector(".uiv-node-live-preview-box");
            const selectableTarget = card.querySelector(".uiv-chip-selectable-toggle");
            if (selectableTarget) {
                selectableTarget.addEventListener("click", function () {
                    const isChecked = this.getAttribute("aria-checked") === "true";
                    this.setAttribute("aria-checked", !isChecked);
                    this.classList.toggle("uiv-selected-state");
                    ToastSystem.notify(`Selectable state mutation: active=${!isChecked}`);
                });
            }

            // INTERACTIVE COMPONENT BEHAVIORS: Filter Chip Toggle
            const filterTarget = card.querySelector(".uiv-chip-filter-action");
            if (filterTarget) {
                filterTarget.addEventListener("click", function () {
                    const isChecked = this.getAttribute("aria-checked") === "true";
                    this.setAttribute("aria-checked", !isChecked);
                    this.classList.toggle("uiv-filter-active");
                    ToastSystem.notify(`Filter condition toggled.`);
                });
            }

            // INTERACTIVE COMPONENT BEHAVIORS: Closable Chip Remove Simulation
            const closeTarget = card.querySelector("#uiv-instance-closable-demo");
            if (closeTarget) {
                const glyphBtn = closeTarget.querySelector(".uiv-close-glyph-trigger-node");
                if (glyphBtn) {
                    glyphBtn.addEventListener("click", function (e) {
                        e.stopPropagation();
                        closeTarget.style.opacity = "0.3";
                        closeTarget.style.pointerEvents = "none";
                        ToastSystem.notify("Simulated destruction sequence initialized on standalone instance card.");
                    });
                }
            }

            // INTERACTIVE COMPONENT BEHAVIORS: Removable Chip Subtraction Simulation
            const removeTarget = card.querySelector("#uiv-instance-removable-demo");
            if (removeTarget) {
                const minusIcon = removeTarget.querySelector(".uiv-remove-icon-action");
                if (minusIcon) {
                    minusIcon.addEventListener("click", function (e) {
                        e.stopPropagation();
                        removeTarget.style.display = "none";
                        ToastSystem.notify("Simulated list extraction sequence completed.");
                        setTimeout(() => { removeTarget.style.display = "inline-flex"; removeTarget.style.opacity = "1"; }, 3000);
                    });
                }
            }
        });

        // Structural Workbench Command Triggers
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
        if (DOM.newChipSubmit) {
            DOM.newChipSubmit.addEventListener("click", function () {
                ChipFactoryEngine.createNewChipNode();
            });
        }

        // Layout Matrix Manipulation Triggers
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

        // Global Context Action Routing
        if (DOM.heroBrowse && DOM.scrollTarget) {
            DOM.heroBrowse.addEventListener("click", function () {
                DOM.scrollTarget.scrollIntoView({ behavior: "smooth" });
            });
        }
        if (DOM.heroDocs) {
            DOM.heroDocs.addEventListener("click", function () {
                ToastSystem.notify("Core framework variables manifest extracted to logs console window.");
            });
        }

        // Theme Toggle Persistence Infrastructure
        if (DOM.themeToggleBtn) {
            DOM.themeToggleBtn.addEventListener("click", function () {
                const darkIcon = this.querySelector(".theme-icon-dark");
                const lightIcon = this.querySelector(".theme-icon-light");

                if (State.theme === "dark") {
                    document.body.classList.remove("uiv-dark-theme");
                    document.body.classList.add("uiv-light-theme");
                    darkIcon.style.display = "none";
                    lightIcon.style.display = "inline-block";
                    State.theme = "light";
                } else {
                    document.body.classList.remove("uiv-light-theme");
                    document.body.classList.add("uiv-dark-theme");
                    lightIcon.style.display = "none";
                    darkIcon.style.display = "inline-block";
                    State.theme = "dark";
                }
                localStorage.setItem("uiv-chips-persistence-theme", State.theme);
            });
        }

        // Keyboard Shortcut Mapping Pipelines
        window.addEventListener("keydown", function (e) {
            if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

            // Search Trigger Key mapping '/'
            if (e.key === "/") {
                e.preventDefault();
                if (DOM.globalSearch) {
                    DOM.globalSearch.focus(); DOM.globalSearch.select();
                }
            }

            // Shift+T Universal Theme Swap Sequence Shortcut
            if (e.shiftKey && (e.key === "T" || e.key === "t")) {
                e.preventDefault();
                if (DOM.themeToggleBtn) DOM.themeToggleBtn.click();
            }
        });
    }

    // ==========================================================================
    // INITIALIZATION LIFECYCLE ROUTINE ENTRYPOINT
    // ==========================================================================
    function bootLibraryPipelineSequence() {
        
        // Restore active theme preferences before rendering frame states
        const savedTheme = localStorage.getItem("uiv-chips-persistence-theme");
        if (savedTheme === "light" && DOM.themeToggleBtn) {
            DOM.themeToggleBtn.click();
        }

        ChipFactoryEngine.loadPersistedCustomChips();
        wirePlatformInterfaceEvents();
        MetricEngine.updateSidebarCounters();
        MetricEngine.filterCatalogView();
        
        console.log("UIverse Systems Integration Framework Check Complete: Chips Catalog Module Active.");
    }

    // Trigger orchestration execution context parameters safely
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", bootLibraryPipelineSequence);
    } else {
        bootLibraryPipelineSequence();
    }

})();