/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to get digits from a number, need to convert it .toString() to access each digit via index
*/

function getDigits(n) {
  if (Number(n))
    return ("" + n).split("").map(Number);
  return n;
}

function rSumToOne(n) {
  if (!Array.isArray(n))
    n = getDigits(n);
    
  else if (n.length === 1)
    return Number(n[0]);

  return rSumToOne(getDigits(n.reduce((sum, nxt) => sum + nxt)));
}

function sumToOne(n) {

  let digits = getDigits(n);

  while (digits.length > 1) {
    // console.log(digits);
    digits = getDigits(digits.reduce((sum, nxt) => sum + nxt));
  }

  return digits[0];
}

console.log(sumToOne(12345));
console.log(rSumToOne(12345));
