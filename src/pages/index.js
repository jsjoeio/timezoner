import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'
import { App } from '../components/App.styles'

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(location.search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function convertTimezone(eventTime, localTimezone) {
  return eventTime.tz(localTimezone).format('MMMM Do YYYY, h:mm a')
}

const mockTimezone = 'America/New_York'
const eventTime = moment.tz(
  `${getUrlParameter('day')} ${getUrlParameter('time')}`,
  'YYYY-MM-DD h:mm a',
  getUrlParameter('timezone')
)

const IndexPage = () => (
  <App>
    <h3>Your event occurs on</h3>
    <h2>{convertTimezone(eventTime, mockTimezone)}</h2>
    <p>Time and date are based on your timezone</p>
    <p>{mockTimezone}</p>
  </App>
)

export default IndexPage
