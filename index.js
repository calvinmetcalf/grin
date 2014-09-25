'use strict';
function defaultComparator (a, b) {
  var aString = a.toString();
  var bString = b.toString();
  return aString < bString ? -1 : aString > bString ? 1 : 0;
}
module.exports = mergeSort;
function mergeSort(array, comparator) {
  array = array.slice();
  if (array.length < 2) {
    // We consider the array already sorted, no change is done
    return array;
  }

  var len = array.length;
  var otherArray = new Array(len);
  // default javascript sorting to mimic the native Array.prototype.sort
  comparator = comparator || defaultComparator;
 
  var batchSize = 2;
  var start = 0;
  var stop = batchSize;
  var temp;
  while (batchSize <= (len << 1)) {
    while (start < len) {
      merge(start, stop, array, otherArray, comparator);
      start = stop;
      stop += batchSize;
    }
    temp = otherArray;
    otherArray = array;
    array = temp;
    batchSize <<= 1;
    start = 0;
    stop = Math.min(len, batchSize);
  }
  return otherArray;
}

function merge(start, stop, inarray, outarray, comparator) {
  var totallen = stop - start;
  var len = totallen/2;
  var aCursor = start;
  var bCursor = start + len;
  var aDone = 0;
  var bDone = 0;
  var cCursor = start;
  var a, b;
  while ((aDone + bDone) < totallen) {
    a = inarray[aCursor];
    b = inarray[bCursor];
    if (aDone === len) {
      outarray[cCursor++] = b;
      bCursor++;
      bDone++;
    } else if (bDone === len) {
      outarray[cCursor++] = a;
      aCursor++;
      aDone++;
    } else if(comparator(a, b) < 0) {
      outarray[cCursor++] = a;
      aCursor++;
      aDone++;
    } else {
      outarray[cCursor++] = b;
      bCursor++;
      bDone++;
    }
  }
}