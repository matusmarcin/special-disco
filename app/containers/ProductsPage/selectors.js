import { createSelector } from 'reselect';

/**
 * Direct selector to the productsPage state domain
 */
const selectProductsPageDomain = () => (state) => state.get('productsPage');

const selectProduct = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('product')
);

const selectImage = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('image')
);

const selectSize = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('size')
);

const selectCounter = () => createSelector(
  selectProductsPageDomain(),
  (substate) => substate.get('counter')
);

export {
  selectProductsPageDomain,
  selectProduct,
  selectImage,
  selectSize,
  selectCounter,
};
