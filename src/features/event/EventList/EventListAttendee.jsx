import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' circular src='https://randomuser.me/api/portraits/women/12.jpg' />
      </List.Item>
    )
  }
}

export default EventListAttendee