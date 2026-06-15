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
      "🔍 Searching Transactions: " +
      searchInput.value
    );

  }

});

/* HERO BUTTONS */

const reportBtn =
document.querySelector(
".primary-btn"
);

const insightBtn =
document.querySelector(
".secondary-btn"
);

reportBtn.addEventListener(
"click",
() => {

  alert(
    "📊 Generating Financial Report..."
  );

});

insightBtn.addEventListener(
"click",
() => {

  alert(
    "📈 Opening Banking Insights..."
  );

});

/* SIDEBAR ACTIVE */

const sidebarLinks =
document.querySelectorAll(
".sidebar-menu a"
);

sidebarLinks.forEach(link => {

  link.addEventListener(
  "click",
  () => {

    sidebarLinks.forEach(item =>
      item.classList.remove("active")
    );

    link.classList.add(
      "active"
    );

  });

});

/* CARD HOVER EFFECT */

const statCards =
document.querySelectorAll(
".stat-card"
);

statCards.forEach(card => {

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
    rgba(255,255,255,0.05))`;

  });

  card.addEventListener(
  "mouseleave",
  () => {

    card.style.background =
    "rgba(255,255,255,0.05)";

  });

});

/* NOTIFICATION */

const notifyBtn =
document.querySelector(
".notification-btn"
);

notifyBtn.addEventListener(
"click",
() => {

  alert(
    "🔔 You have 7 new banking alerts."
  );

});

/* SECURITY CENTER */

const securityBtn =
document.querySelector(
".fraud-card button"
);

securityBtn.addEventListener(
"click",
() => {

  alert(
    "🔒 Opening Security Center..."
  );

});

/* PREMIUM */

const premiumBtn =
document.querySelector(
".premium-card button"
);

premiumBtn.addEventListener(
"click",
() => {

  alert(
    "💳 Opening Premium Banking Plans..."
  );

});

const notificationBtn = document.querySelector(".notification-btn");

notificationBtn.addEventListener("click", () => {
  alert("You have 3 new banking notifications.");
});

const statCards = document.querySelectorAll(".stat-card");

statCards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

});

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {

  bar.style.animation = `grow 1s ease ${index * 0.1}s forwards`;

});

const style = document.createElement("style");

style.innerHTML = `
@keyframes grow {
  from {
    height: 0;
  }
}
`;

document.head.appendChild(style);