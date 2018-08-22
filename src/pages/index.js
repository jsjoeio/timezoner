import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(location.search)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
//SO post https://stackoverflow.com/questions/46970132/convert-us-central-time-to-different-time-zones-using-moment-js
const mockTimezone = 'America/New_York'
const dateTime = moment.tz(
  '2018-08-27 5:45:00 PM',
  'YYYY-MM-DD h:mm:ss a',
  'America/Phoenix'
)
const converted = dateTime
  .tz('America/New_York')
  .format('MMMM Do YYYY, h:mm:ss a')
console.log(converted)

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Original meeting details:</p>
    <ul>
      <li>{getUrlParameter('day')}</li>
      <li>{getUrlParameter('time')}</li>
      <li>{getUrlParameter('timezone')}</li>
    </ul>
    <p>Meeting details in your timezone:</p>
    <ul>
      <li>{mockTimezone}</li>
      <li>{converted}</li>
    </ul>
  </div>
)

export default IndexPage
