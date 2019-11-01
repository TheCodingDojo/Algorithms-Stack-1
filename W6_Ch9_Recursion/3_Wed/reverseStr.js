/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  endIndex is exclusive
*/

function revStr(str) {
  if (str === '') return '';
  const strLessFirst = str.slice(1);
  return revStr(strLessFirst) + str[0];
}

function revStr2(str, i, rev = "") {
  if (i === undefined) i = str.length - 1;
  if (i === -1) return rev;
  return revStr2(str, i - 1, rev + str[i])
}