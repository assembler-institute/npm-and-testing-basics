var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay(date) {
  // TODO implement
  return moment(date).format("dddd");
}

function getCurrentMonth(date) {
  // TODO implement
  return moment(date).format("MMMM");
}

function getCurrentYear(date) {
  // TODO implement
  return moment(date).format("YYYY");
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
