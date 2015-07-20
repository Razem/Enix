'use strict';
var
expect = require("expect.js"),
Enix = require("../..");

describe("Array", function () {
  describe(".is()", function () {
    it("determines whether the given value is an array", function () {
      expect(Array.is([])).to.be.ok();
      expect(Array.is(new Array())).to.be.ok();
      expect(Array.is(Array.from({ 0: 42, length: 1 }))).to.be.ok();
      expect(Array.is({ 0: 42, length: 1 })).not.to.be.ok();
      expect(Array.is(arguments)).not.to.be.ok();
    });
  });

  describe("#add() & #tack()", function () {
    it("extends the array with values from another array", function () {
      var a1, a2, a3;

      a1 = [1, 2, 3];
      a2 = [4, 5, 6];
      a3 = a1.add(a2);

      expect(a3).to.be(a1);
      expect(a3).to.eql([1, 2, 3, 4, 5, 6]);

      a1.tack(7, 8, 9);

      expect(a1).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe("#remove() & #removeAt()", function () {
    it("removes an item from the array", function () {
      expect([1, 2, 3].remove(2)).to.eql([1, 3]);
      expect([1, 2, 2, 3].remove(2)).to.eql([1, 2, 3]);
      expect([1, 2, 3].remove(4)).to.eql([1, 2, 3]);
      expect([{}].remove({})).to.eql([{}]);

      expect([1, 2, 3].removeAt(1)).to.eql([1, 3]);
      expect([1, 2, 3].removeAt(1, 2)).to.eql([1]);
      expect([1, 2, 3].removeAt()).to.eql([2, 3]);
    });
  });

  describe("#insert()", function () {
    it("insert values into the array", function () {
      expect([1, 2, 3].insert(1, [1.1, 1.2])).to.eql([1, 1.1, 1.2, 2, 3]);
      expect([1, 2, 3].insert(5, [5])).to.eql([1, 2, 3, 5]);
      expect([1, 2, 3].insert(Infinity, [5])).to.eql([1, 2, 3, 5]);
    });
  });

  describe("#first() & #last()", function () {
    it("returns the first or the last item", function () {
      expect([1, 2, 3].first()).to.be(1);
      expect([1, 2, 3].last()).to.be(3);
      expect([1].first()).to.be(1);
      expect([1].last()).to.be(1);
      expect([].first()).to.be(undefined);
      expect([].last()).to.be(undefined);
    });
  });
});
