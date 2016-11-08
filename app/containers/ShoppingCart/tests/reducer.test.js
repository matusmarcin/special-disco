import expect from 'expect';
import shoppingCartReducer from '../reducer';
import { fromJS } from 'immutable';

describe('shoppingCartReducer', () => {
  it('returns the initial state', () => {
    expect(shoppingCartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
