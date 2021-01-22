import React, { useState, useEffect } from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";

const Home = ({ products, isAdmin }) => {

  return (
    <div className="app">
      <PageHeader isAdmin={isAdmin}
      />
      <DisplayAllProducts
        products={products}
      />

    </div>
  );
};
export default Home;