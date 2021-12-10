var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
  return moment().day();
}

function getCurrentMonth() {
  // TODO implement
}

function getCurrentYear() {
  // TODO implement
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
