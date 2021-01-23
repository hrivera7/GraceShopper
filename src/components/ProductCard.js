

import React from "react";
import { Card, Icon, Button, Popup } from "semantic-ui-react";
import theGathering from "../theGathering.jpg";
import EditProductModal from "./EditProductModal";
import ConfirmDeleteProduct from "./ConfirmDeleteProduct"

//returns product card

import { addToCart } from "../api";


//returns product card
export default function ProductCard({ products, isAdmin, setProducts }) {
  // add products to db cart
  const addToDbCart = (userId, productId) => {
    console.log("adding to db");
    addToCart(userId, [productId]);
  };

  const addToLocalCart = (product) => {
    console.log("cart working", product);
    console.log("product count", product.count);
    const oldProducts = JSON.parse(localStorage.getItem("cart"));
    console.log("old products", oldProducts);
    const newProducts = [];
    if (oldProducts.length > 0) {
      for (let i = 0; i < oldProducts.length; i++) {
        console.log("inside for loop", oldProducts[i]);
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
    console.log("new products", newProducts);
  };

  console.log("products", products);

 



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

          // const [count, setCount] = useState(1);
          // product.count = count;
          // const [showText, setShowText] = useState(true);
          // let truncatedDesc = showText ? description.slice(0, 50) : description;


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
            <Card raised style={{ width: "25rem" }} key={id} >
              <Popup inverted content={description} trigger={<img src={theGathering} style={{ height: "20rem" }} />} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  <span>{department}</span>
                </Card.Meta>
                <Card.Description>
                  {/* {truncatedDesc.length < 50 ? (
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
                  )} */}
                </Card.Description>
              </Card.Content>
                                          
              {isAdmin ?  <div className='admin-edit-delete'> <EditProductModal id={id} name={name} products={products} setProducts={setProducts} inStock={inStock}/><ConfirmDeleteProduct  id={id} name={name} setProducts={setProducts}/> </div>: ''}
             
              <Card.Content className='product-price-cart'>
              <Icon name="dollar" >{price}</Icon>
                {localStorage.getItem("token") ? (
                  <Button
                    onClick={() =>
                      addToDbCart(
                        JSON.parse(localStorage.getItem("user")).id,
                        id
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                  
                ) : (
                  <Button onClick={() => addToLocalCart(product)}>
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
