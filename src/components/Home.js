import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import DisplayAllUsers from "./DisplayAllUsers";
import PageHeader from "./PageHeader";
import NewModal from "./Modal";
import { getProducts } from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [navItem, setNavItem] = useState("home");

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

export default Home;
