import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal() {
    const [open, setOpen] = useState(false)

    return (
        <Modal size='tiny'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Sign In</Button>}
        >
            <Modal.Header>Sign In</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
          </p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Nope
        </Button>
                <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default ModalExampleModal