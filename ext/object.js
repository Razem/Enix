'use strict';

/** @class Object */

var
ObjectProto = Object.prototype,
objToStr = ObjectProto.toString;

/**
 * Determines whether the given value is an object.
 * @param {*} value
 * @returns {Boolean}
 */
Object.isAny = function (obj) {
  return typeof obj === "object" && obj !== null;
};

/**
 * Determines whether the given value is a plain (not special) object.
 * @param {*} value
 * @returns {Boolean}
 */
Object.isPlain = function (obj) {
  return Object.isAny(obj) && objToStr.call(obj) === "[object Object]";
};

/**
 * Merges given objects to a single one and returns it.
 * @param {...Object} objects
 * @returns {Object}
 */
Object.merge = function () {
  var out = {};
  for (var i = 0; i < arguments.length; ++i) {
    Object.assign(out, arguments[i]);
  }
  return out;
};
