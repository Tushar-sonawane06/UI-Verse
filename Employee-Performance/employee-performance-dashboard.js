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