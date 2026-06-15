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
      "Searching employee: " +
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
    "🔔 You have 5 new performance updates."
  );

});

/* ================= PROJECT ROW HOVER ================= */

const rows =
document.querySelectorAll(
".table-row"
);

rows.forEach(row => {

  row.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    row.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    row.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(139,92,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  row.addEventListener(
  "mouseleave",
  () => {

    row.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* ================= EMPLOYEE SCORE ANIMATION ================= */

const scores =
document.querySelectorAll(
".score"
);

scores.forEach(score => {

  score.addEventListener(
  "mouseenter",
  () => {

    score.style.transform =
    "scale(1.1)";

    score.style.transition =
    "0.3s ease";

  });

  score.addEventListener(
  "mouseleave",
  () => {

    score.style.transform =
    "scale(1)";

  });

});

/* ================= BUTTON EFFECT ================= */

const buttons =
document.querySelectorAll(
"button"
);

buttons.forEach(btn => {

  btn.addEventListener(
  "mouseenter",
  () => {

    btn.style.transform =
    "translateY(-3px)";

    btn.style.transition =
    "0.3s ease";

  });

  btn.addEventListener(
  "mouseleave",
  () => {

    btn.style.transform =
    "translateY(0px)";

  });

});

/* =========================
   COUNTER ANIMATION
========================= */

const statNumbers = document.querySelectorAll(".stat-card h2");

statNumbers.forEach((stat)=>{

  const target =
  parseInt(stat.innerText);

  let count = 0;

  const update = ()=>{

    count += Math.ceil(target / 35);

    if(count >= target){
      stat.innerText =
      stat.innerText.includes("%")
      ? target + "%"
      : target;
    }

    else{

      stat.innerText =
      stat.innerText.includes("%")
      ? count + "%"
      : count;

      requestAnimationFrame(update);

    }

  };

  update();

});

/* =========================
   ACTIVE SIDEBAR
========================= */

const navLinks =
document.querySelectorAll(".sidebar-nav a");

navLinks.forEach((link)=>{

  link.addEventListener("click",()=>{

    navLinks.forEach((item)=>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

/* =========================
   SEARCH FILTER
========================= */

const searchInput =
document.querySelector(".search-box input");

const employees =
document.querySelectorAll(".employee");

searchInput.addEventListener("keyup",()=>{

  const value =
  searchInput.value.toLowerCase();

  employees.forEach((employee)=>{

    const text =
    employee.innerText.toLowerCase();

    employee.style.display =
    text.includes(value)
    ? "flex"
    : "none";

  });

});

/* =========================
   NOTIFICATION
========================= */

const notifyBtn =
document.querySelector(".notification-btn");

notifyBtn.addEventListener("click",()=>{

  notifyBtn.classList.toggle("active");

  notifyBtn.innerHTML =
  notifyBtn.classList.contains("active")
  ? '<i class="fa-solid fa-bell-ring"></i>'
  : '<i class="fa-solid fa-bell"></i>';

});