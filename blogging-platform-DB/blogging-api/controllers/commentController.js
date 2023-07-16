// CommentController.js

const Comment = require("../models/Comment");

const CommentController = {
  createComment: async (req, res) => {
    try {
      const { text, postId } = req.body;
      const comment = await Comment.create({
        text,
        UserId: req.user.id,
        PostId: postId,
      });
      res.json({ message: "Comment created successfully", comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getCommentsByPostId: async (req, res) => {
    try {
      const { postId } = req.params;
      const comments = await Comment.findAll({
        where: { PostId: postId },
        include: "User",
      });
      res.json({ comments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getCommentById: async (req, res) => {
    const targetPostId = parseInt(req.params.postId, 10);
    const targetCommentId = parseInt(req.params.commentId, 10);

    try {
      const targetComment = await Comment.findOne({
        where: { id: targetCommentId, PostId: targetPostId },
      });

      if (targetComment) {
        res.status(200).json(targetComment);
      } else {
        res.status(404).json({ message: "No comment found." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: err.message });
    }

    // try {
    //   const { commentId } = req.params;
    //   const comment = await Comment.findByPk(commentId, { include: "User" });
    //   if (comment) {
    //     res.json({ comment });
    //   } else {
    //     res.status(404).json({ message: "Comment not found" });
    //   }
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: "Internal server error" });
    // }
  },

  updateComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const { text } = req.body;
      const comment = await Comment.findByPk(commentId);
      if (comment) {
        comment.text = text;
        await comment.save();
        res.json({ message: "Comment updated successfully", comment });
      } else {
        res.status(404).json({ message: "Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const comment = await Comment.findByPk(commentId);
      if (comment) {
        await comment.destroy();
        res.json({ message: "Comment deleted successfully" });
      } else {
        res.status(404).json({ message: "Comment not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = CommentController;
