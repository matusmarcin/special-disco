/**
*
* Cart
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

class Cart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.cart}>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export default Cart;
