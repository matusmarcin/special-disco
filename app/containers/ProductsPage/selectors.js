import { createSelector } from 'reselect';

/**
 * Direct selector to the productsPage state domain
 */
const selectProductsPageDomain = () => (state) => state.get('productsPage');

const selectLoading = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('loading')
);

const selectError = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('error')
);

const selectProduct = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('product')
);

export {
  selectProductsPageDomain,
  selectLoading,
  selectError,
  selectProduct,
};
