import { createSelector } from 'reselect';

/**
 * Direct selector to the products state domain
 */
const selectProductsDomain = () => (state) => state.get('products');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Products
 */

const selectProducts = () => createSelector(
  selectProductsDomain(),
  (substate) => substate.toJS()
);

export default selectProducts;
export {
  selectProductsDomain,
};
