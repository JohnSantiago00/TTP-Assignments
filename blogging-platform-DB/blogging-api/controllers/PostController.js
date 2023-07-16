// PostController.js

const Post = require("../models/Post");

const PostController = {
  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = await Post.create({ title, content, UserId: req.user.id });
      res.json({ message: "Post created successfully", post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({ include: "User" });
      res.json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { postId } = req.params;
      const post = await Post.findByPk(postId, { include: "User" });
      if (post) {
        res.json({ post });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const { title, content } = req.body;
      const post = await Post.findByPk(postId);
      if (post) {
        post.title = title;
        post.content = content;
        await post.save();
        res.json({ message: "Post updated successfully", post });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { postId } = req.params;
      const post = await Post.findByPk(postId);
      if (post) {
        await post.destroy();
        res.json({ message: "Post deleted successfully" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = PostController;
