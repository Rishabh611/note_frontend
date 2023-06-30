/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react testing library',
    important: true
  }
  const { container } = render(<Note note={note} />)
  const div = container.querySelector('.note')
  screen.debug(div)
  expect(div).toHaveTextContent(
    'Component testing is done with react testing library'
  )
})
test('Clicking the button calls event hander once', async () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }
  // The event handler is a mock function defined with Jest
  const mockHandler = jest.fn()
  render(<Note note={note} toggleImportance={mockHandler} />)
  // A session is started to interact with the rendered component
  const user = userEvent.setup()
  // The test finds the button based on the text from the rendered component and clicks the element
  const button = screen.getByText('make not important')
  // Clicking happens with the method click of the userEvent-library.
  await user.click(button)
  // The expectation of the test verifies that the mock function has been called exactly once.
  expect(mockHandler.mock.calls).toHaveLength(1)
})
