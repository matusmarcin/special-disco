import Loading from '../index';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Loading />', () => {
  it('should render loading image', () => {
    const renderedComponent = shallow(<Loading />);
    expect(renderedComponent).to.have.tagName('img');
  });
});
