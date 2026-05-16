const startBtn = document.getElementById("startBtn");

const speedValue = document.getElementById("speedValue");

const download = document.getElementById("download");

const upload = document.getElementById("upload");

const ping = document.getElementById("ping");

startBtn.addEventListener("click", () => {

  let speed = 0;

  const interval = setInterval(() => {

    speed += 5;

    speedValue.textContent = speed;

    if(speed >= 95){

      clearInterval(interval);

      download.textContent = "95 Mbps";

      upload.textContent = "42 Mbps";

      ping.textContent = "12 ms";

    }

  }, 100);

});