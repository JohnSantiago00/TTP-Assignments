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

Post.belongsTo(User);
User.hasMany(Post);

module.exports = Post;
