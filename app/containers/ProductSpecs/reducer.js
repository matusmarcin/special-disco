/*
 *
 * ProductSpecs reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PICK_IMAGE,
  PICK_SIZE,
  SET_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from './constants';

const initialState = fromJS({
  image: '',
  size: '',
  counter: 1,
  max: 1,
});

function productSpecsReducer(state = initialState, action) {
  switch (action.type) {
    case PICK_IMAGE:
      return state
        .set('image', action.image);
    case PICK_SIZE:
      return state
        .set('max', action.count)
        .set('counter', 1)
        .set('size', action.name);
    case SET_COUNTER:
      return state
        .set('counter', action.count);
    case INCREASE_COUNTER:
      if (state.get('counter') < state.get('max')) {
        return state
          .set('counter', state.get('counter') + 1);
      }
      return state;
    case DECREASE_COUNTER:
      if (state.get('counter') > 1) {
        return state
          .set('counter', state.get('counter') - 1);
      }
      return state;
    default:
      return state;
  }
}

export default productSpecsReducer;
