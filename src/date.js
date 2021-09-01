var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */


/**
 * Returns today 
 *
 */
function getWeekDay() {
   return moment().day();
}


/**
 * Returns the current month
 *
 */
function getCurrentMonth() {
  return moment().month();
}


/**
 *Returns the current year
 *
 */
function getCurrentYear() {
  return moment().year();
}


//......................EXPORTS.....................\\
module.exports = {
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};
