import { createSelector } from 'reselect';

/**
 * Direct selector to the shoppingCart state domain
 */
const selectShoppingCartDomain = () => (state) => state.get('shoppingCart');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShoppingCart
 */

const selectShoppingCart = () => createSelector(
  selectShoppingCartDomain(),
  (substate) => substate.toJS()
);

export default selectShoppingCart;
export {
  selectShoppingCartDomain,
};
