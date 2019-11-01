/*
  Recursive Binary Search

  Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true .

  Take the middle item and compare it to the given value.
  Based on that comparison, slice your given array and send it back into the function.
*/

function rBinarySearch(arr, val) {
  
  if (!arr.length) return false;
  if (arr.length === 1) return arr[0] === val;
  
  let midIdx = Math.floor((arr.length) / 2);

  if (arr[midIdx] === val) return true;
  if (arr[midIdx] < val) return rBinarySearch(arr.slice(midIdx + 1), val);
  return rBinarySearch(arr.slice(0, midIdx), val);
}

module.exports = rBinarySearch;