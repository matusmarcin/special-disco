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
  DEC_SIZE_COUNT,
} from './constants';

const initialState = fromJS({
  categories: false,
  products: false,
  loading: false,
  error: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state
        .set('categories', false)
        .set('products', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_PRODUCTS_SUCCESS:
      return state
        .set('categories', action.categories)
        .set('products', action.products)
        .set('loading', false);
    case LOAD_PRODUCTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case DEC_SIZE_COUNT:
      return state.set('products', state.get('products').forEach(
        (product) => {
          if (product.slug !== action.slug) {
            return;
          }

          product.sizes.forEach((size) => {
            if (size.name === action.size) {
              size.count -= action.count; // eslint-disable-line no-param-reassign
            }
          });
        })
      );
    default:
      return state;
  }
}

export default appReducer;
