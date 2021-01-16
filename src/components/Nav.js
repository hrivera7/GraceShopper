import React from "react";
import { Menu } from "semantic-ui-react";
import NewModal from "./NewModal";
import { Link } from "react-router-dom";

const Nav = ({ setToken, setRole, token }) => {
  const handleSignOut = () => {
    setToken(false);
    setRole("");
    localStorage.removeItem("token");
  };

  return (
    <Menu secondary>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        // active={navItem === 'home'}
        value="home"
        onClick={() => {
          alert("You clicked home!");
        }}
      />
      {token ? (
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
            <NewModal setToken={setToken} setRole={setRole} />
          </Menu.Item>
        </>
      )}

      <Menu.Item
        as={Link}
        to="/cart"
        name="cart"
        // active={navItem === 'cart'}
        value={"cart"}
        onClick={() => {
          alert("You clicked the cart!");
        }}
      />
    </Menu>
  );
};

<<<<<<< HEAD

    return (
        <Menu secondary>
            <Menu.Item
                name='home'
                // active={navItem === 'home'}
                value="home"
                onClick={() => { alert("You clicked home!") }}
            />
            {token ?
                <>
                    <Menu.Item
                        name='orders'
                        // active={navItem === 'orders'}
                        value={"orders"}
                        onClick={() => { alert("You clicked orders!") }}
                    />   <Menu.Item
                        name='sign out'
                        // active={navItem === 'sign out'}
                        value={"sign out"}
                        onClick={handleSignOut}
                    /> 
                     <Menu.Item
                        name='Display Users'
                        active={navItem === 'Display Users'}
                        value={"Display Users"}
                        onClick={() => { alert("You clicked display Users!") }}
                    />
                    
                    </> :
                <>
                    <Menu.Item >
                        <NewModal setToken={setToken} setRole={setRole} />
                    </Menu.Item>
                </>}

            <Menu.Item
                name='cart'
                // active={navItem === 'cart'}
                value={"cart"}
                onClick={() => { alert("You clicked the cart!") }}
            />

        </Menu>
    )
}

export default Nav
=======
export default Nav;
>>>>>>> master
