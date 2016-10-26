/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { getProducts, getProductsWatcher, productsData } from '../sagas';

import { PRODUCTS_PAGE, LOAD_PRODUCTS } from '../constants';
import { productsLoaded, prodLoadError } from '../actions';

import request from 'utils/request';

describe('getProducts Saga', () => {
  let getProductsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getProductsGenerator = getProducts();

    const callDescriptor = getProductsGenerator.next().value;
    expect(callDescriptor).toEqual(call(request, PRODUCTS_PAGE));
  });

  it('should dispatch the productsLoaded action if it requests the data successfully', () => {
    const response = {
      data: [{
        name: 'Textured Jersey Henley',
      }, {
        name: 'Must-Have Contrast T-Shirt',
      }],
    };
    const putDescriptor = getProductsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(productsLoaded(response.data)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = {
      err: 'Some error',
    };
    const putDescriptor = getProductsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(prodLoadError(response.err)));
  });
});

describe('getProductsWatcher Saga', () => {
  const getProductsWatcherGenerator = getProductsWatcher();

  it('should watch for LOAD_PRODUCTS action', () => {
    const takeDescriptor = getProductsWatcherGenerator.next().value;
    expect(takeDescriptor).toEqual(take(LOAD_PRODUCTS));
  });

  it('should invoke getProducts saga on actions', () => {
    const callDescriptor = getProductsWatcherGenerator.next(put(LOAD_PRODUCTS)).value;
    expect(callDescriptor).toEqual(call(getProducts));
  });
});

describe('productsDataSaga Saga', () => {
  const productsDataSaga = productsData();

  let forkDescriptor;

  it('should asyncronously fork getProductsWatcher saga', () => {
    forkDescriptor = productsDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getProductsWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = productsDataSaga.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });

  it('should finally cancel() the forked getReposWatcher saga',
     function* productsDataSagaCancellable() {
      // reuse open fork for more integrated approach
       forkDescriptor = productsDataSaga.next(put(LOCATION_CHANGE));
       expect(forkDescriptor.value).toEqual(cancel(forkDescriptor));
     }
   );
});
