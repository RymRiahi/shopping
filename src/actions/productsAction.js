export const addItemToCart = (data) => {
  return {
    type: 'ADD_ITEM',
    payload: { ...data }
  }
}