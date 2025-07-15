const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Dummy ebook data
const ebooks = [
    { id: 1, title: "Book Title 1", description: "Short description of the book." },
    { id: 2, title: "Book Title 2", description: "Another captivating e-book description." }
];

app.get('/api/ebooks', (req, res) => {
    res.json(ebooks);
});

app.post('/api/ebooks/buy/:id', (req, res) => {
    const ebook = ebooks.find(e => e.id == req.params.id);
    if (ebook) {
        res.json({ message: `Purchase successful for ${ebook.title}` });
    } else {
        res.status(404).json({ message: "E-book not found." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
