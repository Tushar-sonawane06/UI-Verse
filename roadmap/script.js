/*const timelineItems = document.querySelectorAll(".timeline-item");

function showTimeline() {
  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showTimeline);

showTimeline();

const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

items.forEach((item) => {
  observer.observe(item);
});

const cards =
document.querySelectorAll(".timeline-card");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

cards.forEach(card=>{
observer.observe(card);
});

const fill =
document.querySelector(".progress-fill");

window.addEventListener("scroll",()=>{

const scrollTop =
window.scrollY;

const docHeight =
document.documentElement.scrollHeight
- window.innerHeight;

const progress =
(scrollTop/docHeight)*100;

fill.style.width =
progress + "%";

});

const stars =
document.getElementById("stars");

for(let i=0;i<200;i++){

const star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100+"%";

star.style.top =
Math.random()*100+"%";

star.style.animationDelay =
Math.random()*3+"s";

stars.appendChild(star);

}



const targetDate =
new Date("2027-01-01");

setInterval(()=>{

const now =
new Date();

const diff =
targetDate-now;

const d =
Math.floor(diff/(1000*60*60*24));

const h =
Math.floor(
(diff/(1000*60*60))%24
);

const m =
Math.floor(
(diff/(1000*60))%60
);

const s =
Math.floor(
(diff/1000)%60
);

document
.getElementById("countdown")
.innerText =
`${d}d ${h}h ${m}m ${s}s`;

},1000);



const buttons =
document.querySelectorAll(
".filter-btn"
);

const cards =
document.querySelectorAll(
".roadmap-card"
);

buttons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

buttons.forEach(b=>
b.classList.remove(
"active"
));

btn.classList.add(
"active"
);

const filter =
btn.dataset.filter;

cards.forEach(card=>{

if(
filter==="all" ||
card.classList.contains(
filter
)
){
card.style.display=
"block";
}
else{
card.style.display=
"none";
}

});

});

});



const observer =
new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},
{
threshold:.2
}
);

cards.forEach(card=>
observer.observe(card)
);



cards.forEach(card=>{

card.addEventListener(
"mousemove",
e=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

const rotateY =
(x/rect.width-.5)*20;

const rotateX =
(y/rect.height-.5)*-20;

card.style.transform=
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0)";

});

});*/
document.addEventListener("DOMContentLoaded", () => {

    const timelineItems =
document.querySelectorAll(".timeline-item");

const timelineObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

timelineItems.forEach(item=>{
    timelineObserver.observe(item);
});

const roadmapCards =
document.querySelectorAll(".roadmap-card");

const roadmapObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

roadmapCards.forEach(card=>{
    roadmapObserver.observe(card);
});

const fill =
document.querySelector(".progress-fill");

if(fill){

window.addEventListener("scroll",()=>{

    const scrollTop = window.scrollY;

    const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progress =
    (scrollTop / docHeight) * 100;

    fill.style.width =
    progress + "%";

});

}

const stars =
document.getElementById("stars");

if(stars){

for(let i=0;i<200;i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random()*100 + "%";

    star.style.top =
    Math.random()*100 + "%";

    stars.appendChild(star);

}

}

const countdown =
document.getElementById("countdown");

if(countdown){

const targetDate =
new Date("2027-01-01");

setInterval(()=>{

    const now =
    new Date();

    const diff =
    targetDate - now;

    const d =
    Math.floor(diff/(1000*60*60*24));

    const h =
    Math.floor((diff/(1000*60*60))%24);

    const m =
    Math.floor((diff/(1000*60))%60);

    const s =
    Math.floor((diff/1000)%60);

    countdown.innerText =
    `${d}d ${h}h ${m}m ${s}s`;

},1000);

}

const buttons =
document.querySelectorAll(".filter-btn");

const roadmapCards2 =
document.querySelectorAll(".roadmap-card");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        buttons.forEach(b=>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        const filter =
        btn.dataset.filter;

        roadmapCards2.forEach(card=>{

            if(
                filter === "all" ||
                card.classList.contains(filter)
            ){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});

roadmapCards2.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x / rect.width - .5) * 20;

        const rotateX =
        (y / rect.height - .5) * -20;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// Animated Counter

const stats =
document.querySelectorAll(".stat h2");

stats.forEach(stat=>{

    const finalValue =
    parseInt(stat.innerText);

    let count = 0;

    const update = ()=>{

        if(count < finalValue){

            count += Math.ceil(finalValue/50);

            stat.innerText = count;

            requestAnimationFrame(update);

        }else{

            stat.innerText =
            stat.dataset.value ||
            finalValue;

        }

    };

    update();

});

});