const date = require('../src/date');
const util = require('../src/util');

// Util tests

test('creates an array of 6 elements', () => {
  expect(util.createArray(6).length).toBe(6);
});

test('gets the index of a given value', () => {
  var array = ['red', 'blue', 'green'];
  expect(util.getIndexOf(array, 'green')).toBe(2);
});

test('moves a string to camel case', () => {
  var string = 'User name';
  expect(util.toCamelCase(string)).toBe('userName');
});


// Date tests

test('gets current day', () => {
  expect(date.getCurrentDay()).toBe((new Date()).getDay());
});


test('gets current month', () => {
  expect(date.getCurrentMonth()).toBe((new Date()).getMonth());
});

test('gets current year', () => {
  expect(date.getCurrentYear()).toBe((new Date()).getFullYear());
});
