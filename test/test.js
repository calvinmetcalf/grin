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
    var arr = [3, 2, 1, 4, 10];

    sort(arr).should.deep.equal([1, 10, 2, 3, 4]);

    sort(arr, function (a, b) { return a - b; }).should.deep.equal([1, 2, 3, 4, 10]);
  });
}

tests();
