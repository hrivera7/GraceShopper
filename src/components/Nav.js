import React, {useState} from "react";
import { Menu } from "semantic-ui-react";
import NewModal from "./NewModal";
import FilterProducts from './FilterProducts'
import { Link, useHistory  } from "react-router-dom";
import AddProductModal from "./AddProductModal";


const Nav = (
  { isAdmin, setProducts, products, filteredList, setFilteredList
    /*  setToken,   setRole,  token,  role */
  }
) => {
  const history = useHistory();

//++++++++++++++


/* let categoryList
{filteredList.length ? categoryList = filteredList.map(product => product.department) :  categoryList = products.map(product => product.department); */
let categoryList = products.map(product => product.department);
let departmentList = Array.from(new Set(categoryList))
//++++++++++++++

  const handleSignOut = async () => {
    await localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify({ role: "user" }));
    history.push("/");
    window.location.reload(false);
  };

console.log('Nav products: ', products)
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
      <FilterProducts products={products} list={departmentList} setFilteredList={setFilteredList} setProducts={setProducts}/> 
    </Menu>
  );
};

export default Nav;
