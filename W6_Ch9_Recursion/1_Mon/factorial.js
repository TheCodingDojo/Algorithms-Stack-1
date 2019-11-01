/* 
  Recursive Factorial

  Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 . rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
*/

function factorial(n) {
  n = Math.floor(n);
  if (n <= 0) return 1;
  return n * factorial(n - 1)
}