const util = require("../src/util");

// Util tests

test("creates an array of 6 elements lol", () => {
  // TODO implement
  expect(util.createArray(6).length).toBe(6);

  // just to let it go red :) cool! now your turn remove this line an implement it you have the clue over this.
  expect(6).toBe(6);
});

test("gets the index of a given value", () => {
  var arrayColors = ["red", "blue", "green"];
  // TODO implement
  // var index = _.indexOf(arrayColors, 'red')
  expect(util.getIndexOf(arrayColors,"blue")).toBe(1);
  // expect(index).toBe(0)
});

test("moves a string to camel case", () => {
  var string = "User name";
  // TODO implement
  // var newString = _.camelCase(string)

  expect(util.toCamelCase(string)).toBe("userName")

  // expect(string).toBe(newString)

});
