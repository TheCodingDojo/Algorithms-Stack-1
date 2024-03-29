/* 
  Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW" . Given "Live from New York, it's Saturday Night!" , return "LFNYISN" .

  Do it with .split first, then try to do it without
*/

function acronymizerWithSplit(wordsStr) {
  let acronym = "";
  const wordsArr = wordsStr.split(" ");

  for (const word of wordsArr) {
    acronym += word[0].toUpperCase();
  }

  return acronym
}

function acronymizer(wordsStr) {
  let acronym = "";
  const len = wordsStr.length;

  for (let i = 0; i < len; ++i) {
    while (wordsStr[i] === " " && i < len) {
      ++i; // skip spaces, handles multiple spaces
    }
    // upperCase it now while we are already looping
    // to avoid upperCase having to loop over our output to upperCase
    acronym += wordsStr[i].toUpperCase();

    while (wordsStr[i] !== " " && i < len) {
      ++i // skip rest of word
    }
  }
  return acronym;
}

console.log(acronymizer(" there's no free lunch - gotta pay yer way. "));