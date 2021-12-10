const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

//Create to new array
function createArray(arraySize) {
  // TODO implement
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

//Convert the string a camelCase
function toCamelCase(string) {
  // TODO implement
  return lodash.camelCase(string);
}

//Return the value of index array indicated
function getIndexOf(array, value) {
  // TODO implement
  return lodash.indexOf(array, value);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
