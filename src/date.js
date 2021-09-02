var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
  
  return moment().day();
}

function getCurrentMonth() {
  
  return moment().month();
}

function getCurrentYear() {
  
  return moment().year()
}

module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
