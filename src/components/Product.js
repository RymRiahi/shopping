import React from 'react';

const Product = (props) => {
  const { image, price, label, alt, id } = props.product;
  return (
  <div className='item'>
    <img className='img-item' alt={alt} src={image} />
    <div className='info-item'>
      <span className='title-item'>{label}</span>
      <span className='price-item'>${price}</span>
    </div>
    <button
      className='btn-add'
      onClick={() => props.addToCart({ image, price, label, alt, id })}> ADD TO CART
    </button>
  </div>
  )
}

export default Product;