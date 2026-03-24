const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/posts", async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log("✅ Successfully retrieved posts from JSONPlaceholder");
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
