const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

/**
 * Create an array 
 *
 * @param {Number} arraySize number of array elements
 */
function createArray(arraySize) {
 return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

/**
 * Convert String to camel Case
 *
 * @param {String} string phrase that would convert to camel Case
 */
function toCamelCase(string) {
  return lodash.camelCase(string);
}

/**
 * Return de index of a number in a given array
 *
 * @param {Number} array array to look for
 * @param {Number} value number to find
 */
function getIndexOf(array, value) {
  return lodash.indexOf(array,value);
}


//......................EXPORTS.....................\\
module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
