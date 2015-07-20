'use strict';

/** @class Array */

var
ArrayProto = Array.prototype,
arrayPush = ArrayProto.push,
arraySplice = ArrayProto.splice;

/**
 * Determines whether the given value is an array.
 * @function
 * @param {*} value
 * @returns {Boolean}
 */
Array.is = Array.isArray;

/**
 * Adds items to the array.
 * @alias Array#add
 * @param {Array}
 * @returns {this}
 */
ArrayProto.add = function (items) {
  arrayPush.apply(this, items);
  return this;
};

/**
 * Similar to {@link Array#add}, but accepts items as arguments.
 * @alias Array#tack
 * @param {...*} items
 * @returns {this}
 */
ArrayProto.tack = function () {
  arrayPush.apply(this, arguments);
  return this;
};

/**
 * Removes the item (if it is in the array) from the array.
 * @alias Array#remove
 * @param {*}
 * @returns {this}
 */
ArrayProto.remove = function (item) {
  var ind = this.indexOf(item);
  if (ind !== -1) this.splice(ind, 1);
  return this;
};

/**
 * Removes an item at the given index from the array.
 * @alias Array#removeAt
 * @param {Number} [index=0]
 * @param {Number} [amount=1]
 * @returns {this}
 */
ArrayProto.removeAt = function (ind, amount) {
  if (amount === undefined) amount = 1;
  this.splice(ind, amount);
  return this;
};

/**
 * Inserts the given items in the array at the given index.
 * @alias Array#insert
 * @param {Number}
 * @param {Array}
 * @returns {this}
 */
ArrayProto.insert = function (index, items) {
  arraySplice.apply(this, [index, 0].add(items));
  return this;
};

/**
 * @alias Array#first
 * @returns {*}
 */
ArrayProto.first = function () {
  return this[0];
};

/**
 * @alias Array#last
 * @returns {*}
 */
ArrayProto.last = function () {
  return this[this.length - 1];
};
