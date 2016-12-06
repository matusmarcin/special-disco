/*
 *
 * Toggle reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_MENUS,
} from './constants';

const initialState = fromJS({
  show: false,
  });

function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENUS:
      return state
        .set('show', !state.get('show'));
    default:
      return state;
  }
}

export default toggleReducer;
