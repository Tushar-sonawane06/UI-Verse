/* ==========================================================================
   1. CORE DESIGN SYSTEM DESIGN TOKENS & INTUITIVE TOKENS DEFINITIONS
   ========================================================================== */
:root {
    /* Color Palette Layout Coordinates - Rich Ultra Contrast Dark Palette */
    --primary-hsl: 239, 84%, 66%;
    --primary: hsl(var(--primary-hsl));
    --primary-hover: hsl(239, 84%, 58%);
    --primary-light: hsla(var(--primary-hsl), 0.1);
    --primary-solid-light: #1e293b;
    --primary-accent: #a855f7;
    --accent-pink: #ec4899;

    /* High-Performance Fluid Layout Gradients Baseline Matrix */
    --gradient-main: linear-gradient(135deg, #090d16 0%, #05070f 50%, #020307 100%);
    --gradient-accent: linear-gradient(135deg, var(--primary), var(--primary-accent));
    --gradient-card: linear-gradient(180deg, rgba(19, 27, 46, 0.7) 0%, rgba(11, 15, 26, 0.85) 100%);
    
    /* Hardware Layer Compositing Pass Filters Parameters */
    --glass-filter: blur(16px);
    --glass-border: 1px solid rgba(255, 255, 255, 0.06);
    
    /* Functional Semantic Functional Tokens Mappings */
    --success: #10b981;
    --success-light: rgba(16, 185, 129, 0.12);
    --success-border: rgba(16, 185, 129, 0.2);
    
    --warning: #f59e0b;
    --warning-light: rgba(245, 158, 11, 0.12);
    
    --danger: #ef4444;
    --danger-light: rgba(239, 68, 68, 0.12);
    --danger-border: rgba(239, 68, 68, 0.2);

    /* Interface Surfaces Mappings Elements */
    --bg-main: #090d16;
    --bg-card: #131b2e;
    --border-color: #1e2b44;
    --text-main: #f1f5f9;
    --text-muted: #8495aa;
    --text-on-sidebar: #94a3b8;
    --code-bg: #1e1e2e;
    
    /* Geometric Border Metrics Scale */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-round: 9999px;
    
    /* Box Elevation Drop Shadow Structures */
    --shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 12px 0 rgba(0, 0, 0, 0.35);
    --shadow-lg: 0 12px 32px 0 rgba(0, 0, 0, 0.5);
    
    /* Kinematic Animation Performance Physics Timing Curves */
    --transition-speed: 0.35s;
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    /* Runtime Structural Flag Variables */
    --global-animation-state: running;
}

/* ==========================================================================
   2. THE DYNAMIC LOW-POWER SWITCH OVERRIDE MATRIX STYLES
   ========================================================================== */
body.low-power-saving {
    /* Instantly strip complex color matrix processing demands */
    --gradient-main: #05070e;
    --gradient-accent: #6366f1;
    --gradient-card: #101726;
    --bg-main: #05070e;
    --bg-card: #101726;
    
    /* Deallocate hardware filters layers to eliminate layer reflow thrashing */
    --glass-filter: none !important;
    --glass-border: 1px solid var(--border-color);
    
    /* Wipe out box-shadow blur paths to bypass expensive layout rastering passes */
    --shadow-sm: none !important;
    --shadow-md: none !important;
    --shadow-lg: none !important;
    
    /* Freeze active timeline triggers inside native rendering loops */
    --global-animation-state: paused !important;
    --transition-speed: 0s !important;
}

/* Hard Drop Cascade to Freeze All Active Element Timeline Operations */
body.low-power-saving *,
body.low-power-saving *::before,
body.low-power-saving *::after {
    animation-duration: 0s !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
}

/* ==========================================================================
   3. PROJECT CSS STYLES RESET BASES
   ========================================================================== */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    scroll-behavior: smooth;
    text-size-adjust: 100%;
}

body {
    background: var(--gradient-main);
    color: var(--text-main);
    line-height: 1.5;
    overflow-x: hidden;
    min-height: 100vh;
    transition: background var(--transition-speed) var(--ease-smooth),
                background-color var(--transition-speed) var(--ease-smooth);
}

/* Focus Utility Enforcer Latch Indicators */
:focus-visible {
    outline: 2px dashed var(--primary);
    outline-offset: 4px;
}

/* Custom Scrollbar Profiles Structures */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: var(--radius-round);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
}

/* ==========================================================================
   4. CENTRAL WORKSPACE LAYOUT CONTAINER BLUEPRINTS
   ========================================================================== */
.hub-wrapper {
    display: flex;
    min-height: 100vh;
    position: relative;
}

/* Control Panel Sidebar Layer Layout */
.hub-sidebar {
    width: 280px;
    background-color: rgba(15, 23, 42, 0.85);
    backdrop-filter: var(--glass-filter);
    -webkit-backdrop-filter: var(--glass-filter);
    border-right: var(--glass-border);
    color: #ffffff;
    padding: 2.5rem 1.5rem;
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    z-index: 1000;
    transition: transform var(--transition-speed) var(--ease-smooth),
                background-color var(--transition-speed),
                border var(--transition-speed);
}

.hub-brand {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    font-size: 1.4rem;
    font-weight: 800;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: -0.5px;
}

.hub-brand i {
    background: linear-gradient(135deg, var(--primary), var(--primary-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.75rem;
}

.sidebar-segment {
    margin-top: 3rem;
}

.sidebar-heading {
    font-size: 0.725rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: rgba(255, 255, 255, 0.25);
    margin-bottom: 1rem;
    font-weight: 700;
    padding-left: 0.75rem;
}

.sidebar-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.sidebar-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1.15rem;
    color: var(--text-on-sidebar);
    text-decoration: none;
    border-radius: var(--radius-sm);
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition-fast) var(--ease-smooth);
}

.sidebar-link i {
    width: 20px;
    font-size: 1.1rem;
    text-align: center;
}

.sidebar-link:hover {
    background-color: rgba(255, 255, 255, 0.03);
    color: #ffffff;
}

.sidebar-link.active {
    background-color: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    font-weight: 600;
}

.sidebar-link.active i {
    color: var(--primary);
}

/* Core Main Runway Display Context Area */
.hub-main {
    flex: 1;
    margin-left: 280px;
    padding: 2.5rem 4rem;
    max-width: 1500px;
    width: calc(100% - 280px);
    transition: margin var(--transition-speed) var(--ease-smooth);
}

/* ==========================================================================
   5. HOUSING MASTER HEADERS CONFIGURATION UTILITIES
   ========================================================================== */
.hub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid var(--border-color);
    transition: border var(--transition-speed);
}

.header-title h1 {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--text-main);
    letter-spacing: -0.75px;
}

.header-title p {
    color: var(--text-muted);
    font-size: 1rem;
    margin-top: 0.35rem;
    transition: color var(--transition-speed);
}

/* ==========================================================================
   6. TWO-COLUMN ECOSYSTEM GRIDS & BOX BLUEPRINTS
   ========================================================================== */
.sandbox-workspace-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 2.75rem;
    align-items: start;
}

.workspace-block-card {
    background: var(--gradient-card);
    backdrop-filter: var(--glass-filter);
    -webkit-backdrop-filter: var(--glass-filter);
    border: var(--glass-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform var(--transition-speed) var(--ease-smooth), 
                box-shadow var(--transition-speed) var(--ease-smooth),
                background var(--transition-speed),
                border var(--transition-speed);
}

.workspace-block-card:hover {
    border-color: hsla(var(--primary-hsl), 0.25);
    box-shadow: var(--shadow-lg);
}

body.low-power-saving .workspace-block-card:hover {
    border-color: var(--border-color);
    box-shadow: none;
}

.block-header-bar {
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.005);
    transition: border var(--transition-speed);
}

.block-heading-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-main);
}

.block-badge {
    font-size: 0.7rem;
    padding: 0.25rem 0.65rem;
    border-radius: var(--radius-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.block-body-canvas {
    padding: 2.5rem;
}

/* ==========================================================================
   7. THE CORE COMPONENT LAYOUT: REUSABLE DYNAMIC SELECTION SWITCH
   ========================================================================== */
.uv-efficiency-widget-wrapper {
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    transition: background-color var(--transition-speed), border var(--transition-speed);
}

.widget-meta-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
}

.widget-meta-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-main);
    letter-spacing: -0.25px;
}

.widget-meta-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-weight: 500;
    line-height: 1.4;
    transition: color var(--transition-speed);
}

/* The Structural Inline label Custom Component Housing Switch */
.uv-switch-toggle-label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
}

.uv-switch-hidden-checkbox {
    display: none;
}

.uv-switch-track-hull {
    width: 60px;
    height: 32px;
    background-color: #334155;
    border-radius: var(--radius-round);
    position: relative;
    padding: 5px;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    transition: background-color var(--transition-speed) var(--ease-smooth),
                box-shadow var(--transition-speed);
}

body.low-power-saving .uv-switch-track-hull {
    box-shadow: none;
}

.uv-switch-thumb-node {
    width: 22px;
    height: 22px;
    background-color: #ffffff;
    border-radius: var(--radius-round);
    position: absolute;
    top: 5px;
    left: 5px;
    box-shadow: var(--shadow-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #64748b;
    transition: transform var(--transition-speed) var(--ease-bounce), 
                background-color var(--transition-speed),
                color var(--transition-speed),
                box-shadow var(--transition-speed);
}

/* State Variable Modification Selections Chains */
.uv-switch-hidden-checkbox:checked + .uv-switch-track-hull {
    background-color: var(--success);
}

.uv-switch-hidden-checkbox:checked + .uv-switch-track-hull .uv-switch-thumb-node {
    transform: translateX(28px);
    color: var(--success);
}

/* ==========================================================================
   8. PERFORMANCE DOCK HOUSING AREA (ANIMATION LOOPS GENERATORS)
   ========================================================================== */
.performance-testing-dock {
    margin-top: 2.25rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
}

.anim-staged-box {
    background-color: rgba(0, 0, 0, 0.08);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 2.25rem 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    position: relative;
    overflow: hidden;
    transition: border var(--transition-speed);
}

.anim-box-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--text-muted);
    margin-bottom: 1.25rem;
    font-weight: 700;
    transition: color var(--transition-speed);
}

/* Rendering Target 1: Infinite 3D Matrix Cube Loops */
.heavy-spinning-cube {
    width: 44px;
    height: 44px;
    background: linear-gradient(45deg, var(--primary), var(--accent-pink));
    border-radius: var(--radius-sm);
    animation: constantCubeMatrixRotate 3s infinite linear;
    animation-play-state: var(--global-animation-state);
    box-shadow: 0 0 24px 0 rgba(99, 102, 241, 0.45);
    transition: box-shadow var(--transition-speed);
}

@keyframes constantCubeMatrixRotate {
    0% { transform: rotate(0deg) scale(1); filter: hue-rotate(0deg); }
    50% { transform: rotate(180deg) scale(1.18); filter: hue-rotate(180deg); }
    100% { transform: rotate(360deg) scale(1); filter: hue-rotate(360deg); }
}

/* Rendering Target 2: Ambient Radial Shadow Wave Pulsars */
.heavy-halo-pulsar {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-round);
    background-color: var(--accent-purple);
    position: relative;
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--transition-speed);
}

.heavy-halo-pulsar::before,
.heavy-halo-pulsar::after {
    content: '';
    position: absolute;
    top: -12px; left: -12px; right: -12px; bottom: -12px;
    border: 2.5px solid var(--accent-purple);
    border-radius: var(--radius-round);
    opacity: 0;
    animation: waveRadialDisplacement 2.2s infinite linear;
    animation-play-state: var(--global-animation-state);
}

.heavy-halo-pulsar::after {
    animation-delay: 1.1s;
}

@keyframes waveRadialDisplacement {
    0% { transform: scale(0.55); opacity: 0; }
    50% { opacity: 0.55; }
    100% { transform: scale(1.45); opacity: 0; box-shadow: inset 0 0 12px rgba(168, 85, 247, 0.5); }
}

/* ==========================================================================
   9. SIMULATED TECH DATA TELEMETRY READOUT PANELS
   ========================================================================== */
.telemetry-dashboard-panel {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.metric-row-tracker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.925rem;
    font-weight: 600;
}

.metric-value-output {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1rem;
    color: var(--primary);
    font-weight: 700;
    transition: color var(--transition-speed);
}

/* Simulated Graphic Feed Line Channels Modules */
.simulated-graph-track {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.18);
    border: 1.5px solid var(--border-color);
    border-radius: var(--radius-sm);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 0 5px;
    gap: 2px;
    transition: border var(--transition-speed);
}

.graph-bar-node {
    flex: 1;
    background-color: var(--primary);
    height: 35%;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    opacity: 0.85;
    transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1), 
                background-color var(--transition-speed);
}

/* ==========================================================================
   10. AUTOMATED SANDBOX PLAYGROUND TECHNICAL SPEC DRAWERS
   ========================================================================== */
.inspector-control-housing {
    margin-top: 4rem;
}

.inspector-action-bar {
    padding: 0.85rem 1.75rem;
    display: flex;
    justify-content: flex-end;
    border: 1px solid var(--border-color);
    border-bottom: none;
    background-color: rgba(0, 0, 0, 0.005);
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
    transition: border var(--transition-speed);
}

.code-drawer-housing {
    max-height: 0;
    overflow: hidden;
    background-color: var(--code-bg);
    border-bottom-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
    transition: max-height var(--transition-normal) cubic-bezier(0, 1, 0, 1);
}

.code-drawer-housing.open {
    max-height: 2000px;
    border: 1px solid var(--code-bg);
    transition: max-height var(--transition-slow) cubic-bezier(1, 0, 1, 0);
}

.code-block-wrapper {
    padding: 1.75rem;
    position: relative;
}

.code-block-wrapper pre {
    margin: 0;
    overflow-x: auto;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.85rem;
    color: #a9b1d6;
    line-height: 1.6;
}

.copy-floating-trigger {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    padding: 0.45rem 0.95rem;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-fast) var(--ease-smooth);
}

.copy-floating-trigger:hover {
    background: var(--primary);
    border-color: var(--primary);
    transform: translateY(-1px);
}

/* ==========================================================================
   11. SYSTEM OVERLAY NOTIFICATION ALERT TOAST SYSTEMS
   ========================================================================== */
.toast-system-overlay-hub {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    z-index: 999999;
    pointer-events: none;
}

.toast-popup-node {
    pointer-events: auto;
    background-color: rgba(15, 23, 42, 0.95);
    color: #ffffff;
    padding: 1.1rem 1.6rem;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-xl);
    display: flex;
    align-items: center;
    gap: 0.85rem;
    font-size: 0.925rem;
    font-weight: 500;
    min-width: 320px;
    max-width: 480px;
    border-left: 4px solid var(--primary);
    transform: translateY(120px) scale(0.9);
    opacity: 0;
    animation: pushToastIn 0.38s forwards var(--ease-bounce);
}

@keyframes pushToastIn {
    to { 
        transform: translateY(0) scale(1); 
        opacity: 1; 
    }
}

/* ==========================================================================
   12. HARDWARE PLATFORM ADAPTER RESPONSIVE BREAKPOINTS
   ========================================================================== */
@media (max-width: 1250px) {
    .sandbox-workspace-grid {
        gap: 2rem;
    }
    .hub-main {
        padding: 2.5rem 2.5rem;
    }
}

@media (max-width: 1150px) {
    .sandbox-workspace-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
}

@media (max-width: 992px) {
    .hub-sidebar {
        transform: translateX(-280px);
    }
    /* Dynamic active handles targets for mobile toggle expansion configurations */
    .hub-sidebar.mobile-open {
        transform: translateX(0);
    }
    .hub-main {
        margin-left: 0;
        width: 100%;
        padding: 2rem 2rem;
    }
}

@media (max-width: 576px) {
    .hub-main {
        padding: 1.5rem 1.25rem;
    }
    .hub-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.25rem;
    }
    .block-body-canvas {
        padding: 1.75rem 1.25rem;
    }
    .uv-efficiency-widget-wrapper {
        padding: 1.25rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }
    .uv-switch-toggle-label {
        align-self: flex-end;
    }
    .performance-testing-dock {
        grid-template-columns: 1fr;
    }
    .toast-system-overlay-hub {
        left: 1.25rem;
        right: 1.25rem;
        bottom: 1.25rem;
    }
    .toast-popup-node {
        min-width: 100%;
    }
}
/* ==========================================================================
   END OF CORE STYLE BUILD - UI-VERSE 2026
   ========================================================================== */