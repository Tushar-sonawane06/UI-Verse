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