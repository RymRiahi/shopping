import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer';

const reducers = combineReducers({
  cart: productsReducer
});
export const store = createStore(
  reducers,
  {
    cart: { items: {}, quantity: 0, sum: 0}
  },
  window.devToolsExtension && window.devToolsExtension()
);
