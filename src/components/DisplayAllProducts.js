import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getCart } from "../api";

export default function DisplayAllProducts({ products, role }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart()
      .then((response) => {
        console.log("response", response);
        setCart(response.cart.products);
      })
      .catch((error) => {
        setCart(error.message);
      });
  }, []);

  return (
    <div className="productSection">
      <ProductCard products={products} role={role} cart={cart} />
    </div>
  );
}
