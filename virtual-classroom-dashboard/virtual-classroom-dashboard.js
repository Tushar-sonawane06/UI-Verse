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