/*
 *
 * 
 *
 */

import {
  TOGGLE_MENUS,
} from './constants';

/**
 * Toggle the menu, dispatched when user click on cart button
 *
 * @return {object} An action object with a type of TOGGLE_MENU
 */
export function toggleButton() {
  return {
    type: TOGGLE_MENUS,
  };
}
