var moment = require("moment");

/**
 * TODO: all getters, all get method must return a value
 * */

function getWeekDay() {
    // TODO implement
    return moment().day();
}

function getCurrentMonth() {
    // TODO implement
    return moment().month();
}

function getCurrentYear() {
    // TODO implement
    return moment().year();
}

module.exports = {
    getCurrentDay: getWeekDay,
    getCurrentMonth: getCurrentMonth,
    getCurrentYear: getCurrentYear,
};