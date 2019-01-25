import React from 'react'
import EventCard from '../components/EventCard'
import { validateURLParams } from '../utils/functions'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    {validateURLParams(['day', 'time', 'timezone']) ? <EventCard /> : <h1 style={{textAlign: 'center'}}>Welcome to Timezoner!</h1>}
    <Footer />
  </Layout>
)

export default IndexPage
