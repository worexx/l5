const colors = require('colors');

const info = msg => console.log(colors.green(msg));
const warn = msg => console.log(colors.yellow(msg));
const error = msg => console.log(colors.red(msg));

module.exports = { warn, info, error }