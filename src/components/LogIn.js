import React, { useState } from "react";
import { Button, Input, Form, Icon } from "semantic-ui-react";
import { loginUser } from "../api";

const LogIn = ({ setOpen /* setToken, */ /* setRole */ }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  const login = async () => {
    event.preventDefault();
    await loginUser(credentials.username, credentials.password)
      .then((response) => {
        console.log(response);
        if (response.message) {
          console.log("username or pw BADD");
          setLoginError(true);
        } else {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          //localStorage.setItem("cart", JSON.stringify([]));
          /* setToken(response.token); */
          /*  setRole(response.user.role); */
          setOpen(false);
        }
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Form className="signIn">
        <h2>Log in</h2>

        <Button color="facebook">
          <Icon name="facebook" /> Continue with Facebook
        </Button>
        <p>Or</p>
        <Input
          style={{ width: "50%" }}
          name="username"
          value={credentials.username}
          onChange={handleChanges}
          placeholder="username"
        />
        <br></br>
        {/* </Form> */}
        {/* <Form> */}
        <Input
          style={{ width: "50%" }}
          autoComplete="current-password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChanges}
          placeholder="password"
        />
        <br></br>
        {loginError ? (
          <div>
            Login failed: Incorrect username or password. Please try again.{" "}
          </div>
        ) : (
          ""
        )}
        {/* </Form> */}
        <Button
          style={{ width: "50%" }}
          content="Submit"
          onClick={login}
        ></Button>
        <p>Or</p>
      </Form>
    </>
  );
};

export default LogIn;
