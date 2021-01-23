import React, { useState } from 'react'
import { Button, Input, Form } from "semantic-ui-react";
import { updateUser } from '../api'
import { validate } from 'react-email-validator'


const UserPage = ({ userInfo }) => {
    const {
        id,
        username,
        email
    } = userInfo

    const [newUsername, setNewusername] = useState(username)
    const [newEmail, setNewEmail] = useState(email)
    const [newPassword, setNewPassword] = useState("")
    // const [newPasswordConfirm, setNewPasswordConfirm] = useState("")
    // const [passwordErrorMsg, setPasswordErrorMsg] = useState(false)
    // const [emailErrorMsg, setEmailErrorMsg] = useState(false)


    const newUserInfo = {
        username: newUsername,
        email: newEmail,
        password: newPassword
    }




    const handleUserUpdate = async () => {


        // if (validate(newEmail)) {
        //     console.log("email is good")
        //     setEmailErrorMsg(false)
        // } else {
        //     console.log("email is bad")
        //     setEmailErrorMsg(true)
        // }


        // if (newPassword === newPasswordConfirm) {
        //     console.log("passwords match")
        // all good, send to db

        await updateUser(newUsername, newEmail, newPassword, id)
            .then((response) => {
                console.log("updated user info from database", response)
                // update local storage user info
            }).catch((error) => {
                console.log("error in update user workflow:", error);
            });

        // reset forms & UI
        setNewPassword("")
        // setNewPasswordConfirm("")


        // setPasswordErrorMsg(false)

        console.log("New user object:", newUserInfo)

    }
    // else {
    //     console.log("please check to ensure your passwords match")
    //     setPasswordErrorMsg(true)
    // }


    // }

    return (
        <>
            <h2>Edit User Info</h2>
            <Form>
                <Input
                    style={{ width: "50%" }}
                    name="username"
                    value={newUsername}
                    onChange={(event) => { setNewusername(event.target.value) }}
                    placeholder={newUsername}
                >
                </Input>
                <Input error

                    style={{ width: "50%" }}
                    type="email"
                    name="email"
                    value={newEmail}
                    onChange={(event) => { setNewEmail(event.target.value) }}
                    placeholder={newEmail}

                >


                </Input>
                {/* {emailErrorMsg ?
                    <div>Please enter a valid email address</div>
                    : ""} */}

                <Input
                    style={{ width: "50%" }}
                    name="new password"
                    type="password"
                    value={newPassword}
                    onChange={(event) => { setNewPassword(event.target.value) }}
                    placeholder="new password">

                </Input>
                {/* <Input
                    style={{ width: "50%" }}
                    name="confirm new password"
                    type="password"
                    value={newPasswordConfirm}
                    onChange={(event) => { setNewPasswordConfirm(event.target.value) }}
                    placeholder="confirm new password">

                </Input>
                {passwordErrorMsg ? <div>Please double-check your password entry to ensure they match</div> : ""} */}
            </Form>
            <Button onClick={handleUserUpdate}>Submit</Button>


        </>
    )



}

export default UserPage

