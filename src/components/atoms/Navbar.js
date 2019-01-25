import React from 'react'
import styled from 'react-emotion'
import GitHubIcon from './GitHubIcon'

const Nav = styled('nav')`
  margin: 1.5rem 1.5rem 0;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-left: 0;
    align-items: center;

    li {
      font-size: 0.8rem;
      margin-right: 1rem;
    }

    #github-repo {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0;
      margin-left: auto;
    }

  }
`


const Navbar = () => (
  <Nav id='nav-bar'>
    <ul>
      <li className='nav-link'><a href='https://chrome.google.com/webstore/detail/timezoner/kfnfgcafkeoflpapeniggnnkcaijgbgk'>Install</a></li>
      <li className='nav-link'><a href='#'>About</a></li>
      <li id='github-repo' className='nav-link'><a href='https://github.com/jsjoeio/timezoner'><GitHubIcon/></a></li>
    </ul>
  </Nav>
)

export default Navbar
