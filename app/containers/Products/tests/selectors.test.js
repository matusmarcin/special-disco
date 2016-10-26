import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectProductsDomain,
  selectLoading,
  selectError,
  selectProducts,
} from '../selectors';

describe('selectProductsDomain', () => {
  const productsDomainSelector = selectProductsDomain();
  it('should select the products domain state', () => {
    const productsDomainState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      products: productsDomainState,
    });
    expect(productsDomainSelector(mockedState)).toEqual(productsDomainState);
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

describe('selectProducts', () => {
  const productsSelector = selectProducts();
  it('should select the products state', () => {
    const products = fromJS([]);
    const mockedState = fromJS({
      products: {
        products,
      },
    });
    expect(productsSelector(mockedState)).toEqual(products);
  });
});
