import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

import {
  PRODUCTS_PAGE,
  LOAD_PRODUCTS,
} from './constants';

import {
  productsLoaded,
  prodLoadError,
} from './actions';

import { selectLocationState } from 'containers/App/selectors';

/**
 * API products request/response handler
 */
export function* getProducts() {
  // Select product slug from store
  const state = yield select(selectLocationState());
  let path = state.locationBeforeTransitions.pathname.split('/');

  if (path.length === 2) {
    path = `${PRODUCTS_PAGE}summer-collection`;
  } else {
    path = `${PRODUCTS_PAGE}${path[1]}`;
  }

  // Call our request helper (see 'utils/request')
  const products = yield call(request, path);

  if (!products.err) {
    yield put(productsLoaded(products.data));
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

  // Stop execution if location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  productsData,
];
