import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
// import PageHeader from "../components/PageHeader";

const Home = ({products, isAdmin, setProducts, filteredList}) => {
 
  console.log("Home products", products);
  return (
    <>
      {filteredList.length ?   
      <DisplayAllProducts
      products={filteredList}  isAdmin={isAdmin} setProducts={setProducts}/*  setProductCount={setProductCount} productCount={productCount}  */
      /> :
      <DisplayAllProducts
      products={products}  isAdmin={isAdmin} setProducts={setProducts}/*  setProductCount={setProductCount} productCount={productCount}  */
      /> }
     

    </>
  );
};
export default Home
