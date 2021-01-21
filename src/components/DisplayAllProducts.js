
import React from "react";
import ProductCard from "./ProductCard";

export default function DisplayAllProducts({ products, role, isAdmin, setProducts }) {
  return (
    <div className="productSection">
      
      <ProductCard products={products} role={role} isAdmin={isAdmin} setProducts={setProducts} />
    </div>
  );
}
