var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

//Return the day of the week
function getWeekDay() {
  // TODO implement
  return moment().day();
}

//Return the current month
function getCurrentMonth() {
  // TODO implement
  return moment().month();
}

//Return the current year
function getCurrentYear() {
  // TODO implement
  return moment().year();
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
