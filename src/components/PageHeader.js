import React from "react";
import { Header } from "semantic-ui-react";
import Nav from "./Nav";

const PageHeader = ({ isAdmin, setProducts, products }) => {
  return (
    <>
      <Header className="header">
        <h1>Kid Art 4 U</h1>
        <Nav isAdmin={isAdmin} setProducts={setProducts} products={products} />
      </Header>
    </>
  );
};

export default PageHeader;
