const tables = require("./tables.js")
const reservations = [];
const waitlist = [];

module.exports = {
    reservations: () => {
        return reservations
    },
    waitlist: () => {
        return waitlist
    },
    tables: () => {
        return tables
    }
};