import React from 'react';

export default function color(){
  return (
    <>
      <main className="main-home">
      
        {/* Page Hero */}
        <div className="page-hero">
          <div className="page-hero-left">
            <div className="breadcrumb">
              <a href="index.html">Home</a>
              <i className="fa-solid fa-chevron-right"></i>
              <span>Colors</span>
            </div>
            <h1 className="page-title">Color Library</h1>
            <p className="page-desc">Discover beautiful individual colors, palettes, gradients, and themed color systems. Click any swatch to copy the HEX or RGB value instantly.</p>
            <div className="page-meta">
              <span className="meta-badge"><i className="fa-solid fa-droplet"></i> 20+ Colors</span>
              <span className="meta-badge"><i className="fa-solid fa-swatchbook"></i> 5 Palettes</span>
              <span className="meta-badge"><i className="fa-solid fa-copy"></i> Click to Copy</span>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="color-hero-swatches">
              <div className="hero-swatch" style="background:#eb6835;"></div>
              <div className="hero-swatch" style="background:#6c5ce7;"></div>
              <div className="hero-swatch" style="background:#00b894;"></div>
              <div className="hero-swatch" style="background:#0984e3;"></div>
              <div className="hero-swatch" style="background:#d63031;"></div>
              <div className="hero-swatch" style="background:#fdcb6e;"></div>
            </div>
          </div>
        </div>
      
        {/* Filter Bar */}
        <div className="filter-bar">
          <button className="filter-btn active" onclick="filterSection('all', this)">All</button>
          <button className="filter-btn" onclick="filterSection('trending', this)">Trending</button>
          <button className="filter-btn" onclick="filterSection('gradients', this)">Gradients</button>
          <button className="filter-btn" onclick="filterSection('palettes', this)">Palettes</button>
          <button className="filter-btn" onclick="filterSection('themed', this)">Themed</button>
          <div className="filter-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Filter colors..." oninput="liveFilter(this.value)" />
          </div>
        </div>
      
        {/* ===== TRENDING COLORS ===== */}
        <section className="color-section" data-section="trending">
          <div className="section-header-row">
            <h2 className="color-section-title">🔥 Trending Colors</h2>
            <span className="section-count">8 colors</span>
          </div>
          <div className="color-grid" id="colorGrid">
      
            <div className="color-card" data-name="electric purple violet">
              <div className="color-swatch" style="background:#8b5cf6;">
                <span className="swatch-badge">Popular</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#8b5cf6', this)" title="Copy HEX"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(139,92,246)', this)" title="Copy RGB"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Electric Purple</h3>
                <span className="hex-val">#8b5cf6</span>
                <span className="rgb-val">rgb(139, 92, 246)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="ocean cyan blue">
              <div className="color-swatch" style="background:#06b6d4;">
                <span className="swatch-badge">New</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#06b6d4', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(6,182,212)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Ocean Cyan</h3>
                <span className="hex-val">#06b6d4</span>
                <span className="rgb-val">rgb(6, 182, 212)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="rose red hot pink">
              <div className="color-swatch" style="background:#f43f5e;">
                <span className="swatch-badge">Hot</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#f43f5e', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(244,63,94)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Rose Red</h3>
                <span className="hex-val">#f43f5e</span>
                <span className="rgb-val">rgb(244, 63, 94)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="accent orange uiverse brand">
              <div className="color-swatch" style="background:#eb6835;">
                <span className="swatch-badge">Brand</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#eb6835', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(235,104,53)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>UIverse Orange</h3>
                <span className="hex-val">#eb6835</span>
                <span className="rgb-val">rgb(235, 104, 53)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="mint green emerald">
              <div className="color-swatch" style="background:#00b894;">
                <span className="swatch-badge">Fresh</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#00b894', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(0,184,148)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Mint Green</h3>
                <span className="hex-val">#00b894</span>
                <span className="rgb-val">rgb(0, 184, 148)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="indigo blue deep">
              <div className="color-swatch" style="background:#6c5ce7;">
                <span className="swatch-badge">Classic</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#6c5ce7', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(108,92,231)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Deep Indigo</h3>
                <span className="hex-val">#6c5ce7</span>
                <span className="rgb-val">rgb(108, 92, 231)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="amber yellow gold">
              <div className="color-swatch" style="background:#fdcb6e;">
                <span className="swatch-badge">Warm</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#fdcb6e', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(253,203,110)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Amber Gold</h3>
                <span className="hex-val">#fdcb6e</span>
                <span className="rgb-val">rgb(253, 203, 110)</span>
              </div>
            </div>
      
            <div className="color-card" data-name="sky blue azure">
              <div className="color-swatch" style="background:#0984e3;">
                <span className="swatch-badge">Clean</span>
                <div className="swatch-actions">
                  <button onclick="copyText('#0984e3', this)"><i className="fa-solid fa-hashtag"></i></button>
                  <button onclick="copyText('rgb(9,132,227)', this)"><i className="fa-solid fa-circle-half-stroke"></i></button>
                </div>
              </div>
              <div className="color-info">
                <h3>Sky Blue</h3>
                <span className="hex-val">#0984e3</span>
                <span className="rgb-val">rgb(9, 132, 227)</span>
              </div>
            </div>
      
          </div>
        </section>
      
        {/* ===== GRADIENTS ===== */}
        <section className="color-section" data-section="gradients">
          <div className="section-header-row">
            <h2 className="color-section-title">✨ Gradients</h2>
            <span className="section-count">5 gradients</span>
          </div>
          <div className="gradient-grid">
      
            <div className="gradient-card" data-name="sunset orange gradient">
              <div className="gradient-swatch" style="background:linear-gradient(135deg,#eb6835,#fdcb6e);">
                <div className="gradient-actions">
                  <button onclick="copyText('linear-gradient(135deg, #eb6835, #fdcb6e)', this)"><i className="fa-solid fa-copy"></i> Copy CSS</button>
                </div>
              </div>
              <div className="gradient-info">
                <h3>Sunset</h3>
                <span>#eb6835 → #fdcb6e</span>
              </div>
            </div>
      
            <div className="gradient-card" data-name="purple indigo violet gradient">
              <div className="gradient-swatch" style="background:linear-gradient(135deg,#6c5ce7,#a29bfe);">
                <div className="gradient-actions">
                  <button onclick="copyText('linear-gradient(135deg, #6c5ce7, #a29bfe)', this)"><i className="fa-solid fa-copy"></i> Copy CSS</button>
                </div>
              </div>
              <div className="gradient-info">
                <h3>Purple Mist</h3>
                <span>#6c5ce7 → #a29bfe</span>
              </div>
            </div>
      
            <div className="gradient-card" data-name="ocean teal cyan gradient">
              <div className="gradient-swatch" style="background:linear-gradient(135deg,#00b894,#06b6d4);">
                <div className="gradient-actions">
                  <button onclick="copyText('linear-gradient(135deg, #00b894, #06b6d4)', this)"><i className="fa-solid fa-copy"></i> Copy CSS</button>
                </div>
              </div>
              <div className="gradient-info">
                <h3>Ocean Breeze</h3>
                <span>#00b894 → #06b6d4</span>
              </div>
            </div>
      
            <div className="gradient-card" data-name="fire red orange gradient hot">
              <div className="gradient-swatch" style="background:linear-gradient(135deg,#d63031,#eb6835);">
                <div className="gradient-actions">
                  <button onclick="copyText('linear-gradient(135deg, #d63031, #eb6835)', this)"><i className="fa-solid fa-copy"></i> Copy CSS</button>
                </div>
              </div>
              <div className="gradient-info">
                <h3>Firestorm</h3>
                <span>#d63031 → #eb6835</span>
              </div>
            </div>
      
            <div className="gradient-card" data-name="uiverse brand gradient orange purple">
              <div className="gradient-swatch" style="background:linear-gradient(135deg,#eb6835,#6c5ce7);">
                <div className="gradient-actions">
                  <button onclick="copyText('linear-gradient(135deg, #eb6835, #6c5ce7)', this)"><i className="fa-solid fa-copy"></i> Copy CSS</button>
                </div>
              </div>
              <div className="gradient-info">
                <h3>UIverse Brand</h3>
                <span>#eb6835 → #6c5ce7</span>
              </div>
            </div>
      
          </div>
        </section>
      
        {/* ===== COLOR PALETTES ===== */}
        <section className="color-section" data-section="palettes">
          <div className="section-header-row">
            <h2 className="color-section-title">🎨 Color Palettes</h2>
            <span className="section-count">5 palettes</span>
          </div>
          <div className="palette-list">
      
            <div className="palette-card" data-name="neon palette bright">
              <div className="palette-header">
                <h3>Neon Theme</h3>
                <button className="palette-copy-btn" onclick="copyText('css: #ff00ff #00ffff #39ff14 #fffb00', this)"><i className="fa-solid fa-copy"></i> Copy All</button>
              </div>
              <div className="palette-strip-row">
                <div className="palette-swatch" style="background:#ff00ff;" onclick="copyText('#ff00ff', this)" title="#ff00ff"><span>#ff00ff</span></div>
                <div className="palette-swatch" style="background:#00ffff;" onclick="copyText('#00ffff', this)" title="#00ffff"><span>#00ffff</span></div>
                <div className="palette-swatch" style="background:#39ff14;" onclick="copyText('#39ff14', this)" title="#39ff14"><span>#39ff14</span></div>
                <div className="palette-swatch" style="background:#fffb00;" onclick="copyText('#fffb00', this)" title="#fffb00"><span style="color:#333;">#fffb00</span></div>
                <div className="palette-swatch" style="background:#ff6600;" onclick="copyText('#ff6600', this)" title="#ff6600"><span>#ff6600</span></div>
              </div>
            </div>
      
            <div className="palette-card" data-name="dark ui theme night">
              <div className="palette-header">
                <h3>Dark UI Theme</h3>
                <button className="palette-copy-btn" onclick="copyText('css: #0f172a #1e293b #334155 #475569 #94a3b8', this)"><i className="fa-solid fa-copy"></i> Copy All</button>
              </div>
              <div className="palette-strip-row">
                <div className="palette-swatch" style="background:#0f172a;" onclick="copyText('#0f172a', this)"><span>#0f172a</span></div>
                <div className="palette-swatch" style="background:#1e293b;" onclick="copyText('#1e293b', this)"><span>#1e293b</span></div>
                <div className="palette-swatch" style="background:#334155;" onclick="copyText('#334155', this)"><span>#334155</span></div>
                <div className="palette-swatch" style="background:#475569;" onclick="copyText('#475569', this)"><span>#475569</span></div>
                <div className="palette-swatch" style="background:#94a3b8;" onclick="copyText('#94a3b8', this)"><span style="color:#222;">#94a3b8</span></div>
              </div>
            </div>
      
            <div className="palette-card" data-name="pastel soft light">
              <div className="palette-header">
                <h3>Pastel Theme</h3>
                <button className="palette-copy-btn" onclick="copyText('css: #ffadad #ffd6a5 #fdffb6 #caffbf #a0c4ff', this)"><i className="fa-solid fa-copy"></i> Copy All</button>
              </div>
              <div className="palette-strip-row">
                <div className="palette-swatch" style="background:#ffadad;" onclick="copyText('#ffadad', this)"><span style="color:#333;">#ffadad</span></div>
                <div className="palette-swatch" style="background:#ffd6a5;" onclick="copyText('#ffd6a5', this)"><span style="color:#333;">#ffd6a5</span></div>
                <div className="palette-swatch" style="background:#fdffb6;" onclick="copyText('#fdffb6', this)"><span style="color:#333;">#fdffb6</span></div>
                <div className="palette-swatch" style="background:#caffbf;" onclick="copyText('#caffbf', this)"><span style="color:#333;">#caffbf</span></div>
                <div className="palette-swatch" style="background:#a0c4ff;" onclick="copyText('#a0c4ff', this)"><span style="color:#333;">#a0c4ff</span></div>
              </div>
            </div>
      
            <div className="palette-card" data-name="monochrome grey neutral">
              <div className="palette-header">
                <h3>Monochrome</h3>
                <button className="palette-copy-btn" onclick="copyText('css: #111 #333 #666 #999 #ccc', this)"><i className="fa-solid fa-copy"></i> Copy All</button>
              </div>
              <div className="palette-strip-row">
                <div className="palette-swatch" style="background:#111;" onclick="copyText('#111', this)"><span>#111</span></div>
                <div className="palette-swatch" style="background:#333;" onclick="copyText('#333', this)"><span>#333</span></div>
                <div className="palette-swatch" style="background:#666;" onclick="copyText('#666', this)"><span>#666</span></div>
                <div className="palette-swatch" style="background:#999;" onclick="copyText('#999', this)"><span style="color:#333;">#999</span></div>
                <div className="palette-swatch" style="background:#ccc;" onclick="copyText('#ccc', this)"><span style="color:#333;">#ccc</span></div>
              </div>
            </div>
      
            <div className="palette-card" data-name="earth tones warm nature">
              <div className="palette-header">
                <h3>Earth Tones</h3>
                <button className="palette-copy-btn" onclick="copyText('css: #6b4226 #a0522d #c68642 #d2a679 #f5deb3', this)"><i className="fa-solid fa-copy"></i> Copy All</button>
              </div>
              <div className="palette-strip-row">
                <div className="palette-swatch" style="background:#6b4226;" onclick="copyText('#6b4226', this)"><span>#6b4226</span></div>
                <div className="palette-swatch" style="background:#a0522d;" onclick="copyText('#a0522d', this)"><span>#a0522d</span></div>
                <div className="palette-swatch" style="background:#c68642;" onclick="copyText('#c68642', this)"><span>#c68642</span></div>
                <div className="palette-swatch" style="background:#d2a679;" onclick="copyText('#d2a679', this)"><span style="color:#333;">#d2a679</span></div>
                <div className="palette-swatch" style="background:#f5deb3;" onclick="copyText('#f5deb3', this)"><span style="color:#333;">#f5deb3</span></div>
              </div>
            </div>
      
          </div>
        </section>
      
        {/* ===== THEMED COLORS ===== */}
        <section className="color-section" data-section="themed">
          <div className="section-header-row">
            <h2 className="color-section-title">🎯 UI Themed Colors</h2>
            <span className="section-count">Status + Brand</span>
          </div>
          <div className="themed-grid">
      
            <div className="themed-card" data-name="success green status">
              <div className="themed-swatch" style="background:#00b894;"></div>
              <div className="themed-info">
                <strong>Success</strong>
                <span>#00b894</span>
                <button onclick="copyText('#00b894', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="danger error red status">
              <div className="themed-swatch" style="background:#d63031;"></div>
              <div className="themed-info">
                <strong>Danger</strong>
                <span>#d63031</span>
                <button onclick="copyText('#d63031', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="warning yellow amber status">
              <div className="themed-swatch" style="background:#fdcb6e;"></div>
              <div className="themed-info">
                <strong>Warning</strong>
                <span>#fdcb6e</span>
                <button onclick="copyText('#fdcb6e', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="info blue status">
              <div className="themed-swatch" style="background:#0984e3;"></div>
              <div className="themed-info">
                <strong>Info</strong>
                <span>#0984e3</span>
                <button onclick="copyText('#0984e3', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="primary brand accent">
              <div className="themed-swatch" style="background:#eb6835;"></div>
              <div className="themed-info">
                <strong>Primary</strong>
                <span>#eb6835</span>
                <button onclick="copyText('#eb6835', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="secondary purple indigo">
              <div className="themed-swatch" style="background:#6c5ce7;"></div>
              <div className="themed-info">
                <strong>Secondary</strong>
                <span>#6c5ce7</span>
                <button onclick="copyText('#6c5ce7', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="light grey background">
              <div className="themed-swatch" style="background:#f5f4f2; border:1px solid #e0e0e0;"></div>
              <div className="themed-info">
                <strong>Light BG</strong>
                <span>#f5f4f2</span>
                <button onclick="copyText('#f5f4f2', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
            <div className="themed-card" data-name="dark background night">
              <div className="themed-swatch" style="background:#0f0f12;"></div>
              <div className="themed-info">
                <strong>Dark BG</strong>
                <span>#0f0f12</span>
                <button onclick="copyText('#0f0f12', this)"><i className="fa-solid fa-copy"></i></button>
              </div>
            </div>
      
          </div>
        </section>
      
        {/* Toast notification */}
        <div id="copyToast" className="copy-toast">
          <i className="fa-solid fa-check"></i> Copied!
        </div>
      
      </main>
    </>
  );
}
