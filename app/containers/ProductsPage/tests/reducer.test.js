import expect from 'expect';
import productSpecsReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  pickImage,
  pickSize,
  setProduct,
  decMaxCount,
  setCounter,
  increaseCounter,
  decreaseCounter,
} from '../actions';

describe('productSpecsReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      image: '',
      size: '',
      product: false,
      counter: 1,
      max: 1,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(productSpecsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the pickImage action correctly', () => {
    const fixture = 'img.jpg';
    const expectedResult = state
      .set('image', fixture);

    expect(productSpecsReducer(state, pickImage(fixture))).toEqual(expectedResult);
  });

  it('should handle the pickSize action correctly', () => {
    const fixture = {
      name: 'S',
      count: 5,
    };
    const expectedResult = state
      .set('max', fixture.count)
      .set('size', fixture.name);

    expect(productSpecsReducer(state, pickSize(fixture))).toEqual(expectedResult);
  });

  it('should handle the setProduct action correctly', () => {
    const fixture = {
      name: 'Textured Jersey Henley',
    };
    const expectedResult = state
      .set('product', fixture);

    expect(productSpecsReducer(state, setProduct(fixture))).toEqual(expectedResult);
  });

  it('should handle the decMaxCount action correctly', () => {
    const fixture = 5;
    const expectedResult = state;

    expect(productSpecsReducer(state, decMaxCount(fixture))).toEqual(expectedResult);
  });

  it('should handle the setCounter action correctly', () => {
    const fixture = 1;

    const expectedResult = state
      .set('max', 1);

    expect(productSpecsReducer(state, setCounter(fixture))).toEqual(expectedResult);
  });

  it('should handle the increaseCounter action correctly', () => {
    const expectedResult = state
      .set('counter', 1);

    expect(productSpecsReducer(state, increaseCounter())).toEqual(expectedResult);
  });

  it('should handle the decreaseCounter action correctly', () => {
    const expectedResult = state
      .set('counter', 1);

    expect(productSpecsReducer(state, decreaseCounter())).toEqual(expectedResult);
  });
});
