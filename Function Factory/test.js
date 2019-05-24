// test.js
const addon = require('./build/Release/addon');

const fn = addon();
console.log("Should be 'hello world':", fn());