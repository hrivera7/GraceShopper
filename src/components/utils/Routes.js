// import all components here
import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import DisplayAllUsers from "../DisplayAllUsers";
<<<<<<< HEAD
import {getProducts} from '../../api'
/* import Register from "../Register";
=======
>>>>>>> master
import Cart from "../Cart";
import VisitorCart from "../VisitorCart";
/* import Register from "../Register";
import ProductCard from "../ProductCard";   */

const Routes = () => {

  const [products, setProducts] = useState([]);

  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  console.log("token in app from login", token);
  console.log("role in app from login", role);

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
  }, []);
  return (
    <>
      <Route exact path="/">
        <Home setToken={setToken} token={token} setRole={setRole} role={role} products={products}/>
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
        <DisplayAllUsers setToken={setToken} setRole={setRole} token={token} role={role}/>
      </Route>
      {/* <Route
        path="/products/:productId"
        render={(props) => <ProductbyId {...props} />}
      ></Route>  */}
    </>
  );
};

export default Routes;
