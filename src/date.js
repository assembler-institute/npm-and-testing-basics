var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
  // TODO implement
  return moment().day(); // use day method
}

function getCurrentMonth() {
  // TODO implement
  return moment().month(); // use month method
}

function getCurrentYear() {
  // TODO implement
  return moment().year(); // use year method
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
