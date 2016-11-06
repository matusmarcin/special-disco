import expect from 'expect';
import cartReducer from '../reducer';
import { fromJS } from 'immutable';

describe('cartReducer', () => {
  it('returns the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
