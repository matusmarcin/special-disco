import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectProductsPageDomain,
  selectLoading,
  selectError,
  selectProduct,
} from '../selectors';

describe('selectProductsPageDomain', () => {
  const productsPageDomainSelector = selectProductsPageDomain();
  it('should select the productsPage domain state', () => {
    const productsPageDomainState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      products: productsPageDomainState,
    });
    expect(productsPageDomainSelector(mockedState)).toEqual(productsPageDomainState);
  });
});

describe('selectLoading', () => {
  const loadingSelector = selectLoading();
  it('should select the loading state', () => {
    const loading = false;
    const mockedState = fromJS({
      products: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('selectError', () => {
  const errorSelector = selectError();
  it('should select the error state', () => {
    const error = 404;
    const mockedState = fromJS({
      products: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('selectProduct', () => {
  const productSelector = selectProduct();
  it('should select the products state', () => {
    const product = fromJS({});
    const mockedState = fromJS({
      product: {
        product,
      },
    });
    expect(productSelector(mockedState)).toEqual(product);
  });
});
