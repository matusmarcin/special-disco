import expect from 'expect';
import productSpecsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('productSpecsReducer', () => {
  it('returns the initial state', () => {
    expect(productSpecsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
