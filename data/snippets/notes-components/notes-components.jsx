import React from 'react';

export default function notesComponents(){
  return (
    <>
      <main className="page-shell">
          <section className="hero">
            <div className="hero-badge">📝 Dedicated Notes Components</div>
            <h1>Modern sticky notes and note-taking UI for productivity apps.</h1>
            <p>Three reusable notes patterns for tasks, reminders, and quick capture flows.</p>
          </section>
      
          <section className="components-grid">
            <article className="component-card" data-name="sticky note board">
              <div className="card-preview board-preview">
                <div className="board-head">
                  <div>
                    <span className="notes-kicker">Pinned Notes</span>
                    <h2>Quick Capture Board</h2>
                  </div>
                  <span className="board-badge">6 Notes</span>
                </div>
                <div className="sticky-grid">
                  <div className="sticky-note yellow tilt-one">
                    <strong>Buy groceries</strong>
                    <p>Milk, oats, coffee, fruit.</p>
                  </div>
                  <div className="sticky-note blue tilt-two">
                    <strong>Design review</strong>
                    <p>Finalize hero layout and spacing.</p>
                  </div>
                  <div className="sticky-note pink tilt-three">
                    <strong>Call Sara</strong>
                    <p>Discuss launch checklist at 4 PM.</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Sticky Note Board</h3>
                  <p>Great for task boards, daily reminders, and lightweight note walls.</p>
                </div>
                <div className="card-actions">
                  <button onclick="toggleCode('note1', this)">View code</button>
                  <button onclick="copyCode('note1', this)">Copy code</button>
                </div>
                <pre id="note1" className="code-block"><code>&lt;div className="sticky-note yellow"&gt;
        &lt;strong&gt;Buy groceries&lt;/strong&gt;
        &lt;p&gt;Milk, oats, coffee, fruit.&lt;/p&gt;
      &lt;/div&gt;</code></pre>
              </div>
            </article>
      
            <article className="component-card" data-name="note editor">
              <div className="card-preview editor-preview">
                <div className="editor-toolbar">
                  <span className="notes-kicker">Note Editor</span>
                  <div className="editor-icons">
                    <i className="fa-solid fa-bold"></i>
                    <i className="fa-solid fa-italic"></i>
                    <i className="fa-solid fa-list-ul"></i>
                    <i className="fa-solid fa-paperclip"></i>
                  </div>
                </div>
                <div className="editor-card">
                  <input type="text" value="Project ideas" aria-label="Note title" />
                  <textarea rows="7" aria-label="Note body">• Add quick actions\n• Improve filters\n• Prepare release notes\n• Send follow-up email</textarea>
                  <div className="editor-footer">
                    <span>Last saved 2 min ago</span>
                    <span className="save-pill">Auto save on</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Rich Note Editor</h3>
                  <p>Useful for writing tasks, meeting notes, and quick content capture.</p>
                </div>
                <div className="card-actions">
                  <button onclick="toggleCode('note2', this)">View code</button>
                  <button onclick="copyCode('note2', this)">Copy code</button>
                </div>
                <pre id="note2" className="code-block"><code>&lt;textarea rows="7"&gt;
      • Add quick actions
      • Improve filters
      • Prepare release notes
      &lt;/textarea&gt;</code></pre>
              </div>
            </article>
      
            <article className="component-card" data-name="task memo">
              <div className="card-preview memo-preview">
                <div className="memo-top">
                  <span className="notes-kicker">Task Memo</span>
                  <span className="due-chip">Due Today</span>
                </div>
                <div className="memo-card">
                  <div className="memo-header">
                    <h2>Meeting Summary</h2>
                    <span>09:45 AM</span>
                  </div>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> Align on release scope</li>
                    <li><i className="fa-solid fa-circle-check"></i> Update onboarding copy</li>
                    <li><i className="fa-solid fa-circle-check"></i> Share final assets</li>
                  </ul>
                  <div className="memo-tags">
                    <span>Work</span>
                    <span>Priority</span>
                    <span>Shared</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div>
                  <h3>Task Memo</h3>
                  <p>Compact format for summaries, checklist notes, and team updates.</p>
                </div>
                <div className="card-actions">
                  <button onclick="toggleCode('note3', this)">View code</button>
                  <button onclick="copyCode('note3', this)">Copy code</button>
                </div>
                <pre id="note3" className="code-block"><code>&lt;ul&gt;
        &lt;li&gt;Align on release scope&lt;/li&gt;
        &lt;li&gt;Update onboarding copy&lt;/li&gt;
        &lt;li&gt;Share final assets&lt;/li&gt;
      &lt;/ul&gt;</code></pre>
              </div>
            </article>
          </section>
        </main>
    </>
  );
}
