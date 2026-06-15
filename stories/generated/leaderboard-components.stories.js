import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Leaderboard Components',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Ranking and leaderboard UI components

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>leaderboard</code>, <code>ranking</code>, <code>statistics</code>, <code>scores</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="page-shell">
    <section class="hero">
      <div class="hero-badge">🏆 Dedicated Leaderboard Components</div>
      <h1>Ranking and statistics UI for gaming, education, coding, and analytics dashboards.</h1>
      <p>Ten polished leaderboard patterns built with pure HTML and CSS.</p>
      <div class="hero-meta">
        <span class="meta-pill">10 Components</span>
        <span class="meta-pill">Pure HTML + CSS</span>
        <span class="meta-pill">Responsive</span>
      </div>
    </section>

    <section class="related-pages" aria-label="Related pages">
      <a href="index.html">Home</a>
      <a href="cards.html">Cards</a>
      <a href="inputs.html">Inputs</a>
      <a href="ai-components.html">AI</a>
      <a href="profile-components.html">Profiles</a>
    </section>

    <section class="leaderboard-grid">
      <article class="component-card">
        <div class="card-preview gaming-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Gaming League</span>
              <h2>Season Champions</h2>
            </div>
            <span class="preview-badge">Live</span>
          </div>
          <div class="podium">
            <div class="podium-slot second">
              <span>2</span>
              <strong>Nova</strong>
              <small>12,480 pts</small>
            </div>
            <div class="podium-slot first">
              <span>1</span>
              <strong>Rex</strong>
              <small>14,220 pts</small>
            </div>
            <div class="podium-slot third">
              <span>3</span>
              <strong>Luna</strong>
              <small>11,990 pts</small>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Gaming Podium</h3>
          <p>Compact top-three podium with score chips and a dramatic ranking layout for tournaments and esports apps.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb1', this)">View Code</button>
            <button onclick="copyCode('lb1', this)">Copy</button>
          </div>
          <pre id="lb1" class="code-block"><code>&lt;div class="podium"&gt;
  &lt;div class="podium-slot first"&gt;1&lt;/div&gt;
  &lt;div class="podium-slot second"&gt;2&lt;/div&gt;
  &lt;div class="podium-slot third"&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview coding-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Coding Platform</span>
              <h2>Contest Rankings</h2>
            </div>
            <span class="preview-badge">Weekly</span>
          </div>
          <div class="ranking-table">
            <div class="ranking-row"><span class="rank">01</span><span>maria_dev</span><strong>980</strong></div>
            <div class="ranking-row"><span class="rank">02</span><span>codeflux</span><strong>945</strong></div>
            <div class="ranking-row"><span class="rank">03</span><span>algorise</span><strong>910</strong></div>
            <div class="ranking-row"><span class="rank">04</span><span>bytecraft</span><strong>882</strong></div>
          </div>
        </div>
        <div class="card-body">
          <h3>Coding Contest Table</h3>
          <p>A leaderboard table styled for hackathons and code challenge platforms with ranked rows and score emphasis.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb2', this)">View Code</button>
            <button onclick="copyCode('lb2', this)">Copy</button>
          </div>
          <pre id="lb2" class="code-block"><code>&lt;div class="ranking-table"&gt;
  &lt;div class="ranking-row"&gt;&lt;span&gt;01&lt;/span&gt;&lt;span&gt;user&lt;/span&gt;&lt;strong&gt;980&lt;/strong&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview education-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Education</span>
              <h2>Class Scoreboard</h2>
            </div>
            <span class="preview-badge">Term 2</span>
          </div>
          <div class="scoreboard">
            <div class="score-item"><span>Aria</span><strong>98%</strong></div>
            <div class="score-item"><span>Leo</span><strong>96%</strong></div>
            <div class="score-item"><span>Mina</span><strong>94%</strong></div>
            <div class="score-item"><span>Owen</span><strong>92%</strong></div>
          </div>
        </div>
        <div class="card-body">
          <h3>Education Scoreboard</h3>
          <p>Clean ranking cards for classrooms, cohorts, or learning platforms with progress-driven percentages.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb3', this)">View Code</button>
            <button onclick="copyCode('lb3', this)">Copy</button>
          </div>
          <pre id="lb3" class="code-block"><code>&lt;div class="score-item"&gt;&lt;span&gt;Aria&lt;/span&gt;&lt;strong&gt;98%&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview analytics-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Analytics</span>
              <h2>Top Performers</h2>
            </div>
            <span class="preview-badge">Q2</span>
          </div>
          <div class="analytics-list">
            <div class="analytics-row">
              <span>North Region</span>
              <div class="bar"><i style="width: 92%"></i></div>
              <strong>92</strong>
            </div>
            <div class="analytics-row">
              <span>West Region</span>
              <div class="bar"><i style="width: 84%"></i></div>
              <strong>84</strong>
            </div>
            <div class="analytics-row">
              <span>East Region</span>
              <div class="bar"><i style="width: 79%"></i></div>
              <strong>79</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Analytics Bars</h3>
          <p>Statistic-heavy leaderboard bars that work well for dashboards, growth reports, and team comparisons.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb4', this)">View Code</button>
            <button onclick="copyCode('lb4', this)">Copy</button>
          </div>
          <pre id="lb4" class="code-block"><code>&lt;div class="analytics-row"&gt;
  &lt;span&gt;North Region&lt;/span&gt;
  &lt;div class="bar"&gt;&lt;i style="width: 92%"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview team-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Team Challenge</span>
              <h2>Streak Leaders</h2>
            </div>
            <span class="preview-badge">All Time</span>
          </div>
          <div class="team-board">
            <div class="team-row"><span>#1 Alpha</span><small>48 wins</small></div>
            <div class="team-row"><span>#2 Orbit</span><small>42 wins</small></div>
            <div class="team-row"><span>#3 Pulse</span><small>39 wins</small></div>
            <div class="team-row"><span>#4 Forge</span><small>34 wins</small></div>
          </div>
        </div>
        <div class="card-body">
          <h3>Team Streak Board</h3>
          <p>A flexible leaderboard panel for squads, clubs, or communities that need wins, streaks, and position at a glance.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb5', this)">View Code</button>
            <button onclick="copyCode('lb5', this)">Copy</button>
          </div>
          <pre id="lb5" class="code-block"><code>&lt;div class="team-row"&gt;&lt;span&gt;#1 Alpha&lt;/span&gt;&lt;small&gt;48 wins&lt;/small&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview sales-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Sales Ops</span>
              <h2>Pipeline Ladder</h2>
            </div>
            <span class="preview-badge">Today</span>
          </div>
          <div class="sales-ladder">
            <div class="ladder-row">
              <span class="ladder-rank">01</span>
              <span>North Zone</span>
              <strong>$48k</strong>
            </div>
            <div class="ladder-row">
              <span class="ladder-rank">02</span>
              <span>Growth Hub</span>
              <strong>$42k</strong>
            </div>
            <div class="ladder-row">
              <span class="ladder-rank">03</span>
              <span>Core Markets</span>
              <strong>$37k</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Pipeline Ladder</h3>
          <p>Ranked revenue rows with compact badges for sales and revenue teams.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb6', this)">View Code</button>
            <button onclick="copyCode('lb6', this)">Copy</button>
          </div>
          <pre id="lb6" class="code-block"><code>&lt;div class="ladder-row"&gt;&lt;span&gt;01&lt;/span&gt;&lt;span&gt;North Zone&lt;/span&gt;&lt;strong&gt;$48k&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview community-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Community</span>
              <h2>Engagement Heat</h2>
            </div>
            <span class="preview-badge">Live</span>
          </div>
          <div class="heatmap">
            <div class="heat-row">
              <span>Creators</span>
              <div class="heat-dots">
                <span class="heat-dot hot"></span>
                <span class="heat-dot hot"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot cool"></span>
              </div>
              <strong>92</strong>
            </div>
            <div class="heat-row">
              <span>Moderators</span>
              <div class="heat-dots">
                <span class="heat-dot hot"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
              </div>
              <strong>78</strong>
            </div>
            <div class="heat-row">
              <span>Newcomers</span>
              <div class="heat-dots">
                <span class="heat-dot warm"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
              </div>
              <strong>63</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Engagement Heatmap</h3>
          <p>Dot-based intensity tracker for community or product engagement tiers.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb7', this)">View Code</button>
            <button onclick="copyCode('lb7', this)">Copy</button>
          </div>
          <pre id="lb7" class="code-block"><code>&lt;div class="heat-row"&gt;&lt;span&gt;Creators&lt;/span&gt;&lt;div class="heat-dots"&gt;...&lt;/div&gt;&lt;strong&gt;92&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview creator-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Creators</span>
              <h2>Top Channels</h2>
            </div>
            <span class="preview-badge">This Week</span>
          </div>
          <div class="creator-list">
            <div class="creator-row">
              <div class="avatar">AR</div>
              <span>Aurora Studio</span>
              <span class="creator-badge">+12%</span>
            </div>
            <div class="creator-row">
              <div class="avatar">VP</div>
              <span>Vector Pulse</span>
              <span class="creator-badge">+9%</span>
            </div>
            <div class="creator-row">
              <div class="avatar">NX</div>
              <span>Nova UX</span>
              <span class="creator-badge">+6%</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Creator Spotlight</h3>
          <p>Avatar-first leaderboard rows perfect for creators and communities.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb8', this)">View Code</button>
            <button onclick="copyCode('lb8', this)">Copy</button>
          </div>
          <pre id="lb8" class="code-block"><code>&lt;div class="creator-row"&gt;&lt;div class="avatar"&gt;AR&lt;/div&gt;&lt;span&gt;Aurora Studio&lt;/span&gt;&lt;span class="creator-badge"&gt;+12%&lt;/span&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview sprint-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Product</span>
              <h2>Sprint Points</h2>
            </div>
            <span class="preview-badge">Sprint 18</span>
          </div>
          <div class="sprint-list">
            <div class="sprint-pill">
              <span>Atlas</span>
              <strong>180 pts</strong>
            </div>
            <div class="sprint-pill">
              <span>Beacon</span>
              <strong>164 pts</strong>
            </div>
            <div class="sprint-pill">
              <span>Cirrus</span>
              <strong>152 pts</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Sprint Points Stack</h3>
          <p>Rounded chips that surface point totals for delivery teams.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb9', this)">View Code</button>
            <button onclick="copyCode('lb9', this)">Copy</button>
          </div>
          <pre id="lb9" class="code-block"><code>&lt;div class="sprint-pill"&gt;&lt;span&gt;Atlas&lt;/span&gt;&lt;strong&gt;180 pts&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview mover-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Performance</span>
              <h2>Weekly Movers</h2>
            </div>
            <span class="preview-badge">Trending</span>
          </div>
          <div class="mover-list">
            <div class="mover-row">
              <span>North Star</span>
              <span class="mover-chip up">▲ 18%</span>
            </div>
            <div class="mover-row">
              <span>Pulse Wave</span>
              <span class="mover-chip up">▲ 12%</span>
            </div>
            <div class="mover-row">
              <span>Axis Core</span>
              <span class="mover-chip down">▼ 5%</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Weekly Movers</h3>
          <p>Quick up/down change indicators for growth and performance dashboards.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb10', this)">View Code</button>
            <button onclick="copyCode('lb10', this)">Copy</button>
          </div>
          <pre id="lb10" class="code-block"><code>&lt;div class="mover-row"&gt;&lt;span&gt;North Star&lt;/span&gt;&lt;span class="mover-chip up"&gt;▲ 18%&lt;/span&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>
    </section>
  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/leaderboard-components.css\`

#### JavaScript Scripts:
- \`/js/features/command-palette.js\`
- \`/dist/shared.js\`

### Accessibility (a11y) Checklist

- [x] Semantic HTML: appropriate tags are utilized.
- [x] Focus states: interactive elements show native or custom focus styling.
- [x] Color contrast: contrast ratios meet WCAG standard compliance.


### Visual & Interactive Test Cases

- [x] Render check: component layout presents visual elements clearly.
- [x] Hover check: interactive elements trigger hover states and transitions.
- [x] Responsive layout: scales and nests correctly across viewports.

`
      }
    }
  }
};

export const Default = {
  render: () => createShadowRootStory({
    title: 'Leaderboard Components',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/leaderboard-components.css"],
    content: `<main class="page-shell">
    <section class="hero">
      <div class="hero-badge">🏆 Dedicated Leaderboard Components</div>
      <h1>Ranking and statistics UI for gaming, education, coding, and analytics dashboards.</h1>
      <p>Ten polished leaderboard patterns built with pure HTML and CSS.</p>
      <div class="hero-meta">
        <span class="meta-pill">10 Components</span>
        <span class="meta-pill">Pure HTML + CSS</span>
        <span class="meta-pill">Responsive</span>
      </div>
    </section>

    <section class="related-pages" aria-label="Related pages">
      <a href="index.html">Home</a>
      <a href="cards.html">Cards</a>
      <a href="inputs.html">Inputs</a>
      <a href="ai-components.html">AI</a>
      <a href="profile-components.html">Profiles</a>
    </section>

    <section class="leaderboard-grid">
      <article class="component-card">
        <div class="card-preview gaming-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Gaming League</span>
              <h2>Season Champions</h2>
            </div>
            <span class="preview-badge">Live</span>
          </div>
          <div class="podium">
            <div class="podium-slot second">
              <span>2</span>
              <strong>Nova</strong>
              <small>12,480 pts</small>
            </div>
            <div class="podium-slot first">
              <span>1</span>
              <strong>Rex</strong>
              <small>14,220 pts</small>
            </div>
            <div class="podium-slot third">
              <span>3</span>
              <strong>Luna</strong>
              <small>11,990 pts</small>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Gaming Podium</h3>
          <p>Compact top-three podium with score chips and a dramatic ranking layout for tournaments and esports apps.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb1', this)">View Code</button>
            <button onclick="copyCode('lb1', this)">Copy</button>
          </div>
          <pre id="lb1" class="code-block"><code>&lt;div class="podium"&gt;
  &lt;div class="podium-slot first"&gt;1&lt;/div&gt;
  &lt;div class="podium-slot second"&gt;2&lt;/div&gt;
  &lt;div class="podium-slot third"&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview coding-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Coding Platform</span>
              <h2>Contest Rankings</h2>
            </div>
            <span class="preview-badge">Weekly</span>
          </div>
          <div class="ranking-table">
            <div class="ranking-row"><span class="rank">01</span><span>maria_dev</span><strong>980</strong></div>
            <div class="ranking-row"><span class="rank">02</span><span>codeflux</span><strong>945</strong></div>
            <div class="ranking-row"><span class="rank">03</span><span>algorise</span><strong>910</strong></div>
            <div class="ranking-row"><span class="rank">04</span><span>bytecraft</span><strong>882</strong></div>
          </div>
        </div>
        <div class="card-body">
          <h3>Coding Contest Table</h3>
          <p>A leaderboard table styled for hackathons and code challenge platforms with ranked rows and score emphasis.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb2', this)">View Code</button>
            <button onclick="copyCode('lb2', this)">Copy</button>
          </div>
          <pre id="lb2" class="code-block"><code>&lt;div class="ranking-table"&gt;
  &lt;div class="ranking-row"&gt;&lt;span&gt;01&lt;/span&gt;&lt;span&gt;user&lt;/span&gt;&lt;strong&gt;980&lt;/strong&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview education-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Education</span>
              <h2>Class Scoreboard</h2>
            </div>
            <span class="preview-badge">Term 2</span>
          </div>
          <div class="scoreboard">
            <div class="score-item"><span>Aria</span><strong>98%</strong></div>
            <div class="score-item"><span>Leo</span><strong>96%</strong></div>
            <div class="score-item"><span>Mina</span><strong>94%</strong></div>
            <div class="score-item"><span>Owen</span><strong>92%</strong></div>
          </div>
        </div>
        <div class="card-body">
          <h3>Education Scoreboard</h3>
          <p>Clean ranking cards for classrooms, cohorts, or learning platforms with progress-driven percentages.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb3', this)">View Code</button>
            <button onclick="copyCode('lb3', this)">Copy</button>
          </div>
          <pre id="lb3" class="code-block"><code>&lt;div class="score-item"&gt;&lt;span&gt;Aria&lt;/span&gt;&lt;strong&gt;98%&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview analytics-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Analytics</span>
              <h2>Top Performers</h2>
            </div>
            <span class="preview-badge">Q2</span>
          </div>
          <div class="analytics-list">
            <div class="analytics-row">
              <span>North Region</span>
              <div class="bar"><i style="width: 92%"></i></div>
              <strong>92</strong>
            </div>
            <div class="analytics-row">
              <span>West Region</span>
              <div class="bar"><i style="width: 84%"></i></div>
              <strong>84</strong>
            </div>
            <div class="analytics-row">
              <span>East Region</span>
              <div class="bar"><i style="width: 79%"></i></div>
              <strong>79</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Analytics Bars</h3>
          <p>Statistic-heavy leaderboard bars that work well for dashboards, growth reports, and team comparisons.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb4', this)">View Code</button>
            <button onclick="copyCode('lb4', this)">Copy</button>
          </div>
          <pre id="lb4" class="code-block"><code>&lt;div class="analytics-row"&gt;
  &lt;span&gt;North Region&lt;/span&gt;
  &lt;div class="bar"&gt;&lt;i style="width: 92%"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview team-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Team Challenge</span>
              <h2>Streak Leaders</h2>
            </div>
            <span class="preview-badge">All Time</span>
          </div>
          <div class="team-board">
            <div class="team-row"><span>#1 Alpha</span><small>48 wins</small></div>
            <div class="team-row"><span>#2 Orbit</span><small>42 wins</small></div>
            <div class="team-row"><span>#3 Pulse</span><small>39 wins</small></div>
            <div class="team-row"><span>#4 Forge</span><small>34 wins</small></div>
          </div>
        </div>
        <div class="card-body">
          <h3>Team Streak Board</h3>
          <p>A flexible leaderboard panel for squads, clubs, or communities that need wins, streaks, and position at a glance.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb5', this)">View Code</button>
            <button onclick="copyCode('lb5', this)">Copy</button>
          </div>
          <pre id="lb5" class="code-block"><code>&lt;div class="team-row"&gt;&lt;span&gt;#1 Alpha&lt;/span&gt;&lt;small&gt;48 wins&lt;/small&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview sales-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Sales Ops</span>
              <h2>Pipeline Ladder</h2>
            </div>
            <span class="preview-badge">Today</span>
          </div>
          <div class="sales-ladder">
            <div class="ladder-row">
              <span class="ladder-rank">01</span>
              <span>North Zone</span>
              <strong>$48k</strong>
            </div>
            <div class="ladder-row">
              <span class="ladder-rank">02</span>
              <span>Growth Hub</span>
              <strong>$42k</strong>
            </div>
            <div class="ladder-row">
              <span class="ladder-rank">03</span>
              <span>Core Markets</span>
              <strong>$37k</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Pipeline Ladder</h3>
          <p>Ranked revenue rows with compact badges for sales and revenue teams.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb6', this)">View Code</button>
            <button onclick="copyCode('lb6', this)">Copy</button>
          </div>
          <pre id="lb6" class="code-block"><code>&lt;div class="ladder-row"&gt;&lt;span&gt;01&lt;/span&gt;&lt;span&gt;North Zone&lt;/span&gt;&lt;strong&gt;$48k&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview community-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Community</span>
              <h2>Engagement Heat</h2>
            </div>
            <span class="preview-badge">Live</span>
          </div>
          <div class="heatmap">
            <div class="heat-row">
              <span>Creators</span>
              <div class="heat-dots">
                <span class="heat-dot hot"></span>
                <span class="heat-dot hot"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot cool"></span>
              </div>
              <strong>92</strong>
            </div>
            <div class="heat-row">
              <span>Moderators</span>
              <div class="heat-dots">
                <span class="heat-dot hot"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot warm"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
              </div>
              <strong>78</strong>
            </div>
            <div class="heat-row">
              <span>Newcomers</span>
              <div class="heat-dots">
                <span class="heat-dot warm"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
                <span class="heat-dot cool"></span>
              </div>
              <strong>63</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Engagement Heatmap</h3>
          <p>Dot-based intensity tracker for community or product engagement tiers.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb7', this)">View Code</button>
            <button onclick="copyCode('lb7', this)">Copy</button>
          </div>
          <pre id="lb7" class="code-block"><code>&lt;div class="heat-row"&gt;&lt;span&gt;Creators&lt;/span&gt;&lt;div class="heat-dots"&gt;...&lt;/div&gt;&lt;strong&gt;92&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview creator-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Creators</span>
              <h2>Top Channels</h2>
            </div>
            <span class="preview-badge">This Week</span>
          </div>
          <div class="creator-list">
            <div class="creator-row">
              <div class="avatar">AR</div>
              <span>Aurora Studio</span>
              <span class="creator-badge">+12%</span>
            </div>
            <div class="creator-row">
              <div class="avatar">VP</div>
              <span>Vector Pulse</span>
              <span class="creator-badge">+9%</span>
            </div>
            <div class="creator-row">
              <div class="avatar">NX</div>
              <span>Nova UX</span>
              <span class="creator-badge">+6%</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Creator Spotlight</h3>
          <p>Avatar-first leaderboard rows perfect for creators and communities.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb8', this)">View Code</button>
            <button onclick="copyCode('lb8', this)">Copy</button>
          </div>
          <pre id="lb8" class="code-block"><code>&lt;div class="creator-row"&gt;&lt;div class="avatar"&gt;AR&lt;/div&gt;&lt;span&gt;Aurora Studio&lt;/span&gt;&lt;span class="creator-badge"&gt;+12%&lt;/span&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview sprint-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Product</span>
              <h2>Sprint Points</h2>
            </div>
            <span class="preview-badge">Sprint 18</span>
          </div>
          <div class="sprint-list">
            <div class="sprint-pill">
              <span>Atlas</span>
              <strong>180 pts</strong>
            </div>
            <div class="sprint-pill">
              <span>Beacon</span>
              <strong>164 pts</strong>
            </div>
            <div class="sprint-pill">
              <span>Cirrus</span>
              <strong>152 pts</strong>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Sprint Points Stack</h3>
          <p>Rounded chips that surface point totals for delivery teams.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb9', this)">View Code</button>
            <button onclick="copyCode('lb9', this)">Copy</button>
          </div>
          <pre id="lb9" class="code-block"><code>&lt;div class="sprint-pill"&gt;&lt;span&gt;Atlas&lt;/span&gt;&lt;strong&gt;180 pts&lt;/strong&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card">
        <div class="card-preview mover-preview">
          <div class="preview-head">
            <div>
              <span class="preview-kicker">Performance</span>
              <h2>Weekly Movers</h2>
            </div>
            <span class="preview-badge">Trending</span>
          </div>
          <div class="mover-list">
            <div class="mover-row">
              <span>North Star</span>
              <span class="mover-chip up">▲ 18%</span>
            </div>
            <div class="mover-row">
              <span>Pulse Wave</span>
              <span class="mover-chip up">▲ 12%</span>
            </div>
            <div class="mover-row">
              <span>Axis Core</span>
              <span class="mover-chip down">▼ 5%</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h3>Weekly Movers</h3>
          <p>Quick up/down change indicators for growth and performance dashboards.</p>
          <div class="card-actions">
            <button onclick="toggleCode('lb10', this)">View Code</button>
            <button onclick="copyCode('lb10', this)">Copy</button>
          </div>
          <pre id="lb10" class="code-block"><code>&lt;div class="mover-row"&gt;&lt;span&gt;North Star&lt;/span&gt;&lt;span class="mover-chip up"&gt;▲ 18%&lt;/span&gt;&lt;/div&gt;</code></pre>
        </div>
      </article>
    </section>
  </main>`
  })
};
