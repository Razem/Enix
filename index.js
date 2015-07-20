'use strict';

/** @module enix */

/**
 * @alias module:enix
 * @ignore
 */
var core = require("core-js");

delete global.core;
delete global.delay;
delete global.log;
delete global.$for;

require("./ext/object");
require("./ext/array");
require("./ext/function");
require("./ext/string");
require("./ext/number");
require("./ext/boolean");
require("./ext/date");

/**
 * Simulates the foreach loop.
 * @param {Object|Array} collection
 * @param {Function} callback
 * @param {*} that
 * @param {Boolean} [arrayLike=false] forces the loop to iterate the object the same way as an array
 * @returns {collection} The given collection
 */
core.$foreach = function (obj, func, that, arrayLike) {
  if (Array.is(obj) || arrayLike) {
    for (var i = 0; i < obj.length; ++i) {
      if (func.call(that, obj[i], i, obj) === false) {
        break;
      }
    }

    return obj;
  }

  for (var i in obj) if (Dict.has(obj, i)) {
    if (func.call(that, obj[i], i, obj) === false) {
      break;
    }
  }

  return obj;
};

module.exports = core;
