// import all components here
import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import DisplayAllUsers from "../DisplayAllUsers";
import Cart from "../Cart";
import VisitorCart from "../VisitorCart";
/* import Register from "../Register";
import ProductCard from "../ProductCard";   */

const Routes = (props) => {
  console.log("router props", props);
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      {localStorage.getItem("token") ? (
        <Route path="/cart">
          <Cart />
        </Route>
      ) : (
        <Route path="/cart">
          <VisitorCart />
        </Route>
      )}

      {/* <Route path="/admin">
        <Admin />
      </Route> */}
      {/* <Route path="/orders">
        <Orders />
      </Route>{" "} */}
      <Route path="/users">
        <DisplayAllUsers />
      </Route>
      {/* <Route
        path="/products/:productId"
        render={(props) => <ProductbyId {...props} />}
      ></Route>  */}
    </>
  );
};

export default Routes;
