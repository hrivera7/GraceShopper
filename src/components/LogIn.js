
import React, { useState } from 'react'
import { Button, Input, Form, Icon } from 'semantic-ui-react'
import { loginUser } from "../api"





const LogIn = ({ setOpen, setToken, setRole }) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });



    const login = async () => {
        event.preventDefault();
        await loginUser(credentials.username, credentials.password)
            .then((response) => {
                console.log(response);
                localStorage.setItem("token", response.token);
                setToken(response.token)
                setRole(response.user.role)
                setOpen(false)
            })
            .catch((error) => {
                setOpen(true)
                console.log(error);
            });
    };

    const handleChanges = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <h2>Log in</h2>
            <Button color='facebook'>
                <Icon name='facebook' /> Facebook
    </Button>
            <Form>
                <Input
                    name="username"
                    value={credentials.username}
                    onChange={handleChanges}
                    placeholder="username"
                /><br></br>
            </Form>
            <Form>
                <Input
                    autoComplete="current-password"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChanges}
                    placeholder="password"
                /><br></br>
            </Form>
            <Button content="Submit" onClick={login}></Button>

        </>
    )

}

export default LogIn