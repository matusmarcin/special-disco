/*
 *
 * ProductsPage actions
 *
 */

import {
  PICK_IMAGE,
  PICK_SIZE,
  SET_PRODUCT,
  DEC_MAX_COUNT,
  SET_COUNTER,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
} from './constants';

/**
 * Select the image, dispatched when user click on image thumb
 *
 * @param  {string} image The image name
 *
 * @return {object}       An action object with a type of PICK_IMAGE passing the image
 */
export function pickImage(image) {
  return {
    type: PICK_IMAGE,
    image,
  };
}

/**
 * Select the size, dispatched when user select the size from options
 *
 * @param  {object} size The product size
 *
 * @return {object}      An action object with a type of PICK_SIZE passing the name and count
 */
export function pickSize(size) {
  return {
    type: PICK_SIZE,
    name: size.name,
    count: size.count,
  };
}

/**
 * Set the product
 *
 * @param  {object} product The product
 *
 * @return {object}         An action object with a type of SET_PRODUCT passing the product
 */
export function setProduct(product) {
  return {
    type: SET_PRODUCT,
    product
  };
}

/**
 * Dispatched when decreasing count of available sizes
 *
 * @param  {number} count The count
 *
 * @return {object}       An action object with a type of DEC_MAX_COUNT passing the count
 */
export function decMaxCount(count) {
  return {
    type: DEC_MAX_COUNT,
    count,
  };
}

/**
 * Dispatched when user change the count in input
 *
 * @param  {number} count The item count to buy
 *
 * @return {object} An action object with a type of SET_COUNTER passing the count
 */
export function setCounter(count) {
  const countNum = parseInt(count, 10);

  if (countNum >= 1) {
    return {
      type: SET_COUNTER,
      count: countNum,
    };
  }

  return {
    type: SET_COUNTER,
    count: 1,
  };
}

/**
 * Dispatched when user click on add button
 *
 * @return {object} An action object with a type of INCREASE_COUNTER
 */
export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
  };
}

/**
 * Dispatched when user click on subtract button
 *
 * @return {object} An action object with a type of DECREASE_COUNTER
 */
export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER,
  };
}
