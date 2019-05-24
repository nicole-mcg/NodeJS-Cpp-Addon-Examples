// test.js
const createObject = require('./build/Release/addon');

const obj = createObject(10);
console.log("Should be 11:", obj.plusOne());
console.log("Should be 12:", obj.plusOne());
console.log("Should be 13:", obj.plusOne());

const obj2 = createObject(20);
console.log("Should be 21:", obj2.plusOne());
console.log("Should be 22:", obj2.plusOne());
console.log("Should be 23:", obj2.plusOne());