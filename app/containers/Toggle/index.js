/*
 *
 * Toggle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
selectToggle,
} from './selectors';
import ToggleButton from 'components/ToggleButton';


export class Toggle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.show) {
      return (<ToggleButton />);
    }

    return null;
  }
}

Toggle.propTypes = {
  show: React.PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  show: selectToggle(),
});

export default connect(mapStateToProps, null)(Toggle);
