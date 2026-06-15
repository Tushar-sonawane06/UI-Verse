<template>
<main class="page-shell">
    <section class="hero">
      <div class="hero-badge">🏆 Dedicated Leaderboard Components</div>
      <h1>Ranking and statistics UI for gaming, education, coding, and analytics dashboards.</h1>
      <p>Five polished leaderboard patterns built with pure HTML and CSS.</p>
      <div class="hero-meta">
        <span class="meta-pill">5 Components</span>
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
    </section>
  </main>
</template>

<script>
export default { name: 'LeaderboardComponents' }
</script>
