import Error from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from '../messages';

describe('<Error />', () => {
  it('should render error message', () => {
    const renderedComponent = shallow(<Error />);
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.text} />
    )).toEqual(true);
  });
});
