const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addBtn");
const flashcardsContainer = document.getElementById("flashcards");

let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

function saveFlashcards() {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

function renderFlashcards() {
    flashcardsContainer.innerHTML = "";

    flashcards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("flashcard");

        cardElement.innerHTML = `
            <button class="delete-btn">×</button>
            <h3>${card.question}</h3>
            <p>${card.answer}</p>
        `;

        cardElement.addEventListener("click", () => {
            cardElement.classList.toggle("show-answer");
        });

        const deleteBtn = cardElement.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            flashcards.splice(index, 1);
            saveFlashcards();
            renderFlashcards();
        });

        flashcardsContainer.appendChild(cardElement);
    });
}

addBtn.addEventListener("click", () => {
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (!question || !answer) {
        alert("Please fill all fields");
        return;
    }

    flashcards.push({
        question,
        answer
    });

    saveFlashcards();
    renderFlashcards();

    questionInput.value = "";
    answerInput.value = "";
});

renderFlashcards();