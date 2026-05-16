/* ================= ANALOG CLOCK ================= */

const hourHand =
document.getElementById(
"hourHand"
);

const minuteHand =
document.getElementById(
"minuteHand"
);

const secondHand =
document.getElementById(
"secondHand"
);

function updateClock(){

  const now =
  new Date();

  const seconds =
  now.getSeconds();

  const minutes =
  now.getMinutes();

  const hours =
  now.getHours();

  const secondDeg =
  seconds * 6;

  const minuteDeg =
  minutes * 6 +
  seconds * 0.1;

  const hourDeg =
  hours * 30 +
  minutes * 0.5;

  secondHand.style.transform =
  `translateX(-50%) rotate(${secondDeg}deg)`;

  minuteHand.style.transform =
  `translateX(-50%) rotate(${minuteDeg}deg)`;

  hourHand.style.transform =
  `translateX(-50%) rotate(${hourDeg}deg)`;

  /* DIGITAL */

  const digitalClock =
  document.getElementById(
  "digitalClock"
  );

  const dateText =
  document.getElementById(
  "dateText"
  );

  digitalClock.innerText =
  now.toLocaleTimeString();

  dateText.innerText =
  now.toDateString();

}

setInterval(updateClock,1000);

updateClock();

/* ================= WORLD CLOCKS ================= */

const worldTimes =
document.querySelectorAll(
".world-time"
);

function updateWorldClocks(){

  const now =
  new Date();

  const utc =
  now.getTime() +
  now.getTimezoneOffset() *
  60000;

  worldTimes.forEach(clock => {

    const offset =
    parseFloat(
      clock.dataset.offset
    );

    const cityTime =
    new Date(
      utc +
      (3600000 * offset)
    );

    clock.innerText =
    cityTime.toLocaleTimeString();

  });

}

setInterval(
updateWorldClocks,
1000
);

updateWorldClocks();

/* ================= BUTTON EFFECT ================= */

const buttons =
document.querySelectorAll(
".theme-btn"
);

buttons.forEach(btn => {

  btn.addEventListener(
  "click",
  () => {

    btn.style.transform =
    "scale(0.9)";

    setTimeout(() => {

      btn.style.transform =
      "scale(1)";

    },150);

  });

});