import React, { useState } from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import theGathering from "../theGathering.jpg";
import EditProductModal from "./EditProductModal";

//returns product card
export default function ProductCard({ products, role }) {

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
        let count = 1;

        const [open, setOpen] = useState(false)
        const [showText, setShowText] = useState(true);
        let truncatedDesc = showText ? description.slice(0, 50) : description;

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
                  <Icon name="money bill alternate outline" />
                  <span>
                    {price}
                    {" | "}
                    {quantity} left
                  </span>
                </>
              ) : (
                <>
                  <Icon name="money bill alternate outline" />
                  <span>
                    {price}
                    {" | "}Out of Stock
                  </span>
                </>
              )}
              {role === 'admin' ? <EditProductModal id={id} /> : ''}
            </Card.Content>
            <Card.Content>
              <Button basic color="red">
                &#8722;
              </Button>
              <span>{count}</span>{" "}
              <Button basic color="green" onClick={() => {}}>
                &#43;
              </Button>
              <Button>Add to cart</Button>
            </Card.Content>
          </Card>
        );
      })}
    </>
  );
}
