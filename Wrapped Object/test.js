// test.js
const addon = require('./build/Release/addon');

const obj = new addon.MyObject(10);
console.log("Should be 11:", obj.plusOne());
console.log("Should be 12:", obj.plusOne());
console.log("Should be 13:", obj.plusOne());