/* case insensitive string compare */

// naive
// doesn't have early termination when early letters are different
// which is significant if inputs are very long strings
// best case and worse case are the same since we uppercase everything first before checking
function caseInsensitiveCompareNaive(s1, s2) {
  return s1.toUpperCase() === s2.toUpperCase();
}

// best case is early termination on first different char
// worse case is finishing the loop
function caseInsensitiveCompare(s1, s2) {
  
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++)
    if (s1[i].toUpperCase() !== s2[i].toUpperCase()) return false;
  
  return true;
}