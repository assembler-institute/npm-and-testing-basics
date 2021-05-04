const lodash = require("lodash");
/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  // TODO implement
  // return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
  let arrayNumbers = lodash.range(arraySize);
  return arrayNumbers;

}

function toCamelCase(string) {
  var str1 = lodash.camelCase(string);
  return str1;
}

function getIndexOf(array, value) {
  let index = lodash.indexOf(array,value);
  return index;
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
