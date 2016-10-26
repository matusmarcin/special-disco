import List from '../index';
import Loading from 'components/Loading';
import ProductItem from 'components/ProductItem';

import expect from 'expect';
import { shallow, render } from 'enzyme';
import React from 'react';

describe('<List />', () => {
  it('should return empty component if no items are passed', () => {
    const renderedComponent = shallow(
      <List component={Loading} />
    );
    expect(renderedComponent.type()).toEqual(null);
  });

  it('should render the items', () => {
    const items = [
      {
        name: 'Textured Jersey Henley',
        category: 'Summer collection',
        img: 'img1.jpg',
        price: 12.5,
      },
      {
        name: 'Must-Have Contrast T-Shirt',
        category: 'Summer collection',
        img: 'img3.jpg',
        price: 14,
      },
    ];
    const renderedComponent = render(
      <List items={items} component={ProductItem} />
    );
    expect(renderedComponent.find(items)).toExist();
  });
});
