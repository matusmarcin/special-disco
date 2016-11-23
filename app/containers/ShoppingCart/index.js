/*
 *
 * ShoppingCart
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectShow,
  selectItems,
} from './selectors';

import Cart from 'components/Cart';

export class ShoppingCart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.show) {
      return (
        <Cart items={this.props.items} />
      );
    }

    return null;
  }
}

ShoppingCart.propTypes = {
  show: React.PropTypes.bool,
  items: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  show: selectShow(),
  items: selectItems(),
});

export default connect(mapStateToProps, null)(ShoppingCart);
