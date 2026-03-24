let score = 0;
let currentQuestion = null;

const emojiEl = document.getElementById("emoji");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const leaderboardEl = document.getElementById("leaderboard");

async function loadQuestion() {
    feedbackEl.textContent = "";
    const res = await fetch("/api/question");
    currentQuestion = await res.json();

    emojiEl.textContent = currentQuestion.emoji;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option";
        btn.onclick = () => submitAnswer(option);
        optionsEl.appendChild(btn);
    });
}

async function submitAnswer(selected) {
    const res = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            selected,
            correct: currentQuestion.correct,
            player: "Player1"
        })
    });

    const data = await res.json();

    feedbackEl.textContent = data.correct ? "Correct!" : `Wrong! Correct: ${currentQuestion.correct}`;
    if (data.correct) score++;
    scoreEl.textContent = `Score: ${score}`;

    Array.from(optionsEl.children).forEach(btn => {
        if (btn.textContent === currentQuestion.correct) btn.classList.add("correct");
        if (!data.correct && btn.textContent === selected) btn.classList.add("wrong");
        btn.disabled = true;
    });

    leaderboardEl.innerHTML = "";
    data.leaderboard.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.player}: ${item.score}`;
        leaderboardEl.appendChild(li);
    });

    setTimeout(loadQuestion, 1500);
}

loadQuestion();
