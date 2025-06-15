const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.red.underline.inverse("false"))
const res = validator.isEmail("Vijay@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

console.log(chalk.cyanBright.inverse("Hello World"));


