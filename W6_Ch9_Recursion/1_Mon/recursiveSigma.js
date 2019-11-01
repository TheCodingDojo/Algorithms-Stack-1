/* 
  Recursive Sigma

  Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
*/

function recursiveSigma(n, sum = 0) {
  if (n < 1)
    return sum;
  return recursiveSigma(n - 1, sum + n); // if the `return` was excluded on this line
  // the inner recursiveSigma would hit the `return sum`
  // but the outer recursiveSigma would not return that returned sum
  // resulting in `undefined` being returned by the first recursiveSigma called
}

function recursiveSig(n) {
  if (n < 1) return 0;
  return n + recursiveSig(n - 1);
}