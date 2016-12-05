/**
*
* ProductItem
*
*/

import React from 'react';

import { Link } from 'react-router';

import styles from './styles.css';

function ProductItem(props) {
  const item = props.item;

  let name = null;
  if (item.name.length > 13) {
    name = `${item.name.substring(0, 10)}...`;
  } else {
    name = item.name;
  }

  const categories = [];
  for (let i = 0, len = item.categories.length; i < len; i += 1) {
    const category = item.categories[i];
    categories.push(<Link key={i} to={`/${category.slug}/categories`}>{category.name}</Link>);
    categories.push(', ');
  }
  categories.pop();

  return (
    <div className={styles.itemContent}>
      <Link to={`/${item.slug}/products`}><img src={`/img/products/${item.img}`} alt={name} /></Link><br />
      <h2><Link to={`/${item.slug}/products`}>{item.name}</Link></h2>
      ${item.price.toFixed(2)}
    </div>
  );
}

ProductItem.propTypes = {
  item: React.PropTypes.object,
};

export default ProductItem;
