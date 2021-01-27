import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
// import PageHeader from "../components/PageHeader";

const Home = ({ products, isAdmin, setProducts }) => {


  return (
    // <div /*className="app"*/>
    <>
      {/* <PageHeader isAdmin={isAdmin} products={products} setProducts={setProducts}/> */}
      <DisplayAllProducts
        products={products} isAdmin={isAdmin} setProducts={setProducts}/*  setProductCount={setProductCount} productCount={productCount}  */
      />
      {/* return only needs to display Routes 
       it contains all components with respective paths */}
      {/* // </div> */}
    </>
  );
};
export default Home;
