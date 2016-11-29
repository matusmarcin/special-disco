import expect from 'expect';

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  DEC_SIZE_COUNT,
} from '../constants';

import {
  loadProducts,
  productsLoaded,
  prodLoadError,
  decSizeCount,
} from '../actions';

describe('App Actions', () => {
  describe('loadProducts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_PRODUCTS,
      };

      expect(loadProducts()).toEqual(expectedResult);
    });
  });

  describe('productsLoaded', () => {
    it('should return the correct type and the passed products', () => {
      const fixtureCats = ['summer-collection'];
      const fixtureProducts = ['Textured Jersey Henley'];
      const expectedResult = {
        type: LOAD_PRODUCTS_SUCCESS,
        categories: fixtureCats,
        products: fixtureProducts,
      };

      expect(productsLoaded(fixtureProducts, fixtureCats)).toEqual(expectedResult);
    });
  });

  describe('prodLoadError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_PRODUCTS_ERROR,
        error: fixture,
      };

      expect(prodLoadError(fixture)).toEqual(expectedResult);
    });
  });

  describe('decSizeCount', () => {
    it('should return the correct type and the passed params', () => {
      const fixtureSize = 'S';
      const fixtureSlug = 'textured-jersey-henley';
      const fixtureCount = 2;
      const expectedResult = {
        type: DEC_SIZE_COUNT,
        size: fixtureSize,
        slug: fixtureSlug,
        count: fixtureCount,
      };

      expect(decSizeCount(fixtureSize, fixtureSlug, fixtureCount)).toEqual(expectedResult);
    });
  });
});
