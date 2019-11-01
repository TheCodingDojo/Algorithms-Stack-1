/* 
  Recursively sum an arr of ints

  Input: [1, 2, 3]
  Output: 6
*/


function sumArr(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumArr2(arr, i + 1);
}

function sumArr2(arr, sum = 0, i = 0) {
  if (i === arr.length) return sum;
  return sumArr2(arr, sum + arr[i], i + 1);
}