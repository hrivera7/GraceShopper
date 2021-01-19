import React from "react";
import ProductCard from "./ProductCard";

export default function DisplayAllProducts({ products, role }) {
  return (
    <div className="productSection">
      <ProductCard products={products} role={role} />
    </div>
  );
}
