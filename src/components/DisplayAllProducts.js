import React from "react";
import ProductCard from "./ProductCard";

export default function DisplayAllProducts({ products }) {
  return (
    <div className="productSection">
      <ProductCard products={products} />
    </div>
  );
}
