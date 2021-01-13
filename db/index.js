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

async function updateUser({ username, email, password, userId }) {
  console.log("parameters", username, email, password, userId);
  try {
    const retrievedUser = await getUserById(userId);
    console.log("retrieved user", retrievedUser);
    if (retrievedUser === null) {
      throw new Error("User with that id does not exist.");
    }
    const {
      rows: [user],
    } = await client.query(
      `
        UPDATE users
        SET username = $1, email = $2, password = $3
        WHERE id = $4
        RETURNING *
    `,
      [username, email, password, userId]
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

async function getProductById(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(`
      SELECT * FROM products
      WHERE id = ${productId}    
      `);
    if (!product) {
      return null;
    }
    return product;
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

async function updateProduct({
  name,
  description,
  photoUrl,
  quantity,
  price,
  department,
  inStock,
  productId,
}) {
  try {
    // retrieve product by id
    const retrievedProduct = await getProductById(productId);
    console.log("retrieved product", retrievedProduct);
    // if product doesnt exists throw error
    if (retrievedProduct === null) {
      throw new Error("Product with that id does not exist.");
    }
    // update products table
    const {
      rows: [product],
    } = await client.query(
      `
        UPDATE products 
        SET name = $1, description = $2, "photoUrl" = $3, quantity = $4, price = $5, department = $6, "inStock" = $7
        WHERE id = $8
        RETURNING *
      `,
      [
        name,
        description,
        photoUrl,
        quantity,
        price,
        department,
        inStock,
        productId,
      ]
    );
    // return product
    return product;
  } catch (error) {
    throw error;
  }
}
//
async function deleteUser(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      DELETE FROM users
      WHERE id = $1
      RETURNING *
    `,
      [userId]
    );
    console.log("user", user);
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      DELETE FROM products
      WHERE id = $1
      RETURNING *
    `,
      [productId]
    );
    console.log("product", product);
    return product;
  } catch (error) {
    throw error;
  }
}

// export db functions
module.exports = {
  client,
  // db methods
  getUsers,
  createUser,
  getUserById,
  getUserByUsername,
  getProducts,
  createProduct,
  getProductById,
  updateUser,
  updateProduct,
  deleteUser,
  deleteProduct,
  /* getCart,
  createCart,
  addToCart,
  checkout,
  getOrder, */
};
