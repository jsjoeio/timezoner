import React, { Component } from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'
import { App } from '../components/App.styles'

class IndexPage extends Component {
  state = {
    day: '',
    error: false,
    time: '',
    timezone: '',
    userTimezone: '',
  }

  componentWillMount() {
    this.setState({
      userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone
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
    const { userTimezone } = this.state

    const eventTime = moment.tz(
      `${this.state.day} ${this.state.time}`,
      'YYYY-MM-DD h:mm a',
      this.state.timezone
    )

    return (
      <App>
        <h3>Your event occurs on</h3>
        <h2>{this.convertTimezone(eventTime, userTimezone)}</h2>
        <p>Time and date are based on your timezone</p>
        <p>{userTimezone}</p>
      </App>
    )
  }
}

export default IndexPage
