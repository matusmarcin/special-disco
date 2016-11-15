/*
 *
 * ProductSpecs actions
 *
 */

import {
  PICK_IMAGE,
  PICK_SIZE,
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
