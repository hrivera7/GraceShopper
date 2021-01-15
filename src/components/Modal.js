import React, { useState } from "react";
// import function needed from api
import { loginUser } from "../api";

const Modal = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // can also be used for registration (same)
  // here we handle authentication; also in registration component
  const login = async () => {
    event.preventDefault();
    await loginUser(credentials.username, credentials.password)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
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
      <div>
        <h1> Sign in Here:</h1>
        <form onSubmit={login}>
          <input
            name="username"
            value={credentials.username}
            onChange={handleChanges}
            placeholder="username"
          />
          <input
            name="password"
            value={credentials.password}
            onChange={handleChanges}
            placeholder="password"
          />
          <button onClick={login}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
