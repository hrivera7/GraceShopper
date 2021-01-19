import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
<<<<<<< HEAD
import PromoteUser from './PromoteUser'
import { Table } from "semantic-ui-react";


=======
import { Table, Checkbox } from "semantic-ui-react";

>>>>>>> master
export default function UsersInformation({
  id,
  username,
  email,
<<<<<<< HEAD
  role,
  setUsers,
}) {
  // const [promote, setPromote] = useState(true);
=======
  /* role, */ setUsers,
}) {
  const [promote, setPromote] = useState(true);
  const role = localStorage.getItem("user").role;
>>>>>>> master

  return (
    <Table.Row key={id}>
      <Table.Cell>{username}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>
        <PromoteUser id={id} role={role} setUsers={setUsers}/>
      </Table.Cell>
      <Table.Cell>
        <ConfirmDelete id={id} username={username} setUsers={setUsers} />
      </Table.Cell>
    </Table.Row>
  );
}
