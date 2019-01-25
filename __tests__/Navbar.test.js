/*
User Story #4: I can see at least three clickable elements inside the nav element, each with the class nav-link.
User Story #5: When I click a .nav-link button in the nav element, I am taken to the corresponding section of the landing page.
*/

// REMOVE DUMMY TEST
import React from 'react'
import { render } from 'react-testing-library'

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>

test('Displays the correct title', () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId('hero-title')).toHaveTextContent('Gatsby is awesome!')
  // --> Test will pass
})
