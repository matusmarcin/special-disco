import HomePage from '../index';
import Products from 'containers/Products';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<HomePage />', () => {
  it('should render the products', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.find(Products).length).toEqual(1);
  });
});
