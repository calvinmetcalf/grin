no-recursion-merge-sort
=========

[![Build Status](https://travis-ci.org/nolanlawson/no-recursion-merge-sort.svg)](https://travis-ci.org/nolanlawson/no-recursion-merge-sort)

Simple non-recursive implementation of merge sort. Based on [this Java implementation](http://andreinc.net/2010/12/26/bottom-up-merge-sort-non-recursive/).

Usage
----

    $ npm install no-recursion-merge-sort
    

Then in code:

```js
var sort = require('no-recursion-merge-sort');
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
