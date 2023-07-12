"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          title: "Chocolate Chip Cookies",
          description: "Delicious homemade chocolate chip cookies.",
          ingredients:
            "1 cup butter, 1 cup sugar, 1 cup brown sugar, 2 eggs, 1 tsp vanilla extract, 3 cups all-purpose flour, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips",
          instructions:
            "1. Preheat the oven to 375°F. 2. In a large bowl, cream together the butter, sugar, and brown sugar. 3. Beat in the eggs one at a time, then stir in the vanilla. 4. In a separate bowl, combine the flour, baking soda, and salt. Gradually add this dry mixture to the wet ingredients. 5. Stir in the chocolate chips. 6. Drop rounded spoonfuls of dough onto ungreased baking sheets. 7. Bake for 9 to 11 minutes or until golden brown. 8. Allow the cookies to cool on the baking sheets for a few minutes before transferring to wire racks to cool completely.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Chicken Alfredo Pasta",
          description: "Creamy and flavorful chicken alfredo pasta dish.",
          ingredients:
            "8 oz fettuccine pasta, 2 boneless, skinless chicken breasts, 2 cloves garlic (minced), 1 cup heavy cream, 1/2 cup grated Parmesan cheese, 1/4 cup chopped fresh parsley, salt and pepper to taste",
          instructions:
            "1. Cook the fettuccine pasta according to package instructions. 2. Season the chicken breasts with salt and pepper. In a large skillet, cook the chicken over medium heat until cooked through. Remove from the skillet and slice into strips. 3. In the same skillet, sauté the minced garlic until fragrant. 4. Add the heavy cream to the skillet and bring to a simmer. Stir in the Parmesan cheese until melted and smooth. 5. Add the cooked pasta and sliced chicken to the skillet, tossing to coat everything in the sauce. 6. Serve the chicken alfredo pasta garnished with chopped fresh parsley.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
