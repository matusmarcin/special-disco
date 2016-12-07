/*
 *
 * CategoriesPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  selectCategories,
  selectProducts,
} from 'containers/App/selectors';

import List from 'components/List';
import ProductItem from 'components/ProductItem';

import styles from './styles.css';

export class CategoriesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const products = [];

    if (this.props.params.slug !== undefined) {
      this.props.products.forEach((product) => {
        const productCat = JSON.parse(product.categories);
        let data = [];
        let found = false;

        productCat.forEach((id) => {
          const category = this.props.categories[id - 1];
          if (category !== undefined) {
            if (this.props.params.slug === category.slug) {
              found = true;
            } else {
              data.push({
                name: category.name,
                slug: category.slug,
              });
            }
          }
        });

        if (found) {
          data = {
            name: product.name,
            slug: product.slug,
            categories: data,
            img: product.images[0],
            price: product.price,
          };

          products.push(data);
        }
      });
    } else {
      this.props.products.forEach((product) => {
        const productCat = JSON.parse(product.categories);
        let data = [];

        productCat.forEach((id) => {
          const category = this.props.categories[id - 1];
          if (category !== undefined) {
            data.push({
              name: category.name,
              slug: category.slug,
            });
          }
        });

        data = {
          name: product.name,
          slug: product.slug,
          categories: data,
          img: product.images[0],
          price: product.price,
        };

        products.push(data);
      });
    }

    return (
      <div>
        <h1><FormattedMessage {...messages.header} /></h1>
        <List className={styles.list} items={products} component={ProductItem} />
      </div>
    );
  }
}

CategoriesPage.propTypes = {
  params: React.PropTypes.object,
  products: React.PropTypes.array,
  categories: React.PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories(),
  products: selectProducts(),
});

export default connect(mapStateToProps, null)(CategoriesPage);
