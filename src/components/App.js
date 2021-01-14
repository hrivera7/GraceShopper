
import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from '../components/Header'
import FakeModal from './Modal'

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
<<<<<<< HEAD

=======
>>>>>>> 27bce17ccb630bb169f197ad7c74fc8081d8d12e

const App = () => {
  const [products, setProducts] = useState([]);
  const [navItem, setNavItem] = useState('home')



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
      <PageHeader navItem={navItem} setNavItem={setNavItem} />
      {navItem === 'sign in' ? <FakeModal /> : ""}
      <DisplayAllProducts products={products} /*  setProductCount={setProductCount} productCount={productCount}  */ />

    </div>
  );

};

export default App;
