
import React, { useState, useEffect } from "react";
import PageHeader from '../components/Header'

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
console.log("will's updates");

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
      <PageHeader />

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
