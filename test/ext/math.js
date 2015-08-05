'use strict';
var
expect = require("expect.js"),
Enix = require("../..");

describe("Math", function () {
  describe(".randomInt()", function () {
    it("generates a random integer inside given boundaries (inclusive)", function () {
      for (var i = 0; i < 100; ++i) {
        var j = Math.randomInt(10, 20);
        expect(j).to.be.within(10, 20);
        expect(j.trunc()).to.be(j);
        var k = Math.randomInt(10, 20);
        expect(k).to.be.within(10, 20);
        expect(k.trunc()).to.be(k);
      }
    });
  });

  describe(".randomFloat()", function () {
    it("generates a random float inside given boundaries (exclusive from top)", function () {
      for (var i = 0; i < 100; ++i) {
        var j = Math.randomFloat(10, 20);
        expect(j >= 10 && j < 20).to.be.ok();
        var k = Math.randomFloat(20, 10);
        expect(k >= 10 && k < 20).to.be.ok();
      }
    });
  });
});
