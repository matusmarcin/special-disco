import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { App, mapDispatchToProps } from '../index';
import { loadProducts } from '../actions';
import Loading from 'components/Loading';
import Error from 'components/Error';

describe('App', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <App loading />
    );
    expect(renderedComponent.contains(<Loading />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = shallow(
      <App
        loading={false}
        error={{ message: 'Loading failed!' }}
      />
    );
    expect(renderedComponent.contains(<Error />)).toEqual(true);
  });

  it('should render the page if loading was successful', () => {
    const products = [{
      name: 'Textured Jersey Henley',
      categories: '["Summer collection"]',
      img: 'img1.jpg',
      price: 12.5,
    }];

    const renderedComponent = shallow(
      <App
        products={products}
        error={false}
        children={(<Loading />)}
      />
    );

    expect(renderedComponent.contains(<Loading />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('loadProducts', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadProducts).toExist();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        result.loadProducts();
        expect(dispatch).toHaveBeenCalledWith(loadProducts());
      });
    });
  });
});
