import expect from 'expect';
import shoppingCartReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  toggleMenu,
  addItem,
} from '../actions';

describe('shoppingCartReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      show: false,
      items: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(shoppingCartReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the toggleMenu action correctly', () => {
    const expectedResult = state
      .set('show', true);

    expect(shoppingCartReducer(state, toggleMenu())).toEqual(expectedResult);
  });

  it('should handle the toggleMenu action correctly', () => {
    const fixtureItem = {
      name: 'Textured Jersey Henley',
      images: ['img1.jpg'],
      price: 12.5,
    };
    const fixtureSize = 'S';
    const fixtureCount = 5;
    const expectedItem = [
      {
        img: 'img1.jpg',
        name: 'Textured Jersey Henley',
        price: 12.5,
        size: 'S',
        count: 5,
      },
    ];
    const expectedResult = state
      .set('items', expectedItem);

    expect(shoppingCartReducer(state, addItem(fixtureItem, fixtureSize, fixtureCount))).toEqual(expectedResult);
  });
});
