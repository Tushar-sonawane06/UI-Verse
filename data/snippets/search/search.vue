<template>
<main class="main-home">

  <header class="page-header">
    <h1>Search Components</h1>
    <p>Modern interactive search UI layouts and responsive search experiences using HTML, CSS, and Vanilla JavaScript.</p>
  </header>

  <!-- ======= SEARCH + SORT TOOLBAR ======= -->
  <div class="toolbar">
    <div class="toolbar-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" id="componentSearch" placeholder="Filter components..." autocomplete="off">
    </div>

    <div class="sort-dropdown-wrapper" id="sortWrapper">
      <button class="sort-trigger" id="sortTrigger" onclick="toggleSortMenu()">
        <i class="fa-solid fa-sort"></i>
        <span id="sortLabel">Order</span>
        <i class="fa-solid fa-chevron-down sort-chevron" id="sortChevron"></i>
      </button>
      <div class="sort-menu" id="sortMenu">
        <label class="sort-option">
          <span>Default</span>
          <input type="radio" name="sort" value="default" checked onchange="sortCards('default')">
          <span class="radio-dot"></span>
        </label>
        <label class="sort-option">
          <span>A → Z</span>
          <input type="radio" name="sort" value="az" onchange="sortCards('az')">
          <span class="radio-dot"></span>
        </label>
        <label class="sort-option">
          <span>Z → A</span>
          <input type="radio" name="sort" value="za" onchange="sortCards('za')">
          <span class="radio-dot"></span>
        </label>
      </div>
    </div>

    <span class="results-count" id="resultsCount">20 components</span>
  </div>

  <section class="search-grid">

    <!-- 1. EXPANDING SEARCH BAR -->
    <div class="search-card">
      <div class="search-info">
        <h2>Expanding Search Bar</h2>
        <p>A compact icon that expands into a full input on focus.</p>
      </div>
      <div class="component-preview" id="preview-1">
        <div class="expanding-search">
          <input type="text" placeholder="Search..." />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-1">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 2. GLASSMORPHISM SEARCH INPUT -->
    <div class="search-card">
      <div class="search-info">
        <h2>Glassmorphism Search</h2>
        <p>A beautiful translucent search bar with blur effects.</p>
      </div>
      <div class="component-preview" id="preview-2">
        <div class="glass-search-wrapper">
          <input type="text" class="glass-search" placeholder="Type to search..." />
          <i class="fa-solid fa-magnifying-glass glass-icon"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-2">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 3. COMMAND SEARCH BAR -->
    <div class="search-card">
      <div class="search-info">
        <h2>Command Search Bar</h2>
        <p>Keyboard-friendly search UI for power users.</p>
      </div>
      <div class="component-preview" id="preview-3">
        <div class="command-search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search commands..." />
          <kbd>⌘K</kbd>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-3">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 4. ANIMATED SEARCH BAR -->
    <div class="search-card">
      <div class="search-info">
        <h2>Animated Search Bar</h2>
        <p>Smooth focus transitions and animated icons.</p>
      </div>
      <div class="component-preview" id="preview-4">
        <div class="animated-search">
          <input type="text" placeholder="What are you looking for?" />
          <i class="fa-solid fa-magnifying-glass animated-icon"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-4">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 5. MINIMAL SEARCH COMPONENT -->
    <div class="search-card">
      <div class="search-info">
        <h2>Minimal Search Component</h2>
        <p>A clean, robust search input with an attached button.</p>
      </div>
      <div class="component-preview" id="preview-5">
        <div class="minimal-search">
          <input type="text" placeholder="Enter keyword..." />
          <button>Search</button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-5">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 6. FLOATING SEARCH BAR -->
    <div class="search-card">
      <div class="search-info">
        <h2>Floating Search Bar</h2>
        <p>A modern text input where the placeholder floats and transforms elegantly on focus.</p>
      </div>
      <div class="component-preview" id="preview-6">
        <div class="floating-search">
          <input type="text" placeholder=" " id="floating-input" />
          <label for="floating-input">Search UIverse...</label>
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-6">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 7. VOICE SEARCH INPUT -->
    <div class="search-card">
      <div class="search-info">
        <h2>Voice Search Input</h2>
        <p>A premium input that has a search icon and an animated voice microphone button.</p>
      </div>
      <div class="component-preview" id="preview-7">
        <div class="voice-search">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" placeholder="Search with voice..." />
          <button class="mic-btn"><i class="fa-solid fa-microphone"></i></button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-7">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 8. SEARCH BAR WITH SUGGESTIONS DROPDOWN -->
    <div class="search-card">
      <div class="search-info">
        <h2>Search with Suggestions</h2>
        <p>A smart input showing a clean, modern suggestions dropdown list on focus.</p>
      </div>
      <div class="component-preview" id="preview-8">
        <div class="suggestions-search">
          <div class="input-wrap">
            <input type="text" placeholder="Search templates..." />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul class="dropdown-list">
            <li><i class="fa-solid fa-clock-rotate-left"></i> Glassmorphism Card</li>
            <li><i class="fa-solid fa-clock-rotate-left"></i> Custom Navigation Bar</li>
            <li><i class="fa-solid fa-trend-up"></i> Premium Loaders</li>
            <li><i class="fa-solid fa-trend-up"></i> 3D Button Hover Effects</li>
          </ul>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-8">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 9. FULLSCREEN OVERLAY SEARCH -->
    <div class="search-card">
      <div class="search-info">
        <h2>Fullscreen Overlay Search</h2>
        <p>A premium fullscreen overlay search, engineered with 100% pure HTML & CSS.</p>
      </div>
      <div class="component-preview" id="preview-9">
        <div class="fullscreen-search-wrapper">
          <input type="checkbox" id="overlay-toggle" class="overlay-checkbox" style="display:none;" />
          <label for="overlay-toggle" class="trigger-btn">
            <i class="fa-solid fa-magnifying-glass"></i> Click to Search
          </label>
          <div class="overlay-search">
            <label for="overlay-toggle" class="close-btn"><i class="fa-solid fa-xmark"></i></label>
            <div class="search-box">
              <input type="text" placeholder="Type anything to search..." />
              <span class="hint">Click X to close overlay</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-9">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 10. MINIMAL ANIMATED SEARCH INPUT -->
    <div class="search-card">
      <div class="search-info">
        <h2>Minimal Animated Search</h2>
        <p>A clean line-based search input where the border expands into a beautiful gradient on focus.</p>
      </div>
      <div class="component-preview" id="preview-10">
        <div class="minimal-animated-search">
          <input type="text" placeholder="Search designs..." />
          <span class="border-line"></span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-10">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>



    <div class="search-card">
      <div class="search-info">
        <h2>Neumorphic Search</h2>
        <p>A soft, modern search input utilizing inset and outset neumorphic shadows.</p>
      </div>
      <div class="component-preview" id="preview-11">
        <div class="neumorphic-search">
          <input type="text" placeholder="Neumorphic search..." />
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-11">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="search-card">
      <div class="search-info">
        <h2>Cyberpunk Glow Search</h2>
        <p>A futuristic gaming-inspired search bar with neon border glows and angled corners.</p>
      </div>
      <div class="component-preview" id="preview-12">
        <div class="cyberpunk-search-wrapper">
          <div class="cyberpunk-search">
            <input type="text" placeholder="SYS_SEARCH..." />
            <button><i class="fa-solid fa-terminal"></i></button>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-12">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="search-card">
      <div class="search-info">
        <h2>Category Filter Search</h2>
        <p>A multi-functional input combining a quick dropdown selector and a search bar.</p>
      </div>
      <div class="component-preview" id="preview-13">
        <div class="category-search">
          <div class="category-select">
            <span>All</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <span class="category-divider"></span>
          <input type="text" placeholder="Search everything..." />
          <i class="fa-solid fa-magnifying-glass category-search-icon"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-13">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="search-card">
      <div class="search-info">
        <h2>Glow Ring Search</h2>
        <p>A premium design with an interactive, animated gradient boundary on focus.</p>
      </div>
      <div class="component-preview" id="preview-14">
        <div class="glow-ring-wrapper">
          <div class="glow-ring-bg"></div>
          <div class="glow-ring-search">
            <input type="text" placeholder="Search with style..." />
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-14">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <div class="search-card">
      <div class="search-info">
        <h2>Terminal Monospace Search</h2>
        <p>A vintage command-line theme featuring monospaced text and a blinking caret.</p>
      </div>
      <div class="component-preview" id="preview-15">
        <div class="terminal-search">
          <span class="terminal-prompt">src&gt;</span>
          <input type="text" placeholder="grep --color..." />
          <span class="terminal-cursor"></span>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-15">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 16. LIQUID BORDER SEARCH -->
    <div class="search-card">
      <div class="search-info">
        <h2>Liquid Border Search</h2>
        <p>A translucent input with a slow-moving, interactive morphing gradient liquid blob background.</p>
      </div>
      <div class="component-preview" id="preview-16">
        <div class="liquid-search-container">
          <div class="liquid-blob"></div>
          <div class="liquid-search-box">
            <i class="fa-solid fa-droplet"></i>
            <input type="text" placeholder="Morphing search..." />
            <button><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-16">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 17. LASER SCANNER SEARCH -->
    <div class="search-card">
      <div class="search-info">
        <h2>Laser Scanner Search</h2>
        <p>An input featuring a glowing cyan laser line running along the perimeter on focus.</p>
      </div>
      <div class="component-preview" id="preview-17">
        <div class="laser-search-wrapper">
          <div class="laser-search-input-wrap">
            <input type="text" placeholder="Laser scanning..." />
            <i class="fa-solid fa-bolt-lightning laser-icon"></i>
            <div class="laser-scanner-line"></div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-17">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 18. RADIAL REVEAL SEARCH -->
    <div class="search-card">
      <div class="search-info">
        <h2>Radial Reveal Search</h2>
        <p>Starts as a simple circular button and morphs dynamically with a radial scale-in animation.</p>
      </div>
      <div class="component-preview" id="preview-18">
        <div class="radial-search-wrapper">
          <input type="checkbox" id="radial-toggle" class="radial-toggle" />
          <div class="radial-search-wrapper">
            <label for="radial-toggle" class="radial-btn">
              <i class="fa-solid fa-magnifying-glass search-icon"></i>
              <i class="fa-solid fa-xmark close-icon"></i>
            </label>
            <div class="radial-input-box">
              <input type="text" placeholder="Search radial..." />
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-18">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 19. INTERACTIVE TAG PILL SEARCH -->
    <div class="search-card">
      <div class="search-info">
        <h2>Interactive Tag Pill Search</h2>
        <p>An advanced filter search bar with inline capsule tags that can be cleared individually.</p>
      </div>
      <div class="component-preview" id="preview-19">
        <div class="tag-search-container">
          <div class="tag-pills">
            <span class="tag-pill">UI <i class="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i></span>
            <span class="tag-pill">CSS <i class="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i></span>
          </div>
          <input type="text" placeholder="Add filters..." />
          <i class="fa-solid fa-filter"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-19">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

    <!-- 20. RETRO ARCADE CONSOLE SEARCH -->
    <div class="search-card">
      <div class="search-info">
        <h2>Retro Arcade Search</h2>
        <p>Styled like a retro 80s arcade gaming screen with neon green scanlines and a blinking pixel cursor.</p>
      </div>
      <div class="component-preview" id="preview-20">
        <div class="arcade-search-box">
          <div class="arcade-scanlines"></div>
          <span class="arcade-prefix">P1:</span>
          <input type="text" placeholder="INSERT COIN..." />
          <span class="arcade-cursor"></span>
          <i class="fa-solid fa-gamepad arcade-icon"></i>
        </div>
      </div>
      <div class="card-actions">
        <button class="copy-btn" data-target="preview-20">
          <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
        </button>
      </div>
    </div>

  </section>
</main>
</template>

<script>
export default { name: 'Search' }
</script>
