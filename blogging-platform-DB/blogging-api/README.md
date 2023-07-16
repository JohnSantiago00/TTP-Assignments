# Blogging Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

The Blogging Platform is a web application that allows users to create posts and comment on them. It provides an API for managing posts and comments, as well as user authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To install and set up the Blogging Platform, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/blogging-platform.git

2. Install the dependencies:

```
cd blogging-platform
npm install
```

3. Set up the database:

- Create a PostgreSQL database.
- Update the database configuration in the `.env` file with your database credentials.

4. Run the application:

```
npm start
```

## Postman Collection

You can find the Postman collection for this project [here](./blogging-platform-DB/blogging-api/Blog%20Platform.postman_collection.json).

## Usage

Once the application is running, you can interact with it using an API client such as Postman. Here are some example API requests:

- Create a new post:
  POST /posts
  Request Body: { "title": "My First Post", "content": "Hello, world!" }
- Get all posts:
  GET /posts
- Add a comment to a post:
  POST /api/comments
  Request Body: { "postId": "1", "text": "Great post!" }
- Get comments for a specific post:
  GET /comments/:postId

Please refer to the API Routes section below for a complete list of available routes and their descriptions.

## API Routes

The Blogging Platform provides the following API routes:

- `/posts`
- `GET` - Get all posts
- `POST` - Create a new post

- `/comments/:postId`
- `GET` - Get comments for a specific post
- `POST` - Add a comment to a post

- `/comments/:commentId`
- `GET` - Get a specific comment by ID
- `PUT` - Update a comment
- `DELETE` - Delete a comment

Please note that some routes require authentication. You need to include an authentication token in the request headers to access these routes.

## Contributing

Contributions to the Blogging Platform are currently not accepted. This project is for educational purposes and serves as an example of building a blogging platform using Node.js and Express. Feel free to explore the code, make changes for personal use, or use it as a reference for your own projects.

If you encounter any issues or have suggestions for improvement, feel free to create an issue in the repository. However, please note that no active development or maintenance is being performed on this project.

## License

This project is licensed under the [MIT License](LICENSE).
