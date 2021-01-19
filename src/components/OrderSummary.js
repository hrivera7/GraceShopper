import React from "react";
import { Card, Button } from "semantic-ui-react";

const OrderSummary = () => {
  const totalArr = [];
  console.log(
    "local storage summary",
    JSON.parse(localStorage.getItem("cart"))
  );
  // parsing string from local storage
  JSON.parse(localStorage.getItem("cart")).map((product) => {
    totalArr.push(parseFloat(product.price));
  });

  console.log("total arr", totalArr);

  return (
    <>
      <Card className="order-summary-card">
        <Card.Content className="order-summary-header-container">
          <p className="order-summary-header">Order Summary</p>{" "}
        </Card.Content>
        <Card.Content className="order-summary-content">
          <p className="order-summary-items-container">
            <span className="order-summary-total-items">Total Items:</span>{" "}
            &nbsp; {totalArr.length}
          </p>
          <p className="order-summary-total-container">
            <span className="order-summary-grand-total">Grand Total:</span>{" "}
            &nbsp;$
            {totalArr.reduce((a, b) => a + b, 0)}
          </p>
        </Card.Content>
        <Card.Content className="order-summary-button-container">
          <Button color="red" className="order-summary-button">
            Checkout & Pay
          </Button>
        </Card.Content>
      </Card>
      <div className="order-summary-shopping-button">
        <Button color="green">Continue Shopping</Button>
      </div>
    </>
  );
};

export default OrderSummary;
