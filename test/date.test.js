const date = require("../src/date");

// Date tests

test("gets current day", () => {
  // TODO implement
  expect(date.getCurrentDay("2021-09-01")).toBe("Wednesday");
});

test("gets current month", () => {
  // TODO implement
  expect(date.getCurrentMonth("2021-09-01")).toBe("September");
});

test("gets current year", () => {
  // TODO implement
  expect(date.getCurrentYear("2021-09-01")).toBe("2021");
});
