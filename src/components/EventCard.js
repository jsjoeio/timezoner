import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'
import { Card } from './EventCard.styles'
import { getUrlParameter } from '../utils/functions'

class EventCard extends Component {
  state = {
    day: '',
    error: false,
    loading: false,
    time: '',
    timezone: '',
    userTimezone: '',
  }

  componentWillMount() {
    this.setState({
      userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      loading: true,
    })
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({
        loading: false,
        day: getUrlParameter('day'),
        time: getUrlParameter('time'),
        timezone: getUrlParameter('timezone'),
      })
    }
  }

  convertTimezone(eventTime, localTimezone) {
    return eventTime.tz(localTimezone).format('MMMM Do YYYY, h:mm a')
  }

  render() {
    const { loading, userTimezone } = this.state

    const eventTime = moment.tz(
      `${this.state.day} ${this.state.time}`,
      'YYYY-MM-DD h:mm a',
      this.state.timezone
    )

    return (
      <Card>
        <h3>Your event occurs on</h3>
        {loading && <h2>Loading...</h2>}
        {!loading && (
          <Fragment>
            <h2>{this.convertTimezone(eventTime, userTimezone)}</h2>
            <p>Time and date are based on your timezone</p>
            <p>{userTimezone}</p>
          </Fragment>
        )}
      </Card>
    )
  }
}

export default EventCard
