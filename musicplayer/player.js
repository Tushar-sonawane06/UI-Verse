const playBtn      = document.getElementById("playBtn");
const playIcon     = document.getElementById("playIcon");
const prevBtn      = document.getElementById("prevBtn");
const nextBtn      = document.getElementById("nextBtn");
const shuffleBtn   = document.getElementById("shuffleBtn");
const repeatBtn    = document.getElementById("repeatBtn");
const likeBtn      = document.getElementById("likeBtn");
const vinylRing    = document.getElementById("vinylRing");
const albumCover   = document.getElementById("albumCover");
const progressFill = document.getElementById("progressFill");
const progressRange= document.getElementById("progressRange");
const currentTimeEl= document.getElementById("currentTime");
const volumeSlider = document.getElementById("volumeSlider");

let isPlaying  = false;
let isShuffle  = false;
let isRepeat   = false;
let isLiked    = false;

const DURATION = 225;   // seconds (3:45)
let   elapsed  = 0;
let   ticker   = null;

// Helper to format seconds as M:SS
function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function setProgress(seconds) {
  elapsed = Math.max(0, Math.min(seconds, DURATION));
  const pct = (elapsed / DURATION) * 100;
  progressFill.style.width = pct + "%";
  progressRange.value = elapsed;
  progressRange.setAttribute("aria-valuenow", elapsed);
  progressRange.setAttribute("aria-valuetext", `${formatTime(elapsed)} of ${formatTime(DURATION)}`);
  currentTimeEl.textContent = formatTime(elapsed);
}

function startTicker() {
  if (ticker) return;
  ticker = setInterval(() => {
    if (elapsed >= DURATION) {
      if (isRepeat) {
        setProgress(0);
      } else {
        pausePlayback();
        setProgress(0);
      }
      return;
    }
    setProgress(elapsed + 1);
  }, 1000);
}

function stopTicker() {
  clearInterval(ticker);
  ticker = null;
}

// Play / Pause
function startPlayback() {
  isPlaying = true;
  playIcon.className   = "fa-solid fa-pause";
  playBtn.setAttribute("aria-label", "Pause");
  vinylRing.classList.add("spinning");
  albumCover.classList.add("playing");
  startTicker();
}

function pausePlayback() {
  isPlaying = false;
  playIcon.className   = "fa-solid fa-play";
  playBtn.setAttribute("aria-label", "Play");
  vinylRing.classList.remove("spinning");
  albumCover.classList.remove("playing");
  stopTicker();
}

playBtn.addEventListener("click", () => {
  isPlaying ? pausePlayback() : startPlayback();
});

progressRange.addEventListener("input", () => {
  setProgress(Number(progressRange.value));
});

volumeSlider.addEventListener("input", () => {
  const vol = volumeSlider.value;
  volumeSlider.setAttribute("aria-valuenow", vol);
});

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
  shuffleBtn.setAttribute("aria-pressed", String(isShuffle));
  shuffleBtn.setAttribute("aria-label", isShuffle ? "Shuffle on" : "Shuffle");
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
  repeatBtn.setAttribute("aria-pressed", String(isRepeat));
  repeatBtn.setAttribute("aria-label", isRepeat ? "Repeat on" : "Repeat");
});

likeBtn.addEventListener("click", () => {
  isLiked = !isLiked;
  likeBtn.classList.toggle("liked", isLiked);
  likeBtn.setAttribute("aria-pressed", String(isLiked));
  likeBtn.setAttribute("aria-label", isLiked ? "Unlike this song" : "Like this song");
});

prevBtn.addEventListener("click", () => {
  // If more than 3 s in, restart track; otherwise go to "previous"
  if (elapsed > 3) {
    setProgress(0);
  } else {
    setProgress(0);
    if (isPlaying) startPlayback();
  }
});

nextBtn.addEventListener("click", () => {
  setProgress(0);
  if (!isPlaying) startPlayback();
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName)) return;

  if (e.code === "Space") {
    e.preventDefault();
    isPlaying ? pausePlayback() : startPlayback();
  } else if (e.code === "ArrowRight") {
    e.preventDefault();
    setProgress(elapsed + 10);
  } else if (e.code === "ArrowLeft") {
    e.preventDefault();
    setProgress(elapsed - 10);
  }
});

// Sample playlist
const playlist = [
  {
    title: "Dream Waves",
    artist: "Unknown Artist",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=600&auto=format&fit=crop",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Night Drive",
    artist: "Synth Rider",
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
];

let currentTrack = 0;
let isPlaying = false;

// Audio
const audio = new Audio();

// Elements
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const progressRange = document.getElementById("progressRange");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const volumeSlider = document.getElementById("volumeSlider");

const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");
const albumCover = document.getElementById("albumCover");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const repeatBtn = document.getElementById("repeatBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const likeBtn = document.getElementById("likeBtn");

const vinylRing = document.getElementById("vinylRing");

let repeatMode = false;
let shuffleMode = false;

// Format time
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// Load track
function loadTrack(index) {
  const track = playlist[index];

  audio.src = track.src;

  songTitle.textContent = track.title;
  artistName.textContent = track.artist;
  albumCover.src = track.cover;
  albumCover.alt = `${track.title} album art`;
}

loadTrack(currentTrack);

// Metadata loaded
audio.addEventListener("loadedmetadata", () => {
  progressRange.max = Math.floor(audio.duration);
  totalTimeEl.textContent = formatTime(audio.duration);
});

// Play/Pause
function togglePlay() {
  if (isPlaying) {
    audio.pause();

    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");

    albumCover.classList.remove("playing");
    vinylRing.classList.remove("spinning");

    playBtn.setAttribute("aria-label", "Play");
  } else {
    audio.play();

    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");

    albumCover.classList.add("playing");
    vinylRing.classList.add("spinning");

    playBtn.setAttribute("aria-label", "Pause");
  }

  isPlaying = !isPlaying;
}

playBtn.addEventListener("click", togglePlay);

// Update progress
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;

  progressFill.style.width = `${progress}%`;

  progressRange.value = audio.currentTime;

  currentTimeEl.textContent = formatTime(audio.currentTime);

  progressRange.setAttribute(
    "aria-valuetext",
    `${Math.floor(audio.currentTime)} seconds`
  );
});

// Seek
progressRange.addEventListener("input", () => {
  audio.currentTime = progressRange.value;
});

// Volume
audio.volume = volumeSlider.value / 100;

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value / 100;
});

// Next Track
function nextTrack() {
  if (shuffleMode) {
    currentTrack = Math.floor(Math.random() * playlist.length);
  } else {
    currentTrack = (currentTrack + 1) % playlist.length;
  }

  loadTrack(currentTrack);

  if (isPlaying) {
    audio.play();
  }
}

// Previous Track
function prevTrack() {
  currentTrack =
    (currentTrack - 1 + playlist.length) % playlist.length;

  loadTrack(currentTrack);

  if (isPlaying) {
    audio.play();
  }
}

nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

// Repeat
repeatBtn.addEventListener("click", () => {
  repeatMode = !repeatMode;

  audio.loop = repeatMode;

  repeatBtn.classList.toggle("active", repeatMode);
  repeatBtn.setAttribute("aria-pressed", repeatMode);
});

// Shuffle
shuffleBtn.addEventListener("click", () => {
  shuffleMode = !shuffleMode;

  shuffleBtn.classList.toggle("active", shuffleMode);
  shuffleBtn.setAttribute("aria-pressed", shuffleMode);
});

// Like button
likeBtn.addEventListener("click", () => {
  const liked = likeBtn.classList.toggle("liked");

  likeBtn.setAttribute("aria-pressed", liked);
});

// Auto next track
audio.addEventListener("ended", () => {
  if (!repeatMode) {
    nextTrack();
  }
});