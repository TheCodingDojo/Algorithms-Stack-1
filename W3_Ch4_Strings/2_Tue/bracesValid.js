/* 
  Braces Valid

  Given a sequence of parentheses, braces and brackets, determine whether it is valid. 
  Given: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . 
  Given: "D(i{a}l[ t]o)n{e" => false . 
  Given: "A(1)s[O (n]0{t) 0}k" => false .
*/

// switch is faster than non switch version by ~20-30% based on window.performance
function bracesValid(str) {

  const stack = [];
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < str.length; i++) {

    switch (str[i]) {
      case "(":
      case "{":
      case "[":
        stack.push(str[i]);
        break;
      case ")":
      case "}":
      case "]":
        if (closeToOpen[str[i]] === stack[stack.length - 1])
          stack.pop();
        else return false;
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
}

function bracesValid2(str) {

  const stack = [];
  const opens = "({[";
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < str.length; i++) {

    if (opens.includes(str[i]))
      stack.push(str[i]);

    else if (str[i] in closeToOpen) {

      if (closeToOpen[str[i]] === stack[stack.length - 1])
        stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}