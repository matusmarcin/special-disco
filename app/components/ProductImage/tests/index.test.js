import ProductImage from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ProductImage />', () => {
  it('should render an <img> tag', () => {
    const item = {
      name: 'Textured Jersey Henley',
      img: 'img1.jpg',
    };

    const renderedComponent = shallow(
      <ProductImage item={item} />
    );
    expect(renderedComponent.find(ProductImage).length).toEqual(1);
  });
});
