import React from 'react'
import { updateRole, getUsers } from "../api";
import { Dropdown } from "semantic-ui-react";

export default function PromoteUser({id, role, setUsers}) {

    return (
        <>
        {role === "admin" ? 
           <>
              <Dropdown text="Update" style={{ marginRight: "2.5rem" }}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="user"
                    onClick={async () => {
                    const updatedUserList = await updateRole(id);
                      console.log('this is updatedUsers: ', updatedUserList)
                      setUsers(updatedUserList);
                    }}
                  />
                </Dropdown.Menu>
              </Dropdown>{" "}
              <span>Current status: {role.toUpperCase()}</span>
            </>
           : 
            <>
             
              <Dropdown text="Update" style={{ marginRight: "2.5rem" }}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="administrator"
                    onClick={async () => {
                        const updatedUserList = await updateRole(id);
                        console.log('this is updatedUsers: ', updatedUserList)
                        setUsers(updatedUserList);
                    }}
                  />
                </Dropdown.Menu>
              </Dropdown>
              <span>Current status: {role.toUpperCase()}</span>
            </>
          }
          </>
    )
}
