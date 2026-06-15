<template>
<main class="main-content">

  <!-- TOPBAR -->
  <header class="topbar">
    <div class="search-box">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search filter components..." id="searchInput">
    </div>
    <div class="topbar-actions">
      <button type="button" class="add-btn" onclick="activateAllFilters()"><i class="fa-solid fa-filter"></i> Activate All</button>
      <button type="button" class="collection-btn" onclick="resetAllFilters()"><i class="fa-solid fa-rotate-left"></i> Reset All</button>
      <button type="button" class="theme-btn" aria-label="Toggle dark mode"><i class="fa-solid fa-moon"></i></button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-left">
      <div class="breadcrumb">Home &gt; Search Filters</div>
      <h1>Sleek Search Filters</h1>
      <p>Modern reusable category filters, dual range sliders, search tags, collapsible sidebars, and 3D sort dropdowns. Designed with clean HSL gradients, frosted glass backdrops, and elastic hover keyframes.</p>
      
      <div class="hero-tags">
        <span><i class="fa-solid fa-sliders"></i> Dual range</span>
        <span><i class="fa-solid fa-tags"></i> Tag insertion</span>
        <span><i class="fa-solid fa-caret-down"></i> 3D dropdown</span>
      </div>
    </div>

    <!-- Hero Filter Preview Animation -->
    <div class="hero-preview">
      <div class="hero-filter-demo">
        <div class="demo-search-pill">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>Glassmorphic...</span>
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
    </div>
  </section>

  <!-- FILTERS -->
  <section class="filters">
    <button type="button" class="active" onclick="filterCategory('all', this)">All Filters</button>
    <button type="button" onclick="filterCategory('bar', this)">Category Bars</button>
    <button type="button" onclick="filterCategory('price', this)">Price Ranges</button>
    <button type="button" onclick="filterCategory('tags', this)">Search Tags</button>
    <button type="button" onclick="filterCategory('dropdown', this)">Dropdowns</button>
    <button type="button" onclick="filterCategory('chips', this)">Chip Filters</button>
    <button type="button" onclick="filterCategory('rating', this)">Rating</button>
    <button type="button" onclick="filterCategory('date', this)">Date Range</button>
    <button type="button" onclick="filterCategory('color', this)">Color</button>
    <button type="button" onclick="filterCategory('autocomplete', this)">Autocomplete</button>
    <button type="button" onclick="filterCategory('brands', this)">Brands</button>
    <button type="button" onclick="filterCategory('distance', this)">Distance</button>
    <button type="button" onclick="filterCategory('size', this)">Sizes</button>
    <button type="button" onclick="filterCategory('toggles', this)">Toggles</button>
    <button type="button" onclick="filterCategory('layout', this)">Layout</button>
  </section>

  <!-- SHOWROOM GRID -->
  <div class="notification-grid" id="filtersGrid">

    <!-- 1. CATEGORY FILTER BAR -->
    <div class="component-card" data-category="bar">
      <div class="card-preview">
        <div class="card-interactive-area full-width">

          <!-- Interactive Render -->
          <div class="premium-category-bar">
            <div class="category-tabs">
              <div class="tab-item active" onclick="setCategoryTab(0, this)">All</div>
              <div class="tab-item" onclick="setCategoryTab(1, this)">Design</div>
              <div class="tab-item" onclick="setCategoryTab(2, this)">Code</div>
              <div class="tab-item" onclick="setCategoryTab(3, this)">Audio</div>

              <!-- Sliding Indicator Underline -->
              <div class="tab-glow-pill" id="tabGlow" style="left: 4px; width: 70px;"></div>
            </div>
          </div>

        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Category Bar</h3>
          <span>Category Bars</span>
        </div>
        <p>A premium horizontal tab filter bar featuring a neon gradient sliding pill background matching the selection size.</p>

        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeB', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeB', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeB" style="display:none;"><code>&lt;div class="premium-category-bar"&gt;
  &lt;div class="category-tabs"&gt;
    &lt;div class="tab-item active"&gt;All&lt;/div&gt;
    &lt;div class="tab-item"&gt;Design&lt;/div&gt;
    &lt;div class="tab-glow-pill" style="left: 4px; width: 70px;"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 2. PRICE RANGE FILTER -->
    <div class="component-card" data-category="price">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          
          <!-- Interactive Render -->
          <div class="premium-price-range">
            <div class="range-sliders-wrap">
              <!-- Dual overlapping inputs -->
              <input type="range" min="0" max="1000" value="150" class="range-thumb min-range" id="priceMin" oninput="updatePriceSliders()">
              <input type="range" min="0" max="1000" value="800" class="range-thumb max-range" id="priceMax" oninput="updatePriceSliders()">
              
              <div class="slider-track-bg">
                <div class="slider-track-fill" id="priceFill" style="left: 15%; right: 20%;"></div>
              </div>
            </div>
            
            <div class="price-labels">
              <span class="price-box" id="priceMinBox">$150</span>
              <span class="price-box" id="priceMaxBox">$800</span>
            </div>
          </div>

        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Price Range Filter</h3>
          <span>Price Ranges</span>
        </div>
        <p>A dual range slider displaying a purple-to-orange gradient fill and glass-frosted min/max price indicator bubbles.</p>
        
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeP', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeP', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeP" style="display:none;"><code>&lt;div class="premium-price-range"&gt;
  &lt;div class="range-sliders-wrap"&gt;
    &lt;input type="range" min="0" max="1000" value="150" class="range-thumb"&gt;
    &lt;div class="slider-track-bg"&gt;
      &lt;div class="slider-track-fill" style="left: 15%; right: 20%;"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 3. SEARCH WITH TAG FILTERS -->
    <div class="component-card" data-category="tags">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          
          <!-- Interactive Render -->
          <div class="premium-search-tags-box">
            <div class="search-tag-input-wrap">
              <div class="active-tags-row" id="activeTagsRow">
                <!-- Javascript inserts pills here -->
                <div class="tag-pill">UI<i class="fa-solid fa-xmark" onclick="removeSearchTag(this)"></i></div>
                <div class="tag-pill">Glass<i class="fa-solid fa-xmark" onclick="removeSearchTag(this)"></i></div>
              </div>
              <input type="text" placeholder="Type tag..." id="tagInput" onkeydown="handleTagInputKey(event)">
            </div>
            
            <div class="suggested-tags">
              <span class="suggested-pill" onclick="addSuggestedTag('Clean')">+ Clean</span>
              <span class="suggested-pill" onclick="addSuggestedTag('3D')">+ 3D</span>
              <span class="suggested-pill" onclick="addSuggestedTag('Neon')">+ Neon</span>
            </div>
          </div>

        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Search Tags</h3>
          <span>Search Tags</span>
        </div>
        <p>A search box showing dynamic tag insertion pills. Entering texts or clicking suggest pills appends active glowing tags.</p>
        
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeT', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeT', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeT" style="display:none;"><code>&lt;div class="premium-search-tags-box"&gt;
  &lt;div class="search-tag-input-wrap"&gt;
    &lt;div class="tag-pill"&gt;UI&lt;i class="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/div&gt;
    &lt;input type="text" placeholder="Add tag..."&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 4. SIDEBAR FILTER PANEL -->
    <div class="component-card" data-category="bar">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          
          <!-- Interactive Render -->
          <div class="premium-sidebar-filter-panel">
            <div class="accordion-section">
              <div class="accordion-header active" onclick="toggleAccordion(this)">
                <span>Categories</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="accordion-content" style="max-height: 100px;">
                <label class="filter-checkbox-row">
                  <input type="checkbox" checked>
                  <span class="check-box-custom"></span>
                  <span>Layout Templates</span>
                </label>
                <label class="filter-checkbox-row">
                  <input type="checkbox">
                  <span class="check-box-custom"></span>
                  <span>UI Elements</span>
                </label>
              </div>
            </div>

            <div class="accordion-section">
              <div class="accordion-header" onclick="toggleAccordion(this)">
                <span>Status</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="accordion-content" style="max-height: 0px;">
                <label class="filter-checkbox-row">
                  <input type="checkbox" checked>
                  <span class="check-box-custom"></span>
                  <span>Stable Release</span>
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Sidebar Filter</h3>
          <span>Category Bars</span>
        </div>
        <p>A collapsible vertical sidebar e-commerce filter panel with accordion headers and animated neon checkboxes.</p>
        
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeF', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeF', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeF" style="display:none;"><code>&lt;div class="premium-sidebar-filter-panel"&gt;
  &lt;div class="accordion-section"&gt;
    &lt;div class="accordion-header"&gt;
      &lt;span&gt;Categories&lt;/span&gt;
      &lt;i class="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
    &lt;/div&gt;
    &lt;div class="accordion-content"&gt;
      &lt;label class="filter-checkbox-row"&gt;
        &lt;input type="checkbox"&gt;
        &lt;span class="check-box-custom"&gt;&lt;/span&gt;
      &lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 5. ANIMATED FILTER DROPDOWN -->
    <div class="component-card" data-category="dropdown">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          
          <!-- Interactive Render -->
          <div class="premium-sort-dropdown">
            <button type="button" class="dropdown-trigger-btn" onclick="toggleSortDropdown(this)">
              <span>Sort: Popularity</span>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
            
            <div class="dropdown-menu-list" id="dropdownMenu">
              <div class="menu-item active" onclick="selectDropdownSort('Popularity', this)">
                <span>Popularity</span>
                <i class="fa-solid fa-check"></i>
              </div>
              <div class="menu-item" onclick="selectDropdownSort('Newest', this)">
                <span>Newest</span>
                <i class="fa-solid fa-check"></i>
              </div>
              <div class="menu-item" onclick="selectDropdownSort('Top Rated', this)">
                <span>Top Rated</span>
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Sort Dropdown</h3>
          <span>Dropdowns</span>
        </div>
        <p>A sorting dropdown menu that slides and scales open smoothly using a 3D perspective keyframe transform.</p>
        
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeD', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeD', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeD" style="display:none;"><code>&lt;div class="premium-sort-dropdown"&gt;
  &lt;button class="dropdown-trigger-btn"&gt;
    &lt;span&gt;Sort: Popularity&lt;/span&gt;
  &lt;/button&gt;
  &lt;div class="dropdown-menu-list"&gt;
    &lt;div class="menu-item active"&gt;Popularity&lt;/div&gt;
    &lt;div class="menu-item"&gt;Newest&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>


    <div class="component-card" data-category="chips">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-chip-filter">
            <div class="chip-scroll-row" id="chipRow">
              <div class="filter-chip active" onclick="toggleChip(this)"><i class="fa-solid fa-layer-group"></i> All</div>
              <div class="filter-chip" onclick="toggleChip(this)"><i class="fa-solid fa-mobile-screen"></i> Mobile</div>
              <div class="filter-chip" onclick="toggleChip(this)"><i class="fa-solid fa-desktop"></i> Desktop</div>
              <div class="filter-chip" onclick="toggleChip(this)"><i class="fa-solid fa-tablet"></i> Tablet</div>
              <div class="filter-chip" onclick="toggleChip(this)"><i class="fa-solid fa-wand-magic-sparkles"></i> Animated</div>
              <div class="filter-chip" onclick="toggleChip(this)"><i class="fa-solid fa-moon"></i> Dark Mode</div>
            </div>
            <div class="chip-count-label" id="chipCountLabel">1 selected</div>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Multi-Select Chips</h3>
          <span>Chip Filters</span>
        </div>
        <p>A horizontal scrollable chip row with multi-select toggle states, glow activation, and a live selection counter badge.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeChip', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeChip', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeChip" style="display:none;"><code>&lt;div class="premium-chip-filter"&gt;
  &lt;div class="chip-scroll-row"&gt;
    &lt;div class="filter-chip active"&gt;All&lt;/div&gt;
    &lt;div class="filter-chip"&gt;Mobile&lt;/div&gt;
    &lt;div class="filter-chip"&gt;Desktop&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-category="rating">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-rating-filter">
            <div class="rating-filter-title">Filter by Rating</div>
            <div class="rating-rows">
              <label class="rating-row" onclick="selectRating(this)">
                <input type="radio" name="ratingFilter" value="5">
                <span class="rating-stars">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </span>
                <span class="rating-label">5 Stars</span>
                <span class="rating-count">1.2k</span>
              </label>
              <label class="rating-row" onclick="selectRating(this)">
                <input type="radio" name="ratingFilter" value="4">
                <span class="rating-stars">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i>
                </span>
                <span class="rating-label">4 & up</span>
                <span class="rating-count">3.8k</span>
              </label>
              <label class="rating-row" onclick="selectRating(this)">
                <input type="radio" name="ratingFilter" value="3">
                <span class="rating-stars">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                </span>
                <span class="rating-label">3 & up</span>
                <span class="rating-count">5.1k</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Rating Filter</h3>
          <span>Rating</span>
        </div>
        <p>A star-based rating filter panel with glow-on-hover star rows, active selection highlight, and animated count badges.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeRating', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeRating', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeRating" style="display:none;"><code>&lt;div class="premium-rating-filter"&gt;
  &lt;div class="rating-rows"&gt;
    &lt;label class="rating-row"&gt;
      &lt;input type="radio" name="ratingFilter" value="5"&gt;
      &lt;div class="rating-stars"&gt;...stars...&lt;/div&gt;
      &lt;span class="rating-label"&gt;5 Stars&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-category="date">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-date-range-filter">
            <div class="date-range-header">
              <i class="fa-solid fa-calendar-days"></i>
              <span>Date Range</span>
            </div>
            <div class="date-inputs-row">
              <div class="date-input-group">
                <label>From</label>
                <input type="date" id="dateFrom" class="date-input-field" value="2026-01-01">
              </div>
              <div class="date-arrow-divider"><i class="fa-solid fa-arrow-right"></i></div>
              <div class="date-input-group">
                <label>To</label>
                <input type="date" id="dateTo" class="date-input-field" value="2026-05-31">
              </div>
            </div>
            <div class="date-presets-row">
              <button class="date-preset-btn" onclick="setDatePreset('week', this)">Last 7d</button>
              <button class="date-preset-btn active" onclick="setDatePreset('month', this)">This Month</button>
              <button class="date-preset-btn" onclick="setDatePreset('year', this)">This Year</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Date Range Filter</h3>
          <span>Date Range</span>
        </div>
        <p>A glassmorphic date range picker with From/To date inputs and quick preset buttons for 7-day, monthly, and yearly ranges.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeDate', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeDate', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeDate" style="display:none;"><code>&lt;div class="premium-date-range-filter"&gt;
  &lt;div class="date-inputs-row"&gt;
    &lt;div class="date-input-group"&gt;
      &lt;label&gt;From&lt;/label&gt;
      &lt;input type="date" class="date-input-field"&gt;
    &lt;/div&gt;
    &lt;div class="date-input-group"&gt;
      &lt;label&gt;To&lt;/label&gt;
      &lt;input type="date" class="date-input-field"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-category="color">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-color-swatch-filter">
            <div class="color-filter-title">Filter by Color</div>
            <div class="color-swatches-grid">
              <div class="color-swatch active" style="--swatch-color: #7b61ff;" onclick="toggleSwatch(this)" title="Purple"></div>
              <div class="color-swatch" style="--swatch-color: #ff7a3d;" onclick="toggleSwatch(this)" title="Orange"></div>
              <div class="color-swatch" style="--swatch-color: #10b981;" onclick="toggleSwatch(this)" title="Emerald"></div>
              <div class="color-swatch" style="--swatch-color: #ef4444;" onclick="toggleSwatch(this)" title="Red"></div>
              <div class="color-swatch" style="--swatch-color: #06b6d4;" onclick="toggleSwatch(this)" title="Cyan"></div>
              <div class="color-swatch" style="--swatch-color: #f59e0b;" onclick="toggleSwatch(this)" title="Amber"></div>
              <div class="color-swatch" style="--swatch-color: #ec4899;" onclick="toggleSwatch(this)" title="Pink"></div>
              <div class="color-swatch swatch-none" onclick="toggleSwatch(this)" title="None"><i class="fa-solid fa-ban"></i></div>
            </div>
            <div class="color-filter-result" id="colorResult">Purple selected</div>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Color Swatch Filter</h3>
          <span>Color</span>
        </div>
        <p>A multi-select color dot swatch filter with glowing active ring animation, color names, and a live result readout below.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeColor', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeColor', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeColor" style="display:none;"><code>&lt;div class="premium-color-swatch-filter"&gt;
  &lt;div class="color-swatches-grid"&gt;
    &lt;div class="color-swatch active" style="--swatch-color:#7b61ff;"&gt;&lt;/div&gt;
    &lt;div class="color-swatch" style="--swatch-color:#ff7a3d;"&gt;&lt;/div&gt;
    &lt;div class="color-swatch" style="--swatch-color:#10b981;"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="component-card" data-category="autocomplete">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-autocomplete-search">
            <div class="autocomplete-input-wrap" id="autocompleteWrap">
              <i class="fa-solid fa-magnifying-glass autocomplete-icon"></i>
              <input type="text" id="autocompleteInput" placeholder="Search components..." autocomplete="off" oninput="handleAutocomplete(this.value)" onfocus="showAutoSuggestions()" onblur="hideAutoSuggestionsDelayed()">
              <div class="autocomplete-kbd">⌘K</div>
            </div>
            <div class="autocomplete-dropdown" id="autoDropdown">
              <div class="auto-suggestion-group">
                <div class="auto-group-label">Components</div>
                <div class="auto-item" onmousedown="selectAutoItem('Buttons')"><i class="fa-solid fa-hand-pointer"></i> Buttons</div>
                <div class="auto-item" onmousedown="selectAutoItem('Cards')"><i class="fa-solid fa-table-cells-large"></i> Cards</div>
                <div class="auto-item" onmousedown="selectAutoItem('Dropdowns')"><i class="fa-solid fa-caret-down"></i> Dropdowns</div>
              </div>
              <div class="auto-suggestion-group">
                <div class="auto-group-label">Recent</div>
                <div class="auto-item" onmousedown="selectAutoItem('Price Filter')"><i class="fa-solid fa-clock-rotate-left"></i> Price Filter</div>
                <div class="auto-item" onmousedown="selectAutoItem('Search Tags')"><i class="fa-solid fa-clock-rotate-left"></i> Search Tags</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-content">
        <div class="card-top">
          <h3>Autocomplete Search</h3>
          <span>Autocomplete</span>
        </div>
        <p>A premium search input with animated grouped autocomplete dropdown, keyboard shortcut badge, and focus-triggered suggestions.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeAuto', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeAuto', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>

      <pre class="code-block" id="codeAuto" style="display:none;"><code>&lt;div class="premium-autocomplete-search"&gt;
  &lt;div class="autocomplete-input-wrap"&gt;
    &lt;i class="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
    &lt;input type="text" placeholder="Search..."&gt;
    &lt;div class="autocomplete-kbd"&gt;⌘K&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="autocomplete-dropdown"&gt;
    &lt;div class="auto-suggestion-group"&gt;
      &lt;div class="auto-group-label"&gt;Components&lt;/div&gt;
      &lt;div class="auto-item"&gt;Buttons&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 11. BRAND LOGO FILTER -->
    <div class="component-card" data-category="brands">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-brand-filter">
            <div class="brand-grid">
              <div class="brand-item active" onclick="toggleBrand(this)"><i class="fa-brands fa-apple"></i></div>
              <div class="brand-item" onclick="toggleBrand(this)"><i class="fa-brands fa-windows"></i></div>
              <div class="brand-item" onclick="toggleBrand(this)"><i class="fa-brands fa-android"></i></div>
              <div class="brand-item" onclick="toggleBrand(this)"><i class="fa-brands fa-linux"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Brand Filter Grid</h3>
          <span>Brands</span>
        </div>
        <p>A grid of brand icons with interactive glowing borders and solid active states.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeBrands', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeBrands', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeBrands" style="display:none;"><code>&lt;div class="brand-grid"&gt;
  &lt;div class="brand-item active"&gt;&lt;i class="fa-brands fa-apple"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="brand-item"&gt;&lt;i class="fa-brands fa-windows"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 12. DISTANCE SLIDER FILTER -->
    <div class="component-card" data-category="distance">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-distance-filter">
            <div class="distance-header">
              <i class="fa-solid fa-location-dot"></i>
              <span>Within <span id="distLabel">15</span> km</span>
            </div>
            <div class="distance-slider-wrap">
              <input type="range" min="1" max="100" value="15" class="distance-thumb" oninput="updateDistance(this)">
              <div class="distance-track-bg"></div>
              <div class="distance-track-fill" id="distFill" style="width: 15%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Distance Slider</h3>
          <span>Distance</span>
        </div>
        <p>A smooth range slider with custom gradient fill and live distance readout.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeDist', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeDist', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeDist" style="display:none;"><code>&lt;div class="distance-slider-wrap"&gt;
  &lt;input type="range" class="distance-thumb" oninput="updateDistance(this)"&gt;
  &lt;div class="distance-track-bg"&gt;&lt;/div&gt;
  &lt;div class="distance-track-fill" style="width: 15%;"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 13. SIZE SELECTION FILTER -->
    <div class="component-card" data-category="size">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-size-filter">
            <div class="size-grid">
              <div class="size-box" onclick="toggleSize(this)">S</div>
              <div class="size-box active" onclick="toggleSize(this)">M</div>
              <div class="size-box" onclick="toggleSize(this)">L</div>
              <div class="size-box" onclick="toggleSize(this)">XL</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Size Selection Grid</h3>
          <span>Sizes</span>
        </div>
        <p>A multi-select size filter with glowing active states and subtle hover transitions.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeSize', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeSize', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeSize" style="display:none;"><code>&lt;div class="size-grid"&gt;
  &lt;div class="size-box"&gt;S&lt;/div&gt;
  &lt;div class="size-box active"&gt;M&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- 14. TOGGLES FILTER -->
    <div class="component-card" data-category="toggles">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-toggles-filter">
            <label class="premium-toggle">
              <span>In Stock Only</span>
              <input type="checkbox" checked>
              <span class="toggle-slider"></span>
            </label>
            <label class="premium-toggle">
              <span>Sale Items</span>
              <input type="checkbox">
              <span class="toggle-slider"></span>
            </label>
            <label class="premium-toggle">
              <span>Free Shipping</span>
              <input type="checkbox">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Toggle Switches</h3>
          <span>Toggles</span>
        </div>
        <p>A set of smooth iOS-style toggle switches for fast boolean filtering.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeToggle', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeToggle', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeToggle" style="display:none;"><code>&lt;label class="premium-toggle"&gt;
  &lt;span&gt;In Stock Only&lt;/span&gt;
  &lt;input type="checkbox" checked&gt;
  &lt;div class="toggle-slider"&gt;&lt;/div&gt;
&lt;/label&gt;</code></pre>
    </div>

    <!-- 15. LAYOUT STYLE FILTER -->
    <div class="component-card" data-category="layout">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-layout-filter">
            <div class="layout-toggle">
              <div class="layout-btn active" onclick="toggleLayout(this)"><i class="fa-solid fa-table-cells-large"></i></div>
              <div class="layout-btn" onclick="toggleLayout(this)"><i class="fa-solid fa-list"></i></div>
              <div class="layout-btn" onclick="toggleLayout(this)"><i class="fa-solid fa-border-all"></i></div>
              <div class="layout-slider" id="layoutSlider"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>Layout Style Filter</h3>
          <span>Layout</span>
        </div>
        <p>A multi-view layout toggle with an animated sliding backdrop indicating selection.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeLayout', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeLayout', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeLayout" style="display:none;"><code>&lt;div class="layout-toggle"&gt;
  &lt;div class="layout-btn active"&gt;&lt;i class="fa-solid fa-table-cells-large"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="layout-btn"&gt;&lt;i class="fa-solid fa-list"&gt;&lt;/i&gt;&lt;/div&gt;
  &lt;div class="layout-slider"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <!-- MOOD SLIDER -->
    <div class="component-card" data-category="mood">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-mood-filter">
            <div class="mood-labels-row">
              <span>😴 Chill</span><span>Balanced</span><span>Intense ⚡</span>
            </div>
            <div class="mood-track-bg">
              <div class="mood-track-fill" id="moodFill" style="width:50%"></div>
            </div>
            <input type="range" id="moodRange" class="mood-range-input" min="0" max="100" value="50" oninput="updateMood(this)">
            <div class="mood-emoji-display" id="moodEmoji">😐</div>
            <div class="mood-text-display" id="moodText">Balanced</div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top"><h3>Mood / Vibe Filter</h3><span>Mood</span></div>
        <p>Emoji feedback slider for qualitative filtering by intensity or mood with live label updates.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeMood', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeMood', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeMood" style="display:none;"><code>&lt;div class="premium-mood-filter"&gt;
      &lt;input type="range" min="0" max="100" value="50" class="mood-range-input" oninput="updateMood(this)"&gt;
      &lt;div class="mood-emoji-display" id="moodEmoji"&gt;😐&lt;/div&gt;
    &lt;/div&gt;</code></pre>
    </div>

    <!-- SEARCHABLE CHECKBOX FILTER -->
    <div class="component-card" data-category="mood">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-stack-filter">
            <div class="stack-search-wrap">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Find category…" oninput="filterStack(this.value)" id="stackSearchInput">
            </div>
            <div class="stack-items-list" id="stackItemsList">
              <div class="stack-item sel" onclick="toggleStackItem(this)" data-label="Typography">
                <div class="stack-item-left"><div class="stack-chk active"><i class="fa-solid fa-check"></i></div><span>Typography</span></div>
                <span class="stack-badge">84</span>
              </div>
              <div class="stack-item" onclick="toggleStackItem(this)" data-label="Layout">
                <div class="stack-item-left"><div class="stack-chk"></div><span>Layout</span></div>
                <span class="stack-badge">127</span>
              </div>
              <div class="stack-item sel" onclick="toggleStackItem(this)" data-label="Animation">
                <div class="stack-item-left"><div class="stack-chk active"><i class="fa-solid fa-check"></i></div><span>Animation</span></div>
                <span class="stack-badge">53</span>
              </div>
              <div class="stack-item" onclick="toggleStackItem(this)" data-label="Forms">
                <div class="stack-item-left"><div class="stack-chk"></div><span>Forms</span></div>
                <span class="stack-badge">62</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top"><h3>Searchable Checkbox Filter</h3><span>Mood</span></div>
        <p>Live-search within a labelled checkbox list with count badges and multi-select state.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeStack', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeStack', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeStack" style="display:none;"><code>&lt;div class="premium-stack-filter"&gt;
      &lt;div class="stack-search-wrap"&gt;
        &lt;input type="text" placeholder="Find category…" oninput="filterStack(this.value)"&gt;
      &lt;/div&gt;
      &lt;div class="stack-item sel"&gt;
        &lt;div class="stack-chk active"&gt;&lt;/div&gt;
        &lt;span&gt;Typography&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;</code></pre>
    </div>

    <!-- SCORE RANGE FILTER -->
    <div class="component-card" data-category="scorerange">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-score-range">
            <div class="score-readout-row">
              <div class="score-readout-box"><label>Min</label><span id="scoreMinDisp">20</span></div>
              <div class="score-readout-box"><label>Max</label><span id="scoreMaxDisp">80</span></div>
            </div>
            <div class="score-dual-track">
              <div class="score-dual-fill" id="scoreDualFill" style="left:20%;width:60%"></div>
            </div>
            <div class="score-inputs-layer">
              <input type="range" class="score-thumb" id="scoreMinThumb" min="0" max="100" value="20" step="1" oninput="updateScoreRange()">
              <input type="range" class="score-thumb" id="scoreMaxThumb" min="0" max="100" value="80" step="1" oninput="updateScoreRange()">
            </div>
            <div class="score-presets-row">
              <button class="score-preset-btn" onclick="applyScorePreset(0,50,this)">0–50</button>
              <button class="score-preset-btn active" onclick="applyScorePreset(20,80,this)">20–80</button>
              <button class="score-preset-btn" onclick="applyScorePreset(50,100,this)">Top 50</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top"><h3>Score Range Filter</h3><span>Score Range</span></div>
        <p>Dual-handle slider for numeric ranges with snap presets and live min/max readout boxes.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeScore', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeScore', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeScore" style="display:none;"><code>&lt;div class="premium-score-range"&gt;
      &lt;div class="score-dual-track"&gt;
        &lt;div class="score-dual-fill"&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;input type="range" class="score-thumb" id="scoreMinThumb" min="0" max="100" value="20"&gt;
      &lt;input type="range" class="score-thumb" id="scoreMaxThumb" min="0" max="100" value="80"&gt;
    &lt;/div&gt;</code></pre>
    </div>

    <!-- MINI CALENDAR RANGE PICKER -->
    <div class="component-card" data-category="calendar">
      <div class="card-preview">
        <div class="card-interactive-area full-width">
          <div class="premium-cal-picker">
            <div class="cal-header-row">
              <span id="calMonthLabel">May 2026</span>
              <div class="cal-nav-btns">
                <button type="button" onclick="calNav(-1)" aria-label="Previous month"><i class="fa-solid fa-chevron-left"></i></button>
                <button type="button" onclick="calNav(1)" aria-label="Next month" ><i class="fa-solid fa-chevron-right"></i></button>
              </div>
            </div>
            <div class="cal-dow-row" id="calDowRow"></div>
            <div class="cal-days-grid" id="calDaysGrid"></div>
            <div class="cal-status-text" id="calStatusText">Click to select date range</div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-top"><h3>Calendar Range Picker</h3><span>Calendar</span></div>
        <p>Compact two-click range selection with start/end highlight, in-range fill, and month navigation.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeCal', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeCal', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeCal" style="display:none;"><code>&lt;div class="premium-cal-picker"&gt;
      &lt;div class="cal-header-row"&gt;
        &lt;span id="calMonthLabel"&gt;May 2026&lt;/span&gt;
        &lt;button onclick="calNav(-1)"&gt;&lt;/button&gt;
        &lt;button onclick="calNav(1)"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="cal-dow-row"&gt;&lt;/div&gt;
      &lt;div class="cal-days-grid"&gt;&lt;/div&gt;
    &lt;/div&gt;</code></pre>
    </div>

    <!-- CYBERPUNK FILTER -->
    <div class="component-card" data-category="cyberpunk" style="border-color: rgba(0,255,229,0.3);">
      <div class="card-preview" style="background:#0a0a0f; background-image: repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(0,255,229,.03) 24px,rgba(0,255,229,.03) 25px);">
        <div class="card-interactive-area full-width">
          <div class="cyber-filter-wrap">
            <div class="cyber-sys-header">
              <div class="cyber-blink-dot"></div>
              <span class="cyber-sys-title">SYSTEM_FILTER v2.4 <span class="cyber-cursor">█</span></span>
            </div>
            <div class="cyber-section-label">// access level</div>
            <div class="cyber-chips-row" id="cyberChipsRow">
              <div class="cyber-chip on" onclick="toggleCyberChip(this)">All</div>
              <div class="cyber-chip" onclick="toggleCyberChip(this)">Civilian</div>
              <div class="cyber-chip on" onclick="toggleCyberChip(this)">Corp</div>
              <div class="cyber-chip" onclick="toggleCyberChip(this)">Ghost</div>
              <div class="cyber-chip" onclick="toggleCyberChip(this)">Netrunner</div>
            </div>
            <div class="cyber-divider"></div>
            <div class="cyber-section-label">// threat index</div>
            <div class="cyber-slider-labels">
              <span>0x00</span><span id="cyberHexVal">0x3C</span><span>0xFF</span>
            </div>
            <div class="cyber-slider-track">
              <div class="cyber-slider-fill" id="cyberSliderFill" style="width:23%"></div>
            </div>
            <input type="range" id="cyberSlider" class="cyber-range-input" min="0" max="255" value="60" oninput="updateCyberSlider(this)">
            <div class="cyber-divider"></div>
            <div class="cyber-section-label">// status filter</div>
            <div class="cyber-status-row">
              <div class="cyber-status-btn cyber-green on" onclick="this.classList.toggle('on')">Online</div>
              <div class="cyber-status-btn cyber-amber" onclick="this.classList.toggle('on')">Encrypted</div>
              <div class="cyber-status-btn cyber-red" onclick="this.classList.toggle('on')">Blacklisted</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-content" style="background:#0a0a0f; border-top-color: rgba(0,255,229,0.2);">
        <div class="card-top">
          <h3 style="color:#00ffe5;">System_Filter — Cyberpunk</h3>
          <span style="background:rgba(255,0,60,0.15); color:#ff003c;">Cyberpunk</span>
        </div>
        <p style="color:#4dfff3; opacity:0.6;">Neon-glitch filter panel with hex threat index, access-level chips, and tri-state status toggles.</p>
        <div class="card-actions">
          <button type="button" onclick="toggleCode('codeCyber', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button type="button" onclick="copyCode('codeCyber', this)"><i class="fa-solid fa-copy"></i> Copy HTML</button>
        </div>
      </div>
      <pre class="code-block" id="codeCyber" style="display:none; background:#050508;"><code>&lt;div class="cyber-filter-wrap"&gt;
      &lt;div class="cyber-chips-row"&gt;
        &lt;div class="cyber-chip on"&gt;All&lt;/div&gt;
        &lt;div class="cyber-chip"&gt;Corp&lt;/div&gt;
      &lt;/div&gt;
      &lt;input type="range" class="cyber-range-input" min="0" max="255" value="60"&gt;
      &lt;div class="cyber-status-btn cyber-green on"&gt;Online&lt;/div&gt;
    &lt;/div&gt;</code></pre>
    </div>

  </div>


  <footer class="premium-footer">
    <div class="footer-grid">
      <!-- Brand column -->
      <div class="footer-col brand-col">
        <div class="footer-brand">
          <span class="footer-brand-icon">⬡</span>
          <span class="footer-brand-text">UIverse</span>
        </div>
        <p class="footer-desc">Premium open-source UI component showroom featuring modern glassmorphism layouts, glowing CSS keyframes, and highly interactive vanilla elements.</p>
      </div>

      <!-- Quick links -->
      <div class="footer-col">
        <h4>Design Suite</h4>
        <ul class="footer-links">
          <li><a href="button.html">Buttons</a></li>
          <li><a href="cards.html">Cards</a></li>
          <li><a href="inputs.html">Inputs</a></li>
          <li><a href="dropdown-components.html">Dropdowns</a></li>
        </ul>
      </div>

      <!-- Showrooms V2 -->
      <div class="footer-col">
        <h4>V2 Suites</h4>
        <ul class="footer-links">
          <li><a href="notifications-premium.html"><i class="fa-solid fa-bell"></i> Notifications V2</a></li>
          <li><a href="step-indicators.html"><i class="fa-solid fa-list-check"></i> Steppers</a></li>
          <li><a href="progress-premium.html"><i class="fa-solid fa-bars-progress"></i> Progress V2</a></li>
          <li><a href="ratings-premium.html"><i class="fa-solid fa-star"></i> Ratings V2</a></li>
          <li><a href="filters-premium.html"><i class="fa-solid fa-sliders"></i> Filters V2</a></li>
        </ul>
      </div>

      <!-- Newsletter column -->
      <div class="footer-col newsletter-col">
        <h4>Get UI Updates</h4>
        <p>Subscribe to our newsletter to receive notification updates on new premium glass designs.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email...">
          <button type="button" onclick="subscribeNewsletter(this)" aria-label="Subscribe"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-copyright">
        &copy; 2026 UIverse Library. All rights reserved.
      </div>
      <div class="footer-socials">
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-discord"></i></a>
        <a href="#"><i class="fa-brands fa-dribbble"></i></a>
      </div>
    </div>
  </footer>

</main>
</template>

<script>
export default { name: 'FiltersPremium' }
</script>
