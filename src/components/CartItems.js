import React from 'react';
import { connect } from 'react-redux';

const CartItems = ({ cart }) => (
  <div className='cart-items'>
    <div className='title'>Cart ($ {cart.sum})</div>
    <ul className='items'>
      {Object.keys(cart.items)
        .map(item =>
        <li key={cart.items[item].id}>
          {cart.items[item].label}
          <span>({cart.items[item].qte})</span>
          <span className='price'>${cart.items[item].sumPriceItem}</span>
        </li>)
      }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(CartItems);
