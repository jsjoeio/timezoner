import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'
import { App } from '../components/App.styles'

class Events extends Component {
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
      function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
        var results = regex.exec(window.location.search)
        return results === null
          ? ''
          : decodeURIComponent(results[1].replace(/\+/g, ' '))
      }

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
      <App>
        <h3>Your event occurs on</h3>
        {loading && <h2>Loading...</h2>}
        {!loading && (
          <Fragment>
            <h2>{this.convertTimezone(eventTime, userTimezone)}</h2>
            <p>Time and date are based on your timezone</p>
            <p>{userTimezone}</p>
          </Fragment>
        )}
      </App>
    )
  }
}

export default Events
