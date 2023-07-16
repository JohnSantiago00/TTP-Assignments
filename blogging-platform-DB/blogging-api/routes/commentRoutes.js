const express = require("express");
const CommentController = require("../controllers/commentController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, CommentController.createComment);
router.get("/:postId", authenticateUser, CommentController.getCommentsByPostId);
router.get(
  "/:postId/:commentId",
  authenticateUser,
  CommentController.getCommentById
);
router.patch("/:commentId", authenticateUser, CommentController.updateComment);
router.delete("/:commentId", authenticateUser, CommentController.deleteComment);
router.get("/comments", authenticateUser, CommentController.getAllComments);
module.exports = router;
