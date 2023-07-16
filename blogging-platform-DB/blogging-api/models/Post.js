// Post.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const User = require("./User");

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.belongsTo(User); // A Post belongs to a User
User.hasMany(Post); // A User can have multiple Posts

module.exports = Post;
