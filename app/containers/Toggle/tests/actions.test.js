import expect from 'expect';

import {
  TOGGLE_MENUS,
} from '../constants';

import {
  toggleButton,
} from '../actions';

describe('Toggle actions', () => {
  describe('toggleButton', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_MENUS,
      };

      expect(toggleButton()).toEqual(expectedResult);
    });
  });
});
