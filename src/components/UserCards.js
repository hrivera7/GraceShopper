import React, {useState} from "react";
import { Checkbox, Table } from "semantic-ui-react";
import ConfirmDelete from './ConfirmDelete'

export default function UserCards({ users, setUsers }) {
 

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Promote</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
          {users.map((user) =>{
               const {id, username, email, role} = user
               const [promote, setPromote] = useState(true)
             //  <Checkbox label='promote' disabled checked={true}></Checkbox>
              return (
                <Table.Row key={id}>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>{role === 'admin' ? <span>Administrator</span> : <Checkbox label='promote'  onClick={()=> {
                    setPromote(!promote)
                   
                    }} />}</Table.Cell>
                <Table.Cell><ConfirmDelete id={id} username={username} setUsers={setUsers}/></Table.Cell>
              </Table.Row>
              )
          })}
       
      </Table.Body>
    </Table>
  );
}
