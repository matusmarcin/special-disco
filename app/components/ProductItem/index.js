/**
*
* ProductItem
*
*/

import React from 'react';

//  import { FormattedMessage } from 'react-intl';
//  import messages from './messages';

import styles from './styles.css';

function ProductItem(props) {
  const item = props.item;

  let name = null;
  if (item.name.length > 13) {
    name = `${item.name.substring(0, 10)}...`;
  } else {
    name = item.name;
  }

  return (
    <div className={styles.itemContent}>
      <h1>{item.name}</h1>
      {item.desc}<br />
      <img src={`img/products/${item.img}`} alt={name} /><br />
      ${item.price}
    </div>
  );
}

ProductItem.propTypes = {
  item: React.PropTypes.object,
};

export default ProductItem;
