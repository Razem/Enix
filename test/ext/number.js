'use strict';
var
expect = require("expect.js"),
Enix = require("../..");

describe("Number", function () {
  describe(".is()", function () {
    it("determines if the given value is a number", function () {
      expect(Number.is(10)).to.be.ok();
      expect(Number.is(NaN)).to.be.ok();
      expect(Number.is(Infinity)).to.be.ok();
      expect(Number.is(new Number(10))).not.to.be.ok();
      expect(Number.is(undefined)).not.to.be.ok();
      expect(Number.is("10")).not.to.be.ok();
      expect(Number.is({})).not.to.be.ok();
    });
  });

  describe(".isNumeric()", function () {
    it("checks if the value passed is numeric", function () {
      expect(Number.isNumeric(42)).to.be.ok();
      expect(Number.isNumeric(42.42)).to.be.ok();
      expect(Number.isNumeric("42")).to.be.ok();
      expect(Number.isNumeric("42.42")).to.be.ok();
      expect(Number.isNumeric("error")).not.to.be.ok();
      expect(Number.isNumeric("NaN")).not.to.be.ok();
      expect(Number.isNumeric(NaN)).not.to.be.ok();
      expect(Number.isNumeric(Infinity)).not.to.be.ok();
      expect(Number.isNumeric({})).not.to.be.ok();
    });
  });

  describe("#limitTop(), #limitBottom() & #limit()", function () {
    it("limits the number to a specific range", function () {
      expect((-10).limit(0, 10)).to.be(0);
      expect((5).limit(0, 10)).to.be(5);
      expect((10).limitTop(20)).to.be(10);
      expect((10).limitTop(5)).to.be(5);
    });
  });

  describe("#format()", function () {
    it("convert the number to a string with proper thousands separator and decimal mark", function () {
      var num = 12345.6789;

      expect(num.format(2)).to.be("12,345.68");
      expect(num.format(3)).to.be("12,345.679");
      expect(num.format()).to.be("12,346");
      expect((123456789).format()).to.be("123,456,789");
      expect(num.format(2, " ", ",")).to.be("12 345,68");

      Number.FORMAT_THOUSANDS_SEPARATOR = " ";
      Number.FORMAT_DECIMAL_MARK = ",";

      expect(num.format(2)).to.be("12 345,68");
    });
  });

  describe("Math", function () {
    it("counts modulus", function () {
      expect((25).mod(3)).to.be(1);
      expect((-1).mod(3)).to.be(2);
    });

    it("performs rounding", function () {
      var a = 14.25, b = 15.65;

      expect(a.roundTo()).to.be(Math.round(a));
      expect(b.roundTo()).to.be(Math.round(b));
      expect(a.roundTo(1)).to.be(Math.round(a * 10) / 10);
      expect(b.roundTo(1)).to.be(Math.round(b * 10) / 10);
      expect(a.roundTo(-1)).to.be(Math.round(a / 10) * 10);
      expect(b.roundTo(-1)).to.be(Math.round(b / 10) * 10);
    });

    it("counts a logarithm with a custom base", function () {
      expect((100).log()).to.be(Math.log(100));
      expect((100).log(10)).to.be(Math.log(100) / Math.log(10));
    });
  });

  describe("#toDeg() & #toRad()", function () {
    it("convert radians to degrees and vice-versa", function () {
      expect(Math.PI.toDeg()).to.be(180);
      expect((180).toRad()).to.be(Math.PI);
    });
  });
});
