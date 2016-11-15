import expect from 'expect';
import productsPageReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  loadProduct,
  productLoaded,
  prodLoadError,
} from '../actions';

describe('productsPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      product: false,
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(productsPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadProduct action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('product', false);

    expect(productsPageReducer(state, loadProduct())).toEqual(expectedResult);
  });

  it('should handle the productLoaded action correctly', () => {
    const fixture = {
      name: 'Textured Jersey Henley',
    };
    const expectedResult = state
      .set('product', fixture)
      .set('loading', false);

    expect(productsPageReducer(state, productLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the prodLoadError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(productsPageReducer(state, prodLoadError(fixture))).toEqual(expectedResult);
  });
});
