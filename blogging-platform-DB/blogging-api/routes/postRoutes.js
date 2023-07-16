// postRoutes.js

const express = require("express");
const PostController = require("../controllers/PostController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, PostController.createPost);
router.get("/", authenticateUser, PostController.getAllPosts);
router.get("/:postId", authenticateUser, PostController.getPostById);
router.patch("/:postId", authenticateUser, PostController.updatePost);
router.delete("/:postId", authenticateUser, PostController.deletePost);

module.exports = router;
