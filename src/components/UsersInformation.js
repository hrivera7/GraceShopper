import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import {Table, Checkbox} from 'semantic-ui-react'


export default function UsersInformation({id, username, email, role, setUsers}) {
  const [promote, setPromote] = useState(true);


  return (
    <Table.Row key={id}>
      <Table.Cell>{username}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>
        {role === "admin" ? (
          <span>Administrator</span>
        ) : (
          <Checkbox
            label="promote"
            onClick={() => {
              setPromote(!promote);
            }}
          />
        )}
      </Table.Cell>
      <Table.Cell>
        <ConfirmDelete id={id} username={username} setUsers={setUsers} />
      </Table.Cell>
    </Table.Row>
  );
}
