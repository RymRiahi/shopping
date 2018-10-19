export default function productsReducer(state= {}, { type, payload }) {
  switch(type) {
    case 'ADD_ITEM': {
      let { items, quantity, sum } = state;
      if(items[payload.id]) {
        return {
          items: { ...items, [payload.id]: { ...payload, qte: items[payload.id].qte + 1, sumPriceItem: payload.price * (items[payload.id].qte + 1) }},
          quantity: quantity + 1,
          sum: sum + payload.price
        }
      } else {
        return {
          items: {...items, [payload.id]: { ...payload, qte: 1, sumPriceItem: payload.price  }},
          quantity: quantity + 1,
          sum: sum + payload.price
        }
      }
    }
    default: return state;
  }
}