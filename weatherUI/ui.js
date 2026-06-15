if (window.UIVERSE_DEBUG) {
  console.debug(
    "Weather Forecast Dashboard Loaded"
  );
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn => {
      btn.classList.remove("active");
    });

    tab.classList.add("active");

  });

});

/* Live Time */

function updateTime() {

  const now = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "short"
  };

  const date = now.toLocaleDateString(
    "en-US",
    options
  );

  const time = now.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );

  const locationText =
    document.querySelector(".location-text p");

  locationText.textContent =
    `${date} • ${time}`;

}

updateTime();

setInterval(updateTime, 1000);