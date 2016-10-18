import { createSelector } from 'reselect';

/**
 * Direct selector to the products state domain
 */
const selectProductsDomain = () => (state) => state.get('products');


const selectLoading = () => createSelector(
  selectProductsDomain(),
  (substate) => substate.get('loading')
);

const selectError = () => createSelector(
  selectProductsDomain(),
  (substate) => substate.get('error')
);

const selectProducts = () => createSelector(
  selectProductsDomain(),
  (substate) => substate.get('products')
);
