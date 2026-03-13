const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Initial data array
let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988 },
    { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
];

// 2. Read All: GET /api/books
app.get('/api/books', (req,res) => {
    res.status(200).json(books);
});




// 3. Read Single: GET /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// 4. Create: POST /api/books
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});