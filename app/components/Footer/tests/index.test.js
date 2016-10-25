import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    const year = new Date().getFullYear();
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.licenseMessage} values={{ year }} />
    )).toEqual(true);
  });
});
