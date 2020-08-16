import React, { Component } from 'react';
import ItemList from './ItemList';

function Content(props) {
  const { products, handleClick } = props;
  return (
    <div>
      {Object.keys(products).map((categray, index) => (
        <ItemList
          key={index}
          category={category}
          products={products[category]}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Content;
