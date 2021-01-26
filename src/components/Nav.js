import React from "react";
import { Menu, Button } from "semantic-ui-react";
import NewModal from "./NewModal";

import { Link, useHistory } from "react-router-dom";
import AddProductModal from "./AddProductModal";


const Nav = (
  { isAdmin, setProducts, products
    /*  setToken,   setRole,  token,  role */
  }
) => {
  const history = useHistory();



  const handleSignOut = async () => {
    await localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify({ role: "user" }));
    history.push("/");
    window.location.reload(false);
  };


  return (
    <Menu secondary>
      <Menu.Item
        as={Link}
        to="/"
        name="home"

      />
      {isAdmin ? <>
        <Menu.Item
          as={Link}
          to="/users"
          name="Display Users"

        />
        <Menu.Item>
          <AddProductModal setProducts={setProducts} products={products} />
        </Menu.Item> </> : (
          ""
        )}
      {localStorage.getItem("token") ? (
        <>
          <Menu.Item
            as={Link}
            to="/userinfo"
            name="my account"
          />
          <Menu.Item
            onClick={handleSignOut}
            name="sign out"
          />
        </>
      ) : (
          <>
            <Menu.Item>
              <NewModal />
            </Menu.Item>
          </>
        )}

      <Menu.Item
        as={Link}
        to="/cart"
        name="cart"
      />


    </Menu>
  );
};

export default Nav;
