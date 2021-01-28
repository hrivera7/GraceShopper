import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
//import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";

const Home = ({ products, isAdmin, setProducts }) => {
  // console.log("products", products);
  return (
    <div className="app">
      {/* <PageHeader
        isAdmin={isAdmin}
        products={products}
        setProducts={setProducts}
      /> */}
      <DisplayAllProducts
        products={products}
        isAdmin={isAdmin}
        setProducts={setProducts}
      />

      <PageFooter />
    </div>
  );
};

export default Home;
