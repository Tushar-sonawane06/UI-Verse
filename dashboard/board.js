function animateCounter(id, target){

  let count = 0;

  const element = document.getElementById(id);

  const interval = setInterval(() => {

    count++;

    element.textContent = count;

    if(count >= target){

      clearInterval(interval);
    }

  }, 20);

}

animateCounter("usersCount", 1200);
animateCounter("projectsCount", 350);
animateCounter("clientsCount", 180);
animateCounter("reviewsCount", 950);
document.addEventListener("DOMContentLoaded", () => {
  const stats = [
    { id: "usersCount", value: 12450, speed: 30 },
    { id: "projectsCount", value: 845, speed: 50 },
    { id: "clientsCount", value: 3200, speed: 25 },
    { id: "reviewsCount", value: 9870, speed: 20 }
  ];

  function animateCounter(id, target, speed) {
    const element = document.getElementById(id);
    if (!element) return;

    let current = 0;

    const increment = Math.ceil(target / 100);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      element.textContent = current.toLocaleString();
    }, speed);
  }

  stats.forEach(stat => {
    animateCounter(stat.id, stat.value, stat.speed);
  });
});