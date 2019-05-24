// test.js
const addon = require('./build/Release/addon');

addon((msg) => {
  console.log("Should be 'hello world':", msg);
// Prints: 'hello world'
});