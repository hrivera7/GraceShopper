import React from "react";
import UserCards from './UserCards'
import PageHeader from './PageHeader'


export default function DisplayAllUsers({setToken, setRole, token, role, setUsers, users}) {


  return (
    <div className='userCardSection'>   
    <PageHeader setToken={setToken} setRole={setRole} token={token} role={role}/>
    <UserCards users={users} setUsers={setUsers} />
    </div>
  );
}