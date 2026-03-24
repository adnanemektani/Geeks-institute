const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Who developed Node.js?",
        options: ["Ryan Dahl", "Brendan Eich", "Guido van Rossum", "Linus Torvalds"],
        answer: "Ryan Dahl"
    }
];

app.get("/api/questions", (req, res) => {
    res.json(questions);
});

app.listen(PORT, () => {
    console.log(`Quiz Game running at http://localhost:${PORT}`);
});
