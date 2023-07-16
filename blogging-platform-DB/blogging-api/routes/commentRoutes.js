const express = require("express");
const CommentController = require("../controllers/commentController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, CommentController.createComment);
router.get("/:postId", authenticateUser, CommentController.getCommentsByPostId);
router.get("/:commentId", authenticateUser, CommentController.getCommentById);
router.patch("/:commentId", authenticateUser, CommentController.updateComment);
router.delete("/:commentId", authenticateUser, CommentController.deleteComment);

module.exports = router;
