var path = require("path");

var test = "This is a test for node";
var testUpper = test.toUpperCase()

global.console.log(testUpper);
console.log(`Upper case word is ${testUpper}`);
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
