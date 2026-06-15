import React from 'react';

export default function ratingsPremium(){
  return (
    <>
      <div className="main-content">
      
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search rating components..." id="searchInput" />
          </div>
          <div className="topbar-actions">
            <button className="add-btn" onclick="rateAllFive()"><i className="fa-solid fa-star"></i> Max Ratings</button>
            <button className="collection-btn" onclick="resetAllRatings()"><i className="fa-solid fa-rotate-left"></i> Reset All</button>
            <button className="theme-btn"><i className="fa-solid fa-moon"></i></button>
          </div>
        </header>
      
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="breadcrumb">Home &gt; Rating Indicators</div>
            <h1>Interactive Rating UI</h1>
            <p>Modern reusable star ratings, neon emoji selectors, review dashboards, and circular score progress bars. Built with HSL color parameters, elastic transitions, and premium glassmorphic backdrops.</p>
            
            <div className="hero-tags">
              <span><i className="fa-solid fa-star-half-stroke"></i> Elastic Hover</span>
              <span><i className="fa-solid fa-face-smile"></i> Neon Emojis</span>
              <span><i className="fa-solid fa-window-restore"></i> Clean Structure</span>
            </div>
          </div>
      
          {/* Hero Rating Preview Animation */}
          <div className="hero-preview">
            <div className="hero-rating-demo">
              <div className="demo-stars">
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star-half-stroke active"></i>
              </div>
              <span className="demo-label">4.8 / 5.0 Rating</span>
            </div>
          </div>
        </section>
      
        {/* FILTERS */}
        <section className="filters">
          <button className="active" onclick="filterCategory('all', this)">All Ratings</button>
          <button onclick="filterCategory('stars', this)">Star Ratings</button>
          <button onclick="filterCategory('emojis', this)">Emoji Selectors</button>
          <button onclick="filterCategory('circular', this)">Circular Scores</button>
          <button onclick="filterCategory('cards', this)">Dashboard Cards</button>
        </section>
      
        {/* SHOWROOM GRID */}
        <div className="notification-grid" id="ratingsGrid">
      
          {/* 1. STAR RATING COMPONENT */}
          <div className="component-card" data-category="stars">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-star-rating">
                  <div className="stars-row" id="classicStars">
                    <i className="fa-regular fa-star" data-rating="1" onclick="setClassicRating(1)"></i>
                    <i className="fa-regular fa-star" data-rating="2" onclick="setClassicRating(2)"></i>
                    <i className="fa-regular fa-star" data-rating="3" onclick="setClassicRating(3)"></i>
                    <i className="fa-regular fa-star" data-rating="4" onclick="setClassicRating(4)"></i>
                    <i className="fa-regular fa-star" data-rating="5" onclick="setClassicRating(5)"></i>
                  </div>
                  <span className="rating-descriptor" id="classicLabel">Select your rating</span>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Star Rating</h3>
                <span>Star Ratings</span>
              </div>
              <p>A classic star rating featuring responsive cursor hovers, elastic scale-up click micro-animations, and descriptive labels.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeS', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeS', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeS" style="display:none;"><code>&lt;div className="premium-star-rating"&gt;
        &lt;div className="stars-row"&gt;
          &lt;i className="fa-regular fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-regular fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-regular fa-star"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;span className="rating-descriptor"&gt;Good&lt;/span&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 2. EMOJI RATING SELECTOR */}
          <div className="component-card" data-category="emojis">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-emoji-rating">
                  <div className="emojis-row">
                    <div className="emoji-node" data-emoji="1" onclick="setEmojiRating(1, 'Terrible!')">😠</div>
                    <div className="emoji-node" data-emoji="2" onclick="setEmojiRating(2, 'Sad!')">😢</div>
                    <div className="emoji-node" data-emoji="3" onclick="setEmojiRating(3, 'Okay!')">😐</div>
                    <div className="emoji-node" data-emoji="4" onclick="setEmojiRating(4, 'Happy!')">🙂</div>
                    <div className="emoji-node" data-emoji="5" onclick="setEmojiRating(5, 'Love it!')">😍</div>
                  </div>
                  <span className="emoji-label" id="emojiLabel">How do you feel?</span>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Emoji Selector</h3>
                <span>Emoji Selectors</span>
              </div>
              <p>A fun neon-glow emoji selector that triggers facial scale-ups, custom border halos, and smooth description switches.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeE', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeE', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeE" style="display:none;"><code>&lt;div className="premium-emoji-rating"&gt;
        &lt;div className="emojis-row"&gt;
          &lt;div className="emoji-node active"&gt;😍&lt;/div&gt;
          &lt;div className="emoji-node"&gt;🙂&lt;/div&gt;
        &lt;/div&gt;
        &lt;span className="emoji-label"&gt;Love it!&lt;/span&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 3. PRODUCT REVIEW RATING CARD */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-review-card" onclick="refillBars()">
                  <div className="review-top">
                    <div className="review-score-block">
                      <span className="big-score">4.8</span>
                      <span className="total-reviews">out of 5.0</span>
                    </div>
                    <div className="review-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
      
                  <div className="review-bars-grid">
                    <div className="review-bar-row">
                      <span className="row-star-label">5 <i className="fa-solid fa-star"></i></span>
                      <div className="review-bar-track">
                        <div className="review-bar-fill gold" id="rFill5" style="width: 80%;"></div>
                      </div>
                      <span className="row-star-val">80%</span>
                    </div>
                    <div className="review-bar-row">
                      <span className="row-star-label">4 <i className="fa-solid fa-star"></i></span>
                      <div className="review-bar-track">
                        <div className="review-bar-fill gold" id="rFill4" style="width: 15%;"></div>
                      </div>
                      <span className="row-star-val">15%</span>
                    </div>
                    <div className="review-bar-row">
                      <span className="row-star-label">3 <i className="fa-solid fa-star"></i></span>
                      <div className="review-bar-track">
                        <div className="review-bar-fill gold" id="rFill3" style="width: 3%;"></div>
                      </div>
                      <span className="row-star-val">3%</span>
                    </div>
                  </div>
                  <span className="review-card-tip"><i className="fa-solid fa-wand-magic-sparkles"></i> Click Card to Reset Bars</span>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Review Dashboard</h3>
                <span>Dashboard Cards</span>
              </div>
              <p>A dashboard rating card with progress breakdown bars, dynamic gold fills, and responsive flex grids.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeR', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeR', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeR" style="display:none;"><code>&lt;div className="premium-review-card"&gt;
        &lt;div className="review-top"&gt;
          &lt;span className="big-score"&gt;4.8&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="review-bars-grid"&gt;
          &lt;div className="review-bar-row"&gt;
            &lt;div className="review-bar-track"&gt;
              &lt;div className="review-bar-fill gold" style="width: 80%;"&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 4. CIRCULAR RATING PROGRESS */}
          <div className="component-card" data-category="circular">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-circular-rating">
                  <div className="circular-svg-wrap">
                    <svg width="120" height="120" className="circle-svg">
                      <circle className="circle-track" cx="60" cy="60" r="50"></circle>
                      <circle className="circle-fill-path" id="cPath" cx="60" cy="60" r="50" stroke-dasharray="314.16" stroke-dashoffset="62.83"></circle>
                    </svg>
                    {/* Glowing Orbital Dot */}
                    <div className="orbital-dot" id="orbitalDot" style="transform: rotate(198deg) translate(50px) rotate(-198deg);"></div>
                    <div className="circle-center-text">
                      <span className="circle-num" id="cNum">8.0</span>
                      <span className="circle-label" id="cLabel">Excellent!</span>
                    </div>
                  </div>
      
                  {/* Interaction Controls */}
                  <div style="display:flex; gap:10px; margin-top:20px;">
                    <button className="trigger-live-btn purple" onclick="adjustRating(-0.5)"><i className="fa-solid fa-minus"></i></button>
                    <button className="trigger-live-btn green" onclick="adjustRating(0.5)"><i className="fa-solid fa-plus"></i></button>
                  </div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Circular Rating</h3>
                <span>Circular Scores</span>
              </div>
              <p>A circular score gauge displaying ratings from 0 to 10 with custom neon purple SVG strokes and glowing orbital rings.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeC', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeC', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeC" style="display:none;"><code>&lt;div className="premium-circular-rating"&gt;
        &lt;svg width="120" height="120" className="circle-svg"&gt;
          &lt;circle className="circle-track" cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
          &lt;circle className="circle-fill-path" cx="60" cy="60" r="50" stroke-dasharray="314.16" stroke-dashoffset="62.83"&gt;&lt;/circle&gt;
        &lt;/svg&gt;
        &lt;div className="orbital-dot"&gt;&lt;/div&gt;
        &lt;div className="circle-center-text"&gt;
          &lt;span className="circle-num"&gt;8.0&lt;/span&gt;
          &lt;span className="circle-label"&gt;Excellent!&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 5. INTERACTIVE HOVER RATING UI */}
          <div className="component-card" data-category="stars">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                
                {/* Interactive Render */}
                <div className="premium-interactive-hover-ui">
                  <div className="interactive-stars-row" id="hoverStars">
                    <i className="fa-solid fa-star" data-idx="1" onmouseover="triggerHoverGlow(1)" onclick="setHoverSelect(1)"></i>
                    <i className="fa-solid fa-star" data-idx="2" onmouseover="triggerHoverGlow(2)" onclick="setHoverSelect(2)"></i>
                    <i className="fa-solid fa-star" data-idx="3" onmouseover="triggerHoverGlow(3)" onclick="setHoverSelect(3)"></i>
                    <i className="fa-solid fa-star" data-idx="4" onmouseover="triggerHoverGlow(4)" onclick="setHoverSelect(4)"></i>
                    <i className="fa-solid fa-star" data-idx="5" onmouseover="triggerHoverGlow(5)" onclick="setHoverSelect(5)"></i>
                  </div>
                  <div className="interactive-glow-board" id="glowBoard"></div>
                </div>
      
              </div>
            </div>
      
            <div className="card-content">
              <div className="card-top">
                <h3>Hover Elastic UI</h3>
                <span>Star Ratings</span>
              </div>
              <p>A next-gen rating board where glowing spring stars scale elastically on cursor hover with backing board glows.</p>
              
              <div className="card-actions">
                <button onclick="toggleCode('codeH', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeH', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
      
            <pre className="code-block" id="codeH" style="display:none;"><code>&lt;div className="premium-interactive-hover-ui"&gt;
        &lt;div className="interactive-stars-row"&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div className="interactive-glow-board"&gt;&lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 6. GLASSMORPHISM RATING CARD */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="glassmorphism-rating-card" id="glassCard">
                  <div className="glass-card-header">
                    <span className="glass-card-title">Experience Rating</span>
                    <span className="glass-card-badge">PRO</span>
                  </div>
                  <div className="glass-stars-row" id="glassStars">
                    <i className="fa-solid fa-star" data-rating="1" onclick="setGlassRating(1)"></i>
                    <i className="fa-solid fa-star" data-rating="2" onclick="setGlassRating(2)"></i>
                    <i className="fa-solid fa-star" data-rating="3" onclick="setGlassRating(3)"></i>
                    <i className="fa-solid fa-star" data-rating="4" onclick="setGlassRating(4)"></i>
                    <i className="fa-solid fa-star" data-rating="5" onclick="setGlassRating(5)"></i>
                  </div>
                  <div className="glass-rating-feedback" id="glassLabel">Tap to Rate Card</div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Glassmorphism Rating</h3>
                <span>Dashboard Cards</span>
              </div>
              <p>A frosted glass-panel card that shifts its backing glow, border clarity, and backdrop opacity based on user star selections.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeGCard', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeGCard', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeGCard" style="display:none;"><code>&lt;div className="glassmorphism-rating-card"&gt;
        &lt;div className="glass-card-header"&gt;
          &lt;span className="glass-card-title"&gt;Experience Rating&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="glass-stars-row"&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
          &lt;i className="fa-solid fa-star"&gt;&lt;/i&gt;
        &lt;/div&gt;
        &lt;div className="glass-rating-feedback"&gt;Excellent&lt;/span&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 7. SWIPE GESTURE RATING SYSTEM */}
          <div className="component-card" data-category="stars">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="swipe-gesture-rating">
                  <div className="gesture-emoji-container" id="gestureEmoji">😐</div>
                  <div className="gesture-track-wrapper">
                    <input type="range" min="1" max="5" step="1" value="3" className="gesture-slider" id="gestureRange" oninput="updateGestureRating(this.value)" />
                    <div className="gesture-stars-fill" id="gestureStars">
                      <i className="fa-solid fa-star active"></i>
                      <i className="fa-solid fa-star active"></i>
                      <i className="fa-solid fa-star active"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <span className="gesture-value-label" id="gestureLabel">Neutral — 3.0 / 5.0</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Swipe Gesture Rating</h3>
                <span>Star Ratings</span>
              </div>
              <p>A mobile-optimized swipe tracking bar that scales and morphs expressive emojis and fills overlay stars in real time.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeSwipe', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeSwipe', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeSwipe" style="display:none;"><code>&lt;div className="swipe-gesture-rating"&gt;
        &lt;div className="gesture-emoji-container"&gt;😐&lt;/div&gt;
        &lt;input type="range" min="1" max="5" value="3" className="gesture-slider"&gt;
        &lt;span className="gesture-value-label"&gt;3.0 / 5.0&lt;/span&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 8. ANIMATED REACTION METER */}
          <div className="component-card" data-category="emojis">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="animated-reaction-meter">
                  <div className="reaction-display-box" id="reactionDisplay">
                    <div className="reaction-avatar" id="reactionAvatar">😐</div>
                    <div className="reaction-glowing-ring"></div>
                  </div>
                  <div className="reaction-selectors">
                    <button className="reaction-btn" onclick="triggerReaction(1, '😠', 'angry')">😠</button>
                    <button className="reaction-btn" onclick="triggerReaction(2, '😢', 'sad')">😢</button>
                    <button className="reaction-btn active" onclick="triggerReaction(3, '😐', 'neutral')">😐</button>
                    <button className="reaction-btn" onclick="triggerReaction(4, '🙂', 'happy')">🙂</button>
                    <button className="reaction-btn" onclick="triggerReaction(5, '😍', 'excited')">😍</button>
                  </div>
                  <span className="reaction-status-text" id="reactionLabel">It's Okay!</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Reaction Meter</h3>
                <span>Emoji Selectors</span>
              </div>
              <p>An interactive animated avatar block playing custom squash, shake, and float keyframes based on selection.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeReaction', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeReaction', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeReaction" style="display:none;"><code>&lt;div className="animated-reaction-meter"&gt;
        &lt;div className="reaction-display-box"&gt;
          &lt;div className="reaction-avatar"&gt;😐&lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="reaction-selectors"&gt;
          &lt;button&gt;😠&lt;/button&gt;
          &lt;button&gt;😐&lt;/button&gt;
          &lt;button&gt;😍&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 9. MULTI-CRITERIA REVIEW PANEL */}
          <div className="component-card" data-category="cards">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="multi-criteria-panel">
                  <div className="criteria-overall">
                    <span className="overall-label">Composite Rating</span>
                    <span className="overall-score" id="compositeScore">4.0</span>
                  </div>
                  <div className="criteria-rows">
                    <div className="criteria-row" data-criteria="design">
                      <span className="criteria-name">Design</span>
                      <div className="criteria-stars" id="cStarsDesign">
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('design', 1)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('design', 2)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('design', 3)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('design', 4)"></i>
                        <i className="fa-solid fa-star" onclick="setCriteriaVal('design', 5)"></i>
                      </div>
                    </div>
                    <div className="criteria-row" data-criteria="perf">
                      <span className="criteria-name">Performance</span>
                      <div className="criteria-stars" id="cStarsPerf">
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('perf', 1)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('perf', 2)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('perf', 3)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('perf', 4)"></i>
                        <i className="fa-solid fa-star" onclick="setCriteriaVal('perf', 5)"></i>
                      </div>
                    </div>
                    <div className="criteria-row" data-criteria="usability">
                      <span className="criteria-name">Usability</span>
                      <div className="criteria-stars" id="cStarsUsability">
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('usability', 1)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('usability', 2)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('usability', 3)"></i>
                        <i className="fa-solid fa-star active" onclick="setCriteriaVal('usability', 4)"></i>
                        <i className="fa-solid fa-star" onclick="setCriteriaVal('usability', 5)"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Multi-Criteria Panel</h3>
                <span>Dashboard Cards</span>
              </div>
              <p>An advanced review board allowing split ratings across criteria, real-time recalculating composite weights.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeMulti', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeMulti', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeMulti" style="display:none;"><code>&lt;div className="multi-criteria-panel"&gt;
        &lt;div className="criteria-overall"&gt;
          &lt;span className="overall-score"&gt;4.0&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className="criteria-row"&gt;
          &lt;span&gt;Design&lt;/span&gt;
          &lt;div className="criteria-stars"&gt;&lt;i className="fa-solid fa-star active"&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
          {/* 10. NEON PULSE STAR RATING */}
          <div className="component-card" data-category="stars">
            <div className="card-preview">
              <div className="card-interactive-area full-width">
                <div className="neon-pulse-star-rating">
                  <div className="neon-stars-row" id="neonStars">
                    <span className="neon-star-wrapper" onclick="triggerNeonPulse(1)"><i className="fa-regular fa-star" data-neon="1"></i></span>
                    <span className="neon-star-wrapper" onclick="triggerNeonPulse(2)"><i className="fa-regular fa-star" data-neon="2"></i></span>
                    <span className="neon-star-wrapper" onclick="triggerNeonPulse(3)"><i className="fa-regular fa-star" data-neon="3"></i></span>
                    <span className="neon-star-wrapper" onclick="triggerNeonPulse(4)"><i className="fa-regular fa-star" data-neon="4"></i></span>
                    <span className="neon-star-wrapper" onclick="triggerNeonPulse(5)"><i className="fa-regular fa-star" data-neon="5"></i></span>
                  </div>
                  <span className="neon-descriptor" id="neonLabel">Pulse Selected Star</span>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-top">
                <h3>Neon Pulse Star Rating</h3>
                <span>Star Ratings</span>
              </div>
              <p>A cyberpunk neon outliner that pulses on select and pops glowing pure CSS particles outwards around clicked nodes.</p>
              <div className="card-actions">
                <button onclick="toggleCode('codeNeon', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button onclick="copyCode('codeNeon', this)"><i className="fa-solid fa-copy"></i> Copy HTML</button>
              </div>
            </div>
            <pre className="code-block" id="codeNeon" style="display:none;"><code>&lt;div className="neon-pulse-star-rating"&gt;
        &lt;div className="neon-stars-row"&gt;
          &lt;span className="neon-star-wrapper"&gt;&lt;i className="fa-regular fa-star"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;span className="neon-descriptor"&gt;Good&lt;/span&gt;
      &lt;/div&gt;</code></pre>
          </div>
      
        </div>
      
        {/* PREMIUM GLASSMORPHISM FOOTER */}
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
                <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
              </ul>
            </div>
      
            {/* Newsletter column */}
            <div className="footer-col newsletter-col">
              <h4>Get UI Updates</h4>
              <p>Subscribe to our newsletter to receive notification updates on new premium glass designs.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email..." />
                <button onclick="subscribeNewsletter(this)"><i className="fa-solid fa-paper-plane"></i></button>
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
      
      </div>
      
      {/* INJECT SIDEBAR VIA CLIENT-SIDE HOOKS OR INLINE ASSETS */}
      <aside className="sidebar" id="sidebar">
        <div className="sidebar-brand">
          <span className="brand-icon">⬡</span>
          <span className="brand-text">UIverse</span>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="index.html"><i className="fa-solid fa-house"></i><span>Home</span></a></li>
            <li><a href="button.html"><i className="fa-solid fa-hand-pointer"></i><span>Buttons</span></a></li>
            <li><a href="dropdown-components.html"><i className="fa-solid fa-caret-down"></i><span>Dropdowns</span></a></li>
            <li><a href="navbar.html"><i className="fa-solid fa-bars"></i><span>Navbar</span></a></li>
            <li><a href="cards.html"><i className="fa-solid fa-table-cells-large"></i><span>Cards</span></a></li>
            <li><a href="flipcards.html"><i className="fa-solid fa-clone"></i><span>3D Cards</span></a></li>
            <li><a href="inputs.html"><i className="fa-solid fa-keyboard"></i><span>Inputs</span></a></li>
            <li><a href="forms.html"><i className="fa-brands fa-wpforms"></i><span>Forms</span></a></li>
            <li><a href="badges.html"><i className="fa-solid fa-award"></i><span>Badges</span></a></li>
            <li><a href="blog.html"><i className="fa-solid fa-blog"></i><span>Blog</span></a></li>
            <li><a href="article.html"><i className="fa-solid fa-newspaper"></i><span>Articles</span></a></li>
            <li><a href="alerts.html"><i className="fa-solid fa-triangle-exclamation"></i><span>Alerts</span></a></li>
            <li><a href="color.html"><i className="fa-solid fa-palette"></i><span>Colors</span></a></li>
            <li><a href="charts.html"><i className="fa-solid fa-chart-pie"></i><span>Charts</span></a></li>
            <li><a href="dashboard.html"><i className="fa-solid fa-gauge-high"></i><span>Dashboard</span></a></li>
            <li><a href="div.html"><i className="fa-solid fa-square"></i><span>DIV</span></a></li>
            <li><a href="widgets.html"><i className="fa-solid fa-layer-group"></i><span>Widgets</span></a></li>
            <li><a href="search.html"><i className="fa-solid fa-magnifying-glass"></i><span>Search Bars</span></a></li>
            <li><a href="hover.html"><i className="fa-solid fa-wand-magic-sparkles"></i><span>Hover Effects</span></a></li>
            <li><a href="error.html"><i className="fa-solid fa-circle-exclamation"></i><span>Error Pages</span></a></li>
            <li><a href="ecommerce.html"><i className="fa-solid fa-cart-shopping"></i><span>E-commerce</span></a></li>
            <li><a href="files.html"><i className="fa-solid fa-file-arrow-up"></i><span>Drag & Drop</span></a></li>
            <li><a href="hero.html"><i className="fa-solid fa-star"></i><span>Hero Sections</span></a></li>
            <li><a href="loaders.html"><i className="fa-solid fa-spinner"></i><span>Loaders</span></a></li>
            <li><a href="timeline.html"><i className="fa-solid fa-clock-rotate-left"></i><span>Timeline</span></a></li>
            <li><a href="map.html"><i className="fa-solid fa-map-location-dot"></i><span>Maps</span></a></li>
            <li><a href="menu.html"><i className="fa-solid fa-bars-staggered"></i><span>Menu</span></a></li>
            <li><a href="pricing.html"><i className="fa-solid fa-tags"></i><span>Pricing</span></a></li>
            <li>
              <a href="subscription.html">
                <i className="fa-solid fa-credit-card"></i>
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="auth.html">
                <i className="fa-solid fa-user-shield"></i>
                <span>Authentication</span>
              </a>
            </li>
              <li>
                <a href="recovery.html">
                  <i className="fa-solid fa-key" aria-hidden="true"></i>
                  <span>Password Recovery</span>
                </a>
              </li>
            <li><a href="section.html"><i className="fa-solid fa-rectangle-list"></i><span>Section</span></a></li>
            <li><a href="span.html"><i className="fa-solid fa-code"></i><span>Span</span></a></li>
            <li><a href="table.html"><i className="fa-solid fa-table"></i><span>Table</span></a></li>
            <li><a href="tabs.html"><i className="fa-solid fa-table-columns"></i><span>Tabs</span></a></li>
            <li><a href="terms.html"><i className="fa-solid fa-file-contract"></i><span>Terms</span></a></li>
            <li><a href="testimonials.html"><i className="fa-solid fa-comments"></i><span>Testimonials</span></a></li>
            <li><a href="toggles.html"><i className="fa-solid fa-toggle-on"></i><span>Toggle</span></a></li>
            <li><a href="radiobutton.html"><i className="fa-solid fa-circle-dot"></i><span>Radio Buttons</span></a></li>
            <li><a href="checkbox.html"><i className="fa-solid fa-square-check"></i><span>Checkboxes</span></a></li>
            <li><a href="notifications-premium.html"><i className="fa-solid fa-bell"></i><span>Notifications V2</span></a></li>
            <li><a href="step-indicators.html"><i className="fa-solid fa-list-check"></i><span>Steppers</span></a></li>
            <li><a href="progress-premium.html"><i className="fa-solid fa-bars-progress"></i><span>Progress V2</span></a></li>
            <li className="active"><a href="ratings-premium.html"><i className="fa-solid fa-star"></i><span>Ratings V2</span></a></li>
            <li><a href="filters-premium.html"><i className="fa-solid fa-sliders"></i><span>Filters V2</span></a></li>
            <li><a href="about.html"><i className="fa-solid fa-circle-info"></i><span>About</span></a></li>
            <li><a href="documentation.html"><i className="fa-solid fa-book"></i><span>Documentation</span></a></li>
            <li><a href="faq.html"><i className="fa-solid fa-circle-question"></i><span>Faq</span></a></li>
            <li><a href="contact.html"><i className="fa-regular fa-envelope"></i><span>Contact Us</span></a></li>
          </ul>
        </nav>
      </aside>
      
      <script>
        // RATING STATE variables
        let classicVal = 0;
        let emojiVal = 0;
        let circularVal = 8.0;
        let hoverSelectVal = 0;
      
        const descLabels = {
          1: "Terrible!",
          2: "Dissatisfied!",
          3: "Neutral",
          4: "Satisfied!",
          5: "Excellent!"
        };
      
        // 1. Classic Star Rating Logic
        function setClassicRating(val) {
          classicVal = val;
          const stars = document.querySelectorAll('#classicStars i');
          const label = document.getElementById('classicLabel');
          
          stars.forEach((star, idx) => {
            if (idx < val) {
              star.className = 'fa-solid fa-star active';
            } else {
              star.className = 'fa-regular fa-star';
            }
          });
          
          label.innerText = descLabels[val];
          label.style.color = 'var(--color-orange)';
        }
      
        // 2. Emoji Rating Logic
        function setEmojiRating(val, labelText) {
          emojiVal = val;
          const emojis = document.querySelectorAll('.emoji-node');
          const label = document.getElementById('emojiLabel');
      
          emojis.forEach((emoji, idx) => {
            emoji.classList.toggle('active', (idx + 1) === val);
          });
      
          label.innerText = labelText;
          label.style.color = '#7b61ff';
        }
      
        // 3. Review Dashboard refill
        function refillBars() {
          const f5 = document.getElementById('rFill5');
          const f4 = document.getElementById('rFill4');
          const f3 = document.getElementById('rFill3');
      
          // Drain
          f5.style.width = '0%';
          f4.style.width = '0%';
          f3.style.width = '0%';
      
          // Refill
          setTimeout(() => {
            f5.style.width = '80%';
            f4.style.width = '15%';
            f3.style.width = '3%';
          }, 200);
        }
      
        // 4. Circular Progress Indicator Logic
        function updateCircularUI() {
          const path = document.getElementById('cPath');
          const dot = document.getElementById('orbitalDot');
          const num = document.getElementById('cNum');
          const label = document.getElementById('cLabel');
      
          // Circumference = 2 * PI * 50 = 314.16
          const circumference = 314.16;
          const progress = circularVal / 10;
          const offset = circumference - (progress * circumference);
      
          path.style.strokeDashoffset = offset;
          num.innerText = circularVal.toFixed(1);
      
          // Calculate dynamic rotation angle of orbital dot
          const angle = (progress * 360) - 90;
          dot.style.transform = `rotate(${angle}deg) translate(50px) rotate(-${angle}deg)`;
      
          // Update label text based on score
          if (circularVal >= 9.0) {
            label.innerText = "Masterpiece!";
            label.style.color = '#10b981';
          } else if (circularVal >= 7.5) {
            label.innerText = "Excellent!";
            label.style.color = '#7b61ff';
          } else if (circularVal >= 5.0) {
            label.innerText = "Satisfactory";
            label.style.color = '#ff7a3d';
          } else {
            label.innerText = "Needs Work";
            label.style.color = '#ef4444';
          }
        }
      
        function adjustRating(val) {
          circularVal = Math.min(10.0, Math.max(0.0, circularVal + val));
          updateCircularUI();
        }
      
        // 5. Elastic Hover Star UI Logic
        function triggerHoverGlow(idx) {
          const stars = document.querySelectorAll('#hoverStars i');
          const board = document.getElementById('glowBoard');
      
          stars.forEach((star, index) => {
            star.classList.toggle('glow', index < idx);
          });
      
          board.style.opacity = '1';
          board.style.background = `radial-gradient(circle at ${idx * 20}% 50%, rgba(245, 158, 11, 0.25) 0%, transparent 60%)`;
        }
      
        // Handle hover select
        let hoverSelectVal = 0;
        function setHoverSelect(idx) {
          hoverSelectVal = idx;
          const stars = document.querySelectorAll('#hoverStars i');
          
          stars.forEach((star, index) => {
            if (index < idx) {
              star.className = 'fa-solid fa-star selected';
            } else {
              star.className = 'fa-solid fa-star';
            }
          });
        }
      
        // Handle hover leave
        document.getElementById('hoverStars').addEventListener('mouseleave', () => {
          const stars = document.querySelectorAll('#hoverStars i');
          const board = document.getElementById('glowBoard');
          
          stars.forEach((star, index) => {
            star.classList.remove('glow');
            
            // Keep select active class if present
            if (hoverSelectVal > 0) {
              if (index < hoverSelectVal) {
                star.className = 'fa-solid fa-star selected';
              } else {
                star.className = 'fa-solid fa-star';
              }
            } else {
              star.className = 'fa-solid fa-star';
            }
          });
      
          board.style.opacity = '0';
        });
      
        // 6. Glassmorphism Rating Card
        let glassRatingVal = 0;
        function setGlassRating(val) {
          glassRatingVal = val;
          const card = document.getElementById('glassCard');
          const stars = document.querySelectorAll('#glassStars i');
          const label = document.getElementById('glassLabel');
          
          stars.forEach((star, idx) => {
            if (idx < val) {
              star.className = 'fa-solid fa-star active';
            } else {
              star.className = 'fa-solid fa-star';
            }
          });
      
          label.innerText = descLabels[val] || 'Tap to Rate Card';
          label.style.color = '#ff7a3d';
          
          // Shift card glow & border colors depending on rating
          card.style.background = `rgba(18, 22, 38, ${0.4 + (val * 0.08)})`;
          card.style.borderColor = `rgba(245, 158, 11, ${0.05 + (val * 0.06)})`;
          card.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.35), 0 0 30px rgba(245, 158, 11, ${val * 0.04})`;
        }
      
        // 7. Swipe Gesture Rating System
        let gestureRatingVal = 3;
        const gestureEmojis = {
          1: "😠",
          2: "😢",
          3: "😐",
          4: "🙂",
          5: "😍"
        };
        const gestureStatus = {
          1: "Terrible",
          2: "Dissatisfied",
          3: "Neutral",
          4: "Satisfied",
          5: "Excellent"
        };
        function updateGestureRating(val) {
          gestureRatingVal = parseInt(val);
          const emojiContainer = document.getElementById('gestureEmoji');
          const starsFill = document.querySelectorAll('#gestureStars i');
          const label = document.getElementById('gestureLabel');
      
          // Update active emoji with transition effect
          emojiContainer.innerText = gestureEmojis[gestureRatingVal];
          emojiContainer.style.transform = 'scale(1.2) rotate(5deg)';
          setTimeout(() => {
            emojiContainer.style.transform = '';
          }, 150);
      
          // Update active star count
          starsFill.forEach((star, idx) => {
            if (idx < gestureRatingVal) {
              star.className = 'fa-solid fa-star active';
            } else {
              star.className = 'fa-solid fa-star';
            }
          });
      
          label.innerText = `${gestureStatus[gestureRatingVal]} — ${val}.0 / 5.0`;
        }
      
        // 8. Animated Reaction Meter
        let activeReactionVal = 3;
        const reactionText = {
          1: "Angry!",
          2: "Sigh... Sad",
          3: "It's Okay!",
          4: "Happy!",
          5: "Loving It!"
        };
        function triggerReaction(val, emoji, mood) {
          activeReactionVal = val;
          const avatar = document.getElementById('reactionAvatar');
          const label = document.getElementById('reactionLabel');
          const buttons = document.querySelectorAll('.reaction-btn');
      
          // Update active buttons
          buttons.forEach((btn, idx) => {
            btn.classList.toggle('active', (idx + 1) === val);
          });
      
          // Update avatar and trigger animations
          avatar.innerText = emoji;
          avatar.className = `reaction-avatar mood-${mood}`;
          
          label.innerText = reactionText[val];
        }
      
        // 9. Multi-Criteria Review Panel
        let criteriaVals = {
          design: 4,
          perf: 4,
          usability: 4
        };
        function setCriteriaVal(criteria, val) {
          criteriaVals[criteria] = val;
          const starsRow = document.querySelectorAll(`#cStars${criteria.charAt(0).toUpperCase() + criteria.slice(1)} i`);
          
          starsRow.forEach((star, idx) => {
            if (idx < val) {
              star.className = 'fa-solid fa-star active';
            } else {
              star.className = 'fa-solid fa-star';
            }
          });
      
          // Recalculate overall composite rating
          const avg = (criteriaVals.design + criteriaVals.perf + criteriaVals.usability) / 3;
          const scoreBlock = document.getElementById('compositeScore');
          scoreBlock.innerText = avg.toFixed(1);
          
          // Animate overall block briefly
          scoreBlock.style.transform = 'scale(1.2)';
          setTimeout(() => {
            scoreBlock.style.transform = '';
          }, 150);
        }
      
        // 10. Neon Pulse Star Rating
        let neonRatingVal = 0;
        function triggerNeonPulse(val) {
          neonRatingVal = val;
          const stars = document.querySelectorAll('#neonStars i');
          const label = document.getElementById('neonLabel');
      
          stars.forEach((star, idx) => {
            const currentIdx = idx + 1;
            const starWrapper = star.parentNode;
            
            if (currentIdx <= val) {
              star.className = 'fa-solid fa-star active';
              starWrapper.classList.add('active');
              
              // Dynamic explosion particle pops
              if (currentIdx === val) {
                createNeonExplosion(starWrapper);
              }
            } else {
              star.className = 'fa-regular fa-star';
              starWrapper.classList.remove('active');
            }
          });
      
          label.innerText = descLabels[val] || 'Pulse Selected Star';
        }
      
        function createNeonExplosion(container) {
          for (let i = 0; i < 8; i++) {
            const particle = document.createElement('span');
            particle.className = 'neon-particle';
            const angle = (i / 8) * 2 * Math.PI;
            const velocity = 35 + Math.random() * 20;
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);
            particle.style.background = i % 2 === 0 ? '#00f0ff' : '#7b61ff';
            
            container.appendChild(particle);
            
            setTimeout(() => {
              particle.remove();
            }, 700);
          }
        }
      
        // Global Max Ratings Action
        function rateAllFive() {
          setClassicRating(5);
          setEmojiRating(5, 'Love it!');
          circularVal = 10.0;
          updateCircularUI();
      
          // Fill all review bars
          document.getElementById('rFill5').style.width = '100%';
          document.getElementById('rFill4').style.width = '100%';
          document.getElementById('rFill3').style.width = '100%';
      
          // Hover UI Max
          setHoverSelect(5);
      
          // V2 elements max
          setGlassRating(5);
          updateGestureRating(5);
          document.getElementById('gestureRange').value = 5;
          triggerReaction(5, '😍', 'excited');
          setCriteriaVal('design', 5);
          setCriteriaVal('perf', 5);
          setCriteriaVal('usability', 5);
          triggerNeonPulse(5);
        }
      
        // Global Reset
        function resetAllRatings() {
          classicVal = 0;
          emojiVal = 0;
          circularVal = 8.0;
          hoverSelectVal = 0;
      
          const classicStars = document.querySelectorAll('#classicStars i');
          classicStars.forEach(s => s.className = 'fa-regular fa-star');
          document.getElementById('classicLabel').innerText = 'Select your rating';
          document.getElementById('classicLabel').style.color = '';
      
          const emojis = document.querySelectorAll('.emoji-node');
          emojis.forEach(e => e.classList.remove('active'));
          document.getElementById('emojiLabel').innerText = 'How do you feel?';
          document.getElementById('emojiLabel').style.color = '';
      
          // Reset Review Bars
          document.getElementById('rFill5').style.width = '80%';
          document.getElementById('rFill4').style.width = '15%';
          document.getElementById('rFill3').style.width = '3%';
      
          // Reset Circular
          updateCircularUI();
      
          // Reset Hover UI
          setHoverSelect(0);
          const hoverStars = document.querySelectorAll('#hoverStars i');
          hoverStars.forEach(s => s.className = 'fa-solid fa-star');
      
          // Reset V2 elements
          setGlassRating(0);
          const glassCard = document.getElementById('glassCard');
          glassCard.style.background = '';
          glassCard.style.borderColor = '';
          glassCard.style.boxShadow = '';
          document.getElementById('glassLabel').innerText = 'Tap to Rate Card';
          document.getElementById('glassLabel').style.color = '';
      
          updateGestureRating(3);
          document.getElementById('gestureRange').value = 3;
      
          triggerReaction(3, '😐', 'neutral');
      
          setCriteriaVal('design', 4);
          setCriteriaVal('perf', 4);
          setCriteriaVal('usability', 4);
      
          triggerNeonPulse(0);
        }
      
        // Filter category
        function filterCategory(cat, btn) {
          const buttons = document.querySelectorAll('.filters button');
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
      
          const cards = document.querySelectorAll('.component-card');
          cards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (cat === 'all' || cardCat === cat) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        }
      
        // Search input system
        document.getElementById('searchInput').addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          const cards = document.querySelectorAll('.component-card');
          
          cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const desc = card.querySelector('p').innerText.toLowerCase();
            if (title.includes(query) || desc.includes(query)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      
        // Code toggle and copy clipboard methods
        function toggleCode(id, btn) {
          const block = document.getElementById(id);
          if (block.style.display === 'none') {
            block.style.display = 'block';
            btn.innerHTML = '<i className="fa-solid fa-eye-slash"></i> Hide Code';
          } else {
            block.style.display = 'none';
            btn.innerHTML = '<i className="fa-solid fa-code"></i> View Code';
          }
        }
      
        function copyCode(id, btn) {
          const code = document.getElementById(id).innerText;
          navigator.clipboard.writeText(code).then(() => {
            const origText = btn.innerHTML;
            btn.innerHTML = '<i className="fa-solid fa-check"></i> Copied!';
            btn.style.color = '#10b981';
            btn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            setTimeout(() => {
              btn.innerHTML = origText;
              btn.style.color = '';
              btn.style.borderColor = '';
            }, 1800);
          });
        }
      
        // Newsletter subscribe
        function subscribeNewsletter(btn) {
          const input = btn.previousElementSibling;
          if (input.value.trim() !== '') {
            const origHTML = btn.innerHTML;
            btn.innerHTML = '<i className="fa-solid fa-check"></i>';
            btn.style.background = '#10b981';
            input.value = '';
            setTimeout(() => {
              btn.innerHTML = origHTML;
              btn.style.background = '';
            }, 2000);
          }
        }
      
        // Run on start
        updateCircularUI();
      </script>
    </>
  );
}
