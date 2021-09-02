var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
    // TODO implement
    return moment(new Date()).day();
}

function getCurrentMonth() {
    // TODO implement
    return moment(new Date()).month();
}

function getCurrentYear() {
    // TODO implement
    let cows = new Date();
    return moment(cows).get("year");
}

module.exports = {
    getCurrentDay: getWeekDay,
    getCurrentMonth: getCurrentMonth,
    getCurrentYear: getCurrentYear,
};