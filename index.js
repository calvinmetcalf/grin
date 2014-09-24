'use strict';

function mergeSort(array, comparator) {
  array = array.slice();
  if(array.length < 2) {
    // We consider the array already sorted, no change is done
    return array;
  }

  // default javascript sorting to mimic the native Array.prototype.sort
  comparator = comparator || function (a, b) {
    console.log('a is ' + a + ', b is ' + b);
    var aString = a.toString();
    var bString = b.toString();
    return aString < bString ? -1 : aString > bString ? 1 : 0;
  };

  // The size of the sub-arrays . Constantly changing .
  var step = 1;
  var startL, startR;

  while(step < array.length) {
    startL = 0;
    startR = step;
    while(startR + step <= array.length) {
      mergeArrays(array, startL, startL + step, startR, startR + step, comparator);
      startL = startR + step;
      startR = startL + step;
    }
    if(startR < array.length) {
      mergeArrays(array, startL, startL + step, startR, array.length - 1, comparator);
    }
    step *= 2;
  }
  console.log(JSON.stringify(array));
  return array;
}

function mergeArrays(array, startL, stopL, startR, stopR, comparator) {
  // Additional arrays needed for merging
  var right = new Array(stopR - startR + 1);
  var left = new Array(stopL - startL + 1);

  var i, k, m, n;

  // Copy the elements to the additional arrays
  for(i = 0, k = startR; i < (right.length - 1); ++i, ++k) {
    right[i] = array[k];
  }
  for(i = 0, k = startL; i < (left.length - 1); ++i, ++k) {
    left[i] = array[k];
  }

  // Adding sentinel values
  right[right.length - 1] = Number.MAX_VALUE;
  left[left.length - 1] = Number.MAX_VALUE;

  // Merging the two sorted arrays into the initial one
  for(k = startL, m = 0, n = 0; k < stopR; ++k) {
    if(comparator(left[m], right[n]) <= 0) {
      array[k] = left[m];
      m++;
    } else {
      array[k] = right[n];
      n++;
    }
  }
}

module.exports = mergeSort;