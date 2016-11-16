/*
 *
 * ShoppingCart reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_MENU,
  ADD_ITEM,
} from './constants';

const initialState = fromJS({
  show: false,
  items: false,
});

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return state
        .set('show', !state.get('show'));
    case ADD_ITEM:
      return state
        .set('items', [
          ...state.get('items') || [],
          action.item,
        ]);
    default:
      return state;
  }
}

export default shoppingCartReducer;
