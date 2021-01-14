import React, {useState, useEffect} from 'react'
import {getUsers} from '../api'

export default function DisplayAllUsers() {

const [users, setUsers] = useState([])

useEffect(() => {
    getUsers()
    .then((response) => {
        console.log('this is the useEffect: ', response)
        setUsers(response)
    })
    .catch((error) => {
        setUsers(error.message)
    })
}, [])

    return (
        <>
       {users.map((user) => {
           console.log('this is user: ',  user)
           conso
       })}
       </>
    )
}
