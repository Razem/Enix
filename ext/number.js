'use strict';

/** @class Number */

var
NumberProto = Number.prototype,
pFloat = parseFloat,
isFin = isFinite;

/**
 * Determines whether the given value is a number.
 * @param {*} value
 * @returns {Boolean}
 */
Number.is = function (obj) { return typeof obj === "number"; };

/**
 * @type {Number}
 */
Number.Infinity = Infinity;

/**
 * Global functions working with numbers.
 * Compared to own Number's methods, these convert the value to a number first.
 * @property {Function} isNaN
 * @property {Function} isFinite
 */
Number.global = {
  isNaN: isNaN,
  isFinite: isFin
};

/**
 * @param {*} value
 * @returns {Boolean}
 */
Number.isNumeric = function (num) {
  if (Number.is(num)) {
    return isFin(num);
  }
  else if (String.is(num) && num !== "") {
    return Number.isFinite(pFloat(num));
  }
  return false;
};

/**
 * @alias Number#limitBottom
 * @param {Number}
 * @returns {Number}
 */
NumberProto.limitBottom = function (from) { return Math.max(from, this); };

/**
 * @alias Number#limitTop
 * @param {Number}
 * @returns {Number}
 */
NumberProto.limitTop = function (to) { return Math.min(this, to); };

/**
 * @alias Number#limit
 * @param {Number}
 * @param {Number}
 * @returns {Number}
 */
NumberProto.limit = function (from, to) { return Math.max(from, Math.min(this, to)); };

/**
 * Default thousands separator used in the format function.
 * @type {String}
 */
Number.FORMAT_THOUSANDS_SEPARATOR = ",";

/**
 * Default decimal mark used in the format function.
 * @type {String}
 */
Number.FORMAT_DECIMAL_MARK = ".";

/**
 * @alias Number#format
 * @param {Number} [decimals=0]
 * @param {String} [thousandsSeparator=","]
 * @param {String} [decimalMark="."]
 * @returns {String}
 */
NumberProto.format = function (dec, thousandsSep, decMark) {
  thousandsSep === undefined && (thousandsSep = Number.FORMAT_THOUSANDS_SEPARATOR);
  decMark === undefined && (decMark = Number.FORMAT_DECIMAL_MARK);

  var
  parts = this.toFixed(dec).split("."),
  intPart = parts[0],
  fracPart = parts[1],
  intLen = intPart.length;

  intPart = intPart.reverse().replace(/(\d{3})/g, "$1" + thousandsSep).reverse();
  if (intLen % 3 === 0) {
    intPart = intPart.slice(1);
  }

  return intPart + (fracPart ? decMark + fracPart : "");
};

// Math functions added to the Number's prototype

/**
 * @alias Number#mod
 * @param {Number}
 * @returns {Number}
 */
NumberProto.mod = function (n) { return ((this % n) + n) % n; };

/**
 * @alias Number#roundTo
 * @param {Number} [decimals=0]
 * @returns {Number}
 */
NumberProto.roundTo = function (dec) {
  if (dec === undefined) dec = 0;
  var k = Math.pow(10, dec);
  return Math.round(this * k) / k;
};

/**
 * @alias Number#log
 * @param {Number} [base=Math.E]
 * @returns {Number}
 */
NumberProto.log = function (base) { return base ? Math.log(this) / Math.log(base) : Math.log(this); };

/**
 * Converts degrees to radians.
 * @alias Number#toRad
 * @returns {Number}
 */
NumberProto.toRad = function () { return this * Math.PI / 180; };

/**
 * Converts radians to degrees.
 * @alias Number#toDeg
 * @returns {Number}
 */
NumberProto.toDeg = function () { return this * 180 / Math.PI; };
