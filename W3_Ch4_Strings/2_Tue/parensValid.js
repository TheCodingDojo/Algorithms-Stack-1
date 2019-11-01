/* 
  Parens Valid

  Create a function that, given an input string str , returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. 

  Given: "Y(3(p)p(3)r)s" => true . 

  Given: "N(0(p)3" => false : not every parenthesis is closed. Given "N(0)t ) 0(k" , return false , because the underlined ")" is premature: there is nothing open for it to close.

  Given: a(b))(c => false
    - same number of opens and closes but the 2nd closing closes nothing
*/

function parensValid(str) {

	const parensStack = [];

	for (const char of str) {

		if (char === "(")
			parensStack.push(char);

		if (char === ")") {
			if (parensStack.length === 0)
				return false;
			else
				parensStack.pop();
		}
	}
	return parensStack.length === 0;
}