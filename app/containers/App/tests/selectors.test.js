import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectGlobal,
  selectCategories,
  selectProducts,
  selectLoading,
  selectError,
  selectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  const globalSelector = selectGlobal();
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(globalSelector(mockedState)).toEqual(globalState);
  });
});

describe('selectCategories', () => {
  const categoriesSelector = selectCategories();
  it('should select the categories state', () => {
    const categories = fromJS([]);
    const mockedState = fromJS({
      global: {
        categories,
      },
    });
    expect(categoriesSelector(mockedState)).toEqual(categories);
  });
});

describe('selectProducts', () => {
  const productsSelector = selectProducts();
  it('should select the products state', () => {
    const products = fromJS([]);
    const mockedState = fromJS({
      global: {
        products,
      },
    });
    expect(productsSelector(mockedState)).toEqual(products);
  });
});

describe('selectLoading', () => {
  const loadingSelector = selectLoading();
  it('should select the loading state', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
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
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('selectLocationState', () => {
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(selectLocationState()(mockedState)).toEqual(route.toJS());
  });
});
