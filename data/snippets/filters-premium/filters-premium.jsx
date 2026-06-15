import React from 'react';

export default function filtersPremium(){
  return (
    <>
      <main className="main-content">
      
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search filter components..." id="searchInput" />
          </div>
          <div className="topbar-actions">
            <button type="button" className="add-btn" onclick="activateAllFilters()"><i className="fa-solid fa-filter"></i> Activate All</button>
            <button type="button" className="collection-btn" onclick="resetAllFilters()"><i className="fa-solid fa-rotate-left"></i> Reset All</button>
            <button type="button" className="theme-btn" aria-label="Toggle dark mode"><i className="fa-solid fa-moon"></i></button>
          </div>
        </header>
      
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="breadcrumb">Home &gt; Search Filters</div>
            <h1>Sleek Search Filters</h1>
            <p>Modern reusable category filters, dual range sliders, search tags, collapsible sidebars, and 3D sort dropdowns. Designed with clean HSL gradients, frosted glass backdrops, and elastic hover keyframes.</p>
            
            <div className="hero-tags">
              <span><i className="fa-solid fa-sliders"></i> Dual range</span>
              <span><i className="fa-solid fa-tags"></i> Tag insertion</span>
              <span><i className="fa-solid fa-caret-down"></i> 3D dropdown</span>
            </div>
          </div>
      
          {/* Hero Filter Preview Animation */}
          <div className="hero-preview">
            <div className="hero-filter-demo">
              <div className="demo-search-pill">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Glassmorphic...</span>
                <i className="fa-solid fa-circle-xmark"></i>
              </div>
            </div>
          </div>
        </section>
      
        {/* FILTERS */}
        <section className="filters">
          <button type="button" className="active" onclick="filterCategory('all', this)">All Filters</button>
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
      
        {/* SHOWROOM GRID */}
        <div className="notification-grid" id="filtersGrid">
      
          {/* 1. CATEGORY FILTER BAR */}
          <div className="component-card" data-category="bar">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
      
                {/* Interactive Render */}
                <div className="premium-category-bar">
                  <div className="category-tabs">
                    <div className="tab-item active" onclick="setCategoryTab(0, this)">All</div>
                    <div className="tab-item" onclick="setCategoryTab(1, this)">Design</div>
                    <div className="tab-item" onclick="setCategoryTab(2, this)">Code</div>
                    <div className="tab-item" onclick="setCategoryTab(3, this)">Audio</div>
      
                    {/* Sliding Indicator Underline */}
                    <div className="tab-glow-pill" id="tabGlow" style="left: 4px; width: 70px;"></div>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Category Bar</h3>
                <span>Category Bars</span>
              </div>
              <p>A premium horizontal tab filter bar featuring a neon gradient sliding pill background matching the selection size.</p>
      
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeB', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeB', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeB" style="display:none;"><code>&lt;div className="premium-category-bar"&gt;
        &lt;div className="category-tabs"&gt;
          &lt;div className="tab-item active"&gt;All&lt;/div&gt;
          &lt;div className="tab-item"&gt;Design&lt;/div&gt;
          &lt;div className="tab-glow-pill" style="left: 4px; width: 70px;"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 2. PRICE RANGE FILTER */}
          <div className="component-card" data-category="price">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-price-range">
                  <div className="range-sliders-wrap">
                    {/* Dual overlapping inputs */}
                    <input type="range" min="0" max="1000" value="150" className="range-thumb min-range" id="priceMin" oninput="updatePriceSliders()" />
                    <input type="range" min="0" max="1000" value="800" className="range-thumb max-range" id="priceMax" oninput="updatePriceSliders()" />
                    
                    <div className="slider-track-bg">
                      <div className="slider-track-fill" id="priceFill" style="left: 15%; right: 20%;"></div>
                    </div>
                  </div>
                  
                  <div className="price-labels">
                    <span className="price-box" id="priceMinBox">$150</span>
                    <span className="price-box" id="priceMaxBox">$800</span>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Price Range Filter</h3>
                <span>Price Ranges</span>
              </div>
              <p>A dual range slider displaying a purple-to-orange gradient fill and glass-frosted min/max price indicator bubbles.</p>
              
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeP', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeP', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeP" style="display:none;"><code>&lt;div className="premium-price-range"&gt;
        &lt;div className="range-sliders-wrap"&gt;
          &lt;input type="range" min="0" max="1000" value="150" className="range-thumb"&gt;
          &lt;div className="slider-track-bg"&gt;
            &lt;div className="slider-track-fill" style="left: 15%; right: 20%;"&gt;&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 3. SEARCH WITH TAG FILTERS */}
          <div className="component-card" data-category="tags">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-search-tags-box">
                  <div className="search-tag-input-wrap">
                    <div className="active-tags-row" id="activeTagsRow">
                      {/* Javascript inserts pills here */}
                      <div className="tag-pill">UI<i className="fa-solid fa-xmark" onclick="removeSearchTag(this)"></i></div>
                      <div className="tag-pill">Glass<i className="fa-solid fa-xmark" onclick="removeSearchTag(this)"></i></div>
                    </div>
                    <input type="text" placeholder="Type tag..." id="tagInput" onkeydown="handleTagInputKey(event)" />
                  </div>
                  
                  <div className="suggested-tags">
                    <span className="suggested-pill" onclick="addSuggestedTag('Clean')">+ Clean</span>
                    <span className="suggested-pill" onclick="addSuggestedTag('3D')">+ 3D</span>
                    <span className="suggested-pill" onclick="addSuggestedTag('Neon')">+ Neon</span>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Search Tags</h3>
                <span>Search Tags</span>
              </div>
              <p>A search box showing dynamic tag insertion pills. Entering texts or clicking suggest pills appends active glowing tags.</p>
              
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeT', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeT', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeT" style="display:none;"><code>&lt;div className="premium-search-tags-box"&gt;
        &lt;div className="search-tag-input-wrap"&gt;
          &lt;div className="tag-pill"&gt;UI&lt;i className="fa-solid fa-xmark"&gt;&lt;/i&gt;&lt;/div&gt;
          &lt;input type="text" placeholder="Add tag..."&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 4. SIDEBAR FILTER PANEL */}
          <div className="component-card" data-category="bar">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-sidebar-filter-panel">
                  <div className="accordion-section">
                    <div className="accordion-header active" onclick="toggleAccordion(this)">
                      <span>Categories</span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="accordion-content" style="max-height: 100px;">
                      <label className="filter-checkbox-row">
                        <input type="checkbox" checked />
                        <span className="check-box-custom"></span>
                        <span>Layout Templates</span>
                      </label>
                      <label className="filter-checkbox-row">
                        <input type="checkbox" />
                        <span className="check-box-custom"></span>
                        <span>UI Elements</span>
                      </label>
                    </div>
                  </div>
      
                  <div className="accordion-section">
                    <div className="accordion-header" onclick="toggleAccordion(this)">
                      <span>Status</span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="accordion-content" style="max-height: 0px;">
                      <label className="filter-checkbox-row">
                        <input type="checkbox" checked />
                        <span className="check-box-custom"></span>
                        <span>Stable Release</span>
                      </label>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Sidebar Filter</h3>
                <span>Category Bars</span>
              </div>
              <p>A collapsible vertical sidebar e-commerce filter panel with accordion headers and animated neon checkboxes.</p>
              
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeF', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeF', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeF" style="display:none;"><code>&lt;div className="premium-sidebar-filter-panel"&gt;
        &lt;div className="accordion-section"&gt;
          &lt;div className="accordion-header"&gt;
            &lt;span&gt;Categories&lt;/span&gt;
            &lt;i className="fa-solid fa-chevron-down"&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className="accordion-content"&gt;
            &lt;label className="filter-checkbox-row"&gt;
              &lt;input type="checkbox"&gt;
              &lt;span className="check-box-custom"&gt;&lt;/span&gt;
            &lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 5. ANIMATED FILTER DROPDOWN */}
          <div className="component-card" data-category="dropdown">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-sort-dropdown">
                  <button type="button" className="dropdown-trigger-btn" onclick="toggleSortDropdown(this)">
                    <span>Sort: Popularity</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  
                  <div className="dropdown-menu-list" id="dropdownMenu">
                    <div className="menu-item active" onclick="selectDropdownSort('Popularity', this)">
                      <span>Popularity</span>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="menu-item" onclick="selectDropdownSort('Newest', this)">
                      <span>Newest</span>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="menu-item" onclick="selectDropdownSort('Top Rated', this)">
                      <span>Top Rated</span>
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Sort Dropdown</h3>
                <span>Dropdowns</span>
              </div>
              <p>A sorting dropdown menu that slides and scales open smoothly using a 3D perspective keyframe transform.</p>
              
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeD', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeD', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeD" style="display:none;"><code>&lt;div className="premium-sort-dropdown"&gt;
        &lt;button className="dropdown-trigger-btn"&gt;
          &lt;span&gt;Sort: Popularity&lt;/span&gt;
        &lt;/button&gt;
        &lt;div className="dropdown-menu-list"&gt;
          &lt;div className="menu-item active"&gt;Popularity&lt;/div&gt;
          &lt;div className="menu-item"&gt;Newest&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
      
          <div className="component-card" data-category="chips">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-chip-filter">
                  <div className="chip-scroll-row" id="chipRow">
                    <div className="filter-chip active" onclick="toggleChip(this)"><i className="fa-solid fa-layer-group"></i> All</div>
                    <div className="filter-chip" onclick="toggleChip(this)"><i className="fa-solid fa-mobile-screen"></i> Mobile</div>
                    <div className="filter-chip" onclick="toggleChip(this)"><i className="fa-solid fa-desktop"></i> Desktop</div>
                    <div className="filter-chip" onclick="toggleChip(this)"><i className="fa-solid fa-tablet"></i> Tablet</div>
                    <div className="filter-chip" onclick="toggleChip(this)"><i className="fa-solid fa-wand-magic-sparkles"></i> Animated</div>
                    <div className="filter-chip" onclick="toggleChip(this)"><i className="fa-solid fa-moon"></i> Dark Mode</div>
                  </div>
                  <div className="chip-count-label" id="chipCountLabel">1 selected</div>
                </div>
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Multi-Select Chips</h3>
                <span>Chip Filters</span>
              </div>
              <p>A horizontal scrollable chip row with multi-select toggle states, glow activation, and a live selection counter badge.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeChip', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeChip', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeChip" style="display:none;"><code>&lt;div className="premium-chip-filter"&gt;
        &lt;div className="chip-scroll-row"&gt;
          &lt;div className="filter-chip active"&gt;All&lt;/div&gt;
          &lt;div className="filter-chip"&gt;Mobile&lt;/div&gt;
          &lt;div className="filter-chip"&gt;Desktop&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-category="rating">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-rating-filter">
                  <div className="rating-filter-title">Filter by Rating</div>
                  <div className="rating-rows">
                    <label className="rating-row" onclick="selectRating(this)">
                      <input type="radio" name="ratingFilter" value="5" />
                      <span className="rating-stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                      </span>
                      <span className="rating-label">5 Stars</span>
                      <span className="rating-count">1.2k</span>
                    </label>
                    <label className="rating-row" onclick="selectRating(this)">
                      <input type="radio" name="ratingFilter" value="4" />
                      <span className="rating-stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                      </span>
                      <span className="rating-label">4 & up</span>
                      <span className="rating-count">3.8k</span>
                    </label>
                    <label className="rating-row" onclick="selectRating(this)">
                      <input type="radio" name="ratingFilter" value="3" />
                      <span className="rating-stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                      </span>
                      <span className="rating-label">3 & up</span>
                      <span className="rating-count">5.1k</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Rating Filter</h3>
                <span>Rating</span>
              </div>
              <p>A star-based rating filter panel with glow-on-hover star rows, active selection highlight, and animated count badges.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeRating', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeRating', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeRating" style="display:none;"><code>&lt;div className="premium-rating-filter"&gt;
        &lt;div className="rating-rows"&gt;
          &lt;label className="rating-row"&gt;
            &lt;input type="radio" name="ratingFilter" value="5"&gt;
            &lt;div className="rating-stars"&gt;...stars...&lt;/div&gt;
            &lt;span className="rating-label"&gt;5 Stars&lt;/span&gt;
          &lt;/label&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-category="date">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-date-range-filter">
                  <div className="date-range-header">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>Date Range</span>
                  </div>
                  <div className="date-inputs-row">
                    <div className="date-input-group">
                      <label>From</label>
                      <input type="date" id="dateFrom" className="date-input-field" value="2026-01-01" />
                    </div>
                    <div className="date-arrow-divider"><i className="fa-solid fa-arrow-right"></i></div>
                    <div className="date-input-group">
                      <label>To</label>
                      <input type="date" id="dateTo" className="date-input-field" value="2026-05-31" />
                    </div>
                  </div>
                  <div className="date-presets-row">
                    <button className="date-preset-btn" onclick="setDatePreset('week', this)">Last 7d</button>
                    <button className="date-preset-btn active" onclick="setDatePreset('month', this)">This Month</button>
                    <button className="date-preset-btn" onclick="setDatePreset('year', this)">This Year</button>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Date Range Filter</h3>
                <span>Date Range</span>
              </div>
              <p>A glassmorphic date range picker with From/To date inputs and quick preset buttons for 7-day, monthly, and yearly ranges.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeDate', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeDate', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeDate" style="display:none;"><code>&lt;div className="premium-date-range-filter"&gt;
        &lt;div className="date-inputs-row"&gt;
          &lt;div className="date-input-group"&gt;
            &lt;label&gt;From&lt;/label&gt;
            &lt;input type="date" className="date-input-field"&gt;
          &lt;/div&gt;
          &lt;div className="date-input-group"&gt;
            &lt;label&gt;To&lt;/label&gt;
            &lt;input type="date" className="date-input-field"&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-category="color">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-color-swatch-filter">
                  <div className="color-filter-title">Filter by Color</div>
                  <div className="color-swatches-grid">
                    <div className="color-swatch active" style="--swatch-color: #7b61ff;" onclick="toggleSwatch(this)" title="Purple"></div>
                    <div className="color-swatch" style="--swatch-color: #ff7a3d;" onclick="toggleSwatch(this)" title="Orange"></div>
                    <div className="color-swatch" style="--swatch-color: #10b981;" onclick="toggleSwatch(this)" title="Emerald"></div>
                    <div className="color-swatch" style="--swatch-color: #ef4444;" onclick="toggleSwatch(this)" title="Red"></div>
                    <div className="color-swatch" style="--swatch-color: #06b6d4;" onclick="toggleSwatch(this)" title="Cyan"></div>
                    <div className="color-swatch" style="--swatch-color: #f59e0b;" onclick="toggleSwatch(this)" title="Amber"></div>
                    <div className="color-swatch" style="--swatch-color: #ec4899;" onclick="toggleSwatch(this)" title="Pink"></div>
                    <div className="color-swatch swatch-none" onclick="toggleSwatch(this)" title="None"><i className="fa-solid fa-ban"></i></div>
                  </div>
                  <div className="color-filter-result" id="colorResult">Purple selected</div>
                </div>
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Color Swatch Filter</h3>
                <span>Color</span>
              </div>
              <p>A multi-select color dot swatch filter with glowing active ring animation, color names, and a live result readout below.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeColor', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeColor', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeColor" style="display:none;"><code>&lt;div className="premium-color-swatch-filter"&gt;
        &lt;div className="color-swatches-grid"&gt;
          &lt;div className="color-swatch active" style="--swatch-color:#7b61ff;"&gt;&lt;/div&gt;
          &lt;div className="color-swatch" style="--swatch-color:#ff7a3d;"&gt;&lt;/div&gt;
          &lt;div className="color-swatch" style="--swatch-color:#10b981;"&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          <div className="component-card" data-category="autocomplete">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-autocomplete-search">
                  <div className="autocomplete-input-wrap" id="autocompleteWrap">
                    <i className="fa-solid fa-magnifying-glass autocomplete-icon"></i>
                    <input type="text" id="autocompleteInput" placeholder="Search components..." autocomplete="off" oninput="handleAutocomplete(this.value)" onfocus="showAutoSuggestions()" onblur="hideAutoSuggestionsDelayed()" />
                    <div className="autocomplete-kbd">⌘K</div>
                  </div>
                  <div className="autocomplete-dropdown" id="autoDropdown">
                    <div className="auto-suggestion-group">
                      <div className="auto-group-label">Components</div>
                      <div className="auto-item" onmousedown="selectAutoItem('Buttons')"><i className="fa-solid fa-hand-pointer"></i> Buttons</div>
                      <div className="auto-item" onmousedown="selectAutoItem('Cards')"><i className="fa-solid fa-table-cells-large"></i> Cards</div>
                      <div className="auto-item" onmousedown="selectAutoItem('Dropdowns')"><i className="fa-solid fa-caret-down"></i> Dropdowns</div>
                    </div>
                    <div className="auto-suggestion-group">
                      <div className="auto-group-label">Recent</div>
                      <div className="auto-item" onmousedown="selectAutoItem('Price Filter')"><i className="fa-solid fa-clock-rotate-left"></i> Price Filter</div>
                      <div className="auto-item" onmousedown="selectAutoItem('Search Tags')"><i className="fa-solid fa-clock-rotate-left"></i> Search Tags</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Autocomplete Search</h3>
                <span>Autocomplete</span>
              </div>
              <p>A premium search input with animated grouped autocomplete dropdown, keyboard shortcut badge, and focus-triggered suggestions.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeAuto', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeAuto', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeAuto" style="display:none;"><code>&lt;div className="premium-autocomplete-search"&gt;
        &lt;div className="autocomplete-input-wrap"&gt;
          &lt;i className="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;
          &lt;input type="text" placeholder="Search..."&gt;
          &lt;div className="autocomplete-kbd"&gt;⌘K&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="autocomplete-dropdown"&gt;
          &lt;div className="auto-suggestion-group"&gt;
            &lt;div className="auto-group-label"&gt;Components&lt;/div&gt;
            &lt;div className="auto-item"&gt;Buttons&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 11. BRAND LOGO FILTER */}
          <div className="component-card" data-category="brands">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-brand-filter">
                  <div className="brand-grid">
                    <div className="brand-item active" onclick="toggleBrand(this)"><i className="fa-brands fa-apple"></i></div>
                    <div className="brand-item" onclick="toggleBrand(this)"><i className="fa-brands fa-windows"></i></div>
                    <div className="brand-item" onclick="toggleBrand(this)"><i className="fa-brands fa-android"></i></div>
                    <div className="brand-item" onclick="toggleBrand(this)"><i className="fa-brands fa-linux"></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Brand Filter Grid</h3>
                <span>Brands</span>
              </div>
              <p>A grid of brand icons with interactive glowing borders and solid active states.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeBrands', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeBrands', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeBrands" style="display:none;"><code>&lt;div className="brand-grid"&gt;
        &lt;div className="brand-item active"&gt;&lt;i className="fa-brands fa-apple"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="brand-item"&gt;&lt;i className="fa-brands fa-windows"&gt;&lt;/i&gt;&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 12. DISTANCE SLIDER FILTER */}
          <div className="component-card" data-category="distance">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-distance-filter">
                  <div className="distance-header">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Within <span id="distLabel">15</span> km</span>
                  </div>
                  <div className="distance-slider-wrap">
                    <input type="range" min="1" max="100" value="15" className="distance-thumb" oninput="updateDistance(this)" />
                    <div className="distance-track-bg"></div>
                    <div className="distance-track-fill" id="distFill" style="width: 15%;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Distance Slider</h3>
                <span>Distance</span>
              </div>
              <p>A smooth range slider with custom gradient fill and live distance readout.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeDist', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeDist', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeDist" style="display:none;"><code>&lt;div className="distance-slider-wrap"&gt;
        &lt;input type="range" className="distance-thumb" oninput="updateDistance(this)"&gt;
        &lt;div className="distance-track-bg"&gt;&lt;/div&gt;
        &lt;div className="distance-track-fill" style="width: 15%;"&gt;&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 13. SIZE SELECTION FILTER */}
          <div className="component-card" data-category="size">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-size-filter">
                  <div className="size-grid">
                    <div className="size-box" onclick="toggleSize(this)">S</div>
                    <div className="size-box active" onclick="toggleSize(this)">M</div>
                    <div className="size-box" onclick="toggleSize(this)">L</div>
                    <div className="size-box" onclick="toggleSize(this)">XL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Size Selection Grid</h3>
                <span>Sizes</span>
              </div>
              <p>A multi-select size filter with glowing active states and subtle hover transitions.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeSize', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeSize', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeSize" style="display:none;"><code>&lt;div className="size-grid"&gt;
        &lt;div className="size-box"&gt;S&lt;/div&gt;
        &lt;div className="size-box active"&gt;M&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 14. TOGGLES FILTER */}
          <div className="component-card" data-category="toggles">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-toggles-filter">
                  <label className="premium-toggle">
                    <span>In Stock Only</span>
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                  <label className="premium-toggle">
                    <span>Sale Items</span>
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                  <label className="premium-toggle">
                    <span>Free Shipping</span>
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Toggle Switches</h3>
                <span>Toggles</span>
              </div>
              <p>A set of smooth iOS-style toggle switches for fast boolean filtering.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeToggle', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeToggle', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeToggle" style="display:none;"><code>&lt;label className="premium-toggle"&gt;
        &lt;span&gt;In Stock Only&lt;/span&gt;
        &lt;input type="checkbox" checked&gt;
        &lt;div className="toggle-slider"&gt;&lt;/div&gt;
      &lt;/label&gt;</code></pre>
          </div>
      
          {/* 15. LAYOUT STYLE FILTER */}
          <div className="component-card" data-category="layout">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-layout-filter">
                  <div className="layout-toggle">
                    <div className="layout-btn active" onclick="toggleLayout(this)"><i className="fa-solid fa-table-cells-large"></i></div>
                    <div className="layout-btn" onclick="toggleLayout(this)"><i className="fa-solid fa-list"></i></div>
                    <div className="layout-btn" onclick="toggleLayout(this)"><i className="fa-solid fa-border-all"></i></div>
                    <div className="layout-slider" id="layoutSlider"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Layout Style Filter</h3>
                <span>Layout</span>
              </div>
              <p>A multi-view layout toggle with an animated sliding backdrop indicating selection.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeLayout', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeLayout', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeLayout" style="display:none;"><code>&lt;div className="layout-toggle"&gt;
        &lt;div className="layout-btn active"&gt;&lt;i className="fa-solid fa-table-cells-large"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="layout-btn"&gt;&lt;i className="fa-solid fa-list"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className="layout-slider"&gt;&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* MOOD SLIDER */}
          <div className="component-card" data-category="mood">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-mood-filter">
                  <div className="mood-labels-row">
                    <span>😴 Chill</span><span>Balanced</span><span>Intense ⚡</span>
                  </div>
                  <div className="mood-track-bg">
                    <div className="mood-track-fill" id="moodFill" style="width:50%"></div>
                  </div>
                  <input type="range" id="moodRange" className="mood-range-input" min="0" max="100" value="50" oninput="updateMood(this)" />
                  <div className="mood-emoji-display" id="moodEmoji">😐</div>
                  <div className="mood-text-display" id="moodText">Balanced</div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Mood / Vibe Filter</h3><span>Mood</span></div>
              <p>Emoji feedback slider for qualitative filtering by intensity or mood with live label updates.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeMood', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeMood', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeMood" style="display:none;"><code>&lt;div className="premium-mood-filter"&gt;
            &lt;input type="range" min="0" max="100" value="50" className="mood-range-input" oninput="updateMood(this)"&gt;
            &lt;div className="mood-emoji-display" id="moodEmoji"&gt;😐&lt;/div&gt;
          &lt;/div&gt;</code></pre>
          </div>
      
          {/* SEARCHABLE CHECKBOX FILTER */}
          <div className="component-card" data-category="mood">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-stack-filter">
                  <div className="stack-search-wrap">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Find category…" oninput="filterStack(this.value)" id="stackSearchInput" />
                  </div>
                  <div className="stack-items-list" id="stackItemsList">
                    <div className="stack-item sel" onclick="toggleStackItem(this)" data-label="Typography">
                      <div className="stack-item-left"><div className="stack-chk active"><i className="fa-solid fa-check"></i></div><span>Typography</span></div>
                      <span className="stack-badge">84</span>
                    </div>
                    <div className="stack-item" onclick="toggleStackItem(this)" data-label="Layout">
                      <div className="stack-item-left"><div className="stack-chk"></div><span>Layout</span></div>
                      <span className="stack-badge">127</span>
                    </div>
                    <div className="stack-item sel" onclick="toggleStackItem(this)" data-label="Animation">
                      <div className="stack-item-left"><div className="stack-chk active"><i className="fa-solid fa-check"></i></div><span>Animation</span></div>
                      <span className="stack-badge">53</span>
                    </div>
                    <div className="stack-item" onclick="toggleStackItem(this)" data-label="Forms">
                      <div className="stack-item-left"><div className="stack-chk"></div><span>Forms</span></div>
                      <span className="stack-badge">62</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Searchable Checkbox Filter</h3><span>Mood</span></div>
              <p>Live-search within a labelled checkbox list with count badges and multi-select state.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeStack', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeStack', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeStack" style="display:none;"><code>&lt;div className="premium-stack-filter"&gt;
            &lt;div className="stack-search-wrap"&gt;
              &lt;input type="text" placeholder="Find category…" oninput="filterStack(this.value)"&gt;
            &lt;/div&gt;
            &lt;div className="stack-item sel"&gt;
              &lt;div className="stack-chk active"&gt;&lt;/div&gt;
              &lt;span&gt;Typography&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;</code></pre>
          </div>
      
          {/* SCORE RANGE FILTER */}
          <div className="component-card" data-category="scorerange">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-score-range">
                  <div className="score-readout-row">
                    <div className="score-readout-box"><label>Min</label><span id="scoreMinDisp">20</span></div>
                    <div className="score-readout-box"><label>Max</label><span id="scoreMaxDisp">80</span></div>
                  </div>
                  <div className="score-dual-track">
                    <div className="score-dual-fill" id="scoreDualFill" style="left:20%;width:60%"></div>
                  </div>
                  <div className="score-inputs-layer">
                    <input type="range" className="score-thumb" id="scoreMinThumb" min="0" max="100" value="20" step="1" oninput="updateScoreRange()" />
                    <input type="range" className="score-thumb" id="scoreMaxThumb" min="0" max="100" value="80" step="1" oninput="updateScoreRange()" />
                  </div>
                  <div className="score-presets-row">
                    <button className="score-preset-btn" onclick="applyScorePreset(0,50,this)">0–50</button>
                    <button className="score-preset-btn active" onclick="applyScorePreset(20,80,this)">20–80</button>
                    <button className="score-preset-btn" onclick="applyScorePreset(50,100,this)">Top 50</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Score Range Filter</h3><span>Score Range</span></div>
              <p>Dual-handle slider for numeric ranges with snap presets and live min/max readout boxes.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeScore', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeScore', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeScore" style="display:none;"><code>&lt;div className="premium-score-range"&gt;
            &lt;div className="score-dual-track"&gt;
              &lt;div className="score-dual-fill"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;input type="range" className="score-thumb" id="scoreMinThumb" min="0" max="100" value="20"&gt;
            &lt;input type="range" className="score-thumb" id="scoreMaxThumb" min="0" max="100" value="80"&gt;
          &lt;/div&gt;</code></pre>
          </div>
      
          {/* MINI CALENDAR RANGE PICKER */}
          <div className="component-card" data-category="calendar">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="premium-cal-picker">
                  <div className="cal-header-row">
                    <span id="calMonthLabel">May 2026</span>
                    <div className="cal-nav-btns">
                      <button type="button" onclick="calNav(-1)" aria-label="Previous month"><i className="fa-solid fa-chevron-left"></i></button>
                      <button type="button" onclick="calNav(1)" aria-label="Next month" ><i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                  </div>
                  <div className="cal-dow-row" id="calDowRow"></div>
                  <div className="cal-days-grid" id="calDaysGrid"></div>
                  <div className="cal-status-text" id="calStatusText">Click to select date range</div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top"><h3>Calendar Range Picker</h3><span>Calendar</span></div>
              <p>Compact two-click range selection with start/end highlight, in-range fill, and month navigation.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeCal', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeCal', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeCal" style="display:none;"><code>&lt;div className="premium-cal-picker"&gt;
            &lt;div className="cal-header-row"&gt;
              &lt;span id="calMonthLabel"&gt;May 2026&lt;/span&gt;
              &lt;button onclick="calNav(-1)"&gt;&lt;/button&gt;
              &lt;button onclick="calNav(1)"&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div className="cal-dow-row"&gt;&lt;/div&gt;
            &lt;div className="cal-days-grid"&gt;&lt;/div&gt;
          &lt;/div&gt;</code></pre>
          </div>
      
          {/* CYBERPUNK FILTER */}
          <div className="component-card" data-category="cyberpunk" style="border-color: rgba(0,255,229,0.3);">
            <div className="card-preview" style="background:#0a0a0f; background-image: repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(0,255,229,.03) 24px,rgba(0,255,229,.03) 25px);">
              <div className="card-interactive-area full-width">
                <div className="cyber-filter-wrap">
                  <div className="cyber-sys-header">
                    <div className="cyber-blink-dot"></div>
                    <span className="cyber-sys-title">SYSTEM_FILTER v2.4 <span className="cyber-cursor">█</span></span>
                  </div>
                  <div className="cyber-section-label">// access level</div>
                  <div className="cyber-chips-row" id="cyberChipsRow">
                    <div className="cyber-chip on" onclick="toggleCyberChip(this)">All</div>
                    <div className="cyber-chip" onclick="toggleCyberChip(this)">Civilian</div>
                    <div className="cyber-chip on" onclick="toggleCyberChip(this)">Corp</div>
                    <div className="cyber-chip" onclick="toggleCyberChip(this)">Ghost</div>
                    <div className="cyber-chip" onclick="toggleCyberChip(this)">Netrunner</div>
                  </div>
                  <div className="cyber-divider"></div>
                  <div className="cyber-section-label">// threat index</div>
                  <div className="cyber-slider-labels">
                    <span>0x00</span><span id="cyberHexVal">0x3C</span><span>0xFF</span>
                  </div>
                  <div className="cyber-slider-track">
                    <div className="cyber-slider-fill" id="cyberSliderFill" style="width:23%"></div>
                  </div>
                  <input type="range" id="cyberSlider" className="cyber-range-input" min="0" max="255" value="60" oninput="updateCyberSlider(this)" />
                  <div className="cyber-divider"></div>
                  <div className="cyber-section-label">// status filter</div>
                  <div className="cyber-status-row">
                    <div className="cyber-status-btn cyber-green on" onclick="this.classList.toggle('on')">Online</div>
                    <div className="cyber-status-btn cyber-amber" onclick="this.classList.toggle('on')">Encrypted</div>
                    <div className="cyber-status-btn cyber-red" onclick="this.classList.toggle('on')">Blacklisted</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content" style="background:#0a0a0f; border-top-color: rgba(0,255,229,0.2);">
              <div className="card-top">
                <h3 style="color:#00ffe5;">System_Filter — Cyberpunk</h3>
                <span style="background:rgba(255,0,60,0.15); color:#ff003c;">Cyberpunk</span>
              </div>
              <p style="color:#4dfff3; opacity:0.6;">Neon-glitch filter panel with hex threat index, access-level chips, and tri-state status toggles.</p>
              <div className="card-actions">
                <button type="button" onclick="toggleCode('codeCyber', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button type="button" onclick="copyCode('codeCyber', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeCyber" style="display:none; background:#050508;"><code>&lt;div className="cyber-filter-wrap"&gt;
            &lt;div className="cyber-chips-row"&gt;
              &lt;div className="cyber-chip on"&gt;All&lt;/div&gt;
              &lt;div className="cyber-chip"&gt;Corp&lt;/div&gt;
            &lt;/div&gt;
            &lt;input type="range" className="cyber-range-input" min="0" max="255" value="60"&gt;
            &lt;div className="cyber-status-btn cyber-green on"&gt;Online&lt;/div&gt;
          &lt;/div&gt;</code></pre>
          </div>
      
        </div>
      
      
        <footer className="premium-footer">
          <div className="footer-grid">
            {/* Brand column */}
            <div className="footer-col brand-col">
              <div className="footer-brand">
                <span className="footer-brand-icon">⬡</span>
                <span className="footer-brand-text">UIverse</span>
              </div>
              <p className="footer-desc">Premium open-source UI component showroom featuring modern glassmorphism layouts, glowing CSS keyframes, and highly interactive vanilla elements.</p>
            </div>
      
            {/* Quick links */}
            <div className="footer-col">
              <h4>Design Suite</h4>
              <ul className="footer-links">
                <li><a href="button.html">Buttons</a></li>
                <li><a href="cards.html">Cards</a></li>
                <li><a href="inputs.html">Inputs</a></li>
                <li><a href="dropdown-components.html">Dropdowns</a></li>
              </ul>
            </div>
      
            {/* Showrooms V2 */}
            <div className="footer-col">
              <h4>V2 Suites</h4>
              <ul className="footer-links">
                <li><a href="notifications-premium.html"><i className="fa-solid fa-bell"></i> Notifications V2</a></li>
                <li><a href="step-indicators.html"><i className="fa-solid fa-list-check"></i> Steppers</a></li>
                <li><a href="progress-premium.html"><i className="fa-solid fa-bars-progress"></i> Progress V2</a></li>
                <li><a href="ratings-premium.html"><i className="fa-solid fa-star"></i> Ratings V2</a></li>
                <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i> Filters V2</a></li>
              </ul>
            </div>
      
            {/* Newsletter column */}
            <div className="footer-col newsletter-col">
              <h4>Get UI Updates</h4>
              <p>Subscribe to our newsletter to receive notification updates on new premium glass designs.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email..." />
                <button type="button" onclick="subscribeNewsletter(this)" aria-label="Subscribe"><i className="fa-solid fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
      
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              &copy; 2026 UIverse Library. All rights reserved.
            </div>
            <div className="footer-socials">
              <a href="#"><i className="fa-brands fa-github"></i></a>
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-discord"></i></a>
              <a href="#"><i className="fa-brands fa-dribbble"></i></a>
            </div>
          </div>
        </footer>
      
      </main>
    </>
  );
}
