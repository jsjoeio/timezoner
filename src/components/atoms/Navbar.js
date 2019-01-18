import React from 'react'
import styled from 'react-emotion'

const Nav = styled('nav')`
  margin: 1.5rem 1.5rem 0;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-left: 0;

    li {
      margin-right: 1rem;
    }

    #github-repo {
      margin-right: 0;
      margin-left: auto;
    }

  }
`


const Navbar = () => (
  <Nav id='nav-bar'>
    <ul>
      <li className='nav-link'>Install</li>
      <li className='nav-link'>About</li>
      <li id='github-repo' className='nav-link'>GitHub</li>
    </ul>
  </Nav>
)

export default Navbar
