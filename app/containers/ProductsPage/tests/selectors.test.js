import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectProductsPageDomain,
  selectProduct,
  selectImage,
  selectSize,
  selectCounter,
} from '../selectors';

describe('selectProductsPageDomain', () => {
  const productsPageSelector = selectProductsPageDomain();
  it('should select the products page domain state', () => {
    const productsPageDomainState = fromJS({});
    const mockedState = fromJS({
      productsPage: productsPageDomainState,
    });
    expect(productsPageSelector(mockedState)).toEqual(productsPageDomainState);
  });
});

describe('selectProduct', () => {
  const productSelector = selectProduct();
  it('should select the product state', () => {
    const product = fromJS({
      name: 'Textured Jersey Henley',
    });
    const mockedState = fromJS({
      productsPage: {
        product,
      },
    });
    expect(productSelector(mockedState)).toEqual(product);
  });
});

describe('selectImage', () => {
  const imageSelector = selectImage();
  it('should select the image state', () => {
    const image = 'img.jpg';
    const mockedState = fromJS({
      productsPage: {
        image,
      },
    });
    expect(imageSelector(mockedState)).toEqual(image);
  });
});

describe('selectSize', () => {
  const sizeSelector = selectSize();
  it('should select the size state', () => {
    const size = fromJS({
      name: 'S',
      count: 5,
    });
    const mockedState = fromJS({
      productsPage: {
        size,
      },
    });
    expect(sizeSelector(mockedState)).toEqual(size);
  });
});

describe('selectCounter', () => {
  const counterSelector = selectCounter();
  it('should select the size state', () => {
    const counter = 5;
    const mockedState = fromJS({
      productsPage: {
        counter,
      },
    });
    expect(counterSelector(mockedState)).toEqual(counter);
  });
});
