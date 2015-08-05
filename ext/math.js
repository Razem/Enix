'use strict';

/** @namespace Math */

/**
 * @param {Number} from
 * @param {Number} to
 * @returns {Number}
 */
Math.randomInt = function (a, b) {
  var from = Math.min(a, b), to = Math.max(a, b);
  return from + Math.floor(Math.random() * (to - from + 1));
};

/**
 * @param {Number} from
 * @param {Number} to
 * @returns {Number}
 */
Math.randomFloat = function (a, b) {
  var from = Math.min(a, b), to = Math.max(a, b);
  return from + Math.random() * (to - from);
};
