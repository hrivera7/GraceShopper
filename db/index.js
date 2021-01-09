// Require the Client constructor from the pg package
const { Client } = require("pg");
require("dotenv").config();
const { KEY, USER } = process.env;

// name of database
const DB_NAME = "react-test-db";

// connection with heroku or postgres credentials
const DB_URL =
  process.env.DATABASE_URL ||
  `postgres://${USER}:${KEY}@localhost:5432/${DB_NAME}`;

// Create the client
const client = new Client(DB_URL);

// grab all users
async function getUsers() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM users
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

// creates users
async function createUser({ username, email, role, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, email, role, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
      [username, email, role, password]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

// select single user
async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
      SELECT * FROM users
      WHERE id=${userId}
    `);

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT * FROM users
      WHERE username=$1
    `,
      [username]
    );

    return user;
  } catch (error) {
    throw error;
  }
}

// same as get users
async function getProducts() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM products
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createProduct({
  name,
  description,
  photoUrl,
  quantity,
  price,
  department,
  inStock,
}) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      INSERT INTO products(name, description, "photoUrl", quantity, price, department, "inStock")
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `,
      [name, description, photoUrl, quantity, price, department, inStock]
    );

    return product;
  } catch (error) {
    throw error;
  }
}

// export
module.exports = {
  client,
  // db methods
  getUsers,
  createUser,
  getUserById,
  getUserByUsername,
  getProducts,
  createProduct,
};
// updateUser
// updateProducts
