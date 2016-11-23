import { take, call, put, fork } from 'redux-saga/effects';
import request from 'utils/request';

import {
  CATEGORIES_PAGE,
  PRODUCTS_PAGE,
  LOAD_PRODUCTS,
} from './constants';

import {
  productsLoaded,
  prodLoadError,
} from './actions';

/**
 * API products request/response handler
 */
export function* getProducts() {
  // Call our request helper (see 'utils/request')
  const categories = yield call(request, CATEGORIES_PAGE);
  const products = yield call(request, PRODUCTS_PAGE);

  if (!products.err && !categories.err) {
    yield put(productsLoaded(products.data, categories.data));
  } else {
    yield put(prodLoadError(products.err));
  }
}

/**
 * Watches for LOAD_PRODUCTS action and calls handler
 */
export function* getProductsWatcher() {
  while (yield take(LOAD_PRODUCTS)) {
    yield call(getProducts);
  }
}

/**
 * Saga watcher
 */
export function* productsData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getProductsWatcher);
}

// All sagas to be loaded
export default productsData;
