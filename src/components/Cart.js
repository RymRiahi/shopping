import React from 'react';
import image from '../img/shopping-bag.png';
import { connect } from 'react-redux';

const Cart = (props) => (
  <div className='cart'>
    <img alt='' src={image} />
    <span className='cart-qte'>{props.cart.quantity}</span>
  </div>
)
const mapStateToProps = store => ({
  cart: store.cart
})

export default connect(mapStateToProps)(Cart);