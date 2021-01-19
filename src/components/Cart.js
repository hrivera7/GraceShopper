import PageHeader from "../components/PageHeader";
import React, { useState, useEffect } from "react";
import DisplayCart from "./DisplayCart";
import { getCart } from "../api";
import OrderSummary from "./OrderSummary";

const Cart = () => {
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
  console.log("cart", cart);

  return (
    <>
      <div>
        <PageHeader />
        <h1>Logged in Cart</h1>
        <div className="loggedin-cart-elements">

        <div className="loggedin-cart-cards">
          <DisplayCart products={cart} />
        </div>
        <div className="loggedin-card-summary">
          <OrderSummary />
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Cart;
