/* 
  recursively find the lowest common multiple between two numbers

  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."

  1, 1 => 1
  5, 10 => 10
  10, 5 => 10
  15, 20 => 60
  25, 30 => 150
*/

function rLCM(a, b, am = a, bm = b) {

  if (a % b !== 0 && b % a !== 0)
    return a * b;
  if (am === bm)
    return am;
  if (am < bm)
    return rLCM(a, b, am + a, bm);
  if (bm < am)
    return rLCM(a, b, am, bm + b);
}