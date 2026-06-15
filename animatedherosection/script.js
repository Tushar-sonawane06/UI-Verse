
        function animateCounter(id,target){

    let count = 0;

    const speed = target / 100;

    const interval = setInterval(()=>{

        count += speed;

        if(count >= target){

            count = target;
            clearInterval(interval);

        }

        document.getElementById(id)
        .textContent =
        Math.floor(count);

    },20);

}

animateCounter("users",50000);
animateCounter("downloads",200000);
animateCounter("components",750);
const words = [

" Dashboards",
" Landing Pages",
" SaaS Apps",
" Portfolios",
" Admin Panels"

];

let wordIndex = 0;

function typeEffect(){

    document.getElementById("typingText")
    .textContent =
    words[wordIndex];

    wordIndex++;

    if(wordIndex >= words.length){

        wordIndex = 0;

    }

}

setInterval(typeEffect,2000);

typeEffect();
setInterval(()=>{

    document.getElementById("liveUsers")
    .textContent =

    Math.floor(
        Math.random()*100000
    );

},2000);
// Matrix Background Effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 33);

// Animated Counters
function animateCounter(id, target) {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    document.getElementById(id).textContent = count;
    if (count >= target) clearInterval(interval);
  }, 30);
}

animateCounter("projects", 120);
animateCounter("clients", 80);
animateCounter("awards", 15);

