import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import PromoteUser from './PromoteUser'
import { Table } from "semantic-ui-react";


export default function UsersInformation({
  id,
  username,
  email,
  role,
  setUsers,
}) {
  // const [promote, setPromote] = useState(true);

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
