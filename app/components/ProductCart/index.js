/**
*
* ProductCart
*
*/

import React from 'react';

function ProductCart(props) {
  const item = props.item;

  let name = null;
  if (item.name.length > 13) {
    name = `${item.name.substring(0, 10)}...`;
  } else {
    name = item.name;
  }

  return (
    <div>
      <img src={`/img/products/${item.img}`} alt={name} /><br />
      {item.name} ({item.size})<br />
      ${item.price.toFixed(2)}<br />
      x{item.count}
    </div>
  );
}

ProductCart.propTypes = {
  item: React.PropTypes.object,
};

export default ProductCart;