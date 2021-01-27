

import React, { useState, useEffect } from "react";
import { getUsers } from "../api";
import UserCards from "./UserCards";
import PageHeader from "./PageHeader";

<<<<<<< HEAD
export default function DisplayAllUsers({products, isAdmin, setProducts}) {
=======
export default function DisplayAllUsers({ setToken, setRole, token, role }) {
>>>>>>> master
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
<<<<<<< HEAD
    <div className="userCardSection">
      <PageHeader isAdmin={isAdmin} products={products} setProducts={setProducts}/* setToken={setToken} setRole={setRole} token={token} role={role} */
      />
      <UserCards users={users} setUsers={setUsers} />
    </div>
=======
    <>
      <div className="userCardSection">
        <UserCards users={users} setUsers={setUsers} />
      </div>
    </>
>>>>>>> master
  );
}
