import React, { useState, useEffect } from "react";
import { getUsers } from "../api";
import UserCards from './UserCards'

export default function DisplayAllUsers() {
  const [users, setUsers] = useState([]);


  // do not need local storage here
  // auth is handled once user signs in
  // once admin logs in; keys to the castle
  useEffect(() => {
    getUsers()
      .then((response) => {
        //console.log("this is the useEffect: ", response);
        setUsers(response.allUsers);
      })
      .catch((error) => {
        setUsers(error.message);
      });
  }, []);

  return (
    <div className='userCardSection'>    
   <UserCards users={users} setUsers={setUsers} />
    </div>
  );
}