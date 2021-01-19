import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";


import { getProducts } from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);

  // const [token, setToken] = useState("");
  //const [role, setRole] = useState("");
  console.log("local storage", localStorage.getItem("token"));

  //const [productCount, setProductCount] = useState(0) consider storing productCount in App.js so the cart can access

  useEffect(() => {
    getProducts()
      .then((response) => {
        // console.log("response", response);
        setProducts(response.allProducts);
      })
      .catch((error) => {
        setProducts(error.message);
      });
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);
  // console.log("products", products);
  //console.log("set role", setRole);
  return (
    <div className="app">
      <PageHeader /* setRole={setRole} */ /* role={role} */
      /* setToken={setToken} */
      /* token={token} */
      />

      <DisplayAllProducts
        products={
          products
        } /*  setProductCount={setProductCount} productCount={productCount}  */
      />
      {/* return only needs to display Routes 
       it contains all components with respective paths */}
       
    </div>
  );
};

export default Home;
