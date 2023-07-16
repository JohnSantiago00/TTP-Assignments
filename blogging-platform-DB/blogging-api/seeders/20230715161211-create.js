"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersData = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: await bcrypt.hash("123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: await bcrypt.hash("abc", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const insertedUsers = await queryInterface.bulkInsert("Users", usersData, {
      returning: true,
    });

    const userIds = insertedUsers.map((user) => user.id);

    const postsData = [
      {
        title: "First Post",
        content: "This is the first post.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userIds[0],
      },
      {
        title: "Second Post",
        content: "This is the second post.",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userIds[1],
      },
    ];

    const insertedPosts = await queryInterface.bulkInsert("Posts", postsData, {
      returning: true,
    });

    const postIds = insertedPosts.map((post) => post.id);

    const commentsData = [
      {
        text: "First comment on first post",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userIds[0],
        PostId: postIds[0],
      },
      {
        text: "Second comment on first post",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userIds[1],
        PostId: postIds[0],
      },
      {
        text: "First comment on second post",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userIds[0],
        PostId: postIds[1],
      },
      {
        text: "Second comment on second post",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: userIds[1],
        PostId: postIds[1],
      },
    ];

    await queryInterface.bulkInsert("Comments", commentsData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
    await queryInterface.bulkDelete("Posts", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
