const { query } = require("./database");
const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  res.on("finish", () => {
    console.log(`Response status: ${res.statusCode}`);
  });
  next();
});

app.use(express.json());

// Get all books
app.get("/books", async (req, res) => {
  try {
    const allBooks = await query("SELECT * FROM book_inventory");
    res.status(200).json(allBooks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Get a specific book by ID
app.get("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  try {
    const book = await query("SELECT * FROM book_inventory WHERE id = $1", [
      bookId,
    ]);

    if (book.rows.length > 0) {
      res.status(200).json(book.rows[0]);
    } else {
      res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Add a new book
app.post("/books", async (req, res) => {
  const { title, author, genre, quantity } = req.body;

  try {
    const newBook = await query(
      "INSERT INTO book_inventory (title, author, genre, quantity) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, author, genre, quantity]
    );

    res.status(201).json(newBook.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Update a book by ID
app.patch("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const { title, author, genre, quantity } = req.body;

  try {
    const updatedBook = await query(
      "UPDATE book_inventory SET title = $1, author = $2, genre = $3, quantity = $4 WHERE id = $5 RETURNING *",
      [title, author, genre, quantity, bookId]
    );

    if (updatedBook.rows.length > 0) {
      res.status(200).json(updatedBook.rows[0]);
    } else {
      res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Delete a book by ID
app.delete("/books/:id", async (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  try {
    const deleteOp = await query("DELETE FROM book_inventory WHERE id = $1", [
      bookId,
    ]);

    if (deleteOp.rowCount > 0) {
      res.status(200).send({ message: "Book deleted successfully" });
    } else {
      res.status(404).send({ message: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
