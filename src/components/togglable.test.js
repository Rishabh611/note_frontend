/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Togglable from './Toggleable'

describe('<Togglable />', () => {
  let container
  // The beforeEach function gets called before each test, which then renders the Togglable component and saves the field container of the return value.
  beforeEach(() => {
    container = render(
      <Togglable buttonLabel="show..">
        <div className="testDiv">togglableContent</div>
      </Togglable>
    ).container
  })
  // The first test verifies that the Togglable component renders its child component
  test('renders it child', async () => {
    await screen.findAllByText('togglable content')
  })
  /*
  The remaining tests use the toHaveStyle method to verify that the child component
  of the Togglable component is not visible initially, by checking that the style of
  the div element contains { display: 'none' }
  */
  test('at start the children are not displayed', () => {
    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display:none')
  })
  test('after clock of button, children are displayed', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('show...')
    await user.click(button)

    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display:none')
  })
  test('toggle content can we closed', () => {})
})
