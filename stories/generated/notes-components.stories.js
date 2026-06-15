import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Notes Components',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Note and memo UI components

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>notes</code>, <code>sticky</code>, <code>memo</code>, <code>productivity</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="page-shell">
    <section class="hero">
      <div class="hero-badge">📝 Dedicated Notes Components</div>
      <h1>Modern sticky notes and note-taking UI for productivity apps.</h1>
      <p>Three reusable notes patterns for tasks, reminders, and quick capture flows.</p>
    </section>

    <section class="components-grid">
      <article class="component-card" data-name="sticky note board">
        <div class="card-preview board-preview">
          <div class="board-head">
            <div>
              <span class="notes-kicker">Pinned Notes</span>
              <h2>Quick Capture Board</h2>
            </div>
            <span class="board-badge">6 Notes</span>
          </div>
          <div class="sticky-grid">
            <div class="sticky-note yellow tilt-one">
              <strong>Buy groceries</strong>
              <p>Milk, oats, coffee, fruit.</p>
            </div>
            <div class="sticky-note blue tilt-two">
              <strong>Design review</strong>
              <p>Finalize hero layout and spacing.</p>
            </div>
            <div class="sticky-note pink tilt-three">
              <strong>Call Sara</strong>
              <p>Discuss launch checklist at 4 PM.</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>Sticky Note Board</h3>
            <p>Great for task boards, daily reminders, and lightweight note walls.</p>
          </div>
          <div class="card-actions">
            <button onclick="toggleCode('note1', this)">View code</button>
            <button onclick="copyCode('note1', this)">Copy code</button>
          </div>
          <pre id="note1" class="code-block"><code>&lt;div class="sticky-note yellow"&gt;
  &lt;strong&gt;Buy groceries&lt;/strong&gt;
  &lt;p&gt;Milk, oats, coffee, fruit.&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="note editor">
        <div class="card-preview editor-preview">
          <div class="editor-toolbar">
            <span class="notes-kicker">Note Editor</span>
            <div class="editor-icons">
              <i class="fa-solid fa-bold"></i>
              <i class="fa-solid fa-italic"></i>
              <i class="fa-solid fa-list-ul"></i>
              <i class="fa-solid fa-paperclip"></i>
            </div>
          </div>
          <div class="editor-card">
            <input type="text" value="Project ideas" aria-label="Note title" />
            <textarea rows="7" aria-label="Note body">• Add quick actions\\n• Improve filters\\n• Prepare release notes\\n• Send follow-up email</textarea>
            <div class="editor-footer">
              <span>Last saved 2 min ago</span>
              <span class="save-pill">Auto save on</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>Rich Note Editor</h3>
            <p>Useful for writing tasks, meeting notes, and quick content capture.</p>
          </div>
          <div class="card-actions">
            <button onclick="toggleCode('note2', this)">View code</button>
            <button onclick="copyCode('note2', this)">Copy code</button>
          </div>
          <pre id="note2" class="code-block"><code>&lt;textarea rows="7"&gt;
• Add quick actions
• Improve filters
• Prepare release notes
&lt;/textarea&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="task memo">
        <div class="card-preview memo-preview">
          <div class="memo-top">
            <span class="notes-kicker">Task Memo</span>
            <span class="due-chip">Due Today</span>
          </div>
          <div class="memo-card">
            <div class="memo-header">
              <h2>Meeting Summary</h2>
              <span>09:45 AM</span>
            </div>
            <ul>
              <li><i class="fa-solid fa-circle-check"></i> Align on release scope</li>
              <li><i class="fa-solid fa-circle-check"></i> Update onboarding copy</li>
              <li><i class="fa-solid fa-circle-check"></i> Share final assets</li>
            </ul>
            <div class="memo-tags">
              <span>Work</span>
              <span>Priority</span>
              <span>Shared</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>Task Memo</h3>
            <p>Compact format for summaries, checklist notes, and team updates.</p>
          </div>
          <div class="card-actions">
            <button onclick="toggleCode('note3', this)">View code</button>
            <button onclick="copyCode('note3', this)">Copy code</button>
          </div>
          <pre id="note3" class="code-block"><code>&lt;ul&gt;
  &lt;li&gt;Align on release scope&lt;/li&gt;
  &lt;li&gt;Update onboarding copy&lt;/li&gt;
  &lt;li&gt;Share final assets&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </article>

  <!-- =========================================================
     NOTES COMPONENTS SHOWCASE
========================================================= -->



  <!-- CHAT NOTE -->

  <article class="component-card">

    <div class="card-preview chat-preview">

      <div class="chat-window">

        <div class="chat-head">
          <span class="notes-kicker">
            Team Notes
          </span>

          <span class="online-dot">
            ● Active
          </span>
        </div>

        <div class="chat-message left">
          <p>
            We should improve the mobile layout spacing.
          </p>
        </div>

        <div class="chat-message right">
          <p>
            I'll finish the redesign before tonight.
          </p>
        </div>

        <div class="chat-message left">
          <p>
            Perfect. Also prepare the launch assets.
          </p>
        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Chat Notes</h3>

      <p>
        Beautiful conversation style notes UI
        for collaboration apps and messaging layouts.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>

  <!-- KANBAN NOTE -->

  <article class="component-card">

    <div class="card-preview kanban-preview">

      <div class="kanban-board">

        <div class="kanban-column">

          <span class="column-title orange">
            Todo
          </span>

          <div class="kanban-task">
            Design login page
          </div>

          <div class="kanban-task">
            Create dashboard widgets
          </div>

        </div>

        <div class="kanban-column">

          <span class="column-title blue">
            Progress
          </span>

          <div class="kanban-task">
            Mobile responsiveness
          </div>

        </div>

        <div class="kanban-column">

          <span class="column-title green">
            Done
          </span>

          <div class="kanban-task">
            Hero section completed
          </div>

        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Kanban Notes</h3>

      <p>
        Organize tasks visually using modern
        draggable note boards and workflow cards.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>

  <!-- MUSIC NOTE -->

  <article class="component-card">

    <div class="card-preview music-preview">

      <div class="music-card">

        <div class="music-cover">
          ♪
        </div>

        <span class="notes-kicker">
          Playlist Notes
        </span>

        <h2>
          Focus Mode
        </h2>

        <p>
          Deep work ambient mix with calm
          synthwave and piano beats.
        </p>

        <div class="music-progress">
          <div class="music-bar"></div>
        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Music Notes</h3>

      <p>
        Aesthetic music-inspired note cards
        perfect for media dashboards and apps.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>

  <!-- TIMELINE NOTE -->

  <article class="component-card">

    <div class="card-preview timeline-preview">

      <div class="timeline-card">

        <div class="timeline-line"></div>

        <div class="timeline-item">

          <span class="timeline-dot"></span>

          <div>
            <strong>08:30 AM</strong>
            <p>Project planning meeting</p>
          </div>

        </div>

        <div class="timeline-item">

          <span class="timeline-dot"></span>

          <div>
            <strong>11:00 AM</strong>
            <p>Finalize dashboard UI</p>
          </div>

        </div>

        <div class="timeline-item">

          <span class="timeline-dot"></span>

          <div>
            <strong>04:00 PM</strong>
            <p>Send launch presentation</p>
          </div>

        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Timeline Notes</h3>

      <p>
        Timeline styled note components for
        schedules, productivity tools, and planners.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>
<article class="component-card">

  <div class="card-preview glass-preview">

    

  <!-- POLAROID NOTE -->

  <article class="creative-note polaroid-note">

    <div class="polaroid-image">
      ✨
    </div>

    <h2>
      Mood Board
    </h2>

    <p>
      Collect inspiring colors, typography,
      and layouts for the next portfolio project.
    </p>

  </article>
  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>
<article class="component-card">

  <div class="card-preview glass-preview">

    <article class="creative-note neon-note">

    <div class="neon-circle"></div>

    <span class="mini-label">
      Today
    </span>

    <h2>
      Focus Tasks
    </h2>

    <div class="task-item">
      <i class="fa-solid fa-circle-check"></i>
      Finish UI animations
    </div>

    <div class="task-item">
      <i class="fa-solid fa-circle-check"></i>
      Organize assets folder
    </div>

    <div class="task-item">
      <i class="fa-solid fa-circle-check"></i>
      Export hero illustrations
    </div>


  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>

<article class="component-card">

  <div class="card-preview glass-preview">

    <article class="creative-note floating-note">

    <div class="floating-icon">
      <i class="fa-solid fa-paper-plane"></i>
    </div>

    <h2>
      Client Message
    </h2>

    <p>
      The new dashboard looks amazing.
      Please prepare dark mode variations too.
    </p>

    <button>
      Reply
    </button>

  </article>
  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>
<article class="component-card">

  <div class="card-preview glass-preview">

    <article class="creative-note torn-note">

    <div class="torn-top"></div>

    <span class="paper-label">
      Journal
    </span>

    <h2>
      Daily Reflection
    </h2>

    <p>
      Small progress is still progress.
      Keep building consistently every day.
    </p>

  </article>



  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>

    </section>
    
  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/style.css\`
- \`/home.css\`
- \`/shared-sidebar.css\`
- \`/notes-components.css\`

#### JavaScript Scripts:
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
    title: 'Notes Components',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/style.css","/home.css","/shared-sidebar.css","/notes-components.css"],
    content: `<main class="page-shell">
    <section class="hero">
      <div class="hero-badge">📝 Dedicated Notes Components</div>
      <h1>Modern sticky notes and note-taking UI for productivity apps.</h1>
      <p>Three reusable notes patterns for tasks, reminders, and quick capture flows.</p>
    </section>

    <section class="components-grid">
      <article class="component-card" data-name="sticky note board">
        <div class="card-preview board-preview">
          <div class="board-head">
            <div>
              <span class="notes-kicker">Pinned Notes</span>
              <h2>Quick Capture Board</h2>
            </div>
            <span class="board-badge">6 Notes</span>
          </div>
          <div class="sticky-grid">
            <div class="sticky-note yellow tilt-one">
              <strong>Buy groceries</strong>
              <p>Milk, oats, coffee, fruit.</p>
            </div>
            <div class="sticky-note blue tilt-two">
              <strong>Design review</strong>
              <p>Finalize hero layout and spacing.</p>
            </div>
            <div class="sticky-note pink tilt-three">
              <strong>Call Sara</strong>
              <p>Discuss launch checklist at 4 PM.</p>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>Sticky Note Board</h3>
            <p>Great for task boards, daily reminders, and lightweight note walls.</p>
          </div>
          <div class="card-actions">
            <button onclick="toggleCode('note1', this)">View code</button>
            <button onclick="copyCode('note1', this)">Copy code</button>
          </div>
          <pre id="note1" class="code-block"><code>&lt;div class="sticky-note yellow"&gt;
  &lt;strong&gt;Buy groceries&lt;/strong&gt;
  &lt;p&gt;Milk, oats, coffee, fruit.&lt;/p&gt;
&lt;/div&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="note editor">
        <div class="card-preview editor-preview">
          <div class="editor-toolbar">
            <span class="notes-kicker">Note Editor</span>
            <div class="editor-icons">
              <i class="fa-solid fa-bold"></i>
              <i class="fa-solid fa-italic"></i>
              <i class="fa-solid fa-list-ul"></i>
              <i class="fa-solid fa-paperclip"></i>
            </div>
          </div>
          <div class="editor-card">
            <input type="text" value="Project ideas" aria-label="Note title" />
            <textarea rows="7" aria-label="Note body">• Add quick actions\\n• Improve filters\\n• Prepare release notes\\n• Send follow-up email</textarea>
            <div class="editor-footer">
              <span>Last saved 2 min ago</span>
              <span class="save-pill">Auto save on</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>Rich Note Editor</h3>
            <p>Useful for writing tasks, meeting notes, and quick content capture.</p>
          </div>
          <div class="card-actions">
            <button onclick="toggleCode('note2', this)">View code</button>
            <button onclick="copyCode('note2', this)">Copy code</button>
          </div>
          <pre id="note2" class="code-block"><code>&lt;textarea rows="7"&gt;
• Add quick actions
• Improve filters
• Prepare release notes
&lt;/textarea&gt;</code></pre>
        </div>
      </article>

      <article class="component-card" data-name="task memo">
        <div class="card-preview memo-preview">
          <div class="memo-top">
            <span class="notes-kicker">Task Memo</span>
            <span class="due-chip">Due Today</span>
          </div>
          <div class="memo-card">
            <div class="memo-header">
              <h2>Meeting Summary</h2>
              <span>09:45 AM</span>
            </div>
            <ul>
              <li><i class="fa-solid fa-circle-check"></i> Align on release scope</li>
              <li><i class="fa-solid fa-circle-check"></i> Update onboarding copy</li>
              <li><i class="fa-solid fa-circle-check"></i> Share final assets</li>
            </ul>
            <div class="memo-tags">
              <span>Work</span>
              <span>Priority</span>
              <span>Shared</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h3>Task Memo</h3>
            <p>Compact format for summaries, checklist notes, and team updates.</p>
          </div>
          <div class="card-actions">
            <button onclick="toggleCode('note3', this)">View code</button>
            <button onclick="copyCode('note3', this)">Copy code</button>
          </div>
          <pre id="note3" class="code-block"><code>&lt;ul&gt;
  &lt;li&gt;Align on release scope&lt;/li&gt;
  &lt;li&gt;Update onboarding copy&lt;/li&gt;
  &lt;li&gt;Share final assets&lt;/li&gt;
&lt;/ul&gt;</code></pre>
        </div>
      </article>

  <!-- =========================================================
     NOTES COMPONENTS SHOWCASE
========================================================= -->



  <!-- CHAT NOTE -->

  <article class="component-card">

    <div class="card-preview chat-preview">

      <div class="chat-window">

        <div class="chat-head">
          <span class="notes-kicker">
            Team Notes
          </span>

          <span class="online-dot">
            ● Active
          </span>
        </div>

        <div class="chat-message left">
          <p>
            We should improve the mobile layout spacing.
          </p>
        </div>

        <div class="chat-message right">
          <p>
            I'll finish the redesign before tonight.
          </p>
        </div>

        <div class="chat-message left">
          <p>
            Perfect. Also prepare the launch assets.
          </p>
        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Chat Notes</h3>

      <p>
        Beautiful conversation style notes UI
        for collaboration apps and messaging layouts.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>

  <!-- KANBAN NOTE -->

  <article class="component-card">

    <div class="card-preview kanban-preview">

      <div class="kanban-board">

        <div class="kanban-column">

          <span class="column-title orange">
            Todo
          </span>

          <div class="kanban-task">
            Design login page
          </div>

          <div class="kanban-task">
            Create dashboard widgets
          </div>

        </div>

        <div class="kanban-column">

          <span class="column-title blue">
            Progress
          </span>

          <div class="kanban-task">
            Mobile responsiveness
          </div>

        </div>

        <div class="kanban-column">

          <span class="column-title green">
            Done
          </span>

          <div class="kanban-task">
            Hero section completed
          </div>

        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Kanban Notes</h3>

      <p>
        Organize tasks visually using modern
        draggable note boards and workflow cards.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>

  <!-- MUSIC NOTE -->

  <article class="component-card">

    <div class="card-preview music-preview">

      <div class="music-card">

        <div class="music-cover">
          ♪
        </div>

        <span class="notes-kicker">
          Playlist Notes
        </span>

        <h2>
          Focus Mode
        </h2>

        <p>
          Deep work ambient mix with calm
          synthwave and piano beats.
        </p>

        <div class="music-progress">
          <div class="music-bar"></div>
        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Music Notes</h3>

      <p>
        Aesthetic music-inspired note cards
        perfect for media dashboards and apps.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>

  <!-- TIMELINE NOTE -->

  <article class="component-card">

    <div class="card-preview timeline-preview">

      <div class="timeline-card">

        <div class="timeline-line"></div>

        <div class="timeline-item">

          <span class="timeline-dot"></span>

          <div>
            <strong>08:30 AM</strong>
            <p>Project planning meeting</p>
          </div>

        </div>

        <div class="timeline-item">

          <span class="timeline-dot"></span>

          <div>
            <strong>11:00 AM</strong>
            <p>Finalize dashboard UI</p>
          </div>

        </div>

        <div class="timeline-item">

          <span class="timeline-dot"></span>

          <div>
            <strong>04:00 PM</strong>
            <p>Send launch presentation</p>
          </div>

        </div>

      </div>

    </div>

    <div class="card-body">

      <h3>Timeline Notes</h3>

      <p>
        Timeline styled note components for
        schedules, productivity tools, and planners.
      </p>

      <div class="card-actions">
        <button>View code</button>
        <button>Copy code</button>
      </div>

    </div>

  </article>
<article class="component-card">

  <div class="card-preview glass-preview">

    

  <!-- POLAROID NOTE -->

  <article class="creative-note polaroid-note">

    <div class="polaroid-image">
      ✨
    </div>

    <h2>
      Mood Board
    </h2>

    <p>
      Collect inspiring colors, typography,
      and layouts for the next portfolio project.
    </p>

  </article>
  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>
<article class="component-card">

  <div class="card-preview glass-preview">

    <article class="creative-note neon-note">

    <div class="neon-circle"></div>

    <span class="mini-label">
      Today
    </span>

    <h2>
      Focus Tasks
    </h2>

    <div class="task-item">
      <i class="fa-solid fa-circle-check"></i>
      Finish UI animations
    </div>

    <div class="task-item">
      <i class="fa-solid fa-circle-check"></i>
      Organize assets folder
    </div>

    <div class="task-item">
      <i class="fa-solid fa-circle-check"></i>
      Export hero illustrations
    </div>


  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>

<article class="component-card">

  <div class="card-preview glass-preview">

    <article class="creative-note floating-note">

    <div class="floating-icon">
      <i class="fa-solid fa-paper-plane"></i>
    </div>

    <h2>
      Client Message
    </h2>

    <p>
      The new dashboard looks amazing.
      Please prepare dark mode variations too.
    </p>

    <button>
      Reply
    </button>

  </article>
  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>
<article class="component-card">

  <div class="card-preview glass-preview">

    <article class="creative-note torn-note">

    <div class="torn-top"></div>

    <span class="paper-label">
      Journal
    </span>

    <h2>
      Daily Reflection
    </h2>

    <p>
      Small progress is still progress.
      Keep building consistently every day.
    </p>

  </article>



  </div>

  <div class="card-body">

    <h3>Component Name</h3>

    <p>
      Component description here.
    </p>

    <div class="card-actions">
      <button>View code</button>
      <button>Copy code</button>
    </div>

  </div>

</article>

    </section>
    
  </main>`
  })
};
