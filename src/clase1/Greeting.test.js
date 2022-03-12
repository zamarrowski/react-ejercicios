import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('Should render without errors', () => {
  render(<Greeting />)
})

test('Should match snapshot', () => {
  render(<Greeting />)
  expect(screen.getByRole('heading')).toMatchSnapshot()
})

test('Should render certain text', () => {
  render(<Greeting />)
  expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
})
