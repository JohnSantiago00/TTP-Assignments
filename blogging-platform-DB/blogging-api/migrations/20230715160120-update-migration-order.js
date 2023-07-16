"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      'ALTER TABLE "Posts" DROP CONSTRAINT "Posts_UserId_fkey";'
    );
    await queryInterface.sequelize.query(
      'ALTER TABLE "Posts" ADD CONSTRAINT "Posts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users" ("id") ON DELETE CASCADE;'
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      'ALTER TABLE "Posts" DROP CONSTRAINT "Posts_UserId_fkey";'
    );
  },
};
