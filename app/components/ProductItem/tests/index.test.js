import ProductItem from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { Link } from 'react-router';

describe('<ProductItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
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
    };
  });

  it('should render the item name', () => {
    const renderedComponent = shallow(
      <ProductItem item={item} />
    );
    expect(renderedComponent.contains(
      <Link to={`/${item.slug}/products`}>{item.name}</Link>
    )).toEqual(true);
  });

  it('should render the category of item', () => {
    const renderedComponent = shallow(
      <ProductItem item={item} />
    );
    expect(renderedComponent.contains(
      <Link key={0} to={`/${item.categories[0].slug}/categories`}>{item.categories[0].name}</Link>
    )).toEqual(true);
  });

  it('should render the item image', () => {
    const renderedComponent = shallow(
      <ProductItem item={item} />
    );
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should render the item price', () => {
    const renderedComponent = shallow(
      <ProductItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.price)).toBeGreaterThan(-1);
  });
});
