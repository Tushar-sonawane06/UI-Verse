const skills = [

{
selector:".html-fill",
target:90,
counter:"#htmlCount",
circle:".html-circle"
},

{
selector:".css-fill",
target:80,
counter:"#cssCount",
circle:".css-circle"
},

{
selector:".js-fill",
target:70,
counter:"#jsCount",
circle:".js-circle"
}

];

skills.forEach(skill=>{

    let progress = 0;

    const bar =
    document.querySelector(
    skill.selector
    );

    const counter =
    document.querySelector(
    skill.counter
    );

    const circle =
    document.querySelector(
    skill.circle
    );

    const radius = 60;

    const circumference =
    2 * Math.PI * radius;

    const interval =
    setInterval(()=>{

        if(
        progress >=
        skill.target
        ){

            clearInterval(
            interval
            );

            return;
        }

        progress++;

        bar.style.width =
        progress + "%";

        bar.querySelector(
        ".percent"
        ).textContent =
        progress + "%";

        counter.textContent =
        progress + "%";

        const offset =
        circumference -
        (progress/100)
        * circumference;

        circle.style
        .strokeDashoffset =
        offset;

    },20);

});
const bars =
document.querySelectorAll(
"[data-target]"
);

bars.forEach(bar=>{

  let width = 0;

  const target =
  parseInt(
  bar.dataset.target
  );

  const interval =
  setInterval(()=>{

    if(width >= target){

      clearInterval(
      interval
      );

      return;
    }

    width++;

    bar.style.width =
    width + "%";

  },20);

});

/* Analytics Counter */

let analytics = 0;

const analyticsEl =
document.getElementById(
"analytics"
);

const analyticsInterval =
setInterval(()=>{

  if(analytics >= 94){

    clearInterval(
    analyticsInterval
    );

    return;
  }

  analytics++;

  analyticsEl.innerHTML =
  analytics + "%";

},25);

/* AI Counter */

let ai = 0;

const aiText =
document.getElementById(
"aiPercent"
);

const aiInterval =
setInterval(()=>{

  if(ai >= 96){

    clearInterval(
    aiInterval
    );

    return;
  }

  ai++;

  aiText.innerHTML =
  ai + "%";

},20);
const words = [

"AI Quizzes",
"Fun Challenges",
"Coding Tests",
"Daily Rewards",
"Achievements"

];

let wordIndex = 0;
let charIndex = 0;

const typing =
document.getElementById(
"typing"
);

function typeEffect(){

    if(
    charIndex <
    words[wordIndex].length
    ){

        typing.textContent +=
        words[wordIndex]
        .charAt(charIndex);

        charIndex++;

        setTimeout(
        typeEffect,
        100
        );
    }
    else{

        setTimeout(
        eraseEffect,
        1500
        );
    }
}

function eraseEffect(){

    if(
    charIndex > 0
    ){

        typing.textContent =
        words[wordIndex]
        .substring(
        0,
        charIndex - 1
        );

        charIndex--;

        setTimeout(
        eraseEffect,
        50
        );
    }
    else{

        wordIndex++;

        if(
        wordIndex >=
        words.length
        ){

            wordIndex = 0;
        }

        setTimeout(
        typeEffect,
        300
        );
    }
}

typeEffect();