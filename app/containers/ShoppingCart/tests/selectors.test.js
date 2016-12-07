import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectShoppingCartDomain,
  selectShow,
  selectItems,
} from '../selectors';

describe('selectShoppingCartDomain', () => {
  const shoppingCartSelector = selectShoppingCartDomain();
  it('should select the products page domain state', () => {
    const shoppingCartDomainState = fromJS({});
    const mockedState = fromJS({
      shoppingCart: shoppingCartDomainState,
    });
    expect(shoppingCartSelector(mockedState)).toEqual(shoppingCartDomainState);
  });
});

describe('selectShow', () => {
  const showSelector = selectShow();
  it('should select the show state', () => {
    const show = false;
    const mockedState = fromJS({
      shoppingCart: {
        show,
      },
    });
    expect(showSelector(mockedState)).toEqual(show);
  });
});

describe('selectItems', () => {
  const itemsSelector = selectItems();
  it('should select the items state', () => {
    const items = fromJS([
      {
        img: 'img1.jpg',
        name: 'Textured Jersey Henley',
        price: 12.5,
        size: 'S',
        count: 5,
      },
    ]);
    const mockedState = fromJS({
      shoppingCart: {
        items,
      },
    });
    expect(itemsSelector(mockedState)).toEqual(items);
  });
});
