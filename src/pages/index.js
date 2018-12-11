import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'
import EventCard from '../components/EventCard'
import { validateURLParams } from '../utils/functions'

const IndexPage = () => (
  <div>
    {validateURLParams(['day', 'time', 'timezone']) ? <EventCard /> : <h1>Oops!</h1>}
  </div>
)

export default IndexPage
