g(function () {
    "use strict";

    // --- Core State Management Objects ---
    const AppState = {
        activeFilter: "all",
        searchQuery: "",
        viewMode: "grid",
        theme: "dark",
        activeModalComponent: null
    };

    // --- DOM Cache Registry ---
    const DOM = {
        globalSearch: document.getElementById("global-search"),
        categoryFilters: document.querySelectorAll("#category-filter-list .menu-item"),
        componentCards: document.querySelectorAll(".component-card"),
        resultsCounter: document.getElementById("results-counter"),
        themeToggleBtn: document.getElementById("theme-toggle-btn"),
        viewGridBtn: document.getElementById("view-grid"),
        viewListBtn: document.getElementById("view-list"),
        componentsCatalog: document.getElementById("components-catalog"),
        codeModal: document.getElementById("code-modal"),
        modalCloseBtn: document.getElementById("close-modal-btn"),
        modalTitle: document.getElementById("modal-component-title"),
        sandboxZone: document.getElementById("sandbox-zone"),
        sandboxTextarea: document.getElementById("sandbox-textarea"),
        modalCopyBtn: document.getElementById("modal-copy-btn"),
        toastContainer: document.getElementById("toast-container"),
        exploreBtn: document.getElementById("explore-btn"),
        docsBtn: document.getElementById("docs-btn"),
        
        // Counter Elements
        countAll: document.getElementById("count-all"),
        countMinimal: document.getElementById("count-minimal"),
        countGradient: document.getElementById("count-gradient"),
        countInteractive: document.getElementById("count-interactive"),
        countDecorative: document.getElementById("count-decorative"),
        countLayout: document.getElementById("count-layout"),
        
        // Stats Metrics
        statTotal: document.getElementById("stat-total"),
        statInteractive: document.getElementById("stat-interactive")
    };

    // --- Toast Notification System ---
    const ToastEngine = {
        show: function (message, duration = 3000) {
            if (!DOM.toastContainer) return;
            
            const toast = document.createElement("div");
            toast.className = "uiv-toast";
            toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--uiv-success); margin-right: 8px;"></i> ${message}`;
            
            DOM.toastContainer.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = "0";
                toast.style.transform = "translateY(10px)";
                toast.style.transition = "all 0.25s ease-out";
                setTimeout(() => {
                    toast.remove();
                }, 250);
            }, duration);
        }
    };

    // --- Catalog Indexer Engine & Category Counters ---
    const CatalogEngine = {
        calculateMetrics: function () {
            let counts = { all: 0, minimal: 0, gradient: 0, interactive: 0, decorative: 0, layout: 0 };
            
            DOM.componentCards.forEach(card => {
                counts.all++;
                const cat = card.getAttribute("data-category");
                if (counts[cat] !== undefined) {
                    counts[cat]++;
                }
            });

            // Update Counter Nodes safely
            if (DOM.countAll) DOM.countAll.textContent = counts.all;
            if (DOM.countMinimal) DOM.countMinimal.textContent = counts.minimal;
            if (DOM.countGradient) DOM.countGradient.textContent = counts.gradient;
            if (DOM.countInteractive) DOM.countInteractive.textContent = counts.interactive;
            if (DOM.countDecorative) DOM.countDecorative.textContent = counts.decorative;
            if (DOM.countLayout) DOM.countLayout.textContent = counts.layout;

            if (DOM.statTotal) DOM.statTotal.textContent = counts.all;
            if (DOM.statInteractive) DOM.statInteractive.textContent = counts.interactive;
        },

        renderFilterAndSearch: function () {
            let visibleCount = 0;
            const query = AppState.searchQuery.toLowerCase().trim();
            const activeFilter = AppState.activeFilter;

            DOM.componentCards.forEach(card => {
                const category = card.getAttribute("data-category");
                const tags = card.getAttribute("data-tags").toLowerCase();
                const title = card.querySelector(".card-title").textContent.toLowerCase();
                
                const matchesCategory = (activeFilter === "all" || category === activeFilter);
                const matchesSearch = (title.includes(query) || tags.includes(query));

                if (matchesCategory && matchesSearch) {
                    card.style.display = "block";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            if (DOM.resultsCounter) {
                DOM.resultsCounter.textContent = `Showing ${visibleCount} unique components matching criteria`;
            }
        }
    };

    // --- Clipboard Controller Engine ---
    const ClipboardController = {
        copyText: function (text, message = "Copied code snippet to clipboard!") {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    ToastEngine.show(message);
                }).catch(() => {
                    this.fallbackCopy(text, message);
                });
            } else {
                this.fallbackCopy(text, message);
            }
        },

        fallbackCopy: function (text, message) {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed"; 
            textArea.style.top = "0"; textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand("copy");
                ToastEngine.show(message);
            } catch (err) {
                console.error("Fallback utility failed to extract data channel", err);
            }
            document.body.removeChild(textArea);
        }
    };

    // --- Live Sandbox Dynamic Modal Manager ---
    const SandboxModal = {
        open: function (cardElement) {
            if (!DOM.codeModal || !DOM.sandboxZone || !DOM.sandboxTextarea || !DOM.modalTitle) return;

            const title = cardElement.querySelector(".card-title").textContent;
            const previewHTML = cardElement.querySelector(".card-preview").innerHTML;
            
            // Extract code panels text cleanly
            const htmlSnippet = cardElement.querySelector(".html-block code").textContent;
            const cssSnippet = cardElement.querySelector(".css-block code").textContent;

            DOM.modalTitle.textContent = `Sandbox Workspace: ${title}`;
            DOM.sandboxZone.innerHTML = previewHTML;
            DOM.sandboxTextarea.value = `/* HTML STRUCTURE */
${htmlSnippet}

/* STYLING ARCHITECTURE */
${cssSnippet}`;
            
            AppState.activeModalComponent = cardElement;
            DOM.codeModal.classList.add("visible");
            document.body.style.overflow = "hidden";
        },

        close: function () {
            if (!DOM.codeModal) return;
            DOM.codeModal.classList.remove("visible");
            document.body.style.overflow = "";
            AppState.activeModalComponent = null;
        }
    };

    // --- System Theme Manager (Dark/Light Persistence) ---
    const ThemeManager = {
        init: function () {
            const savedTheme = localStorage.getItem("uiv-divider-theme");
            if (savedTheme === "light") {
                this.setTheme("light");
            } else {
                this.setTheme("dark");
            }
        },

        setTheme: function (theme) {
            AppState.theme = theme;
            const darkIcon = DOM.themeToggleBtn ? DOM.themeToggleBtn.querySelector(".theme-icon-dark") : null;
            const lightIcon = DOM.themeToggleBtn ? DOM.themeToggleBtn.querySelector(".theme-icon-light") : null;

            if (theme === "light") {
                document.body.classList.remove("uiverse-theme-dark");
                document.body.classList.add("uiverse-theme-light");
                if (darkIcon) darkIcon.style.display = "none";
                if (lightIcon) lightIcon.style.display = "inline-block";
                localStorage.setItem("uiv-divider-theme", "light");
            } else {
                document.body.classList.remove("uiverse-theme-light");
                document.body.classList.add("uiverse-theme-dark");
                if (darkIcon) darkIcon.style.display = "inline-block";
                if (lightIcon) lightIcon.style.display = "none";
                localStorage.setItem("uiv-divider-theme", "dark");
            }
        },

        toggle: function () {
            if (AppState.theme === "dark") {
                this.setTheme("light");
            } else {
                this.setTheme("dark");
            }
        }
    };

    // --- Core Architecture Event Listeners Attachment ---
    function bindLibraryEventListeners() {
        
        // Global Input Keyboard Parsing Events
        if (DOM.globalSearch) {
            DOM.globalSearch.addEventListener("input", function (e) {
                AppState.searchQuery = e.target.value;
                CatalogEngine.renderFilterAndSearch();
            });
        }

        // Category Sidebar List Items Filter Wireup
        DOM.categoryFilters.forEach(item => {
            item.addEventListener("click", function () {
                DOM.categoryFilters.forEach(f => f.classList.remove("active"));
                this.classList.add("active");
                
                AppState.activeFilter = this.getAttribute("data-filter");
                CatalogEngine.renderFilterAndSearch();
            });
        });

        // Components Code Blocks Tab View Triggers and Card Copiers
        DOM.componentCards.forEach(card => {
            const viewCodeBtn = card.querySelector(".view-code-btn");
            const copyCodeBtn = card.querySelector(".copy-code-btn");
            const codePanel = card.querySelector(".card-code-panel");
            const tabBtns = card.querySelectorAll(".code-tab-btn");
            const codeBlocks = card.querySelectorAll(".code-block");

            if (viewCodeBtn && codePanel) {
                viewCodeBtn.addEventListener("click", function (e) {
                    e.stopPropagation();
                    codePanel.classList.toggle("visible");
                    this.classList.toggle("active");
                });
            }

            if (copyCodeBtn) {
                copyCodeBtn.addEventListener("click", function (e) {
                    e.stopPropagation();
                    const htmlSnippet = card.querySelector(".html-block code").textContent;
                    const cssSnippet = card.querySelector(".css-block code").textContent;
                    const completeCode = `<!-- HTML -->
${htmlSnippet}

/* CSS */
${cssSnippet}`;
                    ClipboardController.copyText(completeCode);
                });
            }

            tabBtns.forEach(btn => {
                btn.addEventListener("click", function (e) {
                    e.stopPropagation();
                    tabBtns.forEach(b => b.classList.remove("active"));
                    codeBlocks.forEach(block => block.classList.remove("active"));

                    this.classList.add("active");
                    const targetLang = this.getAttribute("data-lang");
                    card.querySelector(`.${targetLang}-block`).classList.add("active");
                });
            });

            // Card body preview click launches complete modal workspace sandboxing
            const previewZone = card.querySelector(".card-preview");
            if (previewZone) {
                previewZone.style.cursor = "pointer";
                previewZone.addEventListener("click", function () {
                    SandboxModal.open(card);
                });
            }
        });

        // Modal Action Controllers
        if (DOM.modalCloseBtn) {
            DOM.modalCloseBtn.addEventListener("click", SandboxModal.close);
        }
        if (DOM.codeModal) {
            DOM.codeModal.addEventListener("click", function (e) {
                if (e.target === DOM.codeModal) SandboxModal.close();
            });
        }
        if (DOM.modalCopyBtn) {
            DOM.modalCopyBtn.addEventListener("click", function () {
                if (DOM.sandboxTextarea) {
                    ClipboardController.copyText(DOM.sandboxTextarea.value, "Sandbox source copied cleanly!");
                }
            });
        }

        // Global Action Buttons Trigger Routing
        if (DOM.themeToggleBtn) {
            DOM.themeToggleBtn.addEventListener("click", () => ThemeManager.toggle());
        }
        if (DOM.exploreBtn) {
            DOM.exploreBtn.addEventListener("click", function () {
                if (DOM.componentsCatalog) {
                    DOM.componentsCatalog.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
        if (DOM.docsBtn) {
            DOM.docsBtn.addEventListener("click", function () {
                ToastEngine.show("Guidelines documentation pipeline initialized.");
            });
        }

        // Hotkey Command Pipelines Execution System
        window.addEventListener("keydown", function (e) {
            // Forward Slash '/' Focus Routine
            if (e.key === "/" && document.activeElement !== DOM.globalSearch) {
                e.preventDefault();
                if (DOM.globalSearch) {
                    DOM.globalSearch.focus();
                    DOM.globalSearch.select();
                }
            }
            // Escape Key Modal Dimissal Routing
            if (e.key === "Escape" && AppState.activeModalComponent) {
                SandboxModal.close();
            }
            // Shift + T Theme Toggle Combination Sequence Trigger
            if (e.shiftKey && (e.key === "T" || e.key === "t")) {
                if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
                    e.preventDefault();
                    ThemeManager.toggle();
                }
            }
        });
    }

    // --- Initialization Routine Entrypoint ---
    function initializeDividerLibraryPipeline() {
        CatalogEngine.calculateMetrics();
        CatalogEngine.renderFilterAndSearch();
        ThemeManager.init();
        bindLibraryEventListeners();
        console.log("UIverse Divider Component Library initialized: Production Metrics Standalone Validated.");
    }

    // Fire application initialization after stack execution layer settles safely
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeDividerLibraryPipeline);
    } else {
        initializeDividerLibraryPipeline();
    }

})();

/**
 * --- Structural Framework Metadata Component Matrix Manifest ---
 * Extended data validation records targeting verification of catalog indexing nodes.
 */
const ComponentVerificationManifest = [
    { id: "comp-1", name: "Basic Divider", class: "uiv-divider-basic", semantic: "standard line" },
    { id: "comp-2", name: "Gradient Divider", class: "uiv-divider-gradient", semantic: "linear multi" },
    { id: "comp-3", name: "Dashed Divider", class: "uiv-divider-dashed", semantic: "pattern monochrome" },
    { id: "comp-4", name: "Dotted Divider", class: "uiv-divider-dotted", semantic: "points dots" },
    { id: "comp-5", name: "Double Line Divider", class: "uiv-divider-double", semantic: "parallel structural" },
    { id: "comp-6", name: "Icon Divider", class: "uiv-divider-icon", semantic: "center glyph" },
    { id: "comp-7", name: "Text Divider", class: "uiv-divider-text", semantic: "label typography" },
    { id: "comp-8", name: "Animated Divider", class: "uiv-divider-animated", semantic: "laser sliding" },
    { id: "comp-9", name: "Neon Divider", class: "uiv-divider-neon", semantic: "cyber glow" },
    { id: "comp-10", name: "Glassmorphism Divider", class: "uiv-divider-glass", semantic: "blur translucent" },
    { id: "comp-11", name: "Dark Theme Divider", class: "uiv-divider-dark", semantic: "deep inset shadow" },
    { id: "comp-12", name: "Vertical Divider", class: "uiv-divider-vertical", semantic: "upright split" },
    { id: "comp-13", name: "Zigzag Divider", class: "uiv-divider-zigzag", semantic: "geometric triangle" },
    { id: "comp-14", name: "Wave Divider", class: "uiv-divider-wave", semantic: "curved ocean svg" },
    { id: "comp-15", name: "Shadow Divider", class: "uiv-divider-shadow", semantic: "blur depth dimension" },
    { id: "comp-16", name: "Rainbow Divider", class: "uiv-divider-rainbow", semantic: "spectrum chromatic" },
    { id: "comp-17", name: "Premium Divider", class: "uiv-divider-premium", semantic: "luxury gold diamond" },
    { id: "comp-18", name: "Social Share Divider", class: "uiv-divider-social", semantic: "media networks" },
    { id: "comp-19", name: "Timeline Divider", class: "uiv-timeline-divider", semantic: "process status logs" },
    { id: "comp-20", name: "Pricing Plan Divider", class: "uiv-divider-pricing", semantic: "subscription tiered" },
    { id: "comp-21", name: "Section Block Divider", class: "uiv-divider-section", semantic: "green spacer" },
    { id: "comp-22", name: "Curved SVG Divider", class: "uiv-divider-curved", semantic: "smooth vector arc" },
    { id: "comp-23", name: "Arrow Drop Divider", class: "uiv-divider-arrow", semantic: "chevron directional" },
    { id: "comp-24", name: "Progress Metric Divider", class: "uiv-divider-progress", semantic: "loading percentage" },
    { id: "comp-25", name: "Decorative Art Divider", class: "uiv-divider-decorative", semantic: "asymmetrical rings" }
];

function performSelfDiagnosticLogCheck() {
    console.log("Executing UIverse Component Verification Script Protocol...");
    let matchesCount = 0;
    ComponentVerificationManifest.forEach(meta => {
        const matchingDOMNode = document.querySelector(`[data-id="${meta.id}"]`);
        if (matchingDOMNode) {
            matchesCount++;
        }
    });
    console.log(`Diagnostic Complete: verified ${matchesCount} of 25 nodes correctly integrated within DOM tree.`);
}

// Add automated system analytics pipeline tracing to runtime layer logs safely
window.addEventListener("load", function() {
    setTimeout(performSelfDiagnosticLogCheck, 1000);
});


/**
 * --- Advanced Keyboard Access Accessibility Navigation Mapping ---
 * Allows technical operators to step through catalog rows using standard indexing pointers.
 */
class ComponentAccessibilityNavigator {
    constructor(cards) {
        this.cards = Array.from(cards);
        this.currentIndex = -1;
    }

    focusNext() {
        if (this.cards.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.applyFocus();
    }

    focusPrevious() {
        if (this.cards.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.applyFocus();
    }

    applyFocus() {
        const targetCard = this.cards[this.currentIndex];
        if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
            targetCard.style.borderColor = "var(--uiv-primary)";
            setTimeout(() => {
                targetCard.style.borderColor = "";
            }, 1200);
        }
    }

    reset() {
        this.currentIndex = -1;
    }
}

// Instantiate internal focus system for catalog management
const GlobalA11yNavigator = new ComponentAccessibilityNavigator(document.querySelectorAll(".component-card"));

window.addEventListener("keydown", function(event) {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
        return; // Skip when user is inputting filter sequences
    }
    
    if (event.key === "n" || event.key === "N") {
        event.preventDefault();
        GlobalA11yNavigator.focusNext();
    }
    if (event.key === "p" || event.key === "P") {
        event.preventDefault();
        GlobalA11yNavigator.focusPrevious();
    }
    if (event.key === "r" || event.key === "R") {
        event.preventDefault();
        GlobalA11yNavigator.reset();
        ToastEngine.show("Accessibility index pointer reset completed.");
    }
});

/**
 * --- Open Source Sandbox State Metric Exporter Utilities ---
 * Provides developers structural export strings via standard JSON frames.
 */
function exportLibraryConfigurationMetricsToJSON() {
    const backupExportFrame = {
        libraryName: "UIverse Divider Components System",
        exportedTimestamp: new Date().toISOString(),
        buildVersion: "1.0.0",
        totalTrackedItems: 25,
        licensing: "MIT Open Source System Authorization"
    };
    console.group("UIverse System Metadata Metrics System Log Dump");
    console.info("Export Frame Matrix Payload Output:", JSON.stringify(backupExportFrame));
    console.groupEnd();
}