const date = require("../src/date");
var moment = require("moment");

// Date tests

test("gets current day", () => {
  // TODO implement
  expect(date.getCurrentDay()).toBe(moment().format("dddd"));
});

test("gets current month", () => {
  // TODO implement
  expect(date.getCurrentMonth()).toBe(moment().format("MMMM"));
});

test("gets current year", () => {
  // TODO implement
  expect(date.getCurrentYear()).toBe(moment().format("YYYY"));
});
