import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
            <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
            <Button content='Create Event' color='orange' />
            <EventForm />
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard