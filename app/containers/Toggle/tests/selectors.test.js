import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectToggleDomain,
  selectToggle,
} from '../selectors';

describe('selectToggleDomain', () => {
  const toggleSelector = selectToggleDomain();
  it('should select the products page domain state', () => {
    const toggleDomainState = fromJS({});
    const mockedState = fromJS({
      toggle: toggleDomainState,
    });
    expect(toggleSelector(mockedState)).toEqual(toggleDomainState);
  });
});

describe('selectToggle', () => {
  const toggleSelector = selectToggle();
  it('should select the show state', () => {
    const show = false;
    const mockedState = fromJS({
      toggle: {
        show,
      },
    });
    expect(toggleSelector(mockedState)).toEqual(show);
  });
});
