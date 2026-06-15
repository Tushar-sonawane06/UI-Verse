const inp = document.getElementById('td-input');
const btn = document.getElementById('td-btn');
const list = document.getElementById('td-list');
const empty = document.getElementById('td-empty');
const countEl = document.getElementById('td-count');
const bulk = document.getElementById('td-bulk');
const clearBtn = document.getElementById('td-clear');

let tasks = [];
let filter = 'all';

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function render() {
  list.innerHTML = '';

  const visible = tasks.filter(t => {
    if (filter === 'done') return t.done;
    if (filter === 'active') return !t.done;
    return true;
  });

  // Counter
  const activeCount = tasks.filter(t => !t.done).length;
  if (tasks.length === 0) {
    countEl.textContent = '0 tasks';
  } else if (activeCount === 0) {
    countEl.textContent = 'all done';
  } else {
    countEl.textContent = activeCount === 1 ? '1 task' : `${activeCount} tasks`;
  }

  // Bulk clear button
  const hasDone = tasks.some(t => t.done);
  bulk.classList.toggle('visible', hasDone);

  // Empty state
  empty.classList.toggle('visible', visible.length === 0);

  // Render items
  visible.forEach(t => {
    const li = document.createElement('li');
    li.className = 'td-item' + (t.done ? ' done' : '');
    li.dataset.id = t.id;

    li.innerHTML = `
      <button class="td-check" data-id="${t.id}" aria-label="${t.done ? 'Mark incomplete' : 'Mark complete'}">
        ${t.done ? '<i class="ti ti-check" aria-hidden="true"></i>' : ''}
      </button>
      <span class="td-text">${escapeHtml(t.text)}</span>
      <button class="td-del" data-id="${t.id}" aria-label="Delete task">
        <i class="ti ti-x" aria-hidden="true"></i>
      </button>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  const value = inp.value.trim();
  if (!value) return;

  tasks.push({ id: Date.now(), text: value, done: false });
  inp.value = '';
  render();
  inp.focus();
}

// Add task via button or Enter key
btn.addEventListener('click', addTask);
inp.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

// Toggle done / delete via event delegation
list.addEventListener('click', e => {
  const checkBtn = e.target.closest('.td-check');
  const delBtn = e.target.closest('.td-del');

  if (checkBtn) {
    const id = Number(checkBtn.dataset.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      render();
    }
  }

  if (delBtn) {
    const id = Number(delBtn.dataset.id);
    tasks = tasks.filter(t => t.id !== id);
    render();
  }
});

// Filter buttons
document.querySelectorAll('.td-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    filter = btn.dataset.filter;
    document.querySelectorAll('.td-filter').forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    render();
  });
});

// Clear completed
clearBtn.addEventListener('click', () => {
  tasks = tasks.filter(t => !t.done);
  render();
});

// Initial render
render();