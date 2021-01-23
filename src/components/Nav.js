import React from "react";
import { Menu } from "semantic-ui-react";
import NewModal from "./NewModal";
import { Link } from "react-router-dom";
import AddProductModal from "./AddProductModal";


const Nav = (
  { isAdmin, setProducts, products
    /*  setToken,   setRole,  token,  role */
  }
) => {
  const handleSignOut = async () => {
    /* setToken(false); */
    /* setRole(""); */
    await localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify({ role: "user" }));
    window.location.reload(false);
  };

  console.log("token", localStorage.getItem("token"));

  return (
    <Menu secondary>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        // active={navItem === 'home'}
        value="home"
      />
      { isAdmin ? <>
        <Menu.Item
          as={Link}
          to="/users"
          name="Display Users"
          
        />
       <Menu.Item>
        <AddProductModal setProducts={setProducts} products={products}/>
       </Menu.Item> </>: (
        ""
      )}  
      {localStorage.getItem("token") ? (
        <>
          <Menu.Item
            as={Link}
            to="/orders"
            name="orders"
            // active={navItem === 'orders'}
            value={"orders"}
            onClick={() => {
              alert("You clicked orders!");
            }}
          />{" "}
          <Menu.Item
            name="sign out"
            // active={navItem === 'sign out'}
            value={"sign out"}
            onClick={handleSignOut}
          />{" "}
        </>
      ) : (
        <>
          <Menu.Item>
            <NewModal /* setToken={setToken} */ /* setRole={setRole} */ />
          </Menu.Item>
        </>
      )}

      <Menu.Item
        as={Link}
        to="/cart"
        name="cart"
        //active={navItem === "cart"}
        value={"cart"}
      />
    </Menu>
  );
};

export default Nav;
