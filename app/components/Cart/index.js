/**
*
* Cart
*
*/

import React from 'react';

import List from 'components/List';
import ProductCart from 'components/ProductCart';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Cart(props) {
  const items = props.items;

  let price = 0;
  let message = (<FormattedMessage {...messages.message} />);

  if (items) {
    for (let i = 0, len = items.length; i < len; i += 1) {
      const currentItem = items[i];

      price += currentItem.price * currentItem.count;
    }

    message = (
      <List className={styles.list} items={props.items} component={ProductCart} />
    );

  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart_info}>
        <div className={styles.left}>
          <FormattedMessage {...messages.header} />
        </div>
        <div className={styles.right}>  
         <FormattedMessage {...messages.subtotal} />
         ${price.toFixed(2)}
        </div>
      </div>
       <div className={styles.clear}></div>
      <hr />
      {message}
    </div>
  );
}

Cart.propTypes = {
  items: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

export default Cart;
