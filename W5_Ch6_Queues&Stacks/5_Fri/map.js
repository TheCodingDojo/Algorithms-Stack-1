/* 
  recreate the .map method so that all arrays inherit your recreated method 
  .map returns a new array with each element replaced with the returned value from the provided callback
  do not alter the given array
  the callback should be passed the current item, index, and the array that it was called on for each iteration
  don't worry about recreating the `thisArg` functionality
*/

Array.prototype.mapp = function (callBack) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i], i, arr));
  }
  return newarr
}