/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
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

import styles from './styles.css';

import Loading from 'components/Loading';
import Error from 'components/Error';
import Header from 'components/Header';
import Slideshow from 'components/Slideshow';
import ShoppingCart from 'containers/ShoppingCart';
import Toggle from 'containers/Toggle';
import Footer from 'components/Footer';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      products = React.Children.toArray(this.props.children);
    }

    return (
      <div>
        <Header />
        <Toggle />
        <ShoppingCart />
        <Slideshow />
        <div className={styles.container}>
          {products}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  products: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  loadProducts: React.PropTypes.func,
  children: React.PropTypes.node,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
