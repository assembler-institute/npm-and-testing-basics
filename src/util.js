const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  // TODO implement
   return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_')); //ball_1 ball_2 ball_3
}

function toCamelCase(string) {
  // TODO implement
  return lodash.camelCase(string);
}

function getIndexOf(array, value) {
  // TODO implement
  return lodash.indexOf(array, value);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
