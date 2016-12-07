import { createSelector } from 'reselect';

/**
 * Direct selector to the toggle state domain
 */
const selectToggleDomain = () => (state) => state.get('toggle');


const selectToggle = () => createSelector(
  selectToggleDomain(),
  (substate) => substate.get('show')
);

export {
  selectToggleDomain,
  selectToggle,
};
