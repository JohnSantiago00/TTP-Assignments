// Comment.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");
const Post = require("./Post");

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Comment.belongsTo(User); // A Comment belongs to a User
User.hasMany(Comment); // A User can have multiple Comments

Comment.belongsTo(Post); // A Comment belongs to a Post
Post.hasMany(Comment); // A Post can have multiple Comments

module.exports = Comment;
