import expect from 'expect';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
      <section>
        <p>
          <FormattedMessage {...messages.licenseMessage} />
        </p>
      </section>
    )).toEqual(true);
  });