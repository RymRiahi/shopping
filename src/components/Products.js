import React, { Component } from 'react';
import { connect } from 'react-redux';
import mock_products from '../mock_products.json'
import Product from './Product';
import { addItemToCart } from '../actions/productsAction';

class Products extends Component {
  render() {
    return (
      <div className='list-items'>
      { mock_products.products
        .map(item =>
          <Product
            key={item.id}
            product={item}
            addToCart={this.props.onAddItemToCart}
          />)
      }
      </div>
    )
  }
}
const mapActionToProps = {
  onAddItemToCart: addItemToCart
}
export default connect(null, mapActionToProps)(Products);