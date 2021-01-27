import React, { useState } from "react";
import { Button, Input, Form, Icon, Message } from "semantic-ui-react";
import { loginUser, loginGoogle } from "../api";


const LogIn = ({ setOpen }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  const login = async () => {
    event.preventDefault();
    await loginUser(credentials.username, credentials.password)
      .then((response) => {
        console.log('the error from logging in : ', response)
        if (response.message) {

          setLoginError(true);
        } else {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          //localStorage.setItem("cart", JSON.stringify([]));
          /* setToken(response.token); */
          /*  setRole(response.user.role); */
          console.log("userObject upon login:", response);
          setOpen(false);
          window.location.reload(false);
        }
        // window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  // const handleGoogleLogin = async () => {
  //   event.preventDefault();
  //   await loginGoogle()
  //     .then((response) => {
  //       console.log(response);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }




  return (
    <>
      <Form className="signIn">
        <h2>Log in</h2>


        {/* <Button onClick={handleGoogleLogin} color="orange">
          <Icon name="google" /> Continue with Google
        </Button> */}
        {/* <a href="/api/googlelogin">Click Me</a> */}

        <Input
          style={{ width: "50%" }}
          name="username"
          value={credentials.username}
          onChange={handleChanges}
          placeholder="username"
        />
        <br></br>
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


        <Button
          style={{ width: "50%" }}
          content="Submit"
          onClick={login}
        ></Button>
        {loginError ? (
          <Message negative size="mini" style={{ marginTop: "6px" }}>

            <p>Login failed: Incorrect username or password. Please try again.</p>
          </Message>
        ) : (
            ""
          )}

      </Form>
    </>
  );
};

export default LogIn;
