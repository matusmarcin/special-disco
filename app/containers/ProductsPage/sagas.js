import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

import {
  PRODUCT_PAGE,
  LOAD_PRODUCT,
} from './constants';

import {
  productLoaded,
  prodLoadError,
} from './actions';

import { selectLocationState } from 'containers/App/selectors';

/**
 * API product request/response handler
 */
export function* getProduct() {
  // Select product slug from store
  const state = yield select(selectLocationState());
  const requestURL = `${PRODUCT_PAGE}${state.locationBeforeTransitions.pathname.split('/')[1]}`;

  // Call our request helper (see 'utils/request')
  const product = yield call(request, requestURL);

  if (!product.err) {
    yield put(productLoaded(product.data));
  } else {
    yield put(prodLoadError(product.err));
  }
}

/**
 * Watches for LOAD_PRODUCT action and calls handler
 */
export function* getProductWatcher() {
  while (yield take(LOAD_PRODUCT)) {
    yield call(getProduct);
  }
}

/**
 * Saga watcher
 */
export function* productData() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(getProductWatcher);

  // Stop execution if location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  productData,
];
