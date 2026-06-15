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
      "🔍 Searching Course: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const liveBtn =
document.querySelector(
".live-btn"
);

const courseBtn =
document.querySelector(
".course-btn"
);

liveBtn.addEventListener(
"click",
() => {

  alert(
    "📡 Starting Live Classroom..."
  );

});

courseBtn.addEventListener(
"click",
() => {

  alert(
    "📘 Opening Courses..."
  );

});

/* COURSE BUTTONS */

const cardBtns =
document.querySelectorAll(
".card-btn"
);

cardBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    alert(
      "🎓 Joining Course..."
    );

  });

});

/* PREMIUM BUTTON */

const premiumBtn =
document.querySelector(
".premium-card button"
);

premiumBtn.addEventListener(
"click",
() => {

  alert(
    "🚀 Opening Upgrade Plans..."
  );

});

/* TEACHER BUTTON */

const teacherBtn =
document.querySelector(
".teacher-card button"
);

teacherBtn.addEventListener(
"click",
() => {

  alert(
    "👨‍🏫 Opening Instructor Profile..."
  );

});

/* SIDEBAR ACTIVE */

const links =
document.querySelectorAll(
".sidebar-nav a"
);

links.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    links.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});

/* CARD GLOW EFFECT */

const cards =
document.querySelectorAll(
".course-card"
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
    rgba(59,130,246,0.25),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

// virtual-classroom-dashboard.js

/* ================= COURSE BUTTON INTERACTION ================= */

const courseButtons = document.querySelectorAll(".card-btn");

courseButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    btn.innerHTML = "✅ Joined Successfully";

    btn.style.background =
      "linear-gradient(135deg,#22c55e,#16a34a)";

    btn.disabled = true;

  });

});

/* ================= HERO BUTTONS ================= */

const liveBtn = document.querySelector(".live-btn");

liveBtn.addEventListener("click", () => {

  liveBtn.innerHTML = "🔴 Live Class Started";

  liveBtn.style.background =
    "linear-gradient(135deg,#ef4444,#dc2626)";

});

/* ================= SEARCH ================= */

const searchInput =
  document.querySelector(".search-box input");

const courseCards =
  document.querySelectorAll(".course-card");

searchInput.addEventListener("keyup", () => {

  const value =
    searchInput.value.toLowerCase();

  courseCards.forEach((card) => {

    const title =
      card.querySelector("h3")
      .innerText
      .toLowerCase();

    if(title.includes(value)){

      card.style.display = "block";

    }else{

      card.style.display = "none";

    }

  });

});

/* ================= STATS COUNTER ================= */

const counters =
  document.querySelectorAll(".stat-card h2");

counters.forEach((counter) => {

  const updateCounter = () => {

    const target =
      +counter.innerText
        .replace(/\D/g,"");

    let current =
      +counter.getAttribute("data-count") || 0;

    const increment =
      target / 50;

    if(current < target){

      current += increment;

      counter.setAttribute(
        "data-count",
        current
      );

      counter.innerText =
        Math.ceil(current) + "+";

      setTimeout(updateCounter,40);

    }else{

      counter.innerText =
        target + "+";

    }

  };

  updateCounter();

});

/* ================= ACTIVE SIDEBAR ================= */

const navLinks =
  document.querySelectorAll(".sidebar-nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) =>
      item.classList.remove("active")
    );

    link.classList.add("active");

  });

});

/* ================= SMOOTH CARD ANIMATION ================= */

const cards =
  document.querySelectorAll(
    ".course-card,.stat-card,.activity-item"
  );

cards.forEach((card,index) => {

  card.style.opacity = "0";
  card.style.transform =
    "translateY(30px)";

  setTimeout(() => {

    card.style.transition =
      "all .6s ease";

    card.style.opacity = "1";
    card.style.transform =
      "translateY(0)";

  },index * 120);

});