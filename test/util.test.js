const util = require("../src/util");

// Util tests

test("creates an array of 6 elements lol", () => {
  // TODO implement
  expect(util.createArray(6).length).toBe(new Array(6).length);

});

test("gets the index of a given value", () => {
  var arrayColors = ["red", "blue", "green"];
  arrayColors.forEach(function (element, index) {
    expect(util.getIndexOf(arrayColors, element)).toBe(index);
  });
});

test("moves a string to camel case", () => {
  var string = "User name";
  // TODO implement
  var camelCase = string
    .split(" ")
    .map((element, i, arr) => {
      return i == 0
        ? element.toLowerCase()
        : element
            .toLowerCase()
            .replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
    })
    .join("");
  expect(util.toCamelCase(string)).toBe(camelCase);
});
