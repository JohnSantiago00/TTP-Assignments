"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      // define association here
    }
  }

  Recipe.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 255], // Minimum length of 3 characters
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          max: 500, // Maximum length of 500 characters
        },
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          max: 1000, // Maximum length of 1000 characters
        },
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          max: 5000, // Maximum length of 5000 characters
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Recipe",
      tableName: "Recipes",
      underscored: true,
    }
  );

  return Recipe;
};
