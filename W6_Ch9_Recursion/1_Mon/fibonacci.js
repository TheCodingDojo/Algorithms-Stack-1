// return the nth fibonacci number
// speed tests via: https://github.com/neilm813/JS_func_perf_compare

// naive recursion
function fibNaiveRecursion(n) {
  if (n < 0) return null;
  if (n < 2) return n;
  return fibNaiveRecursion(n - 1) + fibNaiveRecursion(n - 2);
}

// faster recursion
function fibRecursive(n, memoi = { 0: 0, 1: 1 }) {
  if (n < 0) return null;
  
  if (memoi[n] !== undefined) 
    return memoi[n];
    
  memoi[n] = fibRecursive(n - 1, memoi) + fibRecursive(n - 2, memoi);
  return memoi[n];
}

// faster than recursion
function fibonacci(n) {
  if (n < 0) return null;
  const seq = [0, 1];

  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 2] + seq[i - 1])
  }
  return seq[n]
}

// fastest src=https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
function fib(n) {
  if (n < 0) return null;
  var prev = 1, prev2 = 0, temp;

  while (n > 0) {
    temp = prev;
    prev = prev + prev2;
    prev2 = temp;
    n--;
    console.log('prev:', prev, 'prev2:', prev2, 'temp:', temp);
  }
  return prev2;
}

console.log(fibRecursive(5));