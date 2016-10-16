import expect from 'expect';
import productsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('productsReducer', () => {
  it('returns the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
