import React from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";

const Home = ({ products, isAdmin }) => {
  // console.log("products", products);
  return (
    <div className="app">
      <PageHeader isAdmin={isAdmin} />
      <DisplayAllProducts products={products} />
    </div>
  );
};
export default Home;
