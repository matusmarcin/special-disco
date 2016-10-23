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
      <a href=""><img src={`img/products/${item.img}`} alt={name} /></a><br />
      {item.category}
      <h2><a href="">{item.name}</a></h2>
      ${item.price.toFixed(2)}
    </div>
  );
}

ProductItem.propTypes = {
  item: React.PropTypes.object,
};

export default ProductItem;
