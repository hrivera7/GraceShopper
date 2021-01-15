
import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import DisplayAllUsers from "./DisplayAllUsers";
import PageHeader from '../components/Header';
import FakeModal from './Modal';

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
  const [navItem, setNavItem] = useState('home')
  const [users, setUsers] = useState([])



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
      <PageHeader navItem={navItem} setNavItem={setNavItem} setUsers={setUsers} />
      {navItem === 'sign in' ? <FakeModal /> : ""}
      {navItem === 'home' ? <DisplayAllProducts products={products} /*  setProductCount={setProductCount} productCount={productCount}  */ /> : '' }
      {navItem === 'Display Users' ? <DisplayAllUsers users={users}/> : ""}
    </div>
  );

};

export default App;
