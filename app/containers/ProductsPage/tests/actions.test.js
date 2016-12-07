import expect from 'expect';

import {
  pickImage,
  pickSize,
  setProduct,
  decMaxCount,
  setCounter,
  increaseCounter,
  decreaseCounter,
} from '../actions';

import {
  PICK_IMAGE,
  PICK_SIZE,
  SET_PRODUCT,
  DEC_MAX_COUNT,
  SET_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from '../constants';

describe('ProductSpecs actions', () => {
  describe('pickImage', () => {
    it('should return the correct type and the image', () => {
      const fixture = 'img.jpg';
      const expectedResult = {
        type: PICK_IMAGE,
        image: fixture,
      };

      expect(pickImage(fixture)).toEqual(expectedResult);
    });
  });

  describe('pickSize', () => {
    it('should return the correct type and the size', () => {
      const fixture = {
        name: 'S',
        count: 5,
      };
      const expectedResult = {
        type: PICK_SIZE,
        name: fixture.name,
        count: fixture.count,
      };

      expect(pickSize(fixture)).toEqual(expectedResult);
    });
  });

  describe('setProduct', () => {
    it('should return the correct type and the product', () => {
      const fixture = {
        name: 'Textured Jersey Henley',
      };
      const expectedResult = {
        type: SET_PRODUCT,
        product: fixture,
      };

      expect(setProduct(fixture)).toEqual(expectedResult);
    });
  });

  describe('decMaxCount', () => {
    it('should return the correct type and the count', () => {
      const fixture = 5;
      const expectedResult = {
        type: DEC_MAX_COUNT,
        count: fixture,
      };

      expect(decMaxCount(fixture)).toEqual(expectedResult);
    });
  });

  describe('setCounter', () => {
    it('should return the correct type and the count if count is greater or equal to 1', () => {
      const fixture = 5;
      const expectedResult = {
        type: SET_COUNTER,
        count: fixture,
      };

      expect(setCounter(fixture)).toEqual(expectedResult);
    });

    it('should return the correct type and the count set to one if count is less than 1', () => {
      const fixture = -984;
      const expectedResult = {
        type: SET_COUNTER,
        count: 1,
      };

      expect(setCounter(fixture)).toEqual(expectedResult);
    });
  });

  describe('increaseCounter', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INCREASE_COUNTER,
      };

      expect(increaseCounter()).toEqual(expectedResult);
    });
  });

  describe('decreaseCounter', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: DECREASE_COUNTER,
      };

      expect(decreaseCounter()).toEqual(expectedResult);
    });
  });
});
