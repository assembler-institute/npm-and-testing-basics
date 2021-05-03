var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
  // TODO implement
  return moment().format("dddd");
}

function getCurrentMonth() {
  // TODO implement
  return moment().format("MMMM");
}

function getCurrentYear() {
  // TODO implement
  return moment().format("YYYY");
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
