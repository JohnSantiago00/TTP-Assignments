## Recipe Management System

This is a Recipe Management System built using Node.js, Express.js, and Sequelize. It provides CRUD functionality for managing recipes and includes server-side data validation using Sequelize's built-in validation methods.

## Features

- Create new recipes with title, description, ingredients, and instructions.
- Retrieve a list of all recipes or a specific recipe by ID.
- Update an existing recipe's information.
- Delete a recipe from the system.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js: Download Node.js
- PostgreSQL: Download PostgreSQL

## Getting Started

1. Clone the repository:

```
git clone https://github.com/your-username/recipe-management-system.git
```

2. Install the dependencies:

```
cd recipe-management-system
npm install
```

3. Set up the database:

- Create a new PostgreSQL database for the project.
- Update the database configuration in the config/config.js file to match your PostgreSQL database credentials.

4. Run the migrations to create the required tables:

```
npx sequelize-cli db:migrate
```

5. Seed the database with initial data (optional):

```
npx sequelize-cli db:seed:all
```

6. Start the application:

```
npm start
```

7. Open your browser and navigate to http://localhost:4000 to access the Recipe Management System.

## API Endpoints

The following API endpoints are available:

- GET /recipes: Retrieve a list of all recipes.
- GET /recipes/:id: Retrieve a specific recipe by ID.
- POST /recipes: Create a new recipe.
- PUT /recipes/:id: Update an existing recipe.
- DELETE /recipes/:id: Delete a recipe.

## Server-side Data Validation

The server-side data validation is implemented using Sequelize's built-in validation methods. The following validation rules are applied to the recipe fields:

- title: Required, minimum length of 3 characters.
- description: Required, maximum length of 500 characters.
- ingredients: Required, maximum length of 1000 characters.
- instructions: Required, maximum length of 5000 characters.

## Testing

You can use an API testing tool like Postman to test the API endpoints and verify the functionality. Ensure that the server is running (npm start) before sending requests to the API.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
