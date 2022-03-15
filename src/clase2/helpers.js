export const removeItem = (items, itemId) => {
  return items.filter(item => item.id !== itemId)
}
