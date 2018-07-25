import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='assets/users-solid.svg' alt='logo' />
                    React Events
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button floated='right' positive inverted content='Create Event' color='teal' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Signout' style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
      </div>
    )
  }
}

export default NavBar