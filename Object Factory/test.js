// test.js
const addon = require('./build/Release/addon');

const obj1 = addon('hello');
const obj2 = addon('world');
console.log("should be 'hello world':", obj1.msg, obj2.msg);