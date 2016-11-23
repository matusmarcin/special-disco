import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { Products } from '../index';
import ProductItem from 'components/ProductItem';
import List from 'components/List';
import Loading from 'components/Loading';
import Error from 'components/Error';

describe('<Products />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <Products loading />
    );
    expect(renderedComponent.contains(<Loading />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = shallow(
      <Products
        loading={false}
        error={{ message: 'Loading failed!' }}
      />
    );
    expect(renderedComponent.contains(<Error />)).toEqual(true);
  });

  it('should render the products if loading was successful', () => {
    const products = [{
      name: 'Textured Jersey Henley',
      categories: '["Summer collection"]',
      img: 'img1.jpg',
      price: 12.5,
    }];
    const renderedComponent = shallow(
      <Products
        products={products}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={products} component={ProductItem} />)).toEqual(true);
  });
});
