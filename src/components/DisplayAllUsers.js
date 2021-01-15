import React, {useState, useEffect} from 'react'
import {getUsers} from '../api'

export default function DisplayAllUsers() {

const [users, setUsers] = useState([])



    return (
        <>
     <button onClick={async () => {
         const theUsers = await getUsers()
         console.log('the users are : ', theUsers)
         setUsers(theUsers)
         console.log(users)
     }}>displayAllUsers</button>
       </>
    )
}
