const chalk = require('chalk');
const moment = require('moment');
exports.info = function (msg) {
  console.log(chalk.grey(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`), msg);
};
exports.log = function (msg) {
  console.log(chalk.greenBright(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`), msg);
};
exports.warn = function (msg) {
  console.log(
    chalk.yellowBright(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`),
    msg
  );
};
exports.error = function (msg) {
  console.log(chalk.redBright(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`), msg);
};
