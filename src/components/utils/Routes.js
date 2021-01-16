// import all components here
import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import NewModal from "../Modal";
/* import Register from "../Register";
import Cart from "../Cart";
import ProductCard from "../ProductCard";  */

const Routes = (props) => {
  console.log("router props", props);
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/cart">
        <Cart/>
      </Route>
      <Route path="/register">
        <Register />
      </Route> */}
      <Route path="/login">
        <NewModal />
      </Route>
      {/* <Route
        path="/products/:productId"
        render={(props) => <ProductbyId {...props} />}
      ></Route>  */}
    </>
  );
};

export default Routes;
