// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129

/* 
  Binary String Expansion

  You are given a string containing chars ‘ 0 ’, ‘ 1 ’, and ‘ ? ’. For every ‘ ? ’, either ‘ 0 ’or ‘ 1 ’ can be substituted. Write a recursive function to return array of all valid strings with ‘ ? ’ chars expanded to ‘ 0 ’or ‘ 1 ’. binStrExpand("1?0?") => ["1000","1001","1100","1101"] . If you use string functions such as slice() , use them sparingly, as they are expensive.
*/

// src=https://bitbucket.org/morleytatro/dojo-algorithms/src/master/
function binaryStringExpansion(str, solutions = [], partial = '') {
  
  const index = str.indexOf('?');

  if (index < 0) {
    solutions.push(partial + str);
  } 
  else {

    const front = str.slice(0, index);
    const back = str.slice(index + 1);
    const prefix = partial + front;
    binaryStringExpansion(back, solutions, prefix + '0');
    binaryStringExpansion(back, solutions, prefix + '1');
  }
  return solutions;
}