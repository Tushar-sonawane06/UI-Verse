/* SEARCH */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "🔍 Searching Group: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const addExpenseBtn =
document.querySelector(
".primary-btn"
);

const createGroupBtn =
document.querySelector(
".secondary-btn"
);

addExpenseBtn.addEventListener(
"click",
() => {

  alert(
    "💸 Opening Add Expense Form..."
  );

});

createGroupBtn.addEventListener(
"click",
() => {

  alert(
    "👥 Creating New Group..."
  );

});

/* SIDEBAR ACTIVE */

const sidebarLinks =
document.querySelectorAll(
".sidebar-menu a"
);

sidebarLinks.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    sidebarLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});

/* HOVER EFFECT */

const cards =
document.querySelectorAll(
".stat-card, .group-item, tr"
);

cards.forEach(card => {

  card.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    card.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(59,130,246,0.20),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* NOTIFICATIONS */

const notifyBtn =
document.querySelector(
".notification-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 6 pending payment reminders."
  );

});

/* INSIGHT BUTTON */

const insightBtn =
document.querySelector(
".insights-card button"
);

insightBtn.addEventListener(
"click",
() => {

  alert(
    "📈 Opening Expense Analytics..."
  );

});

/* SETTLE BUTTON */

const settleBtn =
document.querySelector(
".balance-card button"
);

settleBtn.addEventListener(
"click",
() => {

  alert(
    "💳 Opening Expense Settlement Page..."
  );

});

// expense-splitter-dashboard.js

// Sidebar Active State

const menuLinks = document.querySelectorAll(".sidebar-menu a");

menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    menuLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

// Search Filter for Transactions

const searchInput = document.querySelector(".search-box input");

const tableRows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("keyup", e => {

  const value = e.target.value.toLowerCase();

  tableRows.forEach(row => {

    row.style.display =
      row.innerText.toLowerCase().includes(value)
      ? ""
      : "none";

  });

});

// Notification Animation

const notificationBtn = document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

  notificationBtn.classList.add("shake");

  setTimeout(() => {
    notificationBtn.classList.remove("shake");
  }, 500);

  alert("🔔 You have 4 new expense updates!");

});

// Add Expense Button

document.querySelector(".primary-btn")
.addEventListener("click", () => {

  alert("💸 Expense Added Successfully!");

});

// Create Group Button

document.querySelector(".secondary-btn")
.addEventListener("click", () => {

  alert("👥 New Group Created!");

});

// Export Report

document.querySelector(".table-section button")
.addEventListener("click", () => {

  alert("📄 Expense report exported!");

});

// Analytics Button

document.querySelector(".insights-card button")
.addEventListener("click", () => {

  alert("📊 Opening Expense Analytics...");

});

// Dynamic Counter Animation

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = counter.innerText;
    counter.innerText = target;

  };

  updateCounter();

});

// Add shake animation dynamically

const style = document.createElement("style");

style.innerHTML = `
@keyframes shake{
  0%{transform:translateX(0);}
  25%{transform:translateX(-4px);}
  50%{transform:translateX(4px);}
  75%{transform:translateX(-4px);}
  100%{transform:translateX(0);}
}

.shake{
  animation:shake 0.5s ease;
}
`;

document.head.appendChild(style);