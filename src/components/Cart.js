import PageHeader from "../components/PageHeader";
/* import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom"; */
import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import { getProducts } from "../api";

const Cart = () => {
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
    <>
      <div>
        <PageHeader />
        <DisplayAllProducts products={products} />
      </div>
    </>
  );
};

export default Cart;
