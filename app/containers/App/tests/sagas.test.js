/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put, fork } from 'redux-saga/effects';

import { getProducts, getProductsWatcher, productsData } from '../sagas';

import {
  CATEGORIES_PAGE,
  PRODUCTS_PAGE,
  LOAD_PRODUCTS,
} from '../constants';

import { productsLoaded, prodLoadError } from '../actions';

import request from 'utils/request';

describe('getProducts Saga', () => {
  let getProductsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getProductsGenerator = getProducts();

    let callDescriptor = getProductsGenerator.next().value;
    expect(callDescriptor).toEqual(call(request, CATEGORIES_PAGE));
  });

  it('should dispatch the productsLoaded action if it requests the data successfully', () => {
    const responseCats = {
      data: [{
        name: 'Summer collection',
      }, {
        name: 'Winter collection',
      }],
    };
    const responseProducts = {
      data: [{
        name: 'Textured Jersey Henley',
      }, {
        name: 'Must-Have Contrast T-Shirt',
      }],
    };
    let putDescriptor = getProductsGenerator.next(responseCats).value;
    putDescriptor = getProductsGenerator.next(responseProducts).value;
    expect(putDescriptor).toEqual(put(productsLoaded(responseProducts.data, responseCats.data)));
  });

  it('should call the prodLoadError action if the response errors', () => {
    const response = {
      err: 'Some error',
    };
    let putDescriptor = getProductsGenerator.next(response).value;
    putDescriptor = getProductsGenerator.next(response).value;
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
});
