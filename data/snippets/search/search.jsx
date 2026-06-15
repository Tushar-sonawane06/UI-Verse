import React from 'react';

export default function search(){
  return (
    <>
      <main className="main-home">
      
        <header className="page-header">
          <h1>Search Components</h1>
          <p>Modern interactive search UI layouts and responsive search experiences using HTML, CSS, and Vanilla JavaScript.</p>
        </header>
      
        {/* ======= SEARCH + SORT TOOLBAR ======= */}
        <div className="toolbar">
          <div className="toolbar-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="componentSearch" placeholder="Filter components..." autocomplete="off" />
          </div>
      
          <div className="sort-dropdown-wrapper" id="sortWrapper">
            <button className="sort-trigger" id="sortTrigger" onclick="toggleSortMenu()">
              <i className="fa-solid fa-sort"></i>
              <span id="sortLabel">Order</span>
              <i className="fa-solid fa-chevron-down sort-chevron" id="sortChevron"></i>
            </button>
            <div className="sort-menu" id="sortMenu">
              <label className="sort-option">
                <span>Default</span>
                <input type="radio" name="sort" value="default" checked onchange="sortCards('default')" />
                <span className="radio-dot"></span>
              </label>
              <label className="sort-option">
                <span>A → Z</span>
                <input type="radio" name="sort" value="az" onchange="sortCards('az')" />
                <span className="radio-dot"></span>
              </label>
              <label className="sort-option">
                <span>Z → A</span>
                <input type="radio" name="sort" value="za" onchange="sortCards('za')" />
                <span className="radio-dot"></span>
              </label>
            </div>
          </div>
      
          <span className="results-count" id="resultsCount">20 components</span>
        </div>
      
        <section className="search-grid">
      
          {/* 1. EXPANDING SEARCH BAR */}
          <div className="search-card">
            <div className="search-info">
              <h2>Expanding Search Bar</h2>
              <p>A compact icon that expands into a full input on focus.</p>
            </div>
            <div className="component-preview" id="preview-1">
              <div className="expanding-search">
                <input type="text" placeholder="Search..." />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-1">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 2. GLASSMORPHISM SEARCH INPUT */}
          <div className="search-card">
            <div className="search-info">
              <h2>Glassmorphism Search</h2>
              <p>A beautiful translucent search bar with blur effects.</p>
            </div>
            <div className="component-preview" id="preview-2">
              <div className="glass-search-wrapper">
                <input type="text" className="glass-search" placeholder="Type to search..." />
                <i className="fa-solid fa-magnifying-glass glass-icon"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-2">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 3. COMMAND SEARCH BAR */}
          <div className="search-card">
            <div className="search-info">
              <h2>Command Search Bar</h2>
              <p>Keyboard-friendly search UI for power users.</p>
            </div>
            <div className="component-preview" id="preview-3">
              <div className="command-search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search commands..." />
                <kbd>⌘K</kbd>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-3">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 4. ANIMATED SEARCH BAR */}
          <div className="search-card">
            <div className="search-info">
              <h2>Animated Search Bar</h2>
              <p>Smooth focus transitions and animated icons.</p>
            </div>
            <div className="component-preview" id="preview-4">
              <div className="animated-search">
                <input type="text" placeholder="What are you looking for?" />
                <i className="fa-solid fa-magnifying-glass animated-icon"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-4">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 5. MINIMAL SEARCH COMPONENT */}
          <div className="search-card">
            <div className="search-info">
              <h2>Minimal Search Component</h2>
              <p>A clean, robust search input with an attached button.</p>
            </div>
            <div className="component-preview" id="preview-5">
              <div className="minimal-search">
                <input type="text" placeholder="Enter keyword..." />
                <button>Search</button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-5">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 6. FLOATING SEARCH BAR */}
          <div className="search-card">
            <div className="search-info">
              <h2>Floating Search Bar</h2>
              <p>A modern text input where the placeholder floats and transforms elegantly on focus.</p>
            </div>
            <div className="component-preview" id="preview-6">
              <div className="floating-search">
                <input type="text" placeholder=" " id="floating-input" />
                <label for="floating-input">Search UIverse...</label>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-6">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 7. VOICE SEARCH INPUT */}
          <div className="search-card">
            <div className="search-info">
              <h2>Voice Search Input</h2>
              <p>A premium input that has a search icon and an animated voice microphone button.</p>
            </div>
            <div className="component-preview" id="preview-7">
              <div className="voice-search">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" placeholder="Search with voice..." />
                <button className="mic-btn"><i className="fa-solid fa-microphone"></i></button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-7">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 8. SEARCH BAR WITH SUGGESTIONS DROPDOWN */}
          <div className="search-card">
            <div className="search-info">
              <h2>Search with Suggestions</h2>
              <p>A smart input showing a clean, modern suggestions dropdown list on focus.</p>
            </div>
            <div className="component-preview" id="preview-8">
              <div className="suggestions-search">
                <div className="input-wrap">
                  <input type="text" placeholder="Search templates..." />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <ul className="dropdown-list">
                  <li><i className="fa-solid fa-clock-rotate-left"></i> Glassmorphism Card</li>
                  <li><i className="fa-solid fa-clock-rotate-left"></i> Custom Navigation Bar</li>
                  <li><i className="fa-solid fa-trend-up"></i> Premium Loaders</li>
                  <li><i className="fa-solid fa-trend-up"></i> 3D Button Hover Effects</li>
                </ul>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-8">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 9. FULLSCREEN OVERLAY SEARCH */}
          <div className="search-card">
            <div className="search-info">
              <h2>Fullscreen Overlay Search</h2>
              <p>A premium fullscreen overlay search, engineered with 100% pure HTML & CSS.</p>
            </div>
            <div className="component-preview" id="preview-9">
              <div className="fullscreen-search-wrapper">
                <input type="checkbox" id="overlay-toggle" className="overlay-checkbox" style="display:none;" />
                <label for="overlay-toggle" className="trigger-btn">
                  <i className="fa-solid fa-magnifying-glass"></i> Click to Search
                </label>
                <div className="overlay-search">
                  <label for="overlay-toggle" className="close-btn"><i className="fa-solid fa-xmark"></i></label>
                  <div className="search-box">
                    <input type="text" placeholder="Type anything to search..." />
                    <span className="hint">Click X to close overlay</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-9">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 10. MINIMAL ANIMATED SEARCH INPUT */}
          <div className="search-card">
            <div className="search-info">
              <h2>Minimal Animated Search</h2>
              <p>A clean line-based search input where the border expands into a beautiful gradient on focus.</p>
            </div>
            <div className="component-preview" id="preview-10">
              <div className="minimal-animated-search">
                <input type="text" placeholder="Search designs..." />
                <span className="border-line"></span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-10">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
      
      
          <div className="search-card">
            <div className="search-info">
              <h2>Neumorphic Search</h2>
              <p>A soft, modern search input utilizing inset and outset neumorphic shadows.</p>
            </div>
            <div className="component-preview" id="preview-11">
              <div className="neumorphic-search">
                <input type="text" placeholder="Neumorphic search..." />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-11">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          <div className="search-card">
            <div className="search-info">
              <h2>Cyberpunk Glow Search</h2>
              <p>A futuristic gaming-inspired search bar with neon border glows and angled corners.</p>
            </div>
            <div className="component-preview" id="preview-12">
              <div className="cyberpunk-search-wrapper">
                <div className="cyberpunk-search">
                  <input type="text" placeholder="SYS_SEARCH..." />
                  <button><i className="fa-solid fa-terminal"></i></button>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-12">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          <div className="search-card">
            <div className="search-info">
              <h2>Category Filter Search</h2>
              <p>A multi-functional input combining a quick dropdown selector and a search bar.</p>
            </div>
            <div className="component-preview" id="preview-13">
              <div className="category-search">
                <div className="category-select">
                  <span>All</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
                <span className="category-divider"></span>
                <input type="text" placeholder="Search everything..." />
                <i className="fa-solid fa-magnifying-glass category-search-icon"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-13">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          <div className="search-card">
            <div className="search-info">
              <h2>Glow Ring Search</h2>
              <p>A premium design with an interactive, animated gradient boundary on focus.</p>
            </div>
            <div className="component-preview" id="preview-14">
              <div className="glow-ring-wrapper">
                <div className="glow-ring-bg"></div>
                <div className="glow-ring-search">
                  <input type="text" placeholder="Search with style..." />
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-14">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          <div className="search-card">
            <div className="search-info">
              <h2>Terminal Monospace Search</h2>
              <p>A vintage command-line theme featuring monospaced text and a blinking caret.</p>
            </div>
            <div className="component-preview" id="preview-15">
              <div className="terminal-search">
                <span className="terminal-prompt">src&gt;</span>
                <input type="text" placeholder="grep --color..." />
                <span className="terminal-cursor"></span>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-15">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 16. LIQUID BORDER SEARCH */}
          <div className="search-card">
            <div className="search-info">
              <h2>Liquid Border Search</h2>
              <p>A translucent input with a slow-moving, interactive morphing gradient liquid blob background.</p>
            </div>
            <div className="component-preview" id="preview-16">
              <div className="liquid-search-container">
                <div className="liquid-blob"></div>
                <div className="liquid-search-box">
                  <i className="fa-solid fa-droplet"></i>
                  <input type="text" placeholder="Morphing search..." />
                  <button><i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-16">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 17. LASER SCANNER SEARCH */}
          <div className="search-card">
            <div className="search-info">
              <h2>Laser Scanner Search</h2>
              <p>An input featuring a glowing cyan laser line running along the perimeter on focus.</p>
            </div>
            <div className="component-preview" id="preview-17">
              <div className="laser-search-wrapper">
                <div className="laser-search-input-wrap">
                  <input type="text" placeholder="Laser scanning..." />
                  <i className="fa-solid fa-bolt-lightning laser-icon"></i>
                  <div className="laser-scanner-line"></div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-17">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 18. RADIAL REVEAL SEARCH */}
          <div className="search-card">
            <div className="search-info">
              <h2>Radial Reveal Search</h2>
              <p>Starts as a simple circular button and morphs dynamically with a radial scale-in animation.</p>
            </div>
            <div className="component-preview" id="preview-18">
              <div className="radial-search-wrapper">
                <input type="checkbox" id="radial-toggle" className="radial-toggle" />
                <div className="radial-search-wrapper">
                  <label for="radial-toggle" className="radial-btn">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <i className="fa-solid fa-xmark close-icon"></i>
                  </label>
                  <div className="radial-input-box">
                    <input type="text" placeholder="Search radial..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-18">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 19. INTERACTIVE TAG PILL SEARCH */}
          <div className="search-card">
            <div className="search-info">
              <h2>Interactive Tag Pill Search</h2>
              <p>An advanced filter search bar with inline capsule tags that can be cleared individually.</p>
            </div>
            <div className="component-preview" id="preview-19">
              <div className="tag-search-container">
                <div className="tag-pills">
                  <span className="tag-pill">UI <i className="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i></span>
                  <span className="tag-pill">CSS <i className="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i></span>
                </div>
                <input type="text" placeholder="Add filters..." />
                <i className="fa-solid fa-filter"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-19">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
          {/* 20. RETRO ARCADE CONSOLE SEARCH */}
          <div className="search-card">
            <div className="search-info">
              <h2>Retro Arcade Search</h2>
              <p>Styled like a retro 80s arcade gaming screen with neon green scanlines and a blinking pixel cursor.</p>
            </div>
            <div className="component-preview" id="preview-20">
              <div className="arcade-search-box">
                <div className="arcade-scanlines"></div>
                <span className="arcade-prefix">P1:</span>
                <input type="text" placeholder="INSERT COIN..." />
                <span className="arcade-cursor"></span>
                <i className="fa-solid fa-gamepad arcade-icon"></i>
              </div>
            </div>
            <div className="card-actions">
              <button className="copy-btn" data-target="preview-20">
                <i className="fa-regular fa-copy"></i> <span>Copy Code</span>
              </button>
            </div>
          </div>
      
        </section>
      </main>
    </>
  );
}
