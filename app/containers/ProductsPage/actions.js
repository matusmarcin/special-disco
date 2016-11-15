/*
 *
 * ProductsPage actions
 *
 */

import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './constants';

/**
 * Load the product, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PRODUCT
 */
export function loadProduct() {
  return {
    type: LOAD_PRODUCT,
  };
}

/**
 * Dispatched when the product is loaded by the request saga
 *
 * @param  {object} product The product data
 *
 * @return {object}         An action object with a type of LOAD_PRODUCT_SUCCESS passing the product
 */
export function productLoaded(product) {
  return {
    type: LOAD_PRODUCT_SUCCESS,
    product,
  };
}

/**
 * Dispatched when loading the product fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PRODUCT_ERROR passing the error
 */
export function prodLoadError(error) {
  return {
    type: LOAD_PRODUCT_ERROR,
    error,
  };
}
