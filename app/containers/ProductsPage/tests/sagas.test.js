/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { getProduct, getProductWatcher, productData } from '../sagas';

import { PRODUCT_PAGE, LOAD_PRODUCT } from '../constants';
import { productsLoaded, prodLoadError } from '../actions';

import request from 'utils/request';
import { selectLocationState } from 'containers/App/selectors';

describe('getProduct Saga', () => {
  let getProductGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getProductGenerator = getProduct();

    const selectDescriptor = getProductGenerator.next().value;
    expect(selectDescriptor).toEqual(select(selectLocationState()));

    const callDescriptor = getProductGenerator.next().value;
    expect(callDescriptor).toEqual(call(request, PRODUCT_PAGE));
  });

  it('should dispatch the productLoaded action if it requests the data successfully', () => {
    const response = {
      data: {
        name: 'Textured Jersey Henley',
      },
    };
    const putDescriptor = getProductGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(productsLoaded(response.data)));
  });

  it('should call the prodLoadError action if the response errors', () => {
    const response = {
      err: 'Some error',
    };
    const putDescriptor = getProductGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(prodLoadError(response.err)));
  });
});

describe('getProductWatcher Saga', () => {
  const getProductWatcherGenerator = getProductWatcher();

  it('should watch for LOAD_PRODUCT action', () => {
    const takeDescriptor = getProductWatcherGenerator.next().value;
    expect(takeDescriptor).toEqual(take(LOAD_PRODUCT));
  });

  it('should invoke getProduct saga on actions', () => {
    const callDescriptor = getProductWatcherGenerator.next(put(LOAD_PRODUCT)).value;
    expect(callDescriptor).toEqual(call(getProduct));
  });
});

describe('productDataSaga Saga', () => {
  const productDataSaga = productData();

  let forkDescriptor;

  it('should asyncronously fork getProductWatcher saga', () => {
    forkDescriptor = productDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getProductWatcher));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = productDataSaga.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });

  it('should finally cancel() the forked getProductWatcher saga',
     function* productDataSagaCancellable() {
      // reuse open fork for more integrated approach
       forkDescriptor = productDataSaga.next(put(LOCATION_CHANGE));
       expect(forkDescriptor.value).toEqual(cancel(forkDescriptor));
     }
   );
});
