/* =====================================================
FILTER BUTTONS
===================================================== */

const filterBtns =
  document.querySelectorAll(
    ".filter-btn"
  );

filterBtns.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      filterBtns.forEach(b=>
        b.classList.remove("active")
      );

      btn.classList.add("active");

    }
  );

});

/* =====================================================
SEARCH
===================================================== */

const searchInput =
  document.getElementById(
    "searchInput"
  );

const tableCards =
  document.querySelectorAll(
    ".table-card"
  );

searchInput.addEventListener(
  "input",
  e=>{

    const value =
      e.target.value.toLowerCase();

    tableCards.forEach(card=>{

      const text =
        card.innerText.toLowerCase();

      card.style.display =
        text.includes(value)
        ? "block"
        : "none";

    });

  }
);

function exportTable(button, type) {
  const table = button.closest(".section").querySelector("table");
  const rows = Array.from(table.querySelectorAll("tr"));
  const data = rows.map(row =>
    Array.from(row.querySelectorAll("th, td")).map(cell => cell.innerText)
  );

  if (type === "csv") {
    const csvContent = data.map(e => e.join(",")).join("\n");
    downloadFile(csvContent, "table.csv", "text/csv");
  }

  if (type === "excel") {
    const excelContent = data.map(e => e.join("\t")).join("\n");
    downloadFile(excelContent, "table.xls", "application/vnd.ms-excel");
  }

  if (type === "pdf") {
    const pdfWindow = window.open("", "_blank");
    pdfWindow.document.write("<pre>" + data.map(e => e.join(" | ")).join("\n") + "</pre>");
    pdfWindow.document.close();
    pdfWindow.print();
  }

  alert(`✅ Table exported as ${type.toUpperCase()}!`);
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}


/* =====================================================
COUNTER ANIMATION
===================================================== */

function animateValue(
  id,
  start,
  end,
  duration
){

  let range = end - start;

  let current = start;

  let increment =
    end > start ? 1 : -1;

  let stepTime =
    Math.abs(
      Math.floor(duration / range)
    );

  const obj =
    document.getElementById(id);

  const timer =
    setInterval(()=>{

      current += increment;

      if(id === "growthCount"){

        obj.innerHTML =
          current + "%";

      }else{

        obj.innerHTML =
          current.toLocaleString();

      }

      if(current == end){

        clearInterval(timer);
      }

    },stepTime);

}

animateValue(
  "viewsCount",
  0,
  98450,
  1200
);

animateValue(
  "usersCount",
  0,
  12420,
  1200
);

animateValue(
  "salesCount",
  0,
  842,
  1200
);

animateValue(
  "growthCount",
  0,
  78,
  1200
);

/* =====================================================
NAVBAR SCROLL EFFECT
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
        "rgba(5,8,22,.8)";
    }

  }
);

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
    scrollTopBtn.style.opacity = "1";
  } else {
    scrollTopBtn.style.display = "none";
    scrollTopBtn.style.opacity = "0";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Sorting function
function sortTable(colIndex) {
  const table = document.getElementById("employeeTable");
  const rows = Array.from(table.rows).slice(1);
  let asc = table.getAttribute("data-sort") !== "asc";
  
  rows.sort((a, b) => {
    const valA = a.cells[colIndex].innerText.toLowerCase();
    const valB = b.cells[colIndex].innerText.toLowerCase();
    return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  rows.forEach(row => table.tBodies[0].appendChild(row));
  table.setAttribute("data-sort", asc ? "asc" : "desc");
}

// Search function
document.getElementById("tableSearch").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("#employeeTable tbody tr");
  rows.forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
  });
});

// Filter function
document.getElementById("roleFilter").addEventListener("change", function() {
  filterTable();
});
document.getElementById("statusFilter").addEventListener("change", function() {
  filterTable();
});

function filterTable() {
  const role = document.getElementById("roleFilter").value.toLowerCase();
  const status = document.getElementById("statusFilter").value.toLowerCase();
  const rows = document.querySelectorAll("#employeeTable tbody tr");

  rows.forEach(row => {
    const roleCell = row.cells[2].innerText.toLowerCase();
    const statusCell = row.cells[4].innerText.toLowerCase();
    const matchesRole = !role || roleCell === role;
    const matchesStatus = !status || statusCell === status;
    row.style.display = matchesRole && matchesStatus ? "" : "none";
  });
}
/* ================= SEARCHABLE TABLE ================= */

const searchInputs = document.querySelectorAll(".search-bar input");

searchInputs.forEach(input => {
  input.addEventListener("keyup", () => {

    const filter = input.value.toLowerCase();

    const table =
      input.closest(".table-card")
      ?.querySelector("table");

    if (!table) return;

    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {

      const text =
        row.innerText.toLowerCase();

      row.style.display =
        text.includes(filter)
        ? ""
        : "none";

    });

  });
});

/* ================= SORTABLE TABLE ================= */

document.querySelectorAll(".sortable-table th")
.forEach((header, index) => {

  header.addEventListener("click", () => {

    const table =
      header.closest("table");

    const tbody =
      table.querySelector("tbody");

    const rows =
      [...tbody.querySelectorAll("tr")];

    const sortedRows = rows.sort((a, b) => {

      const aText =
        a.children[index].innerText;

      const bText =
        b.children[index].innerText;

      return aText.localeCompare(
        bText,
        undefined,
        { numeric: true }
      );

    });

    tbody.innerHTML = "";

    sortedRows.forEach(row =>
      tbody.appendChild(row)
    );

  });

});

/* ================= TABLE ANIMATIONS ================= */

const animatedRows =
  document.querySelectorAll(".ui-table tbody tr");

animatedRows.forEach((row, index) => {

  row.style.opacity = "0";
  row.style.transform = "translateY(20px)";

  setTimeout(() => {

    row.style.transition =
      "all 0.5s ease";

    row.style.opacity = "1";
    row.style.transform =
      "translateY(0)";

  }, index * 80);

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