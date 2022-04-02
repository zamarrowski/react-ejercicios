import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputWithLabel from './InputWithLabel'

test('Should render without errors', () => {
  render(<InputWithLabel />)
})

test('Should render a label test', () => {
  render(<InputWithLabel label="test label" />)
  expect(screen.getByText('test label')).toBeInTheDocument()
})

test('Should execute a onChange function', () => {
  const fn = jest.fn()
  render(<InputWithLabel type="text" onChange={fn} />)
  userEvent.type(screen.getByRole('text'), 'test')
  expect(fn).toHaveBeenCalled()
  expect(fn).toBeCalledTimes(4)
})

test('Should render a input type password', () => {
  render(<InputWithLabel type="password" />)
  expect(screen.getByRole('password').type).toBe('password')
})

test('Should render a input type text', () => {
  render(<InputWithLabel type="text" />)
  expect(screen.getByRole('text').type).toBe('text')
})
