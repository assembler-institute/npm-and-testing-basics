const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  // TODO implement
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
  // TODO implement
}

function getIndexOf(array, value) {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
  // TODO implement
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
