import ProductItem from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ProductItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      name: 'Textured Jersey Henley',
      categories: '["Summer collection"]',
      img: 'img1.jpg',
      price: 12.5,
    };
  });

  it('should render the item name', () => {
    const renderedComponent = shallow(
      <ProductItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.name)).toBeGreaterThan(-1);
  });

  it('should render the category of item', () => {
    const renderedComponent = shallow(
      <ProductItem item={item} />
    );
    expect(renderedComponent.text().indexOf(JSON.parse(item.categories)[0])).toBeGreaterThan(-1);
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
