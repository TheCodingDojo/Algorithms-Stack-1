/* 
  String: Reverse

  Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature" , return "erutaerc" . Tempting as it seems, do not use the built-in reverse() !
*/

function reverseString(str) {
  let reversed = "";
  
  for (let i = str.length - 1; i >= 0 ; i--) {
    reversed += str[i];
  }

  return reversed;
}

function reverseString2(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }

  return reversed;
}