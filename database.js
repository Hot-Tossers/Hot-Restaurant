
const reservations = [];
const waitlist = [];

module.exports = {
    reservations: () => {
        return reservations
    },
    waitlist: () => {
        return waitlist
    }
};