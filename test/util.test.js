const util = require("../src/util");

// Util tests

test("creates an array of 6 elements lol", () => {
  expect(util.createArray(6).length).toBe(6);
});

test("gets the index of a given value", () => {
  var arrayColors = ["red", "blue", "green"];
  arrayColors.forEach((color, index) => {
    expect(util.getIndexOf(arrayColors, color)).toBe(index);
  });
});

test("moves a string to camel case", () => {
  var string = "User name";
  expect(util.toCamelCase(string)).toBe('userName');
});
