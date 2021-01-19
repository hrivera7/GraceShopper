import React, { useState } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import theGathering from "../theGathering.jpg";

//returns product card
export default function CartCard({ products }) {
  return (
    <>
      {products.map((product) => {
        let {
          id,
          department,
          inStock,
          description,
          name,
          photoUrl,
          price,
          quantity,
          count,
        } = product;

        const [showText, setShowText] = useState(true);
        let truncatedDesc = showText ? description.slice(0, 50) : description;

        const removeProduct = (productId) => {
          const index = products.findIndex(
            (product) => product.id === productId
          );
          console.log("index", index, products, productId);
          const newProducts = [];
          if (index !== -1) {
            products.splice(index, 1);
          }
          for (let i = 0; i < product.length; i++) {
            newProducts.push(oldProducts[i]);
          }
          console.log("cart card new", products);
          localStorage.setItem("cart", JSON.stringify(products));
          window.location.reload(false);
        };

        return (
          <Card className="cart-card" style={{ width: "45rem" }} key={id}>
            <div className="flex">
              <div className="cart-card-image-container">
                <img src={theGathering} className="cart-card-image" />
              </div>
              <div className="cart-card-right">
                <Card.Content>
                  <Card.Header className="cart-header">{name}</Card.Header>
                  <div></div>
                  <Card.Meta className="cart-card-department">
                    <span>{department}</span>
                  </Card.Meta>
                  <Card.Description className="cart-card-description">
                    {truncatedDesc.length < 50 ? (
                      truncatedDesc
                    ) : (
                      <span
                        onClick={() => {
                          setShowText(!showText);
                        }}
                      >
                        {truncatedDesc}
                        <span id="showText">
                          ...Show {showText ? "more" : "less"}
                        </span>
                      </span>
                    )}
                  </Card.Description>
                </Card.Content>
                <Card.Content className="cart-card-price">
                  {inStock ? (
                    <>
                      <Icon name="dollar" />
                      <span className="cart-card-amount">{price}</span>
                      {" | "}
                      <span className="cart-card-quantity">
                        {quantity} left
                      </span>
                    </>
                  ) : (
                    <>
                      <Icon name="dollar" />
                      <span>
                        {price}
                        {" | "}Out of Stock
                      </span>
                    </>
                  )}
                </Card.Content>
                <Card.Content className="cart-card-buttons-trash">
                  <Button
                    basic
                    color="red"
                    //onClick={count > 1 ? () => (newCount = count - 1) : null}
                    className="cart-card-minus-button"
                  >
                    &#8722;
                  </Button>
                  <span className="cart-card-count">{count}</span>
                  <Button className="cart-card-plus-button" basic color="green">
                    &#43;
                  </Button>
                  <Icon
                    className="trash icon"
                    onClick={() => removeProduct(id)}
                  />
                </Card.Content>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}
