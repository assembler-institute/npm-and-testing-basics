const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  // TODO implement
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  // TODO implement
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function getIndexOf(array, value) {
  // TODO implement
  return array.indexOf(value);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
