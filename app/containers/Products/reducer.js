/*
 *
 * Products reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
} from './constants';

const initialState = fromJS({
  products: false,
  loading: false,
  error: false,
});

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('products', false);
    case LOAD_PRODUCTS_SUCCESS:
      return state
        .set('products', action.products)
        .set('loading', false);
    case LOAD_PRODUCTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default productsReducer;
