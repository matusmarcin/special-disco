/*
 *
 * Products
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectProducts,
  selectLoading,
  selectError,
} from './selectors';

import {
  loadProducts,
} from './actions';

import List from 'components/List';
import Loading from 'components/Loading';
import Error from 'components/Error';
import ProductItem from 'components/ProductItem';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    let products = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      products = (<Loading />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      products = (<Error />);

    // If we're not loading, don't have an error and there are products, show the products
    } else if (this.props.products !== false) {
      products = (<List items={this.props.products} component={ProductItem} />);
    }

    return products;
  }
}

Products.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  products: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loadProducts: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadProducts: () => dispatch(loadProducts()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
  loading: selectLoading(),
  error: selectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
