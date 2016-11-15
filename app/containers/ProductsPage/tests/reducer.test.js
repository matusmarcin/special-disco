import expect from 'expect';
import productsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('productsPageReducer', () => {
  it('returns the initial state', () => {
    expect(productsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
