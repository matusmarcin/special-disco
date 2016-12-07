import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { CategoriesPage } from '../index';
import List from 'components/List';
import ProductItem from 'components/ProductItem';

import styles from '../styles.css';

describe('<CategoriesPage />', () => {
  let categories;
  let products;

  // Before each test reset the item data for safety
  beforeEach(() => {
    categories = [
      {
        name: 'Summer collection',
        slug: 'summer-collection',
      },
      {
        name: 'Winter collection',
        slug: 'winter-collection',
      },
      {
        name: 'T-shirts',
        slug: 't-shirts',
      },
      {
        name: 'Hoodies & Sweatshirts',
        slug: 'hoodies-and-sweatshirts',
      },
    ];
    products = [
      {
        name: 'Textured Jersey Henley',
        slug: 'textured-jersey-henley',
        categories: '[4]',
        images: ['img1.jpg'],
        price: 12.5,
      },
      {
        name: 'Must-Have V Neck T-Shirt',
        slug: 'must-have-v-neck-t-shirt',
        categories: '[3]',
        images: ['img2.jpg'],
        price: 14,
      },
    ];
  });

  it('should render all categories if no slug is provided', () => {
    const processedProducts = [
      {
        name: 'Textured Jersey Henley',
        slug: 'textured-jersey-henley',
        categories: [
          {
            name: 'Hoodies & Sweatshirts',
            slug: 'hoodies-and-sweatshirts',
          },
        ],
        img: 'img1.jpg',
        price: 12.5,
      },
      {
        name: 'Must-Have V Neck T-Shirt',
        slug: 'must-have-v-neck-t-shirt',
        categories: [
          {
            name: 'T-shirts',
            slug: 't-shirts',
          },
        ],
        img: 'img2.jpg',
        price: 14,
      },
    ];
    const params = {};

    const renderedComponent = shallow(
      <CategoriesPage
        categories={categories}
        products={products}
        params={params}
      />
    );

    expect(renderedComponent.contains(<List className={styles.list} items={processedProducts} component={ProductItem} />)).toEqual(true);
  });

  it('should render only category provided by slug', () => {
    const processedProducts = [
      {
        name: 'Must-Have V Neck T-Shirt',
        slug: 'must-have-v-neck-t-shirt',
        categories: [],
        img: 'img2.jpg',
        price: 14,
      },
    ];
    const params = {
      slug: 't-shirts',
    };

    const renderedComponent = shallow(
      <CategoriesPage
        categories={categories}
        products={products}
        params={params}
      />
    );
    expect(renderedComponent.contains(<List className={styles.list} items={processedProducts} component={ProductItem} />)).toEqual(true);
  });
});
