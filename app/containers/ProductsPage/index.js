/*
 *
 * ProductsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectProduct,
  selectLoading,
  selectError,
} from './selectors';

import {
  loadProduct,
} from './actions';

import Loading from 'components/Loading';
import Error from 'components/Error';
import ProductSpecs from 'containers/ProductSpecs';

export class ProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadProduct();
  }

  render() {
    let product = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      product = (<Loading />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      product = (<Error />);

    // If we're not loading and don't have an error => show the product
    } else if (this.props.product !== false) {
      product = (<ProductSpecs item={this.props.product} />);
    }

    return product;
  }
}

ProductsPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  product: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  loadProduct: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadProduct: () => dispatch(loadProduct()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  product: selectProduct(),
  loading: selectLoading(),
  error: selectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
