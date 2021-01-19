import PageHeader from "../components/PageHeader";
import React, { useEffect } from "react";
import DisplayCart from "./DisplayCart";
import OrderSummary from "./OrderSummary";

const VisitorCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {}, [localStorage.getItem("token")]);

  return (
    <>
      <div>
        <PageHeader />
        <h1>VisitorCart</h1>
        <div className="visitor-cart-elements">
          <div className="visitor-cart-cards">
            <DisplayCart products={cart} />
          </div>
          <div className="visitor-card-summary">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitorCart;
