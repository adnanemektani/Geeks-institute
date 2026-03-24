// ===============>exercice 1
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(express.json());

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


app.get("/api/posts", async (req, res) => {
    try {
        const response = await axios.get(BASE_URL);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});


app.get("/api/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ error: "Post not found" });
    }
});

app.post("/api/posts", async (req, res) => {
    const { title, body, userId } = req.body;

    if (!title || !body || !userId) {
        return res.status(400).json({ error: "Title, body, and userId are required" });
    }

    try {
        const response = await axios.post(BASE_URL, { title, body, userId });
        res.status(201).json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to create post" });
    }
});

app.put("/api/posts/:id", async (req, res) => {
    const { id } = req.params;
    const { title, body, userId } = req.body;

    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { title, body, userId });
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ error: "Failed to update post" });
    }
});

app.delete("/api/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await axios.delete(`${BASE_URL}/${id}`);
        res.json({ message: `Post ${id} deleted successfully` });
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ error: "Failed to delete post" });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// ===============>exercice 2
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

app.use(express.json());

const JWT_SECRET = "supersecretkey";

const users = [];

app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = { id: users.length + 1, username, password: hashedPassword };
        users.push(newUser);

        res.status(201).json({ message: "User registered successfully", user: { id: newUser.id, username: newUser.username } });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});


app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    try {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

    if (!token) return res.status(401).json({ error: "Access denied, token missing" });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });
        req.user = user;
        next();
    });
}

app.get("/api/profile", authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ id: user.id, username: user.username });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`User Login API running at http://localhost:${PORT}`);
});


// ===============>exercice 3

const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let todos = [];
let nextId = 1;


app.get("/api/todos", (req, res) => {
    res.json(todos);
});


app.get("/api/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
});

app.post("/api/todos", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = {
        id: nextId++,
        title,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    const { title, completed } = req.body;

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json({ message: "Todo deleted", todo: deletedTodo[0] });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Todo API running at http://localhost:${PORT}`);
});
