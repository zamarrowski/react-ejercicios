import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

test('Should render without errors', () => {
  render(<Button />)
})

test('Should render a button with test label', () => {
  render(<Button label="test" />)
  expect(screen.getByRole('button').textContent).toBe('test')
})

test('Should execute onClick function', () => {
  const fn = jest.fn()
  render(<Button label="Click me" onClick={fn} />)
  expect(fn).not.toHaveBeenCalled()
  fireEvent.click(screen.getByRole('button'))
  expect(fn).toHaveBeenCalled()
})
