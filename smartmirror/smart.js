function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString();
  const date = now.toDateString();

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);

updateClock();

/* Clock */

function updateClock(){

    const now = new Date();

    document.getElementById("time")
    .innerText =
    now.toLocaleTimeString();

    document.getElementById("date")
    .innerText =
    now.toDateString();
}

setInterval(updateClock,1000);

updateClock();

/* Music Player */

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    playing = !playing;

    musicBtn.innerText =
    playing
    ? "⏸ Pause"
    : "▶ Play";

});

/* AI Tips */

const tips = [

"💡 Focus on one important task first.",

"🚀 Small progress every day creates big results.",

"🌱 Consistency beats motivation.",

"📚 Learn something new today.",

"💪 Discipline creates freedom."

];

let currentTip = 0;

setInterval(()=>{

document.getElementById("aiTip")
.innerText = tips[currentTip];

currentTip++;

if(currentTip >= tips.length){
    currentTip = 0;
}

},4000);

const photos = [

"https://picsum.photos/500/300?1",
"https://picsum.photos/500/300?2",
"https://picsum.photos/500/300?3",
"https://picsum.photos/500/300?4"

];

let photoIndex = 0;

setInterval(()=>{

photoIndex++;

if(photoIndex >= photos.length){
   photoIndex = 0;
}

document
.getElementById(
"memoryImage"
).src =
photos[photoIndex];

},3000);

const headlines = [

"🚀 AI technology continues rapid growth.",

"📱 New smartphone launches this month.",

"🌍 Scientists discover climate breakthrough.",

"🚗 Electric vehicle adoption rises globally.",

"🛰 Space mission reaches new milestone."

];

let newsIndex = 0;

setInterval(()=>{

document.querySelector(
"#newsList li"
).innerText =/* LIVE GREETING */

function updateGreeting(){

    const hour =
    new Date().getHours();

    let text = "";

    if(hour < 12){
        text = "☀ Good Morning";
    }
    else if(hour < 18){
        text = "🌤 Good Afternoon";
    }
    else{
        text = "🌙 Good Evening";
    }

    document
    .getElementById(
    "welcomeTime"
    ).innerText = text;
}

updateGreeting();

/* ANIMATED COUNTERS */

function animateCounter(id,target,suffix=""){

    let count = 0;

    const element =
    document.getElementById(id);

    const speed =
    target/100;

    const timer =
    setInterval(()=>{

        count += speed;

        if(count >= target){

            count = target;

            clearInterval(timer);
        }

        element.innerText =
        Math.floor(count)+suffix;

    },20);
}

animateCounter(
"tempCounter",
28,
"°"
);

animateCounter(
"stepCounter",
8421
);

animateCounter(
"waterCounter",
3,
"L"
);

/* MOBILE SIDEBAR */

const menuBtn =
document.getElementById("menuBtn");

const sidebar =
document.getElementById("sidebar");

if(menuBtn){
    menuBtn.addEventListener(
    "click",
    ()=>{

      sidebar.classList.toggle(
      "show"
      );

    });
}
headlines[newsIndex];

newsIndex++;

if(newsIndex >= headlines.length){
   newsIndex = 0;
}

},4000);

