import React, { useState } from "react";
import { Button, Input, Form, Icon, Message } from "semantic-ui-react";
import { loginUser, sendGoogleData, loginGoogle } from "../api";
// Google button
import GoogleLogin from "react-google-login";

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
        console.log("the error from logging in : ", response);
        if (response.message) {
          console.log(response);

          setLoginError(true);
        } else {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          console.log("userObject upon login:", response);
          setOpen(false);
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  // sends token that we get from login success
  // googleData is obj with token in it
  const handleLogin = async (googleData) => {
    console.log("google data", googleData);
    await sendGoogleData(googleData)
      .then((res) => {
        console.log("response", res);
        localStorage.setItem("token", res.token);

        //add info to my account fields...
        //
        if (res.user) {
          localStorage.setItem("user", JSON.stringify(res.user));
        } else {
          localStorage.setItem("user", JSON.stringify(res.user));
        }
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload(false);
  };

  return (
    <>
      <Form className="signIn">
        <h2>Log in</h2>
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
            <p>
              Login failed: Incorrect username or password. Please try again.
            </p>
          </Message>
        ) : (
          ""
        )}
      </Form>
      {/* Google button */}
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENTID}
        buttonText="login with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default LogIn;
