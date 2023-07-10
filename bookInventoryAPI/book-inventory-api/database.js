const { Pool } = require("pg");
require("dotenv").config();

console.log(process.env.DB_NAME);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS book_inventory(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL
    
  );
`;

const createBookAppsTable = async () => {
  try {
    await pool.query(createTableQuery);
    console.log("Creating table was successful");
  } catch (error) {
    console.error("An error occurred while creating the table", error.stack);
  }
};

createBookAppsTable();

module.exports = {
  query: (text, params, callback) => {
    console.log("QUERY:", text, params || "");
    return pool.query(text, params, callback);
  },
};
