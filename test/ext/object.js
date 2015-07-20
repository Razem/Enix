'use strict';
var
expect = require("expect.js"),
Enix = require("../..");

describe("Object", function () {
  describe(".isAny() & .isPlain()", function () {
    it("determines if the given value is an object (any or just a plain one)", function () {
      expect(Object.isAny({})).to.be.ok();
      expect(Object.isAny([])).to.be.ok();
      expect(Object.isAny(/wow/g)).to.be.ok();

      expect(Object.isAny("")).not.to.be.ok();
      expect(Object.isAny(10)).not.to.be.ok();
      expect(Object.isAny(true)).not.to.be.ok();

      expect(Object.isPlain({})).to.be.ok();
      expect(Object.isPlain([])).not.to.be.ok();
      expect(Object.isPlain(/wow/g)).not.to.be.ok();

      expect(Object.isPlain(Object.create(Object.create({})))).to.be.ok();
    });
  });

  describe(".merge()", function () {
    it("merges multiple objects to a single one", function () {
      expect(Object.merge({ a: "a" }, { b: "b" })).to.eql({ a: "a", b: "b" });
    });
  });
});
