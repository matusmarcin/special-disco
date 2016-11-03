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

  let categories = '';
  const json = JSON.parse(item.categories);
  for (let i = 0, len = json.length; i < len; i += 1) {
    categories += `${json[i]}, `;
  }

  return (
    <div className={styles.itemContent}>
      <a href=""><img src={`img/products/${item.img}`} alt={name} /></a><br />
      {categories.slice(0, -2)}
      <h2><a href="">{item.name}</a></h2>
      ${item.price.toFixed(2)}
    </div>
  );
}

ProductItem.propTypes = {
  item: React.PropTypes.object,
};

export default ProductItem;
