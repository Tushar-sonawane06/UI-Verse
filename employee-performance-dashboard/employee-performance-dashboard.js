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
      "🔍 Searching employee: " +
      searchInput.value
    );

  }

});

/* NOTIFICATION */

const notificationBtn =
document.querySelector(
".notification-btn"
);

notificationBtn.addEventListener(
"click",
() => {

  alert(
    "📢 5 new employee performance updates!"
  );

});

/* HERO BUTTONS */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "👨‍💼 Opening Employee Registration..."
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
    "📄 Generating Performance Report..."
  );

});

/* PROFILE BUTTON */

const profileBtn =
document.querySelector(
".profile-card button"
);

profileBtn.addEventListener(
"click",
() => {

  alert(
    "👤 Opening HR Manager Profile..."
  );

});

/* EMPLOYEE BUTTON */

const employeeButtons =
document.querySelectorAll(
".employee-btn"
);

employeeButtons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "📊 Opening Employee Details..."
    );

  });

});


const ctx = document
  .getElementById('performanceChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Productivity',
      data: [68,74,81,85,89,92],
      tension: 0.4
    }]
  }
});
/* CARD GLOW EFFECT */

const employeeCards =
document.querySelectorAll(
".employee-card"
);

employeeCards.forEach(card => {

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
    rgba(59,130,246,0.18),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

/* TASK STATUS INTERACTION */

const taskStatus =
document.querySelectorAll(
".task-status"
);

taskStatus.forEach(status => {

  status.addEventListener(
  "click",
  () => {

    alert(
      "📌 Task Status: " +
      status.innerText
    );

  });

});

/* =========================
   SIDEBAR ACTIVE
========================= */

const navLinks =
document.querySelectorAll(".sidebar-nav a");

navLinks.forEach(link=>{

  link.addEventListener("click",()=>{

    navLinks.forEach(item=>
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

const employeeCards =
document.querySelectorAll(".employee-card");

searchInput.addEventListener("keyup",()=>{

  const value =
  searchInput.value.toLowerCase();

  employeeCards.forEach(card=>{

    const text =
    card.innerText.toLowerCase();

    card.style.display =
    text.includes(value)
    ? "block"
    : "none";

  });

});

/* =========================
   BUTTON RIPPLE
========================= */

const buttons =
document.querySelectorAll("button");

buttons.forEach(button=>{

  button.addEventListener("click",(e)=>{

    const ripple =
    document.createElement("span");

    ripple.classList.add("ripple");

    const rect =
    button.getBoundingClientRect();

    ripple.style.left =
    `${e.clientX - rect.left}px`;

    ripple.style.top =
    `${e.clientY - rect.top}px`;

    button.appendChild(ripple);

    setTimeout(()=>{

      ripple.remove();

    },600);

  });

});

/* =========================
   NOTIFICATION TOGGLE
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