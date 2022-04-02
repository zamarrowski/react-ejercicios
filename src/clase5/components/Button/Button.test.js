import { render, screen } from '@testing-library/react'
import Button from './Button'

test('Should render without errors', () => {
  render(<Button />)
})

test('Should match snapshot', () => {
  render(<Button>test</Button>)
  expect(screen.getByRole('button')).toMatchSnapshot()
})
