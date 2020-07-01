import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function SettingsNav() {
    return (
         <>
           <Menu vertical>
             <Header icon="user" attached inverted color="grey" content="Profile" />
             <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
             <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
             <Menu.Item as={NavLink} to='/settings/photos'>My Photos</Menu.Item>
           </Menu>

           <Menu vertical>
             <Header
               icon="settings"
               attached
               inverted
               color="grey"
               content="Account"
             />
             <Menu.Item as={NavLink} to='/settings/Account'>My Account</Menu.Item>
           </Menu>
         </>
    )
}

export default SettingsNav