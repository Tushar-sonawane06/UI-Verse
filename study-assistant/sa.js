document.addEventListener("DOMContentLoaded", () => {

    let tasksCompleted = 0;

function addTask() {

    const taskInput =
        document.getElementById("taskInput");

    if(taskInput.value === "")
        return;

    const li = document.createElement("li");

    li.innerText = taskInput.value;

    li.onclick = function() {

        li.style.textDecoration = "line-through";

        tasksCompleted++;

        updateProgress();
    };

    document
        .getElementById("taskList")
        .appendChild(li);

    taskInput.value = "";
}

function updateProgress(){

    const total =
    document.querySelectorAll("#taskList li").length;

    if(total===0) return;

    let percent =
    (tasksCompleted/total)*100;

    document
    .getElementById("progressFill")
    .style.width = percent + "%";

    document
    .getElementById("progressText")
    .innerText =
    Math.round(percent) + "%";
}

let time = 1500;
let timerInterval;

function startTimer(){

    clearInterval(timerInterval);

    timerInterval =
    setInterval(() => {

        if(time <= 0){
            clearInterval(timerInterval);
            alert("Pomodoro Complete!");
            return;
        }

        time--;

        let min =
        Math.floor(time/60);

        let sec =
        time%60;

        document
        .getElementById("timer")
        .innerText =
        `${min}:${sec
            .toString()
            .padStart(2,'0')}`;

    },1000);
}

function resetTimer(){

    clearInterval(timerInterval);

    time = 1500;

    document
    .getElementById("timer")
    .innerText = "25:00";
}

function saveNotes(){

    const notes =
    document.getElementById("notes").value;

    localStorage.setItem(
        "studyNotes",
        notes
    );

    alert("Notes Saved!");
}

window.onload = () => {

    document.getElementById("notes").value =
    localStorage.getItem("studyNotes") || "";
};

const flashcards = [

"HTML stands for HyperText Markup Language",

"CSS is used for styling webpages",

"JavaScript manipulates webpage behavior",

"DOM means Document Object Model",

"LocalStorage stores browser data"

];

let cardIndex = 0;

function nextCard(){

    cardIndex++;

    if(cardIndex >= flashcards.length)
        cardIndex = 0;

    document
    .getElementById("flashcard")
    .innerText =
    flashcards[cardIndex];
}

function sendMessage(){

    const input =
    document.getElementById("userInput");

    if(input.value === "")
        return;

    const messages =
    document.getElementById("messages");

    messages.innerHTML +=
    `<div class="user-msg">
        ${input.value}
    </div>`;

    setTimeout(() => {

        messages.innerHTML +=
        `<div class="ai-msg">
        Study Tip: Break large topics into smaller concepts.
        </div>`;

        messages.scrollTop =
        messages.scrollHeight;

    },700);

    input.value = "";
}

});
document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("addTaskBtn")
        .addEventListener("click", addTask);

    document
        .getElementById("startBtn")
        .addEventListener("click", startTimer);

    document
        .getElementById("resetBtn")
        .addEventListener("click", resetTimer);

    document
        .getElementById("sendBtn")
        .addEventListener("click", sendMessage);

});
const quotes = [
"Success is the sum of small efforts repeated daily.",
"Study while others are sleeping.",
"Your future is created by what you do today.",
"Every expert was once a beginner."
];

let q = 0;

setInterval(() => {
    q = (q + 1) % quotes.length;

    document.getElementById("quoteText")
        .textContent = quotes[q];

},3000);
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX - 150 + "px";
    glow.style.top = e.clientY - 150 + "px";

});
// Animated counter

const counters =
document.querySelectorAll(".floating-card h1");

counters.forEach(counter=>{

    let start = 0;

    const end =
    parseInt(counter.innerText);

    const update = ()=>{

        if(start < end){

            start += Math.ceil(end/50);

            counter.innerText = start;

            requestAnimationFrame(update);
        }
        else{
            counter.innerText =
            counter.dataset.value || end;
        }
    }

    update();

});
