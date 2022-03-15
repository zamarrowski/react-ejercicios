import { removeItem } from './helpers'

test('Should return an empty array', () => {
  const mockItems = [{ id: 1 }]
  expect(removeItem(mockItems, 1).length).toBe(0)
})
