'use strict';

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

module.exports = core;
