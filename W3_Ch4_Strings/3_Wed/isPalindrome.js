/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
    
  Given: "a x a" or "racecar" => return true
  Given: "Dud" or "oho!" => return false .
  Do not ignore spaces, punctuation and capitalization
 */

function isPalindrome(str) {
  
  for (let i = 0; i < Math.floor(str.length / 2); i++) {

    let leftChar = str[i];
    let rightChar = str[str.length - 1 - i];
    
    if (leftChar !== rightChar) {
      return false; // early exit
    }
  }
  return true;
}

module.exports = isPalindrome;