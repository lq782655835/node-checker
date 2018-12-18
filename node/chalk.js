const chalk = require('chalk')

console.log(chalk.blue.underline.bold.bgWhite('hello'))
console.log(chalk`{rgb(255,0,0).bold.bgRgb(255,255,255) Hello World}`);