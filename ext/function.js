'use strict';

/** @class Function */

var
FunctionProto = Function.prototype;

/**
 * Determines whether the given value is a function.
 * @param {*} value
 * @returns {Boolean}
 */
Function.is = function (obj) { return typeof obj === "function"; };

/**
 * @alias Function#bindArray
 * @param {Object} that
 * @param {Array} args
 * @returns {Function}
 * @throws {TypeError}
 */
FunctionProto.bindArray = function (that, args) {
  return this.bind.apply(this, [that].add(args));
};

/**
 * @alias Function#partArray
 * @param {Array} args
 * @returns {Function}
 */
FunctionProto.partArray = function (args) {
  return this.part.apply(this, args);
};

/**
 * @alias Function#mixin
 * @desc Assigns properties of the given object into the function's prototype.
 * @param {Object} object
 * @returns {this}
 */
FunctionProto.mixin = function (obj) {
  var proto = this.prototype;
  Object.assign(proto, obj);
  proto.constructor = this;
  return this;
};

/**
 * @alias Function#assign
 * @desc Assigns properties of the given object directly into the function as static properties.
 * @param {Object} object
 * @returns {this}
 */
FunctionProto.assign = function (obj) {
  var proto = this.prototype;
  Object.assign(this, obj);
  this.prototype = proto;
  return this;
};
