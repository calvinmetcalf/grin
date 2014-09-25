'use strict';
function defaultComparator (a, b) {
  var aString = String(a);
  var bString = String(b);
  if (aString === bString) {
    return 0;
  }
  if (aString < bString) {
    return -1;
  } else {
    return 1;
  }
}
function makeComparator(func) {
  return compare;
  function compare (a, b) {
    if (a === void 0) {
      if (b === void 0) {
        return 0;
      } else {
        return 1;
      }
    } else if (b === void 0) {
      return -1;
    }
    var result = func(a, b);
    if (result !== result) {
      return 0;
    }
    return result;
  }
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
  comparator = makeComparator(comparator || defaultComparator);
 
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
    stop = batchSize;
  }
  return array;
}

function merge(start, stop, inarray, outarray, comparator) {
  var diff = 0;
  if (stop > inarray.length) {
    diff = stop - inarray.length;
  } 
  var totallen = stop - start;
  var len = totallen/2;
  var aCursor = start;
  var bCursor = start + len;
  var aDone = len;
  var bDone = len - diff;
  var cCursor = start;
  var a, b;
  if (bDone < 1) {
    aDone += bDone;
    while (aDone) {
      outarray[aCursor] = inarray[aCursor];
      aCursor++;
      aDone--;
    }
    return;
  }
  while ((aDone + bDone) > 0) {
    a = inarray[aCursor];
    b = inarray[bCursor];
    if (!aDone) {
      outarray[cCursor++] = b;
      bCursor++;
      bDone--;
    } else if (!bDone) {
      outarray[cCursor++] = a;
      aCursor++;
      aDone--;
    } else if(comparator(a, b) <= 0) {
      outarray[cCursor++] = a;
      aCursor++;
      aDone--;
    } else {
      outarray[cCursor++] = b;
      bCursor++;
      bDone--;
    }
  }
}