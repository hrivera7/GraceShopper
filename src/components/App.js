import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import DisplayAllUsers from "./DisplayAllUsers";
import PageHeader from "../components/Header";
import Modal from "./Modal";
//import Routes from "./utils/Routes"

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
  const [navItem, setNavItem] = useState("home");

  //const [productCount, setProductCount] = useState(0) consider storing productCount in App.js so the cart can access

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.allProducts);
        
      })
      .catch((error) => {
        setProducts(error.message);
      });
  }, []);
 

  return (
    <div className="app">
      <PageHeader navItem={navItem} setNavItem={setNavItem} />
      {navItem === "sign in" ? <Modal /> : ""}
      <DisplayAllProducts
        products={
          products
        } /*  setProductCount={setProductCount} productCount={productCount}  */
      />
      <DisplayAllUsers />
      {/* return only needs to display Routes 
       it contains all components with respective paths */}
      {/*  <Routes></Routes> */}
    </div>
  );
};

export default App;
