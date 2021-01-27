import React, { useState } from "react";
import { Button, /*Image,*/ Modal, Divider, Menu } from "semantic-ui-react";
import LogIn from "./LogIn";
import Register from "./Register";

function NewModal(
  {
    /* setToken, */
    /*  setRole  */
  }
) {
  const [open, setOpen] = useState(false);



  return (
    <Modal
      size="large"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      // trigger={<Button>Sign In</Button>}
      trigger={<Menu.Item>Sign </Menu.Item>}
    >
      <Modal.Header>Please sign in or register</Modal.Header>
      <Modal.Content /*image*/>
        {/* <Image size='medium' src='https://images.unsplash.com/photo-1560421683-6856ea585c78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGtpZHMlMjBhcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' wrapped /> */}
        <Modal.Description className="signInModal">
          <LogIn
            setOpen={setOpen} /* setRole={setRole} */
          /* setToken={setToken} */
          />
          <Divider horizontal>Or</Divider>
          <Register
            setOpen={setOpen} /* setRole={setRole} */
          /* setToken={setToken} */
          />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default NewModal;
