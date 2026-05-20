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