/**
*
* ProductItem
*
*/

import React from 'react';

//import { FormattedMessage } from 'react-intl';
//import messages from './messages';

import styles from './styles.css';

function ProductItem() {
  const item = props.item;
  
  return (
    <div className={styles.itemContent}>
      <h1>{item.name}</h1>
      {item.desc}<br />
      <img src="/img/products/{item.img}" /><br />
      ${item.price}
    </div>
  );
}

ProductItem.propTypes = {
  item: React.PropTypes.object,
};

export default ProductItem;
