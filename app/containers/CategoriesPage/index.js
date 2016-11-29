/*
 *
 * Products
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

function CategoriesPage(props) {
  const products = [];
  if (props.params.slug !== undefined) {
    props.products.forEach((product) => {
      const productCat = JSON.parse(product.categories);
      let data = [];
      let found = false;

      productCat.forEach((id) => {
        const category = props.categories[id - 1];
        if (category !== undefined) {
          if (props.params.slug === category.slug) {
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
    props.products.forEach((product) => {
      const productCat = JSON.parse(product.categories);
      let data = [];

      productCat.forEach((id) => {
        const category = props.categories[id - 1];
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

CategoriesPage.propTypes = {
  params: React.PropTypes.array,
  products: React.PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories(),
  products: selectProducts(),
});

export default connect(mapStateToProps, null)(CategoriesPage);
