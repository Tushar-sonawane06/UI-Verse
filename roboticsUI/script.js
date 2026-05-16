
const logs = document.getElementById("logs");

const activities = [
  "Sensor scan completed...",
  "Obstacle detected...",
  "Battery optimized...",
  "Navigation updated...",
  "System running smoothly..."
];

setInterval(() => {

  const log = document.createElement("p");

  log.textContent =
    activities[Math.floor(Math.random() * activities.length)];

  logs.appendChild(log);

  logs.scrollTop = logs.scrollHeight;

}, 3000);