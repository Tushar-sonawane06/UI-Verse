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

/* ================= UPLOAD ================= */

const uploadBtn =
document.querySelector(
".upload-btn"
);

uploadBtn.addEventListener(
"click",
() => {

  alert(
    "☁ Upload panel opened."
  );

});

/* ================= HERO BUTTONS ================= */

const primaryBtn =
document.querySelector(
".primary-btn"
);

primaryBtn.addEventListener(
"click",
() => {

  alert(
    "📁 New folder created successfully."
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
    "🤝 Workspace sharing options opened."
  );

});

/* ================= DOWNLOAD BUTTONS ================= */

const downloadBtns =
document.querySelectorAll(
".download-btn"
);

downloadBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.innerHTML =
    '<i class="fa-solid fa-check"></i>';

    setTimeout(() => {

      btn.innerHTML =
      '<i class="fa-solid fa-download"></i>';

    },1500);

  });

});

/* ================= TEAM CARD EFFECT ================= */

const teamCards =
document.querySelectorAll(
".team-card"
);

teamCards.forEach(card => {

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