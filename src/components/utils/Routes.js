// import all components here
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import DisplayAllUsers from "../DisplayAllUsers";
import Cart from "../Cart";
import VisitorCart from "../VisitorCart";
import { getProducts, getUsers } from "../../api";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import UserOrder from "../UserOrder"


const Routes = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState([]);
  // const [token, setToken] = useState("");
  //const [role, setRole] = useState("");
  console.log("local storage", localStorage.getItem("token"));
  //const [productCount, setProductCount] = useState(0) consider storing productCount in App.js so the cart can access

  const StripePromise = loadStripe(process.env.REACT_APP_STRIPEKEY);
  console.log("key", process.env.REACT_APP_STRIPEKEY);

  useEffect(() => {
    getProducts()
      .then((response) => {
        // console.log("response", response);
        setProducts(response.allProducts);
      })
      .catch((error) => {
        setProducts(error.message);
      });
      getUsers()
      .then((response) => {
        console.log("the useEffect: ", response)
        setUsers(response.allUsers)
      })
      .catch((error) => {
        setUsers(error.message)
      })
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    
    // if(!JSON.parse(localStorage.getItem('user'))) {
    //   localStorage.setItem('user', JSON.stringify({role: "user"}))
    // } else {
    //   JSON.parse(localStorage.getItem('user')).role === 'admin' ? setIsAdmin(true) : setIsAdmin(false)     
    if (JSON.parse(localStorage.getItem("user")).id) {
      JSON.parse(localStorage.getItem("user")).role === "admin"
        ? setIsAdmin(true)
        : setIsAdmin(false);
    }
    
  /*   if(JSON.parse(localStorage.getItem('user')).id) {
      JSON.parse(localStorage.getItem('user')).role === 'admin' ? setIsAdmin(true) : setIsAdmin(false)
    } else {
      localStorage.setItem('role', JSON.stringify({role: "user"}))
    } */
  }, []);
  return (
    <>
      <Route exact path="/">
        <Home products={products} isAdmin={isAdmin} setProducts={setProducts}/>
      </Route>
      {localStorage.getItem("token") ? (
        <Route path="/cart">
          <Elements stripe={StripePromise}>
            <Cart />
          </Elements>
        </Route>
      ) : (
        <Route path="/cart">
          <Elements stripe={StripePromise}>
            <VisitorCart />
          </Elements>
        </Route>
      )}

      {/* <Route path="/admin">
        <Admin />
      </Route> */}
      <Route path="/user/orders">
        <UserOrder />
      </Route>{" "}
      <Route path="/users">
        <DisplayAllUsers users={users} setUsers={setUsers}/>
      </Route>
      {/* <Route
        path="/products/:productId"
        render={(props) => <ProductbyId {...props} />}
      ></Route>  */}
    </>
  );
};

export default Routes;
