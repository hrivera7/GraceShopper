import React, {useState} from "react";
import DisplayAllProducts from "./DisplayAllProducts";
import PageHeader from "../components/PageHeader";

const Home = ({products, isAdmin, setProducts}) => {
  const [filteredList, setFilteredList] = useState([])
  console.log("Home products", products);
  return (
    <div className="app">
      <PageHeader filteredList={filteredList} setFilteredList={setFilteredList} isAdmin={isAdmin} products={products} setProducts={setProducts}/* setRole={setRole} */ /* role={role} */
      /* setToken={setToken} */
      /* token={token} */
      />
      {filteredList.length ?   
      <DisplayAllProducts
      products={filteredList}  isAdmin={isAdmin} setProducts={setProducts}/*  setProductCount={setProductCount} productCount={productCount}  */
      /> :
      <DisplayAllProducts
      products={products}  isAdmin={isAdmin} setProducts={setProducts}/*  setProductCount={setProductCount} productCount={productCount}  */
      /> }
     
      {/* return only needs to display Routes 
       it contains all components with respective paths */}
    </div>
  );
};
export default Home;
