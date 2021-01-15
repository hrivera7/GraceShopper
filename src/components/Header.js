import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import Nav from '../components/Nav'

const PageHeader = ({ navItem, setNavItem, setSignIn, setUsers }) => (
    <div >
        {/* <Image className="headerImage" src={'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'} width='100%' height='100px' centered /> */}
        <Header className="header">

            <h1>Kid Art 4 U</h1>
            <Nav navItem={navItem} setNavItem={setNavItem} setSignIn={setSignIn} setUsers={setUsers} />

        </Header>
    </div>
)

export default PageHeader
