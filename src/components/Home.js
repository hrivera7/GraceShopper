import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";

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

const Home = ({setToken, token, setRole, role, products}) => {
 
 // console.log("products", products);

  return (
    <div className="app">
      <PageHeader setToken={setToken} setRole={setRole} token={token} role={role}/>
      <DisplayAllProducts products={products} role={role} /*  setProductCount={setProductCount} productCount={productCount}  *//>
    </div>
  );
};

export default Home;
