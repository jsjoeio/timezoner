import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './index.css'
import Navbar from './atoms/Navbar'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
        <header id='header'>
          <Navbar />
        </header>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)
