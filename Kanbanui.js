/* =====================================================
DRAG ELEMENTS
===================================================== */

const cards =
  document.querySelectorAll(
    ".task-card"
  );

const columns =
  document.querySelectorAll(
    ".task-list"
  );

/* =====================================================
DRAG START
===================================================== */

cards.forEach(card=>{

  card.addEventListener(
    "dragstart",
    ()=>{

      card.classList.add(
        "dragging"
      );

    }
  );

  card.addEventListener(
    "dragend",
    ()=>{

      card.classList.remove(
        "dragging"
      );

    }
  );

});

/* =====================================================
DROP LOGIC
===================================================== */

columns.forEach(column=>{

  column.addEventListener(
    "dragover",
    (e)=>{

      e.preventDefault();

      const dragging =
        document.querySelector(
          ".dragging"
        );

      column.appendChild(
        dragging
      );

    }
  );

});

/* =====================================================
NEW TASK BUTTON
===================================================== */

const addBtn =
  document.querySelector(
    ".primary-btn"
  );

const todoColumn =
  document.getElementById(
    "todo"
  );

// Subscribe to state manager to render updates
if (typeof UIVerseStateManager !== 'undefined') {
  UIVerseStateManager.subscribe('kanban.tasks', (tasks) => {
    if (!tasks) return;
    const lastTask = tasks[tasks.length - 1];
    if (lastTask && !document.getElementById(`task-${lastTask.id}`)) {
      renderTaskToBoard(lastTask);
    }
  });
}

function renderTaskToBoard(taskData) {
  const task = document.createElement("div");
  task.id = `task-${taskData.id}`;
  task.classList.add("task-card");
  task.setAttribute("draggable", "true");
  task.innerHTML = `
    <div class="task-top">
      <span class="task-badge ui">New</span>
      <i class="fa-solid fa-star"></i>
    </div>
    <h3>${taskData.title}</h3>
    <p>${taskData.description}</p>
    <div class="task-footer">
      <div class="task-users">
        <img src="https://i.pravatar.cc/100?img=52" alt="">
      </div>
      <span>Today</span>
    </div>
  `;

  todoColumn.appendChild(task);

  // Re-attach drag listeners to the new element
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
}

addBtn.addEventListener(
  "click",
  ()=>{
    // Dispatch state update to match implementation
    if (typeof UIVerseStateManager !== 'undefined') {
      const currentTasks = UIVerseStateManager.getState('kanban.tasks', []);
      UIVerseStateManager.setState('kanban.tasks', [
        ...currentTasks,
        { 
          id: Date.now(), 
          title: 'New UIverse Task', 
          description: 'Create another premium component for the platform.',
          status: 'todo' 
        }
      ]);
    }
  }
);

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(
        ".navbar"
      );

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.82)";
    }

  }
);

// Drag-and-drop logic
let draggedCard = null;

document.addEventListener("dragstart", e => {
  if (e.target.classList.contains("task-card")) {
    draggedCard = e.target;
    e.target.style.opacity = "0.5";
  }
});

document.addEventListener("dragend", e => {
  if (e.target.classList.contains("task-card")) {
    draggedCard = null;
    e.target.style.opacity = "1";
  }
});

document.querySelectorAll(".task-list").forEach(list => {
  list.addEventListener("dragover", e => e.preventDefault());
  list.addEventListener("drop", e => {
    if (draggedCard) {
      list.appendChild(draggedCard);
      updateCounts();
    }
  });
});

function updateCounts() {
  document.querySelectorAll(".kanban-column").forEach(column => {
    const count = column.querySelectorAll(".task-card").length;
    column.querySelector(".task-count").textContent = count;
  });
}

// Run once on load
updateCounts();

document.querySelector(".primary-btn").addEventListener("click", () => {
  const title = prompt("Enter task title:");
  const desc = prompt("Enter task description:");
  if (title) {
    const card = document.createElement("div");
    card.className = "task-card";
    card.setAttribute("draggable", "true");
    card.innerHTML = `
      <div class="task-top">
        <span class="task-badge dev">New</span>
        <i class="fa-solid fa-ellipsis"></i>
      </div>
      <h3>${title}</h3>
      <p>${desc || ""}</p>
      <div class="task-footer">
        <div class="task-users"></div>
        <span>New</span>
      </div>
    `;
    document.getElementById("todo").appendChild(card);
    updateCounts();
  }
});

document.querySelector(".search-bar input").addEventListener("keyup", e => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".task-card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(query) ? "" : "none";
  });
});
const cards = document.querySelectorAll(".task-card");
const columns = document.querySelectorAll(".task-list");

let draggedCard = null;

cards.forEach(card => {
  card.addEventListener("dragstart", () => {
    draggedCard = card;
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
    draggedCard = null;
  });
});

columns.forEach(column => {
  column.addEventListener("dragover", e => {
    e.preventDefault();
  });

  column.addEventListener("drop", () => {
    if (draggedCard) {
      column.appendChild(draggedCard);
    }
  });
});
/* ============================================================
   THEME STYLING LOGIC (theme.js)
   - Checks and applies dark/light mode immediately (pre-render)
   - Binds event listeners to theme toggles on DOM ready
   - Ensures visual synchronization of all toggles on the page
   ============================================================ */

// 1. Immediate execution to prevent theme flashing
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // Default to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
})();

// 2. Binding events when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtnIds = ['darkModeToggle', 'theme-toggle', 'themeToggle'];
  const toggleClasses = ['theme-toggle', 'theme-toggle-sidebar', 'theme-toggle-floating'];

  // Helper to collect all toggle buttons on the page
  function getAllToggles() {
    const toggles = new Set();
    
    // Add by IDs
    toggleBtnIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) toggles.add(el);
    });

    // Add by classes
    toggleClasses.forEach(className => {
      document.querySelectorAll('.' + className).forEach(el => toggles.add(el));
    });

    return Array.from(toggles);
  }

  // Helper to update a button's visual state (text and icon)
  function updateToggleVisual(btn) {
    if (!btn) return;
    const isDark = document.body.classList.contains('dark-mode');
    
    // Check if it's a sidebar toggle or text-based toggle
    if (btn.classList.contains('theme-toggle-sidebar') || btn.innerText.includes('Theme')) {
      btn.innerHTML = isDark 
        ? '<i class="fa-solid fa-sun"></i> Light Theme' 
        : '<i class="fa-solid fa-moon"></i> Dark Theme';
    } else {
      // Icon-only toggle (like in navbar or floating)
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      } else {
        btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
      }
    }
  }

  // Sync visual state of all toggles on page load
  function syncAllToggles() {
    getAllToggles().forEach(btn => updateToggleVisual(btn));
  }

  // Handle theme toggle action
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Sync all toggles on the page
    syncAllToggles();

    // Fire custom event so page components can adapt if needed
    const event = new CustomEvent('themeChanged', { detail: { theme: isDark ? 'dark' : 'light' } });
    document.dispatchEvent(event);
  }

  // Dynamic self-healing: if no toggle exists on the page, create one
  let pageToggles = getAllToggles();
  if (pageToggles.length === 0) {
    const navRight = document.querySelector('.nav-right');
    const navbar = document.querySelector('.navbar') || document.querySelector('header.navbar') || document.querySelector('nav.navbar');
    const sidebarList = document.querySelector('.sidebar ul') || document.querySelector('.sidebar-nav ul');
    const sidebar = document.querySelector('.sidebar') || document.querySelector('aside.sidebar');

    if (navRight) {
      // Insert in navbar right section
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navRight.appendChild(btn);
    } else if (navbar) {
      // Append to navbar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle';
      btn.style.marginLeft = 'auto';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      navbar.appendChild(btn);
    } else if (sidebarList) {
      // Append as sidebar link item
      const li = document.createElement('li');
      li.className = 'theme-toggle-item';
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      li.appendChild(btn);
      sidebarList.appendChild(li);
    } else if (sidebar) {
      // Append directly to sidebar
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle-sidebar';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Theme';
      sidebar.appendChild(btn);
    } else {
      // Floating button in corner
      const btn = document.createElement('button');
      btn.id = 'darkModeToggle';
      btn.className = 'theme-toggle theme-toggle-floating';
      btn.title = 'Toggle Theme';
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      document.body.appendChild(btn);
    }
    
    // Refresh toggle list
    pageToggles = getAllToggles();
  }

  // Attach click listener to all buttons
  pageToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
    updateToggleVisual(btn);
  });
});
