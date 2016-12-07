import expect from 'expect';
import toggleReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  toggleButton,
} from '../actions';

describe('toggleReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      show: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(toggleReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the toggleButton action correctly', () => {
    const expectedResult = state
      .set('show', true);

    expect(toggleReducer(state, toggleButton())).toEqual(expectedResult);
  });
});
