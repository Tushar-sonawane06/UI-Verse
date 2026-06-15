const recordBtn =
  document.getElementById("recordBtn");

const stopBtn =
  document.getElementById("stopBtn");

const timer =
  document.getElementById("timer");

let seconds = 0;
let interval = null;

recordBtn.addEventListener("click", () => {

  if(interval !== null){
    return;
  }

  interval = setInterval(() => {

    seconds++;

    let mins =
      Math.floor(seconds / 60);

    let secs =
      seconds % 60;

    mins =
      mins < 10 ? "0" + mins : mins;

    secs =
      secs < 10 ? "0" + secs : secs;

    timer.textContent =
      `${mins}:${secs}`;

  }, 1000);

});

stopBtn.addEventListener("click", () => {

  clearInterval(interval);

  interval = null;

});

const recordBtn = document.getElementById("recordBtn");
const stopBtn = document.getElementById("stopBtn");
const timer = document.getElementById("timer");
const audioPlayback = document.getElementById("audioPlayback");
const bars = document.querySelectorAll(".bar");

let mediaRecorder;
let audioChunks = [];
let timerInterval;
let seconds = 0;

function updateTimer() {
  seconds++;

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  timer.textContent = `${mins}:${secs}`;
}

function startVisualizer() {
  bars.forEach((bar) => {
    bar.classList.add("active");
  });
}

function stopVisualizer() {
  bars.forEach((bar) => {
    bar.classList.remove("active");
    bar.style.height = "20px";
  });
}

recordBtn.addEventListener("click", async () => {
  try {

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    mediaRecorder = new MediaRecorder(stream);

    audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", (event) => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {

      const audioBlob = new Blob(audioChunks, {
        type: "audio/webm",
      });

      const audioURL = URL.createObjectURL(audioBlob);

      audioPlayback.src = audioURL;
    });

    mediaRecorder.start();

    recordBtn.disabled = true;
    stopBtn.disabled = false;

    seconds = 0;
    timer.textContent = "00:00";

    timerInterval = setInterval(updateTimer, 1000);

    startVisualizer();

  } catch (error) {

    alert("Microphone access denied or unavailable.");

    console.error(error);
  }
});

stopBtn.addEventListener("click", () => {

  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }

  clearInterval(timerInterval);

  stopVisualizer();

  recordBtn.disabled = false;
  stopBtn.disabled = true;
});