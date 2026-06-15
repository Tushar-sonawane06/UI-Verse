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
      "Searching campaign: " +
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
     Completed`;

    btn.style.opacity =
    "0.85";

    setTimeout(() => {

      btn.innerHTML =
      original;

      btn.style.opacity =
      "1";

    },2000);

  });

});

/* ================= CAMPAIGN HOVER ================= */

const campaignCards =
document.querySelectorAll(
".campaign-card"
);

campaignCards.forEach(card => {

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
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* ================= NOTIFICATIONS ================= */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "🔥 Viral alert: Your latest campaign is trending."
  );

});

// ================= SEARCH INTERACTION =================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {
  searchInput.parentElement.style.boxShadow =
    "0 0 0 3px rgba(124,58,237,0.35)";
});

searchInput.addEventListener("blur", () => {
  searchInput.parentElement.style.boxShadow = "none";
});

// ================= NOTIFICATION =================

const notifyBtn = document.querySelector(".notification-btn");

notifyBtn.addEventListener("click", () => {

  notifyBtn.classList.toggle("active");

  if(notifyBtn.classList.contains("active")){
    notifyBtn.innerHTML =
    `<i class="fa-solid fa-check"></i>`;
  } else {
    notifyBtn.innerHTML =
    `<i class="fa-solid fa-bell"></i>`;
  }

});

// ================= QUICK ACTIONS =================

const actionButtons =
document.querySelectorAll(".quick-actions button");

actionButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "";
    },150);

  });

});

// ================= BAR HOVER =================

const bars = document.querySelectorAll(".bar");

bars.forEach(bar => {

  bar.addEventListener("mouseenter", () => {

    bar.style.filter =
    "brightness(1.2)";

  });

  bar.addEventListener("mouseleave", () => {

    bar.style.filter =
    "brightness(1)";

  });

});

// ================= LIVE COUNTER EFFECT =================

const heroNumbers =
document.querySelectorAll(".hero-card h2");

heroNumbers.forEach(counter => {

  const original =
  counter.innerText;

  const numeric =
  parseFloat(original.replace(/[^\d.]/g,""));

  let start = 0;

  const increment =
  numeric / 60;

  const update = () => {

    start += increment;

    if(start < numeric){

      counter.innerText =
      original.includes("%")
      ? `${start.toFixed(1)}%`
      : original.includes("M")
      ? `${start.toFixed(1)}M`
      : original.includes("K")
      ? `${start.toFixed(1)}K`
      : Math.floor(start);

      requestAnimationFrame(update);

    } else {

      counter.innerText =
      original;

    }

  };

  update();

});

// ================= ACTIVE SIDEBAR =================

const navLinks =
document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

// ================= FAKE REAL-TIME GROWTH =================

const growthTexts =
document.querySelectorAll(".growth");

setInterval(() => {

  growthTexts.forEach(item => {

    const positive =
    item.classList.contains("positive");

    const random =
    Math.floor(Math.random() * 15) + 1;

    item.innerText =
    positive
    ? `+${random}%`
    : `-${random}%`;

  });

},4000);

// ================= PROGRESS ANIMATION =================

const fills =
document.querySelectorAll(".progress-fill");

window.addEventListener("load", () => {

  fills.forEach(fill => {

    const width =
    fill.style.width;

    fill.style.width = "0";

    setTimeout(() => {

      fill.style.transition =
      "1.2s ease";

      fill.style.width = width;

    },300);

  });

});

// ================= DARK GLOW EFFECT =================

document.addEventListener("mousemove",(e)=>{

  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background =
  `
  radial-gradient(circle at ${x}px ${y}px,
  rgba(124,58,237,0.15),
  transparent 25%),
  radial-gradient(circle at top left,#132238 0%,#07111f 55%)
  `;

});