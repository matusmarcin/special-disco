import expect from 'expect';

import {
  TOGGLE_MENU,
  ADD_ITEM,
} from '../constants';

import {
  toggleMenu,
  addItem,
} from '../actions';

describe('ShoppingCart actions', () => {
  describe('toggleMenu', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_MENU,
      };

      expect(toggleMenu()).toEqual(expectedResult);
    });
  });

  describe('addItem', () => {
    it('should return the correct type and the passed item', () => {
      const fixtureItem = {
        name: 'Textured Jersey Henley',
        images: ['img1.jpg'],
        price: 12.5,
      };
      const fixtureSize = 'S';
      const fixtureCount = 5;
      const expectedItem = {
        img: 'img1.jpg',
        name: 'Textured Jersey Henley',
        price: 12.5,
        size: 'S',
        count: 5,
      };

      const expectedResult = {
        type: ADD_ITEM,
        item: expectedItem,
      };

      expect(addItem(fixtureItem, fixtureSize, fixtureCount)).toEqual(expectedResult);
    });
  });
});
