import { ProductsPage } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import List from 'components/List';
import ProductImage from 'components/ProductImage';

import styles from '../styles.css';

describe('<ProductsPage />', () => {
  function dispatch() {}

  const item = {
    name: 'jersey',
    slug: 'textured-jersey-henley',
    description: 'Our basic long sleeve henley updated with textured fabric and colorblocking, an icon at left chest and interior neck taping, Slim Fit, Imported',
    categories: [
      {
        name: 'Hoodies & Sweatshirts',
        slug: 'hoodies-and-sweatshirts',
      },
    ],
    images: ['img1.jpg', 'img11.jpg', 'img12.jpg'],
    price: 12.5,
    sizes: [
      {
        name: 'S',
        count: 1,
      },
      {
        name: 'L',
        count: 4,
      },
      {
        name: 'XL',
        count: 17,
      },
    ],
  };

  it('should render image list', () => {
    const images = [
      {
        img: 'img1.jpg',
        name: item.name,
      },
      {
        img: 'img11.jpg',
        name: item.name,
      },
      {
        img: 'img12.jpg',
        name: item.name,
      },
    ];

    const renderedComponent = shallow(
      <ProductsPage
        product={item}
        image="img1.jpg"
        counter={1}
        dispatch={dispatch}
      />
    );
    expect(renderedComponent.contains(<List className={styles.imageList} items={images} component={ProductImage} />)).toEqual(true);
  });

  it('should render option of size', () => {
    const renderedComponent = shallow(
      <ProductsPage
        product={item}
        image="img1.jpg"
        counter={1}
        dispatch={dispatch}
      />
    );
    expect(renderedComponent.contains(<option key={0} value={0}>S</option>)).toEqual(true);
  });

  it('should render the counter', () => {
    const renderedComponent = shallow(
      <ProductsPage
        product={item}
        image="img1.jpg"
        counter={1}
        dispatch={dispatch}
      />
    );
    expect(renderedComponent.containsMatchingElement(<input
      name="qty"
      type="tel"
      className={styles.counter}
      value={1}
      min="1"
      pattern="[0-9]*"
    />)).toEqual(true);
  });

  it('should render option of size', () => {
    const renderedComponent = shallow(
      <ProductsPage
        product={item}
        image="img1.jpg"
        counter={1}
        dispatch={dispatch}
      />
    );
    expect(renderedComponent.contains(<option key={0} value={0}>S</option>)).toEqual(true);
  });
});
