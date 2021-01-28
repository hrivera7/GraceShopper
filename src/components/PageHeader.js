import React from "react";
import { Header, Image } from "semantic-ui-react";
import Nav from "./Nav";

const PageHeader = ({ isAdmin, setProducts, products }) => (
  <div>
    <Header className="header-nav">
      <h1>Kid Art 4 U</h1>
      <Nav isAdmin={isAdmin} setProducts={setProducts} products={products} />
    </Header>
  </div>
);

export default PageHeader;
