import { ProductImage } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ProductImage />', () => {
  it('should render an <img> tag', () => {
    function dispatch() {}
    const item = {
      name: 'Textured Jersey Henley',
      img: 'img1.jpg',
    };

    const renderedComponent = shallow(
      <ProductImage item={item} dispatch={dispatch} />
    );
    expect(renderedComponent.contains(<img src={`/img/products/${item.img}`} alt={item.name} />)).toEqual(true);
  });
});
