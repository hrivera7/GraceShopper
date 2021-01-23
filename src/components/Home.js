import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";

const Home = ({products, isAdmin, setProducts}) => {
 
  // console.log("products", products);
  //console.log("set role", setRole);
  return (
    <div className="app">
      <PageHeader isAdmin={isAdmin} products={products} setProducts={setProducts}/* setRole={setRole} */ /* role={role} */
      /* setToken={setToken} */
      /* token={token} */
      />
      <DisplayAllProducts
        products={ products}  isAdmin={isAdmin} setProducts={setProducts}/*  setProductCount={setProductCount} productCount={productCount}  */
      />
      {/* return only needs to display Routes 
       it contains all components with respective paths */}
    </div>
  );
};
export default Home;