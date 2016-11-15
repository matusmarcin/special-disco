import { createSelector } from 'reselect';

/**
 * Direct selector to the productSpecs state domain
 */
const selectProductSpecsDomain = () => (state) => state.get('productSpecs');

const selectImage = () => createSelector(
  selectProductSpecsDomain(),
  (substate) => substate.get('image')
);

const selectSize = () => createSelector(
  selectProductSpecsDomain(),
  (substate) => substate.get('size')
);

const selectCounter = () => createSelector(
  selectProductSpecsDomain(),
  (substate) => substate.get('counter')
);

export {
  selectProductSpecsDomain,
  selectImage,
  selectSize,
  selectCounter,
};
