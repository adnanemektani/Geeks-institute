// Import functions from date.js
const {getTimeUntilJanuaryFirst, getMinutesLived, getTimeUntilNextHoliday} = require("./date.js");

// Exercise : Display results

console.log("=== Exercise : Date # ===");
console.log(getTimeUntilJanuaryFirst());

console.log("\n=== Exercise : Date # ===");
// Hardcoded birthdate for testing
var birthdate="1990-01-15";
console.log(getMinutesLived(birthdate));

console.log("\n=== Exercise : Date # ===");
console.log(getTimeUntilNextHoliday());
