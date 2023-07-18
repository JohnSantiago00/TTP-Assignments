const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const { authenticateUser } = require("./middleware/authMiddleware");
const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/posts", authenticateUser, postRoutes);
app.use("/api/comments", authenticateUser, commentRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
