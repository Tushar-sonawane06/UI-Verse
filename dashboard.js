/* ======================================================
COUNT ANIMATION
====================================================== */

function animateValue(id,start,end,duration){

  let range = end - start;

  let current = start;

  let increment = end > start ? 1 : -1;

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
  "usersCount",
  0,
  15420,
  1200
);

animateValue(
  "componentsCount",
  0,
  842,
  1200
);

animateValue(
  "viewsCount",
  0,
  98450,
  1200
);

animateValue(
  "growthCount",
  0,
  78,
  1200
);

/* ======================================================
SEARCH DEMO
====================================================== */

const searchInput =
  document.querySelector(
    ".search-bar input"
  );

searchInput.addEventListener(
  "focus",
  ()=>{

    searchInput.parentElement.style.borderColor =
      "#7b61ff";

  }
);

searchInput.addEventListener(
  "blur",
  ()=>{

    searchInput.parentElement.style.borderColor =
      "rgba(255,255,255,.08)";

  }
);

function animateCounter(id, target, suffix = "") {
  const el = document.getElementById(id);

  let start = 0;

  const duration = 1800;
  const increment = target / (duration / 16);

  function update() {
    start += increment;

    if (start >= target) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    el.textContent =
      Math.floor(start).toLocaleString() + suffix;

    requestAnimationFrame(update);
  }

  update();
}

window.addEventListener("load", () => {
  animateCounter("usersCount", 12840);
  animateCounter("componentsCount", 426);
  animateCounter("viewsCount", 98500);
  animateCounter("growthCount", 82, "%");
});


const sidebar = document.querySelector(".sidebar");
const mobileToggle = document.getElementById("mobileToggle");
const overlay = document.getElementById("sidebarOverlay");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});

/* =========================================
   ACTIVE SIDEBAR LINKS
========================================= */

document.querySelectorAll(".sidebar-nav a")
.forEach(link => {
  link.addEventListener("click", () => {

    document
      .querySelectorAll(".sidebar-nav a")
      .forEach(l => l.classList.remove("active"));

    link.classList.add("active");
  });
});

/* =========================================
   SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 20);
});

/* =========================================
   SIMPLE CHART ANIMATION
========================================= */

window.addEventListener("load", () => {

  document.querySelectorAll(".line-chart span")
    .forEach((bar, index) => {

      const originalHeight = bar.style.height;

      bar.style.height = "0";

      setTimeout(() => {
        bar.style.height = originalHeight;
      }, index * 120);
    });

});


document.querySelectorAll(".nav-btn, .card-header button")
.forEach(btn => {

  btn.addEventListener("click", function (e) {

    const circle = document.createElement("span");

    const diameter =
      Math.max(this.clientWidth, this.clientHeight);

    const radius = diameter / 2;

    circle.style.width =
      circle.style.height =
      `${diameter}px`;

    circle.style.left =
      `${e.clientX - this.offsetLeft - radius}px`;

    circle.style.top =
      `${e.clientY - this.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple =
      this.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });

});
