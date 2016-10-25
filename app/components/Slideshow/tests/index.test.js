import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Slideshow from '../index';

describe('<Slideshow />', () => {
  it('should render images', () => {
    const renderedComponent = shallow(
      <Slideshow />
    );
    expect(renderedComponent.find('img').length > 1).toEqual(true);
  });
});
