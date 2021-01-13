import React, { useState, useEffect } from "react";

import {
  getProducts,
  /* getUsers,
  createUser,
  getUserByUsername,
  getUserById,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteUser,
  updateUser, 
 */
} from "../api";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log("response", response);
        setProducts(response.allProducts);
      })
      .catch((error) => {
        setProducts(error.message);
      });
  }, []);
  console.log("products", products);
  return (
    <div className="app">
      <h1>Hello, World!</h1>
      {products
        ? products.map((product) => {
            return (
              <>
                <h1>{product.name}</h1>
              </>
            );
          })
        : null}
    </div>
  );
};

export default App;
