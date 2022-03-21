import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './form'
import { formIsValid } from './helpers'

test('Should return false if form is invalid', () => {
  expect(formIsValid('hola', 'adios')).toBeFalsy()
})

test('Should return true if form is valid', () => {
  expect(formIsValid('hola', 'coolpass')).toBeTruthy()
})

test('Should render a disabled button', () => {
  render(<Form />)
  expect(screen.getByRole('button')).toBeDisabled()
})

test('Should render 1 input type text', () => {
  render(<Form />)
  expect(screen.getAllByRole('textbox').length).toBe(1)
})

test('Should change to enable button if form is valid', () => {
  render(<Form />)
  userEvent.type(screen.getByRole('textbox'), 'sergio')
  userEvent.type(screen.getByRole('password'), 'coolpass')
  expect(screen.getByRole('button')).toBeEnabled()
})
