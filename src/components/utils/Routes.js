// import all components here
// Routes exported to
import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Registration from "../Registration";
import Nav from "../Nav";
import Modal from "../Modal";
import ProductCard from "../ProductCard";

const Routes = (props) => {
  console.log("router props", props);
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Modal />
      </Route>
      <Route path="/register">
        <Registration />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/login">
        <Modal />
      </Route>
      {/* getProductById */}
      <Route
        path="/products/:productId"
        render={(props) => <ProductbyId {...props} />}
      ></Route>
      <Route
        path="/view/:postId"
        render={(props) => <Outgoing {...props} />}
      ></Route>
    </>
  );
};

export default Routes;
