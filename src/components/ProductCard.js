import React, { useState } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import EditProductModal from "./EditProductModal";
import { addToCart } from "../api";

//returns product card
export default function ProductCard({ products, cart }) {
  // add products to db cart
  const addToDbCart = (userId, productId) => {
    console.log("adding to db");

    addToCart(userId, [productId]);
    window.location.reload(false);
  };

  //console.log("token", localStorage.getItem("token"));
  //console.log("storage user", localStorage.getItem("user"));

  const addToLocalCart = (product) => {
    //console.log("cart working", product);
    //console.log("product count", product.count);
    const oldProducts = JSON.parse(localStorage.getItem("cart"));
    //console.log("old products", oldProducts);
    const newProducts = [];
    if (oldProducts.length > 0) {
      for (let i = 0; i < oldProducts.length; i++) {
        //console.log("inside for loop", oldProducts[i]);
        newProducts.push(oldProducts[i]);
      }
      for (let i = 0; i < product.count; i++) {
        newProducts.push(product);
      }
    } else {
      for (let i = 0; i < product.count; i++) {
        newProducts.push(product);
      }
    }
    localStorage.setItem("cart", JSON.stringify(newProducts));
    //console.log("new products", newProducts);
    window.location.reload(false);
  };

  //console.log("products", products);

  return (
    <>
      {products ? (
        products.map((product) => {
          const {
            id,
            department,
            inStock,
            description,
            name,
            photoUrl,
            price,
            quantity,
          } = product;

          const [showText, setShowText] = useState(true);
          let truncatedDesc = showText ? description.slice(0, 50) : description;

          let httpsImage;
          if (photoUrl) {
            if (photoUrl.includes("https")) {
              httpsImage = photoUrl;
            } else {
              httpsImage = photoUrl.replace("http", "https");
            }
          }

          return (
            <Card raised style={{ width: "25rem" }} className="product-card-text" key={id}>
              <img src={photoUrl} style={{ height: "20rem" }} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  <span>{department}</span>
                </Card.Meta>
                <Card.Description>
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
              <Card.Content>
                {inStock ? (
                  <>
                    <Icon name="dollar" className="price-text" />
                    <span className="product-card-amount" >
                      {price}
                      {/* {" | "}
                      {quantity} left */}
                    </span>
                  </>
                ) : (
                    <>
                      <Icon name="dollar" className="price-text" />
                      <span className="product-card-amount">
                        {price}
                        {/*  {" | "}Out of Stock */}
                      </span>
                    </>
                  )}
              </Card.Content>
              <Card.Content>
                {localStorage.getItem("token") ? (
                  <Button
                    onClick={() =>
                      addToDbCart(
                        JSON.parse(localStorage.getItem("user")).id,
                        id
                      )
                    }
                    disabled={
                      cart.filter((product) => {
                        return product.name == name;
                      }).length > 0
                    }
                  >
                    Add to Cart
                  </Button>
                ) : (
                    <Button
                      onClick={() => addToLocalCart(product)}
                      disabled={
                        JSON.parse(localStorage.getItem("cart")).filter(
                          (product) => {
                            return product.name === name;
                          }
                        ).length > 0
                      }
                    >
                      Add to cart
                    </Button>
                  )}
              </Card.Content>
            </Card>
          );
        })
      ) : (
          <h1>Loading</h1>
        )}
    </>
  );
}
