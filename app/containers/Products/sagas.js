import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { PRODUCTS_PAGE } from 'containers/Products/constants';
import { productsLoaded, prodLoadError } from 'containers/Products/actions';
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Get products
  const requestURL = PRODUCTS_PAGE;

  // Call our request helper (see 'utils/request')
  const products = yield call(request, requestURL);

  if (!repos.err) {
    yield put(productsLoaded(repos.data));
  } else {
    yield put(prodLoadError(repos.err));
  }
}

/**
 * Watches for LOAD_PRODUCTS action and calls handler
 */
export function* getProductsWatcher() {
  while (yield take(LOAD_REPOS)) {
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
