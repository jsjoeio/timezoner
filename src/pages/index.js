import React from 'react'
import Link from 'gatsby-link'

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
      <li />
      <li />
      <li>{mockTimezone}</li>
    </ul>
  </div>
)

export default IndexPage
