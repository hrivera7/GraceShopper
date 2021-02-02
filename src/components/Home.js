import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
// import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
const Home = ({ products, isAdmin, setProducts, filteredList, setFilteredList }) => {

  return (
    <>
      {filteredList.length ?
        <DisplayAllProducts
          products={filteredList} isAdmin={isAdmin} setProducts={setProducts} setFilteredList={setFilteredList}/*  setProductCount={setProductCount} productCount={productCount}  */
        /> :
        <DisplayAllProducts
          products={products} isAdmin={isAdmin} setProducts={setProducts} setFilteredList={setFilteredList}/*  setProductCount={setProductCount} productCount={productCount}  */
        />}

      <PageFooter />
    </>
  );
};
export default Home
