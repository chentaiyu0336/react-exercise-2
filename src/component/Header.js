import React, { Component } from 'react';

function Header(props) {
  const { choseCount } = props;
  return (
    <nav>
      <h1>Store</h1>
      <p>{choseCount}</p>
    </nav>
  );
}

export default Header;
