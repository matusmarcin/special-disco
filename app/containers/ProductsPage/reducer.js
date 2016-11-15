/*
 *
 * ProductsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './constants';

const initialState = fromJS({
  product: false,
  loading: false,
  error: false,
});

function productsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return state
        .set('loading', true)
        .set('error', false)
        .set('product', false);
    case LOAD_PRODUCT_SUCCESS:
      return state
        .set('product', action.product)
        .set('loading', false);
    case LOAD_PRODUCT_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default productsPageReducer;
