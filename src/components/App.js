
import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
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
  //const [productCount, setProductCount] = useState(0) consider storing productCount in App.js so the cart can access

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
      <DisplayAllProducts products={products} /*  setProductCount={setProductCount} productCount={productCount}  *//>
     
    </div>
  );

};

export default App;
