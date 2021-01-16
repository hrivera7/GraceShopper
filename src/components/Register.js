import React, { useState } from "react";
import { Button, Input, Form } from "semantic-ui-react";
import { createUser } from "../api";

const Register = ({ setOpen, setToken, setRole }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const register = async () => {
    event.preventDefault();
    await createUser(
      credentials.username,
      credentials.email,
      "user",
      credentials.password
    )
      .then((response) => {
        console.log("response from createUser", response);
        localStorage.setItem("token", response.token);
        setToken(response.token);
        setRole(response.user.role);
        setOpen(false);
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
      <Form className="register">
        <h2>Register</h2>

        <Input
          style={{ width: "50%" }}
          name="email"
          value={credentials.email}
          onChange={handleChanges}
          placeholder="email"
        />
        <br></br>

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
          autoComplete="new-password"
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
          onClick={register}
        ></Button>
      </Form>
    </>
  );
};

export default Register;
