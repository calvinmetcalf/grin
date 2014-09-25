grin
=========

[![Build Status](https://travis-ci.org/calvinmetcalf/grin.svg)](https://travis-ci.org/calvinmetcalf/grin)

Simple non-recursive implementation of merge sort. Originally based on [this Java implementation](http://andreinc.net/2010/12/26/bottom-up-merge-sort-non-recursive/), now mostly written by [@calvinmetcalf](https://github.com/calvinmetcalf).

Status, should work, does modify the array in place, will not work on sparse arrays exactly like native but that's ok.

Usage
----

    $ npm install grin
    

Then in code:

```js
var sort = require('grin');
var arr = [3, 2, 1, 4, 10];

// [1, 10, 2, 3, 4]
var sortedNaturally = sort(arr);

// [1, 2, 3, 4, 10]
var sortedNumerically = sort(arr, function (a, b) { return a - b; });

```

Testing
------

Unit tests:

    $ npm test
    
Coverage tests:

    $ npm run coverage
