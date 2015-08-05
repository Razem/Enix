# Enix

A simple JavaScript core library. Uses [core-js](https://www.npmjs.com/package/core-js) and adds a few extra features.

## Documentation:
```
Enix
  .$foreach(collection, fn(value, key, collection), that?, arrayLike = false)
    * arrayLike - for NodeLists etc.

  * core-js features, anything else remains global
  .delay
  .log

Object
  .isAny(obj) -> Boolean
    * simple typeof check
  .isPlain(obj) -> Boolean
    * checks for plain ({}) objects
  .merge(...objs) -> Object

Array
  .is(obj) -> Boolean
  #add(array) -> @
  #tack(...args) -> @
  #remove(item) -> @
  #removeAt(index, amount = 1) -> @
  #insert(index, array) -> @
  #first() -> *
  #last() -> *

Function
  .is(obj) -> Boolean
  #bindArray(that, array) -> Function
  #partArray(that, array) -> Function
  #mixin(obj) -> @
    * assings values to the prototype
  #assign(obj) -> @
    * assigns values to the function

String
  .is(obj) -> Boolean
  #replaceAll(str1, str2) -> String
  #toInt(radix = 10) -> int
  #toFloat() -> float
  #encodeURI(partial = false) -> String
  #decodeURI(partial = false) -> String
  #pad(length, fillStr = " ") -> String
  #chars() -> Array
  #reverse() -> String
  #assign(obj) -> String
    * "{a} {b}".assign({ a: 1, b: 2 }) === "1 2"
  #normalizeLines() -> String
    * uses just \n
  #ltrim() -> String
  #rtrim() -> String
  #repeatUntil(length) -> String
    * "ab".repeatUntil(5) === "ababa"
  #substr(index, length) -> String
    * fix for negative index
  #removeDiacritics() -> String
  #capitalize(all = false) -> String
  #dasherize() -> String
  #underscore() -> String
  #spacify() -> String
  #camelize(first = true) -> String
  #parametrize() -> String
    * URI-safe string

Math
  .randomInt(from, to) -> Number [from;to]
  .randomFloat(from, to) -> Number [from;to)

Number
  .is(obj) -> Boolean
  .Infinity
  .global
    .isNaN
    .isFinite
  .isInt(var) -> Boolean
  .isNumeric(val) -> Boolean
  #limitBottom(n: Number) -> Number
  #limitTop(n: Number) -> Number
  #limit(n1: Number, n2: Number) -> Number
  .FORMAT_THOUSANDS_SEPARATOR = ","
  .FORMAT_DECIMAL_MARK = "."
  #format(decimals = 0, thousandsSep?, decMark?) -> String
  #toRad() -> Number
  #toDeg() -> Number
  #mod(n) -> Number
    * positive value of modulo
  #roundTo(decimals) -> Number
  #log(base = Math.E) -> Number
  #abs() -> Number
  #round() -> Number
  #floor() -> Number
  #ceil() -> Number
  #pow(exp) -> Number
  #sqrt() -> Number
  #cbrt() -> Number
  #sign() -> Number
  #trunc() -> Number

Date
  #getISODay() -> Number
    * Monday = 1, Sunday = 7
  #getWeek() -> Number
  #getYearOfWeek() -> Number

Boolean
  .is(obj) -> Boolean

```

## Installation:
```
npm install enix
```

## Compatible with:
- Node.js
- Browserify
