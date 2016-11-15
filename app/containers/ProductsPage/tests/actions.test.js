import expect from 'expect';

import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from '../constants';

import {
  loadProduct,
  productLoaded,
  prodLoadError,
} from '../actions';

describe('ProductPage Actions', () => {
  describe('loadProduct', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_PRODUCT,
      };

      expect(loadProduct()).toEqual(expectedResult);
    });
  });

  describe('productLoaded', () => {
    it('should return the correct type and the passed product', () => {
      const fixture = ['Textured Jersey Henley'];
      const expectedResult = {
        type: LOAD_PRODUCT_SUCCESS,
        product: fixture,
      };

      expect(productLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('prodLoadError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_PRODUCT_ERROR,
        error: fixture,
      };

      expect(prodLoadError(fixture)).toEqual(expectedResult);
    });
  });
});
