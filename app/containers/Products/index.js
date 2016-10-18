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
import LoadingComponent from 'components/Loading';
import ErrorComponent from 'components/Error';
import ProductItem from 'components/ProductItem';

import styles from './styles.css';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let products = null;
    
    loadRepos();

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      products = (<List component={LoadingComponent} />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      products = (<List component={ErrorComponent} />);

    // If we're not loading, don't have an error and there are products, show the products
    } else if (this.props.products !== false) {
      products = (<List items={this.props.products} component={ProductItem} />);
    }

    return (
      {products}
    );
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
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts(),
  loading: selectLoading(),
  error: selectError(),
});

export default connect(mapStateToProps)(Products);
