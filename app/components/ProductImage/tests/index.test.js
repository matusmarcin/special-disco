import ProductImage from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ProductImage />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      name: 'Textured Jersey Henley',
      img: 'img1.jpg',
    };
  });

  it('should render an <img> tag', () => {
    const renderedComponent = shallow(
      <ProductImage item={item} />
    );
    expect(renderedComponent.find(ProductImage).length).toEqual(1);
  });
});
