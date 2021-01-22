import React, { useState } from 'react'
import { Button, Input, Form } from "semantic-ui-react";


const UserPage = (/* need UserId */) => {
    const dummyUser = { username: "fake username", email: 'www.testme.test' }
    const [newUsername, setNewusername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("")

    const newUserInfo = {
        username: newUsername,
        email: newEmail,
        password: newPassword
    }




    const handleUserUpdate = () => {

        if (newPassword && newPassword === newPasswordConfirm) {
            setNewusername(newUsername)
            setNewEmail(newEmail)
            setNewPassword(newPassword)
            setNewPasswordConfirm(newPasswordConfirm)

        }
        else if (!newPassword) {
            console.log("no password update")

            setNewusername(newUsername)
            setNewEmail(newEmail)

        } else {
            console.log("please check to ensure your passwords match")
        }

        // console.log("new username:", newUsername)
        // console.log("new email:", newEmail)
        // console.log("new password:", newPassword)
        // console.log("new password confirm:", newPasswordConfirm)
        console.log("New user object:", newUserInfo)


    }

    return (
        <>
            <h2>Edit User Info</h2>
            <Form>
                <Input
                    style={{ width: "50%" }}
                    name="email"
                    value={newUsername}
                    onChange={(event) => { setNewusername(event.target.value) }}
                    placeholder={dummyUser.username}
                >
                </Input>
                <Input
                    style={{ width: "50%" }}
                    name="email"
                    value={newEmail}
                    onChange={(event) => { setNewEmail(event.target.value) }}
                    placeholder={dummyUser.email}
                >
                </Input>
                <Input
                    style={{ width: "50%" }}
                    name="new password"
                    type="password"
                    value={newPassword}
                    onChange={(event) => { setNewPassword(event.target.value) }}
                    placeholder="new password">

                </Input>
                <Input
                    style={{ width: "50%" }}
                    name="confirm new password"
                    type="password"
                    value={newPasswordConfirm}
                    onChange={(event) => { setNewPasswordConfirm(event.target.value) }}
                    placeholder="confirm new password">

                </Input>
            </Form>
            <Button onClick={handleUserUpdate}>Submit</Button>

        </>
    )



}

export default UserPage

