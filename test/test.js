/*jshint expr:true */
'use strict';

var chai = require('chai');
chai.use(require("chai-as-promised"));

var sort = require('../');

//
// more variables you might want
//
chai.should(); // var should = chai.should();

function tests() {

  describe('basic tests', function () {
    it('passes a smoke test', function () {
      var arr = [3, 2, 10, 12, 30, 25, 1, 4];

      sort(arr).should.deep.equal([ 1, 10, 12, 2, 25, 3, 30, 4 ]);

      sort(arr, function (a, b) { return a - b; }).should.deep.equal(
        [ 1, 2, 3, 4, 10, 12, 25, 30 ]);
    });
  });
}

tests();
