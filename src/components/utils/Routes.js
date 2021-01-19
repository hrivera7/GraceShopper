// import all components here
import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import DisplayAllUsers from "../DisplayAllUsers";
import Cart from "../Cart";
import VisitorCart from "../VisitorCart";
import {getProducts} from "../../api";
/* import Register from "../Register";
import ProductCard from "../ProductCard";   */

const Routes = (props) => {
  console.log("router props", props);
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)
  // const [token, setToken] = useState("");
  //const [role, setRole] = useState("");
  console.log("local storage", localStorage.getItem("token"));
  //const [productCount, setProductCount] = useState(0) consider storing productCount in App.js so the cart can access
  useEffect(() => {
    getProducts()
      .then((response) => {
        // console.log("response", response);
        setProducts(response.allProducts);
      })
      .catch((error) => {
        setProducts(error.message);
      });
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    if(JSON.parse(localStorage.getItem('user')).id) {
      JSON.parse(localStorage.getItem('user')).role === 'admin' ? setIsAdmin(true) : setIsAdmin(false)
    }
  }, []);
  return (
    <>
      <Route exact path="/">
        <Home products={products} isAdmin={isAdmin}/>
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

