// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams

  Given a string, return array where each element is a string representing a different anagram (a different sequence of the letters in that string). Example: if given "lim" , return ["ilm", "iml", "lim", "lmi", "mil", "mli"] . For this challenge, you can use built-in string functions such as split() .
*/

// src=Brendan Stanton
function stringAnagrams(str, solutions = [], partial = "") {

  if (!str) {
    solutions.push(partial);
  }
  
  for (let i = 0; i < str.length; i++) {
    const leftSlice = str.slice(0, i);
    const rightSlice = str.slice(i + 1); // skips current letter
    stringAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
  }
  return solutions;
}