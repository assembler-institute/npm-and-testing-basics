const date = require("../src/date");

// Date tests

test("gets current day", () => {
  // TODO implement
  expect(date.getCurrentDay()).toBe(new Date().getDay());
});

test("gets current month", () => {
  // TODO implement
  expect(date.getCurrentDay()).toBe(new Date().getMonth());
});

test("gets current year", () => {
  // TODO implement
  expect(date.getCurrentDay()).toBe(new Date().getFullYear());
});
