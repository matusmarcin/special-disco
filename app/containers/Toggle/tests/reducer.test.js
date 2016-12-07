import expect from 'expect';
import toggleReducer from '../reducer';
import { fromJS } from 'immutable';

describe('toggleReducer', () => {
  it('returns the initial state', () => {
    expect(toggleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
