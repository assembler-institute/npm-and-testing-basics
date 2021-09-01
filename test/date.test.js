const date = require("../src/date");

// Date tests

test("gets current day", () => {
  // TODO implement
  let currentDate = "2021-09-01";
  expect(date.getCurrentDay(currentDate)).toBe("Wednesday");
});

test("gets current month", () => {
  // TODO implement
  let currentDate = "2021-09-01";
  expect(date.getCurrentMonth(currentDate)).toBe("September");
});

test("gets current year", () => {
  // TODO implement
  let currentDate = "2021-09-01";
  expect(date.getCurrentYear(currentDate)).toBe("2021");
});
