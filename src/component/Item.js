import React, { Component } from 'react';
import imgSrc from '../assets/product_image_placeholder.png';

function Item(props) {
  const { product, handleClick } = props;
  return (
    <div className="item-card">
      <h2>{product.name}</h2>
      <img src={imgSrc} alt="product image" className="image-size" />
      <div>{product.price}</div>
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
}

export default Item;
