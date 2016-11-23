/*
 *
 * Products actions
 *
 */

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  DEC_SIZE_COUNT,
} from './constants';

/**
 * Load the products, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_PRODUCTS
 */
export function loadProducts() {
  return {
    type: LOAD_PRODUCTS,
  };
}

/**
 * Dispatched when the products are loaded by the request saga
 *
 * @param  {array} products   The products data
 * @param  {array} categories The categories data
 *
 * @return {object}           An action object with a type of LOAD_PRODUCTS_SUCCESS passing the products
 */
export function productsLoaded(products, categories) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
    categories,
  };
}

/**
 * Dispatched when loading the products fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_PRODUCTS_ERROR passing the error
 */
export function prodLoadError(error) {
  return {
    type: LOAD_PRODUCTS_ERROR,
    error,
  };
}

/**
 * Dispatched when decreasing count of available sizes
 *
 * @param  {string} size  The size
 * @param  {string} slug  The product slug
 * @param  {number} count The count
 *
 * @return {object}       An action object with a type of DEC_SIZE_COUNT passing the size, slug and count
 */
export function decSizeCount(size, slug, count) {
  return {
    type: DEC_SIZE_COUNT,
    size,
    slug,
    count,
  };
}
