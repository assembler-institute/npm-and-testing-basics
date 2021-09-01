var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
  // TODO implement
  let date = new Date();
  return moment(date).format("dddd");
}

function getCurrentMonth() {
  // TODO implement
  let date = new Date();
  return moment(date).format("MMMM");
}

function getCurrentYear() {
  // TODO implement
  let date = new Date();
  return moment(date).format("YYYY");
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
