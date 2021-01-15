import React, { useState } from 'react'
import { Button, /*Image,*/ Modal } from 'semantic-ui-react'
import LogIn from './LogIn'
import Register from './Register'

function NewModal({ setToken, setRole }) {
    const [open, setOpen] = useState(false)
    // const [credentials, setCredentials] = useState({
    //     username: "",
    //     password: "",
    // });

    // const login = async () => {
    //     event.preventDefault();
    //     await loginUser(credentials.username, credentials.password)
    //         .then((response) => {
    //             console.log(response);
    //             localStorage.setItem("token", response.token);
    //             setOpen(false)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // const handleChanges = (event) => {
    //     setCredentials({ ...credentials, [event.target.name]: event.target.value });
    // };


    return (
        <Modal size='tiny'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Sign In</Button>}
        >
            <Modal.Header>Please sign in or register</Modal.Header>
            <Modal.Content /*image*/>
                {/* <Image size='medium' src='https://images.unsplash.com/photo-1560421683-6856ea585c78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGtpZHMlMjBhcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' wrapped /> */}
                <Modal.Description>
                    <LogIn setOpen={setOpen} setToken={setToken} setRole={setRole} />

                    <Register />

                </Modal.Description>
            </Modal.Content>

        </Modal>
    )
}

export default NewModal