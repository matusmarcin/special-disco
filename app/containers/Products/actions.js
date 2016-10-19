/*
 *
 * Products actions
 *
 */

import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
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
 * @param  {array} products The products data
 *
 * @return {object}         An action object with a type of LOAD_PRODUCTS_SUCCESS passing the products
 */
export function productsLoaded(products) {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products,
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
