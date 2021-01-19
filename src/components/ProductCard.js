import React, { useState } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import theGathering from "../theGathering.jpg";

//returns product card
export default function ProductCard({ products }) {



  return (
    <>
      {products.map((product) => {
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

        const [shopperQuantity, setShopperQuantity] = useState(1)


        const addQuantity = () => {
          setShopperQuantity(shopperQuantity + 1)
        }

        const subtractQuantity = () => {
          if (shopperQuantity === 1) {

          } else {
            setShopperQuantity(shopperQuantity - 1)
          }
        }

        const addToCart = (e) => {

          console.log("added: ", shopperQuantity, "of this product (id):", id, " to cart")
        }



        // let httpsImage;
        // if(photoUrl){
        //   if (photoUrl.includes("https")) {
        //     httpsImage = photoUrl;
        //   } else {
        //     httpsImage = photoUrl.replace("http", "https");
        //   }
        // }
        //Then httpsImage ? <img src={httpsImage} /> : <img src={no_image}  <--will need "no_image" saved locally maybe



        return (
          <Card raised style={{ width: "25rem" }} key={id}>
            <img src={theGathering} style={{ height: "20rem" }} />
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
                  <Icon name="dollar sign" />
                  <span>
                    {price}
                    {" | "}
                    {quantity} left
                  </span>
                </>
              ) : (
                  <>
                    <Icon name="dollar sign" />
                    <span>
                      {price}
                      {" | "}Out of Stock
                  </span>
                  </>
                )}
            </Card.Content>
            <Card.Content>
              <Button onClick={subtractQuantity} style={{ backgroundColor: "white", border: "1px solid lightgrey", marginRight: "10px" }}>
                &#8722;
              </Button>
              <span>{shopperQuantity}</span>{" "}
              <Button onClick={addQuantity} style={{ backgroundColor: "white", border: "1px solid lightgrey", marginLeft: "10px" }}>
                &#43;
              </Button>
              <Button value={id} onClick={addToCart} style={{ border: "1px solid grey", marginLeft: "65px" }}>Add to cart</Button>
            </Card.Content>
          </Card>
        );
      })}
    </>
  );
}
