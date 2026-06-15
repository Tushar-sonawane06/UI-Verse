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
      "📰 Searching news for: " +
      searchInput.value
    );

  }

});

/* ================= BOOKMARK ================= */

const bookmarkBtns =
document.querySelectorAll(
".bookmark-btn"
);

bookmarkBtns.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    const icon =
    btn.querySelector("i");

    icon.classList.toggle(
    "fa-regular"
    );

    icon.classList.toggle(
    "fa-solid"
    );

    btn.classList.toggle(
    "active"
    );

  });

});

/* ================= HERO BUTTON ================= */

const readBtn =
document.querySelector(
".read-btn"
);

readBtn.addEventListener(
"click",
() => {

  alert(
    "📰 Opening full article..."
  );

});

/* ================= SAVE BUTTON ================= */

const saveBtn =
document.querySelector(
".save-btn"
);

saveBtn.addEventListener(
"click",
() => {

  alert(
    "⭐ Article saved successfully!"
  );

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
    "🔔 You have 7 breaking news alerts."
  );

});

/* ================= CARD HOVER EFFECT ================= */

const cards =
document.querySelectorAll(
".news-card"
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
    rgba(139,92,246,0.16),
    rgba(255,255,255,0.04))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.04)";

  });

});

// Smooth card hover enhancement
document.querySelectorAll(".news-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// Bookmark toggle effect
document.querySelectorAll(".bookmark-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

const bookmarkButtons = document.querySelectorAll('.bookmark-btn');

bookmarkButtons.forEach((button) => {
  button.addEventListener('click', () => {

    const icon = button.querySelector('i');

    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');

    button.classList.toggle('active');
  });
});

const notificationButton = document.querySelector('.notification-btn');

notificationButton.addEventListener('click', () => {
  alert('No new notifications right now.');
});
