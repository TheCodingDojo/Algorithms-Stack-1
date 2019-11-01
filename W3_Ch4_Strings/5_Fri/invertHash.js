/* 
  Invert Hash

  Associative arrays are also called hashes (we’ll learn why later). 
  Just think of a hash as an object / dictionary for now.

  Build invertHash(hashTable) to swap hash keys to values, and values to keys. 

  Given: {"name": "Zaphod", "charm": "high", "morals": "dicey"}
  return: object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
 */

function invertObj(obj) {

  var inverted = {};

  for (var key in obj) {
    
    var value = obj[key];

    inverted[value] = key;
  }
  return inverted;
}