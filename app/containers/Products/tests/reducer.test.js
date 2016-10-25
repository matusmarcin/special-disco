import expect from 'expect';
import productsReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  loadProducts,
  productsLoaded,
  prodLoadError,
} from '../actions';

describe('productsReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      products: false,
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(productsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadProducts action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('products', false);

    expect(productsReducer(state, loadProducts())).toEqual(expectedResult);
  });

  it('should handle the productsLoaded action correctly', () => {
    const fixture = [{
      name: 'Textured Jersey Henley',
    }];
    const expectedResult = state
      .set('products', fixture)
      .set('loading', false);

    expect(productsReducer(state, productsLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the prodLoadError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(productsReducer(state, prodLoadError(fixture))).toEqual(expectedResult);
  });
});
