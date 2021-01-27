import React, { useState } from 'react'
import { Button, Input, Form, Label } from "semantic-ui-react";
import { updateUser } from '../api'
import { validate } from 'react-email-validator'
import PageHeader from "./PageHeader";


const EditUser = ({ userInfo }) => {
    const {
        id,
        username,
        email
    } = userInfo

    // console.log("userInfo in EditUser", userInfo)

    const [newUsername, setNewusername] = useState(username)
    const [newEmail, setNewEmail] = useState(email)
    const [newPassword, setNewPassword] = useState("")
    // const [newPasswordConfirm, setNewPasswordConfirm] = useState("")
    // const [passwordErrorMsg, setPasswordErrorMsg] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState(false)


    const newUserInfo = {
        username: newUsername,
        email: newEmail,
        password: newPassword
    }




    const handleUserUpdate = async () => {
        console.log("email", validate(newEmail))

        if (validate(newEmail)) {
            console.log("email is good")
            setEmailErrorMsg(false)
            await updateUser(newUsername, newEmail, newPassword, id)
                .then((response) => {
                    console.log("updated user info from database", response)

                    localStorage.setItem("user", JSON.stringify(response.user));
                    // update userInfo information so that fields update when you 
                }).catch((error) => {
                    console.log("error in update user workflow:", error);
                });
            setNewPassword("")
        } else {
            console.log("email is bad")
            setEmailErrorMsg(true)
        }


        // if (newPassword === newPasswordConfirm) {
        //     console.log("passwords match")
        // all good, send to db



        // reset forms & UI

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
            {/* <PageHeader /> */}
            <h2>Edit User Info</h2>
            <Form className="myUserInfo">

                <Input
                    style={{ marginBottom: "7px", width: "250px" }}
                    // label="username"
                    name="username"
                    value={newUsername}
                    onChange={(event) => { setNewusername(event.target.value) }}
                    placeholder={newUsername}
                >
                </Input>
                <Input

                    style={{ marginBottom: "7px", width: "250px" }}
                    // label="email"
                    type="email"
                    name="email"
                    value={newEmail}
                    onChange={(event) => { setNewEmail(event.target.value) }}
                    placeholder={newEmail}

                >


                </Input>
                {emailErrorMsg ?
                    <Label basic color='red' pointing style={{ marginBottom: "7px" }}>
                        Please enter a valid email address
                  </Label>
                    : ""}

                <Input
                    style={{ marginBottom: "7px", width: "250px" }}
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

export default EditUser

