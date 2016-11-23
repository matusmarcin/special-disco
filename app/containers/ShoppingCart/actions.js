/*
 *
 * ShoppingCart actions
 *
 */

import {
  TOGGLE_MENU,
  ADD_ITEM,
} from './constants';

/**
 * Toggle the menu, dispatched when user click on cart button
 *
 * @return {object} An action object with a type of TOGGLE_MENU
 */
export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}

/**
 * Dispatched when user add item to cart in product specs
 *
 * @param  {object} item  The product item
 * @param  {string} size  The selected size
 * @param  {number} count The selected count
 *
 * @return {object}       An action object with a type of ADD_ITEM passing the product item, size and count
 */
export function addItem(item, size, count) {
  const newItem = {
    img: item.images[0],
    name: item.name,
    price: item.price,
    size,
    count,
  };

  return {
    type: ADD_ITEM,
    item: newItem,
  };
}
