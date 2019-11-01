/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  
  Given: "what up, daddy-o?" , return "dad"
  Given: "uh... not much" , return "u"
  
  Include spaces as well
  Given: "Yikes! my favorite racecar erupted!" , return "e racecar e" .

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const isPalindrome = require("./isPalindrome")

function longestPalindromicSubstr(str) {

  let longestPalindrome = str[0];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {

      let subStr = str.slice(i, j)

      if (subStr.length > longestPalindrome.length && isPalindrome(subStr)) {
        longestPalindrome = subStr;
      }
    }
  }
  return longestPalindrome;
}

// faster
// for every character, go outwards left & right one char at a time
// until left & right chars are not equal
// this will find the longest palindrome starting from `i`
function longestPal(str) {
  let longestPal = str[0] || "";
  const isEven = str.length % 2 === 0;

  for (let i = 0; i < str.length; i++) {

    let leftIdx = i - 1, rightIdx = i + 1;
    let palSub = "";

    if (isEven) rightIdx = i;
    else palSub = str[i]; // middle char for odd length strs

    while (
      leftIdx >= 0
      && rightIdx < str.length
      && str[leftIdx] === str[rightIdx]
    ) {
      // add to our palSub before incrementing / decrementing
      // because after incr / decr letters might not match
      palSub = str[leftIdx] + palSub; // prepend left letter
      palSub += str[rightIdx]; // append right letter
      leftIdx--;
      rightIdx++;
    }

    if (palSub.length > longestPal.length)
      // avoid loop that slice does since we already loop
      // over the same letters above and build the sub str
      // imagine slicing a 1 mil char sub str that was already looped over
      // longestPal = str.slice(leftIdx + 1, rightIdx);
      longestPal = palSub;
  }
  return longestPal;
}