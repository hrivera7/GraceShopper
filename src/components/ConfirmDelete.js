import React, {useState} from 'react'
import {Button, Confirm, Icon} from 'semantic-ui-react'
import {deleteUser, getUsers} from '../api'

export default function ConfirmDelete({id, username, setUsers}) {
   const [open, setOpen] = useState(false)

    const  show = () => setOpen( true )
//const handleConfirm = () => setOpen(false )
    const handleCancel = () => setOpen(false )


  return (
    <div>
      <Button onClick={show} color='red' ><Icon name='trash' id='trashCanUser' /></Button>
      <Confirm
        open={open}
        content={`Are you sure you want to delete ${username}?`}
        cancelButton='Never mind'
        confirmButton="Let's do it"
        onCancel={handleCancel}
        onConfirm={async () => {
          await deleteUser(id) 
          const {allUsers} = await getUsers()
          console.log('this is the newUserList: ', allUsers)
          setUsers(allUsers)
          setOpen(false)
        }}
      />
    </div>
      
    )
}
