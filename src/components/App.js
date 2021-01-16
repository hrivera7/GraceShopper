import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import DisplayAllUsers from "./DisplayAllUsers";
import PageHeader from "../components/PageHeader";
import NewModal from "./NewModal";
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
  const [token, setToken] = useState("")
  const [role, setRole] = useState("")
 // console.log("token in app from login", token)
  //console.log("role in app from login", role)

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
      <PageHeader navItem={navItem} setNavItem={setNavItem} setToken={setToken} setRole={setRole} />
      {navItem === "sign in" ? <NewModal /> : ""}
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
