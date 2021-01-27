

import React, { useState, useEffect } from "react";
import { getUsers } from "../api";
import UserCards from "./UserCards";
import PageHeader from "./PageHeader";

export default function DisplayAllUsers({products, isAdmin, setProducts}) {
  const [users, setUsers] = useState([]);

  // do not need local storage here
  // auth is handled once user signs in
  // once admin logs in; keys to the castle
  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.allUsers);
      })
      .catch((error) => {
        setUsers(error.message);
      });
  }, []);


  return (
    <div className="userCardSection">
      <PageHeader isAdmin={isAdmin} products={products} setProducts={setProducts}/* setToken={setToken} setRole={setRole} token={token} role={role} */
      />
      <UserCards users={users} setUsers={setUsers} />
    </div>
  );
}
