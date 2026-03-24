let currentQuestionIndex = 0;
let score = 0;
let questions = [];

const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

// Fetch questions from server
fetch("/api/questions")
    .then(res => res.json())
    .then(data => {
        questions = data;
        showQuestion();
    });

// Show current question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        quizEl.innerHTML = `<h2>Quiz Completed!</h2>`;
        scoreEl.innerHTML = `Your final score: ${score} / ${questions.length}`;
        scoreEl.classList.remove("hidden");
        nextBtn.style.display = "none";
        return;
    }

    const q = questions[currentQuestionIndex];
    let html = `<h2>${q.question}</h2>`;
    q.options.forEach(opt => {
        html += `<div class="option" onclick="selectOption(this, '${q.answer}')">${opt}</div>`;
    });
    quizEl.innerHTML = html;
}

function selectOption(optionEl, correctAnswer) {
    const selected = optionEl.textContent;
    if (selected === correctAnswer) {
        optionEl.classList.add("correct");
        score++;
    } else {
        optionEl.classList.add("wrong");
        // Highlight correct answer
        Array.from(document.getElementsByClassName("option")).forEach(el => {
            if (el.textContent === correctAnswer) {
                el.classList.add("correct");
            }
        });
    }

  Array.from(document.getElementsByClassName("option")).forEach(el => el.onclick = null);
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});
