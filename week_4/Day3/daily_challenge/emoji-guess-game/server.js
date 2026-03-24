const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '💡', name: 'Idea' },
    { emoji: '🍎', name: 'Apple' }
];

let leaderboard = [];

function generateQuestion() {
    const correctIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[correctIndex];

    const options = [correctEmoji.name];
    while (options.length < 3) {
        const randomName = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(randomName)) options.push(randomName);
    }

    options.sort(() => Math.random() - 0.5);

    return { emoji: correctEmoji.emoji, correct: correctEmoji.name, options };
}

app.get("/api/question", (req, res) => {
    const question = generateQuestion();
    res.json(question);
});

app.post("/api/answer", (req, res) => {
    const { selected, correct, player } = req.body;
    const isCorrect = selected === correct;
    const score = isCorrect ? 1 : 0;

    leaderboard.push({ player: player || "Anonymous", score });
    leaderboard.sort((a,b) => b.score - a.score);
    const topScores = leaderboard.slice(0,5);

    res.json({ correct: isCorrect, score, leaderboard: topScores });
});

app.listen(PORT, () => console.log(`Emoji Game running at http://localhost:${PORT}`));
