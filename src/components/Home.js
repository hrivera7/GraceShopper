import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";

const Home = ({products, isAdmin}) => {
 
  // console.log("products", products);
  //console.log("set role", setRole);
  return (
    <div className="app">
      <PageHeader isAdmin={isAdmin}/* setRole={setRole} */ /* role={role} */
      /* setToken={setToken} */
      /* token={token} */
      />
      <DisplayAllProducts
        products={
          products
        } /*  setProductCount={setProductCount} productCount={productCount}  */
      />
      {/* return only needs to display Routes 
       it contains all components with respective paths */}
    </div>
  );
};
export default Home;