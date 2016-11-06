import { createSelector } from 'reselect';

/**
 * Direct selector to the cart state domain
 */
const selectCartDomain = () => (state) => state.get('cart');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Cart
 */

const selectCart = () => createSelector(
  selectCartDomain(),
  (substate) => substate.toJS()
);

export default selectCart;
export {
  selectCartDomain,
};
