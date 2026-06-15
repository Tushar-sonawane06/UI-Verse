/* ================= SEARCH ================= */

const searchInput =
document.querySelector(
".search-box input"
);

searchInput.addEventListener(
"keydown",
(e) => {

  if(e.key === "Enter"){

    alert(
      "Searching transaction: " +
      searchInput.value
    );

  }

});

/* ================= QUICK ACTIONS ================= */

const actionButtons =
document.querySelectorAll(
".quick-actions button"
);

actionButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const original =
    btn.innerHTML;

    btn.innerHTML =
    `<i class="fa-solid fa-check"></i>
     Done`;

    btn.style.opacity =
    "0.8";

    setTimeout(() => {

      btn.innerHTML =
      original;

      btn.style.opacity =
      "1";

    },2000);

  });

});

/* ================= CATEGORY HOVER ================= */

const categoryCards =
document.querySelectorAll(
".category-card"
);

categoryCards.forEach(card => {

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
    rgba(16,185,129,0.15),
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* ================= PROFILE CLICK ================= */

const profileBtn =
document.querySelector(
".profile-btn"
);

profileBtn.addEventListener(
"click",
() => {

  alert(
    "Opening Profile Settings"
  );

});

// ===============================
// BudgetFlow UI INTERACTIONS
// ===============================

// Sidebar active link switch
const links = document.querySelectorAll(".nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Smooth hover animation for cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Search filter (simple UI demo)
const searchInput = document.querySelector(".search input");
const transactions = document.querySelectorAll(".txn");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    transactions.forEach(txn => {
      const text = txn.innerText.toLowerCase();
      txn.style.display = text.includes(value) ? "flex" : "none";
    });
  });
}

// Animate bars on load
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".bar");

  bars.forEach(bar => {
    const height = bar.style.height;
    bar.style.height = "0";

    setTimeout(() => {
      bar.style.height = height;
    }, 200);
  });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});