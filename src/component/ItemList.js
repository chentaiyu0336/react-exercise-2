import React, { Component } from 'react';
import Item from './Item';

function ItemList(props) {
  const { category, products, handleClick } = props;
  return (
    <section>
      <h2>{category}</h2>
      <div>
        {products.map((product, index) => (
          <Item key={index} product={product} handleClick={handleClick} />
        ))}
      </div>
    </section>
  );
}

export default ItemList;
