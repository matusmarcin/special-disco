/*
 *
 * Products
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectProducts from './selectors';
import styles from './styles.css';

export class Products extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.products}>
      </div>
    );
  }
}

const mapStateToProps = selectProducts();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
