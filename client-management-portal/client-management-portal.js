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
      "🔍 Searching for: " +
      searchInput.value
    );

  }

});

/* ================= NOTIFICATION ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 5 new client notifications."
  );

});

/* ================= BUTTONS ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "🚀 New project creation started."
  );

});

const secondaryBtn =
document.querySelector(
".secondary-btn"
);

secondaryBtn.addEventListener(
"click",
() => {

  alert(
    "📩 Client invitation sent."
  );

});

/* ================= CLIENT DETAILS ================= */

const detailBtns =
document.querySelectorAll(
".client-footer button"
);

detailBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const clientName =
    btn.closest(".client-card")
    .querySelector("h3")
    .textContent;

    alert(
      `👤 Opening ${clientName}'s profile`
    );

  });

});

/* ================= CARD HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".client-card"
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
    rgba(139,92,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

// =========================
// SEARCH INTERACTION
// =========================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {
  document.querySelector(".search-box").style.borderColor = "#8b5cf6";
  document.querySelector(".search-box").style.boxShadow =
    "0 0 0 4px rgba(139,92,246,.15)";
});

searchInput.addEventListener("blur", () => {
  document.querySelector(".search-box").style.borderColor =
    "rgba(255,255,255,.08)";
  document.querySelector(".search-box").style.boxShadow = "none";
});

// =========================
// ACTIVE SIDEBAR
// =========================

const navLinks = document.querySelectorAll(".sidebar-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    navLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });
});

// =========================
// NOTIFICATION BUTTON
// =========================

const notificationBtn =
document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {

  notificationBtn.innerHTML =
  '<i class="fa-solid fa-check"></i>';

  notificationBtn.style.background =
  "linear-gradient(135deg,#22c55e,#15803d)";

  setTimeout(() => {

    notificationBtn.innerHTML =
    '<i class="fa-solid fa-bell"></i>';

    notificationBtn.style.background =
    "linear-gradient(135deg,#3b82f6,#1d4ed8)";

  }, 2000);

});

// =========================
// CLIENT CARD HOVER EFFECT
// =========================

const cards =
document.querySelectorAll(".client-card");

cards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(139,92,246,.18),
    #111827 60%)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background =
    "linear-gradient(145deg,#1e293b,#0f172a)";

  });

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", function(e){

    const circle =
    document.createElement("span");

    const diameter =
    Math.max(
      this.clientWidth,
      this.clientHeight
    );

    const radius = diameter / 2;

    circle.style.width =
    circle.style.height =
    `${diameter}px`;

    circle.style.left =
    `${e.clientX -
      this.offsetLeft -
      radius}px`;

    circle.style.top =
    `${e.clientY -
      this.offsetTop -
      radius}px`;

    circle.classList.add("ripple");

    const ripple =
    this.querySelector(".ripple");

    if(ripple){
      ripple.remove();
    }

    this.appendChild(circle);

  });

});

// =========================
// RIPPLE STYLE
// =========================

const style =
document.createElement("style");

style.innerHTML = `
button{
  position:relative;
  overflow:hidden;
}

.ripple{
  position:absolute;
  border-radius:50%;
  transform:scale(0);
  animation:ripple .6s linear;
  background:rgba(255,255,255,.4);
}

@keyframes ripple{
  to{
    transform:scale(4);
    opacity:0;
  }
}
`;

document.head.appendChild(style);