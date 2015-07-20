'use strict';
var
expect = require("expect.js"),
Enix = require(".."),
$foreach = Enix.$foreach;

describe("Enix", function () {
  describe(".$foreach()", function () {
    it("performs a foreach-like operation for objects and arrays", function () {
      var obj = { a: 1, b: "2", c: "three" }, res = [];

      $foreach(obj, function (val, key) {
        res.push(key);
        res.push(val);
      });

      expect(res).to.eql(["a", 1, "b", "2", "c", "three"]);

      var i = 0;
      $foreach(res, function (val, key) {
        expect(val).to.be(res[i++]);
      });

      expect(i).to.be(res.length);

      var j = 0;
      $foreach({ 0: 1, 1: 2, 2: 3, length: 3 }, function (val, key) {
        j += val;
      }, null, true);

      expect(j).to.be(6);
    });
  });
});
