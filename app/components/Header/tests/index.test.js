import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { Header } from '../index';

describe('<Header />', () => {
  it('should have nav menu', () => {
    const renderedComponent = shallow(<Header dispatch />);
    expect(renderedComponent.find('nav').length >= 1).toEqual(true);
  });

  it('should have one image of logo', () => {
    const renderedComponent = shallow(<Header dispatch />);
    expect(renderedComponent.find('img').length === 1).toEqual(true);
  });
});
