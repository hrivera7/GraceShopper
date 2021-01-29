import React from 'react'
import { Tab } from 'semantic-ui-react'
import EditUser from './EditUser'
// import PageHeader from './PageHeader'



const UserPage = ({ userInfo, setUserInfo }) => {
    console.log("userInfo in UserPage", userInfo)
    const panes = [
        {
            menuItem: 'My Info',
            render: () => <Tab.Pane /*attached={false}*/>{<EditUser userInfo={userInfo} setUserInfo={setUserInfo} />}</Tab.Pane>,
        },
        {
            menuItem: 'My Orders',
            render: () => <Tab.Pane /*attached={false}*/>Tab 2 Content</Tab.Pane>,
        },

    ]
    return (
        <>
            {/* <PageHeader /> */}
            <Tab className="myAccount" /*menu={{ secondary: true }}*/ panes={panes} />
            {/* <EditUser userInfo={userInfo} /> */}
        </>
    )
}

export default UserPage