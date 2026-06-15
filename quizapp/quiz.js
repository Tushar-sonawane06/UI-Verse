

// =========================
// QUIZ DATA
// =========================

const quizData = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Machine Language",
        "Hyperlink Text Main Language"
    ],
    answer: 0
},
{
    question: "Which CSS property changes text color?",
    options: [
        "font-style",
        "background",
        "color",
        "text-color"
    ],
    answer: 2
},
{
    question: "Which JavaScript keyword creates a variable?",
    options: [
        "define",
        "let",
        "new",
        "create"
    ],
    answer: 1
},
{
    question: "Which CSS layout system is one-dimensional?",
    options: [
        "Grid",
        "Flexbox",
        "Table",
        "Float"
    ],
    answer: 1
},
{
    question: "Which HTML tag creates a hyperlink?",
    options: [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
    ],
    answer: 1
}
];

// =========================
// QUIZ VARIABLES
// =========================

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

// =========================
// TIMER VARIABLES
// =========================

let timer;
let timeLeft = 30;

const timerText =
document.getElementById("timerText");

const timerFill =
document.getElementById("timerFill");

// =========================
// INITIAL LOAD
// =========================

loadQuestion();

// =========================
// LOAD QUESTION
// =========================

function loadQuestion(){

    clearInterval(timer);

    nextBtn.disabled = true;

    feedback.innerHTML = "";

    const current =
    quizData[currentQuestion];

    question.innerHTML =
    current.question;

    answersContainer.innerHTML = "";

    current.options.forEach(
    (option,index)=>{

        const btn =
        document.createElement("button");

        btn.classList.add("option");

        btn.innerHTML = option;

        btn.addEventListener(
        "click",
        ()=>{

            checkAnswer(
            index,
            btn
            );

        });

        answersContainer
        .appendChild(btn);

    });

    startTimer();
}

// =========================
// CHECK ANSWER
// =========================

function checkAnswer(
selected,
btn
){

    clearInterval(timer);

    const current =
    quizData[currentQuestion];

    const allOptions =
    document.querySelectorAll(
    "#answers .option"
    );

    allOptions.forEach(
    option=>{

        option.classList
        .add("disabled");

    });

    if(
    selected === current.answer
    ){

        btn.classList.add(
        "correct"
        );

        feedback.innerHTML =
        "✅ Correct Answer!";

        score++;

        scoreEl.innerHTML =
        score;

        celebrate();

    }
    else{

        btn.classList.add(
        "wrong"
        );

        allOptions[
        current.answer
        ]
        .classList.add(
        "correct"
        );

        feedback.innerHTML =
        "❌ Wrong Answer";

    }

    nextBtn.disabled = false;
}

// =========================
// NEXT QUESTION
// =========================

nextBtn.addEventListener(
"click",
()=>{

    currentQuestion++;

    if(
    currentQuestion <
    quizData.length
    ){

        loadQuestion();

    }
    else{

        clearInterval(timer);

        document
        .querySelector(
        ".quiz-card"
        )
        .innerHTML =

        `
        <h1 style="text-align:center">
        🎉 Quiz Completed
        </h1>

        <h2 style="text-align:center;margin-top:20px">
        Score:
        ${score}/${quizData.length}
        </h2>

        <p style="text-align:center;margin-top:15px">
        Accuracy:
        ${Math.round(
        score /
        quizData.length
        *100
        )}%
        </p>
        `;

    }

});

// =========================
// TIMER
// =========================

function startTimer(){

    clearInterval(timer);

    timeLeft = 30;

    timerText.innerHTML =
    `⏳ ${timeLeft}s`;

    timerFill.style.width =
    "100%";

    timer =
    setInterval(()=>{

        timeLeft--;

        timerText.innerHTML =
        `⏳ ${timeLeft}s`;

        timerFill.style.width =
        (timeLeft/30)
        *100 + "%";

        if(timeLeft <= 10){

            timerText.style.color =
            "#ef4444";

        }

        if(timeLeft <= 0){

            clearInterval(timer);

            autoFail();

        }

    },1000);

}

// =========================
// AUTO FAIL
// =========================

function autoFail(){

    const allOptions =
    document.querySelectorAll(
    "#answers .option"
    );

    allOptions.forEach(
    btn=>{

        btn.classList.add(
        "disabled"
        );

    });

    const current =
    quizData[currentQuestion];

    allOptions[
    current.answer
    ]
    .classList.add(
    "correct"
    );

    feedback.innerHTML =
    "⏰ Time's Up!";

    nextBtn.disabled = false;
}

// =========================
// CONFETTI
// =========================

function celebrate(){

    if(
    typeof confetti ===
    "undefined"
    ) return;

    const duration = 2000;

    const end =
    Date.now() +
    duration;

    (function frame(){

        confetti({

            particleCount:5,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:5,

            spread:70,

            origin:{x:1}

        });

        if(
        Date.now() < end
        ){

            requestAnimationFrame(
            frame
            );

        }

    })();

}

// =========================
// XP BAR
// =========================

let xp = 720;

const xpFill =
document.getElementById(
"xpFill"
);

if(xpFill){

    xpFill.style.width =
    (xp/1000)*100 + "%";

}

// =========================
// CIRCULAR PROGRESS
// =========================

const percentage = 75;

const circle =
document.getElementById(
"progressCircle"
);

if(circle){

    const radius = 70;

    const circumference =
    2 *
    Math.PI *
    radius;

    circle.style
    .strokeDasharray =
    circumference;

    circle.style
    .strokeDashoffset =

    circumference -

    (
    percentage / 100
    ) *
    circumference;

}

const percentText =
document.getElementById(
"percentage"
);

if(percentText){

    percentText.innerHTML =
    percentage + "%";

}

// =========================
// KAHOOT CARDS
// =========================

const kahootAnswers =
document.querySelectorAll(
".answer"
);

const correctIndex = 3;

kahootAnswers.forEach(
(btn,index)=>{

    btn.addEventListener(
    "click",
    ()=>{

        kahootAnswers.forEach(
        a=>{

            a.disabled = true;

        });

        if(
        index === correctIndex
        ){

            btn.classList.add(
            "correct"
            );

        }
        else{

            btn.classList.add(
            "wrong"
            );

            kahootAnswers[
            correctIndex
            ]
            .classList.add(
            "correct"
            );

        }

    });

},1000);

const quizData = [
  {
    category: "Web Development",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyper Transfer Markup Level",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    category: "Web Development",
    question: "Which CSS property changes text color?",
    options: [
      "font-style",
      "text-color",
      "color",
      "background-color"
    ],
    answer: 2
  },
  {
    category: "JavaScript",
    question: "Which keyword declares a block-scoped variable?",
    options: [
      "var",
      "const",
      "let",
      "Both let and const"
    ],
    answer: 3
  },
  {
    category: "JavaScript",
    question: "Which method converts JSON text into an object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: 0
  },
  {
    category: "Programming",
    question: "Which data structure follows FIFO?",
    options: [
      "Stack",
      "Queue",
      "Tree",
      "Graph"
    ],
    answer: 1
  },
  {
    category: "Programming",
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "<!-- -->",
      "#",
      "//",
      "**"
    ],
    answer: 2
  },
  {
    category: "React",
    question: "What hook is used to manage state?",
    options: [
      "useState",
      "useFetch",
      "useMemo",
      "useRouter"
    ],
    answer: 0
  },
  {
    category: "React",
    question: "JSX stands for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON XML",
      "Java Source XML"
    ],
    answer: 1
  },
  {
    category: "Database",
    question: "Which SQL command retrieves data?",
    options: [
      "INSERT",
      "UPDATE",
      "SELECT",
      "DELETE"
    ],
    answer: 2
  },
  {
    category: "Database",
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Standard Question Language",
      "Sequential Query Logic"
    ],
    answer: 0
  },
  {
    category: "Cyber Security",
    question: "What does HTTPS provide?",
    options: [
      "Compression",
      "Encryption",
      "Caching",
      "Hosting"
    ],
    answer: 1
  },
  {
    category: "Computer Science",
    question: "Which algorithm is used for binary search?",
    options: [
      "Divide and Conquer",
      "Greedy",
      "Backtracking",
      "Dynamic Programming"
    ],
    answer: 0
  }
];
});
