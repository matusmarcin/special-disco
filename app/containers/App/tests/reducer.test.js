import expect from 'expect';
import appReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  loadProducts,
  productsLoaded,
  prodLoadError,
  decSizeCount,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      categories: false,
      products: false,
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadProducts action correctly', () => {
    const expectedResult = state
      .set('categories', false)
      .set('products', false)
      .set('loading', true)
      .set('error', false);

    expect(appReducer(state, loadProducts())).toEqual(expectedResult);
  });

  it('should handle the productsLoaded action correctly', () => {
    const fixtureCat = [{
      name: 'Summer collection',
    }];
    const fixtureProd = [{
      name: 'Textured Jersey Henley',
    }];
    const expectedResult = state
      .set('categories', fixtureCat)
      .set('products', fixtureProd)
      .set('loading', false);

    expect(appReducer(state, productsLoaded(fixtureProd, fixtureCat))).toEqual(expectedResult);
  });

  it('should handle the prodLoadError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, prodLoadError(fixture))).toEqual(expectedResult);
  });

  it('should handle the decSizeCount action correctly', () => {
    const defaultProducts = [{
      slug: 'textured-jersey-henley',
      sizes: [
        {
          name: 'S',
          count: 1,
        },
      ],
    }];

    const fixtureSize = 'S';
    const fixtureSlug = 'textured-jersey-henley';
    const fixtureCount = 1;

    const expectedResult = state.set('products', defaultProducts.forEach(
      (product) => {
        if (product.slug !== fixtureSlug) {
          return;
        }

        product.sizes.forEach((size) => {
          if (size.name === fixtureSize) {
            size.count -= fixtureCount; // eslint-disable-line no-param-reassign
          }
        });
      })
    );

    expect(appReducer(
      state.set('products', defaultProducts),
      decSizeCount(fixtureSize, fixtureSlug, fixtureCount))).toEqual(expectedResult);
  });
});
