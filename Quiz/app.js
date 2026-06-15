const questions = [

  {
    question: "Which CSS property is used to make corners rounded?",
    answers: [
      { text: "border-radius", correct: true },
      { text: "corner-radius", correct: false },
      { text: "border-style", correct: false },
      { text: "radius", correct: false }
    ]
  },


  {
    question: "Which CSS property changes text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-style", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false }
    ]
  },

  {
    question: "Which JavaScript method is used to select an element by ID?",
    answers: [
      { text: "querySelectorAll()", correct: false },
      { text: "getElementById()", correct: true },
      { text: "getElementsByClass()", correct: false },
      { text: "selectElement()", correct: false }
    ]
  },

  {
    question: "Which CSS display value places elements in flexible rows?",
    answers: [
      { text: "block", correct: false },
      { text: "inline", correct: false },
      { text: "flex", correct: true },
      { text: "grid-row", correct: false }
    ]
  }

];


const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style System", correct: false },
      { text: "Color Style Sheets", correct: false }
    ]
  },
  {
    question: "What is JavaScript used for?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Database management", correct: false },
      { text: "Making web pages interactive", correct: true },
      { text: "Operating system design", correct: false }
    ]
  },
  {
    question: "Which is a JavaScript framework?",
    answers: [
      { text: "Django", correct: false },
      { text: "React", correct: true },
      { text: "Laravel", correct: false },
      { text: "Flask", correct: false }
    ]
  },
  {
    question: "Which tag is used for JavaScript in HTML?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<code>", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "Apple", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */ only", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which HTML element is used for the largest heading?",
    answers: [
      { text: "<h6>", correct: false },
      { text: "<heading>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false }
    ]
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Application Program Input", correct: false },
      { text: "Advanced Programming Internet", correct: false },
      { text: "Applied Program Interface", correct: false }
    ]
  },
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C++", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  }
];

// You must already have these functions in your original app.js:
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next Question";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

  currentQuestionIndex = 0;
  score = 0;

  nextBtn.innerHTML = "Next Question";

  showQuestion();
}

function showQuestion(){

  resetState();

  let currentQuestion = questions[currentQuestionIndex];

  questionElement.innerHTML =
    `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {

    const button = document.createElement("button");

    button.innerHTML = answer.text;

    button.classList.add("btn");

    answerButtons.appendChild(button);

    if(answer.correct){
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){

  nextBtn.style.display = "none";

  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){

  const selectedBtn = e.target;

  const isCorrect =
    selectedBtn.dataset.correct === "true";

  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {

    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

function showScore(){

  resetState();

  questionElement.innerHTML =
    `You scored ${score} out of ${questions.length}!`;

  nextBtn.innerHTML = "Play Again";

  nextBtn.style.display = "block";
}

function handleNextButton(){

  currentQuestionIndex++;

  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextBtn.addEventListener("click", () => {

  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }

});

startQuiz();