const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  // TODO implement
  return lodash.range(6);
}

function toCamelCase(string) {
  // TODO implement
  return lodash.camelCase(string);
}

function getIndexOf(array, value) {
  // TODO implement
  return lodash.indexOf(array, value, 0);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
