/*
 *
 * ProductsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PICK_IMAGE,
  PICK_SIZE,
  SET_PRODUCT,
  DEC_MAX_COUNT,
  SET_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from './constants';

const initialState = fromJS({
  image: '',
  size: '',
  product: false,
  counter: 1,
  max: 1,
});

function productsPageReducer(state = initialState, action) {
  switch (action.type) {
    case PICK_IMAGE:
      return state
        .set('image', action.image);
    case PICK_SIZE:
      if(action.count > 0) {
        state = state.set('counter', 1);
      }
      else {
        state = state.set('counter', 0);
      }
      return state
        .set('max', action.count)
        .set('size', action.name);
    case SET_PRODUCT:
      return state
        .set('product', action.product);
    case DEC_MAX_COUNT:
      state = state.set('max', state.get('max') - action.count);
      if(state.get('max') > 0) {
        state = state.set('counter', 1);
      }
      else {
        state = state.set('counter', 0);
      }
      return state;
    case SET_COUNTER:
      if (action.count > state.get('max')) {
        return state
          .set('counter', state.get('max'));
      }
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

export default productsPageReducer;
