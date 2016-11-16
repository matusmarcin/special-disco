import { createSelector } from 'reselect';

/**
 * Direct selector to the shoppingCart state domain
 */
const selectShoppingCartDomain = () => (state) => state.get('shoppingCart');

const selectShow = () => createSelector(
  selectShoppingCartDomain(),
  (substate) => substate.get('show')
);

const selectItems = () => createSelector(
  selectShoppingCartDomain(),
  (substate) => substate.get('items')
);

export {
  selectShoppingCartDomain,
  selectShow,
  selectItems,
};
