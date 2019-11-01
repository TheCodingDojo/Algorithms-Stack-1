/* 
  Zip Arrays into Map
  
  Associative arrays are sometimes called maps because a key (string) maps to a value. 
  
  Given two arrays, create an associative array (map) containing keys from first array, and values from the second.

  Given: ["abc", 3, "yo"], [42, "wassup", true]
  return {"abc": 42, 3: "wassup", "yo": true}
 */

function zipArraysIntoMap(keys, values) {
  
  var map = {};

  for (let i = 0; i < keys.length; i++) {
    
    var key = keys[i];
    var val = values[i];

    map[key] = val;
  }
  return map;
}