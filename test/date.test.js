const date = require("../src/date");

// Date tests

test("gets current day", () => {
  // TODO implement
  //calls to getCurrentDay function, and compares to new Date getDay
  expect(date.getCurrentDay()).toBe(new Date().getDay());
});

test("gets current month", () => {
  // TODO implement
  //calls to getCurrentMonth function, and compares to new Date getMonth
  expect(date.getCurrentMonth()).toBe(new Date().getMonth())
});

test("gets current year", () => {
  // TODO implement
  //calls to getCurrentYear function, and compares to new Date getFullYear
  expect(date.getCurrentYear()).toBe(new Date().getFullYear())
});
