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
    name = `${item.name.substring(0, 20)}...`;
  } else {
    name = item.name;
  }

  return (
    <div>
      <img src={`/img/products/${item.img}`} alt={name} /><br />
      {item.name} - {item.size} (x {item.count})<br />
      $ {item.price.toFixed(2)}<br />
    </div>
  );
}

ProductCart.propTypes = {
  item: React.PropTypes.object,
};

export default ProductCart;
