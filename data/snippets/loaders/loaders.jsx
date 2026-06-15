import React from 'react';

export default function loaders(){
  return (
    <>
      <main className="main">
      
          <h1>Loaders</h1>
      
          <div className="loaders-grid">
            {/* SEARCH + SORT TOOLBAR */}
            <div className="toolbar" style="grid-column: 1 / -1;">
              <div className="toolbar-search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="componentSearch" placeholder="Filter loaders..." autocomplete="off" />
              </div>
      
              <div className="sort-dropdown-wrapper" id="sortWrapper">
                <button className="sort-trigger" id="sortTrigger" onclick="toggleSortMenu()">
                  <i className="fa-solid fa-arrow-up-arrow-down"></i>
                  <span id="sortLabel">Order</span>
                  <i className="fa-solid fa-chevron-down sort-chevron"></i>
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
      
              <span className="results-count" id="resultsCount">21 components</span>
            </div>
      
            {/* Loader 1 */}
            <div className="component-card">
      
              <h3>Spin Ring Loader</h3>
      
              <div className="loader-demo-box">
                <div className="loader-spin"></div>
              </div>
      
              <div className="actions">
                <button onclick="toggleCode('loader1')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader1')">
                  Copy
                </button>
              </div>
      
              <pre id="loader1" className="code-block">
      &lt;div className="loader-spin"&gt;&lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 2 */}
            <div className="component-card">
      
              <h3>Gradient Ring Loader</h3>
      
              <div className="loader-demo-box">
                <div className="loader-gradient"></div>
              </div>
      
              <div className="actions">
                <button onclick="toggleCode('loader2')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader2')">
                  Copy
                </button>
              </div>
      
              <pre id="loader2" className="code-block">
      &lt;div className="loader-gradient"&gt;&lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 3 */}
            <div className="component-card">
      
              <h3>Bouncing Dots Loader</h3>
      
              <div className="loader-demo-box">
      
                <div className="loader-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
      
              </div>
      
              <div className="actions">
      
                <button onclick="toggleCode('loader3')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader3')">
                  Copy
                </button>
      
              </div>
      
              <pre id="loader3" className="code-block">
      &lt;div className="loader-dots"&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
      &lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 4 */}
            <div className="component-card">
      
              <h3>Pulse Loader</h3>
      
              <div className="loader-demo-box">
                <div className="loader-pulse"></div>
              </div>
      
              <div className="actions">
      
                <button onclick="toggleCode('loader4')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader4')">
                  Copy
                </button>
      
              </div>
      
              <pre id="loader4" className="code-block">
      &lt;div className="loader-pulse"&gt;&lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 5 */}
            <div className="component-card">
      
              <h3>Progress Bar Loader</h3>
      
              <div className="loader-demo-box">
      
                <div className="loader-bar-wrap">
                  <div className="loader-bar"></div>
                </div>
      
              </div>
      
              <div className="actions">
      
                <button onclick="toggleCode('loader5')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader5')">
                  Copy
                </button>
      
              </div>
      
              <pre id="loader5" className="code-block">
      &lt;div className="loader-bar-wrap"&gt;
        &lt;div className="loader-bar"&gt;&lt;/div&gt;
      &lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 6 */}
            <div className="component-card">
      
              <h3>Skeleton Loader</h3>
      
              <div className="loader-demo-box">
      
                <div className="skeleton-card">
      
                  <div className="skeleton-avatar"></div>
      
                  <div className="skeleton-line l1"></div>
                  <div className="skeleton-line l2"></div>
                  <div className="skeleton-line l3"></div>
      
                </div>
      
              </div>
      
              <div className="actions">
      
                <button onclick="toggleCode('loader6')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader6')">
                  Copy
                </button>
      
              </div>
      
              <pre id="loader6" className="code-block">
      &lt;div className="skeleton-card"&gt;
        ...
      &lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 7 */}
            <div className="component-card">
      
              <h3>Audio Bars Loader</h3>
      
              <div className="loader-demo-box">
      
                <div className="loader-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
      
              </div>
      
              <div className="actions">
      
                <button onclick="toggleCode('loader7')">
                  View Code
                </button>
      
                <button onclick="copyCode('loader7')">
                  Copy
                </button>
      
              </div>
      
              <pre id="loader7" className="code-block">
      &lt;div className="loader-bars"&gt;
        &lt;span&gt;&lt;/span&gt;
      &lt;/div&gt;
              </pre>
      
            </div>
      
            {/* Loader 8 */}
            <div className="component-card">
              <h3>Orbit Loader</h3>
              <div className="loader-demo-box">
                <div className="orbit-loader"><span></span></div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader8')">View Code</button>
                <button onclick="copyCode('loader8')">Copy</button>
              </div>
              <pre id="loader8" className="code-block">
      &lt;div className="orbit-loader"&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 9 */}
            <div className="component-card">
              <h3>Wave Loader</h3>
              <div className="loader-demo-box">
                <div className="wave-loader">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader9')">View Code</button>
                <button onclick="copyCode('loader9')">Copy</button>
              </div>
              <pre id="loader9" className="code-block">
      &lt;div className="wave-loader"&gt;
        &lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 10 */}
            <div className="component-card">
              <h3>Infinity Loader</h3>
              <div className="loader-demo-box">
                <div className="infinity-loader">
                  <div></div><div></div>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader10')">View Code</button>
                <button onclick="copyCode('loader10')">Copy</button>
              </div>
              <pre id="loader10" className="code-block">
      &lt;div className="infinity-loader"&gt;
        &lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 11 */}
            <div className="component-card">
              <h3>Neon Glow Loader</h3>
              <div className="loader-demo-box">
                <div className="neon-loader"></div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader11')">View Code</button>
                <button onclick="copyCode('loader11')">Copy</button>
              </div>
              <pre id="loader11" className="code-block">
      &lt;div className="neon-loader"&gt;&lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 12 */}
            <div className="component-card">
              <h3>Ripple Loader</h3>
              <div className="loader-demo-box">
                <div className="ripple-loader">
                  <div></div><div></div>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader12')">View Code</button>
                <button onclick="copyCode('loader12')">Copy</button>
              </div>
              <pre id="loader12" className="code-block">
      &lt;div className="ripple-loader"&gt;
        &lt;div&gt;&lt;/div&gt;&lt;div&gt;&lt;/div&gt;
      &lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 13 — Morphing Blob */}
            <div className="component-card">
              <h3>Morphing Blob</h3>
              <div className="loader-demo-box">
                <div className="blob-loader"></div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader13')">View Code</button>
                <button onclick="copyCode('loader13')">Copy</button>
              </div>
              <pre id="loader13" className="code-block">
      &lt;div className="blob-loader"&gt;&lt;/div&gt;
      
      /* CSS */
      .blob-loader {
        width: 60px; height: 60px;
        background: linear-gradient(135deg, #7c5cff, #fd79a8);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        animation: blob-morph 2.5s ease-in-out infinite;
      }
      @keyframes blob-morph {
        0%,100% { border-radius: 30% 70% 70% 30%/30% 30% 70% 70%; }
        25%      { border-radius: 58% 42% 38% 62%/50% 65% 35% 50%; }
        50%      { border-radius: 50% 50% 20% 80%/25% 80% 20% 75%; }
        75%      { border-radius: 67% 33% 60% 40%/40% 47% 53% 60%; }
      }
              </pre>
            </div>
      
            {/* Loader 14 — Clock Spinner */}
            <div className="component-card">
              <h3>Clock Spinner</h3>
              <div className="loader-demo-box">
                <div className="clock-loader">
                  <div className="clock-hand hour"></div>
                  <div className="clock-hand minute"></div>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader14')">View Code</button>
                <button onclick="copyCode('loader14')">Copy</button>
              </div>
              <pre id="loader14" className="code-block">
      &lt;div className="clock-loader"&gt;
        &lt;div className="clock-hand hour"&gt;&lt;/div&gt;
        &lt;div className="clock-hand minute"&gt;&lt;/div&gt;
      &lt;/div&gt;
      
      /* CSS */
      .clock-loader {
        width: 60px; height: 60px;
        border: 3px solid rgba(124,92,255,0.3);
        border-radius: 50%; position: relative;
      }
      .clock-loader::before {
        content:''; position:absolute;
        top:50%; left:50%;
        width:5px; height:5px;
        background:#7c5cff; border-radius:50%;
        transform:translate(-50%,-50%);
      }
      .clock-hand {
        position:absolute; bottom:50%; left:50%;
        transform-origin: bottom center;
        border-radius:2px; background:#7c5cff;
      }
      .hour   { width:3px; height:18px; margin-left:-1.5px; animation: clock-h 6s linear infinite; }
      .minute { width:2px; height:24px; margin-left:-1px;   animation: clock-m 1.5s linear infinite; }
      @keyframes clock-h { to { transform: rotate(360deg); } }
      @keyframes clock-m { to { transform: rotate(360deg); } }
              </pre>
            </div>
      
            {/* Loader 15 — Heartbeat */}
            <div className="component-card">
              <h3>Heartbeat Loader</h3>
              <div className="loader-demo-box">
                <div className="heartbeat-loader">
                  <svg viewBox="0 0 100 30" className="heartbeat-svg">
                    <polyline className="heartbeat-line"
                      points="0,15 20,15 28,3 36,27 44,15 52,15 60,8 68,22 76,15 100,15"/>
                  </svg>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader15')">View Code</button>
                <button onclick="copyCode('loader15')">Copy</button>
              </div>
              <pre id="loader15" className="code-block">
      &lt;div className="heartbeat-loader"&gt;
        &lt;svg viewBox="0 0 100 30" className="heartbeat-svg"&gt;
          &lt;polyline className="heartbeat-line"
            points="0,15 20,15 28,3 36,27 44,15 52,15 60,8 68,22 76,15 100,15"/&gt;
        &lt;/svg&gt;
      &lt;/div&gt;
      
      /* CSS */
      .heartbeat-loader { width: 160px; height: 50px; }
      .heartbeat-svg    { width: 100%; height: 100%; }
      .heartbeat-line {
        fill: none; stroke: #fd79a8; stroke-width: 2;
        stroke-dasharray: 200; stroke-dashoffset: 200;
        animation: hb-draw 1.2s ease-in-out infinite;
      }
      @keyframes hb-draw {
        0%   { stroke-dashoffset: 200; opacity: 1; }
        70%  { stroke-dashoffset: 0;   opacity: 1; }
        100% { stroke-dashoffset: 0;   opacity: 0; }
      }
              </pre>
            </div>
      
            {/* Loader 16 — Typewriter Dots */}
            <div className="component-card">
              <h3>Typewriter Dots</h3>
              <div className="loader-demo-box">
                <div className="typewriter-loader">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader16')">View Code</button>
                <button onclick="copyCode('loader16')">Copy</button>
              </div>
              <pre id="loader16" className="code-block">
      &lt;div className="typewriter-loader"&gt;
        &lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;/span&gt;
      &lt;/div&gt;
      
      /* CSS */
      .typewriter-loader {
        display: flex; gap: 6px; align-items: center;
      }
      .typewriter-loader span {
        width: 10px; height: 10px;
        border-radius: 50%;
        background: #6c5ce7;
        animation: type-bounce 1s infinite ease-in-out;
      }
      .typewriter-loader span:nth-child(2) { animation-delay: 0.2s; background: #a29bfe; }
      .typewriter-loader span:nth-child(3) { animation-delay: 0.4s; background: #fd79a8; }
      @keyframes type-bounce {
        0%,80%,100% { transform: scale(0.6); opacity:0.4; }
        40%         { transform: scale(1.2); opacity:1;   }
      }
              </pre>
            </div>
      
            {/* Loader 17 — Comet Trail */}
            <div className="component-card">
              <h3>Comet Trail</h3>
              <div className="loader-demo-box">
                <div className="comet-loader"></div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader17')">View Code</button>
                <button onclick="copyCode('loader17')">Copy</button>
              </div>
              <pre id="loader17" className="code-block">
      &lt;div className="comet-loader"&gt;&lt;/div&gt;
      
      /* CSS */
      .comet-loader {
        width: 70px; height: 70px;
        border-radius: 50%;
        border: 3px solid rgba(124,92,255,0.12);
        position: relative;
        animation: spin 1.2s linear infinite;
      }
      .comet-loader::before {
        content: ''; position: absolute;
        top: -4px; left: 50%;
        width: 10px; height: 10px;
        background: #7c5cff;
        border-radius: 50%;
        box-shadow: 0 0 8px 2px #7c5cff,
                    0 0 20px 6px rgba(124,92,255,0.4);
        transform: translateX(-50%);
      }
      .comet-loader::after {
        content: ''; position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: 50%;
        background: conic-gradient(
          from 0deg, transparent 70%, rgba(124,92,255,0.5) 100%
        );
        border-radius: 50%;
      }
              </pre>
            </div>
      
            {/* Loader 18 — Spinning Gear */}
            <div className="component-card">
              <h3>Spinning Gear Loader</h3>
              <div className="loader-demo-box">
                <div className="icon-spin-loader">
                  <i className="fa-solid fa-gear"></i>
                  <i className="fa-solid fa-gear"></i>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader18')">View Code</button>
                <button onclick="copyCode('loader18')">Copy</button>
              </div>
              <pre id="loader18" className="code-block">
            &lt;div className="icon-spin-loader"&gt;
              &lt;i className="fa-solid fa-gear"&gt;&lt;/i&gt;
              &lt;i className="fa-solid fa-gear"&gt;&lt;/i&gt;
            &lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 19 — Icon Pulse Ring */}
            <div className="component-card">
              <h3>Icon Pulse Ring</h3>
              <div className="loader-demo-box">
                <div className="icon-pulse-ring">
                  <i className="fa-solid fa-bolt"></i>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader19')">View Code</button>
                <button onclick="copyCode('loader19')">Copy</button>
              </div>
              <pre id="loader19" className="code-block">
            &lt;div className="icon-pulse-ring"&gt;
              &lt;i className="fa-solid fa-bolt"&gt;&lt;/i&gt;
              &lt;span&gt;&lt;/span&gt;
              &lt;span&gt;&lt;/span&gt;
            &lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 20 — Circular Text Orbit */}
            <div className="component-card">
              <h3>Circular Text Orbit</h3>
              <div className="loader-demo-box">
                <div className="text-orbit-loader">
                  <svg viewBox="0 0 100 100" width="110" height="110">
                    <path id="orbit-path" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" fill="none"/>
                    <text font-size="10.5" fill="#7c5cff" font-family="DM Sans, sans-serif" font-weight="700" letter-spacing="3">
                      <textPath href="#orbit-path">LOADING • PLEASE WAIT •</textPath>
                    </text>
                  </svg>
                  <i className="fa-solid fa-circle-notch text-orbit-icon"></i>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader20')">View Code</button>
                <button onclick="copyCode('loader20')">Copy</button>
              </div>
              <pre id="loader20" className="code-block">
            &lt;div className="text-orbit-loader"&gt;
              &lt;svg viewBox="0 0 100 100" width="110" height="110"&gt;
                &lt;path id="orbit-path"
                  d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                  fill="none"/&gt;
                &lt;text font-size="10.5" fill="#7c5cff"
                  font-family="DM Sans, sans-serif"
                  font-weight="700" letter-spacing="3"&gt;
                  &lt;textPath href="#orbit-path"&gt;LOADING • PLEASE WAIT •&lt;/textPath&gt;
                &lt;/text&gt;
              &lt;/svg&gt;
              &lt;i className="fa-solid fa-circle-notch text-orbit-icon"&gt;&lt;/i&gt;
            &lt;/div&gt;
              </pre>
            </div>
      
            {/* Loader 21 — Stacked Squares */}
            <div className="component-card">
              <h3>Stacked Squares</h3>
              <div className="loader-demo-box">
                <div className="stacked-squares">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="actions">
                <button onclick="toggleCode('loader21')">View Code</button>
                <button onclick="copyCode('loader21')">Copy</button>
              </div>
              <pre id="loader21" className="code-block">
            &lt;div className="stacked-squares"&gt;
              &lt;span&gt;&lt;/span&gt;
              &lt;span&gt;&lt;/span&gt;
              &lt;span&gt;&lt;/span&gt;
            &lt;/div&gt;
              </pre>
            </div>
      
          </div>
      
      
        </main>
    </>
  );
}
